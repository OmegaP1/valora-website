// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '../styles/globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'VALORA | Premium Property Management in Portugal',
    template: '%s | VALORA',
  },
  description: 'Transform your property into a high-performing luxury investment with VALORA. 6+ years of proven expertise in Madeira, Lisbon, Comporta, Alentejo, and Algarve.',
  keywords: [
    'property management Portugal',
    'luxury property management',
    'Airbnb management',
    'vacation rental management',
    'Madeira property management',
    'Lisbon property management',
    'Algarve property management',
    'short-term rental management',
  ],
  authors: [{ name: 'VALORA' }],
  creator: 'VALORA',
  publisher: 'VALORA',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['pt_PT', 'es_ES', 'fr_FR', 'de_DE', 'zh_CN'],
    url: 'https://valora.pt',
    siteName: 'VALORA',
    title: 'VALORA | Premium Property Management in Portugal',
    description: 'Transform your property into a high-performing luxury investment with 6+ years of proven expertise.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VALORA Premium Property Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VALORA | Premium Property Management',
    description: 'Transform your property into a high-performing luxury investment',
    images: ['/images/og-image.jpg'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Header />
          <main className="min-h-screen pt-[136px]">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}