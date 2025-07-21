"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RepositorioPedidoPrisma_1 = require("./RepositorioPedidoPrisma");
const prismaClient_1 = __importDefault(require("./prismaClient"));
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
    let repository;
    beforeEach(() => {
        repository = new RepositorioPedidoPrisma_1.RepositorioPedidoPrisma();
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
        prismaClient_1.default.pedido.create.mockResolvedValue(mockOrder);
        const newOrder = {
            clienteId: 'client1',
            itens: [
                { produto: mockProduct, quantidade: 2, precoUnitario: 10.00 },
            ],
            status: 'pendente',
            valorTotal: 20.00,
        };
        const result = await repository.create(newOrder);
        expect(prismaClient_1.default.pedido.create).toHaveBeenCalledWith({
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
        prismaClient_1.default.pedido.update.mockResolvedValue(updatedOrderResult);
        const result = await repository.update('order1', updatedOrderData);
        expect(prismaClient_1.default.pedido.update).toHaveBeenCalledWith({
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
        prismaClient_1.default.pedido.findUnique.mockResolvedValue(mockOrder);
        const result = await repository.findById('order1');
        expect(prismaClient_1.default.pedido.findUnique).toHaveBeenCalledWith({ where: { id: 'order1' }, include: { itens: true } });
        expect(result).toEqual(mockOrder);
    });
    it('deve chamar findMany no modelo Prisma com inclusão de itens', async () => {
        prismaClient_1.default.pedido.findMany.mockResolvedValue([mockOrder]);
        const result = await repository.findAll();
        expect(prismaClient_1.default.pedido.findMany).toHaveBeenCalledWith({ include: { itens: true } });
        expect(result).toEqual([mockOrder]);
    });
    it('deve chamar delete no modelo Prisma', async () => {
        prismaClient_1.default.pedido.delete.mockResolvedValue(undefined);
        const result = await repository.delete('order1');
        expect(prismaClient_1.default.pedido.delete).toHaveBeenCalledWith({ where: { id: 'order1' } });
        expect(result).toBe(true);
    });
});
//# sourceMappingURL=RepositorioPedidoPrisma.test.js.map