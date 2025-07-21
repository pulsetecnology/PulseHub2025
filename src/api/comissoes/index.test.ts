import request from 'supertest';
import express from 'express';
import { ServicoComissao } from '../../../src/funcionalidades/comissoes/ServicoComissao';
import { mock } from 'jest-mock-extended';
import comissaoRouter from './index';

// Mock do ServicoComissao
jest.mock('../../../src/funcionalidades/comissoes/ServicoComissao');

const mockServicoComissao = mock<ServicoComissao>();

// Mockar a instância do ServicoComissao para que os testes usem o mock
jest.mocked(ServicoComissao).mockImplementation(() => mockServicoComissao);

const app = express();
app.use(express.json());
app.use('/comissoes', comissaoRouter);

describe('API de Comissões', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockServicoComissao.criarComissao.mockReset();
    mockServicoComissao.buscarTodasComissoes.mockReset();
    mockServicoComissao.buscarComissaoPorId.mockReset();
    mockServicoComissao.atualizarComissao.mockReset();
    mockServicoComissao.deletarComissao.mockReset();
  });

  const mockComissao = {
    id: '1',
    representanteId: 'rep1',
    pedidoId: 'ped1',
    percentual: 10,
    valorCalculado: 100,
    dataEfetivacao: new Date(),
  };

  describe('POST /comissoes', () => {
    it('deve criar uma nova comissão e retornar 201', async () => {
      mockServicoComissao.criarComissao.mockResolvedValue(mockComissao);

      const res = await request(app)
        .post('/comissoes')
        .send({
          representanteId: 'rep1',
          pedidoId: 'ped1',
          percentual: 10,
          valorCalculado: 100,
          dataEfetivacao: new Date().toISOString(),
        });

      expect(res.statusCode).toEqual(201);
      expect(res.body).toEqual(mockComissao);
      expect(mockServicoComissao.criarComissao).toHaveBeenCalledTimes(1);
    });

    it('deve retornar 400 se a criação da comissão falhar', async () => {
      mockServicoComissao.criarComissao.mockResolvedValue(null);

      const res = await request(app)
        .post('/comissoes')
        .send({
          representanteId: 'rep1',
          pedidoId: 'ped1',
          percentual: 10,
          valorCalculado: 100,
          dataEfetivacao: new Date().toISOString(),
        });

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('message', 'Não foi possível criar a comissão.');
    });

    it('deve retornar 500 para erro interno do servidor', async () => {
      mockServicoComissao.criarComissao.mockRejectedValue(new Error('Erro de banco de dados'));

      const res = await request(app)
        .post('/comissoes')
        .send({
          representanteId: 'rep1',
          pedidoId: 'ped1',
          percentual: 10,
          valorCalculado: 100,
          dataEfetivacao: new Date().toISOString(),
        });

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
    });
  });

  describe('GET /comissoes', () => {
    it('deve retornar todas as comissões', async () => {
      mockServicoComissao.buscarTodasComissoes.mockResolvedValue([mockComissao]);

      const res = await request(app).get('/comissoes');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual([mockComissao]);
      expect(mockServicoComissao.buscarTodasComissoes).toHaveBeenCalledTimes(1);
    });

    it('deve retornar 500 para erro interno do servidor', async () => {
      mockServicoComissao.buscarTodasComissoes.mockRejectedValue(new Error('Erro de rede'));

      const res = await request(app).get('/comissoes');

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
    });
  });

  describe('GET /comissoes/:id', () => {
    it('deve retornar uma comissão pelo ID', async () => {
      mockServicoComissao.buscarComissaoPorId.mockResolvedValue(mockComissao);

      const res = await request(app).get('/comissoes/1');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(mockComissao);
      expect(mockServicoComissao.buscarComissaoPorId).toHaveBeenCalledWith('1');
    });

    it('deve retornar 404 se a comissão não for encontrada', async () => {
      mockServicoComissao.buscarComissaoPorId.mockResolvedValue(null);

      const res = await request(app).get('/comissoes/999');

      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty('message', 'Comissão não encontrada.');
    });

    it('deve retornar 500 para erro interno do servidor', async () => {
      mockServicoComissao.buscarComissaoPorId.mockRejectedValue(new Error('Erro de banco de dados'));

      const res = await request(app).get('/comissoes/1');

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
    });
  });

  describe('PUT /comissoes/:id', () => {
    it('deve atualizar uma comissão e retornar 200', async () => {
      const dadosAtualizados = { percentual: 12 };
      const comissaoAtualizada = { ...mockComissao, ...dadosAtualizados };
      mockServicoComissao.atualizarComissao.mockResolvedValue(comissaoAtualizada);

      const res = await request(app)
        .put('/comissoes/1')
        .send(dadosAtualizados);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(comissaoAtualizada);
      expect(mockServicoComissao.atualizarComissao).toHaveBeenCalledWith('1', dadosAtualizados);
    });

    it('deve retornar 404 se a comissão não for encontrada para atualização', async () => {
      mockServicoComissao.atualizarComissao.mockResolvedValue(null);

      const res = await request(app)
        .put('/comissoes/999')
        .send({ percentual: 12 });

      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty('message', 'Comissão não encontrada para atualização.');
    });

    it('deve retornar 500 para erro interno do servidor', async () => {
      mockServicoComissao.atualizarComissao.mockRejectedValue(new Error('Erro de banco de dados'));

      const res = await request(app)
        .put('/comissoes/1')
        .send({ percentual: 12 });

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
    });
  });

  describe('DELETE /comissoes/:id', () => {
    it('deve deletar uma comissão e retornar 204', async () => {
      mockServicoComissao.deletarComissao.mockResolvedValue(true);

      const res = await request(app).delete('/comissoes/1');

      expect(res.statusCode).toEqual(204);
      expect(res.body).toEqual({}); // Resposta vazia para 204 No Content
      expect(mockServicoComissao.deletarComissao).toHaveBeenCalledWith('1');
    });

    it('deve retornar 404 se a comissão não for encontrada para exclusão', async () => {
      mockServicoComissao.deletarComissao.mockResolvedValue(false);

      const res = await request(app).delete('/comissoes/999');

      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty('message', 'Comissão não encontrada para exclusão.');
    });

    it('deve retornar 500 para erro interno do servidor', async () => {
      mockServicoComissao.deletarComissao.mockRejectedValue(new Error('Erro de banco de dados'));

      const res = await request(app).delete('/comissoes/1');

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
    });
  });
});
