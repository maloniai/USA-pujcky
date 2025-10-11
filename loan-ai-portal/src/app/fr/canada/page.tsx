import Link from 'next/link'
import { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { canadianProvinces } from '@/data/canada-provinces'

export const metadata: Metadata = {
  title: 'Prêts personnels au Canada – Comparez les prêteurs 2025',
  description: 'Trouvez des prêts personnels partout au Canada. Comparez les taux de 100+ prêteurs canadiens agréés. Approbation rapide, taux compétitifs, toutes les provinces couvertes.',
  keywords: 'prêts personnels Canada, prêteurs canadiens, prêts Ontario, prêts Québec, prêts CB',
  alternates: {
    canonical: 'https://loan-platform.com/fr/canada',
    languages: {
      en: 'https://loan-platform.com/canada',
      fr: 'https://loan-platform.com/fr/canada',
    },
  },
}

export default function CanadaHubPageFR() {
  // Group provinces by region
  const centralProvinces = canadianProvinces.filter(p => p.region === 'Central')
  const westProvinces = canadianProvinces.filter(p => p.region === 'West Coast' || p.region === 'Prairie')
  const atlanticProvinces = canadianProvinces.filter(p => p.region === 'Atlantic')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FinancialService',
            name: 'Loan AI Portal Canada',
            description: 'Service de comparaison et de jumelage de prêts personnels pour les résidents canadiens',
            url: 'https://loan-platform.com/fr/canada',
            inLanguage: 'fr-CA',
            areaServed: {
              '@type': 'Country',
              name: 'Canada',
            },
          }),
        }}
      />

      <Navigation locale="en" />
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-red-50 to-red-100 border-b border-red-100">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="flex justify-between items-start mb-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-red-700">🍁 Programme canadien</p>
              <Link
                href="/canada"
                className="text-sm font-semibold text-red-700 hover:text-red-900 underline"
              >
                English →
              </Link>
            </div>
            <h1 className="mt-3 text-4xl font-bold text-red-900 md:text-5xl">
              Prêts personnels partout au Canada – Comparez et postulez
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-gray-700 md:text-xl">
              Connectez-vous avec plus de 100 prêteurs canadiens agréés. Comparez les taux de prêt personnel,
              comprenez les réglementations provinciales et trouvez les meilleures options de prêt pour vos
              besoins. Service disponible en français et en anglais dans toutes les provinces et territoires.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/fr/canada/provinces"
                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
              >
                Parcourir toutes les provinces
              </Link>
              <Link
                href="/fr/canada/apply"
                className="inline-flex items-center justify-center rounded-lg border-2 border-red-600 px-6 py-3 font-semibold text-red-700 transition hover:bg-red-50"
              >
                Postulez maintenant
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/fr/canada/provinces"
              className="group rounded-2xl border border-red-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-400 hover:shadow-lg"
            >
              <span className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-2xl text-red-700">
                🏛️
              </span>
              <h2 className="text-xl font-semibold text-red-900">Réglementations provinciales</h2>
              <p className="mt-2 text-sm text-gray-600">
                Consultez les lois sur les prêts, les plafonds de taux et les protections des emprunteurs dans chaque province.
              </p>
            </Link>

            <Link
              href="/fr/canada/apply"
              className="group rounded-2xl border border-red-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-400 hover:shadow-lg"
            >
              <span className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-2xl text-red-700">
                📝
              </span>
              <h2 className="text-xl font-semibold text-red-900">Demander un prêt</h2>
              <p className="mt-2 text-sm text-gray-600">
                Complétez une demande rapide et soyez jumelé avec des prêteurs canadiens en quelques minutes.
              </p>
            </Link>

            <Link
              href="/canada"
              className="group rounded-2xl border border-red-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-400 hover:shadow-lg"
            >
              <span className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-2xl text-red-700">
                🇨🇦
              </span>
              <h2 className="text-xl font-semibold text-red-900">English Service</h2>
              <p className="mt-2 text-sm text-gray-600">
                Access all our services in English with localized content for all provinces.
              </p>
            </Link>
          </div>
        </div>

        {/* Provinces by Region */}
        <div className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold text-red-900 mb-8">Explorez les provinces et territoires</h2>

            {/* Central Canada */}
            <section className="mb-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span>Canada central</span>
                <span className="text-sm font-normal text-gray-500">(Ontario, Québec)</span>
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {centralProvinces.map(province => (
                  <Link
                    key={province.slug}
                    href={`/fr/canada/provinces/${province.slug}`}
                    className="rounded-lg border border-gray-200 p-5 transition hover:border-red-300 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-red-900">{province.nameFr}</h4>
                        <p className="mt-1 text-sm text-gray-600">{province.descriptionFr}</p>
                        <div className="mt-3 flex flex-wrap gap-2 text-xs">
                          <span className="rounded-full bg-red-50 px-2 py-1 text-red-700">
                            Pop: {province.population}
                          </span>
                          <span className="rounded-full bg-red-50 px-2 py-1 text-red-700">
                            Moy: {province.avgLoanAmount}
                          </span>
                        </div>
                      </div>
                      <span className="text-2xl">{province.abbreviation === 'QC' ? '⚜️' : '🍁'}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Western Canada */}
            <section className="mb-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span>Canada occidental</span>
                <span className="text-sm font-normal text-gray-500">(CB, AB, SK, MB)</span>
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {westProvinces.map(province => (
                  <Link
                    key={province.slug}
                    href={`/fr/canada/provinces/${province.slug}`}
                    className="rounded-lg border border-gray-200 p-4 transition hover:border-red-300 hover:shadow-md"
                  >
                    <h4 className="font-semibold text-red-900">{province.nameFr}</h4>
                    <p className="mt-1 text-xs text-gray-600">{province.abbreviation}</p>
                    <div className="mt-2 text-xs text-gray-500">
                      Moy: {province.avgLoanAmount}
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Atlantic Canada */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span>Canada atlantique</span>
                <span className="text-sm font-normal text-gray-500">(NÉ, NB, TN-L, ÎPÉ)</span>
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {atlanticProvinces.map(province => (
                  <Link
                    key={province.slug}
                    href={`/fr/canada/provinces/${province.slug}`}
                    className="rounded-lg border border-gray-200 p-4 transition hover:border-red-300 hover:shadow-md"
                  >
                    <h4 className="font-semibold text-red-900">{province.nameFr}</h4>
                    <p className="mt-1 text-xs text-gray-600">{province.abbreviation}</p>
                    <div className="mt-2 text-xs text-gray-500">
                      Moy: {province.avgLoanAmount}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold text-red-900 mb-8 text-center">
              Comment fonctionne le jumelage de prêts canadiens
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">1. Demande complète</h3>
                <p className="text-gray-700">
                  Remplissez notre formulaire sécurisé en 2-3 minutes. Disponible en français et en anglais.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">2. Jumelage IA</h3>
                <p className="text-gray-700">
                  Notre système vous jumelle avec des prêteurs canadiens agréés selon votre profil et votre province.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💵</div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">3. Obtenez des fonds</h3>
                <p className="text-gray-700">
                  Comparez les offres, choisissez le meilleur taux et recevez des fonds rapidement après approbation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16">
            <h2 className="text-3xl font-bold text-red-900 mb-8 text-center">
              Questions fréquemment posées
            </h2>
            <div className="space-y-4">
              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  Quels sont les taux d'intérêt typiques pour les prêts personnels au Canada?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Les taux d'intérêt des prêts personnels au Canada varient généralement de 6,99% à 46,96% TAP,
                  selon votre cote de crédit, vos revenus et votre province de résidence. Les emprunteurs avec un
                  excellent crédit (750+) peuvent être admissibles à des taux aussi bas que 6,99%-12%, tandis que
                  ceux avec un crédit moyen peuvent voir des taux entre 15%-30%.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  Comment les réglementations provinciales affectent-elles les prêts personnels au Canada?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Chaque province canadienne a ses propres lois de protection des consommateurs régissant les prêts
                  personnels. Ces réglementations fixent les taux d'intérêt maximums, les plafonds de prêts sur
                  salaire, les exigences de divulgation obligatoires et les périodes de réflexion. Par exemple,
                  l'Ontario plafonne les prêts sur salaire à 15$ par 100$ emprunté, tandis que le Québec exige tous
                  les documents de prêt en français.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  Puis-je obtenir un prêt personnel au Canada avec un mauvais crédit?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Oui, de nombreux prêteurs canadiens se spécialisent dans le travail avec des emprunteurs ayant un
                  crédit moins que parfait. Bien que vous puissiez faire face à des taux d'intérêt plus élevés, des
                  options sont disponibles pour les cotes de crédit aussi basses que 550. Notre système de jumelage
                  IA vous connecte avec les prêteurs les plus susceptibles d'approuver votre demande.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  À quelle vitesse puis-je recevoir des fonds de prêt au Canada?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Les délais de financement varient selon le prêteur et la province. Certains prêteurs en ligne
                  offrent un financement le jour même si vous êtes approuvé avant leur heure limite (généralement
                  14h-15h heure locale). La plupart fournissent un financement dans les 1-3 jours ouvrables par
                  dépôt direct. Les banques et coopératives de crédit traditionnelles peuvent prendre 3-7 jours
                  ouvrables.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  Tous les services sont-ils disponibles en français?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Absolument. Notre plateforme est entièrement disponible en français et nous travaillons avec des
                  prêteurs qui fournissent un service complet en français. C'est particulièrement important au
                  Québec, où la loi sur la protection du consommateur exige que toute la documentation de prêt soit
                  fournie en français.
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à trouver votre prêt parfait au Canada?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Rejoignez des milliers de Canadiens qui ont trouvé de meilleurs taux de prêt grâce à notre plateforme.
            </p>
            <Link
              href="/fr/canada/apply"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors shadow-lg"
            >
              Commencez maintenant – Gratuit
            </Link>
            <p className="mt-4 text-sm text-red-100">
              Service disponible en français et anglais • Aucun impact sur la cote de crédit • 100% sécurisé
            </p>
          </div>
        </div>

        {/* Disclosure */}
        <div className="bg-gray-100 border-t border-gray-200">
          <div className="mx-auto max-w-6xl px-4 py-8">
            <div className="text-sm text-gray-600 space-y-2">
              <p className="font-semibold text-gray-900">Divulgation d'affiliation:</p>
              <p>
                Loan AI Portal est un générateur de prospects et un service de comparaison, pas un prêteur. Nous
                connectons les emprunteurs avec des partenaires de prêt canadiens agréés et pouvons recevoir une
                compensation lorsque vous complétez une demande. Cette compensation n'affecte pas les taux ou
                les conditions que vous recevez. Tous les prêteurs opèrent sous les réglementations provinciales
                et fédérales applicables.
              </p>
              <p className="font-semibold text-gray-900 mt-4">Exemple représentatif:</p>
              <p>
                Un prêt personnel de 10 000$ avec une durée de 3 ans à 12% TAP entraînerait 36 paiements mensuels
                de 332,14$, pour un montant de remboursement total de 11 957,04$ (intérêt total: 1 957,04$). Les
                taux et conditions réels varient selon le prêteur, le profil de crédit et la province. Les TAP
                peuvent varier de 6,99% à 46,96%.
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
