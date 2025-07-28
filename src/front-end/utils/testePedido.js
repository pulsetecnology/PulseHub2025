// Utilitário para testar o fluxo de pedidos
// Para usar: abra o console e digite: window.testePedido()

import ServicoPedidos from '../servicos/ServicoPedidos';

window.testePedido = async () => {
  const servicoPedidos = new ServicoPedidos();
  
  console.log('🧪 Iniciando teste do fluxo de pedidos...');
  
  try {
    // 1. Listar pedidos atuais
    const pedidos = await servicoPedidos.listar();
    console.log('📋 Pedidos atuais:', pedidos.length);
    
    if (pedidos.length > 0) {
      const pedido = pedidos[0];
      console.log('🔍 Testando com pedido:', pedido.numero, 'Status atual:', pedido.status);
      
      // 2. Testar atualização de status
      if (pedido.status === 'rascunho') {
        console.log('⏳ Finalizando pedido (rascunho → pendente)...');
        const pedidoAtualizado = await servicoPedidos.atualizar(pedido.id, {
          status: 'pendente',
          dataFinalizacao: new Date().toISOString()
        });
        console.log('✅ Status atualizado para:', pedidoAtualizado.status);
        
        // 3. Verificar se foi salvo corretamente
        const pedidoVerificado = await servicoPedidos.obterPorId(pedido.id);
        console.log('🔍 Verificação - Status salvo:', pedidoVerificado.status);
        
        if (pedidoVerificado.status === 'pendente') {
          console.log('✅ Teste PASSOU - Status foi atualizado corretamente!');
        } else {
          console.log('❌ Teste FALHOU - Status não foi salvo corretamente');
        }
      } else {
        console.log('ℹ️ Pedido não está em rascunho, status atual:', pedido.status);
      }
    } else {
      console.log('⚠️ Nenhum pedido encontrado para testar');
    }
  } catch (error) {
    console.error('❌ Erro no teste:', error);
  }
};

console.log('🧪 Teste de pedido carregado! Use window.testePedido() para executar');