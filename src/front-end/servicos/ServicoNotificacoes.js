class ServicoNotificacoes {
  constructor() {
    this.listeners = [];
    this.notificacoes = this.carregarNotificacoes();
  }

  // Carregar notificações do localStorage
  carregarNotificacoes() {
    try {
      const notificacoesSalvas = localStorage.getItem('notificacoes');
      return notificacoesSalvas ? JSON.parse(notificacoesSalvas) : [];
    } catch (error) {
      console.error('Erro ao carregar notificações:', error);
      return [];
    }
  }

  // Salvar notificações no localStorage
  salvarNotificacoes() {
    try {
      localStorage.setItem('notificacoes', JSON.stringify(this.notificacoes));
    } catch (error) {
      console.error('Erro ao salvar notificações:', error);
    }
  }

  // Adicionar nova notificação
  adicionarNotificacao(notificacao) {
    const novaNotificacao = {
      id: Date.now() + Math.random(),
      timestamp: new Date().toISOString(),
      lida: false,
      ...notificacao
    };

    this.notificacoes.unshift(novaNotificacao);
    
    // Manter apenas as últimas 50 notificações
    if (this.notificacoes.length > 50) {
      this.notificacoes = this.notificacoes.slice(0, 50);
    }

    this.salvarNotificacoes();
    this.notificarListeners();
    
    return novaNotificacao;
  }

  // Marcar notificação como lida
  marcarComoLida(id) {
    const notificacao = this.notificacoes.find(n => n.id === id);
    if (notificacao) {
      notificacao.lida = true;
      this.salvarNotificacoes();
      this.notificarListeners();
    }
  }

  // Marcar todas como lidas
  marcarTodasComoLidas() {
    this.notificacoes.forEach(n => n.lida = true);
    this.salvarNotificacoes();
    this.notificarListeners();
  }

  // Remover notificação
  removerNotificacao(id) {
    this.notificacoes = this.notificacoes.filter(n => n.id !== id);
    this.salvarNotificacoes();
    this.notificarListeners();
  }

  // Limpar todas as notificações
  limparTodas() {
    this.notificacoes = [];
    this.salvarNotificacoes();
    this.notificarListeners();
  }

  // Obter todas as notificações
  obterNotificacoes() {
    return this.notificacoes;
  }

  // Obter notificações não lidas
  obterNaoLidas() {
    return this.notificacoes.filter(n => !n.lida);
  }

  // Contar notificações não lidas
  contarNaoLidas() {
    return this.obterNaoLidas().length;
  }

  // Adicionar listener para mudanças
  adicionarListener(callback) {
    this.listeners.push(callback);
  }

  // Remover listener
  removerListener(callback) {
    this.listeners = this.listeners.filter(l => l !== callback);
  }

  // Notificar todos os listeners
  notificarListeners() {
    this.listeners.forEach(callback => callback(this.notificacoes));
  }

  // Métodos de conveniência para diferentes tipos de notificação
  notificarPedido(titulo, mensagem, pedidoId) {
    return this.adicionarNotificacao({
      tipo: 'pedido',
      titulo,
      mensagem,
      icone: '📦',
      cor: 'blue',
      acao: {
        texto: 'Ver Pedido',
        url: `/pedidos/${pedidoId}`
      }
    });
  }

  notificarProduto(titulo, mensagem, produtoId) {
    return this.adicionarNotificacao({
      tipo: 'produto',
      titulo,
      mensagem,
      icone: '🏷️',
      cor: 'green',
      acao: {
        texto: 'Ver Produto',
        url: `/produtos/${produtoId}`
      }
    });
  }

  notificarSistema(titulo, mensagem) {
    return this.adicionarNotificacao({
      tipo: 'sistema',
      titulo,
      mensagem,
      icone: '⚙️',
      cor: 'gray'
    });
  }

  notificarSucesso(titulo, mensagem) {
    return this.adicionarNotificacao({
      tipo: 'sucesso',
      titulo,
      mensagem,
      icone: '✅',
      cor: 'green'
    });
  }

  notificarAviso(titulo, mensagem) {
    return this.adicionarNotificacao({
      tipo: 'aviso',
      titulo,
      mensagem,
      icone: '⚠️',
      cor: 'yellow'
    });
  }

  notificarErro(titulo, mensagem) {
    return this.adicionarNotificacao({
      tipo: 'erro',
      titulo,
      mensagem,
      icone: '❌',
      cor: 'red'
    });
  }
}

// Instância singleton
const servicoNotificacoes = new ServicoNotificacoes();

export default servicoNotificacoes;