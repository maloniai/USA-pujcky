export const warminskoMazurskieData = {
  region: {
    name: 'Warmińsko-Mazurskie',
    capital: 'Olsztyn',
    population: '1.4 mln',
    avgRRSO: '9.0%',
    description: 'Warmia i Mazury to region znany z turystyki jeziornej, rolnictwa oraz rozwijającego się sektora usług. Obszar oferuje kredyty sezonowe dla turystyki, kredyty rolnicze oraz wsparcie dla małych i średnich przedsiębiorstw. Popularny kierunek dla inwestycji w nieruchomości rekreacyjne.',
    keyRegulations: [
      'Limity oprocentowania zgodne z wytycznymi KNF',
      'Specjalne kredyty sezonowe dla branży turystycznej',
      'Programy ARiMR dla rolnictwa i agroturystyki',
      'Wsparcie BGK dla rozwoju turystyki jeziornej',
      'Preferencyjne kredyty mieszkaniowe dla młodych rodzin',
      'Programy rewitalizacji małych miast'
    ],
    lenders: [
      {
        name: 'Bank Spółdzielczy w Olsztynie',
        types: ['Kredyty mieszkaniowe', 'Kredyty rolnicze', 'Kredyty dla MSP'],
        url: '#'
      },
      {
        name: 'PKO Bank Polski',
        types: ['Kredyty hipoteczne', 'Kredyty dla turystyki'],
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
      'Kredyty sezonowe dla turystyki jeziornej',
      'Wsparcie ARiMR dla gospodarstw agroturystycznych',
      'Programy BGK na rozwój infrastruktury turystycznej',
      'Preferencyjne kredyty dla młodych rolników',
      'Programy rewitalizacji obiektów zabytkowych'
    ],
    regulatoryLinks: [
      { name: 'KNF', url: 'https://www.knf.gov.pl' },
      { name: 'BIK', url: 'https://www.bik.pl' },
      { name: 'Rzecznik Finansowy', url: 'https://rf.gov.pl' },
      { name: 'ARiMR', url: 'https://www.arimr.gov.pl' }
    ],
    featuredCities: [
      { name: 'Olsztyn', slug: 'olsztyn' },
      { name: 'Elbląg', slug: 'elblag' },
      { name: 'Ełk', slug: 'elk' },
      { name: 'Ostróda', slug: 'ostroda' },
      { name: 'Giżycko', slug: 'gizycko' },
      { name: 'Iława', slug: 'ilawa' }
    ],
    blogPosts: [
      {
        title: 'Kredyty sezonowe dla turystyki jeziornej',
        excerpt: 'Jak sfinansować inwestycje w turystykę nad Mazurami - przewodnik po kredytach sezonowych.',
        slug: 'kredyty-sezonowe-turystyka-jeziorna'
      },
      {
        title: 'Finansowanie agroturystyki w regionie',
        excerpt: 'Programy wsparcia dla gospodarstw agroturystycznych w Warmii i Mazurach.',
        slug: 'finansowanie-agroturystyka-warminsko-mazurskie'
      }
    ]
  },
  cities: {
    olsztyn: {
      name: 'Olsztyn',
      voivodeship: 'Warmińsko-Mazurskie',
      population: '171 000',
      description: 'Olsztyn to stolica Warmii i Mazur, miasto położone w sercu Krainy Tysiąca Jezior. Lokalny rynek kredytowy oferuje atrakcyjne warunki dla mieszkańców oraz przedsiębiorców z branży turystycznej i usługowej. Dostępne są kredyty mieszkaniowe, pożyczki sezonowe dla turystyki oraz wsparcie dla małych i średnich firm. Region charakteryzuje się stabilnym rynkiem nieruchomości oraz rosnącym zainteresowaniem inwestycjami w turystykę jeziorną i agroturystykę.',
      localRegulations: [
        'Średni RRSO dla kredytów mieszkaniowych: 8.0-10.0%',
        'Kredyty sezonowe dla branży turystycznej z elastycznymi terminami spłaty',
        'Programy ARiMR dla gospodarstw agroturystycznych',
        'Wsparcie BGK dla inwestycji w infrastrukturę turystyczną',
        'Preferencyjne kredyty dla młodych rodzin (do 35 lat)',
        'Lokalne programy wsparcia dla mikroprzedsiębiorstw'
      ],
      faqs: [
        {
          question: 'Jakie są dostępne kredyty sezonowe dla turystyki w Olsztynie?',
          answer: 'Banki oferują kredyty sezonowe z elastycznymi terminami spłaty dostosowanymi do sezonu turystycznego. Karencja w spłacie może obowiązywać w okresie zimowym, a maksymalne spłaty w lipcu-sierpniu.'
        },
        {
          question: 'Czy mogę dostać kredyt na agroturystykę w regionie?',
          answer: 'Tak, ARiMR oraz BGK oferują specjalne programy dla gospodarstw agroturystycznych, w tym preferencyjne kredyty, dotacje oraz wsparcie doradcze. Można finansować budowę, rozbudowę i modernizację obiektów.'
        },
        {
          question: 'Jakie są warunki kredytów mieszkaniowych w Olsztynie?',
          answer: 'Średnie RRSO wynosi 8.0-10.0% dla kredytów hipotecznych. Młode rodziny (do 35 lat) mogą korzystać z preferencyjnych warunków i dopłat do oprocentowania.'
        },
        {
          question: 'Gdzie sprawdzić historię kredytową w Olsztynie?',
          answer: 'Historię kredytową można sprawdzić w BIK online (www.bik.pl) lub w oddziałach banków. Pierwszy raport w roku jest bezpłatny.'
        },
        {
          question: 'Czy są dostępne programy dla młodych przedsiębiorców?',
          answer: 'Tak, mikroprzedsiębiorcy mogą korzystać z programów wsparcia oferowanych przez BGK, PARP oraz lokalne fundusze pożyczkowe. Dostępne są preferencyjne kredyty oraz dotacje na start.'
        }
      ],
      nearbyCities: [
        { name: 'Elbląg', slug: 'elblag', distance: '90 km' },
        { name: 'Ełk', slug: 'elk', distance: '110 km' },
        { name: 'Ostróda', slug: 'ostroda', distance: '45 km' },
        { name: 'Giżycko', slug: 'gizycko', distance: '100 km' },
        { name: 'Iława', slug: 'ilawa', distance: '60 km' },
        { name: 'Lidzbark Warmiński', slug: 'lidzbark-warminski', distance: '50 km' }
      ]
    }
  }
};
