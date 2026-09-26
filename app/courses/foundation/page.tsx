import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { CtaBand } from '@/components/cta-band'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { ArrowRight, GraduationCap, Layers, NotebookPen } from 'lucide-react'
import Link from 'next/link'
import { courses } from '@/lib/courses'

export const metadata: Metadata = {
  title: 'Foundation Coaching for Class 6–10 in Ranchi, Patna & Ara',
  description:
    'Lakshya Classes provides Foundation coaching for Classes 6–10, Olympiad preparation, and board support with strong Maths and Science fundamentals in Ranchi, Patna, and Ara.',
  alternates: {
    canonical: '/courses/foundation',
  },
  openGraph: {
    title: 'Foundation Coaching for Class 6–10 | Lakshya Classes',
    description:
      'Build strong Maths and Science fundamentals with Foundation, Olympiad, and board preparation in Ranchi, Patna, and Ara.',
    url: 'https://lakshyaclasses.in/courses/foundation',
  },
}

const foundationSlugs = ['foundation-6-10', 'class-10-boards', 'class-12-boards'] as const

const foundationCourses = courses.filter((course) =>
  foundationSlugs.includes(course.slug as (typeof foundationSlugs)[number]),
)

const courseIcons = {
  'foundation-6-10': Layers,
  'class-10-boards': NotebookPen,
  'class-12-boards': GraduationCap,
}

export default function FoundationCoursesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Academic Programs"
        title="Foundation & Board Programs"
        description="Build lasting fundamentals, improve board performance, and develop the confidence needed for future competitive exams."
        imageSrc="/centres-main.png"
        imageAlt="Lakshya Classes learning centre"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <SectionHeading
          eyebrow="Learn with confidence"
          title="The right support at every stage"
          description="Age-appropriate learning programs that strengthen concepts, encourage consistent practice, and keep students on track."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {foundationCourses.map((course, index) => {
            const Icon = courseIcons[course.slug as keyof typeof courseIcons]
            return (
              <Reveal key={course.slug} delay={index * 100}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/45 shadow-[0_12px_42px_-30px_rgba(59,130,246,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_55px_-30px_rgba(59,130,246,0.65)]">
                  <div className="flex flex-1 flex-col bg-gradient-to-br from-primary/12 via-transparent to-accent/10 p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                        {course.badge}
                      </span>
                      <span className="grid size-11 place-items-center rounded-full border border-border bg-background/70 text-primary">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                    </div>
                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {course.subtitle}
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold tracking-tight">{course.title}</h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{course.summary}</p>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-t border-border p-6 sm:p-7">
                    <span className="text-sm text-muted-foreground">View program details</span>
                    <Button render={<Link href={`/courses/${course.slug}`} />} nativeButton={false} variant="outline" className="shrink-0 rounded-full">
                      Explore
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Button>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
