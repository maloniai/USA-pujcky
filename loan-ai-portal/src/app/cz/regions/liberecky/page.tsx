import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { libereckyRegionContent } from '@/data/cz-liberecky';

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Půjčky v Libereckém kraji - Srovnání ${currentYear}`,
  description: 'Srovnejte půjčky od ověřených poskytovatelů v Libereckém kraji. Liberec, Jablonec nad Nisou a další města. Online žádost během několika minut.',
  keywords: 'půjčky Liberecký kraj, půjčky Liberec, nebankovní úvěr, spotřebitelský úvěr, RPSN',
  openGraph: {
    title: `Půjčky v Libereckém kraji - Srovnání ${currentYear}`,
    description: 'Najděte nejlepší půjčky v Libereckém kraji od licencovaných poskytovatelů pod dohledem ČNB.',
    type: 'website',
    locale: 'cs_CZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Půjčky v Libereckém kraji - Srovnání ${currentYear}`,
    description: 'Srovnejte půjčky v Libereckém kraji od ověřených poskytovatelů.',
  },
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
      "name": "Liberecký kraj",
      "item": "https://loan-platform.com/cz/regions/liberecky"
    }
  ]
};

export default function LibereckyRegionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-4 text-blue-100">
            <Link href="/" className="hover:text-white">Domů</Link>
            <span className="mx-2">›</span>
            <Link href="/cz" className="hover:text-white">Půjčky v Česku</Link>
            <span className="mx-2">›</span>
            <span>Liberecký kraj</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Půjčky v Libereckém kraji
          </h1>
          
          <p className="text-xl text-blue-50 max-w-3xl mb-8">
            {libereckyRegionContent.overview}
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{libereckyRegionContent.cityCount}</div>
              <div className="text-blue-100">Měst</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{(libereckyRegionContent.population / 1000).toFixed(0)}K</div>
              <div className="text-blue-100">Obyvatel</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{libereckyRegionContent.averageRpsn}%</div>
              <div className="text-blue-100">Průměrné RPSN</div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Application Form */}
      <section className="container mx-auto px-4 -mt-8 mb-12">
        <Card className="shadow-xl">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Porovnejte půjčky v Libereckém kraji</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
              <p className="text-center text-lg mb-6">
                Vyplňte formulář a získejte nabídky od licencovaných poskytovatelů
              </p>
              <div className="flex justify-center">
                <a 
                  href={`https://track.fibonad.com/click?campaign_id=9300&pub_id=PUBLISHER_ID`}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-block"
                >
                  Požádat o půjčku →
                </a>
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                ✓ Porovnání nabídek zdarma &nbsp;&nbsp; ✓ Žádost do 5 minut &nbsp;&nbsp; ✓ Licencovaní poskytovatelé
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Regulation Summary */}
      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Regulace půjček v Libereckém kraji</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {libereckyRegionContent.regulationSummary.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-blue-600 font-semibold mb-2">{item.title}</div>
                <div className="text-gray-700 text-sm">{item.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Regulator Links */}
      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Užitečné odkazy pro spotřebitele</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {libereckyRegionContent.regulatorLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform"
            >
              <Card className="h-full hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="font-semibold text-blue-600 mb-2">{link.name}</div>
                  <div className="text-sm text-gray-600">{link.description}</div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Lenders */}
      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Ověření poskytovatelé v Libereckém kraji</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {libereckyRegionContent.featuredLenders.map((lender, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="font-bold text-lg mb-2">{lender.name}</div>
                <div className="text-sm text-gray-600 mb-3">{lender.description}</div>
                <div className="space-y-1 text-sm">
                  <div><span className="font-semibold">Částka:</span> {lender.loanRange}</div>
                  <div><span className="font-semibold">RPSN:</span> {lender.rpsn}</div>
                  <div className="text-green-600 font-semibold mt-2">✓ {lender.license}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-sm text-gray-600 mt-6">
          Všichni poskytovatelé jsou licencováni a dohlíženi Českou národní bankou.
        </p>
      </section>

      {/* Top Cities */}
      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Hlavní města v Libereckém kraji</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {libereckyRegionContent.topCities.map((city, index) => (
            <Link key={index} href={`/cz/regions/liberecky/${city.slug}`}>
              <Card className="hover:shadow-xl transition-all hover:scale-105 cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-600">{city.name}</h3>
                  <p className="text-gray-700 text-sm mb-3">{city.shortDescription}</p>
                  <div className="text-sm text-gray-600">
                    <div><span className="font-semibold">Obyvatel:</span> {city.population}</div>
                    <div><span className="font-semibold">Ekonomika:</span> {city.economy}</div>
                  </div>
                  <div className="mt-4 text-blue-600 font-semibold text-sm">
                    Zobrazit půjčky v {city.name} →
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Blog Teasers */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Finanční rady pro Liberecký kraj</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {libereckyRegionContent.blogTeasers.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{article.category}</div>
                  <h3 className="font-bold text-lg mb-3">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <Link href="/cz/learn" className="text-blue-600 font-semibold text-sm hover:underline">
                    Číst více →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12">
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Potřebujete pomoc s výběrem půjčky?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Náš tým vám pomůže najít nejvhodnější půjčku pro vaši situaci v Libereckém kraji. 
              Porovnáme nabídky a poradíme s výběrem.
            </p>
            <Link 
              href="/cz/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Kontaktujte nás
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
