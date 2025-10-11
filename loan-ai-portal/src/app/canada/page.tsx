import Link from 'next/link'
import { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { canadianProvinces } from '@/data/canada-provinces'

export const metadata: Metadata = {
  title: 'Personal Loans in Canada – Compare Lenders 2025',
  description: 'Find personal loans across Canada. Compare rates from 100+ Canadian lenders. Fast approval, competitive rates, all provinces covered. English and French service available.',
  keywords: 'personal loans Canada, Canadian lenders, loans Ontario, loans Quebec, loans BC, prêts personnels',
  alternates: {
    canonical: 'https://loan-platform.com/canada',
    languages: {
      en: 'https://loan-platform.com/canada',
      fr: 'https://loan-platform.com/fr/canada',
    },
  },
}

export default function CanadaHubPage() {
  // Group provinces by region
  const centralProvinces = canadianProvinces.filter(p => p.region === 'Central')
  const westProvinces = canadianProvinces.filter(p => p.region === 'West Coast' || p.region === 'Prairie')
  const atlanticProvinces = canadianProvinces.filter(p => p.region === 'Atlantic')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FinancialService',
            name: 'Loan AI Portal Canada',
            description: 'Personal loan comparison and matching service for Canadian residents',
            url: 'https://loan-platform.com/canada',
            areaServed: {
              '@type': 'Country',
              name: 'Canada',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Personal Loans in Canada',
              itemListElement: canadianProvinces.map((province, index) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'LoanOrCredit',
                  name: `Personal Loans in ${province.name}`,
                  description: province.description,
                },
                position: index + 1,
              })),
            },
          }),
        }}
      />

      <Navigation locale="en" />
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-red-50 to-red-100 border-b border-red-100">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="flex justify-between items-start mb-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-red-700">🍁 Canada Program</p>
              <Link
                href="/fr/canada"
                className="text-sm font-semibold text-red-700 hover:text-red-900 underline"
              >
                Français →
              </Link>
            </div>
            <h1 className="mt-3 text-4xl font-bold text-red-900 md:text-5xl">
              Personal Loans Across Canada – Compare & Apply
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-gray-700 md:text-xl">
              Connect with 100+ licensed Canadian lenders. Compare personal loan rates, understand
              provincial regulations, and find the best loan options for your needs. Service available
              in English and French across all provinces and territories.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/canada/provinces"
                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
              >
                Browse All Provinces
              </Link>
              <Link
                href="/canada/apply"
                className="inline-flex items-center justify-center rounded-lg border-2 border-red-600 px-6 py-3 font-semibold text-red-700 transition hover:bg-red-50"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/canada/provinces"
              className="group rounded-2xl border border-red-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-400 hover:shadow-lg"
            >
              <span className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-2xl text-red-700">
                🏛️
              </span>
              <h2 className="text-xl font-semibold text-red-900">Provincial Regulations</h2>
              <p className="mt-2 text-sm text-gray-600">
                View lending laws, rate caps, and borrower protections in each province and territory.
              </p>
            </Link>

            <Link
              href="/canada/apply"
              className="group rounded-2xl border border-red-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-400 hover:shadow-lg"
            >
              <span className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-2xl text-red-700">
                📝
              </span>
              <h2 className="text-xl font-semibold text-red-900">Apply for a Loan</h2>
              <p className="mt-2 text-sm text-gray-600">
                Complete a quick application and get matched with Canadian lenders in minutes.
              </p>
            </Link>

            <Link
              href="/fr/canada"
              className="group rounded-2xl border border-red-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-400 hover:shadow-lg"
            >
              <span className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-2xl text-red-700">
                🇨🇦
              </span>
              <h2 className="text-xl font-semibold text-red-900">Service en Français</h2>
              <p className="mt-2 text-sm text-gray-600">
                Accédez à tous nos services en français avec un contenu localisé pour le Québec.
              </p>
            </Link>
          </div>
        </div>

        {/* Provinces by Region */}
        <div className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold text-red-900 mb-8">Explore Provinces & Territories</h2>

            {/* Central Canada */}
            <section className="mb-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span>Central Canada</span>
                <span className="text-sm font-normal text-gray-500">(Ontario, Quebec)</span>
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {centralProvinces.map(province => (
                  <Link
                    key={province.slug}
                    href={`/canada/provinces/${province.slug}`}
                    className="rounded-lg border border-gray-200 p-5 transition hover:border-red-300 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-red-900">{province.name}</h4>
                        <p className="mt-1 text-sm text-gray-600">{province.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2 text-xs">
                          <span className="rounded-full bg-red-50 px-2 py-1 text-red-700">
                            Pop: {province.population}
                          </span>
                          <span className="rounded-full bg-red-50 px-2 py-1 text-red-700">
                            Avg: {province.avgLoanAmount}
                          </span>
                        </div>
                      </div>
                      <span className="text-2xl">{province.abbreviation === 'QC' ? '⚜️' : '🍁'}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Western Canada */}
            <section className="mb-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span>Western Canada</span>
                <span className="text-sm font-normal text-gray-500">(BC, AB, SK, MB)</span>
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {westProvinces.map(province => (
                  <Link
                    key={province.slug}
                    href={`/canada/provinces/${province.slug}`}
                    className="rounded-lg border border-gray-200 p-4 transition hover:border-red-300 hover:shadow-md"
                  >
                    <h4 className="font-semibold text-red-900">{province.name}</h4>
                    <p className="mt-1 text-xs text-gray-600">{province.abbreviation}</p>
                    <div className="mt-2 text-xs text-gray-500">
                      Avg: {province.avgLoanAmount}
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Atlantic Canada */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span>Atlantic Canada</span>
                <span className="text-sm font-normal text-gray-500">(NS, NB, NL, PE)</span>
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {atlanticProvinces.map(province => (
                  <Link
                    key={province.slug}
                    href={`/canada/provinces/${province.slug}`}
                    className="rounded-lg border border-gray-200 p-4 transition hover:border-red-300 hover:shadow-md"
                  >
                    <h4 className="font-semibold text-red-900">{province.name}</h4>
                    <p className="mt-1 text-xs text-gray-600">{province.abbreviation}</p>
                    <div className="mt-2 text-xs text-gray-500">
                      Avg: {province.avgLoanAmount}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold text-red-900 mb-8 text-center">
              How Canadian Loan Matching Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">1. Complete Application</h3>
                <p className="text-gray-700">
                  Fill out our secure online form in 2-3 minutes. Available in English and French.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">2. AI Matching</h3>
                <p className="text-gray-700">
                  Our system matches you with licensed Canadian lenders based on your profile and province.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💵</div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">3. Get Funded</h3>
                <p className="text-gray-700">
                  Compare offers, choose the best rate, and receive funds quickly upon approval.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16">
            <h2 className="text-3xl font-bold text-red-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  What are the typical interest rates for personal loans in Canada?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Personal loan interest rates in Canada typically range from 6.99% to 46.96% APR, depending
                  on your credit score, income, and province of residence. Prime borrowers with excellent
                  credit (750+) can qualify for rates as low as 6.99%-12%, while those with fair credit may
                  see rates between 15%-30%. Provincial regulations cap maximum rates to protect consumers.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  How do provincial regulations affect personal loans in Canada?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Each Canadian province has its own consumer protection laws governing personal loans. These
                  regulations set maximum interest rates, payday loan caps, mandatory disclosure requirements,
                  and cooling-off periods. For example, Ontario caps payday loans at $15 per $100 borrowed,
                  while Quebec requires all loan documents in French. Understanding your province's rules helps
                  ensure you're protected as a borrower.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  Can I get a personal loan in Canada with bad credit?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Yes, many Canadian lenders specialize in working with borrowers who have less-than-perfect
                  credit. While you may face higher interest rates, options are available for credit scores as
                  low as 550. Alternative lenders, credit unions, and online platforms offer flexible approval
                  criteria. Our AI matching system connects you with lenders most likely to approve your
                  application regardless of credit history.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  Are loan services available in French?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Absolutely. Our entire platform is available in French at /fr/canada, and we work with
                  lenders who provide full French-language service. This is especially important in Quebec,
                  where consumer protection law requires all loan documentation to be provided in French.
                  Bilingual support is also available in New Brunswick and other regions with significant
                  francophone populations.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  How quickly can I receive loan funds in Canada?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Funding timelines vary by lender and province. Some online lenders offer same-day funding if
                  you're approved before their cutoff time (typically 2-3 PM local time). Most lenders provide
                  funding within 1-3 business days via direct deposit. Traditional banks and credit unions may
                  take 3-7 business days. Emergency loans and payday loans can often be funded within hours of
                  approval.
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Perfect Loan in Canada?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Join thousands of Canadians who have found better loan rates through our platform.
            </p>
            <Link
              href="/canada/apply"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors shadow-lg"
            >
              Get Started Now – Free
            </Link>
            <p className="mt-4 text-sm text-red-100">
              Service available in English and French • No impact on credit score • 100% secure
            </p>
          </div>
        </div>

        {/* Disclosure */}
        <div className="bg-gray-100 border-t border-gray-200">
          <div className="mx-auto max-w-6xl px-4 py-8">
            <div className="text-sm text-gray-600 space-y-2">
              <p className="font-semibold text-gray-900">Affiliate Disclosure:</p>
              <p>
                Loan AI Portal is a lead generator and comparison service, not a lender. We connect borrowers
                with licensed Canadian lending partners and may receive compensation when you complete an
                application or are matched with a lender. This compensation does not affect the rates or terms
                you receive. All lenders operate under applicable provincial and federal regulations.
              </p>
              <p className="font-semibold text-gray-900 mt-4">Representative Example:</p>
              <p>
                A $10,000 personal loan with a 3-year term at 12% APR would result in 36 monthly payments of
                $332.14, for a total repayment amount of $11,957.04 (total interest: $1,957.04). Actual rates
                and terms vary by lender, credit profile, and province. APRs may range from 6.99% to 46.96%.
              </p>
            </div>
          </div>
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
