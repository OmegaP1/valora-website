import Link from 'next/link'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h1 className="text-9xl font-bold text-[#ffb400] mb-4">404</h1>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. 
            The page might have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-[#ffb400] hover:bg-[#f59e0b] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </Link>
            
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <Search className="h-5 w-5 mr-2" />
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}