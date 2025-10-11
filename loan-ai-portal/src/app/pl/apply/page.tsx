import { generatePageMetadata } from '@/lib/seo'
import type { SEOConfig } from '@/lib/seo'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import FAQSchema from '@/components/faq-schema'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'

const currentYear = new Date().getFullYear()

const plApplySEO: SEOConfig = {
  title: `Złóż wniosek o pożyczkę online – Szybka decyzja ${currentYear}`,
  description: 'Porównaj oferty pożyczek od licencjonowanych pożyczkodawców w Polsce. Szybka decyzja online, konkurencyjne RRSO i bezpieczna weryfikacja. Złóż wniosek w 2 minuty.',
  keywords: [
    'wniosek o pożyczkę',
    'pożyczka online',
    'kredyt gotówkowy',
    'porównanie pożyczek',
    'RRSO',
    'KNF',
    'BIK',
  ],
  canonical: '/pl/apply',
  ogType: 'website',
  locale: 'pl_PL',
}

export const metadata = generatePageMetadata(plApplySEO, '/pl/apply')

const applyFaqs = [
  {
    question: 'Jak długo trwa proces aplikacji?',
    answer:
      'Nasz formularz można wypełnić w ciągu 2 minut. Orientacyjną decyzję otrzymasz w ciągu kilku minut. Jeśli wybierzesz ofertę, finalną akceptację i wypłatę środków przeprowadzi wybrany pożyczkodawca.',
  },
  {
    question: 'Czy sprawdzenie ofert wpłynie na moją zdolność kredytową w BIK?',
    answer:
      'Sprawdzenie wstępnych ofert nie wymaga twardego zapytania do BIK i nie wpływa na Twoją zdolność kredytową. Twarde zapytanie nastąpi dopiero po wybraniu konkretnej oferty i złożeniu pełnego wniosku u pożyczkodawcy.',
  },
  {
    question: 'Na co mogę przeznaczyć pożyczkę?',
    answer:
      'Pożyczki osobiste mogą finansować konsolidację długów, remonty, wydatki medyczne, zakupy, wesela, wakacje lub praktycznie każdą osobistą potrzebę finansową.',
  },
  {
    question: 'Co jeśli mam złą historię kredytową?',
    answer:
      'Współpracujemy z pożyczkodawcami obsługującymi różne profile kredytowe, w tym osoby ze złą historią. Nasza AI wskazuje pożyczkodawców, którzy najprawdopodobniej zaakceptują Twój wniosek.',
  },
  {
    question: 'Czy są jakieś opłaty?',
    answer:
      'Nasza usługa porównania jest całkowicie bezpłatna. Poszczególni pożyczkodawcy mogą pobierać prowizje lub inne opłaty, które zawsze zostaną ujawnione przed zaakceptowaniem oferty.',
  },
]

const breadcrumbItems = [
  { name: 'Strona główna', url: '/', position: 1 },
  { name: 'Pożyczki Polska', url: '/pl', position: 2 },
  { name: 'Złóż wniosek', url: '/pl/apply', position: 3 },
]

export default function PolishApplyPage() {
  return (
    <>
      <FAQSchema items={applyFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navigation locale="pl" />
      <main className="flex-1 bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <section className="hero text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Złóż wniosek o pożyczkę osobistą
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Sprawdź swoje stawki w zaledwie 2 minuty dzięki naszemu systemowi dopasowania AI. 
              Porównaj oferty od najlepszych pożyczkodawców bez wpływu na Twoją zdolność kredytową.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-green-600 font-medium mb-8">
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Brak wpływu na BIK
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> 2-minutowa wstępna ocena
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Środki nawet następnego dnia
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> 1 000 - 200 000 zł
              </span>
            </div>
          </section>

          <section className="application-form-section max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">
                Wypełnij wniosek o pożyczkę
              </h2>
              <div className="mb-6">
                <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                  <span>Postęp aplikacji</span>
                  <span>Krok 1 z 3</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
                </div>
              </div>
              <LeadGenDisclosure locale="pl" className="mb-6 text-center" />
              
              <div className="rounded-lg border border-blue-200 bg-blue-50/40 p-6 text-center">
                <p className="text-lg font-semibold text-blue-900 mb-2">Formularz będzie wkrótce dostępny</p>
                <p className="text-sm text-blue-900/70">
                  Obecnie integrujemy API dla pożyczek w Polsce. Prosimy o kontakt mailowy lub telefoniczny, 
                  aby uzyskać dostęp do naszych partnerów.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:compliance@loan-platform.com"
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                  >
                    Wyślij email
                  </a>
                  <a
                    href="tel:+48225555555"
                    className="inline-flex items-center justify-center rounded-md border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50"
                  >
                    Zadzwoń: +48 22 555 55 55
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="benefits mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
              Dlaczego warto złożyć wniosek przez Loan AI Portal?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center border-blue-100 shadow-sm">
                <CardHeader>
                  <div className="text-4xl mb-2" aria-hidden>⚡</div>
                  <CardTitle className="text-xl">Szybka decyzja</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Otrzymaj wstępną ocenę w ciągu 2 minut. Nasza AI analizuje Twój profil i dopasowuje najlepsze oferty.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-blue-100 shadow-sm">
                <CardHeader>
                  <div className="text-4xl mb-2" aria-hidden>🤖</div>
                  <CardTitle className="text-xl">Dopasowanie AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Nasza zaawansowana technologia analizuje ponad 200 punktów danych, aby znaleźć najlepsze oferty dla Ciebie.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-blue-100 shadow-sm">
                <CardHeader>
                  <div className="text-4xl mb-2" aria-hidden>🔒</div>
                  <CardTitle className="text-xl">Bezpieczne i prywatne</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Szyfrowanie 256-bitowe SSL chroni Twoje dane osobowe i finansowe przez cały czas.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-blue-100 shadow-sm">
                <CardHeader>
                  <div className="text-4xl mb-2" aria-hidden>💰</div>
                  <CardTitle className="text-xl">Konkurencyjne stawki</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    RRSO już od 6% dla kwalifikujących się kredytobiorców. Porównaj oferty od wielu pożyczkodawców.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-blue-100 shadow-sm">
                <CardHeader>
                  <div className="text-4xl mb-2" aria-hidden>📊</div>
                  <CardTitle className="text-xl">Wszystkie profile kredytowe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Obsługujemy kredytobiorców z doskonałą, dobrą, przeciętną i słabą historią kredytową.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-blue-100 shadow-sm">
                <CardHeader>
                  <div className="text-4xl mb-2" aria-hidden>✅</div>
                  <CardTitle className="text-xl">Zgodność z KNF</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Wszyscy nasi partnerzy są licencjonowani przez KNF i przestrzegają polskiego prawa o kredycie konsumenckim.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="faq-section max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
              Najczęściej zadawane pytania
            </h2>
            <div className="space-y-4">
              {applyFaqs.map((item, index) => (
                <details key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <summary className="font-semibold text-lg cursor-pointer text-blue-900 flex justify-between items-center">
                    {item.question}
                    <span className="ml-2 text-blue-600">+</span>
                  </summary>
                  <p className="mt-3 text-gray-600 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="cta-section text-center bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">Gotowy, aby rozpocząć?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Dołącz do tysięcy zadowolonych klientów, którzy znaleźli swoją idealną pożyczkę przez Loan AI Portal.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50"
            >
              Skontaktuj się z nami
            </button>
          </section>
        </div>
      </main>
      <Footer locale="pl" />
    </>
  )
}
