import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Půjčky v Kynšperk nad Ohří, Karlovarský kraj – Porovnání 2025',
  description: 'Hledáte rychlou půjčku v Kynšperku nad Ohří? Porovnejte nabídky nebankovních půjček s transparentními podmínkami. Schválení online do 24 hodin.',
}

export default function KynsperkNadOhriPage() {
  const nearbyCities = [
    { name: 'Mariánské Lázně', slug: 'marianske-lazne' },
    { name: 'Lázně Kynžvart', slug: 'lazne-kynzvart' },
    { name: 'Cheb', slug: 'cheb' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <Link href="/cz" className="hover:text-blue-600">Domů</Link>
        <span className="mx-2">/</span>
        <Link href="/cz/karlovarsky-kraj" className="hover:text-blue-600">Karlovarský kraj</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Kynšperk nad Ohří</span>
      </nav>

      {/* H1 Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Půjčky v Kynšperku nad Ohří, Karlovarský kraj
        </h1>
      </header>

      {/* Intro */}
      <section className="mb-8 prose max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed">
          V Kynšperku nad Ohří máte přístup k širokému spektru nebankovních půjček, od krátkodobých 
          hotovostních půjček až po střednědobé spotřebitelské úvěry. Místní i celostátní 
          poskytovatelé nabízejí konkurenceschopné sazby od 10 % do 30 % RPSN pro klienty s dobrou 
          bonitou. Typické půjčky se pohybují v rozmezí 5 000 Kč až 100 000 Kč se splatností 
          3 měsíce až 5 let. Všichni poskytovatelé musí dodržovat český zákon o spotřebitelském 
          úvěru a být registrováni u České národní banky. Online žádosti jsou zpracovávány rychle, 
          obvykle do 24 hodin, a vyžadují pouze základní doklady totožnosti a důkaz o příjmu. 
          Před podpisem smlouvy si pečlivě přečtěte všechny podmínky včetně RPSN, celkové částky 
          splatné a případných poplatků za předčasné splacení.
        </p>
      </section>

      {/* Offer Iframe Placeholder */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Dostupné Nabídky Půjček</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center min-h-[400px] flex items-center justify-center">
          <div>
            <p className="text-gray-700 mb-4">
              <strong>Porovnání nabídek pro Kynšperk nad Ohří</strong>
            </p>
            <p className="text-sm text-gray-600">
              Zde se zobrazí aktuální nabídky od našich důvěryhodných partnerů
            </p>
            {/* Partner feed iframe would be inserted here */}
          </div>
        </div>
      </section>

      {/* Local Regulations */}
      <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4">Místní Regulace a Ochrana</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <p className="text-gray-700">
              <strong>Strop úrokových sazeb:</strong> RPSN nesmí překročit zákonné maximum 
              stanovené ČNB pro nebankovní poskytovatele.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <p className="text-gray-700">
              <strong>Registrace poskytovatelů:</strong> Každý poskytovatel půjček musí být 
              zapsán v registru ČNB a splňovat přísné požadavky na kapitál a transparentnost.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <p className="text-gray-700">
              <strong>Právo na odstoupení:</strong> Zákazník může odstoupit od smlouvy do 14 
              kalendářních dnů bez sankce nebo udání důvodu.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <p className="text-gray-700">
              <strong>Předsmluvní informace:</strong> Poskytovatel musí před podpisem poskytnout 
              standardní evropský formulář s úplnými informacemi o úvěru.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <p className="text-gray-700">
              <strong>Ochrana proti nadměrnému zadlužení:</strong> Poskytovatelé musí posoudit 
              schopnost splácet před poskytnutím úvěru.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <p className="text-gray-700">
              <strong>Řešení sporů:</strong> Nespokojení zákazníci mohou podat stížnost 
              k Finančnímu arbitrovi České republiky.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <p className="text-gray-700">
              <strong>GDPR ochrana:</strong> Osobní údaje musí být zpracovávány v souladu s 
              nařízením GDPR a českým zákonem o ochraně osobních údajů.
            </p>
          </li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6">Často Kladené Otázky</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Jaké dokumenty potřebuji k žádosti o půjčku v Kynšperku nad Ohří?
            </h3>
            <p className="text-gray-700">
              Pro online žádost obvykle potřebujete platný občanský průkaz nebo pas, důkaz o 
              příjmu (výplatní páska, potvrzení o důchodu) a bankovní spojení. Někteří 
              poskytovatelé mohou vyžadovat dodatečné dokumenty v závislosti na výši úvěru.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Jak dlouho trvá schválení půjčky v Kynšperku nad Ohří?
            </h3>
            <p className="text-gray-700">
              Online žádosti jsou obvykle vyhodnoceny do několika hodin. Po schválení mohou být 
              peníze na vašem účtu do 24 hodin v pracovních dnech. Rychlost závisí na poskytovateli 
              a úplnosti vaší dokumentace.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Mohu získat půjčku v Kynšperku nad Ohří se záporným záznamem v registru?
            </h3>
            <p className="text-gray-700">
              Závisí na poskytovateli. Někteří poskytovatelé nabízejí půjčky pro klienty se 
              záporným záznamem, ale s vyššími úrokovými sazbami a nižšími částkami. Je důležité 
              být transparentní ohledně vaší finanční historie.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Jaký je rozdíl mezi RPSN a úrokovou sazbou?
            </h3>
            <p className="text-gray-700">
              Úroková sazba je pouze náklady na půjčené peníze, zatímco RPSN (Roční Procentní 
              Sazba Nákladů) zahrnuje všechny náklady úvěru - úroky, poplatky za zřízení, pojištění 
              a další. RPSN je nejlepší ukazatel skutečné ceny půjčky.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Kde mohu ověřit, že poskytovatel je legální a licencovaný?
            </h3>
            <p className="text-gray-700">
              Všechny licencované poskytovatele můžete zkontrolovat v registru na webových 
              stránkách České národní banky (www.cnb.cz). Nikdy nespolupracujte s poskytovatelem, 
              který není v tomto registru uveden.
            </p>
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          <Link href="/cz/karlovarsky-kraj" className="text-blue-600 hover:underline">
            ← Zpět na Karlovarský kraj
          </Link>
        </h2>
        <h3 className="text-xl font-semibold mb-4 mt-6">Půjčky ve městech poblíž</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {nearbyCities.map((nearbyCity) => (
            <Link
              key={nearbyCity.slug}
              href={`/cz/karlovarsky-kraj/${nearbyCity.slug}`}
              className="block"
            >
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-base">{nearbyCity.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Půjčky v {nearbyCity.name}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Disclosure */}
      <section className="bg-gray-100 rounded-lg p-6 text-sm text-gray-700">
        <h3 className="font-semibold mb-2">Zveřejnění partnerství</h3>
        <p className="mb-4">
          Tento web spolupracuje s vybranými poskytovateli půjček a může získat provizi, pokud 
          prostřednictvím našich odkazů uzavřete smlouvu. Toto nijak neovlivní cenu nebo podmínky 
          vaší půjčky. Naším cílem je poskytnout nezávislé srovnání pro informované rozhodování.
        </p>
        <h3 className="font-semibold mb-2">Reprezentativní příklad</h3>
        <p>
          Půjčka 15 000 Kč na dobu 18 měsíců. Úroková sazba 19,9 % p.a., RPSN 21,8 %, 
          měsíční splátka 960 Kč. Celková splatná částka: 17 280 Kč. Tento příklad je pouze 
          ilustrativní. Skutečné podmínky závisí na poskytovateli, výši úvěru a vaší bonitě.
        </p>
      </section>

      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Domů',
                    item: 'https://www.example.com/cz'
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Karlovarský kraj',
                    item: 'https://www.example.com/cz/karlovarsky-kraj'
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Kynšperk nad Ohří',
                    item: 'https://www.example.com/cz/karlovarsky-kraj/kynsperk-nad-ohri'
                  }
                ]
              },
              {
                '@type': 'FinancialService',
                name: 'Půjčky v Kynšperku nad Ohří',
                description: 'Porovnání půjček v Kynšperku nad Ohří, Karlovarský kraj',
                areaServed: {
                  '@type': 'City',
                  name: 'Kynšperk nad Ohří',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'Karlovarský kraj'
                  }
                }
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Jaké dokumenty potřebuji k žádosti o půjčku v Kynšperku nad Ohří?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Pro online žádost obvykle potřebujete platný občanský průkaz nebo pas, důkaz o příjmu (výplatní páska, potvrzení o důchodu) a bankovní spojení.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Jak dlouho trvá schválení půjčky v Kynšperku nad Ohří?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Online žádosti jsou obvykle vyhodnoceny do několika hodin. Po schválení mohou být peníze na vašem účtu do 24 hodin v pracovních dnech.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Mohu získat půjčku v Kynšperku nad Ohří se záporným záznamem v registru?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Závisí na poskytovateli. Někteří poskytovatelé nabízejí půjčky pro klienty se záporným záznamem, ale s vyššími úrokovými sazbami a nižšími částkami.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Jaký je rozdíl mezi RPSN a úrokovou sazbou?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Úroková sazba je pouze náklady na půjčené peníze, zatímco RPSN zahrnuje všechny náklady úvěru - úroky, poplatky za zřízení, pojištění a další.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Kde mohu ověřit, že poskytovatel je legální a licencovaný?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Všechny licencované poskytovatele můžete zkontrolovat v registru na webových stránkách České národní banky (www.cnb.cz).'
                    }
                  }
                ]
              },
              {
                '@type': 'OfferCatalog',
                name: 'Nabídky půjček v Kynšperku nad Ohří',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'LoanOrCredit',
                      name: 'Nebankovní půjčka',
                      description: 'Rychlé nebankovní půjčky pro obyvatele Kynšperk nad Ohří'
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
    </div>
  );
}
