'use client'

import { motion } from 'framer-motion'
import { URGENCY_BANNER } from '@/lib/constants'

export default function UrgencyBanner() {
  return (
    <div
      className="urgency-banner fixed top-0 left-0 right-0 z-[60] bg-[#DC2626] text-white"
      style={{ minHeight: '40px' }}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-center gap-3 py-2">
        {/* Pulsing warning icon */}
        <motion.span
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-base flex-shrink-0 select-none"
          aria-hidden="true"
        >
          ⚠️
        </motion.span>

        <p className="font-[var(--font-heading)] text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.12em] uppercase text-center">
          {URGENCY_BANNER.text}
        </p>

        <motion.span
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          className="text-base flex-shrink-0 select-none"
          aria-hidden="true"
        >
          ⚠️
        </motion.span>

        {/* CTA link — desktop only */}
        <a
          href={URGENCY_BANNER.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex ml-4 items-center gap-1.5 px-3 py-1 rounded text-[10px] font-[var(--font-heading)] font-bold tracking-wider uppercase bg-white text-[#DC2626] hover:bg-red-50 transition-colors duration-200 flex-shrink-0"
        >
          {URGENCY_BANNER.cta} →
        </a>
      </div>
    </div>
  )
}
