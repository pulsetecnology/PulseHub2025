import React from 'react';
import type { AppProps } from 'next/app';
import '../estilos/globais.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;