import type { Metadata } from 'next'
import Script from 'next/script'
import PolandNavigation from '@/components/poland/poland-navigation'
import PolandFooter from '@/components/poland/poland-footer'
import PolandDisclosure from '@/components/poland/poland-disclosure'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Aplikuj o Pożyczkę Osobistą – Polska | LoansAI',
  description: 'Wypełnij wniosek online o pożyczkę osobistą w Polsce. Prosty proces, szybka odpowiedź, oferty od licencjonowanych pożyczkodawców KNF. Bez wpływu na scoring kredytowy.',
  robots: 'index, follow',
  openGraph: {
    title: 'Aplikuj o Pożyczkę Osobistą w Polsce',
    description: 'Wniosek online o pożyczki osobiste. Licencjonowani pożyczkodawcy, szybka akceptacja, zero ukrytych kosztów.',
    url: 'https://loansai.com/pl/apply',
  },
  alternates: {
    canonical: 'https://loansai.com/pl/apply',
  },
}

export default function PolandApplyPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Aplikuj o Pożyczkę Osobistą Polska',
    description: 'Formularz wniosku o pożyczki osobiste w Polsce',
    url: 'https://loansai.com/pl/apply',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Strona główna',
          item: 'https://loansai.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Polska',
          item: 'https://loansai.com/pl'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Aplikuj',
          item: 'https://loansai.com/pl/apply'
        }
      ]
    }
  }

  return (
    <>
      <Script id="schema-apply-page" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <PolandNavigation />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Aplikuj o Pożyczkę Osobistą
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Wypełnij formularz poniżej i otrzymaj spersonalizowane oferty od licencjonowanych pożyczkodawców KNF.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>Bez wpływu na scoring kredytowy</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>Odpowiedź w 24-48 godzin</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>100% bezpłatne</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>Maksymalne bezpieczeństwo</span>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Container */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8 md:p-12">
                {/* Security Badge */}
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold">
                    <span>🔒</span>
                    <span>Bezpieczne połączenie SSL • Twoje dane są chronione</span>
                  </div>
                </div>

                {/* Placeholder for API Integration */}
                <div id="loan-application-form" className="min-h-[600px]">
                  <div className="bg-blue-50 border-2 border-blue-200 border-dashed rounded-lg p-12 text-center">
                    <div className="max-w-2xl mx-auto">
                      <div className="text-6xl mb-6">📋</div>
                      <h2 className="text-2xl font-bold text-blue-900 mb-4">
                        Formularz Aplikacyjny
                      </h2>
                      <p className="text-gray-700 mb-6">
                        Integracja API będzie dodana tutaj. To pole jest przygotowane do osadzenia 
                        Twojego formularza aplikacyjnego lub systemu partnerskiego.
                      </p>
                      <div className="bg-white rounded-lg p-6 text-left">
                        <h3 className="font-semibold text-gray-900 mb-3">
                          Potrzebne informacje:
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600">•</span>
                            <span><strong>Dane osobowe:</strong> Imię, nazwisko, PESEL, data urodzenia</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600">•</span>
                            <span><strong>Informacje kontaktowe:</strong> Adres email, numer telefonu, adres zamieszkania</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600">•</span>
                            <span><strong>Zatrudnienie:</strong> Status zatrudnienia, miesięczne dochody, nazwa pracodawcy</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600">•</span>
                            <span><strong>Szczegóły pożyczki:</strong> Kwota, cel pożyczki, preferowany okres spłaty</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600">•</span>
                            <span><strong>Informacje bankowe:</strong> Numer konta do wypłaty środków</span>
                          </li>
                        </ul>
                      </div>
                      <p className="text-xs text-gray-500 mt-6">
                        <strong>Uwaga dla dewelopera:</strong> Zastąp tę sekcję swoim API lub 
                        skryptem partnerskim. Endpoint API będzie tutaj zintegrowany zgodnie 
                        z Twoją dokumentacją.
                      </p>
                    </div>
                  </div>

                  <noscript>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center mt-6">
                      <p className="text-yellow-800 font-semibold mb-2">
                        JavaScript jest wymagany dla formularza aplikacyjnego
                      </p>
                      <p className="text-sm text-yellow-700">
                        Proszę włączyć JavaScript w przeglądarce, aby kontynuować wniosek o pożyczkę.
                      </p>
                    </div>
                  </noscript>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Dlaczego warto aplikować przez LoansAI?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🛡️</div>
                  <h3 className="font-bold text-gray-900 mb-2">Bezpieczne i chronione</h3>
                  <p className="text-sm text-gray-600">
                    Twoje dane są szyfrowane i chronione zgodnie z najwyższymi standardami 
                    bezpieczeństwa oraz RODO.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="font-bold text-gray-900 mb-2">Szybka decyzja</h3>
                  <p className="text-sm text-gray-600">
                    Otrzymaj wstępne oferty od pożyczkodawców w ciągu 24-48 godzin 
                    po wysłaniu wniosku.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="font-bold text-gray-900 mb-2">Wielu pożyczkodawców</h3>
                  <p className="text-sm text-gray-600">
                    Jeden wniosek dociera do ponad 40 licencjonowanych pożyczkodawców KNF, 
                    zwiększając szanse na akceptację.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">💯</div>
                  <h3 className="font-bold text-gray-900 mb-2">Bez ukrytych kosztów</h3>
                  <p className="text-sm text-gray-600">
                    Pełna przejrzystość kosztów. Wszystkie opłaty i RRSO są jasno przedstawione 
                    przed podjęciem decyzji.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">📱</div>
                  <h3 className="font-bold text-gray-900 mb-2">100% online</h3>
                  <p className="text-sm text-gray-600">
                    Cały proces od aplikacji do wypłaty środków można przeprowadzić online, 
                    bez wizyty w oddziale.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">✓</div>
                  <h3 className="font-bold text-gray-900 mb-2">Licencjonowani KNF</h3>
                  <p className="text-sm text-gray-600">
                    Współpracujemy tylko z pożyczkodawcami regulowanymi przez Komisję 
                    Nadzoru Finansowego.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Jak działa proces aplikacji?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Wypełnij formularz</h3>
                  <p className="text-gray-600 text-sm">
                    Podaj podstawowe informacje o sobie i preferowanej pożyczce. Proces zajmuje 
                    zaledwie 3-5 minut.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Otrzymaj oferty</h3>
                  <p className="text-gray-600 text-sm">
                    Twój wniosek trafia do naszej sieci pożyczkodawców. Otrzymasz spersonalizowane 
                    oferty w ciągu 24-48 godzin.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Porównaj i wybierz</h3>
                  <p className="text-gray-600 text-sm">
                    Przejrzyj oferty, porównaj RRSO, warunki spłaty i wybierz najlepszą dla siebie. 
                    Nie jesteś zobowiązany do akceptacji żadnej oferty.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Otrzymaj pieniądze</h3>
                  <p className="text-gray-600 text-sm">
                    Po zaakceptowaniu oferty i weryfikacji dokumentów, środki zostaną przelane 
                    bezpośrednio na Twoje konto bankowe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                  Twoje bezpieczeństwo i prywatność
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-blue-600">🔐</span>
                      Szyfrowanie danych
                    </h3>
                    <p className="text-gray-700">
                      Wszystkie dane przekazywane przez formularz są szyfrowane przy użyciu 
                      256-bitowego szyfrowania SSL, tego samego standardu używanego przez banki.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-blue-600">🛡️</span>
                      Zgodność z RODO
                    </h3>
                    <p className="text-gray-700">
                      Przestrzegamy wszystkich wymogów RODO. Twoje dane są przetwarzane zgodnie 
                      z prawem i udostępniane tylko wybranym przez Ciebie pożyczkodawcom.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-blue-600">🚫</span>
                      Bez spamu
                    </h3>
                    <p className="text-gray-700">
                      Nigdy nie sprzedajemy Twoich danych stronom trzecim. Będziesz otrzymywać 
                      komunikaty tylko od pożyczkodawców związanych z Twoim wnioskiem.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-blue-600">👁️</span>
                      Kontrola nad danymi
                    </h3>
                    <p className="text-gray-700">
                      Masz prawo dostępu, poprawiania i usuwania swoich danych osobowych 
                      w dowolnym momencie zgodnie z przepisami RODO.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 py-8">
          <PolandDisclosure />
        </section>
      </main>

      <PolandFooter />
    </>
  )
}
