import Link from 'next/link'
import { ArrowRight, Building2, Shield, TrendingUp, Star, MapPin, Phone, Mail } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <nav className="container-custom">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-[#ffb400]" />
              <span className="ml-2 text-xl font-bold text-[#111111]">VALORA</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-gray-700 hover:text-[#ffb400] transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-[#ffb400] transition-colors">
                Portfolio
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#ffb400] transition-colors">
                About
              </Link>
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="gradient-brand text-[#111111] section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Property Management <br />
              <span className="text-[#111111] opacity-80">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#111111] opacity-90">
              Professional property management services in Portugal. 
              Maximize your investment returns with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="bg-[#111111] text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center justify-center">
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/contact" className="border-2 border-[#111111] text-[#111111] font-semibold py-3 px-8 rounded-lg hover:bg-[#111111] hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive property management packages designed to meet your specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Full Management */}
            <div className="bg-white rounded-2xl p-8 card-shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <Shield className="h-12 w-12 text-[#ffb400] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Full Management</h3>
                <div className="text-3xl font-bold text-[#ffb400] mb-2">30%</div>
                <p className="text-gray-600">Commission on rental income</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <Star className="h-5 w-5 text-green-500 mr-3" />
                  Complete property management
                </li>
                <li className="flex items-center text-gray-700">
                  <Star className="h-5 w-5 text-green-500 mr-3" />
                  Tenant screening & management
                </li>
                <li className="flex items-center text-gray-700">
                  <Star className="h-5 w-5 text-green-500 mr-3" />
                  Maintenance coordination
                </li>
                <li className="flex items-center text-gray-700">
                  <Star className="h-5 w-5 text-green-500 mr-3" />
                  Financial reporting
                </li>
                <li className="flex items-center text-gray-700">
                  <Star className="h-5 w-5 text-green-500 mr-3" />
                  24/7 emergency support
                </li>
              </ul>
              <Link href="/services" className="btn-primary w-full text-center">
                Learn More
              </Link>
            </div>

            {/* Online Management */}
            <div className="bg-white rounded-2xl p-8 card-shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <TrendingUp className="h-12 w-12 text-[#ffb400] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Online Management</h3>
                <div className="text-3xl font-bold text-[#ffb400] mb-2">12.5%</div>
                <p className="text-gray-600">Commission on rental income</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <Star className="h-5 w-5 text-green-500 mr-3" />
                  Digital platform access
                </li>
                <li className="flex items-center text-gray-700">
                  <Star className="h-5 w-5 text-green-500 mr-3" />
                  Online tenant screening
                </li>
                <li className="flex items-center text-gray-700">
                  <Star className="h-5 w-5 text-green-500 mr-3" />
                  Automated rent collection
                </li>
                <li className="flex items-center text-gray-700">
                  <Star className="h-5 w-5 text-green-500 mr-3" />
                  Digital reporting
                </li>
                <li className="flex items-center text-gray-700">
                  <Star className="h-5 w-5 text-green-500 mr-3" />
                  Self-service portal
                </li>
              </ul>
              <Link href="/services" className="btn-secondary w-full text-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose VALORA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose VALORA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine local expertise with modern technology to deliver exceptional property management services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#fffbeb] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-[#ffb400]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trusted Expertise</h3>
              <p className="text-gray-600">
                Years of experience in the Portuguese property market with a proven track record of success
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#fffbeb] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-[#ffb400]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Maximize Returns</h3>
              <p className="text-gray-600">
                Strategic pricing and marketing to ensure optimal rental yields and property value growth
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#fffbeb] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-[#ffb400]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Full Service</h3>
              <p className="text-gray-600">
                Comprehensive management from tenant acquisition to maintenance, all handled professionally
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#ffb400] text-[#111111]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Maximize Your Property Investment?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with VALORA today and experience professional property management that delivers results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#111111] text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/services" className="border-2 border-[#111111] text-[#111111] font-semibold py-3 px-8 rounded-lg hover:bg-[#111111] hover:text-white transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-[#ffb400]" />
                <span className="ml-2 text-xl font-bold">VALORA</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional property management services in Portugal
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services" className="hover:text-white transition-colors">Full Management</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Online Management</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+351 XXX XXX XXX</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@valora.pt</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Lisbon, Portugal</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 VALORA. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}