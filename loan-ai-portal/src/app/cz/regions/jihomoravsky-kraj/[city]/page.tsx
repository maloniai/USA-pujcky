import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCity, getNearbyCities, jihomoravskyKrajCities } from '@/data/czech-cities'

interface CityPageProps {
  params: {
    city: string
  }
}

export async function generateStaticParams() {
  return jihomoravskyKrajCities.map((city) => ({
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: CityPageProps) {
  const city = getCity(params.city)
  if (!city) return {}

  const currentYear = new Date().getFullYear()
  
  return {
    title: `Půjčky v ${city.name}, ${city.region} – Porovnejte ${currentYear}`,
    description: `Najděte nejlepší půjčky v ${city.name}. Porovnejte nabídky, zjistěte lokální regulace a získejte rychlé schválení. Informace pro ${currentYear}.`,
  }
}

export default function CityPage({ params }: CityPageProps) {
  const city = getCity(params.city)
  
  if (!city) {
    notFound()
  }

  const nearbyCities = getNearbyCities(params.city)
  const currentYear = new Date().getFullYear()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/cz/regions/jihomoravsky-kraj" className="text-blue-600 hover:underline">
          ← Zpět na Jihomoravský kraj
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6">Půjčky v {city.name}, {city.region}</h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          {city.name} je součástí {city.region}u, jednoho z nejvýznamnějších regionů České republiky. 
          Obyvatelé {city.name} mají přístup k širokému spektru finančních produktů, včetně spotřebitelských 
          úvěrů, konsolidačních půjček a krátkodobých půjček. Všechny půjčky jsou regulovány Českou národní 
          bankou (ČNB), která zajišťuje transparentnost a ochranu spotřebitelů.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Typické úrokové sazby pro půjčky v {city.name} se pohybují od 5% do 20% RPSN v závislosti na 
          výši půjčky, délce splatnosti a bonitě žadatele. Poskytovatelé půjček jsou povinni jasně 
          komunikovat všechny náklady před podpisem smlouvy. Doporučujeme vždy pečlivě porovnat nabídky 
          od více poskytovatelů a přečíst si podmínky smlouvy.
        </p>
      </div>

      <div className="bg-white border rounded-lg p-6 mb-8 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Nabídky Půjček pro {city.name}</h2>
        <div className="bg-gray-100 p-8 rounded text-center">
          <p className="text-gray-600 mb-4">
            Zde se zobrazí iframe s nabídkami od důvěryhodných partnerů pro region {city.name}
          </p>
          <p className="text-sm text-gray-500">
            [Iframe s nabídkami půjček - integrace bude doplněna]
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Lokální Regulace a Ochrana</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Maximální úroková sazba je omezena zákonem č. 257/2016 Sb. o spotřebitelském úvěru</li>
          <li>Poskytovatelé musí mít registraci u ČNB – ověřte si licenci před podpisem smlouvy</li>
          <li>Povinné uvedení RPSN (Roční procentní sazba nákladů) ve všech nabídkách</li>
          <li>14denní lhůta pro odstoupení od smlouvy bez udání důvodu</li>
          <li>Ochrana před predátorskými praktikami – poplatky jsou regulovány zákonem</li>
          <li>Právo na předčasné splatení úvěru s přiměřeným snížením úroků</li>
          <li>Ochrana osobních údajů v souladu s GDPR</li>
          <li>Možnost obrátit se na finančního arbitra při sporech</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Často Kladené Otázky</h2>
        <div className="space-y-4">
          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-2">
              Jaké jsou požadavky na získání půjčky v {city.name}?
            </h3>
            <p className="text-gray-700">
              Pro získání půjčky v {city.name} obvykle potřebujete být starší 18 let, mít trvalý pobyt 
              v ČR, pravidelný příjem a bankovní účet. Konkrétní požadavky se mohou lišit podle 
              poskytovatele a typu půjčky. Většina poskytovatelů také ověřuje vaši úvěrovou historii 
              prostřednictvím bankovních a nebankovních registrů.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-2">
              Jak dlouho trvá schválení půjčky v {city.name}?
            </h3>
            <p className="text-gray-700">
              Doba schválení závisí na typu půjčky a poskytovateli. Online půjčky mohou být schváleny 
              během několika minut až hodin. Bankovní úvěry obvykle trvají 2-5 pracovních dnů. 
              Vždy záleží na kompletnosti podkladů a výsledku úvěrového hodnocení.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-2">
              Mohu získat půjčku v {city.name} i s negativním záznamem v registru?
            </h3>
            <p className="text-gray-700">
              Záleží na typu a závažnosti záznamu. Někteří poskytovatelé nabízejí půjčky i klientům 
              s negativní historií, ale obvykle za vyšší úrokovou sazbu. Doporučujeme nejprve vyřešit 
              stávající závazky a pak žádat o novou půjčku za výhodnějších podmínek.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-2">
              Jaké jsou typické úrokové sazby pro půjčky v České republice?
            </h3>
            <p className="text-gray-700">
              RPSN se v ČR typicky pohybuje mezi 5% až 30% v závislosti na typu produktu, výši půjčky 
              a době splatnosti. Bankovní úvěry mají obvykle nižší sazby (5-15% RPSN), zatímco 
              nebankovní půjčky mohou mít sazby vyšší (15-30% RPSN). Vždy porovnávejte RPSN, nikoli 
              pouze nominální úrokovou sazbu.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-2">
              Kde si mohu stěžovat na poskytovatele půjčky v {city.name}?
            </h3>
            <p className="text-gray-700">
              Pokud máte problém s poskytovatelem, nejprve kontaktujte jeho zákaznický servis. 
              Pokud to nepomůže, můžete podat stížnost České národní bance (ČNB) nebo se obrátit 
              na finančního arbitra pro mimosoudní řešení sporu. V krajních případech je možné 
              podat žalobu u soudu.
            </p>
          </div>
        </div>
      </div>

      {nearbyCities.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Půjčky v Okolních Městech</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {nearbyCities.map((nearbyCity) => (
              <Link 
                key={nearbyCity.slug} 
                href={`/cz/regions/jihomoravsky-kraj/${nearbyCity.slug}`}
                className="p-4 border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors bg-white"
              >
                <h3 className="font-semibold text-gray-900">Půjčky v {nearbyCity.name}</h3>
                <p className="text-sm text-blue-600 mt-1">Zobrazit nabídky →</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
        <h3 className="font-semibold mb-2">Důležité Informace</h3>
        <p className="text-sm text-gray-700 mb-3">
          <strong>Affiliate upozornění:</strong> Tyto stránky obsahují affiliate odkazy. Pokud 
          uzavřete smlouvu prostřednictvím našich partnerů, můžeme obdržet provizi. To nemá vliv 
          na cenu, kterou zaplatíte, ani na nezávislost našich informací.
        </p>
        <p className="text-sm text-gray-700">
          <strong>Reprezentativní příklad:</strong> Půjčka 30 000 Kč na 12 měsíců, RPSN 18,5%, 
          celková částka k zaplacení 33 330 Kč, měsíční splátka 2 778 Kč. Konkrétní podmínky 
          závisí na vaší bonitě a zvoleném poskytovateli.
        </p>
        <p className="text-sm text-gray-700 mt-2">
          <strong>Upozornění:</strong> Půjčujte si odpovědně. Nezapomeňte, že půjčka je závazek, 
          který musíte splácet včas. Před podpisem smlouvy si pečlivě přečtěte všechny podmínky.
        </p>
      </div>
    </div>
  )
}
