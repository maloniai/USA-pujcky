import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import RomaniaNavigation from '@/components/romania/romania-navigation'
import RomaniaFooter from '@/components/romania/romania-footer'
import RomaniaDisclosure from '@/components/romania/romania-disclosure'
import RomaniaFAQ from '@/components/romania/romania-faq'
import StickyApplyButton from '@/components/romania/sticky-apply-button'
import { romaniaRegions } from '@/data/romania-regions'
import { CollectionPageSchema } from '@/components/seo/collection-page-schema'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Credite Personale România 2025 – Compară Oferte Licențiate BNR',
  description: 'Compară credite personale de la creditori licențiați BNR în România. Rate competitive, aprobare rapidă, transparență completă. Găsește cele mai bune oferte în toate regiunile.',
  keywords: 'credite personale romania, imprumuturi, BNR, comparare credite, rate dobanzi, credite rapide, credite online romania',
  openGraph: {
    title: 'Credite Personale România – Compară Oferte de la Creditori Licențiați',
    description: 'Platformă de comparare a creditelor personale în România. Creditori licențiați BNR, transparență completă, asistență în limba română.',
    url: 'https://loansai.com/ro',
    siteName: 'LoansAI România',
    locale: 'ro_RO',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/ro',
  },
}

const faqItems = [
  {
    question: 'Ce este DAE (Dobânda Anuală Efectivă) și cum se calculează?',
    answer: 'DAE reprezintă costul total al creditului exprimat ca procent anual. Include rata dobânzii, comisioanele și toate celelalte costuri legate de credit. Conform reglementărilor BNR, DAE maxim permis este de 50% pentru creditele de consum. DAE vă ajută să comparați ofertele diferitelor creditori pe baza costului real total.'
  },
  {
    question: 'Cât de repede pot primi banii după aprobare?',
    answer: 'Durata depinde de creditor și de complexitatea verificărilor. Creditele online pot fi aprobate în 24-48 ore, iar banii sunt virați direct în contul dumneavoastră bancar. Creditele bancare tradiționale pot dura 3-7 zile lucrătoare. Documentația completă și corectă accelerează procesul.'
  },
  {
    question: 'Ce documente sunt necesare pentru a solicita un credit personal?',
    answer: 'În general aveți nevoie de: carte de identitate validă, dovada veniturilor (adeverință de salariu, declarație de venit pentru PFA/SRL), extras de cont bancar (ultimele 3-6 luni), dovada domiciliului, și completarea chestionarului de bonitate. Unii creditori pot solicita documente suplimentare în funcție de suma solicitată.'
  },
  {
    question: 'Pot obține un credit cu istoric de credit negativ?',
    answer: 'Da, există creditori care oferă credite persoanelor cu istoric de credit mai puțin favorabil, însă cu rate ale dobânzii mai mari și sume mai mici. Este important să îmbunătățiți scorul de credit prin plata la timp a datoriilor existente și menținerea unui comportament financiar responsabil. Unii creditori evaluează și capacitatea actuală de rambursare, nu doar istoricul.'
  },
  {
    question: 'Care sunt drepturile mele ca împrumutat în România?',
    answer: 'Aveți dreptul la: informații clare și complete înainte de semnare, perioadă de renunțare de 14 zile fără penalități, rambursare anticipată (cu comision maxim 1% din suma rambursată anticipat), protecție împotriva practicilor abuzive, confidențialitatea datelor personale conform GDPR. Toate creditele trebuie să respecte limitele DAE stabilite de BNR.'
  }
]

