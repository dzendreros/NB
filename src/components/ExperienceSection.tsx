'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EVENT_CATEGORIES } from '@/lib/constants'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Title reveal
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

      // Cards stagger
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 80, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experiencia"
      className="relative section-padding overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-nb-green-primary/5 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="section-label mx-auto w-fit glow-green">
            Hazlo épico
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black mb-6 leading-tight">
            <span className="text-white">No dejes que tu evento sea </span>
            <span className="text-gradient-animated glow-text">uno más del montón</span>
          </h2>
          <p className="text-nb-text/90 text-base sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Evita el aburrimiento y sorprende a todos. Nuestra Zona Gamer garantiza horas de adrenalina con <span className="text-nb-green-light">cero estrés de organización</span>.
          </p>
        </div>

        {/* Category Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6"
        >
          {EVENT_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
              }}
              className="glass-card rounded-xl p-6 sm:p-8 text-center group cursor-pointer transition-all duration-500 hover:border-nb-green-primary/40 hover:shadow-[0_0_40px_rgba(4,191,51,0.1)]"
            >
              {/* Icon */}
              <div className="relative mb-5">
                <div className="text-4xl sm:text-5xl mb-2 transition-transform duration-500 group-hover:scale-110">
                  {category.icon}
                </div>
                <div className="absolute inset-0 bg-nb-green-primary/10 rounded-full blur-2xl scale-0 group-hover:scale-100 transition-transform duration-700" />
              </div>

              {/* Content */}
              <h3 className="font-[var(--font-heading)] text-sm sm:text-base font-bold text-white mb-2 group-hover:text-nb-green-primary transition-colors duration-300">
                {category.title}
              </h3>
              <p className="text-xs sm:text-sm text-nb-text-muted leading-relaxed">
                {category.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-5 h-[2px] w-0 bg-gradient-to-r from-nb-green-primary to-nb-green-light group-hover:w-full transition-all duration-700 mx-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
