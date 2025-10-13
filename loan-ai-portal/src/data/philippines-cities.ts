/**
 * Philippines Cities Data for Loan Information
 */

export interface PhilippinesCityInfo {
  name: string
  slug: string
  nameTl: string // Tagalog name
  region: string
  population: string
  avgLoanAmount: string
  avgRate: string
  lenderCount: number
  description: string
  descriptionTl: string
  nearbyC ities: string[]
}

export const philippinesCities: PhilippinesCityInfo[] = [
  // NCR Cities
  {
    name: 'Manila',
    slug: 'manila',
    nameTl: 'Maynila',
    region: 'ncr',
    population: '1.8M',
    avgLoanAmount: '₱180,000',
    avgRate: '17.5%',
    lenderCount: 50,
    description: 'The capital city with the highest concentration of lenders and most competitive loan rates.',
    descriptionTl: 'Ang punong lungsod na may pinakamataas na konsentrasyon ng mga nagpapautang at pinaka-competitive na mga rate ng pautang.',
    nearbyCities: ['quezon-city', 'makati', 'pasig', 'mandaluyong', 'taguig']
  },
  {
    name: 'Quezon City',
    slug: 'quezon-city',
    nameTl: 'Lungsod ng Quezon',
    region: 'ncr',
    population: '2.9M',
    avgLoanAmount: '₱160,000',
    avgRate: '18.0%',
    lenderCount: 45,
    description: 'The most populous city in Metro Manila with extensive loan options for residents.',
    descriptionTl: 'Ang pinakamaraming populasyon na lungsod sa Metro Manila na may malawak na mga pagpipilian ng pautang para sa mga residente.',
    nearbyCities: ['manila', 'caloocan', 'marikina', 'pasig', 'san-juan']
  },
  {
    name: 'Makati',
    slug: 'makati',
    nameTl: 'Makati',
    region: 'ncr',
    population: '600K',
    avgLoanAmount: '₱200,000',
    avgRate: '17.0%',
    lenderCount: 55,
    description: 'The financial capital of the Philippines with premium lending services and competitive rates.',
    descriptionTl: 'Ang punong pinansyal ng Pilipinas na may premium na mga serbisyo sa pagpapautang at competitive na mga rate.',
    nearbyCities: ['manila', 'taguig', 'pasig', 'mandaluyong', 'pasay']
  },
  {
    name: 'Pasig',
    slug: 'pasig',
    nameTl: 'Pasig',
    region: 'ncr',
    population: '800K',
    avgLoanAmount: '₱155,000',
    avgRate: '18.5%',
    lenderCount: 40,
    description: 'A major business district with diverse loan products for personal and business needs.',
    descriptionTl: 'Isang pangunahing distrito ng negosyo na may iba\'t ibang produkto ng pautang para sa personal at pangangailangan ng negosyo.',
    nearbyCities: ['makati', 'quezon-city', 'mandaluyong', 'taguig', 'marikina']
  },
  {
    name: 'Taguig',
    slug: 'taguig',
    nameTl: 'Taguig',
    region: 'ncr',
    population: '900K',
    avgLoanAmount: '₱170,000',
    avgRate: '17.8%',
    lenderCount: 38,
    description: 'Home to Bonifacio Global City with modern financial services and competitive loan offerings.',
    descriptionTl: 'Tahanan ng Bonifacio Global City na may modernong serbisyong pinansyal at competitive na alok ng pautang.',
    nearbyCities: ['makati', 'pasig', 'paranaque', 'pateros', 'muntinlupa']
  },
  {
    name: 'Mandaluyong',
    slug: 'mandaluyong',
    nameTl: 'Mandaluyong',
    region: 'ncr',
    population: '400K',
    avgLoanAmount: '₱145,000',
    avgRate: '18.8%',
    lenderCount: 35,
    description: 'A commercial hub with accessible lending services for residents and businesses.',
    descriptionTl: 'Isang sentro ng komersyo na may accessible na mga serbisyo sa pagpapautang para sa mga residente at negosyo.',
    nearbyCities: ['manila', 'makati', 'pasig', 'san-juan', 'quezon-city']
  },

  // Central Luzon Cities
  {
    name: 'Angeles City',
    slug: 'angeles-city',
    nameTl: 'Lungsod ng Angeles',
    region: 'central-luzon',
    population: '410K',
    avgLoanAmount: '₱110,000',
    avgRate: '20.0%',
    lenderCount: 28,
    description: 'A highly urbanized city in Pampanga with growing financial services sector.',
    descriptionTl: 'Isang lubhang urbanisadong lungsod sa Pampanga na may lumalaking sektor ng serbisyong pinansyal.',
    nearbyCities: ['san-jose-del-monte', 'malolos', 'tarlac-city', 'olongapo', 'cabanatuan']
  },
  {
    name: 'San Jose del Monte',
    slug: 'san-jose-del-monte',
    nameTl: 'San Jose del Monte',
    region: 'central-luzon',
    population: '650K',
    avgLoanAmount: '₱105,000',
    avgRate: '20.5%',
    lenderCount: 25,
    description: 'A rapidly growing city in Bulacan with increasing access to loan products.',
    descriptionTl: 'Isang mabilis na lumalaking lungsod sa Bulacan na may tumataas na access sa mga produkto ng pautang.',
    nearbyCities: ['malolos', 'caloocan', 'quezon-city', 'meycauayan', 'marilao']
  },
  {
    name: 'Malolos',
    slug: 'malolos',
    nameTl: 'Malolos',
    region: 'central-luzon',
    population: '260K',
    avgLoanAmount: '₱98,000',
    avgRate: '21.0%',
    lenderCount: 22,
    description: 'The capital of Bulacan with diverse lending options for residents.',
    descriptionTl: 'Ang kabisera ng Bulacan na may iba\'t ibang pagpipilian ng pagpapautang para sa mga residente.',
    nearbyCities: ['san-jose-del-monte', 'meycauayan', 'balagtas', 'calumpit', 'paombong']
  },
  {
    name: 'Olongapo',
    slug: 'olongapo',
    nameTl: 'Olongapo',
    region: 'central-luzon',
    population: '260K',
    avgLoanAmount: '₱102,000',
    avgRate: '20.8%',
    lenderCount: 24,
    description: 'A highly urbanized city in Zambales with established lending institutions.',
    descriptionTl: 'Isang lubhang urbanisadong lungsod sa Zambales na may mga itinatag na institusyong nagpapautang.',
    nearbyCities: ['subic', 'castillejos', 'san-marcelino', 'iba', 'angeles-city']
  },

  // Calabarzon Cities
  {
    name: 'Calamba',
    slug: 'calamba',
    nameTl: 'Calamba',
    region: 'calabarzon',
    population: '540K',
    avgLoanAmount: '₱125,000',
    avgRate: '19.0%',
    lenderCount: 32,
    description: 'A major industrial city in Laguna with robust loan market for businesses and individuals.',
    descriptionTl: 'Isang pangunahing lungsod ng industriya sa Laguna na may matatag na merkado ng pautang para sa mga negosyo at indibidwal.',
    nearbyCities: ['santa-rosa', 'cabuyao', 'los-banos', 'san-pablo', 'binan']
  },
  {
    name: 'Antipolo',
    slug: 'antipolo',
    nameTl: 'Antipolo',
    region: 'calabarzon',
    population: '880K',
    avgLoanAmount: '₱118,000',
    avgRate: '19.5%',
    lenderCount: 30,
    description: 'The most populous city in Rizal with expanding financial services.',
    descriptionTl: 'Ang pinakamaraming populasyon na lungsod sa Rizal na may lumalawak na serbisyong pinansyal.',
    nearbyCities: ['cainta', 'taytay', 'teresa', 'angono', 'san-mateo']
  },
  {
    name: 'Bacoor',
    slug: 'bacoor',
    nameTl: 'Bacoor',
    region: 'calabarzon',
    population: '660K',
    avgLoanAmount: '₱122,000',
    avgRate: '19.2%',
    lenderCount: 28,
    description: 'A growing city in Cavite with accessible loan options close to Metro Manila.',
    descriptionTl: 'Isang lumalaking lungsod sa Cavite na may accessible na mga pagpipilian ng pautang malapit sa Metro Manila.',
    nearbyCities: ['dasmarinas', 'imus', 'kawit', 'noveleta', 'cavite-city']
  },
  {
    name: 'Dasmariñas',
    slug: 'dasmarinas',
    nameTl: 'Dasmariñas',
    region: 'calabarzon',
    population: '710K',
    avgLoanAmount: '₱115,000',
    avgRate: '19.8%',
    lenderCount: 26,
    description: 'A highly urbanized city in Cavite with diverse lending services.',
    descriptionTl: 'Isang lubhang urbanisadong lungsod sa Cavite na may iba\'t ibang serbisyo sa pagpapautang.',
    nearbyCities: ['bacoor', 'imus', 'silang', 'general-trias', 'carmona']
  },
  {
    name: 'Batangas City',
    slug: 'batangas-city',
    nameTl: 'Lungsod ng Batangas',
    region: 'calabarzon',
    population: '350K',
    avgLoanAmount: '₱120,000',
    avgRate: '19.5%',
    lenderCount: 27,
    description: 'A major port city with strong commercial sector and varied loan products.',
    descriptionTl: 'Isang pangunahing lungsod ng pantalan na may malakas na sektor ng komersyo at iba\'t ibang produkto ng pautang.',
    nearbyCities: ['lipa', 'santo-tomas', 'tanauan', 'san-jose', 'ibaan']
  },
  {
    name: 'Lucena',
    slug: 'lucena',
    nameTl: 'Lucena',
    region: 'calabarzon',
    population: '280K',
    avgLoanAmount: '₱112,000',
    avgRate: '20.0%',
    lenderCount: 24,
    description: 'The capital of Quezon province with established lending institutions.',
    descriptionTl: 'Ang kabisera ng lalawigan ng Quezon na may mga itinatag na institusyong nagpapautang.',
    nearbyCities: ['sariaya', 'pagbilao', 'tayabas', 'candelaria', 'tiaong']
  },

  // Central Visayas Cities
  {
    name: 'Cebu City',
    slug: 'cebu-city',
    nameTl: 'Lungsod ng Cebu',
    region: 'central-visayas',
    population: '960K',
    avgLoanAmount: '₱135,000',
    avgRate: '19.5%',
    lenderCount: 42,
    description: 'The Queen City of the South with the most developed loan market outside Metro Manila.',
    descriptionTl: 'Ang Queen City of the South na may pinakapaunlad na merkado ng pautang sa labas ng Metro Manila.',
    nearbyCities: ['mandaue', 'lapu-lapu', 'talisay', 'toledo', 'danao']
  },
  {
    name: 'Mandaue',
    slug: 'mandaue',
    nameTl: 'Mandaue',
    region: 'central-visayas',
    population: '360K',
    avgLoanAmount: '₱105,000',
    avgRate: '20.5%',
    lenderCount: 30,
    description: 'An industrial city in Metro Cebu with growing financial services.',
    descriptionTl: 'Isang lungsod ng industriya sa Metro Cebu na may lumalaking serbisyong pinansyal.',
    nearbyCities: ['cebu-city', 'lapu-lapu', 'consolacion', 'liloan', 'talisay']
  },
  {
    name: 'Lapu-Lapu',
    slug: 'lapu-lapu',
    nameTl: 'Lapu-Lapu',
    region: 'central-visayas',
    population: '500K',
    avgLoanAmount: '₱100,000',
    avgRate: '21.0%',
    lenderCount: 28,
    description: 'Island city home to Mactan International Airport with diverse loan options.',
    descriptionTl: 'Lungsod ng pulo na tahanan ng Mactan International Airport na may iba\'t ibang pagpipilian ng pautang.',
    nearbyCities: ['mandaue', 'cebu-city', 'cordova', 'consolacion']
  },
  {
    name: 'Tagbilaran',
    slug: 'tagbilaran',
    nameTl: 'Tagbilaran',
    region: 'central-visayas',
    population: '110K',
    avgLoanAmount: '₱88,000',
    avgRate: '22.0%',
    lenderCount: 20,
    description: 'The capital of Bohol with established financial institutions.',
    descriptionTl: 'Ang kabisera ng Bohol na may mga itinatag na institusyong pinansyal.',
    nearbyCities: ['dauis', 'panglao', 'baclayon', 'corella', 'sikatuna']
  },

  // Davao Region Cities
  {
    name: 'Davao City',
    slug: 'davao-city',
    nameTl: 'Lungsod ng Davao',
    region: 'davao',
    population: '1.7M',
    avgLoanAmount: '₱110,000',
    avgRate: '20.5%',
    lenderCount: 35,
    description: 'The largest city in Mindanao with extensive loan services and competitive rates.',
    descriptionTl: 'Ang pinakamalaking lungsod sa Mindanao na may malawak na serbisyo sa pautang at competitive na mga rate.',
    nearbyCities: ['tagum', 'digos', 'panabo', 'mati', 'samal']
  },
  {
    name: 'Tagum',
    slug: 'tagum',
    nameTl: 'Tagum',
    region: 'davao',
    population: '270K',
    avgLoanAmount: '₱85,000',
    avgRate: '22.0%',
    lenderCount: 22,
    description: 'A highly urbanized city in Davao del Norte with growing loan market.',
    descriptionTl: 'Isang lubhang urbanisadong lungsod sa Davao del Norte na may lumalaking merkado ng pautang.',
    nearbyCities: ['davao-city', 'panabo', 'carmen', 'maco', 'asuncion']
  },
  {
    name: 'Digos',
    slug: 'digos',
    nameTl: 'Digos',
    region: 'davao',
    population: '190K',
    avgLoanAmount: '₱80,000',
    avgRate: '22.5%',
    lenderCount: 20,
    description: 'The capital of Davao del Sur with accessible lending services.',
    descriptionTl: 'Ang kabisera ng Davao del Sur na may accessible na mga serbisyo sa pagpapautang.',
    nearbyCities: ['davao-city', 'bansalan', 'magsaysay', 'padada', 'hagonoy']
  },

  // Western Visayas Cities
  {
    name: 'Iloilo City',
    slug: 'iloilo-city',
    nameTl: 'Lungsod ng Iloilo',
    region: 'western-visayas',
    population: '460K',
    avgLoanAmount: '₱95,000',
    avgRate: '21.0%',
    lenderCount: 30,
    description: 'The capital of Iloilo with well-established financial services sector.',
    descriptionTl: 'Ang kabisera ng Iloilo na may mabuting itinatag na sektor ng serbisyong pinansyal.',
    nearbyCities: ['pavia', 'oton', 'leganes', 'santa-barbara', 'cabatuan']
  },
  {
    name: 'Bacolod',
    slug: 'bacolod',
    nameTl: 'Bacolod',
    region: 'western-visayas',
    population: '600K',
    avgLoanAmount: '₱98,000',
    avgRate: '21.5%',
    lenderCount: 28,
    description: 'The City of Smiles with diverse loan products for residents and businesses.',
    descriptionTl: 'Ang City of Smiles na may iba\'t ibang produkto ng pautang para sa mga residente at negosyo.',
    nearbyCities: ['talisay', 'silay', 'bago', 'murcia', 'salvador-benedicto']
  },

  // Northern Mindanao Cities
  {
    name: 'Cagayan de Oro',
    slug: 'cagayan-de-oro',
    nameTl: 'Cagayan de Oro',
    region: 'northern-mindanao',
    population: '730K',
    avgLoanAmount: '₱92,000',
    avgRate: '21.8%',
    lenderCount: 32,
    description: 'The Gateway to Northern Mindanao with comprehensive loan services.',
    descriptionTl: 'Ang Gateway sa Northern Mindanao na may komprehensibong serbisyo sa pautang.',
    nearbyCities: ['iligan', 'valencia', 'malaybalay', 'gingoog', 'tangub']
  },
  {
    name: 'Iligan',
    slug: 'iligan',
    nameTl: 'Iligan',
    region: 'northern-mindanao',
    population: '360K',
    avgLoanAmount: '₱88,000',
    avgRate: '22.2%',
    lenderCount: 26,
    description: 'The City of Majestic Waterfalls with accessible lending institutions.',
    descriptionTl: 'Ang City of Majestic Waterfalls na may accessible na mga institusyong nagpapautang.',
    nearbyCities: ['cagayan-de-oro', 'marawi', 'kauswagan', 'linamon', 'tubod']
  },

  // Bicol Region Cities
  {
    name: 'Legazpi',
    slug: 'legazpi',
    nameTl: 'Legazpi',
    region: 'bicol',
    population: '210K',
    avgLoanAmount: '₱82,000',
    avgRate: '22.5%',
    lenderCount: 24,
    description: 'The capital of Albay with growing financial services sector.',
    descriptionTl: 'Ang kabisera ng Albay na may lumalaking sektor ng serbisyong pinansyal.',
    nearbyCities: ['daraga', 'tabaco', 'ligao', 'oas', 'guinobatan']
  },
  {
    name: 'Naga',
    slug: 'naga',
    nameTl: 'Naga',
    region: 'bicol',
    population: '210K',
    avgLoanAmount: '₱80,000',
    avgRate: '23.0%',
    lenderCount: 22,
    description: 'The Pilgrim City with established lending services for residents.',
    descriptionTl: 'Ang Pilgrim City na may mga itinatag na serbisyo sa pagpapautang para sa mga residente.',
    nearbyCities: ['pili', 'calabanga', 'camaligan', 'canaman', 'magarao']
  }
]

export function getCitiesByRegion(regionSlug: string): PhilippinesCityInfo[] {
  return philippinesCities.filter(city => city.region === regionSlug)
}

export function getCityBySlug(regionSlug: string, citySlug: string): PhilippinesCityInfo | undefined {
  return philippinesCities.find(city => city.region === regionSlug && city.slug === citySlug)
}

export function getAllCitySlugs(): Array<{ region: string; city: string }> {
  return philippinesCities.map(city => ({
    region: city.region,
    city: city.slug
  }))
}
