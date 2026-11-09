'use client'

import { useEffect, useId, useRef, useState, type MouseEvent } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function TopIqReadyPopup() {
  const [open, setOpen] = useState(false)
  const titleId = useId()
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setOpen(true)
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = document.querySelectorAll<HTMLElement>(
        '[data-topiqready-dialog] a[href], [data-topiqready-dialog] button:not([disabled])',
      )
      const first = focusableElements[0]
      const last = focusableElements[focusableElements.length - 1]

      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  function closeOnBackdrop(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) setOpen(false)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-foreground/45 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="presentation"
      onMouseDown={closeOnBackdrop}
    >
      <section
        data-topiqready-dialog
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-lg overflow-hidden rounded-t-3xl border border-border bg-background p-6 shadow-2xl sm:rounded-3xl sm:p-8"
      >
        <div className="aura pointer-events-none absolute inset-0" aria-hidden="true" />
        <button
          ref={closeButtonRef}
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full border border-border bg-background/80 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Close TopIQReady promotion"
        >
          <X className="size-4" aria-hidden="true" />
        </button>

        <div className="relative">
          <img
            src="https://topiqready.in/logo.png"
            alt="TopiqReady"
            className="h-12 w-auto max-w-[calc(100%-3rem)] object-contain object-left"
          />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Your AI tutor
          </p>
          <h2
            id={titleId}
            className="mt-2 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Ask any doubt. Learn with confidence.
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Get clear, step-by-step help with school subjects and JEE or NEET
            preparation. Try TopiqReady&apos;s AI tutor for free.
          </p>
          <Button
            render={
              <a
                href="https://topiqready.in"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            nativeButton={false}
            size="lg"
            className="mt-6 w-full rounded-full glow"
          >
            Try TopIQReady for free
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </section>
    </div>
  )
}
