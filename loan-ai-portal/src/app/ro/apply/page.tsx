import type { Metadata } from 'next'
import Script from 'next/script'
import RomaniaNavigation from '@/components/romania/romania-navigation'
import RomaniaFooter from '@/components/romania/romania-footer'
import RomaniaDisclosure from '@/components/romania/romania-disclosure'

export const metadata: Metadata = {
  title: 'Aplică pentru Credit Personal – România | LoansAI',
  description: 'Completează cererea online pentru un credit personal în România. Proces simplu, răspuns rapid, oferte de la creditori licențiați BNR. Fără impact asupra scorului de credit.',
  robots: 'index, follow',
  openGraph: {
    title: 'Aplică pentru Credit Personal în România',
    description: 'Cerere online pentru credite personale. Creditori licențiați, aprobare rapidă, zero costuri ascunse.',
    url: 'https://loansai.com/ro/apply',
  },
  alternates: {
    canonical: 'https://loansai.com/ro/apply',
  },
}

export default function RomaniaApplyPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Aplică pentru Credit Personal România',
    description: 'Formular de cerere pentru credite personale în România',
    url: 'https://loansai.com/ro/apply',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Acasă',
          item: 'https://loansai.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'România',
          item: 'https://loansai.com/ro'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Aplică',
          item: 'https://loansai.com/ro/apply'
        }
      ]
    }
  }

  return (
    <>
      <Script id="schema-apply-page" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <RomaniaNavigation />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Aplică pentru un Credit Personal
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Completează formularul de mai jos și primește oferte personalizate de la creditori licențiați BNR.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>Fără impact asupra scorului de credit</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>Răspuns în 24-48 ore</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>100% gratuit</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>Securitate maximă</span>
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
                  <span>Conexiune securizată SSL • Datele tale sunt protejate</span>
                </div>
              </div>

              {/* Affiliate Form Script - doaff.net integration */}
              <div id="loan-application-form" className="min-h-[600px]">
                <Script
                  src="https://www.doaff.net/publisherScript.js?c=jjn"
                  strategy="afterInteractive"
                  onLoad={() => {
                    console.log('Affiliate form script loaded successfully')
                  }}
                />
                <noscript>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                    <p className="text-yellow-800 font-semibold mb-2">
                      JavaScript este necesar pentru formularul de aplicare
                    </p>
                    <p className="text-sm text-yellow-700">
                      Vă rugăm să activați JavaScript în browser pentru a continua cu cererea de credit.
                    </p>
                  </div>
                </noscript>
              </div>

              {/* Loading placeholder while form loads */}
              <div id="form-loading" className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-gray-600">Se încarcă formularul...</p>
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
              De ce să aplici prin LoansAI?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="font-bold text-gray-900 mb-2">Sigur și protejat</h3>
                <p className="text-sm text-gray-600">
                  Datele tale sunt criptate cu tehnologie SSL de nivel bancar și protejate conform GDPR.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-gray-900 mb-2">Rapid și simplu</h3>
                <p className="text-sm text-gray-600">
                  Completează formularul în 2-3 minute și primește oferte personalizate imediat.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="font-bold text-gray-900 mb-2">Creditori licențiați</h3>
                <p className="text-sm text-gray-600">
                  Lucrăm doar cu creditori licențiați și supravegheați de BNR.
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
                Ce se întâmplă după ce aplici?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start bg-white rounded-lg p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Procesare instantanee</h3>
                    <p className="text-gray-600 text-sm">
                      Cererea ta este trimisă automat către creditorii din rețeaua noastră care se potrivesc 
                      profilului tău.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white rounded-lg p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Evaluare și oferte</h3>
                    <p className="text-gray-600 text-sm">
                      Creditorii evaluează cererea ta și îți trimit oferte personalizate în 24-48 ore. 
                      Vei fi contactat direct de creditori.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white rounded-lg p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Alege și primește banii</h3>
                    <p className="text-gray-600 text-sm">
                      Compară ofertele, alege cea mai bună și finalizează procesul. Banii sunt virați direct 
                      în contul tău bancar.
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
            <RomaniaDisclosure />
            
            <div className="mt-8 bg-gray-50 rounded-lg p-6 text-sm text-gray-600">
              <h3 className="font-bold text-gray-900 mb-3">Informații importante:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>
                    Cererea ta nu garantează aprobarea creditului. Decizia finală aparține creditorului.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>
                    Completarea formularului nu afectează scorul tău de credit (soft inquiry).
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>
                    Trebuie să ai vârsta de minimum 18 ani și să fii rezident în România.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>
                    Datele tale personale sunt protejate conform Regulamentului General privind Protecția 
                    Datelor (GDPR).
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>
                    Ai dreptul să renunți la credit în termen de 14 zile de la semnarea contractului, 
                    fără penalități.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <RomaniaFooter />
    </>
  )
}
