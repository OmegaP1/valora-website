// src/components/sections/WhyChooseValora.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Award, 
  TrendingUp, 
  Calendar, 
  Instagram, 
  Shield, 
  BarChart3 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WhyChooseValora() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: Award,
      title: t.whyChoose.reasons.expertise.title,
      description: t.whyChoose.reasons.expertise.description,
    },
    {
      icon: TrendingUp,
      title: t.whyChoose.reasons.revenue.title,
      description: t.whyChoose.reasons.revenue.description,
    },
    {
      icon: Calendar,
      title: t.whyChoose.reasons.calendar.title,
      description: t.whyChoose.reasons.calendar.description,
    },
    {
      icon: Instagram,
      title: t.whyChoose.reasons.marketing.title,
      description: t.whyChoose.reasons.marketing.description,
    },
    {
      icon: Shield,
      title: t.whyChoose.reasons.ownership.title,
      description: t.whyChoose.reasons.ownership.description,
    },
    {
      icon: BarChart3,
      title: t.whyChoose.reasons.service.title,
      description: t.whyChoose.reasons.service.description,
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-4">
            {t.whyChoose.title}
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            {t.whyChoose.subtitle}
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card hover-lift group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary-100 text-primary-600 group-hover:bg-primary-200 transition-colors">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dark-900 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-light-700 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}