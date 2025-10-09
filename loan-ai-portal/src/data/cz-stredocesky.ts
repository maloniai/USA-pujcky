import { slugify } from '@/lib/slugify'

export interface CentralBohemianRegionContent {
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

export interface CentralBohemianCityContent {
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
  'Všichni poskytovatelé musí mít licenci České národní banky a zveřejnit RPSN v češtině.',
  'Standardem je kontrola ukazatelů DTI 8,5 a DSTI 45 %, pro žadatele do 36 let platí mírnější limity.',
  'Region podporuje energetické úspory pomocí programů Nová zelená úsporám a kotlíkových dotací.',
  'Smluvní dokumentace musí být zpřístupněna online k prostudování alespoň 48 hodin před podpisem.',
  'Předsmluvní informace obsahují reprezentativní příklad a upozornění na sankce za prodlení.',
]

const disclosureText = {
  affiliate:
    'Stránka zobrazuje i sponzorované nabídky licencovaných poskytovatelů. Provize nemění pořadí výsledků, které AI určuje podle celkových nákladů a transparentnosti smluv.',
  example:
    'Reprezentativní příklad: Půjčka 350 000 Kč na 84 měsíců, pevná sazba 10,6 % p.a., RPSN 12,1 %, měsíční splátka 5 438 Kč, celkem zaplatíte 456 792 Kč. Individuální podmínky určí poskytovatel dle bonity.',
}

const citySeeds: CitySeed[] = [
  {
    name: 'Bakov nad Jizerou',
    focusSectors: ['automotive servis', 'řemeslné dílny'],
    loanUseCases: ['rekonstrukce rodinných domů', 'oběžné prostředky pro malé podniky'],
    borrowerProfile: 'komutující zaměstnanci Mladé Boleslavi a rodinné firmy navázané na Škodu Auto',
    amountRange: '80 000–650 000 Kč',
    highlight: 'napojení na průmyslovou zónu Mladá Boleslav',
    infrastructure: 'rychlé železniční spojení do Mladé Boleslavi a dobrá dostupnost D10',
    nearby: ['kosmonosy', 'mlada-boleslav', 'dolni-bousov'],
  },
  {
    name: 'Bělá pod Bezdězem',
    shortTitle: 'Bělá p. Bezdězem',
    focusSectors: ['dřevozpracující výroba', 'turismus Kokořínska'],
    loanUseCases: ['modernizace pensionů', 'nákup technologií pro malé provozy'],
    borrowerProfile: 'OSVČ v cestovním ruchu a rodiny rekonstruující historické domy',
    amountRange: '90 000–520 000 Kč',
    highlight: 'historické centrum s památkovými požadavky',
    infrastructure: 'regionální autobusové spojení a návaznost na cykloturistiku',
    nearby: ['mseno', 'benatky-nad-jizerou', 'bakov-nad-jizerou'],
  },
  {
    name: 'Benátky nad Jizerou',
    shortTitle: 'Benátky n. Jizerou',
    focusSectors: ['logistika', 'rodinné bydlení'],
    loanUseCases: ['refinancování hypoték', 'modernizace skladových hal'],
    borrowerProfile: 'domácnosti dojíždějící do Prahy a logistické firmy z koridoru D10',
    amountRange: '100 000–780 000 Kč',
    highlight: 'blízkost dálnice D10 a průmyslové zóny',
    infrastructure: 'rychlé spojení autobusem na Prahu i Mladou Boleslav',
    nearby: ['velke-prilepy', 'brandys-nad-labem-stara-boleslav', 'lysa-nad-labem'],
  },
  {
    name: 'Benešov',
    focusSectors: ['zdravotnictví', 'agroturistika'],
    loanUseCases: ['rekonstrukce rodinných domů', 'rozšíření farmářských provozů'],
    borrowerProfile: 'zdravotníci z nemocnice Benešov a podnikatelé ve venkovské turistice',
    amountRange: '110 000–820 000 Kč',
    highlight: 'okresní město s nemocnicí a mikroregionem Posázaví',
    infrastructure: 'železniční spojení do Prahy a D1 ve směru na Brno',
    nearby: ['pyšely', 'tynec-nad-sazavou', 'vlasim'],
  },
  {
    name: 'Beroun',
    focusSectors: ['strojírenství', 'developerské projekty'],
    loanUseCases: ['modernizace bytů', 'konsolidace podnikatelských úvěrů'],
    borrowerProfile: 'rodiny stěhující se z Prahy a firmy napojené na průmyslovou zónu Králův Dvůr',
    amountRange: '130 000–900 000 Kč',
    highlight: 'rychlá dostupnost Prahy po D5',
    infrastructure: 'železnice a dálnice D5 na Prahu i Plzeň',
    nearby: ['kraluv-dvur', 'hostomice', 'krivoklat'],
  },
  {
    name: 'Brandýs nad Labem–Stará Boleslav',
    shortTitle: 'Brandýs-St. Boleslav',
    focusSectors: ['logistika', 'služby'],
    loanUseCases: ['výstavba dvojdomků', 'expanze e-commerce skladů'],
    borrowerProfile: 'domácnosti dojíždějící do Prahy a podnikatelé z logistických areálů na D10',
    amountRange: '140 000–920 000 Kč',
    highlight: 'dvouměstí s vysokou poptávkou po bydlení a průmyslovým parkem',
    infrastructure: 'napojení na Pražský okruh a železniční trať do centra Prahy',
    nearby: ['neratovice', 'celakovice', 'ricany'],
  },
  {
    name: 'Březnice',
    focusSectors: ['zemědělství', 'malovýroba'],
    loanUseCases: ['modernizace farem', 'pořízení techniky pro truhlářství'],
    borrowerProfile: 'rodinné farmy a řemeslníci z Příbramska',
    amountRange: '70 000–480 000 Kč',
    highlight: 'venkovské projekty s možností kombinovat úvěr a dotace SZIF',
    infrastructure: 'regionální autobusové linky na Příbram a Blatnou',
    nearby: ['pribram', 'rozmital-pod-tremsinem', 'sedlcany'],
  },
  {
    name: 'Buštěhrad',
    focusSectors: ['letecký průmysl', 'developerské projekty'],
    loanUseCases: ['konsolidace úvěrů domácností', 'financování nájemního bydlení'],
    borrowerProfile: 'zaměstnanci letiště Václava Havla a startupy z okolí Kladna',
    amountRange: '120 000–760 000 Kč',
    highlight: 'blízkost letiště a plánovaných rezidenčních zón',
    infrastructure: 'rychlé silniční spojení na pražský okruh a do Kladna',
    nearby: ['kladno', 'hostivice', 'rudna'],
  },
  {
    name: 'Bystřice',
    focusSectors: ['energetické úspory', 'řemesla'],
    loanUseCases: ['zateplení rodinných domů', 'pořízení strojů pro lokální dílny'],
    borrowerProfile: 'domácnosti z mikroregionu Benešovsko a OSVČ v drobných službách',
    amountRange: '85 000–540 000 Kč',
    highlight: 'napojení na rychlostní silnici I/3 a turistickou oblast Posázaví',
    infrastructure: 'železniční zastávka a vazba na dálnici D1',
    nearby: ['benesov', 'tynec-nad-sazavou', 'sedlcany'],
  },
  {
    name: 'Čáslav',
    focusSectors: ['potravinářství', 'armádní logistika'],
    loanUseCases: ['modernizace výrobních linek', 'konsolidace rodinných financí'],
    borrowerProfile: 'zaměstnanci potravinářských závodů a vojenské základny',
    amountRange: '95 000–700 000 Kč',
    highlight: 'průmyslová tradice a vojenské zásobovací centrum',
    infrastructure: 'železniční uzel na Kolín a Kutnou Horu a silnice I/38',
    nearby: ['kutna-hora', 'tynec-nad-labem', 'uvaly'],
  },
  {
    name: 'Čelákovice',
    focusSectors: ['elektrotechnika', 'rodinné bydlení'],
    loanUseCases: ['výstavba rodinných domů', 'pořízení technologií do výroby'],
    borrowerProfile: 'komutoři do Prahy a pracovníci průmyslových parků',
    amountRange: '105 000–780 000 Kč',
    highlight: 'poptávka po moderním bydlení díky trasám S2 a S9',
    infrastructure: 'příměstská železnice na Masarykovo nádraží',
    nearby: ['brandys-nad-labem-stara-boleslav', 'lysa-nad-labem', 'uvaly'],
  },
  {
    name: 'Černošice',
    focusSectors: ['prémiové bydlení', 'kreativní profese'],
    loanUseCases: ['rekonstrukce vil', 'financování freelancing studií'],
    borrowerProfile: 'manažeři dojíždějící do Prahy a kreativní podnikatelé v Berounce valley',
    amountRange: '150 000–950 000 Kč',
    highlight: 'vilová čtvrť s požadavky památkové ochrany staveb',
    infrastructure: 'rychlé spojení vlakem na Smíchov a Radotín',
    nearby: ['dobrichovice', 'ricany', 'praha-5'],
  },
  {
    name: 'Český Brod',
    focusSectors: ['logistika', 'zemědělství'],
    loanUseCases: ['expanze skladů', 'pořízení techniky pro farmy'],
    borrowerProfile: 'rodinné firmy z Polabí a logistické společnosti napojené na D11',
    amountRange: '100 000–720 000 Kč',
    highlight: 'strategická poloha na koridoru Praha–Kolín',
    infrastructure: 'železniční trať na Prahu a Kolín, napojení na D11',
    nearby: ['kolin', 'pecky', 'uvaly'],
  },
  {
    name: 'Dobrovice',
    focusSectors: ['cukrovarnictví', 'logistika'],
    loanUseCases: ['modernizace výrobních zařízení', 'oběžná aktiva pro zemědělce'],
    borrowerProfile: 'zaměstnanci Tereos TTD a navázané služby v regionu',
    amountRange: '85 000–600 000 Kč',
    highlight: 'průmyslový areál cukrovaru a zemědělská centra',
    infrastructure: 'blízkost D10 a napojení na Mladou Boleslav',
    nearby: ['mlada-boleslav', 'bakov-nad-jizerou', 'kosmonosy'],
  },
  {
    name: 'Dobřichovice',
    focusSectors: ['developerské projekty', 'lázeňské služby'],
    loanUseCases: ['financování rodinných domů', 'rozšíření wellness provozů'],
    borrowerProfile: 'manažeři bydlící v Berounce valley a podnikatelé v turismu',
    amountRange: '140 000–880 000 Kč',
    highlight: 'poptávka po bydlení v dojezdové vzdálenosti od Prahy',
    infrastructure: 'železnice na Prahu a silnice II/115',
    nearby: ['czernosice', 'revnice', 'mniseck-pod-brdy'],
  },
  {
    name: 'Dobříš',
    focusSectors: ['strojírenství', 'IT centra'],
    loanUseCases: ['modernizace výrobních hal', 'coworkingové projekty'],
    borrowerProfile: 'technologické firmy a domácnosti dojíždějící do Prahy i Příbrami',
    amountRange: '120 000–940 000 Kč',
    highlight: 'průmyslová zóna v Dobříši a evropská sídla společností',
    infrastructure: 'rychlé napojení na R4/D4',
    nearby: ['mniseck-pod-brdy', 'pribram', 'revnice'],
  },
  {
    name: 'Dolní Bousov',
    focusSectors: ['zemědělství', 'lesnictví'],
    loanUseCases: ['pořízení zemědělské techniky', 'modernizace agroturistických projektů'],
    borrowerProfile: 'farmaři z Českého ráje a drobné rodinné podniky',
    amountRange: '60 000–480 000 Kč',
    highlight: 'blízkost chráněné krajinné oblasti Český ráj',
    infrastructure: 'silniční napojení na Jičín a Mladou Boleslav',
    nearby: ['bakov-nad-jizerou', 'mnichovo-hradiste', 'belapod-bezdezem'],
  },
  {
    name: 'Hořovice',
    focusSectors: ['metalurgie', 'zdravotnictví'],
    loanUseCases: ['modernizace rodinných domů', 'rozšíření zdravotnických služeb'],
    borrowerProfile: 'zaměstnanci hutních podniků a zdravotní personál nemocnice Hořovice',
    amountRange: '100 000–780 000 Kč',
    highlight: 'dostupnost průmyslové zóny a významné regionální nemocnice',
    infrastructure: 'dálnice D5 a železnice na Plzeň i Prahu',
    nearby: ['beroun', 'komarov', 'hostomice'],
  },
  {
    name: 'Hostivice',
    focusSectors: ['logistika', 'letecké služby'],
    loanUseCases: ['výstavba nájemních bytů', 'expanze skladových center'],
    borrowerProfile: 'zaměstnanci letiště a logistické firmy navázané na pražský okruh',
    amountRange: '160 000–950 000 Kč',
    highlight: 'blízkost Letiště Václava Havla a průmyslových parků',
    infrastructure: 'napojení na Pražský okruh, železnice do Prahy-Dejvic',
    nearby: ['kladno', 'chyně', 'rudna'],
  },
  {
    name: 'Hostomice',
    focusSectors: ['řemesla', 'agroturistika'],
    loanUseCases: ['modernizace dílen', 'přestavba venkovských stavení'],
    borrowerProfile: 'rodinné firmy v Brdech a domácnosti využívající rekreační zázemí',
    amountRange: '70 000–520 000 Kč',
    highlight: 'brdská turistika s poptávkou po ubytovacích kapacitách',
    infrastructure: 'silnice II/114 směrem na Dobříš a Hořovice',
    nearby: ['dobris', 'rozmital-pod-tremsinem', 'mniseck-pod-brdy'],
  },
  {
    name: 'Chýně',
    focusSectors: ['developerské projekty', 'technologické startupy'],
    loanUseCases: ['financování novostaveb', 'kapitál pro IT služby'],
    borrowerProfile: 'mladé rodiny a specialisté z pražských kancelářských parků',
    amountRange: '150 000–880 000 Kč',
    highlight: 'rychle rostoucí suburbie na západním okraji Prahy',
    infrastructure: 'napojení na Pražský okruh a železnici Kladno–Praha',
    nearby: ['hostivice', 'rudna', 'dobrichovice'],
  },
  {
    name: 'Jesenice (Praha-západ)',
    shortTitle: 'Jesenice (P-západ)',
    focusSectors: ['IT služby', 'rodinné bydlení'],
    loanUseCases: ['výstavba rodinných domů', 'financování malých kanceláří'],
    borrowerProfile: 'manažeři a freelance specialisté pracující v Praze',
    amountRange: '180 000–980 000 Kč',
    highlight: 'silné napojení na pražský trh práce a poptávku po smart technologiích v domácnostech',
    infrastructure: 'Pražský okruh, D1 a přímé autobusy na Budějovickou',
    nearby: ['ricany', 'dolni-brezany', 'tynec-nad-sazavou'],
  },
  {
    name: 'Jesenice (Rakovník)',
    shortTitle: 'Jesenice (Rak.)',
    focusSectors: ['zemědělství', 'dřevozpracující výroba'],
    loanUseCases: ['nákup zemědělské techniky', 'rozšíření pil a truhláren'],
    borrowerProfile: 'rodinné farmy a malé závody na Rakovnicku',
    amountRange: '70 000–510 000 Kč',
    highlight: 'přístup k dotačním programům MAS Rakovnicko',
    infrastructure: 'silnice I/6 směrem na Karlovy Vary a Prahu',
    nearby: ['novestras', 'rakovnik', 'krivy-hradek'],
  },
  {
    name: 'Jílové u Prahy',
    focusSectors: ['těžba zlata (historie)', 'turistika Posázaví'],
    loanUseCases: ['rekonstrukce rodinných domů', 'glamping a zážitkové ubytování'],
    borrowerProfile: 'rodiny v Posázaví a podnikatelé v outdoor službách',
    amountRange: '110 000–720 000 Kč',
    highlight: 'hornické tradice a turistické trasy v povodí Sázavy',
    infrastructure: 'železniční trať „Posázavský pacifik“ a silnice na Prahu 4',
    nearby: ['tynec-nad-sazavou', 'ricany', 'benesov'],
  },
  {
    name: 'Kladno',
    focusSectors: ['energetika', 'služby'],
    loanUseCases: ['modernizace bytových domů', 'expanze retailových parků'],
    borrowerProfile: 'domácnosti revitalizující panelová sídliště a firmy napojené na průmyslové zóny',
    amountRange: '140 000–950 000 Kč',
    highlight: 'největší středočeské město s přebudovanými brownfieldy',
    infrastructure: 'rychlá doprava na Prahu R6 a připravované železniční spojení na letiště',
    nearby: ['slany', 'hostivice', 'bustehrad'],
  },
  {
    name: 'Klecany',
    focusSectors: ['zdravotnictví', 'logistika'],
    loanUseCases: ['financování senior residencí', 'pořízení skladových technologií'],
    borrowerProfile: 'investoři v rezidenčních projektech a logistické firmy na severním okraji Prahy',
    amountRange: '130 000–820 000 Kč',
    highlight: 'developerské a zdravotnické projekty díky blízkosti Prahy 8',
    infrastructure: 'most přes Vltavu do Řeže a silnice I/8 na Ústí',
    nearby: ['roztoky', 'odolenavoda', 'neratovice'],
  },
  {
    name: 'Kolín',
    focusSectors: ['automotive', 'chemický průmysl'],
    loanUseCases: ['modernizace výrobních linek', 'refinancování zaměstnaneckých půjček'],
    borrowerProfile: 'zaměstnanci TPCA a chemických závodů, rodiny konsolidující úvěry',
    amountRange: '150 000–970 000 Kč',
    highlight: 'významný průmyslový uzel Polabí',
    infrastructure: 'železniční koridor a dálnice D11 s napojením na Prahu',
    nearby: ['caslav', 'pecky', 'tynec-nad-labem'],
  },
  {
    name: 'Kosmonosy',
    focusSectors: ['automotive', 'zdravotní služby'],
    loanUseCases: ['rozšíření zdravotnických zařízení', 'bydlení pro zaměstnance Škoda Auto'],
    borrowerProfile: 'zdravotní personál a domácnosti navázané na průmyslový závod',
    amountRange: '120 000–860 000 Kč',
    highlight: 'areál Škoda Auto a nemocnice Mladá Boleslav',
    infrastructure: 'příměstské linky MHD a D10',
    nearby: ['mlada-boleslav', 'bakov-nad-jizerou', 'dobrovice'],
  },
  {
    name: 'Kostelec nad Černými lesy',
    shortTitle: 'Kostelec n. Černými lesy',
    focusSectors: ['dřevozpracující průmysl', 'zemědělství'],
    loanUseCases: ['modernizace dřevařských provozů', 'projekty agroturistiky'],
    borrowerProfile: 'drobní podnikatelé a farmy v okolí Jevan',
    amountRange: '85 000–590 000 Kč',
    highlight: 'tradiční truhlářství a školní lesy',
    infrastructure: 'silnice II/113 na Prahu a Uhlířské Janovice',
    nearby: ['ricany', 'uvaly', 'uhlirske-janovice'],
  },
  {
    name: 'Kostelec nad Labem',
    shortTitle: 'Kostelec n. Labem',
    focusSectors: ['logistika', 'potravinářství'],
    loanUseCases: ['modernizace skladových areálů', 'financování potravinářské výroby'],
    borrowerProfile: 'podniky v Polabí a domácnosti dojíždějící do Prahy',
    amountRange: '110 000–760 000 Kč',
    highlight: 'průmyslové zóny na severním okraji Prahy',
    infrastructure: 'silnice II/331 a návaznost na D10',
    nearby: ['neratovice', 'brandys-nad-labem-stara-boleslav', 'odolenavoda'],
  },
  {
    name: 'Kouřim',
    focusSectors: ['zemědělství', 'památková péče'],
    loanUseCases: ['rekonstrukce historických domů', 'pořízení zemědělské techniky'],
    borrowerProfile: 'obyvatelé historické památkové rezervace a rodinné farmy',
    amountRange: '70 000–520 000 Kč',
    highlight: 'památkově chráněné jádro a skanzen lidové architektury',
    infrastructure: 'autobusové spojení na Kolín a Prahu',
    nearby: ['cesky-brod', 'pecky', 'caslav'],
  },
  {
    name: 'Kralupy nad Vltavou',
    focusSectors: ['petrochemie', 'logistika'],
    loanUseCases: ['modernizace bytových domů', 'financování skladových hal'],
    borrowerProfile: 'zaměstnanci rafinerií a logistické firmy využívající Labe a železnici',
    amountRange: '130 000–890 000 Kč',
    highlight: 'strategická poloha na koridoru Praha–Ústí',
    infrastructure: 'železnice a dálnice D8',
    nearby: ['melnik', 'neratovice', 'odolenavoda'],
  },
  {
    name: 'Králův Dvůr',
    shortTitle: 'Králův Dvůr',
    focusSectors: ['strojírenství', 'logistika'],
    loanUseCases: ['rozšíření rodinných domů', 'pořízení průmyslových technologií'],
    borrowerProfile: 'zázemí pro pracovníky automobilních dodavatelů a logistických center',
    amountRange: '110 000–820 000 Kč',
    highlight: 'průmyslová zóna navázaná na Beroun',
    infrastructure: 'dálnice D5 a železnice s rychlými spěšnými vlaky',
    nearby: ['beroun', 'horovice', 'pribram'],
  },
  {
    name: 'Krásná Hora nad Vltavou',
    shortTitle: 'Krásná Hora n. Vltavou',
    focusSectors: ['zemědělství', 'energetika'],
    loanUseCases: ['instalace fotovoltaiky', 'modernizace živočišné výroby'],
    borrowerProfile: 'farmaři v Povltaví a domácnosti modernizující statky',
    amountRange: '75 000–520 000 Kč',
    highlight: 'využití dotačních titulů MAS Sedlčansko',
    infrastructure: 'silnice II/119 na Milevsko a Dobříš',
    nearby: ['sedlcany', 'pyšely', 'benesov'],
  },
  {
    name: 'Kutná Hora',
    focusSectors: ['památky UNESCO', 'strojírenství'],
    loanUseCases: ['rekonstrukce bytů v historické zástavbě', 'financování výrobních provozů'],
    borrowerProfile: 'pracovníci v automotive a turismus navázaný na UNESCO památky',
    amountRange: '140 000–910 000 Kč',
    highlight: 'kombinace průmyslu a cestovního ruchu',
    infrastructure: 'železnice na Prahu a Kolín, silnice I/2',
    nearby: ['caslav', 'tynec-nad-labem', 'uhlirske-janovice'],
  },
  {
    name: 'Libčice nad Vltavou',
    shortTitle: 'Libčice n. Vltavou',
    focusSectors: ['kovovýroba', 'rezidenční projekty'],
    loanUseCases: ['modernizace brownfieldů', 'výstavba nájemních bytů'],
    borrowerProfile: 'developerské skupiny a pracovníci z Prahy',
    amountRange: '130 000–860 000 Kč',
    highlight: 'revitalizace areálu šroubárny a poptávka po nájemním bydlení',
    infrastructure: 'železnice do Prahy 6 a silnice na Kralupy',
    nearby: ['roztoky', 'klecany', 'odolenavoda'],
  },
  {
    name: 'Liběchov',
    focusSectors: ['vinařství', 'turistika Kokořínska'],
    loanUseCases: ['modernizace vinařských provozů', 'rekonstrukce penzionů'],
    borrowerProfile: 'rodinná vinařství a ubytovatelé v CHKO Kokořínsko',
    amountRange: '80 000–560 000 Kč',
    highlight: 'historické zámky a turistická návštěvnost',
    infrastructure: 'silnice I/9 na Mělník a Českou Lípu',
    nearby: ['melnik', 'mseno', 'neratovice'],
  },
  {
    name: 'Libušín',
    focusSectors: ['těžký průmysl', 'bydlení'],
    loanUseCases: ['rekonstrukce rodinných domů', 'přechod na obnovitelné zdroje'],
    borrowerProfile: 'domácnosti navázané na průmysl Kladenska',
    amountRange: '90 000–610 000 Kč',
    highlight: 'hornická tradice a navazující brownfieldy',
    infrastructure: 'silnice na Kladno a Králův Dvůr',
    nearby: ['kladno', 'slany', 'bustehrad'],
  },
  {
    name: 'Lysá nad Labem',
    focusSectors: ['agro veletrhy', 'logistika'],
    loanUseCases: ['financování výstavních ploch', 'expandování e-commerce skladů'],
    borrowerProfile: 'organizátoři výstav a logistické firmy v Polabí',
    amountRange: '120 000–840 000 Kč',
    highlight: 'výstaviště Lysá nad Labem s mezinárodní účastí',
    infrastructure: 'železnice na Prahu, Nymburk a Hradec Králové',
    nearby: ['nymburk', 'celakovice', 'benatky-nad-jizerou'],
  },
  {
    name: 'Mělník',
    focusSectors: ['logistika Labe', 'zemědělství'],
    loanUseCases: ['modernizace přístavu', 'financování vinařství'],
    borrowerProfile: 'logistické společnosti využívající říční dopravu a vinaři z Polabí',
    amountRange: '140 000–930 000 Kč',
    highlight: 'strategický říční přístav na soutoku Labe s Vltavou',
    infrastructure: 'silnice I/9 a železnice na Prahu a Ústí',
    nearby: ['kralupy-nad-vltavou', 'neratovice', 'mseno'],
  },
  {
    name: 'Městec Králové',
    focusSectors: ['zdravotnictví', 'zemědělství'],
    loanUseCases: ['modernizace nemocnice', 'pořízení zemědělské techniky'],
    borrowerProfile: 'zdravotnický personál a farmáři v Polabí',
    amountRange: '80 000–560 000 Kč',
    highlight: 'regionální nemocnice a jezdecká tradice',
    infrastructure: 'silnice II/329 na Poděbrady a Nymburk',
    nearby: ['poděbrady', 'sadská', 'uvaly'],
  },
  {
    name: 'Miličín',
    focusSectors: ['zemědělství', 'řemesla'],
    loanUseCases: ['rekonstrukce vesnických domů', 'pořízení strojů pro truhlářství'],
    borrowerProfile: 'venkovské domácnosti a drobní podnikatelé mezi Benešovem a Táborem',
    amountRange: '60 000–420 000 Kč',
    highlight: 'přechod mezi Středočeským a Jihočeským krajem',
    infrastructure: 'silnice E55 a autobusové spojení na Benešov',
    nearby: ['benesov', 'vlasim', 'sedlcany'],
  },
  {
    name: 'Milovice',
    focusSectors: ['developerské projekty', 'zábavní služby'],
    loanUseCases: ['financování novostaveb', 'vybavení rodinných center'],
    borrowerProfile: 'mladé rodiny přistěhované z Prahy a provozovatelé zábavních parků',
    amountRange: '140 000–870 000 Kč',
    highlight: 'rychle rostoucí sídliště v Polabí s bývalým vojenským prostorem',
    infrastructure: 'železnice na Lysou a Nymburk, napojení na D10',
    nearby: ['lysa-nad-labem', 'nymburk', 'benatky-nad-jizerou'],
  },
  {
    name: 'Mladá Boleslav',
    focusSectors: ['automotive', 'výzkum a vývoj'],
    loanUseCases: ['rekonstrukce bytů', 'financování startupů v mobilitě'],
    borrowerProfile: 'zaměstnanci Škoda Auto a technologické firmy ve výzkumných centrech',
    amountRange: '160 000–990 000 Kč',
    highlight: 'evropské centrum automobilového průmyslu',
    infrastructure: 'dálnice D10 a železniční uzel směrem na Prahu a Liberec',
    nearby: ['kosmonosy', 'benatky-nad-jizerou', 'bakov-nad-jizerou'],
  },
  {
    name: 'Mnichovice',
    focusSectors: ['rodinné bydlení', 'služby'],
    loanUseCases: ['rekonstrukce vil', 'rozšíření zdravotnických ordinací'],
    borrowerProfile: 'rodiny stěhující se z Prahy a malé služby pro zázemí Říčan',
    amountRange: '110 000–780 000 Kč',
    highlight: 'atraktivní lokalita Poříčanska s rychlým přístupem do Prahy',
    infrastructure: 'dálnice D1 a železnice S9',
    nearby: ['ricany', 'pyšely', 'uvaly'],
  },
  {
    name: 'Mnichovo Hradiště',
    focusSectors: ['automotive dodavatelé', 'turistika Českého ráje'],
    loanUseCases: ['expanze průmyslových parků', 'rekonstrukce pensionů'],
    borrowerProfile: 'dodavatelé Škoda Auto a poskytovatelé služeb v Českém ráji',
    amountRange: '120 000–860 000 Kč',
    highlight: 'blízkost dálnice D10 a turistických tras',
    infrastructure: 'dálnice D10, železnice na Turnov a Prahu',
    nearby: ['dolni-bousov', 'bakov-nad-jizerou', 'mlada-boleslav'],
  },
  {
    name: 'Mníšek pod Brdy',
    shortTitle: 'Mníšek p. Brdy',
    focusSectors: ['developerské projekty', 'služby'],
    loanUseCases: ['výstavba rodinných domů', 'financování kaváren a coworkingu'],
    borrowerProfile: 'mladé rodiny střídající práci v Praze a podnikání',
    amountRange: '150 000–900 000 Kč',
    highlight: 'výhodná poloha u dálnice D4',
    infrastructure: 'rychlá autobusová doprava do Prahy a dálniční sjezd D4',
    nearby: ['dobris', 'revnice', 'dobrichovice'],
  },
  {
    name: 'Mšeno',
    focusSectors: ['turistika', 'lázeňství'],
    loanUseCases: ['rekonstrukce penzionů', 'budování sportovního zázemí'],
    borrowerProfile: 'podnikatelé využívající CHKO Kokořínsko a lázeňské akce',
    amountRange: '70 000–500 000 Kč',
    highlight: 'vstupní brána do Kokořínska',
    infrastructure: 'regionální autobusové linky na Mělník a Doksy',
    nearby: ['bela-pod-bezdezem', 'libechov', 'melnik'],
  },
  {
    name: 'Neratovice',
    focusSectors: ['chemický průmysl', 'logistika'],
    loanUseCases: ['modernizace bytových domů', 'pořízení skladových technologií'],
    borrowerProfile: 'zaměstnanci Spolany a logistické firmy zásobující Prahu',
    amountRange: '120 000–880 000 Kč',
    highlight: 'chemická výroba a říční doprava na Labi',
    infrastructure: 'železnice a silnice I/9',
    nearby: ['melnik', 'kralupy-nad-vltavou', 'brandys-nad-labem-stara-boleslav'],
  },
  {
    name: 'Neveklov',
    focusSectors: ['zemědělství', 'rekreační služby'],
    loanUseCases: ['modernizace penzionů', 'obnova zemědělské techniky'],
    borrowerProfile: 'podnikatelé v oblasti Slapské přehrady a farmy Posázaví',
    amountRange: '80 000–540 000 Kč',
    highlight: 'rekreační oblast Slapské přehrady',
    infrastructure: 'silnice II/105 a autobusové spojení na Benešov',
    nearby: ['benesov', 'tynec-nad-sazavou', 'jidlové-u-prahy'],
  },
  {
    name: 'Nové Strašecí',
    shortTitle: 'Nové Strašecí',
    focusSectors: ['logistika', 'dřevozpracující průmysl'],
    loanUseCases: ['modernizace výrobních hal', 'rekonstrukce rodinných domů'],
    borrowerProfile: 'průmyslové podniky na křižovatce D6 a domácnosti dojíždějící do Prahy',
    amountRange: '110 000–780 000 Kč',
    highlight: 'strategická poloha u dálnice D6 a železnice na Rakovník',
    infrastructure: 'dálnice D6, silnice I/6 a železniční trať Praha–Rakovník',
    nearby: ['rakovnik', 'stochov', 'kraluv-dvur'],
  },
  {
    name: 'Nový Knín',
    focusSectors: ['šperkařství', 'rekreační služby'],
    loanUseCases: ['expanze zlatnických dílen', 'rekonstrukce rekreačních objektů'],
    borrowerProfile: 'šperkařské dílny a provozovatelé rekreací u Slapské přehrady',
    amountRange: '75 000–530 000 Kč',
    highlight: 'historie zlatnictví a blízkost Slapské přehrady',
    infrastructure: 'silnice II/116 na Dobříš a Prahu',
    nearby: ['dobris', 'mniseck-pod-brdy', 'tynec-nad-sazavou'],
  },
  {
    name: 'Nymburk',
    focusSectors: ['logistika', 'potravinářství'],
    loanUseCases: ['modernizace skladových center', 'financování cukrovarů a mlýnů'],
    borrowerProfile: 'logistické firmy a zemědělci z Polabí',
    amountRange: '140 000–890 000 Kč',
    highlight: 'dopravní uzel pro Polabí a spojení s automobilovým průmyslem',
    infrastructure: 'železniční křižovatka a dálnice D11',
    nearby: ['lysa-nad-labem', 'poděbrady', 'milovice'],
  },
  {
    name: 'Odolena Voda',
    focusSectors: ['letecká výroba', 'logistika'],
    loanUseCases: ['modernizace výrobních provozů', 'výstavba nájemních domů'],
    borrowerProfile: 'zaměstnanci Aera Vodochody a logistické společnosti na D8',
    amountRange: '130 000–900 000 Kč',
    highlight: 'letecký průmysl a průmyslové parky',
    infrastructure: 'dálnice D8 a rychlá autobusová doprava na Prahu',
    nearby: ['kralupy-nad-vltavou', 'neratovice', 'roztoky'],
  },
  {
    name: 'Pečky',
    focusSectors: ['potravinářství', 'logistika'],
    loanUseCases: ['modernizace pekáren', 'rekonstrukce rodinných domů'],
    borrowerProfile: 'rodinné podniky a pracovníci logistických center v Polabí',
    amountRange: '80 000–620 000 Kč',
    highlight: 'středisko potravinářských provozů v Polabí',
    infrastructure: 'železnice na Kolín a Prahu, silnice II/611',
    nearby: ['kolin', 'cesky-brod', 'sadská'],
  },
  {
    name: 'Poděbrady',
    focusSectors: ['lázeňství', 'wellness'],
    loanUseCases: ['rekonstrukce lázeňských pensionů', 'modernizace wellness technologií'],
    borrowerProfile: 'lázeňští poskytovatelé a rezidenti hledající zelené financování',
    amountRange: '130 000–870 000 Kč',
    highlight: 'lázeňské město se silnou poptávkou po ubytování',
    infrastructure: 'železnice na Prahu a Hradec, dálnice D11',
    nearby: ['nymburk', 'sadská', 'pecky'],
  },
  {
    name: 'Příbram',
    focusSectors: ['hornictví', 'vzdělávání'],
    loanUseCases: ['rekonstrukce panelových domů', 'podpora univerzitních projektů'],
    borrowerProfile: 'domácnosti v revitalizovaných sídlištích a studentské projekty ČVUT',
    amountRange: '140 000–910 000 Kč',
    highlight: 'transformace hornického regionu na moderní služby',
    infrastructure: 'silnice I/18 a dálnice D4',
    nearby: ['dobris', 'březnice', 'sedlcany'],
  },
  {
    name: 'Pyšely',
    focusSectors: ['rezidenční projekty', 'sportoviště'],
    loanUseCases: ['výstavba domů', 'financování golfových a jezdeckých areálů'],
    borrowerProfile: 'rodiny hledající klid u Benešova a podnikatelé ve sportu',
    amountRange: '110 000–780 000 Kč',
    highlight: 'golfový resort Loreta a bydlení v Posázaví',
    infrastructure: 'D1 a regionální autobusy',
    nearby: ['benesov', 'bystřice', 'tynec-nad-sazavou'],
  },
  {
    name: 'Rakovník',
    focusSectors: ['chemický průmysl', 'potravinářství'],
    loanUseCases: ['modernizace výrobních areálů', 'rekonstrukce rodinných domů'],
    borrowerProfile: 'pracovníci chemičky a pivovaru, domácnosti využívající dotace',
    amountRange: '120 000–820 000 Kč',
    highlight: 'průmyslová tradice v západní části kraje',
    infrastructure: 'dálnice D6 a železniční trať na Prahu',
    nearby: ['nové-strašecí', 'jesenice-rakovnik', 'stochov'],
  },
  {
    name: 'Roztoky',
    focusSectors: ['věda', 'IT'],
    loanUseCases: ['financování laboratoří', 'koupě bytů pro výzkumné pracovníky'],
    borrowerProfile: 'vědecké instituce a rodiny dojíždějící do Prahy 6',
    amountRange: '150 000–940 000 Kč',
    highlight: 'výzkumné centrum Řež a přímé napojení na Prahu',
    infrastructure: 'železnice na Prahu a cyklostezka podél Vltavy',
    nearby: ['klecany', 'odolena-voda', 'libčice-nad-vltavou'],
  },
  {
    name: 'Rožďalovice',
    shortTitle: 'Rožďalovice',
    focusSectors: ['zemědělství', 'služby'],
    loanUseCases: ['modernizace agropodniků', 'vybavení sociálních služeb'],
    borrowerProfile: 'rodinné farmy a poskytovatelé sociálních služeb na Nymbursku',
    amountRange: '70 000–510 000 Kč',
    highlight: 'venkovský mikroregion v Polabí',
    infrastructure: 'silnice II/279 na Nymburk a Jičín',
    nearby: ['nymburk', 'mseno', 'votice'],
  },
  {
    name: 'Rožmitál pod Třemšínem',
    shortTitle: 'Rožmitál p. Třemšínem',
    focusSectors: ['dřevozpracující průmysl', 'turistika Brd'],
    loanUseCases: ['rozšíření výroby', 'rekonstrukce rekreačních objektů'],
    borrowerProfile: 'drobní podnikatelé a domácnosti využívající CHKO Brdy',
    amountRange: '80 000–580 000 Kč',
    highlight: 'Brdské lesy a tradiční řemesla',
    infrastructure: 'silnice II/191 do Příbrami a Spáleného Poříčí',
    nearby: ['pribram', 'bresnice', 'hostomice'],
  },
  {
    name: 'Rudná',
    focusSectors: ['logistika', 'stavebnictví'],
    loanUseCases: ['konsolidace podnikatelských úvěrů', 'financování developerských projektů'],
    borrowerProfile: 'rodiny v suburbii Prahy a stavební firmy na D5',
    amountRange: '140 000–890 000 Kč',
    highlight: 'výhodná poloha na západním okraji Prahy u D5',
    infrastructure: 'dálnice D5, Pražský okruh a železniční linky na Smíchov',
    nearby: ['dobrichovice', 'hostivice', 'chyně'],
  },
  {
    name: 'Řevnice',
    shortTitle: 'Řevnice',
    focusSectors: ['kultura', 'rodinné bydlení'],
    loanUseCases: ['rekonstrukce vil', 'financování kulturních projektů'],
    borrowerProfile: 'kreativní profese a rodiny hledající kvalitní bydlení',
    amountRange: '130 000–870 000 Kč',
    highlight: 'Divadlo pod lipami a kulturní festivaly',
    infrastructure: 'železnice Berounka–Praha a silnice II/115',
    nearby: ['dobrichovice', 'mniseck-pod-brdy', 'tynec-nad-sazavou'],
  },
  {
    name: 'Říčany',
    focusSectors: ['IT', 'soukromé zdravotnictví'],
    loanUseCases: ['výstavba moderních domů', 'expanze klinik a ordinací'],
    borrowerProfile: 'vysoce kvalifikovaní pracovníci a podnikatelé v Praze',
    amountRange: '170 000–980 000 Kč',
    highlight: 'nejlepší kvalita života dle žebříčků měst',
    infrastructure: 'dálnice D1 a příměstské vlaky S9',
    nearby: ['mnichovice', 'jesenice-praha-zapad', 'uvaly'],
  },
  {
    name: 'Sadská',
    focusSectors: ['logistika', 'sport'],
    loanUseCases: ['rekonstrukce sportovišť', 'financování skladových prostor'],
    borrowerProfile: 'sportovní kluby a firmy u dálnice D11',
    amountRange: '80 000–620 000 Kč',
    highlight: 'jezero Sadská a logistika na okraji Polabí',
    infrastructure: 'D11 a železnice na Prahu a Nymburk',
    nearby: ['poděbrady', 'lysa-nad-labem', 'pecky'],
  },
  {
    name: 'Sázava',
    focusSectors: ['turismus', 'sklářství'],
    loanUseCases: ['rekonstrukce chat', 'modernizace sklářských dílen'],
    borrowerProfile: 'rekreační oblasti Posázaví a tradiční skláři',
    amountRange: '75 000–540 000 Kč',
    highlight: 'sklářská tradice Františka Křižíka a vodácký turismus',
    infrastructure: 'železnice „Posázavský pacifik“ a dálnice D1',
    nearby: ['tynec-nad-sazavou', 'benesov', 'ricany'],
  },
  {
    name: 'Sedlčany',
    focusSectors: ['potravinářství', 'farmy'],
    loanUseCases: ['rozšíření mlékáren', 'modernizace zemědělské techniky'],
    borrowerProfile: 'farmaři a potravináři z jihozápadní části kraje',
    amountRange: '90 000–650 000 Kč',
    highlight: 'sedlecký hermelín a agro projekty',
    infrastructure: 'silnice II/105 do Prahy a Benešova',
    nearby: ['benesov', 'pribram', 'pyšely'],
  },
  {
    name: 'Sedlec-Prčice',
    focusSectors: ['turistika', 'zemědělství'],
    loanUseCases: ['vybavení lyžařských a běžkařských areálů', 'modernizace farem'],
    borrowerProfile: 'podnikatelé v zimním turismu a farmy na rozhraní krajů',
    amountRange: '70 000–520 000 Kč',
    highlight: 'lyžařský areál Monínec',
    infrastructure: 'silnice II/121 a autobusové linky na Tábor a Benešov',
    nearby: ['sedlcany', 'votice', 'miličin'],
  },
  {
    name: 'Slaný',
    focusSectors: ['logistika', 'strojírenství'],
    loanUseCases: ['modernizace výrobních parků', 'konsolidace podnikatelských úvěrů'],
    borrowerProfile: 'průmyslové podniky a logistické firmy mezi Kladnem a Louny',
    amountRange: '120 000–830 000 Kč',
    highlight: 'průmyslové zóny u dálnice D7',
    infrastructure: 'dálnice D7 a železnice na Prahu a Louny',
    nearby: ['kladno', 'smečno', 'stochov'],
  },
  {
    name: 'Smečno',
    focusSectors: ['průmysl', 'rekreační služby'],
    loanUseCases: ['rekonstrukce bytů', 'pořízení wellness vybavení'],
    borrowerProfile: 'domácnosti na Kladensku a provozovatelé wellness',
    amountRange: '75 000–560 000 Kč',
    highlight: 'rekreační zámek Smečno a blízkost průmyslových zón',
    infrastructure: 'silnice na Kladno a Slaný',
    nearby: ['slany', 'kladno', 'stochov'],
  },
  {
    name: 'Stochov',
    focusSectors: ['letecké služby', 'logistika'],
    loanUseCases: ['financování ubytování', 'expanze skladů'],
    borrowerProfile: 'zaměstnanci letiště a logistických parků u D6',
    amountRange: '110 000–760 000 Kč',
    highlight: 'přístup na letiště Václava Havla po dálnici D6',
    infrastructure: 'dálnice D6 a železniční trať Praha–Rakovník',
    nearby: ['kladno', 'nové-strašecí', 'slany'],
  },
  {
    name: 'Trhový Štěpánov',
    focusSectors: ['zemědělství', 'logistika D1'],
    loanUseCases: ['modernizace skladů', 'pořízení strojů pro farmy'],
    borrowerProfile: 'zemědělci na Benešovsku a firmy obsluhující D1',
    amountRange: '70 000–540 000 Kč',
    highlight: 'exit 66 na dálnici D1 a logistické služby',
    infrastructure: 'dálnice D1 a silnice II/125',
    nearby: ['benesov', 'vlasim', 'tynec-nad-sazavou'],
  },
  {
    name: 'Týnec nad Labem',
    focusSectors: ['logistika', 'strojírenství'],
    loanUseCases: ['modernizace přístavu', 'expanze výrobních závodů'],
    borrowerProfile: 'logistické firmy využívající Labe a zaměstnanci strojírenských závodů',
    amountRange: '90 000–690 000 Kč',
    highlight: 'lodní přístav a železniční spojení na Kolín',
    infrastructure: 'železniční trať na Kolín a napojení na I/2',
    nearby: ['kolin', 'caslav', 'pecky'],
  },
  {
    name: 'Týnec nad Sázavou',
    focusSectors: ['strojírenství', 'vodní sporty'],
    loanUseCases: ['modernizace závodu Jawa', 'rozšíření půjčoven lodí'],
    borrowerProfile: 'zaměstnanci průmyslu a podnikatelé v outdooru',
    amountRange: '110 000–780 000 Kč',
    highlight: 'výroba motocyklů Jawa a vodácký turismus',
    infrastructure: 'železnice do Benešova a silnice II/105',
    nearby: ['benesov', 'sazava', 'jidlové-u-prahy'],
  },
  {
    name: 'Uhlířské Janovice',
    focusSectors: ['zemědělství', 'malovýroba'],
    loanUseCases: ['pořízení strojů', 'modernizace menších provozů'],
    borrowerProfile: 'drobné podniky na Kutnohorsku',
    amountRange: '70 000–500 000 Kč',
    highlight: 'zemědělské družstvo a navazující služby',
    infrastructure: 'silnice II/335 na Kutnou Horu',
    nearby: ['kutna-hora', 'caslav', 'ricany'],
  },
  {
    name: 'Unhošť',
    focusSectors: ['rodinné bydlení', 'služby'],
    loanUseCases: ['rekonstrukce domů', 'pořízení technologií pro služby'],
    borrowerProfile: 'rodiny pracující v Praze a drobní podnikatelé',
    amountRange: '110 000–780 000 Kč',
    highlight: 'oblíbená suburbie mezi Kladnem a Prahou',
    infrastructure: 'silnice na Prahu-Zličín a Kladno',
    nearby: ['kladno', 'hostivice', 'bustehrad'],
  },
  {
    name: 'Úvaly',
    focusSectors: ['developerské projekty', 'logistika'],
    loanUseCases: ['výstavba bytů', 'expanze skladů'],
    borrowerProfile: 'developerské firmy a domácnosti navázané na Prahu 9',
    amountRange: '150 000–880 000 Kč',
    highlight: 'rychle rostoucí suburbie na železnici S1 a D11',
    infrastructure: 'železnice na Prahu, silnice na Kolín a exit D11',
    nearby: ['ricany', 'cesky-brod', 'pecky'],
  },
  {
    name: 'Velvary',
    focusSectors: ['stavebnictví', 'zemědělství'],
    loanUseCases: ['modernizace farem', 'konsolidace úvěrů stavebních firem'],
    borrowerProfile: 'stavební firmy a farmy u dálnice D7',
    amountRange: '85 000–620 000 Kč',
    highlight: 'logistická poloha mezi Slaným a Kralupy',
    infrastructure: 'dálnice D7 a železnice na Kladno',
    nearby: ['slany', 'kralupy-nad-vltavou', 'kladno'],
  },
  {
    name: 'Vlašim',
    focusSectors: ['strojírenství', 'sport'],
    loanUseCases: ['modernizace sportovních areálů', 'pořízení výrobních zařízení'],
    borrowerProfile: 'sportovní kluby a průmyslové firmy na Benešovsku',
    amountRange: '100 000–720 000 Kč',
    highlight: 'zázemí pro mezinárodní střelecké centrum a průmysl',
    infrastructure: 'silnice II/112 a železnice do Benešova a Trhového Štěpánova',
    nearby: ['benesov', 'trhovy-stepanov', 'votice'],
  },
  {
    name: 'Votice',
    focusSectors: ['logistika D3', 'zemědělství'],
    loanUseCases: ['modernizace skladů', 'rekonstrukce rodinných domů'],
    borrowerProfile: 'podniky u dálnice D3 a farmy na rozhraní krajů',
    amountRange: '90 000–640 000 Kč',
    highlight: 'napojení na budovanou dálnici D3 a železniční koridor',
    infrastructure: 'železnice Praha–Tábor a dálnice D3',
    nearby: ['vlasim', 'benesov', 'sedlec-prcice'],
  },
]

const buildIntro = (seed: CitySeed) => {
  const sentences = [
    `${seed.name} ve Středočeském kraji propojuje ${seed.focusSectors.join(' a ')} a pravidelný kontakt s pražským trhem.`,
    `Místní domácnosti i podnikatelé nejčastěji financují ${seed.loanUseCases.join(' a ')}, využívají digitální podpis a rychlé online schvalování.`,
    `Poskytovatelé hodnotí ${seed.borrowerProfile}, kontrolují registry BRKI a NRKI a sledují, zda žadatel zvládne případné sezónní výkyvy příjmů.`,
    `Typické částky se pohybují kolem ${seed.amountRange}, splatnost bývá 24–96 měsíců a banky doporučují dodat detailní rozpočet i pojištění schopnosti splácet.`,
    `Loan AI Portál analyzuje ${seed.highlight}, započítává infrastrukturu (${seed.infrastructure}) a vybere licencované možnosti s transparentní RPSN a možností mimořádných splátek.`,
  ]

  return sentences.join(' ')
}

const buildMetaDescription = (seed: CitySeed) => {
  const description = `Srovnejte licencované půjčky v ${seed.name} pro {{year}}. AI průvodce prověří RPSN, registry a zohlední potřeby ${seed.focusSectors[0]}. Online žádost během pár minut.`
  return description.length > 155 ? description.slice(0, 155) : description
}

const buildFaq = (seed: CitySeed): { question: string; answer: string }[] => [
  {
    question: `Jaké dokumenty potřebuji pro financování v ${seed.name}?`,
    answer: `Standardem je občanský průkaz, potvrzení o příjmu a výpis z účtu. Podnikatelé z oblastí ${seed.focusSectors.join(', ')} předkládají i daňové přiznání a smlouvy s odběrateli.`,
  },
  {
    question: `Je možné kombinovat úvěr s dotacemi v ${seed.name}?`,
    answer: `Ano, žadatelé často kombinují bankovní úvěr s programy Nová zelená úsporám nebo regionální MAS. Poskytovatelé vyžadují rozhodnutí o přiznání dotace a harmonogram čerpání.`,
  },
  {
    question: `Jak rychle proběhne schválení půjčky pro ${seed.loanUseCases[0]}?`,
    answer: `Licencované banky schvalují žádosti obvykle do 2 pracovních dnů po doložení podkladů. Nebankovní partneři mohou rozhodnout rychleji, ale detailně prověřují registry a schopnost splácet.`,
  },
]

const buildRegulations = (seed: CitySeed) => {
  const regs = [...baseRegulations]
  regs.push(`Poskytovatelé v ${seed.name} sledují ${seed.highlight} a vyžadují dokumentaci k projektům v oblasti ${seed.focusSectors[0]}.`)
  regs.push(`Žadatelé využívající ${seed.loanUseCases[0]} dokládají také ${seed.infrastructure}.`)
  return regs.slice(0, 6)
}

const buildOfferHighlights = (seed: CitySeed) => [
  `Online žádost s napojením na partnery pro ${seed.focusSectors[0]}.`,
  `Možnost kombinovat úvěr s programy ${seed.loanUseCases[0].split(' ')[0]} a regionálními dotacemi.`,
  `Kontrola registrů a RPSN pro domácnosti s profilem: ${seed.borrowerProfile}.`,
]

export const stredoceskyRegionContent: CentralBohemianRegionContent = {
  name: 'Středočeský kraj',
  slug: 'stredocesky',
  heroTitle: 'Půjčky ve Středočeském kraji – licencované srovnání',
  heroSubtitle:
    'Porovnejte bankovní i nebankovní nabídky v největším českém regionu. AI model sleduje průmyslové zóny, suburbie Prahy i venkovské projekty a vyhodnocuje transparentní RPSN.',
  overview:
    'Středočeský kraj obklopuje Prahu a zahrnuje průmyslová centra Polabí, automobilový klastr Mladé Boleslavi, logistické areály na dálnicích D5, D8 a D11 i venkovské oblasti Posázaví a Brd. Poptávku po úvěrech určují rostoucí developerské projekty, rekonstrukce panelových sídlišť, programy energetických úspor a financování zemědělských provozů. Licencovaní poskytovatelé zde proto kladou důraz na kombinaci pravidelných příjmů, majetkových zajištění a dostupnosti dotačních titulů.',
  regulationSummary: [
    'ČNB vyžaduje kompletní předsmluvní informace a reprezentativní příklad pro spotřebitelské úvěry.',
    'Regionální MAS a kraj nabízí bonifikaci úroků pro zateplování rodinných domů a rekonstrukce brownfieldů.',
    'Poskytovatelé sledují expozici vůči developerským hypotékám v okolí Prahy a pravidelně aktualizují DSTI limity.',
    'Energetické projekty musí dokládat PENB a smlouvy o instalaci fotovoltaiky.',
    'Zprostředkovatelé uvádějí označení rel="sponsored" u reklamních odkazů dle zákona 257/2016 Sb.',
  ],
  regulatorLinks: [
    {
      label: 'Česká národní banka – registr poskytovatelů',
      href: 'https://apl.cnb.cz/apljerrsdad/JERRS.WEB07.INTRO?p_lang=cz',
      description: 'Ověření licence bank, družstevních záložen a nebankovních společností působících ve Středočeském kraji.',
    },
    {
      label: 'Středočeský kraj – energetické dotace',
      href: 'https://www.kr-stredocesky.cz/',
      description: 'Informace o krajských programech na zateplení, fotovoltaiku a revitalizaci brownfieldů.',
    },
    {
      label: 'Poradna Člověk v tísni – Středočeský kraj',
      href: 'https://www.clovekvtisni.cz/dluhove-poradenstvi',
      description: 'Bezplatné dluhové poradenství pro domácnosti řešící konsolidaci a restrukturalizaci závazků.',
    },
  ],
  featuredLenders: [
    {
      name: 'Komerční banka',
      licenseId: 'Bankovní licence ČNB',
      description: 'Spotřebitelské i podnikatelské úvěry s možností fixace na 3–10 let, odklad dvou splátek a zelené financování.',
      website: 'https://www.kb.cz/',
    },
    {
      name: 'ČSOB Střední Čechy',
      licenseId: 'Bankovní licence ČNB',
      description: 'Refinancování hypoték a kontokorenty pro logistické a automotive firmy s individuálním limitem.',
      website: 'https://www.csob.cz/',
    },
    {
      name: 'Raiffeisen stavební spořitelna',
      licenseId: 'Stavební spořitelna – ČNB',
      description: 'Úvěry na rekonstrukci a energetickou modernizaci rodinných domů s možností kombinace dotačních programů.',
      website: 'https://www.rsts.cz/',
    },
  ],
  topCities: [
    { name: 'Kladno', slug: 'kladno', focus: 'Modernizace panelových domů a logistických parků.' },
    { name: 'Mladá Boleslav', slug: 'mlada-boleslav', focus: 'Automotive, výzkum a bydlení pro zaměstnance.' },
    { name: 'Příbram', slug: 'pribram', focus: 'Transformace hornického regionu a univerzitní projekty.' },
    { name: 'Kolín', slug: 'kolin', focus: 'Polabský průmysl, logistika a bydlení pro TPCA.' },
    { name: 'Poděbrady', slug: 'podebrady', focus: 'Lázeňství, wellness a energetické úspory.' },
    { name: 'Říčany', slug: 'ricany', focus: 'Prémiové bydlení a soukromé zdravotnictví.' },
  ],
  blogTeasers: [
    {
      title: 'Jak financovat rekonstrukci domu ve Středočeském kraji',
      excerpt: 'Shrnuli jsme nejlevnější kombinace bankovních úvěrů, dotací NZÚ a krajských bonusů pro rodinné domy.',
      href: '/blog/stredocesky-home-improvement',
    },
    {
      title: 'Tipy pro podnikatele v logistice na D5 a D11',
      excerpt: 'AI hodnotí nabídky podle rychlosti čerpání, poplatků i dostupnosti skladových zástav.',
      href: '/blog/logistics-loans-stredocesky',
    },
    {
      title: 'Jak na úvěr pro agro projekty v Posázaví',
      excerpt: 'Porovnání bank, které kombinují úvěr s dotační podporou SZIF a MAS Posázaví.',
      href: '/blog/agro-finance-central-bohemia',
    },
  ],
}

const buildTitle = (seed: CitySeed) => {
  const displayName = seed.shortTitle ?? seed.name
  return `Půjčky v ${displayName}, Středočeský kraj – Srovnání {{year}}`
}

const citySlugList = citySeeds.map((seed) => slugify(seed.name))
const citySlugSet = new Set(citySlugList)

const buildNearbySlugs = (index: number, seed: CitySeed) => {
  const suggestions: string[] = []
  const currentSlug = citySlugList[index]

  const manual = seed.nearby ?? []
  for (const candidate of manual) {
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

const stredoceskyCityContentBase = citySeeds.map((seed, index) => {
  const slug = slugify(seed.name)
  const metaTitleTemplate = buildTitle(seed)
  const metaDescriptionTemplate = buildMetaDescription(seed)

  return {
    slug,
    name: seed.name,
    regionName: 'Středočeský kraj',
    countryName: 'Česká republika',
    metaTitleTemplate,
    metaDescriptionTemplate,
    intro: buildIntro(seed),
    offer: {
      affiliate: 9200,
      campaign: slug,
      partnerName: 'Volsor Středočeský',
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
  } satisfies CentralBohemianCityContent
})

export const stredoceskyCityContent: CentralBohemianCityContent[] = stredoceskyCityContentBase

export const stredoceskyCityMap: Record<string, CentralBohemianCityContent> = stredoceskyCityContent.reduce(
  (acc, city) => {
    acc[city.slug] = city
    return acc
  },
  {} as Record<string, CentralBohemianCityContent>,
)

export const stredoceskyCitySlugs = stredoceskyCityContent.map((city) => city.slug)

export const getStredoceskyCity = (slug: string) => stredoceskyCityMap[slug]

export const resolveStredoceskyMetadata = (slug: string, year: number = CURRENT_YEAR) => {
  const city = getStredoceskyCity(slug)
  if (!city) return null

  const title = city.metaTitleTemplate.replace('{{year}}', String(year))
  const description = city.metaDescriptionTemplate.replace('{{year}}', String(year))

  return {
    title,
    description,
    alternates: {
      canonical: `/cz/regions/stredocesky/${slug}`,
    },
  }
}
