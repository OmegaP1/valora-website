'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Star, TrendingUp, Shield, Award } from 'lucide-react';
import { cn } from '@/utils';

const stats = [
  { label: 'Years of Experience', value: '6+', icon: Award },
  { label: 'Properties Managed', value: '150+', icon: TrendingUp },
  { label: 'Client Satisfaction', value: '98%', icon: Star },
  { label: 'Revenue Growth', value: '40%', icon: TrendingUp },
];

const heroImages = [
  {
    src: '/images/hero-villa-1.jpg',
    alt: 'Luxury villa with ocean view in Madeira',
    caption: 'Stunning villa in Madeira',
  },
  {
    src: '/images/hero-villa-2.jpg',
    alt: 'Modern apartment in Lisbon',
    caption: 'Premium apartment in Lisbon',
  },
  {
    src: '/images/hero-villa-3.jpg',
    alt: 'Beachfront property in Algarve',
    caption: 'Exclusive property in Algarve',
  },
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000',
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              quality={100}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full px-4 py-2 mb-6"
            >
              <Shield className="h-4 w-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-100">
                Premium Property Management
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="heading-xl mb-6"
            >
              Luxury Property
              <span className="block text-gradient bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Management
              </span>
              in Portugal
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl leading-relaxed text-gray-200 mb-8 max-w-lg"
            >
              Expert management for luxury properties across Portugal. 
              Full Management at 30% or Online Management at 12.5% commission. 
              Maximize your investment with our proven expertise.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="btn-primary group"
              >
                Get Free Property Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300 group"
              >
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Watch Our Story</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                      <IconComponent className="h-5 w-5 text-primary-400" />
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-sm text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Property Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="hidden lg:block"
          >
            <div className="card-premium bg-white/95 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-sm font-medium text-success">Available for Management</span>
                </div>
                <span className="text-xs text-light-600">Featured Property</span>
              </div>
              
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/featured-property.jpg"
                  alt="Featured luxury property"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  30% Commission
                </div>
              </div>

              <h3 className="font-semibold text-lg text-dark-900 mb-2">
                Luxury Villa in Seixal
              </h3>
              <p className="text-light-700 text-sm mb-4">
                Stunning 4-bedroom villa with panoramic ocean views and modern amenities.
              </p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <span className="text-light-600">4 Beds</span>
                  <span className="text-light-600">•</span>
                  <span className="text-light-600">8 Guests</span>
                  <span className="text-light-600">•</span>
                  <span className="text-light-600">Ocean View</span>
                </div>
                <div className="text-primary-500 font-semibold">
                  €250/night
                </div>
              </div>

              <Link
                href="/portfolio"
                className="mt-4 w-full btn-secondary text-center"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={cn(
                'w-3 h-3 rounded-full transition-all duration-300',
                index === currentImageIndex
                  ? 'bg-primary-500 w-8'
                  : 'bg-white/50 hover:bg-white/70'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 right-8 hidden lg:block"
      >
        <div className="flex flex-col items-center space-y-2 text-white">
          <span className="text-sm opacity-70">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [4, 16, 4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl mx-4 aspect-video bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
            >
              ×
            </button>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="VALORA Company Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}