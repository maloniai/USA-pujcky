import { slugify } from '@/lib/slugify'

export interface SouthBohemianRegionContent {
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

export interface SouthBohemianCityContent {
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
  'Poskytovatelé musí mít platnou licenci ČNB a poskytovat předsmluvní informace v češtině.',
  'Kraj podporuje energetické úspory a adaptaci na vodní hospodářství v rámci programů OPŽP a Jihočeských dotací.',
  'Limity DTI 8,5 a DSTI 45 % platí pro většinu žadatelů, mladí do 36 let mají zvýhodněné hranice.',
  'Smlouvy musí být přístupné online minimálně 48 hodin před podpisem a obsahovat reprezentativní příklad.',
  'U rekreačních objektů se vyžaduje doložení vlastnických práv a pojištění majetku proti živelným škodám.',
]

const disclosureText = {
  affiliate:
    'Stránka obsahuje sponzorované nabídky licencovaných poskytovatelů. Provize neovlivňuje skóre AI, které řadí možnosti podle celkových nákladů a transparentnosti smluv.',
  example:
    'Reprezentativní příklad: Půjčka 280 000 Kč na 72 měsíců, pevná sazba 10,9 % p.a., RPSN 12,4 %, měsíční splátka 5 364 Kč, celkem zaplatíte 386 208 Kč. Konkrétní parametry stanoví poskytovatel dle bonity.',
}

const citySeeds: CitySeed[] = [
  {
    name: 'Bavorov',
    focusSectors: ['ovocnářství', 'lokální služby'],
    loanUseCases: ['modernizaci sušáren ovoce', 'revitalizaci rodinných domů'],
    borrowerProfile: 'zemědělci a rodiny napojené na zpracování ovoce v údolí Blanice',
    amountRange: '70 000–480 000 Kč',
    highlight: 'tradice sadů a zpracování sušeného ovoce',
    infrastructure: 'silnice II/141 směrem na Prachatice a Strakonice',
    nearby: ['vodnany', 'prachatice', 'vimperk'],
  },
  {
    name: 'Bechyně',
    focusSectors: ['keramika', 'lázeňství'],
    loanUseCases: ['modernizaci lázeňských penzionů', 'pořízení keramiky do výrobních dílen'],
    borrowerProfile: 'lázeňští hostitelé a keramické dílny napojené na turistický ruch Lužnice',
    amountRange: '90 000–620 000 Kč',
    highlight: 'lázeňský provoz a keramická tradice',
    infrastructure: 'železniční trať Tábor–Bechyně a most Duha',
  nearby: ['tabor', 'sezimovo-usti', 'plana-nad-luznici'],
  },
  {
    name: 'Bělčice',
    focusSectors: ['zemědělství', 'remesla'],
    loanUseCases: ['obměnu zemědělské techniky', 'rekonstrukci rodinných usedlostí'],
    borrowerProfile: 'rodinné farmy a drobné dílny na hranici Strakonicka a Písecka',
    amountRange: '65 000–420 000 Kč',
    highlight: 'zemědělská výroba a malé dřevozpracující provozy',
    infrastructure: 'silnice II/173 s návazností na Blatnou a Strakonice',
    nearby: ['blatna', 'strakonice', 'mirotice'],
  },
  {
    name: 'Blatná',
    focusSectors: ['potravinářství', 'rybníkářství'],
    loanUseCases: ['modernizaci pivovaru a nápojových linek', 'rekonstrukci historických domků'],
    borrowerProfile: 'pracovníci nápojového průmyslu a rybniční správy Lnáře',
    amountRange: '100 000–720 000 Kč',
    highlight: 'pivovarská tradice a rybniční hospodářství',
    infrastructure: 'železnice do Strakonic a Písku, silnice II/173',
    nearby: ['belcice', 'mirotice', 'strakonice'],
  },
  {
    name: 'Borovany',
    focusSectors: ['sklářství', 'fotovoltaika'],
    loanUseCases: ['rozšíření solárních parků', 'modernizaci sklářských provozů'],
    borrowerProfile: 'zaměstnanci v průmyslové zóně Jílovice a provozovatelé FVE',
    amountRange: '110 000–780 000 Kč',
    highlight: 'průmyslový park a obnovitelné zdroje',
    infrastructure: 'silnice I/34 na Třeboň a České Budějovice',
    nearby: ['ceske-budejovice', 'trhove-sviny', 'trebon'],
  },
  {
    name: 'České Budějovice',
    focusSectors: ['strojírenství', 'IT služby'],
    loanUseCases: ['konsolidaci městských hypoték', 'expanzi technologických center'],
    borrowerProfile: 'zaměstnanci krajských institucí, univerzit a technologického parku',
    amountRange: '150 000–950 000 Kč',
    highlight: 'hlavní město regionu s napojením na průmyslové a IT projekty',
    infrastructure: 'dálnice D3, letiště Planá a železniční koridor Praha–Linec',
    nearby: ['hluboka-nad-vltavou', 'zliv', 'trhove-sviny'],
  },
  {
    name: 'České Velenice',
    focusSectors: ['železniční logistika', 'přeshraniční obchod'],
    loanUseCases: ['modernizaci spedičních služeb', 'revitalizaci bytů pro přeshraniční pracovníky'],
    borrowerProfile: 'logistické firmy a domácnosti dojíždějící do Gmündu',
    amountRange: '95 000–640 000 Kč',
    highlight: 'přeshraniční železniční uzel a služby pro cestující',
    infrastructure: 'železniční terminál ČR–Rakousko, silnice na Třeboň',
    nearby: ['suchdol-nad-luznici', 'trebon', 'vyssi-brod'],
  },
  {
    name: 'Český Krumlov',
    focusSectors: ['turismus UNESCO', 'kreativní průmysly'],
    loanUseCases: ['rekonstrukci penzionů', 'financování kulturních projektů'],
    borrowerProfile: 'majitelé ubytování a průvodci v historickém centru',
    amountRange: '140 000–900 000 Kč',
    highlight: 'UNESCO destinace s vysokou návštěvností',
    infrastructure: 'silnice I/39 a cyklostezky podél Vltavy',
    nearby: ['vyssi-brod', 'rozmberk-nad-vltavou', 'kaplice'],
  },
  {
    name: 'Dačice',
    focusSectors: ['dřevozpracující průmysl', 'potravinářství'],
    loanUseCases: ['modernizaci výrobních linek', 'rekonstrukci bydlení pro zaměstnance'],
    borrowerProfile: 'pracovníci v závodech Kostelecké uzeniny a dřevozpracující firmy',
    amountRange: '110 000–760 000 Kč',
    highlight: 'cross-border logistika směrem na Rakousko',
    infrastructure: 'silnice I/23 na Jindřichův Hradec a Znojmo',
    nearby: ['jindrichuv-hradec', 'slavonice', 'nova-bystrice'],
  },
  {
    name: 'Deštná',
    focusSectors: ['zemědělství', 'řemesla'],
    loanUseCases: ['modernizaci muzeí a řemeslných dílen', 'zateplení rodinných domů'],
    borrowerProfile: 'drobní podnikatelé a rodiny mezi Jindřichovým Hradcem a Táborem',
    amountRange: '60 000–420 000 Kč',
    highlight: 'muzeum řemesel a rybářských tradic',
    infrastructure: 'silnice II/135 na Soběslav a Kardašovu Řečici',
    nearby: ['sobeslav', 'kardasova-recice', 'tabor'],
  },
  {
    name: 'Hluboká nad Vltavou',
    focusSectors: ['turismus', 'sportovní areály'],
    loanUseCases: ['expanzi golfových resortů', 'modernizaci hotelových kapacit'],
    borrowerProfile: 'investoři do sportovního turismu a rodiny žijící v suburbii Budějovic',
    amountRange: '130 000–880 000 Kč',
    highlight: 'zámek Hluboká a rekreační zázemí',
    infrastructure: 'dálnice D3 a cyklostezka podél Vltavy',
    nearby: ['ceske-budejovice', 'zliv', 'tyn-nad-vltavou'],
  },
  {
    name: 'Horní Planá',
    focusSectors: ['rekreace Lipno', 'lesnictví'],
    loanUseCases: ['rozšíření kempů u Lipna', 'pořízení lesní techniky'],
    borrowerProfile: 'podnikatelé v turistice okolo Lipna a lesní společnosti',
    amountRange: '90 000–620 000 Kč',
    highlight: 'příhraniční rekreační oblast Lipno',
    infrastructure: 'silnice I/39 a cyklostezky kolem přehrady',
    nearby: ['vyssi-brod', 'volary', 'cesky-krumlov'],
  },
  {
    name: 'Husinec',
    focusSectors: ['energetika', 'historický turismus'],
    loanUseCases: ['rekonstrukci domů v historickém centru', 'modernizaci malých vodních elektráren'],
    borrowerProfile: 'domácnosti napojené na rekreační ruch kolem přehrady Husinec',
    amountRange: '70 000–450 000 Kč',
    highlight: 'rodné město Jana Husa a přehrada pro energetiku',
    infrastructure: 'silnice II/141 a železnice Strakonice–Volary',
    nearby: ['prachatice', 'vodnany', 'vimperk'],
  },
  {
    name: 'Chýnov',
    focusSectors: ['stavebnictví', 'dřevozpracování'],
    loanUseCases: ['pořízení CNC strojů', 'konsolidaci úvěrů pro stavební firmy'],
    borrowerProfile: 'stavební podnikatelé napojení na Táborsko a Pelhřimovsko',
    amountRange: '95 000–640 000 Kč',
    highlight: 'podzemní jeskyně a kamenické dílny',
    infrastructure: 'silnice I/19 na Tábor a Pelhřimov',
    nearby: ['tabor', 'mlada-vozice', 'jistebnice'],
  },
  {
    name: 'Jindřichův Hradec',
    focusSectors: ['textilní průmysl', 'administrativa'],
    loanUseCases: ['modernizaci kanceláří a coworkingu', 'rekonstrukci historických domů'],
    borrowerProfile: 'zaměstnanci krajských institucí a podniků v zóně Jitka',
    amountRange: '140 000–880 000 Kč',
    highlight: 'administrativní centrum Třeboňska a textilní výroba',
    infrastructure: 'silnice I/34, železnice Tábor–Jihlava, letiště v Henčově',
    nearby: ['kardasova-recice', 'nova-vcelnice', 'trebon'],
  },
  {
    name: 'Jistebnice',
    focusSectors: ['zemědělství', 'venkovský turismus'],
    loanUseCases: ['přestavbu farem na agroturistiku', 'zateplení rodinných domů'],
    borrowerProfile: 'rodiny mezi Táborem a Sedleckem u ČB',
    amountRange: '65 000–430 000 Kč',
    highlight: 'poutní tradice a okolní šumavská předhůří',
    infrastructure: 'silnice II/121 na Tábor a Sedlec-Prčice',
    nearby: ['tabor', 'mlada-vozice', 'bechyne'],
  },
  {
    name: 'Kaplice',
    focusSectors: ['automotive', 'logistika'],
    loanUseCases: ['rozšíření výrobních hal', 'rekonstrukci bytů pro přeshraniční pracovníky'],
    borrowerProfile: 'zaměstnanci zón Dolní Dvořiště a průmyslového parku Kaplice',
    amountRange: '120 000–840 000 Kč',
    highlight: 'přeshraniční logistika a zásobování Rakouska',
    infrastructure: 'silnice E55 na Linec a dálnici A7',
    nearby: ['cesky-krumlov', 'vyssi-brod', 'rozmberk-nad-vltavou'],
  },
  {
    name: 'Kardašova Řečice',
    shortTitle: 'Kardašova Řečice',
    focusSectors: ['potravinářství', 'dřevařství'],
    loanUseCases: ['modernizaci výroby masných produktů', 'pořízení lesní techniky'],
    borrowerProfile: 'pracovníci průmyslového parku Kardašova Řečice a okolních pil',
    amountRange: '90 000–620 000 Kč',
    highlight: 'masozávod a navazující logistika',
    infrastructure: 'silnice I/23 mezi Táborem a Jindřichovým Hradcem',
    nearby: ['jindrichuv-hradec', 'nova-vcelnice', 'sobeslav'],
  },
  {
    name: 'Lišov',
    focusSectors: ['logistika', 'sklářství'],
    loanUseCases: ['skladovací projekty podél I/34', 'modernizaci sklářských dílen'],
    borrowerProfile: 'logistické firmy a rodiny dojíždějící do Českých Budějovic',
    amountRange: '85 000–560 000 Kč',
    highlight: 'logistický koridor mezi Budějovicemi a Třeboní',
    infrastructure: 'silnice I/34 a plánový obchvat D3',
    nearby: ['ceske-budejovice', 'trebon', 'zliv'],
  },
  {
    name: 'Lomnice nad Lužnicí',
    focusSectors: ['rybníkářství', 'lázeňství'],
    loanUseCases: ['obnovu rybničních hrází', 'výstavbu rodinných penzionů'],
    borrowerProfile: 'rybniční společnosti a rodiny využívající CHKO Třeboňsko',
    amountRange: '90 000–600 000 Kč',
    highlight: 'rybniční soustavy Rožmberk a Svět',
    infrastructure: 'silnice II/147 a železnice na Veselí nad Lužnicí',
    nearby: ['trebon', 'veseli-nad-luznici', 'suchdol-nad-luznici'],
  },
  {
    name: 'Milevsko',
    focusSectors: ['strojírenství', 'energetika'],
    loanUseCases: ['rozšíření výroby ocelových konstrukcí', 'zateplení panelových domů'],
    borrowerProfile: 'zaměstnanci průmyslového areálu ZVVZ a domácnosti na Písecku',
    amountRange: '120 000–820 000 Kč',
    highlight: 'energetické technologie a průmyslové haly',
    infrastructure: 'silnice I/19 a železnice Písek–Tábor',
  nearby: ['pisek', 'tabor', 'plana-nad-luznici'],
  },
  {
    name: 'Mirotice',
    focusSectors: ['dřevo', 'turistika na Otavě'],
    loanUseCases: ['rekonstrukci nábřežních penzionů', 'pořízení pil pro menší dílny'],
    borrowerProfile: 'rodiny napojené na cestovní ruch podél Otavy',
    amountRange: '70 000–480 000 Kč',
    highlight: 'umělecké tradice a blízkost dálnice D4',
    infrastructure: 'dálnice D4 a železnice na Písek',
    nearby: ['mirovice', 'pisek', 'protivin'],
  },
  {
    name: 'Mirovice',
    focusSectors: ['zemědělství', 'automotive služby'],
    loanUseCases: ['obměnu zemědělských strojů', 'rozšíření servisů pro dopravu'],
    borrowerProfile: 'farmy a servisní firmy na rozhraní Příbramska a Písecka',
    amountRange: '75 000–510 000 Kč',
    highlight: 'silná vazba na dálnici D4 a logistiku',
    infrastructure: 'dálnice D4 a silnice II/121',
    nearby: ['mirotice', 'pisek', 'belcice'],
  },
  {
    name: 'Mladá Vožice',
    focusSectors: ['masný průmysl', 'zemědělství'],
    loanUseCases: ['modernizaci jatek LE & CO', 'konsolidaci podnikatelských úvěrů'],
    borrowerProfile: 'zaměstnanci masného průmyslu a farmy v Podblansku',
    amountRange: '95 000–650 000 Kč',
    highlight: 'potravinářská výroba s exportem do celé ČR',
    infrastructure: 'silnice I/19 a blízkost D3 u Tábora',
  nearby: ['tabor', 'chynov', 'mlada-vozice'],
  },
  {
    name: 'Netolice',
    focusSectors: ['rybníkářství', 'kulturu'],
    loanUseCases: ['restauraci zámku Kratochvíle', 'modernizaci zemědělských provozů'],
    borrowerProfile: 'rybníkáři a kulturní instituce napojené na zámek',
    amountRange: '80 000–520 000 Kč',
    highlight: 'UNESCO památka a rybniční sítě na Prachaticku',
    infrastructure: 'silnice II/141 na Prachatice a České Budějovice',
    nearby: ['vodnany', 'prachatice', 'ceske-budejovice'],
  },
  {
    name: 'Nová Bystřice',
    focusSectors: ['strojírenství', 'golfový turismus'],
    loanUseCases: ['rozšíření průmyslové zóny Lada', 'financování rekreačních areálů'],
    borrowerProfile: 'podnikatelé na hranicích s Rakouskem a provozovatelé golf resortu Monachus',
    amountRange: '100 000–680 000 Kč',
    highlight: 'přeshraniční logistika s napojením na Waldviertel',
    infrastructure: 'silnice I/128 a muzeum úzkokolejky',
    nearby: ['nova-vcelnice', 'slavonice', 'dacice'],
  },
  {
    name: 'Nová Včelnice',
    focusSectors: ['plastový průmysl', 'logistika'],
    loanUseCases: ['modernizaci výroby plastových dílů', 'pořízení skladových technologií'],
    borrowerProfile: 'zaměstnanci firem na průmyslové zóně Nová Včelnice',
    amountRange: '95 000–620 000 Kč',
    highlight: 'výroba komponentů pro automotive a elektro',
    infrastructure: 'železnice na Jindřichův Hradec a Počátky',
    nearby: ['jindrichuv-hradec', 'nova-bystrice', 'kardasova-recice'],
  },
  {
    name: 'Nové Hrady',
    focusSectors: ['věda a výzkum', 'turismus Novohradských hor'],
    loanUseCases: ['podporu vědeckých pobytů na BioCentru', 'rekonstrukci penzionů'],
    borrowerProfile: 'výzkumné instituce, grantové projekty a turismus v Novohradských horách',
    amountRange: '110 000–700 000 Kč',
    highlight: 'vědecké centrum Akademie věd a hraniční turistika',
    infrastructure: 'silnice II/156 na České Budějovice a rakouský Freistadt',
    nearby: ['trhove-sviny', 'kaplice', 'suchdol-nad-luznici'],
  },
  {
    name: 'Písek',
    focusSectors: ['stavebnictví', 'elektromobilita'],
    loanUseCases: ['rekonstrukci historických domů', 'pilotní projekty smart city'],
    borrowerProfile: 'inženýři z průmyslové zóny sever a start-upy z Písek Smart City Lab',
    amountRange: '140 000–900 000 Kč',
    highlight: 'smart city projekty a silná průmyslová základna',
    infrastructure: 'dálnice D4, železnice Praha–České Budějovice',
    nearby: ['protivin', 'milevsko', 'strakonice'],
  },
  {
    name: 'Planá nad Lužnicí',
    focusSectors: ['chemie', 'logistika'],
    loanUseCases: ['modernizaci závodu Madeta a Silon', 'rozšíření skladových hal'],
    borrowerProfile: 'zaměstnanci chemických provozů a logistických centrál na D3',
    amountRange: '110 000–780 000 Kč',
    highlight: 'chemický průmysl a přímé napojení na D3',
    infrastructure: 'dálnice D3 a železnice Tábor–České Budějovice',
    nearby: ['sezimovo-usti', 'tabor', 'sobeslav'],
  },
  {
    name: 'Prachatice',
    focusSectors: ['zdravotnictví', 'dřevozpracování'],
    loanUseCases: ['modernizaci nemocnice Prachatice', 'pořízení strojů pro pilařské firmy'],
    borrowerProfile: 'zdravotní personál, dřevařské podniky a rodiny v podhůří Šumavy',
    amountRange: '120 000–820 000 Kč',
    highlight: 'zdravotnické služby pro Šumavu a dřevozpracující závody',
    infrastructure: 'silnice I/4 a železnice Volary–České Budějovice',
    nearby: ['vimperk', 'vodnany', 'bavorov'],
  },
  {
    name: 'Protivín',
    focusSectors: ['pivovarnictví', 'akvakultura'],
    loanUseCases: ['rekonstrukci pivovaru', 'rozvoj aquaparku a krokodýlí ZOO'],
    borrowerProfile: 'zaměstnanci pivovaru a vodohospodářských podniků',
    amountRange: '90 000–600 000 Kč',
    highlight: 'Protivínský pivovar a zoologická expozice',
    infrastructure: 'silnice I/20 na Písek a České Budějovice',
    nearby: ['pisek', 'vodnany', 'tyn-nad-vltavou'],
  },
  {
    name: 'Rožmberk nad Vltavou',
    focusSectors: ['turistika', 'vodáctví'],
    loanUseCases: ['modernizaci penzionů pro vodáky', 'rekonstrukci historických objektů'],
    borrowerProfile: 'majitelé ubytování a služby pro vodáckou sezónu',
    amountRange: '80 000–520 000 Kč',
    highlight: 'hrad Rožmberk a vodácké centrum Vltavy',
    infrastructure: 'silnice II/161 a vodácké přístavy',
  nearby: ['vyssi-brod', 'cesky-krumlov', 'horni-plana'],
  },
  {
    name: 'Rudolfov',
    focusSectors: ['hornictví', 'IT služby'],
    loanUseCases: ['rekonstrukci bytů pro IT specialisty', 'revitalizaci hornických památek'],
    borrowerProfile: 'domácnosti dojíždějící do budějovického IT centra a průmyslu',
    amountRange: '85 000–580 000 Kč',
    highlight: 'městská čtvrť napojená na bývalé stříbrné doly a současné IT',
    infrastructure: 'blízkost D3, MHD do Českých Budějovic',
    nearby: ['ceske-budejovice', 'lisov', 'hluboka-nad-vltavou'],
  },
  {
    name: 'Sezimovo Ústí',
    shortTitle: 'Sezimovo Ústí',
    focusSectors: ['průmysl', 'stavebniny'],
    loanUseCases: ['modernizaci závodu Kovosvit', 'výstavbu zaměstnaneckého bydlení'],
    borrowerProfile: 'pracovníci průmyslových závodů a navázané služby',
    amountRange: '110 000–760 000 Kč',
    highlight: 'průmyslová zóna s automobilovým a strojírenským programem',
    infrastructure: 'dálnice D3 a železniční koridor Praha–Tábor',
  nearby: ['tabor', 'plana-nad-luznici', 'sobeslav'],
  },
  {
    name: 'Slavonice',
    focusSectors: ['turistika', 'kreativní průmysl'],
    loanUseCases: ['rekonstrukci renesančních domů', 'podporu festivalů na hranici s Rakouskem'],
    borrowerProfile: 'kreativní podnikatelé a rodiny využívající přeshraniční spolupráci',
    amountRange: '80 000–540 000 Kč',
    highlight: 'renesanční památková rezervace a festival architektury',
    infrastructure: 'silnice II/409 a cyklotrasy na Rakousko',
    nearby: ['dacice', 'nova-bystrice', 'strmilov'],
  },
  {
    name: 'Soběslav',
    focusSectors: ['doprava', 'logistika'],
    loanUseCases: ['expanzi skladů u D3', 'rekonstrukci bytů pro zaměstnance'],
    borrowerProfile: 'logistické firmy a domácnosti v souměstí s Veselím nad Lužnicí',
    amountRange: '100 000–720 000 Kč',
    highlight: 'dopravní uzel na D3 a železniční křížení',
    infrastructure: 'dálnice D3 a železnice Praha–Linec',
  nearby: ['veseli-nad-luznici', 'plana-nad-luznici', 'tabor'],
  },
  {
    name: 'Strakonice',
    focusSectors: ['strojírenství', 'zdravotnictví'],
    loanUseCases: ['modernizaci fezy', 'rozšíření nemocničních služeb'],
    borrowerProfile: 'pracovníci závodů ČZ a zdravotníci z okresního centra',
    amountRange: '130 000–840 000 Kč',
    highlight: 'průmyslové firmy a nemocnice Strakonice',
    infrastructure: 'silnice I/4 a I/22, železnice Písek–Klatovy',
    nearby: ['pisek', 'vodnany', 'prachatice'],
  },
  {
    name: 'Strmilov',
    focusSectors: ['textil', 'dřevařství'],
    loanUseCases: ['modernizaci tkalcovských provozů', 'pořízení sušáren dřeva'],
    borrowerProfile: 'rodinné firmy mezi Jindřichovým Hradcem a Vysočinou',
    amountRange: '70 000–480 000 Kč',
    highlight: 'tradiční textil a zakázkové truhlářství',
    infrastructure: 'silnice II/409 a II/134',
    nearby: ['nova-bystrice', 'jindrichuv-hradec', 'slavonice'],
  },
  {
    name: 'Suchdol nad Lužnicí',
    focusSectors: ['rybníkářství', 'logistika'],
    loanUseCases: ['modernizaci chovu ryb na Třeboňsku', 'rozšíření skladů podél hranice'],
    borrowerProfile: 'rybniční podniky a logistika napojená na Rakousko',
    amountRange: '85 000–560 000 Kč',
    highlight: 'rybníky Třeboňska a přechod Halámky',
    infrastructure: 'silnice I/24 a železnice Veselí nad Lužnicí – Gmünd',
    nearby: ['trebon', 'ceske-velenice', 'veseli-nad-luznici'],
  },
  {
    name: 'Tábor',
    focusSectors: ['strojírenství', 'IT'],
    loanUseCases: ['podporu startupů v technologickém centru', 'modernizaci bytového fondu'],
    borrowerProfile: 'inženýři, IT specialisté a pedagogové z univerzitních pracovišť',
    amountRange: '150 000–920 000 Kč',
    highlight: 'technologická centra a silný strojírenský klastr',
    infrastructure: 'dálnice D3, železnice Praha–České Budějovice',
  nearby: ['sezimovo-usti', 'plana-nad-luznici', 'mlada-vozice'],
  },
  {
    name: 'Týn nad Vltavou',
    focusSectors: ['energetika', 'vodní doprava'],
    loanUseCases: ['modernizaci přístaviště', 'projekty pro zaměstnance JE Temelín'],
    borrowerProfile: 'energetici a logistické firmy u Vltavy',
    amountRange: '110 000–750 000 Kč',
    highlight: 'blízkost jaderné elektrárny Temelín a přístavu Kořensko',
    infrastructure: 'silnice II/105 a vodní cesta Vltava',
    nearby: ['tyn-nad-vltavou', 'hluboka-nad-vltavou', 'protivin'],
  },
  {
    name: 'Trhové Sviny',
    focusSectors: ['elektro', 'stavebnictví'],
    loanUseCases: ['výstavbu rodinných domů pro budějovickou aglomeraci', 'pořízení strojů pro elektro firmy'],
    borrowerProfile: 'domácnosti a firmy napojené na průmyslový prstenec Českých Budějovic',
    amountRange: '95 000–620 000 Kč',
    highlight: 'pruřez elektro a stavebních subdodavatelů',
    infrastructure: 'silnice II/156 na Nové Hrady a České Budějovice',
    nearby: ['ceske-budejovice', 'nove-hrady', 'borovany'],
  },
  {
    name: 'Třeboň',
    focusSectors: ['lázeňství', 'rybníkářství'],
    loanUseCases: ['rozšíření lázní Aurora', 'modernizaci sádek a wellness'],
    borrowerProfile: 'lázeňští provozovatelé a Rybářství Třeboň',
    amountRange: '120 000–820 000 Kč',
    highlight: 'lázně světové úrovně a rybniční hospodářství',
    infrastructure: 'železnice Veselí nad Lužnicí – České Velenice, cyklostezky',
    nearby: ['lomnice-nad-luznici', 'suchdol-nad-luznici', 'trebon'],
  },
  {
    name: 'Veselí nad Lužnicí',
    focusSectors: ['logistika', 'chemie'],
    loanUseCases: ['pořízení dopravní techniky', 'modernizaci chemických provozů'],
    borrowerProfile: 'dopravní společnosti a chemický průmysl navázaný na Madetu',
    amountRange: '105 000–680 000 Kč',
    highlight: 'logistické sklady a chemický průmysl',
    infrastructure: 'křížení železnic Praha–Linec a Plzeň–Brno, dálnice D3',
  nearby: ['sobeslav', 'plana-nad-luznici', 'suchdol-nad-luznici'],
  },
  {
    name: 'Vlachovo Březí',
    focusSectors: ['zemědělství', 'potravinářství'],
    loanUseCases: ['modernizaci mlékárny', 'zateplení historických statků'],
    borrowerProfile: 'zemědělci a pracovníci mlékárny',
    amountRange: '70 000–460 000 Kč',
    highlight: 'mlékárna a zemědělské družstvo',
    infrastructure: 'silnice II/141 a návaznost na Prachatice',
    nearby: ['prachatice', 'bavorov', 'vimperk'],
  },
  {
    name: 'Vimperk',
    focusSectors: ['sklářství', 'cestovní ruch'],
    loanUseCases: ['modernizaci sklářských provozů', 'revitalizaci penzionů v Šumavě'],
    borrowerProfile: 'firmy Zapf, Roháč a rodiny obsluhující Šumavu',
    amountRange: '110 000–780 000 Kč',
    highlight: 'sklářská výroba a vstupní brána do NP Šumava',
    infrastructure: 'silnice I/4 a železnice Strakonice–Volary',
    nearby: ['prachatice', 'bavorov', 'volary'],
  },
  {
    name: 'Vodňany',
    focusSectors: ['akvakultura', 'strojírenství'],
    loanUseCases: ['výzkum rybářství na univerzitním centru', 'modernizaci výroby zemědělských strojů'],
    borrowerProfile: 'studující a pracovníci Jihočeské univerzity a firmy ZVVZ',
    amountRange: '95 000–620 000 Kč',
    highlight: 'fakulta rybářství a vodních věd a průmyslové podniky',
    infrastructure: 'silnice I/20 a železnice na Písek',
    nearby: ['pisek', 'protivin', 'bavorov'],
  },
  {
    name: 'Volary',
    focusSectors: ['turistika', 'dřevařství'],
    loanUseCases: ['přestavbu roubených domů', 'pořízení strojů pro pilnice'],
    borrowerProfile: 'Šumavské penziony a dřevozpracující firmy',
    amountRange: '80 000–540 000 Kč',
    highlight: 'roubená architektura a turistika v Bavorském lese',
    infrastructure: 'železnice Volary–České Budějovice a napojení na Německo',
  nearby: ['vimperk', 'horni-plana', 'prachatice'],
  },
  {
    name: 'Vyšší Brod',
    focusSectors: ['turistika', 'logistika'],
    loanUseCases: ['rozšíření vodáckých center', 'modernizaci přechodu Studánky'],
    borrowerProfile: 'vodácké firmy a logistika na hranici s Horním Rakouskem',
    amountRange: '90 000–620 000 Kč',
    highlight: 'cisterciácký klášter a vodácké centrum',
    infrastructure: 'silnice I/163 a železnice na Linec',
    nearby: ['cesky-krumlov', 'rozmberk-nad-vltavou', 'kaplice'],
  },
  {
    name: 'Zliv',
    focusSectors: ['logistika', 'průmysl'],
    loanUseCases: ['rozšíření skladů pro České Budějovice', 'modernizaci bytů v suburbii'],
    borrowerProfile: 'rodiny a logistické firmy navázané na budějovickou aglomeraci',
    amountRange: '85 000–560 000 Kč',
    highlight: 'železniční uzel a průmyslové zázemí Hluboké nad Vltavou',
    infrastructure: 'železnice na České Budějovice a Týn nad Vltavou, silnice II/105',
    nearby: ['ceske-budejovice', 'hluboka-nad-vltavou', 'tyn-nad-vltavou'],
  },
]

const buildTitle = (seed: CitySeed) => {
  const displayName = seed.shortTitle ?? seed.name
  return `Půjčky v ${displayName}, Jihočeský kraj – Srovnání {{year}}`
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
    `${seed.name} v Jihočeském kraji spojuje ${seed.focusSectors.join(' a ')} a silné vazby na příhraniční ekonomiku.`,
    `Domácnosti i podnikatelé zde financují ${seed.loanUseCases.join(' a ')}, využívají elektronické podpisy a rychlé předschválení.`,
    `Poskytovatelé prověřují ${seed.borrowerProfile}, kontrolují registry BRKI a NRKI a sledují sezónní výkyvy příjmů.`,
    `Typické částky se pohybují kolem ${seed.amountRange}, splatnost 24–96 měsíců a banky doporučují kalkulaci rozpočtu včetně pojištění schopnosti splácet.`,
    `Loan AI Portál zohledňuje ${seed.highlight}, hodnotí infrastrukturu (${seed.infrastructure}) a doporučí licencované nabídky s transparentní RPSN a možností mimořádných splátek.`,
  ]

