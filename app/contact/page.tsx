import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { LeadForm } from '@/components/lead-form'
import { Reveal } from '@/components/reveal'
import { MapEmbed } from '@/components/map-embed'
import { locations } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact Us | Lakshya Classes',
  description:
    'Get in touch with Lakshya Classes for admissions and enquiries. Centres in Ranchi, Arrah, and Patna. Call +91 70501 47021.',
}

const phones = ['+91 70501 47021', '+91 70501 47022']

export default function ContactPage() {
  // TEMP: Contact page hidden for now (do not delete code).
  // Flip this off when you want the page live again.
  notFound()

  return (
    <main>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your target"
        description="Have a question about admissions, batches, or fees? Send us your details and our counsellors will get back to you."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-border glass glow-soft p-6 sm:p-8">
              <h2 className="text-2xl font-bold">Send an enquiry</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill in your details and we&apos;ll reach out shortly.
              </p>
              <LeadForm className="mt-6" submitLabel="Submit Enquiry" />
            </div>
          </Reveal>

          {/* Contact details */}
          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-2xl border border-border bg-card/40 p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <Phone className="size-5 text-primary" aria-hidden="true" />
                  Call Us
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {phones.map((p) => (
                    <li key={p}>
                      <a
                        href={`tel:${p.replace(/\s/g, '')}`}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {p}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card/40 p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <Mail className="size-5 text-primary" aria-hidden="true" />
                  Email Us
                </h3>
                <a
                  href="mailto:vm004501@gmail.com"
                  className="mt-3 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  vm004501@gmail.com
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-card/40 p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <Clock className="size-5 text-primary" aria-hidden="true" />
                  Office Hours
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Monday – Sunday
                  <br />
                  8:00 AM – 8:00 PM
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Locations */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Reveal className="flex flex-col gap-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Our Centres
          </span>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Visit us at any of our four centres
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {locations.map((loc, i) => (
            <Reveal key={loc.name} delay={(i % 2) * 90}>
              <article className="h-full overflow-hidden rounded-2xl border border-border bg-card/40">
                <div className="flex gap-4 p-6">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{loc.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {loc.address}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {loc.city}
                    </p>
                  </div>
                </div>

                <div className="border-t border-border bg-background/30 p-4">
                  <MapEmbed
                    query={
                      loc.mapQuery ?? `${loc.name}, ${loc.address}, ${loc.city}`
                    }
                    href={loc.mapUrl}
                    title={loc.name}
                    iframeClassName="h-52"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
