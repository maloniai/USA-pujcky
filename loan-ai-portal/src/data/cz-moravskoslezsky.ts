import { slugify } from '@/lib/slugify'

export interface MoravianSilesianRegionContent {
  name: string
  slug: string
  heroTitle: string
  heroSubtitle: string
  overview: string
  regulationSummary: string[]
  regulatorLinks: { label: string; href: string; description: string }[]
  featuredLenders: { name: string; licenseId: string; description: string; website: string }[]
  topCities: { name: string; slug: string; focus: string }[]
  blogTeasers: { title: string; excerpt: string; href: string }[]
}

export interface MoravianSilesianCityContent {
  slug: string
  name: string
  regionName: string
  countryName: string
  metaTitleTemplate: string
  metaDescriptionTemplate: string
  intro: string
  offer: {
    affiliate: number
    campaign: string
    partnerName: string
    product?: string
    theme?: string
  }
  regulations: string[]
  faq: { question: string; answer: string }[]
  nearby: string[]
  disclosure: {
    affiliate: string
    example: string
  }
  shortTitle: string
  offerHighlights: string[]
  focusSectors: string[]
  loanUseCases: string[]
  borrowerProfile: string
  amountRange: string
  highlight: string
  infrastructure: string
}

interface CitySeed {
  name: string
  shortTitle?: string
  focusSectors: string[]
  loanUseCases: string[]
  borrowerProfile: string
  amountRange: string
  highlight: string
  infrastructure: string
}

