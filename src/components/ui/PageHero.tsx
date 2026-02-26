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

      <div className="relative max-w-[1200px] ml-100 px-6 lg:px-8 py-10 lg:py-12">
        <div className="max-w-3xl">
          <h1 className="heading-display text-[clamp(2.2rem,5vw,6rem)] text-black mb-5">
            {accentWord ? (
              <>{titleParts[0]}<span className="text-accent">{accentWord}</span>{titleParts[1]}</>
            ) : title}
          </h1>
          {subtitle && (
            <p className="text-black/60 text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
