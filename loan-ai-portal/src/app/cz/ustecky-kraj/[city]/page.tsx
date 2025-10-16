import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { usteckyKrajCities, regionName } from '@/data/ustecky-kraj'
import { notFound } from 'next/navigation'

interface CityPageProps {
  params: {
    city: string
  }
}

// Generate static paths for all cities
export async function generateStaticParams() {
  return usteckyKrajCities.map((city) => ({
    city: city.slug,
  }))
}

// Generate metadata for each city
export async function generateMetadata({ params }: CityPageProps) {
  const city = usteckyKrajCities.find(c => c.slug === params.city)
  
  if (!city) {
    return {
      title: 'Město nenalezeno',
    }
  }

  const fullCityName = city.district ? `${city.name} (${city.district})` : city.name

  return {
    title: `Půjčky ${fullCityName}, ${regionName} – Porovnejte 2025`,
    description: `Online půjčky v ${fullCityName}, ${regionName}. Srovnání nabídek, rychlé schválení, transparentní podmínky. Získejte půjčku do 24 hodin.`,
  }
}

// Get nearby cities for internal linking
function getNearbyCity(currentSlug: string, count: number = 4) {
  const currentIndex = usteckyKrajCities.findIndex(c => c.slug === currentSlug)
  const nearby: typeof usteckyKrajCities = []
  
  // Get cities around the current one
  for (let i = 1; nearby.length < count && i <= usteckyKrajCities.length / 2; i++) {
    if (currentIndex - i >= 0) {
      nearby.push(usteckyKrajCities[currentIndex - i])
    }
    if (nearby.length < count && currentIndex + i < usteckyKrajCities.length) {
      nearby.push(usteckyKrajCities[currentIndex + i])
    }
  }
  
  return nearby.slice(0, count)
}

