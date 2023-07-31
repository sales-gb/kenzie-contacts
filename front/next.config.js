/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  serverRuntimeConfig: {
    NEXT_PUBLIC_BASE_URI_API: process.env.NEXT_PUBLIC_URL_BASE_NEXT,
  },
  publicRuntimeConfig: {
    BASE_URI_API: process.env.NEXT_PUBLIC_URL_BASE_NEXT,
    NEXT_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
  },
  images: {
    domains: [
      'localhost'
    ],
  },
  pageExtensions: ['tsx', 'jsx', 'js', 'ts'],
};

module.exports = nextConfig;
