export interface City {
  name: string;
  slug: string;
  district?: string;
}

export const usteckyKrajCities: City[] = [
  { name: 'Benešov nad Ploučnicí', slug: 'benesov-nad-ploucnici' },
  { name: 'Bílina', slug: 'bilina' },
  { name: 'Blšany', slug: 'blsany' },
  { name: 'Bohušovice nad Ohří', slug: 'bohusovice-nad-ohri' },
  { name: 'Budyně nad Ohří', slug: 'budyne-nad-ohri' },
  { name: 'Chabařovice', slug: 'chabarovice' },
  { name: 'Chomutov', slug: 'chomutov' },
  { name: 'Děčín', slug: 'decin' },
  { name: 'Dubí', slug: 'dubi' },
  { name: 'Hrob', slug: 'hrob' },
  { name: 'Chlumec', slug: 'chlumec', district: 'u Chabařovic' },
  { name: 'Horní Jiřetín', slug: 'horni-jiretin' },
  { name: 'Jílové', slug: 'jilove' },
  { name: 'Kadaň', slug: 'kadan' },
  { name: 'Klášterec nad Ohří', slug: 'klasterec-nad-ohri' },
  { name: 'Krupka', slug: 'krupka' },
  { name: 'Libochovice', slug: 'libochovice' },
  { name: 'Litoměřice', slug: 'litomerice' },
  { name: 'Litvínov', slug: 'litvinov' },
  { name: 'Louny', slug: 'louny' },
  { name: 'Lovosice', slug: 'lovosice' },
  { name: 'Meziboří', slug: 'mezibori' },
  { name: 'Most', slug: 'most' },
  { name: 'Osek', slug: 'osek' },
  { name: 'Podbořany', slug: 'podborany' },
  { name: 'Roudnice nad Labem', slug: 'roudnice-nad-labem' },
  { name: 'Rumburk', slug: 'rumburk' },
  { name: 'Šluknov', slug: 'sluknov' },
  { name: 'Štětí', slug: 'steti' },
  { name: 'Teplice', slug: 'teplice' },
  { name: 'Terezín', slug: 'terezin' },
  { name: 'Ústí nad Labem', slug: 'usti-nad-labem' },
  { name: 'Varnsdorf', slug: 'varnsdorf' },
  { name: 'Vejprty', slug: 'vejprty' },
  { name: 'Velký Šenov', slug: 'velky-senov' },
  { name: 'Verneřice', slug: 'vernerice' },
  { name: 'Vroutek', slug: 'vroutek' },
  { name: 'Výsluní', slug: 'vysluni' },
  { name: 'Žatec', slug: 'zatec' }
];

export const regionName = 'Ústecký kraj';
export const regionSlug = 'ustecky-kraj';
