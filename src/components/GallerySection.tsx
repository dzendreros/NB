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
    src: '/NB/images/simulador vr.jpg',
    alt: 'Simulador de Realidad Virtual',
    label: 'Realidad Virtual (VR)',
    spanClass: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: '/NB/images/simulador carro2.jpg',
    alt: 'Simulador de Carreras',
    label: 'F1 Racing Sim',
    spanClass: 'sm:col-span-2 sm:row-span-1',
  },
  {
    src: '/NB/images/arcade.jpg',
    alt: 'Máquinas Arcade',
    label: 'Arcade Zone',
    spanClass: 'col-span-1 row-span-1',
  },
  {
    src: '/NB/images/futbolito2.jpg',
    alt: 'Mesa de Futbolito',
    label: 'Torneo de Futbolito',
    spanClass: 'col-span-1 row-span-1',
  },
  {
    src: '/NB/images/simulador de box.jpg',
    alt: 'Simulador de Box',
    label: 'Punching Box',
    spanClass: 'sm:col-span-2 sm:row-span-1',
  },
  {
    src: '/NB/images/arcade2.jpg',
    alt: 'Juegos Retro',
    label: 'Retro Gaming',
    spanClass: 'col-span-1 row-span-1',
  },
  {
    src: '/NB/images/futbolito.jpg',
    alt: 'Futbolito Pro',
    label: 'Futbolito Pro',
    spanClass: 'col-span-1 row-span-1',
  },
  {
    src: '/NB/images/simulador carro.jpg',
    alt: 'Simulador de Carreras Clásico',
    label: 'Pro Racing',
    spanClass: 'sm:col-span-2 sm:row-span-1',
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
        const items = galleryRef.current.querySelectorAll('.bento-item')
        items.forEach((item, i) => {
          gsap.fromTo(
            item,
            {
              y: 80,
              opacity: 0,
              scale: 0.9,
              rotateX: 10,
            },
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
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-is-6xl font-black mb-6 leading-tight">
            <span className="text-white">Conoce la </span>
            <span className="text-gradient-animated glow-text">Zona Gamer</span>
          </h2>
          <p className="text-nb-text/80 text-base sm:text-lg font-medium">
            Ocho atracciones estelares listas para detonar la diversión en tu evento. 
            Calidad premium garantizada.
          </p>
        </div>

        {/* Gallery Bento Grid */}
        <div
          ref={galleryRef}
          className="bento-grid"
        >
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

              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-nb-dark via-nb-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Green flash overlay */}
              <div className="absolute inset-0 bg-nb-green-primary/0 group-hover:bg-nb-green-primary/20 transition-colors duration-500 mix-blend-overlay" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2 opacity-70 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 rounded-full bg-nb-green-primary animate-pulse" />
                  <span className="text-[10px] font-[var(--font-heading)] text-nb-green-primary tracking-[0.2em] uppercase">
                    Unidad {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl font-black text-white group-hover:text-nb-green-light transition-colors duration-300 drop-shadow-lg">
                  {image.label}
                </h3>
              </div>

              {/* Cyber UI Corner frames */}
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/20 group-hover:border-nb-green-primary shadow-[0_0_15px_rgba(4,191,51,0)] group-hover:shadow-[0_0_15px_rgba(4,191,51,0.5)] transition-all duration-500" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/20 group-hover:border-nb-green-primary shadow-[0_0_15px_rgba(4,191,51,0)] group-hover:shadow-[0_0_15px_rgba(4,191,51,0.5)] transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
