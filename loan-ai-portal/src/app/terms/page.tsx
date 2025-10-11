import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Loan Platform Usage Agreement | Loan AI Portal',
  description: 'Read our Terms of Service for using Loan AI Portal. Legal agreement covering service usage, lender relationships, arbitration, and user responsibilities for USA customers.',
  keywords: 'terms of service, loan terms, user agreement, legal terms, service agreement, loan platform terms, usage terms, lending agreement',
  alternates: {
    canonical: 'https://loan-platform.com/terms',
  },
}

export default function TermsPage() {
  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-blue-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last Updated: October 1, 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12 prose prose-lg max-w-none">
            
            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and 
                Loan AI Portal ("we," "us," or "our") regarding your use of our website and loan matching 
                services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our platform operates in cooperation with <a href="https://www.roundsky.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">RoundSky</a>, 
                a trusted technology partner. Certain services and functionalities are provided through our 
                partnership with RoundSky, and your use of our platform may be subject to additional terms 
                and conditions from our partner lenders.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE OUR SERVICES.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Description of Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Loan AI Portal is an AI-powered loan matching platform that connects borrowers with potential 
                lenders. We provide the following services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>AI-powered loan matching technology to connect you with suitable lenders</li>
                <li>Access to a network of 100+ licensed lenders</li>
                <li>Loan comparison tools and educational resources</li>
                <li>Application assistance and customer support</li>
                <li>State-specific loan information and regulatory guidance</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                <strong>Important:</strong> We are NOT a lender. We do not make loans or credit decisions. 
                We operate as a loan matching service that connects borrowers with third-party lenders. 
                The actual loan terms, approval, and funding are determined solely by the lenders in our network.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Eligibility Requirements</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To use our services, you must meet the following eligibility criteria:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Be at least 18 years of age or the age of majority in your state</li>
                <li>Be a legal resident of the United States</li>
                <li>Have a valid Social Security Number</li>
                <li>Have an active checking account in your name</li>
                <li>Have a valid email address and phone number</li>
                <li>Have regular income from employment or other verifiable sources</li>
                <li>Not be in active bankruptcy proceedings</li>
                <li>Have the legal capacity to enter into a binding contract</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                By submitting an application, you represent and warrant that you meet all eligibility 
                requirements and that all information provided is accurate and complete.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">User Account and Registration</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you submit a loan application through our platform:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You must provide accurate, current, and complete information</li>
                <li>You are responsible for maintaining the confidentiality of your account information</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
                <li>You are responsible for all activities that occur under your account</li>
                <li>You must not impersonate any person or entity or misrepresent your affiliation</li>
                <li>You must not use another person's information without authorization</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We reserve the right to suspend or terminate your account if we suspect fraudulent activity 
                or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Loan Matching Process</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">How It Works</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you submit a loan request:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
                <li>Your information is securely transmitted to our AI matching system</li>
                <li>Our algorithms analyze your profile and match you with suitable lenders</li>
                <li>Qualified lenders from our network may review your application</li>
                <li>Lenders may contact you directly with loan offers</li>
                <li>You are under no obligation to accept any offer</li>
              </ol>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">No Guarantee of Approval</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Submitting an application through our platform does NOT guarantee that you will:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Be matched with a lender</li>
                <li>Receive a loan offer</li>
                <li>Be approved for a loan</li>
                <li>Receive specific loan terms or interest rates</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                All lending decisions are made solely by the individual lenders based on their own 
                underwriting criteria and policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Lender Relationships</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are connected with a lender and receive a loan offer:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Any loan agreement will be directly between you and the lender</li>
                <li>You must carefully review all loan terms, conditions, and disclosures</li>
                <li>Each lender operates under its own terms of service and privacy policy</li>
                <li>We are not responsible for the actions or practices of third-party lenders</li>
                <li>You should contact the lender directly with questions about your loan</li>
                <li>All loan obligations are between you and your lender</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our lender network includes licensed and regulated financial institutions. However, we 
                recommend that you independently verify any lender's credentials before accepting a loan offer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Fees and Costs</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Our Service is FREE.</strong> Loan AI Portal does not charge borrowers any fees 
                for using our loan matching service, submitting applications, or being connected with lenders.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                However, please be aware:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Lenders may charge fees including origination fees, late fees, and prepayment penalties</li>
                <li>Interest rates and APRs vary by lender and your creditworthiness</li>
                <li>You are responsible for reviewing and understanding all lender fees</li>
                <li>We receive compensation from lenders when we successfully match borrowers</li>
                <li>Our compensation does not affect the loan terms you receive</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Credit Checks and Inquiries</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By submitting an application through our platform, you authorize:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Us and our partner lenders to obtain consumer reports and credit information</li>
                <li>Soft credit inquiries that do not impact your credit score</li>
                <li>Hard credit inquiries by lenders during the loan approval process (may affect credit score)</li>
                <li>Verification of your employment, income, and identity</li>
                <li>Communication via phone, email, or text message regarding your application</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                This authorization remains in effect for a reasonable period to allow lenders to process 
                your application and remains valid for future applications if you choose to reapply.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Electronic Communications Consent</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using our services, you consent to receive electronic communications from us and our 
                partner lenders, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Email communications regarding your application status</li>
                <li>Text messages (SMS) with loan offers and updates</li>
                <li>Phone calls from lenders and customer service representatives</li>
                <li>Automated messages and notifications</li>
                <li>Marketing communications (you may opt out at any time)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You may opt out of marketing communications by following the unsubscribe instructions in 
                our emails or contacting us at <a href="mailto:maloni@outlook.com" className="text-blue-600 hover:text-blue-800 font-semibold">maloni@outlook.com</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Technology Partnership</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our platform operates in cooperation with <a href="https://www.roundsky.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">RoundSky</a>, 
                a trusted technology partner that provides:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Platform infrastructure and technical services</li>
                <li>Application form and submission technology</li>
                <li>Data processing and security services</li>
                <li>Integration with lender networks</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                By using our services, you acknowledge that RoundSky may process your application data 
                as a service provider on our behalf. RoundSky is contractually obligated to maintain the 
                confidentiality and security of your information and to use it only for authorized purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Prohibited Uses</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree NOT to use our services for any unlawful purpose or any purpose prohibited by 
                these Terms. Prohibited activities include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Providing false, inaccurate, or misleading information</li>
                <li>Impersonating another person or using another person's information</li>
                <li>Attempting to defraud us, lenders, or other users</li>
                <li>Using automated systems (bots, scrapers) to access our services</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Interfering with or disrupting our services or servers</li>
                <li>Transmitting viruses, malware, or harmful code</li>
                <li>Violating any applicable laws, regulations, or third-party rights</li>
                <li>Harassing, abusing, or threatening our staff or lenders</li>
                <li>Submitting multiple applications with different information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on our website, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Text, graphics, logos, images, and videos</li>
                <li>Software, algorithms, and AI technology</li>
                <li>Website design and user interface</li>
                <li>Trademarks and service marks</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                are owned by or licensed to Loan AI Portal and are protected by copyright, trademark, and 
                other intellectual property laws. You may not reproduce, distribute, modify, or create 
                derivative works without our express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Privacy and Data Protection</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your use of our services is also governed by our <Link href="/privacy" className="text-blue-600 hover:text-blue-800 font-semibold">Privacy Policy</Link>, 
                which explains how we collect, use, and protect your personal information. By using our 
                services, you consent to our data practices as described in the Privacy Policy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Key privacy points:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                <li>We use industry-standard encryption and security measures</li>
                <li>Your information is shared only with qualified lenders and service providers</li>
                <li>You have rights to access, correct, and delete your personal information</li>
                <li>We comply with federal and state privacy regulations including CCPA</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Disclaimers and Limitations of Liability</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Service Provided "As Is"</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, 
                EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS 
                FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">No Guarantee of Results</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>That you will be matched with a lender</li>
                <li>That you will receive a loan offer or approval</li>
                <li>Any specific loan terms, rates, or amounts</li>
                <li>The accuracy or completeness of third-party lender information</li>
                <li>Uninterrupted or error-free service</li>
                <li>That our AI matching technology will meet your expectations</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, LOAN AI PORTAL, ITS OFFICERS, DIRECTORS, EMPLOYEES, 
                AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR 
                PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF OUR SERVICES, INCLUDING BUT NOT 
                LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our total liability to you for all claims arising from or related to these Terms or your 
                use of our services shall not exceed $100.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Third-Party Links and Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may contain links to third-party websites, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Lender websites and loan application portals</li>
                <li>Partner services such as <a href="https://www.roundsky.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">RoundSky</a></li>
                <li>Credit bureaus and financial education resources</li>
                <li>Social media platforms and other external sites</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We are not responsible for the content, privacy practices, or terms of service of any 
                third-party websites. Your interactions with third parties are governed by their own 
                terms and policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">State-Specific Disclosures</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Loan terms and regulations vary by state. Our services comply with applicable state lending 
                laws and regulations. Some states have specific requirements regarding:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Maximum loan amounts and interest rates</li>
                <li>Loan terms and repayment periods</li>
                <li>Licensing requirements for lenders</li>
                <li>Consumer protection disclosures</li>
                <li>Cooling-off periods and right to rescind</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                For state-specific information, please visit our <Link href="/states" className="text-blue-600 hover:text-blue-800 font-semibold">States Page</Link> or 
                review the disclosures provided by your matched lender.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Dispute Resolution and Arbitration</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Informal Resolution</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have a dispute with us, you agree to first contact us at <a href="mailto:maloni@outlook.com" className="text-blue-600 hover:text-blue-800 font-semibold">maloni@outlook.com</a> to 
                attempt to resolve the dispute informally.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Binding Arbitration</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If we cannot resolve the dispute informally, you agree that any dispute arising out of or 
                relating to these Terms or our services shall be resolved through binding arbitration in 
                accordance with the rules of the American Arbitration Association, rather than in court.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Class Action Waiver</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                YOU AGREE THAT ANY ARBITRATION OR PROCEEDING SHALL BE LIMITED TO THE DISPUTE BETWEEN YOU 
                AND US INDIVIDUALLY. YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION OR CLASS-WIDE 
                ARBITRATION.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Exceptions</h3>
              <p className="text-gray-700 leading-relaxed">
                Either party may seek injunctive or other equitable relief in court to prevent the actual 
                or threatened infringement, misappropriation, or violation of intellectual property rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United 
                States and the state in which we operate, without regard to conflict of law principles. 
                Any legal action or proceeding relating to these Terms (other than arbitration) shall be 
                brought exclusively in the federal or state courts located in our jurisdiction, and you 
                consent to personal jurisdiction in such courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to suspend or terminate your access to our services at any time, with 
                or without cause or notice, for any reason including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Violation of these Terms</li>
                <li>Suspected fraudulent or illegal activity</li>
                <li>Non-payment or default on a loan from one of our lender partners</li>
                <li>Abusive behavior toward our staff or lenders</li>
                <li>Any other reason at our sole discretion</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Upon termination, your right to use our services will immediately cease. The provisions of 
                these Terms that by their nature should survive termination shall survive, including but not 
                limited to intellectual property provisions, disclaimers, and limitations of liability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of material 
                changes by posting the updated Terms on our website and updating the "Last Updated" date. 
                Your continued use of our services after any changes constitutes your acceptance of the 
                new Terms. We encourage you to review these Terms periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the 
                remaining provisions shall continue in full force and effect. The invalid or unenforceable 
                provision shall be replaced with a valid and enforceable provision that most closely 
                achieves the original intent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Entire Agreement</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms, together with our Privacy Policy and any other legal notices or agreements 
                published on our website, constitute the entire agreement between you and Loan AI Portal 
                regarding your use of our services and supersede all prior agreements and understandings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions, concerns, or complaints regarding these Terms of Service, please contact us:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-900 mb-2"><strong>Loan AI Portal</strong></p>
                <p className="text-gray-700 mb-2">
                  Email: <a href="mailto:maloni@outlook.com" className="text-blue-600 hover:text-blue-800 font-semibold">maloni@outlook.com</a>
                </p>
                <p className="text-gray-700 mb-2">
                  Business Hours: Monday-Friday, 9 AM - 5 PM EST
                </p>
                <p className="text-gray-700">
                  For more information, visit our <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-semibold">Contact Page</Link>.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Acknowledgment</h2>
              <p className="text-gray-700 leading-relaxed">
                BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND 
                BY THESE TERMS OF SERVICE. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST IMMEDIATELY DISCONTINUE 
                USE OF OUR SERVICES.
              </p>
            </section>

          </div>

          {/* Quick Links */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Additional Information
            </h2>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <Link href="/privacy" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="font-semibold text-blue-900">Privacy Policy</div>
              </Link>
              <Link href="/disclosures" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="font-semibold text-blue-900">Disclosures</div>
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
