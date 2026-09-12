import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Building2, MapPin, Users } from 'lucide-react'
import { CentresGallery } from '@/components/centres-gallery'
import { CtaBand } from '@/components/cta-band'
import { MapEmbed } from '@/components/map-embed'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Lakshya Classes Centres | Ranchi, Patna & Arrah Coaching',
  description:
    'Visit Lakshya Classes at our coaching centres in Ranchi, Patna, and Arrah for focused IIT JEE, NEET, and board exam preparation.',
  alternates: {
    canonical: '/our-centres',
  },
}

const centres = [
  {
    city: 'Ara',
    label: 'Ara Centre',
    tag: 'Admissions open',
    description:
      'A focused learning environment for students seeking disciplined preparation and personalised support in Ara.',
    mapUrl: 'https://maps.app.goo.gl/P7ihqsM8o2N7aUgK6',
    mapQuery: 'Lakshya Classes Ara Centre, Street No. 03, Near Tribhuwani Niwas, Maharaja Hata, Katira, Arrah 802301',
  },
  {
    city: 'Patna',
    label: 'Patna Centre',
    tag: 'Strong mentoring',
    description:
      'A motivating and result-oriented centre for NEET and JEE aspirants looking for consistent academic guidance in Patna.',
    mapUrl: 'https://maps.app.goo.gl/S3FdpQiwRuVi9p8CA',
    mapQuery: 'Lakshya Classes Danapur, Saguna More, Danapur, Patna',
  },
  {
    city: 'Ranchi',
    label: 'Ranchi Centre',
    tag: 'Academic excellence',
    description:
      'Our flagship centre in Ranchi with a strong culture of discipline, practice, and performance-focused learning.',
    mapUrl: 'https://maps.app.goo.gl/hquxE63R5S1qE3fy8',
    mapQuery: 'Lakshya Classes Ranchi Centre 1, 1st Floor, H Square Building, Circular Road, Opp. Pranami Heights, Lalpur, Ranchi 834001',
  },
]

const benefits = [
  {
    icon: Building2,
    title: 'Well-structured batches',
    desc: 'Focused classroom learning with rigorous practice and mentorship.',
  },
  {
    icon: Users,
    title: 'Personal attention',
    desc: 'Small-group learning that helps each student stay on track.',
  },
  {
    icon: MapPin,
    title: 'Convenient locations',
    desc: 'Access quality coaching near you in Ara, Patna, and Ranchi.',
  },
]

export default function OurCentresPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Centres"
        title="Coaching that stays close to home"
        description="Lakshya Classes supports students across Ara, Patna, and Ranchi with high-quality teaching, regular mentoring, and structured preparation for competitive exams."
        imageSrc="/gallery/1000274993.jpg"
        imageAlt="Lakshya Classes centres and campus environment"
      />


      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
              Our presence
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Learning hubs designed for growth
            </h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {centres.map((centre, index) => (
            <Reveal key={centre.city} delay={index * 100}>
              <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card/40 shadow-[0_10px_40px_-28px_rgba(59,130,246,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/12 via-transparent to-accent/10 p-6">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                      {centre.tag}
                    </span>
                    <span className="grid size-10 place-items-center rounded-full border border-border bg-background/70 text-primary">
                      <MapPin className="size-4" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="rounded-2xl border border-border bg-background/60 p-4 shadow-[0_15px_40px_-25px_rgba(59,130,246,0.5)]">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Centre
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-foreground">{centre.label}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {centre.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-border bg-background/30 p-4">
                  <MapEmbed
                    query={centre.mapQuery}
                    href={centre.mapUrl}
                    title={centre.label}
                    iframeClassName="h-52"
                    showLink={false}
                    className="rounded-2xl"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-border bg-card/55 p-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Location
                    </p>
                    <p className="mt-1 text-lg font-semibold text-foreground">
                      {centre.city}
                    </p>
                  </div>

                  <Button
                    render={
                      <Link
                        href={centre.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                      />
                    }
                    nativeButton={false}
                    variant="outline"
                    className="rounded-full"
                  >
                    View map
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
            Why students choose us
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Reveal key={benefit.title} delay={index * 100}>
                <article className="h-full rounded-2xl border border-border bg-card/40 p-7 shadow-[0_15px_40px_-30px_rgba(59,130,246,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                  <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/10">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {benefit.desc}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
