import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import HowToApplySchema from '@/components/howto-schema'
import TransparencyBanner from '@/components/compliance/transparency-banner'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import ApplicationFormScript from '@/components/application-form-script'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { generatePageMetadata, usHubSEO } from '@/lib/seo'
import { CollectionPageSchema } from '@/components/seo/collection-page-schema'

export const metadata = generatePageMetadata(usHubSEO, '/us')

export default function UnitedStatesHubPage() {
  const metricsEvidence = (label = 'Source') => (
    <sup className="ml-1 text-blue-600">
      <a href="/docs/performance-metrics-2025" target="_blank" rel="noopener noreferrer">
        [{label}]
      </a>
    </sup>
  )

  const borrowerOutcomesEvidence = (label = 'Methodology') => (
    <sup className="ml-1 text-blue-600">
      <a href="/disclosures/borrower-outcomes" target="_blank" rel="noopener noreferrer">
        [{label}]
      </a>
    </sup>
  )

  return (
    <>
      <HowToApplySchema />
      <CollectionPageSchema
        name="Personal Loans in United States - All 50 States"
        description="Compare personal loan regulations, rates, and lenders across all 50 U.S. states. AI-powered matching with 100+ licensed lenders."
        url="https://loansai.com/us"
        breadcrumbs={[
          { name: 'Home', url: 'https://loansai.com' },
          { name: 'United States', url: 'https://loansai.com/us' },
        ]}
      />
      <Navigation />
      <main className="flex-1 bg-gray-50">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-b border-blue-100">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">United States program</p>
            <h1 className="mt-3 text-4xl font-bold text-blue-900 md:text-5xl">
              Smarter Personal Loan Comparisons for Every State
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-gray-700 md:text-xl">
              Review 2025 loan regulations, rate benchmarks, and lender availability across all 50 states.
              Jump directly into detailed state and city playbooks, or speak with our compliance-guided
              loan experts for tailored recommendations.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/us/states"
                className="group rounded-2xl border border-blue-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg"
              >
                <span className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-700">
                  🗽
                </span>
                <h2 className="text-xl font-semibold text-blue-900">State loan regulations</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Compare rate caps, maximum loan amounts, and compliance guidelines in every state.
                </p>
              </Link>
              <Link
                href="/us/cities"
                className="group rounded-2xl border border-blue-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg"
              >
                <span className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-700">
                  🌆
                </span>
                <h2 className="text-xl font-semibold text-blue-900">City intelligence</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Access localized lender mixes, cost-of-living adjustments, and borrower protections in 300+ metro areas.
                </p>
              </Link>
              <Link
                href="/us/disclosures"
                className="group rounded-2xl border border-blue-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg"
              >
                <span className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-700">
                  📜
                </span>
                <h2 className="text-xl font-semibold text-blue-900">Compliance & borrower rights</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Review TCPA consent language, state disclosures, and audit-ready documentation.
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16">
          <section className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-blue-900">How to use this hub</h2>
              <ol className="mt-4 space-y-4 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 rounded-full bg-blue-100 text-center text-sm font-semibold text-blue-700">1</span>
                  <span>Start with <strong>state regulations</strong> to understand borrower protections and APR thresholds.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 rounded-full bg-blue-100 text-center text-sm font-semibold text-blue-700">2</span>
                  <span>Drill into <strong>city profiles</strong> for lender availability, cost-of-living adjustments, and local incentives.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 rounded-full bg-blue-100 text-center text-sm font-semibold text-blue-700">3</span>
                  <span>Review <strong>compliance & disclosures</strong> to finalize borrower communications or marketing funnels.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 rounded-full bg-blue-100 text-center text-sm font-semibold text-blue-700">4</span>
                  <span>Use our AI chat in the corner for quick answers on rate trends, lender coverage, or documentation checklists.</span>
                </li>
              </ol>
            </div>
            <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-inner">
              <h2 className="text-xl font-semibold text-blue-900">Need to speak with a human?</h2>
              <p className="mt-2 text-sm text-blue-900/80">
                Lending guides are available 7 AM – 9 PM CT daily at <strong>(800) 562-6264</strong> or through our chat center.
              </p>
              <p className="mt-4 text-sm text-blue-900/70">
                Prefer email? Write to <a href="mailto:compliance@loan-platform.com" className="underline decoration-blue-400">compliance@loan-platform.com</a> for compliance escalations or <a href="mailto:info@loan-platform.com" className="underline decoration-blue-400">info@loan-platform.com</a> for general enquiries.
              </p>
              <Link
                href="/us/contact"
                className="mt-6 inline-flex items-center justify-center rounded-lg border border-blue-300 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white"
              >
                Open support center
              </Link>
            </div>
          </section>
        </div>

        <div className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-2xl font-semibold text-blue-900">Featured borrower guides</h2>
            <p className="mt-2 text-sm text-gray-600">
              Choose a fast path into our most visited resources for U.S. borrowers.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Link
                href="/us/ai-loan-matching"
                className="group rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <span className="text-lg font-semibold text-blue-900">AI-powered lender matching</span>
                <p className="mt-2 text-sm text-gray-600">
                  Understand how our scoring engine evaluates debt-to-income ratios and state-level underwriting rules.
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                  Explore the playbook
                  <span aria-hidden>→</span>
                </span>
              </Link>
              <Link
                href="/us/licenses"
                className="group rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <span className="text-lg font-semibold text-blue-900">Licensing & accreditation</span>
                <p className="mt-2 text-sm text-gray-600">
                  Review broker licensing, SOC 2 attestations, and RoundSky’s lead distribution safeguards.
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                  View the compliance log
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <TransparencyBanner />

        <section className="bg-white">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                Fast Personal Loans with AI-Powered Matching
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-4 font-medium">
                Get a 2-minute pre-qualification and rate check with our advanced AI platform. Compare
                offers from 100+ U.S. lenders through a soft credit pull that has no impact on your score.
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                Whether you need a debt consolidation loan, emergency cash, or home improvement financing,
                our AI technology matches you with the best lenders for your credit profile. Trusted by over
                2 million borrowers nationwide since 2020.{metricsEvidence()}
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base text-gray-600 mb-8">
                <span className="flex items-center gap-1" aria-label="Fast pre-qualification time">
                  <span className="text-2xl">⚡</span>
                  <strong>2-minute pre-qualification</strong>
                </span>
                <span className="flex items-center gap-1" aria-label="Loan amount range">
                  <span className="text-2xl">💰</span>
                  <strong>$1,000 - $100,000</strong>
                </span>
                <span className="flex items-center gap-1" aria-label="Credit score requirement">
                  <span className="text-2xl">📊</span>
                  <strong>All credit scores</strong>
                </span>
                <span className="flex items-center gap-1" aria-label="Security guarantee">
                  <span className="text-2xl">🔒</span>
                  <strong>Bank-level security</strong>
                </span>
                <span className="flex items-center gap-1" aria-label="Lender network">
                  <span className="text-2xl">🤝</span>
                  <strong>100+ lenders</strong>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              How Our AI-Powered Personal Loan Platform Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">1. Quick Application</h3>
                <p className="text-gray-700">
                  Complete our secure online application in just 2 minutes. Provide basic details about your
                  income, employment, and desired loan amount without any paperwork.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">2. AI Matching</h3>
                <p className="text-gray-700">
                  Our AI analyzes over 200 data points to match you with lenders most likely to approve your
                  profile, balancing APR, term length, and funding speed.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💵</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">3. Get Funded</h3>
                <p className="text-gray-700">
                  Review personalized offers, choose the best rate, and receive funds as soon as the next business
                  day once final verification is complete.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
              Why Choose Loan AI Portal for Your Personal Loan?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <article className="feature-card">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <span aria-hidden="true" className="text-3xl">⚡</span>
                      Quick Application Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Complete your personal loan application in just 2 minutes with our streamlined process.
                      Receive pre-qualification offers from multiple lenders simultaneously with a soft credit pull.
                    </p>
                    <Link href="/apply">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700" aria-describedby="apply-now-desc">
                        Apply Now - Free
                      </Button>
                    </Link>
                    <LeadGenDisclosure className="mt-2" />
                    <p id="apply-now-desc" className="sr-only">
                      Start your personal loan application process
                    </p>
                  </CardContent>
                </Card>
              </article>

              <article className="feature-card">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <span aria-hidden="true" className="text-3xl">🤖</span>
                      AI-Powered Loan Matching
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Our proprietary AI technology analyzes over 200 data points to match you with the best loan offers,
                      improving approval odds and helping you secure better rates.
                    </p>
                    <Link href="/ai-loan-matching">
                      <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                        Learn About Our AI
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </article>

              <article className="feature-card">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <span aria-hidden="true" className="text-3xl">🗺️</span>
                      State-Specific Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Access comprehensive loan requirements, interest rate regulations, and available lenders specific
                      to your state. See loan limits, APR ranges, and consumer protections for all 50 states.
                    </p>
                    <Link href="/us/states">
                      <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                        Browse States
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container mx-auto px-4 pb-16">
            <div className="application-section max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">
                Check Your Personal Loan Rates in 2 Minutes
              </h2>
              <p className="text-center text-gray-700 mb-4 max-w-3xl mx-auto text-lg">
                Get matched with the best personal loan offers from our network of 100+ trusted U.S. lenders.
                <strong> No impact to your credit score</strong> to check your rate.
              </p>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Whether you need a debt consolidation loan, emergency funds, home improvement financing, or cash for any
                purpose, our AI finds your best options. Funds available as soon as the next business day after approval.
              </p>
              <ApplicationFormScript />
              <p className="mt-4 text-xs text-gray-500 text-center max-w-3xl mx-auto">
                Loan AI Portal securely routes your request through{' '}
                <a
                  href="https://www.roundsky.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  RoundSky
                </a>
                , our lead distribution technology partner. This processing is covered by our{' '}
                <Link href="/privacy#roundsky-data-processing" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Data Processing Agreement (DPA)
                </Link>
                , which sets the data protection obligations RoundSky must follow.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container mx-auto px-4 pb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Types of Personal Loans Available</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">💳 Debt Consolidation Loans</h3>
                <p className="text-gray-600 text-sm">
                  Combine multiple high-interest debts into one lower-rate payment. Save money on interest and simplify
                  your finances. Typical APRs: 6.99% - 24.99%.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">🏠 Home Improvement Loans</h3>
                <p className="text-gray-600 text-sm">
                  Finance renovations, repairs, or upgrades without tapping home equity. Loan amounts up to $100,000. No
                  collateral required for qualified borrowers.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">🚨 Emergency Loans</h3>
                <p className="text-gray-600 text-sm">
                  Fast funding for unexpected expenses like medical bills, car repairs, or urgent needs. Same-day
                  decisions are available with participating lenders.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">🏥 Medical Expense Loans</h3>
                <p className="text-gray-600 text-sm">
                  Cover healthcare costs, dental procedures, or medical treatments. Flexible payment terms from 12-84
                  months. No upfront fees or hidden charges.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">💍 Wedding & Event Loans</h3>
                <p className="text-gray-600 text-sm">
                  Finance your special day without draining savings. Competitive rates for qualified borrowers. Loans from
                  $3,000 to $50,000.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">🎓 Education & Training Loans</h3>
                <p className="text-gray-600 text-sm">
                  Fund courses, certifications, or career development. Invest in your future with flexible repayment
                  options. All credit types considered.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container mx-auto px-4 pb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Why Borrowers Trust Loan AI Portal</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="benefit-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="font-semibold text-lg mb-2 text-blue-800">Top-Rated Service</h3>
                <p className="text-sm text-gray-600">
                  4.8 out of 5 stars from over 10,000 verified customer reviews. Highest satisfaction ratings in the
                  industry.{metricsEvidence()}
                  {borrowerOutcomesEvidence()}
                </p>
              </div>
              <div className="benefit-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">💨</div>
                <h3 className="font-semibold text-lg mb-2 text-blue-800">Lightning Fast Pre-Qualification</h3>
                <p className="text-sm text-gray-600">
                  Get a 2-minute pre-qualification and rate check with our AI technology. No waiting days for initial
                  decisions.
                </p>
              </div>
              <div className="benefit-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="font-semibold text-lg mb-2 text-blue-800">Secure & Private</h3>
                <p className="text-sm text-gray-600">
                  Bank-level 256-bit SSL encryption protects your personal and financial data at all times.
                </p>
              </div>
              <div className="benefit-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="font-semibold text-lg mb-2 text-blue-800">Competitive Rates</h3>
                <p className="text-sm text-gray-600">
                  APRs as low as 5.99% for qualified borrowers with excellent credit. Compare offers from 100+ lenders.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">Personal Loans for Every Credit Score</h2>
            <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
              Our lender network serves borrowers across the entire credit spectrum. Whether you have excellent, good,
              fair, or poor credit, we have lending partners ready to work with you.
            </p>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">Excellent</div>
                <div className="text-sm text-gray-600 mb-3">720+ Credit Score</div>
                <p className="text-sm text-gray-700">
                  Best rates: <strong>5.99% - 10.99% APR</strong>
                  <br /> Highest approval rates
                  <br /> Largest loan amounts
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">Good</div>
                <div className="text-sm text-gray-600 mb-3">660-719 Credit Score</div>
                <p className="text-sm text-gray-700">
                  Rates: <strong>10.99% - 18.99% APR</strong>
                  <br /> High approval rates
                  <br /> Flexible terms
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-yellow-600 mb-2">Fair</div>
                <div className="text-sm text-gray-600 mb-3">600-659 Credit Score</div>
                <p className="text-sm text-gray-700">
                  Rates: <strong>18.99% - 28.99% APR</strong>
                  <br /> Good approval chances
                  <br /> Various loan options
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-orange-600 mb-2">Poor</div>
                <div className="text-sm text-gray-600 mb-3">Below 600 Credit Score</div>
                <p className="text-sm text-gray-700">
                  Rates: <strong>28.99% - 35.99% APR</strong>
                  <br /> Specialized lenders
                  <br /> Credit building options
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl text-center text-blue-900 mb-8">Personal Loan Questions &amp; Answers</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Get instant answers to the most common questions about personal loans, interest rates, approval requirements, and our AI matching process.
            </p>
            <div className="max-w-4xl mx-auto space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  What credit score do I need to qualify for a personal loan?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  We work with lenders across the entire credit spectrum. While some lenders require scores of 720+, others
                  approve borrowers with scores as low as 580. Our AI matches you with lenders whose approval criteria
                  align with your credit profile, maximizing your chances regardless of your score.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  How does your AI loan matching technology increase my approval chances?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Our proprietary AI analyzes over 200 data points including your credit score, income, employment history,
                  debt-to-income ratio, and even seasonal lending trends. This results in a 73% higher approval rate compared
                  to manual applications and helps you get better interest rates.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  What are the typical interest rates for personal loans?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Interest rates typically range from 5.99% to 35.99% APR depending on your creditworthiness. Excellent
                  credit (720+) typically qualifies for rates between 5.99%-10.99%. Good credit (660-719) sees rates of
                  10.99%-18.99%. Fair credit (600-659) ranges from 18.99%-28.99%. Lower credit scores may see rates up to
                  35.99%.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Can I get a personal loan if I'm self-employed or have irregular income?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Yes! Our network includes lenders who specialize in working with self-employed individuals, freelancers,
                  gig workers, and those with irregular income. Approval is definitely possible with alternative
                  documentation.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  How quickly can I receive my loan funds after approval?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Funding timelines vary by lender. Some offer same-day funding for approvals completed before banking
                  cut-off times. Most provide next business day funding via direct deposit once verification is complete.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Are there any fees to use your loan matching service?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Our service is 100% free for borrowers. Individual lenders may charge origination or late fees; all fees
                  are disclosed before you accept any offer.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  What documents will I need to provide for a personal loan application?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Initial matching requires only basic information. If you proceed with a lender, you'll typically need ID,
                  proof of income, proof of address, Social Security Number, and checking account details. Self-employed
                  borrowers may need additional documentation.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Can a personal loan help improve my credit score?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Personal loans can improve your credit mix, reduce credit card utilization when consolidating debt, and
                  build positive payment history. Many borrowers see 20-50 point increases after consistent payments.
                </p>
              </details>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/faq"
                className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All 40+ FAQ Questions
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
