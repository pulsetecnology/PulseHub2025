import { RepositorioPedidoPrisma } from './RepositorioPedidoPrisma';
import prisma from './prismaClient';

// Mock do PrismaClient para evitar conexão real com o banco de dados durante os testes
jest.mock('./prismaClient', () => ({
  pedido: {
    findUnique: jest.fn(),
    findMany: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
  itemPedido: {
    deleteMany: jest.fn(),
  },
}));

describe('RepositorioPedidoPrisma', () => {
  let repository: RepositorioPedidoPrisma;

  beforeEach(() => {
    repository = new RepositorioPedidoPrisma();
    jest.clearAllMocks();
  });

  const mockProduct = { id: 'prod1', nome: 'Produto Teste', descricao: 'Desc', precoBase: 10, variantes: [] };
  const mockOrder = {
    id: 'order1',
    clienteId: 'client1',
    dataPedido: new Date(),
    status: 'pendente',
    valorTotal: 30.00,
    itens: [
      { id: 'item1', produtoId: 'prod1', quantidade: 2, precoUnitario: 10.00, orderId: 'order1' },
    ],
  };

  it('deve chamar create no modelo Prisma com itens aninhados', async () => {
    (prisma.pedido.create as jest.Mock).mockResolvedValue(mockOrder);

    const newOrder = {
      clienteId: 'client1',
      itens: [
        { produto: mockProduct, quantidade: 2, precoUnitario: 10.00 },
      ],
      status: 'pendente',
      valorTotal: 20.00,
    };

    const result = await repository.create(newOrder as any);

    expect(prisma.pedido.create).toHaveBeenCalledWith({
      data: {
        clienteId: newOrder.clienteId,
        status: newOrder.status,
        valorTotal: newOrder.valorTotal,
        itens: {
          create: [
            { produtoId: 'prod1', quantidade: 2, precoUnitario: 10.00 },
          ],
        },
      },
      include: { itens: true },
    });
    expect(result).toEqual(mockOrder);
  });

  it('deve chamar update no modelo Prisma e atualizar itens', async () => {
    const updatedOrderData = {
      status: 'enviado',
      itens: [
        { produto: mockProduct, quantidade: 3, precoUnitario: 10.00 },
      ],
    };
    const updatedOrderResult = { ...mockOrder, ...updatedOrderData };
    (prisma.pedido.update as jest.Mock).mockResolvedValue(updatedOrderResult);

    const result = await repository.update('order1', updatedOrderData as any);

    expect(prisma.pedido.update).toHaveBeenCalledWith({
      where: { id: 'order1' },
      data: {
        status: updatedOrderData.status,
        itens: {
          deleteMany: { orderId: 'order1' },
          create: [
            { produtoId: 'prod1', quantidade: 3, precoUnitario: 10.00 },
          ],
        },
      },
      include: { itens: true },
    });
    expect(result).toEqual(updatedOrderResult);
  });

  it('deve chamar findUnique no modelo Prisma com inclusão de itens', async () => {
    (prisma.pedido.findUnique as jest.Mock).mockResolvedValue(mockOrder);
    const result = await repository.findById('order1');
    expect(prisma.pedido.findUnique).toHaveBeenCalledWith({ where: { id: 'order1' }, include: { itens: true } });
    expect(result).toEqual(mockOrder);
  });

  it('deve chamar findMany no modelo Prisma com inclusão de itens', async () => {
    (prisma.pedido.findMany as jest.Mock).mockResolvedValue([mockOrder]);
    const result = await repository.findAll();
    expect(prisma.pedido.findMany).toHaveBeenCalledWith({ include: { itens: true } });
    expect(result).toEqual([mockOrder]);
  });

  it('deve chamar delete no modelo Prisma', async () => {
    (prisma.pedido.delete as jest.Mock).mockResolvedValue(undefined);
    const result = await repository.delete('order1');
    expect(prisma.pedido.delete).toHaveBeenCalledWith({ where: { id: 'order1' } });
    expect(result).toBe(true);
  });
});
