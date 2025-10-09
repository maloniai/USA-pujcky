import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import ApplicationFormScript from '@/components/application-form-script'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'
import { usStates, StateInfo } from '@/data/states'
import { cities } from '@/data/cities'
import { buildStateEducationContent } from '@/data/education'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import {
  AiSummary,
  CreditGuidanceSection,
  EducationModuleGrid,
  EducationQuickLinks,
  FAQList,
  FAQSchema,
  RegulationUpdatesSection,
  RelatedArticles,
} from '@/components/education/education-sections'

interface PageProps {
  params: {
    state: string
  }
}

// Generate static params for all states
export async function generateStaticParams() {
  return usStates.map((state) => ({
    state: state.slug,
  }))
}

// Generate metadata for each state page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const stateData = usStates.find((s) => s.slug === params.state)

  if (!stateData) {
    return {
      title: 'State Not Found',
    }
  }

  const title = `${stateData.name} Personal Loans - Rates, Requirements & Lenders 2025`
  const description = `Compare personal loan rates, requirements, and top lenders in ${stateData.name}. Average rates from ${stateData.avgRate}, loan amounts up to ${stateData.maxLoanAmount}. ${stateData.population} residents served.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://loan-platform.com/us/states/${params.state}`,
      siteName: 'Loan Platform',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://loan-platform.com/us/states/${params.state}`,
    },
  }
}

