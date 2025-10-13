import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import PolandNavigation from '@/components/poland/poland-navigation'
import PolandFooter from '@/components/poland/poland-footer'
import PolandDisclosure from '@/components/poland/poland-disclosure'
import PolandFAQ from '@/components/poland/poland-faq'
import StickyApplyButton from '@/components/poland/sticky-apply-button'
import { polandRegions } from '@/data/poland-regions'
import { polandCities } from '@/data/poland-cities'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Pożyczki Osobiste Polska 2025 – Porównaj Licencjonowane Oferty',
  description: 'Porównaj pożyczki osobiste od licencjonowanych pożyczkodawców w Polsce. Konkurencyjne stawki, szybka akceptacja, pełna przejrzystość. Znajdź najlepsze oferty we wszystkich województwach.',
  keywords: 'pożyczki osobiste polska, kredyty, KNF, porównanie pożyczek, oprocentowanie, szybkie pożyczki, pożyczki online polska',
  openGraph: {
    title: 'Pożyczki Osobiste Polska – Porównaj Oferty Licencjonowanych Pożyczkodawców',
    description: 'Platforma porównywania pożyczek osobistych w Polsce. Licencjonowani pożyczkodawcy KNF, pełna przejrzystość, wsparcie po polsku.',
    url: 'https://loansai.com/pl',
    siteName: 'LoansAI Polska',
    locale: 'pl_PL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/pl',
  },
}

const faqItems = [
  {
    question: 'Czym jest RRSO (Rzeczywista Roczna Stopa Oprocentowania)?',
    answer: 'RRSO to całkowity koszt pożyczki wyrażony jako procent w skali roku. Uwzględnia oprocentowanie, prowizje i wszystkie inne koszty związane z pożyczką. Zgodnie z polskim prawem, RRSO pomaga porównywać oferty różnych pożyczkodawców na podstawie rzeczywistego całkowitego kosztu.'
  },
  {
    question: 'Jak szybko mogę otrzymać pieniądze po zatwierdzeniu?',
    answer: 'Czas zależy od pożyczkodawcy i złożoności weryfikacji. Pożyczki online mogą być zatwierdzone w ciągu 24-48 godzin, a pieniądze są przekazywane bezpośrednio na Twoje konto bankowe. Tradycyjne pożyczki bankowe mogą zająć 3-7 dni roboczych. Kompletna i poprawna dokumentacja przyspiesza proces.'
  },
  {
    question: 'Jakie dokumenty są potrzebne do ubiegania się o pożyczkę osobistą?',
    answer: 'Zazwyczaj potrzebujesz: ważnego dowodu osobistego, potwierdzenia dochodów (zaświadczenie o zarobkach, PIT dla przedsiębiorców), wyciągu z konta bankowego (ostatnie 3-6 miesięcy), potwierdzenia adresu zamieszkania i wypełnienia kwestionariusza zdolności kredytowej. Niektórzy pożyczkodawcy mogą wymagać dodatkowych dokumentów w zależności od wnioskowanej kwoty.'
  },
  {
    question: 'Czy mogę otrzymać pożyczkę z negatywną historią kredytową?',
    answer: 'Tak, istnieją pożyczkodawcy oferujący pożyczki osobom z mniej korzystną historią kredytową, ale z wyższym oprocentowaniem i mniejszymi kwotami. Ważne jest poprawienie scoringu kredytowego poprzez terminową spłatę istniejących długów i utrzymanie odpowiedzialnego zachowania finansowego. Niektórzy pożyczkodawcy oceniają również obecną zdolność do spłaty, nie tylko historię.'
  },
  {
    question: 'Jakie są moje prawa jako pożyczkobiorcy w Polsce?',
    answer: 'Masz prawo do: jasnych i kompletnych informacji przed podpisaniem umowy, 14-dniowego okresu odstąpienia od umowy bez kar, wcześniejszej spłaty (z maksymalną prowizją 1% od kwoty przedterminowo spłaconej), ochrony przed praktykami nadużywającymi, poufności danych osobowych zgodnie z RODO. Wszystkie pożyczki muszą przestrzegać limitów kosztów ustalonych przez KNF.'
  }
]

