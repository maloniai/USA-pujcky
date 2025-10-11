import Link from 'next/link'
import { cities } from '@/data/moravskoslezsky-kraj-cities'

const cityData = cities.find(c => c.slug === 'studenka')!

export const metadata = {
  title: `Půjčky v ${cityData.name}, Moravskoslezský kraj – Porovnejte 2025`,
  description: `Hledáte půjčku v ${cityData.name}? Porovnejte nabídky od licencovaných poskytovatelů. Rychlé schválení díky AI technologii. RPSN od 5% p.a.`,
}

export default function CityPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm">
        <Link href="/cz" className="text-blue-600 hover:underline">Domů</Link>
        {' > '}
        <Link href="/cz/moravskoslezsky-kraj" className="text-blue-600 hover:underline">
          Moravskoslezský kraj
        </Link>
        {' > '}
        <span className="text-gray-600">{cityData.name}</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Půjčky v {cityData.name}, Moravskoslezský kraj
      </h1>

      {/* Intro Section (80-120 words) */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="text-gray-700 leading-relaxed">
          {cityData.intro}
        </p>
      </div>

      {/* Offer Iframe Placeholder */}
      <div className="bg-gray-100 p-8 rounded-lg mb-8 border-2 border-dashed border-gray-300">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-3">Nabídky Půjček</h2>
          <p className="text-gray-600 mb-4">
            Zde bude umístěn iframe s nabídkami od partnerských poskytovatelů.
          </p>
          <div className="bg-white p-6 rounded">
            <p className="text-sm text-gray-500">[Partner Feed Iframe Placeholder]</p>
          </div>
        </div>
      </div>

      {/* Local Regulations */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Regulace Půjček v České Republice</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Maximální RPSN (Roční Procentní Sazba Nákladů) je regulována ČNB</li>
          <li>Všichni poskytovatelé musí mít licenci od České národní banky</li>
          <li>Povinné poskytnutí předsmluvních informací spotřebiteli</li>
          <li>14denní lhůta pro odstoupení od smlouvy bez udání důvodu</li>
          <li>Maximální výše poplatků za vedení úvěru je regulována zákonem</li>
          <li>Ochrana osobních údajů podle GDPR a českých zákonů</li>
          <li>Transparentní smluvní podmínky v českém jazyce</li>
          <li>Právo na předčasné splacení bez sankčních poplatků</li>
        </ul>
        <div className="mt-4">
          <a 
            href="https://www.cnb.cz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Česká národní banka (ČNB) - oficiální regulátor →
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-6">Často Kladené Otázky</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Jaké dokumenty potřebuji k získání půjčky v {cityData.name}?
            </h3>
            <p className="text-gray-700">
              Obvykle potřebujete občanský průkaz, doklad o příjmu (výplatní pásky, potvrzení 
              o důchodu) a číslo bankovního účtu. Některé online platformy mohou požadovat i 
              ověření identity prostřednictvím bankovní identity nebo datové schránky.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Jak dlouho trvá schválení půjčky?
            </h3>
            <p className="text-gray-700">
              Díky naší AI technologii můžete získat předběžné schválení během několika minut. 
              Kompletní vyřízení včetně výplaty obvykle trvá 1-3 pracovní dny, některé online 
              půjčky mohou být vyplaceny i během několika hodin.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Mohu získat půjčku i s negativní historií?
            </h3>
            <p className="text-gray-700">
              Záleží na konkrétním poskytovateli. Někteří poskytovatelé nabízejí půjčky i pro 
              klienty s historií v registrech, obvykle však za vyšší úrokovou sazbu. Naše AI 
              platforma najde poskytovatele, kteří mají nejvyšší pravděpodobnost schválení vaší 
              žádosti.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Jsou úrokové sazby v {cityData.name} nižší než jinde?
            </h3>
            <p className="text-gray-700">
              Úrokové sazby jsou obecně stejné v celé České republice a závisí především na 
              poskytovateli, typu půjčky a vaší bonitě. V Moravskoslezském kraji je silná 
              konkurence mezi poskytovateli, což může vést k výhodnějším nabídkám.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Mohu půjčku splatit předčasně?
            </h3>
            <p className="text-gray-700">
              Ano, podle českého zákona máte právo na předčasné splacení bez sankčních poplatků. 
              Poskytovatel vám musí vrátit poměrnou část úroků za zbývající období. Doporučujeme 
              si předčasné splacení vždy předem projednat s poskytovatelem.
            </p>
          </div>
        </div>
      </div>

      {/* Internal Links */}
      <div className="mb-8">
        <div className="mb-6">
          <Link 
            href="/cz/moravskoslezsky-kraj" 
            className="text-blue-600 hover:underline text-lg font-semibold"
          >
            ← Zpět na Půjčky v Moravskoslezském kraji
          </Link>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Půjčky ve Vašem Okolí</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {cityData.nearbyCities.slice(0, 3).map((nearbyCity) => {
              const nearby = cities.find(c => c.name === nearbyCity)
              if (!nearby) return null
              return (
                <Link
                  key={nearby.slug}
                  href={`/cz/moravskoslezsky-kraj/${nearby.slug}`}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-white"
                >
                  <h3 className="font-semibold text-blue-600">{nearby.name}</h3>
                  <p className="text-sm text-gray-600">Půjčky v {nearby.name}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Disclosure Block */}
      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 text-sm">
        <h3 className="font-semibold mb-3">Důležité Upozornění a Prohlášení</h3>
        
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>Affiliate Prohlášení:</strong> Tento portál může obsahovat odkazy na 
            partnery, za které můžeme obdržet provizi při uzavření smlouvy. To nijak 
            neovlivňuje naše doporučení ani ceny, které platíte. Všechny nabídky jsou 
            nezávislé, transparentní a pocházejí výhradně od licencovaných poskytovatelů 
            regulovaných Českou národní bankou.
          </p>
          
          <p>
            <strong>Reprezentativní příklad:</strong> Při půjčce 20 000 Kč na 12 měsíců 
            s úrokovou sazbou 15% p.a. zaplatíte celkem 21 658 Kč, což znamená měsíční 
            splátku 1 805 Kč. RPSN (Roční Procentní Sazba Nákladů) 16,08%. Skutečné 
            podmínky se mohou lišit podle poskytovatele a vaší bonity. Před podpisem 
            smlouvy si vždy pečlivě prostudujte všechny podmínky.
          </p>
          
          <p>
            <strong>Varování:</strong> Půjčky jsou závazkem, který musíte splácet. Před 
            uzavřením smlouvy si ověřte, že budete schopni půjčku řádně splácet. Nesplácení 
            může vést k dodatečným poplatkům a negativnímu zápisu v úvěrových registrech.
          </p>
        </div>
      </div>
    </div>
  )
}
