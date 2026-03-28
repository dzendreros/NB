import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/NB',          // 👈 MUY IMPORTANTE
  assetPrefix: '/NB/',      // 👈 también importante
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
}

export default nextConfig