import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Atom, Stethoscope, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="aura pointer-events-none absolute inset-0 -z-10" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Sparkles className="size-3.5" aria-hidden="true" />
            9+ Years of Excellence
          </span>
          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Focused Preparation for{' '}
            <span className="text-primary text-glow">IIT JEE</span> &{' '}
            <span className="text-primary text-glow">NEET</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Lakshya Classes turns ambition into achievement with expert
            educators, disciplined mentorship, and a proven system built to
            crack India&apos;s toughest entrance exams.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              size="lg"
              className="rounded-full glow"
            >
              Book a Free Counselling
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button
              render={<Link href="/free-content" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-transparent"
            >
              Explore Free Content
            </Button>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'IIT JEE',
              desc: 'Engineering entrance mastery — Physics, Chemistry & Mathematics with rigorous problem solving.',
              image: '/hero-jee.png',
              icon: Atom,
              delay: 0,
            },
            {
              title: 'NEET',
              desc: 'Medical entrance excellence — Biology, Physics & Chemistry with concept-first clarity.',
              image: '/hero-neet.png',
              icon: Stethoscope,
              delay: 120,
            },
          ].map((card) => (
            <Reveal key={card.title} delay={card.delay}>
              <article className="group relative overflow-hidden rounded-3xl border border-border glass glow-soft">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={card.image || '/placeholder.svg'}
                    alt={`${card.title} coaching at Lakshya Classes`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <div className="flex items-center gap-2 text-primary">
                      <card.icon className="size-5" aria-hidden="true" />
                      <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                        Program
                      </span>
                    </div>
                    <h3 className="mt-1 text-2xl font-bold">{card.title}</h3>
                    <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
