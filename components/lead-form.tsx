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
  { id: 'fatherName', label: "Father's Name", type: 'text', placeholder: "Parent's full name", autoComplete: 'name' },
  { id: 'class', label: 'Class', type: 'text', placeholder: 'e.g. Class 11', autoComplete: 'off' },
  { id: 'school', label: 'School', type: 'text', placeholder: 'School name', autoComplete: 'organization' },
  { id: 'mobileNumber', label: 'Mobile Number', type: 'tel', placeholder: '+91 00000 00000', autoComplete: 'tel' },
  { id: 'address', label: 'Address', type: 'text', placeholder: 'Your city or locality', autoComplete: 'street-address' },
  { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Subjects you need help with', autoComplete: 'off' },
] as const


// Updated: Using local API route as a proxy
const API_ROUTE_URL = "/api/lead-form";

export function LeadForm({ submitLabel = 'Enquire Now', className }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch(API_ROUTE_URL, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(`Submission failed: ${res.status}`)
      setSubmitted(true)
    } catch (err: any) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className={cn('flex flex-col items-center justify-center gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center', className)} role="status">
        <CheckCircle2 className="size-10 text-primary" aria-hidden="true" />
        <p className="text-lg font-semibold">Thank you!</p>
        <p className="text-sm text-muted-foreground">Our team will reach out to you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn('grid gap-4 sm:grid-cols-2', className)}>
      {fields.map((field) => (
        <div key={field.id} className="flex flex-col gap-1.5">
          <label htmlFor={field.id} className="text-sm font-medium text-foreground">{field.label}</label>
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
      <div className="flex flex-col gap-1.5">
        <label htmlFor="futureGoal" className="text-sm font-medium text-foreground">Future Goal</label>
        <select
          id="futureGoal"
          name="futureGoal"
          required
          defaultValue=""
          className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/25"
        >
          <option value="" disabled>Select your goal</option>
          <option value="engineering">Engineering</option>
          <option value="medical">Medical</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="mt-1 w-full rounded-xl glow" disabled={loading}>{loading ? 'Submitting...' : submitLabel}</Button>
        {error && <p className="mt-3 text-center text-xs text-red-500">{error}</p>}
        <p className="mt-3 text-center text-xs text-muted-foreground">We respect your privacy. No spam, ever.</p>
      </div>
    </form>
  )
}