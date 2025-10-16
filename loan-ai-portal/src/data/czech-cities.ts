export interface City {
  name: string;
  slug: string;
  region: string;
  nearbyCities: string[]; // slugs of nearby cities
}

export const jihomoravskyKrajCities: City[] = [
  { name: 'Adamov', slug: 'adamov', region: 'Jihomoravský kraj', nearbyCities: ['blansko', 'brno', 'tišnov'] },
  { name: 'Blansko', slug: 'blansko', region: 'Jihomoravský kraj', nearbyCities: ['adamov', 'boskovice', 'brno'] },
  { name: 'Boskovice', slug: 'boskovice', region: 'Jihomoravský kraj', nearbyCities: ['blansko', 'letovice', 'velké-opatovice'] },
  { name: 'Brno', slug: 'brno', region: 'Jihomoravský kraj', nearbyCities: ['kuřim', 'modřice', 'šlapanice'] },
  { name: 'Břeclav', slug: 'břeclav', region: 'Jihomoravský kraj', nearbyCities: ['valtice', 'hodonín', 'mikulov'] },
  { name: 'Bučovice', slug: 'bučovice', region: 'Jihomoravský kraj', nearbyCities: ['slavkov-u-brna', 'vyškov', 'kyjov'] },
  { name: 'Bzenec', slug: 'bzenec', region: 'Jihomoravský kraj', nearbyCities: ['strážnice', 'kyjov', 'veselí-nad-moravou'] },
  { name: 'Dubňany', slug: 'dubňany', region: 'Jihomoravský kraj', nearbyCities: ['hodonín', 'kyjov', 'veselí-nad-moravou'] },
  { name: 'Dolní Kounice', slug: 'dolní-kounice', region: 'Jihomoravský kraj', nearbyCities: ['ivančice', 'pohořelice', 'moravský-krumlov'] },
  { name: 'Hodonín', slug: 'hodonín', region: 'Jihomoravský kraj', nearbyCities: ['kyjov', 'veselí-nad-moravou', 'břeclav'] },
  { name: 'Hrušovany nad Jevišovkou', slug: 'hrušovany-nad-jevišovkou', region: 'Jihomoravský kraj', nearbyCities: ['znojmo', 'mikulov', 'pohořelice'] },
  { name: 'Hustopeče', slug: 'hustopeče', region: 'Jihomoravský kraj', nearbyCities: ['mikulov', 'břeclav', 'klobouky-u-brna'] },
  { name: 'Ivančice', slug: 'ivančice', region: 'Jihomoravský kraj', nearbyCities: ['dolní-kounice', 'moravský-krumlov', 'rosice'] },
  { name: 'Klobouky u Brna', slug: 'klobouky-u-brna', region: 'Jihomoravský kraj', nearbyCities: ['hustopeče', 'pohořelice', 'židlochovice'] },
  { name: 'Kuřim', slug: 'kuřim', region: 'Jihomoravský kraj', nearbyCities: ['brno', 'tišnov', 'rosice'] },
  { name: 'Kyjov', slug: 'kyjov', region: 'Jihomoravský kraj', nearbyCities: ['hodonín', 'veselí-nad-moravou', 'bučovice'] },
  { name: 'Letovice', slug: 'letovice', region: 'Jihomoravský kraj', nearbyCities: ['boskovice', 'velké-opatovice', 'blansko'] },
  { name: 'Mikulov', slug: 'mikulov', region: 'Jihomoravský kraj', nearbyCities: ['hustopeče', 'valtice', 'břeclav'] },
  { name: 'Miroslav', slug: 'miroslav', region: 'Jihomoravský kraj', nearbyCities: ['znojmo', 'moravský-krumlov', 'pohořelice'] },
  { name: 'Modřice', slug: 'modřice', region: 'Jihomoravský kraj', nearbyCities: ['brno', 'rajec-jestřebí', 'židlochovice'] },
  { name: 'Moravský Krumlov', slug: 'moravský-krumlov', region: 'Jihomoravský kraj', nearbyCities: ['ivančice', 'miroslav', 'znojmo'] },
  { name: 'Oslavany', slug: 'oslavany', region: 'Jihomoravský kraj', nearbyCities: ['rosice', 'ivančice', 'zbýšov'] },
  { name: 'Pohořelice', slug: 'pohořelice', region: 'Jihomoravský kraj', nearbyCities: ['hustopeče', 'miroslav', 'znojmo'] },
  { name: 'Rájec-Jestřebí', slug: 'rájec-jestřebí', region: 'Jihomoravský kraj', nearbyCities: ['blansko', 'boskovice', 'letovice'] },
  { name: 'Rosice', slug: 'rosice', region: 'Jihomoravský kraj', nearbyCities: ['ivančice', 'oslavany', 'kuřim'] },
  { name: 'Rousínov', slug: 'rousínov', region: 'Jihomoravský kraj', nearbyCities: ['vyškov', 'slavkov-u-brna', 'bučovice'] },
  { name: 'Šlapanice', slug: 'šlapanice', region: 'Jihomoravský kraj', nearbyCities: ['brno', 'slavkov-u-brna', 'vyškov'] },
  { name: 'Slavkov u Brna', slug: 'slavkov-u-brna', region: 'Jihomoravský kraj', nearbyCities: ['vyškov', 'bučovice', 'šlapanice'] },
  { name: 'Strážnice', slug: 'strážnice', region: 'Jihomoravský kraj', nearbyCities: ['hodonín', 'veselí-nad-moravou', 'bzenec'] },
  { name: 'Tišnov', slug: 'tišnov', region: 'Jihomoravský kraj', nearbyCities: ['kuřim', 'brno', 'rosice'] },
  { name: 'Velké Opatovice', slug: 'velké-opatovice', region: 'Jihomoravský kraj', nearbyCities: ['boskovice', 'letovice', 'blansko'] },
  { name: 'Veselí nad Moravou', slug: 'veselí-nad-moravou', region: 'Jihomoravský kraj', nearbyCities: ['hodonín', 'strážnice', 'kyjov'] },
  { name: 'Vracov', slug: 'vracov', region: 'Jihomoravský kraj', nearbyCities: ['kyjov', 'hodonín', 'veselí-nad-moravou'] },
  { name: 'Valtice', slug: 'valtice', region: 'Jihomoravský kraj', nearbyCities: ['mikulov', 'břeclav', 'hustopeče'] },
  { name: 'Vyškov', slug: 'vyškov', region: 'Jihomoravský kraj', nearbyCities: ['slavkov-u-brna', 'rousínov', 'bučovice'] },
  { name: 'Zbýšov', slug: 'zbýšov', region: 'Jihomoravský kraj', nearbyCities: ['ivančice', 'oslavany', 'rosice'] },
  { name: 'Znojmo', slug: 'znojmo', region: 'Jihomoravský kraj', nearbyCities: ['moravský-krumlov', 'miroslav', 'pohořelice'] },
  { name: 'Židlochovice', slug: 'židlochovice', region: 'Jihomoravský kraj', nearbyCities: ['pohořelice', 'modřice', 'brno'] }
];

export const getCity = (slug: string): City | undefined => {
  return jihomoravskyKrajCities.find(city => city.slug === slug);
};

export const getNearbyCities = (slug: string): City[] => {
  const city = getCity(slug);
  if (!city) return [];
  return city.nearbyCities
    .map(nearbySlug => getCity(nearbySlug))
    .filter((city): city is City => city !== undefined)
    .slice(0, 6);
};
