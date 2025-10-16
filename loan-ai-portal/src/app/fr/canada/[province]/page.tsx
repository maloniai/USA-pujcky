import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { caRegions, getCARegionBySlug } from '@/data/ca-regions'
import { canadianCitiesTier1 } from '@/data/ca-cities-tier1'

export async function generateStaticParams() {
  return caRegions.map((region) => ({
    province: region.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { province: string }
}): Promise<Metadata> {
  const region = getCARegionBySlug(params.province)
  
  if (!region) {
    return { title: 'Province non trouvée' }
  }

  return {
    title: `Prêts personnels en ${region.nameFr} | Comparez ${new Date().getFullYear()}`,
    description: `Comparez les prêts personnels en ${region.nameFr}. Trouvez des prêteurs agréés dans toutes les villes de ${region.nameFr}.`,
    alternates: {
      canonical: `https://loan-platform.com/fr/canada/${params.province}`,
      languages: {
        'en-CA': `https://loan-platform.com/ca/regions/${params.province}`,
        'fr-CA': `https://loan-platform.com/fr/canada/${params.province}`,
      },
    },
    openGraph: {
      title: `Prêts personnels en ${region.nameFr}`,
      description: `Comparez les prêts personnels en ${region.nameFr}.`,
      url: `https://loan-platform.com/fr/canada/${params.province}`,
      siteName: 'Loan-Platform.com',
      locale: 'fr_CA',
      alternateLocale: ['en_CA'],
      type: 'website',
    },
  }
}

export default async function FrenchProvincePage({
  params,
}: {
  params: { province: string }
}) {
  const region = getCARegionBySlug(params.province)
  
  if (!region) {
    return notFound()
  }

  // Get all cities for this province (both legacy and Tier 1)
  const legacyCities = region.cities
  
  // Map province abbreviations to get Tier 1 cities
  const provinceAbbrs: Record<string, string> = {
    'ontario': 'ON',
    'quebec': 'QC',
    'british-columbia': 'BC',
    'alberta': 'AB',
    'manitoba': 'MB',
    'saskatchewan': 'SK',
    'nova-scotia': 'NS',
    'new-brunswick': 'NB',
    'prince-edward-island': 'PE',
    'newfoundland-and-labrador': 'NL',
    'yukon': 'YT',
    'northwest-territories': 'NT',
    'nunavut': 'NU',
  }
  
  const provinceAbbr = provinceAbbrs[params.province]
  const tier1Cities = canadianCitiesTier1.filter(city => city.provinceAbbr === provinceAbbr)
  
  // Combine all cities
  const allCities = [
    ...legacyCities.map(city => ({
      name: city.nameFr || city.name,
      slug: city.slug,
      isTier1: false,
    })),
    ...tier1Cities.map(city => ({
      name: city.nameFr,
      slug: city.slug,
      isTier1: true,
    }))
  ].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/fr/canada" className="hover:text-blue-600">Accueil</Link></li>
            <li><span className="mx-2">/</span></li>
            <li><Link href="/fr/canada/cities" className="hover:text-blue-600">Provinces</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-900 font-medium">{region.nameFr}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Prêts personnels en {region.nameFr}
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Comparez les prêts personnels et trouvez les meilleurs taux en {region.nameFr}. 
            Explorez les options de prêt dans {allCities.length} villes à travers la province.
          </p>
          <Link href="/ca/apply?lang=fr">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Faire une demande
            </Button>
          </Link>
        </section>

        {/* Cities Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Villes en {region.nameFr}
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allCities.map((city) => (
              <Link
                key={city.slug}
                href={`/fr/canada/${params.province}/${city.slug}`}
                className="block"
              >
                <Card className="p-4 hover:shadow-md transition-shadow hover:border-blue-300">
                  <h3 className="font-semibold text-gray-900 mb-1">{city.name}</h3>
                  <p className="text-sm text-blue-600">Voir les prêts →</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
