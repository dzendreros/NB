'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TESTIMONIALS, CLIENT_LOGOS } from '@/lib/constants'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} estrellas`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={star <= Math.floor(rating) ? '#04BF33' : star - 0.5 <= rating ? 'url(#half)' : '#333'}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#04BF33" />
              <stop offset="50%" stopColor="#333" />
            </linearGradient>
          </defs>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function SocialProofSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)

  const total = TESTIMONIALS.length

  const go = useCallback((dir: 1 | -1) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + total) % total)
  }, [total])

  // Auto-advance every 6s
  useEffect(() => {
    const id = setInterval(() => go(1), 6000)
    return () => clearInterval(id)
  }, [go])

  // Touch/swipe support
  const touchStartX = useRef<number | null>(null)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1)
    touchStartX.current = null
  }

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

      if (marqueeRef.current) {
        const marqueeInner = marqueeRef.current.querySelector('.marquee-inner')
        if (marqueeInner) {
          gsap.to(marqueeInner, {
            xPercent: -50,
            duration: 25,
            ease: 'none',
            repeat: -1,
          })
        }
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  }

  // Visible window: show 3 testimonials (centered) on desktop, 1 on mobile
  const visibleIndexes = [
    (current - 1 + total) % total,
    current,
    (current + 1) % total,
  ]

  return (
    <section
      ref={sectionRef}
      id="clientes"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nb-dark via-nb-surface/20 to-nb-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-nb-green-primary/3 blur-[200px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="section-label mx-auto w-fit glow-green">
            Resultados Reales
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black mb-6 leading-tight">
            <span className="text-gradient-animated glow-text">+50,000 personas</span>
            <span className="text-white"> ya lo vivieron</span>
          </h2>
          <p className="text-nb-text/80 text-base sm:text-xl font-medium drop-shadow-md">
            Grandes marcas ya confían en la adrenalina de NB Gaming
          </p>
        </div>

        {/* Logo Marquee */}
        <div ref={marqueeRef} className="relative overflow-hidden py-8 mb-20">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-nb-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-nb-dark to-transparent z-10" />

          <div className="marquee-inner flex gap-8 w-max">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((name, idx) => (
              <div
                key={`${name}-${idx}`}
                className="flex-shrink-0 glass-card rounded-xl px-10 py-6 flex items-center justify-center min-w-[200px] group hover:border-nb-green-primary/30 transition-all duration-500"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-nb-green-dark/40 to-nb-green-primary/20 flex items-center justify-center">
                    <span className="text-nb-green-primary font-[var(--font-heading)] font-bold text-xs">
                      {name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-[var(--font-heading)] text-sm font-bold text-nb-text-muted tracking-wider group-hover:text-white transition-colors duration-300">
                    {name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── TESTIMONIAL CAROUSEL ─── */}
        <div className="relative">
          {/* Desktop: 3-up view */}
          <div
            className="hidden md:grid grid-cols-3 gap-5"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {visibleIndexes.map((tIdx, pos) => {
              const t = TESTIMONIALS[tIdx]
              const isCenter = pos === 1
              return (
                <motion.div
                  key={`${tIdx}-${pos}`}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: isCenter ? 1 : 0.5, y: 0, scale: isCenter ? 1 : 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`glass-card rounded-xl p-6 sm:p-8 flex flex-col gap-4 transition-all duration-500 ${isCenter ? 'border-nb-green-primary/40 shadow-[0_0_40px_rgba(4,191,51,0.1)]' : ''}`}
                >
                  <StarRating rating={t.rating} />
                  <p className="text-nb-text/90 text-sm sm:text-base leading-relaxed italic flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-nb-border">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                      style={{ backgroundColor: t.avatarColor }}
                    >
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.author}</p>
                      <p className="text-nb-text-muted text-xs">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Mobile: single card swipe */}
          <div
            className="md:hidden relative overflow-hidden rounded-xl"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ minHeight: '280px' }}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-xl p-6 flex flex-col gap-4 border-nb-green-primary/30"
              >
                <StarRating rating={TESTIMONIALS[current].rating} />
                <p className="text-nb-text/90 text-sm leading-relaxed italic flex-1">
                  &ldquo;{TESTIMONIALS[current].quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-nb-border">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                    style={{ backgroundColor: TESTIMONIALS[current].avatarColor }}
                  >
                    {TESTIMONIALS[current].author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{TESTIMONIALS[current].author}</p>
                    <p className="text-nb-text-muted text-xs">{TESTIMONIALS[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full glass-card border-nb-green-primary/30 flex items-center justify-center text-nb-green-primary hover:border-nb-green-primary hover:bg-nb-green-primary/10 transition-all duration-300"
              aria-label="Testimonio anterior"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2 bg-nb-green-primary'
                      : 'w-2 h-2 bg-nb-text-muted/40 hover:bg-nb-text-muted/70'
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full glass-card border-nb-green-primary/30 flex items-center justify-center text-nb-green-primary hover:border-nb-green-primary hover:bg-nb-green-primary/10 transition-all duration-300"
              aria-label="Testimonio siguiente"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
