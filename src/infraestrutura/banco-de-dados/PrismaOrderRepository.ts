import { BasePrismaRepository } from './BasePrismaRepository';
import { IPedido } from '../../compartilhado/tipos/IPedido';
import prisma from './prismaClient';

export class PrismaOrderRepository extends BasePrismaRepository<IPedido> {
  constructor() {
    super('order'); // 'order' é o nome do modelo no schema.prisma
  }

  async create(item: IPedido): Promise<IPedido> {
    const { itens, ...orderData } = item;
    const createdOrder = await prisma.order.create({
      data: {
        ...orderData,
        itens: {
          create: itens.map(i => ({
            produtoId: i.produto.id!,
            quantidade: i.quantidade,
            precoUnitario: i.precoUnitario,
          })),
        },
      },
      include: { itens: true },
    });
    return createdOrder as unknown as IPedido;
  }

  async update(id: string, item: Partial<IPedido>): Promise<IPedido | null> {
    const { itens, ...orderData } = item;
    const updatedOrder = await prisma.order.update({
      where: { id },
      data: {
        ...orderData,
        ...(itens && { // Atualiza itens apenas se fornecidos
          itens: {
            deleteMany: { orderId: id }, // Remove os itens existentes
            create: itens.map(i => ({
              produtoId: i.produto.id!,
              quantidade: i.quantidade,
              precoUnitario: i.precoUnitario,
            })),
          },
        }),
      },
      include: { itens: true },
    });
    return updatedOrder as unknown as IPedido;
  }

  async findById(id: string): Promise<IPedido | null> {
    const order = await prisma.order.findUnique({
      where: { id },
      include: { itens: true },
    });
    return order as unknown as IPedido;
  }

  async findAll(): Promise<IPedido[]> {
    const orders = await prisma.order.findMany({
      include: { itens: true },
    });
    return orders as unknown as IPedido[];
  }
}
