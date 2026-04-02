'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import {
  WHATSAPP_LINK,
  NAV_ITEMS,
  FOOTER_SERVICES,
  FOOTER_SOCIALS,
  FOOTER_TAGLINE,
} from '@/lib/constants'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const SocialIcon = ({ type }: { type: string }) => {
  if (type === 'instagram') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
  if (type === 'facebook') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
  // tiktok
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z" />
    </svg>
  )
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!footerRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="relative border-t border-nb-border bg-nb-darker overflow-hidden">
      {/* Neon separator */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-nb-green-primary to-transparent footer-neon-line" />

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-nb-green-primary/4 blur-[150px] rounded-full pointer-events-none" />

      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* Top — Logo + Tagline */}
        <div className="flex flex-col items-center text-center mb-14 gap-5">
          <motion.div
            whileHover={{ scale: 1.04, filter: 'drop-shadow(0 0 16px rgba(4,191,51,0.5))' }}
            className="relative w-52 sm:w-64 h-16 sm:h-20"
          >
            <Image
              src="/NB/images/logo2.png"
              alt="NB Gaming Experience"
              fill
              className="object-contain"
            />
          </motion.div>
          <p className="text-nb-text-muted text-sm sm:text-base font-medium italic max-w-md leading-relaxed">
            {FOOTER_TAGLINE}
          </p>
        </div>

        {/* Neon separator mini */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-nb-green-primary/40 to-transparent mb-14" />

        {/* 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-14">
          {/* Servicios */}
          <div>
            <h4 className="font-[var(--font-heading)] text-xs font-bold text-white tracking-[0.15em] uppercase mb-5 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-nb-green-primary" />
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((svc) => (
                <li key={svc}>
                  <span className="text-sm text-nb-text-muted hover:text-nb-green-primary transition-colors duration-300 flex items-center gap-2 cursor-default group">
                    <span className="w-1 h-1 rounded-full bg-nb-green-primary/40 group-hover:bg-nb-green-primary transition-colors duration-300" />
                    {svc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-[var(--font-heading)] text-xs font-bold text-white tracking-[0.15em] uppercase mb-5 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-nb-green-primary" />
              Contacto
            </h4>
            <div className="space-y-3">
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-sm text-nb-text-muted hover:text-nb-green-primary transition-colors duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                +52 1 55 2850 0983
              </motion.a>
              <p className="text-sm text-nb-text-muted flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="flex-shrink-0" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Ciudad de México y área metropolitana
              </p>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="font-[var(--font-heading)] text-xs font-bold text-white tracking-[0.15em] uppercase mb-5 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-nb-green-primary" />
              Síguenos
            </h4>
            <div className="flex gap-3">
              {FOOTER_SOCIALS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-nb-text-muted hover:text-nb-green-primary hover:border-nb-green-primary/50 transition-all duration-300"
                >
                  <SocialIcon type={social.icon} />
                </motion.a>
              ))}
            </div>

            {/* Quick nav */}
            <div className="mt-6">
              <p className="text-[10px] font-[var(--font-heading)] text-nb-text-muted/60 tracking-[0.15em] uppercase mb-3">
                Navegación rápida
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-xs text-nb-text-muted hover:text-nb-green-primary transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom separator */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-nb-green-primary/20 to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-xs text-nb-text-muted text-center sm:text-left">
            © 2025 NB Gaming Experience. Todos los derechos reservados.
          </p>

          {/* Eventos NB — Corporate parent logo */}
          <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity duration-300">
            <span className="text-[10px] text-nb-text-muted tracking-wider uppercase">Una marca de</span>
            <div className="relative w-20 h-7">
              <Image
                src="/NB/images/logo.png"
                alt="Eventos NB"
                fill
                className="object-contain filter grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
