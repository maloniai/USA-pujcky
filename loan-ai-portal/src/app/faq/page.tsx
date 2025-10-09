'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import FAQSchema from '@/components/faq-schema'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'

export default function FAQPage() {
  // Flatten all FAQs for schema
  const allFAQs: Array<{q: string, a: string}> = [];
  
  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "What is Loan AI Portal and how does it work?",
          a: "Loan AI Portal is the largest AI-powered personal loan matching platform in the United States. We use advanced artificial intelligence to analyze your financial profile and match you with the most suitable lenders from our network of 100+ licensed partners. When you submit your information, our AI instantly evaluates hundreds of lending criteria to find lenders most likely to approve your application at competitive rates."
        },
        {
          q: "What makes your AI matching technology different from traditional loan comparison sites?",
          a: "Unlike traditional comparison sites that simply list lenders, our proprietary AI algorithms analyze over 200 data points including your credit profile, income, employment history, debt-to-income ratio, and even seasonal lending trends. This results in a 73% higher approval rate compared to manual applications. Our technology learns from millions of loan decisions to continuously improve matching accuracy."
        },
        {
          q: "Do I need to create an account to use your service?",
          a: "No account creation is required. Simply complete our 2-minute application form with your basic information, and our AI will immediately begin matching you with suitable lenders. You'll only need to provide more detailed information if you decide to proceed with a specific lender's offer."
        },
        {
          q: "Can I use your service if I've been denied by my bank?",
          a: "Absolutely! Many of our successful borrowers were previously denied by traditional banks. Our network includes alternative lenders, credit unions, and online lenders who use different approval criteria than banks. Our AI specifically identifies lenders that may approve applications that traditional banks reject."
        }
      ]
    },
    {
      category: "Loan Details & Requirements",
      questions: [
        {
          q: "What credit score do I need to qualify for a loan?",
          a: "We work with lenders across the entire credit spectrum. While some lenders require credit scores of 720+, others approve borrowers with scores as low as 580 or even those with limited credit history. Our AI matches you with lenders whose approval criteria align with your specific credit profile, maximizing your chances of approval regardless of your score."
        },
        {
          q: "What types of personal loans can I get through your platform?",
          a: "Our lender network offers various loan types including debt consolidation loans, home improvement loans, medical expense loans, wedding loans, vacation loans, moving and relocation loans, major purchase financing, emergency loans, business startup loans, and general purpose personal loans. Loan amounts range from $500 to $100,000 with terms from 3 months to 7 years."
        },
        {
          q: "What documents will I need to provide?",
          a: "Initial matching requires only basic information. If you proceed with a lender, you'll typically need: government-issued photo ID (driver's license or passport), proof of income (recent pay stubs, tax returns, or bank statements), proof of address (utility bill or lease agreement), Social Security Number, and active checking account information. Some lenders may request additional documentation depending on the loan amount."
        },
        {
          q: "Can I get a loan if I'm self-employed or have irregular income?",
          a: "Yes! Our network includes lenders who specialize in working with self-employed individuals, freelancers, gig workers, and those with irregular income. These lenders use alternative income verification methods such as bank statement analysis, tax returns, and business revenue documentation rather than traditional pay stubs."
        }
      ]
    },
    {
      category: "Rates, Fees & Costs",
      questions: [
        {
          q: "What interest rates can I expect?",
          a: "Interest rates typically range from 5.99% to 35.99% APR, though some borrowers may receive rates outside this range. Your actual rate depends on factors including credit score, income, loan amount, loan term, debt-to-income ratio, employment history, and current market conditions. Excellent credit (740+) typically qualifies for rates under 10% APR, while lower credit scores result in higher rates."
        },
        {
          q: "Are there any origination fees or prepayment penalties?",
          a: "Fee structures vary by lender. Origination fees typically range from 1% to 8% of the loan amount and may be deducted from your loan proceeds or added to the principal. Some lenders charge no origination fees at all. Prepayment penalties are rare but exist with some lenders—always review the loan agreement carefully. Our platform clearly displays all fees before you accept any offer."
        },
        {
          q: "How much will my monthly payment be?",
          a: "Monthly payments depend on loan amount, interest rate, and term length. For example: a $10,000 loan at 12% APR for 36 months = ~$332/month; a $25,000 loan at 15% APR for 60 months = ~$594/month; a $5,000 loan at 8% APR for 24 months = ~$226/month. Use our loan calculator on the homepage for personalized estimates based on your specific situation."
        },
        {
          q: "Can I negotiate the loan terms or interest rate?",
          a: "While initial offers are based on lender criteria, some lenders may be willing to negotiate terms, especially if you have multiple offers, strong credit, or can provide additional collateral. Having competing offers from our platform strengthens your negotiating position. Some borrowers successfully negotiate lower rates, reduced fees, or more favorable payment terms."
        }
      ]
    },
    {
      category: "Application Process",
      questions: [
        {
          q: "How long does the application process take?",
          a: "Our initial application takes just 2 minutes to complete and provides a pre-qualification and rate check via soft credit pull, so there is no impact on your score. AI matching happens instantly, and you may receive initial loan offers within minutes. If you proceed with a lender, their detailed application typically takes 10-20 minutes. Final approval decisions usually arrive within 1-2 business days once verification is complete, though some lenders may finish sooner."
        },
        {
          q: "Can I apply if I already have other loans or debt?",
          a: "Yes! Many borrowers use our platform to consolidate existing debts. Lenders evaluate your debt-to-income ratio—typically, your monthly debt payments should be less than 43% of your gross monthly income. Some lenders may approve higher ratios. Debt consolidation can actually improve your financial situation by combining multiple payments into one lower-rate loan."
        },
        {
          q: "What happens after I submit my application?",
          a: "Within seconds, our AI analyzes your profile and shares it with suitable lenders from our network. Interested lenders will review your application and may contact you via phone, email, or text with loan offers. You'll receive detailed loan terms including APR, monthly payment, loan amount, and fees. You can review multiple offers and choose the best one—there's no obligation to accept any offer."
        },
        {
          q: "Can I submit multiple applications or update my information?",
          a: "You can submit a new application if your circumstances change or if you want to explore different loan amounts. However, we recommend waiting at least 14 days between applications to minimize credit inquiries. If you need to update information on a pending application, contact the specific lender directly or reach out to our customer support."
        }
      ]
    },
    {
      category: "Approval & Funding",
      questions: [
        {
          q: "What are my chances of getting approved?",
          a: "Approval rates vary by credit profile. Our AI matching technology increases your approval likelihood by 73% compared to random applications. Borrowers with credit scores above 680 have approval rates exceeding 85%. Those with scores between 600-679 see approval rates around 65%. Even borrowers with scores below 600 have approximately 40% approval rates through our specialized lender network."
        },
        {
          q: "How quickly can I receive my loan funds?",
          a: "Funding timelines vary by lender: some participating lenders offer same-day funding for final approvals completed before early banking cut-off times (often 12 PM ET); most lenders provide next business day funding; some lenders require 2-5 business days for ACH transfer. The fastest funding typically occurs with direct deposit to your checking account. Wire transfers may be available for urgent needs but often incur additional fees and depend on lender availability."
        },
        {
          q: "What if I get denied by all lenders?",
          a: "If you're not matched with a lender, we provide specific feedback on why and recommendations for improvement. Common reasons include insufficient income, high debt-to-income ratio, recent bankruptcy, or limited credit history. We suggest steps like: adding a co-signer, reducing debt, waiting 3-6 months to improve credit, or considering a smaller loan amount. You're welcome to reapply after addressing these factors."
        },
        {
          q: "Can I get approved if I have a co-signer or co-borrower?",
          a: "Yes! Many lenders in our network accept co-signers or co-borrowers, which can significantly improve your approval chances and potentially secure better rates. A co-signer with strong credit can help you qualify if you have limited credit history or lower scores. Both parties are equally responsible for repayment, and the loan appears on both credit reports."
        }
      ]
    },
    {
      category: "Credit & Financial Impact",
      questions: [
        {
          q: "How will applying affect my credit score?",
          a: "Our initial AI matching process uses only soft credit inquiries that do NOT affect your credit score. If you choose to proceed with a lender's detailed application, they will perform a hard credit inquiry, which may temporarily lower your score by 5-10 points. Multiple hard inquiries within 14-45 days for the same type of loan are typically counted as a single inquiry by credit bureaus."
        },
        {
          q: "Can a personal loan actually improve my credit score?",
          a: "Yes! Personal loans can improve your credit in several ways: adding installment loan diversity to your credit mix (10% of score), reducing credit card utilization if used for debt consolidation (30% of score), establishing consistent on-time payment history (35% of score), and potentially improving debt-to-income ratio. Many borrowers see score increases of 20-50 points within 6 months of taking a consolidation loan."
        },
        {
          q: "What information do lenders see on my credit report?",
          a: "Lenders review your complete credit history including: credit score from all three bureaus (Experian, Equifax, TransUnion), payment history for all accounts, current and past credit accounts, credit inquiries, public records (bankruptcies, liens, judgments), collections accounts, credit utilization, length of credit history, and recent account openings. They also verify employment and income."
        },
        {
          q: "How does loan repayment get reported to credit bureaus?",
          a: "Most lenders report to all three major credit bureaus monthly. On-time payments positively impact your credit, while late payments (30+ days past due) negatively affect your score. Successfully paying off a loan demonstrates responsible credit management. Some lenders also report your loan balance, which shows decreasing debt over time—another positive factor for your credit profile."
        }
      ]
    },
    {
      category: "Security & Privacy",
      questions: [
        {
          q: "How do you protect my personal and financial information?",
          a: "We employ bank-level 256-bit SSL encryption for all data transmission, store data on SOC 2 compliant secure servers with restricted access, use multi-factor authentication for system access, conduct regular security audits and penetration testing, comply with GLBA (Gramm-Leach-Bliley Act) requirements, and maintain strict data privacy policies. Our partnership with RoundSky includes additional enterprise-grade security measures."
        },
        {
          q: "Who has access to my application information?",
          a: "Your information is shared only with: lenders in our network who match your profile criteria, our technology partner RoundSky for platform operations, service providers performing verification or fraud prevention, and credit bureaus as required by law. We never sell your data to unaffiliated third parties for marketing purposes. All partners are contractually required to maintain confidentiality and security."
        },
        {
          q: "Can I delete my information from your system?",
          a: "Yes. You can request deletion of your personal information by contacting us at maloni@outlook.com. We'll process deletion requests within 30 days as required by privacy laws. Note that we may need to retain certain information for legal compliance, fraud prevention, or to honor contractual obligations with lenders who've already received your application."
        },
        {
          q: "What happens to my information if I don't accept a loan offer?",
          a: "If you don't accept any offers, your application information is retained for 90 days in case you decide to explore options later, then automatically archived or deleted according to our data retention policy. During this period, lenders may continue to contact you with offers. You can opt out of communications at any time by following unsubscribe instructions or contacting us."
        }
      ]
    },
    {
      category: "Special Circumstances",
      questions: [
        {
          q: "Can I get a loan if I'm currently unemployed?",
          a: "While traditional employment helps, some lenders consider alternative income sources including unemployment benefits, Social Security, disability payments, pension, retirement account distributions, alimony or child support, investment income, rental property income, or spouse's income. Approval with alternative income typically requires larger documentation and may result in lower loan amounts or higher rates."
        },
        {
          q: "Do you work with borrowers who have bankruptcy in their credit history?",
          a: "Yes! Some lenders in our network specialize in post-bankruptcy lending. For Chapter 7 bankruptcy, most lenders require it to be discharged for at least 12-24 months. For Chapter 13, some lenders approve while bankruptcy is still active with trustee permission. Having rebuilt credit since bankruptcy, stable income, and lower debt-to-income ratio significantly improves approval chances."
        },
        {
          q: "Can active military members or veterans get special loan terms?",
          a: "Yes! We partner with lenders offering military-friendly programs. Active-duty service members and dependents receive protections under the Military Lending Act (MLA) including 36% APR cap and no mandatory arbitration. Veterans may qualify for lower rates, reduced fees, flexible payment options, and expedited approvals. We recommend identifying yourself as military/veteran in your application."
        },
        {
          q: "What if I need to modify my loan after approval?",
          a: "Loan modifications depend on lender policies. Common modifications include payment date changes (usually free), payment amount changes through refinancing (may incur fees), term length extensions during hardship (often available), temporary forbearance for financial emergencies, and early payoff (check for prepayment penalties). Contact your lender immediately if experiencing payment difficulties—many offer hardship programs."
        }
      ]
    },
    {
      category: "State-Specific Questions",
      questions: [
        {
          q: "Are personal loans available in my state?",
          a: "We serve borrowers in all 50 states, though available lenders, loan amounts, and terms vary by state due to different regulations. States like California, Texas, Florida, New York, and Pennsylvania have the most lending options. Some states have stricter regulations limiting interest rates or loan amounts. Visit our States Page to see specific information, regulations, and available loan amounts for your state."
        },
        {
          q: "Why do interest rates vary by state?",
          a: "State usury laws (interest rate caps) vary significantly. For example, some states cap rates at 36% APR while others have no caps. States with rate caps may have fewer lender options but better consumer protection. States without caps offer more options including for higher-risk borrowers. Additionally, state regulations affect lender licensing costs and operational expenses, which influence rates."
        },
        {
          q: "What if I move to another state after getting a loan?",
          a: "Your existing loan terms remain unchanged if you move to another state. Notify your lender of your address change for correspondence and legal purposes. The loan contract remains valid under the laws of the state where you resided when the loan was originated. If you need to refinance after moving, new applications will be subject to your new state's regulations."
        },
        {
          q: "Can I apply if I recently moved or don't have proof of address?",
          a: "Yes, though proof of address is eventually required for final approval. Recent movers can provide: current lease agreement, utility bill, driver's license, bank statement showing new address, or employer verification letter. If you're staying with family temporarily, some lenders accept notarized letters from the property owner. Living situation stability is a factor in approval, so be prepared to explain short residence periods."
        }
      ]
    }
  ]

  // Collect all FAQs from all categories
  faqCategories.forEach(category => {
    category.questions.forEach(q => {
      allFAQs.push(q);
    });
  });

  return (
    <>
      <FAQSchema faqs={allFAQs} />
      <BreadcrumbSchema config="faq" />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Everything you need to know about personal loans and our AI-powered matching service
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get instant answers to common questions about loan applications, approval rates, 
              interest rates, funding timelines, credit impacts, and more. Our comprehensive FAQ 
              covers all aspects of the borrowing process.
            </p>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Jump to Category
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {faqCategories.map((category, index) => (
                <a
                  key={index}
                  href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-center bg-blue-50 hover:bg-blue-100 text-blue-900 font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  {category.category}
                </a>
              ))}
            </div>
          </div>

          {/* FAQ Categories */}
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} id={category.category.toLowerCase().replace(/\s+/g, '-')} className="mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-6 border-b-4 border-blue-500 pb-3">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => (
                  <details 
                    key={qIndex} 
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <summary className="font-semibold text-lg text-blue-900 cursor-pointer p-6 hover:bg-blue-50 rounded-lg">
                      {faq.q}
                    </summary>
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {/* SEO Content Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Why Choose Loan AI Portal?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-xl text-blue-800 mb-3">AI-Powered Matching</h3>
                <p className="mb-4">
                  Our proprietary artificial intelligence analyzes over 200 data points to match you 
                  with the most suitable lenders, resulting in 73% higher approval rates compared to 
                  traditional applications.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-blue-800 mb-3">Largest Lender Network</h3>
                <p className="mb-4">
                  Access 100+ licensed lenders including banks, credit unions, and online lenders 
                  serving all 50 states. We partner with lenders across the credit spectrum from 
                  excellent to poor credit.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-blue-800 mb-3">Fast & Secure</h3>
                <p className="mb-4">
                  Bank-level 256-bit encryption protects your data. Complete applications in 2 minutes, 
                  receive instant AI matching, and get funds as soon as the next business day after approval.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-blue-800 mb-3">100% Free Service</h3>
                <p className="mb-4">
                  Never pay a penny to use our platform. No application fees, matching fees, or hidden 
                  costs. Compare multiple offers and choose the best terms for your situation.
                </p>
              </div>
            </div>
          </div>

          {/* Still Have Questions */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our customer support team is ready to help. 
              We respond to all inquiries within 24-48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/apply" 
                className="bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors"
              >
                Apply Now
              </Link>
            </div>
            <LeadGenDisclosure align="center" className="mt-2 text-sm text-gray-600" />
          </div>

          {/* Related Resources */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              Helpful Resources
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link 
                href="/ai-loan-matching" 
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="font-semibold text-blue-900 mb-2">AI Loan Matching</h3>
                <p className="text-sm text-gray-600">Learn how our AI technology works</p>
              </Link>
              <Link 
                href="/states" 
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="font-semibold text-blue-900 mb-2">State Information</h3>
                <p className="text-sm text-gray-600">Rates and regulations by state</p>
              </Link>
              <Link 
                href="/about" 
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="font-semibold text-blue-900 mb-2">About Us</h3>
                <p className="text-sm text-gray-600">Our mission and technology</p>
              </Link>
              <Link 
                href="/blog" 
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="font-semibold text-blue-900 mb-2">Blog & Guides</h3>
                <p className="text-sm text-gray-600">Financial education resources</p>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
