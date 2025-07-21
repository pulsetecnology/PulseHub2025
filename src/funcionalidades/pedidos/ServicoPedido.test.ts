import { ServicoPedido } from './ServicoPedido';
import { RepositorioPedidoPrisma } from '@src/infraestrutura/banco-de-dados/RepositorioPedidoPrisma';
import { IPedido } from '@src/compartilhado/tipos/IPedido';

// Mock do RepositorioPedidoPrisma
jest.mock('../../infraestrutura/banco-de-dados/RepositorioPedidoPrisma');

describe('ServicoPedido', () => {
  let servicoPedido: ServicoPedido;
  let mockRepositorioPedido: jest.Mocked<RepositorioPedidoPrisma>;

  beforeEach(() => {
    servicoPedido = new ServicoPedido();
    mockRepositorioPedido = new RepositorioPedidoPrisma() as jest.Mocked<RepositorioPedidoPrisma>;
    jest.clearAllMocks();
  });

  const mockPedido: IPedido = {
    id: '1',
    clienteId: 'cliente1',
    dataPedido: new Date(),
    itens: [],
    status: 'pendente',
    valorTotal: 100,
  };

  describe('criarPedido', () => {
    it('deve criar um novo pedido', async () => {
      mockRepositorioPedido.create.mockResolvedValue(mockPedido);

      const resultado = await servicoPedido.criarPedido(mockPedido);

      expect(mockRepositorioPedido.create).toHaveBeenCalledWith(mockPedido);
      expect(resultado).toEqual(mockPedido);
    });
  });

  describe('buscarPedidoPorId', () => {
    it('deve retornar um pedido pelo ID', async () => {
      mockRepositorioPedido.findById.mockResolvedValue(mockPedido);

      const resultado = await servicoPedido.buscarPedidoPorId('1');

      expect(mockRepositorioPedido.findById).toHaveBeenCalledWith('1');
      expect(resultado).toEqual(mockPedido);
    });
  });

  describe('buscarTodosPedidos', () => {
    it('deve retornar todos os pedidos', async () => {
      mockRepositorioPedido.findAll.mockResolvedValue([mockPedido]);

      const resultado = await servicoPedido.buscarTodosPedidos();

      expect(mockRepositorioPedido.findAll).toHaveBeenCalledTimes(1);
      expect(resultado).toEqual([mockPedido]);
    });
  });

  describe('atualizarPedido', () => {
    it('deve atualizar um pedido existente', async () => {
      const dadosAtualizados: Partial<IPedido> = { status: 'enviado' };
      const pedidoAtualizado = { ...mockPedido, ...dadosAtualizados };
      mockRepositorioPedido.update.mockResolvedValue(pedidoAtualizado);

      const resultado = await servicoPedido.atualizarPedido('1', dadosAtualizados);

      expect(mockRepositorioPedido.update).toHaveBeenCalledWith('1', dadosAtualizados);
      expect(resultado).toEqual(pedidoAtualizado);
    });
  });

  describe('deletarPedido', () => {
    it('deve deletar um pedido existente', async () => {
      mockRepositorioPedido.delete.mockResolvedValue(true);

      const resultado = await servicoPedido.deletarPedido('1');

      expect(mockRepositorioPedido.delete).toHaveBeenCalledWith('1');
      expect(resultado).toBe(true);
    });
  });
});
