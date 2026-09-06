import {
  Target,
  Users,
  BookOpenCheck,
  LineChart,
  Clock,
  ShieldCheck,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: Target,
    title: 'Goal-Oriented System',
    desc: 'Every class, test, and doubt session is engineered around a single target: your selection.',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    desc: 'Subject specialists with years of mentoring toppers across JEE and NEET.',
  },
  {
    icon: BookOpenCheck,
    title: 'Structured Curriculum',
    desc: 'A carefully sequenced syllabus that builds concepts from foundation to advanced.',
  },
  {
    icon: LineChart,
    title: 'Regular Assessments',
    desc: 'Frequent tests with detailed analysis so you always know where you stand.',
  },
  {
    icon: Clock,
    title: 'Doubt Support',
    desc: 'Dedicated doubt-clearing so no question is ever left unanswered.',
  },
  {
    icon: ShieldCheck,
    title: 'Proven Track Record',
    desc: '9+ years of consistent results and trust across four learning centres.',
  },
]

export function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Why Lakshya"
        title="Built for serious aspirants"
        description="We combine disciplined mentorship with a structured system that has helped hundreds of students reach their target."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <Reveal key={feature.title} delay={(i % 3) * 90}>
            <article className="group h-full rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card/70">
              <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:glow">
                <feature.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.desc}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
