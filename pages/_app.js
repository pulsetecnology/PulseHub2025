import React, { useEffect } from 'react';
// Importar primeiro o Tailwind CSS
import '../src/front-end/estilos/globals.css';
// Depois importar os estilos personalizados
import '../src/front-end/estilos/styles.css';
// Importar script para remover Turbopack
import { removerIconeTurbopack } from '../src/front-end/utils/removerTurbopack';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remover ícone do Turbopack
    removerIconeTurbopack();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;