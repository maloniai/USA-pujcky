import { slugify } from '@/lib/slugify'

export interface PilsenRegionContent {
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

export interface PilsenCityContent {
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
  nearby: string[]
}

const CURRENT_YEAR = new Date().getFullYear()

const baseRegulations: string[] = [
  'Poskytovatelé musí mít platnou licenci ČNB a uvádějí reprezentativní příklad úvěru v Kč.',
  'Plzeňský kraj vyžaduje transparentní RPSN u nabídek pro rekonstrukce, fotovoltaiku a podnikatelské účely.',
  'Limity DTI 8,5 a DSTI 45 % platí pro většinu žadatelů, mladí do 36 let mají zvýhodněné hranice.',
  'Smlouvy musí být dostupné online minimálně 48 hodin před podpisem a obsahovat informace o pojištění schopnosti splácet.',
  'Úvěry na rekreační objekty v CHKO Šumava vyžadují doložení energetického auditu a pojištění proti živelným škodám.',
]

const disclosureText = {
  affiliate:
    'Stránka obsahuje sponzorované nabídky licencovaných poskytovatelů. Provize neovlivňuje AI skóre – výsledky řadíme podle celkových nákladů, transparentnosti a lokální dostupnosti.',
  example:
    'Reprezentativní příklad: Půjčka 260 000 Kč na 72 měsíců, pevná sazba 10,2 % p.a., RPSN 11,8 %, měsíční splátka 4 787 Kč, celkem zaplatíte 344 664 Kč. Konkrétní parametry určí poskytovatel dle bonity.',
}

const citySeeds: CitySeed[] = [
  {
    name: 'Bezdružice',
    focusSectors: ['lázeňství', 'zemědělství'],
    loanUseCases: ['rekonstrukci penzionů a lázeňských domů', 'modernizaci zemědělských strojů'],
    borrowerProfile: 'menší rodinné podniky a domácnosti napojené na Konstantinolázeňsko',
    amountRange: '70 000–480 000 Kč',
    highlight: 'lázeňská tradice a venkovské agroturistické projekty',
    infrastructure: 'silnice II/203 s napojením na Mariánské Lázně a Stříbro',
  nearby: ['plana', 'stribro', 'tachov'],
  },
  {
    name: 'Bělá nad Radbuzou',
    focusSectors: ['logistika', 'lesnictví'],
    loanUseCases: ['rozšíření skladů u přechodu Železná', 'pořízení techniky pro lesní hospodářství'],
    borrowerProfile: 'rodiny a podnikatelé obsluhující bavorský trh a okolní pohraničí',
    amountRange: '80 000–520 000 Kč',
    highlight: 'přeshraniční obchod a Schengenský provoz',
    infrastructure: 'silnice II/195 a železniční trať do Domažlic',
    nearby: ['domazlice', 'pobezovice', 'nyrsko'],
  },
  {
    name: 'Blovice',
    focusSectors: ['potravinářství', 'automotive subdodávky'],
    loanUseCases: ['modernizaci mlékárenských provozů', 'financování lisoven pro automobilový průmysl'],
    borrowerProfile: 'zaměstnanci průmyslových zón v Plzni a podnikatelé z Podbrdska',
    amountRange: '95 000–640 000 Kč',
    highlight: 'průmyslové napojení na Plzeň a dálnici D5',
    infrastructure: 'železnice Plzeň–Strakonice, silnice I/20',
  nearby: ['plzen', 'prestice', 'spalene-porici'],
  },
  {
    name: 'Dobřany',
    focusSectors: ['zdravotnictví', 'strojírenství'],
    loanUseCases: ['rekonstrukci zdravotnických zařízení', 'rozšíření zón v CTParku Plzeň'],
    borrowerProfile: 'zdravotní personál a inženýři dojíždějící do Plzně a Škody Transportation',
    amountRange: '110 000–780 000 Kč',
    highlight: 'psychiatrická nemocnice a průmyslový park',
    infrastructure: 'dálnice D5, železnice Plzeň–Domažlice',
    nearby: ['plzen', 'nyrany', 'stod'],
  },
  {
    name: 'Domažlice',
    focusSectors: ['přeshraniční obchod', 'textil'],
    loanUseCases: ['modernizaci hraničních provozů', 'rekonstrukci bytů pro přeshraniční pracovníky'],
    borrowerProfile: 'pracující na trase Plzeň–Regensburg a podnikatelé v přechodu Folmava',
    amountRange: '120 000–820 000 Kč',
    highlight: 'přeshraniční logistika s Bavorskem',
    infrastructure: 'silnice I/26 a železnice Plzeň–Furth im Wald',
  nearby: ['bela-nad-radbuzou', 'pobezovice', 'nyrsko'],
  },
  {
    name: 'Hartmanice',
    focusSectors: ['turismus Šumava', 'lesnictví'],
    loanUseCases: ['rozšíření ubytování v bývalé synagoze', 'pořízení lesní mechanizace'],
    borrowerProfile: 'majitelé penzionů a lesní společnosti na Hartmanicku',
    amountRange: '75 000–510 000 Kč',
    highlight: 'šumavský turismus a vojenská historie',
    infrastructure: 'silnice II/145 na Sušici a Železnou Rudu',
  nearby: ['susice', 'kasperske-hory', 'zelezna-ruda'],
  },
  {
    name: 'Holýšov',
    focusSectors: ['automotive', 'logistika'],
    loanUseCases: ['rozšíření výrobních hal', 'konsolidaci úvěrů zaměstnanců v průmyslové zóně'],
    borrowerProfile: 'pracovníci průmyslového parku SEMI-TRANS a rodiny napojené na D5',
    amountRange: '100 000–720 000 Kč',
    highlight: 'automotive klastr a logistické sklady',
    infrastructure: 'dálnice D5 a železnice Plzeň–Domažlice',
  nearby: ['nyrany', 'stod', 'prestice'],
  },
  {
    name: 'Horažďovice',
    focusSectors: ['potravinářství', 'chemie'],
    loanUseCases: ['modernizaci závodu Otava', 'rekonstrukci rodinných domů u řeky Otavy'],
    borrowerProfile: 'zaměstnanci potravinářských a chemických provozů, domácnosti v západním Pošumaví',
    amountRange: '95 000–620 000 Kč',
    highlight: 'významný zaměstnavatel Otavské strojírny a lázně',
    infrastructure: 'železnice Horažďovice–Plzeň, silnice I/22',
  nearby: ['susice', 'spalene-porici', 'prestice'],
  },
  {
    name: 'Horšovský Týn',
    focusSectors: ['logistika', 'zemědělství'],
    loanUseCases: ['stavbu logistických center u D5', 'modernizaci zemědělských družstev'],
    borrowerProfile: 'logistické firmy na trase D5 a zemědělci z Podčeského lesa',
    amountRange: '90 000–600 000 Kč',
    highlight: 'spojnice Plzeň–Německo a zemědělské dotace',
    infrastructure: 'silnice I/26 a II/193',
  nearby: ['domazlice', 'pobezovice', 'stankov'],
  },
  {
    name: 'Chodová Planá',
    focusSectors: ['pivovarnictví', 'lázeňství'],
    loanUseCases: ['rozšíření pivovaru Chodovar', 'modernizaci wellness a hotelů'],
    borrowerProfile: 'rodinné podniky v pivovaru a lázeňských službách pro Mariánské Lázně',
    amountRange: '95 000–640 000 Kč',
    highlight: 'pivovar s pivními lázněmi a turistika',
    infrastructure: 'silnice I/21 a železnice Planá–Tachov',
  nearby: ['plana', 'tachov', 'manetin'],
  },
  {
    name: 'Kašperské Hory',
    focusSectors: ['turistika', 'kreativní průmysl'],
    loanUseCases: ['rekonstrukci horských hotelů', 'pořízení vybavení pro filmaře a průvodce'],
    borrowerProfile: 'majitelé ubytování a kreativní podnikatelé v NP Šumava',
    amountRange: '110 000–780 000 Kč',
    highlight: 'turistické centrum Šumavy a filmové produkce',
    infrastructure: 'silnice II/145 a II/169 na Sušici a Vimperk',
  nearby: ['susice', 'hartmanice', 'zelezna-ruda'],
  },
  {
    name: 'Kasejovice',
    focusSectors: ['zemědělství', 'řemesla'],
    loanUseCases: ['modernizaci farem', 'pořízení CNC strojů pro truhláře'],
    borrowerProfile: 'rodinné farmy a dílny mezi Plzní a Strakonicemi',
    amountRange: '65 000–430 000 Kč',
    highlight: 'venkovské projekty a lokální řemesla',
    infrastructure: 'silnice II/187 s napojením na Blovice a Nepomuk',
    nearby: ['nepomuk', 'planice', 'spalene-porici'],
  },
  {
    name: 'Kaznějov',
    focusSectors: ['chemie', 'těžba kaolínu'],
    loanUseCases: ['modernizaci závodu Česka kaolinka', 'rekonstrukci bytů pro zaměstnance'],
    borrowerProfile: 'pracovníci chemických provozů a logistických firem u Nýřan',
    amountRange: '110 000–760 000 Kč',
    highlight: 'největší kaolinový lom ve střední Evropě',
    infrastructure: 'silnice I/27 na Plzeň a Most, železnice Plzeň–Most',
    nearby: ['plzen', 'plasy', 'nyrany'],
  },
  {
    name: 'Klatovy',
    focusSectors: ['zdravotnictví', 'automotive subdodávky'],
    loanUseCases: ['rozšíření nemocnice', 'modernizaci výroby v Klatovských papírnách'],
    borrowerProfile: 'zaměstnanci nemocnice, automotive dílen a podnikatelé z Pošumaví',
    amountRange: '140 000–880 000 Kč',
    highlight: 'okresní centrum se silným zdravotnictvím',
    infrastructure: 'silnice I/27, železnice Plzeň–Železná Ruda',
    nearby: ['susice', 'nyrsko', 'domazlice'],
  },
  {
    name: 'Kralovice',
    focusSectors: ['stavebnictví', 'zemědělství'],
    loanUseCases: ['pořízení techniky pro výrobce prefabrikátů', 'rekonstrukci zemědělských hal'],
    borrowerProfile: 'stavební firmy napojené na Plzeň a zemědělci z Manětínska',
    amountRange: '90 000–600 000 Kč',
    highlight: 'stavební závody a zemědělské družstvo',
    infrastructure: 'silnice I/27 na Plzeň a Most',
    nearby: ['plasy', 'manetin', 'radnice'],
  },
  {
    name: 'Manětín',
    focusSectors: ['energetika', 'turismus'],
    loanUseCases: ['rekonstrukci barokního zámku', 'instalaci fotovoltaiky na statcích'],
    borrowerProfile: 'majitelé venkovských usedlostí a agroturistických projektů',
    amountRange: '70 000–460 000 Kč',
    highlight: 'barokní památka s důrazem na obnovitelné zdroje',
    infrastructure: 'silnice II/201 mezi Plasy a Toužimí',
  nearby: ['kralovice', 'plasy', 'plana'],
  },
  {
    name: 'Město Touškov',
    focusSectors: ['logistika', 'sport'],
    loanUseCases: ['výstavbu sportovišť', 'modernizaci skladů navázaných na Plzeň'],
    borrowerProfile: 'rodiny dojíždějící do Plzně a logistické firmy u Nýřan',
    amountRange: '85 000–560 000 Kč',
    highlight: 'rychle rostoucí suburbie Plzně',
    infrastructure: 'silnice II/180 a napojení na D5',
  nearby: ['plzen', 'nyrany', 'kralovice'],
  },
  {
    name: 'Mirošov',
    focusSectors: ['strojírenství', 'dřevozpracování'],
    loanUseCases: ['modernizaci technologií ve Strojmetal', 'rekonstrukci bytových domů'],
    borrowerProfile: 'zaměstnanci průmyslových podniků v Rokycanech a rodiny v Brdech',
    amountRange: '95 000–640 000 Kč',
    highlight: 'strojírenský závod a vazba na armádní logistiku',
    infrastructure: 'železnice Rokycany–Nezvěstice, silnice II/117',
    nearby: ['rokycany', 'spalene-porici', 'radnice'],
  },
  {
    name: 'Nýřany',
    focusSectors: ['automotive', 'logistika'],
    loanUseCases: ['rozšíření průmyslových hal', 'konsolidaci půjček zaměstnanců'],
    borrowerProfile: 'pracovníci CTPark Nýřany a logistických center u D5',
    amountRange: '110 000–780 000 Kč',
    highlight: 'strategická poloha na D5 s napojením na BMW a Škodu',
    infrastructure: 'dálnice D5, železnice Plzeň–Cheb',
    nearby: ['plzen', 'dobrany', 'holysov'],
  },
  {
    name: 'Nepomuk',
    focusSectors: ['turismus', 'zemědělství'],
    loanUseCases: ['rekonstrukci poutních domů', 'modernizaci zemědělských provozů'],
    borrowerProfile: 'rodiny a podnikatelé kolem poutního místa sv. Jana Nepomuckého',
    amountRange: '80 000–540 000 Kč',
    highlight: 'poutní turismus a jiho-plzeňské farmy',
    infrastructure: 'silnice I/20 na Plzeň a České Budějovice',
    nearby: ['planice', 'kasejovice', 'spalene-porici'],
  },
  {
    name: 'Nýrsko',
    focusSectors: ['optika', 'turismus'],
    loanUseCases: ['rozšíření výroby optických přístrojů', 'rekonstrukci ubytování u vodní nádrže Nýrsko'],
    borrowerProfile: 'inženýři z Nýrska a provozovatelé turistických služeb',
    amountRange: '95 000–650 000 Kč',
    highlight: 'optický průmysl a vodní nádrž pro zásobování Plzně',
    infrastructure: 'silnice I/27 a železnice Plzeň–Železná Ruda',
    nearby: ['klatovy', 'susice', 'zelezna-ruda'],
  },
  {
    name: 'Planá',
    shortTitle: 'Planá u Mariánských Lázní',
    focusSectors: ['lázeňství', 'dřevozpracování'],
    loanUseCases: ['rekonstrukci historických lázeňských budov', 'pořízení techniky pro dřevozpracující závody'],
    borrowerProfile: 'zaměstnanci lázní a průmyslových zón na Tachovsku',
    amountRange: '95 000–630 000 Kč',
    highlight: 'poutní a lázeňská destinace blízko Mariánských Lázní',
    infrastructure: 'železnice Plzeň–Cheb, silnice I/21',
    nearby: ['chodova-plana', 'tachov', 'stribro'],
  },
  {
    name: 'Plánice',
    focusSectors: ['zemědělství', 'řemesla'],
    loanUseCases: ['modernizaci farem na Plánicku', 'rekonstrukci historických domů'],
    borrowerProfile: 'venkovské domácnosti a drobní živnostníci u Nepomuku',
    amountRange: '65 000–420 000 Kč',
    highlight: 'historické centrum s venkovskými dotacemi',
    infrastructure: 'silnice II/187 na Klatovy a Nepomuk',
    nearby: ['nepomuk', 'kasejovice', 'susice'],
  },
  {
    name: 'Plasy',
    focusSectors: ['letectví', 'turismus'],
    loanUseCases: ['rozvoj Leteckého muzea', 'rekonstrukci klášterního areálu'],
    borrowerProfile: 'technologické firmy z Plas, muzeum a turismus v údolí Střely',
    amountRange: '90 000–600 000 Kč',
    highlight: 'Výzkumné letecké centrum a klášterní komplex',
    infrastructure: 'silnice I/27 a železnice Plzeň–Žatec',
    nearby: ['kralovice', 'manetin', 'plzen'],
  },
  {
    name: 'Plzeň',
    focusSectors: ['strojírenství', 'IT a startupy'],
    loanUseCases: ['financování bydlení v developerských projektech', 'expanzi technologických inkubátorů'],
    borrowerProfile: 'inženýři Škoda Group, IT specialisté a akademici ZČU',
    amountRange: '160 000–1 000 000 Kč',
    highlight: 'metropole s vysokou poptávkou po moderním bydlení',
    infrastructure: 'dálnice D5, železniční koridor Praha–Mnichov, letiště Líně',
    nearby: ['dobrany', 'nyrany', 'rokycany'],
  },
  {
    name: 'Poběžovice',
    focusSectors: ['logistika', 'zemědělství'],
    loanUseCases: ['rozšíření skladů s napojením na D5', 'pořízení zemědělské techniky'],
    borrowerProfile: 'podnikatelé v logistice a farmáři pod Čerchovem',
    amountRange: '80 000–540 000 Kč',
    highlight: 'pohraniční česko-německá spolupráce',
    infrastructure: 'silnice II/195 na Domažlice a Rozvadov',
    nearby: ['domazlice', 'bela-nad-radbuzou', 'tachov'],
  },
  {
    name: 'Přeštice',
    focusSectors: ['potravinářství', 'zdravotnictví'],
    loanUseCases: ['modernizaci závodu Madeta a Přeštická šunka', 'rekonstrukci zdravotnických zařízení'],
    borrowerProfile: 'zaměstnanci potravinářských závodů a rodiny na jižním Plzeňsku',
    amountRange: '100 000–680 000 Kč',
    highlight: 'silná potravinářská tradice a spojení na Plzeň',
    infrastructure: 'železnice Plzeň–Klatovy, silnice I/27',
    nearby: ['plzen', 'spalene-porici', 'blovice'],
  },
  {
    name: 'Radnice',
    focusSectors: ['energetika', 'stavebnictví'],
    loanUseCases: ['instalaci fotovoltaiky na rodinných domech', 'rekonstrukci brownfieldů'],
    borrowerProfile: 'rodiny mezi Rokycany a Plasy, stavební firmy v Podbrdsku',
    amountRange: '70 000–460 000 Kč',
    highlight: 'malé město s energetickými projekty v Brdech',
    infrastructure: 'silnice II/235 na Rokycany a Plzeň',
    nearby: ['rokycany', 'kralovice', 'manetin'],
  },
  {
    name: 'Rokycany',
    focusSectors: ['automotive', 'logistika'],
    loanUseCases: ['rozšíření logistického parku Arete', 'modernizaci bytů pro zaměstnance'],
    borrowerProfile: 'zaměstnanci průmyslové zóny a rodiny dojíždějící do Plzně',
    amountRange: '120 000–840 000 Kč',
    highlight: 'průmyslová zóna podél D5 a kolejí Praha–Plzeň',
    infrastructure: 'dálnice D5, železnice Praha–Plzeň',
    nearby: ['plzen', 'mirosov', 'radnice'],
  },
  {
    name: 'Spálené Poříčí',
    focusSectors: ['turismus Brdy', 'zemědělství'],
    loanUseCases: ['rekonstrukci zámeckého hotelu', 'modernizaci zemědělských provozů'],
    borrowerProfile: 'rodiny a podnikatelé mezi Plzní a Brdskou vrchovinou',
    amountRange: '80 000–540 000 Kč',
    highlight: 'turistická brána do CHKO Brdy',
    infrastructure: 'silnice II/117 a II/177, návaznost na Rokycany',
  nearby: ['mirosov', 'prestice', 'nepomuk'],
  },
  {
    name: 'Staňkov',
    focusSectors: ['strojírenství', 'zemědělství'],
    loanUseCases: ['pořízení strojů pro Kovohute Staňkov', 'modernizaci živočišné výroby'],
    borrowerProfile: 'pracovníci strojírenských podniků a farmy mezi Plzní a Domažlicemi',
    amountRange: '90 000–610 000 Kč',
    highlight: 'strojní výroba a významný zaměstnavatel regionu',
    infrastructure: 'silnice I/26 a železnice Plzeň–Domažlice',
  nearby: ['stod', 'horsovsky-tyn', 'domazlice'],
  },
  {
    name: 'Stod',
    focusSectors: ['logistika', 'zdravotnictví'],
    loanUseCases: ['rozšíření logistických parků', 'modernizaci nemocnice ve Stodu'],
    borrowerProfile: 'logistické firmy u D5 a zdravotníci z nemocnice Stod',
    amountRange: '95 000–630 000 Kč',
    highlight: 'spojení na D5 a okresní zdravotnictví',
    infrastructure: 'silnice I/26 a železnice Plzeň–Domažlice',
  nearby: ['nyrany', 'stankov', 'dobrany'],
  },
  {
    name: 'Stříbro',
    focusSectors: ['automotive', 'energetika'],
    loanUseCases: ['rozšíření průmyslové zóny Stříbro', 'modernizaci domácností v okolí přehrady Hracholusky'],
    borrowerProfile: 'zaměstnanci průmyslových parků NÝDRLE a logistika pro BMW',
    amountRange: '110 000–780 000 Kč',
    highlight: 'strategická průmyslová zóna na D5',
    infrastructure: 'dálnice D5, železnice Plzeň–Cheb',
  nearby: ['tachov', 'plana', 'nyrany'],
  },
  {
    name: 'Sušice',
    focusSectors: ['turismus', 'sklářství'],
    loanUseCases: ['modernizaci ubytování na Otavě', 'pořízení linek pro firmu Moira a sklářské dílny'],
    borrowerProfile: 'podnikatelé v turismu a skláři ze západní Šumavy',
    amountRange: '110 000–780 000 Kč',
    highlight: 'centrum Pošumaví a outdoor turismus',
    infrastructure: 'silnice I/22, železnice Horažďovice–Klatovy',
  nearby: ['kasperske-hory', 'hartmanice', 'horazdovice'],
  },
  {
    name: 'Tachov',
    focusSectors: ['automotive', 'logistika'],
    loanUseCases: ['rozšíření zóny Tachov–Vítkov', 'konsolidaci zaměstnaneckých úvěrů'],
    borrowerProfile: 'pracovníci průmyslových parků a logistických center směrem na Německo',
    amountRange: '120 000–820 000 Kč',
    highlight: 'průmyslový koridor na hranici s Bavorskem',
    infrastructure: 'dálnice D5, železnice Plzeň–Cheb',
  nearby: ['plana', 'stribro', 'pobezovice'],
  },
  {
    name: 'Železná Ruda',
    focusSectors: ['turismus', 'sport'],
    loanUseCases: ['rozšíření ski resortu Špičák', 'modernizaci hotelů pro německou klientelu'],
    borrowerProfile: 'majitelé penzionů a sportovních center na hranici s Bavorskem',
    amountRange: '100 000–720 000 Kč',
    highlight: 'hraniční zimní resort propojený s Bavorským lesem',
    infrastructure: 'silnice I/27 a železnice Plzeň–Železná Ruda',
    nearby: ['nyrsko', 'susice', 'kasperske-hory'],
  },
]

const buildTitle = (seed: CitySeed) => {
  const displayName = seed.shortTitle ?? seed.name
  return `Půjčky v ${displayName}, Plzeňský kraj – Srovnání {{year}}`
}

const citySlugList = citySeeds.map((seed) => slugify(seed.name))
const citySlugSet = new Set(citySlugList)

const buildNearbySlugs = (index: number, seed: CitySeed) => {
  const suggestions: string[] = []
  const currentSlug = citySlugList[index]

  for (const candidate of seed.nearby) {
    if (citySlugSet.has(candidate) && candidate !== currentSlug && !suggestions.includes(candidate)) {
      suggestions.push(candidate)
    }
  }

  const window = 3
  for (let offset = 1; offset <= window; offset++) {
    const prevSlug = citySlugList[index - offset]
    const nextSlug = citySlugList[index + offset]
    if (prevSlug && prevSlug !== currentSlug && !suggestions.includes(prevSlug)) {
      suggestions.push(prevSlug)
    }
    if (nextSlug && nextSlug !== currentSlug && !suggestions.includes(nextSlug)) {
      suggestions.push(nextSlug)
    }
  }

  return suggestions.slice(0, 6)
}

const buildIntro = (seed: CitySeed) => {
  const sentences = [
    `${seed.name} v Plzeňském kraji kombinuje ${seed.focusSectors.join(' a ')} a úvěry se zde využívají pro ${seed.loanUseCases.join(' a ')}.`,
    `Žadatelé obvykle prokazují ${seed.borrowerProfile}, poskytovatelé ověřují registry BRKI a NRKI a sledují cash flow během sezóny.`,
    `Typické částky se pohybují kolem ${seed.amountRange}, splatnost 24–96 měsíců a banky požadují rozpočet projektu včetně rezervy.`,
    `Loan AI Portál vyhodnocuje ${seed.highlight}, zohledňuje infrastrukturu (${seed.infrastructure}) a nabídne licencované poskytovatele s transparentním RPSN.`,
  ]

  return sentences.join(' ')
}

const buildMetaDescription = (seed: CitySeed) => {
  const description = `Srovnejte licencované půjčky v ${seed.name} pro {{year}}. AI průvodce hlídá RPSN, registry a podporuje ${seed.focusSectors[0]}. Online žádost do pár minut.`
  return description.length > 155 ? description.slice(0, 155) : description
}

const buildFaq = (seed: CitySeed): { question: string; answer: string }[] => [
  {
    question: `Jaké doklady potřebuji k žádosti v ${seed.name}?`,
    answer: `Standardem je občanský průkaz, potvrzení o příjmu a výpis z účtu. Podnikatelé v sektorech ${seed.focusSectors.join(', ')} dokládají účetní závěrky nebo daňové přiznání.`,
  },
  {
    question: `Je možné kombinovat půjčku s dotacemi v ${seed.name}?`,
    answer: `Ano, kraj podporuje energetické úspory i rozvoj turismu. Potřebujete rozhodnutí o dotaci a harmonogram čerpání, aby poskytovatel sladit splátky s dotací.`,
  },
  {
    question: `Jak rychle získám schválení úvěru na ${seed.loanUseCases[0]}?`,
    answer: `Banky rozhodují do dvou pracovních dnů po dodání všech podkladů. Nebankovní partneři reagují rychleji, ale vždy ověřují registry a DSTI limity.`,
  },
]

const buildRegulations = (seed: CitySeed) => {
  const regs = [...baseRegulations]
  regs.push(`Poskytovatelé v ${seed.name} zohledňují ${seed.highlight} a vyžadují dokumentaci k projektům v odvětví ${seed.focusSectors[0]}.`)
  regs.push(`Žadatelé financující ${seed.loanUseCases[0]} dodávají rozpočet a doklady o napojení na ${seed.infrastructure}.`)
  return regs.slice(0, 6)
}

const buildOfferHighlights = (seed: CitySeed) => [
  `Digitalizovaná žádost se zaměřením na ${seed.focusSectors[0]}.`,
  `Možnost kombinovat úvěr s krajskými programy pro ${seed.loanUseCases[0].split(' ')[0]}.`,
  `AI skóre zohledňuje profil žadatele: ${seed.borrowerProfile}.`,
]

const pilsenCityContentBase = citySeeds.map((seed, index) => {
  const slug = slugify(seed.name)
  const metaTitleTemplate = buildTitle(seed)
  const metaDescriptionTemplate = buildMetaDescription(seed)

  return {
    slug,
    name: seed.name,
    regionName: 'Plzeňský kraj',
    countryName: 'Česká republika',
    metaTitleTemplate,
    metaDescriptionTemplate,
    intro: buildIntro(seed),
    offer: {
      affiliate: 9400,
      campaign: slug,
      partnerName: 'Volsor Plzeňský',
      product: 'personal',
      theme: 'old_styled',
    },
    regulations: buildRegulations(seed),
    faq: buildFaq(seed),
    nearby: buildNearbySlugs(index, seed),
    disclosure: disclosureText,
    shortTitle: seed.shortTitle ?? seed.name,
    offerHighlights: buildOfferHighlights(seed),
    focusSectors: seed.focusSectors,
    loanUseCases: seed.loanUseCases,
    borrowerProfile: seed.borrowerProfile,
    amountRange: seed.amountRange,
    highlight: seed.highlight,
    infrastructure: seed.infrastructure,
  } satisfies PilsenCityContent
})

export const plzenskyCityContent: PilsenCityContent[] = pilsenCityContentBase

export const plzenskyCityMap: Record<string, PilsenCityContent> = plzenskyCityContent.reduce(
  (acc, city) => {
    acc[city.slug] = city
    return acc
  },
  {} as Record<string, PilsenCityContent>,
)

export const plzenskyCitySlugs = plzenskyCityContent.map((city) => city.slug)

export const getPlzenskyCity = (slug: string) => plzenskyCityMap[slug]

export const resolvePlzenskyMetadata = (slug: string, year: number = CURRENT_YEAR) => {
  const city = getPlzenskyCity(slug)
  if (!city) return null

  const title = city.metaTitleTemplate.replace('{{year}}', String(year))
  const description = city.metaDescriptionTemplate.replace('{{year}}', String(year))

  return {
    title,
    description,
    alternates: {
      canonical: `/cz/regions/plzensky/${slug}`,
    },
  }
}

export const plzenskyRegionContent: PilsenRegionContent = {
  name: 'Plzeňský kraj',
  slug: 'plzensky',
  heroTitle: 'Půjčky v Plzeňském kraji – licencované srovnání',
  heroSubtitle:
    'Metropole Plzeň, logistický koridor D5 a turistické Šumavské destinace vyžadují nabídky odpovídající průmyslovým firmám, lázeňství i přeshraničnímu obchodu. AI model sleduje sazby, dotace i dostupnost poboček.',
  overview:
    'Plzeňský kraj kombinuje silné strojírenství Škoda Group, logistiku na trase Praha–Německo, zemědělství Pošumaví a turistiku v Kašperských Horách či Železné Rudě. Domácnosti i podnikatelé financují modernizaci průmyslových parků u D5, rekonstrukce historického bydlení v centrech měst a rozšíření ubytování pro přeshraniční klientelu. Poskytovatelé proto požadují detailní rozpočty, prověřují cash flow v sezónních provozech a sledují dotační programy kraje. Loan AI Portál vyhodnocuje RPSN, celkové přeplacení i lokální dostupnost partnerů, aby doporučil průhledné licencované nabídky.',
  regulationSummary: [
    'ČNB vyžaduje úplné předsmluvní informace, reprezentativní příklad a označení rel="sponsored" u komerčních nabídek.',
    'Region preferuje kombinaci úvěrů s programy RE:START, OP TAK a dotacemi pro energetické úspory a rekonstrukce.',
    'Půjčky na průmyslové projekty vyžadují doložení stavebních povolení a ESG reportingu u větších zaměstnavatelů.',
    'Financování turistických zařízení v Šumavě zohledňuje sezónní příjmy a rezervu minimálně ve výši tří splátek.',
    'Přeshraniční projekty s Německem musí pracovat s doložkou o směnných kurzech a ochraně spotřebitele dle EU.',
  ],
  regulatorLinks: [
    {
      label: 'ČNB – registr poskytovatelů úvěrů',
      href: 'https://apl.cnb.cz/apljerrsdad/JERRS.WEB07.INTRO?p_lang=cz',
      description: 'Ověřte licence bank, družstevních záložen i nebankovních poskytovatelů před podpisem smlouvy.',
    },
    {
      label: 'Plzeňský kraj – dotační a grantové programy',
      href: 'https://www.plzensky-kraj.cz/',
      description: 'Aktuální výzvy pro energetické úspory, turismus a podporu průmyslu na trase D5.',
    },
    {
      label: 'Dluhová poradna Člověk v tísni – Plzeň',
      href: 'https://www.clovekvtisni.cz/poradenstvi',
      description: 'Bezplatná pomoc s konsolidacemi, oddlužením a řešením platební neschopnosti v regionu.',
    },
  ],
  featuredLenders: [
    {
      name: 'Česká spořitelna – region Plzeň',
      licenseId: 'Bankovní licence ČNB',
      description: 'Spotřebitelské úvěry, rekonstrukce a green půjčky s možností odkladu splátek při poklesu příjmů.',
      website: 'https://www.csas.cz/',
    },
    {
      name: 'Komerční banka',
      licenseId: 'Bankovní licence ČNB',
      description: 'Investiční úvěry pro výrobní podniky, kontokorenty pro logistiku a financování developerských projektů.',
      website: 'https://www.kb.cz/',
    },
    {
      name: 'Hello bank!',
      licenseId: 'Bankovní licence ČNB',
      description: 'Specialista na konsolidace a spotřebitelské úvěry s online schválením pro zaměstnance průmyslových zón.',
      website: 'https://www.hellobank.cz/',
    },
  ],
  topCities: [
    { name: 'Plzeň', slug: 'plzen', focus: 'Metropole regionu, strojírenství a IT projekty.' },
    { name: 'Rokycany', slug: 'rokycany', focus: 'Automotive logistická zóna u D5.' },
    { name: 'Klatovy', slug: 'klatovy', focus: 'Zdravotnictví a průmysl Pošumaví.' },
    { name: 'Tachov', slug: 'tachov', focus: 'Přeshraniční průmyslové parky.' },
    { name: 'Domažlice', slug: 'domazlice', focus: 'Logistika na hranici s Bavorskem.' },
    { name: 'Sušice', slug: 'susice', focus: 'Turistika a sklářství v podhůří Šumavy.' },
  ],
  blogTeasers: [
    {
      title: 'Jak financovat projekty u dálnice D5',
      excerpt: 'Tipy pro průmyslové parky v Plzni, Nýřanech a Stříbře včetně ESG reportingu.',
      href: '/blog/pilsen-d5-logistics-financing',
    },
    {
      title: 'Turistické úvěry pro Šumavu a Český les',
      excerpt: 'Jak kombinovat bankovní úvěr s dotacemi pro ubytování v Kašperských Horách a Železné Rudě.',
      href: '/blog/sumava-tourism-loans',
    },
    {
      title: 'Energetické úspory v průmyslových halách',
      excerpt: 'AI doporučení pro firmy v Plzni, Holýšově a Rokycanech, které chtějí snížit náklady na energie.',
      href: '/blog/pilsen-industrial-energy-upgrades',
    },
  ],
}
