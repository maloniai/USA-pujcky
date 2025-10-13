// South Africa provinces/regions data

export interface SARegion {
  slug: string
  nameEn: string
  nameLocal: string // Afrikaans or local language variant
  descriptionEn: string
  descriptionLocal: string
  population: string
  avgLoanAmount: string
  avgRate: string
  majorCities: string[]
  capitalCity: string
}

export const saRegions: SARegion[] = [
  {
    slug: 'gauteng',
    nameEn: 'Gauteng',
    nameLocal: 'Gauteng',
    descriptionEn: 'Economic hub with Johannesburg and Pretoria, highest loan demand in South Africa',
    descriptionLocal: 'Ekonomiese middelpunt met Johannesburg en Pretoria, hoogste leningaanvraag in Suid-Afrika',
    population: '15.2M',
    avgLoanAmount: 'R 75,000',
    avgRate: '18.5%',
    majorCities: ['Johannesburg', 'Pretoria', 'Ekurhuleni', 'Midrand', 'Centurion', 'Sandton'],
    capitalCity: 'Johannesburg'
  },
  {
    slug: 'western-cape',
    nameEn: 'Western Cape',
    nameLocal: 'Wes-Kaap',
    descriptionEn: 'Tourist destination and commercial center with Cape Town, diverse lending market',
    descriptionLocal: 'Toeristebestemming en kommersiële sentrum met Kaapstad, diverse leningsmark',
    population: '7.0M',
    avgLoanAmount: 'R 70,000',
    avgRate: '17.9%',
    majorCities: ['Cape Town', 'Stellenbosch', 'Paarl', 'George', 'Worcester', 'Mossel Bay'],
    capitalCity: 'Cape Town'
  },
  {
    slug: 'kwazulu-natal',
    nameEn: 'KwaZulu-Natal',
    nameLocal: 'KwaZulu-Natal',
    descriptionEn: 'Coastal province with Durban, growing financial services sector',
    descriptionLocal: 'Kusstreek met Durban, groeiende finansiële dienstensektor',
    population: '11.5M',
    avgLoanAmount: 'R 65,000',
    avgRate: '19.2%',
    majorCities: ['Durban', 'Pietermaritzburg', 'Newcastle', 'Richards Bay', 'Port Shepstone', 'Ladysmith'],
    capitalCity: 'Pietermaritzburg'
  },
  {
    slug: 'eastern-cape',
    nameEn: 'Eastern Cape',
    nameLocal: 'Oos-Kaap',
    descriptionEn: 'Diverse province with Port Elizabeth and East London, emerging loan markets',
    descriptionLocal: 'Diverse provinsie met Port Elizabeth en East London, opkomende leningsmarkte',
    population: '6.7M',
    avgLoanAmount: 'R 60,000',
    avgRate: '19.8%',
    majorCities: ['Gqeberha (Port Elizabeth)', 'East London', 'Mthatha', 'Uitenhage', 'Grahamstown', 'Queenstown'],
    capitalCity: 'Bhisho'
  },
  {
    slug: 'limpopo',
    nameEn: 'Limpopo',
    nameLocal: 'Limpopo',
    descriptionEn: 'Northern province with agricultural and mining focus, growing financial inclusion',
    descriptionLocal: 'Noordelike provinsie met landbou- en mynboufokus, groeiende finansiële insluiting',
    population: '5.9M',
    avgLoanAmount: 'R 55,000',
    avgRate: '20.5%',
    majorCities: ['Polokwane', 'Mokopane', 'Thohoyandou', 'Tzaneen', 'Musina', 'Phalaborwa'],
    capitalCity: 'Polokwane'
  },
  {
    slug: 'mpumalanga',
    nameEn: 'Mpumalanga',
    nameLocal: 'Mpumalanga',
    descriptionEn: 'Province with strong tourism and agriculture, competitive loan offerings',
    descriptionLocal: 'Provinsie met sterk toerisme en landbou, mededingende leningsaanbiedinge',
    population: '4.7M',
    avgLoanAmount: 'R 58,000',
    avgRate: '19.5%',
    majorCities: ['Mbombela (Nelspruit)', 'Witbank', 'Middelburg', 'Secunda', 'Standerton', 'Ermelo'],
    capitalCity: 'Mbombela'
  },
  {
    slug: 'north-west',
    nameEn: 'North West',
    nameLocal: 'Noordwes',
    descriptionEn: 'Mining and agricultural region with Rustenburg and Mahikeng',
    descriptionLocal: 'Mynbou- en landboustreek met Rustenburg en Mahikeng',
    population: '4.1M',
    avgLoanAmount: 'R 56,000',
    avgRate: '19.7%',
    majorCities: ['Rustenburg', 'Mahikeng', 'Klerksdorp', 'Potchefstroom', 'Brits', 'Vryburg'],
    capitalCity: 'Mahikeng'
  },
  {
    slug: 'free-state',
    nameEn: 'Free State',
    nameLocal: 'Vrystaat',
    descriptionEn: 'Central province with agricultural economy and Bloemfontein',
    descriptionLocal: 'Sentrale provinsie met landbou-ekonomie en Bloemfontein',
    population: '2.9M',
    avgLoanAmount: 'R 54,000',
    avgRate: '19.9%',
    majorCities: ['Bloemfontein', 'Welkom', 'Bethlehem', 'Kroonstad', 'Sasolburg', 'Phuthaditjhaba'],
    capitalCity: 'Bloemfontein'
  },
  {
    slug: 'northern-cape',
    nameEn: 'Northern Cape',
    nameLocal: 'Noord-Kaap',
    descriptionEn: 'Largest but least populated province, mining and diamond industry focus',
    descriptionLocal: 'Grootste maar minste bevolkte provinsie, mynbou- en diamantbedryf fokus',
    population: '1.3M',
    avgLoanAmount: 'R 52,000',
    avgRate: '20.2%',
    majorCities: ['Kimberley', 'Upington', 'Kuruman', 'Springbok', 'De Aar', 'Postmasburg'],
    capitalCity: 'Kimberley'
  }
]
