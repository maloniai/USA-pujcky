import { nzDisclaimer } from '@/data/nz-translations'

interface DisclosureBlockProps {
  className?: string
}

export function DisclosureBlock({ className = '' }: DisclosureBlockProps) {
  return (
    <section className={`bg-gray-50 border-t border-gray-200 py-8 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Affiliate Disclosure */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Affiliate Disclosure
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {nzDisclaimer.affiliate}
            </p>
          </div>

          {/* Representative Example */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Representative Example
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {nzDisclaimer.representative}
            </p>
          </div>

          {/* CCCFA Warning */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <div className="flex items-start">
              <svg
                className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="text-sm font-semibold text-blue-900 mb-1">
                  Important CCCFA Notice
                </h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  {nzDisclaimer.warning}
                </p>
              </div>
            </div>
          </div>

          {/* Additional Disclaimers */}
          <div className="mt-6 space-y-3 text-xs text-gray-600 leading-relaxed">
            <p>
              <strong>Loan Comparison Service:</strong> This website is a comparison service that helps you find and compare personal loan options from licensed lenders in New Zealand. We are not a lender and do not make credit decisions.
            </p>
            <p>
              <strong>Licensing:</strong> All lenders featured on this platform are required to hold appropriate registrations with the Financial Service Providers Register (FSPR) and comply with New Zealand consumer finance laws including the Credit Contracts and Consumer Finance Act 2003.
            </p>
            <p>
              <strong>Rates & Fees:</strong> Interest rates, fees, and loan terms vary by lender and are subject to credit assessment. The rates shown are indicative and may not reflect the rate you will be offered. Always review the lender&apos;s disclosure statement before accepting any loan.
            </p>
            <p>
              <strong>Responsible Lending:</strong> Borrowing money costs money. Consider whether you can afford the repayments before applying. Seek financial advice if you&apos;re unsure. Visit{' '}
              <a
                href="https://www.sorted.org.nz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Sorted.org.nz
              </a>{' '}
              for free financial guidance.
            </p>
            <p>
              <strong>Information Accuracy:</strong> While we strive to keep information accurate and up-to-date, lender terms can change. Always verify current rates and terms directly with the lender.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
