import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { kazakhstanRegions, kazakhstanCities } from '@/data/kz-regions';
import { getKZMetadata } from '@/lib/seo';
import ApplyButton from '@/app/kz/components/ApplyButton';

interface CityPageProps {
  params: {
    region: string;
    city: string;
  };
}

// Generate static params for all cities
export async function generateStaticParams() {
  return kazakhstanCities.map((city) => ({
    region: city.region,
    city: city.slug,
  }));
}

// Generate metadata for each city
export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const region = kazakhstanRegions.find((r) => r.slug === params.region);
  if (!region) return {};
  
  const city = kazakhstanCities.find((c) => c.region === params.region && c.slug === params.city);
  if (!city) return {};

  const currentYear = new Date().getFullYear();
  const title = `${city.nameKk} қаласындағы несиелер, ${region.nameKk} – ${currentYear} салыстыру`;
  const description = `${city.nameKk} қаласында несие алу туралы толық ақпарат. Лицензияланған несие берушілерді салыстырыңыз, ережелерді білу және онлайн өтінім беріңіз. Жылдам мақұлдау және ыңғайлы шарттар.`;

  return getKZMetadata({
    title,
    description,
    path: `/kz/cities/${params.region}/${params.city}`,
    type: 'website',
  });
}

// City-specific unique content generator
function getCityUniqueContent(cityName: string, regionName: string): {
  intro: string;
  economicContext: string;
  loanTypes: string[];
  avgRange: { min: number; max: number };
} {
  // Unique content based on city characteristics
  const cityData: Record<string, any> = {
    'almaty': {
      intro: `Алматы Қазақстанның ең ірі қаржы орталығы болып табылады және көптеген лицензияланған несие ұйымдары жұмыс істейді. Қала тұрғындары жеке несиелерден бизнес қаржыландыруға дейін кең ауқымды қаржылық қызметтерге қол жеткізе алады.`,
      economicContext: `Алматыда ірі банктер мен микроқаржы ұйымдары жоғары бәсекелестік жағдайында жұмыс істейді, бұл тұтынушылар үшін қолайлы шарттарды қамтамасыз етеді.`,
      loanTypes: ['Жеке несие', 'Экспресс несие', 'Бизнес несие', 'Автокөлік несиесі', 'Ипотека'],
      avgRange: { min: 50000, max: 5000000 }
    },
    'astana': {
      intro: `Астана Қазақстанның астанасы және тез дамып келе жатқан қаржы нарығы бар. Қалада барлық ірі банктер мен микроқаржы ұйымдарының филиалдары жұмыс істейді, бұл тұрғындарға кең таңдау мүмкіндігін береді.`,
      economicContext: `Астанада мемлекеттік қызметкерлер мен жоғары табыс деңгейіне байланысты несие алу мүмкіндіктері қолайлы.`,
      loanTypes: ['Жеке несие', 'Қысқа мерзімді несие', 'Зейнетақы несиесі', 'Тұрғын үй несиесі', 'Көлік несиесі'],
      avgRange: { min: 50000, max: 4000000 }
    },
    'shymkent': {
      intro: `Шымкент оңтүстік Қазақстанның ірі қаласы және аймақтық қаржы орталығы. Қалада көптеген банктер мен МФҰ-лар тұрғындарға қолжетімді шарттарда несие ұсынады.`,
      economicContext: `Шымкентте сауда мен кәсіпкерлік белсенді дамып жатқандықтан, жеке және бизнес несиелеріне сұраныс жоғары.`,
      loanTypes: ['Жеке несие', 'Экспресс қарыз', 'Бизнес несие', 'Онлайн несие', 'Тұтыну несиесі'],
      avgRange: { min: 30000, max: 3000000 }
    },
    'default': {
      intro: `${cityName} қаласында тұрғындар лицензияланған банктер мен микроқаржы ұйымдарынан несие ала алады. Қазақстан Республикасының заңнамасы несие алушылардың құқықтарын қорғайды және әділ несие шарттарын қамтамасыз етеді.`,
      economicContext: `${regionName} облысында несие нарығы тұрақты дамып келеді және тұрғындарға түрлі несие өнімдері қолжетімді.`,
      loanTypes: ['Жеке несие', 'Қысқа мерзімді несие', 'Онлайн несие', 'Микронесие', 'Тұтыну несиесі'],
      avgRange: { min: 30000, max: 2000000 }
    }
  };

  return cityData[params.city] || { ...cityData['default'], intro: cityData['default'].intro };
}

