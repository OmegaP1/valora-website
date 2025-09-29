import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VALORA - Property Management Excellence',
  description: 'Professional property management services in Portugal. Full management and online management packages available.',
  keywords: 'property management, Portugal, real estate, rental management, property investment',
  authors: [{ name: 'VALORA' }],
  creator: 'VALORA',
  publisher: 'VALORA',
  openGraph: {
    title: 'VALORA - Property Management Excellence',
    description: 'Professional property management services in Portugal',
    url: 'https://valora.pt',
    siteName: 'VALORA',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VALORA Property Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VALORA - Property Management Excellence',
    description: 'Professional property management services in Portugal',
    images: ['/images/twitter-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}