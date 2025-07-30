import servicoNotificacoes from '../servicos/ServicoNotificacoes';

// Função para adicionar notificações de exemplo
export const adicionarNotificacoesExemplo = () => {
  // Verificar se já foram adicionadas
  if (localStorage.getItem('notificacoesExemploAdicionadas')) {
    return;
  }

  // Adicionar notificações de exemplo
  servicoNotificacoes.notificarPedido(
    'Novo Pedido Recebido',
    'Pedido PED-001 foi criado pelo cliente João Silva',
    '1'
  );

  servicoNotificacoes.notificarProduto(
    'Produto Atualizado',
    'Camiseta Polo Azul teve o preço alterado',
    '1'
  );

  servicoNotificacoes.notificarSistema(
    'Sistema Atualizado',
    'Nova versão do PulseHub foi instalada com melhorias de performance'
  );

  servicoNotificacoes.notificarSucesso(
    'Backup Realizado',
    'Backup automático dos dados foi concluído com sucesso'
  );

  servicoNotificacoes.notificarAviso(
    'Manutenção Programada',
    'Sistema entrará em manutenção amanhã às 02:00'
  );

  // Marcar como adicionadas
  localStorage.setItem('notificacoesExemploAdicionadas', 'true');
};

// Função para limpar notificações de exemplo
export const limparNotificacoesExemplo = () => {
  servicoNotificacoes.limparTodas();
  localStorage.removeItem('notificacoesExemploAdicionadas');
};