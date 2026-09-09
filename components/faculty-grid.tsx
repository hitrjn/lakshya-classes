import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { faculty } from '@/lib/data'

export function FacultyGrid() {
  return (
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {faculty.map((member, i) => (
        <Reveal key={member.name} delay={(i % 4) * 80}>
          <article className="group relative h-full overflow-hidden rounded-2xl border border-border glass glow-soft">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={member.image || '/placeholder.svg'}
                alt={`${member.name}, ${member.subject} faculty at Lakshya Classes`}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              {member.role && (
                <span className="absolute left-3 top-3 rounded-full border border-primary/40 bg-background/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-primary backdrop-blur">
                  {member.role}
                </span>
              )}
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="text-lg font-bold leading-tight">{member.name}</h3>
              <p className="mt-0.5 text-sm font-medium text-primary">
                {member.subject}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  )
}
