import type { Metadata } from 'next'
import Link from 'next/link'
import NewZealandNavigation from '@/components/newzealand/newzealand-navigation'
import NewZealandFooter from '@/components/newzealand/newzealand-footer'

export const metadata: Metadata = {
  title: 'Disclosures & Compliance – LoansAI New Zealand',
  description: 'Important disclosures about LoansAI New Zealand loan comparison service, affiliate relationships, and regulatory compliance.',
  alternates: {
    canonical: 'https://loansai.com/nz/disclosures',
  },
}

export default function DisclosuresPage() {
  return (
    <>
      <NewZealandNavigation />

      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-gray-600 mb-6">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">›</span>
              <Link href="/nz" className="hover:text-blue-600">New Zealand</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-900">Disclosures & Compliance</span>
            </nav>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">Disclosures & Compliance</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Nature of Service</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                  <p className="text-gray-700">
                    <strong>LoansAI is a comparison platform, not a lender.</strong> We connect borrowers 
                    with licensed lenders in New Zealand. We do not make lending decisions, provide credit 
                    advice, or guarantee loan approval. All lending decisions are made by individual lenders 
                    based on their own criteria and CCCFA responsible lending obligations.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Affiliate Relationships</h2>
                <p className="text-gray-700 mb-4">
                  LoansAI operates as an affiliate marketing platform. We receive compensation from lenders 
                  when borrowers successfully obtain loans through our service. This compensation:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Does not affect the terms of any loan you may receive</li>
                  <li>Does not increase the cost of your loan</li>
                  <li>Allows us to provide our comparison service free of charge to borrowers</li>
                  <li>Does not influence the objectivity of our comparisons</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Representative Example</h2>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4">
                  <p className="text-gray-700 mb-3">
                    <strong>Example Loan:</strong> NZ$10,000 borrowed over 12 months
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Interest rate: 10% per annum</li>
                    <li>• Monthly payment: approximately NZ$879</li>
                    <li>• Total amount repayable: approximately NZ$10,550</li>
                    <li>• Total interest: approximately NZ$550</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-4">
                    <strong>Important:</strong> Interest rates and fees vary significantly between lenders 
                    and depend on your individual circumstances, credit profile, and loan amount. Rates can 
                    range from 5% to 50% or higher. Always review the full loan disclosure from your lender 
                    before accepting any loan offer.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Compliance</h2>
                <p className="text-gray-700 mb-4">
                  LoansAI and all lenders in our network comply with:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li><strong>Credit Contracts and Consumer Finance Act 2003 (CCCFA):</strong> All lenders 
                  must follow responsible lending principles, including affordability assessments</li>
                  <li><strong>Financial Markets Authority (FMA) regulations:</strong> All lenders must be 
                  registered with the Financial Service Providers Register</li>
                  <li><strong>Privacy Act 2020:</strong> Protection of your personal information</li>
                  <li><strong>Fair Trading Act 1986:</strong> Prevention of misleading conduct</li>
                  <li><strong>Consumer Guarantees Act 1993:</strong> Consumer protection standards</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsible Lending</h2>
                <p className="text-gray-700 mb-4">
                  Under the CCCFA, all lenders must:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Assess your ability to repay without suffering substantial hardship</li>
                  <li>Make reasonable inquiries about your financial situation</li>
                  <li>Consider your income, expenses, and existing debt obligations</li>
                  <li>Provide clear disclosure of all loan costs before you sign</li>
                  <li>Offer hardship assistance if your circumstances change</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Responsibilities</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
                  <h3 className="font-bold text-gray-900 mb-2">Your Rights:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    <li>Request full loan disclosure before signing</li>
                    <li>Cancel within cooling-off period (if applicable)</li>
                    <li>Request hardship assistance if circumstances change</li>
                    <li>Complain to lender, then Banking Ombudsman or FMA</li>
                    <li>Access your personal information held by lenders</li>
                  </ul>
                  
                  <h3 className="font-bold text-gray-900 mb-2 mt-4">Your Responsibilities:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Provide accurate and complete information</li>
                    <li>Borrow only what you can afford to repay</li>
                    <li>Make payments on time</li>
                    <li>Notify lender if you experience financial difficulty</li>
                    <li>Read and understand all loan terms before signing</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Credit Reporting</h2>
                <p className="text-gray-700 mb-4">
                  Lenders may report your loan information to credit reporting agencies. This can affect 
                  your credit score. Submitting an inquiry through LoansAI may result in a soft credit check 
                  that does not affect your score, but formal loan applications typically involve hard credit 
                  checks that may impact your credit rating.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Resources</h2>
                <div className="space-y-3">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-1">Financial Markets Authority (FMA)</h3>
                    <a 
                      href="https://www.fma.govt.nz" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      www.fma.govt.nz
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      New Zealand's financial regulator
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-1">Banking Ombudsman</h3>
                    <a 
                      href="https://www.bankomb.org.nz" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      www.bankomb.org.nz
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Free dispute resolution service
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-1">Consumer Protection</h3>
                    <a 
                      href="https://www.consumerprotection.govt.nz" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      www.consumerprotection.govt.nz
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Consumer rights and protections
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-1">Financial Service Providers Register</h3>
                    <a 
                      href="https://www.companiesoffice.govt.nz/fspr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      www.companiesoffice.govt.nz/fspr
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Verify lender registration
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  For questions about these disclosures or our service:
                </p>
                <div className="bg-blue-50 rounded-lg p-4 text-gray-700">
                  <p><strong>Email:</strong> compliance@loansai.com</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <NewZealandFooter />
    </>
  )
}
