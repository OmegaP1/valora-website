'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin,
  Users,
  Bed,
  Bath,
  TrendingUp,
  Eye,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/utils';

const featuredProperties = [
  {
    id: 'seixal-villa',
    title: 'Luxury Villa in Seixal',
    location: 'Seixal, Madeira',
    type: 'Villa',
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    area: 250,
    images: [
      '/images/seixal-villa-1.jpg',
      '/images/seixal-villa-2.jpg',
      '/images/seixal-villa-3.jpg'
    ],
    price: 250,
    rating: 4.9,
    reviews: 127,
    managementType: 'full',
    features: ['Ocean View', 'Private Pool', 'Modern Kitchen', 'Terrace'],
    description: 'Stunning modern villa with panoramic ocean views and luxury amenities.',
    revenue: {
      monthly: 8500,
      annual: 102000,
      growthRate: 35
    },
    occupancyRate: 89,
    highlighted: true
  },
  {
    id: 'lisbon-penthouse',
    title: 'Premium Penthouse',
    location: 'Príncipe Real, Lisbon',
    type: 'Apartment',
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    area: 180,
    images: [
      '/images/lisbon-penthouse-1.jpg',
      '/images/lisbon-penthouse-2.jpg',
      '/images/lisbon-penthouse-3.jpg'
    ],
    price: 180,
    rating: 4.8,
    reviews: 89,
    managementType: 'full',
    features: ['City Views', 'Rooftop Terrace', 'Historic Building', 'Central Location'],
    description: 'Elegant penthouse in the heart of Lisbon with rooftop terrace.',
    revenue: {
      monthly: 6200,
      annual: 74400,
      growthRate: 28
    },
    occupancyRate: 82,
    highlighted: false
  },
  {
    id: 'comporta-beach-house',
    title: 'Beachfront House',
    location: 'Comporta, Alentejo',
    type: 'Villa',
    bedrooms: 5,
    bathrooms: 4,
    guests: 10,
    area: 320,
    images: [
      '/images/comporta-house-1.jpg',
      '/images/comporta-house-2.jpg',
      '/images/comporta-house-3.jpg'
    ],
    price: 320,
    rating: 4.9,
    reviews: 156,
    managementType: 'full',
    features: ['Beach Access', 'Garden', 'Fireplace', 'Outdoor Kitchen'],
    description: 'Exclusive beachfront property with direct beach access and stunning views.',
    revenue: {
      monthly: 11200,
      annual: 134400,
      growthRate: 42
    },
    occupancyRate: 91,
    highlighted: false
  },
  {
    id: 'algarve-villa',
    title: 'Modern Villa with Pool',
    location: 'Lagos, Algarve',
    type: 'Villa',
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    area: 280,
    images: [
      '/images/algarve-villa-1.jpg',
      '/images/algarve-villa-2.jpg',
      '/images/algarve-villa-3.jpg'
    ],
    price: 200,
    rating: 4.7,
    reviews: 94,
    managementType: 'online',
    features: ['Private Pool', 'Golf Course View', 'BBQ Area', 'Air Conditioning'],
    description: 'Contemporary villa with golf course views and private pool.',
    revenue: {
      monthly: 7100,
      annual: 85200,
      growthRate: 31
    },
    occupancyRate: 85,
    highlighted: false
  }
];

const stats = [
  { label: 'Average Occupancy', value: '87%', change: '+5%' },
  { label: 'Revenue Growth', value: '34%', change: '+12%' },
  { label: 'Guest Rating', value: '4.8', change: '+0.2' },
  { label: 'Properties', value: '150+', change: '+23' }
];

