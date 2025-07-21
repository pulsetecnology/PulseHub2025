import request from 'supertest';
import express from 'express';
import { ServicoNotificacao } from '../../../src/funcionalidades/notificacoes/ServicoNotificacao';
import { mock } from 'jest-mock-extended';
import notificacaoRouter from './index';

// Mock do ServicoNotificacao
jest.mock('../../../src/funcionalidades/notificacoes/ServicoNotificacao');

const mockServicoNotificacao = mock<ServicoNotificacao>();

// Mockar a instância do ServicoNotificacao para que os testes usem o mock
jest.mocked(ServicoNotificacao).mockImplementation(() => mockServicoNotificacao);

const app = express();
app.use(express.json());
app.use('/notificacoes', notificacaoRouter);

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

      const res = await request(app)
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
      mockServicoNotificacao.enviarNotificacao.mockResolvedValue(null);

      const res = await request(app)
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

      const res = await request(app)
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

      const res = await request(app).get('/notificacoes/destinatario/user1');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual([mockNotificacao]);
      expect(mockServicoNotificacao.buscarNotificacoesPorDestinatario).toHaveBeenCalledWith('user1');
    });

    it('deve retornar 500 para erro interno do servidor', async () => {
      mockServicoNotificacao.buscarNotificacoesPorDestinatario.mockRejectedValue(new Error('Erro de rede'));

      const res = await request(app).get('/notificacoes/destinatario/user1');

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
    });
  });

  describe('PUT /notificacoes/:id/lida', () => {
    it('deve marcar uma notificação como lida e retornar 200', async () => {
      const notificacaoLida = { ...mockNotificacao, lida: true };
      mockServicoNotificacao.marcarComoLida.mockResolvedValue(notificacaoLida);

      const res = await request(app).put('/notificacoes/1/lida');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(notificacaoLida);
      expect(mockServicoNotificacao.marcarComoLida).toHaveBeenCalledWith('1');
    });

    it('deve retornar 404 se a notificação não for encontrada', async () => {
      mockServicoNotificacao.marcarComoLida.mockResolvedValue(null);

      const res = await request(app).put('/notificacoes/999/lida');

      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty('message', 'Notificação não encontrada.');
    });

    it('deve retornar 500 para erro interno do servidor', async () => {
      mockServicoNotificacao.marcarComoLida.mockRejectedValue(new Error('Erro de banco de dados'));

      const res = await request(app).put('/notificacoes/1/lida');

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
    });
  });
});
