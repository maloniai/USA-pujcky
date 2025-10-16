import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { usteckyKrajCities, regionName } from '@/data/ustecky-kraj'

export const metadata = {
  title: 'Půjčky Ústecký kraj - Porovnejte Nabídky 2025',
  description: 'Rychlé online půjčky v Ústeckém kraji. Srovnání nabídek pro všechna města regionu. Transparentní podmínky a okamžité schválení.',
}

export default function UsteckyKrajPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-6 text-sm">
        <Link href="/cz" className="text-blue-600 hover:underline">
          Půjčky ČR
        </Link>
        {' '}/{' '}
        <span className="text-gray-600">{regionName}</span>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Půjčky v Ústeckém kraji
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            Ústecký kraj nabízí širokou škálu možností pro získání rychlé a výhodné půjčky. 
            Region s více než 800 000 obyvateli poskytuje přístup k moderním finančním službám 
            ve všech větších městech i menších obcích. Online půjčky jsou dostupné 24/7 
            s možností schválení do několika minut.
          </p>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Regulace a Ochrana Spotřebitele</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>RPSN limit:</strong> Ročně procentní sazba nákladů nesmí překročit zákonný limit
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Česká národní banka:</strong> Dohled nad poskytováním spotřebitelských úvěrů
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Právo na odstoupení:</strong> 14 dní na rozmyšlenou bez udání důvodu
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Transparentnost:</strong> Povinné zveřejnění všech poplatků před uzavřením smlouvy
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Registr úvěrů:</strong> Ochrana před předlužením prostřednictvím úvěrových registrů
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Licencované subjekty:</strong> Pouze společnosti s platnou licencí ČNB mohou poskytovat půjčky
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Města v Ústeckém kraji</h2>
        <p className="text-gray-700 mb-6">
          Vyberte své město pro podrobné informace o půjčkách ve vašem regionu:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {usteckyKrajCities.map((city) => (
            <Link 
              key={city.slug} 
              href={`/cz/ustecky-kraj/${city.slug}`}
              className="block"
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {city.name}
                    {city.district && <span className="text-sm font-normal text-gray-600"> ({city.district})</span>}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Zobrazit nabídky půjček →
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Užitečné Odkazy</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Česká národní banka</h3>
              <p className="text-gray-600 text-sm">
                Oficiální regulátor finančního trhu v ČR
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Finanční arbitr</h3>
              <p className="text-gray-600 text-sm">
                Mimosoudní řešení sporů mezi spotřebiteli a finančními institucemi
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Důležité Upozornění</h2>
        <p className="text-sm text-gray-700 mb-3">
          Tato stránka obsahuje affiliate odkazy. Můžeme obdržet provizi, pokud se rozhodnete 
          požádat o půjčku prostřednictvím našich partnerů. To nemá vliv na cenu, kterou platíte.
        </p>
        <p className="text-sm text-gray-700">
          <strong>Reprezentativní příklad:</strong> Půjčka 20 000 Kč na 12 měsíců. 
          RPSN 25,9%, úroková sazba 19,9% p.a., měsíční splátka 1 833 Kč, celkem zaplatíte 21 996 Kč.
        </p>
      </section>
    </div>
  )
}
