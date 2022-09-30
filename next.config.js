/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://unsplash.com/'],
  },
};

module.exports = nextConfig;
