'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const STATEMENT_TEXT = 'Creamos una zona gamer completa que se convierte en el centro de atención'

export default function StatementSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Parallax on background image
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 25,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      // Text clip-path reveal
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { clipPath: 'inset(0 100% 0 0)', opacity: 0.5 },
          {
            clipPath: 'inset(0 0% 0 0)',
            opacity: 1,
            duration: 1.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // Badge fade
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
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
      className="relative overflow-hidden"
      style={{ minHeight: '420px' }}
    >
      {/* Background image with parallax */}
      <div ref={bgRef} className="absolute inset-[-20%] w-[140%] h-[140%]">
        <Image
          src="/NB/images/IMG_20260213_202412.jpg"
          alt="Zona Gamer NB Gaming en evento real"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Semi-transparent dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-nb-dark/80 via-nb-dark/70 to-nb-dark/90" />

      {/* Scanlines */}
      <div className="absolute inset-0 statement-scanlines pointer-events-none opacity-30" />

      {/* Green light leak */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-nb-green-primary/8 blur-[120px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center flex flex-col items-center gap-8">
        {/* Badge */}
        <div ref={badgeRef} className="section-label mx-auto w-fit bg-nb-green-primary/10 glow-green">
          Nuestra Razón de Ser
        </div>

        {/* Statement text — clip reveal */}
        <h2
          ref={textRef}
          className="font-[var(--font-heading)] text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-tight text-white"
          style={{
            textShadow: '0 0 60px rgba(4,191,51,0.3), 0 2px 40px rgba(0,0,0,0.8)',
          }}
        >
          <span className="text-white">Creamos una </span>
          <span className="text-gradient-animated glow-text">zona gamer completa</span>
          <span className="text-white"> que se convierte en el </span>
          <span className="text-nb-green-light">centro de atención</span>
        </h2>

        {/* Neon underline decoration */}
        <div className="w-32 h-[3px] bg-gradient-to-r from-transparent via-nb-green-primary to-transparent mx-auto" style={{ boxShadow: '0 0 20px rgba(4,191,51,0.8)' }} />
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-nb-dark to-transparent" />
    </section>
  )
}
