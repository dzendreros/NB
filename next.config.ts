import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/NB',
  images: {
    unoptimized: true,
  },
}

export default nextConfig