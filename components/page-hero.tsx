import Image from 'next/image'
import { Reveal } from '@/components/reveal'

type PageHeroProps = {
  eyebrow: string
  title: string
  description?: string
  imageSrc?: string
  imageAlt?: string
}

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-12 sm:pt-44">
      <div className="aura pointer-events-none absolute inset-0 -z-10" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {imageSrc ? (
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal className="order-1">
              <div className="relative mx-auto aspect-[1/1] w-full max-w-lg overflow-hidden rounded-3xl border border-border glass glow-soft md:mx-0">
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? title}
                  fill
                  sizes="(min-width: 768px) 40vw, 80vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>
            </Reveal>

            <Reveal className="order-2 flex max-w-3xl flex-col items-center gap-5 text-center md:items-start md:text-left">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {eyebrow}
              </span>
              <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
                {title}
              </h1>
              {description && (
                <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  {description}
                </p>
              )}
            </Reveal>
          </div>
        ) : (
          <Reveal className="flex max-w-3xl flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </span>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              {title}
            </h1>
            {description && (
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>
            )}
          </Reveal>
        )}
      </div>
    </section>
  )
}
