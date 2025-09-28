'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Crown,
  Smartphone,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Star
} from 'lucide-react';

const keyBenefits = [
  {
    icon: TrendingUp,
    title: 'Revenue Optimization',
    description: 'AI-powered pricing and marketing across 20+ platforms'
  },
  {
    icon: Users,
    title: 'Professional Guest Service',
    description: '24/7 support ensuring exceptional guest experiences'
  },
  {
    icon: CheckCircle,
    title: 'Complete Legal Compliance',
    description: 'AL licensing, documentation, and regulatory support'
  },
  {
    icon: Star,
    title: 'Premium Property Care',
    description: 'Maintenance, housekeeping, and property protection'
  }
];

const quickStats = [
  { label: 'Average Revenue Increase', value: '39%', highlight: true },
  { label: 'Client Satisfaction Rate', value: '98%', highlight: false },
  { label: 'Properties Managed', value: '150+', highlight: false },
  { label: 'Years of Experience', value: '6+', highlight: false }
];

export default function ServicesHero() {
  return (
    <section className="section-hero bg-gradient-to-br from-light-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffb400' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-6"
            >
              <Crown className="h-4 w-4" />
              <span className="text-sm font-medium">Premium Services</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="heading-xl mb-6"
            >
              Professional Property
              <span className="text-gradient"> Management Services</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lead mb-8"
            >
              Choose between our comprehensive Full Management package (30% commission) 
              or flexible Online Management solution (12.5% commission). Both designed to 
              maximize your property's potential with expert care and proven results.
            </p>

            {/* Service Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              <div className="bg-white border-2 border-primary-200 rounded-xl p-4 hover:border-primary-300 transition-colors duration-300">
                <div className="flex items-center space-x-3 mb-2">
                  <Crown className="h-5 w-5 text-primary-600" />
                  <span className="font-semibold text-dark-900">Full Management</span>
                </div>
                <div className="text-2xl font-bold text-primary-600 mb-1">30%</div>
                <div className="text-sm text-light-700">Complete hands-off solution</div>
              </div>

              <div className="bg-white border-2 border-light-200 rounded-xl p-4 hover:border-light-300 transition-colors duration-300">
                <div className="flex items-center space-x-3 mb-2">
                  <Smartphone className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-dark-900">Online Management</span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-1">12.5%</div>
                <div className="text-sm text-light-700">Digital-first approach</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#service-comparison"
                className="btn-primary group"
              >
                Compare Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/contact?service=consultation"
                className="btn-secondary group"
              >
                Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className={`card text-center ${stat.highlight ? 'bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200' : ''}`}
                >
                  <div className={`text-2xl font-bold mb-2 ${stat.highlight ? 'text-primary-600' : 'text-dark-900'}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-light-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Key Benefits */}
            <div className="card-premium">
              <h3 className="font-semibold text-dark-900 mb-6">Why Choose VALORA</h3>
              <div className="space-y-4">
                {keyBenefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <IconComponent className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-medium text-dark-900 mb-1">{benefit.title}</div>
                        <div className="text-sm text-light-700">{benefit.description}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-xl font-bold mb-4">
            Ready to Maximize Your Property's Potential?
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Get a free property assessment and discover which management package 
            will deliver the best results for your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=assessment"
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-light-100 transition-colors duration-300"
            >
              Get Free Assessment
            </Link>
            <Link
              href="#pricing-calculator"
              className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300"
            >
              Calculate Potential Revenue
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}