export default function FeaturedProperties() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProperties.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProperties.length) % featuredProperties.length);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
            <Eye className="h-4 w-4" />
            <span className="text-sm font-medium">Featured Portfolio</span>
          </div>
          
          <h2 className="heading-lg mb-6">
            Success Stories from Our
            <span className="text-gradient"> Premium Portfolio</span>
          </h2>
          
          <p className="text-lead max-w-3xl mx-auto">
            Discover how our expert management has transformed luxury properties 
            across Portugal into high-performing investment assets.
          </p>
        </motion.div>

        {/* Portfolio Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="card text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-light-600 mb-2">{stat.label}</div>
              <div className="inline-flex items-center space-x-1 text-xs text-success">
                <TrendingUp className="h-3 w-3" />
                <span>{stat.change}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Featured Property Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="card-premium mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Property Images */}
            <div className="relative">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src={featuredProperties[currentSlide].images[selectedProperty]}
                  alt={featuredProperties[currentSlide].title}
                  fill
                  className="object-cover transition-all duration-500"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Property Type Badge */}
                <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {featuredProperties[currentSlide].managementType === 'full' ? 'Full Management' : 'Online Management'}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-primary-500 text-primary-500" />
                  <span className="text-sm font-medium text-dark-900">
                    {featuredProperties[currentSlide].rating}
                  </span>
                </div>
              </div>

              {/* Image Thumbnails */}
              <div className="flex space-x-2 mt-4">
                {featuredProperties[currentSlide].images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedProperty(index)}
                    className={cn(
                      'relative w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200',
                      index === selectedProperty ? 'border-primary-500' : 'border-light-200 hover:border-primary-300'
                    )}
                  >
                    <Image
                      src={image}
                      alt={`${featuredProperties[currentSlide].title} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div>
              <div className="flex items-center space-x-2 text-sm text-light-600 mb-2">
                <MapPin className="h-4 w-4" />
                <span>{featuredProperties[currentSlide].location}</span>
              </div>

              <h3 className="text-2xl font-bold text-dark-900 mb-4">
                {featuredProperties[currentSlide].title}
              </h3>

              <p className="text-light-700 mb-6">
                {featuredProperties[currentSlide].description}
              </p>

              {/* Property Info */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Bed className="h-5 w-5 text-primary-600" />
                  <span className="text-sm text-dark-900">{featuredProperties[currentSlide].bedrooms} Beds</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bath className="h-5 w-5 text-primary-600" />
                  <span className="text-sm text-dark-900">{featuredProperties[currentSlide].bathrooms} Baths</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary-600" />
                  <span className="text-sm text-dark-900">{featuredProperties[currentSlide].guests} Guests</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-dark-900 mb-3">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredProperties[currentSlide].features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-light-100 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-dark-900 mb-3">Performance Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-light-600">Monthly Revenue</div>
                    <div className="text-lg font-bold text-success">
                      €{featuredProperties[currentSlide].revenue.monthly.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-light-600">Occupancy Rate</div>
                    <div className="text-lg font-bold text-primary-600">
                      {featuredProperties[currentSlide].occupancyRate}%
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-light-600">Revenue Growth</div>
                    <div className="text-lg font-bold text-success">
                      +{featuredProperties[currentSlide].revenue.growthRate}%
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-light-600">Nightly Rate</div>
                    <div className="text-lg font-bold text-dark-900">
                      €{featuredProperties[currentSlide].price}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href={`/portfolio/${featuredProperties[currentSlide].id}`}
                className="btn-primary group w-full text-center"
              >
                View Property Details
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Property Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {featuredProperties.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  'w-3 h-3 rounded-full transition-all duration-300',
                  index === currentSlide
                    ? 'bg-primary-500 w-8'
                    : 'bg-light-300 hover:bg-light-400'
                )}
                aria-label={`Go to property ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Properties Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {featuredProperties.slice(1).map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="card hover-lift group"
            >
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src={property.images[0]}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-primary-500 text-white px-2 py-1 rounded text-xs font-medium">
                  {property.managementType === 'full' ? 'Full' : 'Online'}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-primary-500 text-primary-500" />
                  <span className="text-xs font-medium text-dark-900">{property.rating}</span>
                </div>
              </div>

              <div className="flex items-center space-x-1 text-xs text-light-600 mb-2">
                <MapPin className="h-3 w-3" />
                <span>{property.location}</span>
              </div>

              <h4 className="font-semibold text-dark-900 mb-2">{property.title}</h4>
              
              <div className="flex items-center justify-between text-sm mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-light-600">{property.bedrooms} beds</span>
                  <span className="text-light-600">•</span>
                  <span className="text-light-600">{property.guests} guests</span>
                </div>
                <div className="font-semibold text-primary-600">€{property.price}/night</div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="text-success">+{property.revenue.growthRate}% revenue growth</div>
                <div className="text-primary-600">{property.occupancyRate}% occupied</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Let us transform your property into a high-performing investment. 
              Get your free property assessment and discover your revenue potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-light-100 transition-colors duration-300"
              >
                Get Free Assessment
              </Link>
              <Link
                href="/portfolio"
                className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300"
              >
                View Full Portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}