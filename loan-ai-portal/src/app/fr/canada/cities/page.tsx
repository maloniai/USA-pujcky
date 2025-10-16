import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { caRegions } from '@/data/ca-regions'

export const metadata: Metadata = {
  title: 'Prêts personnels par ville au Canada | Comparez 2025',
  description: 'Trouvez et comparez les prêts personnels dans plus de 70 villes canadiennes. Taux compétitifs de prêteurs agréés dans les 13 provinces et territoires.',
  alternates: {
    canonical: 'https://loan-platform.com/fr/canada/cities',
    languages: {
      'en-CA': 'https://loan-platform.com/ca/cities',
      'fr-CA': 'https://loan-platform.com/fr/canada/cities',
    },
  },
  openGraph: {
    title: 'Prêts personnels par ville au Canada',
    description: 'Trouvez et comparez les prêts personnels dans plus de 70 villes canadiennes.',
    url: 'https://loan-platform.com/fr/canada/cities',
    siteName: 'Loan-Platform.com',
    locale: 'fr_CA',
    alternateLocale: ['en_CA'],
    type: 'website',
  },
}

export default function FrenchCitiesIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/fr/canada" className="hover:text-blue-600">Accueil</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-900 font-medium">Villes</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Prêts personnels par ville au Canada
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Explorez les options de prêt personnel dans plus de 70 villes canadiennes. 
            Comparez les taux de prêteurs agréés dans votre région.
          </p>
          <Link href="/ca/apply?lang=fr">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Faire une demande
            </Button>
          </Link>
        </section>

        {/* Provinces Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Parcourir par province et territoire
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caRegions.map((region) => (
              <Link
                key={region.slug}
                href={`/fr/canada/${region.slug}`}
                className="block"
              >
                <Card className="p-6 hover:shadow-lg transition-shadow hover:border-blue-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{region.nameFr}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {region.cities.length} villes disponibles
                  </p>
                  <p className="text-sm text-blue-600 font-medium">
                    Explorer {region.nameFr} →
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
