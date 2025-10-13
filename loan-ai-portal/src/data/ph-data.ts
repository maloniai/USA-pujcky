/**
 * Philippines Regions and Cities Data
 * Complete coverage of all 17 regions with major cities
 * Optimized for SEO and AI search discoverability
 */

export interface PHCity {
  name: string
  slug: string
  region: string
  population: number
  description: string
  latitude?: number
  longitude?: number
}

export interface PHRegion {
  name: string
  slug: string
  cities: PHCity[]
  population: number
  description: string
  capital: string
  mapDescription: string
}

export const philippinesRegions: PHRegion[] = [
  {
    name: 'Metro Manila (NCR)',
    slug: 'metro-manila',
    capital: 'Manila',
    population: 13900000,
    description: 'National Capital Region and economic center of the Philippines. Home to major banks and BSP-supervised lenders.',
    mapDescription: 'Located in Luzon, the most populous metropolitan area in the Philippines.',
    cities: [
      {
        name: 'Manila',
        slug: 'manila',
        region: 'metro-manila',
        population: 1850000,
        description: 'Capital city with extensive financial services and BSP-regulated lenders.',
        latitude: 14.5995,
        longitude: 120.9842
      },
      {
        name: 'Quezon City',
        slug: 'quezon-city',
        region: 'metro-manila',
        population: 2960000,
        description: 'Most populous city with diverse lending options from banks to fintech companies.',
        latitude: 14.6760,
        longitude: 121.0437
      },
      {
        name: 'Makati',
        slug: 'makati',
        region: 'metro-manila',
        population: 630000,
        description: 'Financial center with headquarters of major banks and lending institutions.',
        latitude: 14.5547,
        longitude: 121.0244
      },
      {
        name: 'Pasig',
        slug: 'pasig',
        region: 'metro-manila',
        population: 800000,
        description: 'Business district with strong banking presence and competitive loan rates.',
        latitude: 14.5764,
        longitude: 121.0851
      },
      {
        name: 'Taguig',
        slug: 'taguig',
        region: 'metro-manila',
        population: 900000,
        description: 'Emerging business hub with modern financial services and fintech companies.',
        latitude: 14.5176,
        longitude: 121.0509
      }
    ]
  },
  {
    name: 'Calabarzon (Region IV-A)',
    slug: 'calabarzon',
    capital: 'Calamba',
    population: 16200000,
    description: 'Most populous region outside Metro Manila. Strong industrial base with accessible financial services.',
    mapDescription: 'Southern Luzon region surrounding Metro Manila.',
    cities: [
      {
        name: 'Calamba',
        slug: 'calamba',
        region: 'calabarzon',
        population: 540000,
        description: 'Industrial city with established banking infrastructure and competitive loan products.',
        latitude: 14.2118,
        longitude: 121.1653
      },
      {
        name: 'Antipolo',
        slug: 'antipolo',
        region: 'calabarzon',
        population: 890000,
        description: 'Most populous city in Calabarzon with diverse lending options.',
        latitude: 14.5864,
        longitude: 121.1772
      },
      {
        name: 'Batangas City',
        slug: 'batangas-city',
        region: 'calabarzon',
        population: 340000,
        description: 'Port city with strong banking presence and accessible credit services.',
        latitude: 13.7565,
        longitude: 121.0583
      }
    ]
  },
  {
    name: 'Central Luzon (Region III)',
    slug: 'central-luzon',
    capital: 'San Fernando',
    population: 12400000,
    description: 'Central plains region with agricultural and industrial economy. Comprehensive financial services.',
    mapDescription: 'Central part of Luzon island, north of Metro Manila.',
    cities: [
      {
        name: 'Angeles City',
        slug: 'angeles-city',
        region: 'central-luzon',
        population: 460000,
        description: 'Major urban center with diverse financial services and competitive rates.',
        latitude: 15.1450,
        longitude: 120.5887
      },
      {
        name: 'San Fernando',
        slug: 'san-fernando-pampanga',
        region: 'central-luzon',
        population: 350000,
        description: 'Regional capital with established banking and lending services.',
        latitude: 15.0285,
        longitude: 120.6897
      },
      {
        name: 'Olongapo',
        slug: 'olongapo',
        region: 'central-luzon',
        population: 260000,
        description: 'Port city with accessible banking and credit facilities.',
        latitude: 14.8295,
        longitude: 120.2828
      }
    ]
  },
  {
    name: 'Central Visayas (Region VII)',
    slug: 'central-visayas',
    capital: 'Cebu City',
    population: 8100000,
    description: 'Major economic hub in the Visayas. Cebu City is the second-largest financial center.',
    mapDescription: 'Central Visayan islands including Cebu, Bohol, and Negros Oriental.',
    cities: [
      {
        name: 'Cebu City',
        slug: 'cebu-city',
        region: 'central-visayas',
        population: 990000,
        description: 'Second-largest financial center with comprehensive banking services and BSP-regulated lenders.',
        latitude: 10.3157,
        longitude: 123.8854
      },
      {
        name: 'Mandaue',
        slug: 'mandaue',
        region: 'central-visayas',
        population: 360000,
        description: 'Industrial city in Metro Cebu with strong lending presence.',
        latitude: 10.3238,
        longitude: 123.9224
      },
      {
        name: 'Lapu-Lapu',
        slug: 'lapu-lapu',
        region: 'central-visayas',
        population: 500000,
        description: 'Island city with growing financial services sector.',
        latitude: 10.3103,
        longitude: 123.9494
      }
    ]
  },
  {
    name: 'Davao Region (Region XI)',
    slug: 'davao',
    capital: 'Davao City',
    population: 5600000,
    description: 'Major region in Mindanao. Davao City is the third-largest economic center.',
    mapDescription: 'Southeastern Mindanao, home to Davao City.',
    cities: [
      {
        name: 'Davao City',
        slug: 'davao-city',
        region: 'davao',
        population: 1780000,
        description: 'Third-largest city and major Mindanao financial center with diverse lending options.',
        latitude: 7.1907,
        longitude: 125.4553
      },
      {
        name: 'Tagum',
        slug: 'tagum',
        region: 'davao',
        population: 270000,
        description: 'Growing city with accessible banking and credit services.',
        latitude: 7.4478,
        longitude: 125.8078
      }
    ]
  },
  {
    name: 'Western Visayas (Region VI)',
    slug: 'western-visayas',
    capital: 'Iloilo City',
    population: 7900000,
    description: 'Western Visayan region with Iloilo City as major urban center.',
    mapDescription: 'Western Visayan islands including Panay and Negros Occidental.',
    cities: [
      {
        name: 'Iloilo City',
        slug: 'iloilo-city',
        region: 'western-visayas',
        population: 470000,
        description: 'Major Visayan city with established banking infrastructure.',
        latitude: 10.7202,
        longitude: 122.5621
      },
      {
        name: 'Bacolod',
        slug: 'bacolod',
        region: 'western-visayas',
        population: 600000,
        description: 'City of Smiles with comprehensive financial services.',
        latitude: 10.6750,
        longitude: 122.9506
      }
    ]
  },
  {
    name: 'Bicol Region (Region V)',
    slug: 'bicol',
    capital: 'Legazpi',
    population: 6100000,
    description: 'Southeastern Luzon region with growing financial services sector.',
    mapDescription: 'Southeastern tip of Luzon island.',
    cities: [
      {
        name: 'Legazpi',
        slug: 'legazpi',
        region: 'bicol',
        population: 210000,
        description: 'Regional capital with established banking and lending services.',
        latitude: 13.1391,
        longitude: 123.7437
      },
      {
        name: 'Naga',
        slug: 'naga',
        region: 'bicol',
        population: 210000,
        description: 'Commercial center with accessible credit services.',
        latitude: 13.6218,
        longitude: 123.1948
      }
    ]
  },
  {
    name: 'Northern Mindanao (Region X)',
    slug: 'northern-mindanao',
    capital: 'Cagayan de Oro',
    population: 5200000,
    description: 'Northern Mindanao region with Cagayan de Oro as major city.',
    mapDescription: 'Northern coast of Mindanao island.',
    cities: [
      {
        name: 'Cagayan de Oro',
        slug: 'cagayan-de-oro',
        region: 'northern-mindanao',
        population: 730000,
        description: 'City of Golden Friendship with diverse lending options.',
        latitude: 8.4542,
        longitude: 124.6319
      },
      {
        name: 'Iligan',
        slug: 'iligan',
        region: 'northern-mindanao',
        population: 360000,
        description: 'Industrial city with established banking services.',
        latitude: 8.2280,
        longitude: 124.2452
      }
    ]
  },
  {
    name: 'Ilocos Region (Region I)',
    slug: 'ilocos',
    capital: 'San Fernando',
    population: 5300000,
    description: 'Northwestern Luzon region known for heritage sites.',
    mapDescription: 'Northwestern coast of Luzon island.',
    cities: [
      {
        name: 'Laoag',
        slug: 'laoag',
        region: 'ilocos',
        population: 110000,
        description: 'Regional center with accessible banking and credit facilities.',
        latitude: 18.1987,
        longitude: 120.5937
      },
      {
        name: 'San Fernando',
        slug: 'san-fernando-la-union',
        region: 'ilocos',
        population: 130000,
        description: 'Capital city with established financial services.',
        latitude: 16.6158,
        longitude: 120.3209
      }
    ]
  },
  {
    name: 'Soccsksargen (Region XII)',
    slug: 'soccsksargen',
    capital: 'Koronadal',
    population: 4900000,
    description: 'South-central Mindanao region with agricultural economy.',
    mapDescription: 'South-central part of Mindanao island.',
    cities: [
      {
        name: 'General Santos',
        slug: 'general-santos',
        region: 'soccsksargen',
        population: 620000,
        description: 'Major southern Mindanao city with diverse lending options.',
        latitude: 6.1164,
        longitude: 125.1716
      },
      {
        name: 'Koronadal',
        slug: 'koronadal',
        region: 'soccsksargen',
        population: 190000,
        description: 'Regional capital with accessible banking services.',
        latitude: 6.5008,
        longitude: 124.8469
      }
    ]
  },
  {
    name: 'Cagayan Valley (Region II)',
    slug: 'cagayan-valley',
    capital: 'Tuguegarao',
    population: 3700000,
    description: 'Northeastern Luzon valley region with agricultural focus.',
    mapDescription: 'Northeastern Luzon, Cagayan River valley.',
    cities: [
      {
        name: 'Tuguegarao',
        slug: 'tuguegarao',
        region: 'cagayan-valley',
        population: 160000,
        description: 'Regional capital with established banking infrastructure.',
        latitude: 17.6132,
        longitude: 121.7270
      },
      {
        name: 'Ilagan',
        slug: 'ilagan',
        region: 'cagayan-valley',
        population: 150000,
        description: 'Largest city by land area with accessible credit services.',
        latitude: 17.1500,
        longitude: 121.8833
      }
    ]
  },
  {
    name: 'Eastern Visayas (Region VIII)',
    slug: 'eastern-visayas',
    capital: 'Tacloban',
    population: 4800000,
    description: 'Eastern Visayan region with Tacloban as major city.',
    mapDescription: 'Eastern Visayan islands including Leyte and Samar.',
    cities: [
      {
        name: 'Tacloban',
        slug: 'tacloban',
        region: 'eastern-visayas',
        population: 260000,
        description: 'Regional capital with established financial services.',
        latitude: 11.2500,
        longitude: 125.0000
      },
      {
        name: 'Ormoc',
        slug: 'ormoc',
        region: 'eastern-visayas',
        population: 230000,
        description: 'Port city with accessible banking and credit facilities.',
        latitude: 11.0059,
        longitude: 124.6076
      }
    ]
  },
  {
    name: 'Zamboanga Peninsula (Region IX)',
    slug: 'zamboanga',
    capital: 'Zamboanga City',
    population: 3900000,
    description: 'Western Mindanao peninsula region.',
    mapDescription: 'Western peninsula of Mindanao island.',
    cities: [
      {
        name: 'Zamboanga City',
        slug: 'zamboanga-city',
        region: 'zamboanga',
        population: 980000,
        description: 'Asia\'s Latin City with diverse financial services.',
        latitude: 6.9214,
        longitude: 122.0790
      },
      {
        name: 'Pagadian',
        slug: 'pagadian',
        region: 'zamboanga',
        population: 190000,
        description: 'Capital of Zamboanga del Sur with accessible banking.',
        latitude: 7.8272,
        longitude: 123.4353
      }
    ]
  },
  {
    name: 'Mimaropa (Region IV-B)',
    slug: 'mimaropa',
    capital: 'Calapan',
    population: 3200000,
    description: 'Southwestern island region including Palawan.',
    mapDescription: 'Island region southwest of Luzon.',
    cities: [
      {
        name: 'Puerto Princesa',
        slug: 'puerto-princesa',
        region: 'mimaropa',
        population: 310000,
        description: 'Palawan capital with established financial services.',
        latitude: 9.7392,
        longitude: 118.7353
      },
      {
        name: 'Calapan',
        slug: 'calapan',
        region: 'mimaropa',
        population: 140000,
        description: 'Regional capital with accessible banking services.',
        latitude: 13.4119,
        longitude: 121.1803
      }
    ]
  },
  {
    name: 'Caraga (Region XIII)',
    slug: 'caraga',
    capital: 'Butuan',
    population: 2800000,
    description: 'Northeastern Mindanao region.',
    mapDescription: 'Northeastern part of Mindanao island.',
    cities: [
      {
        name: 'Butuan',
        slug: 'butuan',
        region: 'caraga',
        population: 370000,
        description: 'Regional capital with established banking infrastructure.',
        latitude: 8.9475,
        longitude: 125.5406
      },
      {
        name: 'Surigao City',
        slug: 'surigao-city',
        region: 'caraga',
        population: 170000,
        description: 'Port city with accessible credit services.',
        latitude: 9.7844,
        longitude: 125.4911
      }
    ]
  },
  {
    name: 'Cordillera (CAR)',
    slug: 'cordillera',
    capital: 'Baguio',
    population: 1900000,
    description: 'Mountain region in northern Luzon.',
    mapDescription: 'Central Cordillera mountains of northern Luzon.',
    cities: [
      {
        name: 'Baguio',
        slug: 'baguio',
        region: 'cordillera',
        population: 370000,
        description: 'Summer capital with comprehensive financial services.',
        latitude: 16.4023,
        longitude: 120.5960
      }
    ]
  },
  {
    name: 'BARMM',
    slug: 'barmm',
    capital: 'Cotabato City',
    population: 4400000,
    description: 'Bangsamoro Autonomous Region in Muslim Mindanao.',
    mapDescription: 'Western and southern Mindanao autonomous region.',
    cities: [
      {
        name: 'Cotabato City',
        slug: 'cotabato-city',
        region: 'barmm',
        population: 330000,
        description: 'Regional center with growing financial services.',
        latitude: 7.2236,
        longitude: 124.2453
      }
    ]
  }
]

