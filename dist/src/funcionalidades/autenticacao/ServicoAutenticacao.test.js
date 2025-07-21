"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicoAutenticacao_1 = require("./ServicoAutenticacao");
const RepositorioUsuarioPrisma_1 = require("@src/infraestrutura/banco-de-dados/RepositorioUsuarioPrisma");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Mock do RepositorioUsuarioPrisma
jest.mock('../../infraestrutura/banco-de-dados/RepositorioUsuarioPrisma');
// Mock do bcrypt
jest.mock('bcryptjs', () => ({
    hash: jest.fn((password) => Promise.resolve(`hashed_${password}`)),
    compare: jest.fn((password, hash) => Promise.resolve(hash === `hashed_${password}`)),
}));
// Mock do jsonwebtoken
jest.mock('jsonwebtoken', () => ({
    sign: jest.fn(() => 'mocked_jwt_token'),
}));
describe('ServicoAutenticacao', () => {
    let servicoAutenticacao;
    let mockRepositorioUsuario;
    beforeEach(() => {
        servicoAutenticacao = new ServicoAutenticacao_1.ServicoAutenticacao();
        mockRepositorioUsuario = new RepositorioUsuarioPrisma_1.RepositorioUsuarioPrisma();
        jest.clearAllMocks();
        // Configura variáveis de ambiente para os testes
        process.env.JWT_SECRET = 'test_secret';
        process.env.JWT_EXPIRES_IN = '1h';
    });
    afterEach(() => {
        // Limpa variáveis de ambiente após os testes
        delete process.env.JWT_SECRET;
        delete process.env.JWT_EXPIRES_IN;
    });
    describe('registrar', () => {
        it('deve registrar um novo usuário com sucesso', async () => {
            mockRepositorioUsuario.findByEmail.mockResolvedValue(null);
            mockRepositorioUsuario.create.mockResolvedValue({ id: '1', nome: 'Teste', email: 'teste@example.com', senha: 'hashed_senha123' });
            const usuario = { nome: 'Teste', email: 'teste@example.com', senha: 'senha123' };
            const resultado = await servicoAutenticacao.registrar(usuario);
            expect(mockRepositorioUsuario.findByEmail).toHaveBeenCalledWith(usuario.email);
            expect(bcryptjs_1.default.hash).toHaveBeenCalledWith(usuario.senha, 10);
            expect(mockRepositorioUsuario.create).toHaveBeenCalledWith({ ...usuario, senha: 'hashed_senha123' });
            expect(resultado).toEqual({ id: '1', nome: 'Teste', email: 'teste@example.com', senha: 'hashed_senha123' });
        });
        it('não deve registrar um usuário se o e-mail já existe', async () => {
            mockRepositorioUsuario.findByEmail.mockResolvedValue({ id: '1', nome: 'Existente', email: 'teste@example.com', senha: 'hashed_senhaExistente' });
            const usuario = { nome: 'Teste', email: 'teste@example.com', senha: 'senha123' };
            const resultado = await servicoAutenticacao.registrar(usuario);
            expect(mockRepositorioUsuario.findByEmail).toHaveBeenCalledWith(usuario.email);
            expect(mockRepositorioUsuario.create).not.toHaveBeenCalled();
            expect(resultado).toBeNull();
        });
    });
    describe('autenticar', () => {
        it('deve autenticar um usuário com sucesso e retornar um token', async () => {
            const usuarioExistente = { id: '1', nome: 'Teste', email: 'teste@example.com', senha: 'hashed_senha123' };
            mockRepositorioUsuario.findByEmail.mockResolvedValue(usuarioExistente);
            const resultado = await servicoAutenticacao.autenticar('teste@example.com', 'senha123');
            expect(mockRepositorioUsuario.findByEmail).toHaveBeenCalledWith('teste@example.com');
            expect(bcryptjs_1.default.compare).toHaveBeenCalledWith('senha123', 'hashed_senha123');
            expect(jsonwebtoken_1.default.sign).toHaveBeenCalledWith({ id: usuarioExistente.id, email: usuarioExistente.email }, 'test_secret', { expiresIn: '1h' });
            expect(resultado).toBe('mocked_jwt_token');
        });
        it('não deve autenticar se o usuário não for encontrado', async () => {
            mockRepositorioUsuario.findByEmail.mockResolvedValue(null);
            const resultado = await servicoAutenticacao.autenticar('naoexiste@example.com', 'senha123');
            expect(mockRepositorioUsuario.findByEmail).toHaveBeenCalledWith('naoexiste@example.com');
            expect(bcryptjs_1.default.compare).not.toHaveBeenCalled();
            expect(jsonwebtoken_1.default.sign).not.toHaveBeenCalled();
            expect(resultado).toBeNull();
        });
        it('não deve autenticar se a senha for inválida', async () => {
            const usuarioExistente = { id: '1', nome: 'Teste', email: 'teste@example.com', senha: 'hashed_senhaCorreta' };
            mockRepositorioUsuario.findByEmail.mockResolvedValue(usuarioExistente);
            bcryptjs_1.default.compare.mockResolvedValue(false);
            const resultado = await servicoAutenticacao.autenticar('teste@example.com', 'senhaInvalida');
            expect(mockRepositorioUsuario.findByEmail).toHaveBeenCalledWith('teste@example.com');
            expect(bcryptjs_1.default.compare).toHaveBeenCalledWith('senhaInvalida', 'hashed_senhaCorreta');
            expect(jsonwebtoken_1.default.sign).not.toHaveBeenCalled();
            expect(resultado).toBeNull();
        });
    });
});
//# sourceMappingURL=ServicoAutenticacao.test.js.map