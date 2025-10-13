import type { Metadata } from 'next'
import Link from 'next/link'
import CanadaNavigation from '@/components/canada/canada-navigation'
import CanadaFooter from '@/components/canada/canada-footer'

export const metadata: Metadata = {
  title: 'Terms of Service - LoansAI Canada',
  description: 'Terms of service for LoansAI Canada. Review the terms and conditions governing the use of our loan comparison and referral service.',
  robots: 'noindex, follow',
}

export default function CanadaTermsPage() {
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
                <li className="text-gray-900 font-semibold">Terms of Service</li>
              </ol>
            </nav>

            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-gray-600 mb-8">
                <strong>Last Updated:</strong> October 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing or using LoansAI Canada's website and services, you agree to be bound by these Terms of Service 
                  and our Privacy Policy. If you do not agree with any part of these terms, you must not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>
                <p className="text-gray-700 mb-4">
                  LoansAI Canada operates as a loan comparison and referral service. We:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Compare loan offers from multiple licensed lenders</li>
                  <li>Provide information about personal loans and lending regulations in Canada</li>
                  <li>Refer qualified applicants to licensed lenders</li>
                  <li>Facilitate the loan application process</li>
                </ul>
                <p className="text-gray-700 mb-4 font-semibold">
                  Important: We are NOT a lender and do not make credit decisions. All loan offers come from third-party 
                  licensed lenders, and your loan agreement will be directly with the lender you choose.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility</h2>
                <p className="text-gray-700 mb-4">
                  To use our services, you must:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Be at least 18 years of age</li>
                  <li>Be a Canadian citizen or permanent resident</li>
                  <li>Reside in a Canadian province or territory</li>
                  <li>Have the legal capacity to enter into a binding contract</li>
                  <li>Provide accurate and complete information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">User Obligations</h2>
                <p className="text-gray-700 mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Not use the service for fraudulent or illegal purposes</li>
                  <li>Not attempt to circumvent security measures</li>
                  <li>Not submit false or misleading information</li>
                  <li>Review loan terms carefully before accepting any offer</li>
                  <li>Comply with all applicable federal and provincial laws</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Loan Application Process</h2>
                <p className="text-gray-700 mb-4">
                  When you submit a loan application through our service:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>We share your information with licensed lenders in our network</li>
                  <li>Lenders may perform credit checks (soft or hard inquiries)</li>
                  <li>You may receive loan offers from one or more lenders</li>
                  <li>You are under no obligation to accept any offer</li>
                  <li>Each lender has its own terms, conditions, and approval criteria</li>
                  <li>Approval and loan terms are solely at the lender's discretion</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Fees and Compensation</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Our Service:</strong> Using LoansAI Canada's comparison and referral service is free. 
                  We do not charge consumers any fees for submitting loan applications or receiving loan offers.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Affiliate Compensation:</strong> We may earn compensation from lenders when you are referred 
                  to them and/or when a loan is funded. This compensation does not affect the loan terms you receive 
                  or increase your costs.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Lender Fees:</strong> Lenders may charge fees for their loans including origination fees, 
                  late payment fees, and prepayment penalties. These fees are disclosed by the lender in your loan agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimers and Limitations</h2>
                <p className="text-gray-700 mb-4">
                  <strong>No Guarantee of Approval:</strong> We do not guarantee that you will be approved for a loan 
                  or receive any particular loan terms.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Information Accuracy:</strong> While we strive to provide accurate information, we do not 
                  guarantee the accuracy, completeness, or timeliness of any information on our website. Loan rates 
                  and terms are subject to change without notice.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Third-Party Lenders:</strong> We are not responsible for the actions, products, or services 
                  of third-party lenders. Your loan agreement is directly with the lender.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Financial Advice:</strong> The information provided on our website is for informational 
                  purposes only and does not constitute financial, legal, or tax advice. Consult with qualified 
                  professionals before making financial decisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  All content on the LoansAI Canada website, including text, graphics, logos, images, and software, 
                  is the property of LoansAI or its content providers and protected by Canadian and international 
                  copyright and intellectual property laws.
                </p>
                <p className="text-gray-700 mb-4">
                  You may not reproduce, distribute, modify, or create derivative works without our express written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  To the maximum extent permitted by Canadian law, LoansAI Canada shall not be liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Any indirect, incidental, special, or consequential damages</li>
                  <li>Loss of profits, revenue, or data</li>
                  <li>Decisions made based on information from our website</li>
                  <li>Actions or omissions of third-party lenders</li>
                  <li>Unauthorized access to your personal information</li>
                  <li>Interruption or termination of our services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
                <p className="text-gray-700 mb-4">
                  You agree to indemnify and hold harmless LoansAI Canada, its affiliates, and their respective 
                  officers, directors, employees, and agents from any claims, losses, damages, liabilities, and 
                  expenses arising from:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Your use of our services</li>
                  <li>Your violation of these Terms of Service</li>
                  <li>Your violation of any applicable laws or regulations</li>
                  <li>Inaccurate or misleading information you provide</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to suspend or terminate your access to our services at any time, without 
                  notice, for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Violation of these Terms of Service</li>
                  <li>Fraudulent or illegal activity</li>
                  <li>Misuse of our services</li>
                  <li>Any reason we deem appropriate</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Jurisdiction</h2>
                <p className="text-gray-700 mb-4">
                  These Terms of Service shall be governed by and construed in accordance with the laws of Canada 
                  and the province in which you reside. Any disputes arising from these terms shall be subject to 
                  the exclusive jurisdiction of the courts in that province.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective 
                  immediately upon posting with an updated "Last Updated" date. Your continued use of our services 
                  after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Severability</h2>
                <p className="text-gray-700 mb-4">
                  If any provision of these Terms of Service is found to be unenforceable or invalid, that provision 
                  shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall 
                  remain in full force and effect.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  For questions about these Terms of Service, contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> legal@loansai.com
                  </p>
                  <p className="text-gray-700">
                    <strong>LoansAI Canada Legal Department</strong>
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
