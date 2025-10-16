import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, ShieldCheck, BookOpen, Calculator, Heart, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Responsible Lending Guide – Borrow Smart in Australia | NCCP Act',
  description: 'Learn how to borrow responsibly in Australia. Understand the NCCP Act, your consumer rights, affordability assessments, and when to seek help. ASIC-compliant guidance for smart borrowing decisions.',
  keywords: 'responsible lending, NCCP Act, borrow responsibly Australia, consumer rights, financial hardship, ASIC guidance',
}

export default function ResponsibleLendingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <ShieldCheck className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Responsible Lending in Australia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding your rights and obligations under the National Consumer Credit Protection Act (NCCP Act). 
            Learn how to borrow safely, recognise warning signs, and access help when you need it.
          </p>
        </header>

        {/* Warning Alert */}
        <div className="mb-12">
          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Before You Borrow</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Only borrow money you can afford to repay. Taking on debt you cannot service can lead to financial 
                    hardship, damaged credit scores, and legal action. If you're experiencing financial difficulty, 
                    seek free help from the National Debt Helpline (1800 007 007) or a financial counsellor before 
                    taking out a loan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What is Responsible Lending */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What is Responsible Lending?</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Under the <strong>National Consumer Credit Protection Act 2009 (NCCP Act)</strong>, all ASIC-licensed 
                lenders in Australia must follow responsible lending obligations. This means lenders must:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-1">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <strong className="text-gray-900">Assess Your Financial Situation</strong>
                    <p className="text-gray-700">
                      Lenders must make reasonable inquiries about your income, expenses, existing debts, and financial 
                      commitments to determine if you can afford the loan without substantial hardship.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-1">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <strong className="text-gray-900">Verify Information</strong>
                    <p className="text-gray-700">
                      Lenders must take reasonable steps to verify the information you provide about your financial 
                      situation, typically by requesting payslips, bank statements, or tax returns.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-1">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <strong className="text-gray-900">Check Suitability</strong>
                    <p className="text-gray-700">
                      Lenders must assess whether the loan meets your requirements and objectives, and whether you 
                      could repay it without substantial hardship.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-1">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <strong className="text-gray-900">Provide Clear Information</strong>
                    <p className="text-gray-700">
                      Before you sign, lenders must give you clear information about interest rates, fees, repayment 
                      terms, and your rights (including cooling-off periods).
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Your Consumer Rights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Consumer Rights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Right to Clear Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  You have the right to receive clear, understandable information about:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Interest rates (both nominal and comparison rates)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>All fees and charges (establishment, monthly, early repayment)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Total amount repayable over the loan term</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Consequences of missing payments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Your rights to make extra repayments or pay out early</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertCircle className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Right to Refuse Unsuitable Credit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Lenders must <strong>not</strong> provide you with credit if:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>The loan is unsuitable for your needs and objectives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>You could not repay it without substantial hardship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>You would need to sell your home to repay the loan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>You would be unable to meet basic living expenses</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 italic">
                  If a lender approves an unsuitable loan, you may have grounds for complaint through AFCA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Right to Hardship Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  If you're experiencing financial difficulty, you have the right to request:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Changes to your repayment schedule</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Postponement of payments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Extension of your loan term</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Waiver or reduction of fees</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  Contact your lender as soon as possible if you're struggling. Most lenders have dedicated hardship 
                  teams to help you find a solution.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <HelpCircle className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Right to External Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  If you have a complaint about a lender, you can escalate to:
                </p>
                <div className="space-y-4">
                  <div>
                    <strong className="text-gray-900">Step 1: Contact the Lender</strong>
                    <p className="text-gray-700">Try to resolve the issue directly with the lender's internal dispute resolution team.</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Step 2: AFCA</strong>
                    <p className="text-gray-700">
                      If unresolved, contact the <a href="https://www.afca.org.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Australian Financial Complaints Authority (AFCA)</a> for free, independent dispute resolution.
                    </p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Step 3: ASIC</strong>
                    <p className="text-gray-700">
                      Report serious misconduct to <a href="https://asic.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ASIC</a> via their online reporting tool.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Borrowing Checklist */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Responsible Borrowing Checklist</h2>
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                Before applying for a loan, ask yourself these questions:
              </p>
              <div className="space-y-4">
                {[
                  'Do I really need this loan, or can I save up and avoid borrowing?',
                  'Have I compared multiple lenders to find the best interest rate and terms?',
                  'Can I afford the monthly repayments without struggling to pay for essentials (rent, food, utilities)?',
                  'Have I calculated the total cost of the loan (including all fees and interest)?',
                  'Do I understand what happens if I miss a payment?',
                  'Have I checked the lender is ASIC-licensed and legitimate?',
                  'Have I read and understood the loan contract before signing?',
                  'Do I have a backup plan if my income reduces or expenses increase?',
                  'Am I borrowing the smallest amount I need, rather than the maximum available?',
                  'Have I considered whether I could pay off the loan early to save on interest?',
                ].map((question, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{question}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-6 italic">
                If you answered "no" or "I'm not sure" to any of these questions, take more time to research before applying.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Warning Signs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Warning Signs of Problem Borrowing</h2>
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                Seek help immediately if you notice any of these warning signs:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Using one loan to repay another (debt cycling)',
                  'Regularly missing loan repayments or other bills',
                  'Borrowing to cover basic living expenses',
                  'Receiving default notices or legal threats',
                  'Hiding debt from family members or partners',
                  'Feeling constantly stressed or anxious about money',
                  'Having no emergency savings or financial buffer',
                  'Considering payday loans or high-cost credit',
                ].map((sign, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{sign}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Getting Help */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Free Help & Support</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>National Debt Helpline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600 mb-2">1800 007 007</p>
                <p className="text-gray-700 mb-4">
                  Free, confidential financial counselling for anyone struggling with debt. Available Monday to Friday, 
                  9:30am – 4:30pm (local time).
                </p>
                <a href="https://ndh.org.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Visit ndh.org.au →
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>MoneySmart (ASIC)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Free tools, calculators, and guidance on borrowing, budgeting, and managing money. Includes a personal 
                  loan calculator and comparison rate explanations.
                </p>
                <a href="https://moneysmart.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Visit moneysmart.gov.au →
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Counselling Australia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Find a local financial counsellor in your area. Financial counsellors are qualified professionals who 
                  provide free, independent advice on managing debt and financial hardship.
                </p>
                <a href="https://www.financialcounsellingaustralia.org.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Find a counsellor →
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lifeline (Crisis Support)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600 mb-2">13 11 14</p>
                <p className="text-gray-700 mb-4">
                  If financial stress is affecting your mental health, Lifeline provides 24/7 crisis support and suicide 
                  prevention services.
                </p>
                <a href="https://www.lifeline.org.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Visit lifeline.org.au →
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Loan Calculator Recommendation */}
        <section className="mb-16">
          <Card className="border-purple-200 bg-purple-50">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <Calculator className="h-10 w-10 text-purple-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Use a Loan Calculator</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Before committing to a loan, use the MoneySmart personal loan calculator to understand:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• How much your monthly repayments will be</li>
                    <li>• The total interest you'll pay over the life of the loan</li>
                    <li>• How different interest rates or loan terms affect the total cost</li>
                    <li>• Whether you could afford repayments if interest rates increase</li>
                  </ul>
                  <a 
                    href="https://moneysmart.gov.au/loans/personal-loan-calculator" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Use ASIC's Loan Calculator
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="border-blue-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Compare ASIC-Licensed Lenders
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                When you're ready to borrow responsibly, compare lenders who follow the NCCP Act and prioritise 
                consumer protection.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/au/apply" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Compare Loans
                </Link>
                <Link href="/au/about" className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                  About Us
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
