import React from 'react';
import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import OfficeLocations from '@/components/contact/OfficeLocations';
import ContactFAQ from '@/components/contact/ContactFAQ';

export const metadata: Metadata = {
  title: 'Contact VALORA | Property Management Consultation',
  description: 'Contact VALORA for premium property management services in Portugal. Get your free property assessment or schedule a consultation with our experts.',
  keywords: [
    'contact VALORA',
    'property management consultation',
    'free property assessment',
    'Portugal property management',
    'vacation rental consultation',
    'Airbnb management contact',
    'luxury property services',
  ],
  openGraph: {
    title: 'Contact VALORA | Property Management Consultation',
    description: 'Get in touch with VALORA for expert property management services. Free consultation and property assessment available.',
    images: [
      {
        url: '/images/contact-us.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact VALORA property management team',
      },
    ],
  },
  alternates: {
    canonical: 'https://valora.pt/contact',
  },
};

import React from 'react';
import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import OfficeLocations from '@/components/contact/OfficeLocations';
import ContactFAQ from '@/components/contact/ContactFAQ';

export const metadata: Metadata = {
  title: 'Contact VALORA | Property Management Consultation',
  description: 'Contact VALORA for premium property management services in Portugal. Get your free property assessment or schedule a consultation with our experts.',
  keywords: [
    'contact VALORA',
    'property management consultation',
    'free property assessment',
    'Portugal property management',
    'vacation rental consultation',
    'Airbnb management contact',
    'luxury property services',
  ],
  openGraph: {
    title: 'Contact VALORA | Property Management Consultation',
    description: 'Get in touch with VALORA for expert property management services. Free consultation and property assessment available.',
    images: [
      {
        url: '/images/contact-us.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact VALORA property management team',
      },
    ],
  },
  alternates: {
    canonical: 'https://valora.pt/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <ContactHero />

      {/* Main Contact Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <OfficeLocations />

      {/* Contact FAQ */}
      <ContactFAQ />
    </>
  );
}