import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Půjčky v Nechanice, Královéhradecký kraj – Porovnání 2025',
  description: 'Hledáte půjčku v Nechanice? Porovnejte nabídky bank a nebankovních společností. Rychlé schválení, transparentní podmínky. Zjistěte více.',
}

export default function NechanicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-6 text-sm">
        <Link href="/cz" className="text-blue-600 hover:underline">
          Domů
        </Link>
        {' > '}
        <Link href="/cz/kralovehradecky-kraj" className="text-blue-600 hover:underline">
          Královéhradecký kraj
        </Link>
        {' > '}
        <span className="text-gray-600">Nechanice</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Půjčky v Nechanice, Královéhradecký kraj
        </h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Potřebujete rychlou půjčku v Nechanice? Nabízíme komplexní přehled možností 
            půjčování v Královéhradeckém kraji. Ať už zvažujete spotřebitelský úvěr na 
            rekonstrukci, konsolidaci dluhů, nebo potřebujete rychlou nebankovní půjčku 
            na nečekané výdaje, najdete zde relevantní informace a transparentní srovnání.
          </p>
          <p className="text-gray-700">
            Všichni poskytovatelé půjček v České republice podléhají regulaci a dohledu 
            České národní banky (ČNB). Typické rozmezí RPSN se pohybuje od 5 % u bankovních 
            úvěrů až po 20 % u některých nebankovních rychlých půjček. Před podpisem smlouvy 
            si vždy důkladně prostudujte všechny podmínky a porovnejte nabídky více poskytovatelů.
          </p>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nabídka půjček v Nechanice
        </h2>
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
              <p className="text-gray-700 mb-4">
                <strong>Partnerská nabídka půjček</strong>
              </p>
              <p className="text-sm text-gray-600">
                Zde by byl integrován iframe s nabídkami důvěryhodných poskytovatelů 
                půjček dostupných v Nechanice a okolí.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Regulace půjček v České republice
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Dohled ČNB:</strong> Všichni poskytovatelé musí být registrováni 
                  u České národní banky.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Zákon o spotřebitelském úvěru:</strong> Zákon č. 257/2016 Sb. 
                  upravuje podmínky poskytování úvěrů.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Právo na odstoupení:</strong> 14denní lhůta bez udání důvodu 
                  a bez sankce.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Transparentnost podmínek:</strong> Povinnost jasně uvést RPSN, 
                  poplatky a úrokové sazby.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Ochrana dlužníků:</strong> Zákaz nekalých praktik a zajištění 
                  spravedlivého zacházení.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Často kladené otázky
        </h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Jaké dokumenty potřebuji pro žádost o půjčku v Nechanice?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Obvykle potřebujete platný občanský průkaz nebo pas, doklad o příjmu 
                (výplatní páska, daňové přiznání), potvrzení o bydlišti a bankovní výpis. 
                Konkrétní požadavky se liší podle poskytovatele a typu půjčky.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Jak rychle mohu získat peníze?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Nebankovní společnosti často vyplatí prostředky do 24 hodin od schválení. 
                Banky obvykle potřebují 2-5 pracovních dnů. Online žádosti jsou zpracovávány 
                rychleji než návštěvy poboček.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Mohu splatit půjčku předčasně?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Ano, podle zákona máte právo na předčasné splacení půjčky. Poskytovatel 
                může účtovat poplatek maximálně 1 % (při splatnosti delší než 1 rok) nebo 
                0,5 % (při splatnosti do 1 roku) z předčasně splacené částky.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Jaké jsou alternativy k půjčce v Nechanice?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Zvažte spořicí účet, kreditní kartu s bezúročným obdobím, pomoc rodiny 
                nebo přátel, nebo finanční poradenství. Půjčka by měla být poslední volbou 
                po vyčerpání jiných možností.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Půjčky ve vašem okolí
        </h2>
        <p className="text-gray-700 mb-4">
          Prozkoumejte možnosti půjček v sousedních městech:
        </p>
        <div className="flex flex-wrap gap-4">
          {[
            <Link 
              key="hradec-kralove" 
              href="/cz/kralovehradecky-kraj/hradec-kralove"
              className="text-blue-600 hover:underline"
            >
              Hradec Králové
            </Link>,
            <Link 
              key="jaromer" 
              href="/cz/kralovehradecky-kraj/jaromer"
              className="text-blue-600 hover:underline"
            >
              Jaroměř
            </Link>,
            <Link 
              key="novy-bydzov" 
              href="/cz/kralovehradecky-kraj/novy-bydzov"
              className="text-blue-600 hover:underline"
            >
              Nový Bydžov
            </Link>
          ].filter(Boolean)}
        </div>
      </section>

      <section className="bg-gray-100 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Důležité informace pro spotřebitele
        </h2>
        <div className="text-sm text-gray-700 space-y-3">
          <p>
            <strong>Partnerské odkazy:</strong> Tato stránka může obsahovat odkazy na 
            produkty našich partnerů. Můžeme obdržet provizi za zprostředkování, což 
            však neovlivňuje vaše náklady ani naše objektivní doporučení.
          </p>
          <p>
            <strong>Reprezentativní příklad:</strong> Půjčka 50 000 Kč na 24 měsíců, 
            RPSN 15,5 %, úroková sazba 12 % p.a., měsíční splátka 2 432 Kč, celková 
            částka k vrácení 58 368 Kč. Skutečné podmínky závisí na poskytovateli 
            a vaší úvěrové historii.
          </p>
          <p>
            <strong>Upozornění:</strong> Půjčka je závazek, který musíte splácet. 
            Před podpisem smlouvy pečlivě zvažte svou finanční situaci a schopnost 
            splácet. Vždy si přečtěte všechny podmínky a porovnejte více nabídek.
          </p>
          <p>
            <strong>Ochrana spotřebitele:</strong> V případě problémů kontaktujte 
            Českou obchodní inspekci nebo Finanční arbitr. Pro více informací 
            navštivte web České národní banky.
          </p>
        </div>
      </section>

      <footer className="border-t pt-6">
        <div className="text-center">
          <Link 
            href="/cz/kralovehradecky-kraj" 
            className="text-blue-600 hover:underline"
          >
            ← Zpět na Královéhradecký kraj
          </Link>
        </div>
      </footer>
    </div>
  )
}
