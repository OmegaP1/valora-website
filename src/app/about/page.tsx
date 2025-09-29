import Link from 'next/link'
import { ArrowLeft, Building2, Users, Award, TrendingUp, Shield, Target } from 'lucide-react'

export default function AboutPage() {
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
            <span className="text-xl font-bold text-gray-900">About VALORA</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-brand text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About VALORA
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Your trusted partner in property management excellence across Portugal
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded with a vision to revolutionize property management in Portugal, 
                  VALORA has grown from a small local operation to one of the most trusted 
                  property management companies in the country.
                </p>
                <p>
                  Our journey began when we recognized the need for professional, 
                  technology-driven property management services that could bridge the gap 
                  between traditional real estate practices and modern investor expectations.
                </p>
                <p>
                  Today, we manage hundreds of properties across Portugal, helping both 
                  local and international property owners maximize their investment returns 
                  while ensuring exceptional tenant experiences.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <Building2 className="h-24 w-24 text-[#ffb400] mx-auto mb-6" />
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#ffb400] mb-2">500+</div>
                  <p className="text-gray-600">Properties Managed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#ffb400] mb-2">98%</div>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#ffb400] mb-2">5+</div>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#ffb400] mb-2">24/7</div>
                  <p className="text-gray-600">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional property management services 
              that deliver real value to our clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-[#fffbeb] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-[#ffb400]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, from tenant 
                relations to financial reporting, ensuring the highest standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#fffbeb] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-[#ffb400]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust</h3>
              <p className="text-gray-600">
                Transparency and honesty form the foundation of our relationships. 
                We believe trust is earned through consistent, reliable performance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#fffbeb] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-[#ffb400]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace technology and innovative solutions to provide better, 
                more efficient property management services for the modern world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals are dedicated to managing your property 
              investment with expertise and care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Maria Silva",
                role: "Founder & CEO",
                description: "15+ years in Portuguese real estate with expertise in investment property management and market analysis.",
                icon: Users
              },
              {
                name: "João Santos",
                role: "Operations Director",
                description: "Former hotel management professional specializing in tenant relations and property maintenance coordination.",
                icon: Building2
              },
              {
                name: "Ana Costa",
                role: "Client Relations Manager",
                description: "Multilingual property specialist focused on providing exceptional service to international clients.",
                icon: Award
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 card-shadow-lg text-center">
                <div className="bg-[#fffbeb] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <member.icon className="h-10 w-10 text-[#ffb400]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#ffb400] font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Property Owners Choose VALORA
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#ffb400] rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Market Expertise</h3>
                  <p className="text-gray-600">Deep understanding of Portuguese rental markets, legal requirements, and tenant preferences.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#ffb400] rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology-Driven Approach</h3>
                  <p className="text-gray-600">Modern platforms and tools that provide transparency, efficiency, and better communication.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#ffb400] rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Service</h3>
                  <p className="text-gray-600">From tenant acquisition to maintenance coordination, we handle every aspect of property management.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#ffb400] rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                  <p className="text-gray-600">Consistently high occupancy rates and satisfied clients demonstrate our commitment to excellence.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#ffb400] rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Multilingual Support</h3>
                  <p className="text-gray-600">Serving international clients with support in multiple languages and cultural understanding.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#ffb400] rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600">No hidden fees or surprise charges. Clear, straightforward commission structure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest professional standards through industry certifications and strategic partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              "Licensed Real Estate Agency",
              "AMI Certified",
              "Tourism Board Registered",
              "Property Management Association Member"
            ].map((certification, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#fffbeb] rounded-lg p-6 mb-4">
                  <Award className="h-12 w-12 text-[#ffb400] mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900">{certification}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#ffb400] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with VALORA?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied property owners who trust us with their investments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-[#ffb400] font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                Get Started Today
              </Link>
              <Link href="/services" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-[#ffb400] transition-colors">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}