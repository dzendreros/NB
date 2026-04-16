'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { PACKAGES } from '@/lib/constants'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="flex-shrink-0 text-nb-green-primary">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 80, opacity: 0, scale: 0.92 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="paquetes"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nb-dark via-nb-surface/20 to-nb-dark" />
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-nb-green-primary/4 blur-[200px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="section-label mx-auto w-fit glow-green">
            Nuestros Paquetes
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black mb-6 leading-tight">
            <span className="text-white">Elige la </span>
            <span className="text-gradient-animated glow-text">experiencia perfecta</span>
          </h2>
          <p className="text-nb-text/80 text-base sm:text-xl font-medium">
            Todos los paquetes incluyen transporte, montaje y desmontaje.
            Cotiza sin compromiso.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`pricing-card relative flex flex-col rounded-2xl overflow-hidden ${
                pkg.highlight
                  ? 'pricing-card--highlight'
                  : 'glass-card shadow-[0_0_0_1px_rgba(255,255,255,0.08)]'
              }`}
            >
              {/* Highlight glow ring */}
              {pkg.highlight && (
                <div className="absolute inset-0 rounded-2xl pricing-highlight-ring pointer-events-none" />
              )}

              {/* Image banner inside the card */}
              {pkg.image && (
                <div className="relative w-full h-40 sm:h-48 border-b border-nb-green-primary/20">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                   //  className="object-cover transition-transform duration-700 group-hover:scale-105"
                   className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nb-dark to-transparent opacity-80" />
                </div>
              )}

              {/* Badge */}
              {pkg.badge && (
                <div className={`absolute top-4 right-4 z-20 px-4 py-1.5 rounded-full text-xs font-[var(--font-heading)] font-black tracking-wider uppercase shadow-xl ${
                  pkg.highlight
                    ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white border border-orange-400/50 shadow-orange-500/30'
                    : 'bg-nb-green-primary/20 text-nb-green-primary border border-nb-green-primary/40'
                }`}>
                  {pkg.badge}
                </div>
              )}

              <div className="p-7 sm:p-8 flex flex-col flex-1 items-center text-center">
                {/* Package name */}
                <div className="mb-6">
                  <h3 className={`font-[var(--font-heading)] text-lg sm:text-xl font-black tracking-wide mb-2 ${
                    pkg.highlight ? 'text-nb-green-primary' : 'text-white'
                  }`}>
                    {pkg.name}
                  </h3>
                  <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-nb-green-primary to-transparent mx-auto" />
                </div>

                {/* Features list */}
                <ul className="space-y-3 flex-1 mb-8 flex flex-col w-full px-2 sm:px-4 text-left">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 w-full">
                      <div className="mt-0.5 flex-shrink-0"><CheckIcon /></div>
                      <span className="text-sm text-nb-text/85 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href={pkg.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-lg text-xs font-[var(--font-heading)] font-bold tracking-wider uppercase transition-all duration-300 ${
                    pkg.highlight
                      ? 'btn-primary'
                      : 'btn-outline'
                  }`}
                  id={`pricing-cta-${pkg.id}`}
                >
                  <WhatsAppIcon />
                  {pkg.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
