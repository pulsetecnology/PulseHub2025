"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const ServicoProduto_1 = require("@src/funcionalidades/produtos/ServicoProduto");
const jest_mock_extended_1 = require("jest-mock-extended");
const index_1 = __importDefault(require("./index"));
// Mock do ServicoProduto
jest.mock('../../../src/funcionalidades/produtos/ServicoProduto');
const mockServicoProduto = (0, jest_mock_extended_1.mock)();
// Mockar a instância do ServicoProduto para que os testes usem o mock
jest.mocked(ServicoProduto_1.ServicoProduto).mockImplementation(() => mockServicoProduto);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/produtos', index_1.default);
describe('API de Produtos', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockServicoProduto.criarProduto.mockReset();
        mockServicoProduto.buscarTodosProdutos.mockReset();
        mockServicoProduto.buscarProdutoPorId.mockReset();
        mockServicoProduto.atualizarProduto.mockReset();
        mockServicoProduto.deletarProduto.mockReset();
    });
    const mockProduto = {
        id: '1',
        nome: 'Produto Teste',
        descricao: 'Descrição',
        precoBase: 100,
        variantes: [],
    };
    describe('POST /produtos', () => {
        it('deve criar um novo produto e retornar 201', async () => {
            mockServicoProduto.criarProduto.mockResolvedValue(mockProduto);
            const res = await (0, supertest_1.default)(app)
                .post('/produtos')
                .send({
                nome: 'Produto Teste',
                descricao: 'Descrição',
                precoBase: 100,
                variantes: [],
            });
            expect(res.statusCode).toEqual(201);
            expect(res.body).toEqual(mockProduto);
            expect(mockServicoProduto.criarProduto).toHaveBeenCalledTimes(1);
        });
        it('deve retornar 400 se a criação do produto falhar', async () => {
            mockServicoProduto.criarProduto.mockRejectedValue(new Error('Erro de teste'));
            const res = await (0, supertest_1.default)(app)
                .post('/produtos')
                .send({
                nome: 'Produto Teste',
                descricao: 'Descrição',
                precoBase: 100,
                variantes: [],
            });
            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty('message', 'Não foi possível criar o produto.');
        });
        it('deve retornar 500 para erro interno do servidor', async () => {
            mockServicoProduto.criarProduto.mockRejectedValue(new Error('Erro de banco de dados'));
            const res = await (0, supertest_1.default)(app)
                .post('/produtos')
                .send({
                nome: 'Produto Teste',
                descricao: 'Descrição',
                precoBase: 100,
                variantes: [],
            });
            expect(res.statusCode).toEqual(500);
            expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
        });
    });
    describe('GET /produtos', () => {
        it('deve retornar todos os produtos', async () => {
            mockServicoProduto.buscarTodosProdutos.mockResolvedValue([mockProduto]);
            const res = await (0, supertest_1.default)(app).get('/produtos');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual([mockProduto]);
            expect(mockServicoProduto.buscarTodosProdutos).toHaveBeenCalledTimes(1);
        });
        it('deve retornar 500 para erro interno do servidor', async () => {
            mockServicoProduto.buscarTodosProdutos.mockRejectedValue(new Error('Erro de rede'));
            const res = await (0, supertest_1.default)(app).get('/produtos');
            expect(res.statusCode).toEqual(500);
            expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
        });
    });
    describe('GET /produtos/:id', () => {
        it('deve retornar um produto pelo ID', async () => {
            mockServicoProduto.buscarProdutoPorId.mockResolvedValue(mockProduto);
            const res = await (0, supertest_1.default)(app).get('/produtos/1');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual(mockProduto);
            expect(mockServicoProduto.buscarProdutoPorId).toHaveBeenCalledWith('1');
        });
        it('deve retornar 404 se o produto não for encontrado', async () => {
            mockServicoProduto.buscarProdutoPorId.mockResolvedValue(null);
            const res = await (0, supertest_1.default)(app).get('/produtos/999');
            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('message', 'Produto não encontrado.');
        });
        it('deve retornar 500 para erro interno do servidor', async () => {
            mockServicoProduto.buscarProdutoPorId.mockRejectedValue(new Error('Erro de banco de dados'));
            const res = await (0, supertest_1.default)(app).get('/produtos/1');
            expect(res.statusCode).toEqual(500);
            expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
        });
    });
    describe('PUT /produtos/:id', () => {
        it('deve atualizar um produto e retornar 200', async () => {
            const dadosAtualizados = { nome: 'Produto Atualizado' };
            const produtoAtualizado = { ...mockProduto, ...dadosAtualizados };
            mockServicoProduto.atualizarProduto.mockResolvedValue(produtoAtualizado);
            const res = await (0, supertest_1.default)(app)
                .put('/produtos/1')
                .send(dadosAtualizados);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual(produtoAtualizado);
            expect(mockServicoProduto.atualizarProduto).toHaveBeenCalledWith('1', dadosAtualizados);
        });
        it('deve retornar 404 se o produto não for encontrado para atualização', async () => {
            mockServicoProduto.atualizarProduto.mockResolvedValue(null);
            const res = await (0, supertest_1.default)(app)
                .put('/produtos/999')
                .send({ nome: 'Atualizado' });
            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('message', 'Produto não encontrado para atualização.');
        });
        it('deve retornar 500 para erro interno do servidor', async () => {
            mockServicoProduto.atualizarProduto.mockRejectedValue(new Error('Erro de banco de dados'));
            const res = await (0, supertest_1.default)(app)
                .put('/produtos/1')
                .send({ nome: 'Atualizado' });
            expect(res.statusCode).toEqual(500);
            expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
        });
    });
    describe('DELETE /produtos/:id', () => {
        it('deve deletar um produto e retornar 204', async () => {
            mockServicoProduto.deletarProduto.mockResolvedValue(true);
            const res = await (0, supertest_1.default)(app).delete('/produtos/1');
            expect(res.statusCode).toEqual(204);
            expect(res.body).toEqual({}); // Resposta vazia para 204 No Content
            expect(mockServicoProduto.deletarProduto).toHaveBeenCalledWith('1');
        });
        it('deve retornar 404 se o produto não for encontrado para exclusão', async () => {
            mockServicoProduto.deletarProduto.mockResolvedValue(false);
            const res = await (0, supertest_1.default)(app).delete('/produtos/999');
            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('message', 'Produto não encontrado para exclusão.');
        });
        it('deve retornar 500 para erro interno do servidor', async () => {
            mockServicoProduto.deletarProduto.mockRejectedValue(new Error('Erro de banco de dados'));
            const res = await (0, supertest_1.default)(app).delete('/produtos/1');
            expect(res.statusCode).toEqual(500);
            expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
        });
    });
});
//# sourceMappingURL=index.test.js.map