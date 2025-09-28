'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Calculator,
  FileText,
  Clock,
  Shield,
  TrendingUp
} from 'lucide-react';

const ctaOptions = [
  {
    icon: Calculator,
    title: 'Property Assessment',
    description: 'Get a free analysis of your property\'s rental potential',
    action: 'Get Free Assessment',
    href: '/contact?service=assessment',
    primary: true,
    features: [
      'Revenue potential analysis',
      'Market comparison report',
      'Optimization recommendations',
      'No obligation consultation'
    ]
  },
  {
    icon: Phone,
    title: 'Expert Consultation',
    description: 'Speak directly with our property management specialists',
    action: 'Schedule Call',
    href: '/contact?service=consultation',
    primary: false,
    features: [
      '30-minute consultation',
      'Personalized strategy',
      'Q&A session',
      'Next steps guidance'
    ]
  },
  {
    icon: FileText,
    title: 'Service Comparison',
    description: 'Compare our Full vs Online management packages',
    action: 'View Packages',
    href: '/services',
    primary: false,
    features: [
      'Detailed service breakdown',
      'Pricing transparency',
      'ROI projections',
      'Package recommendations'
    ]
  }
];

const urgencyFactors = [
  {
    icon: TrendingUp,
    title: 'Peak Season Approaching',
    description: 'Optimize your property for the upcoming high season'
  },
  {
    icon: Shield,
    title: 'Professional Management',
    description: 'Ensure compliance and maximize guest satisfaction'
  },
  {
    icon: Clock,
    title: 'Quick Setup',
    description: 'Get your property market-ready in just 2 weeks'
  }
];

const testimonialQuote = {
  text: "Working with VALORA was the best decision for our property investment. Revenue increased 45% in the first year.",
  author: "Maria Santos",
  role: "Villa Owner, Madeira",
  image: "/images/testimonial-maria-small.jpg"
};

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <Image
          src="/images/luxury-property-bg.jpg"
          alt="Luxury property background"
          fill
          className="object-cover"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Main CTA Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">
            Ready to Transform Your Property Into a
            <span className="text-gradient"> High-Performing Investment?</span>
          </h2>
          
          <p className="text-lead max-w-3xl mx-auto mb-8">
            Join 150+ successful property owners who trust VALORA with their luxury properties. 
            Get started with a free assessment and discover your property's true potential.
          </p>

          {/* Urgency Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {urgencyFactors.map((factor, index) => {
              const IconComponent = factor.icon;
              return (
                <motion.div
                  key={factor.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <IconComponent className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-dark-900 text-sm">{factor.title}</div>
                    <div className="text-light-600 text-xs">{factor.description}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Options Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {ctaOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className={`card-premium hover-lift ${option.primary ? 'ring-2 ring-primary-200 bg-gradient-to-br from-primary-50 to-white' : ''}`}
              >
                {option.primary && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-2xl mb-4 ${option.primary ? 'bg-primary-500 text-white' : 'bg-primary-100 text-primary-600'}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 mb-2">{option.title}</h3>
                  <p className="text-light-700">{option.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-light-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={option.href}
                  className={`w-full text-center group flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    option.primary 
                      ? 'bg-primary-500 text-white hover:bg-primary-600 hover:scale-105' 
                      : 'bg-white border-2 border-primary-200 text-primary-600 hover:border-primary-300 hover:bg-primary-50'
                  }`}
                >
                  <span>{option.action}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Social Proof Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Testimonial */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonialQuote.image}
                    alt={testimonialQuote.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-dark-900">{testimonialQuote.author}</div>
                  <div className="text-sm text-light-600">{testimonialQuote.role}</div>
                  <div className="flex items-center space-x-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-primary-500 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-lg text-dark-900 leading-relaxed">
                "{testimonialQuote.text}"
              </blockquote>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Properties Managed', value: '150+' },
                { label: 'Client Satisfaction', value: '98%' },
                { label: 'Average Revenue Increase', value: '39%' },
                { label: 'Years of Experience', value: '6+' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-light-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-dark-900 to-dark-800 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Need to Speak with Someone Today?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our property management specialists are available to discuss your specific needs 
              and answer any questions about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                value: '+351 XXX XXX XXX',
                subtitle: 'Available 9AM - 6PM',
                action: 'tel:+351XXXXXXXXX'
              },
              {
                icon: Mail,
                title: 'Email Us',
                value: 'hello@valora.pt',
                subtitle: 'Response within 2 hours',
                action: 'mailto:hello@valora.pt'
              },
              {
                icon: Calendar,
                title: 'Book Meeting',
                value: 'Schedule Consultation',
                subtitle: 'Available slots today',
                action: '/contact?service=meeting'
              }
            ].map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a
                  key={contact.title}
                  href={contact.action}
                  className="block p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">{contact.title}</div>
                      <div className="text-primary-300">{contact.value}</div>
                      <div className="text-sm text-gray-400">{contact.subtitle}</div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 text-sm text-gray-300">
              <Shield className="h-4 w-4" />
              <span>Licensed & Insured • AL Compliance Experts • 6+ Years Experience</span>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <Link
            href="/contact"
            className="inline-flex items-center space-x-3 bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <Calculator className="h-6 w-6" />
            <span>Get Your Free Property Assessment</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <p className="text-sm text-light-600 mt-4">
            Free assessment • No obligation • Response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}