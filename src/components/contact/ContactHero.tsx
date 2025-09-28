'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare,
  Phone,
  Mail,
  Clock,
  Users,
  Calculator
} from 'lucide-react';

const contactOptions = [
  {
    icon: Calculator,
    title: 'Free Property Assessment',
    description: 'Get a comprehensive analysis of your property\'s rental potential',
    highlight: 'Most Popular'
  },
  {
    icon: Phone,
    title: 'Expert Consultation',
    description: 'Speak directly with our property management specialists',
    highlight: null
  },
  {
    icon: MessageSquare,
    title: 'General Inquiries',
    description: 'Questions about our services or getting started',
    highlight: null
  }
];

const responsePromises = [
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Initial response within 2 hours during business days'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Speak with experienced property management professionals'
  },
  {
    icon: Mail,
    title: 'Detailed Follow-up',
    description: 'Comprehensive assessment report and recommendations'
  }
];

export default function ContactHero() {
  return (
    <section className="section-hero bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffb400' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-6"
          >
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm font-medium">Get In Touch</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-xl mb-6"
          >
            Ready to Transform Your Property Into a
            <span className="text-gradient"> High-Performing Investment?</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lead mb-12"
          >
            Get started with a free property assessment or speak directly with our experts. 
            We're here to help you maximize your property's potential with our proven management services.
          </motion.p>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {contactOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className={`card-premium hover-lift relative ${
                    option.highlight ? 'ring-2 ring-primary-200' : ''
                  }`}
                >
                  {option.highlight && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {option.highlight}
                      </div>
                    </div>
                  )}

                  <div className="text-center">
                    <div className={`inline-flex p-4 rounded-2xl mb-4 ${
                      option.highlight 
                        ? 'bg-primary-500 text-white' 
                        : 'bg-primary-100 text-primary-600'
                    }`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-dark-900 mb-2">
                      {option.title}
                    </h3>
                    <p className="text-light-700 text-sm">
                      {option.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Response Promises */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-white rounded-2xl shadow-soft border border-light-200 p-8"
          >
            <h3 className="text-xl font-semibold text-dark-900 mb-8 text-center">
              Our Commitment to You
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {responsePromises.map((promise, index) => {
                const IconComponent = promise.icon;
                return (
                  <motion.div
                    key={promise.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex p-3 bg-primary-100 rounded-xl mb-4">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-dark-900 mb-2">
                      {promise.title}
                    </h4>
                    <p className="text-light-700 text-sm">
                      {promise.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-dark-900 to-dark-800 text-white px-6 py-3 rounded-lg">
              <Phone className="h-5 w-5 text-primary-400" />
              <div className="text-left">
                <div className="text-sm text-gray-300">24/7 Emergency Support</div>
                <div className="font-semibold">+351 XXX XXX XXX</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}