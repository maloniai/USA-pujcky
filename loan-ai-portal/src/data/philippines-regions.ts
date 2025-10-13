/**
 * Philippines Regions Data for Loan Information
 * Administrative Regions of the Philippines
 */

export interface PhilippinesRegionInfo {
  name: string
  slug: string
  nameTl: string // Tagalog name
  population: string
  avgLoanAmount: string
  avgRate: string
  maxLoanAmount: string
  description: string
  descriptionTl: string
  regulations: string[]
  regulationsTl: string[]
  majorCities: string[]
  topLoanTypes: string[]
  topLoanTypesTl: string[]
}

export const philippinesRegions: PhilippinesRegionInfo[] = [
  {
    name: 'National Capital Region (NCR)',
    slug: 'ncr',
    nameTl: 'Pambansang Punong Rehiyon (NCR)',
    population: '13.5M',
    avgLoanAmount: '₱150,000',
    avgRate: '18.5%',
    maxLoanAmount: '₱2,000,000',
    description: 'The capital region with Metro Manila, offering the highest loan availability and most competitive rates in the Philippines.',
    descriptionTl: 'Ang rehiyon ng kabisera na may Metro Manila, nag-aalok ng pinakamataas na availability ng mga pautang at pinaka-competitive na mga rate sa Pilipinas.',
    regulations: [
      'Regulated by BSP (Bangko Sentral ng Pilipinas)',
      'Maximum interest rate: Controlled by lending company regulations',
      'Republic Act No. 3765 (Truth in Lending Act)',
      'Republic Act No. 9474 (Lending Company Regulation Act)',
      'Financial Consumer Protection Act (RA 11765)',
      'Data Privacy Act of 2012 (RA 10173)',
      'Fair and responsible lending practices required',
      'Mandatory disclosure of all fees and charges'
    ],
    regulationsTl: [
      'Pinangangasiwaan ng BSP (Bangko Sentral ng Pilipinas)',
      'Pinakamataas na interes: Kinokontrol ng mga regulasyon ng lending company',
      'Republic Act No. 3765 (Truth in Lending Act)',
      'Republic Act No. 9474 (Lending Company Regulation Act)',
      'Financial Consumer Protection Act (RA 11765)',
      'Data Privacy Act of 2012 (RA 10173)',
      'Kinakailangan ang patas at responsableng gawi sa pagpapautang',
      'Mandatoryong pagsisiwalat ng lahat ng bayad at singil'
    ],
    majorCities: ['Manila', 'Quezon City', 'Makati', 'Pasig', 'Taguig', 'Mandaluyong'],
    topLoanTypes: ['Personal Loans', 'Salary Loans', 'Business Loans'],
    topLoanTypesTl: ['Mga Personal na Pautang', 'Mga Salary Loan', 'Mga Pautang sa Negosyo']
  },
  {
    name: 'Central Luzon',
    slug: 'central-luzon',
    nameTl: 'Gitnang Luzon',
    population: '12.5M',
    avgLoanAmount: '₱100,000',
    avgRate: '20.5%',
    maxLoanAmount: '₱1,500,000',
    description: 'A fast-growing region north of Metro Manila with diverse economic activities and increasing access to financial services.',
    descriptionTl: 'Isang mabilis na lumalaking rehiyon sa hilaga ng Metro Manila na may iba\'t ibang aktibidad sa ekonomiya at tumataas na access sa mga serbisyong pinansyal.',
    regulations: [
      'BSP supervision applies',
      'Truth in Lending Act compliance',
      'Lending Company Regulation Act (RA 9474)',
      'Consumer protection under RA 11765',
      'Privacy protection under RA 10173',
      'Licensed lending institutions required',
      'Transparent fee disclosure mandatory',
      'Anti-predatory lending measures'
    ],
    regulationsTl: [
      'Nalalapat ang pangangasiwa ng BSP',
      'Pagsunod sa Truth in Lending Act',
      'Lending Company Regulation Act (RA 9474)',
      'Proteksyon ng consumer sa ilalim ng RA 11765',
      'Proteksyon ng privacy sa ilalim ng RA 10173',
      'Kinakailangan ang lisensyadong institusyong nagpapautang',
      'Mandatoryong transparent na pagsisiwalat ng bayad',
      'Mga hakbang laban sa predatory lending'
    ],
    majorCities: ['Angeles City', 'San Jose del Monte', 'Malolos', 'Olongapo', 'Cabanatuan', 'Tarlac City'],
    topLoanTypes: ['Personal Loans', 'Agricultural Loans', 'SME Loans'],
    topLoanTypesTl: ['Mga Personal na Pautang', 'Mga Pautang sa Agrikultura', 'Mga Pautang sa SME']
  },
  {
    name: 'Calabarzon',
    slug: 'calabarzon',
    nameTl: 'Calabarzon',
    population: '16.1M',
    avgLoanAmount: '₱120,000',
    avgRate: '19.5%',
    maxLoanAmount: '₱1,800,000',
    description: 'The most populous region in the Philippines, encompassing provinces south of Metro Manila with robust industrial and commercial sectors.',
    descriptionTl: 'Ang pinakamaraming populasyon na rehiyon sa Pilipinas, sumasaklaw sa mga probinsya sa timog ng Metro Manila na may matatag na industriyal at komersyal na sektor.',
    regulations: [
      'BSP regulatory framework',
      'RA 3765 compliance required',
      'RA 9474 licensing standards',
      'Consumer financial protection',
      'Data privacy safeguards',
      'Fair lending practices',
      'Full cost disclosure',
      'Borrower rights protection'
    ],
    regulationsTl: [
      'Regulatory framework ng BSP',
      'Kinakailangang pagsunod sa RA 3765',
      'Mga pamantayan sa lisensya ng RA 9474',
      'Proteksyon ng consumer sa pananalapi',
      'Mga pag-iingat sa data privacy',
      'Patas na gawi sa pagpapautang',
      'Kumpletong pagsisiwalat ng gastos',
      'Proteksyon ng mga karapatan ng umuutang'
    ],
    majorCities: ['Calamba', 'Bacoor', 'Dasmariñas', 'Batangas City', 'Lucena', 'Antipolo'],
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Home Loans'],
    topLoanTypesTl: ['Mga Personal na Pautang', 'Mga Pautang sa Negosyo', 'Mga Pautang sa Bahay']
  },
  {
    name: 'Central Visayas',
    slug: 'central-visayas',
    nameTl: 'Gitnang Bisaya',
    population: '8.0M',
    avgLoanAmount: '₱95,000',
    avgRate: '21.0%',
    maxLoanAmount: '₱1,200,000',
    description: 'A vibrant region centered around Cebu, the Queen City of the South, with a thriving business and tourism sector.',
    descriptionTl: 'Isang masigla na rehiyon na nakasentro sa Cebu, ang Queen City of the South, na may umuusbong na negosyo at sektor ng turismo.',
    regulations: [
      'BSP oversight and regulation',
      'Truth in Lending compliance',
      'Lending company licensing',
      'Financial consumer protection',
      'Privacy law compliance',
      'Responsible lending standards',
      'Transparent pricing',
      'Consumer complaint mechanisms'
    ],
    regulationsTl: [
      'Pangangasiwa at regulasyon ng BSP',
      'Pagsunod sa Truth in Lending',
      'Paglilisensya ng lending company',
      'Proteksyon ng consumer sa pananalapi',
      'Pagsunod sa batas ng privacy',
      'Mga pamantayan sa responsableng pagpapautang',
      'Transparent na pagpepresyo',
      'Mga mekanismo para sa reklamo ng consumer'
    ],
    majorCities: ['Cebu City', 'Mandaue', 'Lapu-Lapu', 'Tagbilaran', 'Dumaguete', 'Talisay'],
    topLoanTypes: ['Personal Loans', 'Salary Loans', 'Tourism Business Loans'],
    topLoanTypesTl: ['Mga Personal na Pautang', 'Mga Salary Loan', 'Mga Pautang sa Negosyo ng Turismo']
  },
  {
    name: 'Davao Region',
    slug: 'davao',
    nameTl: 'Rehiyon ng Davao',
    population: '5.5M',
    avgLoanAmount: '₱90,000',
    avgRate: '21.5%',
    maxLoanAmount: '₱1,000,000',
    description: 'Mindanao\'s premier region with Davao City as its economic hub, known for agribusiness and emerging industries.',
    descriptionTl: 'Ang pangunahing rehiyon ng Mindanao na may Davao City bilang sentro ng ekonomiya, kilala sa agribusiness at umuusbong na industriya.',
    regulations: [
      'BSP regulatory authority',
      'RA 3765 implementation',
      'RA 9474 compliance',
      'Consumer protection laws',
      'Data privacy enforcement',
      'Licensed lender requirement',
      'Fee transparency',
      'Borrower education programs'
    ],
    regulationsTl: [
      'Awtoridad ng regulasyon ng BSP',
      'Pagpapatupad ng RA 3765',
      'Pagsunod sa RA 9474',
      'Mga batas sa proteksyon ng consumer',
      'Pagpapatupad ng data privacy',
      'Kinakailangan ng lisensyadong nagpapautang',
      'Transparency ng bayad',
      'Mga programa sa edukasyon ng umuutang'
    ],
    majorCities: ['Davao City', 'Tagum', 'Digos', 'Mati', 'Panabo', 'Island Garden City of Samal'],
    topLoanTypes: ['Personal Loans', 'Agricultural Loans', 'SME Loans'],
    topLoanTypesTl: ['Mga Personal na Pautang', 'Mga Pautang sa Agrikultura', 'Mga Pautang sa SME']
  },
  {
    name: 'Western Visayas',
    slug: 'western-visayas',
    nameTl: 'Kanlurang Bisaya',
    population: '7.9M',
    avgLoanAmount: '₱85,000',
    avgRate: '22.0%',
    maxLoanAmount: '₱900,000',
    description: 'Home to Iloilo City and rich agricultural areas, this region combines traditional industries with modern financial services.',
    descriptionTl: 'Tahanan ng Iloilo City at mayamang lugar ng agrikultura, pinagsasama ng rehiyong ito ang tradisyonal na industriya at modernong serbisyong pinansyal.',
    regulations: [
      'BSP regulation and monitoring',
      'Truth in Lending Act',
      'Lending Company Regulation',
      'Consumer rights protection',
      'Privacy compliance',
      'Licensed operations only',
      'Full disclosure required',
      'Fair debt collection practices'
    ],
    regulationsTl: [
      'Regulasyon at monitoring ng BSP',
      'Truth in Lending Act',
      'Regulasyon ng Lending Company',
      'Proteksyon ng mga karapatan ng consumer',
      'Pagsunod sa privacy',
      'Lisensyadong operasyon lamang',
      'Kinakailangang kumpletong pagsisiwalat',
      'Patas na gawi sa pagkolekta ng utang'
    ],
    majorCities: ['Iloilo City', 'Bacolod', 'Roxas City', 'Kabankalan', 'Cadiz', 'San Carlos'],
    topLoanTypes: ['Personal Loans', 'Agricultural Loans', 'Livelihood Loans'],
    topLoanTypesTl: ['Mga Personal na Pautang', 'Mga Pautang sa Agrikultura', 'Mga Pautang sa Kabuhayan']
  },
  {
    name: 'Northern Mindanao',
    slug: 'northern-mindanao',
    nameTl: 'Hilagang Mindanao',
    population: '5.0M',
    avgLoanAmount: '₱80,000',
    avgRate: '22.5%',
    maxLoanAmount: '₱850,000',
    description: 'A developing region with Cagayan de Oro as its commercial center, offering growing opportunities for loans and financial services.',
    descriptionTl: 'Isang umuunlad na rehiyon na may Cagayan de Oro bilang sentro ng komersyo, nag-aalok ng lumalaking mga pagkakataon para sa mga pautang at serbisyong pinansyal.',
    regulations: [
      'BSP regulatory compliance',
      'Lending laws enforcement',
      'Consumer protection measures',
      'Data privacy standards',
      'Licensed lender operations',
      'Transparent fee structure',
      'Anti-usury provisions',
      'Borrower rights safeguards'
    ],
    regulationsTl: [
      'Pagsunod sa regulasyon ng BSP',
      'Pagpapatupad ng mga batas sa pagpapautang',
      'Mga hakbang sa proteksyon ng consumer',
      'Mga pamantayan sa data privacy',
      'Mga operasyon ng lisensyadong nagpapautang',
      'Transparent na istruktura ng bayad',
      'Mga probisyon laban sa usury',
      'Mga pag-iingat sa mga karapatan ng umuutang'
    ],
    majorCities: ['Cagayan de Oro', 'Iligan', 'Valencia', 'Malaybalay', 'Ozamiz', 'Tangub'],
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Educational Loans'],
    topLoanTypesTl: ['Mga Personal na Pautang', 'Mga Pautang sa Negosyo', 'Mga Pautang sa Edukasyon']
  },
  {
    name: 'Bicol Region',
    slug: 'bicol',
    nameTl: 'Rehiyon ng Bicol',
    population: '6.0M',
    avgLoanAmount: '₱75,000',
    avgRate: '23.0%',
    maxLoanAmount: '₱750,000',
    description: 'A region in southeastern Luzon known for agriculture and tourism, with increasing access to personal and business lending.',
    descriptionTl: 'Isang rehiyon sa timog-silangang Luzon na kilala sa agrikultura at turismo, na may tumataas na access sa personal at pagpapautang sa negosyo.',
    regulations: [
      'BSP supervision',
      'Truth in Lending compliance',
      'Lending regulation standards',
      'Consumer protection laws',
      'Privacy safeguards',
      'Licensed institutions',
      'Full cost transparency',
      'Fair lending practices'
    ],
    regulationsTl: [
      'Pangangasiwa ng BSP',
      'Pagsunod sa Truth in Lending',
      'Mga pamantayan sa regulasyon ng pagpapautang',
      'Mga batas sa proteksyon ng consumer',
      'Mga pag-iingat sa privacy',
      'Mga lisensyadong institusyon',
      'Kumpletong transparency ng gastos',
      'Patas na gawi sa pagpapautang'
    ],
    majorCities: ['Legazpi', 'Naga', 'Tabaco', 'Ligao', 'Iriga', 'Sorsogon City'],
    topLoanTypes: ['Personal Loans', 'Agricultural Loans', 'Calamity Loans'],
    topLoanTypesTl: ['Mga Personal na Pautang', 'Mga Pautang sa Agrikultura', 'Mga Pautang sa Sakuna']
  }
]

export function getAllRegionSlugs(): string[] {
  return philippinesRegions.map(region => region.slug)
}

export function getRegionBySlug(slug: string): PhilippinesRegionInfo | undefined {
  return philippinesRegions.find(region => region.slug === slug)
}

export function getRegionCount(): number {
  return philippinesRegions.length
}
