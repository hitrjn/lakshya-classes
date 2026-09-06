import type { Metadata } from 'next'
import Image from 'next/image'
import { Quote, Flag, Eye, Award } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { FacultyGrid } from '@/components/faculty-grid'
import { CtaBand } from '@/components/cta-band'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'About Us | Lakshya Classes',
  description:
    'Founded in 2015 by Vishal Kumar Mishra, Lakshya Classes has 9+ years of experience coaching IIT JEE and NEET aspirants across four centres.',
}

const pillars = [
  {
    icon: Flag,
    title: 'Our Mission',
    desc: 'To provide focused, affordable, and result-driven coaching that helps every aspirant reach their target exam with confidence.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: 'To be the most trusted name in JEE and NEET preparation across the region — known for discipline, care, and results.',
  },
  {
    icon: Award,
    title: 'Our Values',
    desc: 'Integrity, dedication, and personalised mentorship. Every student matters, and every goal is treated as our own.',
  },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="Nine years of turning aspirations into achievements"
        description="Lakshya Classes was built on a simple belief — with the right guidance and relentless focus, every student can reach their target."
      />

      {/* Founder */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-border glass glow-soft">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/faculty/vishal-kumar-mishra.png"
                  alt="Vishal Kumar Mishra, Founder and Director of Lakshya Classes"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-bold">Vishal Kumar Mishra</h3>
                <p className="text-sm font-medium text-primary">
                  Founder &amp; Director
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              The Story
            </span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              A vision that began in 2015
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                Founded in 2015 by Vishal Kumar Mishra, Lakshya Classes started
                with a clear purpose: to make high-quality competitive exam
                coaching accessible, disciplined, and genuinely
                student-focused.
              </p>
              <p>
                Over 9+ years, that vision has grown into four thriving centres
                across Ranchi, Arrah, and Patna — supported by a team of expert
                educators who treat every student&apos;s goal as their own
                mission.
              </p>
              <p>
                Today, Lakshya Classes stands as a trusted destination for IIT
                JEE and NEET aspirants who want more than lectures — they want
                mentorship that transforms potential into results.
              </p>
            </div>

            <blockquote className="mt-8 flex gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <Quote className="size-8 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-pretty italic leading-relaxed text-foreground">
                &ldquo;Our job is not just to teach — it is to build the focus,
                discipline, and confidence that carries a student through the
                toughest exams of their life.&rdquo;
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100}>
              <article className="h-full rounded-2xl border border-border bg-card/40 p-8">
                <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <pillar.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Faculty */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Our Faculty"
          title="The people behind the results"
          description="A dedicated team of subject specialists committed to your success."
        />
        <FacultyGrid />
      </section>

      <CtaBand />
    </main>
  )
}
