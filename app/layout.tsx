import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ThemeProvider } from '@/components/theme-provider'
import { ReloadSplash } from '@/components/reload-splash'
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
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f9fc' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1220' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        {/*
          Theme init script (runs before React hydrates).
          Avoids `next-themes` script injection inside a client component which triggers
          React 19 warning: "Encountered a script tag while rendering React component".
        */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
  try {
    const key = 'theme';
    const stored = localStorage.getItem(key);
    const theme = stored || 'light';
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const resolved = theme === 'system' ? (systemDark ? 'dark' : 'light') : theme;
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(resolved);
  } catch (e) {}
})();`}
        </Script>

        <ThemeProvider
          defaultTheme="light"
          enableSystem
          storageKey="theme"
        >
          <ReloadSplash />
          <SiteHeader />
          {children}
          <SiteFooter />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
