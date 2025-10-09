import { Metadata } from 'next'
import Link from 'next/link'
import { cities } from '@/data/cities'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'

const cityCount = cities.length
const cityCountLabel = cityCount.toLocaleString('en-US')

export const metadata: Metadata = {
  title: `Top ${cityCountLabel} US Cities for Personal Loans | Find Local Lenders`,
  description: `Browse personal loan options in ${cityCountLabel} major US cities covering 230M+ Americans. Compare local lenders, rates, and requirements. Find trusted loan providers in your area.`,
  keywords: 'personal loans by city, city loans, metro area loans, Los Angeles loans, Houston loans, Miami loans, Providence loans, Warwick loans, Cranston loans, Newport loans, Nashville loans, Memphis loans, Knoxville loans, Covington loans, Lexington loans, Louisville loans, Oklahoma City loans, Tulsa loans, Norman loans, Minneapolis loans, St Paul loans, Detroit loans, Grand Rapids loans, Royal Oak loans, Coeur d\'Alene loans, Edina loans, Mankato loans, Bartlesville loans, Alexandria MN loans, Bay City loans, Midland loans, local personal loans, California city loans, Texas city loans, Florida city loans, Virginia city loans, Utah city loans, Washington city loans, Oregon city loans, Colorado city loans, Delaware loans, Idaho loans, Iowa loans, Kansas loans, Kentucky loans, Maine loans, Minnesota loans, Michigan loans, Oklahoma loans, Tennessee loans',

  alternates: {
    canonical: 'https://loan-platform.com/us/cities',
  },
}

