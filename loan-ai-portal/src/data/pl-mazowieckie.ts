export interface MazowieckieRegionContent {
  name: string
  slug: string
  heroTitle: string
  heroSubtitle: string
  overview: string
  regulationSummary: string[]
  regulatorLinks: { label: string; href: string; description: string }[]
  featuredLenders: { name: string; licenseId: string; description: string; website: string }[]
  topCities: { name: string; slug: string; focus: string }[]
  blogTeasers: { title: string; excerpt: string; href: string }[]
}

export interface MazowieckieCityContent {
  slug: string
  name: string
  regionName: string
  countryName: string
  metaTitleTemplate: string
  metaDescriptionTemplate: string
  intro: string
  offer: {
    affiliate: number
    campaign: string
    partnerName: string
    product?: string
    theme?: string
  }
  regulations: string[]
  faq: { question: string; answer: string }[]
  nearby: string[]
  disclosure: {
    affiliate: string
    example: string
  }
}

const CURRENT_YEAR = new Date().getFullYear()

export const mazowieckieRegionContent: MazowieckieRegionContent = {
  name: 'Mazowieckie',
  slug: 'mazowieckie',
  heroTitle: 'Pożyczki w Województwie Mazowieckim – Porównaj oferty 2025',
  heroSubtitle:
    'Kompleksowy przegląd bankowych i pozabankowych pożyczek dostępnych w całym województwie mazowieckim. Nasza sztuczna inteligencja monitoruje regulacje KNF i ostrzega przed ukrytymi kosztami.',
  overview:
    'Województwo mazowieckie, ze stolicą w Warszawie, stanowi największy polski rynek kredytowy z wysoką koncentracją banków, firm fintech i wyspecjalizowanych pożyczkodawców dla przedsiębiorców. Polityka kredytowa jest kształtowana przez przepisy KNF oraz wymogi BIK. Dostępna jest szeroka oferta elastycznych produktów – od chwilówek przez konsolidacje po kredyty na zakup nieruchomości. Porównanie Loan AI Portal łączy dane z rejestrów, dostępność oddziałów i procesy cyfrowe, aby znaleźć przejrzyste rozwiązania dla gospodarstw domowych i przedsiębiorców w poszczególnych powiatach.',
  regulationSummary: [
    'KNF (Komisja Nadzoru Finansowego) wymaga licencjonowanych pożyczkodawców zgodnie z ustawą o kredycie konsumenckim.',
    'Warszawskie oddziały banków kontrolują limity zadłużenia i weryfikują zdolność kredytową w BIK.',
    'Firmy pozabankowe muszą ujawniać pełne RRSO, opłaty oraz informacje przedumowne w języku polskim.',
    'Miasto Warszawa i gminy wspierają kredyty energooszczędne z programu „Czyste Powietrze".',
    'Poradnictwo zadłużeniowe zapewnia Urząd Miejski w Warszawie oraz organizacje pozarządowe.',
  ],
  regulatorLinks: [
    {
      label: 'Rejestr instytucji pożyczkowych – KNF',
      href: 'https://www.knf.gov.pl/podmioty/Podmioty_nadzorowane',
      description: 'Publiczny wykaz licencjonowanych pożyczkodawców i pośredników kredytowych.',
    },
    {
      label: 'Biuro Informacji Kredytowej (BIK)',
      href: 'https://www.bik.pl/',
      description: 'Sprawdź swoją historię kredytową i zdolność kredytową online.',
    },
    {
      label: 'Rzecznik Finansowy',
      href: 'https://rf.gov.pl/',
      description: 'Rozwiązywanie sporów z pożyczkodawcami bez opłat sądowych.',
    },
  ],
  featuredLenders: [
    {
      name: 'PKO Bank Polski',
      licenseId: 'Licencja bankowa KNF',
      description: 'Kredyt gotówkowy ze spłatą do 10 lat, brak prowizji za wcześniejszą spłatę, możliwość wakacji kredytowych.',
      website: 'https://www.pkobp.pl/',
    },
    {
      name: 'mBank',
      licenseId: 'Licencja bankowa KNF',
      description: 'Pożyczka online do 200 000 zł, decyzja w 15 minut, pełna obsługa przez internet.',
      website: 'https://www.mbank.pl/',
    },
    {
      name: 'Santander Consumer Bank',
      licenseId: 'Licencja bankowa KNF',
      description: 'Kredyty ratalne i gotówkowe, elastyczne warunki spłaty, program lojalnościowy dla klientów.',
      website: 'https://www.santanderconsumer.pl/',
    },
    {
      name: 'Provident Polska',
      licenseId: 'Licencja pozabankowa KNF',
      description: 'Pożyczki do 20 000 zł, możliwość spłaty w ratach, doradca w domu lub online.',
      website: 'https://www.provident.pl/',
    },
  ],
  topCities: [
    { name: 'Warszawa', slug: 'warszawa', focus: 'Centrum finansowe z najszerszą ofertą kredytów i pożyczek online' },
    { name: 'Radom', slug: 'radom', focus: 'Pożyczki dla przemysłu i małych przedsiębiorstw' },
    { name: 'Płock', slug: 'plock', focus: 'Kredyty dla sektora petrochemicznego i energetycznego' },
    { name: 'Siedlce', slug: 'siedlce', focus: 'Finansowanie rolnictwa i lokalnych firm' },
    { name: 'Ostrołęka', slug: 'ostroleka', focus: 'Kredyty mieszkaniowe i pożyczki konsumpcyjne' },
    { name: 'Ciechanów', slug: 'ciechanow', focus: 'Wsparcie MŚP i finansowanie rozwoju lokalnego' },
  ],
  blogTeasers: [
    {
      title: 'Jak konsolidować kredyty w 2025 roku?',
      excerpt: 'Przewodnik krok po kroku dotyczący łączenia wielu kredytów w jeden z niższym oprocentowaniem.',
      href: '/blog/konsolidacja-kredytow-2025',
    },
    {
      title: 'Porównanie oprocentowania kredytów gotówkowych',
      excerpt: 'Aktualne stawki RRSO w największych bankach i instytucjach pożyczkowych w Polsce.',
      href: '/blog/porownanie-rrso-2025',
    },
    {
      title: 'Jak poprawić zdolność kredytową?',
      excerpt: 'Praktyczne wskazówki zwiększające szanse na uzyskanie korzystnego kredytu.',
      href: '/blog/poprawa-zdolnosci-kredytowej',
    },
  ],
}

