import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Brand } from '@/components/brand'
import navigate from 'next/navigation'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/our-centres', label: 'Our Centres' },
  { href: '/courses', label: 'Courses' },
]

const phones = ['+91 70501 47021', '+91 70501 47022']

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Brand />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Premier coaching for IIT JEE and NEET aspirants. 9+ years of
            experience shaping the next face of India.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Explore
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Reach Us
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            {phones.map((p) => (
              <li key={p}>
                <a
                  href={`tel:${p.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:vm004501@gmail.com"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="size-4 text-primary" aria-hidden="true" />
                vm004501@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Centres
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
             <a href="/our-centres" className="transition-colors hover:text-primary">
                Lalpur, Ranchi (2 Centres)
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <a href="/our-centres" className="transition-colors hover:text-primary">
                Katira, Arrah
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <a href="/our-centres" className="transition-colors hover:text-primary">
                Saguna More, Danapur, Patna
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Lakshya Classes. All rights reserved.</p>
          <p>Founded 2015 by Vishal Kumar Mishra.</p>
        </div>
      </div>
    </footer>
  )
}
