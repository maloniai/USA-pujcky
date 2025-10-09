import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCityBySlug, getAllCitySlugs, getNearbyCities } from '@/data/cities'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'
import { buildCityEducationContent, getStateBySlug } from '@/data/education'
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

// Generate static params for all cities
export async function generateStaticParams() {
  return getAllCitySlugs()
}

// Generate metadata for each city
export async function generateMetadata({
  params,
}: {
  params: { state: string; city: string }
}): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  
  if (!city) {
    return {
      title: 'City Not Found',
      description: 'The requested city page could not be found.',
    }
  }

  const title = `Personal Loans in ${city.name}, ${city.stateAbbr} - Fast Approval | Loan AI Portal`
  const description = `Get personal loans in ${city.name}, ${city.state}. ${city.nearbyLenders}+ lenders, average loan amount ${city.averageLoanAmount}, rates from 5.99% APR. Fast approval for ${city.name} residents.`
  
  return {
    title,
    description,
    keywords: [
      `personal loans ${city.name}`,
      `${city.name} personal loans`,
      `loans in ${city.name} ${city.stateAbbr}`,
      `${city.name} ${city.state} lenders`,
      `fast cash ${city.name}`,
      `${city.name} loan companies`,
      `best personal loans ${city.name}`,
      `online loans ${city.name}`,
      `${city.stateAbbr} personal loans`,
      ...city.popularLoanTypes.map(type => `${type.toLowerCase()} loans ${city.name}`)
    ].join(', '),
    alternates: {
      canonical: `https://loan-platform.com/us/cities/${params.state}/${params.city}`,
    },
    openGraph: {
      title,
      description,
      url: `https://loan-platform.com/us/cities/${params.state}/${params.city}`,
      siteName: 'Loan AI Portal',
      locale: 'en_US',
      type: 'website',
    },
  }
}

