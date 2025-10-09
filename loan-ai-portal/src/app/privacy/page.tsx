import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - How We Protect Your Data | Loan AI Portal',
  description: 'Learn how Loan AI Portal protects your personal and financial information. GLBA compliant, 256-bit SSL encryption, secure data handling for USA customers. Partnership with RoundSky technology.',
  keywords: 'privacy policy, loan privacy, data protection, secure loans, financial privacy, GLBA compliance, data security, personal information protection',
  alternates: {
    canonical: 'https://loan-platform.com/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-blue-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last Updated: October 1, 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12 prose prose-lg max-w-none">
            
            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Loan AI Portal ("we," "our," or "us") is committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you visit our website and use our loan matching 
                services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We operate in cooperation with <a href="https://www.roundsky.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">RoundSky</a>, 
                a trusted technology partner that powers parts of our platform. By using our services, you 
                consent to the data practices described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you apply for a loan through our platform, we collect the following types of personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address</li>
                <li><strong>Financial Information:</strong> Income, employment status, bank account information, and credit history</li>
                <li><strong>Identification Information:</strong> Social Security Number, date of birth, and government-issued ID</li>
                <li><strong>Loan Details:</strong> Loan amount requested, loan purpose, and financial situation</li>
                <li><strong>Device Information:</strong> IP address, browser type, device type, and operating system</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We automatically collect certain information when you visit our website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Cookies and similar tracking technologies</li>
                <li>Usage data (pages viewed, time spent, clicks)</li>
                <li>Referring website information</li>
                <li>Browser and device characteristics</li>
                <li>Geographic location (based on IP address)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Loan Matching:</strong> To match you with appropriate lenders from our network based on your financial profile</li>
                <li><strong>AI Analysis:</strong> To power our artificial intelligence algorithms that predict approval likelihood and find the best rates</li>
                <li><strong>Communication:</strong> To contact you regarding your loan application, send updates, and provide customer support</li>
                <li><strong>Verification:</strong> To verify your identity and prevent fraud</li>
                <li><strong>Service Improvement:</strong> To analyze usage patterns and improve our platform</li>
                <li><strong>Compliance:</strong> To comply with legal obligations and enforce our terms of service</li>
                <li><strong>Marketing:</strong> To send promotional materials about our services (with your consent)</li>
                <li><strong>Partner Integration:</strong> To facilitate our cooperation with RoundSky and other technology partners in delivering our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Information Sharing and Disclosure</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">With Lenders</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you submit a loan application, we share your information with lenders in our network who 
                may be able to provide you with loan offers. These lenders will use your information to evaluate 
                your application according to their own privacy policies.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">With Technology Partners</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We cooperate with <a href="https://www.roundsky.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">RoundSky</a> and 
                other trusted technology partners to operate our platform and deliver our services. These partners 
                may have access to your information as necessary to perform their functions, but they are 
                contractually obligated to maintain confidentiality and use the information only for authorized purposes.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">With Service Providers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information with third-party service providers who perform services on our behalf, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Credit bureaus and credit reporting agencies</li>
                <li>Identity verification services</li>
                <li>Payment processors</li>
                <li>Cloud hosting providers</li>
                <li>Analytics and marketing platforms</li>
                <li>Customer support tools</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Legal Requirements</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may disclose your information when required by law, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>In response to subpoenas, court orders, or legal processes</li>
                <li>To protect our rights, property, or safety</li>
                <li>To prevent fraud or illegal activities</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Encryption:</strong> All data transmission is protected using 256-bit SSL/TLS encryption</li>
                <li><strong>Secure Storage:</strong> Your information is stored on secure servers with restricted access</li>
                <li><strong>Access Controls:</strong> Only authorized personnel have access to personal information</li>
                <li><strong>Regular Audits:</strong> We conduct regular security audits and vulnerability assessments</li>
                <li><strong>Compliance:</strong> We comply with industry standards and regulatory requirements</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. 
                While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Essential Cookies:</strong> Necessary for website functionality and security</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You can control cookies through your browser settings. However, disabling certain cookies may 
                affect the functionality of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Your Privacy Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Opt-Out:</strong> Opt out of marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request your data in a portable format</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                <li><strong>Object:</strong> Object to certain types of processing</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at <strong>maloni@outlook.com</strong>. 
                We will respond to your request within 30 days.
              </p>
            </section>

            <section id="ccpa-rights" className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">California Privacy Rights (CCPA)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are a California resident, you have additional rights under the California Consumer 
                Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Right to know what personal information is collected, used, shared, or sold</li>
                <li>Right to delete personal information held by businesses</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to non-discrimination for exercising your CCPA rights</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We do not sell your personal information to third parties. You can nevertheless exercise the opt-out and
                sensitive data limitation rights described below using the dedicated forms.
              </p>
              <div id="ccpa-do-not-sell" className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-6">
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">Do Not Sell or Share My Personal Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  Submit your “Do Not Sell or Share” request by completing the secure web form linked below or by emailing
                  us with the subject line “CCPA Do Not Sell or Share” at{' '}
                  <a href="mailto:privacy@loan-platform.com" className="text-blue-600 hover:text-blue-800 font-semibold">privacy@loan-platform.com</a>.
                  We will confirm receipt and honor your request within 15 business days.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="https://loan-platform.com/forms/ccpa-do-not-sell"
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors"
                  >
                    Submit Do Not Sell Request
                  </Link>
                  <a
                    href="tel:+18005626264"
                    className="inline-flex items-center justify-center rounded-md border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition-colors hover:bg-blue-50"
                  >
                    Call (800) 562-6264 for CCPA Requests
                  </a>
                </div>
              </div>
              <div id="ccpa-limit-sensitive" className="mt-6 rounded-xl border border-purple-200 bg-purple-50 p-6">
                <h3 className="text-2xl font-semibold text-purple-900 mb-3">Limit the Use of My Sensitive Personal Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  You may direct us to use your sensitive personal information only for the services you request or as otherwise
                  permitted by California law. Complete the limitation request form below or email us with the subject line “Limit Use of Sensitive PI” at{' '}
                  <a href="mailto:privacy@loan-platform.com" className="text-blue-600 hover:text-blue-800 font-semibold">privacy@loan-platform.com</a>.
                  We will process limitation requests within 45 days (with the option to extend once, as permitted).
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="https://loan-platform.com/forms/ccpa-limit-sensitive"
                    className="inline-flex items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-purple-700 transition-colors"
                  >
                    Submit Sensitive PI Limitation
                  </Link>
                  <a
                    href="tel:+18005626264"
                    className="inline-flex items-center justify-center rounded-md border border-purple-600 px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm transition-colors hover:bg-purple-50"
                  >
                    Call (800) 562-6264 for Assistance
                  </a>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect 
                personal information from children. If we become aware that we have collected information from 
                a child under 18, we will take steps to delete that information promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites, including those of our lender partners 
                and technology partners like <a href="https://www.roundsky.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">RoundSky</a>. 
                We are not responsible for the privacy practices of these third parties. We encourage you to 
                review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">International Users</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are based in the United States and are intended for users in the U.S. If you 
                access our services from outside the U.S., please be aware that your information may be 
                transferred to, stored, and processed in the United States where our servers are located and 
                our central database is operated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined 
                in this Privacy Policy, unless a longer retention period is required or permitted by law. 
                When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or 
                legal requirements. We will notify you of any material changes by posting the new Privacy Policy 
                on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy 
                periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-900 mb-2"><strong>Loan AI Portal</strong></p>
                <p className="text-gray-700 mb-2">
                  Email: <a href="mailto:maloni@outlook.com" className="text-blue-600 hover:text-blue-800 font-semibold">maloni@outlook.com</a>
                </p>
                <p className="text-gray-700">
                  For more information, visit our <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-semibold">Contact Page</Link>.
                </p>
              </div>
            </section>

            <section id="roundsky-data-processing" className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Technology Partnership</h2>
              <p className="text-gray-700 leading-relaxed">
                Our platform operates in cooperation with <a href="https://www.roundsky.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">RoundSky</a>, 
                a trusted technology partner. RoundSky may process certain data on our behalf to deliver core 
                platform functionality. RoundSky is contractually required to maintain the confidentiality and 
                security of any personal information they process for us and to use such information only for 
                authorized purposes. The cooperation is governed by a formal Data Processing Agreement (DPA) that 
                outlines the technical and organizational safeguards RoundSky must follow. For more information about 
                RoundSky's privacy practices, please visit their website.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Consent</h2>
              <p className="text-gray-700 leading-relaxed">
                By using our website and services, you consent to our Privacy Policy and agree to its terms. 
                If you do not agree with this policy, please do not use our services.
              </p>
            </section>

          </div>

          {/* Quick Links */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Related Information
            </h2>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <Link href="/terms" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="font-semibold text-blue-900">Terms of Service</div>
              </Link>
              <Link href="/contact" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="font-semibold text-blue-900">Contact Us</div>
              </Link>
              <Link href="/about" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="font-semibold text-blue-900">About Us</div>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
