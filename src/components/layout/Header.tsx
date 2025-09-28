'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { cn } from '@/utils';
import type { NavItem } from '@/types';

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    children: [
      { name: 'Full Management', href: '/services#full-management' },
      { name: 'Online Management', href: '/services#online-management' },
      { name: 'Property Assessment', href: '/services#assessment' },
    ]
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActivePath = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-dark-900 text-white py-2 hidden lg:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+351 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@valora.pt</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-primary-500">6+ Years of Excellence</span>
              <span>•</span>
              <span>Premium Property Management</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-light-200'
            : 'bg-white'
        )}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center py-4 lg:py-6">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
            >
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-2xl px-3 py-1 rounded-lg group-hover:scale-105 transition-transform duration-300">
                V
              </div>
              <span className="font-display font-bold text-2xl text-dark-900 group-hover:text-primary-500 transition-colors duration-300">
                VALORA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <div
                      className="group"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={cn(
                          'flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                          isActivePath(item.href)
                            ? 'text-primary-500 bg-primary-50'
                            : 'text-dark-700 hover:text-primary-500 hover:bg-light-100'
                        )}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div
                        className={cn(
                          'absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-light-200 py-2 transition-all duration-300',
                          activeDropdown === item.name
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible translate-y-2 pointer-events-none'
                        )}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-dark-700 hover:text-primary-500 hover:bg-light-50 transition-colors duration-200"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                        isActivePath(item.href)
                          ? 'text-primary-500 bg-primary-50'
                          : 'text-dark-700 hover:text-primary-500 hover:bg-light-100'
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Get Free Assessment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-dark-700 hover:text-primary-500 hover:bg-light-100 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300 border-t border-light-200',
            isMobileMenuOpen ? 'max-h-screen pb-6' : 'max-h-0'
          )}
        >
          <div className="container-custom pt-6">
            <nav className="space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block px-4 py-3 rounded-lg font-medium transition-colors duration-200',
                      isActivePath(item.href)
                        ? 'text-primary-500 bg-primary-50'
                        : 'text-dark-700 hover:text-primary-500 hover:bg-light-100'
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-dark-600 hover:text-primary-500 transition-colors duration-200"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="mt-6 pt-6 border-t border-light-200">
              <Link
                href="/contact"
                className="btn-primary w-full text-center"
              >
                Get Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}