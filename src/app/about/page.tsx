import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import FoundersSection from '@/components/sections/FoundersSection'
import type { Metadata } from 'next'
import AboutHeroCards from '@/components/sections/AboutHeroCards'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Rising Generation (RIGO), a youth-led movement dedicated to building Nigeria\'s next generation of leaders.',
}

const values = [
  { title: 'Leadership', description: 'We cultivate visionary leaders who inspire positive change in their communities and nation.' },
  { title: 'Integrity', description: 'We uphold transparency, accountability, and ethical conduct in all our programs and operations.' },
  { title: 'Innovation', description: 'We embrace creative solutions and forward-thinking approaches to youth development.' },
  { title: 'Unity', description: 'We foster collaboration across ethnic, religious, and cultural lines for national progress.' },
  { title: 'Excellence', description: 'We pursue the highest standards in education, skills development, and service delivery.' },
  { title: 'Impact', description: 'We measure our success by the tangible difference we make in the lives of young Nigerians.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Rising Generation"
        subtitle="A youth-led movement for leadership, nation-building, and empowerment"
        accentWord="Rising Generation"
      />

      {/* Community image cards */}
      <AboutHeroCards />

      {/* Mission & Vision */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 ">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-cream rounded-2xl p-8 lg:p-10">
              <span className="text-[31px] font-bold text-teal uppercase tracking-[0.06em] mb-3 block">Our Mission</span>
              <h3 className="heading-display text-xl lg:text-2xl text-charcoal mb-5">
                Building Confident, Skilled <span className="accent-word">Leaders</span>
              </h3>
              <p className="text-charcoal/50 text-base leading-relaxed mb-4 text-justify">
                Rising Generation (RIGO) exists to empower Nigerian youth with the skills,
                knowledge, and platforms they need to become effective leaders and active
                contributors to national development.
              </p>
              <p className="text-charcoal/50 text-base leading-relaxed text-justify">
                Through structured programs in entrepreneurship, career development,
                civic engagement, and education, we are shaping a generation that will
                drive Nigeria&apos;s transformation.
              </p>
            </div>
            <div className="bg-cream rounded-2xl p-8 lg:p-10">
              <span className="text-[31px] font-bold text-teal uppercase tracking-[0.06em] mb-3 block">Our Vision</span>
              <h3 className="heading-display text-xl lg:text-2xl text-charcoal mb-5">
                A Prosperous, <span className="accent-word">United</span> Nigeria
              </h3>
              <p className="text-charcoal/50 text-base leading-relaxed mt-10 mb-4 text-justify">
                We envision a Nigeria where every young person has the opportunity
                to realize their full potential and contribute meaningfully to
                national progress.
              </p>
              <p className="text-charcoal/50 text-base leading-relaxed text-justify">
                A Nigeria where youth are at the forefront of innovation,
                governance, and social development driving the nation
                toward prosperity and unity.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="py-10 lg:py-10 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="What Drives Us"
            subtitle="The principles that guide everything we do"
            accentWord="Drives"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value) => (
              <div key={value.title} className="p-6 bg-cream rounded-2xl">
                <h3 className="text-base font-bold text-charcoal mb-2">{value.title}</h3>
                <p className="text-charcoal/50 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <FoundersSection />

      {/* CTA */}
      <section className="py-20 bg-teal-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="heading-display text-[clamp(1.6rem,3.5vw,2.8rem)] text-white mb-4">Ready to Join the Movement?</h2>
          <p className="text-white/40 text-base mb-8">
            Be part of the generation that transforms Nigeria.
          </p>
          <Link href="/membership" className="btn-pill btn-pill-primary">
            Become a Member
          </Link>
        </div>
      </section>
    </>
  )
}
