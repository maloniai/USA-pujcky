import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import PolandNavigation from '@/components/poland/poland-navigation'
import PolandFooter from '@/components/poland/poland-footer'
import PolandDisclosure from '@/components/poland/poland-disclosure'
import PolandFAQ, { type FAQItem } from '@/components/poland/poland-faq'
import StickyApplyButton from '@/components/poland/sticky-apply-button'
import { getPolandRegionBySlug } from '@/data/poland-regions'
import { getPolandCityBySlug, getPolandCitiesByRegion } from '@/data/poland-cities'
import Script from 'next/script'

interface PageProps {
  params: { region: string; city: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getPolandCityBySlug(params.city)
  const region = getPolandRegionBySlug(params.region)
  
  if (!city || !region) {
    return {
      title: 'Miasto nie znalezione',
    }
  }

  const currentYear = new Date().getFullYear()

  return {
    title: `Pożyczki ${city.namePl}, ${region.namePl} – Porównaj ${currentYear}`,
    description: `${city.descriptionPl} Średnie RRSO ${city.avgRate}. Porównaj oferty od ${city.lenderCount}+ licencjonowanych pożyczkodawców KNF w ${city.namePl}.`,
    keywords: `pożyczki ${city.namePl}, kredyty ${city.name}, ${region.name}, RRSO, pożyczkodawcy ${city.name}`,
    alternates: {
      canonical: `https://loansai.com/pl/${params.region}/${params.city}`,
    },
  }
}

export default function CityPage({ params }: PageProps) {
  const city = getPolandCityBySlug(params.city)
  const region = getPolandRegionBySlug(params.region)
  
  if (!city || !region || city.regionSlug !== params.region) {
    notFound()
  }

  const nearbyCities = city.nearbyCities
    .map((nearbySlug) => getPolandCityBySlug(nearbySlug.toLowerCase().replace(/\s+/g, '-')))
    .filter(Boolean)
    .slice(0, 6)

  const currentYear = new Date().getFullYear()

  const faqItems: FAQItem[] = [
    {
      question: `Jakie są wymagane dokumenty do ubiegania się o pożyczkę w ${city.namePl}?`,
      answer: `W ${city.namePl}, typowe wymagane dokumenty to: ważny dowód osobisty lub paszport, dowód dochodów (zaświadczenie o zarobkach, wyciągi bankowe), potwierdzenie adresu zamieszkania, numer PESEL oraz numer konta bankowego. Niektórzy pożyczkodawcy mogą wymagać dodatkowych dokumentów w zależności od kwoty i celu pożyczki.`
    },
    {
      question: `Jakie są stopy procentowe pożyczek w ${city.namePl}?`,
      answer: `Średnie RRSO w ${city.namePl} wynosi około ${city.avgRate}. Rzeczywiste stawki wahają się zazwyczaj od 5% do 50% w zależności od pożyczkodawcy, Twojego scoringu kredytowego, kwoty pożyczki i okresu spłaty. Klienci z wysokim scoringiem kredytowym i zabezpieczeniami mogą kwalifikować się do niższych stawek. Zawsze porównuj RRSO (Rzeczywistą Roczną Stopę Oprocentowania) między pożyczkodawcami, aby uzyskać pełny obraz kosztów.`
    },
    {
      question: `Czy mogę otrzymać pożyczkę online w ${city.namePl}?`,
      answer: `Tak! Większość pożyczkodawców w ${city.namePl} oferuje aplikacje online z szybką decyzją. Proces zwykle obejmuje: wypełnienie bezpiecznego formularza online, przesłanie dokumentów elektronicznie, otrzymanie decyzji w ciągu 24-48 godzin oraz wypłatę środków bezpośrednio na konto bankowe. Pożyczki online są wygodne i często mają szybsze czasy zatwierdzania niż tradycyjne oddziały.`
    },
    {
      question: `Ilu pożyczkodawców działa w ${city.namePl}?`,
      answer: `W ${city.namePl} dostępnych jest około ${city.lenderCount} licencjonowanych pożyczkodawców, w tym banki krajowe, instytucje pozabankowe i platformy pożyczkowe online. Każdy oferuje różne produkty i stawki. Skorzystanie z platformy porównawczej takiej jak LoansAI pomaga w znalezieniu najlepszej oferty dopasowanej do Twojej sytuacji.`
    },
    {
      question: `Jakie rodzaje pożyczek są popularne w ${city.namePl}?`,
      answer: `Najbardziej poszukiwane rodzaje pożyczek w ${city.namePl} to: ${city.topLoanTypesPl.join(', ')}. Każdy rodzaj pożyczki ma różne terminy, stawki i wymagania. Niektórzy pożyczkodawcy specjalizują się w określonych rodzajach pożyczek, więc warto zbadać opcje dopasowane do Twoich potrzeb.`
    }
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Pożyczki Osobiste w ${city.namePl}`,
    description: city.descriptionPl,
    url: `https://loansai.com/pl/${params.region}/${params.city}`,
    areaServed: {
      '@type': 'City',
      name: city.namePl,
      containedIn: {
        '@type': 'AdministrativeArea',
        name: region.namePl
      }
    },
    availableLanguage: 'pl'
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Polska',
        item: 'https://loansai.com/pl'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: region.namePl,
        item: `https://loansai.com/pl/${params.region}`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: city.namePl,
        item: `https://loansai.com/pl/${params.region}/${params.city}`
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }

  return (
    <>
      <Script id="schema-city" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <PolandNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/pl" className="hover:text-blue-600">
              Polska
            </Link>
            <span>›</span>
            <Link href={`/pl/${params.region}`} className="hover:text-blue-600">
              {region.namePl}
            </Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">{city.namePl}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Pożyczki w {city.namePl}, {region.namePl}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {city.descriptionPl}
              </p>
              <Link href="/pl/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Aplikuj Teraz
                  </span>
                </Button>
              </Link>
            </div>

            {/* City Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{city.population}</div>
                  <div className="text-sm text-gray-600">Populacja</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{city.avgLoanAmount}</div>
                  <div className="text-sm text-gray-600">Śr. pożyczka</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{city.avgRate}</div>
                  <div className="text-sm text-gray-600">Śr. RRSO</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{city.lenderCount}</div>
                  <div className="text-sm text-gray-600">Pożyczkodawcy</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Pożyczki Osobiste w {city.namePl} – Przewodnik {currentYear}</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {city.descriptionPl}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jako mieszkaniec {city.namePl}, masz dostęp do {city.lenderCount} licencjonowanych 
                  pożyczkodawców oferujących konkurencyjne stawki począwszy od około {city.avgRate} RRSO. 
                  Czy potrzebujesz środków na {city.topLoanTypesPl[0]?.toLowerCase()}, 
                  {city.topLoanTypesPl[1]?.toLowerCase()}, czy inne cele, lokalni i krajowi 
                  pożyczkodawcy oferują elastyczne rozwiązania dopasowane do Twojej sytuacji finansowej.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nasza platforma ułatwia porównanie ofert, zrozumienie lokalnych regulacji 
                  i znalezienie najlepszej pożyczki dla Twojej sytuacji. Wszystkie pożyczkodawcy 
                  są licencjonowani przez Komisję Nadzoru Finansowego (KNF) i przestrzegają 
                  polskich przepisów ochrony konsumentów.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Regulations */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Regulacje Pożyczek w {city.namePl}
            </h2>
            <Card className="border-blue-200">
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Wszystkie pożyczki w {city.namePl} podlegają krajowym regulacjom KNF. 
                  Oto kluczowe zabezpieczenia i wymagania:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-blue-900">
                      Zabezpieczenia dla Pożyczkobiorców
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Maksymalne koszty pozabankowe:</strong> 25% prowizji początkowej + 30% oprocentowania rocznego</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Limit całkowitych kosztów:</strong> Nie może przekroczyć 100% pożyczonej kwoty</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Prawo odstąpienia:</strong> 14-dniowy okres na bezpłatną rezygnację z umowy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Wcześniejsza spłata:</strong> Prawo do spłaty przed terminem z maksymalną prowizją 1%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Weryfikacja BIK:</strong> Obowiązkowe sprawdzenie zdolności kredytowej</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Ważna informacja:</strong> Wszystkie pożyczkodawcy w {city.namePl} są 
                      regulowani przez KNF i muszą przestrzegać tych zasad. Jeśli napotkasz pożyczkodawcę 
                      naruszającego te regulacje, zgłoś to do KNF.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Loan Types */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Popularne Rodzaje Pożyczek w {city.namePl}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {city.topLoanTypesPl.map((loanType, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-base">{loanType}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Popularne wśród mieszkańców {city.namePl}.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Często Zadawane Pytania – {city.namePl}
            </h2>
            <PolandFAQ items={faqItems} />
          </div>
        </section>

        {/* Nearby Cities */}
        {nearbyCities.length > 0 && (
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">
                Pożyczki w Pobliskich Miastach
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {nearbyCities.map((nearbyCity) => (
                  <Link
                    key={nearbyCity?.slug}
                    href={`/pl/${nearbyCity?.regionSlug}/${nearbyCity?.slug}`}
                    className="block"
                  >
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {nearbyCity?.namePl}
                        </h3>
                        <div className="text-sm space-y-1">
                          <div className="flex justify-between">
                            <span className="text-gray-600">RRSO:</span>
                            <span className="font-semibold text-blue-600">
                              {nearbyCity?.avgRate}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Pożyczkodawcy:</span>
                            <span className="font-semibold">
                              {nearbyCity?.lenderCount}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link
                  href={`/pl/${params.region}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  ← Powrót do {region.namePl}
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg my-12">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gotowy na pożyczkę w {city.namePl}?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Porównaj oferty od {city.lenderCount}+ licencjonowanych pożyczkodawców
            </p>
            <Link href="/pl/apply">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
                Aplikuj Teraz
              </Button>
            </Link>
            <p className="text-sm mt-4 opacity-75">
              Bezpłatne porównanie • Brak wpływu na scoring • 100% online
            </p>
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 py-8">
          <PolandDisclosure />
        </section>
      </main>

      <PolandFooter />
    </>
  )
}
