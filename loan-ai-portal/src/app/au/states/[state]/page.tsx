import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import AUBreadcrumbs from '@/components/australia/au-breadcrumbs'
import AUDisclosureBlock from '@/components/australia/au-disclosure-block'
import { australiaStates, getAUStateBySlug, cityToSlug } from '@/data/au-regions'

interface Props {
  params: { state: string }
}

export async function generateStaticParams() {
  return australiaStates.map((state) => ({
    state: state.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const state = getAUStateBySlug(params.state)
  
  if (!state) {
    return {
      title: 'State Not Found',
    }
  }

  return {
    title: `${state.name} Personal Loans - Compare Lenders 2025`,
    description: `Find competitive personal loan rates in ${state.name}. Compare ASIC-regulated lenders across ${state.cities.length} cities. Apply online in minutes.`,
    keywords: `${state.name} loans, ${state.abbreviation} personal loans, loans in ${state.capital}`,
  }
}

export default function AUStatePage({ params }: Props) {
  const state = getAUStateBySlug(params.state)

  if (!state) {
    notFound()
  }

  // Generate unique FAQs for each state
  const stateFAQs = [
    {
      question: `What types of personal loans are available in ${state.name}?`,
      answer: `${state.name} residents can access various loan products including unsecured personal loans, car loans, debt consolidation loans, and home improvement loans from ASIC-licensed lenders. Loan amounts typically range from $2,000 to $75,000 with terms from 1 to 7 years, subject to responsible lending assessments under the NCCP Act.`
    },
    {
      question: `How do interest rates compare across ${state.name}?`,
      answer: `Interest rates in ${state.name} vary based on credit history, income stability, and loan amount. Competitive rates start around 5.99% p.a. for borrowers with excellent credit, while rates for those with impaired credit may range from 12% to 20% p.a. All rates must comply with Australian Consumer Law and responsible lending obligations.`
    },
    {
      question: `Are online lenders regulated in ${state.name}?`,
      answer: `Yes, all legitimate lenders operating in ${state.name} must hold an Australian Credit Licence (ACL) issued by ASIC and comply with the National Consumer Credit Protection Act 2009. This includes online lenders, banks, and credit unions. Always verify a lender's ACL number on the ASIC website before applying.`
    },
    {
      question: `What income proof do ${state.name} lenders require?`,
      answer: `${state.name} lenders typically require recent payslips (last 2-3 months), bank statements showing regular income deposits, and proof of employment. Self-employed applicants may need tax returns and business financial statements. Requirements vary by lender and loan amount under responsible lending guidelines.`
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <AUBreadcrumbs
          items={[
            { label: 'States & Territories', href: '/au/states' },
            { label: state.name, href: `/au/states/${state.slug}` },
          ]}
        />

        {/* Hero Section */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{state.emoji}</span>
            <div>
              <h1 className="text-5xl font-bold text-gray-900">
                Personal Loans in {state.name}
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                {state.abbreviation} • {state.population} • {state.cities.length} Cities
              </p>
            </div>
          </div>
        </header>

        {/* About State Loans */}
        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Borrowing in {state.name}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {state.description}
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you're in {state.capital} or regional {state.name}, residents can access competitive 
            personal loan rates from ASIC-regulated lenders. Compare options across {state.cities.length} cities 
            and find a loan that matches your financial situation and borrowing needs.
          </p>
        </Card>

        {/* Economic Overview */}
        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {state.name} Economic Snapshot
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-gray-600 mb-1">Median Income</div>
              <div className="text-2xl font-bold text-gray-900">${state.medianIncome.toLocaleString()}</div>
              <div className="text-xs text-gray-500 mt-1">Annual household income</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Unemployment Rate</div>
              <div className="text-2xl font-bold text-gray-900">{state.unemploymentRate}%</div>
              <div className="text-xs text-gray-500 mt-1">State average</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Key Industries</div>
              <div className="text-sm font-semibold text-gray-900">{state.topIndustries.join(', ')}</div>
              <div className="text-xs text-gray-500 mt-1">Major employment sectors</div>
            </div>
          </div>
        </Card>

        {/* Quick Facts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="text-sm text-gray-600 mb-2">Typical Loan Range</div>
            <div className="text-2xl font-bold text-blue-600">$2,000 - $75,000</div>
            <p className="text-sm text-gray-700 mt-2">
              Most {state.name} lenders offer personal loans within this range, subject to income and credit assessment
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-gray-600 mb-2">Average Processing Time</div>
            <div className="text-2xl font-bold text-green-600">1-3 Business Days</div>
            <p className="text-sm text-gray-700 mt-2">
              Many {state.abbreviation} applicants receive approval decisions within 24 hours for straightforward applications
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-gray-600 mb-2">Credit Score Range</div>
            <div className="text-2xl font-bold text-purple-600">Good to Excellent</div>
            <p className="text-sm text-gray-700 mt-2">
              Best rates available for {state.name} borrowers with credit scores above 650
            </p>
          </Card>
        </div>

        {/* Cities in State */}
        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Cities in {state.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {state.cities.map((city) => (
              <Link
                key={city.name}
                href={`/au/cities/${state.slug}/${cityToSlug(city.name)}`}
                className="p-4 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors group"
              >
                <div className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                  {city.name}
                </div>
                <div className="text-sm text-gray-600">
                  Pop. {city.population.toLocaleString()}
                </div>
              </Link>
            ))}
          </div>
        </Card>

        {/* State FAQs */}
        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {state.name} Loan FAQs
          </h2>
          <div className="space-y-6">
            {stateFAQs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Disclosure */}
        <AUDisclosureBlock />

        {/* Back Link */}
        <div className="mt-8 flex gap-4">
          <Link href="/au/states" className="text-blue-600 hover:text-blue-700">
            ← All States & Territories
          </Link>
          <Link href="/au" className="text-blue-600 hover:text-blue-700">
            ← Australia Home
          </Link>
        </div>
      </div>
    </div>
  )
}
