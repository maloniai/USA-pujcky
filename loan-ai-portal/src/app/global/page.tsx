import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Global Loan Services - Available Countries | Loan AI Portal',
  description: 'Discover loan services available in your country. We provide AI-powered loan matching services across 40+ countries worldwide.',
}

interface Country {
  name: string
  slug: string
  flagEmoji: string
  description: string
  available: boolean
}

export default function GlobalPage() {
  const countries: Country[] = [
    {
      name: 'United States',
      slug: 'usa',
      flagEmoji: '🇺🇸',
      description: 'Fast and secure loan services across all 50 states',
      available: true
    },
    {
      name: 'Canada',
      slug: 'ca',
      flagEmoji: '🇨🇦',
      description: 'Comprehensive loan solutions for Canadian residents',
      available: true
    },
    {
      name: 'Czech Republic',
      slug: 'cz',
      flagEmoji: '🇨🇿',
      description: 'Půjčky a úvěrové služby pro české klienty',
      available: true
    },
    {
      name: 'United Kingdom',
      slug: 'uk',
      flagEmoji: '🇬🇧',
      description: 'Tailored loan options for UK residents',
      available: false
    },
    {
      name: 'Germany',
      slug: 'de',
      flagEmoji: '🇩🇪',
      description: 'Kreditdienstleistungen für deutsche Kunden',
      available: false
    },
    {
      name: 'France',
      slug: 'fr',
      flagEmoji: '🇫🇷',
      description: 'Services de prêt pour les résidents français',
      available: false
    },
    {
      name: 'Spain',
      slug: 'es',
      flagEmoji: '🇪🇸',
      description: 'Servicios de préstamos para residentes españoles',
      available: false
    },
    {
      name: 'Italy',
      slug: 'it',
      flagEmoji: '🇮🇹',
      description: 'Servizi di prestito per residenti italiani',
      available: false
    },
    {
      name: 'Poland',
      slug: 'pl',
      flagEmoji: '🇵🇱',
      description: 'Usługi pożyczkowe dla mieszkańców Polski',
      available: false
    },
    {
      name: 'Netherlands',
      slug: 'nl',
      flagEmoji: '🇳🇱',
      description: 'Leningsdiensten voor Nederlandse inwoners',
      available: false
    },
    {
      name: 'Belgium',
      slug: 'be',
      flagEmoji: '🇧🇪',
      description: 'Services de prêt pour les résidents belges',
      available: false
    },
    {
      name: 'Austria',
      slug: 'at',
      flagEmoji: '🇦🇹',
      description: 'Kreditdienstleistungen für österreichische Kunden',
      available: false
    },
    {
      name: 'Switzerland',
      slug: 'ch',
      flagEmoji: '🇨🇭',
      description: 'Loan services for Swiss residents',
      available: false
    },
    {
      name: 'Sweden',
      slug: 'se',
      flagEmoji: '🇸🇪',
      description: 'Lånetjänster för svenska invånare',
      available: false
    },
    {
      name: 'Norway',
      slug: 'no',
      flagEmoji: '🇳🇴',
      description: 'Lånetjenester for norske innbyggere',
      available: false
    },
    {
      name: 'Denmark',
      slug: 'dk',
      flagEmoji: '🇩🇰',
      description: 'Lånetjenester til danske borgere',
      available: false
    },
    {
      name: 'Finland',
      slug: 'fi',
      flagEmoji: '🇫🇮',
      description: 'Lainapalvelut suomalaisille asukkaille',
      available: false
    },
    {
      name: 'Ireland',
      slug: 'ie',
      flagEmoji: '🇮🇪',
      description: 'Loan services for Irish residents',
      available: false
    },
    {
      name: 'Portugal',
      slug: 'pt',
      flagEmoji: '🇵🇹',
      description: 'Serviços de empréstimo para residentes portugueses',
      available: false
    },
    {
      name: 'Greece',
      slug: 'gr',
      flagEmoji: '🇬🇷',
      description: 'Υπηρεσίες δανείων για έλληνες κατοίκους',
      available: false
    },
    {
      name: 'Australia',
      slug: 'au',
      flagEmoji: '🇦🇺',
      description: 'Loan services for Australian residents',
      available: false
    },
    {
      name: 'New Zealand',
      slug: 'nz',
      flagEmoji: '🇳🇿',
      description: 'Loan services for New Zealand residents',
      available: false
    },
    {
      name: 'Japan',
      slug: 'jp',
      flagEmoji: '🇯🇵',
      description: '日本の居住者向けローンサービス',
      available: false
    },
    {
      name: 'South Korea',
      slug: 'kr',
      flagEmoji: '🇰🇷',
      description: '한국 거주자를 위한 대출 서비스',
      available: false
    },
    {
      name: 'Singapore',
      slug: 'sg',
      flagEmoji: '🇸🇬',
      description: 'Loan services for Singapore residents',
      available: false
    },
    {
      name: 'Hong Kong',
      slug: 'hk',
      flagEmoji: '🇭🇰',
      description: 'Loan services for Hong Kong residents',
      available: false
    },
    {
      name: 'Mexico',
      slug: 'mx',
      flagEmoji: '🇲🇽',
      description: 'Servicios de préstamos para residentes mexicanos',
      available: false
    },
    {
      name: 'Brazil',
      slug: 'br',
      flagEmoji: '🇧🇷',
      description: 'Serviços de empréstimo para residentes brasileiros',
      available: false
    },
    {
      name: 'Argentina',
      slug: 'ar',
      flagEmoji: '🇦🇷',
      description: 'Servicios de préstamos para residentes argentinos',
      available: false
    },
    {
      name: 'Chile',
      slug: 'cl',
      flagEmoji: '🇨🇱',
      description: 'Servicios de préstamos para residentes chilenos',
      available: false
    },
    {
      name: 'South Africa',
      slug: 'za',
      flagEmoji: '🇿🇦',
      description: 'Loan services for South African residents',
      available: false
    },
    {
      name: 'India',
      slug: 'in',
      flagEmoji: '🇮🇳',
      description: 'Loan services for Indian residents',
      available: false
    },
    {
      name: 'UAE',
      slug: 'ae',
      flagEmoji: '🇦🇪',
      description: 'Loan services for UAE residents',
      available: false
    },
    {
      name: 'Saudi Arabia',
      slug: 'sa',
      flagEmoji: '🇸🇦',
      description: 'Loan services for Saudi Arabian residents',
      available: false
    },
    {
      name: 'Israel',
      slug: 'il',
      flagEmoji: '🇮🇱',
      description: 'Loan services for Israeli residents',
      available: false
    },
    {
      name: 'Turkey',
      slug: 'tr',
      flagEmoji: '🇹🇷',
      description: 'Türk vatandaşları için kredi hizmetleri',
      available: false
    },
    {
      name: 'Romania',
      slug: 'ro',
      flagEmoji: '🇷🇴',
      description: 'Servicii de împrumut pentru rezidenții români',
      available: false
    },
    {
      name: 'Hungary',
      slug: 'hu',
      flagEmoji: '🇭🇺',
      description: 'Hitelszolgáltatások magyar lakosoknak',
      available: false
    },
    {
      name: 'Slovakia',
      slug: 'sk',
      flagEmoji: '🇸🇰',
      description: 'Úverové služby pre slovenských obyvateľov',
      available: false
    },
    {
      name: 'Croatia',
      slug: 'hr',
      flagEmoji: '🇭🇷',
      description: 'Usluge zajma za hrvatske stanovnike',
      available: false
    }
  ]

  const availableCountries = countries.filter(c => c.available)
  const comingSoonCountries = countries.filter(c => !c.available)

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Global Loan Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Welcome to our international loan portal. We provide AI-powered loan matching 
          services across multiple countries. Select your country below to get started.
        </p>
      </header>

      {/* Available Countries Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Available Now
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableCountries.map((country) => (
            <Link 
              key={country.slug} 
              href={`/${country.slug}`}
              className="block transition-transform hover:scale-105"
            >
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-5xl">{country.flagEmoji}</span>
                    <CardTitle className="text-2xl">{country.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">{country.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="inline-block px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-full">
                      Available
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Coming Soon Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Expanding Soon
        </h2>
        <p className="text-gray-600 mb-6 text-lg">
          We're working hard to bring our services to more countries. Check back soon for updates!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {comingSoonCountries.map((country) => (
            <Card key={country.slug} className="hover:shadow-md transition-shadow opacity-75">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{country.flagEmoji}</span>
                  <CardTitle className="text-lg">{country.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <span className="inline-block px-2 py-1 bg-gray-200 text-gray-600 text-xs font-semibold rounded-full">
                  Coming Soon
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Information Section */}
      <section className="mt-16 bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          About Our Global Services
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
          <p>
            Our AI-powered loan matching platform helps you find the best loan options 
            tailored to your specific needs and location. Each country page provides:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Country-specific loan products and terms</li>
            <li>Local currency and payment options</li>
            <li>Compliance with local regulations and laws</li>
            <li>Multi-language support for your convenience</li>
            <li>State or province-specific information where applicable</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Note: This global page provides information only. To apply for a loan, 
            please select your country and follow the application process on your 
            country-specific page.
          </p>
        </div>
      </section>
    </div>
  )
}
