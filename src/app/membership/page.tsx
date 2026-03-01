import PageHero from '@/components/ui/PageHero'
import MembershipForm from '@/components/forms/MembershipForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Become a Member',
  description: 'Join Rising Generation and be part of a movement empowering Nigeria\'s next generation of leaders.',
}

export default function MembershipPage() {
  return (
    <>
      <PageHero
        title="Become a Member"
        subtitle="Join a growing network of young leaders committed to building Nigeria's future"
        accentWord="Member"
      />

      <section className="py-20 lg:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="heading-display text-xl text-charcoal mb-7">WHY JOIN <span className="accent-word">RIGO</span>?</h2>
              <ul className="space-y-5">
                {[
                  { title: 'Access to Programs', desc: 'Participate in YoungCEO, RIGO Careers, UnitedNigeria, and RIGO Learning initiatives.' },
                  { title: 'Mentorship & Networking', desc: 'Connect with industry leaders, mentors, and a community of like-minded youth.' },
                  { title: 'Skills Development', desc: 'Gain practical skills in entrepreneurship, leadership, and civic engagement.' },
                  { title: 'Career Opportunities', desc: 'Access job placements, internships, and professional development resources.' },
                  { title: 'Community Impact', desc: 'Be part of programs that create tangible impact in communities across Nigeria.' },
                ].map((benefit) => (
                  <li key={benefit.title} className="flex gap-3.5">
                    <div className="shrink-0 w-8 h-8 bg-white rounded-lg flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal text-sm">{benefit.title}</h3>
                      <p className="text-charcoal/40 text-sm mt-0.5">{benefit.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { number: '2K+', label: 'Active Members' },
                  { number: '36', label: 'States Covered' },
                  { number: '95%', label: 'Satisfaction' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-2xl p-4 text-center">
                    <div className="stat-number text-xl text-teal">{stat.number}</div>
                    <p className="text-charcoal/30 text-[10px] font-bold mt-1 uppercase tracking-[0.12em]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
            <div className="w-full lg:max-w-[560px] lg:ml-auto lg:translate-x-25 bg-white rounded-3xl shadow-[0_8px_60px_rgba(0,0,0,0.08)] p-7 lg:p-15 lg:-mt-4 left-3">
              <h2 className="font-semibold text-charcoal text-xl mb-1 font-display">Become a Member</h2>
              <p className="text-charcoal/70 text-sm mb-6 font-display">Join RIGO and be part of a movement empowering Nigeria’s youth</p>
              <MembershipForm />
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
