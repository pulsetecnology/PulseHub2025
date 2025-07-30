import servicoNotificacoes from './ServicoNotificacoes';
import { obterPapelUsuario } from '../utils/papelUsuario';

/**
 * Serviço para gerenciar mudanças automáticas de status de pedidos
 * e notificações correspondentes
 */
class ServicoStatusPedido {
  constructor() {
    this.listeners = [];
  }

  /**
   * Processa mudança de status de pedido com lógica automática e notificações
   * @param {Object} pedido - Dados do pedido
   * @param {string} novoStatus - Novo status do pedido
   * @param {string} statusAnterior - Status anterior do pedido
   * @param {string} usuarioId - ID do usuário que fez a alteração
   * @returns {Object} Resultado da operação
   */
  async processarMudancaStatus(pedido, novoStatus, statusAnterior, usuarioId = null) {
    try {
      // 1. Aplicar lógica automática de mudança de status
      const statusFinal = this.aplicarLogicaAutomatica(novoStatus, statusAnterior);
      
      // 2. Gerar notificações baseadas na mudança
      await this.gerarNotificacoesMudancaStatus(pedido, statusFinal, statusAnterior, usuarioId);
      
      // 3. Registrar histórico da mudança
      this.registrarHistoricoStatus(pedido.id, statusAnterior, statusFinal, usuarioId);
      
      return {
        sucesso: true,
        statusFinal,
        statusAnterior,
        notificacoesEnviadas: true
      };
    } catch (error) {
      console.error('Erro ao processar mudança de status:', error);
      return {
        sucesso: false,
        erro: error.message
      };
    }
  }

  /**
   * Aplica lógica automática de mudança de status
   * @param {string} novoStatus - Status solicitado
   * @param {string} statusAnterior - Status anterior
   * @returns {string} Status final após aplicar lógica
   */
  aplicarLogicaAutomatica(novoStatus, statusAnterior) {
    const papelUsuario = obterPapelUsuario();
    
    // Regra: Quando fornecedor abre pedido "Pendente", muda automaticamente para "Em Análise"
    if (papelUsuario === 'FORNECEDOR' && 
        statusAnterior === 'pendente' && 
        novoStatus === 'pendente') {
      console.log('🔄 Aplicando regra automática: Pendente → Em Análise (Fornecedor)');
      return 'em_analise';
    }
    
    // Outras regras automáticas podem ser adicionadas aqui
    
    return novoStatus;
  }

  /**
   * Gera notificações baseadas na mudança de status
   * @param {Object} pedido - Dados do pedido
   * @param {string} novoStatus - Novo status
   * @param {string} statusAnterior - Status anterior
   * @param {string} usuarioId - ID do usuário
   */
  async gerarNotificacoesMudancaStatus(pedido, novoStatus, statusAnterior, usuarioId) {
    const papelUsuario = obterPapelUsuario();
    
    // Notificações para FORNECEDOR
    if (this.deveNotificarFornecedor(novoStatus, statusAnterior, papelUsuario)) {
      await this.notificarFornecedor(pedido, novoStatus, statusAnterior);
    }
    
    // Notificações para REPRESENTANTE
    if (this.deveNotificarRepresentante(novoStatus, statusAnterior, papelUsuario)) {
      await this.notificarRepresentante(pedido, novoStatus, statusAnterior);
    }
  }

  /**
   * Verifica se deve notificar o fornecedor
   * @param {string} novoStatus - Novo status
   * @param {string} statusAnterior - Status anterior
   * @param {string} papelUsuario - Papel do usuário atual
   * @returns {boolean}
   */
  deveNotificarFornecedor(novoStatus, statusAnterior, papelUsuario) {
    // Notificar fornecedor quando:
    // 1. Pedido foi criado (rascunho → pendente)
    // 2. Pedido foi cancelado pelo representante
    
    const pedidoCriado = statusAnterior === 'rascunho' && novoStatus === 'pendente';
    const pedidoCancelado = novoStatus === 'cancelado' && papelUsuario === 'REPRESENTANTE';
    
    return pedidoCriado || pedidoCancelado;
  }

  /**
   * Verifica se deve notificar o representante
   * @param {string} novoStatus - Novo status
   * @param {string} statusAnterior - Status anterior
   * @param {string} papelUsuario - Papel do usuário atual
   * @returns {boolean}
   */
  deveNotificarRepresentante(novoStatus, statusAnterior, papelUsuario) {
    // Notificar representante quando:
    // Qualquer alteração de status feita pelo fornecedor
    
    return papelUsuario === 'FORNECEDOR' && novoStatus !== statusAnterior;
  }

