import React, { useEffect } from 'react';
// Importar primeiro o Tailwind CSS
import '../src/front-end/estilos/globals.css';
// Depois importar os estilos personalizados
import '../src/front-end/estilos/styles.css';
// Importar script para remover Turbopack
import { removerIconeTurbopack } from '../src/front-end/utils/removerTurbopack';

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

  return <Component {...pageProps} />;
}

export default MyApp;