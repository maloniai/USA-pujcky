'use client'

import Navigation from '@/components/navigation'
import ApplicationFormScript from '@/components/application-form-script'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import FAQSchema from '@/components/faq-schema'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'

const aiLoanMatchingFaqs = [
  {
    q: 'How accurate is AI loan matching compared to traditional methods?',
    a: 'AI loan matching analyzes far more data points than traditional manual comparisons. Our models maintain a 95% accuracy rate in predicting approval likelihood and routinely uncover loan offers with rates 15-30% lower than borrowers typically find on their own.',
  },
  {
    q: 'Does AI loan matching hurt my credit score?',
    a: 'No. Our initial matching process uses only a soft credit inquiry, so there is no impact on your credit score. A hard inquiry happens only if you proceed with a specific lender and complete their full application.',
  },
  {
    q: 'What information does the AI use to match me with lenders?',
    a: 'The system reviews your credit score, income, employment history, debt-to-income ratio, loan amount and purpose, state of residence, and other financial factors. It also evaluates each lender’s approval criteria to surface realistic matches.',
  },
  {
    q: 'How long does the AI matching process take?',
    a: 'The entire process takes under a minute. After you submit your information, the AI evaluates your profile and returns personalized loan offers almost instantly so you can compare options right away.',
  },
  {
    q: 'Can I get matched with lenders if I have bad credit?',
    a: 'Yes. Our lender network includes partners that work with all credit profiles, including fair or challenged credit. The AI prioritizes lenders whose programs align with your credit history to improve your odds of approval.',
  },
  {
    q: 'Is my personal information safe with AI loan matching?',
    a: 'Absolutely. We use bank-level 256-bit encryption, maintain strict privacy controls, and never sell your data. Lenders only see your information when you choose to move forward with their offer.',
  },
  {
    q: 'What loan amounts can I get matched for?',
    a: 'Borrowers can be matched with personal loans ranging from $1,000 to $100,000, depending on lender programs, your qualifications, and state regulations. The AI only shows options that fit your requested amount.',
  },
  {
    q: 'How much can I save using AI loan matching?',
    a: 'Savings vary by borrower, but users commonly save $50-$200 per month compared to their current loan options. Over a five-year loan, that can translate to $3,000-$12,000 in total interest savings.',
  },
]

