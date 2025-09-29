// src/app/page.tsx - FIXED VERSION (No double header)

import HeroSection from '@/components/sections/HeroSection';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyChooseValora from '@/components/sections/WhyChooseValora';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseValora />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}