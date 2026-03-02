'use client'

import BounceCards from '@/components/ui/BounceCards'

const aboutImages = [
  '/images/about/about-1.jpg',
  '/images/about/about-2.jpg',
  '/images/about/about-3.jpg',
  '/images/about/about-4.jpg',
  '/images/about/about-5.jpg',
  '/images/about/about-6.jpg',
  '/images/about/about-7.jpg',
  '/images/about/about-8.jpg',
  '/images/about/about-9.jpg',
]

export default function AboutHeroCards() {
  return (
    <section className="py-16 lg:py-20 bg-charcoal overflow-hidden">
      {/* Scale wrapper: on small screens, compress the 1000px fan of cards to fit viewport */}
      <div className="flex items-center justify-center">
        <div className="origin-center scale-[0.38] xs:scale-[0.48] sm:scale-[0.58] md:scale-[0.8] lg:scale-100">
        <BounceCards
          images={aboutImages}
          containerWidth={1000}
          containerHeight={400}
          animationDelay={0.3}
          animationStagger={0.06}
          easeType="elastic.out(1, 0.6)"
          transformStyles={[
            'rotate(5deg) translate(-340px, 10px)',
            'rotate(3deg) translate(-255px, -5px)',
            'rotate(-2deg) translate(-170px, 8px)',
            'rotate(1deg) translate(-85px, -3px)',
            'rotate(-1deg) translate(0px, 5px)',
            'rotate(-3deg) translate(85px, -8px)',
            'rotate(2deg) translate(170px, 4px)',
            'rotate(-4deg) translate(255px, -6px)',
            'rotate(3deg) translate(340px, 10px)',
          ]}
          enableHover={true}
        />
        </div>
      </div>
    </section>
  )
}
