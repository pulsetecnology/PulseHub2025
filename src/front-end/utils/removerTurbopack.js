// Função para remover elementos do Turbopack dinamicamente
export function removerIconeTurbopack() {
  if (typeof window === 'undefined') return;

  const removerElementos = () => {
    // Selecionar todos os elementos que podem ser o ícone do Turbopack
    const seletores = [
      '#__next-build-watcher',
      '.__next-dev-overlay',
      '.__next-dev-overlay-backdrop',
      '[data-nextjs-toast]',
      '[data-nextjs-dialog-overlay]',
      '.__turbopack_dev_overlay',
      '.__turbopack_build_indicator',
      '[id*="turbopack"]',
      '[class*="turbopack"]',
      '[data-turbopack]',
      'div[style*="position: fixed"][style*="bottom"][style*="right"]',
      'div[style*="position:fixed"][style*="bottom"][style*="right"]'
    ];

    seletores.forEach(seletor => {
      try {
        const elementos = document.querySelectorAll(seletor);
        elementos.forEach(elemento => {
          if (elemento) {
            elemento.remove();
          }
        });
      } catch (error) {
        // Ignorar erros de seletor
      }
    });

    // Verificar elementos por conteúdo de texto
    const todosElementos = document.querySelectorAll('div');
    todosElementos.forEach(elemento => {
      const texto = elemento.textContent?.toLowerCase() || '';
      const title = elemento.title?.toLowerCase() || '';
      
      if (texto.includes('turbopack') || title.includes('turbopack')) {
        elemento.remove();
      }
    });
  };

  // Executar imediatamente
  removerElementos();

  // Executar periodicamente para capturar elementos criados dinamicamente
  const intervalo = setInterval(removerElementos, 1000);

  // Observar mudanças no DOM
  const observer = new MutationObserver(() => {
    removerElementos();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Limpar após 30 segundos (quando a aplicação já carregou)
  setTimeout(() => {
    clearInterval(intervalo);
    observer.disconnect();
  }, 30000);
}

// Auto-executar quando o DOM estiver pronto
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removerIconeTurbopack);
  } else {
    removerIconeTurbopack();
  }
}