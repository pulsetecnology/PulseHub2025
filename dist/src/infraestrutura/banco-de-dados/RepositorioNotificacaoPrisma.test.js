"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RepositorioNotificacaoPrisma_1 = require("./RepositorioNotificacaoPrisma");
const prismaClient_1 = __importDefault(require("./prismaClient"));
// Mock do PrismaClient para evitar conexão real com o banco de dados durante os testes
jest.mock('./prismaClient', () => ({
    notificacao: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    },
}));
describe('RepositorioNotificacaoPrisma', () => {
    let repository;
    beforeEach(() => {
        repository = new RepositorioNotificacaoPrisma_1.RepositorioNotificacaoPrisma();
        jest.clearAllMocks();
    });
    const mockNotificacao = {
        id: 'notif1',
        destinatarioId: 'user1',
        mensagem: 'Sua encomenda chegou!',
        dataEnvio: new Date(),
        lida: false,
        tipo: 'entrega',
    };
    it('deve chamar create no modelo Prisma', async () => {
        prismaClient_1.default.notificacao.create.mockResolvedValue(mockNotificacao);
        const newNotificacao = { destinatarioId: 'user2', mensagem: 'Nova mensagem', tipo: 'chat' };
        const result = await repository.create(newNotificacao);
        expect(prismaClient_1.default.notificacao.create).toHaveBeenCalledWith({ data: newNotificacao });
        expect(result).toEqual(mockNotificacao);
    });
    it('deve chamar findUnique no modelo Prisma', async () => {
        prismaClient_1.default.notificacao.findUnique.mockResolvedValue(mockNotificacao);
        const result = await repository.findById('notif1');
        expect(prismaClient_1.default.notificacao.findUnique).toHaveBeenCalledWith({ where: { id: 'notif1' } });
        expect(result).toEqual(mockNotificacao);
    });
    it('deve chamar findMany no modelo Prisma', async () => {
        prismaClient_1.default.notificacao.findMany.mockResolvedValue([mockNotificacao]);
        const result = await repository.findAll();
        expect(prismaClient_1.default.notificacao.findMany).toHaveBeenCalledTimes(1);
        expect(result).toEqual([mockNotificacao]);
    });
    it('deve chamar update no modelo Prisma', async () => {
        const updatedData = { lida: true };
        const updatedNotificacao = { ...mockNotificacao, ...updatedData };
        prismaClient_1.default.notificacao.update.mockResolvedValue(updatedNotificacao);
        const result = await repository.update('notif1', updatedData);
        expect(prismaClient_1.default.notificacao.update).toHaveBeenCalledWith({ where: { id: 'notif1' }, data: updatedData });
        expect(result).toEqual(updatedNotificacao);
    });
    it('deve chamar delete no modelo Prisma', async () => {
        prismaClient_1.default.notificacao.delete.mockResolvedValue(undefined);
        const result = await repository.delete('notif1');
        expect(prismaClient_1.default.notificacao.delete).toHaveBeenCalledWith({ where: { id: 'notif1' } });
        expect(result).toBe(true);
    });
});
//# sourceMappingURL=RepositorioNotificacaoPrisma.test.js.map