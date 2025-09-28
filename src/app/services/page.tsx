import React from 'react';
import type { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceComparison from '@/components/services/ServiceComparison';
import FullManagementSection from '@/components/services/FullManagementSection';
import OnlineManagementSection from '@/components/services/OnlineManagementSection';
import ProcessOverview from '@/components/services/ProcessOverview';
import PricingCalculator from '@/components/services/PricingCalculator';
import ServicesFAQ from '@/components/services/ServicesFAQ';
import ServicesTestimonials from '@/components/services/ServicesTestimonials';

export const metadata: Metadata = {
  title: 'Property Management Services | VALORA',
  description: 'Professional property management services in Portugal. Choose between Full Management (30%) or Online Management (12.5%). Expert vacation rental management for luxury properties.',
  keywords: [
    'property management services Portugal',
    'vacation rental management',
    'Airbnb management services',
    'full property management',
    'online property management',
    'luxury property services',
    'rental property management',
    'property management pricing',
  ],
  openGraph: {
    title: 'Property Management Services | VALORA',
    description: 'Professional property management services with transparent pricing. Full Management at 30% or Online Management at 12.5% commission.',
    images: [
      {
        url: '/images/services-overview.jpg',
        width: 1200,
        height: 630,
        alt: 'VALORA property management services',
      },
    ],
  },
  alternates: {
    canonical: 'https://valora.pt/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <ServicesHero />

      {/* Service Comparison */}
      <ServiceComparison />

      {/* Full Management Details */}
      <FullManagementSection />

      {/* Online Management Details */}
      <OnlineManagementSection />

      {/* Process Overview */}
      <ProcessOverview />

      {/* Pricing Calculator */}
      <PricingCalculator />

      {/* Services Testimonials */}
      <ServicesTestimonials />

      {/* FAQ Section */}
      <ServicesFAQ />
    </>
  );
}