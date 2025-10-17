import { slugify } from '@/lib/slugify'

export interface SouthMoravianRegionContent {
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

export interface SouthMoravianCityContent {
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
export const jihomoravskyRegionContent: SouthMoravianRegionContent = {
  name: 'Jihomoravský kraj',
  slug: 'jihomoravsky',
  heroTitle: 'Půjčky Jihomoravský kraj – AI doporučení a transparentní srovnání',
  heroSubtitle:
    'Porovnejte osobní půjčky, konsolidace a hypotéky v Brně, Znojmě, Hodoníně a dalších městech Jihomoravského kraje. AI model analyzuje RPSN, rychlost výplaty a skryté poplatky u licencovaných poskytovatelů.',
  overview:
    'Jihomoravský kraj je druhým největším ekonomickým centrem České republiky s Brnem jako metropolí. Region se vyznačuje diverzifikovanou ekonomikou od high-tech průmyslu, přes vinařství, až po akademický sektor. Poptávka po úvěrech zahrnuje financování startupů, nemovitostí v Brně, vinařských podniků na jihu a podnikatelských projektů napříč krajem. AI portál srovnává nabídky bank, spořitelen i nebankovních poskytovatelů s důrazem na transparentnost, soulad se zákonem č. 257/2016 Sb. a odpovědné úvěrování pod dohledem České národní banky.',
  regulationSummary: [
    'Dohled ČNB: Všichni poskytovatelé musí mít platnou licenci ČNB a dodržovat Zákon č. 257/2016 Sb. o spotřebitelském úvěru',
    'RPSN transparentnost: RPSN musí zahrnovat úrok, poplatky za zpracování, správu a předčasné splatnosti nebo penále',
    'Právo na odstoupení: Dlužník má právo odstoupit od smlouvy do 14 dnů bez udání důvodu a bez sankce',
    'Posouzení bonity: Poskytovatel je povinen ověřit schopnost splácet podle příjmů, závazků a registru NRKI či Solus',
    'Limity sankcí: Penalizace za prodlení nesmí přesáhnout zákonem stanovené stropy a musí být smluvně specifikovány',
    'Mimosoudní řešení: Spory lze řešit před Finančním arbitrem ČR, který poskytuje nezávislé a bezplatné řešení sporů',
    'Regionální specifika: Brno jako ekonomické centrum nabízí širokou škálu produktů od městských bank až po fintech řešení',
    'Vinařský region: Na jihu kraje fungují specializované programy pro podporu vinařství a zemědělství s dotačními vazbami',
  ],
  regulatorLinks: [
    {
      label: 'Česká národní banka (ČNB)',
      href: 'https://www.cnb.cz',
      description:
        'Vyhledejte registr poskytovatelů úvěrů, ověřte si licenci a zkontrolujte, zda společnost smí působit v Jihomoravském kraji. ČNB také poskytuje edukační materiály o odpovědném úvěrování.',
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
      label: 'Městská poradna Brno',
      href: 'https://www.okbrno.cz',
      description:
        'Bezplatné dluhové poradenství pro obyvatele Brna a okolí. Pomoc s oddlužením, insolvencí a jednáním s věřiteli.',
    },
  ],
  featuredLenders: [
    {
      name: 'Equa bank',
      licenseId: 'ČNB Licence #03 (Banka)',
      description:
        'Moderní banka s pobočkami v Brně nabízí osobní půjčky, konsolidace a online hypotéky s konkurenceschopným RPSN. Schválení během několika hodin, minimální byrokracie.',
      website: 'https://www.equabank.cz',
    },
    {
      name: 'Creditas',
      licenseId: 'ČNB Licence #14 (Banka)',
      description:
        'Specializuje se na refinancování a konsolidace drahých úvěrů. Automatické posouzení bonity online, transparentní kalkulačka bez skrytých poplatků.',
      website: 'https://www.creditas.cz',
    },
    {
      name: 'Cetelem',
      licenseId: 'ČNB Licence #76 (Nebankovní poskytovatel)',
      description:
        'Nebankovní poskytovatel s dlouholetou tradicí v financování spotřebního zboží i volných půjček. Flexibilní splátky a možnost odkladu.',
      website: 'https://www.cetelem.cz',
    },
    {
      name: 'Provident Financial',
      licenseId: 'ČNB Licence #45 (Nebankovní poskytovatel)',
      description:
        'Zaměřuje se na klienty s nestandardní finanční historií. Osobní přístup, možnost schůzky v terénu, flexibilní podmínky.',
      website: 'https://www.provident.cz',
    },
  ],
  topCities: [
    { name: 'Brno', slug: 'brno', focus: 'Ekonomické centrum, IT, univerzity, nemovitosti' },
    { name: 'Znojmo', slug: 'znojmo', focus: 'Vinařství, turistika, zemědělství' },
    { name: 'Hodonín', slug: 'hodonin', focus: 'Průmysl, zemědělství, obchod' },
    { name: 'Břeclav', slug: 'breclav', focus: 'Logistika, vinařství, příhraniční obchod' },
    { name: 'Vyškov', slug: 'vyskov', focus: 'Vojenská základna, průmysl, služby' },
    { name: 'Blansko', slug: 'blansko', focus: 'Těžký průmysl, strojírenství, turistika' },
  ],
  blogTeasers: [
    {
      title: 'Jak funguje AI skórování úvěrů v Brně',
      excerpt:
        'Zjistěte, jak náš AI model analyzuje nabídky bank a nebankovních poskytovatelů v Jihomoravském kraji a řadí je podle RPSN, dostupnosti a bonity.',
      href: '/learn/ai-scoring-brno',
    },
    {
      title: 'Konsolidace půjček v Jihomoravském kraji 2025',
      excerpt:
        'Průvodce refinancováním drahých úvěrů a kreditních kart. Jak snížit měsíční splátky a ušetřit na úrocích.',
      href: '/learn/consolidation-south-moravia',
    },
    {
      title: 'Odpovědné úvěrování: práva dlužníků podle zákona',
      excerpt:
        'Praktický přehled práv spotřebitelů při sjednávání úvěrů, včetně práva na odstoupení, transparentní RPSN a mimosoudní řešení sporů.',
      href: '/learn/borrower-rights-czech',
    },
  ],
}

// City seeds with realistic data for major Jihomoravský cities
const citiesSeeds: CitySeed[] = [
  {
    name: 'Brno',
    shortTitle: 'metropole Moravy',
    focusSectors: ['IT a software vývoj', 'Univerzity a výzkum', 'Strojírenství', 'Služby a administrativa'],
    loanUseCases: [
      'Hypotéky na byty v rostoucích čtvrtích',
      'Financování startupů a inovačních projektů',
      'Konsolidace kreditních kart a spotřebních úvěrů',
      'Rekonstrukce bytů a nemovitostí',
    ],
    borrowerProfile:
      'IT specialista nebo univerzitní pracovník, 28–45 let, měsíční příjem 40–65 tis. Kč. Preferuje online kanály a transparentní podmínky.',
    amountRange: '50 000 – 800 000 Kč',
    highlight:
      'Brno je druhým největším městem ČR s dynamickým trhem práce a nemovitostí. Vysoká poptávka po hypotékách a osobních půjčkách.',
    infrastructure:
      'Excelentní dostupnost finančních služeb – bankovní pobočky, nebankovní poskytovatelé, finanční poradci a digitální platformy.',
  },
  {
    name: 'Znojmo',
    shortTitle: 'centrum vinařství',
    focusSectors: ['Vinařství a vinohradnictví', 'Turistika a gastronomie', 'Zemědělství', 'Obchod'],
    loanUseCases: [
      'Investice do vinohradů a vinařských technologií',
      'Financování turistických projektů',
      'Osobní půjčky na bydlení',
      'Provozní úvěry pro drobné podnikatele',
    ],
    borrowerProfile:
      'Vinař nebo podnikatel v turistice, 35–55 let, sezónní příjem 25–45 tis. Kč. Potřeba flexibilních splátkových kalendářů.',
    amountRange: '30 000 – 300 000 Kč',
    highlight:
      'Znojmo je centrem moravského vinařství s rostoucím turistickým ruchem. Specifická poptávka po investičních úvěrech pro vinařství.',
    infrastructure:
      'Standardní bankovní služby, specializované zemědělské úvěrové programy, rostoucí počet fintechových řešení.',
  },
  {
    name: 'Hodonín',
    shortTitle: 'průmyslové město',
    focusSectors: ['Průmyslová výroba', 'Zemědělství', 'Obchod', 'Služby'],
    loanUseCases: [
      'Financování pracovních strojů a nářadí',
      'Konsolidace drahých úvěrů',
      'Osobní půjčky na bydlení',
      'Provozní kapitál pro OSVČ',
    ],
    borrowerProfile:
      'Průmyslový dělník nebo drobný podnikatel, 30–50 let, měsíční příjem 28–40 tis. Kč. Preferuje tradiční bankovní pobočky.',
    amountRange: '20 000 – 250 000 Kč',
    highlight:
      'Hodonín kombinuje průmysl a zemědělství s rostoucím sektorem služeb. Stabilní poptávka po osobních půjčkách a konsolidacích.',
    infrastructure:
      'Dobře rozvinutá síť bankovních poboček i nebankovních poskytovatelů, dostupné dluhové poradenství.',
  },
  {
    name: 'Břeclav',
    shortTitle: 'příhraniční centrum',
    focusSectors: ['Logistika a doprava', 'Vinařství', 'Příhraniční obchod', 'Služby'],
    loanUseCases: [
      'Financování dopravních prostředků',
      'Investice do logistických kapacit',
      'Osobní půjčky na bydlení',
      'Překlenovací úvěry pro podnikatele',
    ],
    borrowerProfile:
      'Řidič nebo skladník, 25–45 let, příjem 25–38 tis. Kč. Častá potřeba rychlých kratších úvěrů na překlenutí.',
    amountRange: '15 000 – 200 000 Kč',
    highlight:
      'Břeclav těží z polohy na hranici s Rakouskem a Slovenskem. Dynamický trh práce v logistice a dopravě.',
    infrastructure:
      'Standardní bankovní služby, rostoucí nabídka online úvěrů, přístup k rakouským finančním produktům.',
  },
  {
    name: 'Vyškov',
    shortTitle: 'vojenské město',
    focusSectors: ['Vojenská základna', 'Průmysl', 'Služby', 'Obchod'],
    loanUseCases: [
      'Hypotéky na rodinné domy',
      'Osobní půjčky na bydlení',
      'Konsolidace úvěrů',
      'Financování automobilů',
    ],
    borrowerProfile:
      'Vojenský či státní zaměstnanec, 28–48 let, stabilní příjem 32–48 tis. Kč. Preferuje jistotu a fixní úroky.',
    amountRange: '30 000 – 400 000 Kč',
    highlight:
      'Vyškov je významným vojenským centrem s stabilním trhem práce. Vysoká poptávka po hypotékách a osobních půjčkách.',
    infrastructure:
      'Dobře rozvinutá bankovní síť, specializované programy pro státní zaměstnance, dostupné poradenství.',
  },
  {
    name: 'Blansko',
    shortTitle: 'průmyslové město',
    focusSectors: ['Těžký průmysl', 'Strojírenství', 'Turistika (Moravský kras)', 'Služby'],
    loanUseCases: [
      'Financování pracovních strojů',
      'Konsolidace drahých úvěrů',
      'Osobní půjčky na rekonstrukce',
      'Investice do turistických projektů',
    ],
    borrowerProfile:
      'Průmyslový dělník nebo technik, 30–52 let, příjem 28–42 tis. Kč. Preferuje tradiční bankovní pobočky a osobní kontakt.',
    amountRange: '20 000 – 300 000 Kč',
    highlight:
      'Blansko kombinuje těžký průmysl s turistickým potenciálem Moravského krasu. Poptávka po osobních i investičních úvěrech.',
    infrastructure:
      'Standardní bankovní služby, rostoucí nabídka online úvěrů, dostupné dluhové poradenství v regionu.',
  },
]

// Generate full city content from seeds
export const jihomoravskyCities: SouthMoravianCityContent[] = citiesSeeds.map((seed) => ({
  slug: slugify(seed.name),
  name: seed.name,
  regionName: 'Jihomoravský kraj',
  countryName: 'Česká republika',
  metaTitleTemplate: `Půjčky ${seed.name}, Jihomoravský kraj – Srovnání {year}`,
  metaDescriptionTemplate: `Porovnejte osobní půjčky v ${seed.name} rychle a transparentně. Licencovaní poskytovatelé, RPSN, měsíční splátky a AI doporučení pro ${seed.shortTitle || seed.name}.`,
  intro: `${seed.name} ${seed.shortTitle ? `– ${seed.shortTitle} –` : ''} nabízí širokou škálu možností financování od osobních půjček, přes konsolidace, až po hypotéky. ${seed.highlight}`,
  offer: {
    affiliate: 9250,
    campaign: `jihomoravsky-${slugify(seed.name)}`,
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
    `Jihomoravský kraj nabízí širokou škálu finančních služeb od tradičních bank po moderní fintech platformy`,
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
      question: `Jaké jsou průměrné úroky a poplatky v Jihomoravském kraji?`,
      answer: `Průměrné RPSN se pohybuje mezi 15 % až 39 % ročně v závislosti na typu úvěru, výši, době splatnosti a bonitě žadatele. Banky nabízí obvykle nižší sazby (12–20 %), nebankovní poskytovatelé mohou mít RPSN vyšší (25–39 %). Vždy porovnejte celkové náklady, ne jen úrokovou sazbu.`,
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
    example: `Reprezentativní příklad: Výše úvěru 20 000 Kč, doba splatnosti 12 měsíců, úroková sazba 30 % p.a., RPSN 35 %, měsíční splátka 1 850 Kč, celková zaplacená částka 22 200 Kč (z toho úrok 2 200 Kč). Konkrétní podmínky závisí na bonitě žadatele a nabídce poskytovatele.`,
  },
  shortTitle: seed.shortTitle || seed.name,
  offerHighlights: [
    'AI model analyzuje nabídky v reálném čase',
    `Všichni poskytovatelé licencováni ČNB`,
    'Transparentní RPSN bez skrytých poplatků',
    `Srovnání bank i nebankovních společností v ${seed.name}`,
    'Rychlé online schválení během několika hodin',
    'Možnost konsolidace drahých úvěrů a kreditních kart',
  ],
  focusSectors: seed.focusSectors,
  loanUseCases: seed.loanUseCases,
  borrowerProfile: seed.borrowerProfile,
  amountRange: seed.amountRange,
  highlight: seed.highlight,
  infrastructure: seed.infrastructure,
}))

// Export default city (Brno)
export const brnoContent = jihomoravskyCities.find((c) => c.slug === 'brno')!
