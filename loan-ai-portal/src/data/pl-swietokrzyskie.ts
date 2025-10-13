export const swietokrzyskieData = {
  region: {
    name: 'Świętokrzyskie',
    capital: 'Kielce',
    population: '1.2 mln',
    avgRRSO: '8.8%',
    description: 'Region Świętokrzyski to obszar z rozwiniętym przemysłem wydobywczym, turystyką oraz rolnictwem. Oferuje kredyty dla małych i średnich przedsiębiorstw, wsparcie dla turystyki oraz programy mieszkaniowe. Region charakteryzuje się stabilnym rynkiem kredytowym oraz rosnącym zainteresowaniem inwestycjami w OZE.',
    keyRegulations: [
      'Limity oprocentowania zgodne z wytycznymi KNF',
      'Programy wsparcia dla przemysłu kamieniarskiego',
      'Kredyty preferencyjne dla sektora turystycznego',
      'Wsparcie ARiMR dla rolnictwa i przetwórstwa',
      'Programy termomodernizacji dla mieszkańców',
      'Ulgi w SSE dla inwestorów przemysłowych'
    ],
    lenders: [
      {
        name: 'Bank Spółdzielczy w Kielcach',
        types: ['Kredyty mieszkaniowe', 'Kredyty dla MSP', 'Kredyty rolnicze'],
        url: '#'
      },
      {
        name: 'PKO Bank Polski',
        types: ['Kredyty hipoteczne', 'Kredyty dla firm'],
        url: 'https://www.pkobp.pl'
      },
      {
        name: 'Bank Millennium',
        types: ['Kredyty gotówkowe', 'Kredyty konsolidacyjne'],
        url: 'https://www.bankmillennium.pl'
      },
      {
        name: 'Provident Polska',
        types: ['Pożyczki ratalne', 'Pożyczki dla seniorów'],
        url: 'https://www.provident.pl'
      }
    ],
    specialPrograms: [
      'Kredyty dla przemysłu kamieniarskiego',
      'Programy termomodernizacji - dopłaty NFOŚiGW',
      'Wsparcie dla turystyki w Górach Świętokrzyskich',
      'Kredyty preferencyjne dla młodych rolników (ARiMR)',
      'Programy rewitalizacji miast i miasteczek'
    ],
    regulatoryLinks: [
      { name: 'KNF', url: 'https://www.knf.gov.pl' },
      { name: 'BIK', url: 'https://www.bik.pl' },
      { name: 'Rzecznik Finansowy', url: 'https://rf.gov.pl' },
      { name: 'NFOŚiGW', url: 'https://www.nfosigw.gov.pl' }
    ],
    featuredCities: [
      { name: 'Kielce', slug: 'kielce' },
      { name: 'Ostrowiec Świętokrzyski', slug: 'ostrowiec-swietokrzyski' },
      { name: 'Starachowice', slug: 'starachowice' },
      { name: 'Skarżysko-Kamienna', slug: 'skarzysko-kamienna' },
      { name: 'Końskie', slug: 'konskie' },
      { name: 'Busko-Zdrój', slug: 'busko-zdroj' }
    ],
    blogPosts: [
      {
        title: 'Kredyty dla przemysłu kamieniarskiego',
        excerpt: 'Specjalne programy finansowania dla firm z branży wydobywczej i przetwórstwa kamienia.',
        slug: 'kredyty-przemysl-kamieniarski'
      },
      {
        title: 'Termomodernizacja w Świętokrzyskim - jak skorzystać?',
        excerpt: 'Przewodnik po programach NFOŚiGW i lokalnych dopłatach do termomodernizacji.',
        slug: 'termomodernizacja-swietokrzyskie'
      }
    ]
  },
  cities: {
    kielce: {
      name: 'Kielce',
      voivodeship: 'Świętokrzyskie',
      population: '194 000',
      description: 'Kielce to stolica województwa świętokrzyskiego, centrum handlowe i przemysłowe regionu. Miasto oferuje stabilny rynek kredytowy z atrakcyjnymi warunkami dla mieszkańców i przedsiębiorców. Dostępne są kredyty mieszkaniowe, pożyczki dla MSP oraz programy wsparcia dla inwestycji w OZE i termomodernizację. Region charakteryzuje się rosnącym rynkiem nieruchomości, rozwijającym się przemysłem oraz atrakcyjnymi warunkami dla inwestorów w Specjalnej Strefie Ekonomicznej.',
      localRegulations: [
        'Średni RRSO dla kredytów mieszkaniowych: 8.0-9.5%',
        'Programy termomodernizacji z dopłatami NFOŚiGW (do 30% kosztów)',
        'Ulgi podatkowe w SSE - korzystne kredyty dla inwestorów',
        'Wsparcie dla przemysłu kamieniarskiego i wydobywczego',
        'Preferencyjne kredyty dla młodych nabywców (do 35 lat)',
        'Lokalne programy rewitalizacji centrum miasta'
      ],
      faqs: [
        {
          question: 'Jakie są warunki kredytów mieszkaniowych w Kielcach?',
          answer: 'Średnie RRSO wynosi 8.0-9.5% dla kredytów hipotecznych. Młodzi nabywcy (do 35 lat) mogą korzystać z preferencyjnych warunków oraz dopłat do oprocentowania w ramach rządowych programów wsparcia.'
        },
        {
          question: 'Czy mogę dostać dofinansowanie na termomodernizację w Kielcach?',
          answer: 'Tak, NFOŚiGW oferuje program "Czyste Powietrze" z dofinansowaniem do 30% kosztów termomodernizacji. Dodatkowo dostępne są lokalne dopłaty oraz preferencyjne kredyty bankowe.'
        },
        {
          question: 'Jakie kredyty są dostępne dla firm w Kielcach?',
          answer: 'Przedsiębiorcy mogą korzystać z kredytów dla MSP, kredytów inwestycyjnych, obrotowych oraz specjalnych programów dla firm w SSE. Dostępne są także pożyczki z BGK i funduszy unijnych.'
        },
        {
          question: 'Gdzie sprawdzić historię kredytową w Kielcach?',
          answer: 'Historię kredytową można sprawdzić online w BIK (www.bik.pl) lub w oddziałach banków w Kielcach. Pierwszy raport w ciągu roku jest bezpłatny.'
        },
        {
          question: 'Czy firmy z Kielc mogą korzystać z ulg w SSE?',
          answer: 'Tak, firmy inwestujące w Specjalnej Strefie Ekonomicznej mogą korzystać z ulg podatkowych oraz preferencyjnych kredytów bankowych. Wsparcie oferuje także BGK i lokalne fundusze rozwoju.'
        }
      ],
      nearbyCities: [
        { name: 'Ostrowiec Świętokrzyski', slug: 'ostrowiec-swietokrzyski', distance: '50 km' },
        { name: 'Starachowice', slug: 'starachowice', distance: '35 km' },
        { name: 'Skarżysko-Kamienna', slug: 'skarzysko-kamienna', distance: '30 km' },
        { name: 'Końskie', slug: 'konskie', distance: '50 km' },
        { name: 'Busko-Zdrój', slug: 'busko-zdroj', distance: '55 km' },
        { name: 'Jędrzejów', slug: 'jedrzejow', distance: '40 km' }
      ]
    }
  }
};
