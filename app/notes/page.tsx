import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpenCheck, FileText, GraduationCap } from 'lucide-react'
import { CtaBand } from '@/components/cta-band'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export const metadata: Metadata = {
  title: 'Class Notes | Lakshya Classes',
  description:
    'Browse class-wise study notes for Classes 6 to 12 from Lakshya Classes.',
  alternates: {
    canonical: '/notes',
  },
}

const visibleClasses = [10]
// When ready for others, replace with all: [6, 7, 8, 9, 10, 11, 12]

const classTenNotes = [
  {
    subject: 'Biology',
    url: 'https://drive.google.com/file/d/1ockFjm_CSzEAW64DMmwZxW9BGMHeA6x-/view?usp=drive_link',
    icon: BookOpenCheck,
  },
  {
    subject: 'Chemistry',
    url: 'https://drive.google.com/file/d/1sV80gtyCF-lxvzoBg0LDfmB3AR7_0YAF/view?usp=drive_link',
    icon: FileText,
  },
  {
    subject: 'Physics',
    url: 'https://drive.google.com/file/d/1hg3cC0ZlKYC5dD2TnMti1F7qEsplKtfp/view?usp=drive_link',
    icon: GraduationCap,
  },
]
export default function NotesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Study Resources"
        title="Notes for every class, in one place"
        description="Choose your class to find organised revision notes and study material prepared to support your learning."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <SectionHeading
          eyebrow="Browse Notes"
          title="Class 10 Notes"
          description="Access study notes for all subjects in Class 10. Other classes coming soon."
        />
        <div className="mt-12 grid gap-5 max-w-xl mx-auto sm:grid-cols-1">
          <Reveal delay={0}>
            <article id={`class-10`} className="rounded-2xl border border-border glass p-6 sm:p-7">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <GraduationCap className="size-6 text-primary" aria-hidden="true" /> Class 10 Notes
              </h2>
              <ul className="space-y-4">
                {classTenNotes.map(note => (
                  <li key={note.subject} className='text-primary'>
                    <a
                      href={note.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-primary/10 bg-primary/5 p-4 text-primary-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                    >
                      <note.icon className="size-5 text-primary" aria-hidden="true" />
                      <span className="font-semibold text-primary">{note.subject} Notes</span>
                      <ArrowRight className="ml-auto size-4 text-primary" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Future class sections can be re-enabled here */}

      <CtaBand />
    </main>
  )
}
