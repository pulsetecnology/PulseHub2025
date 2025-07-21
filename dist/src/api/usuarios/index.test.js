"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const ServicoUsuario_1 = require("@src/funcionalidades/usuarios/ServicoUsuario");
const jest_mock_extended_1 = require("jest-mock-extended");
const index_1 = __importDefault(require("./index"));
// Mock do ServicoUsuario
jest.mock('../../../src/funcionalidades/usuarios/ServicoUsuario');
const mockServicoUsuario = (0, jest_mock_extended_1.mock)();
// Mockar a instância do ServicoUsuario para que os testes usem o mock
jest.mocked(ServicoUsuario_1.ServicoUsuario).mockImplementation(() => mockServicoUsuario);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/usuarios', index_1.default);
describe('API de Usuários', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockServicoUsuario.criarUsuario.mockReset();
        mockServicoUsuario.buscarTodosUsuarios.mockReset();
        mockServicoUsuario.buscarUsuarioPorId.mockReset();
        mockServicoUsuario.atualizarUsuario.mockReset();
        mockServicoUsuario.deletarUsuario.mockReset();
    });
    const mockUsuario = {
        id: '1',
        nome: 'Teste',
        email: 'teste@example.com',
        senha: 'hashed_senha',
    };
    describe('POST /usuarios', () => {
        it('deve criar um novo usuário e retornar 201', async () => {
            mockServicoUsuario.criarUsuario.mockResolvedValue(mockUsuario);
            const res = await (0, supertest_1.default)(app)
                .post('/usuarios')
                .send({
                nome: 'Teste',
                email: 'teste@example.com',
                senha: 'senha123',
            });
            expect(res.statusCode).toEqual(201);
            expect(res.body).toEqual(mockUsuario);
            expect(mockServicoUsuario.criarUsuario).toHaveBeenCalledTimes(1);
        });
        it('deve retornar 400 se a criação do usuário falhar', async () => {
            mockServicoUsuario.criarUsuario.mockResolvedValue(null);
            const res = await (0, supertest_1.default)(app)
                .post('/usuarios')
                .send({
                nome: 'Teste',
                email: 'teste@example.com',
                senha: 'senha123',
            });
            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty('message', 'Não foi possível criar o usuário.');
        });
        it('deve retornar 500 para erro interno do servidor', async () => {
            mockServicoUsuario.criarUsuario.mockRejectedValue(new Error('Erro de banco de dados'));
            const res = await (0, supertest_1.default)(app)
                .post('/usuarios')
                .send({
                nome: 'Teste',
                email: 'teste@example.com',
                senha: 'senha123',
            });
            expect(res.statusCode).toEqual(500);
            expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
        });
    });
    describe('GET /usuarios', () => {
        it('deve retornar todos os usuários', async () => {
            mockServicoUsuario.buscarTodosUsuarios.mockResolvedValue([mockUsuario]);
            const res = await (0, supertest_1.default)(app).get('/usuarios');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual([mockUsuario]);
            expect(mockServicoUsuario.buscarTodosUsuarios).toHaveBeenCalledTimes(1);
        });
        it('deve retornar 500 para erro interno do servidor', async () => {
            mockServicoUsuario.buscarTodosUsuarios.mockRejectedValue(new Error('Erro de rede'));
            const res = await (0, supertest_1.default)(app).get('/usuarios');
            expect(res.statusCode).toEqual(500);
            expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
        });
    });
    describe('GET /usuarios/:id', () => {
        it('deve retornar um usuário pelo ID', async () => {
            mockServicoUsuario.buscarUsuarioPorId.mockResolvedValue(mockUsuario);
            const res = await (0, supertest_1.default)(app).get('/usuarios/1');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual(mockUsuario);
            expect(mockServicoUsuario.buscarUsuarioPorId).toHaveBeenCalledWith('1');
        });
        it('deve retornar 404 se o usuário não for encontrado', async () => {
            mockServicoUsuario.buscarUsuarioPorId.mockResolvedValue(null);
            const res = await (0, supertest_1.default)(app).get('/usuarios/999');
            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('message', 'Usuário não encontrado.');
        });
        it('deve retornar 500 para erro interno do servidor', async () => {
            mockServicoUsuario.buscarUsuarioPorId.mockRejectedValue(new Error('Erro de banco de dados'));
            const res = await (0, supertest_1.default)(app).get('/usuarios/1');
            expect(res.statusCode).toEqual(500);
            expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
        });
    });
    describe('PUT /usuarios/:id', () => {
        it('deve atualizar um usuário e retornar 200', async () => {
            const dadosAtualizados = { nome: 'Atualizado' };
            const usuarioAtualizado = { ...mockUsuario, ...dadosAtualizados };
            mockServicoUsuario.atualizarUsuario.mockResolvedValue(usuarioAtualizado);
            const res = await (0, supertest_1.default)(app)
                .put('/usuarios/1')
                .send(dadosAtualizados);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual(usuarioAtualizado);
            expect(mockServicoUsuario.atualizarUsuario).toHaveBeenCalledWith('1', dadosAtualizados);
        });
        it('deve retornar 404 se o usuário não for encontrado para atualização', async () => {
            mockServicoUsuario.atualizarUsuario.mockResolvedValue(null);
            const res = await (0, supertest_1.default)(app)
                .put('/usuarios/999')
                .send({ nome: 'Atualizado' });
            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('message', 'Usuário não encontrado para atualização.');
        });
        it('deve retornar 500 para erro interno do servidor', async () => {
            mockServicoUsuario.atualizarUsuario.mockRejectedValue(new Error('Erro de banco de dados'));
            const res = await (0, supertest_1.default)(app)
                .put('/usuarios/1')
                .send({ nome: 'Atualizado' });
            expect(res.statusCode).toEqual(500);
            expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
        });
    });
    describe('DELETE /usuarios/:id', () => {
        it('deve deletar um usuário e retornar 204', async () => {
            mockServicoUsuario.deletarUsuario.mockResolvedValue(true);
            const res = await (0, supertest_1.default)(app).delete('/usuarios/1');
            expect(res.statusCode).toEqual(204);
            expect(res.body).toEqual({}); // Resposta vazia para 204 No Content
            expect(mockServicoUsuario.deletarUsuario).toHaveBeenCalledWith('1');
        });
        it('deve retornar 404 se o usuário não for encontrado para exclusão', async () => {
            mockServicoUsuario.deletarUsuario.mockResolvedValue(false);
            const res = await (0, supertest_1.default)(app).delete('/usuarios/999');
            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('message', 'Usuário não encontrado para exclusão.');
        });
        it('deve retornar 500 para erro interno do servidor', async () => {
            mockServicoUsuario.deletarUsuario.mockRejectedValue(new Error('Erro de banco de dados'));
            const res = await (0, supertest_1.default)(app).delete('/usuarios/1');
            expect(res.statusCode).toEqual(500);
            expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
        });
    });
});
//# sourceMappingURL=index.test.js.map