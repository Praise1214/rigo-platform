'use client'

import dynamic from 'next/dynamic'

const DomeGallery = dynamic(() => import('@/components/ui/DomeGallery'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-cream rounded-2xl animate-pulse" />
  ),
})

const galleryImages = [
  { src: '/images/about/about-1.jpg', alt: 'RIGO community outreach' },
  { src: '/images/about/about-2.jpg', alt: 'Youth leadership training' },
  { src: '/images/about/about-3.jpg', alt: 'Community engagement event' },
  { src: '/images/about/about-4.jpg', alt: 'Skills development workshop' },
  { src: '/images/about/about-5.jpg', alt: 'Team building activity' },
  { src: '/images/about/about-6.jpg', alt: 'RIGO impact program' },
  { src: '/images/about/about-7.jpg', alt: 'Youth empowerment session' },
  { src: '/images/about/about-8.jpg', alt: 'Community volunteers' },
  { src: '/images/about/about-9.jpg', alt: 'Educational program' },
  { src: '/images/about/about-1.jpg', alt: 'School outreach' },
  { src: '/images/about/about-2.jpg', alt: 'Group presentation' },
  { src: '/images/about/about-3.jpg', alt: 'Classroom leadership training' },
  { src: '/images/about/about-4.jpg', alt: 'Students group photo' },
  { src: '/images/about/about-5.jpg', alt: 'Youth speaker presentation' },
  { src: '/images/about/about-6.jpg', alt: 'UN youth engagement' },
]

export default function ImpactGallerySection() {
  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="w-full h-[650px] lg:h-[750px]">
        <DomeGallery
          images={galleryImages}
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          grayscale={false}
          overlayBlurColor="#F4EFE2"
          imageBorderRadius="16px"
          openedImageBorderRadius="16px"
          openedImageWidth="500px"
          openedImageHeight="500px"
        />
      </div>
    </section>
  )
}
