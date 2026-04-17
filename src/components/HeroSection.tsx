'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HERO_CONTENT } from '@/lib/constants'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const heroStats = [
  { value: '500+', label: 'Eventos' },
  { value: '10+', label: 'Años' },
  { value: '98%', label: 'Satisfacción' },
]

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const decorRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
      })

      // Image parallax on scroll
      gsap.to(imageRef.current, {
        scale: 1.2,
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Overlay darken on scroll
      gsap.to(overlayRef.current, {
        opacity: 0.95,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // HUD corners animate in
      const corners = sectionRef.current?.querySelectorAll('.hud-corner')
      if (corners) {
        tl.fromTo(
          corners,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.6, stagger: 0.08 },
          0.1
        )
      }

      // Badge entrance
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7 },
        0.3
      )

      // Main title entrance — clip reveal
      tl.fromTo(
        titleRef.current,
        { y: 80, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
        { y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)', duration: 1.4 },
        0.5
      )

      // Subtitle entrance
      tl.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.0 },
        0.9
      )

      // Tagline entrance
      tl.fromTo(
        taglineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        1.1
      )

      // CTA entrance with bounce
      tl.fromTo(
        ctaRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.5)' },
        1.4
      )

      // Stats bar entrance
      if (statsRef.current) {
        tl.fromTo(
          statsRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          1.8
        )
      }

      // Decorative elements
      if (decorRef.current) {
        tl.fromTo(
          decorRef.current.children,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: 'back.out(1.7)' },
          0.5
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0 w-full h-full scale-110">
        {/* <Image
          src="/NB/images/file_00000000c23071fd9abf93b6763c31e1.png"
          alt="NB Gaming Experience - Zona Gamer para Eventos"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        /> */}
      </div>

      {/* Multi-layer Overlays */}
      <div ref={overlayRef} className="absolute inset-0 hero-gradient-overlay opacity-65" />
      <div className="absolute inset-0 hero-side-gradient" />
      <div className="absolute inset-0 hero-vignette" />

      {/* Green ambient lights */}
      <div className="hero-green-bleed" style={{ top: '20%', left: '-10%' }} />
      <div className="hero-green-bleed" style={{ bottom: '-15%', right: '10%', width: '400px', height: '400px' }} />

      {/* Scan line */}
      <div className="hero-scanline" />

      {/* Top green line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-nb-green-primary to-transparent origin-center z-20"
      />

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* HUD Corners */}
      <div className="hud-corner hud-corner--tl" />
      <div className="hud-corner hud-corner--tr" />
      <div className="hud-corner hud-corner--bl" />
      <div className="hud-corner hud-corner--br" />

      {/* Decorative rings (desktop) */}
      <div ref={decorRef} className="hidden lg:block">
        <div className="hero-ring hero-ring-1" />
        <div className="hero-ring hero-ring-2" />
        <div className="hero-vertical-line" style={{ left: '8%', top: '15%', height: '70%', opacity: 0.2 }} />
        <div className="hero-vertical-line" style={{ right: '12%', top: '10%', height: '80%', opacity: 0.15 }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              backgroundColor: i % 2 === 0 ? 'rgba(4,191,51,0.4)' : 'rgba(4,191,51,0.2)',
              left: `${8 + i * 7.5}%`,
              top: `${10 + ((i * 17) % 70)}%`,
              animation: `particle-float ${3 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              boxShadow: i % 3 === 0 ? '0 0 6px rgba(4,191,51,0.5)' : 'none',
            }}
          />
        ))}
      </div>

      {/* ═══════ CONTENT ═══════ */}
      {/* Top offset: 40px urgency banner + 80px navbar = 120px */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-[140px] sm:pt-[160px] pb-16">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge — "ZONA GAMER PREMIUM" */}
          <div
            ref={badgeRef}
            className="inline-flex w-fit max-w-full items-center gap-1.5 px-2.5 py-1 rounded-full mb-3 border border-nb-green-primary/30 bg-nb-green-primary/5 backdrop-blur-md mx-auto"
            style={{ animation: 'glow-border 3s ease-in-out infinite' }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-nb-green-primary animate-pulse shrink-0" />

            <span className="font-[var(--font-heading)] text-[9px] sm:text-[11px] tracking-[0.1em] uppercase text-nb-green-primary font-semibold whitespace-nowrap">
              {HERO_CONTENT.badge}
            </span>
          </div>

          {/* "Para Eventos" — large subtitle above main title */}
          {/*  <p
            ref={subtitleRef}
            className="font-[var(--font-heading)] text-xl sm:text-2xl md:text-3xl font-bold text-nb-green-light tracking-wider uppercase mb-3"
          >
            {HERO_CONTENT.subtitle}
          </p> */}

          {/* Main Title — "Haz de tu evento algo completamente épico con Zona Gamer NB" */}
          <h1
            ref={titleRef}
            className="font-[var(--font-heading)] text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-black leading-[1.05] mb-6 hero-title-glitch"
          >
            <span className="text-white block">ZONA GAMER PREMIUM</span>
            <span className="text-gradient-animated block mt-2 lg:mt-3" style={{ textShadow: '0 0 60px rgba(4,191,51,0.6)' }}>
              PARA EVENTOS
            </span>
            {/* <span className="text-white block mt-2 lg:mt-3">
              con Zona Gamer NB
              <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 bg-nb-green-primary rounded-full ml-3 align-middle glow-green-intense" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
            </span> */}
          </h1>

          {/* Tagline — just above CTA */}
          <p
            ref={taglineRef}
            className="text-base sm:text-lg md:text-xl text-[#F0F0F0]/85 leading-relaxed font-medium italic mb-10"
          >
            &quot;{HERO_CONTENT.tagline}&quot;
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-14 justify-center items-center">
            {/* Primary — WhatsApp */}
            <motion.a
              href={HERO_CONTENT.primaryCtaLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-sm sm:text-base !py-4 !px-8"
              id="hero-cta-whatsapp"
              style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {HERO_CONTENT.primaryCta}
            </motion.a>

            {/* Secondary — Ver Paquetes */}
            <motion.a
              href={HERO_CONTENT.secondaryCtaLink}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline text-sm sm:text-base !py-4 !px-8 hover:bg-nb-green-primary/10"
              id="hero-cta-paquetes"
            >
              {HERO_CONTENT.secondaryCta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </div>

          {/* Mini stats row */}
          <div ref={statsRef} className="flex items-center justify-center gap-6 sm:gap-10">
            {heroStats.map((stat, idx) => (
              <div key={stat.label} className="flex items-center gap-3">
                {idx > 0 && (
                  <div className="w-[1px] h-8 bg-nb-green-primary/20 -ml-3 sm:-ml-5" />
                )}
                <div>
                  <div className="font-[var(--font-heading)] text-lg sm:text-xl font-bold text-nb-green-primary glow-text">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-nb-text-muted tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
            <div className="hidden sm:block flex-1 max-w-[120px]">
              <div className="hero-stat-bar w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Right side feature list — desktop */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="hidden xl:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col items-end gap-6 z-10"
      >
        {['VR', 'Arcade', 'Racing', 'Futbolito'].map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2 + i * 0.15 }}
            className="flex items-center gap-3 group cursor-default"
          >
            <span className="text-[10px] font-[var(--font-heading)] text-nb-text-muted/60 tracking-[0.15em] uppercase group-hover:text-nb-green-primary transition-colors duration-300">
              {name}
            </span>
            <div className="w-6 sm:w-10 h-[1px] bg-nb-green-primary/30 group-hover:bg-nb-green-primary group-hover:w-16 transition-all duration-500" />
            <div className="w-2 h-2 rounded-full border border-nb-green-primary/40 group-hover:bg-nb-green-primary/60 group-hover:scale-125 transition-all duration-300" />
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] text-nb-text-muted/60 font-[var(--font-heading)]">
          Descubre más
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-9 rounded-full border border-nb-green-primary/30 flex items-start justify-center p-1.5 backdrop-blur-sm"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1], height: ['6px', '10px', '6px'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 rounded-full bg-nb-green-primary"
          />
        </motion.div>
      </motion.div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-nb-green-primary/20 to-transparent z-10" />
    </section>
  )
}
