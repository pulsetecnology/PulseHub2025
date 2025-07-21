"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRepositorioPrisma_1 = require("./BaseRepositorioPrisma");
const prismaClient_1 = __importDefault(require("./prismaClient"));
// Mock do PrismaClient para evitar conexão real com o banco de dados durante os testes
jest.mock('./prismaClient', () => ({
    usuario: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    },
    // Adicione outros modelos conforme necessário
}));
class TestRepository extends BaseRepositorioPrisma_1.BaseRepositorioPrisma {
    constructor() {
        super('usuario'); // Usamos 'usuario' como um modelo de exemplo para o mock
    }
}
describe('BaseRepositorioPrisma', () => {
    let repository;
    beforeEach(() => {
        repository = new TestRepository();
        // Limpa os mocks antes de cada teste
        jest.clearAllMocks();
    });
    it('deve chamar findUnique ao buscar por ID', async () => {
        prismaClient_1.default.usuario.findUnique.mockResolvedValue({ id: '1', name: 'Test User' });
        const result = await repository.findById('1');
        expect(prismaClient_1.default.usuario.findUnique).toHaveBeenCalledWith({ where: { id: '1' } });
        expect(result).toEqual({ id: '1', name: 'Test User' });
    });
    it('deve chamar findMany ao buscar todos', async () => {
        prismaClient_1.default.usuario.findMany.mockResolvedValue([{ id: '1', name: 'Test User' }]);
        const result = await repository.findAll();
        expect(prismaClient_1.default.usuario.findMany).toHaveBeenCalledTimes(1);
        expect(result).toEqual([{ id: '1', name: 'Test User' }]);
    });
    it('deve chamar create ao criar um item', async () => {
        const newItem = { name: 'New User' };
        prismaClient_1.default.usuario.create.mockResolvedValue({ id: '2', ...newItem });
        const result = await repository.create(newItem);
        expect(prismaClient_1.default.usuario.create).toHaveBeenCalledWith({ data: newItem });
        expect(result).toEqual({ id: '2', ...newItem });
    });
    it('deve chamar update ao atualizar um item', async () => {
        const updatedItem = { name: 'Updated User' };
        prismaClient_1.default.usuario.update.mockResolvedValue({ id: '1', ...updatedItem });
        const result = await repository.update('1', updatedItem);
        expect(prismaClient_1.default.usuario.update).toHaveBeenCalledWith({ where: { id: '1' }, data: updatedItem });
        expect(result).toEqual({ id: '1', ...updatedItem });
    });
    it('deve chamar delete ao deletar um item', async () => {
        prismaClient_1.default.usuario.delete.mockResolvedValue(undefined);
        const result = await repository.delete('1');
        expect(prismaClient_1.default.usuario.delete).toHaveBeenCalledWith({ where: { id: '1' } });
        expect(result).toBe(true);
    });
    it('deve retornar false se a exclusão falhar', async () => {
        prismaClient_1.default.usuario.delete.mockRejectedValue(new Error('Erro de exclusão'));
        const result = await repository.delete('1');
        expect(result).toBe(false);
    });
});
//# sourceMappingURL=BaseRepositorioPrisma.test.js.map