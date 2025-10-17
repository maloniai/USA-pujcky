import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { plzenskyCities, plzenskyRegionContent } from '@/data/cz-plzensky-full';
import { notFound } from 'next/navigation';

const currentYear = new Date().getFullYear();

export async function generateStaticParams() {
  return plzenskyCities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const cityData = plzenskyCities.find(c => c.slug === params.city);
  
  if (!cityData) {
    return {
      title: 'Město nenalezeno',
    };
  }

  return {
    title: `Půjčky v ${cityData.name}, Plzeňský kraj - Srovnání ${currentYear}`,
    description: `Porovnejte půjčky v ${cityData.name}. ${cityData.borrowerProfile.typical}. Najděte nabídky od ověřených poskytovatelů a zažádejte online.`,
    keywords: `půjčky ${cityData.name}, úvěr ${cityData.name}, nebankovní půjčka, RPSN, Plzeňský kraj`,
    openGraph: {
      title: `Půjčky v ${cityData.name}, Plzeňský kraj - Srovnání ${currentYear}`,
      description: `Najděte nejlepší půjčky v ${cityData.name} od licencovaných poskytovatelů.`,
      type: 'website',
      locale: 'cs_CZ',
    },
  };
}

export default function PlzenskyCityPage({ params }: { params: { city: string } }) {
  const cityData = plzenskyCities.find(c => c.slug === params.city);

  if (!cityData) {
    notFound();
  }

  const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": `Půjčky v ${cityData.name}`,
    "description": `Srovnání půjček a úvěrů v ${cityData.name}, Plzeňský kraj`,
    "areaServed": {
      "@type": "City",
      "name": cityData.name,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Plzeňský kraj"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Půjčky v " + cityData.name,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "Spotřebitelský úvěr",
            "amount": {
              "@type": "MonetaryAmount",
              "currency": "CZK",
              "minValue": cityData.loanAmountRange?.min ?? 5000,
              "maxValue": cityData.loanAmountRange?.max ?? 500000
            }
          }
        }
      ]
    },
    "potentialAction": {
      "@type": "ConsumeAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `https://loan-platform.com/cz/regions/plzensky/${cityData.slug}`,
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": cityData.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Domů",
        "item": "https://loan-platform.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Půjčky v Česku",
        "item": "https://loan-platform.com/cz"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Plzeňský kraj",
        "item": "https://loan-platform.com/cz/regions/plzensky"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": cityData.name,
        "item": `https://loan-platform.com/cz/regions/plzensky/${cityData.slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-4 text-blue-100">
            <Link href="/" className="hover:text-white">Domů</Link>
            <span className="mx-2">›</span>
            <Link href="/cz" className="hover:text-white">Půjčky v Česku</Link>
            <span className="mx-2">›</span>
            <Link href="/cz/regions/plzensky" className="hover:text-white">Plzeňský kraj</Link>
            <span className="mx-2">›</span>
            <span>{cityData.name}</span>
          </nav>
          
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Půjčky v {cityData.name}
            </h1>
            <Link 
              href="/cz/regions/plzensky"
              className="text-white hover:text-blue-100 text-sm flex items-center gap-2"
            >
              ← Zpět na Plzeňský kraj
            </Link>
          </div>

          <p className="text-xl text-blue-50 max-w-3xl">
            {cityData.intro}
          </p>
        </div>
      </header>

      {/* City Highlights */}
      <section className="container mx-auto px-4 -mt-6 mb-12">
        <div className="grid md:grid-cols-4 gap-4">
          {(cityData.highlights ?? []).map((highlight, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{highlight.value}</div>
                <div className="text-sm text-gray-600">{highlight.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Loan Offer Section */}
      <section className="container mx-auto px-4 mb-12">
        <Card className="shadow-xl bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Získejte půjčku v {cityData.name}</h2>
            <p className="text-center text-lg mb-6 text-gray-700">
              Porovnejte nabídky od licencovaných poskytovatelů a vyberte tu nejvhodnější pro vaši situaci
            </p>
            <div className="flex justify-center mb-6">
              <a
                href={`https://track.fibonad.com/click?campaign_id=${9270 + plzenskyCities.findIndex(c => c.slug === cityData.slug)}&pub_id=PUBLISHER_ID`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-block"
              >
                Požádat o půjčku v {cityData.name} →
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Porovnání zdarma</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Žádost do 5 minut</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Bez závazků</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Regulations */}
      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold mb-8">Regulace a ochrana spotřebitele</h2>
        <Card>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {plzenskyRegionContent.regulationSummary.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Financial Profile */}
      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold mb-8">Finanční profil {cityData.name}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-4 text-blue-600">Klíčové sektory</h3>
              <ul className="space-y-2 text-sm">
                {cityData.focusSectors.map((sector, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>{sector}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-4 text-blue-600">Běžné použití půjček</h3>
              <ul className="space-y-2 text-sm">
                {cityData.loanUseCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-4 text-blue-600">Typický žadatel</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold">Profil:</span>
                  <p className="text-gray-600 mt-1">{cityData.borrowerProfile.typical}</p>
                </div>
                <div>
                  <span className="font-semibold">Příjem:</span>
                  <p className="text-gray-600 mt-1">{cityData.borrowerProfile.income}</p>
                </div>
                <div>
                  <span className="font-semibold">Věk:</span>
                  <p className="text-gray-600 mt-1">{cityData.borrowerProfile.ageRange}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-4 text-blue-600">AI faktory posouzení</h3>
              <ul className="space-y-2 text-sm">
                {(cityData.aiFactors ?? []).map((factor, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold mb-8">Často kladené otázky o půjčkách v {cityData.name}</h2>
        <div className="space-y-4">
          {cityData.faq.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Půjčky v okolních městech</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {(cityData.nearbyCities ?? []).map((nearbyCity, index) => {
              const nearbyData = plzenskyCities.find(c => c.name === nearbyCity);
              return (
                <Link key={index} href={`/cz/regions/plzensky/${nearbyData?.slug || ''}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardContent className="p-4 text-center">
                      <div className="font-semibold text-blue-600">{nearbyCity}</div>
                      <div className="text-xs text-gray-600 mt-1">Zobrazit nabídky →</div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="container mx-auto px-4 py-12">
        <Card className="bg-blue-50">
          <CardContent className="p-8">
            <h3 className="font-bold text-lg mb-4">Transparentnost a odpovědné úvěrování</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <strong>Loan-Platform.com</strong> není poskytovatel úvěrů. Jsme srovnávací platforma, 
                která porovnává nabídky licencovaných společností pod dohledem České národní banky (ČNB). 
                Můžeme získat provizi z doporučení.
              </p>
              <p>
                <strong>Reprezentativní příklad:</strong> Půjčka 20 000 Kč na 12 měsíců s RPSN 35 % 
                znamená měsíční splátku 1 850 Kč a celkovou částku k zaplacení 22 200 Kč. 
                Skutečné podmínky se mohou lišit podle poskytovatele a vaší bonity.
              </p>
              <p>
                <strong>Odpovědné půjčování:</strong> Před podáním žádosti si ověřte svou schopnost 
                splácet. Pokud máte finanční potíže, kontaktujte poradce pro dluhové poradenství nebo 
                Finanční arbitr ČR.
              </p>
              <p>
                <strong>Ochrana údajů:</strong> Vaše osobní údaje jsou chráněny podle GDPR (Nařízení 2016/679). 
                Používáme je pouze pro zprostředkování půjček a nikdy je neprodáváme třetím stranám.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sticky Apply Button (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden shadow-lg z-50">
        <a
          href={`https://track.fibonad.com/click?campaign_id=${9270 + plzenskyCities.findIndex(c => c.slug === cityData.slug)}&pub_id=PUBLISHER_ID`}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
        >
          Požádat o půjčku →
        </a>
      </div>
    </div>
  );
}
