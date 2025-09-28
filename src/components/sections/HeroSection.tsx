'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  TrendingUp,
  Users,
  Award,
  PlayCircle
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { COMPANY, SERVICES } from '@/utils/constants';

const stats = [
  {
    icon: TrendingUp,
    value: '39%',
    label: 'Average Revenue Increase',
    highlighted: true
  },
  {
    icon: Users,
    value: '150+',
    label: 'Properties Managed',
    highlighted: false
  },
  {
    icon: Award,
    value: '98%',
    label: 'Client Satisfaction',
    highlighted: false
  },
  {
    icon: Star,
    value: '6+',
    label: 'Years Experience',
    highlighted: false
  }
];

const keyFeatures = [
  'AI-powered revenue optimization',
  'Multi-platform distribution (20+ channels)',
  '24/7 professional guest support',
  'Complete legal compliance & AL licensing'
];

export default function HeroSection() {
  return (
    <section className="section-hero bg-gradient-to-br from-light-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffb400' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6"
            >
              <Star className="h-4 w-4 fill-current" />
              <span>{COMPANY.experience} of Excellence in Portugal</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-display-xl text-dark-900 mb-6"
            >
              <span className="block">Luxury Property</span>
              <span className="block text-gradient-primary">Management</span>
              <span className="block">in Portugal</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-light-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Transform your property into a profitable vacation rental with our premium management services. 
              Choose between Full Management (30%) or Online Management (12.5%) packages.
            </motion.p>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
            >
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-dark-700">
                  <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button 
                size="lg" 
                className="group"
                rightIcon={<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Assessment
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                leftIcon={<PlayCircle className="h-5 w-5" />}
              >
                <Link href="/services" className="flex items-center gap-2">
                  View Services
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center lg:text-left">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-2 ${
                      stat.highlighted 
                        ? 'bg-primary-100 text-primary-600' 
                        : 'bg-light-100 text-light-600'
                    }`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className={`text-2xl font-bold mb-1 ${
                      stat.highlighted ? 'text-primary-600' : 'text-dark-900'
                    }`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-light-600">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero/luxury-villa-madeira.jpg"
                alt="Luxury villa in Madeira managed by VALORA"
                width={600}
                height={400}
                className="w-full h-[400px] lg:h-[500px] object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejFq1BTiMOLvj4FaU5CZmvHACDfOwW0GXHN/EySoEZPCgj+bF/8QAI"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs font-medium text-dark-700">Live Revenue</span>
                </div>
                <div className="text-2xl font-bold text-dark-900">€2,847</div>
                <div className="text-xs text-green-600 font-medium">+39% this month</div>
              </div>

              {/* Floating Service Cards */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20">
                  <div className="text-primary-600 font-semibold text-sm">{SERVICES.full.commission}%</div>
                  <div className="text-xs text-dark-600">Full Management</div>
                </div>
                <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20">
                  <div className="text-blue-600 font-semibold text-sm">{SERVICES.online.commission}%</div>
                  <div className="text-xs text-dark-600">Online Management</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 pt-8 border-t border-light-200"
        >
          <div className="text-center mb-6">
            <p className="text-sm text-light-600">Trusted by property owners across Portugal</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Location badges */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-primary-600">M</span>
              </div>
              <span className="text-sm text-dark-600">Madeira</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-primary-600">L</span>
              </div>
              <span className="text-sm text-dark-600">Lisbon</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-primary-600">C</span>
              </div>
              <span className="text-sm text-dark-600">Comporta</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-primary-600">A</span>
              </div>
              <span className="text-sm text-dark-600">Algarve</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}