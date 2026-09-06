'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type LeadFormProps = {
  submitLabel?: string
  className?: string
}

const fields = [
  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your full name', autoComplete: 'name' },
  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 00000 00000', autoComplete: 'tel' },
  { id: 'email', label: 'Email ID', type: 'email', placeholder: 'you@example.com', autoComplete: 'email' },
] as const

export function LeadForm({ submitLabel = 'Enquire Now', className }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center',
          className,
        )}
        role="status"
      >
        <CheckCircle2 className="size-10 text-primary" aria-hidden="true" />
        <p className="text-lg font-semibold">Thank you!</p>
        <p className="text-sm text-muted-foreground">
          Our team will reach out to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn('flex flex-col gap-4', className)}>
      {fields.map((field) => (
        <div key={field.id} className="flex flex-col gap-1.5">
          <label
            htmlFor={field.id}
            className="text-sm font-medium text-foreground"
          >
            {field.label}
          </label>
          <input
            id={field.id}
            name={field.id}
            type={field.type}
            required
            autoComplete={field.autoComplete}
            placeholder={field.placeholder}
            className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/25"
          />
        </div>
      ))}
      <Button type="submit" size="lg" className="mt-1 w-full rounded-xl glow">
        {submitLabel}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        We respect your privacy. No spam, ever.
      </p>
    </form>
  )
}
