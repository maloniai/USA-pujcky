import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import RomaniaNavigation from '@/components/romania/romania-navigation'
import RomaniaFooter from '@/components/romania/romania-footer'
import RomaniaDisclosure from '@/components/romania/romania-disclosure'
import RomaniaFAQ, { type FAQItem } from '@/components/romania/romania-faq'
import StickyApplyButton from '@/components/romania/sticky-apply-button'
import { getAllCitySlugs, getCityBySlug, getNearbyCities } from '@/data/romania-cities'
import { getRegionBySlug } from '@/data/romania-regions'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'
import Script from 'next/script'

interface PageProps {
  params: { region: string; city: string }
}

export async function generateStaticParams() {
  return getAllCitySlugs().map(({ region, city }) => ({
    region,
    city,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCityBySlug(params.region, params.city)
  
  if (!city) {
    return {
      title: 'Oraș negăsit',
    }
  }

  // Title ≤60 chars
  const title = `Credite ${city.nameRo}, ${city.region} – Compară 2025`
  
  // Meta description 120-155 chars
  const description = `Compară credite personale în ${city.nameRo}. Rate de la ${city.avgRate}, ${city.lenderCount}+ creditori licențiați BNR. Aplică online și primește oferte rapid.`

  return {
    title,
    description,
    keywords: `credite ${city.nameRo}, imprumuturi ${city.name}, rate ${city.nameRo}, creditori ${city.nameRo}`,
    openGraph: {
      title,
      description,
      url: `https://loansai.com/ro/cities/${params.region}/${params.city}`,
    },
    alternates: {
      canonical: `https://loansai.com/ro/cities/${params.region}/${params.city}`,
    },
  }
}

export default function CityPage({ params }: PageProps) {
  const city = getCityBySlug(params.region, params.city)
  const region = getRegionBySlug(params.region)
  
  if (!city || !region) {
    notFound()
  }

  const nearbyCities = getNearbyCities(params.city, 4)

  // FAQ items (3-5 Q/A, city/country-specific, factual, evergreen)
  const faqItems: FAQItem[] = [
    {
      question: `Ce rate de dobândă pot obține în ${city.nameRo}?`,
      answer: `În ${city.nameRo}, ratele medii ale dobânzii sunt de aproximativ ${city.avgRate}, dar pot varia între 5% și 50% DAE în funcție de creditor și profilul tău. Creditele cu garanții sau pentru clienți cu scor de credit peste ${city.avgCreditScore} pot beneficia de rate mai avantajoase. Recomandăm să compari oferte de la mai mulți creditori pentru a găsi cea mai bună rată.`
    },
    {
      question: `Câți creditori licențiați operează în ${city.nameRo}?`,
      answer: `În ${city.nameRo} ai acces la peste ${city.lenderCount} creditori licențiați de BNR, incluzând bănci tradiționale, instituții financiare nebancare (IFN) și platforme de creditare online. Fiecare creditor are criterii proprii de eligibilitate și pachete de servicii diferite, de aceea compararea ofertelor este esențială pentru a găsi cea mai potrivită soluție.`
    },
    {
      question: `Care este suma medie a creditului în ${city.nameRo}?`,
      answer: `Suma medie a creditelor personale în ${city.nameRo} este de ${city.avgLoanAmount}, reflectând costul vieții și veniturile medii din zonă. Sumele disponibile variază de la 1.000 RON până la ${city.avgLoanAmount.replace(/[^\d]/g, '') + '0,000'} RON sau mai mult, în funcție de veniturile tale, istoricul de credit și politica fiecărui creditor. Suma exactă pentru care ești eligibil va fi determinată după evaluarea profilului tău financiar.`
    },
    {
      question: `Pot obține un credit în ${city.nameRo} dacă am scor de credit scăzut?`,
      answer: `Da, există creditori în ${city.nameRo} care oferă credite persoanelor cu scor de credit mai scăzut decât media de ${city.avgCreditScore}. Însă, acestea vin de obicei cu rate ale dobânzii mai mari și sume mai mici. Pentru a îmbunătăți șansele de aprobare și condițiile, asigură-te că ai un venit stabil, documente complete și ia în considerare un co-debitor sau garanții. Unii creditori evaluează și alți factori dincolo de scorul de credit.`
    },
    {
      question: `Cât durează până primesc banii după aprobare în ${city.nameRo}?`,
      answer: `Durata depinde de creditor: platformele online pot vira banii în 24-48 ore după aprobare, în timp ce băncile tradiționale din ${city.nameRo} pot dura 3-7 zile lucrătoare. Banii sunt virați direct în contul tău bancar. Pentru a accelera procesul, asigură-te că toate documentele sunt complete și corecte la momentul aplicării.`
    }
  ]

  // Schema.org JSON-LD
  const financialServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Credite Personale în ${city.nameRo}`,
    description: city.descriptionRo,
    url: `https://loansai.com/ro/cities/${params.region}/${params.city}`,
    areaServed: {
      '@type': 'City',
      name: city.nameRo,
      containedIn: {
        '@type': 'AdministrativeArea',
        name: region.nameRo
      }
    },
    availableLanguage: 'ro',
    provider: {
      '@type': 'Organization',
      name: 'LoansAI România'
    }
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
        name: 'Orașe',
        item: 'https://loansai.com/ro/cities'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: region.nameRo,
        item: `https://loansai.com/ro/regions/${params.region}`
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: city.nameRo,
        item: `https://loansai.com/ro/cities/${params.region}/${params.city}`
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

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `LoansAI - ${city.nameRo}`,
    description: `Platformă de comparare credite personale în ${city.nameRo}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.nameRo,
      addressRegion: region.nameRo,
      addressCountry: 'RO'
    },
    areaServed: city.nameRo
  }

  const offerCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: `Oferte Credite ${city.nameRo}`,
    itemListElement: city.topLoanTypesRo.map((type, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'LoanOrCredit',
        name: type,
        loanType: type
      },
      position: index + 1
    }))
  }

  return (
    <>
      {/* Structured Data - Schema JSON-LD */}
      <Script id="schema-financial-service" type="application/ld+json">
        {JSON.stringify(financialServiceSchema)}
      </Script>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="schema-local-business" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <Script id="schema-offer-catalog" type="application/ld+json">
        {JSON.stringify(offerCatalogSchema)}
      </Script>

      <RomaniaNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumbs - Internal Linking: Up to Region */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <ResponsiveBreadcrumbs
              items={[
                { name: 'Acasă', url: '/' },
                { name: 'România', url: '/ro' },
                { name: 'Orașe', url: '/ro/cities' },
                { name: region.nameRo, url: `/ro/regions/${params.region}` },
                { name: city.nameRo, url: `/ro/cities/${params.region}/${params.city}` },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* H1 as specified */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Credite Personale în {city.nameRo}, {region.nameRo}
            </h1>
            
            {/* Intro paragraph: 80-120 words, unique per city, loan types available, regulation context, typical ranges */}
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {city.descriptionRo} Cu o populație de {city.population}, {city.nameRo} oferă acces la {city.lenderCount}+ 
              creditori licențiați BNR care oferă diverse tipuri de credite: {city.topLoanTypesRo.join(', ')}. 
              Ratele medii ale dobânzii încep de la {city.avgRate}, cu suma medie a creditului de {city.avgLoanAmount}. 
              Toți creditorii respectă reglementările BNR conform Legii 93/2009 și OUG 50/2010, asigurând transparență 
              și protecție pentru consumatori. Scorul mediu de credit în {city.nameRo} este {city.avgCreditScore}, 
              dar există opțiuni pentru toate profilurile de credit.
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
              <Link href={`/ro/regions/${params.region}`}>
                <Button size="lg" variant="outline">
                  Vezi {region.nameRo}
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{city.lenderCount}+</div>
                <div className="text-xs text-gray-600">Creditori</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{city.avgRate}</div>
                <div className="text-xs text-gray-600">Rată medie</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{city.avgLoanAmount}</div>
                <div className="text-xs text-gray-600">Credit mediu</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{city.avgCreditScore}</div>
                <div className="text-xs text-gray-600">Scor mediu</div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Regulations Snippet: 5-8 bullets - caps, licensing entity, key borrower protections */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Reglementări și protecții în {city.nameRo}
              </h2>
              <p className="text-gray-700 mb-6">
                Creditele în {city.nameRo} sunt supuse acelorași reglementări naționale stricte ca în restul României, 
                asigurând protecția consumatorilor și practici de creditare responsabile.
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <span>⚖️</span>
                  Protecții cheie pentru împrumutați:
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>DAE maxim legal: 50%</strong> - Conform Legii 93/2009, DAE nu poate depăși 50% pe an
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>Licențiere BNR obligatorie</strong> - Toți creditorii trebuie licențiați de Banca Națională a României
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>Perioadă de renunțare: 14 zile</strong> - Drept legal de retragere din contract fără penalități
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>Transparență completă</strong> - Divulgarea obligatorie a tuturor costurilor înainte de semnare
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>Rambursare anticipată</strong> - Permisă cu comision maxim 1% din suma rambursată anticipat
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>Evaluare capacitate de plată</strong> - Creditorii trebuie să verifice dacă poți rambursa creditul
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>Protecție GDPR</strong> - Datele tale personale sunt protejate conform regulamentului european
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>Conformitate OUG 50/2010</strong> - Protecția consumatorilor în contractele de credit
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Types Available */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Tipuri de credite disponibile în {city.nameRo}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {city.topLoanTypesRo.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">
                      {index === 0 ? '💰' : index === 1 ? '🏠' : '🎓'}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{type}</h3>
                    <p className="text-sm text-gray-600">
                      Disponibil de la creditori licențiați în {city.nameRo}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section: 3-5 Q/A, city/country-specific, factual, evergreen */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <RomaniaFAQ items={faqItems} title={`Întrebări frecvente despre creditele în ${city.nameRo}`} />
          </div>
        </section>

        {/* Internal Links: Lateral - Nearby Cities */}
        {nearbyCities.length > 0 && (
          <section className="bg-blue-50 py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Credite în orașe din apropiere
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {nearbyCities.map((nearbyCity) => (
                    <Link
                      key={nearbyCity.slug}
                      href={`/ro/cities/${nearbyCity.regionSlug}/${nearbyCity.slug}`}
                      className="bg-white rounded-lg p-4 hover:shadow-lg transition text-center"
                    >
                      <div className="text-2xl mb-2">🏙️</div>
                      <div className="font-semibold text-gray-900 mb-1">{nearbyCity.nameRo}</div>
                      <div className="text-sm text-gray-600">{nearbyCity.avgRate}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Disclosure Block */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <RomaniaDisclosure />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Gata să aplici pentru un credit în {city.nameRo}?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Compară oferte de la {city.lenderCount}+ creditori licențiați și găsește cea mai bună soluție pentru tine.
              </p>
              <Link href="/ro/apply">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>🚀</span>
                    Începe Aplicarea Acum
                  </span>
                </Button>
              </Link>
              <p className="mt-6 text-sm opacity-75">
                Fără impact asupra scorului de credit • Răspuns în 24-48 ore • 100% securizat
              </p>
            </div>
          </div>
        </section>
      </main>

      <RomaniaFooter />
    </>
  )
}
