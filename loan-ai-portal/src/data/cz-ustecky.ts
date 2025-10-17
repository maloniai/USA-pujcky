// Ústecký kraj (Ústí Region) - Czech Loan Comparison Hub
// Ústí nad Labem (92K) - Largest remaining uncovered region (821K population)

export const usteckyRegionContent = {
  name: 'Ústecký kraj',
  slug: 'ustecky',
  capital: 'Ústí nad Labem',
  cityCount: 45,
  population: 821000,
  averageRpsn: 19.3,
  growthFocus: 'Průmyslová transformace, chemie, logistika, zemědělství',
  overview:
    'Ústecký kraj je největším zbývajícím regionem s 821 000 obyvateli, který prochází významnou strukturální transformací z těžkého průmyslu směrem k moderním službám a logistice. Region má tradici v chemickém průmyslu, těžbě a zemědělství. Vyšší průměrné RPSN (19,3 %) odráží ekonomickou restrukturalizaci a mírně vyšší rizikový profil. Díky strategické poloze u dálnice D8 roste sektor logistiky a dopravy.',
  
  regulationSummary: [
    {
      title: 'Dohled České národní banky',
      description: 'Všichni poskytovatelé půjček v Ústeckém kraji musí mít licenci ČNB a dodržovat přísné standardy ochrany spotřebitele.'
    },
    {
      title: 'Zákon o spotřebitelském úvěru',
      description: 'Zákon č. 257/2016 Sb. garantuje transparentní podmínky, jasné RPSN a právo na informace před uzavřením smlouvy.'
    },
    {
      title: 'Licencování nebankovních poskytovatelů',
      description: 'Nebankovní společnosti v Ústí nad Labem a okolí musí být registrovány u ČNB a pravidelně reportovat svou činnost.'
    },
    {
      title: 'Limit sankcí a RPSN',
      description: 'Sankční poplatky jsou omezeny zákonem. Průměrné RPSN v Ústeckém kraji je 19,3 % ročně (vyšší kvůli ekonomické transformaci).'
    },
    {
      title: 'Ověření schopnosti splácet',
      description: 'Poskytovatelé musí posoudit vaši bonitu a schopnost splácet před schválením půjčky, i v případě nabídek přes internet.'
    },
    {
      title: '14denní právo odstoupení',
      description: 'Můžete odstoupit od smlouvy do 14 dnů bez udání důvodu a vrátit půjčku bez sankčních poplatků.'
    },
    {
      title: 'Ochrana spotřebitele a spory',
      description: 'V případě problémů se můžete obrátit na Finanční arbitr ČR nebo Českou obchodní inspekci.'
    },
    {
      title: 'GDPR a ochrana osobních údajů',
      description: 'Vaše osobní údaje jsou chráněny podle Nařízení EU 2016/679 (GDPR) a nesmí být zneužity.'
    }
  ],

  regulatorLinks: [
    {
      name: 'Česká národní banka',
      url: 'https://www.cnb.cz',
      description: 'Hlavní regulátor finančního trhu v ČR, registr poskytovatelů úvěrů'
    },
    {
      name: 'Finanční arbitr ČR',
      url: 'https://www.finarbitr.cz',
      description: 'Mimosoudní řešení sporů mezi spotřebiteli a finančními institucemi'
    },
    {
      name: 'dTest',
      url: 'https://www.dtest.cz',
      description: 'Nezávislé testy a porovnání finančních produktů, rady pro spotřebitele'
    },
    {
      name: 'Dluhová poradna',
      url: 'https://www.pomoctemevsem.cz',
      description: 'Bezplatné poradenství pro osoby v dluhové pasti, návody na řešení finančních potíží'
    }
  ],

  featuredLenders: [
    {
      name: 'Moneta Money Bank',
      description: 'Banka s pobočkami v Ústeckém kraji, osobní úvěry a konsolidace',
      loanRange: '30 000 - 500 000 Kč',
      rpsn: 'od 6,9 %',
      license: 'Licence ČNB'
    },
    {
      name: 'ČSOB',
      description: 'Velká banka s komplexními službami včetně hypoték a podnikatelských úvěrů',
      loanRange: '30 000 - 1 000 000 Kč',
      rpsn: 'od 6,4 %',
      license: 'Licence ČNB'
    },
    {
      name: 'Provident Financial',
      description: 'Nebankovní poskytovatel s možností osobního jednání v Ústeckém kraji',
      loanRange: '5 000 - 80 000 Kč',
      rpsn: 'od 19,9 %',
      license: 'Licence ČNB'
    },
    {
      name: 'Ferratum Bank',
      description: 'Online půjčky s rychlým schválením do 300 000 Kč',
      loanRange: '3 000 - 300 000 Kč',
      rpsn: 'od 18,9 %',
      license: 'Licence ČNB'
    }
  ],

  topCities: [
    {
      name: 'Ústí nad Labem',
      slug: 'usti-nad-labem',
      population: '92 000',
      economy: 'Chemický průmysl, logistika, obchod',
      shortDescription: 'Krajské město, největší v regionu, strategická poloha u dálnice D8'
    },
    {
      name: 'Most',
      slug: 'most',
      population: '64 000',
      economy: 'Těžba, energetika, průmysl',
      shortDescription: 'Historicky důlní město, dnes v ekonomické transformaci'
    },
    {
      name: 'Děčín',
      slug: 'decin',
      population: '48 000',
      economy: 'Logistika, cestovní ruch, průmysl',
      shortDescription: 'Město na Labi, důležitý dopravní uzel, turistické centrum'
    },
    {
      name: 'Teplice',
      slug: 'teplice',
      population: '50 000',
      economy: 'Lázeňství, zdravotnictví, služby',
      shortDescription: 'Lázeňské město s tradicí, rozvoj zdravotního cestovního ruchu'
    },
    {
      name: 'Chomutov',
      slug: 'chomutov',
      population: '48 000',
      economy: 'Strojírenství, obchod, služby',
      shortDescription: 'Průmyslové město s diverzifikovanou ekonomikou'
    },
    {
      name: 'Litvínov',
      slug: 'litvinov',
      population: '24 000',
      economy: 'Petrochemie (Unipetrol), rafinerie',
      shortDescription: 'Centrum petrochemického průmyslu, rafinerský komplex'
    }
  ],

  blogTeasers: [
    {
      title: 'Půjčky v Ústeckém kraji: Průvodce pro transformující se region',
      excerpt: 'Ústecký kraj prochází ekonomickou transformací. Zjistěte, jak najít spolehlivé půjčky a vyhnout se rizikům v měnícím se trhu.',
      category: 'Průvodce'
    },
    {
      title: 'Dluhové poradenství v Ústí nad Labem: Kde hledat pomoc',
      excerpt: 'Máte problémy se splácením? Kontaktujte odborné dluhové poradny v Ústeckém kraji a získejte pomoc zdarma.',
      category: 'Poradenství'
    },
    {
      title: 'Jak rozeznat nekalé půjčky: Ochrana spotřebitele',
      excerpt: 'Naučte se rozpoznat podvodné poskytovatele, ověřit licenci ČNB a chránit se před lichváři.',
      category: 'Ochrana'
    }
  ]
};

