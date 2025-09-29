// src/components/sections/ServicesOverview.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Globe, Smartphone } from 'lucide-react';

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Management Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect management solution for your property. From full-service management to online tools.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Full Management */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Full Management</h3>
                <p className="text-sm text-gray-500">30% Commission</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Complete hands-off property management. We handle everything from guest communication to maintenance.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Professional photography & listing',
                '24/7 guest support',
                'Cleaning & maintenance',
                'Dynamic pricing optimization',
                'Calendar synchronization',
                'Revenue reporting & analytics'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link 
              href="/services#full-management" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Online Management */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-purple-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Smartphone className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Online Management</h3>
                <p className="text-sm text-gray-500">12.5% Commission</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Self-service platform with professional tools. Perfect for owners who want more control.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Channel manager integration',
                'Automated messaging system',
                'Pricing recommendations',
                'Performance dashboard',
                'Guest screening tools',
                'Support when you need it'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link 
              href="/services#online-management" 
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105"
          >
            Compare All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}