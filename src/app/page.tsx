import React from 'react';
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyChooseValora from '@/components/sections/WhyChooseValora';
import FeaturedProperties from '@/components/sections/FeaturedProperties';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ServiceAreas from '@/components/sections/ServiceAreas';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Luxury Property Management in Portugal | VALORA',
  description: 'Premium property management services for luxury properties in Madeira, Lisbon, Comporta, Alentejo, and Algarve. Full management (30%) and online management (12.5%) packages with 6+ years of experience.',
  keywords: [
    'luxury property management Portugal',
    'vacation rental management',
    'Airbnb management Portugal',
    'property management Madeira',
    'property management Lisbon',
    'luxury villas Portugal',
    'premium property services',
    'investment property management',
  ],
  openGraph: {
    title: 'Luxury Property Management in Portugal | VALORA',
    description: 'Premium property management services for luxury properties across Portugal. Expert management with 6+ years of experience.',
    images: [
      {
        url: '/images/hero-property.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury villa in Portugal managed by VALORA',
      },
    ],
  },
  alternates: {
    canonical: 'https://valora.pt',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Why Choose VALORA */}
      <WhyChooseValora />

      {/* Featured Properties */}
      <FeaturedProperties />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Service Areas */}
      <ServiceAreas />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}