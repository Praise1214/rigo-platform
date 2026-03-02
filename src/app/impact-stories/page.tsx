import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import ImpactGallerySection from '@/components/sections/ImpactGallerySection'
import ImpactCircularGallery from '@/components/sections/ImpactCircularGallery'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impact Stories',
  description: 'See the impact of Rising Generation\'s work across Nigeria through stories and moments from our programs.',
}

export default function ImpactStoriesPage() {
  return (
    <>
      <PageHero
        title="Impact Stories"
        subtitle="Moments that define our movement and inspire the next generation"
        accentWord="Impact"
      />

      <section className="pt-14 pb-10 lg:pt-10 lg:pb-10 bg-charcoal/70">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-0">
          <SectionHeading
            title="Our Story in Pictures"
            subtitle="Follow our journey as we empower youth across Nigeria"
            accentWord="Story"
          />
        </div>
        <div className="-mt-8 lg:-mt-25">
          <ImpactCircularGallery />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-8">
          <SectionHeading
            label="Photo Speak"
            title="Gallery"
            subtitle="Highlights from our programs, events, and community engagements"
          />
        </div>
        <ImpactGallerySection />
      </section>
    </>
  )
}
