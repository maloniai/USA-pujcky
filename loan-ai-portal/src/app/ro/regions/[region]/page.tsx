import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import RomaniaNavigation from '@/components/romania/romania-navigation'
import RomaniaFooter from '@/components/romania/romania-footer'
import RomaniaDisclosure from '@/components/romania/romania-disclosure'
import RomaniaFAQ, { type FAQItem } from '@/components/romania/romania-faq'
import StickyApplyButton from '@/components/romania/sticky-apply-button'
import { romaniaRegions, getAllRegionSlugs, getRegionBySlug } from '@/data/romania-regions'
import { romaniaCities, getCitiesByRegion } from '@/data/romania-cities'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'
import Script from 'next/script'

interface PageProps {
  params: { region: string }
}

export async function generateStaticParams() {
  return getAllRegionSlugs().map((slug) => ({
    region: slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const region = getRegionBySlug(params.region)
  
  if (!region) {
    return {
      title: 'Regiune negăsită',
    }
  }

  return {
    title: `Credite ${region.nameRo} – Compare 2025 | LoansAI`,
    description: `${region.descriptionRo} Rate medii ${region.avgRate}, creditori licențiați BNR, oferte personalizate în ${region.nameRo}.`,
    keywords: `credite ${region.nameRo}, imprumuturi ${region.name}, rate ${region.nameRo}, creditori ${region.name}`,
    alternates: {
      canonical: `https://loansai.com/ro/regions/${params.region}`,
    },
  }
}

export default function RegionPage({ params }: PageProps) {
  const region = getRegionBySlug(params.region)
  
  if (!region) {
    notFound()
  }

  const cities = getCitiesByRegion(params.region)

  const faqItems: FAQItem[] = [
    {
      question: `Care sunt ratele medii ale dobânzii în ${region.nameRo}?`,
      answer: `Ratele medii ale dobânzii în ${region.nameRo} sunt de aproximativ ${region.avgRate}, dar pot varia între 5% și 50% DAE în funcție de creditor, suma împrumutată, durata și profilul tău de credit. Creditele cu garanții sau pentru clienți cu scor de credit ridicat pot avea rate mai mici.`
    },
    {
      question: `Câți creditori licențiați sunt disponibili în ${region.nameRo}?`,
      answer: `În ${region.nameRo} ai acces la peste 30 de creditori licențiați și supravegheați de BNR, incluzând bănci, instituții financiare nebancare (IFN) și platforme de creditare online. Fiecare creditor are criterii și oferte diferite, de aceea compararea este esențială.`
    },
    {
      question: `Pot obține un credit în ${region.nameRo} dacă nu locuiesc în reședința de județ?`,
      answer: `Da, majoritatea creditorilor din ${region.nameRo} oferă credite tuturor rezidentilor din regiune, indiferent de oraș. Unii creditori online oferă servicii în toată România. Important este să ai venituri stabile și documente valabile.`
    },
    {
      question: `Care este suma maximă pe care o pot împrumuta în ${region.nameRo}?`,
      answer: `Suma maximă disponibilă în ${region.nameRo} este de aproximativ ${region.maxLoanAmount}, dar suma exactă depinde de veniturile tale, istoricul de credit și politica fiecărui creditor. Unele bănci pot oferi sume mai mari pentru clienți cu bonitate ridicată.`
    },
    {
      question: `Cât durează procesul de aprobare în ${region.nameRo}?`,
      answer: `Procesul de aprobare variază: creditele online pot fi aprobate în 24-48 ore, în timp ce băncile tradiționale pot dura 3-7 zile lucrătoare. Durata depinde de complexitatea verificărilor și de completitudinea documentației tale.`
    }
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Credite Personale în ${region.nameRo}`,
    description: region.descriptionRo,
    url: `https://loansai.com/ro/regions/${params.region}`,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: region.nameRo
    },
    availableLanguage: 'ro'
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Acasă',
        item: 'https://loansai.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'România',
        item: 'https://loansai.com/ro'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Regiuni',
        item: 'https://loansai.com/ro/regions'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: region.nameRo,
        item: `https://loansai.com/ro/regions/${params.region}`
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

      <RomaniaNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <ResponsiveBreadcrumbs
              items={[
                { name: 'Acasă', url: '/' },
                { name: 'România', url: '/ro' },
                { name: 'Regiuni', url: '/ro/regions' },
                { name: region.nameRo, url: `/ro/regions/${params.region}` },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Credite Personale în {region.nameRo}
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {region.descriptionRo} Cu o populație de {region.population}, {region.nameRo} oferă acces la 
              diverse opțiuni de creditare de la creditori licențiați BNR. Suma medie a creditului este de {region.avgLoanAmount} 
              cu rate medii de {region.avgRate}. Explorează ofertele adaptate nevoilor tale specifice în {region.name}.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/ro/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Aplică Acum
                  </span>
                </Button>
              </Link>
              <Link href="#cities">
                <Button size="lg" variant="outline">
                  Vezi Orașele
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{region.population}</div>
                <div className="text-xs text-gray-600">Populație</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{region.avgRate}</div>
                <div className="text-xs text-gray-600">Rată medie</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{region.avgLoanAmount}</div>
                <div className="text-xs text-gray-600">Credit mediu</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{region.maxLoanAmount}</div>
                <div className="text-xs text-gray-600">Credit maxim</div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulations Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Reglementări și protecții în {region.nameRo}
              </h2>
              <p className="text-gray-700 mb-6">
                Creditele în {region.nameRo} sunt reglementate de Banca Națională a României (BNR) și trebuie 
                să respecte aceleași standarde naționale de protecție a consumatorului ca în restul țării.
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-4">Regulamente cheie:</h3>
                <ul className="space-y-3">
                  {region.regulationsRo.map((reg, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                      <span className="text-gray-700">{reg}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Tipuri populare de credite în {region.nameRo}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {region.topLoanTypesRo.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-3">
                      {index === 0 ? '💰' : index === 1 ? '🏠' : '🎓'}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{type}</h3>
                    <p className="text-sm text-gray-600">
                      Disponibil de la creditori licențiați în {region.nameRo}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cities Section */}
        {cities.length > 0 && (
          <section id="cities" className="bg-blue-50 py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Credite în orașe din {region.nameRo}
                </h2>
                <p className="text-gray-700 mb-8">
                  Explorează ofertele specifice pentru orașele majore din {region.nameRo}. Fiecare oraș are 
                  caracteristici locale care pot influența ofertele de credite.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cities.map((city) => (
                    <Link 
                      key={city.slug} 
                      href={`/ro/cities/${params.region}/${city.slug}`}
                    >
                      <Card className="h-full hover:shadow-xl transition cursor-pointer group">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition mb-3">
                            {city.nameRo}
                          </h3>
                          <div className="space-y-2 text-sm text-gray-600">
                            <p className="flex items-center gap-2">
                              <span>👥</span>
                              <span>{city.population}</span>
                            </p>
                            <p className="flex items-center gap-2">
                              <span>💰</span>
                              <span>Medie: {city.avgLoanAmount}</span>
                            </p>
                            <p className="flex items-center gap-2">
                              <span>📊</span>
                              <span>Rată: {city.avgRate}</span>
                            </p>
                            <p className="flex items-center gap-2">
                              <span>🏦</span>
                              <span>{city.lenderCount}+ creditori</span>
                            </p>
                          </div>
                          <div className="mt-4 text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            Vezi detalii →
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <RomaniaFAQ items={faqItems} title={`Întrebări frecvente despre creditele în ${region.nameRo}`} />
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <RomaniaDisclosure />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Gata să găsești cel mai bun credit în {region.nameRo}?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Compară oferte de la creditori licențiați și alege cea mai bună opțiune pentru tine.
              </p>
              <Link href="/ro/apply">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>🚀</span>
                    Aplică Acum
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <RomaniaFooter />
    </>
  )
}
