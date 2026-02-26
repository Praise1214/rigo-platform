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
                <h2 className="heading-display text-[clamp(1.6rem,3.5vw,2.8rem)] text-charcoal mb-2">
                  {initiative.title}
                </h2>
                <p className="text-teal font-medium text-base mb-5">{initiative.tagline}</p>
                <p className="text-charcoal/70 text-base leading-relaxed mb-7">
                  {initiative.description}
                </p>
                <ul className="space-y-2.5 mb-7">
                  {initiative.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg className="w-4.5 h-4.5 text-teal mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-charcoal/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/membership" className="btn-pill btn-pill-primary">
                  Join This Initiative
                </Link>
              </div>
              <div className={`space-y-3 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-[16/10] relative rounded-2xl overflow-hidden bg-cream">
                  <Image
                    src={`/images/${initiative.id}-1.jpg`}
                    alt={`${initiative.title} program`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>

              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}