import request from 'supertest';
import express from 'express';
import { ServicoPedido } from '../../../src/funcionalidades/pedidos/ServicoPedido';
import { mock } from 'jest-mock-extended';
import pedidoRouter from './index';

// Mock do ServicoPedido
jest.mock('../../../src/funcionalidades/pedidos/ServicoPedido');

const mockServicoPedido = mock<ServicoPedido>();

// Mockar a instância do ServicoPedido para que os testes usem o mock
jest.mocked(ServicoPedido).mockImplementation(() => mockServicoPedido);

const app = express();
app.use(express.json());
app.use('/pedidos', pedidoRouter);

describe('API de Pedidos', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockServicoPedido.criarPedido.mockReset();
    mockServicoPedido.buscarTodosPedidos.mockReset();
    mockServicoPedido.buscarPedidoPorId.mockReset();
    mockServicoPedido.atualizarPedido.mockReset();
    mockServicoPedido.deletarPedido.mockReset();
  });

  const mockPedido = {
    id: '1',
    clienteId: 'cliente1',
    dataPedido: new Date(),
    itens: [],
    status: 'pendente',
    valorTotal: 100,
  };

  describe('POST /pedidos', () => {
    it('deve criar um novo pedido e retornar 201', async () => {
      mockServicoPedido.criarPedido.mockResolvedValue(mockPedido);

      const res = await request(app)
        .post('/pedidos')
        .send({
          clienteId: 'cliente1',
          itens: [],
          status: 'pendente',
          valorTotal: 100,
        });

      expect(res.statusCode).toEqual(201);
      expect(res.body).toEqual(mockPedido);
      expect(mockServicoPedido.criarPedido).toHaveBeenCalledTimes(1);
    });

    it('deve retornar 400 se a criação do pedido falhar', async () => {
      mockServicoPedido.criarPedido.mockResolvedValue(null);

      const res = await request(app)
        .post('/pedidos')
        .send({
          clienteId: 'cliente1',
          itens: [],
          status: 'pendente',
          valorTotal: 100,
        });

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('message', 'Não foi possível criar o pedido.');
    });

    it('deve retornar 500 para erro interno do servidor', async () => {
      mockServicoPedido.criarPedido.mockRejectedValue(new Error('Erro de banco de dados'));

      const res = await request(app)
        .post('/pedidos')
        .send({
          clienteId: 'cliente1',
          itens: [],
          status: 'pendente',
          valorTotal: 100,
        });

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
    });
  });

  describe('GET /pedidos', () => {
    it('deve retornar todos os pedidos', async () => {
      mockServicoPedido.buscarTodosPedidos.mockResolvedValue([mockPedido]);

      const res = await request(app).get('/pedidos');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual([mockPedido]);
      expect(mockServicoPedido.buscarTodosPedidos).toHaveBeenCalledTimes(1);
    });

    it('deve retornar 500 para erro interno do servidor', async () => {
      mockServicoPedido.buscarTodosPedidos.mockRejectedValue(new Error('Erro de rede'));

      const res = await request(app).get('/pedidos');

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
    });
  });

  describe('GET /pedidos/:id', () => {
    it('deve retornar um pedido pelo ID', async () => {
      mockServicoPedido.buscarPedidoPorId.mockResolvedValue(mockPedido);

      const res = await request(app).get('/pedidos/1');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(mockPedido);
      expect(mockServicoPedido.buscarPedidoPorId).toHaveBeenCalledWith('1');
    });

    it('deve retornar 404 se o pedido não for encontrado', async () => {
      mockServicoPedido.buscarPedidoPorId.mockResolvedValue(null);

      const res = await request(app).get('/pedidos/999');

      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty('message', 'Pedido não encontrado.');
    });

    it('deve retornar 500 para erro interno do servidor', async () => {
      mockServicoPedido.buscarPedidoPorId.mockRejectedValue(new Error('Erro de banco de dados'));

      const res = await request(app).get('/pedidos/1');

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
    });
  });

  describe('PUT /pedidos/:id', () => {
    it('deve atualizar um pedido e retornar 200', async () => {
      const dadosAtualizados = { status: 'enviado' };
      const pedidoAtualizado = { ...mockPedido, ...dadosAtualizados };
      mockServicoPedido.atualizarPedido.mockResolvedValue(pedidoAtualizado);

      const res = await request(app)
        .put('/pedidos/1')
        .send(dadosAtualizados);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(pedidoAtualizado);
      expect(mockServicoPedido.atualizarPedido).toHaveBeenCalledWith('1', dadosAtualizados);
    });

    it('deve retornar 404 se o pedido não for encontrado para atualização', async () => {
      mockServicoPedido.atualizarPedido.mockResolvedValue(null);

      const res = await request(app)
        .put('/pedidos/999')
        .send({ status: 'enviado' });

      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty('message', 'Pedido não encontrado para atualização.');
    });

    it('deve retornar 500 para erro interno do servidor', async () => {
      mockServicoPedido.atualizarPedido.mockRejectedValue(new Error('Erro de banco de dados'));

      const res = await request(app)
        .put('/pedidos/1')
        .send({ status: 'enviado' });

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
    });
  });

  describe('DELETE /pedidos/:id', () => {
    it('deve deletar um pedido e retornar 204', async () => {
      mockServicoPedido.deletarPedido.mockResolvedValue(true);

      const res = await request(app).delete('/pedidos/1');

      expect(res.statusCode).toEqual(204);
      expect(res.body).toEqual({}); // Resposta vazia para 204 No Content
      expect(mockServicoPedido.deletarPedido).toHaveBeenCalledWith('1');
    });

    it('deve retornar 404 se o pedido não for encontrado para exclusão', async () => {
      mockServicoPedido.deletarPedido.mockResolvedValue(false);

      const res = await request(app).delete('/pedidos/999');

      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty('message', 'Pedido não encontrado para exclusão.');
    });

    it('deve retornar 500 para erro interno do servidor', async () => {
      mockServicoPedido.deletarPedido.mockRejectedValue(new Error('Erro de banco de dados'));

      const res = await request(app).delete('/pedidos/1');

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
    });
  });
});