export const usteckyCities = [
  {
    name: 'Ústí nad Labem',
    slug: 'usti-nad-labem',
    intro:
      'Ústí nad Labem, krajské město s 92 000 obyvateli, je největším městem Ústeckého kraje a důležitým průmyslovým a logistickým centrem. Město leží strategicky u dálnice D8 spojující Prahu a Drážďany. Místní ekonomika prochází transformací z těžkého průmyslu směrem k logistice, službám a obchodu. Chemický průmysl stále hraje významnou roli.',
    highlights: [
      { label: 'Obyvatel', value: '92K' },
      { label: 'Průměrné RPSN', value: '19,3%' },
      { label: 'Poskytovatelé', value: '30+' },
      { label: 'Typická částka', value: '45K Kč' }
    ],
    focusSectors: [
      'Chemický průmysl (Spolchemie)',
      'Logistika a doprava (D8, Labe)',
      'Obchod a maloobchod',
      'Služby',
      'Stavebnictví',
      'Veřejná správa'
    ],
    loanUseCases: [
      'Osobní půjčky na bydlení a rekonstrukce',
      'Konsolidace dluhů',
      'Spotřebitelské úvěry (auta, elektronika)',
      'Financování malých podniků',
      'Rodinné výdaje',
      'Krátkodobé půjčky na neočekávané situace'
    ],
    borrowerProfile: {
      typical: 'Zaměstnanec v chemickém průmyslu, logistice nebo službách',
      income: '22 000 - 40 000 Kč měsíčně',
      ageRange: '28-55 let'
    },
    loanAmountRange: {
      min: 10000,
      max: 500000
    },
    aiFactors: [
      'Stabilní zaměstnání v místním průmyslu nebo logistice',
      'Bez záznamu v registru dlužníků',
      'Pravidelný měsíční příjem',
      'Pozitivní úvěrová historie',
      'Schopnost doložit zaměstnání'
    ],
    nearbyCities: ['Most', 'Děčín', 'Teplice', 'Litvínov', 'Chabařovice', 'Střekov'],
    faq: [
      {
        question: 'Jsou půjčky v Ústí nad Labem legální a kdo je dohlíží?',
        answer:
          'Ano, všechny legální půjčky poskytují společnosti licencované Českou národní bankou (ČNB). Vždy si ověřte registraci na webu ČNB před podpisem smlouvy.'
      },
      {
        question: 'Proč je průměrné RPSN v Ústeckém kraji vyšší?',
        answer:
          'Průměrné RPSN 19,3 % je vyšší kvůli ekonomické transformaci regionu a mírně vyššímu rizikovému profilu. Banky nabízejí od 6-8 %, nebankovní společnosti 18-25 %.'
      },
      {
        question: 'Mohu získat půjčku, i když mám záznam v registru?',
        answer:
          'Některé nebankovní společnosti půjčují i s negativním záznamem, ale za vyšší úrok (RPSN často přes 30 %). Vždy zvažte schopnost splácet.'
      },
      {
        question: 'Jak dlouho trvá schválení půjčky v Ústí nad Labem?',
        answer:
          'Online nebankovní půjčky se schvalují během 1-3 dnů. Bankovní úvěry trvají 1-2 týdny kvůli posouzení bonity.'
      },
      {
        question: 'Kde najdu pomoc, když mám problém se splácením?',
        answer:
          'Kontaktujte okamžitě poskytovatele a dohodněte nový splátkový kalendář. Můžete se také obrátit na Dluhovou poradnu v Ústí nad Labem nebo Finanční arbitr ČR.'
      }
    ]
  },

  {
    name: 'Most',
    slug: 'most',
    intro:
      'Most je město s 64 000 obyvateli, které má historii spojenou s těžbou hnědého uhlí a energetikou. Město prochází význačnou ekonomickou transformací a diverzifikací směrem k službám, obchodu a lehkému průmyslu. Nachází se v srdci ústeckého kraje a nabízí rostoucí příležitosti.',
    highlights: [
      { label: 'Obyvatel', value: '64K' },
      { label: 'Průměrné RPSN', value: '19,3%' },
      { label: 'Poskytovatelé', value: '24+' },
      { label: 'Typická částka', value: '40K Kč' }
    ],
    focusSectors: [
      'Těžba a energetika (transformace)',
      'Obchod a maloobchod',
      'Služby',
      'Stavebnictví',
      'Doprava',
      'Lehký průmysl'
    ],
    loanUseCases: [
      'Osobní půjčky na domácí potřeby',
      'Konsolidace dluhů',
      'Spotřebitelské úvěry (auta, elektronika)',
      'Financování rekvalifikace',
      'Rodinné výdaje',
      'Krátkodobé půjčky'
    ],
    borrowerProfile: {
      typical: 'Zaměstnanec v energetice, obchodě nebo službách',
      income: '20 000 - 36 000 Kč měsíčně',
      ageRange: '28-55 let'
    },
    loanAmountRange: {
      min: 10000,
      max: 400000
    },
    aiFactors: [
      'Stabilní zaměstnání v transformujícím se sektoru',
      'Bez záznamu v registru dlužníků',
      'Pravidelný měsíční příjem',
      'Pozitivní úvěrová historie',
      'Schopnost adaptace na nové trhy'
    ],
    nearbyCities: ['Ústí nad Labem', 'Litvínov', 'Teplice', 'Chomutov', 'Bílina', 'Osek'],
    faq: [
      {
        question: 'Jsou půjčky v Mostě regulovány?',
        answer:
          'Ano, všichni legální poskytovatelé musí mít licenci ČNB a dodržovat zákon č. 257/2016 Sb. o spotřebitelském úvěru.'
      },
      {
        question: 'Jaké jsou průměrné úroky v Mostě?',
        answer:
          'Banky nabízejí osobní úvěry od 6-10 % RPSN, nebankovní společnosti od 18-25 % v závislosti na bonit ě.'
      },
      {
        question: 'Mohu získat půjčku během rekvalifikace?',
        answer:
          'Ano, pokud máte příjem z podpory v nezaměstnanosti nebo brigády. Některé programy EU nabízejí i zvýhodněné úvěry na rekvalifikaci.'
      },
      {
        question: 'Jak dlouho trvá vyřízení půjčky?',
        answer:
          'Online nebankovní půjčky se schvalují během 1-3 dnů. Bankovní úvěry trvají 1-2 týdny.'
      },
      {
        question: 'Co když nemohu splácet?',
        answer:
          'Okamžitě kontaktujte poskytovatele. Můžete se také obrátit na Dluhovou poradnu Most nebo Finanční arbitr ČR.'
      }
    ]
  },

  {
    name: 'Děčín',
    slug: 'decin',
    intro:
      'Děčín je malebné město s 48 000 obyvateli na soutoku Labe a Ploučnice, které slouží jako důležitý dopravní uzel a turistické centrum. Město kombinuje průmyslové tradice s rostoucím cestovním ruchem díky blízkosti Českého Švýcarska a hradu Děčín.',
    highlights: [
      { label: 'Obyvatel', value: '48K' },
      { label: 'Průměrné RPSN', value: '19,3%' },
      { label: 'Poskytovatelé', value: '20+' },
      { label: 'Typická částka', value: '38K Kč' }
    ],
    focusSectors: [
      'Logistika a doprava (říční přístav, železnice)',
      'Cestovní ruch (České Švýcarsko)',
      'Průmysl (strojírenství)',
      'Obchod a služby',
      'Ubytovací a stravovací služby',
      'Veřejná správa'
    ],
    loanUseCases: [
      'Osobní půjčky na bydlení',
      'Financování podnikání v cestovním ruchu',
      'Spotřebitelské úvěry (auta, elektronika)',
      'Konsolidace dluhů',
      'Rodinné výdaje',
      'Investice do ubytování (penziony)'
    ],
    borrowerProfile: {
      typical: 'Zaměstnanec v logistice, cestovním ruchu nebo službách',
      income: '22 000 - 38 000 Kč měsíčně',
      ageRange: '25-55 let'
    },
    loanAmountRange: {
      min: 10000,
      max: 450000
    },
    aiFactors: [
      'Stabilní zaměstnání v dopravě nebo službách',
      'Bez záznamu v registru dlužníků',
      'Pravidelný příjem (i sezonní s potvrzením)',
      'Pozitivní úvěrová historie',
      'Vlastnění nemovitosti (výhoda)'
    ],
    nearbyCities: ['Ústí nad Labem', 'Rumburk', 'Varnsdorf', 'Benešov nad Ploučnicí', 'Česká Kamenice', 'Hřensko'],
    faq: [
      {
        question: 'Mohu získat půjčku na rozjezd penzionu v Děčíně?',
        answer:
          'Ano, existují podnikatelské úvěry pro OSVČ v cestovním ruchu. Banky vyžadují podnikatelský plán, nebankovní společnosti jsou flexibilnější.'
      },
      {
        question: 'Jaké úroky platí živnostníci v Děčíně?',
        answer:
          'OSVČ platí obvykle 18-25 % RPSN, v závislosti na bonit ě. Banky nabízejí nižší sazby, ale vyžadují více dokumentů.'
      },
      {
        question: 'Jak dlouho trvá schválení půjčky?',
        answer:
          'Online nebankovní půjčky se schvalují během 1-2 dnů. Bankovní úvěry vyžadují 1-3 týdny.'
      },
      {
        question: 'Je bezpečné půjčovat si online?',
        answer:
          'Ano, pokud má poskytovatel licenci ČNB. Vždy ověřte registraci na webu České národní banky.'
      },
      {
        question: 'Co když mám sezonní příjmy z cestovního ruchu?',
        answer:
          'Někteří poskytovatelé akceptují sezonní práci s potvrzením. Zvažte však schopnost splácet mimo sezónu.'
      }
    ]
  },

  {
    name: 'Teplice',
    slug: 'teplice',
    intro:
      'Teplice jsou lázeňské město s 50 000 obyvateli, které má bohatou historii v lázeňství a zdravotním cestovním ruchu. Město kombinuje tradiční lázeňství s moderními službami a zdravotnictvím. Nachází se v blízkosti dálnice D8.',
    highlights: [
      { label: 'Obyvatel', value: '50K' },
      { label: 'Průměrné RPSN', value: '19,3%' },
      { label: 'Poskytovatelé', value: '22+' },
      { label: 'Typická částka', value: '40K Kč' }
    ],
    focusSectors: [
      'Lázeňství a wellness',
      'Zdravotnictví',
      'Cestovní ruch',
      'Ubytovací a stravovací služby',
      'Obchod',
      'Veřejná správa'
    ],
    loanUseCases: [
      'Osobní půjčky na bydlení',
      'Financování wellness a lázeňských služeb',
      'Spotřebitelské úvěry',
      'Konsolidace dluhů',
      'Investice do zdravotního turismu',
      'Rodinné výdaje'
    ],
    borrowerProfile: {
      typical: 'Zaměstnanec v lázeňství, zdravotnictví nebo službách',
      income: '22 000 - 38 000 Kč měsíčně',
      ageRange: '25-55 let'
    },
    loanAmountRange: {
      min: 10000,
      max: 450000
    },
    aiFactors: [
      'Stabilní zaměstnání v lázeňství nebo zdravotnictví',
      'Bez záznamu v registru dlužníků',
      'Pravidelný měsíční příjem',
      'Pozitivní úvěrová historie',
      'Sezonní práce s potvrzením (akceptovatelné)'
    ],
    nearbyCities: ['Ústí nad Labem', 'Most', 'Duchcov', 'Bílina', 'Osek', 'Dubí'],
    faq: [
      {
        question: 'Jsou půjčky v Teplicích regulovány?',
        answer:
          'Ano, všichni legální poskytovatelé musí mít licenci ČNB a dodržovat zákon č. 257/2016 Sb.'
      },
      {
        question: 'Jaké jsou průměrné úroky v Teplicích?',
        answer:
          'Banky nabízejí od 6-10 % RPSN, nebankovní společnosti od 18-25 % v závislosti na bonit ě.'
      },
      {
        question: 'Mohu získat půjčku jako pracovník v lázeňství?',
        answer:
          'Ano, zaměstnanci v lázeňství a wellness jsou akceptováni. Potřebujete potvrzení o zaměstnání a pravidelném příjmu.'
      },
      {
        question: 'Jak dlouho trvá vyřízení?',
        answer:
          'Online půjčky 1-3 dny, bankovní úvěry 1-2 týdny.'
      },
      {
        question: 'Co když nemohu splácet?',
        answer:
          'Kontaktujte okamžitě poskytovatele. Můžete se obrátit na Dluhovou poradnu nebo Finanční arbitr ČR.'
      }
    ]
  },

  {
    name: 'Chomutov',
    slug: 'chomutov',
    intro:
      'Chomutov je průmyslové město s 48 000 obyvateli, které má diverzifikovanou ekonomiku založenou na strojírenství, obchodě a službách. Město leží strategicky u dálnice D7 a nabízí dobré dopravní spojení.',
    highlights: [
      { label: 'Obyvatel', value: '48K' },
      { label: 'Průměrné RPSN', value: '19,3%' },
      { label: 'Poskytovatelé', value: '20+' },
      { label: 'Typická částka', value: '38K Kč' }
    ],
    focusSectors: [
      'Strojírenství',
      'Obchod a maloobchod',
      'Služby',
      'Stavebnictví',
      'Doprava a logistika',
      'Veřejná správa'
    ],
    loanUseCases: [
      'Osobní půjčky na bydlení',
      'Spotřebitelské úvěry (auta, elektronika)',
      'Konsolidace dluhů',
      'Financování malých podniků',
      'Rodinné výdaje',
      'Krátkodobé půjčky'
    ],
    borrowerProfile: {
      typical: 'Zaměstnanec ve strojírenství, obchodě nebo službách',
      income: '22 000 - 38 000 Kč měsíčně',
      ageRange: '28-55 let'
    },
    loanAmountRange: {
      min: 10000,
      max: 450000
    },
    aiFactors: [
      'Stabilní zaměstnání v místním průmyslu',
      'Bez záznamu v registru dlužníků',
      'Pravidelný měsíční příjem',
      'Pozitivní úvěrová historie',
      'Věk 25-60 let'
    ],
    nearbyCities: ['Most', 'Ústí nad Labem', 'Kadaň', 'Jirkov', 'Klášterec nad Ohří', 'Vejprty'],
    faq: [
      {
        question: 'Jsou půjčky v Chomutově regulovány?',
        answer:
          'Ano, všichni legální poskytovatelé musí mít licenci ČNB a dodržovat zákon o spotřebitelském úvěru.'
      },
      {
        question: 'Jaké jsou průměrné úroky?',
        answer:
          'Banky nabízejí od 6-10 % RPSN, nebankovní společnosti od 18-25 %.'
      },
      {
        question: 'Mohu získat půjčku bez doložení příjmu?',
        answer:
          'Většina poskytovatelů vyžaduje potvrzení. Některé nebankovní společnosti půjčují bez doložení, ale za vyšší úrok (30 %+).'
      },
      {
        question: 'Jak dlouho trvá vyřízení?',
        answer:
          'Online půjčky 1-3 dny, bankovní úvěry 1-2 týdny.'
      },
      {
        question: 'Co když mám problém se splácením?',
        answer:
          'Okamžitě kontaktujte poskytovatele. Můžete se obrátit na Dluhovou poradnu nebo Finanční arbitr ČR.'
      }
    ]
  },

  {
    name: 'Litvínov',
    slug: 'litvinov',
    intro:
      'Litvínov je město s 24 000 obyvateli, které je centrem petrochemického průmyslu v České republice. Město je domovem rafinerie Unipetrol a nabízí stabilní zaměstnání v chemickém sektoru.',
    highlights: [
      { label: 'Obyvatel', value: '24K' },
      { label: 'Průměrné RPSN', value: '19,3%' },
      { label: 'Poskytovatelé', value: '14+' },
      { label: 'Typická částka', value: '35K Kč' }
    ],
    focusSectors: [
      'Petrochemie (Unipetrol, rafinerie)',
      'Chemický průmysl',
      'Obchod',
      'Služby',
      'Doprava',
      'Veřejná správa'
    ],
    loanUseCases: [
      'Osobní půjčky na bydlení',
      'Spotřebitelské úvěry (auta, elektronika)',
      'Konsolidace dluhů',
      'Rodinné výdaje',
      'Krátkodobé půjčky',
      'Financování vzdělání'
    ],
    borrowerProfile: {
      typical: 'Zaměstnanec v petrochemii, chemickém průmyslu nebo službách',
      income: '26 000 - 45 000 Kč měsíčně',
      ageRange: '28-55 let'
    },
    loanAmountRange: {
      min: 10000,
      max: 500000
    },
    aiFactors: [
      'Stabilní zaměstnání v petrochemii (vysoká bonita)',
      'Bez záznamu v registru dlužníků',
      'Nadprůměrný pravidelný příjem',
      'Pozitivní úvěrová historie',
      'Technické vzdělání (výhoda)'
    ],
    nearbyCities: ['Most', 'Ústí nad Labem', 'Meziboří', 'Lom', 'Osek', 'Jirkov'],
    faq: [
      {
        question: 'Jsou půjčky v Litvínově regulovány?',
        answer:
          'Ano, všichni legální poskytovatelé musí mít licenci ČNB a dodržovat zákon č. 257/2016 Sb.'
      },
      {
        question: 'Jaké jsou průměrné úroky pro zaměstnance petrochemie?',
        answer:
          'Zaměstnanci velkých firem jako Unipetrol často dostávají lepší podmínky. Banky nabízejí od 5,9 %, nebankovní od 15 %.'
      },
      {
        question: 'Mohu získat půjčku na vzdělání dětí?',
        answer:
          'Ano, osobní půjčky lze použít na vzdělání. Existují i speciální studentské půjčky s výhodnějšími podmínkami.'
      },
      {
        question: 'Jak dlouho trvá schválení?',
        answer:
          'Online půjčky 1-2 dny, bankovní úvěry 1-2 týdny.'
      },
      {
        question: 'Co když nemohu splácet?',
        answer:
          'Okamžitě kontaktujte poskytovatele. Můžete se obrátit na Dluhovou poradnu nebo Finanční arbitr ČR.'
      }
    ]
  }
];
