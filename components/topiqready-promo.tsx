import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

type TopIqReadyPromoProps = {
  title: string
  description: string
}

export function TopIqReadyPromo({
  title,
  description,
}: TopIqReadyPromoProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
      <Reveal className="relative overflow-hidden rounded-3xl border border-primary/30 glass glow-soft">
        <div className="aura pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative flex flex-col items-start gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="size-3.5" aria-hidden="true" />
              More to explore
            </span>
            <h2 className="mt-4 text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
              {title}
            </h2>
            <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
          <Button
            render={
              <a
                href="https://topiqready.in"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            nativeButton={false}
            size="lg"
            className="w-full shrink-0 rounded-full glow md:w-auto"
          >
            Visit TopIQReady.in
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