  /**
   * Envia notificação para o fornecedor
   * @param {Object} pedido - Dados do pedido
   * @param {string} novoStatus - Novo status
   * @param {string} statusAnterior - Status anterior
   */
  async notificarFornecedor(pedido, novoStatus, statusAnterior) {
    let titulo, mensagem;
    
    if (statusAnterior === 'rascunho' && novoStatus === 'pendente') {
      titulo = '📦 Novo Pedido Recebido';
      mensagem = `Pedido ${pedido.numero} foi criado e está aguardando análise. Valor: ${this.formatarMoeda(pedido.total)}`;
    } else if (novoStatus === 'cancelado') {
      titulo = '❌ Pedido Cancelado';
      mensagem = `Pedido ${pedido.numero} foi cancelado pelo representante.`;
    }
    
    if (titulo && mensagem) {
      servicoNotificacoes.notificarPedido(titulo, mensagem, pedido.id);
      console.log('📧 Notificação enviada para FORNECEDOR:', titulo);
    }
  }

  /**
   * Envia notificação para o representante
   * @param {Object} pedido - Dados do pedido
   * @param {string} novoStatus - Novo status
   * @param {string} statusAnterior - Status anterior
   */
  async notificarRepresentante(pedido, novoStatus, statusAnterior) {
    const statusLabels = {
      'em_analise': 'Em Análise',
      'aprovado': 'Aprovado',
      'recusado': 'Recusado',
      'em_producao': 'Em Produção',
      'enviado': 'Enviado',
      'entregue': 'Entregue',
      'cancelado': 'Cancelado'
    };
    
    const statusLabel = statusLabels[novoStatus] || novoStatus;
    const titulo = '🔄 Status do Pedido Alterado';
    const mensagem = `Pedido ${pedido.numero} teve seu status alterado para "${statusLabel}" pelo fornecedor.`;
    
    servicoNotificacoes.notificarPedido(titulo, mensagem, pedido.id);
    console.log('📧 Notificação enviada para REPRESENTANTE:', titulo);
  }

  /**
   * Registra histórico de mudanças de status
   * @param {string} pedidoId - ID do pedido
   * @param {string} statusAnterior - Status anterior
   * @param {string} statusNovo - Novo status
   * @param {string} usuarioId - ID do usuário
   */
  registrarHistoricoStatus(pedidoId, statusAnterior, statusNovo, usuarioId) {
    try {
      const historico = this.obterHistoricoStatus(pedidoId) || [];
      
      const novaEntrada = {
        id: Date.now() + Math.random(),
        pedidoId,
        statusAnterior,
        statusNovo,
        usuarioId: usuarioId || 'sistema',
        papelUsuario: obterPapelUsuario(),
        timestamp: new Date().toISOString(),
        automatico: statusAnterior === 'pendente' && statusNovo === 'em_analise'
      };
      
      historico.unshift(novaEntrada);
      
      // Manter apenas os últimos 20 registros por pedido
      if (historico.length > 20) {
        historico.splice(20);
      }
      
      localStorage.setItem(`historico_status_${pedidoId}`, JSON.stringify(historico));
      
      console.log('📝 Histórico de status registrado:', novaEntrada);
    } catch (error) {
      console.error('Erro ao registrar histórico de status:', error);
    }
  }

  /**
   * Obtém histórico de mudanças de status de um pedido
   * @param {string} pedidoId - ID do pedido
   * @returns {Array} Histórico de mudanças
   */
  obterHistoricoStatus(pedidoId) {
    try {
      const historico = localStorage.getItem(`historico_status_${pedidoId}`);
      return historico ? JSON.parse(historico) : [];
    } catch (error) {
      console.error('Erro ao obter histórico de status:', error);
      return [];
    }
  }

  /**
   * Formata valor monetário
   * @param {number} valor - Valor a ser formatado
   * @returns {string} Valor formatado
   */
  formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  }

  /**
   * Adiciona listener para mudanças de status
   * @param {Function} callback - Função callback
   */
  adicionarListener(callback) {
    this.listeners.push(callback);
  }

  /**
   * Remove listener
   * @param {Function} callback - Função callback
   */
  removerListener(callback) {
    this.listeners = this.listeners.filter(l => l !== callback);
  }

  /**
   * Notifica todos os listeners sobre mudança de status
   * @param {Object} dados - Dados da mudança
   */
  notificarListeners(dados) {
    this.listeners.forEach(callback => {
      try {
        callback(dados);
      } catch (error) {
        console.error('Erro ao notificar listener de status:', error);
      }
    });
  }
}

// Instância singleton
const servicoStatusPedido = new ServicoStatusPedido();

export default servicoStatusPedido;