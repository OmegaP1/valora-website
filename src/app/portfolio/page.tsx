import Link from 'next/link'
import { ArrowLeft, MapPin, Users, TrendingUp, Star, Building2, Calendar, Euro } from 'lucide-react'

export default function PortfolioPage() {
  const properties = [
    {
      id: 1,
      title: "Modern Apartment in Príncipe Real",
      location: "Lisbon",
      type: "2-Bedroom Apartment",
      occupancy: "100%",
      monthlyRent: "€1,850",
      tenantRating: 4.9,
      image: "/api/placeholder/400/300",
      description: "Fully renovated apartment in one of Lisbon's most desirable neighborhoods"
    },
    {
      id: 2,
      title: "Seaside Villa in Cascais",
      location: "Cascais",
      type: "4-Bedroom Villa",
      occupancy: "95%",
      monthlyRent: "€3,200",
      tenantRating: 4.8,
      image: "/api/placeholder/400/300",
      description: "Luxury villa with ocean views and private garden"
    },
    {
      id: 3,
      title: "Historic Townhouse in Porto",
      location: "Porto",
      type: "3-Bedroom House",
      occupancy: "98%",
      monthlyRent: "€2,100",
      tenantRating: 4.7,
      image: "/api/placeholder/400/300",
      description: "Beautifully restored townhouse in the historic city center"
    },
    {
      id: 4,
      title: "Contemporary Loft in Chiado",
      location: "Lisbon",
      type: "1-Bedroom Loft",
      occupancy: "100%",
      monthlyRent: "€1,650",
      tenantRating: 5.0,
      image: "/api/placeholder/400/300",
      description: "Designer loft in the heart of Lisbon's cultural district"
    },
    {
      id: 5,
      title: "Beachfront Apartment in Estoril",
      location: "Estoril",
      type: "2-Bedroom Apartment",
      occupancy: "92%",
      monthlyRent: "€2,400",
      tenantRating: 4.6,
      image: "/api/placeholder/400/300",
      description: "Elegant apartment with stunning beach and casino views"
    },
    {
      id: 6,
      title: "Garden Apartment in Sintra",
      location: "Sintra",
      type: "3-Bedroom Apartment",
      occupancy: "97%",
      monthlyRent: "€1,950",
      tenantRating: 4.8,
      image: "/api/placeholder/400/300",
      description: "Peaceful apartment surrounded by Sintra's natural beauty"
    }
  ]

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
            <span className="text-xl font-bold text-gray-900">Property Portfolio</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-brand text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Property Portfolio
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Explore our managed properties and see the results we deliver for property owners
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-[#ffb400] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <p className="text-gray-600">Properties Managed</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#ffb400] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">96%</div>
              <p className="text-gray-600">Average Occupancy</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#ffb400] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.8</div>
              <p className="text-gray-600">Average Tenant Rating</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#ffb400] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1,200+</div>
              <p className="text-gray-600">Happy Tenants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Showcase */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of properties we successfully manage, demonstrating our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl card-shadow-lg border border-gray-100 overflow-hidden">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {property.occupancy} Occupied
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white bg-opacity-90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {property.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{property.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {property.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                      <Euro className="h-4 w-4 text-[#ffb400] mr-2" />
                      <div>
                        <div className="text-sm text-gray-500">Monthly Rent</div>
                        <div className="font-semibold text-gray-900">{property.monthlyRent}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      <div>
                        <div className="text-sm text-gray-500">Tenant Rating</div>
                        <div className="font-semibold text-gray-900">{property.tenantRating}/5.0</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <button className="text-[#ffb400] hover:text-[#f59e0b] font-medium text-sm">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real property owners who trust VALORA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                owner: "Carlos M.",
                property: "2-Bedroom Apartment, Lisbon",
                improvement: "35% increase in rental yield",
                quote: "VALORA transformed my property investment. The professional management and tenant quality exceeded my expectations.",
                timeline: "6 months"
              },
              {
                owner: "Sarah L.",
                property: "Villa, Cascais",
                improvement: "Zero vacancy in 18 months",
                quote: "As an international owner, I needed reliable local management. VALORA delivers peace of mind and consistent returns.",
                timeline: "18 months"
              },
              {
                owner: "Miguel R.",
                property: "3 Properties, Porto",
                improvement: "Reduced management time by 90%",
                quote: "Switching to VALORA's full management service was the best decision. I can focus on acquiring more properties.",
                timeline: "2 years"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 card-shadow">
                <div className="mb-6">
                  <div className="text-2xl font-bold text-[#ffb400] mb-2">
                    {story.improvement}
                  </div>
                  <div className="text-sm text-gray-500">
                    {story.property} • {story.timeline}
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-4 italic">
                  "{story.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="bg-[#fffbeb] rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-[#ffb400]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{story.owner}</div>
                    <div className="text-sm text-gray-500">Property Owner</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Market Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our portfolio consistently outperforms market averages
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 card-shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Occupancy Rates</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">VALORA Portfolio</span>
                  <span className="font-semibold text-[#ffb400]">96%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#ffb400] h-2 rounded-full" style={{width: '96%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Market Average</span>
                  <span className="font-semibold text-gray-600">83%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-400 h-2 rounded-full" style={{width: '83%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 card-shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Average Rental Yields</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">VALORA Portfolio</span>
                  <span className="font-semibold text-[#ffb400]">6.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#ffb400] h-2 rounded-full" style={{width: '68%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Market Average</span>
                  <span className="font-semibold text-gray-600">5.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-400 h-2 rounded-full" style={{width: '52%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#ffb400] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Add Your Property?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our successful portfolio and experience professional property management that delivers results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-[#ffb400] font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                Get Property Assessment
              </Link>
              <Link href="/services" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-[#ffb400] transition-colors">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}