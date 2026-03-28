'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const clientNames = [
  'TESLA CORP',
  'NEXUS TECH',
  'GLOBAL INC',
  'APEX GROUP',
  'SYNTH CO',
  'VOLTA LABS',
  'PRIME EVENTS',
  'ELITE MEDIA',
]

export default function SocialProofSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

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

      // Marquee animation
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

  return (
    <section
      ref={sectionRef}
      id="clientes"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nb-dark via-nb-surface/20 to-nb-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-nb-green-primary/3 blur-[200px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="section-label mx-auto w-fit">
            Prueba Social
          </div>
          <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Más de 500</span>
            <span className="text-white"> eventos realizados</span>
          </h2>
          <p className="text-nb-text-muted text-base sm:text-lg">
            Empresas que ya confiaron en nosotros
          </p>
        </div>

        {/* Logo Marquee */}
        <div ref={marqueeRef} className="relative overflow-hidden py-8">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-nb-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-nb-dark to-transparent z-10" />

          <div className="marquee-inner flex gap-8 w-max">
            {/* Double the items for seamless loop */}
            {[...clientNames, ...clientNames].map((name, idx) => (
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

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            {
              quote: 'El montaje fue increíble. Nuestros invitados no paraban de jugar. ¡Repetiremos seguro!',
              author: 'María G.',
              role: 'Evento Corporativo',
              rating: 5,
            },
            {
              quote: 'La zona gamer fue el hit de la fiesta de mi hijo. Todos los niños la pasaron genial.',
              author: 'Carlos R.',
              role: 'Cumpleaños',
              rating: 5,
            },
            {
              quote: 'Profesionales de primera. La activación tuvo una respuesta brutal del público.',
              author: 'Ana M.',
              role: 'Activación de Marca',
              rating: 5,
            },
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-xl p-6 sm:p-8 group hover:border-nb-green-primary/30 transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#04BF33"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-nb-text/90 text-sm sm:text-base leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nb-green-primary to-nb-green-dark flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-nb-text-muted text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
