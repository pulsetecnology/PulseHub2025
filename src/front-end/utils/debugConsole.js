// Utilitários de debug para o console do navegador
// Para usar: abra o console do navegador e digite: window.PulseHubDebug.clearStorage()

import { LocalStorageManager } from './localStorage';

window.PulseHubDebug = {
  // Limpar todo o localStorage
  clearStorage() {
    LocalStorageManager.clear();
    console.log('✅ LocalStorage limpo com sucesso!');
    console.log('🔄 Recarregue a página para ver as mudanças.');
  },

  // Ver informações do localStorage
  storageInfo() {
    const info = LocalStorageManager.getStorageInfo();
    console.log('📊 Informações do LocalStorage:');
    console.log(`   Usado: ${info.usedMB} MB`);
    console.log(`   Limite estimado: ${info.estimatedLimit}`);
    
    // Mostrar itens por tamanho
    const items = [];
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        const size = localStorage[key].length;
        items.push({ key, size, sizeMB: (size / 1024 / 1024).toFixed(3) });
      }
    }
    
    items.sort((a, b) => b.size - a.size);
    console.table(items);
  },

  // Limpar apenas pedidos
  clearPedidos() {
    LocalStorageManager.removeItem('pedidos');
    console.log('✅ Pedidos removidos do localStorage!');
    console.log('🔄 Recarregue a página para ver as mudanças.');
  },

  // Ver pedidos salvos
  verPedidos() {
    const pedidos = LocalStorageManager.getItem('pedidos', []);
    console.log(`📋 ${pedidos.length} pedidos encontrados:`);
    console.table(pedidos.map(p => ({
      id: p.id,
      numero: p.numero,
      status: p.status,
      total: p.total,
      cliente: p.cliente?.nomeFantasia || p.cliente?.razaoSocial
    })));
  }
};

console.log('🔧 PulseHub Debug Tools carregadas!');
console.log('💡 Use window.PulseHubDebug.clearStorage() para limpar o localStorage');
console.log('💡 Use window.PulseHubDebug.storageInfo() para ver informações de uso');