export default function CityPage({ params }: CityPageProps) {
  const region = kazakhstanRegions.find((r) => r.slug === params.region);
  if (!region) notFound();
  
  const city = kazakhstanCities.find((c) => c.region === params.region && c.slug === params.city);
  if (!city) notFound();

  const currentYear = new Date().getFullYear();
  const cityContent = getCityUniqueContent(params.city, region.nameKk);

  // Get nearby cities for internal linking
  const nearbyCities = kazakhstanCities.filter((c) => c.region === params.region && c.slug !== city.slug).slice(0, 6);

  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FinancialService',
        '@id': `https://www.usa-pujcky.com/kz/cities/${params.region}/${params.city}#financial-service`,
        name: `Несие қызметтері ${city.nameKK}`,
        description: `${city.nameKK} қаласындағы лицензияланған несие берушілер`,
        areaServed: {
          '@type': 'City',
          name: city.nameKK,
          containedIn: {
            '@type': 'State',
            name: region.nameKK
          }
        },
        priceRange: '₸₸',
        url: `https://www.usa-pujcky.com/kz/cities/${params.region}/${params.city}`
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://www.usa-pujcky.com/kz/cities/${params.region}/${params.city}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': 'https://www.usa-pujcky.com/kz',
              name: 'Қазақстандағы несиелер'
            }
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@id': `https://www.usa-pujcky.com/kz/regions/${params.region}`,
              name: `${region.nameKK} облысы`
            }
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@id': `https://www.usa-pujcky.com/kz/cities/${params.region}/${params.city}`,
              name: city.nameKK
            }
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': `https://www.usa-pujcky.com/kz/cities/${params.region}/${params.city}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `${city.nameKK} қаласында несие алу үшін қандай құжаттар қажет?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Жеке куәлік (не паспорт), ЖСН, табыс туралы анықтама және тұрғылықты жері туралы құжаттар қажет. Кейбір несие берушілер қосымша құжаттар сұрауы мүмкін.'
            }
          },
          {
            '@type': 'Question',
            name: `${city.nameKK} қаласында несие бойынша пайыздық мөлшерлеме қандай?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Пайыздық мөлшерлеме несие түріне, мерзіміне және несие берушіге байланысты өзгереді. Банктерде жылдық 12-25%, МФҰ-ларда 30-100% аралығында болуы мүмкін. Нақты шарттарды несие берушіден білу қажет.'
            }
          },
          {
            '@type': 'Question',
            name: 'Несие қандай мерзімге беріледі?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Қысқа мерзімді несиелер 1-12 айға, жеке несиелер 1-5 жылға, ипотекалық несиелер 5-25 жылға беріледі. Нақты мерзімдер несие берушіге және несие түріне байланысты.'
            }
          },
          {
            '@type': 'Question',
            name: `${city.nameKK} қаласында онлайн несие алуға бола ма?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Иә, көптеген банктер мен МФҰ-лар онлайн несие беруді ұсынады. Өтінімді толтырып, жылдам мақұлдау алуға болады. Кейбір несие берушілер құжаттарды офиске апарусыз несие береді.'
            }
          },
          {
            '@type': 'Question',
            name: 'Несие алу үшін несие тарихы міндетті ме?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Жоқ, несие тарихы міндетті емес, бірақ жақсы несие тарихы қолайлы шарттарға қол жеткізуге көмектеседі. Кейбір МФҰ-лар несие тарихы жоқ адамдарға да несие береді.'
            }
          }
        ]
      },
      {
        '@type': 'OfferCatalog',
        '@id': `https://www.usa-pujcky.com/kz/cities/${params.region}/${params.city}#offers`,
        name: `Несие ұсыныстары ${city.nameKK}`,
        itemListElement: cityContent.loanTypes.map((type, index) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LoanOrCredit',
            name: type,
            description: `${type} ${city.nameKK} қаласында`
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <ApplyButton />
        
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="mb-6 text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/kz" className="hover:text-blue-600 transition-colors">
                  Басты бет
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href={`/kz/regions/${params.region}`} className="hover:text-blue-600 transition-colors">
                  {region.nameKK}
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium">{city.nameKK}</li>
            </ol>
          </nav>

          {/* Main Content */}
          <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            {/* H1 Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {city.nameKK} қаласындағы несиелер, {region.nameKK}
            </h1>

            {/* Unique Introduction */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {cityContent.intro}
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                {cityContent.economicContext} Несие алу алдында әрқашан шарттарды мұқият оқып, бірнеше ұсыныстарды салыстыру ұсынылады.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mb-8">
              <Link
                href="/kz/apply"
                className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Онлайн өтінім беру →
              </Link>
            </div>

            {/* Available Loan Types */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {city.nameKK} қаласында қолжетімді несие түрлері
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {cityContent.loanTypes.map((type, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-800 font-medium">{type}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Орташа несие сомасы:</strong> {cityContent.avgRange.min.toLocaleString()} ₸ – {cityContent.avgRange.max.toLocaleString()} ₸
              </p>
            </section>

            {/* Local Regulations */}
            <section className="mb-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Қазақстандағы несие ережелері
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800">
                    <strong>Реттеуші орган:</strong> Қазақстан Республикасының Ұлттық Банкі (ҚР ҰБ) барлық несие ұйымдарын бақылайды
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800">
                    <strong>Пайыздық мөлшерлеме шегі:</strong> Микроқаржы ұйымдары үшін ҚР ҰБ белгілеген лимиттер қолданылады
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800">
                    <strong>Лицензиялау:</strong> Барлық несие берушілер ҚР ҰБ-тан лицензия алуы тиіс
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800">
                    <strong>Тұтынушы құқықтары:</strong> Несие шартын 14 күн ішінде айыппұлсыз бұзуға құқылысыз
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800">
                    <strong>Мәліметтер қорғалуы:</strong> Жеке деректер «Дербес деректер және оларды қорғау туралы» заңына сәйкес қорғалады
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800">
                    <strong>Әділ несие:</strong> Барлық несие шарттары ашық және түсінікті болуы тиіс, жасырын төлемдер рұқсат етілмейді
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800">
                    <strong>Шағымдар:</strong> Несие берушімен келіспеушілік туындаса, ҚР ҰБ-ға шағымдана аласыз
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-700">
                Толық ақпарат үшін:{' '}
                <a href="https://www.nationalbank.kz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  www.nationalbank.kz
                </a>
              </p>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Жиі қойылатын сұрақтар – {city.nameKK}
              </h2>
              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg p-5 hover:bg-gray-100 transition-colors">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                    <span>{city.nameKK} қаласында несие алу үшін қандай құжаттар қажет?</span>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-gray-700">
                    Жеке куәлік (не паспорт), ЖСН, табыс туралы анықтама және тұрғылықты жері туралы құжаттар қажет. Кейбір несие берушілер қосымша құжаттар сұрауы мүмкін.
                  </p>
                </details>

                <details className="group bg-gray-50 rounded-lg p-5 hover:bg-gray-100 transition-colors">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                    <span>{city.nameKK} қаласында несие бойынша пайыздық мөлшерлеме қандай?</span>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-gray-700">
                    Пайыздық мөлшерлеме несие түріне, мерзіміне және несие берушіге байланысты өзгереді. Банктерде жылдық 12-25%, МФҰ-ларда 30-100% аралығында болуы мүмкін. Нақты шарттарды несие берушіден білу қажет.
                  </p>
                </details>

                <details className="group bg-gray-50 rounded-lg p-5 hover:bg-gray-100 transition-colors">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                    <span>Несие қандай мерзімге беріледі?</span>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-gray-700">
                    Қысқа мерзімді несиелер 1-12 айға, жеке несиелер 1-5 жылға, ипотекалық несиелер 5-25 жылға беріледі. Нақты мерзімдер несие берушіге және несие түріне байланысты.
                  </p>
                </details>

                <details className="group bg-gray-50 rounded-lg p-5 hover:bg-gray-100 transition-colors">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                    <span>{city.nameKK} қаласында онлайн несие алуға бола ма?</span>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-gray-700">
                    Иә, көптеген банктер мен МФҰ-лар онлайн несие беруді ұсынады. Өтінімді толтырып, жылдам мақұлдау алуға болады. Кейбір несие берушілер құжаттарды офиске апарусыз несие береді.
                  </p>
                </details>

                <details className="group bg-gray-50 rounded-lg p-5 hover:bg-gray-100 transition-colors">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                    <span>Несие алу үшін несие тарихы міндетті ме?</span>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-gray-700">
                    Жоқ, несие тарихы міндетті емес, бірақ жақсы несие тарихы қолайлы шарттарға қол жеткізуге көмектеседі. Кейбір МФҰ-лар несие тарихы жоқ адамдарға да несие береді.
                  </p>
                </details>
              </div>
            </section>

            {/* Nearby Cities */}
            {nearbyCities.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Жақын қалалардағы несиелер
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {nearbyCities.map((nearbyCity) => (
                    <Link
                      key={nearbyCity.slug}
                      href={`/kz/cities/${params.region}/${nearbyCity.slug}`}
                      className="block p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg hover:shadow-md transition-all hover:scale-105"
                    >
                      <span className="text-gray-800 font-medium">{nearbyCity.nameKK}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Disclosure Block */}
            <section className="mt-8 pt-6 border-t border-gray-200">
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-sm text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Серіктестік ашу</h3>
                  <p>
                    Бұл сайт тәуелсіз салыстыру қызметі болып табылады. Біз несие берушілерден комиссия ала аламыз, егер сіз біздің сілтемелер арқылы өтінім берсеңіз. Бұл сізге ешқандай қосымша шығын әкелмейді. Біздің міндетіміз – сізге түсінікті және объективті ақпарат ұсыну.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Өкілдік мысал</h3>
                  <p>
                    <strong>Мысал:</strong> 500,000 ₸ несие 24 айға 30% жылдық мөлшерлеммен. Айлық төлем: шамамен 27,500 ₸. Жалпы төлейтін сома: 660,000 ₸ (оның ішінде 160,000 ₸ пайыз). Бұл тек мысал, нақты шарттар несие берушіге және сіздің жағдайыңызға байланысты өзгереді.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Маңызды ескерту</h3>
                  <p>
                    Несие алу үшін қаржылық жауапкершілікпен қараңыз. Несие шартын мұқият оқып, барлық шарттарды түсінгеніңізге көз жеткізіңіз. Несие қайтару қабілетіңізді бағалаңыз. Қиындықтар туындаса, несие берушіге хабарласыңыз.
                  </p>
                </div>
              </div>
            </section>
          </article>

          {/* Back to Region */}
          <div className="text-center">
            <Link
              href={`/kz/regions/${params.region}`}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {region.nameKK} облысына оралу
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
