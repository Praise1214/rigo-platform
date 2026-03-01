'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Who can volunteer with RIGO?',
    a: 'Anyone aged 16 and above who is passionate about youth empowerment, education, and community development. We welcome students, professionals, retirees, and anyone with time and skills to share.',
  },
  {
    q: 'How much time do I need to commit?',
    a: 'It depends on your role. Some roles require just 2–4 hours per week, while others (like event coordination) may need more time around specific programs. We work with your schedule.',
  },
  {
    q: 'Do I need prior experience?',
    a: 'Not at all. We provide onboarding and training for all volunteers. What matters most is your willingness to learn and your passion for making a difference in young lives.',
  },
  {
    q: 'Can I volunteer remotely?',
    a: 'Yes! Several of our roles — including content creation, mentoring, and tech support — can be done remotely. We also have in-person roles for those in Lagos and other cities.',
  },
  {
    q: 'What benefits do volunteers receive?',
    a: 'Volunteers receive a certificate of service, professional networking opportunities, skill-building workshops, and the deep satisfaction of directly impacting young Nigerians\' futures.',
  },
]

export default function VolunteerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="max-w-2xl mx-auto space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className={`rounded-2xl transition-all duration-200 ${
              isOpen ? 'bg-white shadow-sm' : 'bg-white/60 hover:bg-white'
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-charcoal font-semibold text-sm leading-snug">{faq.q}</span>
              <svg
                className={`w-4 h-4 text-teal shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-60 pb-5' : 'max-h-0'
              }`}
            >
              <p className="px-6 text-charcoal/50 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
