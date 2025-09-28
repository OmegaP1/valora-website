// Company Information
export const COMPANY = {
  name: 'VALORA',
  fullName: 'VALORA Property Management',
  tagline: 'Luxury Property Management in Portugal',
  description: 'Premium property management services for luxury properties across Portugal',
  foundedYear: 2018,
  experience: '6+ Years',
  email: 'hello@valora.pt',
  phone: '+351 XXX XXX XXX',
  website: 'https://valora.pt',
  address: {
    street: 'Rua Example, 123',
    city: 'Funchal',
    region: 'Madeira',
    country: 'Portugal',
    postalCode: '9000-XXX'
  }
} as const;

// Service Locations
export const LOCATIONS = [
  {
    id: 'madeira',
    name: 'Madeira',
    region: 'Autonomous Region of Madeira',
    description: 'Stunning island paradise with luxury villas and oceanfront properties',
    popular: true,
    coordinates: { lat: 32.6669, lng: -16.9241 }
  },
  {
    id: 'lisbon',
    name: 'Lisbon',
    region: 'Lisbon District',
    description: 'Historic capital with premium apartments and exclusive properties',
    popular: true,
    coordinates: { lat: 38.7223, lng: -9.1393 }
  },
  {
    id: 'comporta',
    name: 'Comporta',
    region: 'Setúbal District',
    description: 'Exclusive coastal destination with luxury beachfront properties',
    popular: true,
    coordinates: { lat: 38.3669, lng: -8.7833 }
  },
  {
    id: 'alentejo',
    name: 'Alentejo',
    region: 'Alentejo Region',
    description: 'Rural elegance with wine estates and luxury countryside properties',
    popular: false,
    coordinates: { lat: 38.5667, lng: -7.9 }
  },
  {
    id: 'algarve',
    name: 'Algarve',
    region: 'Faro District',
    description: 'Southern coast with golf resorts and luxury vacation homes',
    popular: false,
    coordinates: { lat: 37.0194, lng: -7.9322 }
  },
  {
    id: 'porto',
    name: 'Porto',
    region: 'Porto District',
    description: 'Historic city with premium properties and modern luxury apartments',
    popular: false,
    coordinates: { lat: 41.1579, lng: -8.6291 }
  }
] as const;

// Service Packages
export const SERVICES = {
  full: {
    id: 'full',
    name: 'Full Management',
    commission: 30,
    description: 'Complete hands-off property management with maximum revenue optimization',
    shortDescription: 'Complete hands-off management',
    features: [
      'Professional photography & listing creation',
      'Dynamic pricing optimization across 20+ platforms',
      'Guest communication & 24/7 support',
      'Professional cleaning & maintenance',
      'Check-in/check-out management',
      'Linen & amenity management',
      'Property maintenance & repairs',
      'Legal compliance & AL licensing',
      'Insurance & damage protection',
      'Monthly financial reporting',
      'Revenue optimization strategies',
      'Guest experience management'
    ],
    benefits: [
      'Completely hands-off',
      'Maximum revenue potential',
      'Professional guest service',
      'Full legal compliance',
      'Property protection',
      'Dedicated account manager'
    ],
    idealFor: 'Property owners who want maximum returns with zero involvement in day-to-day operations.',
    color: 'primary'
  },
  online: {
    id: 'online',
    name: 'Online Management',
    commission: 12.5,
    description: 'Revenue optimization and guest management while you handle property operations',
    shortDescription: 'Revenue optimization support',
    features: [
      'Professional photography & listing optimization',
      'Multi-platform distribution (20+ channels)',
      'Dynamic pricing & revenue optimization',
      'Guest communication & booking management',
      '24/7 guest support during stays',
      'Review management & response',
      'Calendar synchronization',
      'Booking analytics & reporting',
      'Legal compliance guidance',
      'AL license support',
      'Market insights & recommendations'
    ],
    benefits: [
      'Lower commission',
      'You control operations',
      'Professional marketing',
      'Revenue optimization',
      'Guest communication',
      'Platform management'
    ],
    idealFor: 'Hands-on owners who want to manage cleaning and maintenance while maximizing bookings and revenue.',
    color: 'secondary'
  }
} as const;

// Pricing & Commissions
export const PRICING = {
  fullManagement: {
    commission: 30,
    description: 'All-inclusive management',
    minimumStay: 2,
    cleaningFee: 'Included',
    maintenanceFee: 'Included'
  },
  onlineManagement: {
    commission: 12.5,
    description: 'Marketing & guest management',
    minimumStay: 2,
    cleaningFee: 'Owner responsibility',
    maintenanceFee: 'Owner responsibility'
  }
} as const;

// Contact Information
export const CONTACT = {
  office: {
    hours: 'Monday - Friday: 9:00 - 18:00',
    timezone: 'Atlantic/Madeira (WET)',
    languages: ['Portuguese', 'English', 'Spanish', 'French', 'German']
  },
  support: {
    available: '24/7',
    channels: ['Phone', 'Email', 'WhatsApp', 'Live Chat']
  }
} as const;

// Social Media Links
export const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/valora.pt',
    icon: 'Instagram'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/valora.pt',
    icon: 'Facebook'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/valora-pt',
    icon: 'Linkedin'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@valora-pt',
    icon: 'Youtube'
  }
] as const;

// Navigation Items
export const NAVIGATION = [
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
] as const;

// SEO & Analytics
export const SEO = {
  defaultTitle: 'VALORA - Luxury Property Management in Portugal',
  titleTemplate: '%s | VALORA - Luxury Property Management',
  defaultDescription: 'Premium property management services in Portugal. Full management (30%) and online management (12.5%) packages for luxury properties.',
  siteUrl: 'https://valora.pt',
  twitterHandle: '@valora_pt',
  keywords: [
    'property management',
    'Portugal',
    'luxury properties',
    'vacation rental',
    'Airbnb management',
    'Madeira',
    'Lisbon',
    'Comporta',
    'Alentejo',
    'Algarve',
    'real estate',
    'investment properties'
  ]
} as const;

// Animation Variants
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -60 }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 60 }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -60 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
} as const;

// Breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

// Z-Index Scale
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080
} as const;