export default function CityPage({ params }: CityPageProps) {
  const city = usteckyKrajCities.find(c => c.slug === params.city)
  
  if (!city) {
    notFound()
  }

  const fullCityName = city.district ? `${city.name} (${city.district})` : city.name
  const nearbyCities = getNearbyCity(params.city)
  const currentYear = 2025

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link href="/cz" className="text-blue-600 hover:underline">
          Půjčky ČR
        </Link>
        {' '}/{' '}
        <Link href="/cz/ustecky-kraj" className="text-blue-600 hover:underline">
          {regionName}
        </Link>
        {' '}/{' '}
        <span className="text-gray-600">{city.name}</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Půjčky v {fullCityName}, {regionName}
        </h1>
        
        {/* Intro text - unique per city */}
        <div className="prose max-w-none text-gray-700">
          <p className="text-lg mb-4">
            Hledáte rychlou a výhodnou půjčku v {fullCityName}? Nabízíme komplexní přehled 
            dostupných půjček od ověřených poskytovatelů s licencí České národní banky. 
            Ať už potřebujete spotřebitelský úvěr na nákup, refinancování stávajících závazků, 
            nebo rychlou půjčku na překlenutí finančních potíží, najdete zde ty nejlepší nabídky.
          </p>
          <p className="mb-4">
            V {fullCityName} jsou k dispozici půjčky od 1 000 Kč do 500 000 Kč s dobou splatnosti 
            od 3 měsíců do 8 let. RPSN se pohybuje typicky v rozmezí 5,9 % až 45 % v závislosti 
            na typu produktu, výši úvěru a bonity klienta. Všichni poskytovatelé podléhají 
            regulaci a dohledu ČNB, což zajišťuje transparentnost a ochranu spotřebitele.
          </p>
        </div>
      </header>

      {/* Offer iframe placeholder */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Aktuální Nabídky Půjček v {city.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 p-8 rounded-lg text-center min-h-[300px] flex items-center justify-center">
              <div>
                <p className="text-gray-600 mb-4">
                  Zde se zobrazí aktuální nabídky půjček od našich partnerů
                </p>
                <p className="text-sm text-gray-500">
                  [Partner Feed Iframe Placeholder]
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Local regulations */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Regulace Půjček v České Republice</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span>
                  <strong>Maximální RPSN:</strong> Ročně procentní sazba nákladů je regulována zákonem 
                  o spotřebitelském úvěru č. 257/2016 Sb.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span>
                  <strong>Licencování:</strong> Poskytovatelé půjček musí mít platnou licenci 
                  od České národní banky nebo být registrováni v seznamu věřitelů
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span>
                  <strong>Právo na odstoupení:</strong> Klient má právo odstoupit od smlouvy 
                  do 14 dnů bez udání důvodu a bez sankcí
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span>
                  <strong>Předsmluvní informace:</strong> Poskytovatel musí před uzavřením smlouvy 
                  poskytnout standardizované evropské informace o spotřebitelském úvěru
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span>
                  <strong>Ochrana spotřebitele:</strong> Možnost obrátit se na Finančního arbitra 
                  při sporech s poskytovatelem půjčky
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span>
                  <strong>Registr dlužníků:</strong> Poskytovatelé ověřují bonitu klientů 
                  v úvěrových registrech (SOLUS, CBCB) pro prevenci předlužení
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span>
                  <strong>Transparentnost poplatků:</strong> Všechny poplatky musí být jasně 
                  uvedeny v RPSN, včetně poplatků za vedení účtu, pojištění a dalších služeb
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Často Kladené Otázky</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Jak rychle mohu získat půjčku v {city.name}?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Online půjčky v {city.name} lze získat velmi rychle. Po odeslání žádosti 
                obdržíte předběžné schválení často během několika minut. Peníze mohou být 
                na vašem účtu do 24 hodin, v některých případech i během několika hodin. 
                Rychlost závisí na kompletnosti dokumentace a době vyřízení bankovního převodu.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Jaké dokumenty potřebuji pro žádost o půjčku?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Pro žádost o půjčku v České republice typicky potřebujete platný občanský průkaz 
                nebo pas, doklad o příjmu (výplatní pásky, potvrzení o příjmu), a bankovní spojení. 
                Někteří poskytovatelé mohou požadovat další dokumenty jako potvrzení o zaměstnání 
                nebo výpis z účtu. Online půjčky často vyžadují méně dokumentů než tradiční 
                bankovní úvěry.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Mohu získat půjčku v {city.name} s negativní historií?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Získat půjčku s negativní úvěrovou historií je náročnější, ale ne nemožné. 
                Někteří poskytovatelé se specializují na půjčky pro klienty s negativním záznamem 
                v registrech. Tyto půjčky však obvykle mají vyšší úrokové sazby a přísnější podmínky. 
                Je důležité být obezřetný a vyhýbat se neregulovaným poskytovatelům, kteří by mohli 
                vaši situaci zneužít.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Co je RPSN a proč je důležitá?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                RPSN (Ročně Procentní Sazba Nákladů) je klíčový ukazatel, který vyjadřuje celkové 
                náklady na úvěr v procentech za rok. Zahrnuje nejen úrok, ale také všechny povinné 
                poplatky spojené s půjčkou. RPSN umožňuje snadno porovnat různé nabídky půjček 
                a vybrat si tu nejvýhodnější. Podle zákona musí být RPSN jasně uvedena v každé 
                nabídce půjčky.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Je bezpečné žádat o půjčku online?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Ano, žádat o půjčku online je bezpečné, pokud používáte služby licencovaných 
                poskytovatelů regulovaných Českou národní bankou. Vždy si ověřte, že webová 
                stránka používá šifrované spojení (HTTPS), zkontrolujte licenci poskytovatele 
                v registru ČNB a přečtěte si recenze od ostatních klientů. Vyhýbejte se 
                podezřelým nabídkám, které slibují půjčky bez ověření nebo s nereálně nízkými sazbami.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal links - nearby cities */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Půjčky v okolních městech</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {nearbyCities.map((nearbyCity) => (
            <Link 
              key={nearbyCity.slug}
              href={`/cz/ustecky-kraj/${nearbyCity.slug}`}
              className="block"
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <p className="font-semibold text-gray-900 mb-1">
                    {nearbyCity.name}
                  </p>
                  <p className="text-sm text-blue-600">
                    Zobrazit nabídky →
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link 
            href="/cz/ustecky-kraj" 
            className="text-blue-600 hover:underline font-semibold"
          >
            ← Zpět na přehled Ústeckého kraje
          </Link>
        </div>
      </section>

      {/* Disclosure block */}
      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Důležité Informace a Upozornění</h2>
        
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Affiliate Disclosure</h3>
          <p className="text-sm text-gray-700">
            Tato stránka obsahuje affiliate odkazy na produkty našich partnerů. Pokud se rozhodnete 
            požádat o půjčku prostřednictvím odkazu na této stránce, můžeme obdržet provizi. 
            Tato provize nemá žádný vliv na cenu nebo podmínky, které platíte. Provize nám pomáhá 
            udržovat tuto službu zdarma pro návštěvníky. Doporučujeme pouze produkty od licencovaných 
            poskytovatelů regulovaných ČNB.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Reprezentativní Příklad</h3>
          <p className="text-sm text-gray-700">
            <strong>Výše úvěru:</strong> 20 000 Kč<br />
            <strong>Doba splácení:</strong> 12 měsíců<br />
            <strong>Úroková sazba:</strong> 19,9% p.a.<br />
            <strong>RPSN:</strong> 25,9%<br />
            <strong>Měsíční splátka:</strong> 1 833 Kč<br />
            <strong>Celková částka k zaplacení:</strong> 21 996 Kč<br />
            <strong>Celkové náklady úvěru:</strong> 1 996 Kč
          </p>
          <p className="text-sm text-gray-600 mt-3">
            Toto je pouze ilustrativní příklad. Skutečné podmínky se mohou lišit v závislosti 
            na poskytovateli, výši půjčky, době splácení a vaší bonitě. Vždy si pečlivě přečtěte 
            podmínky před uzavřením smlouvy.
          </p>
        </div>
      </section>
    </div>
  )
}
