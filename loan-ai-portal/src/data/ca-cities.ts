/**
 * Canadian Cities Data
 * Major cities across all provinces and territories for loan matching
 */

export interface CanadianCity {
  name: string
  nameFr: string
  slug: string
  province: string // Province slug
  provinceAbbr: string
  population: string
  description: string
  descriptionFr: string
  avgRate: string
  loanRange: string
  keyFeatures: string[]
  keyFeaturesFr: string[]
  nearbyCities: string[] // Slugs of nearby cities
  isProvincialCapital: boolean
  isMajorMetro: boolean
}

export const canadianCities: CanadianCity[] = [
  // Ontario Cities
  {
    name: 'Toronto',
    nameFr: 'Toronto',
    slug: 'toronto',
    province: 'ontario',
    provinceAbbr: 'ON',
    population: '2.93M',
    description:
      'Canada\'s largest city and financial capital offers diverse lending options from major banks, credit unions, and alternative lenders.',
    descriptionFr:
      'La plus grande ville et capitale financière du Canada offre diverses options de prêt auprès des grandes banques, des coopératives de crédit et des prêteurs alternatifs.',
    avgRate: '8.49% - 18.99%',
    loanRange: '$1,000 - $50,000',
    keyFeatures: [
      'Extensive network of licensed lenders',
      'Competitive rates due to market size',
      'Multilingual services available',
      'High cost of living considerations',
    ],
    keyFeaturesFr: [
      'Vaste réseau de prêteurs agréés',
      'Taux compétitifs en raison de la taille du marché',
      'Services multilingues disponibles',
      'Considérations relatives au coût élevé de la vie',
    ],
    nearbyCities: ['mississauga', 'brampton', 'markham', 'vaughan'],
    isProvincialCapital: true,
    isMajorMetro: true,
  },
  {
    name: 'Ottawa',
    nameFr: 'Ottawa',
    slug: 'ottawa',
    province: 'ontario',
    provinceAbbr: 'ON',
    population: '1.02M',
    description:
      'Canada\'s capital city offers stable lending markets with strong federal employee presence and bilingual service options.',
    descriptionFr:
      'La capitale du Canada offre des marchés de prêt stables avec une forte présence d\'employés fédéraux et des options de service bilingues.',
    avgRate: '8.99% - 19.49%',
    loanRange: '$1,000 - $50,000',
    keyFeatures: [
      'Bilingual lending services',
      'Stable employment base',
      'Major banks and credit unions',
      'Federal employee programs available',
    ],
    keyFeaturesFr: [
      'Services de prêt bilingues',
      'Base d\'emploi stable',
      'Grandes banques et coopératives de crédit',
      'Programmes pour employés fédéraux disponibles',
    ],
    nearbyCities: ['gatineau', 'nepean', 'kanata', 'orleans'],
    isProvincialCapital: false,
    isMajorMetro: true,
  },
  {
    name: 'Mississauga',
    nameFr: 'Mississauga',
    slug: 'mississauga',
    province: 'ontario',
    provinceAbbr: 'ON',
    population: '0.77M',
    description:
      'Major suburban center with diverse lending options serving residential and business communities.',
    descriptionFr:
      'Important centre de banlieue offrant diverses options de prêt pour les communautés résidentielles et commerciales.',
    avgRate: '8.99% - 19.49%',
    loanRange: '$1,000 - $50,000',
    keyFeatures: [
      'Proximity to Toronto financial center',
      'Strong credit union presence',
      'Multicultural lending services',
      'Competitive personal loan rates',
    ],
    keyFeaturesFr: [
      'Proximité du centre financier de Toronto',
      'Forte présence des coopératives de crédit',
      'Services de prêt multiculturels',
      'Taux de prêt personnel compétitifs',
    ],
    nearbyCities: ['toronto', 'brampton', 'oakville', 'milton'],
    isProvincialCapital: false,
    isMajorMetro: true,
  },
  {
    name: 'Brampton',
    nameFr: 'Brampton',
    slug: 'brampton',
    province: 'ontario',
    provinceAbbr: 'ON',
    population: '0.66M',
    description:
      'Fast-growing city with expanding lending services for diverse communities.',
    descriptionFr:
      'Ville en croissance rapide avec des services de prêt en expansion pour des communautés diversifiées.',
    avgRate: '9.49% - 19.99%',
    loanRange: '$1,000 - $50,000',
    keyFeatures: [
      'Growing lender network',
      'Multicultural financial services',
      'Access to GTA banking',
      'New homeowner loan programs',
    ],
    keyFeaturesFr: [
      'Réseau de prêteurs en croissance',
      'Services financiers multiculturels',
      'Accès aux services bancaires de la RGT',
      'Programmes de prêt pour nouveaux propriétaires',
    ],
    nearbyCities: ['mississauga', 'toronto', 'vaughan', 'caledon'],
    isProvincialCapital: false,
    isMajorMetro: true,
  },
  {
    name: 'Hamilton',
    nameFr: 'Hamilton',
    slug: 'hamilton',
    province: 'ontario',
    provinceAbbr: 'ON',
    population: '0.57M',
    description:
      'Industrial and port city with established banking relationships and competitive rates.',
    descriptionFr:
      'Ville industrielle et portuaire avec des relations bancaires établies et des taux compétitifs.',
    avgRate: '9.49% - 19.99%',
    loanRange: '$1,000 - $50,000',
    keyFeatures: [
      'Strong credit union presence',
      'Industrial worker programs',
      'Affordable living compared to GTA',
      'Local community lenders',
    ],
    keyFeaturesFr: [
      'Forte présence des coopératives de crédit',
      'Programmes pour travailleurs industriels',
      'Coût de la vie abordable par rapport à la RGT',
      'Prêteurs communautaires locaux',
    ],
    nearbyCities: ['burlington', 'stoney-creek', 'dundas', 'ancaster'],
    isProvincialCapital: false,
    isMajorMetro: true,
  },
  {
    name: 'London',
    nameFr: 'London',
    slug: 'london',
    province: 'ontario',
    provinceAbbr: 'ON',
    population: '0.42M',
    description:
      'Regional center with strong banking sector and university community lending programs.',
    descriptionFr:
      'Centre régional avec un secteur bancaire solide et des programmes de prêt pour la communauté universitaire.',
    avgRate: '9.99% - 20.49%',
    loanRange: '$1,000 - $45,000',
    keyFeatures: [
      'Major bank branches',
      'Student loan programs',
      'Regional credit unions',
      'Competitive personal rates',
    ],
    keyFeaturesFr: [
      'Succursales de grandes banques',
      'Programmes de prêts étudiants',
      'Coopératives de crédit régionales',
      'Taux personnels compétitifs',
    ],
    nearbyCities: ['st-thomas', 'woodstock', 'stratford', 'chatham'],
    isProvincialCapital: false,
    isMajorMetro: true,
  },

  // Quebec Cities
  {
    name: 'Montreal',
    nameFr: 'Montréal',
    slug: 'montreal',
    province: 'quebec',
    provinceAbbr: 'QC',
    population: '1.78M',
    description:
      'Quebec\'s largest city with bilingual lending services and strong consumer protection enforcement.',
    descriptionFr:
      'La plus grande ville du Québec avec des services de prêt bilingues et une application rigoureuse de la protection des consommateurs.',
    avgRate: '9.49% - 21.49%',
    loanRange: '$1,000 - $50,000',
    keyFeatures: [
      'Fully bilingual services',
      'Strict consumer protection',
      'Diverse lender options',
      'French-language requirements met',
    ],
    keyFeaturesFr: [
      'Services entièrement bilingues',
      'Protection stricte des consommateurs',
      'Options de prêteurs diversifiées',
      'Exigences linguistiques françaises respectées',
    ],
    nearbyCities: ['laval', 'longueuil', 'terrebonne', 'brossard'],
    isProvincialCapital: false,
    isMajorMetro: true,
  },
  {
    name: 'Quebec City',
    nameFr: 'Ville de Québec',
    slug: 'quebec-city',
    province: 'quebec',
    provinceAbbr: 'QC',
    population: '0.55M',
    description:
      'Provincial capital with strong French-language financial services and government employee programs.',
    descriptionFr:
      'Capitale provinciale avec de solides services financiers en français et des programmes pour employés gouvernementaux.',
    avgRate: '10.49% - 21.99%',
    loanRange: '$1,000 - $45,000',
    keyFeatures: [
      'French-first services',
      'Provincial employee programs',
      'Established credit unions',
      'Lower cost of living than Montreal',
    ],
    keyFeaturesFr: [
      'Services en français en priorité',
      'Programmes pour employés provinciaux',
      'Coopératives de crédit établies',
      'Coût de la vie inférieur à Montréal',
    ],
    nearbyCities: ['levis', 'sainte-foy', 'beauport', 'charlesbourg'],
    isProvincialCapital: true,
    isMajorMetro: true,
  },
  {
    name: 'Laval',
    nameFr: 'Laval',
    slug: 'laval',
    province: 'quebec',
    provinceAbbr: 'QC',
    population: '0.44M',
    description:
      'Montreal suburb with bilingual lending services and access to metro area financial institutions.',
    descriptionFr:
      'Banlieue de Montréal avec des services de prêt bilingues et un accès aux institutions financières de la région métropolitaine.',
    avgRate: '9.99% - 21.49%',
    loanRange: '$1,000 - $50,000',
    keyFeatures: [
      'Metro Montreal access',
      'Bilingual services',
      'Quebec consumer protections',
      'Competitive suburban rates',
    ],
    keyFeaturesFr: [
      'Accès au métro de Montréal',
      'Services bilingues',
      'Protections des consommateurs du Québec',
      'Taux de banlieue compétitifs',
    ],
    nearbyCities: ['montreal', 'terrebonne', 'mascouche', 'boisbriand'],
    isProvincialCapital: false,
    isMajorMetro: true,
  },
  {
    name: 'Gatineau',
    nameFr: 'Gatineau',
    slug: 'gatineau',
    province: 'quebec',
    provinceAbbr: 'QC',
    population: '0.29M',
    description:
      'Quebec portion of National Capital Region with bilingual federal employee lending programs.',
    descriptionFr:
      'Portion québécoise de la région de la capitale nationale avec des programmes de prêt bilingues pour employés fédéraux.',
    avgRate: '10.49% - 21.99%',
    loanRange: '$1,000 - $45,000',
    keyFeatures: [
      'Federal employee focus',
      'Bilingual services',
      'Ottawa metro access',
      'Quebec and federal protections',
    ],
    keyFeaturesFr: [
      'Focus sur les employés fédéraux',
      'Services bilingues',
      'Accès au métro d\'Ottawa',
      'Protections québécoises et fédérales',
    ],
    nearbyCities: ['ottawa', 'aylmer', 'hull', 'buckingham'],
    isProvincialCapital: false,
    isMajorMetro: true,
  },

  // British Columbia Cities
  {
    name: 'Vancouver',
    nameFr: 'Vancouver',
    slug: 'vancouver',
    province: 'british-columbia',
    provinceAbbr: 'BC',
    population: '0.68M',
    description:
      'Pacific coast major city with diverse lending options and high real estate costs driving loan demand.',
    descriptionFr:
      'Grande ville de la côte du Pacifique avec diverses options de prêt et des coûts immobiliers élevés stimulant la demande de prêts.',
    avgRate: '8.49% - 18.49%',
    loanRange: '$1,000 - $50,000',
    keyFeatures: [
      'Extensive lender network',
      'Multicultural services',
      'High cost of living adjustments',
      'Tech worker programs',
    ],
    keyFeaturesFr: [
      'Vaste réseau de prêteurs',
      'Services multiculturels',
      'Ajustements pour coût de vie élevé',
      'Programmes pour travailleurs technologiques',
    ],
    nearbyCities: ['surrey', 'burnaby', 'richmond', 'coquitlam'],
    isProvincialCapital: false,
    isMajorMetro: true,
  },
  {
    name: 'Surrey',
    nameFr: 'Surrey',
    slug: 'surrey',
    province: 'british-columbia',
    provinceAbbr: 'BC',
    population: '0.57M',
    description:
      'Fast-growing Metro Vancouver city with expanding financial services and diverse communities.',
    descriptionFr:
      'Ville de Metro Vancouver en croissance rapide avec des services financiers en expansion et des communautés diversifiées.',
    avgRate: '8.99% - 18.99%',
    loanRange: '$1,000 - $50,000',
    keyFeatures: [
      'Growing lender presence',
      'Affordable than Vancouver',
      'Multicultural lending',
      'New development financing',
    ],
    keyFeaturesFr: [
      'Présence croissante de prêteurs',
      'Plus abordable que Vancouver',
      'Prêts multiculturels',
      'Financement de nouveaux développements',
    ],
    nearbyCities: ['vancouver', 'delta', 'langley', 'white-rock'],
    isProvincialCapital: false,
    isMajorMetro: true,
  },
  {
    name: 'Victoria',
    nameFr: 'Victoria',
    slug: 'victoria',
    province: 'british-columbia',
    provinceAbbr: 'BC',
    population: '0.37M',
    description:
      'Provincial capital with established banking sector and government employee lending programs.',
    descriptionFr:
      'Capitale provinciale avec un secteur bancaire établi et des programmes de prêt pour employés gouvernementaux.',
    avgRate: '9.49% - 19.49%',
    loanRange: '$1,000 - $45,000',
    keyFeatures: [
      'Provincial employee focus',
      'Tourism industry financing',
      'Island community lenders',
      'Competitive rates',
    ],
    keyFeaturesFr: [
      'Focus sur les employés provinciaux',
      'Financement de l\'industrie touristique',
      'Prêteurs communautaires insulaires',
      'Taux compétitifs',
    ],
    nearbyCities: ['saanich', 'esquimalt', 'oak-bay', 'colwood'],
    isProvincialCapital: true,
    isMajorMetro: true,
  },

  // Alberta Cities
  {
    name: 'Calgary',
    nameFr: 'Calgary',
    slug: 'calgary',
    province: 'alberta',
    provinceAbbr: 'AB',
    population: '1.31M',
    description:
      'Energy sector hub with strong banking presence and competitive personal loan rates.',
    descriptionFr:
      'Pôle du secteur de l\'énergie avec une forte présence bancaire et des taux de prêt personnel compétitifs.',
    avgRate: '7.99% - 17.49%',
    loanRange: '$1,000 - $50,000',
    keyFeatures: [
      'Energy sector programs',
      'Competitive rates',
      'Major bank headquarters',
      'High-income borrower options',
    ],
    keyFeaturesFr: [
      'Programmes du secteur de l\'énergie',
      'Taux compétitifs',
      'Sièges sociaux de grandes banques',
      'Options pour emprunteurs à revenu élevé',
    ],
    nearbyCities: ['airdrie', 'chestermere', 'okotoks', 'cochrane'],
    isProvincialCapital: false,
    isMajorMetro: true,
  },
  {
    name: 'Edmonton',
    nameFr: 'Edmonton',
    slug: 'edmonton',
    province: 'alberta',
    provinceAbbr: 'AB',
    population: '1.01M',
    description:
      'Provincial capital with diverse economy and established financial services sector.',
    descriptionFr:
      'Capitale provinciale avec une économie diversifiée et un secteur des services financiers établi.',
    avgRate: '8.49% - 17.99%',
    loanRange: '$1,000 - $50,000',
    keyFeatures: [
      'Provincial employee programs',
      'Oil and gas industry focus',
      'Strong credit union network',
      'Competitive personal rates',
    ],
    keyFeaturesFr: [
      'Programmes pour employés provinciaux',
      'Focus sur l\'industrie pétrolière et gazière',
      'Réseau solide de coopératives de crédit',
      'Taux personnels compétitifs',
    ],
    nearbyCities: ['st-albert', 'sherwood-park', 'spruce-grove', 'leduc'],
    isProvincialCapital: true,
    isMajorMetro: true,
  },

  // Manitoba Cities
  {
    name: 'Winnipeg',
    nameFr: 'Winnipeg',
    slug: 'winnipeg',
    province: 'manitoba',
    provinceAbbr: 'MB',
    population: '0.75M',
    description:
      'Provincial capital and largest Manitoba city with diverse lending options and affordable living costs.',
    descriptionFr:
      'Capitale provinciale et plus grande ville du Manitoba avec diverses options de prêt et un coût de la vie abordable.',
    avgRate: '9.49% - 19.49%',
    loanRange: '$1,000 - $35,000',
    keyFeatures: [
      'Affordable cost of living',
      'Strong credit union presence',
      'Major banks available',
      'Indigenous lending programs',
    ],
    keyFeaturesFr: [
      'Coût de la vie abordable',
      'Forte présence des coopératives de crédit',
      'Grandes banques disponibles',
      'Programmes de prêt autochtones',
    ],
    nearbyCities: ['selkirk', 'portage-la-prairie', 'steinbach', 'brandon'],
    isProvincialCapital: true,
    isMajorMetro: true,
  },

  // Saskatchewan Cities
  {
    name: 'Saskatoon',
    nameFr: 'Saskatoon',
    slug: 'saskatoon',
    province: 'saskatchewan',
    provinceAbbr: 'SK',
    population: '0.27M',
    description:
      'Saskatchewan\'s largest city with agriculture-based economy and strong credit union presence.',
    descriptionFr:
      'La plus grande ville de la Saskatchewan avec une économie basée sur l\'agriculture et une forte présence de coopératives de crédit.',
    avgRate: '9.99% - 20.49%',
    loanRange: '$1,000 - $35,000',
    keyFeatures: [
      'Agriculture sector focus',
      'Strong credit unions',
      'Affordable living costs',
      'Community-based lending',
    ],
    keyFeaturesFr: [
      'Focus sur le secteur agricole',
      'Coopératives de crédit solides',
      'Coûts de vie abordables',
      'Prêts communautaires',
    ],
    nearbyCities: ['regina', 'prince-albert', 'moose-jaw', 'north-battleford'],
    isProvincialCapital: false,
    isMajorMetro: true,
  },
  {
    name: 'Regina',
    nameFr: 'Regina',
    slug: 'regina',
    province: 'saskatchewan',
    provinceAbbr: 'SK',
    population: '0.23M',
    description:
      'Provincial capital with government employment focus and accessible financial services.',
    descriptionFr:
      'Capitale provinciale axée sur l\'emploi gouvernemental et des services financiers accessibles.',
    avgRate: '10.49% - 20.99%',
    loanRange: '$1,000 - $35,000',
    keyFeatures: [
      'Government employee programs',
      'Credit union focused',
      'Stable employment base',
      'Affordable housing market',
    ],
    keyFeaturesFr: [
      'Programmes pour employés gouvernementaux',
      'Axé sur les coopératives de crédit',
      'Base d\'emploi stable',
      'Marché du logement abordable',
    ],
    nearbyCities: ['saskatoon', 'moose-jaw', 'weyburn', 'estevan'],
    isProvincialCapital: true,
    isMajorMetro: false,
  },

  // Nova Scotia Cities
  {
    name: 'Halifax',
    nameFr: 'Halifax',
    slug: 'halifax',
    province: 'nova-scotia',
    provinceAbbr: 'NS',
    population: '0.44M',
    description:
      'Maritime hub with diverse lending options serving military, government, and private sectors.',
    descriptionFr:
      'Plaque tournante maritime offrant diverses options de prêt pour les secteurs militaire, gouvernemental et privé.',
    avgRate: '10.49% - 21.49%',
    loanRange: '$1,000 - $30,000',
    keyFeatures: [
      'Military lending programs',
      'Government employee focus',
      'Maritime credit unions',
      'University student options',
    ],
    keyFeaturesFr: [
      'Programmes de prêt militaires',
      'Focus sur les employés gouvernementaux',
      'Coopératives de crédit maritimes',
      'Options pour étudiants universitaires',
    ],
    nearbyCities: ['dartmouth', 'bedford', 'sackville', 'truro'],
    isProvincialCapital: true,
    isMajorMetro: true,
  },

  // New Brunswick Cities
  {
    name: 'Moncton',
    nameFr: 'Moncton',
    slug: 'moncton',
    province: 'new-brunswick',
    provinceAbbr: 'NB',
    population: '0.16M',
    description:
      'Bilingual city with diverse economy and accessible lending services in both official languages.',
    descriptionFr:
      'Ville bilingue avec une économie diversifiée et des services de prêt accessibles dans les deux langues officielles.',
    avgRate: '10.99% - 22.49%',
    loanRange: '$1,000 - $30,000',
    keyFeatures: [
      'Fully bilingual services',
      'Call center industry focus',
      'Transportation hub benefits',
      'Affordable living costs',
    ],
    keyFeaturesFr: [
      'Services entièrement bilingues',
      'Focus sur l\'industrie des centres d\'appels',
      'Avantages de la plaque tournante du transport',
      'Coûts de vie abordables',
    ],
    nearbyCities: ['dieppe', 'riverview', 'saint-john', 'fredericton'],
    isProvincialCapital: false,
    isMajorMetro: true,
  },

  // Newfoundland and Labrador Cities
  {
    name: 'St. John\'s',
    nameFr: 'St. John\'s',
    slug: 'st-johns',
    province: 'newfoundland-and-labrador',
    provinceAbbr: 'NL',
    population: '0.21M',
    description:
      'Provincial capital and easternmost city with oil industry presence and established banking.',
    descriptionFr:
      'Capitale provinciale et ville la plus à l\'est avec une présence de l\'industrie pétrolière et un secteur bancaire établi.',
    avgRate: '11.49% - 23.49%',
    loanRange: '$1,000 - $25,000',
    keyFeatures: [
      'Oil industry focus',
      'Government employment',
      'Marine sector programs',
      'Island community lending',
    ],
    keyFeaturesFr: [
      'Focus sur l\'industrie pétrolière',
      'Emploi gouvernemental',
      'Programmes du secteur maritime',
      'Prêts communautaires insulaires',
    ],
    nearbyCities: ['mount-pearl', 'paradise', 'conception-bay-south', 'corner-brook'],
    isProvincialCapital: true,
    isMajorMetro: true,
  },

  // Prince Edward Island Cities
  {
    name: 'Charlottetown',
    nameFr: 'Charlottetown',
    slug: 'charlottetown',
    province: 'prince-edward-island',
    provinceAbbr: 'PE',
    population: '0.04M',
    description:
      'Provincial capital with tourism-based economy and accessible community lending services.',
    descriptionFr:
      'Capitale provinciale avec une économie basée sur le tourisme et des services de prêt communautaires accessibles.',
    avgRate: '11.99% - 24.49%',
    loanRange: '$1,000 - $25,000',
    keyFeatures: [
      'Tourism industry focus',
      'Community-based lending',
      'Credit union emphasis',
      'Seasonal employment considerations',
    ],
    keyFeaturesFr: [
      'Focus sur l\'industrie touristique',
      'Prêts communautaires',
      'Emphase sur les coopératives de crédit',
      'Considérations pour l\'emploi saisonnier',
    ],
    nearbyCities: ['summerside', 'stratford', 'cornwall', 'montague'],
    isProvincialCapital: true,
    isMajorMetro: false,
  },
]

// Helper functions
export function getCityBySlug(slug: string): CanadianCity | undefined {
  return canadianCities.find((c) => c.slug === slug)
}

export function getCitiesByProvince(provinceSlug: string): CanadianCity[] {
  return canadianCities.filter((c) => c.province === provinceSlug)
}

export function getMajorMetroCities(): CanadianCity[] {
  return canadianCities.filter((c) => c.isMajorMetro)
}

export function getProvincialCapitals(): CanadianCity[] {
  return canadianCities.filter((c) => c.isProvincialCapital)
}

// Total count
export const totalCitiesInData = canadianCities.length
