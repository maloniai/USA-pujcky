import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import StickyApplyButton from '@/components/sticky-apply-button'
import { plRegions, totalPolishCities } from '@/data/pl-regions'
import { generatePageMetadata } from '@/lib/seo'
import type { SEOConfig } from '@/lib/seo'

const currentYear = new Date().getFullYear()

const plHubSEO: SEOConfig = {
  title: `Pożyczki w Polsce – Porównaj oferty AI ${currentYear}`,
  description: 'Porównaj pożyczki i kredyty w Polsce z pomocą AI. Najlepsze oprocentowanie, szybka decyzja online i przejrzyste warunki. Licencjonowani pożyczkodawcy KNF.',
  keywords: [
    'pożyczki polska',
    'kredyty online',
    'porównanie kredytów',
    'RRSO',
    'kredyt gotówkowy',
    'pożyczka hipoteczna',
    'KNF',
    'BIK',
  ],
  canonical: '/pl',
  ogType: 'website',
  locale: 'pl_PL',
}

export const metadata = generatePageMetadata(plHubSEO, '/pl')

const complianceHighlights = [
  {
    title: 'Ramy regulacyjne',
    items: [
      'Ustawa o kredycie konsumenckim i nadzór KNF',
      'Rejestr pożyczkodawców i pośredników kredytowych',
      'Obowiązkowa weryfikacja w Biurze Informacji Kredytowej (BIK)',
    ],
  },
  {
    title: 'Na co zwracają uwagę pożyczkodawcy',
    items: [
      'Miesięczne dochody netto i forma zatrudnienia',
      'Historia kredytowa w BIK i brak zaległości',
      'Cel kredytu – konsolidacja, mieszkaniowy, konsumpcyjny',
    ],
  },
  {
    title: 'Przejrzyste oferty',
    items: [
      'Przykład reprezentatywny w PLN z podaniem RRSO i opłat',
      'Dokumentacja umowna do pobrania przed podpisaniem',
      'Oznaczenie partnerów afiliacyjnych zgodnie z prawem',
    ],
  },
]

const faq = [
  {
    question: 'Jak szybko otrzymam pieniądze na konto?',
    answer:
      'Banki zazwyczaj wypłacają środki w ciągu 1-2 dni roboczych po zatwierdzeniu. Firmy pożyczkowe mogą wypłacić pieniądze w ciągu 30 minut, jeśli masz konto w tym samym banku.',
  },
  {
    question: 'Jakie dokumenty będą potrzebne?',
    answer:
      'Standardowo: dowód osobisty, zaświadczenie o dochodach lub PIT (dla przedsiębiorców) oraz wyciągi z rachunku bankowego. W przypadku konsolidacji dołącz harmonogramy kredytów do refinansowania.',
  },
  {
    question: 'Jak działa rekomendacja AI w polskiej sekcji?',
    answer:
      'Model ocenia RRSO, całkowity koszt, reputację pożyczkodawcy i dostępność w województwach. Wyniki są sortowane według przejrzystych kryteriów i można je filtrować.',
  },
]

const publishedRegionSlugs = new Set(['mazowieckie', 'slaskie'])

