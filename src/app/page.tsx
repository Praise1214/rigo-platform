'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"


export default function Home() {
  const whoWeAreFrameRef = useRef<HTMLDivElement>(null)
  const whoWeAreImageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!whoWeAreFrameRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        whoWeAreFrameRef.current,
        { autoAlpha: 0, x: 100 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whoWeAreFrameRef.current,
            start: "top 80%",   // when top of element hits 80% viewport
            once: true,         // only animate once
          },
        }
      )
    }, whoWeAreFrameRef)

    return () => ctx.revert()
  }, [])


  return (
    <>
      <section className="">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-8 py-6">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '16 / 7' }}>
            <Image
              src="/images/showcase-digital-skills.jpg"
              alt="RIGO facilitator leading a Google Digital Skills workshop"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 top-23">
              <div className="max-w-lg p-3">
                <h2 className="heading-display font-extrabold text-[clamp(2rem,5.8vw,3.6rem)] text-white mb-2 leading-[1.15]">
                  <span className="block">EMPOWERING NIGERIA</span>
                  <span className="block mt-5">YOUTH,</span>
                  <span className="block mt-5">INSPIRING CHANGE</span>
                </h2>
                <Link href="/initiatives" className="btn-pill btn-pill-primary text-[20px] py-2.5 px-5 mt-7">
                  See Our Initiatives
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section>
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-[1200px] mx-6 px-6 lg:px-8">
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
              <div ref={whoWeAreFrameRef} className="relative w-full max-w-[620px] ml-40 max-h-[700px]">
                <div ref={whoWeAreFrameRef} className="relative w-full max-w-[620px] ml-auto">
                  {/* Soft ambient glow (subtle) */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(60%_60%_at_70%_30%,rgba(28,142,156,0.22)_0%,rgba(244,166,35,0.12)_35%,transparent_70%)] blur-2xl"
                  />

                  {/* Frame */}
                  <div className="relative rounded-[1.75rem] bg-white/70 backdrop-blur p-[10px] shadow-[0_18px_60px_-30px_rgba(0,0,0,0.45)] ring-1 ring-black/5">
                    {/* Inner border for “crafted” look */}
                    <div className="rounded-[1.45rem] p-[6px] bg-gradient-to-br from-teal/20 via-white/40 to-accent/20 ring-1 ring-black/5">
                      {/* Image wrapper */}
                      <div
                        className="relative aspect-[4/4] w-full overflow-hidden rounded-[1.2rem] bg-teal-light"
                      >
                        <Image
                          src="/images/who-we-are.jpg"
                          alt="RIGO Youth Leaders"
                          fill
                          className="h-full w-full object-fill"
                          sizes="(max-width: 1024px) 100vw, 48vw"
                          priority={false}
                        />

                        {/* Soft highlight + vignette (makes it feel intentional) */}
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
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
