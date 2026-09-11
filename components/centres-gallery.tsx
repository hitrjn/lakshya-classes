'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const gallery = [
  {
    src: '/gallery/1000274981.jpg',
   
  },
  {
    src: '/gallery/1000274983.jpg',
   
  },
  {
    src: '/gallery/1000274985.jpg',
  
  },
  {
    src: '/gallery/1000274989.jpg',
 
  },
  {
    src: '/gallery/1000274993.jpg',
 
  },
  {
    src: '/gallery/1000274999.jpg',
  
  },
  {
    src: '/gallery/1000275009.jpg',
   
  },
]

export function CentresGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % gallery.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  const currentImage = gallery[activeIndex]

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + gallery.length) % gallery.length)
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % gallery.length)
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
            Campus life
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            A space built for ambition
          </h2>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            aria-label="Previous image"
            onClick={goToPrevious}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={goToNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_20px_35px_-20px_rgba(59,130,246,0.9)] transition hover:-translate-y-0.5"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.5fr_0.9fr]">
        <div className="group relative overflow-hidden rounded-[30px] border border-border bg-card/50 shadow-[0_30px_80px_-40px_rgba(59,130,246,0.55)]">
          <div className="relative h-[420px] overflow-hidden sm:h-[500px]">
            <Image
              src={currentImage.src}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            </div>
          </div>

          <div className="absolute right-4 top-4 flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={goToPrevious}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-background/40 text-white backdrop-blur-md"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {gallery.slice(1, 4).map((image, index) => (
            <button
              key={image.title}
              type="button"
              onClick={() => setActiveIndex((index + 1) % gallery.length)}
              className={`group relative overflow-hidden rounded-[26px] border text-left transition-all duration-300 ${
                activeIndex === index + 1
                  ? 'border-primary/50 shadow-[0_20px_45px_-30px_rgba(59,130,246,0.9)]'
                  : 'border-border hover:border-primary/30'
              }`}
            >
              <div className="relative h-40 overflow-hidden sm:h-44">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/90">
                    {image.subtitle}
                  </p>
                  <p className="mt-2 text-lg font-bold text-white">{image.title}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {gallery.map((image, index) => (
          <button
            key={`${image.title}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group relative overflow-hidden rounded-[22px] border text-left transition-all duration-300 ${
              activeIndex === index
                ? 'border-primary/50 shadow-[0_20px_35px_-25px_rgba(59,130,246,0.85)]'
                : 'border-border hover:border-primary/30'
            }`}
          >
            <div className="relative h-32 overflow-hidden">
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary/90">
                  {image.subtitle}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
