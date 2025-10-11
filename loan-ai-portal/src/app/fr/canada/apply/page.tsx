import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Demander un prêt personnel au Canada – Rapide et sécurisé',
  description: 'Demandez des prêts personnels au Canada. Connectez-vous avec plus de 100 prêteurs canadiens agréés. Approbation rapide, taux compétitifs, service en français et en anglais.',
  keywords: 'demande de prêt Canada, prêts personnels canadiens, demande de prêt, approbation rapide',
  alternates: {
    canonical: 'https://loan-platform.com/fr/canada/apply',
    languages: {
      en: 'https://loan-platform.com/canada/apply',
      fr: 'https://loan-platform.com/fr/canada/apply',
    },
  },
}

export default function CanadaApplyPageFR() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Demander un prêt personnel au Canada',
            description: 'Demande en ligne sécurisée pour les prêts personnels au Canada',
            url: 'https://loan-platform.com/fr/canada/apply',
            inLanguage: 'fr-CA',
            mainEntity: {
              '@type': 'FinancialProduct',
              name: 'Prêt personnel canadien',
              description: 'Prêts personnels pour les résidents canadiens',
              provider: {
                '@type': 'FinancialService',
                name: 'Loan AI Portal Canada',
              },
            },
          }),
        }}
      />

      <Navigation locale="en" />
      <main className="flex-1 bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-br from-red-50 to-red-100 border-b border-red-100">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <nav className="mb-4 text-sm flex justify-between items-center">
              <Link href="/fr/canada" className="text-red-700 hover:text-red-900">
                ← Retour au hub Canada
              </Link>
              <Link href="/canada/apply" className="text-red-700 hover:text-red-900 underline font-semibold">
                English →
              </Link>
            </nav>
            <h1 className="text-4xl font-bold text-red-900 md:text-5xl">
              Demandez votre prêt personnel
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-gray-700">
              Complétez votre demande sécurisée et soyez jumelé avec des prêteurs canadiens agréés en quelques
              minutes. Service disponible en français et en anglais dans toutes les provinces.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-green-700 font-medium mb-8">
            <span className="flex items-center gap-1 bg-green-50 px-4 py-2 rounded-full">
              <span className="text-green-600">✓</span> Aucun impact sur la cote de crédit
            </span>
            <span className="flex items-center gap-1 bg-green-50 px-4 py-2 rounded-full">
              <span className="text-green-600">✓</span> Demande de 2-3 minutes
            </span>
            <span className="flex items-center gap-1 bg-green-50 px-4 py-2 rounded-full">
              <span className="text-green-600">✓</span> Fonds en 1-3 jours
            </span>
            <span className="flex items-center gap-1 bg-green-50 px-4 py-2 rounded-full">
              <span className="text-green-600">✓</span> 1 000 $ - 50 000 $
            </span>
            <span className="flex items-center gap-1 bg-green-50 px-4 py-2 rounded-full">
              <span className="text-green-600">✓</span> Toutes cotes de crédit
            </span>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="mx-auto max-w-4xl px-4 pb-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-red-900">
              Complétez votre demande de prêt
            </h2>
            
            {/* Progress Indicator */}
            <div className="mb-6">
              <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                <span>Progrès de la demande</span>
                <span>Étape 1 sur 3</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full w-1/3"></div>
              </div>
            </div>

            {/* Iframe Placeholder */}
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center mb-6">
              <div className="mb-4">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Formulaire de demande de prêt canadien
              </h3>
              <p className="text-gray-600 mb-4">
                Le formulaire de demande sécurisé sera chargé ici via iframe.
              </p>
              <div className="text-sm text-gray-500 space-y-2">
                <p>✓ Chiffrement SSL 256 bits de niveau bancaire</p>
                <p>✓ Traitement des données conforme à la LPRPDE</p>
                <p>✓ Téléchargement sécurisé de documents</p>
              </div>
            </div>

            {/* Disclosure */}
            <div className="text-xs text-gray-600 text-center max-w-2xl mx-auto">
              <p className="mb-2">
                <strong>Avis de confidentialité :</strong> En soumettant ce formulaire, vous consentez à ce que
                Loan AI Portal et nos partenaires prêteurs vous contactent par téléphone, courriel ou SMS
                concernant les offres de prêt. Vous pouvez vous désabonner à tout moment. Vos informations sont
                traitées conformément aux lois canadiennes sur la protection de la vie privée (LPRPDE).
              </p>
              <p>
                Nous sommes un générateur de prospects et un service de comparaison, pas un prêteur. La
                soumission de vos informations ne garantit pas l'approbation du prêt. Tous les prêts sont
                soumis à l'approbation du prêteur et aux réglementations provinciales.
              </p>
            </div>
          </div>
        </div>

        {/* Why Apply Section */}
        <div className="bg-white border-t border-gray-200">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-900">
              Pourquoi postuler via Loan AI Portal?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">⚡</div>
                  <CardTitle>Rapide et facile</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Complétez votre demande en 2-3 minutes. Aucune paperasse longue ni visite en personne
                    requise. Jumelage instantané avec les prêteurs.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">🍁</div>
                  <CardTitle>Toutes provinces couvertes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Connectez-vous avec des prêteurs agréés dans toutes les provinces et territoires canadiens.
                    Conformité totale avec les réglementations provinciales.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">🇨🇦</div>
                  <CardTitle>Service bilingue</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Disponible en français et en anglais. Travaillez avec des prêteurs qui fournissent un
                    service dans votre langue préférée.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">🔒</div>
                  <CardTitle>Sécurisé et privé</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Le chiffrement de niveau bancaire protège vos données. Conforme à la LPRPDE. Vos
                    informations ne sont jamais vendues sans consentement.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">💰</div>
                  <CardTitle>Taux compétitifs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Comparez les offres de plus de 100 prêteurs canadiens. Trouvez les meilleurs taux et
                    conditions pour votre profil de crédit.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">✅</div>
                  <CardTitle>Tout crédit bienvenu</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Travaillez avec des prêteurs de tout le spectre du crédit. Options disponibles pour
                    excellent, bon, moyen et mauvais crédit.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-900">
              Exigences et détails du prêt
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-red-900">Montants et durées des prêts</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-red-600">•</span> Montants des prêts : 1 000 $ - 50 000 $ CAD
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-600">•</span> Durées des prêts : 6 mois - 7 ans
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-600">•</span> Fourchette de TAP : 6,99 % - 46,96 %
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-600">•</span> Paiements mensuels fixes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-600">•</span> Sans pénalité de remboursement anticipé (la plupart)
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-green-900">Exigences de base</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Âge 18+ (19+ dans certaines provinces)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Citoyen canadien ou résident permanent
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Compte bancaire canadien valide
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Source de revenus stable
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Pièce d'identité gouvernementale valide
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-900">
              FAQ sur la demande
            </h2>
            <div className="space-y-4">
              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  La vérification de mon taux affectera-t-elle ma cote de crédit?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Non. Le processus de jumelage initial n'utilise qu'une enquête de crédit douce, qui n'a aucun
                  impact sur votre cote de crédit. Une enquête approfondie ne se produit que si vous choisissez
                  de poursuivre avec l'offre d'un prêteur spécifique.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  Combien de temps prend le processus de demande?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  La demande initiale prend 2-3 minutes. Vous recevrez un jumelage instantané avec les
                  prêteurs. Si vous poursuivez avec un prêteur, l'approbation complète peut prendre de
                  quelques heures à 2-3 jours ouvrables.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  Quels documents devrai-je fournir?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Typiquement : pièce d'identité gouvernementale canadienne valide, preuve de revenu, preuve
                  d'adresse et informations bancaires. Les travailleurs autonomes peuvent nécessiter une
                  documentation commerciale supplémentaire.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  Mes informations sont-elles sécurisées?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Absolument. Nous utilisons un chiffrement SSL 256 bits de niveau bancaire. Nous sommes
                  entièrement conformes à la LPRPDE et aux lois provinciales sur la protection de la vie
                  privée. Vos informations ne sont jamais vendues sans votre consentement explicite.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  Puis-je postuler en français?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Oui! Notre processus de demande complet est disponible en français. C'est particulièrement
                  important pour les résidents du Québec, où la loi sur la protection du consommateur exige
                  que toute la documentation de prêt soit fournie en français.
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* Disclosure */}
        <div className="bg-gray-100 border-t border-gray-200">
          <div className="mx-auto max-w-6xl px-4 py-8">
            <div className="text-sm text-gray-600 space-y-2">
              <p className="font-semibold text-gray-900">Divulgation importante :</p>
              <p>
                Loan AI Portal est un générateur de prospects et un service de comparaison, pas un prêteur. En
                soumettant votre demande, vous nous autorisez ainsi que nos partenaires prêteurs à vous
                contacter concernant les offres de prêt. La soumission d'une demande ne garantit pas
                l'approbation du prêt. Tous les prêts sont soumis à l'approbation du prêteur et aux
                réglementations provinciales.
              </p>
              <p className="font-semibold text-gray-900 mt-4">Exemple représentatif :</p>
              <p>
                Un prêt personnel de 10 000 $ avec une durée de 3 ans à 12 % TAP entraînerait 36 paiements
                mensuels de 332,14 $ CAD, pour un montant de remboursement total de 11 957,04 $ (intérêt
                total : 1 957,04 $). Les taux et conditions réels varient selon le prêteur, le profil de
                crédit et la province. Les TAP peuvent varier de 6,99 % à 46,96 %.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer locale="en" />
    </>
  )
}
