import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import { VolsorLoanForm } from '@/components/cz/volsor-loan-form'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'

const currentYear = new Date().getFullYear()
const canonicalPath = '/cz/apply'

export const metadata: Metadata = {
  title: `Požádat o půjčku online – Česká republika | ${currentYear}`,
  description: 'Vyplňte online žádost o osobní půjčku v České republice. Rychlé posouzení, licencovaní poskytovatelé ČNB, transparentní RPSN. Bez dopadu na úvěrový registr.',
  robots: 'index, follow',
  openGraph: {
    title: 'Požádat o půjčku online v České republice',
    description: 'Online žádost o osobní půjčku. Licencovaní poskytovatelé, rychlé schválení, žádné skryté poplatky.',
    url: `https://loansai.com${canonicalPath}`,
    locale: 'cs_CZ',
    type: 'website',
  },
  alternates: {
    canonical: canonicalPath,
  },
  keywords: [
    'půjčka online',
    'žádost o úvěr Česko',
    'osobní půjčka ČR',
    'rychlá půjčka',
    'licencovaní poskytovatelé ČNB',
    'RPSN srovnání',
    'AI doporučení půjček',
  ],
}

const breadcrumbItems = [
  { name: 'Domů', url: '/', position: 1 },
  { name: 'Půjčky Česko', url: '/cz', position: 2 },
  { name: 'Požádat o půjčku', url: canonicalPath, position: 3 },
]