export default function RomaniaHubPage() {
  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI România - Comparare Credite Personale',
    description: 'Platformă de comparare a creditelor personale în România cu creditori licențiați BNR',
    url: 'https://loansai.com/ro',
    areaServed: {
      '@type': 'Country',
      name: 'România'
    },
    availableLanguage: 'ro',
    serviceType: 'Comparare Credite Personale',
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
        name: 'Acasă',
        item: 'https://loansai.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'România',
        item: 'https://loansai.com/ro'
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
      {/* CollectionPage Schema for Hub */}
      <CollectionPageSchema
        name="Credite Personale în România - Toate Regiunile"
        description="Compară credite personale în toate cele 8 regiuni de dezvoltare din România. Creditori licențiați BNR, rate competitive."
        url="https://loansai.com/ro"
        items={romaniaRegions.map(r => ({
          name: r.nameRo,
          url: `https://loansai.com/ro/regions/${r.slug}`,
          description: `Credite personale în regiunea ${r.nameRo}`
        }))}
        breadcrumbs={[
          { name: 'Acasă', url: 'https://loansai.com' },
          { name: 'România', url: 'https://loansai.com/ro' }
        ]}
      />
      
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

      <RomaniaNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇷🇴 Licențiat și reglementat de BNR
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Credite Personale în România
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Compară oferte de credite de la peste 30 de creditori licențiați BNR. 
              Transparență completă, rate competitive, aprobare rapidă.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/ro/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Aplică Acum
                  </span>
                </Button>
              </Link>
              <Link href="/ro/regions">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Explorează Regiunile
                </Button>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">30+</div>
                <div className="text-sm text-gray-600">Creditori Licențiați</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">8</div>
                <div className="text-sm text-gray-600">Regiuni Acoperite</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">40+</div>
                <div className="text-sm text-gray-600">Orașe Majore</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">19M</div>
                <div className="text-sm text-gray-600">Populație Acoperită</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              Cum funcționează?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  1️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Completează cererea</h3>
                <p className="text-gray-600">
                  Completează formularul online în 2-3 minute cu informații de bază despre tine și creditul dorit.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  2️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compară ofertele</h3>
                <p className="text-gray-600">
                  Primești oferte personalizate de la mai mulți creditori. Compară ratele, condițiile și alege cea mai bună.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  3️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Primește banii</h3>
                <p className="text-gray-600">
                  După aprobare, banii sunt virați direct în contul tău bancar, de obicei în 24-48 ore.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regions Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
              Explorează creditele după regiune
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Informații specifice despre credite, reglementări și creditori pentru fiecare regiune de dezvoltare din România.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {romaniaRegions.map((region) => (
                <Link key={region.slug} href={`/ro/regions/${region.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer group">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition">
                        {region.nameRo}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p className="flex items-center gap-2">
                          <span>👥</span>
                          <span>{region.population} locuitori</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>💰</span>
                          <span>Medie: {region.avgLoanAmount}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>📊</span>
                          <span>Rată: {region.avgRate}</span>
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
            <div className="text-center mt-8">
              <Link href="/ro/regions">
                <Button variant="outline" size="lg">
                  Vezi toate regiunile
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Key Regulations */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
                Reglementări cheie în România
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span>⚖️</span>
                    Protecția consumatorului
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>DAE maxim legal: 50% conform Legii 93/2009</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Perioadă de renunțare: 14 zile fără penalități</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Rambursare anticipată permisă (comision maxim 1%)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Transparență completă a costurilor</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span>🏛️</span>
                    Licențiere și supraveghere
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Reglementat de BNR (Banca Națională a României)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Licență obligatorie pentru toți creditorii</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Conformitate cu OUG 50/2010</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Protecție GDPR pentru date personale</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a 
                  href="https://www.bnr.ro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Vizitează site-ul BNR pentru mai multe informații ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gata să compari ofertele de credite?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Completează cererea în 2 minute și primește oferte personalizate de la creditori licențiați.
            </p>
            <Link href="/ro/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <span className="flex items-center gap-2">
                  <span>🚀</span>
                  Începe Acum - Este Gratuit
                </span>
              </Button>
            </Link>
            <p className="mt-6 text-sm opacity-75">
              Fără impact asupra scorului de credit • Răspuns rapid • 100% gratuit
            </p>
          </div>
        </section>

        {/* Popular Cities */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
              Orașe populare pentru credite
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['București', 'Cluj-Napoca', 'Timișoara', 'Iași', 'Constanța', 'Craiova', 
                'Brașov', 'Galați', 'Ploiești', 'Oradea', 'Arad', 'Sibiu'].map((city) => (
                <Link
                  key={city}
                  href={`/ro/cities`}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-blue-400 hover:shadow-md transition"
                >
                  <div className="text-2xl mb-2">🏙️</div>
                  <div className="text-sm font-semibold text-gray-900">{city}</div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/ro/cities">
                <Button variant="outline" size="lg">
                  Vezi toate orașele
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <RomaniaFAQ items={faqItems} />
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <RomaniaDisclosure />
          </div>
        </section>
      </main>

      <RomaniaFooter />
    </>
  )
}
