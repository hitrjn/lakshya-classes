import type { Metadata } from 'next'
import { Hero } from '@/components/home/hero'
import { Stats } from '@/components/home/stats'
import { WhyUs } from '@/components/home/why-us'
import { SectionHeading } from '@/components/section-heading'
import { FacultyGrid } from '@/components/faculty-grid'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Lakshya Classes | IIT JEE, NEET & Board Coaching in Ranchi, Patna & Arrah',
  description:
    'Lakshya Classes is a trusted coaching institute for IIT JEE, NEET, Boards, and Foundation programs with expert faculty and centres in Ranchi, Patna, and Arrah.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lakshya Classes | IIT JEE, NEET & Board Coaching',
    description:
      'Expert-led coaching for JEE, NEET, board exams, and foundation classes with mentoring-focused learning.',
    url: 'https://lakshyaclasses.in/',
    siteName: 'Lakshya Classes',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakshya Classes',
    description:
      'Result-oriented IIT JEE, NEET, and board coaching with expert faculty and local centres in Ranchi, Patna, and Arrah.',
  },
}

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
