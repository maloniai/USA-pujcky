import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Půjčky v Slavičíně, Zlínský kraj – Porovnejte 2025',
  description: 'Najděte nejlepší půjčky v Slavičíně. Porovnejte nabídky od licencovaných věřitelů, podívejte se na místní regulace a získejte rychlé schválení.',
}

export default function SlavičínPage() {
  const nearbyCities = [
    { name: 'Valašské Klobouky', slug: 'valaske-klobouky' },
    { name: 'Brumov-Bylnice', slug: 'brumov-bylnice' },
    { name: 'Zlín', slug: 'zlin' },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="text-sm text-gray-600 mb-6">
        <Link href="/cz" className="hover:underline">Domů</Link>
        {' > '}
        <Link href="/cz/regiony" className="hover:underline">Regiony</Link>
        {' > '}
        <Link href="/cz/regiony/zlinsky-kraj" className="hover:underline">Zlínský kraj</Link>
        {' > '}
        <span className="text-gray-900">Slavičín</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Půjčky v Slavičíně, Zlínský kraj</h1>

      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          V Slavičíně si můžete vybrat z široké nabídky půjček od licencovaných poskytovatelů. 
          Ať už potřebujete hotovostní půjčku, spotřebitelský úvěr nebo refinancování, 
          všichni věřitelé na této stránce splňují regulační požadavky České národní banky. 
          Výše úvěrů se obvykle pohybuje od 5 000 Kč do 500 000 Kč s dobou splatnosti 
          od několika měsíců až po 10 let.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Proces žádosti je rychlý a jednoduchý – většina žadatelů získá rozhodnutí 
          během několika hodin. Díky online platformám můžete porovnat nabídky přímo 
          z pohodlí vašeho domova v Slavičíně a najít tu nejvhodnější půjčku pro vaše potřeby.
        </p>
      </div>

      <div className="bg-white border rounded-lg p-6 mb-8 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Nabídky Půjček v Slavičíně</h2>
        <div className="bg-gray-50 border rounded p-4 mb-4">
          <p className="text-center text-gray-600">
            [Zde bude iframe s nabídkami od důvěryhodných partnerů pro region Slavičín]
          </p>
          <div className="text-center mt-4">
            <Button className="w-full md:w-auto">Porovnat Nabídky Půjček</Button>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Místní Regulace Půjček</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Maximální RPSN je omezena na 36% ročně pro standardní spotřebitelské úvěry</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Všichni věřitelé musí mít licenci od České národní banky (ČNB)</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Máte právo odstoupit od smlouvy do 14 dnů bez udání důvodu</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Věřitel musí posoudit vaši schopnost splácet před poskytnutím úvěru</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Transparentní zobrazení všech poplatků, úroků a podmínek je povinné</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Ochrana osobních údajů je zajištěna v souladu s GDPR</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Při problémech se můžete obrátit na Finanční arbitr ČR</span>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Často Kladené Otázky</h2>
        <div className="space-y-4">
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">Jaké jsou požadavky na získání půjčky v Slavičíně?</h3>
            <p className="text-gray-700">
              Základní požadavky zahrnují: být starší 18 let, mít trvalé bydliště v ČR, 
              pravidelný příjem a aktivní bankovní účet. Každý věřitel může mít specifické 
              další požadavky, které najdete v podmínkách jednotlivých nabídek.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">Jak rychle mohu získat půjčku?</h3>
            <p className="text-gray-700">
              Většina online poskytovatelů zpracuje vaši žádost během několika hodin. 
              Po schválení mohou být peníze na vašem účtu během 24-48 hodin, 
              někteří poskytovatelé nabízejí i rychlejší vyřízení téhož dne.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">Mohu získat půjčku i s negativní historií?</h3>
            <p className="text-gray-700">
              Záleží na konkrétním poskytovateli. Někteří věřitelé nabízejí půjčky 
              i lidem s méně dokonalou úvěrovou historií, obvykle však s přísnějšími 
              podmínkami nebo vyšším úročením. Vždy si pečlivě přečtěte podmínky.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">Jaký je rozdíl mezi RPSN a úrokovou sazbou?</h3>
            <p className="text-gray-700">
              RPSN (Roční procentní sazba nákladů) zahrnuje veškeré náklady spojené s úvěrem 
              včetně úroků, poplatků za zpracování a dalších nákladů. Úroková sazba zahrnuje 
              pouze náklady na úroky. RPSN je tedy komplexnější ukazatel skutečných nákladů.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">Je bezpečné žádat o půjčku online?</h3>
            <p className="text-gray-700">
              Ano, pokud využíváte služby licencovaných poskytovatelů. Všichni věřitelé 
              uvedení na této stránce dodržují GDPR a používají šifrované spojení 
              pro ochranu vašich osobních údajů. Vždy si ověřte, že má poskytovatel 
              platnou licenci ČNB.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">Půjčky ve vašem okolí</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {nearbyCities.map((city) => (
            <Link key={city.slug} href={`/cz/regiony/zlinsky-kraj/${city.slug}`}>
              <div className="bg-white p-4 rounded border hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="font-semibold text-blue-600">{city.name}</h3>
                <p className="text-sm text-gray-600">Zobrazit půjčky →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
        <h2 className="text-lg font-semibold mb-2">Důležité Upozornění</h2>
        <p className="text-gray-700 mb-3">
          <strong>Affiliate vztahy:</strong> Tato stránka může obsahovat odkazy na partnery, 
          od kterých můžeme obdržet provizi. To nemá vliv na vaši cenu ani podmínky půjčky.
        </p>
        <p className="text-gray-700 text-sm">
          <strong>Reprezentativní příklad:</strong> Při půjčce 50 000 Kč na 24 měsíců 
          s RPSN 25% zaplatíte měsíční splátku přibližně 2 450 Kč. Celková částka k vrácení 
          bude 58 800 Kč. Celkové náklady úvěru jsou 8 800 Kč.
        </p>
      </div>

      <div className="mt-8 pt-6 border-t">
        <Link href="/cz/regiony/zlinsky-kraj" className="text-blue-600 hover:underline">
          ← Zpět na Půjčky ve Zlínském kraji
        </Link>
      </div>
    </div>
  )
}
