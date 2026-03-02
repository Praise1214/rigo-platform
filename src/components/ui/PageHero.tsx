interface PageHeroProps {
  title: string
  subtitle?: string
  accentWord?: string
}

export default function PageHero({ title, subtitle, accentWord }: PageHeroProps) {
  const titleParts = accentWord ? title.split(accentWord) : [title]

  return (
    <section className="relative bg-cream overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 pt-24 pb-10 lg:pt-28 lg:pb-12">
        <div className="max-w-3xl">
          <h1 className="heading-display text-[clamp(1.8rem,5vw,4rem)] text-black mb-4 lg:mb-5">
            {accentWord ? (
              <>{titleParts[0]}<span className="text-accent">{accentWord}</span>{titleParts[1]}</>
            ) : title}
          </h1>
          {subtitle && (
            <p className="text-black/60 text-base lg:text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
