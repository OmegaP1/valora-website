'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin,
  TrendingUp,
  Building,
  Waves,
  Mountain,
  Landmark,
  Users,
  Star,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/utils';

const serviceAreas = [
  {
    id: 'madeira',
    name: 'Madeira',
    region: 'Autonomous Region',
    description: 'Year-round tropical climate and stunning natural beauty make Madeira our flagship market.',
    image: '/images/madeira-landscape.jpg',
    icon: Mountain,
    properties: 65,
    averagePrice: 185,
    occupancyRate: 87,
    highlights: [
      'Year-round tourist destination',
      'UNESCO World Heritage sites',
      'Premium villa market',
      'Strong international demand'
    ],
    topFeatures: [
      'Ocean views',
      'Levada trails',
      'Wine estates',
      'Subtropical gardens'
    ],
    marketInsights: {
      seasonality: 'Low seasonal variation',
      guestProfile: '60% European, 25% UK, 15% Other',
      averageStay: '5.2 nights',
      bookingWindow: '45 days average'
    },
    featured: true,
    coordinates: { lat: 32.7607, lng: -16.9595 }
  },
  {
    id: 'lisbon',
    name: 'Lisbon',
    region: 'Capital Region',
    description: 'Historic charm meets modern luxury in Portugal\'s vibrant capital city.',
    image: '/images/lisbon-cityscape.jpg',
    icon: Landmark,
    properties: 38,
    averagePrice: 165,
    occupancyRate: 82,
    highlights: [
      'Historic city center',
      'Cultural attractions',
      'Business travel hub',
      'Excellent connectivity'
    ],
    topFeatures: [
      'Historic neighborhoods',
      'Riverside locations',
      'Cultural sites',
      'Rooftop terraces'
    ],
    marketInsights: {
      seasonality: 'Peak Apr-Oct',
      guestProfile: '45% European, 30% Business, 25% Leisure',
      averageStay: '3.8 nights',
      bookingWindow: '35 days average'
    },
    featured: false,
    coordinates: { lat: 38.7223, lng: -9.1393 }
  },
  {
    id: 'comporta',
    name: 'Comporta',
    region: 'Alentejo Coast',
    description: 'Exclusive beach destination known for pristine coastline and luxury resorts.',
    image: '/images/comporta-beach.jpg',
    icon: Waves,
    properties: 22,
    averagePrice: 285,
    occupancyRate: 78,
    highlights: [
      'Pristine beaches',
      'Luxury resort area',
      'Celebrity destination',
      'Exclusive properties'
    ],
    topFeatures: [
      'Beach access',
      'Pine forests',
      'Luxury resorts',
      'Privacy & exclusivity'
    ],
    marketInsights: {
      seasonality: 'Peak Jun-Sep',
      guestProfile: '70% High-end leisure, 30% Luxury seekers',
      averageStay: '6.5 nights',
      bookingWindow: '65 days average'
    },
    featured: false,
    coordinates: { lat: 38.3667, lng: -8.7833 }
  },
  {
    id: 'alentejo',
    name: 'Alentejo',
    region: 'Central Portugal',
    description: 'Rolling hills, cork forests, and wine estates create a peaceful rural luxury experience.',
    image: '/images/alentejo-countryside.jpg',
    icon: Mountain,
    properties: 15,
    averagePrice: 195,
    occupancyRate: 75,
    highlights: [
      'Wine tourism',
      'Rural luxury',
      'Historic towns',
      'Peaceful retreat'
    ],
    topFeatures: [
      'Wine estates',
      'Historic villages',
      'Cork forests',
      'Spa retreats'
    ],
    marketInsights: {
      seasonality: 'Peak May-Oct',
      guestProfile: '55% Wine tourism, 45% Rural luxury',
      averageStay: '4.2 nights',
      bookingWindow: '42 days average'
    },
    featured: false,
    coordinates: { lat: 38.5667, lng: -7.9000 }
  },
  {
    id: 'algarve',
    name: 'Algarve',
    region: 'Southern Portugal',
    description: 'Golden beaches, golf courses, and Mediterranean climate attract global visitors.',
    image: '/images/algarve-coast.jpg',
    icon: Waves,
    properties: 28,
    averagePrice: 175,
    occupancyRate: 85,
    highlights: [
      'Golden beaches',
      'Championship golf',
      'Marina towns',
      'Family-friendly'
    ],
    topFeatures: [
      'Beach proximity',
      'Golf courses',
      'Marina access',
      'Clifftop views'
    ],
    marketInsights: {
      seasonality: 'Peak Jun-Sep',
      guestProfile: '50% UK, 30% European, 20% Other',
      averageStay: '7.1 nights',
      bookingWindow: '52 days average'
    },
    featured: false,
    coordinates: { lat: 37.0179, lng: -7.9304 }
  }
];

