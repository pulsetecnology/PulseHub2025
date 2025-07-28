import React, { useEffect } from 'react';
// Importar primeiro o Tailwind CSS
import '../src/front-end/estilos/globals.css';
// Depois importar os estilos personalizados
import '../src/front-end/estilos/styles.css';
// Importar script para remover Turbopack
import { removerIconeTurbopack } from '../src/front-end/utils/removerTurbopack';
// Importar container de toast
import ContainerToast from '../src/front-end/componentes/notificacoes/ContainerToast';

// Carregar ferramentas de debug apenas em desenvolvimento
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  import('../src/front-end/utils/debugConsole');
  import('../src/front-end/utils/testePedido');
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Aplicar tema imediatamente para evitar flash
    const temaSalvo = localStorage.getItem('tema') || 'claro';
    if (temaSalvo === 'escuro') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Remover ícone do Turbopack
    removerIconeTurbopack();
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <ContainerToast />
    </>
  );
}

export default MyApp;