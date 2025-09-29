import { Building2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="inline-flex items-center justify-center">
          <Building2 className="h-12 w-12 text-[#ffb400] animate-pulse" />
        </div>
        <div className="mt-4">
          <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#ffb400] rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>
        <p className="mt-4 text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  )
}