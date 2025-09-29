'use client'

import Link from 'next/link'
import { ArrowLeft, Check, Shield, TrendingUp, Users, Clock, Calculator, Phone } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center text-[#ffb400] hover:text-[#f59e0b]">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <span className="text-xl font-bold text-gray-900">VALORA Services</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#ffb400] to-[#f59e0b] text-[#111111] py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Property Management Services
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Choose the perfect management package for your property investment goals
            </p>
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Full Management Package */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-[#ffb400] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#ffb400] text-[#111111] px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <Shield className="h-16 w-16 text-[#ffb400] mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Full Management</h2>
                <div className="text-4xl font-bold text-[#ffb400] mb-2">30%</div>
                <p className="text-gray-600">Commission on rental income</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  {[
                    'Complete property management',
                    'Professional tenant screening',
                    'Lease agreement preparation',
                    'Rent collection & accounting',
                    'Maintenance coordination',
                    'Regular property inspections',
                    'Emergency repair services',
                    'Financial reporting',
                    'Legal compliance support',
                    'Tenant communication',
                    '24/7 emergency hotline',
                    'Vacancy marketing'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <Link href="/contact" className="inline-block bg-[#ffb400] hover:bg-[#f59e0b] text-[#111111] font-semibold py-3 px-8 rounded-lg transition-colors w-full text-center">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Online Management Package */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <TrendingUp className="h-16 w-16 text-[#ffb400] mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Online Management</h2>
                <div className="text-4xl font-bold text-[#ffb400] mb-2">12.5%</div>
                <p className="text-gray-600">Commission on rental income</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  {[
                    'Digital platform access',
                    'Online tenant applications',
                    'Automated credit screening',
                    'Digital lease signing',
                    'Automated rent collection',
                    'Online maintenance requests',
                    'Digital financial reports',
                    'Tenant communication portal',
                    'Property performance analytics',
                    'Mobile app access',
                    'Document storage',
                    'Basic support'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <Link href="/contact" className="inline-block bg-[#f6f6f6] hover:bg-gray-200 text-[#111111] font-semibold py-3 px-8 rounded-lg transition-colors w-full text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes property management simple and efficient
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "We assess your property and discuss your goals",
                icon: Users
              },
              {
                step: "2", 
                title: "Property Setup",
                description: "Professional photography and market analysis",
                icon: Calculator
              },
              {
                step: "3",
                title: "Tenant Acquisition",
                description: "Marketing, screening, and lease signing",
                icon: TrendingUp
              },
              {
                step: "4",
                title: "Ongoing Management",
                description: "Day-to-day operations and reporting",
                icon: Clock
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-[#ffb400] text-[#111111] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <Icon className="h-8 w-8 text-[#ffb400] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What's the difference between Full and Online Management?",
                answer: "Full Management includes hands-on service with our team handling everything from maintenance to tenant communication. Online Management provides digital tools for more independent property owners who prefer a technology-driven approach."
              },
              {
                question: "How quickly can you find tenants for my property?",
                answer: "On average, we fill vacant properties within 30-45 days, depending on the property type, location, and market conditions. Our professional marketing approach typically reduces vacancy periods significantly."
              },
              {
                question: "What happens if there's an emergency at my property?",
                answer: "Our Full Management clients have access to 24/7 emergency support. We coordinate immediate response for urgent issues like water leaks, heating failures, or security concerns."
              },
              {
                question: "How do I receive my rental income?",
                answer: "Rental payments are processed and transferred to your account monthly, typically within 5 business days of collection. You'll receive detailed financial reports with each payment."
              },
              {
                question: "Can I switch between management packages?",
                answer: "Yes, you can upgrade or downgrade your management package with 30 days notice. We'll help you transition smoothly between service levels."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#ffb400] text-[#111111]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today for a free consultation and property assessment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-[#111111] text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                Free Consultation
              </Link>
              <Link href="/" className="inline-flex items-center justify-center border-2 border-[#111111] text-[#111111] font-semibold py-3 px-8 rounded-lg hover:bg-[#111111] hover:text-white transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}