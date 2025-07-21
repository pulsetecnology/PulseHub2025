import { PrismaProductRepository } from './PrismaProductRepository';
import prisma from './prismaClient';

// Mock do PrismaClient para evitar conexão real com o banco de dados durante os testes
jest.mock('./prismaClient', () => ({
  product: {
    findUnique: jest.fn(),
    findMany: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
  productVariant: {
    deleteMany: jest.fn(),
  },
}));

describe('PrismaProductRepository', () => {
  let repository: PrismaProductRepository;

  beforeEach(() => {
    repository = new PrismaProductRepository();
    jest.clearAllMocks();
  });

  const mockProduct = {
    id: 'prod1',
    nome: 'Produto Teste',
    descricao: 'Descrição do produto',
    precoBase: 100.00,
    variantes: [
      { id: 'var1', sku: 'SKU001', preco: 100.00, estoque: 10, atributos: { cor: 'azul' }, productId: 'prod1' },
    ],
  };

  it('deve chamar create no modelo Prisma com variantes aninhadas', async () => {
    (prisma.product.create as jest.Mock).mockResolvedValue(mockProduct);

    const newProduct = {
      nome: 'Novo Produto',
      descricao: 'Descrição do novo produto',
      precoBase: 50.00,
      variantes: [
        { sku: 'NEW001', preco: 50.00, estoque: 20, atributos: { tamanho: 'M' } },
      ],
    };

    const result = await repository.create(newProduct as any);

    expect(prisma.product.create).toHaveBeenCalledWith({
      data: {
        nome: newProduct.nome,
        descricao: newProduct.descricao,
        precoBase: newProduct.precoBase,
        variantes: {
          create: [
            { sku: 'NEW001', preco: 50.00, estoque: 20, atributos: { tamanho: 'M' } },
          ],
        },
      },
      include: { variantes: true },
    });
    expect(result).toEqual(mockProduct);
  });

  it('deve chamar update no modelo Prisma e atualizar variantes', async () => {
    const updatedProductData = {
      nome: 'Produto Atualizado',
      variantes: [
        { sku: 'UPD001', preco: 120.00, estoque: 15, atributos: { cor: 'vermelho' } },
      ],
    };
    const updatedProductResult = { ...mockProduct, ...updatedProductData };
    (prisma.product.update as jest.Mock).mockResolvedValue(updatedProductResult);

    const result = await repository.update('prod1', updatedProductData as any);

    expect(prisma.product.update).toHaveBeenCalledWith({
      where: { id: 'prod1' },
      data: {
        nome: updatedProductData.nome,
        variantes: {
          deleteMany: { productId: 'prod1' },
          create: [
            { sku: 'UPD001', preco: 120.00, estoque: 15, atributos: { cor: 'vermelho' } },
          ],
        },
      },
      include: { variantes: true },
    });
    expect(result).toEqual(updatedProductResult);
  });

  it('deve chamar findUnique no modelo Prisma com inclusão de variantes', async () => {
    (prisma.product.findUnique as jest.Mock).mockResolvedValue(mockProduct);
    const result = await repository.findById('prod1');
    expect(prisma.product.findUnique).toHaveBeenCalledWith({ where: { id: 'prod1' }, include: { variantes: true } });
    expect(result).toEqual(mockProduct);
  });

  it('deve chamar findMany no modelo Prisma com inclusão de variantes', async () => {
    (prisma.product.findMany as jest.Mock).mockResolvedValue([mockProduct]);
    const result = await repository.findAll();
    expect(prisma.product.findMany).toHaveBeenCalledWith({ include: { variantes: true } });
    expect(result).toEqual([mockProduct]);
  });

  it('deve chamar delete no modelo Prisma', async () => {
    (prisma.product.delete as jest.Mock).mockResolvedValue(undefined);
    const result = await repository.delete('prod1');
    expect(prisma.product.delete).toHaveBeenCalledWith({ where: { id: 'prod1' } });
    expect(result).toBe(true);
  });
});
