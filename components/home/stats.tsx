import { Reveal } from '@/components/reveal'

const stats = [
  { value: '9+', label: 'Years of Experience' },
  { value: '4', label: 'Learning Centres' },
  { value: '7', label: 'Expert Educators' },
  { value: '2', label: 'Flagship Programs' },
]

export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border glass md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 80}
            className="flex flex-col items-center gap-1 bg-card/30 p-8 text-center"
          >
            <span className="text-4xl font-extrabold text-primary text-glow sm:text-5xl">
              {stat.value}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {stat.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
