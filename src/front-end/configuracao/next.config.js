/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
    serverActions: true,
  },
};

module.exports = nextConfig;