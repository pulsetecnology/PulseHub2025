import servicoNotificacoes from '../servicos/ServicoNotificacoes';
import { adicionarNotificacoesExemplo } from './notificacoesExemplo';

/**
 * Corrige notificações com IDs inválidos
 * Remove notificações antigas e recria com IDs corretos
 */
export const corrigirNotificacoes = () => {
  console.log('🔧 Corrigindo notificações com IDs inválidos...');
  
  // Obter todas as notificações
  const notificacoes = servicoNotificacoes.obterNotificacoes();
  
  // IDs válidos de pedidos (baseado nos pedidos de exemplo)
  const idsValidosPedidos = ['1', '2', '3'];
  
  // Encontrar notificações com IDs inválidos
  const notificacoesInvalidas = notificacoes.filter(notificacao => {
    if (notificacao.tipo === 'pedido' && notificacao.acao && notificacao.acao.url) {
      const match = notificacao.acao.url.match(/\/pedidos\/(\w+)/);
      if (match) {
        const pedidoId = match[1];
        return !idsValidosPedidos.includes(pedidoId);
      }
    }
    return false;
  });
  
  console.log(`Encontradas ${notificacoesInvalidas.length} notificações com IDs inválidos:`, notificacoesInvalidas);
  
  // Remover notificações inválidas
  notificacoesInvalidas.forEach(notificacao => {
    servicoNotificacoes.removerNotificacao(notificacao.id);
    console.log(`Removida notificação inválida: ${notificacao.titulo}`);
  });
  
  // Só adicionar notificações de exemplo se ainda não foram adicionadas
  if (!localStorage.getItem('notificacoesExemploAdicionadas')) {
    adicionarNotificacoesExemplo();
  }
  
  console.log('✅ Notificações corrigidas com sucesso!');
};

/**
 * Verifica se existem notificações com IDs inválidos
 */
export const verificarNotificacoesInvalidas = () => {
  const notificacoes = servicoNotificacoes.obterNotificacoes();
  const idsValidosPedidos = ['1', '2', '3'];
  
  return notificacoes.filter(notificacao => {
    if (notificacao.tipo === 'pedido' && notificacao.acao && notificacao.acao.url) {
      const match = notificacao.acao.url.match(/\/pedidos\/(\w+)/);
      if (match) {
        const pedidoId = match[1];
        return !idsValidosPedidos.includes(pedidoId);
      }
    }
    return false;
  });
};

// Disponibilizar globalmente para debug
if (typeof window !== 'undefined') {
  window.corrigirNotificacoes = corrigirNotificacoes;
  window.verificarNotificacoesInvalidas = verificarNotificacoesInvalidas;
}