export default function PolandHubPage() {
  return (
    <>
      <Navigation locale="pl" />
      <StickyApplyButton locale="pl" />
      <main className="flex-1 bg-slate-50">
        <header className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Polska • Loan AI Portal
            </p>
            <h1 className="mt-3 text-4xl font-bold text-blue-900 md:text-5xl">
              Porównaj pożyczki i kredyty w Polsce z pomocą AI
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-blue-900/80 md:text-xl">
              Uzyskaj przegląd licencjonowanych banków i firm pozabankowych, porównaj RRSO,
              opłaty i okres spłaty. Nasza AI promuje przejrzyste oferty i ostrzega przed ukrytymi kosztami.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#regional-guides"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Zobacz przewodniki regionalne
              </Link>
              <Link
                href="mailto:compliance@loan-platform.com"
                className="inline-flex items-center justify-center rounded-md border border-blue-500 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Kontakt z doradcą
              </Link>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 text-blue-900">
                <p className="text-2xl font-bold">{plRegions.length} województw</p>
                <p className="text-sm">Lokalne porównania z RRSO i dostępnością oddziałów</p>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 text-blue-900">
                <p className="text-2xl font-bold">{totalPolishCities} miast</p>
                <p className="text-sm">Pokrycie stolic województw i większych ośrodków regionalnych</p>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 text-blue-900">
                <p className="text-2xl font-bold">Ocena AI 0–100</p>
                <p className="text-sm">Ranking ofert według całkowitego kosztu i reputacji</p>
              </div>
            </div>
            <LeadGenDisclosure locale="pl" className="mt-4 max-w-3xl text-blue-900/70" />
          </div>
        </header>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold text-blue-900">Wniosek online z natychmiastową oceną</h2>
                <p className="mt-3 text-sm text-blue-900/80">
                  Formularz działa na bezpiecznej platformie. Po wysłaniu otrzymasz orientacyjną decyzję w ciągu kilku minut.
                  Model AI następnie poleci trzy najlepsze oferty według RRSO, całkowitego kosztu i szybkości wypłaty.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-blue-900/80">
                  <li>• Działa 24/7 – weryfikacja tożsamości odbywa się w pełni online.</li>
                  <li>• Obsługuje banki i firmy pozabankowe licencjonowane przez KNF.</li>
                  <li>• Stale monitorujemy limity zadłużenia i ostrzegamy przed ryzykownymi ofertami.</li>
                </ul>
                <p className="mt-6 text-xs uppercase tracking-wide text-blue-500">Bezpieczeństwo</p>
                <p className="mt-1 text-sm text-blue-900/80">
                  Wszystkie dane są przesyłane w sposób zaszyfrowany. Platforma jest zgodna z wymogami KNF i zabezpieczona certyfikatem SSL.
                </p>
              </div>
              <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Złóż wniosek online</h3>
                <p className="text-sm text-blue-900/80 mb-6">
                  Wypełnij prosty formularz i otrzymaj oferty dopasowane do Twojej sytuacji finansowej.
                </p>
                <Link
                  href="/pl/apply"
                  className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Rozpocznij wniosek
                </Link>
                <p className="mt-4 text-xs text-blue-900/70">
                  Wypełnienie formularza nie zobowiązuje do wzięcia pożyczki i nie wpływa na Twoją zdolność kredytową.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="regional-guides" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-blue-900">Przewodniki regionalne i czego oczekiwać</h2>
          <p className="mt-3 max-w-3xl text-sm text-blue-900/80">
            Każde województwo zawiera tabele RRSO, licencjonowanych pożyczkodawców, kontakty do oddziałów, zalecane cele i ostrzeżenia o najczęstszych opłatach. Dane pochodzą z rejestrów KNF i publicznych cenników.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {plRegions.map((region) => (
              <Card key={region.code} className="h-full border-blue-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{region.name}</CardTitle>
                  <p className="text-sm text-blue-900/70">
                    Stolica: {region.capital} • Miast: {region.cityCount} • Średnie RRSO: {region.averageRpsn}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-blue-900/80">
                  <p>{region.growthFocus}</p>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">Priorytetowe miasta</p>
                    <ul className="mt-2 space-y-1">
                      {region.featuredCities.map((city) => (
                        <li key={city}>• {city}</li>
                      ))}
                    </ul>
                  </div>
                  {publishedRegionSlugs.has(region.code) ? (
                    <Link
                      href={`/pl/regions/${region.code}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                    >
                      Otwórz przewodnik regionalny <span aria-hidden>→</span>
                    </Link>
                  ) : (
                    <p className="text-xs text-blue-900/60">
                      Przewodnik regionalny jest w budowie. Zostań z nami.
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Jak działa rekomendacja Loan AI Portal</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: '1. Podstawowa analiza',
                  text: 'Podajesz kwotę pożyczki, preferowany okres spłaty i cel. Weryfikujemy minimalny dochód, informacje z BIK i ewentualne zabezpieczenie.',
                  icon: '📝',
                },
                {
                  title: '2. Scoring AI i filtrowanie',
                  text: 'Model porównuje RRSO, miesięczne raty i opłaty. Uwzględnia limity ustawowe i historię klienta w BIK.',
                  icon: '🤖',
                },
                {
                  title: '3. Przejrzyste oferty',
                  text: 'Wyświetlamy przykłady reprezentatywne w PLN z pełną kwotą do spłaty. Łatwo zapisujesz dokumentację do weryfikacji.',
                  icon: '📄',
                },
              ].map((step) => (
                <Card key={step.title} className="border-blue-100 shadow-sm">
                  <CardHeader>
                    <div className="text-4xl" aria-hidden="true">{step.icon}</div>
                    <CardTitle className="text-xl text-blue-900">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-900/80">{step.text}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-blue-900">Ramy regulacyjne i compliance</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {complianceHighlights.map((block) => (
              <Card key={block.title} className="border-blue-100 bg-blue-50/40 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">{block.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-blue-900/80">
                    {block.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold text-blue-900">Kiedy polska rekomendacja AI ma największy sens?</h2>
                <ul className="mt-6 space-y-3 text-sm text-blue-900/80">
                  <li>• Konsolidacja wielu kredytów i kart kredytowych w jedną ratę z niższym RRSO.</li>
                  <li>• Finansowanie remontów, fotowoltaiki i oszczędności energetycznych z programu „Czyste Powietrze".</li>
                  <li>• Finansowanie pomostowe dla przedsiębiorców z nieregularnymi dochodami – uwzględnia wahania sezonowe.</li>
                  <li>• Refinansowanie leasingów i zakup pojazdów z wykorzystaniem zabezpieczenia.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-6 text-sm text-blue-900">
                <h3 className="text-lg font-semibold text-blue-900">Potrzebujesz ludzkiego doradcy?</h3>
                <p className="mt-2">
                  Zadzwoń pod <a className="font-semibold hover:underline" href="tel:+48225555555">+48 22 555 55 55</a> (Pon–Pt 9:00–18:00) lub napisz na{' '}
                  <a className="font-semibold hover:underline" href="mailto:compliance@loan-platform.com">compliance@loan-platform.com</a>.
                </p>
                <p className="mt-3">
                  Wyspecjalizowany zespół w Warszawie przygotuje dla Ciebie niezobowiązujące porównanie w ciągu 24 godzin.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Otwórz centrum kontaktowe
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-blue-900">Najczęściej zadawane pytania</h2>
          <div className="mt-8 space-y-4">
            {faq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-semibold text-blue-900">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm text-blue-900/80">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer locale="pl" />
    </>
  )
}
