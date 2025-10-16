import Link from 'next/link'

export const metadata = {
  title: 'Půjčky v Pardubickém kraji – Porovnejte 2025',
  description: 'Najděte nejlepší půjčky v Pardubickém kraji. Srovnání nabídek, místní regulace a informace pro všechna města v regionu.',
}

export default function PardubackyKrajPage() {
  const cities = [
    { name: 'Chrudim', slug: 'chrudim' },
    { name: 'Česká Třebová', slug: 'ceska-trebova' },
    { name: 'Heřmanův Městec', slug: 'hermanuv-mestec' },
    { name: 'Hlinsko', slug: 'hlinsko' },
    { name: 'Holice', slug: 'holice' },
    { name: 'Chvaletice', slug: 'chvaletice' },
    { name: 'Králíky', slug: 'kraliky' },
    { name: 'Lanškroun', slug: 'lanskroun' },
    { name: 'Letohrad', slug: 'letohrad' },
    { name: 'Litomyšl', slug: 'litomysl' },
    { name: 'Luže', slug: 'luze' },
    { name: 'Moravská Třebová', slug: 'moravska-trebova' },
    { name: 'Pardubice', slug: 'pardubice' },
    { name: 'Polička', slug: 'policka' },
    { name: 'Proseč', slug: 'prosec' },
    { name: 'Přelouč', slug: 'prelouc' },
    { name: 'Sezemice', slug: 'sezemice' },
    { name: 'Skuteč', slug: 'skutec' },
    { name: 'Svitavy', slug: 'svitavy' },
    { name: 'Třemošnice', slug: 'tremosnice' },
    { name: 'Vysoké Mýto', slug: 'vysoke-myto' },
    { name: 'Žamberk', slug: 'zamberk' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/cz/kraje" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Zpět na kraje
        </Link>
        <h1 className="text-3xl font-bold mb-4">Půjčky v Pardubickém kraji</h1>
        <p className="text-gray-600 max-w-3xl mb-6">
          Kompletní přehled možností půjček v Pardubickém kraji. Srovnejte nabídky 
          od licencovaných poskytovatelů a najděte nejlepší podmínky pro vaše potřeby.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-semibold mb-4">O Pardubickém kraji</h2>
          <p className="text-gray-700 mb-4">
            Pardubický kraj se nachází ve východní části České republiky a je známý svým 
            průmyslovým i zemědělským charakterem. Region nabízí různé možnosti financování 
            přizpůsobené potřebám místních obyvatel a podnikatelů.
          </p>
          <p className="text-gray-700">
            Všechny půjčky v tomto kraji jsou regulovány České národní bankou a musí 
            dodržovat platnou legislativu o spotřebitelském úvěru.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Klíčové Regulace v Pardubickém kraji</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Maximální RPSN pro spotřebitelské půjčky je omezena zákonem</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Povinné uvedení všech poplatků před podpisem smlouvy</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Ochrana před nekalými praktikami a nadměrnými úroky</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Právo na předčasné splacení bez sankčních poplatků</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>14denní lhůta na odstoupení od smlouvy o úvěru</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Města v Pardubickém kraji</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city) => (
            <Link 
              key={city.slug} 
              href={`/cz/kraje/pardubicky-kraj/${city.slug}`}
              className="block"
            >
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-white hover:border-blue-400">
                <h3 className="font-semibold text-gray-900">{city.name}</h3>
                <p className="text-sm text-blue-600 mt-2">Zobrazit nabídky →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Často Kladené Otázky</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Jaké jsou typické úrokové sazby v Pardubickém kraji?
            </h3>
            <p className="text-gray-700">
              Úrokové sazby se liší podle typu půjčky, výše částky a bonity klienta. 
              Obvykle se pohybují mezi 5-20% ročně pro spotřebitelské půjčky. Vždy si 
              porovnejte RPSN u různých poskytovatelů.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Potřebuji ručitele pro získání půjčky?
            </h3>
            <p className="text-gray-700">
              Požadavky se liší podle poskytovatele a výše půjčky. Menší částky obvykle 
              ručitele nevyžadují, větší půjčky nebo klienti s nižší bonitou mohou být 
              požádáni o zajištění nebo ručitele.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Jak dlouho trvá schválení půjčky?
            </h3>
            <p className="text-gray-700">
              U online půjček může být předběžné schválení během několika minut. 
              Finální schválení a vyplacení obvykle trvá 1-3 pracovní dny. Tradiční 
              banky mohou vyžadovat delší dobu zpracování.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 border-t bg-white">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Upozornění</h3>
        <p className="text-sm text-gray-600">
          Tato stránka obsahuje přehled možností půjček v Pardubickém kraji pouze pro 
          informační účely. Všechny nabídky jsou poskytovány partnerskými poskytovateli. 
          Vždy si pečlivě přečtěte smluvní podmínky před podpisem smlouvy o úvěru. 
          Ukázkový příklad: Půjčka 10 000 Kč na 12 měsíců s RPSN 15% znamená celkovou 
          částku k vrácení 10 800 Kč.
        </p>
      </div>
    </div>
  )
}
