"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RepositorioClientePrisma_1 = require("./RepositorioClientePrisma");
const prismaClient_1 = __importDefault(require("./prismaClient"));
// Mock do PrismaClient para evitar conexão real com o banco de dados durante os testes
jest.mock('./prismaClient', () => ({
    cliente: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    },
}));
describe('RepositorioClientePrisma', () => {
    let repository;
    beforeEach(() => {
        repository = new RepositorioClientePrisma_1.RepositorioClientePrisma();
        jest.clearAllMocks();
    });
    const mockCliente = {
        id: 'cli1',
        nome: 'Cliente Teste',
        email: 'cliente@example.com',
        cpfCnpj: '12345678901',
    };
    it('deve chamar create no modelo Prisma', async () => {
        prismaClient_1.default.cliente.create.mockResolvedValue(mockCliente);
        const newCliente = { nome: 'Novo Cliente', email: 'novo@example.com', cpfCnpj: '11122233344' };
        const result = await repository.create(newCliente);
        expect(prismaClient_1.default.cliente.create).toHaveBeenCalledWith({ data: newCliente });
        expect(result).toEqual(mockCliente);
    });
    it('deve chamar findUnique no modelo Prisma', async () => {
        prismaClient_1.default.cliente.findUnique.mockResolvedValue(mockCliente);
        const result = await repository.findById('cli1');
        expect(prismaClient_1.default.cliente.findUnique).toHaveBeenCalledWith({ where: { id: 'cli1' } });
        expect(result).toEqual(mockCliente);
    });
    it('deve chamar findMany no modelo Prisma', async () => {
        prismaClient_1.default.cliente.findMany.mockResolvedValue([mockCliente]);
        const result = await repository.findAll();
        expect(prismaClient_1.default.cliente.findMany).toHaveBeenCalledTimes(1);
        expect(result).toEqual([mockCliente]);
    });
    it('deve chamar update no modelo Prisma', async () => {
        const updatedData = { nome: 'Cliente Atualizado' };
        const updatedCliente = { ...mockCliente, ...updatedData };
        prismaClient_1.default.cliente.update.mockResolvedValue(updatedCliente);
        const result = await repository.update('cli1', updatedData);
        expect(prismaClient_1.default.cliente.update).toHaveBeenCalledWith({ where: { id: 'cli1' }, data: updatedData });
        expect(result).toEqual(updatedCliente);
    });
    it('deve chamar delete no modelo Prisma', async () => {
        prismaClient_1.default.cliente.delete.mockResolvedValue(undefined);
        const result = await repository.delete('cli1');
        expect(prismaClient_1.default.cliente.delete).toHaveBeenCalledWith({ where: { id: 'cli1' } });
        expect(result).toBe(true);
    });
});
//# sourceMappingURL=RepositorioClientePrisma.test.js.map