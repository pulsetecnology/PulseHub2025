import servicoNotificacoes from '../servicos/ServicoNotificacoes';

/**
 * Remove notificações de teste/exemplo que podem estar sendo geradas excessivamente
 */
export const limparNotificacoesTeste = () => {
  console.log('🧹 Limpando notificações de teste...');
  
  const notificacoes = servicoNotificacoes.obterNotificacoes();
  
  // Palavras-chave que indicam notificações de teste/exemplo
  const palavrasChaveTeste = [
    'manutenção programada',
    'sistema atualizado',
    'backup realizado',
    'nova versão',
    'melhorias de performance',
    'teste de notificação',
    'configurações atualizadas'
  ];
  
  // Encontrar notificações de teste
  const notificacoesTeste = notificacoes.filter(notificacao => {
    const textoCompleto = `${notificacao.titulo} ${notificacao.mensagem}`.toLowerCase();
    return palavrasChaveTeste.some(palavra => textoCompleto.includes(palavra));
  });
  
  console.log(`Encontradas ${notificacoesTeste.length} notificações de teste:`, notificacoesTeste);
  
  // Remover notificações de teste
  notificacoesTeste.forEach(notificacao => {
    servicoNotificacoes.removerNotificacao(notificacao.id);
    console.log(`Removida notificação de teste: ${notificacao.titulo}`);
  });
  
  console.log('✅ Limpeza de notificações de teste concluída!');
};

/**
 * Verifica se há muitas notificações (mais de 10) e oferece limpeza
 */
export const verificarExcessoNotificacoes = () => {
  const notificacoes = servicoNotificacoes.obterNotificacoes();
  
  if (notificacoes.length > 10) {
    console.warn(`⚠️ Muitas notificações detectadas: ${notificacoes.length}`);
    return true;
  }
  
  return false;
};

/**
 * Limpa todas as notificações e reseta o sistema
 */
export const resetarNotificacoes = () => {
  console.log('🔄 Resetando sistema de notificações...');
  
  // Limpar todas as notificações
  servicoNotificacoes.limparTodas();
  
  // Remover flag de notificações de exemplo
  localStorage.removeItem('notificacoesExemploAdicionadas');
  
  console.log('✅ Sistema de notificações resetado!');
};

// Disponibilizar globalmente para debug
if (typeof window !== 'undefined') {
  window.limparNotificacoesTeste = limparNotificacoesTeste;
  window.verificarExcessoNotificacoes = verificarExcessoNotificacoes;
  window.resetarNotificacoes = resetarNotificacoes;
}