import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { CtaBand } from '@/components/cta-band'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { ArrowRight, Atom, Stethoscope } from 'lucide-react'
import Link from 'next/link'
import { courses } from '@/lib/courses'

export const metadata: Metadata = {
  title: 'IIT JEE & NEET Coaching in Ranchi, Patna & Ara',
  description:
    'Lakshya Classes offers structured IIT JEE Main, JEE Advanced, and NEET UG coaching with expert teaching, practice, and mentoring in Ranchi, Patna, and Ara.',
  alternates: {
    canonical: '/courses/jee-neet',
  },
  openGraph: {
    title: 'IIT JEE & NEET Coaching | Lakshya Classes',
    description:
      'Structured JEE and NEET preparation with expert teaching, regular practice, and mentoring in Ranchi, Patna, and Ara.',
    url: 'https://lakshyaclasses.in/courses/jee-neet',
  },
}

const jeeNeetSlugs = ['iit-jee', 'neet'] as const

const primaryCourses = courses.filter((course) =>
  jeeNeetSlugs.includes(course.slug as (typeof jeeNeetSlugs)[number]),
)

const courseIcons = { 'iit-jee': Atom, neet: Stethoscope }

export default function JeeNeetCoursesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Academic Programs"
        title="JEE & NEET Preparation"
        description="Focused preparation for ambitious engineering and medical aspirants, combining expert teaching, disciplined practice, and regular performance tracking."
        imageSrc="/centres-main.png"
        imageAlt="Students learning at Lakshya Classes"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <SectionHeading
          eyebrow="Choose your target"
          title="Programs built for competitive exams"
          description="Choose a structured path with the right academic support, practice material, and exam strategy."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {primaryCourses.map((course, index) => {
            const Icon = courseIcons[course.slug as keyof typeof courseIcons]
            return (
              <Reveal key={course.slug} delay={index * 100}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card/45 shadow-[0_12px_42px_-30px_rgba(59,130,246,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_55px_-30px_rgba(59,130,246,0.65)]">
                  <div className="bg-gradient-to-br from-primary/12 via-transparent to-accent/10 p-6 sm:p-7">
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
                    <h2 className="mt-2 text-3xl font-extrabold tracking-tight">{course.title}</h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{course.summary}</p>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-t border-border p-6 sm:p-7">
                    <span className="text-sm text-muted-foreground">Course structure & benefits</span>
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