export default function CityPage({
  params,
}: {
  params: { state: string; city: string }
}) {
  const city = getCityBySlug(params.city)

  if (!city) {
    notFound()
  }

  const parentState = getStateBySlug(params.state)

  if (!parentState) {
    notFound()
  }

  const educationContent = buildCityEducationContent(city, parentState, {
    paths: {
      statesBase: '/us/states',
      citiesBase: '/us/cities',
      apply: '/us/apply',
    },
  })
  const nearbyCities = getNearbyCities(params.city, 6)

  // JSON-LD Schema for Local Business + Financial Service
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'https://schema.org/FinancialService',
    name: `Loan AI Portal - ${city.name}`,
    description: `AI-powered personal loan matching service for ${city.name}, ${city.state} residents`,
    image: 'https://loan-platform.com/logo.png',
    telephone: '+1-800-LOAN-AI',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.stateAbbr,
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      addressRegion: city.stateAbbr,
      addressCountry: 'US',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: city.coordinates.lat,
        longitude: city.coordinates.lng,
      },
    },
    url: `https://loan-platform.com/us/cities/${params.state}/${params.city}`,
    priceRange: '$1,000 - $100,000',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Direct Deposit',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Personal Loans in ${city.name}`,
      itemListElement: city.popularLoanTypes.map((type, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'LoanOrCredit',
          name: `${type} Loan`,
          description: `${type} loans for ${city.name} residents`,
        },
        position: index + 1,
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '12500',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <FAQSchema
        faqs={educationContent.faqs}
        pageUrl={`https://loan-platform.com/us/cities/${params.state}/${params.city}`}
      />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/', position: 1 },
          { name: 'United States', url: '/us', position: 2 },
          { name: 'Cities', url: '/us/cities', position: 3 },
          { name: city.state, url: `/us/states/${params.state}`, position: 4 },
          { name: city.name, url: `/us/cities/${params.state}/${params.city}`, position: 5 },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <ResponsiveBreadcrumbs
              items={[
                { name: 'Home', url: '/' },
                { name: 'United States', url: '/us' },
                { name: 'Cities', url: '/us/cities' },
                { name: city.state, url: `/us/states/${params.state}` },
                { name: city.name, url: `/us/cities/${params.state}/${params.city}` },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link
                href={`/us/states/${params.state}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <span aria-hidden>←</span>
                Back to {parentState.name} Loans
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Personal Loans in {city.name}, {city.stateAbbr}
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-blue-100">
                Connect with {city.nearbyLenders}+ Local & National Lenders
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  ⚡ Avg Loan: {city.averageLoanAmount}
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  📊 Avg Credit: {city.avgCreditScore}
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  🏙️ Population: {city.population}
                </div>
              </div>
              <Link
                href="/us/apply"
                className="inline-block mt-8 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav
            aria-label={`${city.name} loan sitemap`}
            className="mb-10 bg-white border border-gray-200 rounded-xl shadow-sm"
          >
            <h2 className="px-6 pt-5 text-sm font-semibold text-gray-500 uppercase tracking-wider">
              {city.name} Loan Sitemap
            </h2>
            <ul className="px-6 pb-6 pt-3 flex flex-wrap gap-3 text-sm">
              <li>
                <Link
                  href={`/us/states/${params.state}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 font-semibold text-blue-700 hover:border-blue-200 hover:bg-blue-100"
                >
                  <span aria-hidden>←</span>
                  Back to {parentState.name} Loans
                </Link>
              </li>
              <li>
                <Link
                  href="/us/cities"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 font-semibold text-gray-700 hover:border-blue-300 hover:text-blue-800"
                >
                  All Cities
                </Link>
              </li>
              <li>
                <a
                  href="#city-overview"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 font-semibold text-gray-700 hover:border-blue-300 hover:text-blue-800"
                >
                  City Overview
                </a>
              </li>
              <li>
                <a
                  href="#loans-near-you"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 font-semibold text-gray-700 hover:border-blue-300 hover:text-blue-800"
                >
                  Loans Near You
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

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              <EducationQuickLinks links={educationContent.quickLinks} />
              <AiSummary
                heading={`${city.name}, ${city.stateAbbr} Loan Education Hub`}
                points={educationContent.aiSummary}
                lastReviewed={educationContent.lastReviewed}
              />
              <EducationModuleGrid modules={educationContent.modules} />

              {/* Loans Near You */}
              {nearbyCities.length > 0 && (
                <section className="bg-white rounded-lg shadow-md p-6" id="loans-near-you">
                  <h2 className="text-3xl font-bold text-blue-900 mb-4">
                    Loans Near You
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Explore nearby cities with active lending markets to compare offers and coverage areas.
                  </p>
                  <ul className="space-y-3">
                    {nearbyCities.map(({ city: nearbyCity, distanceMiles }) => (
                      <li key={nearbyCity.slug} className="flex flex-col rounded-lg border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition">
                        <Link
                          href={`/us/cities/${nearbyCity.state.toLowerCase().replace(/\s+/g, '-')}/${nearbyCity.slug}`}
                          className="text-lg font-semibold text-blue-700 hover:text-blue-900"
                        >
                          Loans in {nearbyCity.name}, {nearbyCity.stateAbbr}
                        </Link>
                        <span className="text-sm text-gray-600 mt-1">
                          Approximately {Math.round(distanceMiles)} miles away · {nearbyCity.nearbyLenders}+ lenders · Avg loan {nearbyCity.averageLoanAmount}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6" id="city-overview">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  {city.name} Personal Loan Overview
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">MEDIAN HOUSEHOLD INCOME</h3>
                    <p className="text-2xl font-bold text-blue-600">{city.medianIncome}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">MEDIAN HOME PRICE</h3>
                    <p className="text-2xl font-bold text-blue-600">{city.medianHomePrice}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">AVERAGE LOAN AMOUNT</h3>
                    <p className="text-2xl font-bold text-blue-600">{city.averageLoanAmount}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">AVAILABLE LENDERS</h3>
                    <p className="text-2xl font-bold text-blue-600">{city.nearbyLenders}+</p>
                  </div>
                </div>
              </div>

              {/* Local Economy */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  {city.name} Economy & Loan Demand
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {city.localEconomy}
                </p>
                <h3 className="font-semibold text-gray-900 mb-2">Key Industries:</h3>
                <div className="flex flex-wrap gap-2">
                  {city.keyIndustries.map((industry) => (
                    <span
                      key={industry}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              {/* Popular Loan Types */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Most Popular Loan Types in {city.name}
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {city.popularLoanTypes.map((type, index) => (
                    <div key={type} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">#{index + 1}</div>
                      <h3 className="font-semibold text-gray-900">{type}</h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  How to Get a Personal Loan in {city.name}
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Complete Our Quick Form</h3>
                      <p className="text-gray-600">
                        Takes just 2-3 minutes. We'll ask about your loan needs and basic financial information.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Get Matched with {city.name} Lenders</h3>
                      <p className="text-gray-600">
                        Our AI instantly connects you with lenders serving {city.name}, {city.stateAbbr}.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Compare Multiple Offers</h3>
                      <p className="text-gray-600">
                        Review loan offers from multiple lenders and choose the best rate and terms for you.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Get Funded Fast</h3>
                      <p className="text-gray-600">
                        Many {city.name} residents receive funds in as little as 1 business day after approval.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <RegulationUpdatesSection
                updates={educationContent.regulationUpdates}
                heading={`${parentState.name} & ${city.name} Regulation Watch`}
                id="regulation-watch"
              />

              <CreditGuidanceSection
                guidance={educationContent.creditGuidance}
                heading={`${city.name} Credit Readiness Checklist`}
                id="credit-readiness"
              />

              {/* Local FAQ */}
              <FAQList
                faqs={educationContent.faqs}
                heading={`${city.name} Loan Education FAQ`}
                id="education-faq"
              />

              <RelatedArticles articles={educationContent.relatedArticles} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Apply CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg shadow-lg p-6 sticky top-4">
                <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
                <p className="mb-6">
                  Get matched with {city.nearbyLenders}+ lenders serving {city.name} residents.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>No impact on credit score to check rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>100% free service - no hidden fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>Fast approval decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>Funding in 1-2 business days</span>
                  </li>
                </ul>
                <Link
                  href="/us/apply"
                  className="block w-full bg-white text-blue-600 text-center px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                >
                  Start Application
                </Link>
              </div>

              {/* Other Cities in State */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  More {city.state} Cities
                </h3>
                <Link
                  href={`/us/states/${params.state}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  View all {city.state} loan information →
                </Link>
              </div>

              {/* Related Links */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/faq" className="text-blue-600 hover:text-blue-800">
                      Personal Loan FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/ai-loan-matching" className="text-blue-600 hover:text-blue-800">
                      How AI Matching Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/us/states" className="text-blue-600 hover:text-blue-800">
                      All 50 States
                    </Link>
                  </li>
                  <li>
                    <Link href="/us/cities" className="text-blue-600 hover:text-blue-800">
                      Top 20 Cities
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join Thousands of {city.name} Residents Getting Personal Loans
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Fast, free, and secure. Compare offers from {city.nearbyLenders}+ lenders in minutes.
            </p>
            <Link
              href="/us/apply"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
