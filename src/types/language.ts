// src/types/language.ts - EXPANDED VERSION

export type Language = 'en' | 'pt' | 'es' | 'fr' | 'de' | 'zh';

export interface LanguageConfig {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGES: LanguageConfig[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
];

export const DEFAULT_LANGUAGE: Language = 'en';

export interface Translations {
  common: {
    learnMore: string;
    getStarted: string;
    contactUs: string;
    readMore: string;
    backToHome: string;
    loading: string;
    error: string;
    viewAll: string;
    getStartedFree: string;
    bookCall: string;
    availableIn: string;
    commission: string;
  };
  nav: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    contact: string;
    resources: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    stats: {
      properties: string;
      occupancy: string;
      satisfaction: string;
      experience: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    viewAllServices: string;
    fullManagement: {
      title: string;
      commission: string;
      description: string;
      availability: string;
      features: string[];
    };
    onlineManagement: {
      title: string;
      commission: string;
      description: string;
      availability: string;
      features: string[];
    };
  };
  whyChoose: {
    title: string;
    subtitle: string;
    reasons: {
      expertise: {
        title: string;
        description: string;
      };
      revenue: {
        title: string;
        description: string;
      };
      calendar: {
        title: string;
        description: string;
      };
      marketing: {
        title: string;
        description: string;
      };
      ownership: {
        title: string;
        description: string;
      };
      service: {
        title: string;
        description: string;
      };
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      joao: {
        text: string;
        author: string;
        location: string;
      };
      miguel: {
        text: string;
        author: string;
        location: string;
      };
    };
  };
  cta: {
    title: string;
    subtitle: string;
    button1: string;
    button2: string;
  };
  about: {
    title: string;
    subtitle: string;
    foundedIn: string;
    yearsExperience: string;
    mission: string;
    description: string;
  };
  footer: {
    description: string;
    company: string;
    services: string;
    support: string;
    followUs: string;
    allRightsReserved: string;
    locations: string;
  };
}