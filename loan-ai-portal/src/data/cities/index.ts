import { CityData } from './types'

import { californiaCities } from './states/california'
import { texasCities } from './states/texas'
import { floridaCities } from './states/florida'
import { ohioCities } from './states/ohio'
import { indianaCities } from './states/indiana'
import { washingtonCities } from './states/washington'
import { coloradoCities } from './states/colorado'
import { nevadaCities } from './states/nevada'
import { delawareCities } from './states/delaware'
import { maineCities } from './states/maine'
import { utahCities } from './states/utah'
import { idahoCities } from './states/idaho'
import { iowaCities } from './states/iowa'
import { kansasCities } from './states/kansas'
import { northDakotaCities } from './states/north-dakota'
import { wyomingCities } from './states/wyoming'
import { oklahomaCities } from './states/oklahoma'
import { tennesseeCities } from './states/tennessee'
import { michiganCities } from './states/michigan'
import { kentuckyCities } from './states/kentucky'
import { oregonCities } from './states/oregon'
import { missouriCities } from './states/missouri'
import { louisianaCities } from './states/louisiana'
import { minnesotaCities } from './states/minnesota'
import { hawaiiCities } from './states/hawaii'
import { wisconsinCities } from './states/wisconsin'
import { alaskaCities } from './states/alaska'
import { virginiaCities } from './states/virginia'
import { rhodeIslandCities } from './states/rhode-island'
import { alabamaCities } from './states/alabama'
import { southCarolinaCities } from './states/south-carolina'
import { mississippiCities } from './states/mississippi'
import { nebraskaCities } from './states/nebraska'
import { newJerseyCities } from './states/new-jersey'
import { newMexicoCities } from './states/new-mexico'
import { northCarolinaCities } from './states/north-carolina'

const citiesByStateInternal: Record<string, CityData[]> = {
  'California': californiaCities,
  'Texas': texasCities,
  'Florida': floridaCities,
  'Ohio': ohioCities,
  'Indiana': indianaCities,
  'Washington': washingtonCities,
  'Colorado': coloradoCities,
  'Nevada': nevadaCities,
  'Delaware': delawareCities,
  'Maine': maineCities,
  'Utah': utahCities,
  'Idaho': idahoCities,
  'Iowa': iowaCities,
  'Kansas': kansasCities,
  'North Dakota': northDakotaCities,
  'Wyoming': wyomingCities,
  'Oklahoma': oklahomaCities,
  'Tennessee': tennesseeCities,
  'Michigan': michiganCities,
  'Kentucky': kentuckyCities,
  'Oregon': oregonCities,
  'Missouri': missouriCities,
  'Louisiana': louisianaCities,
  'Minnesota': minnesotaCities,
  'Hawaii': hawaiiCities,
  'Wisconsin': wisconsinCities,
  'Alaska': alaskaCities,
  'Virginia': virginiaCities,
  'Rhode Island': rhodeIslandCities,
  'Alabama': alabamaCities,
  'South Carolina': southCarolinaCities,
  'Mississippi': mississippiCities,
  'Nebraska': nebraskaCities,
  'New Jersey': newJerseyCities,
  'New Mexico': newMexicoCities,
  'North Carolina': northCarolinaCities
}

export const cities: CityData[] = Object.values(citiesByStateInternal).flat()

export const citiesByState: Record<string, CityData[]> = citiesByStateInternal

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find(city => city.slug === slug)
}

export function getCitiesByState(stateAbbr: string): CityData[] {
  return cities.filter(city => city.stateAbbr === stateAbbr)
}

export function getAllCitySlugs(): { state: string; city: string }[] {
  return cities.map(city => ({
    state: city.state.toLowerCase().replace(/\s+/g, '-'),
    city: city.slug
  }))
}

export const stateOrder: string[] = Object.keys(citiesByStateInternal)
