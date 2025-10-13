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
import { polandRegions, getPolandRegionBySlug, getAllPolandRegionSlugs } from '@/data/poland-regions'
import { polandCities, getPolandCitiesByRegion } from '@/data/poland-cities'
import Script from 'next/script'

interface PageProps {
  params: { region: string }
}

export async function generateStaticParams() {
  return getAllPolandRegionSlugs().map((slug) => ({
    region: slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const region = getPolandRegionBySlug(params.region)
  
  if (!region) {
    return {
      title: 'Województwo nie znalezione',
    }
  }

  return {
    title: `Pożyczki ${region.namePl} – Porównaj 2025 | LoansAI`,
    description: `${region.descriptionPl} Średnie stawki ${region.avgRate}, licencjonowani pożyczkodawcy KNF, spersonalizowane oferty w ${region.namePl}.`,
    keywords: `pożyczki ${region.namePl}, kredyty ${region.name}, stawki ${region.namePl}, pożyczkodawcy ${region.name}`,
    alternates: {
      canonical: `https://loansai.com/pl/${params.region}`,
    },
  }
}

export default function RegionPage({ params }: PageProps) {
  const region = getPolandRegionBySlug(params.region)
  
  if (!region) {
    notFound()
  }

  const cities = getPolandCitiesByRegion(params.region)

  const faqItems: FAQItem[] = [
    {
      question: `Jakie są średnie stopy procentowe w województwie ${region.namePl}?`,
      answer: `Średnie stopy procentowe w województwie ${region.namePl} wynoszą około ${region.avgRate}, ale mogą się wahać między 5% a 50% RRSO w zależności od pożyczkodawcy, pożyczonej kwoty, okresu i Twojego profilu kredytowego. Pożyczki zabezpieczone lub dla klientów z wysokim scoringiem kredytowym mogą mieć niższe stawki.`
    },
    {
      question: `Ilu licencjonowanych pożyczkodawców jest dostępnych w województwie ${region.namePl}?`,
      answer: `W województwie ${region.namePl} masz dostęp do ponad 40 licencjonowanych i nadzorowanych przez KNF pożyczkodawców, w tym banków, instytucji finansowych pozabankowych (SKOK, pożyczkodawcy) i platform pożyczkowych online. Każdy pożyczkodawca ma różne kryteria i oferty, dlatego porównanie jest kluczowe.`
    },
    {
      question: `Czy mogę otrzymać pożyczkę w województwie ${region.namePl}, jeśli nie mieszkam w stolicy województwa?`,
      answer: `Tak, większość pożyczkodawców w województwie ${region.namePl} oferuje pożyczki wszystkim mieszkańcom województwa, niezależnie od miasta. Niektórzy pożyczkodawcy online oferują usługi w całej Polsce. Ważne jest, abyś miał stabilne dochody i ważne dokumenty.`
    },
    {
      question: `Jaka jest maksymalna kwota, którą mogę pożyczyć w województwie ${region.namePl}?`,
      answer: `Maksymalna dostępna kwota w województwie ${region.namePl} wynosi około ${region.maxLoanAmount}, ale dokładna kwota zależy od Twoich dochodów, historii kredytowej i polityki każdego pożyczkodawcy. Niektóre banki mogą oferować wyższe kwoty dla klientów o wysokiej wiarygodności kredytowej.`
    },
    {
      question: `Ile czasu trwa proces zatwierdzania w województwie ${region.namePl}?`,
      answer: `Proces zatwierdzania różni się: pożyczki online mogą być zatwierdzone w ciągu 24-48 godzin, podczas gdy tradycyjne banki mogą zająć 3-7 dni roboczych. Czas trwania zależy od złożoności weryfikacji i kompletności Twojej dokumentacji.`
    }
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Pożyczki Osobiste w ${region.namePl}`,
    description: region.descriptionPl,
    url: `https://loansai.com/pl/${params.region}`,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: region.namePl
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
        name: 'Strona główna',
        item: 'https://loansai.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Polska',
        item: 'https://loansai.com/pl'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: region.namePl,
        item: `https://loansai.com/pl/${params.region}`
      }
    ]
  }

  return (
    <>
      <Script id="schema-region" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
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
            <span className="text-gray-900 font-medium">{region.namePl}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Pożyczki w {region.namePl}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {region.descriptionPl}
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

            {/* Region Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{region.population}</div>
                  <div className="text-sm text-gray-600">Populacja</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{region.avgLoanAmount}</div>
                  <div className="text-sm text-gray-600">Śr. pożyczka</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{region.avgRate}</div>
                  <div className="text-sm text-gray-600">Śr. RRSO</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{region.maxLoanAmount}</div>
                  <div className="text-sm text-gray-600">Maks. kwota</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>O Pożyczkach w {region.namePl}</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {region.descriptionPl}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Jako mieszkaniec województwa {region.namePl}, masz dostęp do szerokiej gamy produktów 
                  pożyczkowych od licencjonowanych instytucji finansowych. Niezależnie czy potrzebujesz 
                  {region.topLoanTypesPl[0]?.toLowerCase()}, {region.topLoanTypesPl[1]?.toLowerCase()}, 
                  czy {region.topLoanTypesPl[2]?.toLowerCase()}, możesz znaleźć konkurencyjne oferty 
                  dostosowane do Twoich potrzeb.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Regulations */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Regulacje w {region.namePl}
            </h2>
            <Card className="border-blue-200">
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Wszystkie pożyczki w województwie {region.namePl} podlegają tym samym krajowym 
                  regulacjom KNF co w całej Polsce:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-blue-900">
                      Ochrona Konsumenta
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {region.regulationsPl.slice(0, 4).map((reg, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{reg}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-blue-900">
                      Wymagania Prawne
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {region.regulationsPl.slice(4).map((reg, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{reg}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cities in Region */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Pożyczki w Miastach – {region.namePl}
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Znajdź najlepsze oferty pożyczkowe w Twoim mieście
            </p>
            
            {cities.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cities.map((city) => (
                  <Link 
                    key={city.slug} 
                    href={`/pl/${params.region}/${city.slug}`}
                    className="block"
                  >
                    <Card className="hover:shadow-lg transition-shadow h-full">
                      <CardHeader>
                        <CardTitle className="text-lg">{city.namePl}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">
                          {city.descriptionPl}
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Populacja:</span>
                            <span className="font-semibold">{city.population}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Śr. RRSO:</span>
                            <span className="font-semibold text-blue-600">{city.avgRate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Pożyczkodawcy:</span>
                            <span className="font-semibold">{city.lenderCount}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600">
                Wkrótce dodamy miasta z tego województwa.
              </p>
            )}
          </div>
        </section>

        {/* Loan Types */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Popularne Typy Pożyczek w {region.namePl}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {region.topLoanTypesPl.map((loanType, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-base">{loanType}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Popularne wśród mieszkańców województwa {region.namePl}.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Często Zadawane Pytania – {region.namePl}
            </h2>
            <PolandFAQ items={faqItems} />
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg my-12">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gotowy na pożyczkę w {region.namePl}?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Porównaj oferty i znajdź najlepszą stawkę w swoim województwie
            </p>
            <Link href="/pl/apply">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
                Aplikuj Teraz
              </Button>
            </Link>
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
