import { ServicoCliente } from './ServicoCliente';
import { RepositorioClientePrisma } from '../../infraestrutura/banco-de-dados/RepositorioClientePrisma';

// Mock do RepositorioClientePrisma
jest.mock('../../infraestrutura/banco-de-dados/RepositorioClientePrisma');

describe('ServicoCliente', () => {
  let servicoCliente: ServicoCliente;
  let mockRepositorioCliente: jest.Mocked<RepositorioClientePrisma>;

  beforeEach(() => {
    servicoCliente = new ServicoCliente();
    mockRepositorioCliente = new RepositorioClientePrisma() as jest.Mocked<RepositorioClientePrisma>;
    jest.clearAllMocks();
  });

  const mockCliente = {
    id: '1',
    nome: 'Cliente Teste',
    email: 'cliente@example.com',
    cpfCnpj: '12345678901',
  };

  describe('criarCliente', () => {
    it('deve criar um novo cliente', async () => {
      mockRepositorioCliente.create.mockResolvedValue(mockCliente);

      const resultado = await servicoCliente.criarCliente(mockCliente);

      expect(mockRepositorioCliente.create).toHaveBeenCalledWith(mockCliente);
      expect(resultado).toEqual(mockCliente);
    });
  });

  describe('buscarClientePorId', () => {
    it('deve retornar um cliente pelo ID', async () => {
      mockRepositorioCliente.findById.mockResolvedValue(mockCliente);

      const resultado = await servicoCliente.buscarClientePorId('1');

      expect(mockRepositorioCliente.findById).toHaveBeenCalledWith('1');
      expect(resultado).toEqual(mockCliente);
    });
  });

  describe('buscarTodosClientes', () => {
    it('deve retornar todos os clientes', async () => {
      mockRepositorioCliente.findAll.mockResolvedValue([mockCliente]);

      const resultado = await servicoCliente.buscarTodosClientes();

      expect(mockRepositorioCliente.findAll).toHaveBeenCalledTimes(1);
      expect(resultado).toEqual([mockCliente]);
    });
  });

  describe('atualizarCliente', () => {
    it('deve atualizar um cliente existente', async () => {
      const dadosAtualizados = { nome: 'Cliente Atualizado' };
      const clienteAtualizado = { ...mockCliente, ...dadosAtualizados };
      mockRepositorioCliente.update.mockResolvedValue(clienteAtualizado);

      const resultado = await servicoCliente.atualizarCliente('1', dadosAtualizados);

      expect(mockRepositorioCliente.update).toHaveBeenCalledWith('1', dadosAtualizados);
      expect(resultado).toEqual(clienteAtualizado);
    });
  });

  describe('deletarCliente', () => {
    it('deve deletar um cliente existente', async () => {
      mockRepositorioCliente.delete.mockResolvedValue(true);

      const resultado = await servicoCliente.deletarCliente('1');

      expect(mockRepositorioCliente.delete).toHaveBeenCalledWith('1');
      expect(resultado).toBe(true);
    });
  });
});
