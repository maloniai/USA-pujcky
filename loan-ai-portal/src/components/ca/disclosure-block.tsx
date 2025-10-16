import { caDisclaimer } from '@/data/ca-translations'

interface CADisclosureBlockProps {
  lang?: 'en' | 'fr'
}

export default function CADisclosureBlock({ lang = 'en' }: CADisclosureBlockProps) {
  const affiliateText = lang === 'fr' ? 'Divulgation d\'affiliation' : 'Affiliate Disclosure'
  const representativeText = lang === 'fr' ? 'Exemple représentatif' : 'Representative Example'
  const importantText = lang === 'fr' ? 'Notice importante' : 'Important Notice'
  
  const additionalDisclaimers = lang === 'fr' ? [
    'Taux d\'intérêt maximum : 60 % TAP (Code criminel du Canada, article 347).',
    'Les taux et conditions varient selon la cote de crédit, le revenu et le prêteur.',
    'Vérifiez toujours que le prêteur est autorisé dans votre province/territoire.',
    'Les prêts peuvent avoir un impact sur votre cote de crédit - empruntez de manière responsable.',
    'En difficulté financière? Contactez un conseiller en crédit sans but lucratif gratuit.',
  ] : [
    'Maximum interest rate: 60% APR (Criminal Code of Canada, Section 347).',
    'Rates and terms vary based on credit score, income, and lender.',
    'Always verify the lender is licensed in your province/territory.',
    'Loans may impact your credit score - borrow responsibly.',
    'Experiencing financial hardship? Contact a free non-profit credit counselor.',
  ]

  return (
    <section className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Affiliate Disclosure */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              {affiliateText}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {lang === 'fr' ? caDisclaimer.affiliateFr : caDisclaimer.affiliate}
            </p>
          </div>

          {/* Representative Example */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              {representativeText}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {lang === 'fr' ? caDisclaimer.representativeFr : caDisclaimer.representative}
            </p>
          </div>

          {/* Important Warning */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mb-6">
            <div className="flex items-start">
              <svg
                className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="text-sm font-semibold text-blue-900 mb-1">
                  {importantText}
                </h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  {lang === 'fr' ? caDisclaimer.warningFr : caDisclaimer.warning}
                </p>
              </div>
            </div>
          </div>

          {/* Additional Disclaimers */}
          <div className="space-y-3">
            {additionalDisclaimers.map((disclaimer, index) => (
              <p key={index} className="text-xs text-gray-600 leading-relaxed flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>{disclaimer}</span>
              </p>
            ))}
          </div>

          {/* Resources */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              {lang === 'fr' ? (
                <>
                  Ressources utiles :{' '}
                  <a
                    href="https://www.canada.ca/fr/agence-consommation-matiere-financiere.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    ACFC
                  </a>
                  {' | '}
                  <a
                    href="https://www.creditcounsellingcanada.ca/fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Conseil en crédit Canada
                  </a>
                </>
              ) : (
                <>
                  Helpful resources:{' '}
                  <a
                    href="https://www.canada.ca/en/financial-consumer-agency.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    FCAC
                  </a>
                  {' | '}
                  <a
                    href="https://www.creditcounsellingcanada.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Credit Counselling Canada
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
