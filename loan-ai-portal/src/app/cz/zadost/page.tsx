import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import { VolsorLoanForm } from '@/components/cz/volsor-loan-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import FAQSchema from '@/components/faq-schema'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import TransparencyBanner from '@/components/compliance/transparency-banner'

const currentYear = new Date().getFullYear()
const canonicalPath = '/cz/zadost'

const applyFaqs = [
  {
    q: 'Jak dlouho trvá proces schválení úvěru?',
    a: 'Naše AI-poháněné hodnocení poskytne předběžné posouzení a kontrolu sazeb během 2 minut pomocí pouze měkkého ověření úvěru, což nemá vliv na vaše skóre. Pokud zvolíte nabídku a dokončíte proces poskytovatele, konečné schválení a výplata mohou následovat krátce poté.',
  },
  {
    q: 'Ovlivní kontrola sazby můj úvěrový rating?',
    a: 'Kontrola sazby spustí pouze měkké ověření úvěru, takže nemá žádný vliv na váš úvěrový rating. Tvrdé ověření probíhá pouze tehdy, když přijmete nabídku a dokončíte úplnou žádost u poskytovatele.',
  },
  {
    q: 'Na co mohu použít půjčku?',
    a: 'Osobní půjčky prostřednictvím naší platformy lze použít na konsolidaci dluhů, rekonstrukci domu, zdravotní výdaje, velké nákupy, svatby, dovolenou nebo téměř jakoukoli osobní finanční potřebu.',
  },
  {
    q: 'Co když mám špatný úvěrový rating?',
    a: 'Spolupracujeme s poskytovateli, kteří pracují s každou úvěrovou kategorií, včetně průměrného a špatného úvěru. Náš AI systém zvýrazňuje poskytovatele, kteří s největší pravděpodobností schválí vaši žádost vzhledem k vašemu úvěrovému profilu.',
  },
  {
    q: 'Jsou nějaké poplatky?',
    a: 'Naše služba párování je zcela zdarma. Jednotliví poskytovatelé mohou účtovat poplatky za zřízení nebo jiné poplatky, které budou vždy zveřejněny před přijetím jakékoli nabídky úvěru.',
  },
]

const breadcrumbItems = [
  { name: 'Domů', url: '/', position: 1 },
  { name: 'Půjčky Česko', url: '/cz', position: 2 },
  { name: 'Požádat o úvěr', url: canonicalPath, position: 3 },
]

export function generateMetadata(): Metadata {
  const title = `Požádat o osobní půjčku v České republice | ${currentYear}`
  const description = 'Zkontrolujte své sazby během 2 minut s naším AI systémem pro porovnání půjček. Porovnejte nabídky od nejlepších poskytovatelů prostřednictvím měkkého ověření úvěru, které nemá vliv na vaše skóre.'

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      locale: 'cs_CZ',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    keywords: [
      'půjčka online',
      'osobní půjčka Česko',
      'rychlá půjčka',
      'AI porovnání půjček',
      'konsolidace dluhů',
      'úvěr bez registru',
    ],
  }
}

