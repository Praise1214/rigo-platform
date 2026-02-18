import type { Metadata } from 'next'
import { Inter, Montserrat, DM_Sans, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
  weight: ['400', '500'],
})


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: 'Rising Generation (RIGO) — Empowering Nigeria\'s Next Generation of Leaders',
    template: '%s | RIGO',
  },
  description: 'Rising Generation builds confident, skilled and socially conscious youth shaping Nigeria\'s future through education, entrepreneurship, career development and civic engagement.',
  keywords: ['Nigeria', 'youth empowerment', 'leadership', 'education', 'entrepreneurship', 'RIGO', 'Rising Generation', 'nation building'],
  authors: [{ name: 'Rising Generation' }],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://risinggeneration.org',
    siteName: 'Rising Generation (RIGO)',
    title: 'Rising Generation (RIGO) — Empowering Nigeria\'s Next Generation of Leaders',
    description: 'Building confident, skilled and socially conscious youth shaping Nigeria\'s future.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Rising Generation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rising Generation (RIGO)',
    description: 'Empowering Nigeria\'s next generation of leaders.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream">
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
