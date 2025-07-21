import { BaseRepositorioPrisma } from './BaseRepositorioPrisma';
import { IProduto } from '@src/compartilhado/tipos/IProduto';
import prisma from './prismaClient';

export class RepositorioProdutoPrisma extends BaseRepositorioPrisma<IProduto> {
  constructor() {
    super('produto'); // 'produto' é o nome do modelo no schema.prisma
  }

  async create(item: IProduto): Promise<IProduto> {
    const { variantes, ...productData } = item as any;
    const createdProduct = await prisma.produto.create({
      data: {
        ...productData,
        variantes: {
          create: variantes.map((v: any) => ({
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
    const { variantes, ...productData } = item as any;
    const updatedProduct = await prisma.produto.update({
      where: { id },
      data: {
        ...productData,
        ...(variantes && { // Atualiza variantes apenas se fornecidas
          variantes: {
            deleteMany: { productId: id }, // Remove as variantes existentes
            create: variantes.map((v: any) => ({
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
    const product = await prisma.produto.findUnique({
      where: { id },
      include: { variantes: true },
    });
    return product as unknown as IProduto;
  }

  async findAll(): Promise<IProduto[]> {
    const products = await prisma.produto.findMany({
      include: { variantes: true },
    });
    return products as unknown as IProduto[];
  }
}
