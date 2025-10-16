import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Users, TrendingUp, CheckCircle, Award, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us – Loan Platform Australia | ASIC-Compliant Loan Comparison',
  description: 'Learn about Loan Platform Australia. We compare ASIC-licensed lenders to help Australians find transparent, competitive personal loans. Discover our methodology and commitment to responsible lending.',
  keywords: 'about loan platform, ASIC licensed, loan comparison Australia, our methodology, responsible lending',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            About Loan Platform Australia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for comparing ASIC-licensed personal loans across Australia. 
            We help you make informed borrowing decisions with transparency and consumer protection at the forefront.
          </p>
        </header>

        {/* Mission Statement */}
        <section className="mb-16">
          <Card className="border-blue-200">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <Target className="h-12 w-12 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Loan Platform Australia exists to empower Australians with transparent, comprehensive loan comparisons 
                    that prioritise consumer protection and informed financial decisions. We connect borrowers with 
                    ASIC-licensed lenders whilst maintaining the highest standards of compliance with the National Consumer 
                    Credit Protection Act 2009 (NCCP Act) and Australian Consumer Law.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our platform serves over 90% of Australia's population across 8 states and territories, covering 
                    165 major cities from Sydney to Darwin, providing localised loan comparisons tailored to each region's 
                    economic landscape.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Consumer Protection First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We only display ASIC-licensed lenders who comply with the NCCP Act. Every lender must meet 
                  responsible lending obligations, conduct affordability assessments, and provide clear disclosure 
                  of all terms and conditions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-green-600 mb-3" />
                <CardTitle>Complete Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We clearly disclose our affiliate relationships and how we earn commissions. Our rankings are based 
                  on objective criteria including interest rates, fees, approval speed, customer reviews, and product 
                  features—not commission amounts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-purple-600 mb-3" />
                <CardTitle>Responsible Lending</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We actively promote responsible borrowing practices. Our content emphasises the importance of 
                  borrowing within your means, understanding loan terms, and seeking financial counselling when needed.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How We Work */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How We Work</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                  We Compare ASIC-Licensed Lenders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Every lender on our platform holds a valid Australian Credit Licence (ACL) issued by ASIC. We verify 
                  licence status regularly and immediately remove any lenders who lose their authorisation or fail to 
                  meet compliance standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                  You Choose Based on Your Needs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our comparison tools help you filter lenders by interest rate, loan amount, term length, fees, 
                  approval speed, and customer ratings. We provide detailed product information, eligibility criteria, 
                  and representative examples so you can make informed decisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                  Apply Directly with Lenders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  When you find a suitable loan, you apply directly with the lender—not through us. This ensures 
                  your application is processed according to the lender's responsible lending obligations, including 
                  proper affordability assessments and suitability checks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                  We Earn Commission, Not Fees from You
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Loan Platform Australia is free for consumers. We earn commissions from lenders when you successfully 
                  complete an application. Importantly, these commissions do not affect your interest rate or loan terms—
                  you receive the same offers whether you come through our platform or go directly to the lender.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ranking Methodology */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Ranking Methodology</h2>
          <Card className="border-purple-200">
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Lenders are ranked using an objective, weighted scoring system based on the following criteria:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Interest Rates & Fees (40%)</strong>
                    <p className="text-gray-700">Base interest rates, comparison rates, establishment fees, monthly fees, and early repayment fees.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Product Features (25%)</strong>
                    <p className="text-gray-700">Loan amount range, term flexibility, repayment options, extra repayment allowances, redraw facilities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Approval Speed & Process (20%)</strong>
                    <p className="text-gray-700">Average approval time, online application availability, document requirements, settlement speed.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Customer Experience (15%)</strong>
                    <p className="text-gray-700">Verified customer reviews, complaint resolution, AFCA complaints data, customer service quality.</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6 italic">
                Commission amounts do not influence rankings. We may earn higher commissions from some lenders, 
                but this does not affect their position in our comparison tables.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Leadership */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Leadership</h2>
          <Card className="border-blue-200">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-blue-600 text-white rounded-lg p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">Rostislav Sikora</h3>
                    <p className="text-blue-100 text-sm mb-4">
                      AI Search & Lending Expert • 25 years in banking • Specialization: online consumer lending
                    </p>
                    <div className="border-t border-blue-400 pt-4 mt-4">
                      <p className="text-3xl font-bold">25+</p>
                      <p className="text-blue-100 text-sm">YEARS IN BANKING & FINTECH</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">About the Founder</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Rostislav Sikora is a hands-on leader with 25 years of experience in banking and consumer finance. 
                    He helps companies design, launch, and scale online lending across markets—from licensing and compliance 
                    to scoring, antifraud, P&L ownership, and collections.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Over the last 20 years, the companies he built or led have issued loans to more than 2,000,000 people, 
                    totaling $5B in originations and achieving an average customer rating of 4.8 out of 5.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-blue-600">2M+</p>
                      <p className="text-xs text-gray-600">Customers Served</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-blue-600">$5B+</p>
                      <p className="text-xs text-gray-600">Total Loan Volume</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-blue-600">4.8/5</p>
                      <p className="text-xs text-gray-600">Average Rating</p>
                    </div>
                  </div>

                  <h5 className="font-semibold text-gray-900 mb-3">Key Milestones</h5>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Multitude (Ferratum)</strong> – 15 years: Scaled micro-loans across Europe from startup to multinational presence in 25 countries, culminating in a Frankfurt Stock Exchange listing.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Nigeria – Full Digital Transformation:</strong> Led shift from old-school banking to fully online bank, modernizing the entire credit lifecycle.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Confindo.com</strong> – 3 years: Built and scaled online loan comparison platform with performance-driven acquisition models.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>MonesTech (UK)</strong> – Recent Launch: Launched and scaled online lending in the UK in under 12 months with full go-to-market execution.</span>
                    </li>
                  </ul>

                  <h5 className="font-semibold text-gray-900 mb-3">Connect with Rostislav</h5>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://www.linkedin.com/in/rostislav-sikora" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                    <a 
                      href="https://confindo.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-white text-blue-600 text-sm font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      Confindo.com
                    </a>
                    <a 
                      href="https://monestech.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-white text-blue-600 text-sm font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      MonesTech.com
                    </a>
                    <a 
                      href="https://multitude.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-white text-blue-600 text-sm font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      Multitude.com
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Company Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Company Information</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Legal Entity</h3>
                  <p className="text-gray-700">Maloni s.r.o.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Service Type</h3>
                  <p className="text-gray-700">Loan Comparison Platform (Not a Lender)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Regulatory Scope</h3>
                  <p className="text-gray-700">ASIC-licensed lenders only</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Coverage</h3>
                  <p className="text-gray-700">All 8 Australian states & territories</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Important:</strong> Loan-Platform.com is not a credit provider. We do not issue loans, 
                  make lending decisions, or determine your interest rate. All credit decisions are made by 
                  ASIC-licensed lenders based on their responsible lending obligations under the NCCP Act.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact & Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Consumer Protection Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-700">
                  <a href="https://asic.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    ASIC (Australian Securities and Investments Commission)
                  </a>
                </p>
                <p className="text-gray-700">
                  <a href="https://www.afca.org.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    AFCA (Australian Financial Complaints Authority)
                  </a>
                </p>
                <p className="text-gray-700">
                  <a href="https://moneysmart.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    MoneySmart.gov.au (Free Financial Guidance)
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Learn More</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  <Link href="/au/responsible-lending" className="text-blue-600 hover:underline">
                    Responsible Lending Guide
                  </Link>
                </p>
                <p>
                  <Link href="/au/disclosures" className="text-blue-600 hover:underline">
                    Full Affiliate Disclosures
                  </Link>
                </p>
                <p>
                  <Link href="/au/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>
                </p>
                <p>
                  <Link href="/au/terms" className="text-blue-600 hover:underline">
                    Terms of Service
                  </Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Compare Loans?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Explore ASIC-licensed lenders across Australia and find the best loan for your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/au/apply" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Compare Loans Now
                </Link>
                <Link href="/au/states" className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                  Browse by State
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
