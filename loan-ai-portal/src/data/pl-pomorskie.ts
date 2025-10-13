export interface PomorskieRegionContent {
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

export interface PomorskieCityContent {
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

export const pomorskieRegionContent: PomorskieRegionContent = {
  name: 'Pomorskie',
  slug: 'pomorskie',
  heroTitle: 'Pożyczki w Województwie Pomorskim – Porównaj 2025',
  heroSubtitle:
    'Kompleksowy przegląd pożyczek w regionie pomorskim. Specjalne oferty dla gospodarki morskiej, turystyki i logistyki w Trójmieście.',
  overview:
    'Województwo pomorskie, z Trójmiastem (Gdańsk, Gdynia, Sopot) jako centrum, to strategiczny region Polski związany z gospodarką morską, turystyką i logistyką. Charakteryzuje się wysokim poziomem rozwoju infrastruktury portowej, silnym sektorem turystycznym oraz dynamicznie rozwijającymi się usługami biznesowymi. Dostępna jest szeroka oferta kredytów dla branży morskiej, turystyki, nieruchomości nadmorskich oraz standardowych produktów konsumenckich. Region obsługują zarówno duże banki komercyjne, jak i lokalne instytucje kredytowe.',
  regulationSummary: [
    'KNF nadzoruje wszystkich licencjonowanych pożyczkodawców w województwie pomorskim.',
    'Specjalne programy dla gospodarki morskiej z Banku Gospodarstwa Krajowego.',
    'Dostępne są kredyty sezonowe dostosowane do branży turystycznej.',
    'Preferencyjne finansowanie inwestycji w porty i infrastrukturę logistyczną.',
    'Poradnictwo finansowe zapewnia Pomorska Agencja Rozwoju Regionalnego.',
  ],
  regulatorLinks: [
    {
      label: 'Rejestr instytucji pożyczkowych – KNF',
      href: 'https://www.knf.gov.pl/podmioty/Podmioty_nadzorowane',
      description: 'Oficjalny wykaz licencjonowanych pożyczkodawców.',
    },
    {
      label: 'Bank Gospodarstwa Krajowego',
      href: 'https://www.bgk.pl/',
      description: 'Wsparcie dla gospodarki morskiej i eksportu.',
    },
    {
      label: 'Pomorska Agencja Rozwoju Regionalnego',
      href: 'https://www.parr.gda.pl/',
      description: 'Programy wsparcia dla przedsiębiorców regionu.',
    },
  ],
  featuredLenders: [
    {
      name: 'Bank Millennium',
      licenseId: 'Licencja bankowa KNF',
      description: 'Nowoczesne kredyty gotówkowe i hipoteczne, silna obecność w Trójmieście.',
      website: 'https://www.bankmillennium.pl/',
    },
    {
      name: 'Euro Bank',
      licenseId: 'Licencja bankowa KNF',
      description: 'Kredyty gotówkowe do 150 000 zł, szybka decyzja online.',
      website: 'https://www.eurobank.pl/',
    },
    {
      name: 'Toyota Bank',
      licenseId: 'Licencja bankowa KNF',
      description: 'Kredyty samochodowe i gotówkowe, elastyczne warunki spłaty.',
      website: 'https://www.toyotabank.pl/',
    },
    {
      name: 'Sopockie Towarzystwo Ubezpieczeń Ergo Hestia',
      licenseId: 'Partnerstwo z bankami',
      description: 'Kompleksowe ubezpieczenia dla kredytów mieszkaniowych i samochodowych.',
      website: 'https://www.ergohestia.pl/',
    },
  ],
  topCities: [
    { name: 'Gdańsk', slug: 'gdansk', focus: 'Centrum gospodarcze Pomorza z najszerszą ofertą kredytów' },
    { name: 'Gdynia', slug: 'gdynia', focus: 'Finansowanie gospodarki morskiej i logistyki' },
    { name: 'Sopot', slug: 'sopot', focus: 'Kredyty turystyczne i nieruchomości premium' },
    { name: 'Słupsk', slug: 'slupsk', focus: 'Wsparcie MŚP i handlu' },
    { name: 'Tczew', slug: 'tczew', focus: 'Finansowanie przemysłu i transportu' },
    { name: 'Wejherowo', slug: 'wejherowo', focus: 'Kredyty mieszkaniowe i konsumpcyjne' },
  ],
  blogTeasers: [
    {
      title: 'Finansowanie biznesu turystycznego w Trójmieście',
      excerpt: 'Kredyty sezonowe, linie kredytowe i wsparcie dla hoteli i restauracji.',
      href: '/blog/finanse-turystyka-trojmiasto',
    },
    {
      title: 'Kredyty na nieruchomości nad morzem',
      excerpt: 'Jak finansować zakup mieszkania lub domu w nadmorskich kurortach.',
      href: '/blog/kredyty-nieruchomosci-pomorskie',
    },
    {
      title: 'Wsparcie dla stoczni i gospodarki morskiej',
      excerpt: 'Programy BGK i EU dla branży morskiej i portowej.',
      href: '/blog/gospodarka-morska-pomorskie',
    },
  ],
}

export const pomorskieCities: Record<string, PomorskieCityContent> = {
  gdansk: {
    slug: 'gdansk',
    name: 'Gdańsk',
    regionName: 'Pomorskie',
    countryName: 'Polska',
    metaTitleTemplate: `Pożyczki w Gdańsku, Pomorskie – Porównaj ${CURRENT_YEAR}`,
    metaDescriptionTemplate: 'Porównaj oferty pożyczek i kredytów w Gdańsku. Centrum gospodarcze Pomorza z konkurencyjnym RRSO. Sprawdź oferty online!',
    intro:
      'Gdańsk jako stolica województwa pomorskiego i największe miasto Trójmiasta oferuje wszechstronną ofertę produktów finansowych. Miasto wyróżnia się jako centrum gospodarki morskiej, turystyki i usług biznesowych. Dostępne są kredyty gotówkowe (RRSO 7-16%), hipoteczne, dla przedsiębiorców oraz specjalistyczne produkty dla branży morskiej i turystycznej. Silna pozycja banków komercyjnych oraz rozwój fintech zapewniają konkurencyjne warunki. Gdańsk charakteryzuje się również wysokim poziomem cyfryzacji usług bankowych.',
    offer: {
      affiliate: 9205,
      campaign: 'gdansk-pomorskie',
      partnerName: 'Gdańsk Finanse',
      product: 'personal',
      theme: 'blue',
    },
    regulations: [
      'RRSO dla kredytów gotówkowych: 7-16% w zależności od kwoty i historii',
      'Weryfikacja BIK: Obowiązkowa dla wszystkich produktów kredytowych',
      'Okres kredytowania: Do 10 lat dla pożyczek, do 35 lat dla hipotecznych',
      'Kredyty sezonowe: Specjalne oferty dla branży turystycznej',
      'Opłaty: Prowizja 0-4%, większość ofert bez kosztów wcześniejszej spłaty',
      'Dokumenty: Dowód osobisty, zaświadczenie o dochodach, dla firm KRS/CEIDG',
    ],
    faq: [
      {
        question: 'Jakie są specjalne programy kredytowe dla biznesu turystycznego w Gdańsku?',
        answer:
          'Gdańsk oferuje kredyty sezonowe dla hoteli, pensjonatów i restauracji z elastycznymi terminami spłat dostosowanymi do sezonu turystycznego. Dostępne są linie kredytowe obrotowe, kredyty inwestycyjne na modernizację oraz finansowanie z programów EU dla branży turystycznej.',
      },
      {
        question: 'Czy w Gdańsku są kredyty dla gospodarki morskiej?',
        answer:
          'Tak, Bank Gospodarstwa Krajowego oferuje dedykowane programy dla stoczni, firm portowych i armatorów. Dostępne są kredyty na zakup statków, modernizację portów oraz finansowanie działalności eksportowo-importowej z preferencyjnym oprocentowaniem.',
      },
      {
        question: 'Jak długo trwa proces kredytowy w Gdańsku?',
        answer:
          'Standardowo banki podejmują decyzję w ciągu 1-2 dni roboczych dla kredytów gotówkowych. Firmy pożyczkowe mogą wypłacić środki tego samego dnia. Kredyty hipoteczne wymagają 2-4 tygodni, kredyty dla firm 3-7 dni.',
      },
      {
        question: 'Czy są dostępne kredyty na nieruchomości nadmorskie?',
        answer:
          'Tak, banki w Gdańsku oferują kredyty hipoteczne na nieruchomości rekreacyjne i inwestycyjne nad morzem. Wymagany jest zazwyczaj wyższy wkład własny (30-40%) ze względu na inwestycyjny charakter nieruchomości.',
      },
      {
        question: 'Jakie są średnie stawki RRSO w Gdańsku?',
        answer:
          'Średnie RRSO w Gdańsku wynosi 11-13% dla kredytów gotówkowych. Najniższe stawki (7-9%) dla klientów premium. Kredyty hipoteczne od 7%. Firmy pozabankowe 16-26%.',
      },
    ],
    nearby: ['Gdynia', 'Sopot', 'Pruszcz Gdański', 'Rumia', 'Wejherowo', 'Tczew'],
    disclosure: {
      affiliate:
        'Loan AI Portal jest platformą porównawczą i może otrzymywać prowizję od partnerów. Zawsze sprawdzaj warunki umowy.',
      example:
        'Przykład reprezentatywny: Pożyczka 18 000 zł na 48 miesięcy przy RRSO 12% = miesięczna rata 475 zł, całkowita kwota do spłaty 22 800 zł. Warunki indywidualne.',
    },
  },
}
