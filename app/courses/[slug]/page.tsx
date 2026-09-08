import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { courses, getCourse, type CourseSlug } from '@/lib/courses'

const primaryPhone = '+91 70501 47021'

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: CourseSlug }>
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const course = getCourse(slug)
    if (!course) return { title: 'Course | Lakshya Classes' }
    return {
      title: `${course.title} | Lakshya Classes`,
      description: course.metaDescription,
    }
  })
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: CourseSlug }>
}) {
  const { slug } = await params
  const course = getCourse(slug)
  if (!course) notFound()

  return (
    <main>
      <PageHero
        eyebrow="Course Details"
        title={course.title}
        description={course.heroDescription}
      />

      {/* Quick highlights */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {course.highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 90}>
              <article className="h-full rounded-2xl border border-border bg-card/40 p-7">
                <h3 className="text-lg font-bold">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Media + Overview */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl border border-border bg-card/40">
              {/* Image placeholder - add real image later */}
              <div className="relative grid aspect-[16/9] place-items-center bg-gradient-to-br from-muted/40 via-background to-accent/10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Hero image placeholder
                </p>
              </div>
              <div className="p-7">
                <h2 className="text-2xl font-bold">What you’ll achieve</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  This program is designed to build a clear concept base, convert concepts into marks through guided practice, and develop the discipline needed to perform under exam pressure.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button
                    render={<Link href="/our-centres" />}
                    nativeButton={false}
                    className="rounded-full glow"
                  >
                    Visit a centre
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Button>
                  <Button
                    render={<a href={`tel:${primaryPhone.replace(/\s/g, '')}`} />}
                    nativeButton={false}
                    variant="outline"
                    className="rounded-full"
                  >
                    Call for batch details
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <div className="rounded-3xl border border-border glass p-7">
              <h3 className="text-xl font-bold">This course is ideal for</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {course.forStudents.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Deliverables */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Reveal className="flex flex-col gap-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            What you get
          </span>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            A complete coaching experience
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Students improve faster when learning + practice + tests work together. These deliverables are designed to keep preparation structured and measurable.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {course.deliverables.map((d, i) => (
            <Reveal key={d.title} delay={(i % 2) * 90}>
              <article className="h-full rounded-2xl border border-border bg-card/40 p-7">
                <h3 className="text-lg font-bold">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Batch options / duration */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Reveal className="flex flex-col gap-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Batch options
          </span>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Choose a duration that fits your timeline
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Batch duration varies by class level and preparation stage. For exact timings and fee structure, call us or visit the nearest centre.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {course.batchOptions.map((b, i) => (
            <Reveal key={b.name} delay={(i % 2) * 90}>
              <article className="h-full rounded-2xl border border-border bg-card/40 p-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold">{b.name}</h3>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {b.duration}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{b.idealFor}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {b.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Admissions */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card/40 p-7">
              <h2 className="text-2xl font-bold">Admissions</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                To keep students in the right level, we recommend a quick counselling call or centre visit before joining.
              </p>
              <ol className="mt-5 space-y-3 text-sm text-muted-foreground">
                {course.admissionSteps.map((step) => (
                  <li key={step} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  render={<a href={`tel:${primaryPhone.replace(/\s/g, '')}`} />}
                  nativeButton={false}
                  className="rounded-full glow"
                >
                  Call for admission
                </Button>
                <Button
                  render={<Link href="/our-centres" />}
                  nativeButton={false}
                  variant="outline"
                  className="rounded-full"
                >
                  Visit a centre
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl border border-border bg-card/40">
              {/* Image placeholder */}
              <div className="relative grid aspect-[4/5] place-items-center bg-gradient-to-br from-muted/40 via-background to-accent/10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Image placeholder
                </p>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold">What to ask on call</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {[
                    'Batch timings (morning/evening)',
                    'Fee structure & instalment options',
                    'Current level and best-fit batch',
                    'Test schedule and revision plan',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Structure */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card/40 p-7">
              <h2 className="text-2xl font-bold">How the program runs</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We follow a step-by-step structure so students don’t feel lost mid-session and revision stays under control.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {course.structure.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl border border-border bg-card/40">
              {/* Image placeholder */}
              <div className="relative grid aspect-[4/5] place-items-center bg-gradient-to-br from-muted/40 via-background to-accent/10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Image placeholder
                </p>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold">Why Lakshya works</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {course.whyLakshya.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Reveal className="flex flex-col gap-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            FAQs
          </span>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Common questions students ask
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {course.faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={(i % 2) * 90}>
              <article className="h-full rounded-2xl border border-border bg-card/40 p-7">
                <h3 className="text-lg font-bold">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-3xl border border-primary/30 glass glow-soft">
          <div className="aura pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative flex flex-col items-start gap-4 px-6 py-12 sm:px-10">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to join {course.title}?
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Call us for batch timings, fee structure, and a counselling session. You can also visit the nearest centre to understand the teaching style and class environment.
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Button
                render={<a href={`tel:${primaryPhone.replace(/\s/g, '')}`} />}
                nativeButton={false}
                size="lg"
                className="rounded-full glow"
              >
                Call Now
              </Button>
              <Button
                render={<Link href="/our-centres" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="rounded-full"
              >
                View centres
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
