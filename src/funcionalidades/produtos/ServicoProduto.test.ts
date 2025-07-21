import { ServicoProduto } from './ServicoProduto';
import { RepositorioProdutoPrisma } from '../../infraestrutura/banco-de-dados/RepositorioProdutoPrisma';

// Mock do RepositorioProdutoPrisma
jest.mock('../../infraestrutura/banco-de-dados/RepositorioProdutoPrisma');

describe('ServicoProduto', () => {
  let servicoProduto: ServicoProduto;
  let mockRepositorioProduto: jest.Mocked<RepositorioProdutoPrisma>;

  beforeEach(() => {
    servicoProduto = new ServicoProduto();
    mockRepositorioProduto = new RepositorioProdutoPrisma() as jest.Mocked<RepositorioProdutoPrisma>;
    jest.clearAllMocks();
  });

  const mockProduto = {
    id: '1',
    nome: 'Produto Teste',
    descricao: 'Descrição',
    precoBase: 100,
    variantes: [],
  };

  describe('criarProduto', () => {
    it('deve criar um novo produto', async () => {
      mockRepositorioProduto.create.mockResolvedValue(mockProduto);

      const resultado = await servicoProduto.criarProduto(mockProduto);

      expect(mockRepositorioProduto.create).toHaveBeenCalledWith(mockProduto);
      expect(resultado).toEqual(mockProduto);
    });
  });

  describe('buscarProdutoPorId', () => {
    it('deve retornar um produto pelo ID', async () => {
      mockRepositorioProduto.findById.mockResolvedValue(mockProduto);

      const resultado = await servicoProduto.buscarProdutoPorId('1');

      expect(mockRepositorioProduto.findById).toHaveBeenCalledWith('1');
      expect(resultado).toEqual(mockProduto);
    });
  });

  describe('buscarTodosProdutos', () => {
    it('deve retornar todos os produtos', async () => {
      mockRepositorioProduto.findAll.mockResolvedValue([mockProduto]);

      const resultado = await servicoProduto.buscarTodosProdutos();

      expect(mockRepositorioProduto.findAll).toHaveBeenCalledTimes(1);
      expect(resultado).toEqual([mockProduto]);
    });
  });

  describe('atualizarProduto', () => {
    it('deve atualizar um produto existente', async () => {
      const dadosAtualizados = { nome: 'Produto Atualizado' };
      const produtoAtualizado = { ...mockProduto, ...dadosAtualizados };
      mockRepositorioProduto.update.mockResolvedValue(produtoAtualizado);

      const resultado = await servicoProduto.atualizarProduto('1', dadosAtualizados);

      expect(mockRepositorioProduto.update).toHaveBeenCalledWith('1', dadosAtualizados);
      expect(resultado).toEqual(produtoAtualizado);
    });
  });

  describe('deletarProduto', () => {
    it('deve deletar um produto existente', async () => {
      mockRepositorioProduto.delete.mockResolvedValue(true);

      const resultado = await servicoProduto.deletarProduto('1');

      expect(mockRepositorioProduto.delete).toHaveBeenCalledWith('1');
      expect(resultado).toBe(true);
    });
  });
});
