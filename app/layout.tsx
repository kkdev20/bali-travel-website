import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { LanguageProvider } from '@/components/providers/LanguageProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Discover the Magic of Bali - Your Gateway to Paradise',
  description: 'Expert travel guide and services for exploring Bali. Custom itineraries, hotel bookings, transportation, and unforgettable experiences in the Island of Gods.',
  keywords: 'Bali travel, Bali tourism, travel guide, Bali destinations, Ubud, Uluwatu, Canggu, Nusa Penida',
  authors: [{ name: 'Bali Travel Portfolio' }],
  openGraph: {
    title: 'Discover the Magic of Bali - Your Gateway to Paradise',
    description: 'Expert travel guide and services for exploring Bali',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover the Magic of Bali',
    description: 'Expert travel guide and services for exploring Bali',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

