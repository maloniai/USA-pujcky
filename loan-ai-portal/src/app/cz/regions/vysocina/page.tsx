import { Metadata } from 'next';
import Link from 'next/link';
import { vysocinaRegionContent, vysocinaCities } from '@/data/cz-vysocina';
import { VolsorLoanForm } from '@/components/cz/volsor-loan-form';

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Porovnání půjček v kraji Vysočina ${currentYear} | Loan-Platform.com`,
  description: `Srovnejte půjčky v kraji Vysočina. Osobní úvěry od ověřených poskytovatelů v Jihlavě, Třebíči, Havlíčkově Brodě a dalších městech. Průměrné RPSN ${vysocinaRegionContent.averageRpsn}%.`,
  keywords: ['půjčky Vysočina', 'úvěr Jihlava', 'nebankovní půjčka', 'rychlá půjčka', 'půjčka online'],
  openGraph: {
    title: `Půjčky v kraji Vysočina ${currentYear}`,
    description: `Porovnejte licencované poskytovatele půjček v kraji Vysočina. Průměrné RPSN ${vysocinaRegionContent.averageRpsn}%.`,
    type: 'website'
  }
};

export default function VysocinaRegionPage() {
  const region = vysocinaRegionContent;

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
            <span>Kraj Vysočina</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Půjčky v {region.name}
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-blue-100">
            {region.overview}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{(region.population / 1000).toFixed(0)}K</div>
              <div className="text-sm text-blue-100">Obyvatel</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{region.averageRpsn}%</div>
              <div className="text-sm text-blue-100">Průměrné RPSN</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{region.cityCount}</div>
              <div className="text-sm text-blue-100">Měst</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-blue-100">Dostupnost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Apply Form */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 mb-12 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Zažádejte o půjčku nyní</h2>
          <p className="text-gray-600 mb-6">
            Vyplňte formulář a obdržíte nabídky od licencovaných poskytovatelů v kraji Vysočina
          </p>
          <VolsorLoanForm affiliate={9330} campaign={`vysocina-${region.slug}`} partnerName={`Volsor ${region.capital}`} />
        </div>
      </section>

      {/* Regulation Summary */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Regulace půjček v kraji Vysočina</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {region.regulationSummary.map((item, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulator Links */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Úřady a regulátoři</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {region.regulatorLinks.map((regulator, index) => (
              <a
                key={index}
                href={regulator.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2">{regulator.name}</h3>
                <p className="text-sm text-gray-600">{regulator.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Lenders */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Doporučení poskytovatelé v kraji Vysočina</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {region.featuredLenders.map((lender, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-xl text-gray-900">{lender.name}</h3>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{lender.license}</span>
                </div>
                <p className="text-gray-600 mb-4">{lender.description}</p>
                <div className="flex justify-between text-sm">
                  <div>
                    <span className="text-gray-500">Částka:</span>
                    <span className="font-semibold text-gray-900 ml-2">{lender.loanRange}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">RPSN:</span>
                    <span className="font-semibold text-blue-600 ml-2">{lender.rpsn}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Cities */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Půjčky ve městech kraje Vysočina</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {region.topCities.map((city) => (
              <Link
                key={city.slug}
                href={`/cz/regions/vysocina/${city.slug}`}
                className="block p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600">
                  {city.name}
                </h3>
                <div className="text-sm text-gray-500 mb-3">{city.population} obyvatel</div>
                <p className="text-gray-600 mb-3">{city.shortDescription}</p>
                <div className="text-sm text-gray-500">
                  <strong>Ekonomika:</strong> {city.economy}
                </div>
                <div className="mt-4 text-blue-600 font-semibold group-hover:underline">
                  Porovnat půjčky v {city.name} →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teasers */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Užitečné články</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {region.blogTeasers.map((article, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-all">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{article.category}</span>
                <h3 className="font-bold text-lg text-gray-900 mt-3 mb-2">{article.title}</h3>
                <p className="text-gray-600">{article.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schema Markup */}
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
                item: 'https://loan-platform.com/cz'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Regiony',
                item: 'https://loan-platform.com/cz/regions'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Kraj Vysočina',
                item: 'https://loan-platform.com/cz/regions/vysocina'
              }
            ]
          })
        }}
      />
    </div>
  );
}
