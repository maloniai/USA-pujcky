import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ShieldCheck, Eye, Lock, UserCheck, Database, Mail, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy – How We Protect Your Data | Australian Privacy Act',
  description: 'Our commitment to your privacy. Learn how we collect, use, protect, and manage your personal information in compliance with the Australian Privacy Act 1988.',
  keywords: 'privacy policy, Australian Privacy Act, data protection, personal information, GDPR, consumer rights Australia',
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 2025'

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Lock className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Loan Platform Australia is committed to protecting your privacy. This policy explains how we collect, 
            use, disclose, and safeguard your personal information in accordance with the Australian Privacy Act 1988.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            <strong>Last Updated:</strong> {lastUpdated}
          </p>
        </header>

        {/* Quick Summary */}
        <div className="mb-12">
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Privacy at a Glance</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm">
                    <strong>We're a comparison platform</strong> — not a lender. We connect you with ASIC-licensed lenders.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Eye className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm">
                    <strong>We collect minimal data</strong> — only what's needed to match you with suitable lenders.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Lock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm">
                    <strong>We secure your information</strong> — using encryption and industry-standard security measures.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <UserCheck className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm">
                    <strong>You control your data</strong> — access, correct, or delete your information anytime.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Who We Are */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Loan Platform Australia</strong> (operated by <strong>Maloni s.r.o.</strong>) is a loan 
                comparison service that helps Australian consumers find suitable personal loans from ASIC-licensed lenders. 
                We do not issue loans directly, nor do we make credit decisions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you use our service, you provide information that helps us:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Understand your loan needs and financial situation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Match you with appropriate ASIC-licensed lenders</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Share your application with selected lenders (with your consent)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Improve our platform and provide customer support</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4 italic">
                This privacy policy covers information collected by Loan Platform Australia only. Once you proceed 
                to a lender's website or submit an application, that lender's privacy policy applies.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Database className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  When you use our comparison service, we may collect:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Contact details:</strong> name, email, phone number, address</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Financial information:</strong> income, employment status, expenses, existing debts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Loan requirements:</strong> amount needed, purpose, preferred term</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Identification:</strong> date of birth, residency status (to verify eligibility)</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  We collect this information directly from you when you complete our online form or contact us.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Usage & Technical Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We automatically collect certain technical information:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Device data:</strong> IP address, browser type, operating system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Usage data:</strong> pages viewed, time spent, click patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Location data:</strong> approximate location based on IP address</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Cookies:</strong> session IDs, preferences, analytics tags</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  This information helps us understand how users interact with our platform and improve performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                We use your personal information for the following purposes, in accordance with the Australian Privacy Principles (APPs):
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
                    Loan Matching & Referrals
                  </h3>
                  <p className="text-gray-700 ml-9">
                    We share your application with selected ASIC-licensed lenders who offer products matching your 
                    requirements. You consent to this sharing when you submit your application.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
                    Communication & Support
                  </h3>
                  <p className="text-gray-700 ml-9">
                    We may contact you via email, SMS, or phone to confirm your application, provide loan comparisons, 
                    or offer customer support. You can opt out of marketing communications at any time.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
                    Platform Improvement
                  </h3>
                  <p className="text-gray-700 ml-9">
                    We analyse aggregated, de-identified data to improve our service, understand user needs, and develop 
                    new features. This data cannot be used to identify you personally.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">4</span>
                    Legal & Regulatory Compliance
                  </h3>
                  <p className="text-gray-700 ml-9">
                    We may use or disclose your information to comply with Australian law, ASIC regulations, court orders, 
                    or to prevent fraud and illegal activity.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">5</span>
                    Marketing (With Consent)
                  </h3>
                  <p className="text-gray-700 ml-9">
                    With your consent, we may send you information about related financial products, educational content, 
                    or platform updates. You can unsubscribe anytime via the link in our emails.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Information Sharing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Share Your Information With</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>ASIC-Licensed Lenders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  When you submit a loan application, we share your information with selected lenders who:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Hold an Australian Credit Licence (ACL)</li>
                  <li>• Offer products matching your requirements</li>
                  <li>• Have agreed to our partner standards</li>
                </ul>
                <p className="text-sm text-gray-600 italic">
                  Each lender has their own privacy policy. Review these before accepting a loan offer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Providers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  We use trusted third-party service providers for:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Hosting & Infrastructure:</strong> Secure cloud storage and platform hosting</li>
                  <li>• <strong>Analytics:</strong> Understanding user behaviour (Google Analytics, etc.)</li>
                  <li>• <strong>Email & SMS:</strong> Sending communications and application updates</li>
                  <li>• <strong>Payment Processing:</strong> Handling commission payments from lenders (not from you)</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  All service providers are contractually required to protect your data and use it only for specified purposes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Legal Disclosures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We may disclose your information if required by law, including to:
                </p>
                <ul className="space-y-2 text-gray-700 mt-3">
                  <li>• Australian regulatory bodies (ASIC, AFCA)</li>
                  <li>• Law enforcement or government agencies (with valid legal authority)</li>
                  <li>• Courts or tribunals (in response to subpoenas or court orders)</li>
                  <li>• Fraud prevention agencies (to detect and prevent illegal activity)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Protect Your Information</h2>
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                We take data security seriously and implement industry-standard measures to protect your personal information:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Lock className="h-5 w-5 text-green-600 mr-2" />
                    Technical Safeguards
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• SSL/TLS encryption for data transmission</li>
                    <li>• Encrypted storage of sensitive information</li>
                    <li>• Firewalls and intrusion detection systems</li>
                    <li>• Regular security audits and vulnerability testing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                    Organisational Safeguards
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Limited access to personal data (need-to-know basis)</li>
                    <li>• Staff training on privacy and data protection</li>
                    <li>• Confidentiality agreements with employees and partners</li>
                    <li>• Incident response procedures for data breaches</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg border border-green-300">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> No method of online transmission or storage is 100% secure. While we strive to protect 
                  your information, we cannot guarantee absolute security. Please use strong passwords and keep your login 
                  credentials confidential.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Under the Australian Privacy Act 1988, you have the following rights regarding your personal information:
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <UserCheck className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Access Your Information</h4>
                    <p className="text-gray-700">
                      You can request a copy of the personal information we hold about you. We'll provide this within 
                      30 days (free of charge, unless the request is excessive).
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <UserCheck className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Correct Your Information</h4>
                    <p className="text-gray-700">
                      If your personal information is inaccurate, incomplete, or out of date, you can ask us to update it. 
                      We'll make corrections within a reasonable timeframe.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <UserCheck className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Delete Your Information</h4>
                    <p className="text-gray-700">
                      You can request deletion of your personal information, subject to legal retention requirements. 
                      We may need to keep certain records for compliance purposes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <UserCheck className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Opt-Out of Marketing</h4>
                    <p className="text-gray-700">
                      You can unsubscribe from marketing emails by clicking "Unsubscribe" in any email, or by contacting 
                      us directly. Note: You'll still receive essential service communications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <UserCheck className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Lodge a Complaint</h4>
                    <p className="text-gray-700">
                      If you believe we've mishandled your personal information, contact us first. If unresolved, you 
                      can complain to the <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Office of the Australian Information Commissioner (OAIC)</a>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700">
                  <strong>To exercise your rights, contact us:</strong><br />
                  Email: <a href="mailto:privacy@loan-platform.com" className="text-blue-600 hover:underline">privacy@loan-platform.com</a><br />
                  Include your full name, email address used on our platform, and details of your request.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cookies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies & Tracking Technologies</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                We use cookies and similar technologies to improve your experience on our platform:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                  <p className="text-gray-700">
                    Required for the platform to function (e.g., session management, security). Cannot be disabled.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                  <p className="text-gray-700">
                    Help us understand how users interact with our site (e.g., Google Analytics). You can opt out via 
                    browser settings or tools like <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics Opt-out</a>.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h4>
                  <p className="text-gray-700">
                    Track conversion from ads and affiliate referrals. Used to measure campaign effectiveness. You can 
                    manage these in your browser settings.
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6">
                Most browsers allow you to control cookies through settings. Note that disabling cookies may affect 
                platform functionality.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Data Retention */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-gray-700 mb-4 leading-relaxed">
                We retain your personal information only as long as necessary for the purposes outlined in this policy, 
                or as required by law:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>Application data:</strong> Retained for 7 years to comply with financial record-keeping 
                    requirements under Australian law.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>Marketing data:</strong> Retained until you unsubscribe or request deletion.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>Analytics data:</strong> Aggregated and anonymized data may be retained indefinitely.
                  </span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4 italic">
                After the retention period, we securely delete or anonymize your information.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Children's Privacy */}
        <section className="mb-12">
          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Children's Privacy</h3>
                  <p className="text-gray-700">
                    Our service is not intended for individuals under 18 years of age. We do not knowingly collect 
                    personal information from children. If you believe a child has provided us with information, 
                    please contact us immediately so we can delete it.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Changes to Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-gray-700 mb-4 leading-relaxed">
                We may update this privacy policy from time to time to reflect changes in our practices, technology, 
                or legal requirements. When we make material changes, we will:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Update the "Last Updated" date at the top of this page</li>
                <li>• Notify you via email (if you have an active application or account)</li>
                <li>• Display a notice on our website for 30 days</li>
              </ul>
              <p className="text-gray-700">
                We encourage you to review this policy periodically. Continued use of our service after changes 
                constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us About Privacy</h2>
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                If you have questions, concerns, or requests regarding this privacy policy or our data practices, 
                please contact us:
              </p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <strong>Email:</strong> <a href="mailto:privacy@loan-platform.com" className="text-blue-600 hover:underline">privacy@loan-platform.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <strong>Privacy Officer:</strong> Loan Platform Australia
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Database className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <strong>Legal Entity:</strong> Maloni s.r.o.
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6">
                We aim to respond to all privacy inquiries within 30 days.
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
                Your privacy is protected. Compare ASIC-licensed lenders with confidence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/au/apply" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Compare Loans Now
                </Link>
                <Link href="/au/responsible-lending" className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                  Responsible Lending
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
