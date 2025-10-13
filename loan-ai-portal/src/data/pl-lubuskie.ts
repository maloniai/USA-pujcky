export const lubuskieData = {
  region: {
    name: 'Lubuskie',
    capital: 'Gorzów Wielkopolski / Zielona Góra',
    population: '1.0 mln',
    avgRRSO: '8.9%',
    description: 'Lubuskie to region przygraniczny z rozwiniętym przemysłem motoryzacyjnym, leśnictwem oraz turystyką. Oferuje kredyty dla małych i średnich przedsiębiorstw, wsparcie dla eksportu oraz programy transgraniczne. Popularny kierunek dla inwestycji w turystykę przyrodniczą i przemysł drzewny.',
    keyRegulations: [
      'Limity oprocentowania zgodne z wytycznymi KNF',
      'Programy wsparcia dla przemysłu motoryzacyjnego',
      'Kredyty transgraniczne w ramach współpracy polsko-niemieckiej',
      'Wsparcie BGK dla eksporterów',
      'Programy rozwoju turystyki nad jeziorami i rzekami',
      'Ulgi w SSE dla inwestorów'
    ],
    lenders: [
      {
        name: 'Bank Spółdzielczy w Gorzowie',
        types: ['Kredyty mieszkaniowe', 'Kredyty dla MSP', 'Kredyty transgraniczne'],
        url: '#'
      },
      {
        name: 'PKO Bank Polski',
        types: ['Kredyty hipoteczne', 'Kredyty dla firm'],
        url: 'https://www.pkobp.pl'
      },
      {
        name: 'ING Bank Śląski',
        types: ['Kredyty gotówkowe', 'Kredyty eksportowe'],
        url: 'https://www.ing.pl'
      },
      {
        name: 'Provident Polska',
        types: ['Pożyczki ratalne', 'Pożyczki gotówkowe'],
        url: 'https://www.provident.pl'
      }
    ],
    specialPrograms: [
      'Kredyty transgraniczne dla firm współpracujących z Niemcami',
      'Wsparcie BGK dla eksportu do UE',
      'Programy rozwoju turystyki wodnej i przyrodniczej',
      'Preferencyjne kredyty dla przemysłu motoryzacyjnego',
      'Ulgi w SSE - atrakcyjne warunki kredytowe'
    ],
    regulatoryLinks: [
      { name: 'KNF', url: 'https://www.knf.gov.pl' },
      { name: 'BIK', url: 'https://www.bik.pl' },
      { name: 'Rzecznik Finansowy', url: 'https://rf.gov.pl' },
      { name: 'BGK', url: 'https://www.bgk.pl' }
    ],
    featuredCities: [
      { name: 'Gorzów Wielkopolski', slug: 'gorzow-wielkopolski' },
      { name: 'Zielona Góra', slug: 'zielona-gora' },
      { name: 'Nowa Sól', slug: 'nowa-sol' },
      { name: 'Żary', slug: 'zary' },
      { name: 'Żagań', slug: 'zagan' },
      { name: 'Świebodzin', slug: 'swiebodzin' }
    ],
    blogPosts: [
      {
        title: 'Kredyty transgraniczne dla przedsiębiorców w Lubuskiem',
        excerpt: 'Jak skorzystać z programów współpracy polsko-niemieckiej i finansować projekty transgraniczne.',
        slug: 'kredyty-transgraniczne-lubuskie'
      },
      {
        title: 'Wsparcie dla eksporterów do Niemiec',
        excerpt: 'Programy BGK i banków komercyjnych dla firm eksportujących do rynków UE.',
        slug: 'wsparcie-eksporterow-niemcy'
      }
    ]
  },
  cities: {
    'gorzow-wielkopolski': {
      name: 'Gorzów Wielkopolski',
      voivodeship: 'Lubuskie',
      population: '123 000',
      description: 'Gorzów Wielkopolski to jedna z dwóch stolic województwa lubuskiego (obok Zielonej Góry), miasto przygraniczne z rozwiniętym przemysłem i handlem. Lokalny rynek kredytowy oferuje atrakcyjne warunki dla mieszkańców i przedsiębiorców, szczególnie w kontekście współpracy transgranicznej z Niemcami. Dostępne są kredyty mieszkaniowe, pożyczki dla eksporterów oraz wsparcie dla małych i średnich firm. Region charakteryzuje się stabilnym rynkiem nieruchomości, rozwijającym się przemysłem motoryzacyjnym oraz rosnącym zainteresowaniem inwestycjami transgranicznymi.',
      localRegulations: [
        'Średni RRSO dla kredytów mieszkaniowych: 8.5-10.0%',
        'Kredyty transgraniczne w ramach współpracy polsko-niemieckiej',
        'Wsparcie BGK dla eksporterów do rynków UE',
        'Ulgi podatkowe w SSE dla inwestorów przemysłowych',
        'Preferencyjne kredyty dla młodych rodzin (do 35 lat)',
        'Programy rozwoju turystyki wodnej nad Wartą'
      ],
      faqs: [
        {
          question: 'Jakie kredyty transgraniczne są dostępne w Gorzowie?',
          answer: 'Banki oferują specjalne kredyty dla firm współpracujących z partnerami niemieckimi, w tym kredyty eksportowe, inwestycyjne oraz obrotowe w EUR i PLN. Dostępne są także programy wsparcia z funduszy transgranicznych.'
        },
        {
          question: 'Czy mogę dostać kredyt na eksport do Niemiec?',
          answer: 'Tak, BGK oferuje kredyty eksportowe z ubezpieczeniem KUKE, preferencyjne gwarancje oraz wsparcie doradcze. Banki komercyjne oferują także kredyty obrotowe w walucie EUR dla eksporterów.'
        },
        {
          question: 'Jakie są warunki kredytów mieszkaniowych w Gorzowie?',
          answer: 'Średnie RRSO wynosi 8.5-10.0% dla kredytów hipotecznych. Młode rodziny (do 35 lat) mogą korzystać z preferencyjnych warunków oraz dopłat do oprocentowania.'
        },
        {
          question: 'Gdzie sprawdzić historię kredytową w Gorzowie?',
          answer: 'Historię kredytową można sprawdzić w BIK online (www.bik.pl) lub w oddziałach banków w Gorzowie. Pierwszy raport w roku jest bezpłatny.'
        },
        {
          question: 'Czy firmy z Gorzowa mogą korzystać z ulg w SSE?',
          answer: 'Tak, inwestorzy w Specjalnej Strefie Ekonomicznej mogą korzystać z ulg podatkowych oraz preferencyjnych kredytów bankowych. Wsparcie oferuje także BGK i lokalne fundusze rozwoju.'
        }
      ],
      nearbyCities: [
        { name: 'Zielona Góra', slug: 'zielona-gora', distance: '95 km' },
        { name: 'Nowa Sól', slug: 'nowa-sol', distance: '85 km' },
        { name: 'Żary', slug: 'zary', distance: '75 km' },
        { name: 'Żagań', slug: 'zagan', distance: '100 km' },
        { name: 'Świebodzin', slug: 'swiebodzin', distance: '50 km' },
        { name: 'Kostrzyn nad Odrą', slug: 'kostrzyn-nad-odra', distance: '70 km' }
      ]
    }
  }
};
