import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { podlaskieData } from '@/data/pl-podlaskie';
import { StickyApplyButton } from '@/components/sticky-apply-button';

type Props = {
  params: { city: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cityData = podlaskieData.cities[params.city];
  
  if (!cityData) {
    return {
      title: 'Miasto nie znalezione'
    };
  }

  return {
    title: `Pożyczki w ${cityData.name}, ${cityData.voivodeship} – Porównaj 2025`,
    description: cityData.description.substring(0, 155),
    keywords: `pożyczki ${cityData.name}, kredyty ${cityData.name}, kredyty ${cityData.voivodeship}`
  };
}

export default function CityPage({ params }: Props) {
  const cityData = podlaskieData.cities[params.city];
  const { region } = podlaskieData;

  if (!cityData) {
    notFound();
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6 text-gray-600">
          <Link href="/pl" className="hover:text-blue-600">Polska</Link>
          <span className="mx-2">/</span>
          <Link href="/pl/regions/podlaskie" className="hover:text-blue-600">{region.name}</Link>
          <span className="mx-2">/</span>
          <span>{cityData.name}</span>
        </nav>

        {/* H1 Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Pożyczki w {cityData.name}, {cityData.voivodeship}
        </h1>

        {/* City Overview */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">Populacja</p>
              <p className="text-xl font-semibold text-gray-900">{cityData.population}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Województwo</p>
              <p className="text-xl font-semibold text-gray-900">{cityData.voivodeship}</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">{cityData.description}</p>
        </div>

        {/* Local Regulations */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Lokalne Regulacje Kredytowe</h2>
          <ul className="space-y-2">
            {cityData.localRegulations.map((reg, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">{reg}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Najczęściej Zadawane Pytania</h2>
          <div className="space-y-4">
            {cityData.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Cities */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pożyczki w Pobliżu</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {cityData.nearbyCities.map((nearbyCity) => (
              <Link
                key={nearbyCity.slug}
                href={`/pl/regions/podlaskie/${nearbyCity.slug}`}
                className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-700">
                  {nearbyCity.name}
                </h3>
                <p className="text-sm text-gray-600">{nearbyCity.distance}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-8 text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Gotowy na złożenie wniosku?
          </h2>
          <p className="text-white mb-6">
            Porównaj oferty i znajdź najlepszą pożyczkę w {cityData.name}
          </p>
          <Link
            href="/pl/apply"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Złóż wniosek online
          </Link>
        </div>

        {/* Compliance Disclosure */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-sm text-gray-700">
            <strong>Informacja o współpracy afiliacyjnej:</strong> Portal porównawczy. Możemy otrzymać prowizję od partnerów.
            <br /><br />
            <strong>Przykład reprezentatywny:</strong> Pożyczka 5 000 PLN na 12 m-cy, RRSO 10%, całkowita kwota do spłaty: 5 250 PLN, rata: 437.50 PLN.
            <br /><br />
            <strong>Ostrzeżenie:</strong> Niespłacenie pożyczki w terminie może skutkować dodatkowymi kosztami. Sprawdź swoją zdolność przed złożeniem wniosku.
          </p>
        </div>
      </div>

      <StickyApplyButton locale="pl" />

      {/* Schema.org JSON-LD for Breadcrumbs */}
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
                name: cityData.voivodeship,
                item: `https://example.com/pl/regions/podlaskie`
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: cityData.name,
                item: `https://example.com/pl/regions/podlaskie/${params.city}`
              }
            ]
          })
        }}
      />

      {/* Schema.org JSON-LD for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: cityData.faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          })
        }}
      />
    </>
  );
}
