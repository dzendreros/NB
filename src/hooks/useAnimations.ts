'use client'

import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function useGSAP() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return ref
}

export function useScrollReveal(
  options: {
    y?: number
    x?: number
    opacity?: number
    duration?: number
    delay?: number
    stagger?: number
    start?: string
    end?: string
    scrub?: boolean | number
  } = {}
) {
  const ref = useRef<HTMLDivElement>(null)

  const {
    y = 60,
    x = 0,
    opacity = 0,
    duration = 1,
    delay = 0,
    stagger = 0.15,
    start = 'top 85%',
    end = 'bottom 20%',
    scrub = false,
  } = options

  useEffect(() => {
    if (!ref.current) return

    const children = ref.current.children
    const elements = children.length > 0 ? Array.from(children) : [ref.current]

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        { y, x, opacity },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start,
            end,
            scrub,
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [y, x, opacity, duration, delay, stagger, start, end, scrub])

  return ref
}

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: speed * 30,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [speed])

  return ref
}

export function useCountUp(end: number, duration: number = 2) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 80%',
        onEnter: () => {
          if (hasAnimated.current) return
          hasAnimated.current = true

          const obj = { value: 0 }
          gsap.to(obj, {
            value: end,
            duration,
            ease: 'power2.out',
            onUpdate: () => {
              if (ref.current) {
                ref.current.textContent = Math.floor(obj.value).toLocaleString()
              }
            },
          })
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [end, duration])

  return ref
}

export function useTextReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      const lines = ref.current?.querySelectorAll('.reveal-line')
      if (lines) {
        gsap.fromTo(
          lines,
          {
            y: '100%',
            opacity: 0,
          },
          {
            y: '0%',
            opacity: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, ref)

    return () => ctx.revert()
  }, [])

  return ref
}

export function useMagneticEffect() {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(ref.current, {
      x: x * 0.15,
      y: y * 0.15,
      duration: 0.4,
      ease: 'power2.out',
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.3)',
    })
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return ref
}
