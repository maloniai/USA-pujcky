import type { Metadata } from 'next'
import Link from 'next/link'
import CanadaNavigation from '@/components/canada/canada-navigation'
import CanadaFooter from '@/components/canada/canada-footer'
import CanadaDisclosure from '@/components/canada/canada-disclosure'

export const metadata: Metadata = {
  title: 'Disclosures - LoansAI Canada',
  description: 'Important disclosures about LoansAI Canada\'s loan comparison and referral service, including regulatory information and consumer rights.',
  robots: 'noindex, follow',
}

export default function CanadaDisclosuresPage() {
  return (
    <>
      <CanadaNavigation />
      
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm">
              <ol className="flex items-center gap-2 text-gray-600">
                <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                <li>›</li>
                <li><Link href="/ca" className="hover:text-blue-600">Canada</Link></li>
                <li>›</li>
                <li className="text-gray-900 font-semibold">Disclosures</li>
              </ol>
            </nav>

            <h1 className="text-4xl font-bold text-gray-900 mb-8">Important Disclosures</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-gray-600 mb-8">
                <strong>Last Updated:</strong> October 2025
              </p>

              {/* Main Disclosure Component */}
              <div className="mb-8">
                <CanadaDisclosure />
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Nature of Service</h2>
                <p className="text-gray-700 mb-4">
                  LoansAI Canada is a <strong>loan comparison and referral service</strong>, not a lender. We:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Compare loan offers from multiple licensed lenders</li>
                  <li>Provide educational information about personal loans and lending regulations</li>
                  <li>Refer qualified applicants to licensed lenders</li>
                  <li>Do NOT make credit decisions or fund loans</li>
                  <li>Do NOT guarantee loan approval or specific terms</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Affiliate Relationships</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Material Connection Disclosure:</strong> LoansAI Canada has affiliate relationships with 
                  licensed lenders featured on our website. We may receive compensation when:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>You click on a lender's link or offer</li>
                  <li>You submit an application to a lender through our service</li>
                  <li>A loan is funded through a lender we referred you to</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  <strong>Impact on You:</strong> This compensation model:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Does NOT increase the cost of your loan</li>
                  <li>Does NOT affect the loan terms you receive</li>
                  <li>May influence which lenders we feature and their placement</li>
                  <li>Does NOT compromise our commitment to transparency and accuracy</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  We strive to present loan options objectively, but you should be aware of these financial relationships 
                  when using our service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Interest Rates and APR</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Rate Information:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li><strong>APR Range:</strong> Personal loan APRs in Canada typically range from 5.99% to 46.96%</li>
                  <li><strong>Criminal Rate:</strong> Under Canadian law, the maximum legal interest rate is 60% APR</li>
                  <li><strong>Your Rate:</strong> The actual rate you receive depends on your creditworthiness, income, 
                  loan amount, term, province, and lender policies</li>
                  <li><strong>Rate Changes:</strong> Advertised rates are subject to change without notice</li>
                  <li><strong>Representative Example:</strong> A $10,000 loan at 15% APR over 36 months = $346.65/month, 
                  total repayment $12,479.40, total interest $2,479.40</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Provincial Regulations</h2>
                <p className="text-gray-700 mb-4">
                  Personal lending is regulated at both federal and provincial levels in Canada:
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Federal Oversight</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li><strong>Financial Consumer Agency of Canada (FCAC):</strong> Provides consumer education and 
                  enforces federal consumer protection laws</li>
                  <li><strong>Criminal Code:</strong> Sets the maximum legal interest rate at 60% APR</li>
                  <li><strong>Privacy Laws:</strong> PIPEDA governs how personal information is collected and used</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Provincial Regulations</h3>
                <p className="text-gray-700 mb-4">
                  Each province and territory has its own financial services regulator and consumer protection laws:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg space-y-3 text-sm">
                  <p><strong>Ontario:</strong> FSRA (Financial Services Regulatory Authority)</p>
                  <p><strong>Quebec:</strong> OPC (Office de la protection du consommateur)</p>
                  <p><strong>British Columbia:</strong> BCFSA (BC Financial Services Authority)</p>
                  <p><strong>Alberta:</strong> Service Alberta - Consumer Protection</p>
                  <p><strong>Other Provinces:</strong> Contact your provincial consumer affairs office</p>
                </div>
                <p className="text-gray-700 mt-4">
                  <Link href="/ca/regions" className="text-blue-600 hover:text-blue-700 font-semibold">
                    View province-specific regulations →
                  </Link>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Credit Impact</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Credit Inquiries:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li><strong>Soft Inquiry:</strong> Initial applications often use soft credit checks that do NOT 
                  affect your credit score</li>
                  <li><strong>Hard Inquiry:</strong> When you proceed with a specific lender, they may perform a hard 
                  credit check that appears on your credit report and may temporarily lower your score</li>
                  <li><strong>Multiple Inquiries:</strong> Multiple loan applications within a short period may impact 
                  your credit score</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights as a Borrower</h2>
                <p className="text-gray-700 mb-4">
                  Under Canadian law, you have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li><strong>Full Disclosure:</strong> Receive complete information about loan terms, costs, and conditions 
                  before signing</li>
                  <li><strong>Cooling-Off Period:</strong> Cancel your loan within a specified period (varies by province, 
                  typically 2-14 days) without penalty</li>
                  <li><strong>Early Repayment:</strong> Pay off your loan early (some lenders may charge a small fee)</li>
                  <li><strong>Privacy Protection:</strong> Control how your personal information is used</li>
                  <li><strong>Fair Treatment:</strong> Protection against discriminatory lending practices</li>
                  <li><strong>Complaint Resolution:</strong> File complaints with provincial regulators</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsible Borrowing</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-4">
                  <p className="text-gray-900 font-semibold mb-2">⚠️ Important Considerations</p>
                  <p className="text-gray-700 mb-2">
                    Before taking out a personal loan:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Assess your ability to repay the loan on time</li>
                    <li>Understand all fees and charges</li>
                    <li>Compare offers from multiple lenders</li>
                    <li>Read all loan documents carefully</li>
                    <li>Consider alternatives to borrowing</li>
                    <li>Seek financial counseling if needed</li>
                  </ul>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Consequences of Default:</strong> Failure to repay a loan can result in:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Damage to your credit score</li>
                  <li>Collection actions</li>
                  <li>Additional fees and charges</li>
                  <li>Legal proceedings</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Resources and Support</h2>
                <p className="text-gray-700 mb-4">
                  If you need help or have questions:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">Financial Consumer Agency of Canada (FCAC)</p>
                    <p className="text-gray-700 text-sm">Website: <a href="https://www.canada.ca/fcac" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.canada.ca/fcac</a></p>
                    <p className="text-gray-700 text-sm">Phone: 1-866-461-3222</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Credit Counselling Canada</p>
                    <p className="text-gray-700 text-sm">Website: <a href="https://creditcounsellingcanada.ca" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">creditcounsellingcanada.ca</a></p>
                    <p className="text-gray-700 text-sm">Free, confidential debt and credit counseling</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Provincial Consumer Affairs</p>
                    <p className="text-gray-700 text-sm">Contact your provincial or territorial consumer affairs office 
                    for complaints about lenders or lending practices</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  For questions about these disclosures or our services:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> support@loansai.com
                  </p>
                  <p className="text-gray-700">
                    <strong>LoansAI Canada Customer Service</strong>
                  </p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-center">
                  <Link href="/ca" className="text-blue-600 hover:text-blue-700 font-semibold">
                    ← Back to Canada Home
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CanadaFooter />
    </>
  )
}
