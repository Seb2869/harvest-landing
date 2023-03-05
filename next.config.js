/** @type {import('next').NextConfig} */

const isProd = process.env.NEXT_PUBLIC_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? './' : '',
  poweredByHeader: false
}

module.exports = nextConfig
