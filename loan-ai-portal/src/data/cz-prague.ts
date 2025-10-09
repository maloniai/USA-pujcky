export interface PragueRegionContent {
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

export interface PragueCityContent {
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
}

const CURRENT_YEAR = new Date().getFullYear()

export const pragueRegionContent: PragueRegionContent = {
  name: 'Praha',
  slug: 'praha',
  heroTitle: 'Půjčky v Praze – licencovaní poskytovatelé a AI srovnání',
  heroSubtitle:
    'Přehled bankovních i nebankovních půjček dostupných ve všech devíti městských částech hlavního města. Naše AI hlídá limity ČNB a upozorňuje na poplatky.',
  overview:
    'Praha představuje největší český úvěrový trh s vysokou koncentrací bank, fintech společností i specializovaných poskytovatelů pro podnikatele, turismus a prémiové služby. Kreditní politiku formují přísnější limity DSTI a DTI, zároveň však existuje široká nabídka flexibilních produktů – od kontokorentů přes konsolidace až po úvěry na rekonstrukce historických nemovitostí. Srovnání Loan AI Portálu kombinuje data z registrů, dostupnost poboček a digitální procesy, aby našlo transparentní řešení pro domácnosti i OSVČ v jednotlivých obvodech.',
  regulationSummary: [
    'ČNB vyžaduje licencované poskytovatele dle zákona č. 257/2016 Sb. se zápisem v registru.',
    'Pražské pobočky bank kontrolují limity DTI 8,5 a DSTI 50 % s výjimkami pro žadatele do 36 let.',
    'Nebankovní společnosti musí zveřejňovat plné RPSN, sankce a předsmluvní informace v češtině.',
    'Městské části podporují energetické úvěry a zelené projekty dotacemi z programu Nová zelená úsporám.',
    'Dluhové poradenství zajišťuje Magistrát hl. m. Prahy a organizace Člověk v tísni.',
  ],
  regulatorLinks: [
    {
      label: 'Registr poskytovatelů – Česká národní banka',
      href: 'https://apl.cnb.cz/apljerrsdad/JERRS.WEB07.INTRO?p_lang=cz',
      description: 'Veřejný seznam licencovaných poskytovatelů a zprostředkovatelů spotřebitelských úvěrů.',
    },
    {
      label: 'Magistrát hl. m. Prahy – Oddlužovací poradna',
      href: 'https://praha.eu/jnp/cz/o_meste/magistrat/index.html',
      description: 'Bezplatné poradenství ohledně splátkových kalendářů a insolvence.',
    },
    {
      label: 'Finanční arbitr ČR',
      href: 'https://www.finarbitr.cz/',
      description: 'Řešení sporů s poskytovateli úvěrů bez soudních poplatků.',
    },
  ],
  featuredLenders: [
    {
      name: 'Česká spořitelna',
      licenseId: 'Bankovní licence ČNB',
      description: 'Osobní půjčka se splatností až 120 měsíců, bez poplatku za sjednání, možnost odkladu splátek.',
      website: 'https://www.csas.cz/',
    },
    {
      name: 'Air Bank',
      licenseId: 'Bankovní licence ČNB',
      description: 'Půjčka s garantovanou sazbou pro klienty s historií a možností refixace dle bonity.',
      website: 'https://www.airbank.cz/',
    },
    {
      name: 'Zonky (PPF banka)',
      licenseId: 'Zprostředkovatel spotřebitelských úvěrů – ČNB',
      description: 'Digitální půjčka s individuální sazbou, možnost konsolidace a rychlého schválení.',
      website: 'https://www.zonky.cz/',
    },
  ],
  topCities: [
    { name: 'Praha 1', slug: 'praha-1', focus: 'Půjčky pro pohostinství, krátkodobé pronájmy a turistické služby.' },
    { name: 'Praha 2', slug: 'praha-2', focus: 'Stabilní zaměstnanci, zdravotnictví, konsolidace rodinných financí.' },
    { name: 'Praha 3', slug: 'praha-3', focus: 'Úvěry na rekonstrukci bytů, OSVČ ve službách, kreativní průmysl.' },
    { name: 'Praha 4', slug: 'praha-4', focus: 'Hypoteční překlenovací úvěry, rodinné domy, fintech zaměstnanci.' },
    { name: 'Praha 5', slug: 'praha-5', focus: 'Podnikatelské úvěry, mediální firmy, ekologické projekty.' },
    { name: 'Praha 6', slug: 'praha-6', focus: 'Diplomatické komunity, expati, jazykové školy, rekonstrukce vil.' },
    { name: 'Praha 7', slug: 'praha-7', focus: 'Kreativní hub Holešovice, coworking, kulturní granty.' },
    { name: 'Praha 8', slug: 'praha-8', focus: 'Rodinné byty, dopravní logistika, refinancování hypotečních úvěrů.' },
    { name: 'Praha 9', slug: 'praha-9', focus: 'Průmyslové podniky, retail parky, zaměstnanecké benefity.' },
  ],
  blogTeasers: [
    {
      title: 'Jak na konsolidaci úvěrů v Praze v roce ' + CURRENT_YEAR,
      excerpt:
        'Srovnali jsme postup pražských bank a fintech hráčů, kteří nabízí konsolidaci více půjček do jedné splátky včetně poplatků a DTI limitů.',
      href: '/blog/debt-consolidation-complete-guide',
    },
    {
      title: 'Kontokorent nebo osobní půjčka? Praha má obě řešení',
      excerpt:
        'Vysvětlujeme rozdíly mezi kontokorentem a spotřebitelskou půjčkou, jaké sazby očekávat v metropoli a kdy se vyplatí fixace.',
      href: '/blog/personal-loan-vs-credit-card-which-better',
    },
    {
      title: 'AI doporučení pro podnikatele v hlavním městě',
      excerpt:
        'Podívejte se, jak model Loan AI Portálu pracuje s daty o tržbách, sezónnosti a registru dlužníků u pražských OSVČ.',
      href: '/blog/how-to-get-approved-personal-loan-2025',
    },
  ],
}

export const pragueCityContent: PragueCityContent[] = [
  {
    slug: 'praha-1',
    name: 'Praha 1',
    regionName: 'Praha',
    countryName: 'Česká republika',
    metaTitleTemplate: 'Půjčky v Praze 1, Praha – Srovnání {{year}}',
    metaDescriptionTemplate:
      'Porovnejte licencované půjčky v Praze 1 (region Praha) pro {{year}}. Získejte transparentní bankovní i nebankovní nabídky s rychlou online žádostí.',
    intro:
      'Praha 1 spojuje historické centrum s vysokým turistickým provozem, což ovlivňuje strukturu úvěrů dostupných pro místní obyvatele i podnikatele. Licencovaní poskytovatelé zde nabízejí kontokorenty, krátkodobé překlenovací úvěry i nezajištěné spotřebitelské půjčky s fixní sazbou, často se zaměřením na pohostinství, cestovní ruch a služby. Obvyklé částky se pohybují mezi 50 000 a 600 000 Kč s dobou splatnosti 12–84 měsíců podle bonity a účelu. AI srovnání hodnotí registry BRKI/NRKI, limity DSTI a upozorňuje na nabídky s transparentními poplatky.',
    offer: {
      affiliate: 9100,
      campaign: 'praha1',
      partnerName: 'Volsor Praha 1',
      product: 'personal',
    },
    regulations: [
      'Maximální sankční úroky nesmějí překročit zákonný strop dle §122 zákona č. 257/2016 Sb.',
      'Poskytovatelé musí klientovi předat předsmluvní informace a reprezentativní příklad v češtině.',
      'Půjčky nad 200 000 Kč vyžadují prokazatelné doložení příjmů a ověření v registrech BRKI/NRKI.',
      'Magistrát hl. m. Prahy nabízí bezplatné dluhové poradenství pro domácnosti z Malé Strany a Starého Města.',
      'Krátkodobé podnikatelské úvěry podléhají kontrole živnostenského úřadu Prahy 1.',
      'U energií a rekonstrukcí lze kombinovat komerční půjčky s programy Nová zelená úsporám.',
    ],
    faq: [
      {
        question: 'Jak rychle získám schválení, pokud pracuji v pohostinství?',
        answer:
          'Banky obvykle vyžadují minimálně tři výplatní pásky a potvrzení zaměstnavatele. Nebankovní poskytovatelé mohou nabídnout rychlejší vyhodnocení, ale často s vyšším RPSN. AI porovnání zohlední stabilitu pracovního poměru a vývoj tržeb v HORECA segmentu.',
      },
      {
        question: 'Je možné financovat rekonstrukci chráněného bytu?',
        answer:
          'Ano, většina bank vyžaduje předložení rozpočtu a souhlasu památkářů. Půjčky se poskytují s delší splatností a fixací sazby, případně lze kombinovat s dotací z programu Oprav dům po babičce.',
      },
      {
        question: 'Jak funguje konsolidace krátkodobých půjček na Praze 1?',
        answer:
          'Konsolidace sjednotí více úvěrů do jedné splátky. Model Loan AI Portálu vybere nabídky s nižším RPSN a upozorní na případné poplatky za předčasné splacení původních smluv.',
      },
    ],
    nearby: ['praha-2', 'praha-3', 'praha-7', 'praha-8'],
    disclosure: {
      affiliate: 'Některé odkazy na této stránce jsou partnerské (sponzorované). Za zprostředkování můžeme získat provizi bez navýšení ceny pro žadatele.',
      example:
        'Reprezentativní příklad: Půjčka 250 000 Kč na 60 měsíců, pevná sazba 11,9 % p.a., RPSN 13,4 %, měsíční splátka 5 528 Kč, celková zaplacená částka 331 680 Kč. Nabídka závisí na bonitě a splnění podmínek poskytovatele.',
    },
  },
  {
    slug: 'praha-2',
    name: 'Praha 2',
    regionName: 'Praha',
    countryName: 'Česká republika',
    metaTitleTemplate: 'Půjčky v Praze 2, Praha – Srovnání {{year}}',
    metaDescriptionTemplate:
      'Najděte férové půjčky v Praze 2 pro {{year}}. Srovnání zahrnuje banky, družstevní záložny i licencované fintech poskytovatele v regionu Praha.',
    intro:
      'Praha 2 zahrnuje rezidenční části Vinohrad a Nuslí, kde převládají stabilní zaměstnanci, zdravotníci a pracovníci ve státní správě. Úvěrová nabídka se soustředí na konsolidace rodinných financí, modernizace bytů a financování energetických úspor. Běžné půjčky se pohybují mezi 80 000 a 700 000 Kč se splatností 24–96 měsíců. Poskytovatelé prověřují historii v registrech, poměr dluhu k příjmu a zaměstnanecké benefity. AI srovnání dává přednost nabídkám s možností mimořádných splátek bez sankcí a jasně komunikovanými poplatky.',
    offer: {
      affiliate: 9100,
      campaign: 'praha2',
      partnerName: 'Volsor Praha 2',
      product: 'personal',
    },
    regulations: [
      'Banky aplikují limity DTI 8,0 a DSTI 45 % pro žadatele nad 36 let.',
      'U energetických úvěrů lze využít kombinaci s městským grantem Praha 2 pro revitalizaci domů.',
      'Nebankovní společnosti musí doložit zápis v registru ČNB a transparentní RPSN.',
      'Zaměstnanci ve zdravotnictví mohou doložit stabilitu příjmu i pomocí potvrzení od nemocnice FN Vinohrady.',
      'Licencovaní zprostředkovatelé musí uvádět rel="sponsored" u všech komerčních nabídek online.',
      'Předčasné splacení je zdarma u půjček s variabilní sazbou do 200 000 Kč.',
    ],
    faq: [
      {
        question: 'Jaké dokumenty potřebují státní zaměstnanci?',
        answer:
          'Standardem je potvrzení o příjmu, výplatní pásky a pracovní smlouva na dobu neurčitou. Poskytovatelé vítají i potvrzení o služebním poměru, které snižuje rizikovou přirážku.',
      },
      {
        question: 'Je možné čerpat půjčku na energetické úspory?',
        answer:
          'Ano, kombinace bankovní půjčky a programu Nová zelená úsporám je běžná. AI porovná nabídky s možností čerpání na faktury i přímé financování dodavatele.',
      },
      {
        question: 'Jak funguje mimořádná splátka?',
        answer:
          'Podle zákona můžete ročně splatit až 25 % jistiny zdarma. Někteří poskytovatelé z Prahy 2 umožňují i vyšší mimořádné splátky bez sankce – AI je zařadí mezi preferované.',
      },
    ],
    nearby: ['praha-1', 'praha-3', 'praha-4', 'praha-5'],
    disclosure: {
      affiliate: 'Stránka obsahuje sponzorované nabídky od partnerů s licencí ČNB. AI však řadí výsledky podle transparentních nákladů.',
      example:
        'Reprezentativní příklad: Půjčka 220 000 Kč na 54 měsíců, pevná sazba 11,8 % p.a., RPSN 13,1 %, splátka 4 908 Kč, celkem 265 032 Kč.',
    },
  },
  {
    slug: 'praha-3',
    name: 'Praha 3',
    regionName: 'Praha',
    countryName: 'Česká republika',
    metaTitleTemplate: 'Půjčky v Praze 3, Praha – Srovnání {{year}}',
    metaDescriptionTemplate:
      'Žižkov a Vinohrady nabízí mix historických činžáků i startupových kanceláří. Porovnejte půjčky v Praze 3 pro {{year}} od licencovaných poskytovatelů.',
    intro:
      'Praha 3 zahrnuje Žižkov, část Vinohrad a Jarova. Obyvatelé řeší rekonstrukce činžovních bytů, konsolidace mikroúvěrů a financování kreativních provozoven. Typické půjčky se pohybují mezi 70 000 a 720 000 Kč se splatností 18–84 měsíců. Poskytovatelé posuzují registry BRKI/NRKI, limit DSTI i stabilitu příjmů z OSVČ. AI Loan Portal zvýhodňuje nabídky s možností mimořádných splátek zdarma a přehledným splátkovým kalendářem.',
    offer: {
      affiliate: 9100,
      campaign: 'praha3',
      partnerName: 'Volsor Praha 3',
      product: 'personal',
    },
    regulations: [
      'Žadatelé o rekonstrukci v památkové zóně musí doložit stanovisko Odboru památkové péče MHMP.',
      'Banky prověřují registry BRKI i NRKI a sledují, aby součet splátek nepřekročil DSTI 45 %.',
      'Nebankovní poskytovatelé musejí zveřejnit RPSN včetně poplatků za vedení úvěru a upomínek.',
      'Podnikatelé přikládají daňová přiznání a evidenci tržeb z POS systémů či e-shopu.',
      'U družstevních bytů je vyžadováno potvrzení o nájemním právu od SBD Praha 3.',
      'Půjčky nad 300 000 Kč vyžadují kompletní rozpočet rekonstrukce a harmonogram prací.',
    ],
    faq: [
      {
        question: 'Lze financovat ateliér nebo studio bez zástavy?',
        answer:
          'Ano, licencovaní poskytovatelé nabízejí nezajištěné úvěry do 400 000 Kč. Je však nutné doložit smlouvu o pronájmu prostoru a očekávané příjmy z činnosti.',
      },
      {
        question: 'Jak dlouho trvá konsolidace krátkodobých půjček?',
        answer:
          'Schválení konsolidace trvá obvykle 24–72 hodin od doplnění všech potvrzení o zůstatcích. AI vybere nabídky, které umožňují sloučení bez poplatku za předčasné splacení.',
      },
      {
        question: 'Musí OSVČ předkládat i účetní závěrku?',
        answer:
          'U vyšších částek banky vyžadují poslední dvě daňová přiznání a přehledy pro ČSSZ. Účetní závěrka pomůže získat nižší úrok díky prokázané stabilitě tržeb.',
      },
    ],
    nearby: ['praha-1', 'praha-2', 'praha-7', 'praha-9'],
    disclosure: {
      affiliate: 'Některé odkazy na této stránce jsou partnerské (sponzorované). Provize neovlivňuje pořadí srovnání, které řídí AI podle celkových nákladů.',
      example:
        'Reprezentativní příklad: Půjčka 280 000 Kč na 72 měsíců, pevná sazba 10,5 % p.a., RPSN 12,2 %, splátka 5 112 Kč, celkem 368 064 Kč. Nabídka závisí na bonitě.',
    },
  },
  {
    slug: 'praha-4',
    name: 'Praha 4',
    regionName: 'Praha',
    countryName: 'Česká republika',
    metaTitleTemplate: 'Půjčky v Praze 4, Praha – Srovnání {{year}}',
    metaDescriptionTemplate:
      'Rodinná Praha 4 (Pankrác, Krč, Braník) hledá výhodné půjčky pro {{year}}. Srovnejte licencované bankovní i fintech nabídky v regionu.',
    intro:
      'Praha 4 kombinuje sídlištní byty, rodinné domy i nové rezidenční projekty na Pankráci. Domácnosti řeší financování rekonstrukcí, konsolidaci dluhů a vyplacení dědictví. Typické půjčky se pohybují mezi 90 000 a 900 000 Kč se splatností 24–108 měsíců. Poskytovatelé posuzují energetický štítek, zatížení hypotékou a stabilitu příjmu. AI Loan Portal upřednostňuje nabídky s volitelným odkladem splátek a nulovými poplatky za mimořádné splátky.',
    offer: {
      affiliate: 9100,
      campaign: 'praha4',
      partnerName: 'Volsor Praha 4',
      product: 'personal',
    },
    regulations: [
      'Hypotéky na panelové byty vyžadují doložení energetického štítku PENB a potvrzení SVJ o bezdlužnosti.',
      'Banky respektují limity LTV 80 % (90 % pro mladé do 36 let) a sledují DSTI do 45 %.',
      'Městská část Praha 4 provozuje dluhovou poradnu “Bez dluhů”, která pomáhá s restrukturalizací úvěrů.',
      'Licencovaní zprostředkovatelé musejí u online nabídek používat označení rel="sponsored".',
      'Při konsolidaci musí žadatel informovat původního věřitele nejméně 30 dnů předem u smluv s fixací.',
      'Úvěry nad 500 000 Kč kontroluje interní compliance oddělení, které ověřuje skutečného vlastníka příjmů.',
    ],
    faq: [
      {
        question: 'Jak získám rodinnou půjčku s možností odkladu splátek?',
        answer:
          'Vyberte poskytovatele, který nabízí odklad až tří splátek ročně bez sankce. AI srovnání je upřednostňuje a upozorní na případné poplatky za aktivaci služby.',
      },
      {
        question: 'Lze kombinovat bankovní úvěr s programem Nová zelená úsporám?',
        answer:
          'Ano, pokud doložíte potvrzení o dotaci, banky umí snížit úrok i vyžadovanou spoluúčast. Předložte harmonogram čerpání dotace, aby mohl úvěr navazovat.',
      },
      {
        question: 'Je možné refinancovat hypotéku dříve než za 3 měsíce před fixací?',
        answer:
          'Ano, ale původní banka může účtovat náklady do výše účelně vynaložených výdajů. AI vyhledá nabídky, které tyto poplatky převzaly v rámci cashbacku.',
      },
    ],
    nearby: ['praha-2', 'praha-3', 'praha-5', 'praha-6'],
    disclosure: {
      affiliate: 'Srovnání může obsahovat partnerské nabídky. Pořadí však určuje AI podle celkové ceny úvěru a transparentnosti podmínek.',
      example:
        'Reprezentativní příklad: Půjčka 320 000 Kč na 84 měsíců, pevná sazba 10,2 % p.a., RPSN 11,6 %, splátka 5 219 Kč, celkem 438 396 Kč. Individuální nabídka závisí na bonitě domácnosti.',
    },
  },
  {
    slug: 'praha-5',
    name: 'Praha 5',
    regionName: 'Praha',
    countryName: 'Česká republika',
    metaTitleTemplate: 'Půjčky v Praze 5, Praha – Srovnání {{year}}',
    metaDescriptionTemplate:
      'Smíchov, Jinonice i Zličín hledají férové půjčky pro {{year}}. Srovnejte licencované bankovní i nebankovní nabídky v Praze 5.',
    intro:
      'Praha 5 kombinuje komerční zóny Anděl, logistiku na Zličíně a rodinné bydlení v Radlicích. Žadatelé poptávají financování podnikání, developerských projektů a modernizací bytů. Půjčky se obvykle pohybují mezi 100 000 a 950 000 Kč se splatností 24–96 měsíců. Poskytovatelé sledují cash flow firem, nájemní smlouvy i návštěvnost retail parků. AI Loan Portal zvýhodňuje nabídky s rychlým digitálním schválením a jasně uvedenými poplatky za čerpání.',
    offer: {
      affiliate: 9100,
      campaign: 'praha5',
      partnerName: 'Volsor Praha 5',
      product: 'personal',
    },
    regulations: [
      'Gastro podniky musejí doložit hygienický plán HACCP a nájemní smlouvu k provozovně.',
      'Financování developerských projektů vyžaduje předložení rozpočtu, harmonogramu a předprodejních smluv.',
      'Retail parky v Třebonicích dokládají nájemní kontrakty a pojištění zásob.',
      'Magistrát kontroluje označení sponzorovaných odkazů v reklamách na půjčky dle zákona o spotřebitelském úvěru.',
      'OSVČ předkládají daňové přiznání, evidenci tržeb a potvrzení o bezdlužnosti vůči ČSSZ a zdravotní pojišťovně.',
      'Úvěry nad 400 000 Kč vyžadují doložení účelu včetně faktur nebo objednávek dodavatelů.',
    ],
    faq: [
      {
        question: 'Jak financovat gastro podnik na Smíchově?',
        answer:
          'Připravte podnikatelský plán, odhad tržeb a potvrzení o hygieně. AI vybere poskytovatele s rychlým revolvingem zásob a úrokem navázaným na sezonní tržby.',
      },
      {
        question: 'Vyplatí se americká hypotéka pro investiční byt?',
        answer:
          'Ano, pokud potřebujete vyšší částku a nechcete dokládat účel. Sledujte ale LTV do 70 % a možnost mimořádných splátek k datu výročí fixace.',
      },
      {
        question: 'Co potřebuji při nákupu bytu v projektu Smíchov City?',
        answer:
          'Banky vyžadují rezervační smlouvu, harmonogram plateb a potvrzení developera o pojištění stavby. AI doporučí nabídky s postupným čerpáním dle milníků.',
      },
    ],
    nearby: ['praha-4', 'praha-6', 'praha-7', 'praha-8'],
    disclosure: {
      affiliate: 'Obsahuje partnerské odkazy. Provize neovlivňuje nezávislé skóre AI, které hodnotí celkové náklady a transparentnost smlouvy.',
      example:
        'Reprezentativní příklad: Půjčka 360 000 Kč na 72 měsíců, pevná sazba 10,8 % p.a., RPSN 12,4 %, splátka 6 105 Kč, celkem 439 560 Kč. Parametry se mohou lišit dle bonity.',
    },
  },
  {
    slug: 'praha-6',
    name: 'Praha 6',
    regionName: 'Praha',
    countryName: 'Česká republika',
    metaTitleTemplate: 'Půjčky v Praze 6, Praha – Srovnání {{year}}',
    metaDescriptionTemplate:
      'Dejvice, Břevnov a Ruzyně mají vysoký podíl expatů a diplomatů. Porovnejte půjčky v Praze 6 pro {{year}} s lokalizovanými podmínkami.',
    intro:
      'Praha 6 sdružuje ambasády, univerzity i rodinné rezidence se zahradami. Žadatelé často řeší refinancování hypoték, rekonstrukce vil a financování studia v zahraničí. Úvěry se pohybují od 120 000 do 1 200 000 Kč se splatností 24–120 měsíců. Poskytovatelé vyžadují přeložené dokumenty, potvrzení o pobytu a někdy i zahraniční ručitele. AI Loan Portal zvýhodňuje nabídky zajišťující bilingvní dokumentaci a možnost čerpat v EUR.',
    offer: {
      affiliate: 9100,
      campaign: 'praha6',
      partnerName: 'Volsor Praha 6',
      product: 'personal',
    },
    regulations: [
      'Expatrioti předkládají potvrzení o povolení k pobytu a pracovní smlouvu v češtině nebo angličtině.',
      'Diplomatické mise mohou využít zvýhodněné hypotéky, ale banka požaduje zástavu české nemovitosti.',
      'Poskytovatelé musí zajistit přeložené předsmluvní informace a reprezentativní příklad v českém i anglickém jazyce.',
      'Při financování historických vil je nutné doložit souhlas památkové péče s rekonstrukcí.',
      'Hypotéky v EUR se posuzují podle pravidel ČNB, včetně přepočtu příjmů kurzovým bezpečnostním polštářem.',
      'Studenti VŠCHT a ČVUT mohou doložit stipendia jako vedlejší příjem; banka ověří jejich pravidelnost.',
    ],
    faq: [
      {
        question: 'Jak postupovat, když nemám český trvalý pobyt?',
        answer:
          'Požádejte o úvěr s doložením dlouhodobého víza a pracovní smlouvy. Některé banky přijmou i účet v EUR, pokud doložíte pravidelný příjem a odvody daně v ČR.',
      },
      {
        question: 'Lze financovat energetické úspory v Břevnově?',
        answer:
          'Ano, doložte projektovou dokumentaci a případné čerpání dotace Nová zelená úsporám. AI vybere půjčky s odkladem splátek během realizace.',
      },
      {
        question: 'Jak funguje hypotéka pro diplomatickou misi?',
        answer:
          'Banka vyžaduje potvrzení Ministerstva zahraničních věcí, že žadatel působí v Praze. Splátky lze vést v EUR, ale je nutné doložit zástavu a souhlas zřizovatele mise.',
      },
    ],
    nearby: ['praha-5', 'praha-7', 'praha-8', 'praha-9'],
    disclosure: {
      affiliate: 'Srovnání zahrnuje partnerské nabídky. AI řadí výsledky podle celkové ceny v CZK nebo EUR a kvality zákaznické podpory.',
      example:
        'Reprezentativní příklad: Půjčka 450 000 Kč na 96 měsíců, pevná sazba 9,6 % p.a., RPSN 11,1 %, splátka 6 411 Kč, celkem 615 456 Kč. Přepočet v EUR se řídí aktuálním kurzem banky.',
    },
  },
  {
    slug: 'praha-7',
    name: 'Praha 7',
    regionName: 'Praha',
    countryName: 'Česká republika',
    metaTitleTemplate: 'Půjčky v Praze 7, Praha – Srovnání {{year}}',
    metaDescriptionTemplate:
      'Vyhodnoťte půjčky v Praze 7 pro {{year}}. Nabízíme nabídky pro kreativní hub Holešovice, coworking a kulturní projekty od licencovaných věřitelů.',
    intro:
      'Praha 7 zahrnuje rychle rostoucí Holešovice, Letnou a Troju s vysokou koncentrací kreativních podniků. Úvěry cílí na financování ateliérů, coworkingů, kulturních akcí i bydlení v revitalizovaných loftových projektech. Částky se pohybují od 70 000 do 650 000 Kč se splatností 18–72 měsíců. Poskytovatelé sledují cash flow projektů, grantové smlouvy a potenciální příjmy z pronájmu. AI systém zvýhodňuje nabídky s flexibilním čerpáním, možností odkladu splátek a jasně popsanými sankcemi.',
    offer: {
      affiliate: 9100,
      campaign: 'praha7',
      partnerName: 'Volsor Praha 7',
      product: 'personal',
    },
    regulations: [
      'Kulturní projekty mohou kombinovat komerční úvěr s granty Magistrátu hl. m. Prahy.',
      'Poskytovatelé požadují harmonogram akcí a doložení marketingového rozpočtu.',
      'Coworkingová centra dokládají nájemní smlouvy a seznam členů pro odhad cash flow.',
      'Nebankovní instituce hlásí úvěry do registrů BRKI/NRKI i SOLUS.',
      'Žadatelé s grantem Kreativní Praha musí doložit spolufinancování nejméně 30 % vlastních zdrojů.',
      'Půjčky nad 300 000 Kč na vybavení vyžadují faktury nebo objednávky od dodavatelů.',
    ],
    faq: [
      {
        question: 'Jak financovat kulturní akci v Holešovicích?',
        answer:
          'Připravte rozpočet, plán výnosů a potvrzení o uděleném grantu. AI vybere půjčky s možností čerpání po etapách a nízkými sankcemi při změně termínu.',
      },
      {
        question: 'Je možné získat úvěr na vybavení studia?',
        answer:
          'Ano, doložte faktury nebo smlouvu s dodavatelem. Poskytovatelé často nabízejí odklad první splátky, což AI zohledňuje ve skóre.',
      },
      {
        question: 'Potřebuji k žádosti o půjčku grantovou smlouvu?',
        answer:
          'Grant potvrzuje stabilitu financování a snižuje riziko projektu. Banky pak mohou nabídnout nižší sazbu i delší splatnost.',
      },
    ],
    nearby: ['praha-1', 'praha-3', 'praha-6', 'praha-8'],
    disclosure: {
      affiliate: 'Stránka obsahuje sponzorované nabídky od partnerů s licencí ČNB. AI však řadí výsledky podle transparentních nákladů.',
      example:
        'Reprezentativní příklad: Půjčka 220 000 Kč na 54 měsíců, pevná sazba 11,8 % p.a., RPSN 13,1 %, splátka 4 908 Kč, celkem 265 032 Kč.',
    },
  },
  {
    slug: 'praha-8',
    name: 'Praha 8',
    regionName: 'Praha',
    countryName: 'Česká republika',
    metaTitleTemplate: 'Půjčky v Praze 8, Praha – Srovnání {{year}}',
    metaDescriptionTemplate:
      'Najděte půjčky v Praze 8 pro {{year}}. Zaměřujeme se na Karlín, Libeň a Bohnice – bydlení, logistiku i refinancování u licencovaných poskytovatelů.',
    intro:
      'Praha 8 zahrnuje dynamický Karlín, logistické centrum v Libni i rezidenční Bohnice. Obyvatelé řeší refinancování hypoték, modernizace kanceláří, půjčky na vzdělání a financování dopravních podniků. Částky se pohybují mezi 90 000 a 800 000 Kč se splatností 24–96 měsíců. Poskytovatelé sledují stabilitu příjmů, nájemní smlouvy a napojení na dopravní uzly. AI model zvýhodňuje nabídky s možností online správy, transparentními poplatky za vedení úvěru a rychlým čerpáním.',
    offer: {
      affiliate: 9100,
      campaign: 'praha8',
      partnerName: 'Volsor Praha 8',
      product: 'personal',
    },
    regulations: [
      'Banky požadují potvrzení o příjmu a doložení všech stávajících úvěrů před konsolidací.',
      'Financování logistických firem vyžaduje smlouvy s odběrateli a pojištění zásilek.',
      'Při refinancování hypoték se kontroluje LTV tak, aby nepřekročilo 80 %.',
      'Nebankovní věřitelé musí zveřejnit kompletní sazebník poplatků a sankcí.',
      'Program Čistá energie Praha podporuje výměnu zdrojů tepla v Libni a Kobylisích.',
      'Magistrát poskytuje poradenství k dluhovým moratoriím při dočasných problémech.',
    ],
    faq: [
      {
        question: 'Jak probíhá refinancování hypotéky v Karlíně?',
        answer:
          'Dodejte aktuální zůstatek, list vlastnictví a odhad nemovitosti. AI vybere nabídky s nejnižší RPSN a poplatkem za přechod.',
      },
      {
        question: 'Lze financovat logistickou technologii?',
        answer:
          'Ano, poskytovatelé vyžadují smlouvy s distributory a plán cash flow. Výhodou je možnost leasingu nebo kombinované půjčky.',
      },
      {
        question: 'Podporují poskytovatelé půjčky na studium v Praze 8?',
        answer:
          'Ano, banky často nabízí zvýhodněné studentské úvěry s odkladem splátek během studia. AI vyhledá nabídky s fixovaným úrokem a možností mimořádné splátky po nástupu do zaměstnání.',
      },
    ],
    nearby: ['praha-1', 'praha-3', 'praha-5', 'praha-7'],
    disclosure: {
      affiliate: 'Některé odkazy na této stránce jsou partnerské (sponzorované). Za zprostředkování můžeme získat provizi bez navýšení ceny pro žadatele.',
      example:
        'Reprezentativní příklad: Půjčka 350 000 Kč na 84 měsíců, pevná sazba 10,2 % p.a., RPSN 11,5 %, měsíční splátka 5 200 Kč, celková zaplacená částka 436 800 Kč. Nabídka závisí na bonitě a splnění podmínek poskytovatele.',
    },
  },
  {
    slug: 'praha-9',
    name: 'Praha 9',
    regionName: 'Praha',
    countryName: 'Česká republika',
    metaTitleTemplate: 'Půjčky v Praze 9, Praha – Srovnání {{year}}',
    metaDescriptionTemplate:
      'Vysočany, Prosek a Letňany řeší průmyslové i rezidenční financování. Srovnejte půjčky v Praze 9 pro {{year}} s důrazem na zaměstnanecké benefity.',
    intro:
      'Praha 9 kombinuje průmyslové areály, logistiku a nové rezidenční projekty. Žadatelé často financují výrobní linky, retail parky i výstavbu nízkoenergetických domů. Půjčky se pohybují mezi 100 000 a 1 000 000 Kč se splatností 24–108 měsíců. Poskytovatelé sledují dotační programy, smlouvy s odběrateli a stabilitu zaměstnání v automobilovém průmyslu. AI Loan Portal zvýrazňuje nabídky s firemními benefity a možností čerpání v několika tranších.',
    offer: {
      affiliate: 9100,
      campaign: 'praha9',
      partnerName: 'Volsor Praha 9',
      product: 'personal',
    },
    regulations: [
      'Výrobní firmy využívající dotace OP TAK musejí doložit rozhodnutí o přiznání podpory.',
      'Retail parky předkládají nájemní smlouvy a údaje o návštěvnosti pro odhad cash flow.',
      'Zaměstnanci automobilového průmyslu mohou doložit benefitní program zaměstnavatele (bezúročné půjčky).',
      'Banky kontrolují, zda kombinovaná půjčka nepřekročí limit DSTI 45 % a DTI 8,5.',
      'Nebankovní poskytovatelé mají povinnost hlásit smlouvy do registrů BRKI/NRKI i SOLUS.',
      'Poradna Praha 9 nabízí bezplatné intervence při prodlení delším než 30 dní a pomáhá se splátkovými kalendáři.',
    ],
    faq: [
      {
        question: 'Kde získám úvěr na výrobní linku ve Vysočanech?',
        answer:
          'Připravte investiční plán, kalkulaci návratnosti a potvrzení o dotaci, pokud ji čerpáte. AI doporučí banku nebo leasing s možností postupného čerpání.',
      },
      {
        question: 'Jak fungují zaměstnanecké půjčky ve velkých továrnách?',
        answer:
          'Zaměstnavatel nabízí bezúročné nebo nízkoúročené půjčky do 200 000 Kč. Bankovní nabídku můžete kombinovat, pokud doložíte potvrzení o srážkách ze mzdy.',
      },
      {
        question: 'Lze financovat nákup bytu v Letňanech se solární elektrárnou?',
        answer:
          'Ano, banka ocení energetický standard budovy a umožní čerpat úvěr na fotovoltaiku. AI vybere nabídky kombinující hypotéku a zelený úvěr.',
      },
    ],
    nearby: ['praha-6', 'praha-7', 'praha-8', 'praha-3'],
    disclosure: {
      affiliate: 'Obsahuje sponzorované nabídky. Provize neovlivňuje pořadí, které AI skládá podle celkové ceny úvěru a míry transparentnosti.',
      example:
        'Reprezentativní příklad: Půjčka 420 000 Kč na 84 měsíců, pevná sazba 10,1 % p.a., RPSN 11,7 %, splátka 7 030 Kč, celkem 590 520 Kč. Podmínky se liší dle bonity a účelu.',
    },
  },
]

export const pragueCityMap: Record<string, PragueCityContent> = pragueCityContent.reduce(
  (acc, city) => {
    acc[city.slug] = city
    return acc
  },
  {} as Record<string, PragueCityContent>,
)

export const pragueCitySlugs = pragueCityContent.map((city) => city.slug)

export const getPragueCity = (slug: string) => pragueCityMap[slug]

export const resolvePragueCityMetadata = (slug: string, year: number = CURRENT_YEAR) => {
  const city = getPragueCity(slug)
  if (!city) {
    return null
  }

  const title = city.metaTitleTemplate.replace('{{year}}', String(year))
  const description = city.metaDescriptionTemplate.replace('{{year}}', String(year))

  return {
    title,
    description,
    alternates: {
      canonical: `/cz/regions/praha/${slug}`,
    },
  }
}