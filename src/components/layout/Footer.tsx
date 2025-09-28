'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const footerNavigation = {
  services: [
    { name: 'Full Management', href: '/services#full-management' },
    { name: 'Online Management', href: '/services#online-management' },
    { name: 'Property Assessment', href: '/services#assessment' },
    { name: 'Real Estate', href: '/real-estate' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Portfolio', href: '/portfolio' },
  ],
  resources: [
    { name: 'Blog', href: '/resources' },
    { name: 'Property Guides', href: '/resources/guides' },
    { name: 'Market Insights', href: '/resources/insights' },
    { name: 'Legal Updates', href: '/resources/legal' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

const locations = [
  {
    name: 'Madeira HQ',
    address: 'Funchal, Madeira',
    phone: '+351 XXX XXX XXX',
    email: 'madeira@valora.pt',
  },
  {
    name: 'Lisbon',
    address: 'Lisbon, Portugal',
    phone: '+351 XXX XXX XXX',
    email: 'lisbon@valora.pt',
  },
];

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/valora' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/valora' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/valora' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-2xl px-3 py-1 rounded-lg">
                  V
                </div>
                <span className="font-display font-bold text-2xl">VALORA</span>
              </Link>
              
              <p className="text-light-300 mb-6 leading-relaxed">
                Premium property management services across Portugal. With over 6 years of experience, 
                we specialize in luxury properties in Madeira, Lisbon, Comporta, Alentejo, and Algarve.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-500" />
                  <span className="text-light-300">+351 XXX XXX XXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-500" />
                  <span className="text-light-300">hello@valora.pt</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary-500" />
                  <span className="text-light-300">Funchal, Madeira, Portugal</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-light-300 hover:text-primary-500 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-light-300 hover:text-primary-500 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-light-300 hover:text-primary-500 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-6">Support</h3>
              <ul className="space-y-3">
                {footerNavigation.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-light-300 hover:text-primary-500 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Locations */}
          <div className="mt-12 pt-12 border-t border-light-700">
            <h3 className="font-semibold text-lg mb-6">Our Locations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location) => (
                <div key={location.name} className="card bg-light-800/10 border-light-700">
                  <h4 className="font-semibold text-white mb-2">{location.name}</h4>
                  <p className="text-light-300 text-sm mb-3">{location.address}</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-primary-500" />
                      <span className="text-light-300">{location.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-primary-500" />
                      <span className="text-light-300">{location.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-12 border-t border-light-700">
            <div className="max-w-lg">
              <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
              <p className="text-light-300 mb-6">
                Get the latest market insights and property management tips delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-light-800/10 border border-light-700 rounded-lg text-white placeholder-light-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-light-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-light-300">
              <p>&copy; {currentYear} VALORA. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <Link href="/privacy" className="hover:text-primary-500 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-primary-500 transition-colors duration-200">
                  Terms of Service
                </Link>
                <span>•</span>
                <Link href="/cookies" className="hover:text-primary-500 transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-light-800/10 text-light-300 hover:text-primary-500 hover:bg-primary-500/10 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}