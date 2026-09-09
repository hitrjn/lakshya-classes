import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Brand({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('group flex items-center gap-2.5', className)}
      aria-label="Lakshya Classes home"
    >
      <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl border border-border bg-background transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo.png"
          alt="Lakshya Classes"
          width={36}
          height={36}
          className="h-full w-full object-contain"
        />
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
