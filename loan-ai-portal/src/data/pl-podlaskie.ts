export const podlaskieData = {
  region: {
    name: 'Podlaskie',
    capital: 'Białystok',
    population: '1.2 mln',
    avgRRSO: '8.7%',
    description: 'Podlasie to region z rozwiniętym rolnictwem, przemysłem spożywczym oraz turystyką przyrodniczą. Obszar oferuje kredyty rolnicze, wsparcie dla przetwórstwa żywności oraz programy dla małych i średnich przedsiębiorstw. Popularny kierunek dla inwestycji w ekoturystykę i rolnictwo ekologiczne.',
    keyRegulations: [
      'Limity oprocentowania zgodne z wytycznymi KNF',
      'Programy ARiMR dla rolnictwa ekologicznego',
      'Wsparcie dla przemysłu mleczarskiego i mięsnego',
      'Kredyty preferencyjne dla młodych rolników',
      'Programy rozwoju ekoturystyki',
      'Wsparcie BGK dla eksportu produktów rolno-spożywczych'
    ],
    lenders: [
      {
        name: 'Bank Spółdzielczy w Białymstoku',
        types: ['Kredyty rolnicze', 'Kredyty mieszkaniowe', 'Kredyty dla MSP'],
        url: '#'
      },
      {
        name: 'PKO Bank Polski',
        types: ['Kredyty hipoteczne', 'Kredyty dla rolników'],
        url: 'https://www.pkobp.pl'
      },
      {
        name: 'Alior Bank',
        types: ['Kredyty gotówkowe', 'Kredyty konsolidacyjne'],
        url: 'https://www.aliorbank.pl'
      },
      {
        name: 'Provident Polska',
        types: ['Pożyczki ratalne', 'Pożyczki gotówkowe'],
        url: 'https://www.provident.pl'
      }
    ],
    specialPrograms: [
      'Kredyty dla rolnictwa ekologicznego (ARiMR)',
      'Wsparcie dla przemysłu mleczarskiego',
      'Programy rozwoju ekoturystyki i agroturystyki',
      'Preferencyjne kredyty dla młodych rolników (do 40 lat)',
      'Wsparcie BGK dla eksportu żywności'
    ],
    regulatoryLinks: [
      { name: 'KNF', url: 'https://www.knf.gov.pl' },
      { name: 'BIK', url: 'https://www.bik.pl' },
      { name: 'Rzecznik Finansowy', url: 'https://rf.gov.pl' },
      { name: 'ARiMR', url: 'https://www.arimr.gov.pl' }
    ],
    featuredCities: [
      { name: 'Białystok', slug: 'bialystok' },
      { name: 'Suwałki', slug: 'suwalki' },
      { name: 'Łomża', slug: 'lomza' },
      { name: 'Augustów', slug: 'augustow' },
      { name: 'Zambrów', slug: 'zambrow' },
      { name: 'Bielsk Podlaski', slug: 'bielsk-podlaski' }
    ],
    blogPosts: [
      {
        title: 'Kredyty dla rolnictwa ekologicznego w Podlaskiem',
        excerpt: 'Programy wsparcia ARiMR dla gospodarstw ekologicznych i produktów BIO.',
        slug: 'kredyty-rolnictwo-ekologiczne-podlaskie'
      },
      {
        title: 'Finansowanie ekoturystyki w regionie',
        excerpt: 'Jak sfinansować inwestycje w turystykę przyrodniczą i agroturystykę w Podlaskiem.',
        slug: 'finansowanie-ekoturystyka-podlaskie'
      }
    ]
  },
  cities: {
    bialystok: {
      name: 'Białystok',
      voivodeship: 'Podlaskie',
      population: '297 000',
      description: 'Białystok to największe miasto północno-wschodniej Polski, stolica województwa podlaskiego. Lokalny rynek kredytowy oferuje szeroką gamę produktów dla mieszkańców i przedsiębiorców, ze szczególnym uwzględnieniem sektora rolnego i spożywczego. Dostępne są kredyty mieszkaniowe, pożyczki dla rolników oraz wsparcie dla firm z branży przetwórstwa żywności. Region charakteryzuje się stabilnym rynkiem nieruchomości, rozwiniętym rolnictwem ekologicznym oraz rosnącym zainteresowaniem ekoturystyką.',
      localRegulations: [
        'Średni RRSO dla kredytów mieszkaniowych: 8.0-9.5%',
        'Programy ARiMR dla rolnictwa ekologicznego i konwencjonalnego',
        'Wsparcie dla przemysłu mleczarskiego i mięsnego',
        'Preferencyjne kredyty dla młodych rolników (do 40 lat)',
        'Programy rozwoju ekoturystyki z dotacjami UE',
        'Lokalne wsparcie dla eksportu produktów spożywczych'
      ],
      faqs: [
        {
          question: 'Jakie kredyty są dostępne dla rolników w Białymstoku?',
          answer: 'ARiMR oferuje preferencyjne kredyty dla młodych rolników (do 40 lat), kredyty inwestycyjne na modernizację gospodarstw oraz specjalne programy dla rolnictwa ekologicznego. Dostępne są także kredyty z BGK na zakup ziemi i maszyn.'
        },
        {
          question: 'Czy mogę dostać wsparcie na ekoturystykę w regionie?',
          answer: 'Tak, dostępne są programy wsparcia z funduszy UE, dotacje na rozwój agroturystyki oraz preferencyjne kredyty bankowe. Można finansować budowę, rozbudowę i wyposażenie obiektów ekoturystycznych.'
        },
        {
          question: 'Jakie są warunki kredytów mieszkaniowych w Białymstoku?',
          answer: 'Średnie RRSO wynosi 8.0-9.5% dla kredytów hipotecznych. Młode rodziny mogą korzystać z preferencyjnych warunków oraz dopłat w ramach rządowych programów mieszkaniowych.'
        },
        {
          question: 'Gdzie sprawdzić historię kredytową w Białymstoku?',
          answer: 'Historię kredytową można sprawdzić w BIK online (www.bik.pl) lub w oddziałach banków w Białymstoku. Pierwszy raport w roku jest bezpłatny.'
        },
        {
          question: 'Czy firmy spożywcze mają dostęp do specjalnego wsparcia?',
          answer: 'Tak, przedsiębiorstwa z branży spożywczej mogą korzystać z kredytów BGK na eksport, programów PARP oraz funduszy unijnych na innowacje i rozwój. Dostępne są także ulgi podatkowe.'
        }
      ],
      nearbyCities: [
        { name: 'Suwałki', slug: 'suwalki', distance: '110 km' },
        { name: 'Łomża', slug: 'lomza', distance: '90 km' },
        { name: 'Augustów', slug: 'augustow', distance: '80 km' },
        { name: 'Zambrów', slug: 'zambrow', distance: '65 km' },
        { name: 'Bielsk Podlaski', slug: 'bielsk-podlaski', distance: '50 km' },
        { name: 'Hajnówka', slug: 'hajnowka', distance: '60 km' }
      ]
    }
  }
};
