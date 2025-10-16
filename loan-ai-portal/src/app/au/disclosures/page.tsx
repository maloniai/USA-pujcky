import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, TrendingUp, Award, Users, AlertCircle, FileText, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Affiliate Disclosures – How We Make Money | Transparent Loan Comparisons',
  description: 'Full transparency on how Loan Platform Australia earns commissions from lenders. Learn how we rank loans, what we earn, and why it doesn\'t affect your rates. ASIC-compliant disclosures.',
  keywords: 'affiliate disclosure, commission structure, loan comparison transparency, ASIC compliance, how we make money',
}

export default function DisclosuresPage() {
  const lastUpdated = 'January 2025'

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Affiliate Disclosures
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete transparency about how we earn money, how we rank lenders, and why our commissions don't 
            affect the rates or terms you receive. Understanding our business model helps you make informed decisions.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            <strong>Last Updated:</strong> {lastUpdated}
          </p>
        </header>

        {/* Key Principles */}
        <div className="mb-12">
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Our Transparency Promise</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start space-x-3">
                  <Scale className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm">
                    <strong>Commissions don't affect rankings</strong> — We rank lenders objectively based on rates, 
                    features, and service quality.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <DollarSign className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm">
                    <strong>You pay nothing</strong> — Our service is 100% free for consumers. Lenders pay us, not you.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm">
                    <strong>ASIC-licensed only</strong> — We only work with lenders who hold valid Australian Credit Licences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How We Make Money */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Make Money</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Loan Platform Australia</strong> (operated by <strong>Maloni s.r.o.</strong>) is a <strong>commission-based 
                comparison service</strong>. We earn money by referring customers to ASIC-licensed lenders. Here's exactly how it works:
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">1. You Use Our Platform (Free)</h4>
                  <p className="text-gray-700">
                    You visit our website, enter your loan requirements, and compare lenders. <strong>This service 
                    is completely free</strong> — you pay nothing to use Loan Platform Australia.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">2. We Match You with Lenders</h4>
                  <p className="text-gray-700">
                    Based on your requirements, we display lenders who offer suitable products. You can compare interest 
                    rates, fees, loan terms, and customer reviews.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">3. You Apply with a Lender</h4>
                  <p className="text-gray-700">
                    When you click "Apply Now" or similar buttons, you're redirected to the lender's website (or we 
                    forward your application with your consent). You complete the application directly with the lender.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">4. The Lender Approves Your Loan</h4>
                  <p className="text-gray-700">
                    The lender independently assesses your application using their own criteria. If approved, they offer 
                    you a loan with specific terms (interest rate, fees, repayment schedule).
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">5. We Receive a Commission</h4>
                  <p className="text-gray-700 mb-3">
                    If you accept the loan and it settles (funds are disbursed), the <strong>lender pays us a commission</strong>. 
                    This commission is typically a percentage of the loan amount or a flat fee, depending on our agreement 
                    with each lender.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Important:</strong> The commission <strong>does not</strong> increase your interest rate or 
                      add any fees to your loan. Lenders pay us from their own revenue, not from your repayments. The rate 
                      and terms you receive are <strong>identical</strong> to what you would get applying directly to the lender.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Commission Structure */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Commission Structure Explained</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <DollarSign className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Typical Commission Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Commissions vary by lender and product type. Here are typical ranges:
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-100 p-3 rounded">
                    <p className="font-semibold text-gray-900">Personal Loans (Secured)</p>
                    <p className="text-gray-700 text-sm">0.5% – 2% of loan amount, or $200 – $800 flat fee</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded">
                    <p className="font-semibold text-gray-900">Personal Loans (Unsecured)</p>
                    <p className="text-gray-700 text-sm">1% – 3% of loan amount, or $300 – $1,200 flat fee</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded">
                    <p className="font-semibold text-gray-900">Payday/Small Amount Loans</p>
                    <p className="text-gray-700 text-sm">$50 – $150 flat fee per approved loan</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-4 italic">
                  Note: Actual commissions depend on our specific agreements with each lender. These figures are 
                  industry averages for transparency.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Commission Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Here are examples of what we might earn:
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">Example 1: $10,000 Personal Loan</p>
                    <p className="text-gray-700 text-sm mb-1">Commission: 1.5% = <strong>$150</strong></p>
                    <p className="text-xs text-gray-600">
                      You pay 0% more in interest or fees. The lender pays us $150 from their profit margin.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Example 2: $50,000 Car Loan</p>
                    <p className="text-gray-700 text-sm mb-1">Commission: 0.8% = <strong>$400</strong></p>
                    <p className="text-xs text-gray-600">
                      You receive the same rate as a direct applicant. The lender pays us $400 for the referral.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Example 3: $2,000 Payday Loan</p>
                    <p className="text-gray-700 text-sm mb-1">Commission: Flat fee = <strong>$80</strong></p>
                    <p className="text-xs text-gray-600">
                      Your fees and interest are identical to applying directly. The lender pays us $80.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ranking Methodology */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Rank Lenders (Independent of Commissions)</h2>
          <Card className="border-purple-200 bg-purple-50">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Critical point:</strong> The commission we earn <strong>does not</strong> influence how we rank 
                lenders. We use an <strong>objective, weighted scoring system</strong> based on consumer value, not our revenue.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                    40%
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Interest Rates & Fees</h4>
                    <p className="text-gray-700 text-sm">
                      Base interest rate, comparison rate, establishment fees, monthly fees, early repayment fees, and 
                      other charges. Lower rates = higher ranking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                    25%
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Product Features</h4>
                    <p className="text-gray-700 text-sm">
                      Loan amount range, term flexibility, repayment frequency options, redraw facilities, offset accounts, 
                      and other borrower-friendly features.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                    20%
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Approval Speed & Process</h4>
                    <p className="text-gray-700 text-sm">
                      Average approval time, online application availability, required documentation, settlement speed, 
                      and application ease-of-use.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                    15%
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Customer Experience</h4>
                    <p className="text-gray-700 text-sm">
                      Verified customer reviews, AFCA complaint data, industry reputation, customer service quality, and 
                      borrower satisfaction scores.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border-2 border-purple-300">
                <p className="text-gray-700">
                  <strong>Example:</strong> If Lender A pays us 2% commission but has high fees and poor reviews, they 
                  will rank <strong>lower</strong> than Lender B who pays us 1% but offers better rates and service. 
                  <strong>Consumer value always comes first.</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What We Don't Do */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Don't Do</h2>
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                To maintain trust and comply with ASIC guidelines, we explicitly <strong>do not</strong>:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Rank lenders by commission amount</strong>
                    <p className="text-gray-700 text-sm">
                      We do not boost lenders who pay higher commissions. Rankings are based solely on the scoring 
                      system above.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Hide lenders who pay lower commissions</strong>
                    <p className="text-gray-700 text-sm">
                      If a lender offers the best deal for your needs, we display them — regardless of commission structure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Accept payments from unlicensed lenders</strong>
                    <p className="text-gray-700 text-sm">
                      We only work with lenders who hold valid Australian Credit Licences (ACL) issued by ASIC. No exceptions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Charge consumers any fees</strong>
                    <p className="text-gray-700 text-sm">
                      You never pay us for using our platform, submitting applications, or receiving comparisons. 
                      If a lender charges fees, those are <strong>their</strong> fees (disclosed upfront), not ours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Misrepresent loan terms</strong>
                    <p className="text-gray-700 text-sm">
                      We display rates, fees, and terms as provided by lenders. We do not hide costs or exaggerate benefits.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Guarantee loan approval</strong>
                    <p className="text-gray-700 text-sm">
                      Lenders make independent decisions. We do not promise approval or specific outcomes, regardless of 
                      commission incentives.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Partner Standards */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Partner Lender Standards</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                We carefully vet all lender partners to ensure they meet minimum standards for consumer protection:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="h-5 w-5 text-blue-600 mr-2" />
                    Licensing & Compliance
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ Valid Australian Credit Licence (ACL)</li>
                    <li>✓ ASIC registration current and in good standing</li>
                    <li>✓ Member of AFCA (dispute resolution)</li>
                    <li>✓ Compliance with NCCP Act responsible lending obligations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    Consumer Protection
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ Transparent fee structures</li>
                    <li>✓ Clear loan documentation</li>
                    <li>✓ Hardship assistance programs</li>
                    <li>✓ Fair complaint handling processes</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6 italic">
                We regularly review partners and remove those who fail to maintain standards or receive excessive 
                AFCA complaints.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Representative Example */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Representative Example</h2>
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 font-semibold">
                To illustrate typical loan costs and our commission structure:
              </p>
              <div className="bg-white rounded-lg p-6 border-2 border-green-300">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">$15,000 Personal Loan Example</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Loan Amount:</span>
                    <strong>$15,000</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Interest Rate (Annual):</span>
                    <strong>9.99% p.a.</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Loan Term:</span>
                    <strong>5 years (60 months)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Establishment Fee:</span>
                    <strong>$250</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Account Fee:</span>
                    <strong>$10/month ($600 total)</strong>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold">Total Interest Paid:</span>
                    <strong className="text-blue-600">$4,128</strong>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold">Total Amount Repayable:</span>
                    <strong className="text-blue-600">$19,978</strong>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold">Monthly Repayment:</span>
                    <strong className="text-blue-600">$333/month</strong>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between text-lg bg-green-100 p-3 rounded">
                    <span className="font-semibold">Our Commission (1.2%):</span>
                    <strong className="text-green-600">$180</strong>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Cost to You:</span>
                    <strong>$0 (lender pays)</strong>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6 italic">
                Note: This is a representative example only. Actual rates, fees, and terms depend on your individual 
                circumstances and the lender's assessment. Commissions vary by lender and product.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Additional Disclosures */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Disclosures</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sponsored Placements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Occasionally, lenders may pay for <strong>sponsored placements</strong> (marked with a "Sponsored" label) 
                  at the top of search results. These placements do not affect organic rankings below them. Sponsored lenders 
                  still meet all our partner standards and must hold valid ACLs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance-Based Bonuses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Some lenders offer performance-based bonuses (e.g., higher commissions if we refer a certain volume of 
                  customers). These bonuses do not influence individual rankings or which lenders we display to you. Rankings 
                  remain based on our scoring system.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Credit Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  Loan Platform Australia acts as a credit referrer but does not provide credit assistance as defined 
                  under the NCCP Act. We do not assess your suitability for specific products or provide recommendations — 
                  we simply display options for you to compare.
                </p>
                <p className="text-sm text-gray-600">
                  If you require personalised credit advice, please consult a licensed financial adviser or credit counsellor 
                  (contact the <a href="https://ndh.org.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">National Debt Helpline</a> for free help).
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Questions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Our Disclosures?</h2>
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-8">
              <p className="text-gray-700 mb-4 leading-relaxed">
                We're committed to full transparency. If you have questions about how we earn money, how we rank lenders, 
                or any aspect of our business model, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> <a href="mailto:disclosures@loan-platform.com" className="text-blue-600 hover:underline">disclosures@loan-platform.com</a></p>
                <p><strong>Subject:</strong> Commission or Ranking Inquiry</p>
              </div>
              <p className="text-sm text-gray-600 mt-6">
                We'll respond within 5 business days with detailed explanations.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Compare Loans?
              </h2>
              <p className="text-gray-700 mb-6">
                Now that you understand how we work, compare ASIC-licensed lenders with confidence. 
                Our rankings prioritise your needs, not our revenue.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/au/apply" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Compare Loans Now
                </Link>
                <Link href="/au/about" className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                  About Our Methodology
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