export default function AILoanMatchingPage() {
  return (
    <>
      <FAQSchema faqs={aiLoanMatchingFaqs} />
      <BreadcrumbSchema config="aiMatching" />
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <span className="text-6xl mr-4">🤖</span>
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900">
              AI-Powered Loan Matching
            </h1>
          </div>
          <p className="text-2xl text-gray-700 text-center mb-6 max-w-4xl mx-auto">
            Our advanced AI analyzes your financial profile and matches you with the best loan 
            offers from our network of trusted lenders.
          </p>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Get personalized loan recommendations in seconds with our intelligent matching system 
            that compares rates, terms, and eligibility across hundreds of lenders nationwide.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#get-matched" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Matched Now
            </a>
            <a href="#how-it-works" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors">
              Learn How It Works
            </a>
          </div>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* What is AI Loan Matching Section */}
          <section className="mb-20" id="how-it-works">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
              What is AI-Powered Loan Matching?
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-lg text-gray-700 mb-6">
                AI-powered loan matching uses artificial intelligence and machine learning algorithms 
                to analyze your financial situation, credit profile, income, and loan needs. Our system 
                then compares this data against thousands of loan products from our network of over 100 
                trusted lenders to find the perfect matches for your unique situation.
              </p>
              <p className="text-lg text-gray-700">
                Unlike traditional loan comparison, which requires manually checking multiple lenders, 
                our AI does the work in seconds, considering factors that humans might miss and finding 
                opportunities you might not discover on your own.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Smart Analysis</h3>
                <p className="text-gray-700">
                  Our AI analyzes 50+ data points including credit score, income, debt-to-income 
                  ratio, employment history, and loan purpose to understand your financial profile.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Instant Matching</h3>
                <p className="text-gray-700">
                  Get matched with the best loan offers in under 60 seconds. Our system compares 
                  rates, terms, and eligibility across hundreds of lenders simultaneously.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-lg">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Best Rates</h3>
                <p className="text-gray-700">
                  Our AI ensures you see the most competitive rates available for your profile, 
                  potentially saving you thousands over the life of your loan.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="mb-20 bg-gray-50 p-12 rounded-lg">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
              How AI Loan Matching Works
            </h2>
            
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    Submit Your Information
                  </h3>
                  <p className="text-lg text-gray-700">
                    Fill out a simple 3-minute form with your financial details, loan amount needed, 
                    and purpose. Our secure system encrypts your data to protect your privacy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    AI Analyzes Your Profile
                  </h3>
                  <p className="text-lg text-gray-700">
                    Our artificial intelligence evaluates your credit score, income stability, existing 
                    debts, employment history, and dozens of other factors to build a comprehensive 
                    financial profile.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    Smart Lender Matching
                  </h3>
                  <p className="text-lg text-gray-700">
                    The system compares your profile against our network of 100+ lenders, analyzing 
                    thousands of loan products to identify the best matches based on approval likelihood, 
                    interest rates, fees, and terms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    Receive Personalized Offers
                  </h3>
                  <p className="text-lg text-gray-700">
                    Get matched with 3-5 pre-qualified loan offers tailored to your situation. Compare 
                    rates, terms, monthly payments, and total costs side-by-side to choose the best option.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    Complete Your Application
                  </h3>
                  <p className="text-lg text-gray-700">
                    Select your preferred offer and complete the full application directly with the 
                    lender. Many borrowers receive approval within 24 hours and funding within 1-3 
                    business days.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
              Benefits of AI-Powered Loan Matching
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                  <span className="text-2xl mr-3">✅</span>
                  Save Time and Effort
                </h3>
                <p className="text-gray-700">
                  No need to visit multiple lender websites or fill out dozens of applications. Our 
                  AI does the comparison shopping for you in seconds.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                  <span className="text-2xl mr-3">💵</span>
                  Lower Interest Rates
                </h3>
                <p className="text-gray-700">
                  Find the most competitive rates available for your credit profile. Even a 0.5% 
                  lower rate can save thousands over the life of your loan.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  Higher Approval Odds
                </h3>
                <p className="text-gray-700">
                  Our AI matches you with lenders most likely to approve your application based on 
                  their specific criteria and your financial profile.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                  <span className="text-2xl mr-3">🔒</span>
                  Secure and Private
                </h3>
                <p className="text-gray-700">
                  Your personal information is encrypted and protected. We never sell your data, 
                  and lenders only see your info when you choose to proceed.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                  <span className="text-2xl mr-3">📊</span>
                  Transparent Comparison
                </h3>
                <p className="text-gray-700">
                  See all costs upfront including APR, fees, and total loan cost. No hidden surprises 
                  or fine print - just clear, honest comparisons.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                  <span className="text-2xl mr-3">🚀</span>
                  Fast Funding
                </h3>
                <p className="text-gray-700">
                  Many matched lenders offer expedited decisions, including same-day approval with participating partners, 
                  and funding within 1-3 business days once verification is complete.
                </p>
              </div>
            </div>
          </section>

          {/* Who Can Benefit Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
              Who Can Benefit from AI Loan Matching?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Debt Consolidation Seekers
                </h3>
                <p className="text-gray-700 mb-4">
                  Combine multiple high-interest debts into one lower-rate loan and save money 
                  each month.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lower monthly payments</li>
                  <li>• Single payment simplicity</li>
                  <li>• Potential credit score improvement</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Home Improvement Borrowers
                </h3>
                <p className="text-gray-700 mb-4">
                  Finance renovations, repairs, or upgrades with competitive rates and flexible terms.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Loans up to $100,000</li>
                  <li>• Fixed rates available</li>
                  <li>• Quick approval process</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Major Purchase Financing
                </h3>
                <p className="text-gray-700 mb-4">
                  Fund large expenses like weddings, vehicles, medical procedures, or education.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Flexible loan amounts</li>
                  <li>• Fast funding available</li>
                  <li>• Competitive rates</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Emergency Expense Coverage
                </h3>
                <p className="text-gray-700 mb-4">
                  Handle unexpected costs like medical bills, car repairs, or urgent home repairs.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Same-day approval options with select lenders</li>
                  <li>• Funding in 1-3 days after final verification</li>
                  <li>• Amounts from $1,000+</li>
                </ul>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Credit Builders
                </h3>
                <p className="text-gray-700 mb-4">
                  Use a personal loan to establish or improve credit history with on-time payments.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lenders for all credit levels</li>
                  <li>• Fixed payment schedules</li>
                  <li>• Credit reporting included</li>
                </ul>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Small Business Owners
                </h3>
                <p className="text-gray-700 mb-4">
                  Access capital for business expenses, equipment, inventory, or cash flow needs.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Business loan options</li>
                  <li>• Flexible repayment terms</li>
                  <li>• Fast application process</li>
                </ul>
              </div>
            </div>
          </section>

          {/* AI Technology Section */}
          <section className="mb-20 bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-lg">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
              The Technology Behind Our AI Matching
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Machine Learning Algorithms
                </h3>
                <p className="text-lg text-gray-700">
                  Our system uses advanced machine learning models trained on millions of loan 
                  applications and outcomes. These models continuously improve by learning from 
                  successful matches, approval patterns, and borrower feedback.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Predictive Analytics
                </h3>
                <p className="text-lg text-gray-700">
                  We use predictive analytics to forecast your likelihood of approval with each lender, 
                  ensuring we only show you realistic options. This reduces wasted applications and 
                  protects your credit score from unnecessary inquiries.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Real-Time Rate Monitoring
                </h3>
                <p className="text-lg text-gray-700">
                  Our AI monitors interest rates across all partner lenders in real-time, ensuring 
                  you always see the most current and competitive offers available in the market.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Risk Assessment Models
                </h3>
                <p className="text-lg text-gray-700">
                  Sophisticated risk assessment algorithms analyze your financial stability, income 
                  patterns, and credit history to match you with lenders whose risk tolerance aligns 
                  with your profile.
                </p>
              </div>
            </div>
          </section>

          {/* Loan Ranking Methodology Section */}
          <section id="loan-ranking-methodology" className="mb-20 bg-white border border-blue-100 rounded-2xl p-10 shadow-sm">
            <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">
              Loan Ranking Methodology (U.S.)
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center mb-10">
              We rank lending partners by consumer relevance&mdash;never by compensation. Sponsored placements are clearly labeled and live in their own areas. Below is the scoring system and governance that protect borrowers from pay-to-play bias.
            </p>

            <div className="space-y-10">
              <article>
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">1) What drives the default order</h3>
                <p className="text-gray-700 mb-4">
                  The overall score weighs cost, likelihood of approval, user experience, and compliance fit. Commercial relationships cannot change this order.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
                  <p className="font-mono text-blue-900 text-sm md:text-base">
                    OverallScore = 35% Cost + 25% Eligibility + 15% Speed + 15% Terms + 5% Reputation + 5% State Fit
                  </p>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Cost (35%)</strong> &ndash; normalized estimate of APR plus fees using representative loan baskets for each product type.</li>
                  <li><strong>Eligibility (25%)</strong> &ndash; predicted approval odds based on credit indicators, income, KYC signals, and state fit. Lenders are removed if their stated criteria disqualify the user.</li>
                  <li><strong>Speed (15%)</strong> &ndash; expected time from application to decision/funding (instant, same-day, 1&ndash;3 days, etc.).</li>
                  <li><strong>Terms (15%)</strong> &ndash; flexibility around repayment, fees, hardship options, prepayment policies, and rollover limits.</li>
                  <li><strong>Reputation (5%)</strong> &ndash; recent complaint volume, enforcement actions, and BBB standing. Each input is capped so no single metric dominates.</li>
                  <li><strong>State Fit (5%)</strong> &ndash; checks that the product is legal and configured for the borrower&rsquo;s state (amount caps, fee caps, cooling-off rules).</li>
                </ul>
                <div className="mt-4 space-y-3 text-gray-700">
                  <h4 className="text-lg font-semibold text-blue-900">Normalization &amp; data hygiene</h4>
                  <ul className="space-y-2">
                    <li>• Winsorize extreme values and convert each factor to a 0&ndash;100 score via min&ndash;max scaling within its loan class (installment, payday, line of credit, etc.).</li>
                    <li>• Missing data never yields an advantage&mdash;unpublished metrics are imputed conservatively (20th percentile of peers) and flagged as “info not provided.”</li>
                    <li>• Cost scoring uses standardized baskets (e.g., $500/3 months for payday, $2,000/12 months for installment) and we disclose the selected basket on the results page.</li>
                  </ul>
                </div>
              </article>

              <article id="sponsored-disclosure">
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">2) Sponsored placements (ads)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sponsored offers live only in clearly labeled ad blocks (“Sponsored”).</li>
                  <li>• Sponsorship never reshuffles organic rankings.</li>
                  <li>• Non-paying providers are included wherever feasible to avoid “pay-to-play” effects, consistent with the CFPB&rsquo;s 2024 guidance on steering based on compensation.</li>
                </ul>
                <p className="mt-3 text-sm text-blue-700">
                  Source: <Link className="underline underline-offset-4" href="https://www.consumerfinance.gov/compliance/circulars/circular-2024-03/" target="_blank" rel="noopener noreferrer">CFPB Circular 2024-03</Link>
                </p>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">3) Personalization controls</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Users can resort results by Lowest Cost, Highest Eligibility, or Fastest Funding. We persist the selection for the session and show a badge such as “Sorted by Lowest Cost”.</li>
                  <li>• When a user changes sort order, the organic list re-ranks strictly by the chosen criterion while sponsored placements remain in their dedicated slots.</li>
                </ul>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">4) Tie-breakers &amp; penalties</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• If OverallScores are within 1 point, lower total cost wins, then higher eligibility, then faster funding.</li>
                  <li>• Penalties (−5 to −20 points) apply for recent enforcement actions, elevated complaint rates, or unclear fee disclosures. Penalties are documented on the lender card.</li>
                </ul>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">5) State compliance &amp; exclusion rules</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• We geofence every product; if it violates state law or exceeds caps, it is hidden.</li>
                  <li>• State-specific limits (amount, fee, term, rollover) flow into the pricing basket before scoring.</li>
                  <li>• Lenders missing required state licenses or registrations are suppressed.</li>
                </ul>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">6) Data sources &amp; refresh cadence</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Provider disclosures, rate sheets, APIs, and scheduled web audits fuel pricing and availability data.</li>
                  <li>• Complaint and enforcement signals come from public sources (CFPB, state AGs, BBB when available).</li>
                  <li>• Refresh cadence: pricing weekly, availability daily, licenses monthly, with immediate updates following provider notices.</li>
                </ul>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">7) Audit trail &amp; governance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Every rendered result set stores a JSON snapshot of inputs, factor scores, weights, and outcomes.</li>
                  <li>• Quarterly model reviews look for compensation-driven drift.</li>
                  <li>• Compliance reviews confirm ad labeling, inclusion of non-paying providers, and that ranking code paths ignore compensation variables.</li>
                </ul>
                <p className="mt-3 text-sm text-blue-700">
                  This aligns with the CFPB&rsquo;s stance that steering based on remuneration can be an abusive act under the CFPA.
                </p>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">8) Public disclosures</h3>
                <div className="space-y-2 text-gray-700">
                  <p>We make the following statements available anywhere rankings appear:</p>
                  <ul className="space-y-2">
                    <li>• “Default order is based on relevance (cost, eligibility, speed, terms). Commercial relationships do not change this order. Sponsored offers are labeled and appear in separate ad slots.”</li>
                    <li>• “State rules apply. Some offers may be unavailable in your location.”</li>
                    <li>• “We may earn compensation from some partners, which never affects the ranking of non-sponsored results.”</li>
                  </ul>
                  <p>
                    We also provide quick links to <Link href="#loan-ranking-methodology" className="underline underline-offset-4">View our full ranking methodology</Link> and <Link href="#sponsored-disclosure" className="underline underline-offset-4">Why some results are sponsored</Link>.
                  </p>
                </div>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">9) Example weight presets</h3>
                <p className="text-gray-700 mb-4">Users can choose alternate weight sets that better fit their situation. Each preset rebalances the same factors while keeping governance rules intact.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base border border-blue-200 rounded-lg">
                    <thead className="bg-blue-900 text-white">
                      <tr>
                        <th className="py-3 px-4 text-left">Preset</th>
                        <th className="py-3 px-4 text-center">Cost</th>
                        <th className="py-3 px-4 text-center">Eligibility</th>
                        <th className="py-3 px-4 text-center">Speed</th>
                        <th className="py-3 px-4 text-center">Terms</th>
                        <th className="py-3 px-4 text-center">Reputation</th>
                        <th className="py-3 px-4 text-center">State Fit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="py-3 px-4 font-semibold">Standard (default)</td>
                        <td className="py-3 px-4 text-center">35%</td>
                        <td className="py-3 px-4 text-center">25%</td>
                        <td className="py-3 px-4 text-center">15%</td>
                        <td className="py-3 px-4 text-center">15%</td>
                        <td className="py-3 px-4 text-center">5%</td>
                        <td className="py-3 px-4 text-center">5%</td>
                      </tr>
                      <tr className="border-t bg-gray-50">
                        <td className="py-3 px-4 font-semibold">Urgent cash (speed first)</td>
                        <td className="py-3 px-4 text-center">25%</td>
                        <td className="py-3 px-4 text-center">20%</td>
                        <td className="py-3 px-4 text-center">30%</td>
                        <td className="py-3 px-4 text-center">15%</td>
                        <td className="py-3 px-4 text-center">5%</td>
                        <td className="py-3 px-4 text-center">5%</td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-3 px-4 font-semibold">Credit-challenged (approval odds)</td>
                        <td className="py-3 px-4 text-center">25%</td>
                        <td className="py-3 px-4 text-center">40%</td>
                        <td className="py-3 px-4 text-center">10%</td>
                        <td className="py-3 px-4 text-center">15%</td>
                        <td className="py-3 px-4 text-center">5%</td>
                        <td className="py-3 px-4 text-center">5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
              Frequently Asked Questions About AI Loan Matching
            </h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  How accurate is AI loan matching compared to traditional methods?
                </h3>
                <p className="text-gray-700">
                  AI loan matching is significantly more accurate than traditional methods because it 
                  analyzes far more data points and considers complex relationships between factors 
                  that humans might miss. Our system maintains a 95% accuracy rate in predicting 
                  approval likelihood and consistently finds rates 15-30% lower than borrowers would 
                  find on their own.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Does AI loan matching hurt my credit score?
                </h3>
                <p className="text-gray-700">
                  No! Our initial AI matching process uses a soft credit inquiry that does not affect 
                  your credit score. Only when you choose to proceed with a specific lender and submit 
                  a full application will a hard inquiry occur. Our system helps you avoid multiple 
                  hard inquiries by showing you pre-qualified offers first.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  What information does the AI use to match me with lenders?
                </h3>
                <p className="text-gray-700">
                  The AI analyzes multiple factors including your credit score, income, employment 
                  history, debt-to-income ratio, loan amount requested, loan purpose, state of residence, 
                  existing debts, and payment history. It also considers lender-specific criteria like 
                  minimum credit score requirements, income thresholds, and geographic restrictions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  How long does the AI matching process take?
                </h3>
                <p className="text-gray-700">
                  The entire process is incredibly fast. Once you submit your information, our AI 
                  analyzes your profile and matches you with suitable lenders in under 60 seconds. 
                  You'll see your personalized loan offers almost immediately, allowing you to compare 
                  and choose the best option right away.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Can I get matched with lenders if I have bad credit?
                </h3>
                <p className="text-gray-700">
                  Yes! Our network includes lenders who work with all credit profiles, from excellent 
                  to poor credit. The AI is particularly valuable for borrowers with challenged credit 
                  because it identifies lenders most likely to approve your application despite credit 
                  issues, saving you from rejections that could further impact your score.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Is my personal information safe with AI loan matching?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We use bank-level 256-bit encryption to protect your data, and we never 
                  sell or share your information without your explicit consent. Our AI processes your 
                  data securely, and lenders only receive your details when you choose to proceed with 
                  their offer. We are fully compliant with all federal privacy regulations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  What loan amounts can I get matched for?
                </h3>
                <p className="text-gray-700">
                  Our network of lenders offers personal loans ranging from $1,000 to $100,000. The 
                  AI will match you with lenders whose loan size ranges align with your requested 
                  amount and financial profile. Loan amounts are subject to lender approval and state 
                  regulations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  How much can I save using AI loan matching?
                </h3>
                <p className="text-gray-700">
                  Savings vary by individual, but our users typically save between $50-$200 per month 
                  compared to their current loan options. Over the life of a 5-year loan, this can 
                  amount to $3,000-$12,000 in total savings. The AI ensures you're seeing the best 
                  available rates for your specific situation.
                </p>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="mb-20 bg-blue-900 text-white p-12 rounded-lg">
            <h2 className="text-4xl font-bold mb-12 text-center">
              AI Loan Matching by the Numbers
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">2M+</div>
                <div className="text-xl">Loans Matched</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-xl">Partner Lenders</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">95%</div>
                <div className="text-xl">Match Accuracy</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">60sec</div>
                <div className="text-xl">Average Match Time</div>
              </div>
            </div>

            <p className="mt-8 text-sm text-blue-200 text-center">
              Source: <Link href="/docs/performance-metrics-2025" className="underline underline-offset-4">
                Loan AI Portal performance metrics summary (2025)
              </Link>
            </p>
          </section>

          {/* Comparison Table */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
              AI Matching vs. Traditional Loan Shopping
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg overflow-hidden shadow-md">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">AI Loan Matching</th>
                    <th className="py-4 px-6 text-center">Traditional Shopping</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-semibold">Time to Compare</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">Under 60 seconds</td>
                    <td className="py-4 px-6 text-center text-red-600">Hours to days</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="py-4 px-6 font-semibold">Lenders Compared</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">100+ simultaneously</td>
                    <td className="py-4 px-6 text-center text-red-600">5-10 manually</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-semibold">Personalization</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">50+ factors analyzed</td>
                    <td className="py-4 px-6 text-center text-red-600">Basic criteria only</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="py-4 px-6 font-semibold">Approval Likelihood</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">95% accurate prediction</td>
                    <td className="py-4 px-6 text-center text-red-600">Unknown/guessing</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-semibold">Credit Score Impact</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">Soft inquiry first</td>
                    <td className="py-4 px-6 text-center text-red-600">Multiple hard pulls</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="py-4 px-6 font-semibold">Rate Accuracy</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">Real-time rates</td>
                    <td className="py-4 px-6 text-center text-red-600">Outdated estimates</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold">Cost</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">100% Free</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">Free</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Related Resources */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
              Related Resources
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/states" className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  State-Specific Loan Information
                </h3>
                <p className="text-gray-700 mb-4">
                  Learn about lending regulations, average rates, and requirements in your state.
                </p>
                <span className="text-blue-600 font-semibold">View All States →</span>
              </Link>

              <Link href="/blog" className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Personal Loan Education
                </h3>
                <p className="text-gray-700 mb-4">
                  Read our guides on getting approved, improving credit, and choosing the right loan.
                </p>
                <span className="text-blue-600 font-semibold">Read Blog →</span>
              </Link>

              <Link href="/apply" className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Quick Application
                </h3>
                <p className="text-gray-700 mb-4">
                  Ready to apply? Get matched with lenders in under 60 seconds.
                </p>
                <span className="text-blue-600 font-semibold">Apply Now →</span>
                <LeadGenDisclosure as="span" className="mt-3 block text-xs" />
              </Link>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center" id="get-matched">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Find Your Perfect Loan Match?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let our AI find the best personal loan offers for your unique situation. 
              Fast, free, and secure with no obligation.
            </p>
            <div className="mb-8">
              <ApplicationFormScript />
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>No credit score impact</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Results in 60 seconds</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>100% free service</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Secure & private</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
