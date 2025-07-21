import { ServicoComissao } from './ServicoComissao';
import { RepositorioComissaoPrisma } from '@src/infraestrutura/banco-de-dados/RepositorioComissaoPrisma';

// Mock do RepositorioComissaoPrisma
jest.mock('../../infraestrutura/banco-de-dados/RepositorioComissaoPrisma');

describe('ServicoComissao', () => {
  let servicoComissao: ServicoComissao;
  let mockRepositorioComissao: jest.Mocked<RepositorioComissaoPrisma>;

  beforeEach(() => {
    servicoComissao = new ServicoComissao();
    mockRepositorioComissao = new RepositorioComissaoPrisma() as jest.Mocked<RepositorioComissaoPrisma>;
    jest.clearAllMocks();
  });

  const mockComissao = {
    id: '1',
    representanteId: 'rep1',
    pedidoId: 'ped1',
    percentual: 10,
    valorCalculado: 100,
    dataEfetivacao: new Date(),
  };

  describe('criarComissao', () => {
    it('deve criar uma nova comissão', async () => {
      mockRepositorioComissao.create.mockResolvedValue(mockComissao);

      const resultado = await servicoComissao.criarComissao(mockComissao);

      expect(mockRepositorioComissao.create).toHaveBeenCalledWith(mockComissao);
      expect(resultado).toEqual(mockComissao);
    });
  });

  describe('buscarComissaoPorId', () => {
    it('deve retornar uma comissão pelo ID', async () => {
      mockRepositorioComissao.findById.mockResolvedValue(mockComissao);

      const resultado = await servicoComissao.buscarComissaoPorId('1');

      expect(mockRepositorioComissao.findById).toHaveBeenCalledWith('1');
      expect(resultado).toEqual(mockComissao);
    });
  });

  describe('buscarTodasComissoes', () => {
    it('deve retornar todas as comissões', async () => {
      mockRepositorioComissao.findAll.mockResolvedValue([mockComissao]);

      const resultado = await servicoComissao.buscarTodasComissoes();

      expect(mockRepositorioComissao.findAll).toHaveBeenCalledTimes(1);
      expect(resultado).toEqual([mockComissao]);
    });
  });

  describe('atualizarComissao', () => {
    it('deve atualizar uma comissão existente', async () => {
      const dadosAtualizados = { percentual: 12 };
      const comissaoAtualizada = { ...mockComissao, ...dadosAtualizados };
      mockRepositorioComissao.update.mockResolvedValue(comissaoAtualizada);

      const resultado = await servicoComissao.atualizarComissao('1', dadosAtualizados);

      expect(mockRepositorioComissao.update).toHaveBeenCalledWith('1', dadosAtualizados);
      expect(resultado).toEqual(comissaoAtualizada);
    });
  });

  describe('deletarComissao', () => {
    it('deve deletar uma comissão existente', async () => {
      mockRepositorioComissao.delete.mockResolvedValue(true);

      const resultado = await servicoComissao.deletarComissao('1');

      expect(mockRepositorioComissao.delete).toHaveBeenCalledWith('1');
      expect(resultado).toBe(true);
    });
  });

  describe('calcularComissao', () => {
    it('deve calcular a comissão corretamente', () => {
      const valorVenda = 1000;
      const percentual = 5;
      const resultado = servicoComissao.calcularComissao(valorVenda, percentual);
      expect(resultado).toBe(50);
    });
  });
});
