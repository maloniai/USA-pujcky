import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Půjčky v Královéhradeckém kraji – Porovnání 2025',
  description: 'Porovnejte půjčky v Královéhradeckém kraji. Rychlé schválení, transparentní podmínky a odborné poradenství. Najděte nejlepší půjčku ve vašem městě.',
}

export default function KralovehradeckyKrajPage() {
  const cities = [
    { name: 'Broumov', slug: 'broumov' },
    { name: 'Červený Kostelec', slug: 'cerveny-kostelec' },
    { name: 'Dvůr Králové nad Labem', slug: 'dvur-kralove-nad-labem' },
    { name: 'Hořice', slug: 'horice' },
    { name: 'Hradec Králové', slug: 'hradec-kralove' },
    { name: 'Hronov', slug: 'hronov' },
    { name: 'Jaroměř', slug: 'jaromer' },
    { name: 'Jičín', slug: 'jicin' },
    { name: 'Kopidlno', slug: 'kopidlno' },
    { name: 'Kostelec nad Orlicí', slug: 'kostelec-nad-orlici' },
    { name: 'Lázně Bělohrad', slug: 'lazne-belohrad' },
    { name: 'Náchod', slug: 'nachod' },
    { name: 'Nechanice', slug: 'nechanice' },
    { name: 'Nová Paka', slug: 'nova-paka' },
    { name: 'Nové Město nad Metují', slug: 'nove-mesto-nad-metuji' },
    { name: 'Nový Bydžov', slug: 'novy-bydzov' },
    { name: 'Opočno', slug: 'opocno' },
    { name: 'Police nad Metují', slug: 'police-nad-metuji' },
    { name: 'Rokytnice v Orlických horách', slug: 'rokytnice-v-orlickych-horach' },
    { name: 'Rychnov nad Kněžnou', slug: 'rychnov-nad-kneznou' },
    { name: 'Smiřice', slug: 'smirice' },
    { name: 'Sobotka', slug: 'sobotka' },
    { name: 'Svoboda nad Úpou', slug: 'svoboda-nad-upou' },
    { name: 'Trutnov', slug: 'trutnov' },
    { name: 'Třebechovice pod Orebem', slug: 'trebechovice-pod-orebem' },
    { name: 'Týniště nad Orlicí', slug: 'tyniste-nad-orlici' },
    { name: 'Vamberk', slug: 'vamberk' },
    { name: 'Vrchlabí', slug: 'vrchlabi' },
    { name: 'Žacléř', slug: 'zacler' },
    { name: 'Železnice', slug: 'zeleznice' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-6 text-sm">
        <Link href="/cz" className="text-blue-600 hover:underline">
          Domů
        </Link>
        {' > '}
        <span className="text-gray-600">Královéhradecký kraj</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Půjčky v Královéhradeckém kraji
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Královéhradecký kraj nabízí širokou škálu možností pro získání půjčky. 
          Ať už hledáte spotřebitelský úvěr, konsolidaci dluhů nebo rychlou půjčku, 
          najdete zde důvěryhodné poskytovatele působící v celém kraji. Všichni poskytovatelé 
          jsou licencováni a podléhají dohledu České národní banky (ČNB).
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Regulace půjček v České republice
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Dohled ČNB:</strong> Všichni poskytovatelé půjček musí být registrovováni 
                  u České národní banky a dodržovat její směrnice.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Maximální RPSN:</strong> Roční procentní sazba nákladů (RPSN) je regulována 
                  zákonem č. 257/2016 Sb., o spotřebitelském úvěru.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Právo na odstoupení:</strong> Spotřebitelé mají právo odstoupit od smlouvy 
                  o úvěru do 14 dnů bez udání důvodu.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Transparentnost:</strong> Poskytovatelé musí jasně uvést všechny poplatky, 
                  úrokové sazby a podmínky před podpisem smlouvy.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Ochrana dlužníků:</strong> Zákon o spotřebitelském úvěru chrání dlužníky 
                  před nekalými praktikami a zajišťuje spravedlivé zacházení.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Registr dlužníků:</strong> Poskytovatelé kontrolují registry (SOLUS, CBCB) 
                  před schválením úvěru.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Města v Královéhradeckém kraji
        </h2>
        <p className="text-gray-700 mb-6">
          Vyberte své město pro zobrazení lokálních možností půjček a informací:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cities.map((city) => (
            <Link 
              key={city.slug} 
              href={`/cz/kralovehradecky-kraj/${city.slug}`}
              className="block"
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{city.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Zobrazit možnosti půjček v městě {city.name}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Často kladené otázky
        </h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Jaké jsou typické úrokové sazby v Královéhradeckém kraji?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Úrokové sazby se pohybují v rozmezí 5 % až 20 % RPSN v závislosti na typu 
                půjčky, výši úvěru a úvěrové historii dlužníka. Bankovní půjčky mají obvykle 
                nižší sazby než nebankovní poskytovatelé. Vždy porovnejte nabídky více 
                poskytovatelů.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Jak dlouho trvá schválení půjčky?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Doba schválení se liší podle poskytovatele. Nebankovní společnosti mohou 
                schválit půjčku do 24 hodin, zatímco banky potřebují obvykle 2-5 pracovních 
                dnů. Online žádosti jsou zpracovávány rychleji než osobní návštěvy poboček.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Mohu získat půjčku s negativním záznamem v registru?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Zatímco tradiční banky odmítají žadatele se záznamy v registrech, některé 
                nebankovní společnosti nabízejí půjčky i osobám s negativní historií. Tyto 
                půjčky však mají obvykle vyšší úrokové sazby. Vždy si ověřte seriosnost 
                poskytovatele a jeho licenci u ČNB.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-100 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Upozornění pro spotřebitele
        </h2>
        <div className="text-sm text-gray-700 space-y-3">
          <p>
            <strong>Partnerské odkazy:</strong> Tato stránka obsahuje odkazy na produkty 
            našich partnerů. Můžeme obdržet provizi, pokud si vyberete produkt prostřednictvím 
            našich odkazů, avšak toto nijak neovlivňuje naše doporučení ani vaše náklady.
          </p>
          <p>
            <strong>Reprezentativní příklad:</strong> Půjčka 50 000 Kč na 24 měsíců s RPSN 
            15,5 %, úroková sazba 12 % p.a., měsíční splátka 2 432 Kč, celková částka k vrácení 
            58 368 Kč. Podmínky se mohou lišit podle poskytovatele a vaší úvěrové způsobilosti.
          </p>
          <p>
            <strong>Upozornění:</strong> Půjčka je závazek, který musí být splacen. Před 
            podpisem smlouvy pečlivě zvažte svou finanční situaci. Nezapomeňte porovnat nabídky 
            více poskytovatelů.
          </p>
        </div>
      </section>

      <footer className="text-center text-gray-600 text-sm">
        <p>
          Pro více informací o regulaci navštivte{' '}
          <a 
            href="https://www.cnb.cz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Českou národní banku
          </a>
        </p>
      </footer>
    </div>
  )
}
