/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ytedongthap.vn',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
      {
        protocol: 'https',
        hostname: 'chuyendoisovn.info',
      },
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
      },
    ],
    unoptimized: true
  },
  trailingSlash: false,
  poweredByHeader: false
};

module.exports = nextConfig; 