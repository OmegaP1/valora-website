'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Crown, 
  Smartphone, 
  ArrowRight, 
  Check, 
  Users,
  TrendingUp,
  Shield,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SERVICES } from '@/utils/constants';
import { cn } from '@/utils';

const servicesData = [
  {
    ...SERVICES.full,
    icon: Crown,
    gradient: 'from-primary-500 to-primary-600',
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-200',
    textColor: 'text-primary-600',
    buttonVariant: 'primary' as const,
  },
  {
    ...SERVICES.online,
    icon: Smartphone,
    gradient: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200', 
    textColor: 'text-blue-600',
    buttonVariant: 'outline' as const,
  }
];

const comparisonFeatures = [
  {
    feature: 'Professional Photography',
    full: true,
    online: true
  },
  {
    feature: 'Multi-platform Distribution',
    full: true,
    online: true
  },
  {
    feature: 'Dynamic Pricing Optimization',
    full: true,
    online: true
  },
  {
    feature: 'Guest Communication',
    full: true,
    online: true
  },
  {
    feature: 'Cleaning & Maintenance',
    full: true,
    online: false
  },
  {
    feature: 'Check-in/Check-out Service',
    full: true,
    online: false
  },
  {
    feature: 'Property Inspections',
    full: true,
    online: false
  },
  {
    feature: 'Damage Protection',
    full: true,
    online: false
  }
];

export default function ServicesOverview() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6">
            <Star className="h-4 w-4 fill-current" />
            <span>Choose Your Management Package</span>
          </div>
          
          <h2 className="text-display-lg text-dark-900 mb-6">
            Professional Property Management
            <span className="block text-gradient-primary">Tailored to Your Needs</span>
          </h2>
          
          <p className="text-lg text-light-600 max-w-3xl mx-auto">
            Whether you want complete hands-off management or prefer to stay involved, 
            we have the perfect package to maximize your property's potential.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={cn(
                  'relative rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl',
                  service.bgColor,
                  service.borderColor,
                  'hover:scale-[1.02]'
                )}
              >
                {/* Popular Badge */}
                {service.id === 'full' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={cn(
                    'w-16 h-16 rounded-xl flex items-center justify-center',
                    `bg-gradient-to-br ${service.gradient} text-white shadow-lg`
                  )}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-dark-900">{service.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <div className={cn('text-3xl font-bold', service.textColor)}>
                        {service.commission}%
                      </div>
                      <div className="text-sm text-light-600">Commission</div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-light-700 mb-6">{service.description}</p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-dark-900 mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {service.features.slice(0, 6).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                        <span className="text-light-700 text-sm">{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 6 && (
                      <li className="text-sm text-light-500 italic">
                        +{service.features.length - 6} more features...
                      </li>
                    )}
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
                          service.id === 'full' ? 'bg-primary-500' : 'bg-blue-500'
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
                <Button
                  variant={service.buttonVariant}
                  fullWidth
                  className="group"
                  rightIcon={<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
                >
                  <Link href={`/services#${service.id}`}>
                    Learn More About {service.name}
                  </Link>
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-light-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">Service Comparison</h3>
            <p className="text-light-600">Compare features across our management packages</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-light-200">
                  <th className="text-left py-4 px-4 font-semibold text-dark-900">Features</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary-600">
                    Full Management
                    <div className="text-sm font-normal text-light-600">(30% commission)</div>
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-blue-600">
                    Online Management
                    <div className="text-sm font-normal text-light-600">(12.5% commission)</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className="border-b border-light-100">
                    <td className="py-4 px-4 text-dark-700">{item.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {item.full ? (
                        <Check className="h-5 w-5 text-success-500 mx-auto" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-light-300 rounded mx-auto"></div>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {item.online ? (
                        <Check className="h-5 w-5 text-success-500 mx-auto" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-light-300 rounded mx-auto"></div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h3 className="text-xl font-bold text-dark-900 mb-4">
            Not sure which package is right for you?
          </h3>
          <p className="text-light-600 mb-6">
            Get a free consultation and property assessment to determine the best management approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              rightIcon={<ArrowRight className="h-5 w-5" />}
            >
              <Link href="/contact">
                Get Free Consultation
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
            >
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}