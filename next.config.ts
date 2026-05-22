import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        hostname: new URL(process.env.NEXT_PUBLIC_API_BASE_URL!).hostname,
      },
    ],
  },
};

export default nextConfig;