  return sentences.join(' ')
}

const buildMetaDescription = (seed: CitySeed) => {
  const description = `Srovnejte licencované půjčky v ${seed.name} pro {{year}}. AI průvodce prověří RPSN, registry a podpoří potřeby ${seed.focusSectors[0]}. Online žádost během pár minut.`
  return description.length > 155 ? description.slice(0, 155) : description
}

const buildFaq = (seed: CitySeed): { question: string; answer: string }[] => [
  {
    question: `Jaké dokumenty potřebuji pro financování v ${seed.name}?`,
    answer: `Standardem je občanský průkaz, potvrzení o příjmu a výpis z účtu. Podnikatelé z oblastí ${seed.focusSectors.join(', ')} doplňují daňové přiznání a smlouvy s odběrateli.`,
  },
  {
    question: `Je možné kombinovat úvěr s dotacemi v ${seed.name}?`,
    answer: `Ano, Jihočeský kraj podporuje projekty přes programy Nová zelená úsporám i krajské granty. Poskytovatelé vyžadují rozhodnutí o přiznání dotace a harmonogram čerpání.`,
  },
  {
    question: `Jak rychle proběhne schválení půjčky na ${seed.loanUseCases[0]}?`,
    answer: `Licencované banky rozhodují zpravidla do dvou pracovních dnů, pokud jsou dodány všechny podklady. Nebankovní partneři mohou jednat rychleji, stále však ověřují registry a schopnost splácet.`,
  },
]

