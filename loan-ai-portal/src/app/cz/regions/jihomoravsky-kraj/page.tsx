import Link from 'next/link'
import { jihomoravskyKrajCities } from '@/data/czech-cities'

export const metadata = {
  title: 'Půjčky v Jihomoravském kraji – Porovnejte 2025',
  description: 'Najděte nejlepší půjčky v Jihomoravském kraji. Informace o regulacích, lokální poskytovatelé a možnosti půjček pro města jako Brno, Znojmo, Hodonín a další.',
}

export default function JihomoravskyKrajPage() {
  const currentYear = new Date().getFullYear()
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/cz/regions" className="text-blue-600 hover:underline">
          ← Zpět na regiony
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6">Půjčky v Jihomoravském kraji</h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-4">
          Jihomoravský kraj je jedním z nejvýznamnějších regionů České republiky s centrem v Brně. 
          Region nabízí široké spektrum možností půjček od tradičních bank, nebankovních společností 
          až po moderní online poskytovatele. Trh s půjčkami v regionu je dobře regulován a nabízí 
          spotřebitelům významnou ochranu.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Regulace a Ochrana Spotřebitele</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Maximální úroková sazba je regulována Českou národní bankou (ČNB)</li>
          <li>Všichni poskytovatelé půjček musí mít licenci od ČNB</li>
          <li>Povinné zveřejnění RPSN (Roční procentní sazba nákladů)</li>
          <li>Právo na odstoupení od smlouvy do 14 dnů</li>
          <li>Ochrana před neoprávněnými poplatky a sankcemi</li>
          <li>Transparentní informování o všech nákladech před podpisem smlouvy</li>
          <li>Registr úvěrů pro prevenci předlužení</li>
          <li>Možnost mimosoudního řešení sporů prostřednictvím finančního arbitra</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Města v Jihomoravském kraji</h2>
        <p className="text-gray-600 mb-4">
          Vyberte své město pro zobrazení lokálních informací o půjčkách a poskytovatelích:
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
          {jihomoravskyKrajCities.map((city) => (
            <Link 
              key={city.slug} 
              href={`/cz/regions/jihomoravsky-kraj/${city.slug}`}
              className="p-4 border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors bg-white"
            >
              <h3 className="font-semibold text-gray-900">{city.name}</h3>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Užitečné Odkazy</h2>
        <ul className="space-y-2">
          <li>
            <a href="https://www.cnb.cz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Česká národní banka (ČNB)
            </a>
            {' '}- Hlavní regulátor finančního trhu
          </li>
          <li>
            <a href="https://www.finarbitr.cz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Finanční arbitr
            </a>
            {' '}- Mimosoudní řešení sporů
          </li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
        <h3 className="font-semibold mb-2">Upozornění</h3>
        <p className="text-sm text-gray-700">
          Tyto stránky obsahují affiliate odkazy na poskytovatele půjček. Můžeme obdržet provizi, 
          pokud uzavřete smlouvu prostřednictvím našich partnerů. Vždy si pečlivě přečtěte podmínky 
          smlouvy před podpisem. Půjčujte si odpovědně a pouze v případě, že jste schopni půjčku splatit.
        </p>
        <p className="text-sm text-gray-700 mt-2">
          <strong>Reprezentativní příklad:</strong> Částka půjčky 50 000 Kč, doba splatnosti 24 měsíců, 
          RPSN 19,9%, celková částka k zaplacení 57 980 Kč, měsíční splátka 2 416 Kč.
        </p>
      </div>
    </div>
  )
}
