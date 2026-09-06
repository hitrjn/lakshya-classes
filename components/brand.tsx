import Link from 'next/link'
import { Target } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Brand({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('group flex items-center gap-2.5', className)}
      aria-label="Lakshya Classes home"
    >
      <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground glow transition-transform duration-300 group-hover:scale-105">
        <Target className="size-5" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-base font-extrabold tracking-tight">
          LAKSHYA
        </span>
        <span className="text-[0.62rem] font-medium uppercase tracking-[0.32em] text-primary">
          Classes
        </span>
      </span>
    </Link>
  )
}
