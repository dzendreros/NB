'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function FloatingInstagram() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Retrasar la aparición ligeramente para que no compita con el hero
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const INSTAGRAM_URL = "https://www.instagram.com/eventossocialesnb?igsh=czFnaTc2aXZ0cjd6"

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[90] flex items-center justify-center"
        >
          {/* Subtle pulse behind  */}
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.4, 0, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] blur-xl pointer-events-none"
          />

          <motion.a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            className="relative flex items-center justify-center p-[20px] sm:p-4 rounded-full bg-[#111]/80 backdrop-blur-md border border-white/10 shadow-[0_4_20px_rgba(0,0,0,0.5)] overflow-hidden group transition-all duration-300"
            whileHover={{ scale: 1.09 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Instagram Gradient Background on Hover */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]"
            />

            <div className="relative z-10 flex items-center justify-center text-white shrink-0">
              {/* Default Gradient Icon */}
              <motion.svg 
                width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="url(#ig-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                className="transition-all duration-300"
                animate={{ opacity: isHovered ? 0 : 1 }}
                style={{ position: isHovered ? 'absolute' : 'relative' }}
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                <defs>
                   <linearGradient id="ig-grad" x1="2" y1="2" x2="22" y2="22">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                   </linearGradient>
                </defs>
              </motion.svg>

              {/* White Icon on Hover */}
              <motion.svg 
                width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                className="transition-all duration-300"
                animate={{ opacity: isHovered ? 1 : 0 }}
                style={{ position: isHovered ? 'relative' : 'absolute' }}
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </motion.svg>
            </div>

            {/* Expansible Text */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ 
                width: isHovered ? "auto" : 0, 
                opacity: isHovered ? 1 : 0,
                marginLeft: isHovered ? 12 : 0
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative z-10 overflow-hidden whitespace-nowrap"
            >
              <span className="text-sm font-semibold text-white tracking-wide pr-1">
                @eventossocialesnb
              </span>
            </motion.div>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
