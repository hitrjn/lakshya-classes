import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ThemeProvider } from '@/components/theme-provider'
import { ReloadSplash } from '@/components/reload-splash'
import './globals.css'

const siteUrl = 'https://lakshyaclasses.in'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Lakshya Classes | Premier IIT JEE & NEET Coaching',
  description:
    'Lakshya Classes offers intensive, result-oriented coaching for IIT JEE and NEET with 9+ years of experience, expert educators, and structured preparation across Ranchi, Arrah, and Patna.',
  generator: 'v0.app',
  applicationName: 'Lakshya Classes',
  keywords: [
    'Lakshya Classes',
    'IIT JEE coaching',
    'NEET coaching',
    'Ranchi coaching institute',
    'competitive exam preparation',
    'Arrah coaching classes',
    'Patna coaching institute',
    'board exam coaching',
    'foundation classes',
  ],
  authors: [{ name: 'Lakshya Classes', url: siteUrl }],
  creator: 'Lakshya Classes',
  publisher: 'Lakshya Classes',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
    },
  },
  openGraph: {
    title: 'Lakshya Classes | Premier IIT JEE & NEET Coaching',
    description:
      'Mentorship-driven IIT JEE and NEET coaching with expert faculty, disciplined preparation, and centres in Ranchi, Arrah, and Patna.',
    url: siteUrl,
    siteName: 'Lakshya Classes',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Lakshya Classes logo',
      },
      {
        url: '/faculty/vishal-kumar-mishra.jpeg',
        width: 1200,
        height: 1500,
        alt: 'Vishal Kumar Mishra, Founder and Director of Lakshya Classes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakshya Classes',
    description:
      'IIT JEE, NEET, and board preparation with personalised mentoring across Ranchi, Arrah, and Patna.',
    images: ['/logo.png'],
    creator: '@lakshyaclasses',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg' },
    ],
    apple: '/apple-icon.png',
  },
  category: 'education',
  other: {
    'geo.region': 'IN-JH',
    'geo.placename': 'Ranchi, Jharkhand',
    'geo.position': '23.3536;85.3348',
    'ICBM': '23.3536, 85.3348',
  },
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
