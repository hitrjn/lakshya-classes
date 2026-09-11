'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function ReloadSplash() {
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(true)

  useEffect(() => {
    const closeTimer = window.setTimeout(() => setIsClosing(true), 1800)
    const removeTimer = window.setTimeout(() => setIsMounted(false), 2600)

    return () => {
      window.clearTimeout(closeTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-background text-foreground transition-opacity duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      aria-live="polite"
      aria-label="Loading Lakshya Classes"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.16),_transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_35%,rgba(96,165,250,0.08))]" />

      <div
        className={`relative flex flex-col items-center justify-center gap-4 rounded-[32px] border border-primary/20 bg-card/80 px-7 py-8 text-center shadow-[0_0_90px_rgba(59,130,246,0.18)] backdrop-blur-2xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isClosing ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <div className="absolute inset-2 rounded-[28px] border border-border/80" />
        <div className="absolute h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative flex h-24 w-24 items-center justify-center md:h-28 md:w-28">
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl" />
          <Image
            src="/logo.png"
            alt="Lakshya Classes logo"
            width={200}
            height={200}
            priority
            className="logo-breathe relative z-10 h-full w-full object-contain rounded-full border-2 border-primary/20"
          />
        </div>

        <div className="relative z-10 space-y-2">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-primary/80 animate-pulse">
            Personalise your Target.
          </p>
        </div>
      </div>
    </div>
  )
}
