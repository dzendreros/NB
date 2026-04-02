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
    src: '/NB/images/IMG_20260213_202412.jpg',
    alt: 'Evento real NB Gaming',
    label: 'Evento Real',
    isReal: true,
    spanClass: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: '/NB/images/IMG_20260213_203120.jpg',
    alt: 'Zona gamer en evento',
    label: 'Evento Real',
    isReal: true,
    spanClass: 'col-span-1 row-span-1',
  },
  {
    src: '/NB/images/simulador vr.jpg',
    alt: 'Simulador de Realidad Virtual',
    label: 'Realidad Virtual (VR)',
    isReal: false,
    spanClass: 'col-span-1 row-span-1',
  },
  {
    src: '/NB/images/IMG_20260213_203702.jpg',
    alt: 'Evento gaming premium',
    label: 'Evento Real',
    isReal: true,
    spanClass: 'sm:col-span-2 sm:row-span-1',
  },
  {
    src: '/NB/images/simulador carro2.jpg',
    alt: 'Simulador de Carreras',
    label: 'F1 Racing Sim',
    isReal: false,
    spanClass: 'col-span-1 row-span-1',
  },
  {
    src: '/NB/images/arcade.jpg',
    alt: 'Máquinas Arcade',
    label: 'Arcade Zone',
    isReal: false,
    spanClass: 'col-span-1 row-span-1',
  },
  {
    src: '/NB/images/IMG_20260130_145222.jpg',
    alt: 'Zona gamer exterior evento',
    label: 'Evento Real',
    isReal: true,
    spanClass: 'sm:col-span-2 sm:row-span-1',
  },
  {
    src: '/NB/images/futbolito2.jpg',
    alt: 'Mesa de Futbolito',
    label: 'Torneo de Futbolito',
    isReal: false,
    spanClass: 'col-span-1 row-span-1',
  },
  {
    src: '/NB/images/simulador de box.jpg',
    alt: 'Simulador de Box',
    label: 'Punching Box',
    isReal: false,
    spanClass: 'col-span-1 row-span-1',
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

      // Gallery items stagger
      if (galleryRef.current) {
        const items = galleryRef.current.querySelectorAll('.bento-item')
        items.forEach((item, i) => {
          gsap.fromTo(
            item,
            { y: 80, opacity: 0, scale: 0.9, rotateX: 10 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotateX: 0,
              duration: 1.2,
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experiencia"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label mx-auto w-fit glow-green-intense bg-nb-green-primary/10">
            El Arsenal
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
            <span className="text-white">Galería de </span>
            <span className="text-gradient-animated glow-text">Eventos Reales</span>
          </h2>
          <p className="text-nb-text/80 text-base sm:text-lg font-medium">
            Así lucen nuestras zonas gamer en acción. Calidad premium garantizada en cada evento.
          </p>
        </div>

        {/* Gallery Bento Grid */}
        <div ref={galleryRef} className="bento-grid">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              className={`bento-item group ${image.spanClass}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-nb-dark via-nb-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Green flash on hover */}
              <div className="absolute inset-0 bg-nb-green-primary/0 group-hover:bg-nb-green-primary/20 transition-colors duration-500 mix-blend-overlay" />

              {/* "Evento Real" badge for real event photos */}
              {image.isReal && (
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-nb-green-primary/20 backdrop-blur-md border border-nb-green-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-nb-green-primary animate-pulse" />
                  <span className="text-[9px] font-[var(--font-heading)] text-nb-green-primary tracking-[0.15em] uppercase font-bold">
                    Evento Real
                  </span>
                </div>
              )}

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2 opacity-70 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 rounded-full bg-nb-green-primary animate-pulse" />
                  <span className="text-[10px] font-[var(--font-heading)] text-nb-green-primary tracking-[0.2em] uppercase">
                    {image.isReal ? 'Evento Real' : `Unidad ${String(idx + 1).padStart(2, '0')}`}
                  </span>
                </div>
                <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl font-black text-white group-hover:text-nb-green-light transition-colors duration-300 drop-shadow-lg">
                  {image.label}
                </h3>
              </div>

              {/* Cyber corner frames */}
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/20 group-hover:border-nb-green-primary shadow-[0_0_15px_rgba(4,191,51,0)] group-hover:shadow-[0_0_15px_rgba(4,191,51,0.5)] transition-all duration-500" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/20 group-hover:border-nb-green-primary shadow-[0_0_15px_rgba(4,191,51,0)] group-hover:shadow-[0_0_15px_rgba(4,191,51,0.5)] transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
