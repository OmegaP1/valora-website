'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Award,
  TrendingUp,
  Shield,
  Clock,
  Users,
  Heart,
  CheckCircle,
  Star
} from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '6+ Years of Excellence',
    description: 'Proven track record in luxury property management across Portugal with deep market expertise and local knowledge.',
    stats: '150+ Properties Managed'
  },
  {
    icon: TrendingUp,
    title: 'Revenue Optimization',
    description: 'AI-powered dynamic pricing and strategic marketing across 20+ platforms to maximize your property income.',
    stats: '40% Average Revenue Increase'
  },
  {
    icon: Shield,
    title: 'Complete Legal Compliance',
    description: 'Full AL licensing support, legal documentation, and regulatory compliance to protect your investment.',
    stats: '100% Compliance Rate'
  },
  {
    icon: Clock,
    title: '24/7 Guest Support',
    description: 'Round-the-clock guest communication and emergency response ensuring premium guest experiences.',
    stats: '< 15min Response Time'
  },
  {
    icon: Users,
    title: 'Local Expertise',
    description: 'Deep knowledge of Madeira, Lisbon, Comporta, Alentejo, and Algarve markets with dedicated local teams.',
    stats: '5 Regional Offices'
  },
  {
    icon: Heart,
    title: 'Personalized Service',
    description: 'Dedicated property managers who treat your investment as their own, ensuring exceptional care and attention.',
    stats: '98% Client Satisfaction'
  }
];

const testimonialHighlights = [
  {
    quote: "VALORA increased our property revenue by 45% in the first year",
    author: "Maria Santos",
    location: "Madeira Villa Owner"
  },
  {
    quote: "Professional, reliable, and truly care about our property",
    author: "James Wilson",
    location: "Lisbon Apartment Owner"
  },
  {
    quote: "Best decision we made for our investment property",
    author: "Sophie Laurent",
    location: "Algarve Villa Owner"
  }
];

const achievements = [
  { label: 'Properties Under Management', value: '150+' },
  { label: 'Average Occupancy Rate', value: '87%' },
  { label: 'Guest Satisfaction Score', value: '4.8/5' },
  { label: 'Client Retention Rate', value: '94%' }
];

export default function WhyChooseValora() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="section">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4" />
            <span className="text-sm font-medium">Why Choose VALORA</span>
          </div>
          
          <h2 className="heading-lg mb-6">
            The Leading Choice for
            <span className="text-gradient"> Luxury Property Management</span>
          </h2>
          
          <p className="text-lead max-w-3xl mx-auto">
            With over 6 years of excellence in Portuguese luxury property management, 
            we deliver unmatched expertise, results, and peace of mind for property owners.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content - Features */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="heading-sm mb-4">
                What Sets Us Apart
              </h3>
              <p className="text-body mb-8">
                We combine local expertise with cutting-edge technology to deliver 
                exceptional results for luxury property owners across Portugal.
              </p>
            </motion.div>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="p-3 bg-primary-100 rounded-xl group-hover:bg-primary-200 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-dark-900">{feature.title}</h4>
                        <span className="text-sm font-medium text-primary-600">{feature.stats}</span>
                      </div>
                      <p className="text-light-700">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/team-meeting.jpg"
                alt="VALORA team meeting discussing property management strategies"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={achievement.label} className="text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-1">
                        {achievement.value}
                      </div>
                      <div className="text-xs text-light-600">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Secondary Image */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="/images/luxury-property-detail.jpg"
                alt="Luxury property managed by VALORA"
                fill
                className="object-cover"
              />
            </div>

            {/* Certification Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6" />
                <div>
                  <div className="font-semibold text-sm">Licensed & Certified</div>
                  <div className="text-xs opacity-90">AL Compliance Experts</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonial Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="heading-sm text-center mb-12">What Our Clients Say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialHighlights.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="card bg-gradient-to-br from-primary-50 to-primary-100/50 border-primary-200"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary-500 text-primary-500" />
                  ))}
                </div>
                <blockquote className="text-dark-900 font-medium mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold text-dark-900">{testimonial.author}</div>
                  <div className="text-light-600">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="card-premium bg-gradient-to-r from-dark-900 to-dark-800 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Proven Process</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From initial consultation to ongoing management, we follow a proven process 
              that ensures your property achieves maximum potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Property Assessment', description: 'Comprehensive evaluation and revenue potential analysis' },
              { step: '02', title: 'Strategy Development', description: 'Custom management plan tailored to your goals' },
              { step: '03', title: 'Launch & Marketing', description: 'Professional setup and multi-platform marketing' },
              { step: '04', title: 'Ongoing Management', description: 'Continuous optimization and performance monitoring' }
            ].map((process, index) => (
              <div key={process.step} className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="font-semibold mb-2">{process.title}</h4>
                <p className="text-sm text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}