'use client'

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import SectionHeading from '../ui/SectionHeading';

interface Founder {
  name: string
  role: string
  bio: string
  image: string
}

const founders: Founder[] = [
  {
    name: 'OLAJIRE OMIKUNLE',
    role: 'Co-Founder',
    bio: 'A visionary leader committed to empowering Nigerian youth through innovative programs and strategic partnerships across the nation.',
    image: '/images/founders/jire1.png',
  },

  {
    name: 'TOPE IMASEKHA',
    role: 'Founding Member',
    bio: 'A seasoned relationship builder who forges strategic alliances with governments, organizations, and communities to advance youth empowerment.',
    image: '/images/founders/adesuwa1.png',
  },
  {
    name: 'MUKTAR SHAGAYA',
    role: 'Co-Founder',
    bio: 'An accomplished strategist with deep expertise in youth development, policy advocacy, and building sustainable social enterprises.',
    image: '/images/founders/mukthar1.png',
  },
  {
    name: 'GBOLAHAN OGUNNUSI',
    role: 'Founding Member',
    bio: 'A passionate advocate for education and community development, driving impactful programs that reach thousands of young Nigerians.',
    image: '/images/founders/gbolahan1.png',
  },
  {
    name: 'EIZU UWAOMA',
    role: 'Founding Member',
    bio: 'A results-driven leader focused on operational excellence and scaling initiatives that create lasting change in communities.',
    image: '/images/founders/eizu.png',
  },
  {
    name: 'AKINKUNMI THOMAS',
    role: 'Co-Founder',
    bio: 'A seasoned relationship builder who forges strategic alliances with governments, organizations, and communities to advance youth empowerment.',
    image: '/images/founders/akinkunmi1.png',
  },
]

export default function FoundersSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setHasAnimated(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section id="founders" ref={sectionRef} className="py-20 lg:py-10 bg-cream" aria-labelledby="founders-heading">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-6">
        <SectionHeading
          label="Leadership"
          title="Meet the Founders"
          subtitle="The visionaries behind Rising Generation's mission to empower Nigerian youth"
          accentWord="Founders"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {founders.map((founder, index) => (
            <article
              key={index}
              className={`group bg-white rounded-2xl overflow-hidden transition-all duration-700 ${hasAnimated
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
                }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Portrait */}
              <div className="aspect-[4/3.5] relative overflow-hidden">
                <Image
                  src={founder.image}
                  alt={`Portrait of ${founder.name}, ${founder.role}`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="p-6 transition-transform duration-300 group-hover:-translate-y-0.5">
                <h3 className="text-base font-bold text-charcoal mb-1">
                  {founder.name}
                </h3>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-teal mb-3">
                  {founder.role}
                </p>
                <p className="text-charcoal/50 text-sm leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
