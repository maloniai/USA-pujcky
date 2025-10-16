import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { caProvinces, getProvinceBySlug } from '@/data/ca-provinces'
import { getAllCanadianCitiesTier1 } from '@/data/ca-cities-tier1'

interface Props {
  params: { region: string }
}

export async function generateStaticParams() {
  return caProvinces.map((province) => ({
    region: province.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const province = getProvinceBySlug(params.region)
  
  if (!province) {
    return { title: 'Province Not Found' }
  }

  return {
    title: `${province.name} Personal Loans – Compare FCAC-Licensed Lenders 2025`,
    description: `Find competitive personal loan rates in ${province.name}. Compare FCAC-compliant lenders.`,
    alternates: {
      canonical: `https://loan-platform.com/ca/regions/${province.slug}`,
    },
  }
}

export default function CARegionPage({ params }: Props) {
  const province = getProvinceBySlug(params.region)

  if (!province) {
    notFound()
  }

  const provinceCities = getAllCanadianCitiesTier1()
    .filter(city => city.province === province.slug)
    .sort((a, b) => (b.populationNumber || 0) - (a.populationNumber || 0))

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/ca" className="hover:text-blue-600">Canada</Link>
          <span className="mx-2">›</span>
          <Link href="/ca/regions" className="hover:text-blue-600">Provinces</Link>
          <span className="mx-2">›</span>
          <span>{province.name}</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Personal Loans in {province.name}</h1>
        <p className="text-xl text-gray-600 mb-8">{province.abbreviation} • Capital: {province.capital}</p>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">About {province.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{province.description}</p>
            </CardContent>
          </Card>
        </section>

        {provinceCities.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Cities in {province.name}</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {provinceCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/ca/cities/${province.slug}/${city.slug}`}
                  className="p-4 border rounded hover:shadow bg-white"
                >
                  <div className="font-semibold text-gray-900">{city.name}</div>
                  {city.population && (
                    <div className="text-sm text-gray-600">Pop: {city.population.toLocaleString()}</div>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-8">
          <Link href="/ca/apply">
            <Button size="lg">Apply Now</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
