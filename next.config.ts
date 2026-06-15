import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'api.microlink.io',
      'images.unsplash.com',
      'assets.aceternity.com',
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
