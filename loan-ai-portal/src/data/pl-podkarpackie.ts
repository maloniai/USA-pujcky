export const podkarpackieData = {
  region: {
    name: 'Podkarpackie',
    capital: 'Rzeszów',
    population: '2.1 mln',
    avgRRSO: '8.5%',
    description: 'Podkarpacie to region z rozwijającym się sektorem lotniczym, IT oraz turystyką górską. Obszar oferuje atrakcyjne warunki dla kredytów mieszkaniowych, rolniczych oraz dla przedsiębiorstw z sektora technologicznego i turystycznego.',
    keyRegulations: [
      'Limity oprocentowania zgodne z wytycznymi KNF',
      'Obowiązkowa ocena zdolności kredytowej zgodnie z Rekomendacją S',
      'Specjalne programy dla sektora lotniczego i IT',
      'Wsparcie BGK dla przedsiębiorstw w Dolinie Lotniczej',
      'Programy ARiMR dla rolnictwa górskiego',
      'Ulgi podatkowe w Specjalnych Strefach Ekonomicznych'
    ],
    lenders: [
      {
        name: 'PKO Bank Polski',
        types: ['Kredyty mieszkaniowe', 'Kredyty dla firm', 'Kredyty rolnicze'],
        url: 'https://www.pkobp.pl'
      },
      {
        name: 'Bank Spółdzielczy w Rzeszowie',
        types: ['Kredyty lokalne', 'Kredyty dla MSP', 'Kredyty rolnicze'],
        url: '#'
      },
      {
        name: 'ING Bank Śląski',
        types: ['Kredyty mieszkaniowe', 'Kredyty dla startupów IT'],
        url: 'https://www.ing.pl'
      },
      {
        name: 'Provident Polska',
        types: ['Pożyczki gotówkowe', 'Pożyczki ratalne'],
        url: 'https://www.provident.pl'
      }
    ],
    specialPrograms: [
      'Programy BGK dla sektora lotniczego (Dolina Lotnicza)',
      'Kredyty technologiczne dla firm IT',
      'Wsparcie ARiMR dla rolnictwa',
      'Programy rozwoju turystyki górskiej',
      'Kredyty preferencyjne dla młodych rolników'
    ],
    regulatoryLinks: [
      { name: 'KNF', url: 'https://www.knf.gov.pl' },
      { name: 'BIK', url: 'https://www.bik.pl' },
      { name: 'Rzecznik Finansowy', url: 'https://rf.gov.pl' },
      { name: 'ARiMR', url: 'https://www.arimr.gov.pl' }
    ],
    featuredCities: [
      { name: 'Rzeszów', slug: 'rzeszow' },
      { name: 'Przemyśl', slug: 'przemysl' },
      { name: 'Stalowa Wola', slug: 'stalowa-wola' },
      { name: 'Mielec', slug: 'mielec' },
      { name: 'Tarnobrzeg', slug: 'tarnobrzeg' },
      { name: 'Krosno', slug: 'krosno' }
    ],
    blogPosts: [
      {
        title: 'Kredyty dla sektora lotniczego w Dolinie Lotniczej',
        excerpt: 'Specjalne programy finansowania dla firm z branży aerospace w Podkarpacku.',
        slug: 'kredyty-sektor-lotniczy-dolina-lotnicza'
      },
      {
        title: 'Finansowanie turystyki górskiej w Bieszczadach',
        excerpt: 'Możliwości kredytowe dla inwestycji w turystykę górską i agroturystykę.',
        slug: 'finansowanie-turystyka-gorska-bieszczady'
      }
    ]
  },
  cities: {
    rzeszow: {
      name: 'Rzeszów',
      voivodeship: 'Podkarpackie',
      population: '198 000',
      description: 'Rzeszów to stolica Podkarpacia i centrum Doliny Lotniczej – największego klastra przemysłu lotniczego w Polsce. Miasto oferuje atrakcyjne warunki kredytowe dla mieszkańców i przedsiębiorców, szczególnie z sektora technologicznego i lotniczego. Dostępne są kredyty mieszkaniowe, pożyczki dla startupów IT oraz specjalne programy dla firm z branży aerospace. Region charakteryzuje się rosnącym rynkiem nieruchomości oraz dynamicznym rozwojem gospodarczym.',
      localRegulations: [
        'Średni RRSO dla kredytów mieszkaniowych: 7.5-9.5%',
        'Programy BGK dla sektora lotniczego (Dolina Lotnicza)',
        'Ulgi podatkowe w SSE - korzystne warunki kredytowe dla firm',
        'Wsparcie dla startupów IT w Parku Naukowo-Technologicznym',
        'Kredyty preferencyjne dla młodych nabywców mieszkań',
        'Lokalne programy wsparcia dla przedsiębiorców z branży high-tech'
      ],
      faqs: [
        {
          question: 'Jakie są warunki kredytów dla firm z sektora lotniczego w Rzeszowie?',
          answer: 'Firmy z Doliny Lotniczej mogą korzystać ze specjalnych programów BGK, kredytów preferencyjnych oraz ulg w ramach Specjalnej Strefy Ekonomicznej. Dostępne są również kredyty technologiczne na innowacje.'
        },
        {
          question: 'Czy w Rzeszowie dostępne są kredyty dla startupów IT?',
          answer: 'Tak, Park Naukowo-Technologiczny oferuje wsparcie finansowe dla startupów technologicznych, w tym preferencyjne kredyty bankowe, pożyczki z funduszy unijnych oraz programy inkubacyjne.'
        },
        {
          question: 'Jakie są średnie RRSO dla kredytów mieszkaniowych w Rzeszowie?',
          answer: 'Średnie RRSO wynosi 7.5-9.5% dla kredytów hipotecznych. Młodzi nabywcy mogą skorzystać z programów wsparcia, które obniżają koszty kredytu.'
        },
        {
          question: 'Gdzie mogę sprawdzić swoją historię kredytową w Rzeszowie?',
          answer: 'Historię kredytową można sprawdzić przez BIK (Biuro Informacji Kredytowej) online lub w oddziałach banków w Rzeszowie. Raport BIK jest dostępny raz w roku bezpłatnie.'
        },
        {
          question: 'Czy firmy z Rzeszowa mają dostęp do funduszy unijnych?',
          answer: 'Tak, przedsiębiorcy mogą aplikować o dotacje i pożyczki z funduszy UE na rozwój, innowacje, eksport oraz projekty badawczo-rozwojowe. Wsparcie oferuje m.in. PARP i BGK.'
        }
      ],
      nearbyCities: [
        { name: 'Przemyśl', slug: 'przemysl', distance: '80 km' },
        { name: 'Stalowa Wola', slug: 'stalowa-wola', distance: '70 km' },
        { name: 'Mielec', slug: 'mielec', distance: '50 km' },
        { name: 'Tarnobrzeg', slug: 'tarnobrzeg', distance: '75 km' },
        { name: 'Krosno', slug: 'krosno', distance: '60 km' },
        { name: 'Sanok', slug: 'sanok', distance: '85 km' }
      ]
    }
  }
};
