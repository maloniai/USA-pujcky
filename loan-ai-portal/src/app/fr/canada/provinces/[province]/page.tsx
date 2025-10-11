import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { getProvinceBySlug, canadianProvinces } from '@/data/canada-provinces'
import { getCitiesByProvince } from '@/data/canada-cities'

// Generate static params for all provinces
export async function generateStaticParams() {
  return canadianProvinces.map(province => ({
    province: province.slug,
  }))
}

// Generate metadata for each province
export async function generateMetadata({
  params,
}: {
  params: { province: string }
}): Promise<Metadata> {
  const province = getProvinceBySlug(params.province)
  
  if (!province) {
    return {
      title: 'Province non trouvée',
      description: 'La page de province demandée n\'a pas pu être trouvée.',
    }
  }

  const title = `Prêts en ${province.nameFr} – Comparez 2025`
  const description = `Obtenez des prêts personnels en ${province.nameFr}, Canada. Montant moyen : ${province.avgLoanAmount}, taux à partir de ${province.avgRate}. Consultez les réglementations de prêt ${province.abbreviation}.`
  
  return {
    title,
    description,
    keywords: `prêts personnels ${province.nameFr}, prêts ${province.abbreviation}, prêteurs ${province.nameFr}`,
    alternates: {
      canonical: `https://loan-platform.com/fr/canada/provinces/${params.province}`,
      languages: {
        en: `https://loan-platform.com/canada/provinces/${params.province}`,
        fr: `https://loan-platform.com/fr/canada/provinces/${params.province}`,
      },
    },
  }
}

