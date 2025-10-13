export interface MexicoRegion {
  name: string;
  slug: string;
  description: string;
  population: string;
  topCities: string[];
}

export const mexicoRegions: MexicoRegion[] = [
  {
    name: 'Ciudad de México',
    slug: 'ciudad-de-mexico',
    description: 'La capital del país con la mayor concentración de instituciones financieras',
    population: '9.2 millones',
    topCities: ['cuauhtemoc', 'miguel-hidalgo', 'benito-juarez', 'coyoacan', 'alvaro-obregon']
  },
  {
    name: 'Estado de México',
    slug: 'estado-de-mexico',
    description: 'Estado más poblado con amplio acceso a servicios financieros',
    population: '16.9 millones',
    topCities: ['ecatepec', 'nezahualcoyotl', 'naucalpan', 'tlalnepantla', 'toluca']
  },
  {
    name: 'Jalisco',
    slug: 'jalisco',
    description: 'Centro tecnológico y financiero del occidente mexicano',
    population: '8.3 millones',
    topCities: ['guadalajara', 'zapopan', 'tlaquepaque', 'tonala', 'puerto-vallarta']
  },
  {
    name: 'Nuevo León',
    slug: 'nuevo-leon',
    description: 'Hub industrial y financiero del norte de México',
    population: '5.8 millones',
    topCities: ['monterrey', 'guadalupe', 'san-nicolas', 'apodaca', 'san-pedro']
  },
  {
    name: 'Puebla',
    slug: 'puebla',
    description: 'Centro industrial con creciente sector financiero',
    population: '6.6 millones',
    topCities: ['puebla', 'tehuacan', 'san-martin-texmelucan', 'atlixco', 'cholula']
  }
];
