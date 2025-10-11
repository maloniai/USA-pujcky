'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'

export default function AboutUsPage() {
  const contactEmail = 'maloni@outlook.com'
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
      <BreadcrumbSchema config="about" />
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 text-center">
            About Loan AI Portal
          </h1>
          <p className="text-2xl text-gray-700 text-center mb-6 max-w-4xl mx-auto">
            America's Leading AI-Powered Personal Loan Matching Platform
          </p>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            We help millions of Americans find the best and most affordable personal loans 
            through our advanced artificial intelligence technology. Fast, simple, and trusted 
            by borrowers nationwide.{' '}
            {metricsEvidence()}
          </p>
        </div>
      </div>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
              <p className="text-sm uppercase tracking-widest text-blue-100 mb-2">Leadership</p>
              <h2 className="text-3xl font-bold">Rostislav Sikora</h2>
              <p className="mt-4 text-blue-100 text-lg leading-relaxed">
                AI Search &amp; Lending Expert • 25 years in banking • Specialization: online consumer lending
              </p>
            </div>
            <div className="md:col-span-2 space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                I’m a hands-on leader with 25 years of experience in banking and consumer finance. I help companies
                design, launch, and scale online lending across markets—from licensing and compliance to scoring,
                antifraud, P&amp;L ownership, and collections.
              </p>
              <p>
                Over the last 20 years, the companies I built or led have issued loans to more than 2,000,000 people,
                totaling $5B in originations and achieving an average customer rating of 4.8 out of 5.{' '}
                {metricsEvidence()}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Key Milestones</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="border-l-4 border-blue-600 pl-4">
                  <p className="font-semibold">Multitude (Ferratum) – 15 years</p>
                  <p className="text-sm leading-relaxed">
                    Among the first to roll out micro-loans in Europe; scaled from a small company to a multinational
                    presence in 25 countries, culminating in a Frankfurt Stock Exchange listing.
                  </p>
                </li>
                <li className="border-l-4 border-blue-600 pl-4">
                  <p className="font-semibold">Nigeria – Full Digital Transformation</p>
                  <p className="text-sm leading-relaxed">
                    Led the shift from an old-school banking model to a fully online bank, modernizing the entire credit
                    lifecycle.
                  </p>
                </li>
                <li className="border-l-4 border-blue-600 pl-4">
                  <p className="font-semibold">Confindo.com – 3 years</p>
                  <p className="text-sm leading-relaxed">
                    Built and scaled online loan comparison platforms with performance-driven acquisition models.
                  </p>
                </li>
                <li className="border-l-4 border-blue-600 pl-4">
                  <p className="font-semibold">MoneeTech (UK) – Recent Launch</p>
                  <p className="text-sm leading-relaxed">
                    Launched and scaled online lending in the UK in under 12 months with full go-to-market execution.
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">How I Can Help</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Go-to-market for online lending: licensing, compliance, pricing, risk, underwriting, collections.</li>
                <li>• International scaling: local regulation, product localization, and operating model setup.</li>
                <li>• AI in credit: scoring, antifraud, marketing attribution, AI-search powered recommendations.</li>
                <li>• Partnerships &amp; affiliate channels: comparison sites, white-label integrations, performance KPIs.</li>
                <li>• P&amp;L accountability: end-to-end ownership from acquisition to collections with profitability focus.</li>
              </ul>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-900 text-white p-6 rounded-xl text-center shadow-md">
              <div className="text-3xl font-bold">25+</div>
              <p className="mt-2 text-sm uppercase tracking-wide">Years in banking &amp; fintech</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-md border border-blue-100">
              <div className="text-3xl font-bold text-blue-900">
                2,000,000+{metricsEvidence()}
              </div>
              <p className="mt-2 text-sm uppercase tracking-wide text-gray-600">Customers served</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-md border border-blue-100">
              <div className="text-3xl font-bold text-blue-900">
                $5B+{metricsEvidence()}
              </div>
              <p className="mt-2 text-sm uppercase tracking-wide text-gray-600">Total loan volume</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center shadow-md">
              <div className="text-3xl font-bold text-blue-900">
                4.8 / 5{metricsEvidence()}
              </div>
              <p className="mt-2 text-sm uppercase tracking-wide text-gray-600">Average rating</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Links</h3>
              <ul className="space-y-3 text-blue-700">
                <li>
                  <a href="https://www.linkedin.com/in/rostislav-sikora" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    LinkedIn: Rostislav Sikora
                  </a>
                </li>
                <li>
                  <a href="https://www.confindo.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Project: Confindo.com
                  </a>
                </li>
                <li>
                  <a href="https://www.moneetech.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Project: MoneeTech.com
                  </a>
                </li>
                <li>
                  <a href="https://www.multitude.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Project: Multitude.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-blue-900 text-white rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-3">Contact</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                Interested in an audit of your current model, expansion into a new market, or launching online lending
                from scratch? Let’s schedule a short consultation.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${contactEmail}`}
                  className="bg-white text-blue-900 font-semibold px-5 py-3 rounded-lg shadow-sm hover:bg-blue-100 transition"
                >
                  Email {contactEmail}
                </a>
                <Link
                  href="/contact"
                  className="border border-blue-200 text-white px-5 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition"
                >
                  Book a consultation
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Legal &amp; Billing</h3>
            <p className="text-blue-100 leading-relaxed">
              Service provider: Maloni • Registered address: Rybná 716/24, Staré Město, 110 00 Prague 1, Czech Republic •
              Company ID (IČO): 27207617
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Compliance &amp; Oversight</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We align every borrower journey with CFPB supervision guidance and the FTC&apos;s Truth in Lending Act requirements to
                ensure APR and fee disclosures stay accurate and fair.
                <sup className="ml-1 text-blue-600">
                  <a href="https://files.consumerfinance.gov/f/documents/cfpb_supervision-and-examination-manual.pdf" target="_blank" rel="noopener noreferrer">[1]</a>
                  <span className="ml-1" />
                  <a href="https://www.ftc.gov/legal-library/browse/rules/truth-lending-act" target="_blank" rel="noopener noreferrer">[2]</a>
                </sup>
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mt-3">
                All lenders we match are verified in NMLS Consumer Access and maintain active state lending licenses before any volume is routed their way.
                <sup className="ml-1 text-blue-600">
                  <a href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener noreferrer">[3]</a>
                </sup>
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Lender &amp; Data Partnerships</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Strategic partnerships with acquisition networks like RoundSky keep marketing compliant while delivering pre-qualified, high-intent borrower demand to licensed lenders nationwide.
                <sup className="ml-1 text-blue-600">
                  <a href="https://roundsky.com/" target="_blank" rel="noopener noreferrer">[4]</a>
                </sup>
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mt-3">
                Rostislav Sikora&apos;s leadership roles with Multitude Bank p.l.c. and Confindo provide decades of underwriting, AML, and fair-lending guardrails that inform Loan AI Portal&apos;s decisioning models.
                <sup className="ml-1 text-blue-600">
                  <a href="https://www.multitude.com/" target="_blank" rel="noopener noreferrer">[5]</a>
                  <span className="ml-1" />
                  <a href="https://www.confindo.com/" target="_blank" rel="noopener noreferrer">[6]</a>
                </sup>
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Documented Customer Outcomes</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Outcome metrics—2M borrowers matched, $3,500+ average savings, 4.8★ satisfaction—are sourced from anonymized lending cohort data validated by our annual Borrower Outcomes report.{' '}
                {metricsEvidence()}
              </p>
              <p className="text-sm mt-3">
                <Link href="/disclosures/borrower-outcomes" className="text-blue-700 hover:underline font-semibold">
                  Review the 2025 Borrower Outcomes methodology ↗
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Our Mission Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
              Our Mission: Making Personal Loans Simple and Affordable
            </h2>
            
            <div className="bg-white p-10 rounded-lg shadow-md mb-8">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                At Loan AI Portal, our mission is to revolutionize how Americans access personal 
                loans. We believe that finding the right loan shouldn't be complicated, time-consuming, 
                or expensive. That's why we built the nation's most advanced AI-powered loan matching 
                platform to help borrowers instantly find the best and cheapest online loans available.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Since our founding, we've helped over 2 million Americans secure affordable personal 
                loans, saving them an average of $3,500 in interest and fees. Our commitment is to 
                transparency, speed, and finding you the lowest rates possible from our network of 
                over 100 trusted lenders.{' '}
                {metricsEvidence()}
                {borrowerOutcomesEvidence()}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  To be America's most trusted destination for fast, affordable personal loans, 
                  empowering every borrower with AI technology and transparent pricing.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Our Values</h3>
                <p className="text-gray-700">
                  Transparency, innovation, customer-first service, and a relentless focus on 
                  helping borrowers save money and achieve their financial goals.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Our Promise</h3>
                <p className="text-gray-700">
                  We promise to match you with the best loan offers in under 60 seconds, with 
                  no hidden fees, no pressure, and 100% free service forever.
                </p>
              </div>
            </div>
          </section>

          {/* Who We Are Section */}
          <section className="mb-20 bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-lg">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
              Who We Are: The Biggest AI-Powered Loan Platform in America
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Loan AI Portal is the largest and most advanced AI-powered personal loan matching 
                platform in the United States. We've revolutionized the personal loan industry by 
                combining cutting-edge artificial intelligence technology with the largest network 
                of trusted lenders to help borrowers find the best and cheapest loans available online.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                What sets us apart is our proprietary AI matching algorithm that analyzes over 50 
                financial data points in real-time to instantly match borrowers with the most 
                competitive loan offers from our network of 100+ licensed lenders. Unlike traditional 
                loan comparison sites that simply list lenders, our AI actually predicts which lenders 
                are most likely to approve your application and offer you the lowest rates.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We serve all 50 states, have processed over $5 billion in loan applications, and 
                maintain a 4.8/5 satisfaction rating validated by quarterly borrower outcome reviews.{' '}
                {metricsEvidence()}{borrowerOutcomesEvidence()}
                Our platform is trusted by millions of Americans who need fast, affordable personal loans for debt 
                consolidation, home improvements, medical expenses, major purchases, and more.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                As the biggest player in the AI loan matching space, we've partnered with the nation's 
                top lenders including banks, credit unions, and online lenders to ensure you have access 
                to the widest selection of loan products with the most competitive rates and terms.
              </p>
            </div>
          </section>

          {/* What We Do Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
              What We Do: Helping You Find the Best and Cheapest Online Loans
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg border-2 border-blue-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                  <span className="text-3xl mr-3">🤖</span>
                  AI-Powered Loan Matching
                </h3>
                <p className="text-gray-700 mb-4">
                  Our advanced artificial intelligence analyzes your complete financial profile—credit 
                  score, income, debts, employment, and more—to instantly match you with lenders most 
                  likely to approve your application and offer the lowest rates.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 50+ data points analyzed in seconds</li>
                  <li>
                    • Documented 72% of matched borrowers receive a conditional approval within 24 hours
                    {borrowerOutcomesEvidence()}
                  </li>
                  <li>• Real-time rate comparisons</li>
                  <li>• Smart lender recommendations</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg border-2 border-purple-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                  <span className="text-3xl mr-3">💰</span>
                  Finding the Cheapest Loans
                </h3>
                <p className="text-gray-700 mb-4">
                  We compare rates, fees, and terms from 100+ lenders simultaneously to ensure you 
                  get the absolute best deal available. Our AI identifies hidden savings opportunities 
                  that traditional comparison shopping misses.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Compare 100+ lenders instantly</li>
                  <li>• Identify lowest APR available</li>
                  <li>• Spot hidden fees and costs</li>
                  <li>
                    • Median borrowers save $3,500+ versus national APR benchmarks
                    {borrowerOutcomesEvidence()}
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg border-2 border-green-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                  <span className="text-3xl mr-3">⚡</span>
                  Fast Application Process
                </h3>
                <p className="text-gray-700 mb-4">
                  Time is money. Our streamlined 2-minute application gets you matched with pre-qualified 
                  offers in under 60 seconds. Most borrowers receive approval within 24 hours and funding 
                  in 1-3 business days.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 2-minute application</li>
                  <li>• 60-second matching</li>
                  <li>
                    • 72% of matched borrowers receive at least one conditional approval within 24 hours
                    {borrowerOutcomesEvidence()}
                  </li>
                  <li>• 1-3 day funding</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg border-2 border-orange-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                  <span className="text-3xl mr-3">🔒</span>
                  Secure & Trustworthy
                </h3>
                <p className="text-gray-700 mb-4">
                  Your security and privacy are our top priorities. We use bank-level 256-bit encryption, 
                  never sell your data, and only connect you with licensed, reputable lenders who meet 
                  our strict quality standards.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bank-level encryption</li>
                  <li>• Licensed lenders only</li>
                  <li>• No data selling ever</li>
                  <li>• Verified customer reviews</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-900 text-white p-10 rounded-lg text-center">
              <h3 className="text-3xl font-bold mb-4">
                $5 Billion+ in Loans Processed {metricsEvidence()}
              </h3>
              <p className="text-xl mb-6">
                Join over 2 million Americans who have found their perfect loan through our platform {metricsEvidence()}
              </p>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="text-4xl font-bold">2M+{metricsEvidence()}</div>
                  <div className="text-lg">Happy Borrowers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">100+</div>
                  <div className="text-lg">Trusted Lenders</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">$5B+{metricsEvidence()}</div>
                  <div className="text-lg">Loans Processed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">4.8★{metricsEvidence()}</div>
                  <div className="text-lg">Average Rating</div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
              Why Choose Loan AI Portal for Your Personal Loan?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  ✓ Largest Lender Network
                </h3>
                <p className="text-gray-700">
                  Access to 100+ banks, credit unions, and online lenders - more than any other platform. 
                  More lenders means more options and better rates for you.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  ✓ Most Advanced AI Technology
                </h3>
                <p className="text-gray-700">
                  Our proprietary machine learning algorithms are constantly improving, ensuring you 
                  get the most accurate matches and best rates available.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  ✓ Guaranteed Lowest Rates
                </h3>
                <p className="text-gray-700">
                  We compare every lender to ensure you see the absolute lowest APR you qualify for. 
                  If you find a better rate elsewhere, we'll match it.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  ✓ No Hidden Fees or Costs
                </h3>
                <p className="text-gray-700">
                  Our service is 100% free forever. We're compensated by lenders, never by borrowers. 
                  No application fees, no matching fees, no surprises.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  ✓ All Credit Scores Welcome
                </h3>
                <p className="text-gray-700">
                  From excellent to poor credit, we have lenders for every situation. Our AI finds 
                  lenders who specialize in your credit profile.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  ✓ Award-Winning Customer Service
                </h3>
                <p className="text-gray-700">
                  Rated 4.8/5 by verified borrowers in post-funding satisfaction surveys.{' '}
                  {borrowerOutcomesEvidence()}
                  Our US-based support team is here to help you through every step of the loan process.
                </p>
              </div>
            </div>
          </section>

          {/* Our Technology Section */}
          <section className="mb-20 bg-gray-50 p-12 rounded-lg">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
              Our Technology: How We Find You the Best Loans
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Proprietary AI Matching Algorithm
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Our patent-pending AI algorithm has been trained on millions of historical loan applications 
                  and continuously learns from every successful match. It analyzes complex patterns in 
                  borrower profiles and lender approval criteria that humans simply can't process at scale.
                </p>
                <p className="text-lg text-gray-700">
                  Documented cohorts show 72% of matched borrowers receiving at least one conditional approval within 24 hours and a median $3,500+ savings versus national APR benchmarks.{' '}
                  {borrowerOutcomesEvidence()}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Real-Time Rate Monitoring
                </h3>
                <p className="text-lg text-gray-700">
                  Interest rates change constantly. Our system monitors rates from all 100+ partner 
                  lenders in real-time, ensuring you always see the most current and competitive offers 
                  available at the exact moment you apply.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Advanced Risk Assessment
                </h3>
                <p className="text-lg text-gray-700">
                  We use sophisticated predictive analytics to assess your approval likelihood with 
                  each lender before you apply. This protects your credit score from unnecessary hard 
                  inquiries and increases your chances of approval.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Secure Data Protection
                </h3>
                <p className="text-lg text-gray-700">
                  Every piece of your personal information is protected by military-grade 256-bit 
                  encryption. We're fully compliant with all federal privacy regulations and undergo 
                  regular security audits by independent third parties.
                </p>
              </div>
            </div>
          </section>

          {/* Our Lender Network Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
              Our Lender Network: Only the Best and Most Trusted
            </h2>
            
            <div className="bg-white p-10 rounded-lg shadow-md mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We carefully vet every lender in our network to ensure they meet our strict standards 
                for reputation, customer service, transparency, and competitive pricing. Only lenders 
                who are properly licensed, maintain strong financial ratings, and have proven track 
                records of fair lending practices are accepted into our network.
              </p>
              
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Lender Requirements:</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Licensed in all operating states</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Minimum 4.0/5 customer rating</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Transparent pricing and terms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Strong financial stability ratings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Fair lending practices certification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Fast approval and funding timelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Excellent customer service standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Competitive interest rates</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏦</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Traditional Banks</h3>
                <p className="text-gray-700">
                  National and regional banks offering competitive rates and established reputations.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Credit Unions</h3>
                <p className="text-gray-700">
                  Member-focused institutions often providing lower rates and personalized service.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">💻</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Online Lenders</h3>
                <p className="text-gray-700">
                  Digital-first lenders offering fast approvals and innovative loan products.
                </p>
              </div>
            </div>
          </section>

          {/* Customer Success Stories */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
              Real Stories from Real Borrowers
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-500 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Loan AI Portal found me a rate 3% lower than my bank offered. I'm saving $175 
                  every month! The AI matching was incredibly accurate and fast."
                </p>
                <p className="font-semibold text-blue-900">- Sarah M., Texas</p>
                <p className="text-sm text-gray-600">$25,000 debt consolidation loan</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-500 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "I have fair credit and was worried about getting approved. Their AI matched me 
                  with a lender who specialized in my situation. Approved in 24 hours!"
                </p>
                <p className="font-semibold text-blue-900">- Michael R., Florida</p>
                <p className="text-sm text-gray-600">$15,000 home improvement loan</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-500 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Best loan experience ever. The entire process took less than 3 minutes and I had 
                  multiple offers to choose from. Funded the next day. Highly recommend!"
                </p>
                <p className="font-semibold text-blue-900">- Jennifer L., California</p>
                <p className="text-sm text-gray-600">$10,000 medical expense loan</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
              Frequently Asked Questions About Loan AI Portal
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Is Loan AI Portal really free to use?
                </h3>
                <p className="text-gray-700">
                  Yes, our service is 100% free for borrowers, always. We're compensated by lenders 
                  when you successfully close a loan, but there are never any fees, charges, or costs 
                  to you for using our platform. You'll never pay us a penny.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  How do you make money if the service is free?
                </h3>
                <p className="text-gray-700">
                  We earn a referral fee from lenders when borrowers successfully close loans through 
                  our platform. This business model allows us to offer our service completely free to 
                  borrowers while maintaining independence in our matching recommendations. We're never 
                  incentivized to match you with anyone other than the best lender for your situation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  How are you different from other loan comparison websites?
                </h3>
                <p className="text-gray-700">
                  Unlike traditional comparison sites that simply list lenders, our AI actively analyzes 
                  your complete financial profile and uses machine learning to predict which lenders are 
                  most likely to approve your application and offer you the lowest rates. We're the only 
                  platform with this level of advanced AI technology and the largest lender network in 
                  the industry.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Can I trust the lenders in your network?
                </h3>
                <p className="text-gray-700">
                  Absolutely. Every lender in our network has been carefully vetted and must meet strict 
                  standards for licensing, financial stability, customer service, and fair lending 
                  practices. We only work with reputable, licensed lenders who have proven track records 
                  of treating borrowers fairly.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  What makes your AI matching better than doing it myself?
                </h3>
                <p className="text-gray-700">
                  Our AI can analyze 50+ data points and compare 100+ lenders in under 60 seconds—something 
                  that would take you hours or days to do manually. More importantly, our algorithms have 
                  learned from millions of loan applications to predict approval likelihood and identify 
                  the lowest rates with 95% accuracy. You simply can't replicate this level of analysis 
                  on your own.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Do I have to accept a loan offer?
                </h3>
                <p className="text-gray-700">
                  No, never. Our service is completely obligation-free. You can view your matched offers, 
                  compare rates and terms, and decide if any of them are right for you. There's no pressure 
                  to accept anything, and you can walk away at any time with no consequences.
                </p>
              </div>
            </div>
          </section>

          {/* Contact and CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Find Your Perfect Loan?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join over 2 million Americans who have found fast, affordable personal loans through 
              our AI-powered platform. Get matched in 60 seconds. {metricsEvidence()}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/apply">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started Now
                </button>
              </Link>
              <Link href="/ai-loan-matching">
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More About Our AI
                </button>
              </Link>
            </div>
            <LeadGenDisclosure align="center" className="mt-2 text-sm text-white/80" />
            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <div>✓ 100% Free Service</div>
              <div>✓ No Credit Impact to Check Rates</div>
              <div>✓ 60-Second Matching</div>
              <div>✓ 100+ Trusted Lenders</div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  )
}
