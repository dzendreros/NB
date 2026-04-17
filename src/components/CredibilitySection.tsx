'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { TRUST_POINTS } from '@/lib/constants'
import { useCountUp } from '@/hooks/useAnimations'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

function StatNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const countRef = useCountUp(value, 2.5)

  return (
    <div className="stat-number">
      <span ref={countRef}>0</span>
      {suffix}
    </div>
  )
}

export default function CredibilitySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Title
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
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

      // Stats
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // Cards
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 60, opacity: 0, rotateX: 15 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // Image parallax
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: imageRef.current,
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
      id="nosotros"
      className="relative section-padding overflow-hidden"
    >
      {/* BG */}
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-nb-green-primary/5 blur-[180px] -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="section-label mx-auto w-fit glow-green">
            Por Qué Nosotros
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black mb-6 leading-tight">
            <span className="text-gradient-animated glow-text">Experiencia Comprobada</span>
            <br />
            <span className="text-white">Cero improvisación</span>
          </h2>
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
          {[
            { value: 10, suffix: '+', label: 'Años de experiencia' },
            { value: 500, suffix: '+', label: 'Eventos realizados' },
            { value: 50, suffix: 'K+', label: 'Personas entretenidas' },
            { value: 98, suffix: '%', label: 'Satisfacción' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-6 sm:p-8 text-center group hover:border-nb-green-primary/30 transition-all duration-500"
            >
              <StatNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-xs sm:text-sm text-nb-text-muted mt-3 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden h-[350px] sm:h-[450px] order-2 lg:order-1">
            <div ref={imageRef} className="absolute inset-[-15%] w-[130%] h-[130%]">
              <Image
                src="/images/file_00000000dfb471f785005742663672df.png"
                alt="Experiencia VR en eventos NB Gaming"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-nb-dark/60 to-transparent" />

            {/* Decorative frame */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-nb-green-primary/50" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-nb-green-primary/50" />

            {/* Badge */}
            <div className="absolute bottom-6 left-6 glass-card rounded-lg px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-nb-green-primary animate-pulse" />
                <span className="text-xs font-[var(--font-heading)] text-white tracking-wider">
                  DESDE 2016
                </span>
              </div>
            </div>
          </div>

          {/* Trust Points */}
          <div ref={cardsRef} className="order-1 lg:order-2 space-y-4">
            {TRUST_POINTS.map((point) => (
              <motion.div
                key={point.title}
                whileHover={{ x: 8, transition: { duration: 0.3 } }}
                className="group flex items-start gap-5 p-5 rounded-xl border border-transparent hover:border-nb-green-primary/20 hover:bg-nb-surface/50 transition-all duration-500 cursor-default"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-nb-green-dark/30 to-nb-green-primary/10 border border-nb-green-primary/20 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(4,191,51,0.2)] transition-all duration-500">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-[var(--font-heading)] text-base sm:text-lg font-bold text-white mb-1 group-hover:text-nb-green-primary transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-sm text-nb-text-muted leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