// Regional overview content
export const moravskoslezskyRegionContent: MoravianSilesianRegionContent = {
  name: 'Moravskoslezský kraj',
  slug: 'moravskoslezsky',
  heroTitle: 'Půjčky Moravskoslezský kraj – AI doporučení a transparentní srovnání',
  heroSubtitle:
    'Porovnejte osobní půjčky, konsolidace a hypotéky v Ostravě, Opavě, Karviné a dalších městech Moravskoslezského kraje. AI model analyzuje RPSN, rychlost výplaty a skryté poplatky u licencovaných poskytovatelů.',
  overview:
    'Moravskoslezský kraj je třetím největším ekonomickým regionem České republiky s Ostravou jako průmyslovým centrem. Region se vyznačuje diverzifikovanou ekonomikou od těžkého průmyslu, přes automobilový sektor, až po moderní IT a služby. Poptávka po úvěrech zahrnuje financování průmyslových projektů, nemovitostí v Ostravě, rekvalifikací zaměstnanců a podnikatelských aktivit. AI portál srovnává nabídky bank, spořitelen i nebankovních poskytovatelů s důrazem na transparentnost, soulad se zákonem č. 257/2016 Sb. a odpovědné úvěrování pod dohledem České národní banky.',
  regulationSummary: [
    'Dohled ČNB: Všichni poskytovatelé musí mít platnou licenci ČNB a dodržovat Zákon č. 257/2016 Sb. o spotřebitelském úvěru',
    'RPSN transparentnost: RPSN musí zahrnovat úrok, poplatky za zpracování, správu a předčasné splatnosti nebo penále',
    'Právo na odstoupení: Dlužník má právo odstoupit od smlouvy do 14 dnů bez udání důvodu a bez sankce',
    'Posouzení bonity: Poskytovatel je povinen ověřit schopnost splácet podle příjmů, závazků a registru NRKI či Solus',
    'Limity sankcí: Penalizace za prodlení nesmí přesáhnout zákonem stanovené stropy a musí být smluvně specifikovány',
    'Mimosoudní řešení: Spory lze řešit před Finančním arbitrem ČR, který poskytuje nezávislé a bezplatné řešení sporů',
    'Regionální specifika: Ostrava jako průmyslové centrum nabízí širokou škálu produktů od tradičních bank až po specializované průmyslové úvěry',
    'Strukturální změny: Region prochází transformací od těžkého průmyslu k službám, což vytváří poptávku po rekvalifikačních a podnikatelských úvěrech',
  ],
  regulatorLinks: [
    {
      label: 'Česká národní banka (ČNB)',
      href: 'https://www.cnb.cz',
      description:
        'Vyhledejte registr poskytovatelů úvěrů, ověřte si licenci a zkontrolujte, zda společnost smí působit v Moravskoslezském kraji. ČNB také poskytuje edukační materiály o odpovědném úvěrování.',
    },
    {
      label: 'Finanční arbitr ČR',
      href: 'https://www.finarbitr.cz',
      description:
        'Nezávislé mimosoudní řešení sporů mezi spotřebiteli a finančními institucemi. Služby jsou zdarma a rozhodnutí je pro poskytovatele závazné.',
    },
    {
      label: 'dTest – spotřebitelská ochrana',
      href: 'https://www.dtest.cz',
      description:
        'Nezávislé testy finančních produktů, návody na reklamace a rady jak se bránit nekalým praktikám poskytovatelů.',
    },
    {
      label: 'Poradna při finanční tísni Ostrava',
      href: 'https://www.pft.cz',
      description:
        'Bezplatné dluhové poradenství pro obyvatele Ostravy a okolí. Pomoc s oddlužením, insolvencí a jednáním s věřiteli.',
    },
  ],
  featuredLenders: [
    {
      name: 'Česká spořitelna',
      licenseId: 'ČNB Licence #01 (Banka)',
      description:
        'Největší banka v ČR s rozsáhlou pobočkovou sítí v Moravskoslezském kraji. Nabízí osobní půjčky, konsolidace, hypotéky i spotřebitelské úvěry s konkurenceschopným RPSN.',
      website: 'https://www.csas.cz',
    },
    {
      name: 'MONETA Money Bank',
      licenseId: 'ČNB Licence #07 (Banka)',
      description:
        'Moderní banka s rychlým online schvalováním úvěrů. Specializuje se na osobní půjčky a refinancování drahých závazků. Pobočky v Ostravě a dalších městech.',
      website: 'https://www.moneta.cz',
    },
    {
      name: 'Home Credit',
      licenseId: 'ČNB Licence #56 (Nebankovní poskytovatel)',
      description:
        'Nebankovní poskytovatel s širokou nabídkou spotřebitelských úvěrů a osobních půjček. Flexibilní podmínky, rychlé schválení, online i v pobočkách.',
      website: 'https://www.homecredit.cz',
    },
    {
      name: 'Provident Financial',
      licenseId: 'ČNB Licence #45 (Nebankovní poskytovatel)',
      description:
        'Zaměřuje se na klienty s nestandardní finanční historií. Osobní přístup, možnost schůzky v terénu, flexibilní podmínky pro obtížně schválitelné případy.',
      website: 'https://www.provident.cz',
    },
  ],
  topCities: [
    { name: 'Ostrava', slug: 'ostrava', focus: 'Průmysl, IT, služby, univerzity' },
    { name: 'Opava', slug: 'opava', focus: 'Administrativní centrum, obchod, služby' },
    { name: 'Karviná', slug: 'karvina', focus: 'Hornictví, průmysl, rekvalifikace' },
    { name: 'Havířov', slug: 'havirov', focus: 'Satelitní město Ostravy, bydlení' },
    { name: 'Frýdek-Místek', slug: 'frydek-mistek', focus: 'Průmysl, obchod, turistika' },
    { name: 'Třinec', slug: 'trinec', focus: 'Hutnictví, strojírenství' },
  ],
  blogTeasers: [
    {
      title: 'Jak funguje AI skórování úvěrů v Ostravě',
      excerpt:
        'Zjistěte, jak náš AI model analyzuje nabídky bank a nebankovních poskytovatelů v Moravskoslezském kraji a řadí je podle RPSN, dostupnosti a bonity.',
      href: '/learn/ai-scoring-ostrava',
    },
    {
      title: 'Konsolidace půjček v Moravskoslezském kraji 2025',
      excerpt:
        'Průvodce refinancováním drahých úvěrů a kreditních kart. Jak snížit měsíční splátky a ušetřit na úrocích v průmyslovém regionu.',
      href: '/learn/consolidation-moravian-silesian',
    },
    {
      title: 'Odpovědné úvěrování: práva dlužníků podle zákona',
      excerpt:
        'Praktický přehled práv spotřebitelů při sjednávání úvěrů, včetně práva na odstoupení, transparentní RPSN a mimosoudní řešení sporů.',
      href: '/learn/borrower-rights-czech',
    },
  ],
}

