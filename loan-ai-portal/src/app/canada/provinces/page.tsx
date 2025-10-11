import Link from 'next/link'
import { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { canadianProvinces, provinceRegions } from '@/data/canada-provinces'

export const metadata: Metadata = {
  title: 'Canadian Provinces – Personal Loan Regulations by Province',
  description: 'Explore personal loan regulations, rates, and lender information for all Canadian provinces and territories. Compare provincial lending laws and consumer protections.',
  keywords: 'Canada provinces, provincial lending laws, Ontario loans, Quebec loans, BC loans, Alberta loans',
  alternates: {
    canonical: 'https://loan-platform.com/canada/provinces',
  },
}

export default function CanadaProvincesPage() {
  return (
    <>
      <Navigation locale="en" />
      <main className="flex-1 bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-br from-red-50 to-red-100 border-b border-red-100">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <nav className="mb-4 text-sm">
              <Link href="/canada" className="text-red-700 hover:text-red-900">
                ← Back to Canada Hub
              </Link>
            </nav>
            <h1 className="text-4xl font-bold text-red-900 md:text-5xl">
              Canadian Provinces & Territories
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-gray-700">
              Explore lending regulations, average loan amounts, and borrower protections specific to each
              Canadian province and territory.
            </p>
          </div>
        </div>

        {/* Provinces List */}
        <div className="mx-auto max-w-6xl px-4 py-12">
          {Object.entries(provinceRegions).map(([region, provinceNames]) => {
            const provinces = canadianProvinces.filter(p => provinceNames.includes(p.name))
            
            return (
              <section key={region} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{region}</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {provinces.map(province => (
                    <Link
                      key={province.slug}
                      href={`/canada/provinces/${province.slug}`}
                      className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg hover:border-red-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-red-900">{province.name}</h3>
                          <p className="text-sm text-gray-600">{province.abbreviation}</p>
                        </div>
                        <span className="text-3xl">🍁</span>
                      </div>
                      
                      <p className="text-sm text-gray-700 mb-4">{province.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <p className="text-gray-500 mb-1">Population</p>
                          <p className="font-semibold text-gray-900">{province.population}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 mb-1">Avg Loan</p>
                          <p className="font-semibold text-gray-900">{province.avgLoanAmount}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 mb-1">Avg Rate</p>
                          <p className="font-semibold text-gray-900">{province.avgRate}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 mb-1">Max Loan</p>
                          <p className="font-semibold text-gray-900">{province.maxLoanAmount}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-xs text-red-700 font-semibold">
                          View regulations & cities →
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </main>

      {/* Sticky Apply Button */}
      <div className="fixed bottom-4 right-4 z-40">
        <Link
          href="/canada/apply"
          className="flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-red-700 hover:shadow-xl"
        >
          <span>Apply Now</span>
          <span aria-hidden>→</span>
        </Link>
      </div>

      <Footer locale="en" />
    </>
  )
}
