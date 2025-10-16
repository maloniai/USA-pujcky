/**
 * New Zealand Regions & Cities Data
 * Basic data structure for NZ lending platform
 */

export interface NZRegion {
  name: string
  slug: string
  description: string
  population: string
  topCities: string[]
}

export interface NZCity {
  name: string
  slug: string
  region: string
  population: string
}

export const newZealandRegions: NZRegion[] = [
  {
    name: 'North Island',
    slug: 'north-island',
    description: 'Home to Auckland and Wellington, major population and economic center',
    population: '3.9M',
    topCities: ['Auckland', 'Wellington', 'Hamilton', 'Tauranga', 'Napier']
  },
  {
    name: 'South Island',
    slug: 'south-island',
    description: 'Scenic region with Christchurch and Queenstown',
    population: '1.2M',
    topCities: ['Christchurch', 'Dunedin', 'Queenstown', 'Nelson', 'Invercargill']
  }
]

export const nzCities: NZCity[] = [
  {
    name: 'Auckland',
    slug: 'auckland',
    region: 'North Island',
    population: '1.7M'
  },
  {
    name: 'Wellington',
    slug: 'wellington',
    region: 'North Island',
    population: '420K'
  },
  {
    name: 'Christchurch',
    slug: 'christchurch',
    region: 'South Island',
    population: '380K'
  },
  {
    name: 'Hamilton',
    slug: 'hamilton',
    region: 'North Island',
    population: '180K'
  },
  {
    name: 'Tauranga',
    slug: 'tauranga',
    region: 'North Island',
    population: '160K'
  }
]

export function getTopNZCities(count: number = 5): NZCity[] {
  return nzCities.slice(0, count)
}

export function getNZRegionBySlug(slug: string): NZRegion | undefined {
  return newZealandRegions.find(r => r.slug === slug)
}
