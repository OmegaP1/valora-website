'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Crown, 
  Smartphone, 
  ArrowRight, 
  Check, 
  TrendingUp,
  Shield,
  Clock,
  Users
} from 'lucide-react';
import { cn } from '@/utils';

const services = [
  {
    id: 'full-management',
    name: 'Full Management',
    commission: '30%',
    description: 'Complete hands-off property management with premium service delivery',
    shortDescription: 'Complete property management solution',
    icon: Crown,
    popular: true,
    color: 'primary',
    features: [
      'Professional photography & listing optimization',
      'Guest communication & 24/7 support',
      'Property maintenance & housekeeping',
      'Revenue optimization & dynamic pricing',
      'Legal compliance & licensing support',
      'Monthly performance reports',
      'Marketing across 20+ platforms',
      'Emergency response service'
    ],
    benefits: [
      'Maximize revenue potential',
      'Premium guest experience',
      'Complete peace of mind',
      'Professional property care'
    ],
    idealFor: 'Property owners who want maximum returns with zero involvement'
  },
  {
    id: 'online-management',
    name: 'Online Management',
    commission: '12.5%',
    description: 'Digital-first management for tech-savvy property owners',
    shortDescription: 'Self-service with professional support',
    icon: Smartphone,
    popular: false,
    color: 'blue',
    features: [
      'Listing creation & optimization',
      'Online booking management',
      'Guest messaging templates',
      'Performance analytics dashboard',
      'Pricing recommendations',
      'Basic maintenance coordination',
      'Platform management',
      'Monthly reporting'
    ],
    benefits: [
      'Lower commission rate',
      'Maintain control',
      'Professional guidance',
      'Digital efficiency'
    ],
    idealFor: 'Hands-on owners who prefer digital management tools'
  }
];

const comparisonFeatures = [
  { name: 'Commission Rate', full: '30%', online: '12.5%' },
  { name: 'Guest Communication', full: '24/7 Professional', online: 'Template Support' },
  { name: 'Property Maintenance', full: 'Full Service', online: 'Coordination Only' },
  { name: 'Photography', full: 'Professional Shoots', online: 'Guidance Provided' },
  { name: 'Pricing Optimization', full: 'Dynamic AI-Powered', online: 'Recommendations' },
  { name: 'Marketing Channels', full: '20+ Platforms', online: 'Major Platforms' },
  { name: 'Reporting', full: 'Detailed Monthly', online: 'Basic Monthly' },
  { name: 'Emergency Support', full: '24/7 Response', online: 'Business Hours' }
];

export default function ServicesOverview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="section bg-light-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          
          <h2 className="heading-lg mb-6">
            Choose Your Perfect
            <span className="text-gradient"> Management Package</span>
          </h2>
          
          <p className="text-lead max-w-3xl mx-auto">
            Whether you prefer complete hands-off management or want to stay involved, 
            we have the perfect solution for your luxury property investment.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={cn(
                  'relative group',
                  service.popular && 'lg:scale-105'
                )}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={cn(
                  'card-premium h-full group-hover:shadow-glow transition-all duration-300',
                  service.popular && 'border-primary-200'
                )}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={cn(
                        'p-3 rounded-xl',
                        service.color === 'primary' ? 'bg-primary-100 text-primary-600' : 'bg-blue-100 text-blue-600'
                      )}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl text-dark-900">
                          {service.name}
                        </h3>
                        <p className="text-light-700 text-sm">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={cn(
                        'text-3xl font-bold',
                        service.color === 'primary' ? 'text-primary-600' : 'text-blue-600'
                      )}>
                        {service.commission}
                      </div>
                      <div className="text-sm text-light-600">Commission</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-light-700 mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-dark-900 mb-4">What's Included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-light-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-dark-900 mb-4">Key Benefits:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <div className={cn(
                            'w-2 h-2 rounded-full',
                            service.color === 'primary' ? 'bg-primary-500' : 'bg-blue-500'
                          )} />
                          <span className="text-sm text-light-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-8 p-4 bg-light-100 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-4 w-4 text-primary-600" />
                      <span className="font-medium text-dark-900 text-sm">Ideal For:</span>
                    </div>
                    <p className="text-sm text-light-700">{service.idealFor}</p>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/services#${service.id}`}
                    className={cn(
                      'w-full btn-primary group',
                      service.color === 'primary' ? 'btn-primary' : 'bg-blue-600 hover:bg-blue-700 text-white'
                    )}
                  >
                    Learn More About {service.name}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="card-premium"
        >
          <div className="text-center mb-8">
            <h3 className="heading-sm mb-4">Service Comparison</h3>
            <p className="text-lead">
              Compare our management packages to find the perfect fit for your needs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-light-200">
                  <th className="text-left py-4 pr-4 font-semibold text-dark-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary-600">
                    Full Management
                  </th>
                  <th className="text-center py-4 pl-4 font-semibold text-blue-600">
                    Online Management
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr 
                    key={feature.name} 
                    className={cn(
                      'border-b border-light-100',
                      index % 2 === 0 && 'bg-light-50/50'
                    )}
                  >
                    <td className="py-4 pr-4 font-medium text-dark-900">{feature.name}</td>
                    <td className="text-center py-4 px-4 text-light-700">{feature.full}</td>
                    <td className="text-center py-4 pl-4 text-light-700">{feature.online}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Free Consultation</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Not sure which package is right for you?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Schedule a free consultation with our property management experts. 
              We'll analyze your property and recommend the best strategy to maximize your returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-light-100 transition-colors duration-300"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/services"
                className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300"
              >
                View Detailed Pricing
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}