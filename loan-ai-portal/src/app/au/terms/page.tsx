import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, AlertTriangle, Scale, ShieldAlert, UserX, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service – Loan Platform Australia | User Agreement',
  description: 'Terms and conditions for using Loan Platform Australia. Understand your rights, obligations, and our service limitations. ASIC-compliant comparison platform.',
  keywords: 'terms of service, user agreement, terms and conditions, loan platform, legal terms Australia',
}

export default function TermsOfServicePage() {
  const lastUpdated = 'January 2025'

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Scale className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These terms govern your use of Loan Platform Australia. By accessing or using our service, you agree 
            to be bound by these terms. Please read them carefully.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            <strong>Last Updated:</strong> {lastUpdated}
          </p>
        </header>

        {/* Important Notice */}
        <div className="mb-12">
          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Important: We Are Not a Lender</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Loan Platform Australia is a <strong>comparison service only</strong>. We do not issue loans, 
                    make credit decisions, or determine interest rates. All loan applications are submitted directly 
                    to ASIC-licensed lenders, who make independent lending decisions based on their own criteria.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Agreement to Terms */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Agreement to Terms</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using Loan Platform Australia (the "Platform"), operated by <strong>Maloni s.r.o.</strong>, 
                you agree to:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Be bound by these Terms of Service and our Privacy Policy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Comply with all applicable Australian laws and regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Provide accurate and truthful information in all applications</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Accept that we may update these terms at any time</span>
                </li>
              </ul>
              <p className="text-gray-700">
                <strong>If you do not agree to these terms, you must not use the Platform.</strong>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Eligibility */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Eligibility</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-gray-700 mb-4">
                To use the Platform and submit loan applications, you must:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Be at least <strong>18 years of age</strong></span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Be an <strong>Australian citizen or permanent resident</strong></span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Have the legal capacity to <strong>enter into a binding contract</strong></span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Provide <strong>accurate and verifiable information</strong></span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6">
                Note: Lenders may have additional eligibility requirements. Meeting our criteria does not guarantee 
                loan approval.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Our Service */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Description of Service</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>What We Do</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Loan Platform Australia provides the following services:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Comparison Tool:</strong> Display loan products from ASIC-licensed lenders based on your criteria</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Referral Service:</strong> Connect you with lenders who may offer suitable products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Information Hub:</strong> Provide educational content about borrowing and financial literacy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Application Submission:</strong> Forward your application to selected lenders (with your consent)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What We Do Not Do</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We explicitly do <strong>NOT</strong>:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <UserX className="h-5 w-5 text-red-600 flex-shrink-0 mr-2 mt-0.5" />
                    <span>Issue loans or provide credit directly</span>
                  </li>
                  <li className="flex items-start">
                    <UserX className="h-5 w-5 text-red-600 flex-shrink-0 mr-2 mt-0.5" />
                    <span>Make lending decisions or approve/reject applications</span>
                  </li>
                  <li className="flex items-start">
                    <UserX className="h-5 w-5 text-red-600 flex-shrink-0 mr-2 mt-0.5" />
                    <span>Set interest rates, fees, or loan terms</span>
                  </li>
                  <li className="flex items-start">
                    <UserX className="h-5 w-5 text-red-600 flex-shrink-0 mr-2 mt-0.5" />
                    <span>Guarantee loan approval or specific outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <UserX className="h-5 w-5 text-red-600 flex-shrink-0 mr-2 mt-0.5" />
                    <span>Provide financial advice or credit counselling</span>
                  </li>
                  <li className="flex items-start">
                    <UserX className="h-5 w-5 text-red-600 flex-shrink-0 mr-2 mt-0.5" />
                    <span>Handle loan disbursements, repayments, or collections</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* User Obligations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Your Obligations</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                When using the Platform, you agree to:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">4.1 Provide Accurate Information</h4>
                  <p className="text-gray-700">
                    You must provide truthful, accurate, and complete information in all applications. Providing 
                    false or misleading information may constitute fraud and can result in legal consequences.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">4.2 Maintain Confidentiality</h4>
                  <p className="text-gray-700">
                    You are responsible for maintaining the confidentiality of any account credentials and for all 
                    activities that occur under your account.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">4.3 Use the Platform Legally</h4>
                  <p className="text-gray-700">
                    You must not use the Platform for any illegal purpose, including but not limited to fraud, 
                    money laundering, identity theft, or violations of the NCCP Act.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">4.4 Respect Intellectual Property</h4>
                  <p className="text-gray-700">
                    All content, trademarks, and intellectual property on the Platform belong to Maloni s.r.o. or 
                    our licensors. You may not copy, reproduce, or distribute our content without written permission.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">4.5 No Unauthorised Access</h4>
                  <p className="text-gray-700">
                    You must not attempt to gain unauthorised access to the Platform, other users' accounts, or 
                    our systems through hacking, scraping, or any other means.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Lender Relationships */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Relationships with Lenders</h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">5.1 Affiliate Commissions</h4>
                  <p className="text-gray-700">
                    We receive commissions from lenders when users successfully obtain loans through our referrals. 
                    These commissions do not affect the interest rate or terms you receive, nor do you pay any fees 
                    to use our Platform. See our <Link href="/au/disclosures" className="text-blue-600 hover:underline">Disclosures</Link> for more details.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">5.2 Independent Lender Decisions</h4>
                  <p className="text-gray-700">
                    Lenders make independent decisions about loan approvals, interest rates, and terms. We do not 
                    influence these decisions. Submitting an application through our Platform does not guarantee 
                    approval.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">5.3 Lender Terms Apply</h4>
                  <p className="text-gray-700">
                    Once you proceed to a lender's website or accept a loan offer, you enter into a direct relationship 
                    with that lender. Their terms, conditions, and privacy policy apply. We are not responsible for 
                    lender conduct, loan servicing, or disputes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">5.4 ASIC-Licensed Lenders Only</h4>
                  <p className="text-gray-700">
                    We only refer users to lenders who hold a valid Australian Credit Licence (ACL) issued by ASIC. 
                    However, we do not guarantee lenders' ongoing compliance or performance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Disclaimers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Disclaimers</h2>
          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <ShieldAlert className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">6.1 No Guarantees</h4>
                    <p className="text-gray-700">
                      We do not guarantee that you will be approved for a loan, that you will receive a specific 
                      interest rate or loan amount, or that the Platform will always be available without interruption.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <ShieldAlert className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">6.2 Information Accuracy</h4>
                    <p className="text-gray-700">
                      While we strive to provide accurate and up-to-date information, we do not warrant that all 
                      information on the Platform is complete, correct, or current. Lender rates and terms may change 
                      without notice.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <ShieldAlert className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">6.3 Not Financial Advice</h4>
                    <p className="text-gray-700">
                      Content on the Platform is for general information only and does not constitute financial, 
                      legal, or tax advice. You should consult a licensed financial adviser or counsellor before 
                      making borrowing decisions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <ShieldAlert className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">6.4 Third-Party Links</h4>
                    <p className="text-gray-700">
                      The Platform may contain links to third-party websites (including lenders). We are not responsible 
                      for the content, accuracy, or practices of these external sites.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Limitation of Liability</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-gray-700 mb-4 leading-relaxed">
                To the maximum extent permitted by Australian law:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">7.1 No Liability for Lender Actions</h4>
                  <p className="text-gray-700">
                    We are not liable for any actions, omissions, decisions, or conduct of lenders, including but 
                    not limited to denial of applications, interest rates charged, loan terms, customer service, 
                    or breach of contract.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">7.2 Consequential Damages</h4>
                  <p className="text-gray-700">
                    We are not liable for any indirect, incidental, consequential, or punitive damages arising from 
                    your use of the Platform, including loss of income, credit score impacts, or financial losses.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">7.3 Platform Availability</h4>
                  <p className="text-gray-700">
                    We are not liable for any losses resulting from Platform downtime, technical errors, data breaches 
                    (subject to our Privacy Policy obligations), or security vulnerabilities.
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6 italic">
                Note: This limitation does not exclude liability that cannot be excluded under Australian Consumer Law, 
                such as liability for misleading or deceptive conduct.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Indemnification */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Indemnification</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify and hold harmless Maloni s.r.o., its officers, employees, and affiliates from 
                any claims, damages, losses, or expenses (including legal fees) arising from:
              </p>
              <ul className="space-y-2 text-gray-700 mt-4">
                <li>• Your violation of these Terms of Service</li>
                <li>• Your violation of any applicable laws or regulations</li>
                <li>• Providing false or misleading information in applications</li>
                <li>• Your use of the Platform in a manner not authorised by these terms</li>
                <li>• Infringement of third-party intellectual property or privacy rights</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Termination */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Termination</h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">9.1 Your Right to Terminate</h4>
                  <p className="text-gray-700">
                    You may stop using the Platform at any time. To request deletion of your data, see our <Link href="/au/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">9.2 Our Right to Terminate</h4>
                  <p className="text-gray-700">
                    We may suspend or terminate your access to the Platform at any time if you violate these terms, 
                    engage in fraudulent activity, or for any other reason at our sole discretion.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">9.3 Effect of Termination</h4>
                  <p className="text-gray-700">
                    Upon termination, your right to use the Platform ceases immediately. Sections of these terms that 
                    by their nature should survive termination (including disclaimers, limitations of liability, and 
                    indemnification) will remain in effect.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Governing Law */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Governing Law & Disputes</h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">10.1 Australian Law</h4>
                  <p className="text-gray-700">
                    These Terms of Service are governed by the laws of Australia. Any disputes will be subject to the 
                    exclusive jurisdiction of the courts of Australia.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">10.2 Dispute Resolution</h4>
                  <p className="text-gray-700">
                    If you have a complaint or dispute:
                  </p>
                  <ol className="space-y-2 text-gray-700 mt-3 ml-6">
                    <li>1. Contact us directly at <a href="mailto:support@loan-platform.com" className="text-blue-600 hover:underline">support@loan-platform.com</a></li>
                    <li>2. If unresolved within 30 days, you may escalate to AFCA (for credit-related matters) or the relevant consumer protection authority</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Changes to Terms */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Changes to These Terms</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-gray-700 mb-4 leading-relaxed">
                We may update these Terms of Service from time to time. When we make material changes:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• We will update the "Last Updated" date at the top of this page</li>
                <li>• We will notify you via email (if we have your contact details)</li>
                <li>• We will display a notice on the Platform for at least 30 days</li>
              </ul>
              <p className="text-gray-700">
                Your continued use of the Platform after changes take effect constitutes acceptance of the updated terms.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Contact Information</h2>
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-8">
              <p className="text-gray-700 mb-4 leading-relaxed">
                For questions or concerns about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> <a href="mailto:support@loan-platform.com" className="text-blue-600 hover:underline">support@loan-platform.com</a></p>
                <p><strong>Legal Entity:</strong> Maloni s.r.o.</p>
                <p><strong>Service:</strong> Loan Platform Australia</p>
              </div>
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
                By using our Platform, you agree to these terms. Compare ASIC-licensed lenders with confidence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/au/apply" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Compare Loans Now
                </Link>
                <Link href="/au/about" className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                  About Our Service
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
