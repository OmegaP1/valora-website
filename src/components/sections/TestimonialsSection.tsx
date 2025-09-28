'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  TrendingUp,
  Heart
} from 'lucide-react';
import { cn } from '@/utils';

const testimonials = [
  {
    id: 1,
    name: 'Maria Santos',
    role: 'Property Owner',
    location: 'Madeira',
    company: 'Villa Aurora Owner',
    content: 'VALORA transformed our vacation home into a thriving business. In just one year, our revenue increased by 45% while we enjoyed complete peace of mind. Their attention to detail and guest service is exceptional.',
    rating: 5,
    propertyType: 'Luxury Villa',
    serviceUsed: 'full',
    image: '/images/testimonial-maria.jpg',
    verified: true,
    featured: true,
    results: {
      revenueIncrease: 45,
      occupancyRate: 89,
      guestRating: 4.9
    }
  },
  {
    id: 2,
    name: 'James Wilson',
    role: 'Real Estate Investor',
    location: 'Lisbon',
    company: 'Wilson Properties',
    content: 'Professional, reliable, and truly care about our investment. The team at VALORA treats our property as if it were their own. The monthly reports are detailed and the communication is outstanding.',
    rating: 5,
    propertyType: 'Premium Apartment',
    serviceUsed: 'full',
    image: '/images/testimonial-james.jpg',
    verified: true,
    featured: true,
    results: {
      revenueIncrease: 32,
      occupancyRate: 84,
      guestRating: 4.8
    }
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    role: 'International Investor',
    location: 'Algarve',
    company: 'Laurent Investments',
    content: 'As a foreign investor, I needed a management company I could trust completely. VALORA exceeded all expectations. Best decision we made for our Portuguese property investment.',
    rating: 5,
    propertyType: 'Beachfront Villa',
    serviceUsed: 'full',
    image: '/images/testimonial-sophie.jpg',
    verified: true,
    featured: true,
    results: {
      revenueIncrease: 52,
      occupancyRate: 91,
      guestRating: 4.9
    }
  },
  {
    id: 4,
    name: 'Carlos Mendoza',
    role: 'Property Developer',
    location: 'Comporta',
    company: 'Mendoza Development',
    content: 'The online management package is perfect for us. We maintain control while benefiting from VALORA\'s expertise and technology platform. Great value for the commission rate.',
    rating: 5,
    propertyType: 'Modern Villa',
    serviceUsed: 'online',
    image: '/images/testimonial-carlos.jpg',
    verified: true,
    featured: false,
    results: {
      revenueIncrease: 28,
      occupancyRate: 78,
      guestRating: 4.7
    }
  },
  {
    id: 5,
    name: 'Ana Rodrigues',
    role: 'Luxury Property Owner',
    location: 'Madeira',
    company: 'Casa das Flores',
    content: 'Six months with VALORA and our property is consistently booked. The guest feedback is amazing and the property maintenance is impeccable. Highly recommend their services.',
    rating: 5,
    propertyType: 'Historic Villa',
    serviceUsed: 'full',
    image: '/images/testimonial-ana.jpg',
    verified: true,
    featured: false,
    results: {
      revenueIncrease: 38,
      occupancyRate: 86,
      guestRating: 4.8
    }
  },
  {
    id: 6,
    name: 'Michael Thompson',
    role: 'Retired Couple',
    location: 'Alentejo',
    company: 'Thompson Family',
    content: 'We wanted to generate income from our retirement home without the hassle. VALORA handles everything professionally while we enjoy our golden years worry-free.',
    rating: 5,
    propertyType: 'Country Estate',
    serviceUsed: 'full',
    image: '/images/testimonial-michael.jpg',
    verified: true,
    featured: false,
    results: {
      revenueIncrease: 41,
      occupancyRate: 82,
      guestRating: 4.9
    }
  }
];

