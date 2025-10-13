import type { Metadata } from 'next'
import Script from 'next/script'
import KazakhstanNavigation from '@/components/kazakhstan/kazakhstan-navigation'
import KazakhstanFooter from '@/components/kazakhstan/kazakhstan-footer'
import KazakhstanDisclosure from '@/components/kazakhstan/kazakhstan-disclosure'

export const metadata: Metadata = {
  title: 'Жеке несиеге өтініш беру – Қазақстан | LoansAI',
  description: 'Қазақстанда жеке несиеге онлайн өтініш толтырыңыз. Қарапайым процесс, жылдам жауап, ҚҰБ лицензияланған несие берушілерден ұсыныстар. Несиелік балға әсері жоқ.',
  robots: 'index, follow',
  openGraph: {
    title: 'Қазақстанда жеке несиеге өтініш беру',
    description: 'Жеке несиелерге онлайн өтініш. Лицензияланған несие берушілер, жылдам мақұлдау, жасырын шығындар жоқ.',
    url: 'https://loansai.com/kk/apply',
  },
  alternates: {
    canonical: 'https://loansai.com/kk/apply',
  },
}

export default function KazakhstanApplyPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Қазақстанда жеке несиеге өтініш беру',
    description: 'Қазақстанда жеке несиелерге өтініш нысаны',
    url: 'https://loansai.com/kk/apply',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Басты бет',
          item: 'https://loansai.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Қазақстан',
          item: 'https://loansai.com/kk'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Өтініш беру',
          item: 'https://loansai.com/kk/apply'
        }
      ]
    }
  }

  return (
    <>
      <Script id="schema-apply-page" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <KazakhstanNavigation />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Жеке несиеге өтініш беру
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Төмендегі нысанды толтырыңыз және ҚҰБ лицензияланған несие берушілерден жекелендірілген ұсыныстар алыңыз.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>Несиелік балға әсері жоқ</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>24-48 сағат ішінде жауап</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>100% тегін</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>Максималды қауіпсіздік</span>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Container */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Security Badge */}
              <div className="mb-8 text-center">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  <span>🔒</span>
                  <span>SSL қауіпсіз байланыс • Деректеріңіз қорғалған</span>
                </div>
              </div>

              {/* Affiliate Form Script - doaff.net integration */}
              <div id="loan-application-form" className="min-h-[600px]">
                <Script
                  src="https://www.doaff.net/publisherScript.js?c=jjt"
                  strategy="afterInteractive"
                />
                <noscript>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                    <p className="text-yellow-800 font-semibold mb-2">
                      Өтініш нысаны үшін JavaScript қажет
                    </p>
                    <p className="text-sm text-yellow-700">
                      Несиеге өтініш жалғастыру үшін браузеріңізде JavaScript-ті іске қосыңыз.
                    </p>
                  </div>
                </noscript>
              </div>

              {/* Loading placeholder while form loads */}
              <div id="form-loading" className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-gray-600">Нысан жүктелуде...</p>
              </div>

              <Script id="hide-loading" strategy="afterInteractive">
                {`
                  // Hide loading indicator once form is loaded
                  window.addEventListener('load', function() {
                    setTimeout(function() {
                      const loading = document.getElementById('form-loading');
                      if (loading) loading.style.display = 'none';
                    }, 2000);
                  });
                `}
              </Script>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Неліктен LoansAI арқылы өтініш беру керек?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="font-bold text-gray-900 mb-2">Қауіпсіз және қорғалған</h3>
                <p className="text-sm text-gray-600">
                  Деректеріңіз банктік деңгейдегі SSL технологиясымен шифрланған және ДҚБЖ сәйкес қорғалған.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-gray-900 mb-2">Жылдам және қарапайым</h3>
                <p className="text-sm text-gray-600">
                  Нысанды 2-3 минутта толтырыңыз және дереу жекелендірілген ұсыныстар алыңыз.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="font-bold text-gray-900 mb-2">Лицензияланған несие берушілер</h3>
                <p className="text-sm text-gray-600">
                  Біз тек ҚҰБ лицензияланған және қадағалайтын несие берушілермен жұмыс істейміз.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="bg-blue-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Өтініш бергеннен кейін не болады?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start bg-white rounded-lg p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Лезде өңдеу</h3>
                    <p className="text-gray-600 text-sm">
                      Өтінішіңіз профиліңізге сәйкес келетін біздің желідегі несие берушілерге автоматты түрде жіберіледі.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white rounded-lg p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Бағалау және ұсыныстар</h3>
                    <p className="text-gray-600 text-sm">
                      Несие берушілер өтінішіңізді бағалайды және 24-48 сағат ішінде жекелендірілген ұсыныстар жібереді. 
                      Несие берушілер тікелей сізбен байланысады.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white rounded-lg p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Таңдау және ақша алу</h3>
                    <p className="text-gray-600 text-sm">
                      Ұсыныстарды салыстырыңыз, ең жақсысын таңдаңыз және процесті аяқтаңыз. Ақша тікелей 
                      банк шотыңызға аударылады.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclosure Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <KazakhstanDisclosure />
            
            <div className="mt-8 bg-gray-50 rounded-lg p-6 text-sm text-gray-600">
              <h3 className="font-bold text-gray-900 mb-3">Маңызды ақпарат:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>
                    Өтінішіңіз несиенің мақұлдануын кепілдемейді. Түпкілікті шешім несие берушіге тиесілі.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>
                    Нысанды толтыру несиелік балыңызға әсер етпейді (жұмсақ сұрау).
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>
                    Сізде кемінде 18 жас болуы және Қазақстанның тұрғыны болуыңыз керек.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>
                    Жеке деректеріңіз Жалпы деректерді қорғау регламентіне (ДҚБЖ) сәйкес қорғалған.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>
                    Шартқа қол қойғаннан кейін 14 күн ішінде несиеден айыппұлсыз бас тартуға құқығыңыз бар.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <KazakhstanFooter />
    </>
  )
}
