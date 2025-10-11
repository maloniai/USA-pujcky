import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { getCityBySlug, getAllCitySlugs } from '@/data/canada-cities'
import { getProvinceBySlug } from '@/data/canada-provinces'

// Generate static params for all cities
export async function generateStaticParams() {
  return getAllCitySlugs()
}

// Generate metadata for each city (French)
export async function generateMetadata({
  params,
}: {
  params: { province: string; city: string }
}): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  
  if (!city) {
    return {
      title: 'Ville non trouvée',
      description: 'La page de la ville demandée n\'a pas pu être trouvée.',
    }
  }

  const title = `Prêts à ${city.nameFr}, ${city.provinceAbbr} – Comparez 2025`
  const description = `Obtenez des prêts personnels à ${city.nameFr}, ${city.provinceFr}. ${city.nearbyLenders}+ prêteurs, prêt moyen ${city.averageLoanAmount}, taux à partir de 6,99 % TAP. Approbation rapide pour les résidents de ${city.nameFr}.`
  
  return {
    title,
    description,
    keywords: `prêts personnels ${city.nameFr}, prêts ${city.nameFr}, prêts à ${city.nameFr} ${city.provinceAbbr}, prêteurs ${city.nameFr}`,
    alternates: {
      canonical: `https://loan-platform.com/fr/canada/${params.province}/${params.city}/loans`,
      languages: {
        'en-CA': `https://loan-platform.com/canada/${params.province}/${params.city}/loans`,
        'fr-CA': `https://loan-platform.com/fr/canada/${params.province}/${params.city}/loans`,
      },
    },
  }
}

