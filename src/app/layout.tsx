import type { Metadata } from 'next';
import { Inter, Playfair_Display, Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import { cn } from '@/utils';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { ToastProvider } from '@/contexts/ToastContext';
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

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'VALORA - Luxury Property Management in Portugal',
    template: '%s | VALORA - Luxury Property Management',
  },
  description: 'Premium property management services in Portugal. Full management (30%) and online management (12.5%) packages for luxury properties in Madeira, Lisbon, Comporta, Alentejo, and Algarve.',
  keywords: [
    'property management',
    'Portugal',
    'luxury properties',
    'vacation rental',
    'Airbnb management',
    'Madeira',
    'Lisbon',
    'Comporta',
    'Alentejo',
    'Algarve',
    'real estate',
    'investment properties'
  ],
  authors: [{ name: 'VALORA Property Management' }],
  creator: 'VALORA',
  publisher: 'VALORA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://valora.pt',
    siteName: 'VALORA',
    title: 'VALORA - Luxury Property Management in Portugal',
    description: 'Premium property management services for luxury properties across Portugal. Expert management with 6+ years of experience.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VALORA Luxury Property Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VALORA - Luxury Property Management',
    description: 'Premium property management services for luxury properties across Portugal.',
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
  alternates: {
    canonical: 'https://valora.pt',
    languages: {
      'en': 'https://valora.pt/en',
      'pt': 'https://valora.pt/pt',
      'es': 'https://valora.pt/es',
      'fr': 'https://valora.pt/fr',
      'de': 'https://valora.pt/de',
      'zh': 'https://valora.pt/zh',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={cn(
        inter.variable,
        playfair.variable,
        montserrat.variable,
        'scroll-smooth'
      )}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn(
        'min-h-screen bg-white font-sans antialiased',
        'selection:bg-primary-100 selection:text-primary-900'
      )}>
        <ThemeProvider>
          <ToastProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Analytics />
            <SpeedInsights />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}