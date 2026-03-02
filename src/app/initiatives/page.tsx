import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import { siteConfig } from '@/config/site.config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Initiatives',
  description: 'Explore RIGO\'s four pillars: YoungCEO, RIGO Careers, UnitedNigeria, and RIGO Learning.',
}

export default function InitiativesPage() {
  return (
    <>
      <PageHero
        title="Our Initiatives"
        subtitle="Four pillars driving youth empowerment and national development"
        accentWord="Initiatives"
      />

      {siteConfig.initiatives.map((initiative, index) => (
        <section
          key={initiative.id}
          id={initiative.id}
          className={`py-20 lg:py-14 ${index % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
        >
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8 ">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h2 className="heading-display text-[clamp(1.6rem,3.5vw,2.8rem)] text-charcoal mb-2 ">
                  {initiative.title}
                </h2>
                <p className="text-teal font-medium text-base mb-5 font-display">{initiative.tagline}</p>
                <p className="text-charcoal/70 text-base leading-relaxed mb-7 font-display tracking-wide">
                  {initiative.description}
                </p>
                <ul className="space-y-2.5 mb-7">
                  {initiative.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg className="w-4.5 h-4.5 text-teal mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-charcoal/70 text-sm font-display tracking-wide">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/membership" className="btn-pill btn-pill-primary">
                  Join This Initiative
                </Link>
              </div>
              <div className={`space-y-3 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative rounded-[1.75rem] bg-white/70 backdrop-blur p-[10px] shadow-[0_18px_60px_-30px_rgba(0,0,0,0.45)] ring-1 ring-black/5">
                  <div
                    className="relative aspect-[4/4] w-full overflow-hidden rounded-[1.2rem] bg-teal-light"
                  >
                    <Image
                      src={`/images/${initiative.id}-1.jpg`}
                      alt={`${initiative.title} program`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
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
        </section>
      ))}
    </>
  )
}