export default function FrenchCityLoansPage({
  params,
}: {
  params: { province: string; city: string }
}) {
  const city = getCityBySlug(params.city)
  const province = getProvinceBySlug(params.province)

  if (!city || !province) {
    notFound()
  }

  // JSON-LD Schema for City (French)
  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'https://schema.org/FinancialService',
    name: `Portail de prêts IA - ${city.nameFr}`,
    description: `Service de jumelage de prêts personnels pour les résidents de ${city.nameFr}, ${city.provinceFr}`,
    inLanguage: 'fr-CA',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.nameFr,
      addressRegion: city.provinceAbbr,
      addressCountry: 'CA',
    },
    areaServed: {
      '@type': 'City',
      name: city.nameFr,
      addressRegion: city.provinceAbbr,
      addressCountry: 'CA',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: city.coordinates.lat,
        longitude: city.coordinates.lng,
      },
    },
    url: `https://loan-platform.com/fr/canada/${params.province}/${params.city}/loans`,
    priceRange: '1 000 $ - 50 000 $',
    currenciesAccepted: 'CAD',
  }

  // FAQ Schema (French)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'fr-CA',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Quel est le montant de prêt moyen à ${city.nameFr}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `À ${city.nameFr}, le montant de prêt personnel moyen est d'environ ${city.averageLoanAmount}. Cependant, vous pouvez emprunter entre 1 000 $ et 50 000 $ selon vos besoins et votre capacité de remboursement.`,
        },
      },
      {
        '@type': 'Question',
        name: `Combien de prêteurs desservent ${city.nameFr}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Il y a environ ${city.nearbyLenders} prêteurs qui desservent la région de ${city.nameFr}. Notre plateforme vous aide à comparer les offres de prêteurs agréés pour trouver les meilleurs taux et conditions.`,
        },
      },
      {
        '@type': 'Question',
        name: `Quel est le score de crédit moyen à ${city.nameFr}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Le score de crédit moyen à ${city.nameFr} est d'environ ${city.avgCreditScore}. Même avec un score de crédit inférieur, vous pourriez toujours être admissible à un prêt personnel, bien qu'à des taux potentiellement plus élevés.`,
        },
      },
      {
        '@type': 'Question',
        name: `Combien de temps faut-il pour obtenir l'approbation d'un prêt à ${city.nameFr}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `La plupart des demandes de prêt à ${city.nameFr} reçoivent une décision préliminaire en quelques minutes. Une fois approuvé, les fonds peuvent être déposés dans votre compte bancaire en 24 à 48 heures.`,
        },
      },
      {
        '@type': 'Question',
        name: `Quelles réglementations s'appliquent aux prêts à ${city.nameFr}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Les prêts à ${city.nameFr} sont réglementés par ${province.regulatorFr}. ${province.provinceFr} a des lois spécifiques sur les taux d'intérêt et la protection des consommateurs que tous les prêteurs agréés doivent respecter.`,
        },
      },
    ],
  }

  // Breadcrumb Schema (French)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Canada',
        item: 'https://loan-platform.com/fr/canada',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: province.nameFr,
        item: `https://loan-platform.com/fr/canada/provinces/${params.province}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Prêts à ${city.nameFr}`,
        item: `https://loan-platform.com/fr/canada/${params.province}/${params.city}/loans`,
      },
    ],
  }

  return (
    <html lang="fr-CA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <link rel="alternate" hrefLang="en-CA" href={`https://loan-platform.com/canada/${params.province}/${params.city}/loans`} />
        <link rel="alternate" hrefLang="fr-CA" href={`https://loan-platform.com/fr/canada/${params.province}/${params.city}/loans`} />
      </head>
      <body>
        <Navigation />
        
        {/* Sticky Apply Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Link
            href="/fr/canada/apply"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg font-semibold text-lg transition-colors"
          >
            Postulez maintenant
          </Link>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav className="text-sm mb-6 text-gray-600">
            <Link href="/fr/canada" className="hover:text-blue-600">Canada</Link>
            <span className="mx-2">›</span>
            <Link href={`/fr/canada/provinces/${params.province}`} className="hover:text-blue-600">
              {province.nameFr}
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">{city.nameFr}</span>
          </nav>

          {/* Language Switcher */}
          <div className="mb-6 flex gap-3">
            <Link
              href={`/canada/${params.province}/${params.city}/loans`}
              className="text-blue-600 hover:underline text-sm"
            >
              English
            </Link>
            <span className="text-gray-400">|</span>
            <span className="text-gray-900 font-semibold text-sm">Français</span>
          </div>

          {/* Main Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Prêts à {city.nameFr}, {city.provinceAbbr}
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              {city.localEconomyFr}
            </p>
          </header>

          {/* City Statistics */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Statistiques de la ville</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 text-sm">Population</p>
                <p className="text-lg font-semibold text-gray-900">{city.population}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Revenu médian des ménages</p>
                <p className="text-lg font-semibold text-gray-900">{city.medianIncome}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Prix médian des maisons</p>
                <p className="text-lg font-semibold text-gray-900">{city.medianHomePrice}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Score de crédit moyen</p>
                <p className="text-lg font-semibold text-gray-900">{city.avgCreditScore}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Montant de prêt moyen</p>
                <p className="text-lg font-semibold text-gray-900">{city.averageLoanAmount}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Prêteurs à proximité</p>
                <p className="text-lg font-semibold text-gray-900">{city.nearbyLenders}+</p>
              </div>
            </div>
          </div>

          {/* Key Industries */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Industries clés</h2>
            <div className="flex flex-wrap gap-2">
              {city.keyIndustriesFr.map((industry, index) => (
                <span key={index} className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
                  {industry}
                </span>
              ))}
            </div>
          </section>

          {/* Popular Loan Types */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types de prêts populaires</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {city.popularLoanTypesFr.map((loanType, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{loanType}</h3>
                  <p className="text-sm text-gray-600">En savoir plus</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Apply Section */}
          <section className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Comment demander un prêt à {city.nameFr}
            </h2>
            <ol className="space-y-4">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Remplissez notre formulaire en ligne</h3>
                  <p className="text-gray-600">
                    Fournissez des informations de base sur vos besoins de prêt et votre situation financière. Cela ne prend que 2 à 3 minutes.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Comparez les offres instantanées</h3>
                  <p className="text-gray-600">
                    Notre IA fait correspondre votre profil avec jusqu'à {city.nearbyLenders} prêteurs à {city.nameFr}. Voyez les taux et conditions en temps réel.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Choisissez votre meilleure offre</h3>
                  <p className="text-gray-600">
                    Sélectionnez le prêt qui correspond à votre budget et à vos objectifs. Pas de frais cachés, pas de surprises.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Recevez vos fonds</h3>
                  <p className="text-gray-600">
                    Une fois approuvé, les fonds sont déposés directement dans votre compte bancaire, souvent en 24 à 48 heures.
                  </p>
                </div>
              </li>
            </ol>
            <div className="mt-6">
              <Link
                href="/fr/canada/apply"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Commencer votre demande
              </Link>
            </div>
          </section>

          {/* Provincial Regulations */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Réglementation des prêts en {province.nameFr}
            </h2>
            <p className="text-gray-700 mb-4">
              Les prêts personnels à {city.nameFr} sont réglementés par {province.regulatorFr}. Points clés:
            </p>
            <ul className="space-y-2">
              {province.regulationsFr.map((regulation, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span className="text-gray-700">{regulation}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Pour plus d'informations, visitez:{' '}
              <a
                href={province.regulatorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {province.regulatorFr}
              </a>
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Questions fréquemment posées - Prêts à {city.nameFr}
            </h2>
            
            <div className="space-y-4">
              <details className="bg-white border border-gray-200 rounded-lg p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Quel est le montant de prêt moyen à {city.nameFr}?
                </summary>
                <p className="mt-3 text-gray-700">
                  À {city.nameFr}, le montant de prêt personnel moyen est d'environ {city.averageLoanAmount}. Cependant, vous pouvez emprunter entre 1 000 $ et 50 000 $ selon vos besoins et votre capacité de remboursement. Les facteurs qui influencent le montant comprennent votre revenu, votre score de crédit et le ratio dette/revenu.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Combien de prêteurs desservent {city.nameFr}?
                </summary>
                <p className="mt-3 text-gray-700">
                  Il y a environ {city.nearbyLenders} prêteurs qui desservent la région de {city.nameFr}, allant des grandes banques canadiennes aux coopératives de crédit locales et aux prêteurs en ligne. Notre plateforme vous aide à comparer les offres de prêteurs agréés pour trouver les meilleurs taux et conditions pour votre situation.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Quel est le score de crédit moyen à {city.nameFr}?
                </summary>
                <p className="mt-3 text-gray-700">
                  Le score de crédit moyen à {city.nameFr} est d'environ {city.avgCreditScore}, ce qui est considéré comme bon. Cependant, même avec un score de crédit inférieur, vous pourriez toujours être admissible à un prêt personnel, bien qu'à des taux potentiellement plus élevés. Nous travaillons avec des prêteurs qui acceptent une large gamme de scores de crédit.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Combien de temps faut-il pour obtenir l'approbation d'un prêt à {city.nameFr}?
                </summary>
                <p className="mt-3 text-gray-700">
                  La plupart des demandes de prêt à {city.nameFr} reçoivent une décision préliminaire en quelques minutes grâce à notre technologie d'IA. Une fois que vous êtes approuvé par un prêteur, les fonds peuvent être déposés dans votre compte bancaire en 24 à 48 heures. Certains prêteurs offrent même un financement le jour même pour les demandes urgentes.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Quelles réglementations s'appliquent aux prêts à {city.nameFr}?
                </summary>
                <p className="mt-3 text-gray-700">
                  Les prêts à {city.nameFr} sont réglementés par {province.regulatorFr}. {province.nameFr} a des lois spécifiques sur les taux d'intérêt, les frais de prêt et la protection des consommateurs que tous les prêteurs agréés doivent respecter. Ces réglementations garantissent des pratiques de prêt équitables et transparentes.
                </p>
              </details>
            </div>
          </section>

          {/* Affiliate Disclosure */}
          <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">Divulgation importante</h3>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Divulgation d'affiliation:</strong> Ce site Web est un service de génération de prospects. Nous pouvons recevoir une compensation des prêteurs lorsque vous soumettez une demande via notre plateforme. Cela n'affecte pas notre capacité à vous fournir des comparaisons impartiales.
            </p>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Exemple représentatif:</strong> Si vous empruntez {city.averageLoanAmount} sur 5 ans à un TAP de 12,99 %, vos paiements mensuels seraient d'environ 289 $, pour un coût total du crédit de 2 340 $ et un montant total à rembourser de {parseInt(city.averageLoanAmount.replace(/[$,]/g, '')) + 2340}$.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Avis LPRPDE:</strong> En soumettant votre demande, vous consentez à ce que vos informations personnelles soient partagées avec des prêteurs correspondants conformément à la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE) du Canada.
            </p>
          </section>

          {/* Back to Province Link */}
          <div className="text-center">
            <Link
              href={`/fr/canada/provinces/${params.province}`}
              className="text-blue-600 hover:underline"
            >
              ← Retour aux prêts en {province.nameFr}
            </Link>
          </div>
        </div>

        <Footer />
      </body>
    </html>
  )
}
