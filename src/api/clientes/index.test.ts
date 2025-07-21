import request from 'supertest';
import express from 'express';
import { ServicoCliente } from '@src/funcionalidades/clientes/ServicoCliente';
import { mock } from 'jest-mock-extended';
import clienteRouter from './index';

// Mock do ServicoCliente
jest.mock('../../../src/funcionalidades/clientes/ServicoCliente');

const mockServicoCliente = mock<ServicoCliente>();

// Mockar a instância do ServicoCliente para que os testes usem o mock
jest.mocked(ServicoCliente).mockImplementation(() => mockServicoCliente);

const app = express();
app.use(express.json());
app.use('/clientes', clienteRouter);

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

      const res = await request(app)
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

      const res = await request(app)
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

      const res = await request(app)
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

      const res = await request(app).get('/clientes');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual([mockCliente]);
      expect(mockServicoCliente.buscarTodosClientes).toHaveBeenCalledTimes(1);
    });

    it('deve retornar 500 para erro interno do servidor', async () => {
      mockServicoCliente.buscarTodosClientes.mockRejectedValue(new Error('Erro de rede'));

      const res = await request(app).get('/clientes');

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
    });
  });

  describe('GET /clientes/:id', () => {
    it('deve retornar um cliente pelo ID', async () => {
      mockServicoCliente.buscarClientePorId.mockResolvedValue(mockCliente);

      const res = await request(app).get('/clientes/1');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(mockCliente);
      expect(mockServicoCliente.buscarClientePorId).toHaveBeenCalledWith('1');
    });

    it('deve retornar 404 se o cliente não for encontrado', async () => {
      mockServicoCliente.buscarClientePorId.mockResolvedValue(null);

      const res = await request(app).get('/clientes/999');

      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty('message', 'Cliente não encontrado.');
    });

    it('deve retornar 500 para erro interno do servidor', async () => {
      mockServicoCliente.buscarClientePorId.mockRejectedValue(new Error('Erro de banco de dados'));

      const res = await request(app).get('/clientes/1');

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
    });
  });

  describe('PUT /clientes/:id', () => {
    it('deve atualizar um cliente e retornar 200', async () => {
      const dadosAtualizados = { nome: 'Cliente Atualizado' };
      const clienteAtualizado = { ...mockCliente, ...dadosAtualizados };
      mockServicoCliente.atualizarCliente.mockResolvedValue(clienteAtualizado);

      const res = await request(app)
        .put('/clientes/1')
        .send(dadosAtualizados);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(clienteAtualizado);
      expect(mockServicoCliente.atualizarCliente).toHaveBeenCalledWith('1', dadosAtualizados);
    });

    it('deve retornar 404 se o cliente não for encontrado para atualização', async () => {
      mockServicoCliente.atualizarCliente.mockResolvedValue(null);

      const res = await request(app)
        .put('/clientes/999')
        .send({ nome: 'Atualizado' });

      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty('message', 'Cliente não encontrado para atualização.');
    });

    it('deve retornar 500 para erro interno do servidor', async () => {
      mockServicoCliente.atualizarCliente.mockRejectedValue(new Error('Erro de banco de dados'));

      const res = await request(app)
        .put('/clientes/1')
        .send({ nome: 'Atualizado' });

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
    });
  });

  describe('DELETE /clientes/:id', () => {
    it('deve deletar um cliente e retornar 204', async () => {
      mockServicoCliente.deletarCliente.mockResolvedValue(true);

      const res = await request(app).delete('/clientes/1');

      expect(res.statusCode).toEqual(204);
      expect(res.body).toEqual({}); // Resposta vazia para 204 No Content
      expect(mockServicoCliente.deletarCliente).toHaveBeenCalledWith('1');
    });

    it('deve retornar 404 se o cliente não for encontrado para exclusão', async () => {
      mockServicoCliente.deletarCliente.mockResolvedValue(false);

      const res = await request(app).delete('/clientes/999');

      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty('message', 'Cliente não encontrado para exclusão.');
    });

    it('deve retornar 500 para erro interno do servidor', async () => {
      mockServicoCliente.deletarCliente.mockRejectedValue(new Error('Erro de banco de dados'));

      const res = await request(app).delete('/clientes/1');

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
    });
  });
});
