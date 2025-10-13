export interface MexicoCity {
  name: string;
  slug: string;
  region: string;
  loanRange: string;
  nearbyCities: string[];
}

export const mexicoCities: MexicoCity[] = [
  // Ciudad de México
  { name: 'Cuauhtémoc', slug: 'cuauhtemoc', region: 'Ciudad de México', loanRange: '$1,000-$300,000 MXN', nearbyCities: ['miguel-hidalgo', 'benito-juarez', 'venustiano-carranza', 'gustavo-a-madero'] },
  { name: 'Miguel Hidalgo', slug: 'miguel-hidalgo', region: 'Ciudad de México', loanRange: '$1,000-$500,000 MXN', nearbyCities: ['cuauhtemoc', 'benito-juarez', 'azcapotzalco', 'alvaro-obregon'] },
  { name: 'Benito Juárez', slug: 'benito-juarez', region: 'Ciudad de México', loanRange: '$1,000-$400,000 MXN', nearbyCities: ['cuauhtemoc', 'miguel-hidalgo', 'coyoacan', 'iztacalco'] },
  { name: 'Coyoacán', slug: 'coyoacan', region: 'Ciudad de México', loanRange: '$1,000-$350,000 MXN', nearbyCities: ['benito-juarez', 'tlalpan', 'xochimilco', 'iztapalapa'] },
  { name: 'Álvaro Obregón', slug: 'alvaro-obregon', region: 'Ciudad de México', loanRange: '$1,000-$300,000 MXN', nearbyCities: ['miguel-hidalgo', 'cuajimalpa', 'magdalena-contreras', 'benito-juarez'] },
  { name: 'Tlalpan', slug: 'tlalpan', region: 'Ciudad de México', loanRange: '$1,000-$250,000 MXN', nearbyCities: ['coyoacan', 'xochimilco', 'magdalena-contreras', 'milpa-alta'] },
  { name: 'Azcapotzalco', slug: 'azcapotzalco', region: 'Ciudad de México', loanRange: '$1,000-$200,000 MXN', nearbyCities: ['miguel-hidalgo', 'gustavo-a-madero', 'cuauhtemoc'] },
  { name: 'Iztapalapa', slug: 'iztapalapa', region: 'Ciudad de México', loanRange: '$1,000-$150,000 MXN', nearbyCities: ['coyoacan', 'xochimilco', 'benito-juarez', 'iztacalco'] },
  { name: 'Gustavo A. Madero', slug: 'gustavo-a-madero', region: 'Ciudad de México', loanRange: '$1,000-$180,000 MXN', nearbyCities: ['azcapotzalco', 'cuauhtemoc', 'venustiano-carranza'] },
  { name: 'Venustiano Carranza', slug: 'venustiano-carranza', region: 'Ciudad de México', loanRange: '$1,000-$170,000 MXN', nearbyCities: ['cuauhtemoc', 'gustavo-a-madero', 'iztacalco'] },
  
  // Estado de México
  { name: 'Ecatepec', slug: 'ecatepec', region: 'Estado de México', loanRange: '$1,000-$200,000 MXN', nearbyCities: ['nezahualcoyotl', 'tlalnepantla', 'coacalco', 'tecamac'] },
  { name: 'Nezahualcóyotl', slug: 'nezahualcoyotl', region: 'Estado de México', loanRange: '$1,000-$180,000 MXN', nearbyCities: ['ecatepec', 'los-reyes-la-paz', 'chimalhuacan'] },
  { name: 'Naucalpan', slug: 'naucalpan', region: 'Estado de México', loanRange: '$1,000-$350,000 MXN', nearbyCities: ['tlalnepantla', 'atizapan', 'huixquilucan'] },
  { name: 'Tlalnepantla', slug: 'tlalnepantla', region: 'Estado de México', loanRange: '$1,000-$300,000 MXN', nearbyCities: ['naucalpan', 'ecatepec', 'atizapan', 'cuautitlan'] },
  { name: 'Toluca', slug: 'toluca', region: 'Estado de México', loanRange: '$1,000-$400,000 MXN', nearbyCities: ['metepec', 'lerma', 'san-mateo-atenco', 'zinacantepec'] },
  { name: 'Atizapán de Zaragoza', slug: 'atizapan', region: 'Estado de México', loanRange: '$1,000-$250,000 MXN', nearbyCities: ['naucalpan', 'tlalnepantla', 'nicolas-romero'] },
  { name: 'Cuautitlán Izcalli', slug: 'cuautitlan-izcalli', region: 'Estado de México', loanRange: '$1,000-$220,000 MXN', nearbyCities: ['tlalnepantla', 'cuautitlan', 'tultitlan'] },
  { name: 'Chimalhuacán', slug: 'chimalhuacan', region: 'Estado de México', loanRange: '$1,000-$150,000 MXN', nearbyCities: ['nezahualcoyotl', 'los-reyes-la-paz', 'chicoloapan'] },
  { name: 'Huixquilucan', slug: 'huixquilucan', region: 'Estado de México', loanRange: '$1,000-$500,000 MXN', nearbyCities: ['naucalpan', 'cuajimalpa'] },
  { name: 'Tecámac', slug: 'tecamac', region: 'Estado de México', loanRange: '$1,000-$180,000 MXN', nearbyCities: ['ecatepec', 'zumpango', 'coacalco'] },
  
  // Jalisco
  { name: 'Guadalajara', slug: 'guadalajara', region: 'Jalisco', loanRange: '$1,000-$500,000 MXN', nearbyCities: ['zapopan', 'tlaquepaque', 'tonala', 'tlajomulco'] },
  { name: 'Zapopan', slug: 'zapopan', region: 'Jalisco', loanRange: '$1,000-$450,000 MXN', nearbyCities: ['guadalajara', 'tlaquepaque', 'tonala'] },
  { name: 'Tlaquepaque', slug: 'tlaquepaque', region: 'Jalisco', loanRange: '$1,000-$300,000 MXN', nearbyCities: ['guadalajara', 'zapopan', 'tonala', 'tlajomulco'] },
  { name: 'Tonalá', slug: 'tonala', region: 'Jalisco', loanRange: '$1,000-$250,000 MXN', nearbyCities: ['tlaquepaque', 'guadalajara', 'zapopan', 'el-salto'] },
  { name: 'Puerto Vallarta', slug: 'puerto-vallarta', region: 'Jalisco', loanRange: '$1,000-$350,000 MXN', nearbyCities: ['bahia-de-banderas', 'cabo-corrientes'] },
  { name: 'Tlajomulco de Zúñiga', slug: 'tlajomulco', region: 'Jalisco', loanRange: '$1,000-$280,000 MXN', nearbyCities: ['guadalajara', 'tlaquepaque', 'el-salto'] },
  { name: 'El Salto', slug: 'el-salto', region: 'Jalisco', loanRange: '$1,000-$200,000 MXN', nearbyCities: ['tlaquepaque', 'tonala', 'tlajomulco', 'juanacatlan'] },
  { name: 'Tepatitlán', slug: 'tepatitlan', region: 'Jalisco', loanRange: '$1,000-$220,000 MXN', nearbyCities: ['arandas', 'yahualica', 'acatic'] },
  { name: 'Lagos de Moreno', slug: 'lagos-de-moreno', region: 'Jalisco', loanRange: '$1,000-$200,000 MXN', nearbyCities: ['san-juan-de-los-lagos', 'union-de-san-antonio'] },
  { name: 'Chapala', slug: 'chapala', region: 'Jalisco', loanRange: '$1,000-$250,000 MXN', nearbyCities: ['ajijic', 'jocotepec', 'ixtlahuacan'] },
  
  // Nuevo León
  { name: 'Monterrey', slug: 'monterrey', region: 'Nuevo León', loanRange: '$1,000-$500,000 MXN', nearbyCities: ['guadalupe', 'san-nicolas', 'san-pedro', 'apodaca'] },
  { name: 'Guadalupe', slug: 'guadalupe', region: 'Nuevo León', loanRange: '$1,000-$350,000 MXN', nearbyCities: ['monterrey', 'san-nicolas', 'juarez', 'apodaca'] },
  { name: 'San Nicolás de los Garza', slug: 'san-nicolas', region: 'Nuevo León', loanRange: '$1,000-$400,000 MXN', nearbyCities: ['monterrey', 'guadalupe', 'general-escobedo'] },
  { name: 'Apodaca', slug: 'apodaca', region: 'Nuevo León', loanRange: '$1,000-$300,000 MXN', nearbyCities: ['monterrey', 'guadalupe', 'general-escobedo', 'pesqueria'] },
  { name: 'San Pedro Garza García', slug: 'san-pedro', region: 'Nuevo León', loanRange: '$1,000-$500,000 MXN', nearbyCities: ['monterrey', 'santa-catarina', 'garcia'] },
  { name: 'General Escobedo', slug: 'general-escobedo', region: 'Nuevo León', loanRange: '$1,000-$250,000 MXN', nearbyCities: ['san-nicolas', 'apodaca', 'garcia'] },
  { name: 'Santa Catarina', slug: 'santa-catarina', region: 'Nuevo León', loanRange: '$1,000-$280,000 MXN', nearbyCities: ['monterrey', 'san-pedro', 'garcia'] },
  { name: 'Juárez', slug: 'juarez', region: 'Nuevo León', loanRange: '$1,000-$220,000 MXN', nearbyCities: ['guadalupe', 'monterrey', 'cadereyta'] },
  { name: 'García', slug: 'garcia', region: 'Nuevo León', loanRange: '$1,000-$250,000 MXN', nearbyCities: ['santa-catarina', 'san-pedro', 'general-escobedo'] },
  { name: 'Cadereyta Jiménez', slug: 'cadereyta', region: 'Nuevo León', loanRange: '$1,000-$200,000 MXN', nearbyCities: ['juarez', 'guadalupe', 'santiago'] },
  
  // Puebla
  { name: 'Puebla', slug: 'puebla', region: 'Puebla', loanRange: '$1,000-$450,000 MXN', nearbyCities: ['cholula', 'san-pedro-cholula', 'cuautlancingo', 'amozoc'] },
  { name: 'Tehuacán', slug: 'tehuacan', region: 'Puebla', loanRange: '$1,000-$250,000 MXN', nearbyCities: ['san-gabriel-chilac', 'ajalpan', 'altepexi'] },
  { name: 'San Martín Texmelucan', slug: 'san-martin-texmelucan', region: 'Puebla', loanRange: '$1,000-$200,000 MXN', nearbyCities: ['huejotzingo', 'san-salvador-el-verde'] },
  { name: 'Atlixco', slug: 'atlixco', region: 'Puebla', loanRange: '$1,000-$220,000 MXN', nearbyCities: ['izucar-de-matamoros', 'tochimilco'] },
  { name: 'San Pedro Cholula', slug: 'cholula', region: 'Puebla', loanRange: '$1,000-$300,000 MXN', nearbyCities: ['puebla', 'cuautlancingo', 'ocoyucan'] },
  { name: 'Cuautlancingo', slug: 'cuautlancingo', region: 'Puebla', loanRange: '$1,000-$250,000 MXN', nearbyCities: ['puebla', 'cholula', 'coronango'] },
  { name: 'Amozoc', slug: 'amozoc', region: 'Puebla', loanRange: '$1,000-$180,000 MXN', nearbyCities: ['puebla', 'cuautlancingo', 'tepeaca'] },
  { name: 'Izúcar de Matamoros', slug: 'izucar-de-matamoros', region: 'Puebla', loanRange: '$1,000-$180,000 MXN', nearbyCities: ['atlixco', 'chietla'] },
  { name: 'Huejotzingo', slug: 'huejotzingo', region: 'Puebla', loanRange: '$1,000-$170,000 MXN', nearbyCities: ['san-martin-texmelucan', 'san-miguel-xoxtla'] },
  { name: 'Tepeaca', slug: 'tepeaca', region: 'Puebla', loanRange: '$1,000-$150,000 MXN', nearbyCities: ['amozoc', 'tecamachalco', 'acajete'] },
];
