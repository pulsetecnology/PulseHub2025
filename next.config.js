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
  // Configurar o diretório de páginas
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

module.exports = nextConfig;