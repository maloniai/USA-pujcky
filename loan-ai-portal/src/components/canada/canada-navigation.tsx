import Link from 'next/link'

export default function CanadaNavigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/ca" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
              <span className="flex items-center gap-2">
                <span>🇨🇦</span>
                <span>LoansAI Canada</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/ca/regions" className="text-gray-700 hover:text-blue-600 font-medium">
              Provinces
            </Link>
            <Link href="/ca/cities" className="text-gray-700 hover:text-blue-600 font-medium">
              Cities
            </Link>
            <Link href="/ca/apply" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
