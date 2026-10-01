'use client'

import { useEffect, useId, useState, type ButtonHTMLAttributes, type MouseEvent } from 'react'
import { type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'
import { LeadForm } from '@/components/lead-form'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type EnquiryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
  dialogTitle?: string
}

export function EnquiryButton({
  children,
  dialogTitle = 'Start your enquiry',
  className,
  size,
  variant,
  ...buttonProps
}: EnquiryButtonProps) {
  const [open, setOpen] = useState(false)
  const titleId = useId()

  useEffect(() => {
    if (!open) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  function closeOnBackdrop(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) setOpen(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(buttonVariants({ variant, size, className }))}
        {...buttonProps}
      >
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-end bg-foreground/35 p-0 backdrop-blur-sm sm:items-center sm:justify-center sm:p-6"
          role="presentation"
          onMouseDown={closeOnBackdrop}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="max-h-[92dvh] w-full overflow-y-auto rounded-t-2xl border border-border bg-background p-5 shadow-2xl sm:max-w-2xl sm:rounded-2xl sm:p-7"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Lakshya Classes
                </p>
                <h2 id={titleId} className="mt-1 text-2xl font-bold tracking-tight">
                  {dialogTitle}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tell us a little about yourself. Our counsellors will be in touch shortly.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid size-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close enquiry form"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
            <LeadForm className="mt-6" submitLabel="Submit Enquiry" />
          </section>
        </div>
      )}
    </>
  )
}
