import { BasePrismaRepository } from './BasePrismaRepository';
import { IProduto } from '../../compartilhado/tipos/IProduto';
import prisma from './prismaClient';

export class PrismaProductRepository extends BasePrismaRepository<IProduto> {
  constructor() {
    super('product'); // 'product' é o nome do modelo no schema.prisma
  }

  async create(item: IProduto): Promise<IProduto> {
    const { variantes, ...productData } = item;
    const createdProduct = await prisma.product.create({
      data: {
        ...productData,
        variantes: {
          create: variantes.map(v => ({
            sku: v.sku,
            preco: v.preco,
            estoque: v.estoque,
            atributos: v.atributos,
          })),
        },
      },
      include: { variantes: true },
    });
    return createdProduct as unknown as IProduto;
  }

  async update(id: string, item: Partial<IProduto>): Promise<IProduto | null> {
    const { variantes, ...productData } = item;
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        ...productData,
        ...(variantes && { // Atualiza variantes apenas se fornecidas
          variantes: {
            deleteMany: { productId: id }, // Remove as variantes existentes
            create: variantes.map(v => ({
              sku: v.sku,
              preco: v.preco,
              estoque: v.estoque,
              atributos: v.atributos,
            })),
          },
        }),
      },
      include: { variantes: true },
    });
    return updatedProduct as unknown as IProduto;
  }

  async findById(id: string): Promise<IProduto | null> {
    const product = await prisma.product.findUnique({
      where: { id },
      include: { variantes: true },
    });
    return product as unknown as IProduto;
  }

  async findAll(): Promise<IProduto[]> {
    const products = await prisma.product.findMany({
      include: { variantes: true },
    });
    return products as unknown as IProduto[];
  }
}
