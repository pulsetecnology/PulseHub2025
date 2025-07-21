"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RepositorioProdutoPrisma_1 = require("./RepositorioProdutoPrisma");
const prismaClient_1 = __importDefault(require("./prismaClient"));
// Mock do PrismaClient para evitar conexão real com o banco de dados durante os testes
jest.mock('./prismaClient', () => ({
    produto: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    },
    varianteProduto: {
        deleteMany: jest.fn(),
    },
}));
describe('RepositorioProdutoPrisma', () => {
    let repository;
    beforeEach(() => {
        repository = new RepositorioProdutoPrisma_1.RepositorioProdutoPrisma();
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
        prismaClient_1.default.produto.create.mockResolvedValue(mockProduct);
        const newProduct = {
            nome: 'Novo Produto',
            descricao: 'Descrição do novo produto',
            precoBase: 50.00,
            variantes: [
                { sku: 'NEW001', preco: 50.00, estoque: 20, atributos: { tamanho: 'M' } },
            ],
        };
        const result = await repository.create(newProduct);
        expect(prismaClient_1.default.produto.create).toHaveBeenCalledWith({
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
        prismaClient_1.default.produto.update.mockResolvedValue(updatedProductResult);
        const result = await repository.update('prod1', updatedProductData);
        expect(prismaClient_1.default.produto.update).toHaveBeenCalledWith({
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
        prismaClient_1.default.produto.findUnique.mockResolvedValue(mockProduct);
        const result = await repository.findById('prod1');
        expect(prismaClient_1.default.produto.findUnique).toHaveBeenCalledWith({ where: { id: 'prod1' }, include: { variantes: true } });
        expect(result).toEqual(mockProduct);
    });
    it('deve chamar findMany no modelo Prisma com inclusão de variantes', async () => {
        prismaClient_1.default.produto.findMany.mockResolvedValue([mockProduct]);
        const result = await repository.findAll();
        expect(prismaClient_1.default.produto.findMany).toHaveBeenCalledWith({ include: { variantes: true } });
        expect(result).toEqual([mockProduct]);
    });
    it('deve chamar delete no modelo Prisma', async () => {
        prismaClient_1.default.produto.delete.mockResolvedValue(undefined);
        const result = await repository.delete('prod1');
        expect(prismaClient_1.default.produto.delete).toHaveBeenCalledWith({ where: { id: 'prod1' } });
        expect(result).toBe(true);
    });
});
//# sourceMappingURL=RepositorioProdutoPrisma.test.js.map