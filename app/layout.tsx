import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lakshya Classes | Premier IIT JEE & NEET Coaching',
  description:
    'Lakshya Classes offers intensive, result-oriented coaching for IIT JEE and NEET with 9+ years of experience, expert educators, and structured preparation.',
  generator: 'v0.app',
  keywords: [
    'Lakshya Classes',
    'IIT JEE coaching',
    'NEET coaching',
    'Ranchi coaching institute',
    'competitive exam preparation',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1220',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
