import type { Metadata } from 'next'
import { Orbitron, Inter } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NB Gaming Experience | Zona Gamer para Eventos',
  description:
    'Lleva la experiencia gaming a tu evento. Simuladores, VR, Arcade y más. Montaje profesional de zona gamer para fiestas, corporativos, activaciones de marca y cumpleaños.',
  keywords: [
    'zona gamer',
    'eventos gaming',
    'simulador VR',
    'arcade para eventos',
    'activaciones de marca',
    'fiestas gaming',
    'eventos corporativos',
    'NB Gaming Experience',
  ],
  authors: [{ name: 'Eventos NB' }],
  openGraph: {
    title: 'NB Gaming Experience | Zona Gamer para Eventos',
    description:
      'Lleva la experiencia gaming a tu evento. Simuladores, VR, Arcade y más.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'NB Gaming Experience',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NB Gaming Experience | Zona Gamer para Eventos',
    description:
      'Lleva la experiencia gaming a tu evento. Simuladores, VR, Arcade y más.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${orbitron.variable} ${inter.variable}`}>
      <body className="bg-nb-dark text-nb-text antialiased">
        {children}
      </body>
    </html>
  )
}
