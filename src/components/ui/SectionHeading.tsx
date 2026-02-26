interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  accentWord?: string
}

export default function SectionHeading({ label, title, subtitle, centered = true, accentWord }: SectionHeadingProps) {
  const titleParts = accentWord ? title.split(accentWord) : [title]

  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {label && (
        <span className="inline-block text-[39px] font-bold uppercase tracking-[0.03em] text-teal mb-1">
          {label}
        </span>
      )}
      <h2 className="heading-display text-[clamp(1.0rem,3.5vw,2.3rem)] text-charcoal">
        {accentWord ? (
          <>{titleParts[0]}<span className="accent-word">{accentWord}</span>{titleParts[1]}</>
        ) : title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-charcoal/50 text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