// Flatten all cities for easy lookup
export const allPHCities: PHCity[] = philippinesRegions.flatMap(region => region.cities)

// Helper functions
export function getPHRegionBySlug(slug: string): PHRegion | undefined {
  return philippinesRegions.find(r => r.slug === slug)
}

export function getPHCityBySlug(slug: string): PHCity | undefined {
  return allPHCities.find(c => c.slug === slug)
}

export function getPHCitiesByRegion(regionSlug: string): PHCity[] {
  const region = getPHRegionBySlug(regionSlug)
  return region ? region.cities : []
}

export function getNearbyCities(citySlug: string, limit: number = 5): PHCity[] {
  const city = getPHCityBySlug(citySlug)
  if (!city) return []
  
  const sameRegionCities = getPHCitiesByRegion(city.region)
    .filter(c => c.slug !== citySlug)
    .slice(0, limit)
  
  return sameRegionCities
}

// Get top cities by population for homepage
export function getTopPHCities(limit: number = 10): PHCity[] {
  return [...allPHCities]
    .sort((a, b) => b.population - a.population)
    .slice(0, limit)
}

// SEO-friendly region names
export const regionDisplayNames: Record<string, string> = {
  'metro-manila': 'Metro Manila (NCR)',
  'calabarzon': 'Calabarzon',
  'central-luzon': 'Central Luzon',
  'central-visayas': 'Central Visayas',
  'davao': 'Davao Region',
  'western-visayas': 'Western Visayas',
  'bicol': 'Bicol Region',
  'northern-mindanao': 'Northern Mindanao',
  'ilocos': 'Ilocos Region',
  'soccsksargen': 'Soccsksargen',
  'cagayan-valley': 'Cagayan Valley',
  'eastern-visayas': 'Eastern Visayas',
  'zamboanga': 'Zamboanga Peninsula',
  'mimaropa': 'Mimaropa',
  'caraga': 'Caraga',
  'cordillera': 'Cordillera (CAR)',
  'barmm': 'BARMM'
}
