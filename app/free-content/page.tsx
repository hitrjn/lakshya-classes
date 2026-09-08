import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  PlayCircle,
  FileText,
  ClipboardList,
  Atom,
  FlaskConical,
  Calculator,
  Dna,
  ArrowRight,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { CtaBand } from '@/components/cta-band'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'

const primaryPhone = '+91 70501 47021'

export const metadata: Metadata = {
  title: 'Free Content | Lakshya Classes',
  description:
    'Access free video lectures, chapter notes, and practice tests for IIT JEE and NEET preparation from Lakshya Classes.',
}

const resourceTypes = [
  {
    icon: PlayCircle,
    title: 'Video Lectures',
    desc: 'Concept-first recorded lectures across Physics, Chemistry, Biology, and Mathematics.',
    tag: 'Watch',
  },
  {
    icon: FileText,
    title: 'Chapter Notes',
    desc: 'Concise, exam-ready notes and formula sheets you can revise anytime.',
    tag: 'Read',
  },
  {
    icon: ClipboardList,
    title: 'Practice Tests',
    desc: 'Topic-wise question banks and mock tests with detailed solutions.',
    tag: 'Attempt',
  },
]

const subjects = [
  { icon: Atom, name: 'Physics', count: '48 lessons', for: 'JEE & NEET' },
  { icon: FlaskConical, name: 'Chemistry', count: '52 lessons', for: 'JEE & NEET' },
  { icon: Calculator, name: 'Mathematics', count: '60 lessons', for: 'JEE' },
  { icon: Dna, name: 'Biology', count: '44 lessons', for: 'NEET' },
]

export default function FreeContentPage() {
  // TEMP: Free Content has been merged into /courses (bottom section).
  redirect('/courses#free-content')

  return (
    <main>
      <PageHero
        eyebrow="Courses"
        title="Start learning today — completely free"
        description="Explore a growing library of lectures, notes, and practice material curated by our faculty to support your JEE and NEET journey."
      />

      {/* Resource types */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {resourceTypes.map((res, i) => (
            <Reveal key={res.title} delay={i * 100}>
              <article className="group flex h-full flex-col rounded-2xl border border-border glass p-7 transition-all duration-300 hover:border-primary/40">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:glow">
                    <res.icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
                    {res.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{res.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {res.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Browse by Subject"
          title="Pick a subject and dive in"
          description="Free study material organised by subject so you can focus exactly where you need to."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject, i) => (
            <Reveal key={subject.name} delay={(i % 4) * 80}>
              <article className="group h-full rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card/70">
                <span className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                  <subject.icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{subject.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {subject.count}
                </p>
                <span className="mt-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {subject.for}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Access strip */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Reveal className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-border glass p-8 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-xl font-bold">Want the full course experience?</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Enrol at Lakshya Classes for structured batches, live doubt
              support, and regular assessments.
            </p>
          </div>
          <Button
              render={<a href={`tel:${primaryPhone.replace(/\s/g, '')}`} />}
            nativeButton={false}
            size="lg"
            className="shrink-0 rounded-full glow"
          >
            Enquire About Batches
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </Reveal>
      </section>

      <CtaBand />
    </main>
  )
}