const overallStats = [
  { label: 'Total Properties', value: '168', icon: Building },
  { label: 'Average Occupancy', value: '83%', icon: TrendingUp },
  { label: 'Service Areas', value: '5', icon: MapPin },
  { label: 'Client Satisfaction', value: '4.9', icon: Star }
];

export default function ServiceAreas() {
  const [selectedArea, setSelectedArea] = useState('madeira');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const currentArea = serviceAreas.find(area => area.id === selectedArea) || serviceAreas[0];

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
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Service Areas</span>
          </div>
          
          <h2 className="heading-lg mb-6">
            Premium Management Across
            <span className="text-gradient"> Portugal's Finest Destinations</span>
          </h2>
          
          <p className="text-lead max-w-3xl mx-auto">
            From Madeira's year-round appeal to the Algarve's golden coast, 
            we provide expert property management in Portugal's most desirable locations.
          </p>
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {overallStats.map((stat, index) => {
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

        {/* Interactive Map & Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="card-premium mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map/Image Section */}
            <div className="relative">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src={currentArea.image}
                  alt={`${currentArea.name} landscape`}
                  fill
                  className="object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Location Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="font-medium text-dark-900">{currentArea.name}</span>
                  </div>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-dark-900">{currentArea.properties}</div>
                      <div className="text-xs text-light-600">Properties</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary-600">€{currentArea.averagePrice}</div>
                      <div className="text-xs text-light-600">Avg. Nightly</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-success">{currentArea.occupancyRate}%</div>
                      <div className="text-xs text-light-600">Occupancy</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Area Selector */}
              <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
                {serviceAreas.map((area) => {
                  const IconComponent = area.icon;
                  return (
                    <button
                      key={area.id}
                      onClick={() => setSelectedArea(area.id)}
                      className={cn(
                        'flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                        selectedArea === area.id
                          ? 'bg-primary-500 text-white'
                          : 'bg-light-100 text-light-700 hover:bg-light-200'
                      )}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span>{area.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Details Section */}
            <div>
              <div className="flex items-center space-x-2 text-sm text-light-600 mb-2">
                <MapPin className="h-4 w-4" />
                <span>{currentArea.region}</span>
              </div>

              <h3 className="text-2xl font-bold text-dark-900 mb-4">
                {currentArea.name}
              </h3>

              <p className="text-light-700 mb-6">
                {currentArea.description}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="font-semibold text-dark-900 mb-3">Market Highlights</h4>
                <div className="grid grid-cols-2 gap-2">
                  {currentArea.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full" />
                      <span className="text-sm text-light-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-dark-900 mb-3">Property Features</h4>
                <div className="flex flex-wrap gap-2">
                  {currentArea.topFeatures.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Market Insights */}
              <div className="bg-light-100 rounded-lg p-4">
                <h4 className="font-semibold text-dark-900 mb-3">Market Insights</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-light-600">Seasonality:</span>
                    <span className="text-dark-900">{currentArea.marketInsights.seasonality}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-light-600">Guest Profile:</span>
                    <span className="text-dark-900">{currentArea.marketInsights.guestProfile}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-light-600">Average Stay:</span>
                    <span className="text-dark-900">{currentArea.marketInsights.averageStay}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-light-600">Booking Window:</span>
                    <span className="text-dark-900">{currentArea.marketInsights.bookingWindow}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Service Areas Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {serviceAreas.filter(area => area.id !== selectedArea).map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="card hover-lift group cursor-pointer"
                onClick={() => setSelectedArea(area.id)}
              >
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={area.image}
                    alt={`${area.name} landscape`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                    <IconComponent className="h-5 w-5 text-primary-600" />
                  </div>
                  
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="font-semibold">{area.name}</div>
                    <div className="text-sm opacity-90">{area.properties} Properties</div>
                  </div>
                </div>

                <h4 className="font-semibold text-dark-900 mb-2">{area.name}</h4>
                <p className="text-light-700 text-sm mb-4">{area.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="text-light-600">Avg. Rate</div>
                  <div className="font-semibold text-primary-600">€{area.averagePrice}/night</div>
                </div>
                
                <div className="flex items-center justify-between text-sm mt-2">
                  <div className="text-light-600">Occupancy</div>
                  <div className="font-semibold text-success">{area.occupancyRate}%</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Expansion Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Expanding Our Reach
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              We're continuously expanding our service areas to bring premium property management 
              to more of Portugal's luxury destinations. Contact us about your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-light-100 transition-colors duration-300 flex items-center justify-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Request New Area</span>
              </button>
              <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>View All Properties</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}