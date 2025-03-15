/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ext.same-assets.com', 'chuyendoisovn.info', 'static.vecteezy.com', 'ytedongthap.vn'],
  },
};

module.exports = nextConfig; 