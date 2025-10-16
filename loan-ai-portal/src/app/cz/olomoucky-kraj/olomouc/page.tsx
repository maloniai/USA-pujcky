import Link from 'next/link'

export const metadata = {
  title: 'Půjčky v Olomouci, Olomoucký kraj – Porovnat 2025',
  description: 'Hledáte půjčku v Olomouci? Porovnejte nabídky online půjček, zjistěte místní podmínky a najděte důvěryhodné poskytovatele ve vašem městě.',
}

export default function OlomoucPage() {
  const nearbyCities = [
    { name: 'Přerov', slug: 'prerov' },
    { name: 'Prostějov', slug: 'prostejov' },
    { name: 'Šternberk', slug: 'sternberk' },
    { name: 'Litovel', slug: 'litovel' },
    { name: 'Mohelnice', slug: 'mohelnice' },
    { name: 'Uničov', slug: 'unicov' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6 text-gray-600">
        <Link href="/cz" className="hover:text-blue-600">Domů</Link>
        {' > '}
        <Link href="/cz/kraje" className="hover:text-blue-600">Kraje</Link>
        {' > '}
        <Link href="/cz/olomoucky-kraj" className="hover:text-blue-600">Olomoucký kraj</Link>
        {' > '}
        <span className="text-gray-900">Olomouc</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Půjčky v Olomouci, Olomoucký kraj
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Olomouc, statutární město a centrum Olomouckého kraje, nabízí široké spektrum finančních 
            služeb včetně spotřebitelských úvěrů, konsolidačních půjček a rychlých online půjček. 
            Místní trh je dobře regulován a působí zde jak tradiční banky, tak i moderní 
            nebankovní společnosti poskytující flexibilní řešení. Ať už potřebujete financovat 
            renovaci bytu, pokrýt neočekávané výdaje nebo konsolidovat stávající dluhy, v Olomouci 
            najdete důvěryhodné poskytovatele s transparentními podmínkami. Všechni poskytovatelé 
            jsou povinni dodržovat české předpisy a registraci u České národní banky. Před podpisem 
            smlouvy si vždy důkladně prostudujte všechny podmínky a porovnejte více nabídek.
          </p>
        </div>
      </header>

      {/* Offer Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Aktuální Nabídky Půjček v Olomouci</h2>
        <div className="bg-white p-6 border rounded-lg">
          <p className="text-gray-700 mb-4">
            Porovnejte nabídky od důvěryhodných poskytovatelů působících v Olomouci. 
            Všichni poskytovatelé jsou registrováni u ČNB a podléhají českým regulacím.
          </p>
          {/* Placeholder for iframe */}
          <div className="bg-gray-100 p-8 rounded border-2 border-dashed border-gray-300 text-center">
            <p className="text-gray-500">
              [Místo pro iframe s nabídkami důvěryhodných poskytovatelů pro Olomouc]
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Zde se zobrazí aktuální nabídky specifické pro Olomouc
            </p>
          </div>
        </div>
      </section>

      {/* Local Regulations */}
      <section className="mb-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Místní Regulace a Ochrana Spotřebitele</h2>
        <ul className="space-y-2 list-disc list-inside text-gray-700">
          <li>RPSN (roční procentní sazba nákladů) nesmí překročit zákonné limity stanovené ČNB</li>
          <li>Všichni poskytovatelé musí být registrováni u České národní banky</li>
          <li>Právo na odstoupení od smlouvy do 14 dnů bez udání důvodu</li>
          <li>Maximální výše úroků a poplatků stanovena zákonem č. 257/2016 Sb.</li>
          <li>Povinná transparentnost všech nákladů před podpisem smlouvy</li>
          <li>Právo na předčasné splatění s odpovídajícím snížením nákladů</li>
          <li>Ochrana osobních údajů podle GDPR</li>
          <li>Spotřebitelská ochrana proti nekalým praktikám</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Často Kladené Otázky</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">
              Kde v Olomouci najdu nejlepší podmínky pro půjčku?
            </h3>
            <p className="text-gray-700">
              V Olomouci působí jak tradiční banky na hlavním náměstí, tak online poskytovatelé. 
              Nejlepší podmínky najdete porovnáním více nabídek. Zaměřte se na celkovou RPSN, 
              nikoli pouze úrokovou sazbu. Online srovnávače vám pomohou rychle najít 
              nejvýhodnější možnosti.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">
              Jak rychle mohu získat půjčku v Olomouci?
            </h3>
            <p className="text-gray-700">
              Online poskytovatelé často vyhodnotí žádost během několika minut a peníze mohou 
              být na účtu do 24 hodin. U tradičních bank trvá proces obvykle 2-5 pracovních dnů. 
              Rychlost závisí na kompletnosti dokumentace a výsledku úvěrového hodnocení.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">
              Jaké dokumenty potřebuji pro půjčku v Olomouci?
            </h3>
            <p className="text-gray-700">
              Základní dokumenty zahrnují občanský průkaz, doklad o příjmu (výplatní pásky, 
              daňové přiznání) a číslo bankovního účtu. Některé společnosti mohou požadovat 
              dodatečné dokumenty podle výše půjčky a vašeho zaměstnaneckého statusu.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">
              Mohu získat půjčku v Olomouci se záznamem v registru?
            </h3>
            <p className="text-gray-700">
              Některé nebankovní společnosti poskytují půjčky i klientům se záznamy v registrech 
              dlužníků, ale podmínky bývají méně výhodné (vyšší úroky). Vždy si ověřte, že jde o 
              registrovaného poskytovatele, a zvažte své možnosti splácení před podpisem smlouvy.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">
              Kde mohu získat bezplatnou poradnu ohledně půjček v Olomouci?
            </h3>
            <p className="text-gray-700">
              V Olomouci působí několik neziskových organizací zaměřených na dluhové poradenství, 
              např. Poradna při finanční tísni. Centrum spotřebitelů nabízí bezplatné konzultace 
              ohledně spotřebitelských práv a finančních produktů.
            </p>
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Půjčky ve vašem okolí</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearbyCities.map((city) => (
            <Link key={city.slug} href={`/cz/olomoucky-kraj/${city.slug}`}>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer bg-white">
                <h3 className="text-lg font-semibold text-gray-900">{city.name}</h3>
                <p className="text-sm text-gray-600">Zobrazit půjčky v městě {city.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Disclosure Block */}
      <section className="bg-gray-100 p-6 rounded-lg text-sm text-gray-700 mb-8">
        <h3 className="font-semibold mb-2">Důležité Upozornění</h3>
        <p className="mb-2">
          <strong>Affiliate Upozornění:</strong> Tato stránka může obsahovat odkazy na 
          partnery, za které můžeme obdržet provizi. To však neovlivňuje naše doporučení, 
          která jsou vždy nestranná a založená na důkladném výzkumu.
        </p>
        <p>
          <strong>Reprezentativní příklad:</strong> Při půjčce 50 000 Kč na 36 měsíců 
          s RPSN 10 % p.a. bude měsíční splátka přibližně 1 612 Kč a celková částka 
          k zaplacení bude 58 032 Kč. Konkrétní podmínky se liší podle poskytovatele a 
          vaší bonity. Vždy si přečtěte smluvní podmínky před podpisem.
        </p>
      </section>

      {/* Navigation */}
      <div className="pt-6 border-t">
        <Link href="/cz/olomoucky-kraj" className="text-blue-600 hover:underline">
          ← Zpět na Olomoucký kraj
        </Link>
      </div>
    </div>
  )
}
