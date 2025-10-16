import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getAllCanadianCitiesTier1 } from '@/data/ca-cities-tier1'
import { getProvinceBySlug } from '@/data/ca-provinces'

interface Props {
  params: { region: string; city: string }
}

export async function generateStaticParams() {
  const allCities = getAllCanadianCitiesTier1()
  return allCities.map((city) => ({
    region: city.province,
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const allCities = getAllCanadianCitiesTier1()
  const city = allCities.find(
    (c) => c.province === params.region && c.slug === params.city
  )

  if (!city) {
    return { title: 'City Not Found' }
  }

  const province = getProvinceBySlug(params.region)

  return {
    title: `Loans in ${city.name}, ${province?.abbreviation} – Compare FCAC-Licensed Lenders 2025`,
    description: `Find competitive personal loan rates in ${city.name}. Compare FCAC-compliant lenders.`,
    alternates: {
      canonical: `https://loan-platform.com/ca/cities/${params.region}/${params.city}`,
    },
  }
}

export default function CACityPage({ params }: Props) {
  const allCities = getAllCanadianCitiesTier1()
  const city = allCities.find(
    (c) => c.province === params.region && c.slug === params.city
  )

  if (!city) {
    notFound()
  }

  const province = getProvinceBySlug(params.region)
  if (!province) {
    notFound()
  }

  const nearbyCities = allCities
    .filter((c) => c.province === params.region && c.slug !== params.city)
    .sort((a, b) => (b.populationNumber || 0) - (a.populationNumber || 0))
    .slice(0, 6)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/ca" className="hover:text-blue-600">Canada</Link>
          <span className="mx-2">›</span>
          <Link href="/ca/cities" className="hover:text-blue-600">Cities</Link>
          <span className="mx-2">›</span>
          <Link href={`/ca/regions/${province.slug}`} className="hover:text-blue-600">{province.name}</Link>
          <span className="mx-2">›</span>
          <span>{city.name}</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Personal Loans in {city.name}, {province.abbreviation}</h1>
        <p className="text-xl text-gray-600 mb-8">
          Compare FCAC-licensed lenders • {city.population ? `Population: ${city.population.toLocaleString()}` : 'Major City'}
        </p>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">About {city.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                {city.name} residents have access to a wide range of personal loan options from FCAC-licensed lenders operating in {province.name}. 
                All lenders must comply with federal regulations and {province.name} provincial consumer protection laws.
              </p>
            </CardContent>
          </Card>
        </section>

        {nearbyCities.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Loans in Nearby {province.name} Cities</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {nearbyCities.map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  href={`/ca/cities/${province.slug}/${nearbyCity.slug}`}
                  className="p-4 border rounded hover:shadow bg-white"
                >
                  <div className="font-semibold text-gray-900">{nearbyCity.name}</div>
                  {nearbyCity.population && (
                    <div className="text-sm text-gray-600">Pop: {nearbyCity.population.toLocaleString()}</div>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-8 flex gap-4">
          <Link href="/ca/apply">
            <Button size="lg">Apply Now</Button>
          </Link>
          <Link href={`/ca/regions/${province.slug}`}>
            <Button size="lg" variant="outline">More About {province.name}</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