export default function PolandHubPage() {
  // Get top 8 regions for display
  const topRegions = polandRegions.slice(0, 8)
  
  // Get top cities across regions
  const featuredCities = [
    polandCities.find(c => c.slug === 'warszawa'),
    polandCities.find(c => c.slug === 'krakow'),
    polandCities.find(c => c.slug === 'wroclaw'),
    polandCities.find(c => c.slug === 'poznan'),
    polandCities.find(c => c.slug === 'gdansk'),
    polandCities.find(c => c.slug === 'katowice'),
    polandCities.find(c => c.slug === 'lodz'),
    polandCities.find(c => c.slug === 'szczecin'),
  ].filter(Boolean)

  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI Polska - Porównanie Pożyczek Osobistych',
    description: 'Platforma porównywania pożyczek osobistych w Polsce z licencjonowanymi pożyczkodawcami KNF',
    url: 'https://loansai.com/pl',
    areaServed: {
      '@type': 'Country',
      name: 'Polska'
    },
    availableLanguage: 'pl',
    serviceType: 'Porównanie Pożyczek Osobistych',
    provider: {
      '@type': 'Organization',
      name: 'LoansAI',
      logo: 'https://loansai.com/logo.png'
    }
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Strona główna',
        item: 'https://loansai.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Polska',
        item: 'https://loansai.com/pl'
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
      {/* Structured Data */}
      <Script id="schema-financial-service" type="application/ld+json">
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
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇵🇱 Licencjonowane i regulowane przez KNF
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Pożyczki Osobiste w Polsce
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Porównaj oferty pożyczek od ponad 40 licencjonowanych pożyczkodawców KNF. 
              Pełna przejrzystość, konkurencyjne stawki, szybka akceptacja.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/pl/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Aplikuj Teraz
                  </span>
                </Button>
              </Link>
              <Link href="#regiony">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Przeglądaj Województwa
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">40+</div>
                <div className="text-sm text-gray-600">Pożyczkodawców</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">16</div>
                <div className="text-sm text-gray-600">Województw</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-gray-600">Miast</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">8.5%</div>
                <div className="text-sm text-gray-600">Średnie RRSO</div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Pożyczki Osobiste w Polsce – Kompleksowy Przewodnik
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  W Polsce rynek pożyczek osobistych jest regulowany przez <strong>Komisję Nadzoru Finansowego (KNF)</strong>, 
                  co zapewnia ochronę konsumentów i uczciwe praktyki. Platforma LoansAI umożliwia porównanie ofert od 
                  licencjonowanych pożyczkodawców we wszystkich 16 województwach Polski, pomagając znaleźć najlepsze 
                  warunki dopasowane do Twojej sytuacji finansowej.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Niezależnie czy potrzebujesz pożyczki na <strong>konsolidację długów</strong>, 
                  <strong> remont mieszkania</strong>, <strong>zakup samochodu</strong>, czy 
                  <strong> nieprzewidziane wydatki</strong>, nasza platforma łączy Cię z zaufanymi 
                  pożyczkodawcami oferującymi konkurencyjne stawki i przejrzyste warunki.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Dlaczego warto wybrać LoansAI Polska?</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>100% licencjonowani pożyczkodawcy KNF</strong> – Wszystkie instytucje są zweryfikowane i regulowane</li>
                  <li><strong>Porównanie w czasie rzeczywistym</strong> – Aktualne oferty od ponad 40 pożyczkodawców</li>
                  <li><strong>Lokalna znajomość rynku</strong> – Specyficzne rozwiązania dla każdego województwa</li>
                  <li><strong>Przejrzyste koszty</strong> – Pełna informacja o RRSO, prowizjach i opłatach</li>
                  <li><strong>Ochrona danych</strong> – Zgodność z RODO i najwyższe standardy bezpieczeństwa</li>
                  <li><strong>Wsparcie po polsku</strong> – Pomoc w Twoim języku na każdym etapie</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Polish Regulations */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Regulacje Pożyczek w Polsce
            </h2>
            <Card className="border-blue-200">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <span className="text-blue-600">🛡️</span>
                      Kluczowe Zabezpieczenia dla Konsumentów
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Maksymalne koszty:</strong> 25% prowizji + 30% oprocentowanie roczne dla pożyczek pozabankowych</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Limit całkowitych kosztów:</strong> Nie może przekroczyć 100% kwoty pożyczki</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Okres odstąpienia:</strong> 14 dni na bezpłatną rezygnację z umowy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Wcześniejsza spłata:</strong> Prawo do spłaty przed terminem z maksymalną prowizją 1%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Obowiązkowa weryfikacja BIK:</strong> Sprawdzenie zdolności kredytowej chronią przed zadłużeniem</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <span className="text-blue-600">📋</span>
                      Wymagania Prawne
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Licencja KNF:</strong> Wszystkie instytucje muszą posiadać zezwolenie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Ustawa o kredycie konsumenckim:</strong> Ochrona zgodnie z ustawą z 2011 roku</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Przejrzyste ujawnienie kosztów:</strong> Pełna informacja o RRSO i wszystkich opłatach</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Pisemna umowa:</strong> Wszystkie warunki muszą być udokumentowane</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Przepisy AML:</strong> Zgodność z regulacjami przeciwko praniu pieniędzy</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Ważna informacja:</strong> Komisja Nadzoru Finansowego (KNF) to polski organ nadzoru 
                    zapewniający stabilność rynku finansowego i ochronę konsumentów. Wszystkie pożyczki przedstawione 
                    na tej platformie pochodzą od instytucji regulowanych przez KNF.
                  </p>
                  <Link href="https://www.knf.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mt-2 inline-block">
                    Odwiedź oficjalną stronę KNF →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Regions Section */}
        <section id="regiony" className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Pożyczki według Województw
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Wybierz swoje województwo, aby zobaczyć lokalne oferty pożyczkowe i regulacje
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topRegions.map((region) => (
                <Link 
                  key={region.slug} 
                  href={`/pl/${region.slug}`}
                  className="block"
                >
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{region.namePl}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        {region.descriptionPl}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Populacja:</span>
                          <span className="font-semibold">{region.population}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Śr. pożyczka:</span>
                          <span className="font-semibold">{region.avgLoanAmount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Śr. stawka:</span>
                          <span className="font-semibold text-blue-600">{region.avgRate}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className="text-xs text-gray-500">Główne miasta:</span>
                        <p className="text-xs text-gray-700 mt-1">
                          {region.majorCities.slice(0, 3).join(', ')}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Przeglądaj wszystkie 16 województw Polski
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {polandRegions.slice(8).map((region) => (
                  <Link 
                    key={region.slug} 
                    href={`/pl/${region.slug}`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    {region.namePl}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Cities */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Popularne Miasta
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Znajdź najlepsze oferty pożyczek w największych miastach Polski
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCities.map((city) => (
                <Link 
                  key={city?.slug} 
                  href={`/pl/${city?.regionSlug}/${city?.slug}`}
                  className="block"
                >
                  <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="text-base">{city?.namePl}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Populacja:</span>
                          <span className="font-semibold">{city?.population}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Śr. RRSO:</span>
                          <span className="font-semibold text-blue-600">{city?.avgRate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Pożyczkodawcy:</span>
                          <span className="font-semibold">{city?.lenderCount}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Rodzaje Dostępnych Pożyczek
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">💳</span>
                    Pożyczki Osobiste
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Niezabezpieczone pożyczki na dowolny cel. Kwoty od 1,000 do 200,000 PLN, 
                    okres spłaty 6-84 miesiące.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>✓ Brak wymaganego zabezpieczenia</li>
                    <li>✓ Szybka decyzja (24-48h)</li>
                    <li>✓ Elastyczne warunki spłaty</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🔄</span>
                    Konsolidacja Długów
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Połącz wiele pożyczek w jedną z niższym RRSO i miesięczną ratą.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>✓ Niższe miesięczne raty</li>
                    <li>✓ Jedna płatność zamiast wielu</li>
                    <li>✓ Potencjalnie niższe oprocentowanie</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🏠</span>
                    Remont i Modernizacja
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Specjalne pożyczki na remont mieszkania, domu lub zakup materiałów budowlanych.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>✓ Wyższe kwoty pożyczek</li>
                    <li>✓ Dłuższe okresy spłaty</li>
                    <li>✓ Konkurencyjne stawki</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🚗</span>
                    Pożyczki Samochodowe
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Finansowanie zakupu nowego lub używanego samochodu z korzystnym oprocentowaniem.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>✓ Finansowanie do 100% wartości</li>
                    <li>✓ Okres spłaty do 7 lat</li>
                    <li>✓ Szybka wypłata środków</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Najczęściej Zadawane Pytania
            </h2>
            <PolandFAQ items={faqItems} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg my-12">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gotowy, aby znaleźć idealną pożyczkę?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Porównaj oferty od ponad 40 licencjonowanych pożyczkodawców w kilka sekund
            </p>
            <Link href="/pl/apply">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
                <span className="flex items-center gap-2">
                  <span>💰</span>
                  Rozpocznij Aplikację
                </span>
              </Button>
            </Link>
            <p className="text-sm mt-4 opacity-75">
              Bezpłatne porównanie • Brak wpływu na scoring kredytowy • 100% online
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
