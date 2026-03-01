'use client'

import Image from 'next/image'
import Link from 'next/link'
import CardSwap, { Card } from '@/components/ui/CardSwap'

export default function VolunteerHero() {
  return (
      <section className="relative bg-charcoal overflow-hidden min-h-[420px] lg:min-h-[500px] flex items-center">
       
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 py-20 lg:py-10 w-full ml-20 mt-5">
          <div className="max-w-2xl">
            <span className="inline-block text-[21px] font-bold uppercase tracking-[0.15em] text-accent mb-4">
              Join the Movement
            </span>
            <h1 className=" font-display text-5xl sm:text-2xl lg:text-6xl  text-white mb-5 leading-[1.1]">
              Volunteer with <span className="text-accent">RIGO</span>
            </h1>
            <p className="text-white text-lg max-w-xl leading-relaxed mb-8 tracking-normal  [word-spacing:normal]">
              Lend your time, skills, and energy to empower Nigeria&apos;s next generation. Every hour you give creates ripples of change across communities.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#volunteer-form"
                className="btn-pill bg-teal hover:bg-teal-dark text-white text-[11px] py-3 px-7"
              >
                Apply to Volunteer
              </a>
              <Link
                href="/initiatives"
                className="btn-pill bg-white/10 hover:bg-white/20 text-white text-[11px] py-3 px-7 backdrop-blur-sm"
              >
                See Our Programs
              </Link>
            </div>
          </div>
        </div>



          {/* Right: Card stack */}
          <div className="relative w-full lg:w-1/2 h-[380px] sm:h-[430px] lg:h-[520px]">
            <CardSwap
              width={360}
              height={320}
              cardDistance={30}
              verticalDistance={80}
              delay={5000}
              pauseOnHover={false}
              skewAmount={5}
              easing="elastic"
            >
              <Card>
                <Image
                  src="/images/volunteer/volunteer-1.jpg"
                  alt="RIGO volunteers at an event"
                  fill
                  className="object-cover"
                  sizes="360px"
                />
              </Card>
              <Card>
                <Image
                  src="/images/volunteer/volunteer-2.jpg"
                  alt="Volunteers holding SDG goal cards"
                  fill
                  className="object-cover"
                  sizes="360px"
                />
              </Card>
              <Card>
                <Image
                  src="/images/volunteer/volunteer-3.jpg"
                  alt="Group of volunteers outdoors"
                  fill
                  className="object-cover"
                  sizes="360px"
                />
              </Card>
            </CardSwap>
          </div>


    </section>
  )
}
