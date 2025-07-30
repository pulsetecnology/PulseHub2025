import { LocalStorageManager } from '../utils/localStorage';
import ServicoProdutos from './ServicoProdutos';

/**
 * Serviço para gerenciar o carrinho de compras
 * Permite aos representantes adicionar produtos e depois gerar pedidos
 */
export default class ServicoCarrinho {
  constructor() {
    this.STORAGE_KEY = 'pulsehub_carrinho';
    this.servicoProdutos = new ServicoProdutos();
    this.listeners = [];
  }

  /**
   * Obter todos os itens do carrinho
   */
  obterItens() {
    return LocalStorageManager.getItem(this.STORAGE_KEY, []);
  }

  /**
   * Adicionar produto ao carrinho
   */
  adicionarProduto(produtoId, quantidade = 1, opcoes = {}) {
    try {
      const produto = this.servicoProdutos.obterPorId(produtoId);
      if (!produto) {
        throw new Error('Produto não encontrado');
      }

      if (!produto.disponivel) {
        throw new Error('Produto não disponível');
      }

      const itens = this.obterItens();
      const itemExistente = itens.find(item => 
        item.produtoId === produtoId && 
        JSON.stringify(item.opcoes) === JSON.stringify(opcoes)
      );

      if (itemExistente) {
        // Atualizar quantidade do item existente
        itemExistente.quantidade += quantidade;
        itemExistente.subtotal = itemExistente.quantidade * itemExistente.precoUnitario;
      } else {
        // Adicionar novo item
        const novoItem = {
          id: Date.now().toString(),
          produtoId: produtoId,
          produto: {
            id: produto.id,
            nome: produto.nome,
            sku: produto.sku,
            imagens: produto.imagens
          },
          quantidade: quantidade,
          precoUnitario: produto.preco,
          subtotal: quantidade * produto.preco,
          opcoes: opcoes, // cor, tamanho, etc.
          dataAdicao: new Date().toISOString()
        };
        itens.push(novoItem);
      }

      this.salvarCarrinho(itens);
      this.notificarListeners();
      return true;
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
      throw error;
    }
  }

  /**
   * Remover item do carrinho
   */
  removerItem(itemId) {
    try {
      const itens = this.obterItens();
      const novosItens = itens.filter(item => item.id !== itemId);
      this.salvarCarrinho(novosItens);
      this.notificarListeners();
      return true;
    } catch (error) {
      console.error('Erro ao remover item do carrinho:', error);
      return false;
    }
  }

  /**
   * Atualizar quantidade de um item
   */
  atualizarQuantidade(itemId, novaQuantidade) {
    try {
      if (novaQuantidade <= 0) {
        return this.removerItem(itemId);
      }

      const itens = this.obterItens();
      const item = itens.find(item => item.id === itemId);
      
      if (item) {
        item.quantidade = novaQuantidade;
        item.subtotal = item.quantidade * item.precoUnitario;
        this.salvarCarrinho(itens);
        this.notificarListeners();
        return true;
      }
      return false;
    } catch (error) {
      console.error('Erro ao atualizar quantidade:', error);
      return false;
    }
  }

  /**
   * Limpar carrinho
   */
  limparCarrinho() {
    try {
      LocalStorageManager.removeItem(this.STORAGE_KEY);
      this.notificarListeners();
      return true;
    } catch (error) {
      console.error('Erro ao limpar carrinho:', error);
      return false;
    }
  }

  /**
   * Obter resumo do carrinho
   */
  obterResumo() {
    const itens = this.obterItens();
    const totalItens = itens.reduce((total, item) => total + item.quantidade, 0);
    const subtotal = itens.reduce((total, item) => total + item.subtotal, 0);
    
    return {
      totalItens,
      subtotal,
      quantidadeProdutos: itens.length
    };
  }

  /**
   * Converter carrinho em dados de pedido
   */
  converterParaPedido(clienteId, observacoes = '') {
    const itens = this.obterItens();
    
    if (itens.length === 0) {
      throw new Error('Carrinho vazio');
    }

    const itensPedido = itens.map(item => ({
      produtoId: item.produtoId,
      produto: item.produto,
      quantidade: item.quantidade,
      precoUnitario: item.precoUnitario,
      subtotal: item.subtotal,
      opcoes: item.opcoes
    }));

    const subtotal = itens.reduce((total, item) => total + item.subtotal, 0);

    return {
      clienteId,
      itens: itensPedido,
      subtotal,
      desconto: 0,
      frete: 0,
      total: subtotal,
      observacoes,
      status: 'pendente',
      origem: 'carrinho'
    };
  }

  /**
   * Verificar se produto está no carrinho
   */
  produtoEstaNoCarrinho(produtoId, opcoes = {}) {
    const itens = this.obterItens();
    return itens.some(item => 
      item.produtoId === produtoId && 
      JSON.stringify(item.opcoes) === JSON.stringify(opcoes)
    );
  }

  /**
   * Obter quantidade de um produto no carrinho
   */
  obterQuantidadeProduto(produtoId, opcoes = {}) {
    const itens = this.obterItens();
    const item = itens.find(item => 
      item.produtoId === produtoId && 
      JSON.stringify(item.opcoes) === JSON.stringify(opcoes)
    );
    return item ? item.quantidade : 0;
  }

  /**
   * Salvar carrinho no localStorage
   */
  salvarCarrinho(itens) {
    LocalStorageManager.setItem(this.STORAGE_KEY, itens, 50);
  }

  /**
   * Adicionar listener para mudanças no carrinho
   */
  adicionarListener(callback) {
    this.listeners.push(callback);
  }

  /**
   * Remover listener
   */
  removerListener(callback) {
    this.listeners = this.listeners.filter(listener => listener !== callback);
  }

  /**
   * Notificar todos os listeners sobre mudanças
   */
  notificarListeners() {
    const resumo = this.obterResumo();
    this.listeners.forEach(callback => {
      try {
        callback(resumo);
      } catch (error) {
        console.error('Erro ao notificar listener do carrinho:', error);
      }
    });
  }

  /**
   * Validar item antes de adicionar
   */
  validarItem(produtoId, quantidade, opcoes) {
    const produto = this.servicoProdutos.obterPorId(produtoId);
    
    if (!produto) {
      return { valido: false, erro: 'Produto não encontrado' };
    }

    if (!produto.disponivel) {
      return { valido: false, erro: 'Produto não disponível' };
    }

    if (quantidade <= 0) {
      return { valido: false, erro: 'Quantidade deve ser maior que zero' };
    }

    // Validar opções obrigatórias (cor, tamanho)
    if (produto.cores && produto.cores.length > 0 && !opcoes.cor) {
      return { valido: false, erro: 'Selecione uma cor' };
    }

    if (produto.tamanhos && produto.tamanhos.length > 0 && !opcoes.tamanho) {
      return { valido: false, erro: 'Selecione um tamanho' };
    }

    return { valido: true };
  }
}