export default function CzechApplyPage() {
  return (
    <>
      <FAQSchema faqs={applyFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navigation locale="cs" />
      <main className="flex-1 bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="hero text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Požádejte o osobní půjčku
            </h1>
            <p className="text-xl text-blue-900/80 max-w-3xl mx-auto mb-6">
              Zkontrolujte své sazby během 2 minut s naším AI systémem pro porovnání půjček.
              Porovnejte nabídky od nejlepších poskytovatelů prostřednictvím měkkého ověření úvěru, které nemá vliv na vaše skóre.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-green-600 font-medium mb-8">
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Žádný vliv na úvěrové skóre
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> 2minutové předběžné posouzení
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Peníze do 24 hodin
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> 10 000 - 500 000 Kč
              </span>
            </div>
          </section>

          <TransparencyBanner />

          {/* Application Form Section */}
          <section className="application-form-section max-w-4xl mx-auto mb-12" aria-labelledby="application-form-heading">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 id="application-form-heading" className="text-2xl font-bold text-center mb-6 text-blue-800">
                Dokončete svou žádost o půjčku
              </h2>
              <div className="mb-6">
                <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                  <span>Průběh žádosti</span>
                  <span>Krok 1 z 3</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
                </div>
              </div>
              <LeadGenDisclosure locale="cs" className="mb-4 text-center" />
              <VolsorLoanForm
                product="personal"
                country="cs"
                affiliate={9000}
                campaign="cz-apply-page"
                partnerName="Volsor"
                sponsoredLabel="Sponzorovaný partner"
                theme="old_styled"
              />
            </div>
          </section>

          {/* Why Apply With Us Section */}
          <section className="benefits mb-12" aria-labelledby="benefits-heading">
            <h2 id="benefits-heading" className="text-3xl font-bold text-center mb-8 text-blue-800">
              Proč požádat o úvěr přes Loan AI Portál?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center border-blue-100 shadow-sm">
                <CardHeader>
                  <div className="text-4xl mb-2">⚡</div>
                  <CardTitle className="text-blue-900">Bleskově rychlé</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-900/80">
                    Získejte 2minutové předběžné posouzení a kontrolu sazeb s naší pokročilou AI technologií.
                    Žádná zdlouhavá administrativa, žádný vliv na vaše úvěrové skóre.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-blue-100 shadow-sm">
                <CardHeader>
                  <div className="text-4xl mb-2">🎯</div>
                  <CardTitle className="text-blue-900">Chytré párování</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-900/80">
                    Naše AI analyzuje váš profil a spojí vás s poskytovateli,
                    kteří s největší pravděpodobností schválí vaši žádost.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-blue-100 shadow-sm">
                <CardHeader>
                  <div className="text-4xl mb-2">🔒</div>
                  <CardTitle className="text-blue-900">Bankovní zabezpečení</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-900/80">
                    Vaše osobní a finanční informace jsou chráněny 256bitovým SSL šifrováním
                    a pokročilými bezpečnostními opatřeními.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-blue-100 shadow-sm">
                <CardHeader>
                  <div className="text-4xl mb-2">💰</div>
                  <CardTitle className="text-blue-900">Konkurenční sazby</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-900/80">
                    Přístup k sazbám již od 5,99% RPSN od naší sítě důvěryhodných
                    poskytovatelů licencovaných ČNB.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-blue-100 shadow-sm">
                <CardHeader>
                  <div className="text-4xl mb-2">📞</div>
                  <CardTitle className="text-blue-900">Nepřetržitá podpora</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-900/80">
                    Získejte pomoc kdykoli ji potřebujete s naším nepřetržitým
                    týmem zákaznické podpory.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-blue-100 shadow-sm">
                <CardHeader>
                  <div className="text-4xl mb-2">✅</div>
                  <CardTitle className="text-blue-900">Bez skrytých poplatků</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-900/80">
                    Transparentní ceny bez poplatků za zřízení, předčasné splacení
                    nebo skrytých nákladů.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Loan Details Section */}
          <section className="loan-details mb-12" aria-labelledby="loan-details-heading">
            <h2 id="loan-details-heading" className="text-3xl font-bold text-center mb-8 text-blue-800">
              Podrobnosti o půjčce a požadavky
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Částky a podmínky půjček</h3>
                <ul className="space-y-2 text-blue-900/80">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Výše půjčky: 10 000 - 500 000 Kč
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Doba splatnosti: 6 měsíců - 7 let
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Rozsah RPSN: 5,99% - 35,99%
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Pevné měsíční splátky
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Bez sankcí za předčasné splacení
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                <h3 className="text-xl font-semibold mb-4 text-green-900">Základní požadavky</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Věk 18 let nebo starší
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Občan ČR nebo trvalý pobyt
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Platný bankovní účet
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Stálý zdroj příjmu
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Všechny typy úvěrů vítány
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="faq mb-12" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-3xl font-bold text-center mb-8 text-blue-800">
              Často kladené otázky
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {applyFaqs.map((faq) => (
                <details key={faq.q} className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
                  <summary className="font-semibold cursor-pointer text-lg text-blue-900">
                    {faq.q}
                  </summary>
                  <p className="mt-4 text-blue-900/80">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Security & Trust Section */}
          <section className="security mb-12 bg-white p-8 rounded-lg border border-blue-100 shadow-sm">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">Vaše bezpečnost je naší prioritou</h2>
              <p className="text-blue-900/80 mb-6">
                Používáme bezpečnostní opatření na úrovni bank k ochraně vašich osobních a finančních
                informací během celého procesu podání žádosti.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-900/80">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔐</span>
                  <span>256bitové SSL šifrování</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏛️</span>
                  <span>Bankovní zabezpečení</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  <span>Bezpečné ukládání dat</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span>Ochrana soukromí</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer locale="cs" />
    </>
  )
}
