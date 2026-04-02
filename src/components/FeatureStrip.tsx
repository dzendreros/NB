'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FEATURE_STRIP } from '@/lib/constants'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function FeatureStrip() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      if (itemsRef.current) {
        gsap.fromTo(
          itemsRef.current.children,
          { y: 40, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      {/* Border top */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-nb-green-primary/30 to-transparent" />

      <div className="feature-strip-bg py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={itemsRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {FEATURE_STRIP.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="feature-strip-item group flex flex-col sm:flex-row items-center gap-3 px-4 py-4 rounded-xl cursor-default"
              >
                <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {item.icon}
                </span>
                <span className="text-center sm:text-left text-xs sm:text-sm font-semibold text-nb-text/90 group-hover:text-white transition-colors duration-300 leading-tight">
                  {item.label}
                </span>
                {/* Glow dot indicator */}
                <div className="hidden sm:block ml-auto w-1.5 h-1.5 rounded-full bg-nb-green-primary/40 group-hover:bg-nb-green-primary transition-colors duration-300 flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Border bottom */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-nb-green-primary/30 to-transparent" />
    </div>
  )
}
