import Link from 'next/link'
import { ArrowLeft, BookOpen, Download, Calendar, TrendingUp, FileText, Calculator, AlertCircle } from 'lucide-react'

export default function ResourcesPage() {
  const articles = [
    {
      id: 1,
      title: "Property Investment Guide for Portugal 2024",
      excerpt: "Complete guide to property investment in Portugal, including tax implications, legal requirements, and market insights.",
      category: "Investment",
      readTime: "8 min read",
      icon: TrendingUp
    },
    {
      id: 2,
      title: "Understanding Portuguese Rental Laws",
      excerpt: "Everything property owners need to know about tenant rights, lease agreements, and legal obligations in Portugal.",
      category: "Legal",
      readTime: "6 min read",
      icon: FileText
    },
    {
      id: 3,
      title: "Maximizing Rental Yields in Lisbon",
      excerpt: "Proven strategies to increase your property's rental income and improve overall investment performance.",
      category: "Strategy",
      readTime: "5 min read",
      icon: TrendingUp
    },
    {
      id: 4,
      title: "Tax Guide for Property Owners",
      excerpt: "Comprehensive overview of tax obligations, deductions, and optimization strategies for rental property owners.",
      category: "Finance",
      readTime: "10 min read",
      icon: Calculator
    },
    {
      id: 5,
      title: "Property Maintenance Best Practices",
      excerpt: "Essential maintenance tips to preserve property value and ensure tenant satisfaction.",
      category: "Management",
      readTime: "7 min read",
      icon: AlertCircle
    },
    {
      id: 6,
      title: "Market Trends Report Q4 2024",
      excerpt: "Latest analysis of the Portuguese rental market, pricing trends, and investment opportunities.",
      category: "Market Analysis",
      readTime: "12 min read",
      icon: TrendingUp
    }
  ]

  const guides = [
    {
      title: "New Property Owner Checklist",
      description: "Complete checklist for first-time property investors",
      type: "PDF",
      pages: "15 pages"
    },
    {
      title: "Rental Income Calculator",
      description: "Calculate potential returns and expenses",
      type: "Excel",
      pages: "Interactive"
    },
    {
      title: "Sample Lease Agreement",
      description: "Portuguese rental contract template",
      type: "PDF",
      pages: "8 pages"
    },
    {
      title: "Property Inspection Report",
      description: "Template for property condition assessment",
      type: "PDF",
      pages: "6 pages"
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
            <span className="text-xl font-bold text-gray-900">Resources</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-brand text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Property Management Resources
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Expert insights, guides, and tools to help you succeed as a property owner in Portugal
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl card-shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto bg-[#ffb400]"></div>
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-4">
                    <span className="bg-[#fffbeb] text-[#f59e0b] px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <span className="ml-3 text-sm text-gray-500">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      December 2024
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    2025 Property Market Outlook
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Our comprehensive analysis of market trends, investment opportunities, and predictions 
                    for the Portuguese property market in 2025. Essential reading for all property investors.
                  </p>
                  <button className="btn-primary">
                    Read Full Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles & Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice and insights from our property management team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-2xl card-shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#fffbeb] text-[#f59e0b] px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                    <article.icon className="h-6 w-6 text-[#ffb400]" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <button className="text-[#ffb400] hover:text-[#f59e0b] font-medium text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Free Downloadable Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential templates and tools for property owners
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl p-6 card-shadow border border-gray-100 flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <div className="bg-[#fffbeb] rounded-lg w-12 h-12 flex items-center justify-center mr-4">
                    <Download className="h-6 w-6 text-[#ffb400]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{guide.title}</h3>
                    <p className="text-sm text-gray-600">{guide.description}</p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <span className="bg-gray-100 px-2 py-1 rounded mr-2">{guide.type}</span>
                      <span>{guide.pages}</span>
                    </div>
                  </div>
                </div>
                <button className="ml-4 text-[#ffb400] hover:text-[#f59e0b]">
                  <Download className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Management Blog */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Property Management Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular updates on market trends, regulations, and best practices
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                date: "Dec 15, 2024",
                title: "New Tenant Screening Requirements in Portugal",
                excerpt: "Recent changes to tenant screening regulations and what property owners need to know.",
                category: "Legal Updates"
              },
              {
                date: "Dec 10, 2024",
                title: "Holiday Rental vs Long-Term: What's Better in 2025?",
                excerpt: "Comprehensive comparison of rental strategies for Portuguese property owners.",
                category: "Strategy"
              },
              {
                date: "Dec 5, 2024",
                title: "Top 10 Property Improvements That Increase Rental Value",
                excerpt: "Proven renovations and upgrades that deliver the best return on investment.",
                category: "Investment Tips"
              },
              {
                date: "Nov 28, 2024",
                title: "Understanding Portugal's Non-Habitual Resident Tax Program",
                excerpt: "How the NHR program affects property investors and rental income taxation.",
                category: "Taxation"
              }
            ].map((post, index) => (
              <article key={index} className="bg-white rounded-xl p-6 card-shadow border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="text-sm text-gray-500 mr-4">
                        <Calendar className="inline h-4 w-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="bg-[#fffbeb] text-[#f59e0b] px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600">
                      {post.excerpt}
                    </p>
                  </div>
                  <button className="ml-6 text-[#ffb400] hover:text-[#f59e0b] font-medium whitespace-nowrap">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="btn-secondary">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Calculators Section */}
      <section className="section-padding bg-[#ffb400] text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Property Investment Calculators
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Free tools to help you make informed investment decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Rental Yield Calculator",
                description: "Calculate your potential rental returns and ROI",
                icon: Calculator
              },
              {
                title: "Mortgage Calculator",
                description: "Estimate monthly payments and total loan costs",
                icon: TrendingUp
              },
              {
                title: "Property Tax Estimator",
                description: "Calculate IMI, IMT, and income tax obligations",
                icon: FileText
              }
            ].map((calc, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all">
                <calc.icon className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{calc.title}</h3>
                <p className="opacity-90 mb-6">{calc.description}</p>
                <button className="bg-white text-[#ffb400] px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Launch Calculator
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-50 to-brand-100 rounded-2xl p-8 md:p-12 text-center">
              <BookOpen className="h-12 w-12 text-[#ffb400] mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Informed
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Subscribe to our newsletter for monthly market insights, tips, and exclusive resources
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ffb400] focus:border-[#ffb400]"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                No spam. Unsubscribe anytime. Read our <Link href="/privacy" className="text-[#ffb400] hover:text-[#f59e0b]">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Need Expert Advice?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our property management experts are here to help you succeed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
              <Link href="/services" className="btn-secondary">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}