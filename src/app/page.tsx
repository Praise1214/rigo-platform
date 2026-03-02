'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/config/site.config'
import ImpactCounter from '@/components/ui/ImpactCounter'

export default function Home() {
  const whoWeAreFrameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!whoWeAreFrameRef.current) return

    let ctx: { revert: () => void } | null = null

    // Dynamically import GSAP so it's not in the initial JS bundle
    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]).then(([{ default: gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        gsap.fromTo(
          whoWeAreFrameRef.current,
          { autoAlpha: 0, x: 100 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: whoWeAreFrameRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        )
      }, whoWeAreFrameRef)
    })

    return () => ctx?.revert()
  }, [])

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-8 py-6">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/7]">
            <Image
              src="/images/showcase-digital-skills.JPG"
              alt="RIGO facilitator leading a Google Digital Skills workshop"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1500px) 100vw, 1500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <div className="max-w-lg p-3">
                <h2 className="heading-display font-extrabold text-[clamp(1.4rem,5.8vw,3.6rem)] text-white mb-2 leading-[1.15]">
                  <span className="block">EMPOWERING NIGERIA</span>
                  <span className="block mt-3 sm:mt-5">YOUTH,</span>
                  <span className="block mt-3 sm:mt-5">INSPIRING CHANGE</span>
                </h2>
                <Link href="/initiatives" className="btn-pill btn-pill-primary text-sm sm:text-base py-2.5 px-5 mt-4 sm:mt-7">
                  See Our Initiatives
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[31px] font-bold uppercase tracking-[0.1em] text-teal mb-3 block font-montserrat">Who We Are</span>
              <h2 className="heading-display text-[clamp(1.6rem,3vw,2.6rem)] text-charcoal mb-5">
                A MOVEMENT FOR<br />NIGERIA&apos;S YOUTH
              </h2>
              <p className="text-charcoal text-base leading-relaxed text-justify mb-5">
                Rising Generation (RIGO) is a youth-led movement dedicated to building the next
                generation of Nigerian leaders. Through our initiatives in entrepreneurship,
                career development, civic engagement, and education, we equip young Nigerians
                with the tools and mindset to drive national progress.
              </p>
              <p className="text-charcoal text-base leading-relaxed text-justify mb-7">
                We believe that when young people are empowered with the right skills, values,
                and opportunities, they become the architects of a prosperous and united Nigeria.
              </p>
              <Link href="/about" className="btn-pill btn-pill-outline">
                Learn More About Us
              </Link>
            </div>
            <div ref={whoWeAreFrameRef} className="relative w-full max-w-[620px] mx-auto lg:ml-auto">
              {/* Soft ambient glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(60%_60%_at_70%_30%,rgba(28,142,156,0.22)_0%,rgba(244,166,35,0.12)_35%,transparent_70%)] blur-2xl"
              />
              {/* Frame */}
              <div className="relative rounded-[1.75rem] bg-white/70 backdrop-blur p-[10px] shadow-[0_18px_60px_-30px_rgba(0,0,0,0.45)] ring-1 ring-black/5">
                <div className="relative aspect-[4/4] w-full overflow-hidden rounded-[1.2rem] bg-teal-light">
                  <Image
                    src="/images/who-we-are.jpg"
                    alt="RIGO Youth Leaders"
                    fill
                    className="h-full w-full object-fill"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    loading="lazy"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.35)_0%,transparent_35%)]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_10%,transparent_35%,rgba(0,0,0,0.25)_100%)] opacity-40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── IMPACT COUNTER ─── */}
      <ImpactCounter />

      {/* ─── WHAT WE DO ─── */}
      <section className="py-10 lg:py-15 bg-teal text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-display text-[clamp(1.6rem,3.5vw,2.8rem)]">
              WHAT WE DO
            </h2>
            <p className="mt-4 text-white text-base lg:text-xl max-w-2xl mx-auto font-display font-bold">
              Education, entrepreneurship, and civic engagement, turning potential into lasting change.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {siteConfig.initiatives.map((initiative) => (
              <Link
                key={initiative.id}
                href={`/initiatives#${initiative.id}`}
                className="group relative rounded-2xl overflow-hidden min-h-[280px] flex flex-col justify-end p-6"
              >
                <div className="absolute inset-0 bg-teal-dark">
                  <Image
                    src={`/images/${initiative.id}-1.jpg`}
                    alt={initiative.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h3 className="heading-display text-lg text-white mb-1">{initiative.shortTitle}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{initiative.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STORIES ─── */}
      <section className="py-20 lg:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="heading-display text-[clamp(1.6rem,3.5vw,2.8rem)] text-charcoal">
              HEAR OUR <span className="accent-word">STORIES</span>
            </h2>
            <p className="mt-4 text-charcoal/50 text-base max-w-md mx-auto">
              Real voices from the front lines of change.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <Link href="/impact-stories" className="btn-pill btn-pill-primary">
              See All Stories
            </Link>
            <Link href="/membership" className="btn-pill btn-pill-outline">
              Share Your Story
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
