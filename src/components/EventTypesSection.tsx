'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { EVENT_TYPES } from '@/lib/constants'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function EventTypesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

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

      // Animate each card on scroll
      const cards = sectionRef.current?.querySelectorAll('.event-card')
      if (cards) {
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { x: i % 2 === 0 ? -80 : 80, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          )
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="eventos"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nb-dark via-nb-surface/30 to-nb-dark" />
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="section-label mx-auto w-fit">
            Tipos de Evento
          </div>
          <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">Perfecto para </span>
            <span className="text-gradient">cualquier tipo</span>
            <br />
            <span className="text-white">de evento</span>
          </h2>
        </div>

        {/* Desktop: Interactive cards */}
        <div className="hidden lg:grid grid-cols-2 gap-8">
          {/* Left: Event list */}
          <div className="space-y-4">
            {EVENT_TYPES.map((event, idx) => (
              <motion.div
                key={event.title}
                onClick={() => setActiveIndex(idx)}
                whileHover={{ x: 8 }}
                className={`event-card cursor-pointer rounded-xl p-6 border transition-all duration-500 ${
                  activeIndex === idx
                    ? 'glass-card border-nb-green-primary/40 shadow-[0_0_30px_rgba(4,191,51,0.1)]'
                    : 'border-transparent hover:border-nb-border bg-transparent'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center font-[var(--font-heading)] font-bold text-lg transition-all duration-500 ${
                      activeIndex === idx
                        ? 'bg-gradient-to-br from-nb-green-primary to-nb-green-dark text-white'
                        : 'bg-nb-surface border border-nb-border text-nb-text-muted'
                    }`}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-[var(--font-heading)] text-lg font-bold mb-1 transition-colors duration-300 ${
                        activeIndex === idx ? 'text-nb-green-primary' : 'text-white'
                      }`}
                    >
                      {event.title}
                    </h3>
                    <p className="text-sm text-nb-text-muted">{event.description}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === idx ? 45 : 0 }}
                    className="text-nb-green-primary"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Image showcase */}
          <div className="relative rounded-2xl overflow-hidden h-[500px] glow-green">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={EVENT_TYPES[activeIndex].image}
                  alt={EVENT_TYPES[activeIndex].title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-nb-dark via-nb-dark/30 to-transparent" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-nb-green-primary font-[var(--font-heading)] text-xs tracking-[0.2em] uppercase">
                      {String(activeIndex + 1).padStart(2, '0')} / {String(EVENT_TYPES.length).padStart(2, '0')}
                    </span>
                    <h3 className="font-[var(--font-heading)] text-2xl font-bold text-white mt-2">
                      {EVENT_TYPES[activeIndex].title}
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-nb-green-primary/40" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-nb-green-primary/40" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-nb-green-primary/40" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-nb-green-primary/40" />
          </div>
        </div>

        {/* Mobile: Stacked cards */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {EVENT_TYPES.map((event, idx) => (
            <motion.div
              key={event.title}
              whileHover={{ y: -4 }}
              className="event-card group relative rounded-xl overflow-hidden h-72 sm:h-80"
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nb-dark via-nb-dark/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-nb-green-primary font-[var(--font-heading)] text-xs font-bold">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="h-[1px] flex-1 bg-nb-green-primary/30" />
                </div>
                <h3 className="font-[var(--font-heading)] text-lg font-bold text-white mb-1">
                  {event.title}
                </h3>
                <p className="text-sm text-nb-text-muted">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