const buildRegulations = (seed: CitySeed) => {
  const regs = [...baseRegulations]
  regs.push(`Poskytovatelé v ${seed.name} sledují ${seed.highlight} a vyžadují dokumentaci k projektům v oblasti ${seed.focusSectors[0]}.`)
  regs.push(`Žadatelé financující ${seed.loanUseCases[0]} dokládají také infrastrukturu a napojení na ${seed.infrastructure}.`)
  return regs.slice(0, 6)
}

const buildOfferHighlights = (seed: CitySeed) => [
  `Digitalizovaná žádost pro žadatele se zaměřením na ${seed.focusSectors[0]}.`,
  `Možnost kombinovat úvěr s granty a programy zaměřenými na ${seed.loanUseCases[0].split(' ')[0]}.`,
  `AI skóre hodnotí rozpočty domácností s profilem: ${seed.borrowerProfile}.`,
]

const southBohemianCityContentBase = citySeeds.map((seed, index) => {
  const slug = slugify(seed.name)
  const metaTitleTemplate = buildTitle(seed)
  const metaDescriptionTemplate = buildMetaDescription(seed)

  return {
    slug,
    name: seed.name,
    regionName: 'Jihočeský kraj',
    countryName: 'Česká republika',
    metaTitleTemplate,
    metaDescriptionTemplate,
    intro: buildIntro(seed),
    offer: {
      affiliate: 9300,
      campaign: slug,
      partnerName: 'Volsor Jihočeský',
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
  } satisfies SouthBohemianCityContent
})

export const jihoceskyCityContent: SouthBohemianCityContent[] = southBohemianCityContentBase

export const jihoceskyCityMap: Record<string, SouthBohemianCityContent> = jihoceskyCityContent.reduce(
  (acc, city) => {
    acc[city.slug] = city
    return acc
  },
  {} as Record<string, SouthBohemianCityContent>,
)

export const jihoceskyCitySlugs = jihoceskyCityContent.map((city) => city.slug)

export const getJihoceskyCity = (slug: string) => jihoceskyCityMap[slug]

export const resolveJihoceskyMetadata = (slug: string, year: number = CURRENT_YEAR) => {
  const city = getJihoceskyCity(slug)
  if (!city) return null

  const title = city.metaTitleTemplate.replace('{{year}}', String(year))
  const description = city.metaDescriptionTemplate.replace('{{year}}', String(year))

  return {
    title,
    description,
    alternates: {
      canonical: `/cz/regions/jihocesky/${slug}`,
    },
  }
}

export const jihoceskyRegionContent: SouthBohemianRegionContent = {
  name: 'Jihočeský kraj',
  slug: 'jihocesky',
  heroTitle: 'Půjčky v Jihočeském kraji – licencované srovnání',
  heroSubtitle:
    'Porovnejte bankovní i nebankovní nabídky v regionu rybníků, energetiky Temelín a příhraniční logistiky. AI model sleduje místní sazby, dotační programy a dostupnost poboček.',
  overview:
    'Jihočeský kraj kombinuje lázeňská města, průmyslové zóny Tábora i Písku, energetiku Temelína, rybníkářství Třeboňska a turistiku v UNESCO destinaci Český Krumlov. Úvěry zde často financují modernizaci penzionů, rekonstrukce zemědělských statků, obnovu rybníků a rozvoj logistických center pro export do Rakouska a Německa. Licencovaní poskytovatelé proto požadují detailní rozpočty, ověřují příjmy ze sezónních provozů a doporučují kombinovat komerční financování s krajskými dotacemi.',
  regulationSummary: [
    'ČNB trvá na kompletních předsmluvních informacích, reprezentativním příkladu a označení rel="sponsored" u komerčních nabídek.',
    'Kraj podporuje energetické úspory, obnovu rybníků a protipovodňová opatření – kombinace s komerčním úvěrem vyžaduje doložení rozhodnutí o dotaci.',
    'Přeshraniční projekty s Rakouskem musí doložit směnné kurzy a doložky o ochraně spotřebitele dle evropské legislativy.',
    'Financování turistických zařízení musí zohlednit sezónní cash flow a rezervní fond minimálně ve výši tří splátek.',
    'Nemovitosti v záplavových oblastech Lužnice a Vltavy potřebují aktuální posudek povodňového rizika.',
  ],
  regulatorLinks: [
    {
      label: 'Česká národní banka – registr poskytovatelů',
      href: 'https://apl.cnb.cz/apljerrsdad/JERRS.WEB07.INTRO?p_lang=cz',
      description: 'Ověření licence bank, družstevních záložen i nebankovních společností působících v Jihočeském kraji.',
    },
    {
      label: 'Jihočeský kraj – dotační a grantové programy',
      href: 'https://www.kraj-jihocesky.cz/',
      description: 'Aktuální výzvy pro energetické úspory, obnovu rybníků a podporu cestovního ruchu.',
    },
    {
      label: 'Dluhové poradenství – Charita České Budějovice',
      href: 'https://www.dchcb.cz/sluzby/dluhova-poradna',
      description: 'Bezplatná pomoc s konsolidacemi, restrukturalizací dluhů a vyjednáváním splátkových kalendářů.',
    },
  ],
  featuredLenders: [
    {
      name: 'MONETA Money Bank',
      licenseId: 'Bankovní licence ČNB',
      description: 'Osobní i podnikatelské úvěry se splatností až 120 měsíců, možnost odkladu splátek a sleva při konsolidaci.',
      website: 'https://www.moneta.cz/',
    },
    {
      name: 'Raiffeisenbank',
      licenseId: 'Bankovní licence ČNB',
      description: 'Refinancování hypoték, zelené úvěry pro energetické projekty a financování rekreačních zařízení.',
      website: 'https://www.rb.cz/',
    },
    {
      name: 'ČSOB Jihozápad',
      licenseId: 'Bankovní licence ČNB',
      description: 'Kontokorenty pro logistické a exportní firmy, programy pro zemědělce a garantované sazby pro municipální projekty.',
      website: 'https://www.csob.cz/',
    },
  ],
  topCities: [
    { name: 'České Budějovice', slug: 'ceske-budejovice', focus: 'Technologické firmy, univerzity a moderní bydlení.' },
    { name: 'Tábor', slug: 'tabor', focus: 'Strojírenský klastr, startupy a export.' },
    { name: 'Písek', slug: 'pisek', focus: 'Smart city projekty a stavebnictví.' },
    { name: 'Český Krumlov', slug: 'cesky-krumlov', focus: 'UNESCO turismus a kreativní průmysly.' },
    { name: 'Jindřichův Hradec', slug: 'jindrichuv-hradec', focus: 'Textil, administrativa a rybníkářství.' },
    { name: 'Strakonice', slug: 'strakonice', focus: 'Průmyslové podniky a nemocnice pro Šumavu.' },
  ],
  blogTeasers: [
    {
      title: 'Jak financovat rekreační projekty na Lipně',
      excerpt: 'Porovnali jsme úvěry pro ubytování, půjčovny sportovního vybavení a vodácké služby v Jihočeském kraji.',
      href: '/blog/lipno-recreational-lending',
    },
    {
      title: 'Energetické úspory pro rybníky a venkovské domy',
      excerpt: 'AI doporučení, jak kombinovat bankovní úvěr s dotacemi na zateplení, solary a retenční nádrže.',
      href: '/blog/south-bohemia-energy-upgrades',
    },
    {
      title: 'Jak na konsolidaci sezónních příjmů v cestovním ruchu',
      excerpt: 'Tipy pro majitele penzionů a lázeňských zařízení, kteří potřebují stabilizovat cash flow mimo sezónu.',
      href: '/blog/seasonal-income-loan-strategies',
    },
  ],
}
