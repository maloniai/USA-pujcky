/**
 * Canada Regions and Cities Data
 * 13 Provinces and Territories with Major Cities
 * Bilingual Support: English / French
 */

export interface CACity {
  name: string
  nameFr: string
  slug: string
}

export interface CARegion {
  name: string
  nameFr: string
  code: string // Province/Territory code (ON, QC, BC, etc.)
  slug: string
  capital: string
  capitalFr: string
  population: number
  majorCities: string[]
  cities: CACity[]
  description: string
  descriptionFr: string
  economicProfile: string
  economicProfileFr: string
  averageIncome: string
}

// Helper function: Convert city name to slug
function cityToSlug(cityName: string): string {
  return cityName
    .toLowerCase()
    .replace(/[éèêë]/g, 'e')
    .replace(/[àâä]/g, 'a')
    .replace(/[îï]/g, 'i')
    .replace(/[ôö]/g, 'o')
    .replace(/[ùûü]/g, 'u')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Helper function: Convert city names array to objects with slugs
function citiesToObjects(cityNames: string[], cityNamesFr: string[]): CACity[] {
  return cityNames.map((name, index) => ({
    name,
    nameFr: cityNamesFr[index],
    slug: cityToSlug(name),
  }))
}

export const caRegions: CARegion[] = [
  {
    name: 'Ontario',
    nameFr: 'Ontario',
    code: 'ON',
    slug: 'ontario',
    capital: 'Toronto',
    capitalFr: 'Toronto',
    population: 14826276,
    majorCities: ['Toronto', 'Ottawa', 'Mississauga', 'Brampton', 'Hamilton', 'London'],
    cities: citiesToObjects(
      ['Toronto', 'Ottawa', 'Mississauga', 'Brampton', 'Hamilton', 'London', 'Markham', 'Vaughan', 'Kitchener', 'Windsor'],
      ['Toronto', 'Ottawa', 'Mississauga', 'Brampton', 'Hamilton', 'London', 'Markham', 'Vaughan', 'Kitchener', 'Windsor']
    ),
    description: 'Ontario is Canada\'s most populous province and economic powerhouse, home to the nation\'s financial capital Toronto and federal capital Ottawa.',
    descriptionFr: 'L\'Ontario est la province la plus peuplée et le moteur économique du Canada, abritant Toronto, capitale financière, et Ottawa, capitale fédérale.',
    economicProfile: 'Diverse economy with strong financial services, manufacturing, technology, and government sectors. Major hub for banking and fintech.',
    economicProfileFr: 'Économie diversifiée avec services financiers, fabrication, technologie et secteurs gouvernementaux. Grand centre bancaire et fintech.',
    averageIncome: '$75,000 - $95,000 CAD',
  },
  {
    name: 'Quebec',
    nameFr: 'Québec',
    code: 'QC',
    slug: 'quebec',
    capital: 'Quebec City',
    capitalFr: 'Ville de Québec',
    population: 8604495,
    majorCities: ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Longueuil', 'Sherbrooke'],
    cities: citiesToObjects(
      ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Longueuil', 'Sherbrooke', 'Saguenay', 'Trois-Rivières', 'Terrebonne', 'Saint-Jean-sur-Richelieu'],
      ['Montréal', 'Ville de Québec', 'Laval', 'Gatineau', 'Longueuil', 'Sherbrooke', 'Saguenay', 'Trois-Rivières', 'Terrebonne', 'Saint-Jean-sur-Richelieu']
    ),
    description: 'Quebec is Canada\'s largest province by area and only predominantly French-speaking province, with a vibrant culture and strong aerospace, gaming, and AI sectors.',
    descriptionFr: 'Le Québec est la plus grande province du Canada par superficie et la seule province majoritairement francophone, avec une culture dynamique et des secteurs aérospatial, de jeu vidéo et d\'IA solides.',
    economicProfile: 'Strong in aerospace, AI and technology, hydroelectricity, creative industries, and tourism. Montreal is a major fintech hub.',
    economicProfileFr: 'Fort en aérospatiale, IA et technologie, hydroélectricité, industries créatives et tourisme. Montréal est un grand pôle fintech.',
    averageIncome: '$65,000 - $80,000 CAD',
  },
  {
    name: 'British Columbia',
    nameFr: 'Colombie-Britannique',
    code: 'BC',
    slug: 'british-columbia',
    capital: 'Victoria',
    capitalFr: 'Victoria',
    population: 5399118,
    majorCities: ['Vancouver', 'Surrey', 'Burnaby', 'Richmond', 'Victoria', 'Abbotsford'],
    cities: citiesToObjects(
      ['Vancouver', 'Surrey', 'Burnaby', 'Richmond', 'Victoria', 'Abbotsford', 'Coquitlam', 'Kelowna', 'Langley', 'Delta'],
      ['Vancouver', 'Surrey', 'Burnaby', 'Richmond', 'Victoria', 'Abbotsford', 'Coquitlam', 'Kelowna', 'Langley', 'Delta']
    ),
    description: 'British Columbia is Canada\'s westernmost province, known for natural beauty, tech industry in Vancouver, and strong resource sectors.',
    descriptionFr: 'La Colombie-Britannique est la province la plus à l\'ouest du Canada, connue pour sa beauté naturelle, son industrie technologique à Vancouver et ses secteurs des ressources.',
    economicProfile: 'Technology, film production, forestry, mining, tourism, and real estate. Vancouver is a major tech hub and gateway to Asia-Pacific.',
    economicProfileFr: 'Technologie, production cinématographique, foresterie, mines, tourisme et immobilier. Vancouver est un pôle technologique majeur et une porte d\'entrée vers l\'Asie-Pacifique.',
    averageIncome: '$70,000 - $90,000 CAD',
  },
  {
    name: 'Alberta',
    nameFr: 'Alberta',
    code: 'AB',
    slug: 'alberta',
    capital: 'Edmonton',
    capitalFr: 'Edmonton',
    population: 4647178,
    majorCities: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'St. Albert', 'Medicine Hat'],
    cities: citiesToObjects(
      ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'St. Albert', 'Medicine Hat', 'Grande Prairie', 'Airdrie', 'Spruce Grove', 'Fort McMurray'],
      ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'St. Albert', 'Medicine Hat', 'Grande Prairie', 'Airdrie', 'Spruce Grove', 'Fort McMurray']
    ),
    description: 'Alberta is known for its energy sector, stunning Rocky Mountains, and thriving cities of Calgary and Edmonton with growing tech industries.',
    descriptionFr: 'L\'Alberta est connue pour son secteur énergétique, ses magnifiques Rocheuses et ses villes florissantes de Calgary et Edmonton avec des industries technologiques en croissance.',
    economicProfile: 'Energy (oil and gas), agriculture, technology, tourism, and financial services. No provincial sales tax. Strong entrepreneurial culture.',
    economicProfileFr: 'Énergie (pétrole et gaz), agriculture, technologie, tourisme et services financiers. Aucune taxe de vente provinciale. Culture entrepreneuriale forte.',
    averageIncome: '$80,000 - $100,000 CAD',
  },
  {
    name: 'Manitoba',
    nameFr: 'Manitoba',
    code: 'MB',
    slug: 'manitoba',
    capital: 'Winnipeg',
    capitalFr: 'Winnipeg',
    population: 1423419,
    majorCities: ['Winnipeg', 'Brandon', 'Steinbach', 'Thompson', 'Portage la Prairie'],
    cities: citiesToObjects(
      ['Winnipeg', 'Brandon', 'Steinbach', 'Thompson', 'Portage la Prairie', 'Winkler', 'Selkirk', 'Morden', 'Dauphin', 'The Pas'],
      ['Winnipeg', 'Brandon', 'Steinbach', 'Thompson', 'Portage la Prairie', 'Winkler', 'Selkirk', 'Morden', 'Dauphin', 'The Pas']
    ),
    description: 'Manitoba is a prairie province with diverse economy, rich Indigenous heritage, and Winnipeg as cultural and economic center.',
    descriptionFr: 'Le Manitoba est une province des Prairies avec une économie diversifiée, un riche patrimoine autochtone et Winnipeg comme centre culturel et économique.',
    economicProfile: 'Agriculture, manufacturing, transportation, mining, hydro power, and aerospace. Growing tech and financial services sectors.',
    economicProfileFr: 'Agriculture, fabrication, transport, mines, énergie hydroélectrique et aérospatiale. Secteurs technologiques et services financiers en croissance.',
    averageIncome: '$60,000 - $75,000 CAD',
  },
  {
    name: 'Saskatchewan',
    nameFr: 'Saskatchewan',
    code: 'SK',
    slug: 'saskatchewan',
    capital: 'Regina',
    capitalFr: 'Regina',
    population: 1218976,
    majorCities: ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw', 'Swift Current'],
    cities: citiesToObjects(
      ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw', 'Swift Current', 'Yorkton', 'North Battleford', 'Estevan', 'Weyburn', 'Lloydminster'],
      ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw', 'Swift Current', 'Yorkton', 'North Battleford', 'Estevan', 'Weyburn', 'Lloydminster']
    ),
    description: 'Saskatchewan is Canada\'s breadbasket, leading in agriculture, potash, and uranium production with strong resource-based economy.',
    descriptionFr: 'La Saskatchewan est le grenier du Canada, leader en agriculture, production de potasse et d\'uranium avec une économie basée sur les ressources.',
    economicProfile: 'Agriculture (wheat, canola), mining (potash, uranium), oil and gas, and manufacturing. Growing technology sector in Saskatoon.',
    economicProfileFr: 'Agriculture (blé, canola), mines (potasse, uranium), pétrole et gaz, et fabrication. Secteur technologique en croissance à Saskatoon.',
    averageIncome: '$65,000 - $80,000 CAD',
  },
  {
    name: 'Nova Scotia',
    nameFr: 'Nouvelle-Écosse',
    code: 'NS',
    slug: 'nova-scotia',
    capital: 'Halifax',
    capitalFr: 'Halifax',
    population: 1030281,
    majorCities: ['Halifax', 'Cape Breton', 'Truro', 'New Glasgow', 'Glace Bay'],
    cities: citiesToObjects(
      ['Halifax', 'Cape Breton', 'Truro', 'New Glasgow', 'Glace Bay', 'Dartmouth', 'Sydney', 'Amherst', 'Yarmouth', 'Kentville'],
      ['Halifax', 'Cape Breton', 'Truro', 'New Glasgow', 'Glace Bay', 'Dartmouth', 'Sydney', 'Amherst', 'Yarmouth', 'Kentville']
    ),
    description: 'Nova Scotia is a Maritime province with strong ocean industries, vibrant capital Halifax, and growing technology and innovation sectors.',
    descriptionFr: 'La Nouvelle-Écosse est une province maritime avec de fortes industries océaniques, Halifax comme capitale dynamique et des secteurs technologiques et d\'innovation en croissance.',
    economicProfile: 'Fishing, aquaculture, shipbuilding, defense, tourism, and technology. Halifax is a major education and tech hub.',
    economicProfileFr: 'Pêche, aquaculture, construction navale, défense, tourisme et technologie. Halifax est un pôle majeur d\'éducation et de technologie.',
    averageIncome: '$55,000 - $70,000 CAD',
  },
  {
    name: 'New Brunswick',
    nameFr: 'Nouveau-Brunswick',
    code: 'NB',
    slug: 'new-brunswick',
    capital: 'Fredericton',
    capitalFr: 'Fredericton',
    population: 820786,
    majorCities: ['Moncton', 'Saint John', 'Fredericton', 'Dieppe', 'Miramichi'],
    cities: citiesToObjects(
      ['Moncton', 'Saint John', 'Fredericton', 'Dieppe', 'Miramichi', 'Bathurst', 'Edmundston', 'Campbellton', 'Riverview', 'Oromocto'],
      ['Moncton', 'Saint John', 'Fredericton', 'Dieppe', 'Miramichi', 'Bathurst', 'Edmundston', 'Campbellton', 'Riverview', 'Oromocto']
    ),
    description: 'New Brunswick is Canada\'s only officially bilingual province, with forestry, energy, and growing technology sectors.',
    descriptionFr: 'Le Nouveau-Brunswick est la seule province officiellement bilingue du Canada, avec des secteurs forestiers, énergétiques et technologiques en croissance.',
    economicProfile: 'Forestry, energy (including nuclear), fishing, agriculture, and technology. Moncton is a major call center and tech hub.',
    economicProfileFr: 'Foresterie, énergie (y compris nucléaire), pêche, agriculture et technologie. Moncton est un centre d\'appels et technologique majeur.',
    averageIncome: '$55,000 - $68,000 CAD',
  },
  {
    name: 'Newfoundland and Labrador',
    nameFr: 'Terre-Neuve-et-Labrador',
    code: 'NL',
    slug: 'newfoundland-labrador',
    capital: 'St. John\'s',
    capitalFr: 'Saint-Jean',
    population: 533710,
    majorCities: ['St. John\'s', 'Conception Bay South', 'Mount Pearl', 'Corner Brook', 'Paradise'],
    cities: citiesToObjects(
      ['St. John\'s', 'Conception Bay South', 'Mount Pearl', 'Corner Brook', 'Paradise', 'Grand Falls-Windsor', 'Gander', 'Portugal Cove-St. Philip\'s', 'Torbay', 'Labrador City'],
      ['Saint-Jean', 'Conception Bay South', 'Mount Pearl', 'Corner Brook', 'Paradise', 'Grand Falls-Windsor', 'Gander', 'Portugal Cove-St. Philip\'s', 'Torbay', 'Labrador City']
    ),
    description: 'Newfoundland and Labrador is Canada\'s easternmost province with rich maritime heritage, offshore oil, and vibrant culture.',
    descriptionFr: 'Terre-Neuve-et-Labrador est la province la plus à l\'est du Canada avec un riche patrimoine maritime, du pétrole en mer et une culture dynamique.',
    economicProfile: 'Offshore oil and gas, mining (iron ore), fishing, aquaculture, and tourism. Growing technology sector in St. John\'s.',
    economicProfileFr: 'Pétrole et gaz en mer, mines (minerai de fer), pêche, aquaculture et tourisme. Secteur technologique en croissance à Saint-Jean.',
    averageIncome: '$60,000 - $75,000 CAD',
  },
  {
    name: 'Prince Edward Island',
    nameFr: 'Île-du-Prince-Édouard',
    code: 'PE',
    slug: 'prince-edward-island',
    capital: 'Charlottetown',
    capitalFr: 'Charlottetown',
    population: 173954,
    majorCities: ['Charlottetown', 'Summerside', 'Stratford', 'Cornwall', 'Montague'],
    cities: citiesToObjects(
      ['Charlottetown', 'Summerside', 'Stratford', 'Cornwall', 'Montague', 'Kensington', 'Souris', 'Alberton', 'Georgetown', 'Tignish'],
      ['Charlottetown', 'Summerside', 'Stratford', 'Cornwall', 'Montague', 'Kensington', 'Souris', 'Alberton', 'Georgetown', 'Tignish']
    ),
    description: 'Prince Edward Island is Canada\'s smallest province, known for agriculture, particularly potatoes, tourism, and aerospace industries.',
    descriptionFr: 'L\'Île-du-Prince-Édouard est la plus petite province du Canada, connue pour l\'agriculture, notamment les pommes de terre, le tourisme et l\'industrie aérospatiale.',
    economicProfile: 'Agriculture (potatoes, dairy), fishing, tourism, and aerospace. Growing bioscience and technology sectors.',
    economicProfileFr: 'Agriculture (pommes de terre, produits laitiers), pêche, tourisme et aérospatiale. Secteurs biosciences et technologie en croissance.',
    averageIncome: '$50,000 - $65,000 CAD',
  },
  {
    name: 'Yukon',
    nameFr: 'Yukon',
    code: 'YT',
    slug: 'yukon',
    capital: 'Whitehorse',
    capitalFr: 'Whitehorse',
    population: 44238,
    majorCities: ['Whitehorse', 'Dawson City', 'Watson Lake', 'Haines Junction', 'Carmacks'],
    cities: citiesToObjects(
      ['Whitehorse', 'Dawson City', 'Watson Lake', 'Haines Junction', 'Carmacks'],
      ['Whitehorse', 'Dawson City', 'Watson Lake', 'Haines Junction', 'Carmacks']
    ),
    description: 'Yukon is Canada\'s westernmost territory, famous for Klondike Gold Rush history, pristine wilderness, and midnight sun.',
    descriptionFr: 'Le Yukon est le territoire le plus à l\'ouest du Canada, célèbre pour l\'histoire de la ruée vers l\'or du Klondike, la nature sauvage et le soleil de minuit.',
    economicProfile: 'Mining (gold, silver, zinc), tourism, government services, and renewable energy. Growing technology and creative sectors.',
    economicProfileFr: 'Mines (or, argent, zinc), tourisme, services gouvernementaux et énergie renouvelable. Secteurs technologiques et créatifs en croissance.',
    averageIncome: '$70,000 - $85,000 CAD',
  },
  {
    name: 'Northwest Territories',
    nameFr: 'Territoires du Nord-Ouest',
    code: 'NT',
    slug: 'northwest-territories',
    capital: 'Yellowknife',
    capitalFr: 'Yellowknife',
    population: 45668,
    majorCities: ['Yellowknife', 'Hay River', 'Inuvik', 'Fort Smith', 'Behchokǫ̀'],
    cities: citiesToObjects(
      ['Yellowknife', 'Hay River', 'Inuvik', 'Fort Smith', 'Behchokǫ̀'],
      ['Yellowknife', 'Hay River', 'Inuvik', 'Fort Smith', 'Behchokǫ̀']
    ),
    description: 'Northwest Territories offers vast wilderness, diamond mining, and strong Indigenous cultures across Canada\'s north.',
    descriptionFr: 'Les Territoires du Nord-Ouest offrent une vaste nature sauvage, l\'extraction de diamants et de fortes cultures autochtones dans le nord du Canada.',
    economicProfile: 'Diamond mining, oil and gas, tourism, traditional economy, and government services. High cost of living offset by wages.',
    economicProfileFr: 'Extraction de diamants, pétrole et gaz, tourisme, économie traditionnelle et services gouvernementaux. Coût de vie élevé compensé par les salaires.',
    averageIncome: '$75,000 - $95,000 CAD',
  },
  {
    name: 'Nunavut',
    nameFr: 'Nunavut',
    code: 'NU',
    slug: 'nunavut',
    capital: 'Iqaluit',
    capitalFr: 'Iqaluit',
    population: 40817,
    majorCities: ['Iqaluit', 'Rankin Inlet', 'Arviat', 'Baker Lake', 'Cambridge Bay'],
    cities: citiesToObjects(
      ['Iqaluit', 'Rankin Inlet', 'Arviat', 'Baker Lake', 'Cambridge Bay'],
      ['Iqaluit', 'Rankin Inlet', 'Arviat', 'Baker Lake', 'Cambridge Bay']
    ),
    description: 'Nunavut is Canada\'s newest, largest, and most northern territory, with strong Inuit culture and emerging resource industries.',
    descriptionFr: 'Le Nunavut est le territoire le plus récent, le plus grand et le plus au nord du Canada, avec une forte culture inuit et des industries de ressources émergentes.',
    economicProfile: 'Mining (gold, iron ore), fisheries, arts and crafts, tourism, and government. Traditional harvesting remains important.',
    economicProfileFr: 'Mines (or, minerai de fer), pêcheries, arts et artisanat, tourisme et gouvernement. La récolte traditionnelle demeure importante.',
    averageIncome: '$70,000 - $90,000 CAD',
  },
]

// Helper function to get region by slug
export function getCARegionBySlug(slug: string): CARegion | undefined {
  return caRegions.find((region) => region.slug === slug)
}

// Helper function to get all cities across all regions
export function getAllCACities(): Array<{
  name: string
  nameFr: string
  citySlug: string
  regionSlug: string
  regionName: string
  regionNameFr: string
}> {
  const cities: Array<{
    name: string
    nameFr: string
    citySlug: string
    regionSlug: string
    regionName: string
    regionNameFr: string
  }> = []

  caRegions.forEach((region) => {
    region.cities.forEach((city) => {
      cities.push({
        name: city.name,
        nameFr: city.nameFr,
        citySlug: city.slug,
        regionSlug: region.slug,
        regionName: region.name,
        regionNameFr: region.nameFr,
      })
    })
  })

  return cities
}

// Total number of cities
export const totalCACities = caRegions.reduce((sum, region) => sum + region.cities.length, 0)
