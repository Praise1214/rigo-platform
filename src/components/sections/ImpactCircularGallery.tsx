'use client'

import dynamic from 'next/dynamic'

const CircularGallery = dynamic(() => import('@/components/ui/CircularGallery'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-charcoal/5 rounded-2xl animate-pulse" />
  ),
})

const galleryItems = [
  { image: '/images/impact-1.jpg', text: 'YoungCEO Workshop' },
  { image: '/images/impact-2.jpg', text: 'Skills Training' },
  { image: '/images/impact-3.jpg', text: 'Civic Engagement' },
  { image: '/images/impact-4.jpg', text: 'STEM Education' },
  { image: '/images/impact-5.jpg', text: 'Leadership Summit' },
  { image: '/images/impact-6.jpg', text: 'Volunteer Day' },
  { image: '/images/about/about-1.jpg', text: 'Community Outreach' },
  { image: '/images/about/about-2.jpg', text: 'Youth Empowerment' },
  { image: '/images/about/about-3.jpg', text: 'Team Building' },
  { image: '/images/about/about-4.jpg', text: 'School Program' },
  { image: '/images/about/about-5.jpg', text: 'Group Session' },
  { image: '/images/about/about-6.jpg', text: 'Training Workshop' },
]

export default function ImpactCircularGallery() {
  return (
    <div className="w-full h-[600px] relative">
      <CircularGallery
        items={galleryItems}
        bend={1}
        textColor="#ffffff"
        borderRadius={0.05}
        scrollSpeed={2}
        scrollEase={0.05}
      />
    </div>
  )
}
