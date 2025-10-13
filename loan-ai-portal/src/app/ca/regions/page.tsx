import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import CanadaNavigation from '@/components/canada/canada-navigation'
import CanadaFooter from '@/components/canada/canada-footer'
import StickyApplyButton from '@/components/canada/sticky-apply-button'
import { caProvinces } from '@/data/ca-provinces'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Canadian Provinces & Territories - Personal Loan Information by Region',
  description: 'Explore personal loan options, regulations, and licensed lenders across all 13 Canadian provinces and territories. Find province-specific lending information.',
  keywords: 'canada provinces, territories, provincial loans, lending regulations, licensed lenders by province',
  openGraph: {
    title: 'Canadian Provinces & Territories - Loan Information',
    description: 'Province-specific personal loan information for all Canadian provinces and territories.',
    url: 'https://loansai.com/ca/regions',
    siteName: 'LoansAI Canada',
    locale: 'en_CA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/ca/regions',
  },
}

export default function CanadaRegionsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://loansai.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Canada',
        item: 'https://loansai.com/ca'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Provinces & Territories',
        item: 'https://loansai.com/ca/regions'
      }
    ]
  }

  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <CanadaNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm">
              <ol className="flex items-center gap-2 text-gray-600">
                <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                <li>›</li>
                <li><Link href="/ca" className="hover:text-blue-600">Canada</Link></li>
                <li>›</li>
                <li className="text-gray-900 font-semibold">Provinces & Territories</li>
              </ol>
            </nav>

            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Canadian Provinces & Territories
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find personal loan information, regulations, and licensed lenders specific to your province or territory.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">13</div>
                <div className="text-sm text-gray-600">Provinces & Territories</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">39M</div>
                <div className="text-sm text-gray-600">Total Population</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Licensed Lenders</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-sm text-gray-600">Cities Covered</div>
              </div>
            </div>

            {/* Major Provinces */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Major Provinces</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {caProvinces.slice(0, 4).map((province) => (
                  <Link key={province.slug} href={`/ca/regions/${province.slug}`}>
                    <Card className="hover:shadow-xl transition-all h-full cursor-pointer group border-2 hover:border-blue-400">
                      <CardHeader>
                        <CardTitle className="text-2xl group-hover:text-blue-600 transition flex items-center justify-between">
                          <span>{province.name}</span>
                          <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                            {province.abbreviation}
                          </span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{province.description}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-gray-700">
                            <span>👥</span>
                            <span><strong>Population:</strong> {province.population}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <span>💰</span>
                            <span><strong>Loan Range:</strong> {province.loanAmountRange}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <span>📊</span>
                            <span><strong>Avg Rate:</strong> {province.avgRate}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <span>🏛️</span>
                            <span><strong>Regulator:</strong> {province.regulator}</span>
                          </div>
                        </div>
                        <div className="mt-4 text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                          Explore {province.name} →
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Provinces & Territories */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Provinces & Territories</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {caProvinces.slice(4).map((province) => (
                  <Link key={province.slug} href={`/ca/regions/${province.slug}`}>
                    <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer group">
                      <CardHeader>
                        <CardTitle className="text-lg group-hover:text-blue-600 transition">
                          {province.name}
                          <div className="text-xs text-gray-500 font-normal mt-1">{province.abbreviation}</div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p className="flex items-center gap-2">
                            <span>👥</span>
                            <span>{province.population}</span>
                          </p>
                          <p className="flex items-center gap-2">
                            <span>💰</span>
                            <span>{province.avgRate}</span>
                          </p>
                          <p className="flex items-center gap-2">
                            <span>🏙️</span>
                            <span>{province.cityCount} cities</span>
                          </p>
                        </div>
                        <div className="mt-4 text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          View details →
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Best Loan?</h2>
              <p className="text-lg mb-6 opacity-90">
                Compare offers from licensed lenders in your province or territory
              </p>
              <Link href="/ca/apply">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                  Apply Now - Free & Fast
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <CanadaFooter />
    </>
  )
}