export default function CitiesPage() {
  // Group cities by state
  const citiesByState: Record<string, typeof cities> = {}
  cities.forEach(city => {
    if (!citiesByState[city.state]) {
      citiesByState[city.state] = []
    }
    citiesByState[city.state].push(city)
  })

  // Sort states alphabetically
  const sortedStates = Object.keys(citiesByState).sort()

  // Schema for CollectionPage
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Personal Loans by City',
  description: `Find personal loans in America's top ${cityCountLabel} cities`,
    url: 'https://loan-platform.com/us/cities',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://loan-platform.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'United States',
          item: 'https://loan-platform.com/us'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Cities',
          item: 'https://loan-platform.com/us/cities'
        }
      ]
    },
    mainEntity: {
      '@type': 'ItemList',
  name: `Top ${cityCountLabel} US Cities for Personal Loans`,
      numberOfItems: cities.length,
      itemListElement: cities.map((city, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Place',
          name: city.name,
          address: {
            '@type': 'PostalAddress',
            addressLocality: city.name,
            addressRegion: city.stateAbbr,
            addressCountry: 'US'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: city.coordinates.lat,
            longitude: city.coordinates.lng
          },
          url: `https://loan-platform.com/us/cities/${city.state.toLowerCase().replace(/\s+/g, '-')}/${city.slug}`
        }
      }))
    }
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/', position: 1 },
          { name: 'United States', url: '/us', position: 2 },
          { name: 'Cities', url: '/us/cities', position: 3 },
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
              ]}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Personal Loans in {cityCountLabel} Major US Cities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find the best personal loan rates and lenders in {cityCountLabel} major US cities covering 230M+ Americans. 
              Compare rates, loan amounts, and local lending data for your city.
            </p>
            <Link
              href="/us/apply"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get Your Free Quote
            </Link>
            <LeadGenDisclosure align="center" className="mt-2 text-sm text-gray-600" />
          </div>

          <div className="mb-16 bg-white border border-blue-100 rounded-2xl shadow-sm p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold mb-3">EDUCATION HUB</p>
            <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
              Build Your City Loan Strategy
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto text-center">
              Jump into detailed state and city education hubs, compare credit readiness checklists, and explore AI-friendly guides before you apply.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/us/states"
                className="group bg-blue-50 border border-blue-100 rounded-xl p-5 hover:border-blue-300 transition"
              >
                <p className="text-sm font-semibold text-blue-700 mb-2">State Hubs</p>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Browse {cityCountLabel} cities by state</h3>
                <span className="inline-flex items-center text-sm text-blue-700 group-hover:translate-x-1 transition-transform">
                  View state education hubs →
                </span>
              </Link>
              <Link
                href="/us/faq"
                className="group bg-blue-50 border border-blue-100 rounded-xl p-5 hover:border-blue-300 transition"
              >
                <p className="text-sm font-semibold text-blue-700 mb-2">Loan FAQ</p>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Get answers to approval and compliance questions</h3>
                <span className="inline-flex items-center text-sm text-blue-700 group-hover:translate-x-1 transition-transform">
                  Read the FAQ →
                </span>
              </Link>
              <Link
                href="/us/blog/improve-credit-score-fast-proven-strategies"
                className="group bg-blue-50 border border-blue-100 rounded-xl p-5 hover:border-blue-300 transition"
              >
                <p className="text-sm font-semibold text-blue-700 mb-2">Credit Playbook</p>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Boost your score before applying</h3>
                <span className="inline-flex items-center text-sm text-blue-700 group-hover:translate-x-1 transition-transform">
                  Improve credit →
                </span>
              </Link>
              <Link
                href="/us/ai-loan-matching"
                className="group bg-blue-50 border border-blue-100 rounded-xl p-5 hover:border-blue-300 transition"
              >
                <p className="text-sm font-semibold text-blue-700 mb-2">AI Loan Matching</p>
                <h3 className="text-lg font-bold text-blue-900 mb-2">See how our AI pairs you with lenders</h3>
                <span className="inline-flex items-center text-sm text-blue-700 group-hover:translate-x-1 transition-transform">
                  Learn how matching works →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Overview Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{cityCountLabel}</div>
              <div className="text-gray-600">Major Cities</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">230M+</div>
              <div className="text-gray-600">Total Population</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">18,500+</div>
              <div className="text-gray-600">Total Lenders</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$16.4K</div>
              <div className="text-gray-600">Avg Loan Amount</div>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Find Personal Loans in Your City</h2>
            <p className="text-lg text-muted-foreground mb-4">
              We've analyzed personal loan data across {cityCountLabel} cities nationwide, covering over 230 million Americans (about 70% of the US population). 
              Our comprehensive city guides help you understand local lending markets, typical loan amounts, and 
              average credit requirements in your area.
            </p>
          </div>

          {/* Cities by State */}
          <div className="space-y-12">
            {sortedStates.map(state => (
              <div key={state} id={state.toLowerCase().replace(/\s+/g, '-')}>
                <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                  <span className="text-purple-600">📍</span>
                  {state}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {citiesByState[state]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map(city => (
                    <Link
                      key={city.slug}
                      href={`/us/cities/${city.state.toLowerCase().replace(/\s+/g, '-')}/${city.slug}`}
                      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 group"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-2xl font-bold text-blue-900 group-hover:text-blue-600 transition-colors">
                          {city.name}
                        </h3>
                        <span className="text-gray-500 text-sm font-semibold">{city.stateAbbr}</span>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Population:</span>
                          <span className="font-semibold text-gray-900">{city.population}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Avg Loan:</span>
                          <span className="font-semibold text-blue-600">${city.averageLoanAmount}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Lenders:</span>
                          <span className="font-semibold text-purple-600">{city.nearbyLenders}+</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Avg Credit:</span>
                          <span className="font-semibold text-gray-900">{city.avgCreditScore}</span>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-3">
                        <p className="text-sm text-gray-600 mb-2">Popular loan types:</p>
                        <div className="flex flex-wrap gap-2">
                          {city.popularLoanTypes.slice(0, 2).map(type => (
                            <span
                              key={type}
                              className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 text-blue-600 group-hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                        View {city.name} loans
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* State Quick Links */}
          <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Quick Jump by State
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {sortedStates.map(state => (
                <a
                  key={state}
                  href={`#${state.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow text-blue-600 hover:text-blue-800 font-semibold text-sm"
                >
                  {state}
                </a>
              ))}
            </div>
          </div>

          {/* Why Choose City-Specific Loans */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              Why City-Specific Loan Information Matters
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏙️</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Local Economy Insights</h3>
                <p className="text-gray-600 text-sm">
                  Each city has unique economic factors that influence loan availability and terms.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Realistic Loan Amounts</h3>
                <p className="text-gray-600 text-sm">
                  Average loan amounts reflect your city's cost of living and median income.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">More Lender Options</h3>
                <p className="text-gray-600 text-sm">
                  Connect with both national lenders and those specifically serving your metro area.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Your Personal Loan?
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              No matter which city you're in, we connect you with the right lenders.
            </p>
              <Link
                href="/us/apply"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
              Start Your Application
            </Link>
            <LeadGenDisclosure align="center" className="mt-3 text-sm text-white/80" />
          </div>
        </div>
      </div>
    </>
  )
}
