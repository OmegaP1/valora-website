// src/components/sections/ServicesOverview.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle, Globe, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesOverview() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            {t.services.title}
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Full Management */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-premium hover-lift group"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-dark-900 mb-2">
                  {t.services.fullManagement.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-primary-600">
                    {t.services.fullManagement.commission}
                  </span>
                  <span className="text-sm text-light-600">{t.common.commission}</span>
                </div>
              </div>
              <div className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                Portugal
              </div>
            </div>

            <p className="text-light-700 mb-6">
              {t.services.fullManagement.description}
            </p>

            <ul className="space-y-3 mb-6">
              {t.services.fullManagement.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/services#full-management"
              className="btn-primary w-full group-hover:shadow-lg transition-all"
            >
              {t.common.learnMore}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Online Management */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card-premium hover-lift group border-2 border-blue-200"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-dark-900 mb-2">
                  {t.services.onlineManagement.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-blue-600">
                    {t.services.onlineManagement.commission}
                  </span>
                  <span className="text-sm text-light-600">{t.common.commission}</span>
                </div>
              </div>
              <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium flex items-center gap-1">
                <Globe className="h-3 w-3" />
                {t.services.onlineManagement.availability}
              </div>
            </div>

            <p className="text-light-700 mb-6">
              {t.services.onlineManagement.description}
            </p>

            <ul className="space-y-3 mb-6">
              {t.services.onlineManagement.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/services#online-management"
              className="btn-secondary w-full group-hover:shadow-lg transition-all"
            >
              {t.common.learnMore}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* View All Services Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold group"
          >
            {t.services.viewAllServices}
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}