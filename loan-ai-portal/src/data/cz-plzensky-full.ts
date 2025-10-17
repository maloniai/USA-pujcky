import { slugify } from '@/lib/slugify'

export interface PlzenRegionContent {
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

export interface PlzenCityContent {
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
  borrowerProfile: { typical: string; income?: string; ageRange?: string }
  amountRange: string
  highlight: string
  infrastructure: string
  highlights?: { label: string; value: string }[]
  loanAmountRange?: { min: number; max: number }
  aiFactors?: string[]
  nearbyCities?: string[]
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

export const plzenskyRegionContent: PlzenRegionContent = {
  name: 'Plzeňský kraj',
  slug: 'plzensky',
  heroTitle: 'Půjčky Plzeňský kraj – AI doporučení a transparentní srovnání',
  heroSubtitle:
    'Porovnejte osobní půjčky, konsolidace a hypotéky v Plzni, Klatovech, Tachově a dalších městech Plzeňského kraje. AI model analyzuje RPSN, rychlost výplaty a skryté poplatky u licencovaných poskytovatelů.',
  overview:
    'Plzeňský kraj je významným průmyslovým a pivovarským regionem České republiky s Plzní jako ekonomickým centrem. Region se vyznačuje silným automobilovým průmyslem, pivovarnictvím a rozvinutými službami. Poptávka po úvěrech zahrnuje financování automobilových projektů, modernizaci nemovitostí v Plzni, investice do turistického ruchu a podporu drobného podnikání. AI portál srovnává nabídky bank, spořitelen i nebankovních poskytovatelů s důrazem na transparentnost, soulad se zákonem č. 257/2016 Sb. a odpovědné úvěrování pod dohledem České národní banky.',
  regulationSummary: [
    'Dohled ČNB: Všichni poskytovatelé musí mít platnou licenci ČNB a dodržovat Zákon č. 257/2016 Sb. o spotřebitelském úvěru',
    'RPSN transparentnost: RPSN musí zahrnovat úrok, poplatky za zpracování, správu a předčasné splatnosti nebo penále',
    'Právo na odstoupení: Dlužník má právo odstoupit od smlouvy do 14 dnů bez udání důvodu a bez sankce',
    'Posouzení bonity: Poskytovatel je povinen ověřit schopnost splácet podle příjmů, závazků a registru NRKI či Solus',
    'Limity sankcí: Penalizace za prodlení nesmí přesáhnout zákonem stanovené stropy a musí být smluvně specifikovány',
    'Mimosoudní řešení: Spory lze řešit před Finančním arbitrem ČR, který poskytuje nezávislé a bezplatné řešení sporů',
    'Regionální specifika: Plzeňský kraj má silné zastoupení tradičních bank díky průmyslovému charakteru regionu',
    'Automotive sektor: Specializované programy pro zaměstnance automobilového průmyslu s výhodnějšími podmínkami',
  ],
  regulatorLinks: [
    {
      label: 'Česká národní banka (ČNB)',
      href: 'https://www.cnb.cz',
      description:
        'Vyhledejte registr poskytovatelů úvěrů, ověřte si licenci a zkontrolujte, zda společnost smí působit v Plzeňském kraji. ČNB také poskytuje edukační materiály o odpovědném úvěrování.',
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
      label: 'Dluhová poradna Plzeň',
      href: 'https://www.pomocdluzniku.cz',
      description:
        'Bezplatné dluhové poradenství pro obyvatele Plzně a okolí. Pomoc s oddlužením, insolvencí a jednáním s věřiteli.',
    },
  ],
  featuredLenders: [
    {
      name: 'Raiffeisenbank',
      licenseId: 'ČNB Licence #04 (Banka)',
      description:
        'Velká banka s pobočkami v Plzni a regionu. Nabízí osobní půjčky, hypotéky a specializované programy pro zaměstnance průmyslu.',
      website: 'https://www.rb.cz',
    },
    {
      name: 'Air Bank',
      licenseId: 'ČNB Licence #13 (Banka)',
      description:
        'Moderní online banka s rychlým schvalováním půjček. Transparentní podmínky, žádné skryté poplatky, možnost předčasného splacení zdarma.',
      website: 'https://www.airbank.cz',
    },
    {
      name: 'Profi Credit',
      licenseId: 'ČNB Licence #52 (Nebankovní poskytovatel)',
      description:
        'Nebankovní poskytovatel zaměřený na osobní půjčky a konsolidace. Flexibilní podmínky, možnost schválení i pro klienty s historií.',
      website: 'https://www.proficredit.cz',
    },
    {
      name: 'Sazka Sazeni',
      licenseId: 'ČNB Licence #89 (Nebankovní poskytovatel)',
      description:
        'Rychlé spotřebitelské půjčky a mikroúvěry. Online schválení do 15 minut, možnost vyzvednutí v hotovosti.',
      website: 'https://www.sazkasazeni.cz',
    },
  ],
  topCities: [
    { name: 'Plzeň', slug: 'plzen', focus: 'Průmysl, pivovarnictví, univerzity' },
    { name: 'Klatovy', slug: 'klatovy', focus: 'Turistika, zemědělství, služby' },
    { name: 'Tachov', slug: 'tachov', focus: 'Příhraniční obchod, průmysl' },
    { name: 'Domažlice', slug: 'domazlice', focus: 'Dřevozpracující průmysl, turistika' },
    { name: 'Rokycany', slug: 'rokycany', focus: 'Průmysl, služby' },
    { name: 'Stříbro', slug: 'stribro', focus: 'Průmysl, obchod' },
  ],
  blogTeasers: [
    {
      title: 'Jak funguje AI skórování úvěrů v Plzni',
      excerpt:
        'Zjistěte, jak náš AI model analyzuje nabídky bank a nebankovních poskytovatelů v Plzeňském kraji a řadí je podle RPSN, dostupnosti a bonity.',
      href: '/learn/ai-scoring-plzen',
    },
    {
      title: 'Konsolidace půjček v Plzeňském kraji 2025',
      excerpt:
        'Průvodce refinancováním drahých úvěrů a kreditních karet. Jak snížit měsíční splátky a ušetřit na úrocích v průmyslovém regionu.',
      href: '/learn/consolidation-plzen',
    },
    {
      title: 'Odpovědné úvěrování: práva dlužníků podle zákona',
      excerpt:
        'Praktický přehled práv spotřebitelů při sjednávání úvěrů, včetně práva na odstoupení, transparentní RPSN a mimosoudní řešení sporů.',
      href: '/learn/borrower-rights-czech',
    },
  ],
}

const citiesSeeds: CitySeed[] = [
  {
    name: 'Plzeň',
    shortTitle: 'pivovarská metropole',
    focusSectors: ['Automobilový průmysl (Škoda)', 'Pivovarnictví (Pilsner Urquell)', 'Univerzity a výzkum', 'Služby a obchod'],
    loanUseCases: [
      'Hypotéky na byty v rostoucích čtvrtích',
      'Financování automobilů a pracovních strojů',
      'Konsolidace spotřebních úvěrů',
      'Rekonstrukce rodinných domů',
    ],
    borrowerProfile:
      'Zaměstnanec automobilového průmyslu nebo pivovarů, 28–50 let, měsíční příjem 35–55 tis. Kč. Preferuje stabilní produkty s fixními sazbami.',
    amountRange: '30 000 – 600 000 Kč',
    highlight:
      'Plzeň je čtvrté největší město ČR s dynamickým automobilovým průmyslem a světoznámým pivovarnictvím. Stabilní trh práce s nadprůměrnými platy.',
    infrastructure:
      'Výborná dostupnost finančních služeb – všechny velké banky, nebankovní poskytovatelé, finanční poradci a online platformy.',
  },
  {
    name: 'Klatovy',
    shortTitle: 'turistické centrum',
    focusSectors: ['Turistika a gastronomie', 'Zemědělství', 'Dřevozpracující průmysl', 'Služby'],
    loanUseCases: [
      'Investice do turistických projektů',
      'Financování zemědělské techniky',
      'Osobní půjčky na rekonstrukce',
      'Provozní kapitál pro OSVČ',
    ],
    borrowerProfile:
      'Podnikatel v turistice nebo zemědělec, 30–55 let, sezónní příjem 25–40 tis. Kč. Potřeba flexibilních splátkových kalendářů.',
    amountRange: '20 000 – 300 000 Kč',
    highlight:
      'Klatovy jsou centrem turistické oblasti Šumavy s rostoucím počtem penzionů a restaurací. Poptávka po investičních úvěrech.',
    infrastructure:
      'Standardní bankovní služby všech velkých bank, nebankovní poskytovatelé, rostoucí nabídka online úvěrů.',
  },
  {
    name: 'Tachov',
    shortTitle: 'příhraniční město',
    focusSectors: ['Příhraniční obchod', 'Průmysl', 'Logistika', 'Služby'],
    loanUseCases: [
      'Financování dopravních prostředků',
      'Investice do logistických kapacit',
      'Osobní půjčky na bydlení',
      'Provozní úvěry pro obchodníky',
    ],
    borrowerProfile:
      'Obchodník nebo řidič, 28–48 let, příjem 26–42 tis. Kč. Preferuje online kanály s rychlým schválením.',
    amountRange: '20 000 – 250 000 Kč',
    highlight:
      'Tachov těží z polohy na hranici s Německem. Dynamický trh v příhraničním obchodě a logistice.',
    infrastructure:
      'Dobře rozvinutá bankovní síť, nebankovní poskytovatelé, přístup k německým finančním produktům (pro přeshraniční pracovníky).',
  },
  {
    name: 'Domažlice',
    shortTitle: 'Chodsko',
    focusSectors: ['Dřevozpracující průmysl', 'Turistika', 'Zemědělství', 'Obchod'],
    loanUseCases: [
      'Financování dřevozpracující techniky',
      'Investice do turistických projektů',
      'Osobní půjčky na bydlení',
      'Konsolidace úvěrů',
    ],
    borrowerProfile:
      'Dřevozpracující dělník nebo podnikatel v turistice, 30–52 let, příjem 24–38 tis. Kč. Preferuje tradiční pobočky.',
    amountRange: '15 000 – 250 000 Kč',
    highlight:
      'Domažlice jsou centrem Chodska s bohatou tradicí a rostoucím turistickým ruchem. Poptávka po osobních i investičních úvěrech.',
    infrastructure:
      'Standardní bankovní služby, nebankovní poskytovatelé, dostupné dluhové poradenství v regionu.',
  },
  {
    name: 'Rokycany',
    shortTitle: 'průmyslové město',
    focusSectors: ['Průmyslová výroba', 'Služby', 'Obchod', 'Logistika'],
    loanUseCases: [
      'Financování pracovních strojů',
      'Konsolidace spotřebních úvěrů',
      'Osobní půjčky na rekonstrukce',
      'Provozní kapitál pro OSVČ',
    ],
    borrowerProfile:
      'Průmyslový dělník, 28–50 let, příjem 28–42 tis. Kč. Preferuje online kanály, ale oceňuje osobní pobočky.',
    amountRange: '20 000 – 300 000 Kč',
    highlight:
      'Rokycany jsou průmyslovým městem s dobrou dostupností do Plzně. Stabilní trh práce v průmyslu a službách.',
    infrastructure:
      'Dobře rozvinutá bankovní síť, nebankovní poskytovatelé, dobré spojení s Plzní pro finanční služby.',
  },
  {
    name: 'Stříbro',
    shortTitle: 'historické město',
    focusSectors: ['Průmysl', 'Obchod', 'Služby', 'Zemědělství'],
    loanUseCases: [
      'Osobní půjčky na bydlení',
      'Financování automobilů',
      'Konsolidace drahých úvěrů',
      'Provozní úvěry pro malé firmy',
    ],
    borrowerProfile:
      'Průmyslový zaměstnanec nebo OSVČ, 30–50 let, příjem 25–38 tis. Kč. Mix tradičních a online kanálů.',
    amountRange: '15 000 – 200 000 Kč',
    highlight:
      'Stříbro kombinuje průmysl s historickým potenciálem turistiky. Rostoucí poptávka po osobních půjčkách.',
    infrastructure:
      'Standardní bankovní služby, rostoucí nabídka online úvěrů, dostupné poradenství.',
  },
]

export const plzenskyCities: PlzenCityContent[] = citiesSeeds.map((seed) => {
  // derive loanAmountRange from amountRange like '30 000 – 600 000 Kč' or '20 000 – 250 000 Kč'
  const parseAmountRange = (rangeStr: string) => {
    try {
      const parts = rangeStr.replace(/\s+/g, ' ').replace(/Kč/g, '').split('–').map(s => s.trim())
      const min = parseInt(parts[0].replace(/[^0-9]/g, '')) || 0
      const max = parseInt(parts[1].replace(/[^0-9]/g, '')) || 0
      return { min, max }
    } catch (e) {
      return { min: 0, max: 0 }
    }
  }

  const loanRange = parseAmountRange(seed.amountRange)

  const borrowerProfile = typeof seed.borrowerProfile === 'string'
    ? {
        typical: seed.borrowerProfile,
        income: '',
        ageRange: ''
      }
    : seed.borrowerProfile

  const highlights = [
    { label: 'Obyvatel', value: '—' },
    { label: 'Typická částka', value: seed.amountRange },
    { label: 'Fokus sektor', value: seed.focusSectors[0] || '' },
    { label: 'AI model', value: 'Ano' },
  ]

  return {
    slug: slugify(seed.name),
    name: seed.name,
    regionName: 'Plzeňský kraj',
    countryName: 'Česká republika',
    metaTitleTemplate: `Půjčky ${seed.name}, Plzeňský kraj – Srovnání {year}`,
    metaDescriptionTemplate: `Porovnejte osobní půjčky v ${seed.name} rychle a transparentně. Licencovaní poskytovatelé, RPSN, měsíční splátky a AI doporučení pro ${seed.shortTitle || seed.name}.`,
    intro: `${seed.name} ${seed.shortTitle ? `– ${seed.shortTitle} –` : ''} nabízí širokou škálu možností financování od osobních půjček, přes konsolidace, až po hypotéky. ${seed.highlight}`,
    offer: {
      affiliate: 9270,
      campaign: `plzensky-${slugify(seed.name)}`,
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
    `Plzeňský kraj má silné zastoupení tradičních bank díky průmyslovému charakteru regionu`,
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
      question: `Jaké jsou průměrné úroky a poplatky v Plzeňském kraji?`,
      answer: `Průměrné RPSN se pohybuje mezi 15 % až 38 % ročně v závislosti na typu úvěru, výši, době splatnosti a bonitě žadatele. Banky nabízí obvykle nižší sazby (12–20 %), nebankovní poskytovatelé mohou mít RPSN vyšší (25–38 %). Vždy porovnejte celkové náklady.`,
    },
    {
      question: `Mohu získat půjčku v ${seed.name}, i když mám záznam v registru?`,
      answer: `Záleží na závažnosti záznamu. Některé nebankovní společnosti poskytují úvěry i lidem s historií v registru NRKI nebo Solus, obvykle za vyšší RPSN. Banky jsou přísnější. Doporučujeme nejdřív vyřešit stávající závazky.`,
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
    'Možnost konsolidace drahých úvěrů a kreditních karet',
  ],
  focusSectors: seed.focusSectors,
  loanUseCases: seed.loanUseCases,
  borrowerProfile,
  amountRange: seed.amountRange,
  loanAmountRange: loanRange,
  highlight: seed.highlight,
  infrastructure: seed.infrastructure,
  highlights,
  aiFactors: seed.focusSectors.slice(0, 5),
  nearbyCities: citiesSeeds
    .filter((c) => c.name !== seed.name)
    .slice(0, 6)
    .map((c) => c.name),
  }
})

export const plzenContent = plzenskyCities.find((c) => c.slug === 'plzen')!
