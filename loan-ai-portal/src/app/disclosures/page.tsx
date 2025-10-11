'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function DisclaimerPage() {
  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-blue-900 mb-4">
              Disclaimer
            </h1>
            <p className="text-lg text-gray-600">
              Important Information About Our Services
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last Updated: October 1, 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12 prose prose-lg max-w-none">
            
            {/* Important Notice Banner */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-800 font-semibold mb-2">
                    PLEASE READ THIS DISCLAIMER CAREFULLY
                  </p>
                  <p className="text-sm text-yellow-700">
                    This page contains important information about the limitations of our services, our 
                    relationship with lenders, and your responsibilities as a borrower. By using our 
                    services, you acknowledge and agree to the terms outlined below.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">We Are NOT a Lender</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Loan AI Portal is NOT a lender, loan broker, or agent for any lender or loan broker.</strong> We 
                operate as a matching service that connects consumers seeking personal loans with a network of 
                participating lenders and lending partners.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Make loans or extend credit to consumers</li>
                <li>Make credit decisions or determine loan approval</li>
                <li>Set loan terms, interest rates, or fees</li>
                <li>Collect loan payments or service loans</li>
                <li>Guarantee that you will be approved for a loan</li>
                <li>Guarantee any specific loan terms or interest rates</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our platform operates in cooperation with <a href="https://www.roundsky.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">RoundSky</a>, 
                a trusted technology partner that provides infrastructure and services to facilitate loan matching.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">How Our Service Works</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you submit a loan request through our platform:
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>You complete a loan request form</strong> - Your information is collected and securely 
                  transmitted to our AI-powered matching system
                </li>
                <li>
                  <strong>We match you with potential lenders</strong> - Our algorithms analyze your profile and 
                  identify lenders from our network who may be able to help
                </li>
                <li>
                  <strong>Lenders review your request</strong> - Your information is shared with one or more lenders 
                  who will independently evaluate your application
                </li>
                <li>
                  <strong>Lenders may contact you</strong> - If a lender is interested, they will contact you directly 
                  with loan offers and terms
                </li>
                <li>
                  <strong>You decide whether to accept</strong> - You are under no obligation to accept any loan offer 
                  and should carefully review all terms before proceeding
                </li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">No Guarantee of Approval or Specific Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Submitting a loan request through our platform does NOT guarantee:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>That you will be matched with a lender</li>
                <li>That you will receive any loan offers</li>
                <li>That you will be approved for a loan</li>
                <li>Any specific loan amount, interest rate, or terms</li>
                <li>Any specific timeline for receiving loan offers or funds</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Loan approval and terms are determined solely by individual lenders based on their own 
                underwriting criteria, which may include your credit score, income, employment history, 
                debt-to-income ratio, and other factors.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Lender Independence</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Each lender in our network operates independently and is responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Setting their own loan terms, interest rates, and fees</li>
                <li>Making their own credit decisions and approval determinations</li>
                <li>Providing their own disclosures and loan agreements</li>
                <li>Servicing loans and collecting payments</li>
                <li>Complying with applicable federal and state lending laws</li>
                <li>Maintaining their own privacy policies and data practices</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>We do not control or endorse any lender's actions, practices, or decisions.</strong> Any 
                loan agreement you enter into will be directly between you and the lender, and we are not a 
                party to that agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Loan Costs and Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Personal loans can vary significantly in cost depending on the lender and your individual 
                circumstances:
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Interest Rates and APR</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Interest rates typically range from 5.99% to 35.99% APR</strong> or higher</li>
                <li>Your actual rate depends on your creditworthiness and lender policies</li>
                <li>APR (Annual Percentage Rate) includes interest and certain fees</li>
                <li>Lower credit scores generally result in higher interest rates</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Loan Amounts and Terms</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Loan amounts typically range from $500 to $50,000</strong></li>
                <li>Repayment terms typically range from 3 months to 7 years</li>
                <li>Longer terms may result in lower monthly payments but higher total interest</li>
                <li>State laws may limit maximum loan amounts and interest rates</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Fees</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Origination fees (typically 1% to 8% of loan amount)</li>
                <li>Late payment fees</li>
                <li>NSF (Non-Sufficient Funds) fees</li>
                <li>Prepayment penalties (some lenders)</li>
                <li>Check processing fees</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                IMPORTANT: Always review the lender's loan agreement and Truth in Lending disclosures carefully 
                before accepting any loan offer. Make sure you understand all costs, fees, and repayment terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Example Loan Calculation</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-800 mb-4">
                  <strong>Representative Example:</strong> A loan of $10,000 with a 3-year term at 12% APR would result in:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Monthly payment: approximately $332</li>
                  <li>Total payments: approximately $11,952</li>
                  <li>Total interest paid: approximately $1,952</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 italic">
                  This is a simplified example for illustration purposes only. Your actual loan terms, 
                  monthly payment, and total cost will vary based on the lender's terms and your 
                  individual circumstances. This example does not include origination fees or other charges.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Credit Impact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Submitting a loan request through our platform may affect your credit in the following ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Soft Credit Inquiry:</strong> Initial matching process may involve a soft credit pull 
                  that does NOT affect your credit score
                </li>
                <li>
                  <strong>Hard Credit Inquiry:</strong> If you proceed with a lender's application, they may 
                  perform a hard credit inquiry that MAY temporarily lower your credit score
                </li>
                <li>
                  <strong>Multiple Inquiries:</strong> Your information may be shared with multiple lenders, 
                  potentially resulting in multiple credit inquiries
                </li>
                <li>
                  <strong>Payment History:</strong> Once you have a loan, your payment history will be reported 
                  to credit bureaus and can positively or negatively affect your credit
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">State Licensing and Regulations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lending laws and regulations vary by state. Our lender network includes lenders licensed to 
                operate in specific states. Some important points:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Not all lenders are available in all states</li>
                <li>Some states prohibit or restrict certain types of loans</li>
                <li>Maximum loan amounts, interest rates, and fees vary by state</li>
                <li>Some states require specific disclosures or cooling-off periods</li>
                <li>Tribal lenders may operate under different regulations</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                For state-specific information about loan regulations, please visit our <Link href="/states" className="text-blue-600 hover:text-blue-800 font-semibold">States Page</Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Technology Partnership</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our platform operates in partnership with <a href="https://www.roundsky.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">RoundSky</a>, 
                a technology service provider that powers key aspects of our platform including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Application form technology and submission processing</li>
                <li>Platform infrastructure and technical services</li>
                <li>Integration with lender networks</li>
                <li>Data processing and security services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                RoundSky processes data on our behalf as a service provider and is contractually obligated to 
                maintain confidentiality and security. RoundSky is not a lender and does not make lending 
                decisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Responsible Borrowing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Before applying for a loan, consider the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Only borrow what you need and can afford to repay</strong> - Consider your monthly 
                  budget and existing financial obligations
                </li>
                <li>
                  <strong>Understand the total cost</strong> - Calculate the total amount you'll repay, including 
                  interest and fees
                </li>
                <li>
                  <strong>Compare multiple offers</strong> - If you receive multiple loan offers, compare the APR, 
                  terms, and total cost
                </li>
                <li>
                  <strong>Read the fine print</strong> - Review all loan documents carefully before signing
                </li>
                <li>
                  <strong>Consider alternatives</strong> - Explore other options such as credit counseling, 
                  payment plans, or assistance programs
                </li>
                <li>
                  <strong>Make payments on time</strong> - Late or missed payments can result in fees, damage 
                  to your credit, and collection actions
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Consequences of Non-Payment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Failure to repay a loan can have serious consequences:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Late fees and penalty charges</li>
                <li>Increased interest rates or acceleration of the loan balance</li>
                <li>Negative impact on your credit score and credit report</li>
                <li>Collection activities including phone calls, letters, and legal action</li>
                <li>Wage garnishment or bank account levies (where permitted by law)</li>
                <li>Difficulty obtaining credit in the future</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                If you are experiencing financial hardship, contact your lender immediately to discuss potential 
                payment arrangements or hardship programs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">No Warranty or Guarantee</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are provided "as is" without any warranties or guarantees:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We make no representations about the quality, reliability, or suitability of any lender</li>
                <li>We do not guarantee the accuracy of information provided by lenders</li>
                <li>We do not guarantee uninterrupted or error-free service</li>
                <li>We are not responsible for lender actions, decisions, or loan servicing</li>
                <li>We are not responsible for any losses resulting from loans obtained through our platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  We are not liable for any direct, indirect, incidental, special, consequential, or punitive 
                  damages arising from your use of our services
                </li>
                <li>
                  We are not liable for any damages or losses resulting from loans obtained through our platform
                </li>
                <li>
                  We are not liable for lender actions, decisions, errors, or omissions
                </li>
                <li>
                  We are not liable for unauthorized access to or alteration of your data
                </li>
                <li>
                  Our total liability shall not exceed $100 or the amount you paid us (currently $0), whichever 
                  is less
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Marketing and Advertising</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any rates, terms, or loan amounts mentioned on our website are for informational and marketing 
                purposes only and should not be considered an offer or guarantee. Actual terms will vary based 
                on lender policies and your individual circumstances.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Testimonials, success stories, or case studies on our website represent individual experiences 
                and may not be typical. Your results may vary.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Privacy and Data Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you submit a loan request:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your personal and financial information will be shared with lenders in our network</li>
                <li>Lenders may contact you via phone, email, or text message</li>
                <li>Your information may be shared with service providers and technology partners like RoundSky</li>
                <li>You may receive marketing communications from us and our partners</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                For more information, please review our <Link href="/privacy" className="text-blue-600 hover:text-blue-800 font-semibold">Privacy Policy</Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Third-Party Websites</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites, including lender websites and our partner 
                RoundSky. We are not responsible for the content, privacy practices, or terms of service of any 
                third-party websites. We encourage you to review the terms and policies of any third-party sites 
                you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Changes to This Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to update this Disclaimer at any time. Changes will be posted on this page 
                with an updated "Last Updated" date. Your continued use of our services after any changes 
                constitutes acceptance of the modified Disclaimer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this Disclaimer or our services, please contact us:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-900 mb-2"><strong>Loan AI Portal</strong></p>
                <p className="text-gray-700 mb-2">
                  Email: <a href="mailto:maloni@outlook.com" className="text-blue-600 hover:text-blue-800 font-semibold">maloni@outlook.com</a>
                </p>
                <p className="text-gray-700">
                  Visit our <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-semibold">Contact Page</Link> for more information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Acknowledgment</h2>
              <p className="text-gray-700 leading-relaxed font-semibold">
                BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO THIS 
                DISCLAIMER. YOU UNDERSTAND THAT WE ARE NOT A LENDER AND THAT LOAN APPROVAL, TERMS, AND 
                FUNDING ARE DETERMINED SOLELY BY THIRD-PARTY LENDERS.
              </p>
            </section>

          </div>

          {/* Quick Links */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Additional Resources
            </h2>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <Link href="/terms" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="font-semibold text-blue-900">Terms of Service</div>
              </Link>
              <Link href="/privacy" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="font-semibold text-blue-900">Privacy Policy</div>
              </Link>
              <Link href="/states" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="font-semibold text-blue-900">State Information</div>
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
