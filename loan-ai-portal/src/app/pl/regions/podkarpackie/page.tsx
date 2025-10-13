import { Metadata } from 'next';
import Link from 'next/link';
import { podkarpackieData } from '@/data/pl-podkarpackie';
import { StickyApplyButton } from '@/components/sticky-apply-button';

export const metadata: Metadata = {
  title: 'Pożyczki w Podkarpackie – Porównaj oferty 2025',
  description: 'Kompleksowy przewodnik po pożyczkach i kredytach w województwie podkarpackie. Sprawdź najlepsze oferty kredytowe w regionie.',
  keywords: 'pożyczki podkarpackie, kredyty Podkarpackie'
};

export default function PodkarpackieRegionPage() {
  const { region } = podkarpackieData;

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6 text-gray-600">
          <Link href="/pl" className="hover:text-blue-600">Polska</Link>
          <span className="mx-2">/</span>
          <span>{region.name}</span>
        </nav>

        {/* H1 Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Pożyczki w {region.name}
        </h1>

        {/* Intro Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-600">Populacja</p>
              <p className="text-2xl font-semibold text-gray-900">{region.population}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Stolica</p>
              <p className="text-2xl font-semibold text-gray-900">{region.capital}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Średni RRSO</p>
              <p className="text-2xl font-semibold text-blue-600">{region.avgRRSO}</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">{region.description}</p>
        </div>

        {/* Local Regulations */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kluczowe Regulacje w {region.name}</h2>
          <ul className="space-y-2">
            {region.keyRegulations.map((reg, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">{reg}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Lenders */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Licencjonowani Pożyczkodawcy</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {region.lenders.map((lender, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{lender.name}</h3>
                <p className="text-sm text-gray-600 mb-2">Oferta:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  {lender.types.map((type, idx) => (
                    <li key={idx}>• {type}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Special Programs */}
        <div className="bg-green-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Specjalne Programy Finansowania</h2>
          <ul className="space-y-2">
            {region.specialPrograms.map((program, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">{program}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Cities */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Miasta w {region.name}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {region.featuredCities.map((city) => (
              <Link
                key={city.slug}
                href={`/pl/regions/podkarpackie/${city.slug}`}
                className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-700">
                  {city.name}
                </h3>
                <p className="text-sm text-gray-600">Zobacz oferty pożyczek</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Regulatory Links */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Instytucje Regulacyjne</h2>
          <div className="flex flex-wrap gap-4">
            {region.regulatoryLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        {region.blogPosts && region.blogPosts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artykuły i Porady</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {region.blogPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm">{post.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Compliance Disclosure */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-sm text-gray-700">
            <strong>Informacja o współpracy afiliacyjnej:</strong> Niektóre linki na tej stronie mogą być linkami partnerskimi. 
            Możemy otrzymać prowizję, jeśli złożysz wniosek przez naszą stronę. Nie wpływa to na warunki oferty.
            <br /><br />
            <strong>Przykład reprezentatywny:</strong> Pożyczka 10 000 PLN na 12 miesięcy, RRSO 10%, całkowita kwota do spłaty: 10 500 PLN.
            <br /><br />
            <strong>Ważne:</strong> Przed złożeniem wniosku sprawdź swoją zdolność kredytową. Pożyczaj odpowiedzialnie.
          </p>
        </div>
      </div>

      <StickyApplyButton locale="pl" />

      {/* Schema.org JSON-LD */}
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
                name: 'Polska',
                item: 'https://example.com/pl'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: region.name,
                item: `https://example.com/pl/regions/podkarpackie`
              }
            ]
          })
        }}
      />
    </>
  );
}
