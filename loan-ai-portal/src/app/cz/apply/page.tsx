import StructuredData from '@/components/structured-data'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { applySEOCs, generatePageMetadata } from '@/lib/seo'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import FAQSchema from '@/components/faq-schema'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { VolsorLoanForm } from '@/components/cz/volsor-loan-form'

export const metadata = generatePageMetadata(applySEOCs, '/cz/apply')

const czechFaqs = [
  {
    q: 'Jak dlouho trvá proces schválení žádosti?',
    a: 'Vyplnění formuláře zabere přibližně 2 minuty. Díky našemu AI systému získáte nezávazné posouzení okamžitě. Pokud se rozhodnete pokračovat s některým z nabízených poskytovatelů, finanční prostředky mohou být vyplaceny do 24-48 hodin od finálního schválení.',
  },
  {
    q: 'Ovlivní ověření mé nabídky můj úvěrový skór?',
    a: 'Ne. Předběžné posouzení používá měkký dotaz (soft inquiry), který nemá vliv na váš úvěrový rating. Dotaz do registrů BRKI/NRKI proběhne pouze v případě, že přijmete konkrétní nabídku a podepíšete smlouvu s poskytovatelem.',
  },
  {
    q: 'K jakým účelům mohu půjčku využít?',
    a: 'Osobní půjčky můžete použít na konsolidaci stávajících úvěrů, rekonstrukci nemovitosti, nákup vozidla, vybavení domácnosti, vzdělání, zdravotní výdaje, svatbu nebo téměř jakýkoliv osobní finanční cíl.',
  },
  {
    q: 'Co když mám negativní záznam v registrech?',
    a: 'Spolupracujeme s poskytovateli, kteří akceptují žadatele s různou úvěrovou historií včetně negativních záznamů. Náš AI systém analyzuje vaši situaci a doporučí poskytovatele s nejvyšší pravděpodobností schválení.',
  },
  {
    q: 'Jsou účtovány nějaké poplatky?',
    a: 'Naše služba porovnání a AI doporučení je zcela zdarma. Jednotliví poskytovatelé mohou účtovat poplatky za vyřízení, vedení úvěru nebo předčasné splacení - tyto budou vždy transparentně uvedeny v nabídce před podpisem smlouvy.',
  },
  {
    q: 'Jsou poskytovatelé registrováni u ČNB?',
    a: 'Ano, všichni naši partneři jsou buď banky s licencí ČNB, nebo nebankovní poskytovatelé registrovaní v seznamu ČNB podle zákona č. 257/2016 Sb. o spotřebitelském úvěru.',
  },
]

const breadcrumbItems = [
  { name: 'Domů', url: '/', position: 1 },
  { name: 'Půjčky Česko', url: '/cz', position: 2 },
  { name: 'Žádost o půjčku', url: '/cz/apply', position: 3 },
]

