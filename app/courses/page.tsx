import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Atom,
  Calculator,
  ClipboardList,
  Dna,
  FileText,
  FlaskConical,
  GraduationCap,
  Layers,
  NotebookPen,
  PlayCircle,
  Stethoscope,
} from 'lucide-react'

import { CtaBand } from '@/components/cta-band'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { courses } from '@/lib/courses'

export const metadata: Metadata = {
  title: 'Courses | Lakshya Classes',
  description:
    'Explore Lakshya Classes courses and free learning resources for IIT JEE, NEET, Boards, and Foundation (Class 6–10).',
}

const primaryPhone = '+91 70501 47021'

const iconBySlug = {
  'iit-jee': Atom,
  neet: Stethoscope,
  'class-10-boards': NotebookPen,
  'class-12-boards': GraduationCap,
  'foundation-6-10': Layers,
} as const

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
  {
    icon: FlaskConical,
    name: 'Chemistry',
    count: '52 lessons',
    for: 'JEE & NEET',
  },
  { icon: Calculator, name: 'Mathematics', count: '60 lessons', for: 'JEE' },
  { icon: Dna, name: 'Biology', count: '44 lessons', for: 'NEET' },
]

export default function CoursesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Courses"
        title="Programs built for marks and ranks"
        description="From foundation to board exams to JEE/NEET — choose a course designed for disciplined learning, regular testing, and measurable improvement."
        imageSrc="/centres-main.png"
        imageAlt="Students learning at Lakshya Classes"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => {
            const Icon = iconBySlug[course.slug]
            return (
              <Reveal key={course.slug} delay={(i % 3) * 90}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card/40 shadow-[0_10px_40px_-28px_rgba(59,130,246,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="relative overflow-hidden bg-gradient-to-br from-primary/12 via-transparent to-accent/10 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                        {course.badge}
                      </span>
                      <span className="grid size-10 place-items-center rounded-full border border-border bg-background/70 text-primary">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                    </div>

                    <div className="mt-5 rounded-2xl border border-border bg-background/50 p-4">
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {course.subtitle}
                      </p>
                      <h2 className="mt-2 text-2xl font-bold text-foreground">
                        {course.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {course.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-border bg-card/55 p-6">
                    <p className="text-sm text-muted-foreground">
                      Details, structure & benefits
                    </p>
                    <Button
                      render={<Link href={`/courses/${course.slug}`} />}
                      nativeButton={false}
                      variant="outline"
                      className="rounded-full"
                    >
                      View details
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Button>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Reveal className="rounded-3xl border border-border glass p-8">
          <h3 className="text-2xl font-bold">Not sure which course fits you?</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Share your class, target exam, and current preparation level. We’ll suggest the right batch and a realistic study plan.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              render={<Link href="/our-centres" />}
              nativeButton={false}
              className="rounded-full glow"
            >
              Find your nearest centre
            </Button>
          </div>
        </Reveal>
      </section>
    

      {/* Access strip */}
      {/* <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <Reveal className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-border glass p-8 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-xl font-bold">Want the full course experience?</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Enrol at Lakshya Classes for structured batches, live doubt support,
              and regular assessments.
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
      </section> */}

      <CtaBand />
    </main>
  )
}
