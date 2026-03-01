'use client'

const roles = [
  {
    title: 'Program Facilitator',
    desc: 'Lead workshops and training sessions across our initiatives.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    time: '4–6 hrs/week',
    great: 'Educators & Trainers',
  },
  {
    title: 'Mentor',
    desc: 'Guide and inspire young Nigerians on their leadership journey.',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    time: '2–3 hrs/week',
    great: 'Professionals',
  },
  {
    title: 'Content Creator',
    desc: 'Help tell the RIGO story through media, writing, and design.',
    icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
    time: '3–5 hrs/week',
    great: 'Creatives & Writers',
  },
  {
    title: 'Community Organizer',
    desc: 'Coordinate events and outreach in your local community.',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
    time: '4–8 hrs/week',
    great: 'Social Leaders',
  },
  {
    title: 'Tech Volunteer',
    desc: 'Support our digital platforms and STEM education programs.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    time: '3–6 hrs/week',
    great: 'Students & Developers',
  },
  {
    title: 'Administrative Support',
    desc: 'Help with operations, data management, and coordination.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
    time: '2–4 hrs/week',
    great: 'Anyone organized',
  },
]

export default function VolunteerRoles() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {roles.map((role) => (
        <div
          key={role.title}
          className="group bg-white rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-teal/10"
        >
          <div className="w-11 h-11 bg-teal/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal group-hover:scale-110 transition-all duration-300">
            <svg className="w-5 h-5 text-teal group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={role.icon} />
            </svg>
          </div>
          <h3 className="font-bold text-charcoal text-sm mb-1.5">{role.title}</h3>
          <p className="text-charcoal/40 text-sm leading-relaxed mb-4">{role.desc}</p>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal bg-teal/8 px-2.5 py-1 rounded-full">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {role.time}
            </span>
            <span className="text-[11px] text-charcoal/40">
              Great for: <span className="font-medium text-charcoal/60">{role.great}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