// City seeds with realistic data for major Moravskoslezský cities
const citiesSeeds: CitySeed[] = [
  {
    name: 'Ostrava',
    shortTitle: 'průmyslová metropole Moravy',
    focusSectors: ['Těžký průmysl a hutnictví', 'IT a software vývoj', 'Univerzity a výzkum', 'Služby a administrativa'],
    loanUseCases: [
      'Hypotéky na byty v modernizovaných čtvrtích',
      'Financování rekvalifikací a vzdělávání',
      'Konsolidace spotřebních úvěrů a kreditních kart',
      'Investice do startupů a inovačních projektů',
    ],
    borrowerProfile:
      'Průmyslový zaměstnanec nebo IT specialista, 28–48 let, měsíční příjem 32–55 tis. Kč. Preferuje online kanály, ale oceňuje osobní pobočky.',
    amountRange: '30 000 – 700 000 Kč',
    highlight:
      'Ostrava je třetím největším městem ČR s diverzifikovanou ekonomikou. Region prochází transformací od těžkého průmyslu k moderním službám a IT.',
    infrastructure:
      'Excelentní dostupnost finančních služeb – všechny velké banky, nebankovní poskytovatelé, finanční poradci a digitální platformy.',
  },
  {
    name: 'Opava',
    shortTitle: 'historické krajské město',
    focusSectors: ['Státní administrativa', 'Obchod a služby', 'Lehký průmysl', 'Školství'],
    loanUseCases: [
      'Osobní půjčky na bydlení a rekonstrukce',
      'Konsolidace drahých úvěrů',
      'Financování automobilů',
      'Provozní kapitál pro OSVČ a malé firmy',
    ],
    borrowerProfile:
      'Státní zaměstnanec nebo obchodník, 30–50 let, stabilní příjem 28–42 tis. Kč. Preferuje tradiční bankovní pobočky a osobní přístup.',
    amountRange: '20 000 – 350 000 Kč',
    highlight:
      'Opava je krajským městem s bohatou historií a stabilním trhem práce ve veřejné správě. Rostoucí poptávka po osobních půjčkách a hypotékách.',
    infrastructure:
      'Dobře rozvinutá bankovní síť všech velkých bank, nebankovní poskytovatelé, dostupné dluhové poradenství.',
  },
  {
    name: 'Karviná',
    shortTitle: 'hornické město',
    focusSectors: ['Hornictví (útlum)', 'Průmysl', 'Služby', 'Rekvalifikace'],
    loanUseCases: [
      'Financování rekvalifikačních kurzů',
      'Konsolidace drahých úvěrů',
      'Osobní půjčky na překlenutí',
      'Investice do nových podnikatelských projektů',
    ],
    borrowerProfile:
      'Bývalý horník nebo průmyslový dělník, 35–55 let, příjem 22–35 tis. Kč. Časté potřeby překlenutí při změně profese.',
    amountRange: '15 000 – 200 000 Kč',
    highlight:
      'Karviná prochází strukturální transformací po útlumu hornictví. Vysoká poptávka po úvěrech na rekvalifikace a nové začátky.',
    infrastructure:
      'Standardní bankovní služby, nebankovní poskytovatelé zaměření na flexibilní podmínky, regionální programy podpory.',
  },
  {
    name: 'Havířov',
    shortTitle: 'satelitní město Ostravy',
    focusSectors: ['Bydlení (satelit Ostravy)', 'Služby', 'Obchod', 'Drobné podnikání'],
    loanUseCases: [
      'Hypotéky na byty a rodinné domy',
      'Osobní půjčky na rekonstrukce',
      'Konsolidace úvěrů',
      'Financování automobilů (dojíždění do Ostravy)',
    ],
    borrowerProfile:
      'Zaměstnanec dojíždějící do Ostravy, 25–45 let, příjem 28–45 tis. Kč. Preferuje online kanály a rychlé schválení.',
    amountRange: '25 000 – 500 000 Kč',
    highlight:
      'Havířov je mladé město postavené jako satelit Ostravy. Dynamický trh s bydlením a vysoká poptávka po hypotékách.',
    infrastructure:
      'Dobře rozvinutá bankovní síť, rostoucí nabídka online úvěrů, dobré spojení s Ostravou pro finanční služby.',
  },
  {
    name: 'Frýdek-Místek',
    shortTitle: 'průmyslové a turistické centrum',
    focusSectors: ['Průmyslová výroba', 'Obchod', 'Turistika (Beskydy)', 'Služby'],
    loanUseCases: [
      'Financování pracovních strojů a nářadí',
      'Investice do turistických projektů',
      'Osobní půjčky na bydlení',
      'Konsolidace spotřebních úvěrů',
    ],
    borrowerProfile:
      'Průmyslový dělník nebo podnikatel v turistice, 28–50 let, příjem 26–40 tis. Kč. Mix tradičních a online kanálů.',
    amountRange: '20 000 – 300 000 Kč',
    highlight:
      'Frýdek-Místek kombinuje průmysl s turistickým potenciálem Beskyd. Diverzifikovaná poptávka po osobních i investičních úvěrech.',
    infrastructure:
      'Standardní bankovní služby všech velkých bank, nebankovní poskytovatelé, rostoucí nabídka online produktů.',
  },
  {
    name: 'Třinec',
    shortTitle: 'hutní město',
    focusSectors: ['Hutnictví a těžký průmysl', 'Strojírenství', 'Služby', 'Obchod'],
    loanUseCases: [
      'Financování automobilů a strojů',
      'Osobní půjčky na bydlení',
      'Konsolidace úvěrů',
      'Provozní kapitál pro drobné podnikatele',
    ],
    borrowerProfile:
      'Hutník nebo průmyslový dělník, 30–52 let, příjem 30–48 tis. Kč (s příplatky). Preferuje stabilní produkty s fixními sazbami.',
    amountRange: '25 000 – 350 000 Kč',
    highlight:
      'Třinec je hutním městem s tradicí těžkého průmyslu. Stabilní trh práce s nadprůměrnými platy v průmyslu.',
    infrastructure:
      'Dobře rozvinutá bankovní síť, nebankovní poskytovatelé, specializované programy pro průmyslové zaměstnance.',
  },
]

