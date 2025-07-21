"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const ServicoCliente_1 = require("@src/funcionalidades/clientes/ServicoCliente");
const jest_mock_extended_1 = require("jest-mock-extended");
const index_1 = __importDefault(require("./index"));
// Mock do ServicoCliente
jest.mock('../../../src/funcionalidades/clientes/ServicoCliente');
const mockServicoCliente = (0, jest_mock_extended_1.mock)();
// Mockar a instância do ServicoCliente para que os testes usem o mock
jest.mocked(ServicoCliente_1.ServicoCliente).mockImplementation(() => mockServicoCliente);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/clientes', index_1.default);
describe('API de Clientes', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockServicoCliente.criarCliente.mockReset();
        mockServicoCliente.buscarTodosClientes.mockReset();
        mockServicoCliente.buscarClientePorId.mockReset();
        mockServicoCliente.atualizarCliente.mockReset();
        mockServicoCliente.deletarCliente.mockReset();
    });
    const mockCliente = {
        id: '1',
        nome: 'Cliente Teste',
        email: 'cliente@example.com',
        cpfCnpj: '12345678901',
    };
    describe('POST /clientes', () => {
        it('deve criar um novo cliente e retornar 201', async () => {
            mockServicoCliente.criarCliente.mockResolvedValue(mockCliente);
            const res = await (0, supertest_1.default)(app)
                .post('/clientes')
                .send({
                nome: 'Cliente Teste',
                email: 'cliente@example.com',
                cpfCnpj: '12345678901',
            });
            expect(res.statusCode).toEqual(201);
            expect(res.body).toEqual(mockCliente);
            expect(mockServicoCliente.criarCliente).toHaveBeenCalledTimes(1);
        });
        it('deve retornar 400 se a criação do cliente falhar', async () => {
            mockServicoCliente.criarCliente.mockRejectedValue(new Error('Erro de teste'));
            const res = await (0, supertest_1.default)(app)
                .post('/clientes')
                .send({
                nome: 'Cliente Teste',
                email: 'cliente@example.com',
                cpfCnpj: '12345678901',
            });
            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty('message', 'Não foi possível criar o cliente.');
        });
        it('deve retornar 500 para erro interno do servidor', async () => {
            mockServicoCliente.criarCliente.mockRejectedValue(new Error('Erro de banco de dados'));
            const res = await (0, supertest_1.default)(app)
                .post('/clientes')
                .send({
                nome: 'Cliente Teste',
                email: 'cliente@example.com',
                cpfCnpj: '12345678901',
            });
            expect(res.statusCode).toEqual(500);
            expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
        });
    });
    describe('GET /clientes', () => {
        it('deve retornar todos os clientes', async () => {
            mockServicoCliente.buscarTodosClientes.mockResolvedValue([mockCliente]);
            const res = await (0, supertest_1.default)(app).get('/clientes');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual([mockCliente]);
            expect(mockServicoCliente.buscarTodosClientes).toHaveBeenCalledTimes(1);
        });
        it('deve retornar 500 para erro interno do servidor', async () => {
            mockServicoCliente.buscarTodosClientes.mockRejectedValue(new Error('Erro de rede'));
            const res = await (0, supertest_1.default)(app).get('/clientes');
            expect(res.statusCode).toEqual(500);
            expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
        });
    });
    describe('GET /clientes/:id', () => {
        it('deve retornar um cliente pelo ID', async () => {
            mockServicoCliente.buscarClientePorId.mockResolvedValue(mockCliente);
            const res = await (0, supertest_1.default)(app).get('/clientes/1');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual(mockCliente);
            expect(mockServicoCliente.buscarClientePorId).toHaveBeenCalledWith('1');
        });
        it('deve retornar 404 se o cliente não for encontrado', async () => {
            mockServicoCliente.buscarClientePorId.mockResolvedValue(null);
            const res = await (0, supertest_1.default)(app).get('/clientes/999');
            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('message', 'Cliente não encontrado.');
        });
        it('deve retornar 500 para erro interno do servidor', async () => {
            mockServicoCliente.buscarClientePorId.mockRejectedValue(new Error('Erro de banco de dados'));
            const res = await (0, supertest_1.default)(app).get('/clientes/1');
            expect(res.statusCode).toEqual(500);
            expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
        });
    });
    describe('PUT /clientes/:id', () => {
        it('deve atualizar um cliente e retornar 200', async () => {
            const dadosAtualizados = { nome: 'Cliente Atualizado' };
            const clienteAtualizado = { ...mockCliente, ...dadosAtualizados };
            mockServicoCliente.atualizarCliente.mockResolvedValue(clienteAtualizado);
            const res = await (0, supertest_1.default)(app)
                .put('/clientes/1')
                .send(dadosAtualizados);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual(clienteAtualizado);
            expect(mockServicoCliente.atualizarCliente).toHaveBeenCalledWith('1', dadosAtualizados);
        });
        it('deve retornar 404 se o cliente não for encontrado para atualização', async () => {
            mockServicoCliente.atualizarCliente.mockResolvedValue(null);
            const res = await (0, supertest_1.default)(app)
                .put('/clientes/999')
                .send({ nome: 'Atualizado' });
            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('message', 'Cliente não encontrado para atualização.');
        });
        it('deve retornar 500 para erro interno do servidor', async () => {
            mockServicoCliente.atualizarCliente.mockRejectedValue(new Error('Erro de banco de dados'));
            const res = await (0, supertest_1.default)(app)
                .put('/clientes/1')
                .send({ nome: 'Atualizado' });
            expect(res.statusCode).toEqual(500);
            expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
        });
    });
    describe('DELETE /clientes/:id', () => {
        it('deve deletar um cliente e retornar 204', async () => {
            mockServicoCliente.deletarCliente.mockResolvedValue(true);
            const res = await (0, supertest_1.default)(app).delete('/clientes/1');
            expect(res.statusCode).toEqual(204);
            expect(res.body).toEqual({}); // Resposta vazia para 204 No Content
            expect(mockServicoCliente.deletarCliente).toHaveBeenCalledWith('1');
        });
        it('deve retornar 404 se o cliente não for encontrado para exclusão', async () => {
            mockServicoCliente.deletarCliente.mockResolvedValue(false);
            const res = await (0, supertest_1.default)(app).delete('/clientes/999');
            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('message', 'Cliente não encontrado para exclusão.');
        });
        it('deve retornar 500 para erro interno do servidor', async () => {
            mockServicoCliente.deletarCliente.mockRejectedValue(new Error('Erro de banco de dados'));
            const res = await (0, supertest_1.default)(app).delete('/clientes/1');
            expect(res.statusCode).toEqual(500);
            expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
        });
    });
});
//# sourceMappingURL=index.test.js.map