export default function ProvinceDetailPageFR({
  params,
}: {
  params: { province: string }
}) {
  const province = getProvinceBySlug(params.province)

  if (!province) {
    notFound()
  }

  const cities = getCitiesByProvince(params.province)

  // JSON-LD Schema for Province
  const provinceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Prêts personnels en ${province.nameFr}`,
    description: province.descriptionFr,
    inLanguage: 'fr-CA',
    areaServed: {
      '@type': 'State',
      name: province.nameFr,
      addressCountry: 'CA',
    },
    url: `https://loan-platform.com/fr/canada/provinces/${params.province}`,
  }

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'fr-CA',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Quelles sont les réglementations sur les prêts personnels en ${province.nameFr}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: province.regulationsFr.join('. ') + '.',
        },
      },
      {
        '@type': 'Question',
        name: `Quel est le montant moyen d'un prêt personnel en ${province.nameFr}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Le montant moyen d'un prêt personnel en ${province.nameFr} est de ${province.avgLoanAmount}, avec des taux moyens d'environ ${province.avgRate}. Les montants maximaux peuvent atteindre ${province.maxLoanAmount}.`,
        },
      },
      {
        '@type': 'Question',
        name: `Qui réglemente les prêts en ${province.nameFr}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Les prêts en ${province.nameFr} sont réglementés par ${province.regulatorFr}. Tous les prêteurs doivent être agréés et respecter les lois provinciales de protection des consommateurs.`,
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(provinceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navigation locale="en" />
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <nav className="mb-6 flex justify-between items-center">
              <Link
                href="/fr/canada/provinces"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/20"
              >
                <span aria-hidden>←</span>
                Retour à toutes les provinces
              </Link>
              <Link
                href={`/canada/provinces/${params.province}`}
                className="text-sm font-semibold underline hover:text-red-100"
              >
                English →
              </Link>
            </nav>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Prêts en {province.nameFr}, {province.abbreviation}
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-red-100">
                Comparez les taux et réglementations des prêts personnels
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  📊 Moy : {province.avgLoanAmount}
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  📈 Taux : {province.avgRate}
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  👥 Pop : {province.population}
                </div>
              </div>
              <Link
                href="/fr/canada/apply"
                className="inline-block mt-8 bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors shadow-lg"
              >
                Demander un prêt
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <section className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  Aperçu des prêts personnels en {province.nameFr}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {province.descriptionFr} La province compte {province.population} de résidents et maintient
                  des réglementations spécifiques sur les prêts pour protéger les consommateurs tout en
                  garantissant l'accès au crédit.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">MONTANT MOYEN DU PRÊT</h3>
                    <p className="text-2xl font-bold text-red-600">{province.avgLoanAmount}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">TAUX MOYEN</h3>
                    <p className="text-2xl font-bold text-red-600">{province.avgRate}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">MONTANT MAX DU PRÊT</h3>
                    <p className="text-2xl font-bold text-red-600">{province.maxLoanAmount}</p>
                  </div>
                </div>
              </section>

              {/* Local Regulations */}
              <section className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  Réglementations sur les prêts en {province.nameFr}
                </h2>
                <p className="text-gray-700 mb-4">
                  Les prêts en {province.nameFr} sont réglementés par {province.regulatorFr}. Les protections
                  clés des emprunteurs comprennent :
                </p>
                <ul className="space-y-3">
                  {province.regulationsFr.map((regulation, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-sm font-bold">
                        ✓
                      </span>
                      <span className="text-gray-700">{regulation}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Autorité de réglementation :</strong>{' '}
                    <a
                      href={province.regulatorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-800 underline"
                    >
                      {province.regulatorFr}
                    </a>
                  </p>
                </div>
              </section>

              {/* Cities in Province */}
              {cities.length > 0 && (
                <section className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-red-900 mb-4">
                    Prêts dans les grandes villes de {province.nameFr}
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Explorez les options de prêt et les informations sur les prêteurs locaux dans ces villes
                    populaires de {province.nameFr} :
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {cities.map(city => (
                      <Link
                        key={city.slug}
                        href={`/fr/canada/${params.province}/${city.slug}/loans`}
                        className="rounded-lg border border-gray-200 p-4 transition hover:border-red-300 hover:shadow-md"
                      >
                        <h3 className="text-lg font-semibold text-red-900">{city.nameFr}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Pop : {city.population} · {city.nearbyLenders}+ prêteurs · Moy : {city.averageLoanAmount}
                        </p>
                        <p className="text-xs text-red-700 font-semibold mt-2">
                          Voir les détails de la ville →
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQ */}
              <section className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-red-900 mb-6">
                  FAQ sur les prêts en {province.nameFr}
                </h2>
                <div className="space-y-4">
                  <details className="bg-gray-50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer text-gray-900">
                      Quelles sont les exigences pour obtenir un prêt personnel en {province.nameFr}?
                    </summary>
                    <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                      Pour être admissible à un prêt personnel en {province.nameFr}, vous devez généralement
                      avoir au moins 18 ans (19 dans certaines provinces), avoir une pièce d'identité
                      canadienne valide, une preuve de revenu, un compte bancaire actif et être résident de{' '}
                      {province.nameFr}.
                    </p>
                  </details>

                  <details className="bg-gray-50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer text-gray-900">
                      Comment les taux de prêt en {province.nameFr} se comparent-ils aux autres provinces?
                    </summary>
                    <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                      {province.nameFr} a un taux moyen de {province.avgRate}, qui est{' '}
                      {parseFloat(province.avgRate) < 11 ? 'compétitif par rapport' : 'conforme'} aux autres
                      provinces canadiennes. Les réglementations provinciales garantissent des taux équitables
                      et transparents.
                    </p>
                  </details>

                  <details className="bg-gray-50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer text-gray-900">
                      Puis-je obtenir un prêt en {province.nameFr} avec un mauvais crédit?
                    </summary>
                    <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                      Oui, de nombreux prêteurs en {province.nameFr} travaillent avec des emprunteurs ayant un
                      crédit moins que parfait. Notre service de jumelage vous connecte avec les prêteurs les
                      plus susceptibles d'approuver votre demande.
                    </p>
                  </details>

                  <details className="bg-gray-50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer text-gray-900">
                      Combien de temps faut-il pour être approuvé pour un prêt en {province.nameFr}?
                    </summary>
                    <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                      Les délais d'approbation varient selon le prêteur. De nombreux prêteurs en ligne
                      fournissent des décisions de pré-approbation instantanées, avec approbation complète et
                      financement possibles dans les 1-3 jours ouvrables.
                    </p>
                  </details>

                  <details className="bg-gray-50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer text-gray-900">
                      À quoi puis-je utiliser un prêt personnel en {province.nameFr}?
                    </summary>
                    <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                      Les prêts personnels en {province.nameFr} peuvent être utilisés pour presque tous les
                      besoins : consolidation de dettes, rénovations domiciliaires, frais médicaux, éducation,
                      achats de véhicules ou dépenses d'urgence.
                    </p>
                  </details>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Apply CTA */}
              <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-xl shadow-lg p-6 sticky top-4">
                <h3 className="text-2xl font-bold mb-4">Prêt à postuler?</h3>
                <p className="mb-6 text-sm">
                  Soyez jumelé avec des prêteurs agréés en {province.nameFr}.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>Demande de 2 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>Aucun impact sur la cote de crédit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>Service 100% gratuit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>Financement rapide (1-3 jours)</span>
                  </li>
                </ul>
                <Link
                  href="/fr/canada/apply"
                  className="block w-full bg-white text-red-600 text-center px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors"
                >
                  Commencer la demande
                </Link>
              </div>

              {/* Other Info */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-red-900 mb-4">Ressources</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/fr/canada" className="text-red-600 hover:text-red-800 underline">
                      ← Retour au hub Canada
                    </Link>
                  </li>
                  <li>
                    <Link href="/fr/canada/provinces" className="text-red-600 hover:text-red-800 underline">
                      Toutes les provinces
                    </Link>
                  </li>
                  <li>
                    <a
                      href={province.regulatorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-800 underline"
                    >
                      Régulateur {province.abbreviation}
                    </a>
                  </li>
                  <li>
                    <Link
                      href={`/canada/provinces/${params.province}`}
                      className="text-red-600 hover:text-red-800 underline"
                    >
                      English version →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Disclosure */}
        <div className="bg-gray-100 border-t border-gray-200">
          <div className="mx-auto max-w-6xl px-4 py-8">
            <div className="text-sm text-gray-600">
              <p className="font-semibold text-gray-900 mb-2">Divulgation d'affiliation :</p>
              <p className="mb-4">
                Loan AI Portal est un générateur de prospects, pas un prêteur. Nous connectons les emprunteurs
                avec des prêteurs agréés en {province.nameFr} et pouvons recevoir une compensation. Tous les
                taux et conditions sont fixés par les prêteurs individuels conformément aux réglementations de{' '}
                {province.nameFr}.
              </p>
              <p className="font-semibold text-gray-900 mb-2">Exemple représentatif :</p>
              <p>
                Un prêt de {province.avgLoanAmount.replace(/[,$]/g, '')} $ à {province.avgRate} TAP sur 3 ans
                aurait des paiements mensuels variables selon les conditions exactes. Les taux réels varient de
                6,99 % à 46,96 % selon la solvabilité.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Apply Button */}
      <div className="fixed bottom-4 right-4 z-40">
        <Link
          href="/fr/canada/apply"
          className="flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-red-700 hover:shadow-xl"
        >
          <span>Postulez maintenant</span>
          <span aria-hidden>→</span>
        </Link>
      </div>

      <Footer locale="en" />
    </>
  )
}