export default function CzechApplyPage() {
  return (
    <>
      <StructuredData data={applySEOCs.structuredData} />
      <FAQSchema faqs={czechFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navigation locale="cs" />
      <main className="flex-1 bg-slate-50">
        {/* Hero Section */}
        <header className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-3">
                Česká republika • Žádost o úvěr
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                Požádejte o osobní půjčku online
              </h1>
              <p className="text-xl text-blue-900/80 max-w-3xl mx-auto mb-6">
                Vyplňte bezpečný formulář a získejte okamžité AI doporučení licencovaných poskytovatelů. 
                Srovnání RPSN, transparentní podmínky a rychlé vyřízení prostředků.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-green-700 font-medium mb-6">
                <span className="flex items-center gap-1">
                  <span className="text-green-600">✓</span> Bez negativního dopadu na úvěrový rating
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-green-600">✓</span> AI posouzení za 2 minuty
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-green-600">✓</span> Peníze na účtu do 24-48 hodin
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-green-600">✓</span> 5 000 Kč - 500 000 Kč
                </span>
              </div>
              <LeadGenDisclosure locale="cs" className="mt-4 text-blue-900/70" />
            </div>
          </div>
        </header>

        {/* Application Form Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
                  Online žádost o půjčku
                </h2>
                <p className="text-center text-blue-900/80 mb-8">
                  Formulář běží na zabezpečené platformě našeho partnera Volsor. 
                  Po odeslání získáte orientační rozhodnutí a AI doporučí nejvhodnější nabídky podle RPSN a celkového přeplacení.
                </p>
                <div className="mb-6">
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                    <span>Průběh žádosti</span>
                    <span>Krok 1 z 3</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
                  </div>
                </div>
                
                {/* Volsor Loan Form with Czech configuration */}
                <VolsorLoanForm 
                  className="mt-6"
                  product="personal"
                  country="cs"
                  affiliate={9100}
                  theme="old_styled"
                  campaign="cz-apply-page"
                  partnerName="Volsor"
                  sponsoredLabel="Registrovaný partner ČNB"
                />

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-900/70 leading-relaxed">
                    <strong>Zabezpečení:</strong> Všechna data jsou přenášena šifrovaně. 
                    Společnost Volsor s.r.o. (IČO 29136288) je registrovaným poskytovatelem u České národní banky 
                    a dodržuje zákon č. 257/2016 Sb. o spotřebitelském úvěru.
                  </p>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="border-blue-100 shadow-sm">
                  <CardHeader>
                    <div className="text-4xl mb-2" aria-hidden="true">⚡</div>
                    <CardTitle className="text-blue-900">Rychlé vyřízení</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-900/80">
                    <p>
                      Získejte nezávazné posouzení za 2 minuty díky našemu pokročilému AI systému. 
                      Žádná zdlouhavá administrativa, bez vlivu na úvěrový rating.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-100 shadow-sm">
                  <CardHeader>
                    <div className="text-4xl mb-2" aria-hidden="true">🎯</div>
                    <CardTitle className="text-blue-900">AI párování</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-900/80">
                    <p>
                      Náš AI algoritmus analyzuje váš profil a najde poskytovatele s nejvyšší 
                      pravděpodobností schválení podle RPSN a podmínek.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-100 shadow-sm">
                  <CardHeader>
                    <div className="text-4xl mb-2" aria-hidden="true">🔒</div>
                    <CardTitle className="text-blue-900">Bankovní zabezpečení</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-900/80">
                    <p>
                      Vaše osobní a finanční údaje jsou chráněny 256-bitovým SSL šifrováním 
                      a pokročilými bezpečnostními opatřeními.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-100 shadow-sm">
                  <CardHeader>
                    <div className="text-4xl mb-2" aria-hidden="true">💰</div>
                    <CardTitle className="text-blue-900">Konkurenční sazby</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-900/80">
                    <p>
                      Přístup k sazbám RPSN od 5,9 % p.a. od naší sítě důvěryhodných 
                      poskytovatelů registrovaných u ČNB.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-100 shadow-sm">
                  <CardHeader>
                    <div className="text-4xl mb-2" aria-hidden="true">📞</div>
                    <CardTitle className="text-blue-900">Podpora 24/7</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-900/80">
                    <p>
                      Získejte pomoc kdykoli ji potřebujete díky našemu nepřetržitému 
                      zákaznickému týmu. Volejte na +420 255 790 777.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-100 shadow-sm">
                  <CardHeader>
                    <div className="text-4xl mb-2" aria-hidden="true">✅</div>
                    <CardTitle className="text-blue-900">Transparentní podmínky</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-900/80">
                    <p>
                      Vždy zobrazíme reprezentativní příklad s RPSN, měsíční splátkou 
                      a celkovou zaplacené částkou. Bez skrytých poplatků.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Details Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
                Parametry půjček a požadavky
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">Výše půjček a splatnost</h3>
                  <ul className="space-y-2 text-blue-900/80">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">•</span> Výše půjčky: 5 000 Kč - 500 000 Kč
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">•</span> Doba splatnosti: 6 měsíců - 7 let
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">•</span> RPSN rozmezí: 5,9% - 49,9% p.a.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">•</span> Fixní měsíční splátky
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">•</span> Možnost předčasného splacení
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-900">Základní požadavky</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">•</span> Věk 18 let nebo více
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">•</span> Občan ČR nebo trvalý pobyt
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">•</span> Platný bankovní účet
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">•</span> Pravidelný příjem (zaměstnanec/OSVČ)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">•</span> Přijímáme všechny typy úvěrové historie
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
                Nejčastější dotazy
              </h2>
              <div className="space-y-4">
                {czechFaqs.map((faq) => (
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
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="bg-blue-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Vaše bezpečnost je naší prioritou</h2>
              <p className="text-blue-100 mb-6">
                Používáme pokročilá bezpečnostní opatření na úrovni bank k ochraně vašich osobních 
                a finančních údajů během celého procesu žádosti.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔐</span>
                  <span>256-bit SSL šifrování</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏛️</span>
                  <span>Bezpečnost bankovní úrovně</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  <span>Zabezpečené úložiště dat</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span>Chráněné soukromí (GDPR)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">
                Regulační rámec a compliance
              </h2>
              <div className="bg-blue-50 rounded-lg p-6 text-sm text-blue-900/80">
                <p className="mb-3">
                  <strong>Zákon č. 257/2016 Sb. o spotřebitelském úvěru:</strong> Všichni naši partneři 
                  dodržují české legislativní požadavky včetně povinnosti poskytovat reprezentativní příklad 
                  s uvedením RPSN, celkové zaplacené částky a všech poplatků před podpisem smlouvy.
                </p>
                <p className="mb-3">
                  <strong>Registr poskytovatelů ČNB:</strong> Naši partneři jsou buď banky s licencí ČNB, 
                  nebo nebankovní společnosti registrované v seznamu poskytovatelů spotřebitelského úvěru 
                  vedeném Českou národní bankou.
                </p>
                <p>
                  <strong>Ochrana osobních údajů:</strong> Zpracování vašich osobních údajů probíhá 
                  v souladu s GDPR (nařízení EU 2016/679) a zákonem č. 110/2019 Sb. o zpracování osobních údajů.
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