const stats = [
  { label: 'Client Satisfaction', value: '98%', icon: Heart },
  { label: 'Average Rating', value: '4.9/5', icon: Star },
  { label: 'Revenue Increase', value: '39%', icon: TrendingUp },
  { label: 'Client Retention', value: '94%', icon: MessageSquare }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [filter, setFilter] = useState<'all' | 'full' | 'online'>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const filteredTestimonials = testimonials.filter(t => 
    filter === 'all' || t.serviceUsed === filter
  );

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [filteredTestimonials.length]);

  React.useEffect(() => {
    setCurrentTestimonial(0);
  }, [filter]);

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
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm font-medium">Client Success Stories</span>
          </div>
          
          <h2 className="heading-lg mb-6">
            What Our Clients Say About
            <span className="text-gradient"> Working with VALORA</span>
          </h2>
          
          <p className="text-lead max-w-3xl mx-auto">
            Real stories from property owners who have transformed their investments 
            with our expert management services.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label} className="card text-center group hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-primary-100 rounded-xl group-hover:bg-primary-200 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-dark-900 mb-2">{stat.value}</div>
                <div className="text-sm text-light-600">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-light-100 rounded-lg p-1">
            {[
              { key: 'all', label: 'All Reviews' },
              { key: 'full', label: 'Full Management' },
              { key: 'online', label: 'Online Management' }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setFilter(item.key as any)}
                className={cn(
                  'px-4 py-2 rounded-md text-sm font-medium transition-all duration-200',
                  filter === item.key
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-light-600 hover:text-dark-900'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Testimonial Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="card-premium mb-16 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Testimonial Content */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-5 w-5 fill-primary-500 text-primary-500" 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-primary-600">
                    {filteredTestimonials[currentTestimonial].serviceUsed === 'full' ? 'Full Management' : 'Online Management'}
                  </span>
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary-200" />
                  <blockquote className="text-xl leading-relaxed text-dark-900 pl-6">
                    {filteredTestimonials[currentTestimonial].content}
                  </blockquote>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={filteredTestimonials[currentTestimonial].image}
                      alt={filteredTestimonials[currentTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-dark-900">
                      {filteredTestimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-light-600">
                      {filteredTestimonials[currentTestimonial].role}
                    </div>
                    <div className="text-sm text-primary-600">
                      {filteredTestimonials[currentTestimonial].location} • {filteredTestimonials[currentTestimonial].propertyType}
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Panel */}
              <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl p-6">
                <h4 className="font-semibold text-dark-900 mb-4">Performance Results</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-light-700">Occupancy Rate</span>
                    <span className="text-xl font-bold text-primary-600">
                      {filteredTestimonials[currentTestimonial].results.occupancyRate}%
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-light-700">Guest Rating</span>
                    <span className="text-xl font-bold text-primary-600">
                      {filteredTestimonials[currentTestimonial].results.guestRating}/5
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/70 rounded-lg">
                  <div className="text-sm text-light-600 mb-1">Property Type</div>
                  <div className="font-medium text-dark-900">
                    {filteredTestimonials[currentTestimonial].propertyType}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors duration-200"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors duration-200"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={cn(
                  'w-3 h-3 rounded-full transition-all duration-300',
                  index === currentTestimonial
                    ? 'bg-primary-500 w-8'
                    : 'bg-light-300 hover:bg-primary-300'
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {testimonials.filter(t => !t.featured).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              className="card hover-lift group"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary-500 text-primary-500" />
                ))}
              </div>

              <blockquote className="text-dark-900 mb-4 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-dark-900">{testimonial.name}</div>
                  <div className="text-sm text-light-600">{testimonial.role}</div>
                  <div className="text-xs text-primary-600">{testimonial.location}</div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-light-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-light-600">Revenue Growth</span>
                  <span className="font-semibold text-success">
                    +{testimonial.results.revenueIncrease}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="card-premium bg-gradient-to-r from-dark-900 to-dark-800 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Hear Directly from Our Clients</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Watch video testimonials from property owners who have experienced 
              the VALORA difference firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Maria Santos',
                title: 'From 60% to 89% Occupancy',
                thumbnail: '/images/video-thumb-maria.jpg',
                duration: '2:15'
              },
              {
                name: 'James Wilson',
                title: 'Why We Chose VALORA',
                thumbnail: '/images/video-thumb-james.jpg',
                duration: '1:45'
              },
              {
                name: 'Sophie Laurent',
                title: 'International Investment Success',
                thumbnail: '/images/video-thumb-sophie.jpg',
                duration: '3:20'
              }
            ].map((video, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={`Video testimonial from ${video.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                
                <div className="mt-3">
                  <h4 className="font-semibold">{video.name}</h4>
                  <p className="text-sm text-gray-300">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-6 bg-light-100 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span className="text-sm font-medium text-dark-900">98% Satisfaction Rate</span>
            </div>
            <div className="w-px h-6 bg-light-300"></div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-primary-500" />
              <span className="text-sm font-medium text-dark-900">4.9/5 Average Rating</span>
            </div>
            <div className="w-px h-6 bg-light-300"></div>
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium text-dark-900">94% Client Retention</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}">
                    <span className="text-light-700">Revenue Increase</span>
                    <span className="text-xl font-bold text-success">
                      +{filteredTestimonials[currentTestimonial].results.revenueIncrease}%
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between