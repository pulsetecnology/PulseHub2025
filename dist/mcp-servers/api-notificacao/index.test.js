"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const ServicoNotificacao_1 = require("@src/funcionalidades/notificacoes/ServicoNotificacao");
const jest_mock_extended_1 = require("jest-mock-extended");
const index_1 = __importDefault(require("./index"));
// Mock do ServicoNotificacao
jest.mock('../../../src/funcionalidades/notificacoes/ServicoNotificacao');
const mockServicoNotificacao = (0, jest_mock_extended_1.mock)();
// Mockar a instância do ServicoNotificacao para que os testes usem o mock
jest.mocked(ServicoNotificacao_1.ServicoNotificacao).mockImplementation(() => mockServicoNotificacao);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/notificacoes', index_1.default);
describe('API de Notificações', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockServicoNotificacao.enviarNotificacao.mockReset();
        mockServicoNotificacao.buscarNotificacoesPorDestinatario.mockReset();
        mockServicoNotificacao.marcarComoLida.mockReset();
    });
    const mockNotificacao = {
        id: '1',
        destinatarioId: 'user1',
        mensagem: 'Teste de notificação',
        dataEnvio: new Date(),
        lida: false,
        tipo: 'sistema',
    };
    describe('POST /notificacoes', () => {
        it('deve enviar uma nova notificação e retornar 201', async () => {
            mockServicoNotificacao.enviarNotificacao.mockResolvedValue(mockNotificacao);
            const res = await (0, supertest_1.default)(app)
                .post('/notificacoes')
                .send({
                destinatarioId: 'user1',
                mensagem: 'Teste',
                tipo: 'sistema',
            });
            expect(res.statusCode).toEqual(201);
            expect(res.body).toEqual(mockNotificacao);
            expect(mockServicoNotificacao.enviarNotificacao).toHaveBeenCalledTimes(1);
        });
        it('deve retornar 400 se o envio da notificação falhar', async () => {
            mockServicoNotificacao.enviarNotificacao.mockRejectedValue(new Error('Erro de teste'));
            const res = await (0, supertest_1.default)(app)
                .post('/notificacoes')
                .send({
                destinatarioId: 'user1',
                mensagem: 'Teste',
                tipo: 'sistema',
            });
            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty('message', 'Não foi possível enviar a notificação.');
        });
        it('deve retornar 500 para erro interno do servidor', async () => {
            mockServicoNotificacao.enviarNotificacao.mockRejectedValue(new Error('Erro de banco de dados'));
            const res = await (0, supertest_1.default)(app)
                .post('/notificacoes')
                .send({
                destinatarioId: 'user1',
                mensagem: 'Teste',
                tipo: 'sistema',
            });
            expect(res.statusCode).toEqual(500);
            expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
        });
    });
    describe('GET /notificacoes/destinatario/:id', () => {
        it('deve retornar notificações para um destinatário', async () => {
            mockServicoNotificacao.buscarNotificacoesPorDestinatario.mockResolvedValue([mockNotificacao]);
            const res = await (0, supertest_1.default)(app).get('/notificacoes/destinatario/user1');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual([mockNotificacao]);
            expect(mockServicoNotificacao.buscarNotificacoesPorDestinatario).toHaveBeenCalledWith('user1');
        });
        it('deve retornar 500 para erro interno do servidor', async () => {
            mockServicoNotificacao.buscarNotificacoesPorDestinatario.mockRejectedValue(new Error('Erro de rede'));
            const res = await (0, supertest_1.default)(app).get('/notificacoes/destinatario/user1');
            expect(res.statusCode).toEqual(500);
            expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
        });
    });
    describe('PUT /notificacoes/:id/lida', () => {
        it('deve marcar uma notificação como lida e retornar 200', async () => {
            const notificacaoLida = { ...mockNotificacao, lida: true };
            mockServicoNotificacao.marcarComoLida.mockResolvedValue(notificacaoLida);
            const res = await (0, supertest_1.default)(app).put('/notificacoes/1/lida');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual(notificacaoLida);
            expect(mockServicoNotificacao.marcarComoLida).toHaveBeenCalledWith('1');
        });
        it('deve retornar 404 se a notificação não for encontrada', async () => {
            mockServicoNotificacao.marcarComoLida.mockResolvedValue(null);
            const res = await (0, supertest_1.default)(app).put('/notificacoes/999/lida');
            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('message', 'Notificação não encontrada.');
        });
        it('deve retornar 500 para erro interno do servidor', async () => {
            mockServicoNotificacao.marcarComoLida.mockRejectedValue(new Error('Erro de banco de dados'));
            const res = await (0, supertest_1.default)(app).put('/notificacoes/1/lida');
            expect(res.statusCode).toEqual(500);
            expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
        });
    });
});
//# sourceMappingURL=index.test.js.map