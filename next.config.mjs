/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other Next.js configurations
  swcMinify: true, // Enable SWC minification
  // If using experimental features
  experimental: {
    fontLoaders: true,
  },
};

module.exports = nextConfig;
