// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavItem[];
}

// Property Types
export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  type: 'villa' | 'apartment' | 'unique';
  bedrooms: number;
  bathrooms: number;
  guests: number;
  area: number;
  price: number;
  currency: 'EUR' | 'USD' | 'GBP';
  images: PropertyImage[];
  amenities: string[];
  features: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  availability: boolean;
  rating: number;
  reviews: number;
  managementType: 'full' | 'online';
  licenseNumber?: string;
  yearBuilt?: number;
  lastRenovated?: number;
  revenue?: {
    monthly: number;
    annual: number;
    growthRate: number;
  };
  occupancyRate?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PropertyImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  isPrimary: boolean;
  order: number;
}

// Service Types
export interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  features: string[];
  price: number;
  commission: number;
  duration?: string;
  popular?: boolean;
  icon: string;
}

export interface ServicePackage {
  id: string;
  name: 'full' | 'online';
  displayName: string;
  description: string;
  commission: number;
  features: string[];
  included: string[];
  excluded?: string[];
  popular: boolean;
  color: string;
}

// Contact & Lead Types
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  subject: string;
  propertyLocation?: string;
  propertyType?: string;
  serviceInterest?: 'full' | 'online' | 'consultation';
  budget?: string;
  timeline?: string;
  source?: string;
  consent: boolean;
}

export interface Lead {
  id: string;
  contactForm: ContactForm;
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'won' | 'lost';
  priority: 'low' | 'medium' | 'high';
  assignedTo?: string;
  estimatedValue?: number;
  notes: Note[];
  followUpDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Note {
  id: string;
  content: string;
  author: string;
  createdAt: Date;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  location: string;
  content: string;
  rating: number;
  propertyType?: string;
  serviceUsed: 'full' | 'online';
  image?: string;
  verified: boolean;
  featured: boolean;
  createdAt: Date;
}

// Team Types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  languages: string[];
  specialties: string[];
  yearsExperience: number;
  certifications: string[];
}

// Location Types
export interface Location {
  id: string;
  name: string;
  region: string;
  country: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  image: string;
  properties: number;
  averagePrice: number;
  features: string[];
  popular: boolean;
}

// Blog/Resource Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage?: string;
  featuredImage: string;
  category: 'guide' | 'market-insights' | 'legal' | 'tips' | 'news';
  tags: string[];
  readTime: number;
  published: boolean;
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
  publishedAt: Date;
  updatedAt: Date;
}

// SEO Types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
  schema?: Record<string, any>;
}

// Language & i18n Types
export type Language = 'en' | 'pt' | 'es' | 'fr' | 'de' | 'zh';

export interface Translation {
  [key: string]: string | Translation;
}

export interface LanguageConfig {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
  rtl?: boolean;
}

// Analytics Types
export interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  properties?: Record<string, any>;
}

// Form Types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';
  placeholder?: string;
  required: boolean;
  validation?: {
    pattern?: string;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
  };
  options?: { value: string; label: string }[];
}

// UI Component Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
}

export interface ToastType {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Performance Metrics
export interface PerformanceMetrics {
  propertyId: string;
  period: 'month' | 'quarter' | 'year';
  revenue: {
    gross: number;
    net: number;
    growth: number;
  };
  occupancy: {
    rate: number;
    nights: number;
    averageStay: number;
  };
  booking: {
    total: number;
    cancellations: number;
    averageRating: number;
  };
  maintenance: {
    requests: number;
    cost: number;
    responseTime: number;
  };
}

// Search & Filter Types
export interface SearchFilters {
  location?: string;
  propertyType?: string[];
  bedrooms?: { min?: number; max?: number };
  guests?: { min?: number; max?: number };
  priceRange?: { min?: number; max?: number };
  amenities?: string[];
  managementType?: 'full' | 'online';
  availability?: boolean;
  rating?: number;
}

export interface SearchResults<T> {
  items: T[];
  total: number;
  filters: SearchFilters;
  suggestions?: string[];
}

// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'owner' | 'guest';
  avatar?: string;
  phone?: string;
  preferences: {
    language: Language;
    currency: string;
    timezone: string;
    notifications: {
      email: boolean;
      sms: boolean;
      push: boolean;
    };
  };
  properties?: string[];
  createdAt: Date;
  lastLogin?: Date;
}

// Calendar Types
export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  type: 'booking' | 'maintenance' | 'inspection' | 'blocked';
  propertyId?: string;
  guestName?: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  color?: string;
  notes?: string;
}

// Notification Types
export interface Notification {
  id: string;
  type: 'booking' | 'payment' | 'maintenance' | 'review' | 'system';
  title: string;
  message: string;
  read: boolean;
  actionUrl?: string;
  userId: string;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}