import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, TrendingUp, ShieldCheck, Calculator, Users, AlertCircle, FileText, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Loan Education Hub – Learn About Borrowing in Australia | ASIC Guides',
  description: 'Educational articles on responsible borrowing, loan types, credit scores, financial planning, and consumer rights in Australia. ASIC-compliant guidance to help you make informed decisions.',
  keywords: 'loan education, borrowing guide, financial literacy, credit score, personal loans Australia, responsible lending',
}

// Featured educational articles (placeholder for future blog system)
const featuredArticles = [
  {
    slug: 'understanding-personal-loans',
    title: 'Understanding Personal Loans in Australia',
    description: 'Learn what personal loans are, how they work, typical interest rates, and when they might be suitable for your needs.',
    category: 'Loan Basics',
    icon: BookOpen,
    readTime: '8 min read',
  },
  {
    slug: 'how-credit-scores-work',
    title: 'How Credit Scores Work in Australia',
    description: 'Your credit score affects loan approvals and interest rates. Learn what impacts your score and how to improve it.',
    category: 'Credit & Scores',
    icon: TrendingUp,
    readTime: '10 min read',
  },
  {
    slug: 'comparison-rate-explained',
    title: 'What is a Comparison Rate?',
    description: 'Comparison rates help you understand the true cost of a loan. Learn how they\'re calculated and why they matter.',
    category: 'Loan Basics',
    icon: Calculator,
    readTime: '6 min read',
  },
  {
    slug: 'secured-vs-unsecured-loans',
    title: 'Secured vs Unsecured Loans: What\'s the Difference?',
    description: 'Understand the key differences, pros and cons, and which type of loan might be right for your situation.',
    category: 'Loan Types',
    icon: ShieldCheck,
    readTime: '7 min read',
  },
  {
    slug: 'nccp-act-consumer-rights',
    title: 'Your Rights Under the NCCP Act',
    description: 'The National Consumer Credit Protection Act protects borrowers. Learn your rights and lender obligations.',
    category: 'Consumer Rights',
    icon: FileText,
    readTime: '12 min read',
  },
  {
    slug: 'warning-signs-debt-trouble',
    title: '10 Warning Signs You\'re in Debt Trouble',
    description: 'Recognise the early signs of financial difficulty and learn where to get free help before it\'s too late.',
    category: 'Financial Health',
    icon: AlertCircle,
    readTime: '9 min read',
  },
  {
    slug: 'how-to-compare-loans',
    title: 'How to Compare Loans Effectively',
    description: 'A step-by-step guide to comparing interest rates, fees, features, and terms to find the best loan for you.',
    category: 'Comparison Tips',
    icon: DollarSign,
    readTime: '11 min read',
  },
  {
    slug: 'loan-application-checklist',
    title: 'Loan Application Checklist: What You\'ll Need',
    description: 'Prepare for your loan application with this comprehensive checklist of documents and information required.',
    category: 'Application Tips',
    icon: FileText,
    readTime: '8 min read',
  },
]

