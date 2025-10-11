import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Licenses & Regulatory Information - State Lending Licenses | Loan AI Portal',
  description: 'State-by-state lending licenses and regulatory information. TILA, ECOA, FCRA, GLBA compliance. Federal and state consumer protection agencies. Technology partnership with RoundSky.',
  keywords: 'lending licenses, state licenses, regulatory compliance, TILA, ECOA, FCRA, GLBA, consumer protection, loan regulations, licensed lenders',
  alternates: {
    canonical: 'https://loan-platform.com/licenses',
  },
}

export default function LicensesPage() {
  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-blue-900 mb-4">
              Licenses & Regulatory Information
            </h1>
            <p className="text-lg text-gray-600">
              State Licensing and Compliance Information
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last Updated: October 1, 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12 prose prose-lg max-w-none">
            
            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Important Notice</h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-semibold mb-2">
                  Loan AI Portal is NOT a lender
                </p>
                <p className="text-gray-700 text-sm">
                  We operate as a loan matching service connecting consumers with licensed lenders. 
                  We do not originate loans, make credit decisions, or require state lending licenses. 
                  All lenders in our network maintain appropriate state licenses and regulatory compliance.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Role as a Matching Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Loan AI Portal operates as a technology-powered loan matching platform that connects 
                consumers seeking personal loans with licensed lenders in our network. We partner with 
                <a href="https://www.roundsky.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold"> RoundSky</a>, 
                a trusted technology provider, to deliver our platform services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a matching service, we:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Facilitate connections between borrowers and licensed lenders</li>
                <li>Provide AI-powered matching technology to optimize loan searches</li>
                <li>Maintain a network of state-licensed and regulated lenders</li>
                <li>Ensure all lenders comply with applicable federal and state laws</li>
                <li>Do NOT originate loans or make lending decisions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Lender Licensing Requirements</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All lenders in our network are required to maintain appropriate licenses and comply with 
                regulations in the states where they operate. Common licensing requirements include:
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">State Lending Licenses</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lenders must obtain and maintain licenses from state financial regulatory agencies, which may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Consumer Finance License</strong> - Required in most states for personal loans</li>
                <li><strong>Money Transmitter License</strong> - Required for certain payment processing</li>
                <li><strong>Sales Finance License</strong> - Required in some states for installment loans</li>
                <li><strong>Regulated Loan License</strong> - State-specific lending authorization</li>
                <li><strong>Small Loan License</strong> - For loans under state-specific thresholds</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Federal Compliance</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lenders must comply with federal lending laws including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Truth in Lending Act (TILA)</strong> - Disclosure requirements</li>
                <li><strong>Equal Credit Opportunity Act (ECOA)</strong> - Anti-discrimination protections</li>
                <li><strong>Fair Credit Reporting Act (FCRA)</strong> - Credit reporting standards</li>
                <li><strong>Gramm-Leach-Bliley Act (GLBA)</strong> - Financial privacy requirements</li>
                <li><strong>Electronic Fund Transfer Act (EFTA)</strong> - Electronic payment rules</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">State-Specific Regulations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Each state has unique lending laws and regulations. Our lender network includes institutions 
                licensed to operate in specific states:
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Key State Variations:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                  <li><strong>Interest Rate Caps:</strong> Many states limit maximum interest rates (usury laws)</li>
                  <li><strong>Loan Amount Limits:</strong> States may cap maximum loan amounts</li>
                  <li><strong>Loan Terms:</strong> Minimum and maximum repayment periods vary</li>
                  <li><strong>Fee Restrictions:</strong> Limits on origination fees, late fees, and other charges</li>
                  <li><strong>Licensing Requirements:</strong> Different license types and renewal processes</li>
                  <li><strong>Disclosure Requirements:</strong> State-specific consumer protection disclosures</li>
                  <li><strong>Cooling-Off Periods:</strong> Some states require waiting periods or right to cancel</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                For detailed information about lending regulations in your state, please visit our 
                <Link href="/states" className="text-blue-600 hover:text-blue-800 font-semibold"> States Page</Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Technology Partnership with RoundSky</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our platform operates in cooperation with <a href="https://www.roundsky.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">RoundSky</a>, 
                a technology service provider that powers critical components of our loan matching platform:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Application Technology:</strong> Secure form processing and submission infrastructure</li>
                <li><strong>Platform Infrastructure:</strong> Cloud-based services and technical architecture</li>
                <li><strong>Lender Integration:</strong> API connections and data transmission to lender networks</li>
                <li><strong>Security Services:</strong> Data encryption, storage, and protection systems</li>
                <li><strong>Compliance Tools:</strong> Regulatory compliance monitoring and reporting</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mt-4">
                RoundSky operates as our technology service provider and is NOT a lender. RoundSky does not 
                make lending decisions, set loan terms, or originate loans. All lending decisions are made 
                independently by licensed lenders in our network.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Lender Network Standards</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We maintain high standards for lenders in our network. All participating lenders must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Hold valid licenses in states where they operate</li>
                <li>Maintain good standing with state regulatory agencies</li>
                <li>Comply with all federal and state lending laws</li>
                <li>Provide clear and accurate loan disclosures</li>
                <li>Follow fair lending practices and anti-discrimination laws</li>
                <li>Maintain appropriate insurance and bonding</li>
                <li>Implement strong data security and privacy protections</li>
                <li>Handle consumer complaints appropriately</li>
                <li>Submit to regular compliance reviews</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Tribal Lending Entities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some lenders in our network may be owned or operated by Native American tribes. These lenders:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Operate under tribal sovereignty and may not require state licenses</li>
                <li>Are regulated by tribal gaming commissions or similar authorities</li>
                <li>May offer different loan terms than state-licensed lenders</li>
                <li>Must still comply with applicable federal laws</li>
                <li>Are subject to the laws and jurisdiction of their tribal nations</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                If matched with a tribal lender, you should review their specific terms, jurisdiction, 
                and dispute resolution procedures carefully.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Consumer Protection</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Borrowers are protected by various federal and state consumer protection laws:
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Your Rights</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Right to receive clear, accurate loan disclosures before accepting a loan</li>
                <li>Right to know the APR, fees, and total cost of the loan</li>
                <li>Right to non-discriminatory treatment in lending decisions</li>
                <li>Right to dispute inaccurate credit reporting</li>
                <li>Right to privacy and data protection</li>
                <li>Right to file complaints with state regulators</li>
                <li>Right to rescind certain loans within cooling-off periods (where applicable)</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Filing Complaints</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have concerns about a lender's practices, you can file complaints with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>State Attorney General:</strong> Consumer protection division</li>
                <li><strong>State Financial Regulator:</strong> Banking or financial services department</li>
                <li><strong>Consumer Financial Protection Bureau (CFPB):</strong> Federal consumer watchdog</li>
                <li><strong>Better Business Bureau (BBB):</strong> Business accountability organization</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Regulatory Agencies by State</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-800 mb-4">
                  Each state has its own financial regulatory agency responsible for licensing and overseeing lenders:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Common Agency Names:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Department of Banking</li>
                      <li>Division of Financial Institutions</li>
                      <li>Office of Financial Regulation</li>
                      <li>Department of Commerce</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Responsibilities:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Issue and renew licenses</li>
                      <li>Conduct examinations</li>
                      <li>Investigate complaints</li>
                      <li>Enforce lending laws</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mt-4 italic">
                  Visit our <Link href="/states" className="text-blue-600 hover:text-blue-800 font-semibold">States Page</Link> for 
                  contact information for your state's financial regulator.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Compliance and Monitoring</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We take regulatory compliance seriously and implement the following measures:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Regular review of lender licenses and regulatory status</li>
                <li>Monitoring of state lending law changes and updates</li>
                <li>Verification of lender compliance with disclosure requirements</li>
                <li>Investigation of consumer complaints about network lenders</li>
                <li>Removal of lenders who fail to maintain compliance standards</li>
                <li>Coordination with RoundSky on technical compliance measures</li>
                <li>Regular security audits and data protection reviews</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Military Lending Act (MLA) Compliance</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Military Lending Act provides special protections for active-duty service members and their 
                dependents. Lenders serving military borrowers must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Cap the Military Annual Percentage Rate (MAPR) at 36%</li>
                <li>Provide specific MLA disclosures</li>
                <li>Not require arbitration or unreasonable notice provisions</li>
                <li>Not require allotments or check payments</li>
                <li>Not require waiver of consumer protection laws</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                If you are an active-duty service member or dependent, please inform any lender you work with 
                to ensure MLA protections are applied.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Data Security and Privacy Compliance</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our platform and all network lenders comply with data protection regulations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>GLBA (Gramm-Leach-Bliley Act):</strong> Financial privacy and data security requirements</li>
                <li><strong>State Privacy Laws:</strong> Including CCPA, CPRA, and other state-specific regulations</li>
                <li><strong>PCI DSS:</strong> Payment card industry data security standards (where applicable)</li>
                <li><strong>SOC 2:</strong> Service organization controls for security and availability</li>
                <li><strong>Data Breach Notification:</strong> Compliance with state and federal breach notification laws</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                For more information, see our <Link href="/privacy" className="text-blue-600 hover:text-blue-800 font-semibold">Privacy Policy</Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Verifying Lender Credentials</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We encourage borrowers to independently verify lender credentials before accepting a loan:
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <p className="font-semibold text-gray-900 mb-2">How to Verify a Lender:</p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700 text-sm">
                  <li>Ask the lender for their license number and issuing state</li>
                  <li>Check the state regulator's website for license verification</li>
                  <li>Search for complaints with the BBB or state attorney general</li>
                  <li>Read reviews and check the lender's reputation</li>
                  <li>Verify contact information and physical business address</li>
                  <li>Review loan documents carefully before signing</li>
                </ol>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we make reasonable efforts to ensure all lenders in our network maintain appropriate 
                licenses and comply with applicable regulations, we:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Do not guarantee the accuracy or current status of any lender's licenses</li>
                <li>Are not responsible for lender compliance with licensing requirements</li>
                <li>Recommend borrowers independently verify lender credentials</li>
                <li>Are not liable for actions or omissions of licensed lenders</li>
                <li>Cannot guarantee lender licensing in all states</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                For complete terms and conditions, see our <Link href="/terms" className="text-blue-600 hover:text-blue-800 font-semibold">Terms of Service</Link> and 
                <Link href="/disclaimer" className="text-blue-600 hover:text-blue-800 font-semibold"> Disclaimer</Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about licensing, regulatory compliance, or lender credentials:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-900 mb-2"><strong>Loan AI Portal</strong></p>
                <p className="text-gray-700 mb-2">
                  Email: <a href="mailto:maloni@outlook.com" className="text-blue-600 hover:text-blue-800 font-semibold">maloni@outlook.com</a>
                </p>
                <p className="text-gray-700 mb-4">
                  Business Hours: Monday-Friday, 9 AM - 5 PM EST
                </p>
                <p className="text-gray-700 text-sm">
                  Visit our <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-semibold">Contact Page</Link> for 
                  more information or to submit a specific inquiry.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Additional Resources</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Federal Agencies</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Consumer Financial Protection Bureau (CFPB)</li>
                    <li>• Federal Trade Commission (FTC)</li>
                    <li>• Office of the Comptroller of the Currency (OCC)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Industry Organizations</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Conference of State Bank Supervisors (CSBS)</li>
                    <li>• American Financial Services Association (AFSA)</li>
                    <li>• Online Lenders Alliance (OLA)</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* Quick Links */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Related Information
            </h2>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <Link href="/states" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="font-semibold text-blue-900">State Information</div>
              </Link>
              <Link href="/disclaimer" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="font-semibold text-blue-900">Disclaimer</div>
              </Link>
              <Link href="/privacy" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="font-semibold text-blue-900">Privacy Policy</div>
              </Link>
              <Link href="/contact" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="font-semibold text-blue-900">Contact Us</div>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
