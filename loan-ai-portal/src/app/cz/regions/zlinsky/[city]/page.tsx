import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { zlinskyCities } from '@/data/cz-zlinsky';
import { VolsorLoanForm } from '@/components/cz/volsor-loan-form';

const currentYear = new Date().getFullYear();

export async function generateStaticParams() {
  return zlinskyCities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = zlinskyCities.find((c) => c.slug === params.city);
  
  if (!city) {
    return {
      title: 'Město nenalezeno',
    };
  }

  return {
    title: `Půjčky v ${city.name} ${currentYear} | Loan-Platform.com`,
    description: `${city.intro.substring(0, 155)}`,
    keywords: [`půjčky ${city.name}`, 'úvěr', 'nebankovní půjčka', 'rychlá půjčka', 'online půjčka'],
  };
}

export default function ZlinskyCityPage({ params }: { params: { city: string } }) {
  const city = zlinskyCities.find((c) => c.slug === params.city);

  if (!city) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/cz" className="hover:underline">Domů</Link>
            {' › '}
            <Link href="/cz/regions" className="hover:underline">Regiony</Link>
            {' › '}
            <Link href="/cz/regions/zlinsky" className="hover:underline">Zlínský kraj</Link>
            {' › '}
            <span>{city.name}</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Půjčky v {city.name}
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-blue-100">
            {city.intro}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {city.highlights.map((highlight, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">{highlight.value}</div>
                <div className="text-sm text-blue-100">{highlight.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Apply Form */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 mb-12 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Zažádejte o půjčku v {city.name}</h2>
          <p className="text-gray-600 mb-6">
            Vyplňte formulář a obdržíte nabídky od licencovaných poskytovatelů
          </p>
          <VolsorLoanForm affiliate={9350} campaign={`zlinsky-${city.slug}`} partnerName={`Volsor ${city.name}`} />
        </div>
      </section>

      {/* Regulations */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Regulace a ochrana spotřebitele</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Dohled ČNB</h3>
              <p className="text-gray-600">Všichni poskytovatelé v {city.name} musí mít licenci České národní banky.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Zákon č. 257/2016 Sb.</h3>
              <p className="text-gray-600">Transparentní podmínky, jasné RPSN a právo na informace před podpisem.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Ověření bonity</h3>
              <p className="text-gray-600">Poskytovatelé musí ověřit vaši schopnost splácet před schválením.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg text-gray-900 mb-2">14denní odstoupení</h3>
              <p className="text-gray-600">Můžete odstoupit od smlouvy do 14 dnů bez sankčních poplatků.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg text-gray-900 mb-2">GDPR ochrana</h3>
              <p className="text-gray-600">Vaše osobní údaje jsou chráněny podle Nařízení EU 2016/679.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Finanční arbitr</h3>
              <p className="text-gray-600">V případě sporů se můžete obrátit na Finanční arbitr ČR.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Profile */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Finanční profil {city.name}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Klíčové sektory</h3>
              <ul className="space-y-2">
                {city.focusSectors.map((sector, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">{sector}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Využití půjček</h3>
              <ul className="space-y-2">
                {city.loanUseCases.map((useCase, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Profil dlužníka</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Typický dlužník</p>
                <p className="font-semibold text-gray-900">{city.borrowerProfile.typical}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Měsíční příjem</p>
                <p className="font-semibold text-gray-900">{city.borrowerProfile.income}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Věkové rozmezí</p>
                <p className="font-semibold text-gray-900">{city.borrowerProfile.ageRange}</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Faktory AI hodnocení</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {city.aiFactors.map((factor, index) => (
                <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Často kladené otázky</h2>
          <div className="space-y-4">
            {city.faq.map((item, index) => (
              <details key={index} className="border-2 border-gray-200 rounded-lg p-5 hover:border-blue-500 transition-all">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {item.question}
                </summary>
                <p className="mt-3 text-gray-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Půjčky v okolních městech</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {city.nearbyCities.map((nearbyCity) => (
              <Link
                key={nearbyCity}
                href={`/cz/regions/zlinsky/${nearbyCity.toLowerCase().replace(/\s+/g, '-').replace(/í/g, 'i').replace(/á/g, 'a').replace(/é/g, 'e').replace(/ý/g, 'y').replace(/ú/g, 'u').replace(/ů/g, 'u').replace(/ě/g, 'e').replace(/š/g, 's').replace(/č/g, 'c').replace(/ř/g, 'r').replace(/ž/g, 'z').replace(/ň/g, 'n').replace(/ť/g, 't').replace(/ď/g, 'd')}`}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all text-center"
              >
                <p className="font-semibold text-gray-900">{nearbyCity}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-gray-50 rounded-xl p-6 md:p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Důležité informace</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Loan-Platform.com není poskytovatel úvěrů. Porovnáváme poskytovatele s licencí ČNB. 
            Schválení půjčky, úrokové sazby a podmínky podléhají hodnotícím kritériím jednotlivých poskytovatelů.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Reprezentativní příklad:</strong> Půjčka 50 000 Kč na 24 měsíců s RPSN 19,9 % má měsíční splátku 2 391 Kč, 
            celková částka k úhradě 57 384 Kč, celkové náklady na úvěr 7 384 Kč. Před uzavřením smlouvy pečlivě zvažte svou schopnost splácet.
          </p>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FinancialService',
            name: `Půjčky v ${city.name}`,
            description: city.intro,
            areaServed: {
              '@type': 'City',
              name: city.name,
            },
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: city.faq.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Domů',
                item: 'https://loan-platform.com/cz',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Zlínský kraj',
                item: 'https://loan-platform.com/cz/regions/zlinsky',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: city.name,
                item: `https://loan-platform.com/cz/regions/zlinsky/${city.slug}`,
              },
            ],
          })
        }}
      />
    </div>
  );
}