const categories = [
  { name: 'Loan Basics', count: 12, color: 'bg-blue-100 text-blue-700' },
  { name: 'Loan Types', count: 8, color: 'bg-green-100 text-green-700' },
  { name: 'Credit & Scores', count: 6, color: 'bg-purple-100 text-purple-700' },
  { name: 'Consumer Rights', count: 5, color: 'bg-red-100 text-red-700' },
  { name: 'Financial Health', count: 9, color: 'bg-amber-100 text-amber-700' },
  { name: 'Comparison Tips', count: 7, color: 'bg-cyan-100 text-cyan-700' },
  { name: 'Application Tips', count: 4, color: 'bg-pink-100 text-pink-700' },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <BookOpen className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Loan Education Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free, ASIC-compliant educational content to help you make informed borrowing decisions. Learn about 
            loan types, credit scores, consumer rights, and financial planning from trusted Australian sources.
          </p>
        </header>

        {/* Information Notice */}
        <div className="mb-12">
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <ShieldCheck className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Educational Content Only</h3>
                  <p className="text-gray-700 leading-relaxed">
                    All articles on this page are for general information and education purposes only. They do not 
                    constitute financial, legal, or tax advice. Always consult a licensed financial adviser or 
                    counsellor before making borrowing decisions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Topic</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {categories.map((category) => (
              <div
                key={category.name}
                className={`${category.color} rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer`}
              >
                <p className="font-semibold text-sm">{category.name}</p>
                <p className="text-xs mt-1 opacity-75">{category.count} articles</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => {
              const IconComponent = article.icon
              return (
                <Card key={article.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full mb-3">
                      {article.category}
                    </span>
                    <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                      <Link href={`/au/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{article.description}</p>
                    <Link 
                      href={`/au/blog/${article.slug}`}
                      className="text-blue-600 hover:underline font-semibold text-sm"
                    >
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Quick Guides */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Reference Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-6 w-6 text-green-600 mr-2" />
                  Loan Calculators & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Use these free ASIC tools to calculate loan costs and compare options:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a 
                      href="https://moneysmart.gov.au/loans/personal-loan-calculator" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-700 hover:underline font-semibold"
                    >
                      Personal Loan Calculator →
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://moneysmart.gov.au/budgeting/budget-planner" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-700 hover:underline font-semibold"
                    >
                      Budget Planner →
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://moneysmart.gov.au/managing-debt/debt-consolidation-calculator" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-700 hover:underline font-semibold"
                    >
                      Debt Consolidation Calculator →
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 text-purple-600 mr-2" />
                  Free Financial Counselling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Get free, confidential help with debt and borrowing decisions:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a 
                      href="https://ndh.org.au" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-700 hover:underline font-semibold"
                    >
                      National Debt Helpline (1800 007 007) →
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.financialcounsellingaustralia.org.au" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-700 hover:underline font-semibold"
                    >
                      Find a Local Financial Counsellor →
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://moneysmart.gov.au" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-700 hover:underline font-semibold"
                    >
                      ASIC's MoneySmart Resources →
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Essential Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <ShieldCheck className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Consumer Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Learn about your rights and how to lodge complaints:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://asic.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      ASIC – Australian Securities & Investments Commission →
                    </a>
                  </li>
                  <li>
                    <a href="https://www.afca.org.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      AFCA – Financial Complaints Authority →
                    </a>
                  </li>
                  <li>
                    <a href="https://www.accc.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      ACCC – Australian Competition & Consumer Commission →
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Official Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Read official guides on borrowing and credit:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://moneysmart.gov.au/loans" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                      MoneySmart Loans Guide →
                    </a>
                  </li>
                  <li>
                    <a href="https://moneysmart.gov.au/managing-debt" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                      Managing Debt Resources →
                    </a>
                  </li>
                  <li>
                    <a href="https://moneysmart.gov.au/financial-counselling" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                      Financial Counselling Options →
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Credit Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Check your credit score and history for free:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://www.equifax.com.au" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                      Equifax Australia →
                    </a>
                  </li>
                  <li>
                    <a href="https://www.experian.com.au" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                      Experian Australia →
                    </a>
                  </li>
                  <li>
                    <a href="https://www.illion.com.au" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                      illion (formerly Dun & Bradstreet) →
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="mb-12">
          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-8 text-center">
              <BookOpen className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">More Articles Coming Soon</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                We're building a comprehensive library of educational content covering all aspects of borrowing, 
                credit, and financial planning. Check back regularly for new articles, guides, and calculators.
              </p>
              <p className="text-sm text-gray-600">
                Want to suggest a topic? Email us at <a href="mailto:content@loan-platform.com" className="text-amber-700 hover:underline font-semibold">content@loan-platform.com</a>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Internal Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn More About Our Platform</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">About Loan Platform Australia</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Understand how our comparison service works, our ranking methodology, and why we prioritise 
                  consumer protection.
                </p>
                <Link href="/au/about" className="text-blue-600 hover:underline font-semibold text-sm">
                  Read About Us →
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Responsible Lending Guide</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Learn your rights under the NCCP Act, how to borrow responsibly, and where to get help if 
                  you're struggling with debt.
                </p>
                <Link href="/au/responsible-lending" className="text-blue-600 hover:underline font-semibold text-sm">
                  Responsible Lending →
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">How We Make Money</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Full transparency on our commission structure, how we rank lenders, and why it doesn't affect 
                  the rates you receive.
                </p>
                <Link href="/au/disclosures" className="text-blue-600 hover:underline font-semibold text-sm">
                  View Disclosures →
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Privacy & Data Protection</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Learn how we collect, use, and protect your personal information in compliance with the 
                  Australian Privacy Act 1988.
                </p>
                <Link href="/au/privacy" className="text-blue-600 hover:underline font-semibold text-sm">
                  Privacy Policy →
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="border-blue-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Compare Loans?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Now that you've learned about responsible borrowing, compare ASIC-licensed lenders and find 
                the right loan for your needs.
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