export const mazowieckieCities: Record<string, MazowieckieCityContent> = {
  warszawa: {
    slug: 'warszawa',
    name: 'Warszawa',
    regionName: 'Mazowieckie',
    countryName: 'Polska',
    metaTitleTemplate: `Pożyczki w Warszawie, Mazowieckie – Porównaj ${CURRENT_YEAR}`,
    metaDescriptionTemplate: 'Porównaj najlepsze oferty pożyczek i kredytów w Warszawie. Szybka decyzja online, konkurencyjne oprocentowanie i wsparcie AI. Sprawdź teraz!',
    intro:
      'Warszawa jako stolica Polski oferuje najbogatszy wybór produktów finansowych – od kredytów hipotecznych przez pożyczki gotówkowe po finansowanie dla startupów. Rynek charakteryzuje się wysoką konkurencją między bankami i firmami fintech, co przekłada się na korzystne warunki dla kredytobiorców. Typowe RRSO dla kredytów gotówkowych wynosi 6-18%, w zależności od historii kredytowej i dochodów. Regulacje KNF zapewniają ochronę konsumentów, a obowiązkowa weryfikacja w BIK gwarantuje odpowiedzialną politykę kredytową.',
    offer: {
      affiliate: 9200,
      campaign: 'warszawa-mazowieckie',
      partnerName: 'Warszawa Finanse',
      product: 'personal',
      theme: 'blue',
    },
    regulations: [
      'Maksymalne RRSO: 10% dla kredytów hipotecznych, do 20% dla pożyczek gotówkowych (dane orientacyjne, zmienne w zależności od oferty)',
      'Weryfikacja zdolności kredytowej: Obowiązkowe zapytanie do BIK i weryfikacja dochodów',
      'Maksymalny okres spłaty: Do 35 lat dla kredytów hipotecznych, do 10 lat dla pożyczek gotówkowych',
      'Ochrona konsumenta: Prawo do odstąpienia od umowy w ciągu 14 dni bez podania przyczyny',
      'Dodatkowe opłaty: Prowizja za udzielenie kredytu zazwyczaj 0-5%, brak opłat za wcześniejszą spłatę w większości banków',
      'Wymogi dokumentacyjne: Dowód osobisty, zaświadczenie o dochodach, wyciągi bankowe z ostatnich 3 miesięcy',
    ],
    faq: [
      {
        question: 'Jak szybko mogę otrzymać pieniądze na konto?',
        answer:
          'Banki zazwyczaj wypłacają środki w ciągu 1-2 dni roboczych po podpisaniu umowy. Firmy pożyczkowe często wypłacają pieniądze w ciągu kilku godzin lub nawet minut od zatwierdzenia wniosku, jeśli masz konto w tym samym banku.',
      },
      {
        question: 'Jakie dokumenty będę potrzebować?',
        answer:
          'Standardowo wymagany jest dowód osobisty, zaświadczenie o dochodach lub PIT (dla osób prowadzących działalność gospodarczą) oraz wyciągi z rachunku bankowego. W przypadku konsolidacji kredytów należy dołączyć harmonogramy spłat kredytów, które chcesz refinansować.',
      },
      {
        question: 'Jak działa rekomendacja AI w polskiej sekcji?',
        answer:
          'Model analizuje RRSO, całkowity koszt kredytu, reputację pożyczkodawcy i dostępność w poszczególnych województwach. Wyniki są sortowane według przejrzystych kryteriów i można je dalej filtrować według własnych preferencji.',
      },
      {
        question: 'Czy mogę spłacić kredyt wcześniej bez dodatkowych opłat?',
        answer:
          'Większość banków w Polsce nie pobiera opłat za wcześniejszą spłatę kredytu gotówkowego. Jednak niektóre instytucje mogą zastrzegać sobie prawo do prowizji – zawsze sprawdzaj warunki umowy przed podpisaniem.',
      },
      {
        question: 'Co zrobić, jeśli mam złą historię kredytową?',
        answer:
          'Nawet z negatywną historią w BIK możesz ubiegać się o pożyczki w firmach pozabankowych, które stosują elastyczniejsze kryteria oceny. Alternatywnie rozważ pożyczki z poręczycielem lub zabezpieczeniem.',
      },
    ],
    nearby: ['Radom', 'Płock', 'Siedlce', 'Ostrołęka', 'Pruszków', 'Legionowo'],
    disclosure: {
      affiliate:
        'Loan AI Portal jest platformą porównawczą i może otrzymywać wynagrodzenie od partnerów za polecenia. Zawsze porównuj oferty i czytaj warunki przed podpisaniem umowy.',
      example:
        'Przykład reprezentatywny: Pożyczka 10 000 zł na 24 miesiące przy RRSO 12% = miesięczna rata 471 zł, całkowita kwota do spłaty 11 304 zł. Rzeczywiste warunki zależą od oceny kredytowej.',
    },
  },
}
