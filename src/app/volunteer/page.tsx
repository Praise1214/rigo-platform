import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import VolunteerRoles from '@/components/sections/VolunteerRoles'
import VolunteerFAQ from '@/components/sections/VolunteerFAQ'
import VolunteerForm from '@/components/forms/VolunteerForm'
import VolunteerHero from '@/components/sections/VolunteerHero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Volunteer',
  description: 'Volunteer with Rising Generation and contribute your skills to empower Nigerian youth.',
}

const whyCards = [
  {
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    title: 'Make Real Impact',
    desc: 'Your time directly transforms the lives of young Nigerians in education, career, and leadership.',
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Grow Your Skills',
    desc: 'Gain leadership, project management, and community engagement experience while giving back.',
  },
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    title: 'Join a Community',
    desc: 'Connect with like-minded change-makers across Nigeria and build lasting professional networks.',
  },
  {
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    title: 'Get Recognized',
    desc: 'Receive certificates, recommendations, and opportunities that elevate your career or studies.',
  },
]

const steps = [
  { num: '01', title: 'Apply', desc: 'Fill out the volunteer application form below.' },
  { num: '02', title: 'Get Matched', desc: 'We review your skills and match you to a role.' },
  { num: '03', title: 'Onboard', desc: 'Attend a quick orientation and meet your team.' },
  { num: '04', title: 'Start Impacting', desc: 'Begin making a difference in young lives.' },
]

export default function VolunteerPage() {
  return (
    <>
      {/* ── A. Hero Section with Card Stack ── */}
      <VolunteerHero />
      {/* ── A. Hero Section ── */}

      {/* ── B. Why Volunteer ── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Why Volunteer"
            title="Your Time Changes Lives"
            subtitle="Volunteering with RIGO is more than service — it's an investment in Nigeria's future and your own growth."
            accentWord="Changes"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="bg-cream/50 rounded-2xl p-6 hover:bg-cream transition-colors duration-200"
              >
                <div className="w-11 h-11 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={card.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-charcoal text-sm mb-1.5">{card.title}</h3>
                <p className="text-charcoal/40 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── C. Volunteer Roles ── */}
      <section className="py-20 lg:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Open Roles"
            title="Find Your Role"
            subtitle="Choose a role that matches your skills and interests. Every contribution matters."
            accentWord="Role"
          />
          <VolunteerRoles />
        </div>
      </section>

      {/* ── D. How It Works ── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            label="The Process"
            title="How It Works"
            subtitle="Getting started as a RIGO volunteer is simple."
            accentWord="Works"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {/* Connector line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+28px)] w-[calc(100%-56px)] h-[2px] bg-teal/15" />
                )}
                <div className="text-center">
                  <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="heading-display text-teal text-lg">{step.num}</span>
                  </div>
                  <h3 className="font-bold text-charcoal text-sm mb-1.5">{step.title}</h3>
                  <p className="text-charcoal/40 text-sm leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── E. Social Proof ── */}
      <section className="py-20 lg:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Volunteers"
            title="Voices of Impact"
            subtitle="Hear from volunteers who've been part of the RIGO journey."
            accentWord="Impact"
          />

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Photo grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/volunteer/volunteer-1.jpg"
                  alt="RIGO volunteer at workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 200px"
                />
              </div>
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden mt-6">
                <Image
                  src="/images/volunteer/volunteer-2.jpg"
                  alt="Volunteers engaging with community"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 200px"
                />
              </div>
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/volunteer/volunteer-3.jpg"
                  alt="Group volunteer activity"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 200px"
                />
              </div>
            </div>

            {/* Testimonial card */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-charcoal text-base lg:text-lg leading-relaxed mb-6">
                &ldquo;Volunteering with RIGO was one of the most meaningful things I&apos;ve done. I came to give, but I left having gained so much — connections, skills, and the joy of watching young people believe in themselves.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal/10 rounded-full flex items-center justify-center">
                  <span className="text-teal font-bold text-sm">AO</span>
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">Adunni Okafor</p>
                  <p className="text-charcoal/40 text-xs">Program Facilitator · Lagos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact counters */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              { value: '200+', label: 'Active Volunteers' },
              { value: '15K+', label: 'Hours Given' },
              { value: '8', label: 'States Reached' },
              { value: '96%', label: 'Satisfaction Rate' },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-white rounded-2xl py-6 px-4">
                <p className="heading-display text-[clamp(1.5rem,3vw,2.2rem)] text-teal">{stat.value}</p>
                <p className="text-charcoal/40 text-xs font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── F. Volunteer Application Form ── */}
      <section id="volunteer-form" className="py-20 lg:py-24 bg-white scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Ready to Start?"
            title="Apply to Volunteer"
            subtitle="Fill out the form below and our team will get back to you within 3–5 business days."
            accentWord="Volunteer"
          />

          <div className="grid lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {/* Form card */}
            <div className="lg:col-span-3 bg-cream/50 rounded-3xl p-7 lg:p-9 border border-charcoal/5">
              <VolunteerForm />
            </div>

            {/* What happens next */}
            <div className="lg:col-span-2">
              <div className="bg-teal/5 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-charcoal text-sm mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  What Happens Next
                </h3>
                <div className="space-y-4">
                  {[
                    { step: '1', text: 'We review your application within 3–5 days.' },
                    { step: '2', text: 'You\'ll receive an email with your role assignment.' },
                    { step: '3', text: 'Attend a brief virtual onboarding session.' },
                    { step: '4', text: 'Start volunteering and making an impact!' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3">
                      <div className="w-6 h-6 bg-teal rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white text-[10px] font-bold">{item.step}</span>
                      </div>
                      <p className="text-charcoal/60 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-cream/60 rounded-2xl p-6">
                <h3 className="font-bold text-charcoal text-sm mb-2">Have questions?</h3>
                <p className="text-charcoal/40 text-sm leading-relaxed mb-3">
                  Reach out to our volunteer coordinator directly.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-teal text-sm font-semibold hover:text-teal-dark transition-colors"
                >
                  Contact Us
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── G. FAQ Section ── */}
      <section className="py-20 lg:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            label="FAQs"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about volunteering with RIGO."
            accentWord="Questions"
          />
          <VolunteerFAQ />
        </div>
      </section>
    </>
  )
}
