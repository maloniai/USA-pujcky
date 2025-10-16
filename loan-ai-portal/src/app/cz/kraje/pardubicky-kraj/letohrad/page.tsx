import Link from 'next/link'

export const metadata = {
  title: 'Půjčky v Letohrad, Pardubický kraj – Porovnejte 2025',
  description: 'Najděte nejlepší půjčky v Letohrad. Srovnání nabídek od licencovaných poskytovatelů, místní regulace a rychlé schválení online.',
}

export default function letohradPage() {
  const nearbyCities = [
    { name: 'Lanškroun', slug: 'lanskroun' },
    { name: 'Žamberk', slug: 'zamberk' },
    { name: 'Ústí nad Orlicí', slug: 'usti-nad-orlici' },
    { name: 'Jablonné nad Orlicí', slug: 'jablonne-nad-orlici' },  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Link href="/cz/kraje/pardubicky-kraj" className="text-blue-600 hover:underline inline-block">
          ← Zpět na Pardubický kraj
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6">Půjčky v Letohrad, Pardubický kraj</h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          Letohrad nabízí obyvatelům různé možnosti půjček od licencovaných poskytovatelů. 
          Ať už hledáte rychlou spotřebitelskou půjčku, refinancování stávajícího úvěru, 
          nebo dlouhodobější financování, v Letohrad najdete konkurenceschopné nabídky. 
          Většina poskytovatelů nabízí online žádosti s rychlým vyřízením během 24-72 hodin. 
          Typické úrokové sazby se pohybují mezi 6-18% RPSN v závislosti na typu půjčky a 
          vaší bonitě. Všichni poskytovatelé musí být licencováni Českou národní bankou a 
          dodržovat příslušné regulace na ochranu spotřebitele.
        </p>
      </div>

      <div className="bg-white border rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Nabídky Půjček v Letohrad</h2>
        <div className="bg-gray-100 p-4 rounded text-center">
          <p className="text-gray-600 mb-2">Srovnávací nástroj půjček</p>
          <div className="aspect-video bg-white rounded flex items-center justify-center">
            <p className="text-gray-400">[Zde bude iframe s nabídkami partnerů]</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Místní Regulace a Ochrana Spotřebitele</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 font-bold">•</span>
            <span>Maximální RPSN pro spotřebitelské půjčky je regulována zákonem č. 257/2016 Sb.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 font-bold">•</span>
            <span>Všichni poskytovatelé musí být licencováni Českou národní bankou (ČNB)</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 font-bold">•</span>
            <span>Právo na odstoupení od smlouvy do 14 dnů bez udání důvodu</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 font-bold">•</span>
            <span>Ochrana osobních údajů podle GDPR a zákona o ochraně osobních údajů</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 font-bold">•</span>
            <span>Možnost předčasného splacení s přepočtem úroků</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 font-bold">•</span>
            <span>Povinné poskytnutí standardizovaných informací před uzavřením smlouvy</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 font-bold">•</span>
            <span>Ochrana proti nekalým obchodním praktikám podle občanského zákoníku</span>
          </li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-6">Často Kladené Otázky</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Jaké dokumenty potřebuji pro žádost o půjčku v Letohrad?
            </h3>
            <p className="text-gray-700">
              Pro standardní spotřebitelskou půjčku budete obvykle potřebovat platný občanský 
              průkaz, doklad o příjmu (výplatní páska, daňové přiznání), a potvrzení o trvalém 
              bydlišti. Některé online půjčky mohou mít zjednodušený proces s minimální 
              dokumentací.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Mohu získat půjčku v Letohrad s negativním záznamem v registru?
            </h3>
            <p className="text-gray-700">
              Záleží na typu a stáří záznamu. Některé společnosti poskytují půjčky i klientům 
              s negativní historií, ale obvykle za vyšší úrokovou sazbu. Je důležité řešit 
              staré dluhy a zlepšit svou bonitu pro lepší podmínky.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Jak rychle mohu získat peníze po schválení půjčky?
            </h3>
            <p className="text-gray-700">
              U online půjček může být výplata během několika hodin až jednoho pracovního dne. 
              Tradiční bankovní půjčky obvykle trvají 2-5 pracovních dnů. Rychlost závisí na 
              kompletnosti dokumentace a typu půjčky.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Jaké jsou typické úrokové sazby pro půjčky v Letohrad?
            </h3>
            <p className="text-gray-700">
              Úrokové sazby se liší podle typu půjčky a poskytovatele, ale obvykle se pohybují 
              mezi 6-18% RPSN pro spotřebitelské půjčky. Konkrétní sazba závisí na vaší bonitě, 
              výši půjčky a době splatnosti. Vždy si porovnejte nabídky více poskytovatelů.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Půjčky ve vašem okolí</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {nearbyCities.map((city) => (
            <Link
              key={city.slug}
              href={`/cz/kraje/pardubicky-kraj/${city.slug}`}
              className="text-blue-600 hover:underline hover:text-blue-800"
            >
              Půjčky v {city.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t pt-6 bg-gray-50 p-6 rounded">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Upozornění pro spotřebitele</h3>
        <p className="text-sm text-gray-600 mb-3">
          Tato stránka obsahuje affiliate odkazy na služby půjček. Můžeme obdržet provizi 
          od partnerských poskytovatelů, pokud prostřednictvím našich odkazů požádáte o půjčku. 
          To nemá vliv na cenu nebo podmínky pro vás jako klienta.
        </p>
        <p className="text-sm text-gray-600">
          <strong>Reprezentativní příklad:</strong> Půjčka 15 000 Kč na 12 měsíců s úrokovou 
          sazbou 12% p.a. (RPSN 12,68%) znamená měsíční splátku 1 334 Kč a celkovou částku 
          k vrácení 16 008 Kč. Skutečné podmínky závisí na vaší bonitě a konkrétním poskytovateli.
        </p>
      </div>
    </div>
  )
}
