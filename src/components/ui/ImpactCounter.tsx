'use client'
'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface StatItem {
  value: string
  numericValue: number
  suffix: string
  label: string
  desc: string
  prefix?: string
}

const stats: StatItem[] = [
  { value: '20,000', numericValue: 20000, suffix: '+', label: 'Youth Empowered', desc: 'Trained, mentored and supported young Nigerians across all 36 states.' },
  { value: '200', numericValue: 200, suffix: '+', label: 'Programs Delivered', desc: 'Local solutions that change lives, from entrepreneurship to civic education.' },
  { value: '300', numericValue: 300, suffix: '+', label: 'Volunteers Active', desc: 'Community leaders and trained volunteers driving impact nationwide.' },
]

function formatNumber(n:number): string {
  return n.toLocaleString('en-US')
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function AnimatedNumber({target, duration = 2000, started}: {target: number, duration?: number, started: boolean}) {
  const [current, setCurrent] = useState(0);
  const rafRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const animate = useCallback((timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp

    const elapsed = timestamp - startTimeRef.current
    const progress = Math.min(elapsed / duration, 1)
    const easedProgress = easeOutExpo(progress)

    setCurrent(Math.floor(easedProgress * target))

    if (progress < 1) {
      rafRef.current = requestAnimationFrame(animate)
    } else {
      setCurrent(target)
    }
  }, [target, duration])

  useEffect(() => {
    if (!started) return

    startTimeRef.current = null
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [started, animate])

  return <>{formatNumber(current)}</>
}

export default function ImpactCounter() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasAnimated])

  return (
     <section ref={sectionRef} className="py-10 lg:py-14 bg-cream">
      <div className="max-w-[1400px] mx-auto px-2 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-display text-[clamp(1.6rem,3.5vw,2.8rem)] text-charcoal">
            OUR <span className="accent-word">IMPACT</span>
          </h2>
          <p className="mt-4 text-charcoal text-base max-w-md mx-auto">
            Supporting youth leaders, educators, and advocates who fight for equity and progress.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 ">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`bg-white rounded-2xl p-8 lg:p-12 flex flex-col justify-start gap-5 min-h-[300px] transition-all duration-700 ${
                hasAnimated
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-charcoal/80">
                {stat.label}
              </p>
              <div className="mt-5">
                <div className="stat-number text-[clamp(2.5rem,4.5vw,3.8rem)] text-charcoal tabular-nums ">
                  {stat.prefix}
                  <AnimatedNumber
                    target={stat.numericValue}
                    started={hasAnimated}
                    duration={2200 + index * 300}
                  />
                  <span className="text-accent">{stat.suffix}</span>
                </div>
                <p className="text-charcoal/70 text-sm mt-3 leading-relaxed">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

}
