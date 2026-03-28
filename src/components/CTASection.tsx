'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { WHATSAPP_LINK } from '@/lib/constants'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const bgImageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Content reveal
      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Parallax bg
      if (bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div ref={bgImageRef} className="absolute inset-[-20%] w-[140%] h-[140%]">
          <Image
            src="/images/arcade.jpg"
            alt="Arcade gaming NB"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-nb-dark via-nb-dark/80 to-nb-dark" />
      </div>

      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nb-green-primary/8 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div
          ref={contentRef}
          className="text-center glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 border-nb-green-primary/20 relative overflow-hidden"
        >
          {/* Scan line effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-nb-green-primary/20 to-transparent"
              style={{ animation: 'scan-line 4s linear infinite' }}
            />
          </div>

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-nb-green-primary/30 rounded-tl-2xl sm:rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-nb-green-primary/30 rounded-tr-2xl sm:rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-nb-green-primary/30 rounded-bl-2xl sm:rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-nb-green-primary/30 rounded-br-2xl sm:rounded-br-3xl" />

          <div className="relative z-10">
            <div className="section-label mx-auto w-fit mb-6">
              ¿Listo para el siguiente nivel?
            </div>

            <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
              <span className="text-white">Lleva la </span>
              <span className="text-gradient-animated">Zona Gamer NB</span>
              <br />
              <span className="text-white">a tu evento</span>
            </h2>

            <p className="text-nb-text-muted text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Cotiza ahora y asegura una experiencia única para tus invitados.
              Montaje profesional, equipos de primera y diversión garantizada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-sm sm:text-base"
                id="cta-final-whatsapp"
                style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Cotizar por WhatsApp
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
