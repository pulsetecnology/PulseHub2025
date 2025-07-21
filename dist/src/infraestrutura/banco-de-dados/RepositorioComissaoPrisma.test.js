"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RepositorioComissaoPrisma_1 = require("./RepositorioComissaoPrisma");
const prismaClient_1 = __importDefault(require("./prismaClient"));
// Mock do PrismaClient para evitar conexão real com o banco de dados durante os testes
jest.mock('./prismaClient', () => ({
    comissao: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    },
}));
describe('RepositorioComissaoPrisma', () => {
    let repository;
    beforeEach(() => {
        repository = new RepositorioComissaoPrisma_1.RepositorioComissaoPrisma();
        jest.clearAllMocks();
    });
    const mockCommission = {
        id: 'comm1',
        representanteId: 'rep1',
        pedidoId: 'ped1',
        percentual: 10.0,
        valorCalculado: 100.0,
        dataEfetivacao: new Date(),
    };
    it('deve chamar create no modelo Prisma', async () => {
        prismaClient_1.default.comissao.create.mockResolvedValue(mockCommission);
        const newCommission = { representanteId: 'rep1', pedidoId: 'ped1', percentual: 10.0, valorCalculado: 100.0, dataEfetivacao: new Date() };
        const result = await repository.create(newCommission);
        expect(prismaClient_1.default.comissao.create).toHaveBeenCalledWith({ data: newCommission });
        expect(result).toEqual(mockCommission);
    });
    it('deve chamar findUnique no modelo Prisma', async () => {
        prismaClient_1.default.comissao.findUnique.mockResolvedValue(mockCommission);
        const result = await repository.findById('comm1');
        expect(prismaClient_1.default.comissao.findUnique).toHaveBeenCalledWith({ where: { id: 'comm1' } });
        expect(result).toEqual(mockCommission);
    });
    it('deve chamar findMany no modelo Prisma', async () => {
        prismaClient_1.default.comissao.findMany.mockResolvedValue([mockCommission]);
        const result = await repository.findAll();
        expect(prismaClient_1.default.comissao.findMany).toHaveBeenCalledTimes(1);
        expect(result).toEqual([mockCommission]);
    });
    it('deve chamar update no modelo Prisma', async () => {
        const updatedData = { percentual: 12.0 };
        const updatedCommission = { ...mockCommission, ...updatedData };
        prismaClient_1.default.comissao.update.mockResolvedValue(updatedCommission);
        const result = await repository.update('comm1', updatedData);
        expect(prismaClient_1.default.comissao.update).toHaveBeenCalledWith({ where: { id: 'comm1' }, data: updatedData });
        expect(result).toEqual(updatedCommission);
    });
    it('deve chamar delete no modelo Prisma', async () => {
        prismaClient_1.default.comissao.delete.mockResolvedValue(undefined);
        const result = await repository.delete('comm1');
        expect(prismaClient_1.default.comissao.delete).toHaveBeenCalledWith({ where: { id: 'comm1' } });
        expect(result).toBe(true);
    });
});
//# sourceMappingURL=RepositorioComissaoPrisma.test.js.map