import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import NewZealandNavigation from '@/components/newzealand/newzealand-navigation'
import NewZealandFooter from '@/components/newzealand/newzealand-footer'
import StickyApplyButton from '@/components/newzealand/sticky-apply-button'
import { newzealandRegions, getRegionsByPopulation } from '@/data/newzealand-regions'

export const metadata: Metadata = {
  title: 'Loans by Region in New Zealand – Compare 2025',
  description: 'Explore personal loan options across all 16 regions of New Zealand. Find licensed lenders, compare rates, and discover region-specific loan information.',
  keywords: 'new zealand regions, loans by region, regional lenders, FMA licensed, compare loans nz',
  alternates: {
    canonical: 'https://loansai.com/nz/regions',
  },
}

export default function RegionsPage() {
  const sortedRegions = getRegionsByPopulation()

  return (
    <>
      <NewZealandNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loans by Region in New Zealand
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Explore personal loan options across all 16 regions of New Zealand. Each region has unique 
              economic characteristics and lender availability. Find the information specific to your region.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedRegions.map((region) => (
                <Link key={region.slug} href={`/nz/regions/${region.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer group">
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition">
                        {region.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm text-gray-600">
                        <p className="flex items-center gap-2">
                          <span>👥</span>
                          <span><strong>Population:</strong> {region.population}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>💰</span>
                          <span><strong>Avg Loan:</strong> {region.avgLoanAmount}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>📊</span>
                          <span><strong>Avg Rate:</strong> {region.avgRate}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>🏛️</span>
                          <span><strong>Max Loan:</strong> {region.maxLoanAmount}</span>
                        </p>
                      </div>
                      <p className="mt-4 text-sm text-gray-700 line-clamp-2">
                        {region.description}
                      </p>
                      <div className="mt-4 text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        View {region.name} details →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/nz/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Apply for a Loan
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <NewZealandFooter />
    </>
  )
}
