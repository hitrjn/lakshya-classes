import Link from 'next/link'

import { cn } from '@/lib/utils'

type MapEmbedProps = {
  /** A free-text query, e.g. "Lakshya Classes, Circular Road, Lalpur, Ranchi" */
  query: string
  /** Optional explicit maps link to open in a new tab (otherwise derived from query). */
  href?: string
  title?: string
  className?: string
  iframeClassName?: string
  showLink?: boolean
}

function toEmbedSrc(query: string) {
  // No API key needed; Google renders a basic embed for a search query.
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
}

function toSearchHref(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export function MapEmbed({
  query,
  href,
  title,
  className,
  iframeClassName,
  showLink = true,
}: MapEmbedProps) {
  const src = toEmbedSrc(query)
  const externalHref = href ?? toSearchHref(query)

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-border bg-card/40',
        className,
      )}
    >
      <iframe
        title={title ?? `Map: ${query}`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={cn('h-56 w-full', iframeClassName)}
        allowFullScreen
      />

      {showLink && (
        <div className="flex items-center justify-end border-t border-border bg-background/40 px-3 py-2">
          <Link
            href={externalHref}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-primary underline-offset-4 hover:underline"
          >
            Open in Google Maps
          </Link>
        </div>
      )}
    </div>
  )
}
