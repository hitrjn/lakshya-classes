import { Hero } from '@/components/home/hero'
import { Stats } from '@/components/home/stats'
import { WhyUs } from '@/components/home/why-us'
import { SectionHeading } from '@/components/section-heading'
import { FacultyGrid } from '@/components/faculty-grid'
import { CtaBand } from '@/components/cta-band'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <WhyUs />

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
        <SectionHeading
          eyebrow="Our Faculty"
          title="Mentors who make the difference"
          description="Learn from experienced subject specialists dedicated to guiding you through every concept, doubt, and milestone."
        />
        <FacultyGrid />
      </section>

      <CtaBand />
    </main>
  )
}
