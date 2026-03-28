import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  // Opcional: Descomenta y ajusta esta línea si el proyecto no alojará en la raíz del dominio
  // basePath: '/nb-gaming',
  images: {
    unoptimized: true, // Necesario para páginas estáticas de GitHub Pages
    formats: ['image/webp', 'image/avif'],
  },
}

export default nextConfig
