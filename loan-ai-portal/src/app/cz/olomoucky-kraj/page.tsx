import Link from 'next/link'

export const metadata = {
  title: 'Půjčky v Olomouckém kraji – Porovnat 2025',
  description: 'Porovnejte online půjčky v Olomouckém kraji. Zjistěte podmínky, regulace a najděte důvěryhodné poskytovatele ve vašem regionu.',
}

export default function OlomouckyKrajPage() {
  const cities = [
    { name: 'Hranice', slug: 'hranice' },
    { name: 'Jeseník', slug: 'jesenik' },
    { name: 'Javorník', slug: 'javornik' },
    { name: 'Kojetín', slug: 'kojetin' },
    { name: 'Konice', slug: 'konice' },
    { name: 'Lipník nad Bečvou', slug: 'lipnik-nad-becvou' },
    { name: 'Litovel', slug: 'litovel' },
    { name: 'Loštice', slug: 'lostice' },
    { name: 'Mohelnice', slug: 'mohelnice' },
    { name: 'Němčice nad Hanou', slug: 'nemcice-nad-hanou' },
    { name: 'Olomouc', slug: 'olomouc' },
    { name: 'Přerov', slug: 'prerov' },
    { name: 'Prostějov', slug: 'prostejov' },
    { name: 'Plumlov', slug: 'plumlov' },
    { name: 'Šternberk', slug: 'sternberk' },
    { name: 'Šumperk', slug: 'sumperk' },
    { name: 'Tovačov', slug: 'tovacov' },
    { name: 'Uničov', slug: 'unicov' },
    { name: 'Velká Bystřice', slug: 'velka-bystrice' },
    { name: 'Vidnava', slug: 'vidnava' },
    { name: 'Zábřeh', slug: 'zabreh' },
    { name: 'Zlaté Hory', slug: 'zlate-hory' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6 text-gray-600">
        <Link href="/cz" className="hover:text-blue-600">Domů</Link>
        {' > '}
        <Link href="/cz/kraje" className="hover:text-blue-600">Kraje</Link>
        {' > '}
        <span className="text-gray-900">Olomoucký kraj</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Půjčky v Olomouckém kraji
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Olomoucký kraj nabízí širokou škálu možností pro získání půjčky. Ať už hledáte 
            spotřebitelský úvěr, konsolidaci dluhů nebo rychlou půjčku na přechodnou finanční 
            potřebu, v regionu působí licencované společnosti poskytující transparentní služby. 
            Přečtěte si o místních regulacích, typických úrokových sazbách a najděte důvěryhodné 
            poskytovatele ve vašem městě.
          </p>
        </div>
      </header>

      {/* Regulations Section */}
      <section className="mb-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Místní Regulace a Ochrana Spotřebitele</h2>
        <ul className="space-y-2 list-disc list-inside text-gray-700">
          <li>RPSN (roční procentní sazba nákladů) nesmí překročit zákonné limity stanovené ČNB</li>
          <li>Všichni poskytovatelé musí být registrováni u České národní banky (ČNB)</li>
          <li>Spotřebitelé mají právo na 14denní odstoupení od smlouvy bez udání důvodu</li>
          <li>Maximální výše úroků a poplatků je regulována zákonem č. 257/2016 Sb., o spotřebitelském úvěru</li>
          <li>Povinná transparentnost všech poplatků a nákladů před podpisem smlouvy</li>
          <li>Právo na předčasné splatění úvěru s odpovídajícím snížením nákladů</li>
          <li>Ochrana osobních údajů podle GDPR a českého zákona o ochraně osobních údajů</li>
          <li>Sankce za nekalé praktiky a porušení spotřebitelských práv</li>
        </ul>
        <div className="mt-4">
          <a 
            href="https://www.cnb.cz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Více informací na webu České národní banky →
          </a>
        </div>
      </section>

      {/* Featured Lenders Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Doporučení Poskytovatelé v Olomouckém kraji</h2>
        <div className="bg-white p-6 border rounded-lg">
          <p className="text-gray-700 mb-4">
            Porovnejte nabídky od licencovaných poskytovatelů působících v Olomouckém kraji. 
            Všichni uvedení poskytovatelé jsou registrováni u ČNB a podléhají českým regulacím.
          </p>
          {/* Placeholder for iframe */}
          <div className="bg-gray-100 p-8 rounded border-2 border-dashed border-gray-300 text-center">
            <p className="text-gray-500">
              [Místo pro iframe s nabídkami důvěryhodných poskytovatelů]
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Zde se zobrazí aktuální nabídky od ověřených partnerů
            </p>
          </div>
        </div>
      </section>

      {/* Cities List */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Města v Olomouckém kraji</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cities.map((city) => (
            <Link key={city.slug} href={`/cz/olomoucky-kraj/${city.slug}`}>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer bg-white">
                <h3 className="text-lg font-semibold text-gray-900">{city.name}</h3>
                <p className="text-sm text-gray-600">Zobrazit půjčky v městě {city.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Často Kladené Otázky</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">
              Jaké jsou typické úrokové sazby u půjček v Olomouckém kraji?
            </h3>
            <p className="text-gray-700">
              Úrokové sazby se liší podle typu půjčky, výše úvěru a bonity žadatele. U 
              spotřebitelských úvěrů se RPSN obvykle pohybuje mezi 5 % a 20 % ročně. Vždy 
              porovnejte více nabídek a zaměřte se na celkové náklady (RPSN), nikoli jen na 
              úrokovou sazbu.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">
              Kde ověřím, že je poskytovatel půjčky legální?
            </h3>
            <p className="text-gray-700">
              Každý poskytovatel spotřebitelského úvěru musí být zapsán v registru ČNB. 
              Registr můžete zkontrolovat na oficiálních stránkách České národní banky. 
              Nikdy nepodepisujte smlouvu s nepověřenými společnostmi.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">
              Mohu předčasně splatit půjčku?
            </h3>
            <p className="text-gray-700">
              Ano, český zákon vám dává právo předčasně splatit spotřebitelský úvěr kdykoliv. 
              Poskytovatel je povinen snížit celkové náklady úměrně zkrácené době trvání úvěru. 
              Může účtovat přiměřenou náhradu za předčasné splacení, ale ta je zákonem omezena.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">
              Co dělat, pokud mám problém se splácením?
            </h3>
            <p className="text-gray-700">
              Pokud se dostanete do potíží se splácením, okamžitě kontaktujte svého 
              poskytovatele. Mnohé společnosti nabízejí možnost odkladu splátek nebo 
              restrukturalizace dluhu. Můžete se také obrátit na neziskové poradny 
              zaměřené na pomoc dlužníkům.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">
              Jsou online půjčky bezpečné?
            </h3>
            <p className="text-gray-700">
              Online půjčky od registrovaných a licencovaných poskytovatelů jsou bezpečné a 
              podléhají stejným právním předpisům jako tradiční půjčky. Vždy si ověřte, že 
              společnost je zapsána v registru ČNB, čtěte smlouvu před podpisem a chraňte 
              své osobní údaje.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Teasers Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Další Užitečné Články</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold mb-2">Jak vybrat správnou půjčku</h3>
            <p className="text-sm text-gray-600 mb-4">
              Průvodce výběrem nejvhodnějšího typu úvěru pro vaše potřeby.
            </p>
            <a href="#" className="text-blue-600 hover:underline text-sm">
              Číst více →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold mb-2">Práva spotřebitelů při půjčkách</h3>
            <p className="text-sm text-gray-600 mb-4">
              Vše, co potřebujete vědět o svých právech jako dlužník.
            </p>
            <a href="#" className="text-blue-600 hover:underline text-sm">
              Číst více →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold mb-2">Konsolidace půjček</h3>
            <p className="text-sm text-gray-600 mb-4">
              Jak spojit více půjček do jedné a ušetřit na nákladech.
            </p>
            <a href="#" className="text-blue-600 hover:underline text-sm">
              Číst více →
            </a>
          </div>
        </div>
      </section>

      {/* Disclosure Block */}
      <section className="bg-gray-100 p-6 rounded-lg text-sm text-gray-700">
        <h3 className="font-semibold mb-2">Důležité Upozornění</h3>
        <p className="mb-2">
          <strong>Affiliate Upozornění:</strong> Tato stránka může obsahovat odkazy na 
          partnery, za které můžeme obdržet provizi. To však neovlivňuje naše doporučení, 
          která jsou vždy nestranná a založená na důkladném výzkumu.
        </p>
        <p>
          <strong>Reprezentativní příklad:</strong> Při půjčce 100 000 Kč na 48 měsíců 
          s RPSN 10 % p.a. bude měsíční splátka přibližně 2 536 Kč a celková částka 
          k zaplacení bude 121 728 Kč. Konkrétní podmínky se liší podle poskytovatele a 
          vaší bonity. Vždy si přečtěte smluvní podmínky před podpisem.
        </p>
      </section>

      {/* Navigation */}
      <div className="mt-8 pt-6 border-t">
        <Link href="/cz/kraje" className="text-blue-600 hover:underline">
          ← Zpět na přehled krajů
        </Link>
      </div>
    </div>
  )
}