export default function CzechApplyPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Požádat o půjčku online – Česká republika',
    description: 'Formulář online žádosti o osobní půjčky v České republice s AI doporučením',
    url: `https://loansai.com${canonicalPath}`,
    inLanguage: 'cs',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Loan AI Portál',
      url: 'https://loansai.com',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Domů',
          item: 'https://loansai.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Česká republika',
          item: 'https://loansai.com/cz',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Požádat o půjčku',
          item: `https://loansai.com${canonicalPath}`,
        },
      ],
    },
    mainEntity: {
      '@type': 'FinancialService',
      name: 'Online žádost o osobní půjčku',
      description: 'Rychlé online posouzení žádosti o půjčku s AI doporučením nejlepších nabídek',
      serviceType: 'Loan Application Service',
      areaServed: {
        '@type': 'Country',
        name: 'Česká republika',
      },
      provider: {
        '@type': 'Organization',
        name: 'Loan AI Portál',
        url: 'https://loansai.com',
      },
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Jak dlouho trvá schválení půjčky v České republice?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standardně bankovní poskytovatelé rozhodnou do 2 pracovních dnů po doložení všech podkladů. Nebankovní společnosti mohou vyhodnotit žádost během několika hodin, ale detailně kontrolují registry BRKI a NRKI.',
        },
      },
      {
        '@type': 'Question',
        name: 'Jaké dokumenty potřebuji k žádosti o půjčku?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standardem je občanský průkaz, potvrzení o příjmu (nebo daňové přiznání pro OSVČ) a výpis z bankovního účtu za poslední 3 měsíce. U konsolidací je třeba doložit stávající smlouvy o úvěrech.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ovlivní žádost můj úvěrový registr?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prvotní vyhodnocení probíhá jako soft inquiry a neovlivní váš rating v registrech. Tvrdý dotaz (hard inquiry) proběhne až po vašem souhlasu se konkrétní nabídkou poskytovatele.',
        },
      },
      {
        '@type': 'Question',
        name: 'Jsou všichni poskytovatelé licencováni Českou národní bankou?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ano, spolupracujeme pouze s poskytovateli, kteří mají platnou licenci ČNB nebo jsou registrováni jako zprostředkovatelé. Každá nabídka obsahuje odkaz na ověření v registru ČNB.',
        },
      },
      {
        '@type': 'Question',
        name: 'Jak funguje AI doporučení pro české půjčky?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Model vyhodnocuje RPSN, celkovou přeplacenou částku, dostupnost v jednotlivých krajích, rychlost vyplácení a reputaci poskytovatele. Výsledky jsou seřazeny podle celkových nákladů a transparentnosti podmínek.',
        },
      },
    ],
  }

  return (
    <>
      <Script id="schema-apply-page" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <Navigation locale="cs" />
      <BreadcrumbSchema items={breadcrumbItems} />

      <main className="flex-1 bg-slate-50">
        {/* Hero Section */}
        <header className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Česká republika • Online žádost {currentYear}
            </p>
            <h1 className="mt-3 text-4xl font-bold text-blue-900 md:text-5xl">
              Požádejte o osobní půjčku s AI doporučením
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-blue-900/80 md:text-xl">
              Vyplňte bezpečný formulář a získejte orientační rozhodnutí během několika minut. AI model
              následně doporučí tři nejvhodnější nabídky podle RPSN, celkového přeplacení a rychlosti
              výplaty od licencovaných poskytovatelů.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm shadow-sm">
                <span className="text-green-600">✓</span>
                <span className="text-blue-900">Soft inquiry – bez dopadu na registr</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm shadow-sm">
                <span className="text-green-600">✓</span>
                <span className="text-blue-900">Odpověď do 24–48 hodin</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm shadow-sm">
                <span className="text-green-600">✓</span>
                <span className="text-blue-900">100% zdarma</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm shadow-sm">
                <span className="text-green-600">✓</span>
                <span className="text-blue-900">SSL šifrování</span>
              </div>
            </div>

            <LeadGenDisclosure locale="cs" className="mt-6 max-w-3xl text-blue-900/70" />
          </div>
        </header>

        {/* Application Form Section */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100">
              {/* Security Badge */}
              <div className="mb-8 text-center">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  <span>🔒</span>
                  <span>Zabezpečené SSL spojení • Vaše data jsou chráněna</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                Online formulář žádosti o půjčku
              </h2>

              {/* Volsor Form Integration */}
              <VolsorLoanForm
                product="personal"
                country="cs"
                affiliate={9100}
                campaign="cz-apply-page"
                partnerName="Volsor Česko"
                sponsoredLabel="Licencovaný partner ČNB"
                className="mb-6"
              />

              <div className="mt-8 text-center text-xs text-blue-900/60">
                <p>
                  Formulář běží na platformě Volsor s.r.o. (IČO 29136288), registrovaného poskytovatele u České
                  národní banky. Data jsou přenášena šifrovaně a zpracována v souladu s GDPR.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900 text-center mb-8">
              Proč požádat přes Loan AI Portál?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="font-bold text-blue-900 mb-3 text-xl">Bezpečné a chráněné</h3>
                <p className="text-sm text-blue-900/80 leading-relaxed">
                  Vaše data jsou šifrována technologií SSL bankovní úrovně a chráněna podle GDPR a zákona č.
                  110/2019 Sb. o zpracování osobních údajů.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="font-bold text-blue-900 mb-3 text-xl">Rychlé a jednoduché</h3>
                <p className="text-sm text-blue-900/80 leading-relaxed">
                  Vyplňte formulář během 2–3 minut a získejte okamžité orientační vyhodnocení. AI model následně
                  doporučí nejvhodnější nabídky.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🏛️</div>
                <h3 className="font-bold text-blue-900 mb-3 text-xl">Licencovaní poskytovatelé</h3>
                <p className="text-sm text-blue-900/80 leading-relaxed">
                  Spolupracujeme pouze s poskytovateli, kteří mají platnou licenci České národní banky a dodržují
                  zákon č. 257/2016 Sb. o spotřebitelském úvěru.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-blue-900 text-center mb-8">
            Co se stane po odeslání žádosti?
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex gap-6 items-start bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl">
                1
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-lg">Okamžité zpracování</h3>
                <p className="text-blue-900/80 text-sm leading-relaxed">
                  Vaše žádost je automaticky odeslána licencovaným poskytovatelům, kteří odpovídají vašemu profilu a
                  požadavkům. Probíhá soft inquiry bez dopadu na úvěrové registry.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl">
                2
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-lg">Vyhodnocení a nabídky</h3>
                <p className="text-blue-900/80 text-sm leading-relaxed">
                  Poskytovatelé vyhodnotí vaši žádost podle interních kritérií (DTI, DSTI, registr BRKI/NRKI) a zašlou
                  vám personalizované nabídky s uvedeným RPSN během 24–48 hodin. Budete kontaktováni přímo
                  poskytovateli.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl">
                3
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-lg">Vyberte a získejte peníze</h3>
                <p className="text-blue-900/80 text-sm leading-relaxed">
                  Porovnejte nabídky podle celkových nákladů, vyberte nejlepší a dokončete proces. Prostředky jsou
                  vyplaceny přímo na váš bankovní účet – banky obvykle do 1 pracovního dne, nebankovní společnosti
                  často i během 30 minut.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regulations & Compliance */}
        <section className="bg-blue-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900 text-center mb-8">
              Regulační ochrana a vaše práva
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-3 text-lg">Zákon č. 257/2016 Sb.</h3>
                <p className="text-sm text-blue-900/80 leading-relaxed">
                  Všichni poskytovatelé musí dodržovat zákon o spotřebitelském úvěru, zveřejnit RPSN a poskytnout
                  předsmluvní informace alespoň 48 hodin před podpisem.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-3 text-lg">Limity DTI a DSTI</h3>
                <p className="text-sm text-blue-900/80 leading-relaxed">
                  Standardně platí limit DTI 8,5 a DSTI 45 %. Pro žadatele do 36 let existují mírnější podmínky
                  podle doporučení ČNB.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-3 text-lg">Právo na odstoupení</h3>
                <p className="text-sm text-blue-900/80 leading-relaxed">
                  Máte právo odstoupit od smlouvy do 14 dnů od jejího podpisu bez udání důvodu a bez jakýchkoli
                  sankcí nebo penále.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-3 text-lg">Ochrana osobních údajů</h3>
                <p className="text-sm text-blue-900/80 leading-relaxed">
                  Vaše data jsou chráněna podle GDPR a zákona č. 110/2019 Sb. Máte právo na přístup, opravu i
                  výmaz svých údajů.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-blue-900 mb-8 text-center">Často kladené otázky</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                question: 'Jak dlouho trvá schválení půjčky v České republice?',
                answer:
                  'Standardně bankovní poskytovatelé rozhodnou do 2 pracovních dnů po doložení všech podkladů. Nebankovní společnosti mohou vyhodnotit žádost během několika hodin, ale detailně kontrolují registry BRKI a NRKI.',
              },
              {
                question: 'Jaké dokumenty potřebuji k žádosti o půjčku?',
                answer:
                  'Standardem je občanský průkaz, potvrzení o příjmu (nebo daňové přiznání pro OSVČ) a výpis z bankovního účtu za poslední 3 měsíce. U konsolidací je třeba doložit stávající smlouvy o úvěrech.',
              },
              {
                question: 'Ovlivní žádost můj úvěrový registr?',
                answer:
                  'Prvotní vyhodnocení probíhá jako soft inquiry a neovlivní váš rating v registrech. Tvrdý dotaz (hard inquiry) proběhne až po vašem souhlasu se konkrétní nabídkou poskytovatele.',
              },
              {
                question: 'Jsou všichni poskytovatelé licencováni Českou národní bankou?',
                answer:
                  'Ano, spolupracujeme pouze s poskytovateli, kteří mají platnou licenci ČNB nebo jsou registrováni jako zprostředkovatelé. Každá nabídka obsahuje odkaz na ověření v registru ČNB.',
              },
              {
                question: 'Jak funguje AI doporučení pro české půjčky?',
                answer:
                  'Model vyhodnocuje RPSN, celkovou přeplacenou částku, dostupnost v jednotlivých krajích, rychlost vyplácení a reputaci poskytovatele. Výsledky jsou seřazeny podle celkových nákladů a transparentnosti podmínek.',
              },
            ].map((item) => (
              <details key={item.question} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-semibold text-blue-900">{item.question}</summary>
                <p className="mt-4 text-sm text-blue-900/80 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Important Information */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-4xl mx-auto bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-6 text-xl">Důležité informace před podáním žádosti:</h3>
              <ul className="space-y-3 text-sm text-blue-900/80">
                <li className="flex gap-3">
                  <span className="text-blue-600 flex-shrink-0">•</span>
                  <span>
                    Podání žádosti nezaručuje schválení úvěru. Konečné rozhodnutí závisí na poskytovateli a vašich
                    finančních parametrech.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 flex-shrink-0">•</span>
                  <span>
                    Vyplnění formuláře neovlivní váš úvěrový rating (soft inquiry). Tvrdý dotaz proběhne až po
                    vašem souhlasu se konkrétní nabídkou.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 flex-shrink-0">•</span>
                  <span>
                    Musíte být starší 18 let, mít trvalé bydliště v České republice a pravidelný příjem (zaměstnání,
                    důchod, OSVČ).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 flex-shrink-0">•</span>
                  <span>
                    Vaše osobní údaje jsou chráněny podle GDPR a zákona č. 110/2019 Sb. o zpracování osobních údajů.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 flex-shrink-0">•</span>
                  <span>
                    Máte právo odstoupit od smlouvy o úvěru do 14 dnů od jejího podpisu, bez udání důvodu a bez
                    sankcí.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 flex-shrink-0">•</span>
                  <span>
                    Jsme lead generátor, nikoli přímý poskytovatel. Sdílíme vaše údaje pouze s licencovanými partnery
                    za účelem zpracování žádosti.
                  </span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-blue-200">
                <p className="text-sm text-blue-900/80 mb-3">
                  <span className="font-semibold">Reprezentativní příklad:</span> Půjčka 350 000 Kč na 84 měsíců,
                  pevná sazba 10,6 % p.a., RPSN 12,1 %, měsíční splátka 5 438 Kč, celkem zaplatíte 456 792 Kč.
                  Individuální podmínky určí poskytovatel podle vaší bonity.
                </p>
                <p className="text-xs text-blue-900/60">
                  Loan AI Portál provozuje společnost Maloni s.r.o., Revoluční 1403/28, 110 00 Praha 1, IČO:
                  XXXXXXXX. Registrace u ČNB jako zprostředkovatel spotřebitelských úvěrů.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="cs" />
    </>
  )
}
