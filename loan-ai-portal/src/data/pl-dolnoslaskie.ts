export interface DolnoslaskieRegionContent {
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

export interface DolnoslaskieCityContent {
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

export const dolnoslaskieRegionContent: DolnoslaskieRegionContent = {
  name: 'Dolnośląskie',
  slug: 'dolnoslaskie',
  heroTitle: 'Pożyczki w Województwie Dolnośląskim – Porównaj 2025',
  heroSubtitle:
    'Kompleksowy przegląd pożyczek w regionie dolnośląskim. Specjalne oferty dla nieruchomości, OZE i przemysłu we Wrocławiu i okolicach.',
  overview:
    'Województwo dolnośląskie, ze stolicą we Wrocławiu, to piąty największy rynek kredytowy w Polsce i jeden z najbardziej dynamicznie rozwijających się regionów. Charakteryzuje się wysokim poziomem inwestycji w nieruchomości, rozwiniętym sektorem IT oraz rosnącym znaczeniem odnawialnych źródeł energii. Dostępna jest szeroka oferta kredytów mieszkaniowych, dla biznesu, finansowania OZE oraz standardowych produktów konsumenckich. Region obsługują wszystkie główne banki komercyjne oraz nowoczesne platformy fintech.',
  regulationSummary: [
    'KNF nadzoruje wszystkich licencjonowanych pożyczkodawców w województwie dolnośląskim.',
    'Specjalne programy wsparcia dla inwestycji w odnawialne źródła energii (OZE) z NFOŚiGW.',
    'Wrocław jako centrum finansowe oferuje konkurencyjne warunki kredytowe.',
    'Dostępne są preferencyjne kredyty na termomodernizację z programu "Czyste Powietrze".',
    'Poradnictwo finansowe zapewnia Dolnośląski Ośrodek Doradztwa Rolniczego.',
  ],
  regulatorLinks: [
    {
      label: 'Rejestr instytucji pożyczkowych – KNF',
      href: 'https://www.knf.gov.pl/podmioty/Podmioty_nadzorowane',
      description: 'Oficjalny wykaz licencjonowanych pożyczkodawców.',
    },
    {
      label: 'Narodowy Fundusz Ochrony Środowiska',
      href: 'https://www.nfosigw.gov.pl/',
      description: 'Programy wsparcia dla inwestycji w OZE i termomodernizację.',
    },
    {
      label: 'Wrocławskie Centrum Transferu Technologii',
      href: 'https://wctt.pwr.edu.pl/',
      description: 'Wsparcie dla startupów i innowacyjnych firm.',
    },
  ],
  featuredLenders: [
    {
      name: 'Bank Zachodni WBK (Santander)',
      licenseId: 'Licencja bankowa KNF',
      description: 'Kompleksowa oferta kredytów gotówkowych i hipotecznych, silna obecność w regionie dolnośląskim.',
      website: 'https://www.santander.pl/',
    },
    {
      name: 'Deutsche Bank Polska',
      licenseId: 'Licencja bankowa KNF',
      description: 'Kredyty dla klientów premium, bankowość prywatna, finansowanie nieruchomości.',
      website: 'https://www.deutschebank.pl/',
    },
    {
      name: 'Idea Bank',
      licenseId: 'Licencja bankowa KNF',
      description: 'Kredyty gotówkowe do 200 000 zł, szybka decyzja, elastyczne warunki.',
      website: 'https://www.ideabank.pl/',
    },
    {
      name: 'Kredito24',
      licenseId: 'Licencja pozabankowa KNF',
      description: 'Szybkie pożyczki online do 15 000 zł, wypłata w 15 minut, bez zaświadczeń.',
      website: 'https://www.kredito24.pl/',
    },
  ],
  topCities: [
    { name: 'Wrocław', slug: 'wroclaw', focus: 'Centrum IT i nieruchomości z najszerszą ofertą kredytów' },
    { name: 'Wałbrzych', slug: 'walbrzych', focus: 'Kredyty dla przemysłu i rewitalizacji' },
    { name: 'Legnica', slug: 'legnica', focus: 'Finansowanie MŚP i handlu' },
    { name: 'Jelenia Góra', slug: 'jelenia-gora', focus: 'Kredyty turystyczne i dla uzdrowisk' },
    { name: 'Lubin', slug: 'lubin', focus: 'Wsparcie przemysłu wydobywczego' },
    { name: 'Świdnica', slug: 'swidnica', focus: 'Finansowanie lokalnych przedsiębiorstw' },
  ],
  blogTeasers: [
    {
      title: 'Kredyty na OZE w Dolnośląskiem',
      excerpt: 'Jak finansować instalacje fotowoltaiczne i pompy ciepła z programów NFOŚiGW.',
      href: '/blog/kredyty-oze-dolnoslaskie',
    },
    {
      title: 'Rynek nieruchomości we Wrocławiu',
      excerpt: 'Aktualne ceny, dostępność kredytów hipotecznych i prognozy na 2025 rok.',
      href: '/blog/nieruchomosci-wroclaw-2025',
    },
    {
      title: 'Finansowanie startupów IT w regionie',
      excerpt: 'Programy akceleracji i źródła kapitału dla firm technologicznych.',
      href: '/blog/startupy-it-dolnoslaskie',
    },
  ],
}

export const dolnoslaskieCities: Record<string, DolnoslaskieCityContent> = {
  wroclaw: {
    slug: 'wroclaw',
    name: 'Wrocław',
    regionName: 'Dolnośląskie',
    countryName: 'Polska',
    metaTitleTemplate: `Pożyczki we Wrocławiu, Dolnośląskie – Porównaj ${CURRENT_YEAR}`,
    metaDescriptionTemplate: 'Porównaj oferty pożyczek i kredytów we Wrocławiu. Centrum IT i nieruchomości z konkurencyjnym RRSO. Sprawdź najlepsze oferty online!',
    intro:
      'Wrocław jako stolica Dolnego Śląska i czwarte największe miasto Polski oferuje jeden z najbardziej dynamicznych rynków kredytowych w kraju. Miasto wyróżnia się jako centrum IT, nieruchomości oraz akademickie, co przekłada się na bogaty wybór produktów finansowych. Dostępne są kredyty gotówkowe (RRSO 6-17%), hipoteczne z konkurencyjnym oprocentowaniem, kredyty dla startupów oraz finansowanie OZE. Silna konkurencja między bankami lokalnymi i międzynarodowymi zapewnia korzystne warunki. Wrocław jest też liderem w cyfryzacji usług bankowych.',
    offer: {
      affiliate: 9204,
      campaign: 'wroclaw-dolnoslaskie',
      partnerName: 'Wrocław Finanse',
      product: 'personal',
      theme: 'blue',
    },
    regulations: [
      'RRSO dla kredytów gotówkowych: 6-17% zależnie od profilu kredytobiorcy',
      'Weryfikacja BIK: Standardowa procedura dla wszystkich produktów',
      'Okres kredytowania: Do 10 lat dla pożyczek, do 35 lat dla hipotecznych',
      'Programy OZE: Preferencyjne finansowanie instalacji fotowoltaicznych i pomp ciepła',
      'Opłaty: Prowizja 0-4%, większość banków bez kosztów wcześniejszej spłaty',
      'Dokumenty: Dowód osobisty, potwierdzenie dochodów, dla OZE również kosztorys inwestycji',
    ],
    faq: [
      {
        question: 'Jakie są warunki kredytów hipotecznych we Wrocławiu?',
        answer:
          'We Wrocławiu banki oferują kredyty hipoteczne z LTV do 90% (w niektórych przypadkach do 95% z ubezpieczeniem). Średnie oprocentowanie wynosi 7-9% w zależności od wkładu własnego i historii kredytowej. Dostępne są kredyty w PLN i walutach obcych, choć te ostatnie wymagają wyższych zabezpieczeń.',
      },
      {
        question: 'Czy we Wrocławiu są dostępne kredyty na instalacje OZE?',
        answer:
          'Tak, większość banków we Wrocławiu oferuje specjalne kredyty na odnawialne źródła energii. Dostępne są preferencyjne programy z NFOŚiGW oraz programu "Czyste Powietrze" z oprocentowaniem już od 2-3%. Można finansować fotowoltaikę, pompy ciepła, kotły ekologiczne.',
      },
      {
        question: 'Jak długo czeka się na decyzję kredytową we Wrocławiu?',
        answer:
          'Standardowy proces w bankach trwa 1-3 dni robocze dla kredytów gotówkowych. Fintechy mogą wypłacić środki w ciągu kilku godzin. Kredyty hipoteczne wymagają 2-4 tygodni ze względu na wycenę nieruchomości i weryfikację prawną.',
      },
      {
        question: 'Czy we Wrocławiu są kredyty dla studentów?',
        answer:
          'Tak, jako miasto akademickie Wrocław oferuje dedykowane produkty dla studentów - kredyty studenckie, karty kredytowe z niższymi wymaganiami oraz pożyczki ratalne. Wymagane jest zazwyczaj poręczenie lub udokumentowanie dochodów z pracy.',
      },
      {
        question: 'Jakie są najniższe stawki RRSO we Wrocławiu?',
        answer:
          'Najniższe RRSO we Wrocławiu (6-8%) oferują duże banki dla klientów z doskonałą historią. Średnie stawki to 11-14% dla kredytów gotówkowych. Dla kredytów hipotecznych RRSO wynosi 7-10%. Firmy pozabankowe oferują 16-28%.',
      },
    ],
    nearby: ['Oława', 'Oleśnica', 'Trzebnica', 'Siechnice', 'Kąty Wrocławskie', 'Środa Śląska'],
    disclosure: {
      affiliate:
        'Loan AI Portal jest platformą porównawczą i może otrzymywać wynagrodzenie od partnerów. Zawsze sprawdzaj warunki przed podpisaniem.',
      example:
        'Przykład reprezentatywny: Pożyczka 30 000 zł na 72 miesiące przy RRSO 10% = miesięczna rata 497 zł, całkowita kwota do spłaty 35 784 zł. Warunki indywidualne.',
    },
  },
}
