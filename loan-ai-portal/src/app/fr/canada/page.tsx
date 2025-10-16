import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Prêts personnels au Canada | Comparez les taux en 2025',
  description: 'Comparez les prêts personnels au Canada. Trouvez des prêteurs agréés dans les 13 provinces et territoires. Taux compétitifs, demande rapide et sécurisée.',
  alternates: {
    canonical: 'https://loan-platform.com/fr/canada',
    languages: {
      'en-CA': 'https://loan-platform.com/ca',
      'fr-CA': 'https://loan-platform.com/fr/canada',
    },
  },
  openGraph: {
    title: 'Prêts personnels au Canada | Comparez les taux',
    description: 'Comparez les prêts personnels au Canada. Trouvez des prêteurs agréés.',
    url: 'https://loan-platform.com/fr/canada',
    siteName: 'Loan-Platform.com',
    locale: 'fr_CA',
    alternateLocale: ['en_CA'],
    type: 'website',
  },
}

export default function FrenchCanadaHubPage() {
  // Redirect to main CA page with lang=fr query param for now
  // This maintains the existing functionality while we build out the French structure
  redirect('/ca?lang=fr')
}
