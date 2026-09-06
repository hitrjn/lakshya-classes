import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <Reveal className="relative overflow-hidden rounded-3xl border border-primary/30 glass glow-soft">
        <div className="aura pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative flex flex-col items-center gap-6 px-6 py-16 text-center sm:px-12">
          <h2 className="max-w-2xl text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Your target deserves the right guidance.
          </h2>
          <p className="max-w-xl text-pretty text-muted-foreground">
            Talk to our counsellors and discover a preparation plan built around
            your goals. Admissions are now open.
          </p>
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            size="lg"
            className="rounded-full glow"
          >
            Get Started Today
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
