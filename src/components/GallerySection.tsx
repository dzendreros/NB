'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const galleryImages = [
  {
    src: '/images/simulador vr.jpg',
    alt: 'Simulador de Realidad Virtual',
    label: 'VR Experience',
  },
  {
    src: '/images/arcade.jpg',
    alt: 'Máquinas Arcade',
    label: 'Arcade Zone',
  },
  {
    src: '/images/simulador carro.jpg',
    alt: 'Simulador de Carreras',
    label: 'Racing Sim',
  },
  {
    src: '/images/futbolito.jpg',
    alt: 'Futbolito',
    label: 'Futbolito Pro',
  },
]

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Title reveal
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

      // Gallery items stagger with scale
      if (galleryRef.current) {
        const items = galleryRef.current.querySelectorAll('.gallery-item')
        items.forEach((item, i) => {
          gsap.fromTo(
            item,
            {
              y: 100,
              opacity: 0,
              scale: 0.85,
              rotateY: i % 2 === 0 ? -5 : 5,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotateY: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          )
        })
      }

      // Horizontal scroll effect for gallery on scroll (subtle)
      if (galleryRef.current && window.innerWidth >= 1024) {
        gsap.to(galleryRef.current, {
          xPercent: -5,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label mx-auto w-fit">
            Nuestro Equipo
          </div>
          <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">Equipos de </span>
            <span className="text-gradient">nivel profesional</span>
          </h2>
          <p className="text-nb-text-muted text-base sm:text-lg">
            Cada experiencia cuenta con equipos de primera calidad y mantenimiento constante.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {galleryImages.map((image, idx) => (
            <motion.div
              key={image.label}
              whileHover={{ y: -8 }}
              className={`gallery-item group relative rounded-2xl overflow-hidden cursor-pointer ${
                idx === 0 ? 'sm:row-span-2 sm:col-span-1 h-72 sm:h-full' : 'h-56 sm:h-64'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-nb-dark/90 via-nb-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Green glow on hover */}
              <div className="absolute inset-0 bg-nb-green-primary/0 group-hover:bg-nb-green-primary/5 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-nb-green-primary" />
                  <span className="text-[10px] font-[var(--font-heading)] text-nb-green-primary tracking-[0.15em] uppercase">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-[var(--font-heading)] text-base sm:text-lg font-bold text-white group-hover:text-nb-green-primary transition-colors duration-300">
                  {image.label}
                </h3>
              </div>

              {/* Corner frame */}
              <div className="absolute top-3 right-3 w-6 h-6 border-r border-t border-nb-green-primary/0 group-hover:border-nb-green-primary/50 transition-all duration-500" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-l border-b border-nb-green-primary/0 group-hover:border-nb-green-primary/50 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
