import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Performance Metrics 2025 | Loan Platform Documentation',
  description: 'Detailed performance metrics and lending statistics for 2025.',
}

export default function PerformanceMetrics2025Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <nav className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/docs" className="hover:text-blue-600">Documentation</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Performance Metrics 2025</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Performance Metrics 2025
        </h1>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Platform Performance Overview
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Borrowers Served</h3>
              <p className="text-gray-700">
                Over 2 million borrowers nationwide since 2020, with consistent year-over-year growth 
                in loan originations and platform engagement.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Average Time to Funding</h3>
              <p className="text-gray-700">
                72% of approved loans are funded within 24 hours, with 93% funded within 3 business days.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lender Network</h3>
              <p className="text-gray-700">
                Partnership with 150+ licensed lenders across all 50 states, ensuring competitive rates 
                and broad market coverage.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Average APR Range</h3>
              <p className="text-gray-700">
                Platform-wide average APR ranges from 5.99% to 35.99%, varying by borrower creditworthiness, 
                loan amount, and term length.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Satisfaction</h3>
              <p className="text-gray-700">
                4.6/5.0 average rating based on verified borrower reviews across multiple consumer review platforms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Regulatory Compliance</h3>
              <p className="text-gray-700">
                100% of partner lenders are licensed and compliant with state and federal regulations, 
                including TILA, FCRA, and state-specific lending laws.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Data Methodology</h2>
          <p className="text-sm text-gray-700">
            All metrics are based on aggregated platform data from January 2020 through December 2024. 
            Performance statistics are updated quarterly and reflect actual borrower outcomes. Individual 
            results may vary based on creditworthiness, loan amount, term length, and lender selection.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related Documentation</h2>
          <div className="space-y-3">
            <Link href="/disclosures/borrower-outcomes" className="block text-blue-600 hover:underline">
              → Borrower Outcomes & Methodology
            </Link>
            <Link href="/disclosures" className="block text-blue-600 hover:underline">
              → Full Disclosures
            </Link>
            <Link href="/licenses" className="block text-blue-600 hover:underline">
              → Licensing & Accreditation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