// Generate full city content from seeds
export const moravskoslezskyCities: MoravianSilesianCityContent[] = citiesSeeds.map((seed) => ({
  slug: slugify(seed.name),
  name: seed.name,
  regionName: 'Moravskoslezský kraj',
  countryName: 'Česká republika',
  metaTitleTemplate: `Půjčky ${seed.name}, Moravskoslezský kraj – Srovnání {year}`,
  metaDescriptionTemplate: `Porovnejte osobní půjčky v ${seed.name} rychle a transparentně. Licencovaní poskytovatelé, RPSN, měsíční splátky a AI doporučení pro ${seed.shortTitle || seed.name}.`,
  intro: `${seed.name} ${seed.shortTitle ? `– ${seed.shortTitle} –` : ''} nabízí širokou škálu možností financování od osobních půjček, přes konsolidace, až po hypotéky. ${seed.highlight}`,
  offer: {
    affiliate: 9260,
    campaign: `moravskoslezsky-${slugify(seed.name)}`,
    partnerName: `Volsor ${seed.name}`,
    product: 'personal',
    theme: 'old_styled',
  },
  regulations: [
    'Všichni poskytovatelé musí mít platnou licenci ČNB ověřitelnou na www.cnb.cz/dohled-financni-trh',
    'RPSN (Roční Procentní Sazba Nákladů) musí zahrnovat úrok, poplatky za zpracování, správu a případné penále',
    'Právo na odstoupení od smlouvy do 14 dnů bez udání důvodu a bez sankce dle § 9 zákona č. 257/2016 Sb.',
    'Poskytovatel je povinen posoudit schopnost splácet na základě příjmů, výdajů a kontroly v registru dlužníků',
    'Maximální výše penále za prodlení je omezena zákonem a musí být transparentně uvedena ve smlouvě',
    'Spory lze řešit mimosoudně před Finančním arbitrem ČR (www.finarbitr.cz) bez poplatku',
    `Moravskoslezský kraj prochází strukturální transformací, což vytváří specifickou poptávku po rekvalifikačních a podnikatelských úvěrech`,
    `${seed.name} je pokryto sítí licencovaných poskytovatelů s fyzickými pobočkami i online kanály`,
  ],
  faq: [
    {
      question: `Jsou půjčky v ${seed.name} legální a kdo je dohlíží?`,
      answer: `Ano, všechny nabídky musí být licencované Českou národní bankou (ČNB). Poskytovatelé v ${seed.name} podléhají dohledu ČNB a musí respektovat zákon č. 257/2016 Sb. o spotřebitelském úvěru. Licenci lze ověřit v registru na www.cnb.cz.`,
    },
    {
      question: `Jak zjistím, jestli je poskytovatel v ${seed.name} licencovaný?`,
      answer: `Ověřte v registru poskytovatelů na webu ČNB (www.cnb.cz/dohled-financni-trh). Každý legální poskytovatel má tam uvedené své IČO, rozsah oprávnění a datum licence. Nedůvěřujte nabídkám bez licence.`,
    },
    {
      question: `Jaké jsou průměrné úroky a poplatky v Moravskoslezském kraji?`,
      answer: `Průměrné RPSN se pohybuje mezi 16 % až 39 % ročně v závislosti na typu úvěru, výši, době splatnosti a bonitě žadatele. Banky nabízí obvykle nižší sazby (13–22 %), nebankovní poskytovatelé mohou mít RPSN vyšší (25–39 %). Vždy porovnejte celkové náklady, ne jen úrokovou sazbu.`,
    },
    {
      question: `Mohu získat půjčku v ${seed.name}, i když mám záznam v registru?`,
      answer: `Záleží na závažnosti záznamu. Některé nebankovní společnosti poskytují úvěry i lidem s historií v registru NRKI nebo Solus, obvykle za vyšší RPSN. Banky jsou přísnější. Doporučujeme nejdřív vyřešit stávající závazky a zlepšit bonitu.`,
    },
    {
      question: `Co potřebuji k žádosti o půjčku v ${seed.name}?`,
      answer: `Obvykle platný občanský průkaz, doklad o příjmech (výplatní pásky, potvrzení o důchodu, daňové přiznání pro OSVČ), výpis z účtu a kontaktní údaje. Konkrétní požadavky se liší podle poskytovatele a výše úvěru.`,
    },
  ],
  nearby: citiesSeeds
    .filter((c) => c.name !== seed.name)
    .slice(0, 6)
    .map((c) => c.name),
  disclosure: {
    affiliate: `Loan-Platform.com není poskytovatelem úvěrů. Jsme srovnávací portál, který může obdržet provizi od partnerských společností za úspěšné zprostředkování. Všechny nabídky pocházejí od poskytovatelů licencovaných Českou národní bankou.`,
    example: `Reprezentativní příklad: Výše úvěru 20 000 Kč, doba splatnosti 12 měsíců, úroková sazba 32 % p.a., RPSN 37 %, měsíční splátka 1 870 Kč, celková zaplacená částka 22 440 Kč (z toho úrok 2 440 Kč). Konkrétní podmínky závisí na bonitě žadatele a nabídce poskytovatele.`,
  },
  shortTitle: seed.shortTitle || seed.name,
  offerHighlights: [
    'AI model analyzuje nabídky v reálném čase',
    `Všichni poskytovatelé licencováni ČNB`,
    'Transparentní RPSN bez skrytých poplatků',
    `Srovnání bank i nebankovních společností v ${seed.name}`,
    'Rychlé online schválení během několika hodin',
    'Možnost konsolidace drahých úvěrů a kreditních karet',
  ],
  focusSectors: seed.focusSectors,
  loanUseCases: seed.loanUseCases,
  borrowerProfile: seed.borrowerProfile,
  amountRange: seed.amountRange,
  highlight: seed.highlight,
  infrastructure: seed.infrastructure,
}))

// Export default city (Ostrava)
export const ostravaContent = moravskoslezskyCities.find((c) => c.slug === 'ostrava')!
