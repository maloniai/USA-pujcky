export interface CityData {
  name: string
  slug: string
  intro: string
  nearbyCities: string[]
}

export const cities: CityData[] = [
  {
    name: 'Bílovec',
    slug: 'bilovec',
    intro: 'Bílovec nabízí širokou škálu možností půjček pro občany i podnikatele. Náš AI systém analyzuje vaši finanční situaci a najde nejlepší nabídky od licencovaných poskytovatelů. Průměrné úrokové sazby v regionu se pohybují od 5% do 15% p.a., v závislosti na typu půjčky a vaší bonitě.',
    nearbyCities: ['Kopřivnice', 'Studénka', 'Fulnek']
  },
  {
    name: 'Bohumín',
    slug: 'bohumin',
    intro: 'Bohumín jako důležité centrum regionu poskytuje široké spektrum finančních služeb. Naše platforma vám pomůže porovnat nabídky spotřebitelských úvěrů, hypoték a podnikatelských půjček. Všichni poskytovatelé jsou regulováni Českou národní bankou a nabízejí transparentní podmínky.',
    nearbyCities: ['Karviná', 'Havířov', 'Petřvald']
  },
  {
    name: 'Bruntál',
    slug: 'bruntal',
    intro: 'V Bruntále můžete najít výhodné nabídky půjček od bank i nebankovních společností. Náš AI systém vyhodnotí vaši žádost během několika minut a nabídne personalizované možnosti financování. Místní poskytovatelé nabízejí flexibilní podmínky splácení přizpůsobené potřebám obyvatel regionu.',
    nearbyCities: ['Krnov', 'Rýmařov', 'Vítkov']
  },
  {
    name: 'Brušperk',
    slug: 'brusperk',
    intro: 'Brušperk a okolí nabízí konkurenceschopné podmínky pro osobní půjčky a úvěry. Využijte naši AI platformu k rychlému porovnání nabídek a nalezení nejlepších podmínek. Typické částky půjček se pohybují od 10 000 Kč do 500 000 Kč s různými dobami splatnosti.',
    nearbyCities: ['Frýdek-Místek', 'Ostrava', 'Frýdlant nad Ostravicí']
  },
  {
    name: 'Český Těšín',
    slug: 'cesky-tesin',
    intro: 'Český Těšín jako příhraniční město nabízí specifické výhody pro žadatele o půjčky. Naše platforma spojuje nabídky českých i některých zahraničních poskytovatelů, všechny však podléhají české regulaci. AI systém zajišťuje rychlé vyhodnocení a transparentní porovnání podmínek.',
    nearbyCities: ['Třinec', 'Karviná', 'Jablunkov']
  },
  {
    name: 'Dolní Benešov',
    slug: 'dolni-benesov',
    intro: 'Dolní Benešov a okolí nabízí přístup k moderním půjčkovým produktům prostřednictvím naší AI platformy. Zaměřujeme se na transparentnost a pomáháme klientům najít nejlepší poměr úrokové sazby a výše půjčky. Všichni poskytovatelé jsou licencováni a nabízejí zákonné záruky.',
    nearbyCities: ['Opava', 'Hlučín', 'Kravaře']
  },
  {
    name: 'Frýdek-Místek',
    slug: 'frydek-mistek',
    intro: 'Frýdek-Místek jako významné město regionu poskytuje širokou nabídku finančních služeb. Náš AI systém vám pomůže navigovat v rozsáhlé nabídce půjček, od krátkodobých spotřebitelských úvěrů až po dlouhodobé hypotéky. Místní trh nabízí konkurenceschopné podmínky s průměrnými sazbami mezi 6-14% p.a.',
    nearbyCities: ['Brušperk', 'Ostrava', 'Frýdlant nad Ostravicí']
  },
  {
    name: 'Frýdlant nad Ostravicí',
    slug: 'frydlant-nad-ostravici',
    intro: 'Frýdlant nad Ostravicí nabízí přístup k moderním půjčkovým službám prostřednictvím naší digitální platformy. AI technologie zajišťuje rychlé vyhodnocení vaší žádosti a personalizované nabídky. Typické produkty zahrnují konsolidační úvěry, auto půjčky a refinancování s flexibilními podmínkami.',
    nearbyCities: ['Frýdek-Místek', 'Ostrava', 'Brušperk']
  },
  {
    name: 'Fulnek',
    slug: 'fulnek',
    intro: 'Fulnek poskytuje obyvatelům přístup k širokému spektru půjčkových produktů. Naše platforma využívá AI k nalezení nejvhodnějších nabídek na základě vašich potřeb a finanční situace. Všechny nabídky pocházejí od regulovaných poskytovatelů s transparentními podmínkami.',
    nearbyCities: ['Bílovec', 'Nový Jičín', 'Studénka']
  },
  {
    name: 'Havířov',
    slug: 'havirov',
    intro: 'Havířov jako třetí největší město Moravskoslezského kraje nabízí bohatou nabídku finančních služeb. Náš AI systém porovnává nabídky od předních bank i nebankovních společností a najde pro vás optimální řešení. Místní trh je konkurenceschopný s úrokovými sazbami často nižšími než republikový průměr.',
    nearbyCities: ['Karviná', 'Orlová', 'Petřvald']
  },
  {
    name: 'Hlučín',
    slug: 'hlucin',
    intro: 'Hlučín nabízí moderní přístup k půjčkovým službám prostřednictvím naší AI platformy. Zaměřujeme se na rychlé schvalování a transparentní podmínky. Typické produkty zahrnují osobní půjčky od 5 000 do 300 000 Kč s flexibilními možnostmi splácení.',
    nearbyCities: ['Opava', 'Dolní Benešov', 'Kravaře']
  },
  {
    name: 'Hradec nad Moravicí',
    slug: 'hradec-nad-moravici',
    intro: 'Hradec nad Moravicí a okolí má přístup k široké nabídce půjčkových produktů. Náš AI systém analyzuje stovky nabídek a vybere ty nejvhodnější pro vaši situaci. Všichni poskytovatelé jsou licencováni ČNB a nabízejí zákonné ochranné mechanismy pro spotřebitele.',
    nearbyCities: ['Opava', 'Krnov', 'Vítkov']
  },
  {
    name: 'Jablunkov',
    slug: 'jablunkov',
    intro: 'Jablunkov nabízí specifické výhody pro žadatele o půjčky díky své poloze a místním podmínkám. Naše AI platforma zajišťuje rychlé vyhodnocení žádostí a přístup k nabídkám od renomovaných poskytovatelů. Průměrné úrokové sazby jsou konkurenceschopné s regionálními standardy.',
    nearbyCities: ['Třinec', 'Český Těšín', 'Frýdek-Místek']
  },
  {
    name: 'Karviná',
    slug: 'karvina',
    intro: 'Karviná jako významné centrum regionu poskytuje širokou nabídku finančních služeb včetně spotřebitelských úvěrů, refinancování a konsolidačních půjček. Náš AI systém vám pomůže najít nejlepší podmínky přizpůsobené vaším potřebám. Místní poskytovatelé nabízejí konkurenceschopné sazby a flexibilní podmínky.',
    nearbyCities: ['Havířov', 'Bohumín', 'Orlová']
  },
  {
    name: 'Klimkovice',
    slug: 'klimkovice',
    intro: 'Klimkovice nabízejí přístup k moderním půjčkovým službám prostřednictvím naší digitální platformy. AI technologie zajišťuje personalizované nabídky a rychlé schvalování. Typické produkty zahrnují hotovostní půjčky, auto úvěry a refinancování s transparentními podmínkami.',
    nearbyCities: ['Ostrava', 'Bílovec', 'Studénka']
  },
  {
    name: 'Kopřivnice',
    slug: 'koprivnice',
    intro: 'Kopřivnice poskytuje obyvatelům přístup k širokému spektru půjčkových produktů od předních poskytovatelů. Náš AI systém analyzuje vaši finanční situaci a doporučuje nejvhodnější nabídky. Místní trh nabízí konkurenceschopné podmínky s průměrnými sazbami od 6% do 15% p.a.',
    nearbyCities: ['Nový Jičín', 'Bílovec', 'Příbor']
  },
  {
    name: 'Kravaře',
    slug: 'kravare',
    intro: 'Kravaře a okolí nabízejí výhodné podmínky pro osobní půjčky a úvěry. Naše AI platforma porovnává stovky nabídek a vybírá ty nejlepší pro vaši situaci. Všichni poskytovatelé jsou regulováni ČNB a nabízejí transparentní smluvní podmínky v českém jazyce.',
    nearbyCities: ['Opava', 'Hlučín', 'Dolní Benešov']
  },
  {
    name: 'Krnov',
    slug: 'krnov',
    intro: 'Krnov jako regionální centrum nabízí širokou škálu finančních služeb včetně osobních půjček, konsolidací a podnikatelských úvěrů. Náš AI systém zajišťuje rychlé vyhodnocení žádostí a přístup k nejlepším nabídkám. Místní poskytovatelé nabízejí flexibilní podmínky přizpůsobené potřebám regionu.',
    nearbyCities: ['Bruntál', 'Opava', 'Vítkov']
  },
  {
    name: 'Nový Jičín',
    slug: 'novy-jicin',
    intro: 'Nový Jičín poskytuje přístup k moderním půjčkovým službám prostřednictvím naší AI platformy. Zaměřujeme se na transparentnost a rychlé schvalování. Typické produkty zahrnují spotřebitelské úvěry od 10 000 do 500 000 Kč s různými dobami splatnosti a konkurenceschopnými sazbami.',
    nearbyCities: ['Kopřivnice', 'Fulnek', 'Příbor']
  },
  {
    name: 'Odry',
    slug: 'odry',
    intro: 'Odry nabízejí obyvatelům přístup k široké nabídce půjčkových produktů. Náš AI systém porovnává nabídky od licencovaných poskytovatelů a najde pro vás optimální řešení. Všechny nabídky jsou transparentní s jasně definovanými podmínkami splácení a úrokovými sazbami.',
    nearbyCities: ['Fulnek', 'Bílovec', 'Studénka']
  },
  {
    name: 'Opava',
    slug: 'opava',
    intro: 'Opava jako statutární město a centrum regionu nabízí nejširší nabídku finančních služeb v Moravskoslezském kraji. Náš AI systém zpracovává nabídky od všech významných bank i nebankovních společností. Místní trh je vysoce konkurenceschopný s úrokovými sazbami často pod republikovým průměrem.',
    nearbyCities: ['Hlučín', 'Kravaře', 'Hradec nad Moravicí']
  },
  {
    name: 'Orlová',
    slug: 'orlova',
    intro: 'Orlová nabízí přístup k moderním půjčkovým službám prostřednictvím naší digitální platformy. AI technologie zajišťuje personalizované nabídky na základě vaší finanční situace. Typické produkty zahrnují hotovostní půjčky, refinancování a konsolidace s flexibilními podmínkami.',
    nearbyCities: ['Karviná', 'Havířov', 'Petřvald']
  },
  {
    name: 'Ostrava',
    slug: 'ostrava',
    intro: 'Ostrava jako největší město Moravskoslezského kraje a třetí největší město ČR nabízí nejrozsáhlejší nabídku finančních služeb v regionu. Náš AI systém analyzuje stovky nabídek od předních bank, spořitelen i nebankovních společností. Místní trh je vysoce konkurenceschopný s nejnižšími úrokovými sazbami v regionu, často od 4,9% p.a.',
    nearbyCities: ['Havířov', 'Frýdek-Místek', 'Klimkovice']
  },
  {
    name: 'Petřvald',
    slug: 'petrvald',
    intro: 'Petřvald poskytuje obyvatelům přístup k široké nabídce půjčkových produktů. Náš AI systém zajišťuje rychlé vyhodnocení žádostí a personalizované nabídky. Všichni poskytovatelé jsou regulováni ČNB a nabízejí transparentní podmínky s jasně definovanými splátkami.',
    nearbyCities: ['Havířov', 'Orlová', 'Karviná']
  },
  {
    name: 'Příbor',
    slug: 'pribor',
    intro: 'Příbor nabízí přístup k moderním půjčkovým službám prostřednictvím naší AI platformy. Zaměřujeme se na rychlé schvalování a transparentní podmínky. Typické produkty zahrnují osobní půjčky, auto úvěry a refinancování s konkurenceschopnými úrokovými sazbami.',
    nearbyCities: ['Kopřivnice', 'Nový Jičín', 'Frýdek-Místek']
  },
  {
    name: 'Rýmařov',
    slug: 'rymarov',
    intro: 'Rýmařov a okolí nabízejí výhodné podmínky pro osobní půjčky a úvěry. Náš AI systém porovnává nabídky od licencovaných poskytovatelů a vybírá ty nejvhodnější pro vaši situaci. Místní poskytovatelé nabízejí flexibilní podmínky splácení přizpůsobené potřebám obyvatel regionu.',
    nearbyCities: ['Bruntál', 'Krnov', 'Vítkov']
  },
  {
    name: 'Rychvald',
    slug: 'rychvald',
    intro: 'Rychvald poskytuje přístup k široké nabídce půjčkových produktů prostřednictvím naší digitální platformy. AI technologie zajišťuje rychlé vyhodnocení a personalizované nabídky. Všechny nabídky pocházejí od regulovaných poskytovatelů s transparentními podmínkami.',
    nearbyCities: ['Karviná', 'Orlová', 'Havířov']
  },
  {
    name: 'Studénka',
    slug: 'studenka',
    intro: 'Studénka nabízí obyvatelům přístup k moderním půjčkovým službám. Náš AI systém analyzuje vaši finanční situaci a doporučuje nejvhodnější nabídky od renomovaných poskytovatelů. Typické produkty zahrnují spotřebitelské úvěry s flexibilními podmínkami splácení.',
    nearbyCities: ['Bílovec', 'Fulnek', 'Odry']
  },
  {
    name: 'Šenov',
    slug: 'senov',
    intro: 'Šenov a okolí poskytují přístup k široké nabídce finančních služeb prostřednictvím naší AI platformy. Zaměřujeme se na transparentnost a rychlé schvalování. Všichni poskytovatelé jsou licencováni ČNB a nabízejí konkurenceschopné podmínky.',
    nearbyCities: ['Ostrava', 'Vratimov', 'Klimkovice']
  },
  {
    name: 'Třinec',
    slug: 'trinec',
    intro: 'Třinec jako významné průmyslové centrum nabízí širokou škálu finančních služeb včetně osobních půjček, hypoték a podnikatelských úvěrů. Náš AI systém zajišťuje rychlé vyhodnocení žádostí a přístup k nejlepším nabídkám. Místní trh nabízí konkurenceschopné sazby a flexibilní podmínky.',
    nearbyCities: ['Jablunkov', 'Český Těšín', 'Frýdek-Místek']
  },
  {
    name: 'Vítkov',
    slug: 'vitkov',
    intro: 'Vítkov poskytuje obyvatelům přístup k moderním půjčkovým službám prostřednictvím naší digitální platformy. AI technologie zajišťuje personalizované nabídky a rychlé schvalování. Typické produkty zahrnují hotovostní půjčky a refinancování s transparentními podmínkami.',
    nearbyCities: ['Opava', 'Krnov', 'Bruntál']
  },
  {
    name: 'Vratimov',
    slug: 'vratimov',
    intro: 'Vratimov nabízí přístup k široké nabídce půjčkových produktů. Náš AI systém porovnává nabídky od licencovaných poskytovatelů a najde pro vás optimální řešení. Všechny nabídky jsou transparentní s jasně definovanými podmínkami splácení a konkurenceschopnými úrokovými sazbami.',
    nearbyCities: ['Ostrava', 'Šenov', 'Frýdek-Místek']
  }
]

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find(city => city.slug === slug)
}

export function getCityNames(): string[] {
  return cities.map(city => city.name)
}

export function getCitySlugs(): string[] {
  return cities.map(city => city.slug)
}