export default function StatePage({ params }: PageProps) {
  const stateData = usStates.find((s) => s.slug === params.state)

  if (!stateData) {
    notFound()
  }

  // Get cities in this state
  const stateCities = cities.filter(
    (city) => city.state.toLowerCase().replace(/\s+/g, '-') === params.state
  )

  const educationContent = buildStateEducationContent(stateData, stateCities, {
    paths: {
      statesBase: '/us/states',
      citiesBase: '/us/cities',
      apply: '/us/apply',
    },
  })

  // Breadcrumb configuration
  const breadcrumbItems = [
    { name: 'Home', url: '/', position: 1 },
    { name: 'United States', url: '/us', position: 2 },
    { name: 'All States', url: '/us/states', position: 3 },
    { name: stateData.name, url: `/us/states/${params.state}`, position: 4 },
  ]

  return (
    <>
      <FAQSchema
        faqs={educationContent.faqs}
        pageUrl={`https://loan-platform.com/us/states/${params.state}`}
      />
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={breadcrumbItems} />

      <Navigation />

      {/* Visual Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <ResponsiveBreadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Link
              href="/us/states"
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold"
            >
              <span aria-hidden>←</span>
              Back to All States
            </Link>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-5xl font-bold text-blue-900">
              {stateData.name} Personal Loans
            </h1>
            <span className="text-4xl">{getFlagEmoji(stateData.abbreviation)}</span>
          </div>
          <p className="text-xl text-gray-700 mb-4 max-w-3xl">
            {stateData.description}
          </p>
          <div className="flex flex-wrap gap-4 text-lg">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="text-gray-600">Population:</span>{' '}
              <strong className="text-blue-900">{stateData.population}</strong>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="text-gray-600">Avg Rate:</span>{' '}
              <strong className="text-blue-900">{stateData.avgRate}</strong>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="text-gray-600">Max Loan:</span>{' '}
              <strong className="text-blue-900">{stateData.maxLoanAmount}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <nav
            aria-label={`${stateData.name} loan sitemap`}
            className="mb-10 bg-white border border-gray-200 rounded-xl shadow-sm"
          >
            <h2 className="px-6 pt-5 text-sm font-semibold text-gray-500 uppercase tracking-wider">
              {stateData.name} Loan Sitemap
            </h2>
            <ul className="px-6 pb-6 pt-3 flex flex-wrap gap-3 text-sm">
              <li>
                <Link
                  href="/us/states"
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 font-semibold text-blue-700 hover:border-blue-200 hover:bg-blue-100"
                >
                  <span aria-hidden>←</span>
                  Back to All States
                </Link>
              </li>
              <li>
                <a
                  href="#state-overview"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 font-semibold text-gray-700 hover:border-blue-300 hover:text-blue-800"
                >
                  State Overview
                </a>
              </li>
              <li>
                <a
                  href="#regulation-watch"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 font-semibold text-gray-700 hover:border-blue-300 hover:text-blue-800"
                >
                  Regulation Watch
                </a>
              </li>
              <li>
                <a
                  href="#credit-readiness"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 font-semibold text-gray-700 hover:border-blue-300 hover:text-blue-800"
                >
                  Credit Readiness
                </a>
              </li>
              {stateCities.length > 0 && (
                <li>
                  <a
                    href="#city-guides"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 font-semibold text-gray-700 hover:border-blue-300 hover:text-blue-800"
                  >
                    City Loan Guides
                  </a>
                </li>
              )}
              <li>
                <a
                  href="#education-faq"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 font-semibold text-gray-700 hover:border-blue-300 hover:text-blue-800"
                >
                  Loan FAQ
                </a>
              </li>
              <li>
                <Link
                  href="/us/apply"
                  className="inline-flex items-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-3 py-2 font-semibold text-purple-700 hover:border-purple-300 hover:text-purple-900"
                >
                  Apply for Loans
                </Link>
              </li>
            </ul>
          </nav>

          <EducationQuickLinks links={educationContent.quickLinks} />
          <AiSummary
            heading={`${stateData.name} Loan Education Hub`}
            points={educationContent.aiSummary}
            lastReviewed={educationContent.lastReviewed}
          />
          <EducationModuleGrid modules={educationContent.modules} />

          {/* Quick Stats */}
          <section className="mb-12" id="state-overview">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              {stateData.name} Loan Overview
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="text-sm text-gray-600 mb-2">Average Loan Amount</div>
                <div className="text-2xl font-bold text-blue-900">{stateData.avgLoanAmount}</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="text-sm text-gray-600 mb-2">Average Interest Rate</div>
                <div className="text-2xl font-bold text-green-600">{stateData.avgRate}</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <div className="text-sm text-gray-600 mb-2">Maximum Loan Amount</div>
                <div className="text-2xl font-bold text-purple-600">{stateData.maxLoanAmount}</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <div className="text-sm text-gray-600 mb-2">Population Served</div>
                <div className="text-2xl font-bold text-orange-600">{stateData.population}</div>
              </div>
            </div>
          </section>

          <RegulationUpdatesSection
            updates={educationContent.regulationUpdates}
            heading={`${stateData.name} Regulation Watch`}
            id="regulation-watch"
          />

          <section className="mb-12 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Core {stateData.name} Borrower Protections
            </h2>
            <p className="text-gray-700 mb-4">
              Keep these foundational rules in view when comparing lenders—each is referenced in 2025 compliance audits:
            </p>
            <ul className="space-y-3">
              {stateData.regulations.map((regulation, index) => (
                <li key={regulation} className="flex items-start gap-3">
                  <span className="mt-1 text-blue-600" aria-hidden>
                    {index + 1}.
                  </span>
                  <span className="text-gray-700">{regulation}</span>
                </li>
              ))}
            </ul>
          </section>

          <CreditGuidanceSection
            guidance={educationContent.creditGuidance}
            heading={`${stateData.name} Credit Readiness Checklist`}
            id="credit-readiness"
          />

          {/* Cities in this State */}
          {stateCities.length > 0 && (
            <section className="mb-12" id="city-guides">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Personal Loans in {stateData.name} Cities
              </h2>
              <p className="text-gray-700 mb-6">
                Explore personal loan options in major {stateData.name} cities. Each city page provides
                local market insights, lender options, and city-specific information.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stateCities.slice(0, 12).map((city) => (
                  <Link
                    key={city.slug}
                    href={`/us/cities/${params.state}/${city.slug}`}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 hover:border-blue-400"
                  >
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{city.name}</h3>
                    <div className="text-sm text-gray-600 mb-3">
                      Population: {city.population.toLocaleString()}
                    </div>
                    <div className="text-blue-600 text-sm font-semibold flex items-center gap-2">
                      View Loan Options
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
              {stateCities.length > 12 && (
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    And {stateCities.length - 12} more cities in {stateData.name}
                  </p>
                </div>
              )}
            </section>
          )}

          {/* Popular Cities (if no cities data available) */}
          {stateCities.length === 0 && stateData.popularCities.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Popular Cities in {stateData.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stateData.popularCities.map((city) => (
                  <div key={city} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                    <div className="text-lg font-semibold text-blue-900">{city}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* How to Apply */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              How to Apply for a Personal Loan in {stateData.name}
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Check Your Credit Score</h3>
                    <p className="text-gray-700">
                      Review your credit report and score. In {stateData.name}, lenders typically look for
                      scores of 580+ for approval, with better rates for scores above 670.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Compare Lenders</h3>
                    <p className="text-gray-700">
                      Compare rates, terms, and fees from multiple {stateData.name} lenders. Consider both
                      national lenders and local credit unions.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Gather Documentation</h3>
                    <p className="text-gray-700">
                      Prepare proof of income, employment verification, {stateData.name} residency proof,
                      and identification documents.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Submit Your Application</h3>
                    <p className="text-gray-700">
                      Complete the application online or in-person. Most lenders provide instant decisions
                      for {stateData.name} residents.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your {stateData.name} Personal Loan?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Compare rates from top lenders serving {stateData.name} residents
            </p>
            <Link
              href="/us/apply"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Compare Loan Offers
            </Link>
            <LeadGenDisclosure align="center" className="mt-3 text-sm text-white/80" />
          </section>

          <FAQList
            faqs={educationContent.faqs}
            heading={`${stateData.name} Loan Education FAQ`}
            id="education-faq"
          />

          <RelatedArticles articles={educationContent.relatedArticles} />
        </div>
      </div>

      <ApplicationFormScript />
    </>
  )
}

// Helper function to get flag emoji (using regional indicator symbols)
function getFlagEmoji(stateAbbr: string): string {
  // This is a simplified version - you could map state codes to emojis
  // For now, return US flag
  return '🇺🇸'
}
