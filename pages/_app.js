import React from 'react';
// Importar primeiro o Tailwind CSS
import '../src/front-end/estilos/globals.css';
// Depois importar os estilos personalizados
import '../src/front-end/estilos/styles.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;