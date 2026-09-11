'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { faculty } from '@/lib/data'

const chunkArray = <T,>(items: T[], size: number) => {
  const chunks: T[][] = []

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size))
  }

  return chunks
}

export function FacultyGrid() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [cardsPerSlide, setCardsPerSlide] = useState(3)

  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1)
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2)
      } else {
        setCardsPerSlide(3)
      }
    }

    updateCardsPerSlide()
    window.addEventListener('resize', updateCardsPerSlide)

    return () => window.removeEventListener('resize', updateCardsPerSlide)
  }, [])

  const slides = useMemo(() => chunkArray(faculty, cardsPerSlide), [cardsPerSlide])

  useEffect(() => {
    if (slides.length <= 1 || isPaused) {
      return
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [isPaused, slides.length])

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length)
  }

  return (
    <div
      className="mt-14"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-[28px] border border-border/80 bg-gradient-to-br from-card via-card to-primary/5 p-3 shadow-[0_30px_80px_-45px_rgba(37,99,235,0.35)] sm:p-5">
        <div className="pointer-events-none absolute -left-8 top-10 h-28 w-28 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative z-10 mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
              Featured mentors
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous faculty"
              onClick={goToPrevious}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary sm:h-10 sm:w-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next faculty"
              onClick={goToNext}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_16px_30px_-20px_rgba(37,99,235,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_35px_-18px_rgba(37,99,235,0.95)] sm:h-10 sm:w-10"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div key={`slide-${slideIndex}`} className="min-w-full">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {slide.map((member, cardIndex) => (
                    <article
                      key={`${member.name}-${cardIndex}`}
                      className="group relative overflow-hidden rounded-[24px] border border-border/80 bg-background/80 glass glow-soft"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <Image
                          src={member.image || '/placeholder.svg'}
                          alt={`${member.name}, ${member.subject} faculty at Lakshya Classes`}
                          fill
                          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 " />
                        <div className="absolute inset-x-0 bottom-0 p-5">
                          {member.role && (
                            <span className="inline-flex rounded-full border border-primary/40 bg-background/70 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
                              {member.role}
                            </span>
                          )}
                          <h3 className="mt-3 text-lg font-bold leading-tight text-white drop-shadow-sm sm:text-xl">
                            {member.name}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-primary/90">
                            {member.subject}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-6 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            {slides.map((_, dotIndex) => (
              <button
                key={`dot-${dotIndex}`}
                type="button"
                aria-label={`Go to slide ${dotIndex + 1}`}
                onClick={() => setActiveIndex(dotIndex)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === dotIndex
                    ? 'w-10 bg-primary shadow-[0_0_18px_rgba(96,165,250,0.75)]'
                    : 'w-2.5 bg-primary/25 hover:bg-primary/60'
                }`}
              />
            ))}
          </div>

        
        </div>
      </div>
    </div>
  )
}
