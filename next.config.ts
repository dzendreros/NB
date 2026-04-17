import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  // Solo exportar como estático en producción para no bloquear redirects en desarrollo
  output: isProd ? 'export' : undefined,
  basePath: '/zona-gamer',
  images: {
    unoptimized: true,
  },
  // Permitir acceso desde la red local para ver la app en otros dispositivos
  allowedDevOrigins: ['10.5.0.2', '127.0.0.1', 'localhost'],
}

// En desarrollo, redirigir automáticamente de / a /zona-gamer para evitar el error 404
if (!isProd) {
  nextConfig.redirects = async () => {
    return [
      {
        source: '/',
        destination: '/zona-gamer',
        basePath: false,
        permanent: false,
      },
    ]
  }
}

export default nextConfig