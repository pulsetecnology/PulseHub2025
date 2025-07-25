/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR',
  },
  images: {
    domains: ['localhost'],
    formats: ['image/webp'],
  },
  eslint: {
    dirs: ['src/front-end'],
  },
  experimental: {
    serverActions: false,
  },
  // Desabilitar completamente os indicadores de desenvolvimento
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  // Desabilitar o overlay de compilação
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Configurar o diretório de páginas
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Desabilitar todos os overlays de desenvolvimento
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

module.exports = nextConfig;