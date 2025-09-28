'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useToast } from '@/contexts/ToastContext';
import { 
  Send,
  Calculator,
  Phone,
  MessageSquare,
  MapPin,
  Building,
  Users,
  DollarSign,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { cn } from '@/utils';

const serviceOptions = [
  { value: 'assessment', label: 'Free Property Assessment', icon: Calculator, popular: true },
  { value: 'consultation', label: 'Expert Consultation', icon: Phone, popular: false },
  { value: 'full-management', label: 'Full Management Service', icon: Building, popular: false },
  { value: 'online-management', label: 'Online Management Service', icon: MessageSquare, popular: false },
  { value: 'general', label: 'General Inquiry', icon: MessageSquare, popular: false },
];

const propertyTypes = [
  'Villa',
  'Apartment',
  'Penthouse',
  'Townhouse',
  'Country Estate',
  'Beachfront Property',
  'Historic Property',
  'Other'
];

const locations = [
  'Madeira',
  'Lisbon',
  'Comporta',
  'Alentejo',
  'Algarve',
  'Porto',
  'Other Location'
];

const budgetRanges = [
  'Under €100/night',
  '€100-200/night',
  '€200-300/night',
  '€300-500/night',
  '€500+/night',
  'Not sure yet'
];

const timelines = [
  'Immediately',
  'Within 1 month',
  'Within 3 months',
  'Within 6 months',
  'Just exploring options'
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'assessment',
    propertyLocation: '',
    propertyType: '',
    guests: '',
    budget: '',
    timeline: '',
    message: '',
    source: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const { showSuccess, showError } = useToast();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({ ...prev, serviceInterest: service }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      showError('Please accept our privacy policy to continue');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      showSuccess(
        'Thank you for your inquiry!', 
        'We\'ll respond within 2 hours during business days.'
      );
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceInterest: 'assessment',
        propertyLocation: '',
        propertyType: '',
        guests: '',
        budget: '',
        timeline: '',
        message: '',
        source: '',
        consent: false
      });
      setCurrentStep(1);
      
    } catch (error) {
      showError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const isStep1Valid = formData.name && formData.email && formData.serviceInterest;
  const isStep2Valid = formData.propertyLocation || formData.serviceInterest === 'general';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="card-premium"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-dark-900 mb-4">
          Get Your Free Property Assessment
        </h2>
        <p className="text-light-700">
          Tell us about your property and goals. We'll provide a detailed analysis 
          of your rental potential and recommend the best management approach.
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300',
                step <= currentStep
                  ? 'bg-primary-500 text-white'
                  : 'bg-light-200 text-light-600'
              )}>
                {step < currentStep ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  step
                )}
              </div>
              {step < 3 && (
                <div className={cn(
                  'w-16 h-1 mx-2 transition-all duration-300',
                  step < currentStep ? 'bg-primary-500' : 'bg-light-200'
                )} />
              )}
            </div>
          ))}
        </div>
        <div className="text-sm text-light-600">
          Step {currentStep} of 3: {
            currentStep === 1 ? 'Contact & Service' :
            currentStep === 2 ? 'Property Details' :
            'Additional Information'
          }
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Contact & Service */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Service Interest */}
            <div>
              <label className="block text-sm font-medium text-dark-900 mb-3">
                What are you interested in? *
              </label>
              <div className="grid grid-cols-1 gap-3">
                {serviceOptions.map((option) => {
                  const IconComponent = option.icon;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleServiceChange(option.value)}
                      className={cn(
                        'flex items-center space-x-3 p-4 rounded-lg border-2 text-left transition-all duration-200',
                        formData.serviceInterest === option.value
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-light-200 hover:border-light-300'
                      )}
                    >
                      <IconComponent className={cn(
                        'h-5 w-5',
                        formData.serviceInterest === option.value ? 'text-primary-600' : 'text-light-600'
                      )} />
                      <div className="flex-1">
                        <div className={cn(
                          'font-medium',
                          formData.serviceInterest === option.value ? 'text-primary-900' : 'text-dark-900'
                        )}>
                          {option.label}
                          {option.popular && (
                            <span className="ml-2 bg-primary-500 text-white px-2 py-0.5 rounded-full text-xs">
                              Popular
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-dark-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="+351 XXX XXX XXX"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-dark-900 mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Your company name"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 2: Property Details */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="propertyLocation" className="block text-sm font-medium text-dark-900 mb-2">
                  Property Location *
                </label>
                <select
                  id="propertyLocation"
                  name="propertyLocation"
                  value={formData.propertyLocation}
                  onChange={handleInputChange}
                  className="input-field"
                  required={formData.serviceInterest !== 'general'}
                >
                  <option value="">Select location</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="propertyType" className="block text-sm font-medium text-dark-900 mb-2">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="">Select type</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-dark-900 mb-2">
                  Guest Capacity
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Number of guests"
                  min="1"
                  max="20"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-dark-900 mb-2">
                  Expected Nightly Rate
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="">Select range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Additional Information */}
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-dark-900 mb-2">
                Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="input-field"
              >
                <option value="">When would you like to start?</option>
                {timelines.map((timeline) => (
                  <option key={timeline} value={timeline}>{timeline}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dark-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="input-field"
                placeholder="Tell us more about your property, goals, or any specific questions you have..."
              />
            </div>

            <div>
              <label htmlFor="source" className="block text-sm font-medium text-dark-900 mb-2">
                How did you hear about us?
              </label>
              <select
                id="source"
                name="source"
                value={formData.source}
                onChange={handleInputChange}
                className="input-field"
              >
                <option value="">Please select</option>
                <option value="google">Google Search</option>
                <option value="social-media">Social Media</option>
                <option value="referral">Referral</option>
                <option value="website">Your Website</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Consent */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 text-primary-600 border-light-300 rounded focus:ring-primary-500"
                required
              />
              <label htmlFor="consent" className="text-sm text-light-700">
                I agree to VALORA's{' '}
                <a href="/privacy" className="text-primary-600 hover:text-primary-700">
                  Privacy Policy
                </a>{' '}
                and consent to being contacted about property management services. *
              </label>
            </div>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-light-200">
          <button
            type="button"
            onClick={prevStep}
            className={cn(
              'px-6 py-2 text-sm font-medium rounded-lg transition-all duration-200',
              currentStep === 1
                ? 'invisible'
                : 'text-light-600 hover:text-dark-900 hover:bg-light-100'
            )}
          >
            Previous
          </button>

          <div className="flex space-x-3">
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !isStep1Valid) ||
                  (currentStep === 2 && !isStep2Valid)
                }
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Step
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting || !formData.consent}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </form>
    </motion.div>
  );
}