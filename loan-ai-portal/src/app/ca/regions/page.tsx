import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { caProvinces } from '@/data/ca-provinces'
import CANavigation from '@/components/canada/ca-navigation'
import CAFooter from '@/components/canada/ca-footer'
import CAStickyApplyButton from '@/components/canada/ca-sticky-apply-button'

export const metadata: Metadata = {
  title: 'Personal Loans by Province & Territory in Canada',
  description: 'Find personal loans in all 13 Canadian provinces and territories.',
  alternates: {
    canonical: 'https://loan-platform.com/ca/regions',
  },
}

export default function CARegionsPage() {
  return (
    <>
      <CANavigation />
      <CAStickyApplyButton />
      
      <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Provinces & Territories</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          {caProvinces.map((province) => (
            <Card key={province.slug}>
              <CardHeader>
                <CardTitle>
                  <Link href={`/ca/regions/${province.slug}`} className="text-blue-900 hover:text-blue-700">
                    {province.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-2"><strong>Capital:</strong> {province.capital}</p>
                <p className="text-sm text-gray-600">{province.description}</p>
                <Link href={`/ca/regions/${province.slug}`} className="text-blue-600 hover:underline mt-4 inline-block">
                  View Details →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/ca">
            <Button variant="outline">Back to Canada Hub</Button>
          </Link>
        </div>
      </div>
    </main>
    
    <CAFooter />
    </>
  )
}
