/**
 * Poland Regions Data for Loan Information
 * 16 Voivodeships (Województwa) of Poland
 */

export interface PolandRegionInfo {
  name: string
  slug: string
  namePl: string // Polish name
  population: string
  avgLoanAmount: string
  avgRate: string
  maxLoanAmount: string
  description: string
  descriptionPl: string
  regulations: string[]
  regulationsPl: string[]
  majorCities: string[]
  topLoanTypes: string[]
  topLoanTypesPl: string[]
}

export const polandRegions: PolandRegionInfo[] = [
  {
    name: 'Masovian Voivodeship',
    slug: 'mazowieckie',
    namePl: 'Województwo Mazowieckie',
    population: '5.5M',
    avgLoanAmount: '25,000 PLN',
    avgRate: '8.5%',
    maxLoanAmount: '200,000 PLN',
    description: 'The capital region with Warsaw, offering the highest loan availability and most competitive rates in Poland.',
    descriptionPl: 'Region stołeczny z Warszawą, oferujący najwyższą dostępność pożyczek i najbardziej konkurencyjne stawki w Polsce.',
    regulations: [
      'KNF (Polish Financial Supervision Authority) regulated',
      'Maximum non-bank loan cost: 25% of principal + 30% annually',
      'Consumer Credit Act protection',
      'Mandatory 14-day withdrawal period',
      'Maximum total cost cannot exceed 100% of principal',
      'Licensed lender requirement',
      'BIK credit bureau check mandatory',
      'Anti-Money Laundering (AML) compliance required'
    ],
    regulationsPl: [
      'Nadzór Komisji Nadzoru Finansowego (KNF)',
      'Maksymalny koszt pożyczki pozabankowej: 25% kapitału + 30% rocznie',
      'Ochrona zgodnie z Ustawą o kredycie konsumenckim',
      'Obowiązkowy 14-dniowy okres odstąpienia od umowy',
      'Maksymalny całkowity koszt nie może przekroczyć 100% kapitału',
      'Wymóg posiadania licencji przez pożyczkodawcę',
      'Obowiązkowe sprawdzenie w BIK (Biuro Informacji Kredytowej)',
      'Wymóg zgodności z przepisami przeciwko praniu pieniędzy (AML)'
    ],
    majorCities: ['Warszawa', 'Radom', 'Płock', 'Siedlce', 'Ostrołęka'],
    topLoanTypes: ['Personal Loans', 'Debt Consolidation', 'Home Renovation'],
    topLoanTypesPl: ['Pożyczki osobiste', 'Konsolidacja długów', 'Remont mieszkania']
  },
  {
    name: 'Silesian Voivodeship',
    slug: 'slaskie',
    namePl: 'Województwo Śląskie',
    population: '4.5M',
    avgLoanAmount: '22,000 PLN',
    avgRate: '9.2%',
    maxLoanAmount: '150,000 PLN',
    description: 'Industrial heartland with strong economic activity and competitive loan market.',
    descriptionPl: 'Przemysłowe centrum z silną aktywnością gospodarczą i konkurencyjnym rynkiem pożyczkowym.',
    regulations: [
      'KNF supervision and licensing',
      'Cost caps: 25% initial + 30% per annum',
      'Total repayment cap: 200% of borrowed amount',
      '14-day free cancellation right',
      'Written contract mandatory',
      'Clear APR disclosure required',
      'Consumer rights under Polish Civil Code',
      'EU Consumer Credit Directive compliance'
    ],
    regulationsPl: [
      'Nadzór i licencjonowanie KNF',
      'Limity kosztów: 25% początkowo + 30% rocznie',
      'Limit całkowitej spłaty: 200% pożyczonej kwoty',
      'Prawo do bezpłatnej rezygnacji w ciągu 14 dni',
      'Obowiązkowa umowa pisemna',
      'Wymagane jasne przedstawienie RRSO',
      'Prawa konsumenta zgodnie z Kodeksem Cywilnym',
      'Zgodność z Dyrektywą UE o kredycie konsumenckim'
    ],
    majorCities: ['Katowice', 'Częstochowa', 'Sosnowiec', 'Gliwice', 'Zabrze', 'Bielsko-Biała'],
    topLoanTypes: ['Personal Loans', 'Auto Loans', 'Business Loans'],
    topLoanTypesPl: ['Pożyczki osobiste', 'Pożyczki samochodowe', 'Pożyczki biznesowe']
  },
  {
    name: 'Greater Poland Voivodeship',
    slug: 'wielkopolskie',
    namePl: 'Województwo Wielkopolskie',
    population: '3.5M',
    avgLoanAmount: '20,000 PLN',
    avgRate: '9.5%',
    maxLoanAmount: '120,000 PLN',
    description: 'Economic powerhouse with Poznań, offering diverse loan products and competitive rates.',
    descriptionPl: 'Potęga gospodarcza z Poznaniem, oferująca różnorodne produkty pożyczkowe i konkurencyjne stawki.',
    regulations: [
      'Licensed by KNF',
      'Interest rate caps enforced',
      'Maximum costs: 25% + 30% annually',
      'Consumer protection laws apply',
      'Mandatory credit assessment',
      'Right to early repayment',
      'Transparent pricing required',
      'Complaints procedure mandatory'
    ],
    regulationsPl: [
      'Licencja KNF wymagana',
      'Egzekwowane limity oprocentowania',
      'Maksymalne koszty: 25% + 30% rocznie',
      'Obowiązują przepisy o ochronie konsumentów',
      'Obowiązkowa ocena zdolności kredytowej',
      'Prawo do wcześniejszej spłaty',
      'Wymagana przejrzysta wycena',
      'Obowiązkowa procedura reklamacyjna'
    ],
    majorCities: ['Poznań', 'Kalisz', 'Konin', 'Piła', 'Ostrów Wielkopolski'],
    topLoanTypes: ['Personal Loans', 'Education', 'Medical'],
    topLoanTypesPl: ['Pożyczki osobiste', 'Edukacja', 'Medyczne']
  },
  {
    name: 'Lower Silesian Voivodeship',
    slug: 'dolnoslaskie',
    namePl: 'Województwo Dolnośląskie',
    population: '2.9M',
    avgLoanAmount: '21,000 PLN',
    avgRate: '9.3%',
    maxLoanAmount: '130,000 PLN',
    description: 'Southwestern region with Wrocław, offering strong financial services and loan availability.',
    descriptionPl: 'Region południowo-zachodni z Wrocławiem, oferujący silne usługi finansowe i dostępność pożyczek.',
    regulations: [
      'KNF regulated financial institutions',
      'Cost limits strictly enforced',
      'Consumer Credit Act (2011) protection',
      '14-day cooling-off period',
      'Creditworthiness assessment mandatory',
      'Maximum APR disclosure required',
      'Written loan agreement required',
      'Right to early repayment without penalty'
    ],
    regulationsPl: [
      'Instytucje finansowe regulowane przez KNF',
      'Ściśle egzekwowane limity kosztów',
      'Ochrona Ustawy o Kredycie Konsumenckim (2011)',
      '14-dniowy okres na odstąpienie',
      'Obowiązkowa ocena zdolności kredytowej',
      'Wymagane ujawnienie maksymalnego RRSO',
      'Wymagana pisemna umowa pożyczki',
      'Prawo do wcześniejszej spłaty bez kary'
    ],
    majorCities: ['Wrocław', 'Wałbrzych', 'Legnica', 'Jelenia Góra', 'Lubin'],
    topLoanTypes: ['Personal Loans', 'Home Improvement', 'Debt Consolidation'],
    topLoanTypesPl: ['Pożyczki osobiste', 'Remont domu', 'Konsolidacja długów']
  },
  {
    name: 'Lesser Poland Voivodeship',
    slug: 'malopolskie',
    namePl: 'Województwo Małopolskie',
    population: '3.4M',
    avgLoanAmount: '19,500 PLN',
    avgRate: '9.7%',
    maxLoanAmount: '110,000 PLN',
    description: 'Southern region with Kraków, combining cultural heritage with modern financial services.',
    descriptionPl: 'Region południowy z Krakowem, łączący dziedzictwo kulturowe z nowoczesnymi usługami finansowymi.',
    regulations: [
      'KNF licensing and oversight',
      'Maximum loan costs capped by law',
      'Total cost limit: 100% of principal',
      'Consumer rights protection',
      'BIK credit history check required',
      'Transparent fee structure mandatory',
      'Right to withdraw within 14 days',
      'Anti-usury laws enforced'
    ],
    regulationsPl: [
      'Licencjonowanie i nadzór KNF',
      'Maksymalne koszty pożyczki ograniczone prawem',
      'Limit całkowitych kosztów: 100% kapitału',
      'Ochrona praw konsumentów',
      'Wymagane sprawdzenie historii w BIK',
      'Obowiązkowa przejrzysta struktura opłat',
      'Prawo odstąpienia w ciągu 14 dni',
      'Egzekwowane przepisy antylichwiarskie'
    ],
    majorCities: ['Kraków', 'Tarnów', 'Nowy Sącz', 'Oświęcim', 'Chrzanów'],
    topLoanTypes: ['Personal Loans', 'Tourism', 'Education'],
    topLoanTypesPl: ['Pożyczki osobiste', 'Turystyka', 'Edukacja']
  },
  {
    name: 'Łódź Voivodeship',
    slug: 'lodzkie',
    namePl: 'Województwo Łódzkie',
    population: '2.4M',
    avgLoanAmount: '18,000 PLN',
    avgRate: '10.1%',
    maxLoanAmount: '100,000 PLN',
    description: 'Central Poland region with growing access to personal loans and microfinance.',
    descriptionPl: 'Region centralnej Polski z rosnącym dostępem do pożyczek osobistych i mikrofinansowania.',
    regulations: [
      'KNF supervision applies',
      'Maximum initial cost: 25% of loan',
      'Maximum annual interest: 30%',
      'Consumer Credit Act protection',
      'Mandatory affordability check',
      'Clear contract terms required',
      '14-day withdrawal right',
      'Licensed institutions only'
    ],
    regulationsPl: [
      'Obowiązuje nadzór KNF',
      'Maksymalny koszt początkowy: 25% pożyczki',
      'Maksymalne oprocentowanie roczne: 30%',
      'Ochrona Ustawy o Kredycie Konsumenckim',
      'Obowiązkowe sprawdzenie zdolności płatniczej',
      'Wymagane jasne warunki umowy',
      'Prawo odstąpienia w ciągu 14 dni',
      'Tylko licencjonowane instytucje'
    ],
    majorCities: ['Łódź', 'Piotrków Trybunalski', 'Pabianice', 'Tomaszów Mazowiecki', 'Bełchatów'],
    topLoanTypes: ['Personal Loans', 'Small Business', 'Emergency Loans'],
    topLoanTypesPl: ['Pożyczki osobiste', 'Małe firmy', 'Pożyczki awaryjne']
  },
  {
    name: 'Pomeranian Voivodeship',
    slug: 'pomorskie',
    namePl: 'Województwo Pomorskie',
    population: '2.3M',
    avgLoanAmount: '21,500 PLN',
    avgRate: '9.4%',
    maxLoanAmount: '125,000 PLN',
    description: 'Northern coastal region with Gdańsk, offering diverse financial products and services.',
    descriptionPl: 'Północny region nadmorski z Gdańskiem, oferujący różnorodne produkty i usługi finansowe.',
    regulations: [
      'KNF regulated lenders',
      'Cost caps enforced by law',
      'Maximum total cost: 100% of principal',
      'Consumer protection guaranteed',
      'Credit bureau verification required',
      'Transparent APR disclosure',
      'Right to early settlement',
      'EU consumer credit rules apply'
    ],
    regulationsPl: [
      'Pożyczkodawcy regulowani przez KNF',
      'Limity kosztów egzekwowane prawem',
      'Maksymalny całkowity koszt: 100% kapitału',
      'Gwarantowana ochrona konsumenta',
      'Wymagana weryfikacja w biurze kredytowym',
      'Przejrzyste ujawnienie RRSO',
      'Prawo do wcześniejszej spłaty',
      'Obowiązują przepisy UE o kredycie konsumenckim'
    ],
    majorCities: ['Gdańsk', 'Gdynia', 'Sopot', 'Słupsk', 'Wejherowo'],
    topLoanTypes: ['Personal Loans', 'Maritime Business', 'Home Renovation'],
    topLoanTypesPl: ['Pożyczki osobiste', 'Biznes morski', 'Remont domu']
  },
  {
    name: 'Lublin Voivodeship',
    slug: 'lubelskie',
    namePl: 'Województwo Lubelskie',
    population: '2.1M',
    avgLoanAmount: '17,000 PLN',
    avgRate: '10.5%',
    maxLoanAmount: '90,000 PLN',
    description: 'Eastern region with expanding financial services and increasing loan accessibility.',
    descriptionPl: 'Region wschodni z rozwijającymi się usługami finansowymi i rosnącą dostępnością pożyczek.',
    regulations: [
      'Licensed by Polish Financial Authority',
      'Interest rate caps applied',
      'Maximum costs: 25% + 30% per year',
      'Consumer rights protected',
      'Affordability assessment required',
      'Clear pricing mandatory',
      '14-day cancellation period',
      'Written agreement required'
    ],
    regulationsPl: [
      'Licencja polskiego organu nadzoru finansowego',
      'Stosowane limity oprocentowania',
      'Maksymalne koszty: 25% + 30% rocznie',
      'Chronione prawa konsumentów',
      'Wymagana ocena zdolności płatniczej',
      'Obowiązkowa jasna wycena',
      '14-dniowy okres odstąpienia',
      'Wymagana umowa pisemna'
    ],
    majorCities: ['Lublin', 'Chełm', 'Zamość', 'Biała Podlaska', 'Puławy'],
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Education'],
    topLoanTypesPl: ['Pożyczki osobiste', 'Rolnicze', 'Edukacja']
  },
  {
    name: 'West Pomeranian Voivodeship',
    slug: 'zachodniopomorskie',
    namePl: 'Województwo Zachodniopomorskie',
    population: '1.7M',
    avgLoanAmount: '20,000 PLN',
    avgRate: '9.8%',
    maxLoanAmount: '115,000 PLN',
    description: 'Northwestern coastal region with Szczecin, providing competitive loan options.',
    descriptionPl: 'Północno-zachodni region nadmorski ze Szczecinem, zapewniający konkurencyjne opcje pożyczkowe.',
    regulations: [
      'KNF oversight and regulation',
      'Maximum loan costs limited',
      'Total repayment cap enforced',
      'Consumer Credit Law protection',
      'Creditworthiness check mandatory',
      'Transparent terms required',
      'Right to early repayment',
      'Licensed operators only'
    ],
    regulationsPl: [
      'Nadzór i regulacja KNF',
      'Ograniczone maksymalne koszty pożyczki',
      'Egzekwowany limit całkowitej spłaty',
      'Ochrona Prawa Kredytu Konsumenckiego',
      'Obowiązkowe sprawdzenie zdolności kredytowej',
      'Wymagane przejrzyste warunki',
      'Prawo do wcześniejszej spłaty',
      'Tylko licencjonowani operatorzy'
    ],
    majorCities: ['Szczecin', 'Koszalin', 'Stargard', 'Kołobrzeg', 'Świnoujście'],
    topLoanTypes: ['Personal Loans', 'Tourism', 'Small Business'],
    topLoanTypesPl: ['Pożyczki osobiste', 'Turystyka', 'Małe firmy']
  },
  {
    name: 'Subcarpathian Voivodeship',
    slug: 'podkarpackie',
    namePl: 'Województwo Podkarpackie',
    population: '2.1M',
    avgLoanAmount: '16,500 PLN',
    avgRate: '10.8%',
    maxLoanAmount: '85,000 PLN',
    description: 'Southeastern region with growing financial inclusion and loan accessibility.',
    descriptionPl: 'Region południowo-wschodni z rosnącą inkluzją finansową i dostępnością pożyczek.',
    regulations: [
      'KNF licensed institutions',
      'Cost caps: 25% initial + 30% annual',
      'Maximum total cost limit',
      'Consumer protection laws',
      'BIK check required',
      'Clear loan terms mandatory',
      '14-day withdrawal right',
      'Anti-discrimination rules apply'
    ],
    regulationsPl: [
      'Instytucje z licencją KNF',
      'Limity kosztów: 25% początkowy + 30% roczny',
      'Limit maksymalnego całkowitego kosztu',
      'Przepisy ochrony konsumentów',
      'Wymagane sprawdzenie BIK',
      'Obowiązkowe jasne warunki pożyczki',
      'Prawo odstąpienia w ciągu 14 dni',
      'Obowiązują przepisy antydyskryminacyjne'
    ],
    majorCities: ['Rzeszów', 'Przemyśl', 'Stalowa Wola', 'Mielec', 'Tarnobrzeg'],
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Home Improvement'],
    topLoanTypesPl: ['Pożyczki osobiste', 'Rolnicze', 'Remont domu']
  },
  {
    name: 'Kuyavian-Pomeranian Voivodeship',
    slug: 'kujawsko-pomorskie',
    namePl: 'Województwo Kujawsko-Pomorskie',
    population: '2.0M',
    avgLoanAmount: '18,500 PLN',
    avgRate: '10.0%',
    maxLoanAmount: '105,000 PLN',
    description: 'Central-northern region with Bydgoszcz and Toruń, offering diverse loan products.',
    descriptionPl: 'Region środkowo-północny z Bydgoszczą i Toruniem, oferujący zróżnicowane produkty pożyczkowe.',
    regulations: [
      'Financial Supervision Authority regulated',
      'Interest caps enforced',
      'Maximum costs: 25% + 30% annually',
      'Consumer rights protected',
      'Credit assessment required',
      'Transparent pricing',
      'Early repayment allowed',
      'Written contract mandatory'
    ],
    regulationsPl: [
      'Regulowane przez Urząd Nadzoru Finansowego',
      'Egzekwowane limity oprocentowania',
      'Maksymalne koszty: 25% + 30% rocznie',
      'Chronione prawa konsumentów',
      'Wymagana ocena kredytowa',
      'Przejrzysta wycena',
      'Dozwolona wcześniejsza spłata',
      'Obowiązkowa umowa pisemna'
    ],
    majorCities: ['Bydgoszcz', 'Toruń', 'Włocławek', 'Grudziądz', 'Inowrocław'],
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Education'],
    topLoanTypesPl: ['Pożyczki osobiste', 'Pożyczki biznesowe', 'Edukacja']
  },
  {
    name: 'Warmian-Masurian Voivodeship',
    slug: 'warminsko-mazurskie',
    namePl: 'Województwo Warmińsko-Mazurskie',
    population: '1.4M',
    avgLoanAmount: '17,500 PLN',
    avgRate: '10.3%',
    maxLoanAmount: '95,000 PLN',
    description: 'Northeastern region with expanding access to personal and business loans.',
    descriptionPl: 'Region północno-wschodni z rozszerzającym się dostępem do pożyczek osobistych i biznesowych.',
    regulations: [
      'KNF supervision',
      'Cost limitations enforced',
      'Total cost cap: 100% of principal',
      'Consumer Credit Act applies',
      'Affordability check mandatory',
      'Transparent terms required',
      '14-day cooling-off period',
      'Licensed lenders only'
    ],
    regulationsPl: [
      'Nadzór KNF',
      'Egzekwowane ograniczenia kosztów',
      'Limit całkowitych kosztów: 100% kapitału',
      'Obowiązuje Ustawa o Kredycie Konsumenckim',
      'Obowiązkowe sprawdzenie zdolności płatniczej',
      'Wymagane przejrzyste warunki',
      '14-dniowy okres na odstąpienie',
      'Tylko licencjonowani pożyczkodawcy'
    ],
    majorCities: ['Olsztyn', 'Elbląg', 'Ełk', 'Ostróda', 'Iława'],
    topLoanTypes: ['Personal Loans', 'Tourism', 'Agricultural'],
    topLoanTypesPl: ['Pożyczki osobiste', 'Turystyka', 'Rolnicze']
  },
  {
    name: 'Lubusz Voivodeship',
    slug: 'lubuskie',
    namePl: 'Województwo Lubuskie',
    population: '1.0M',
    avgLoanAmount: '19,000 PLN',
    avgRate: '9.9%',
    maxLoanAmount: '110,000 PLN',
    description: 'Western border region with competitive loan rates and growing financial services.',
    descriptionPl: 'Region zachodniego pogranicza z konkurencyjnymi stawkami pożyczkowymi i rozwijającymi się usługami finansowymi.',
    regulations: [
      'KNF licensed and regulated',
      'Maximum costs: 25% + 30% per year',
      'Total repayment limit enforced',
      'Consumer protection guaranteed',
      'Credit history check required',
      'Clear APR disclosure',
      'Right to cancel within 14 days',
      'EU directives compliance'
    ],
    regulationsPl: [
      'Licencjonowane i regulowane przez KNF',
      'Maksymalne koszty: 25% + 30% rocznie',
      'Egzekwowany limit całkowitej spłaty',
      'Gwarantowana ochrona konsumenta',
      'Wymagane sprawdzenie historii kredytowej',
      'Jasne ujawnienie RRSO',
      'Prawo do rezygnacji w ciągu 14 dni',
      'Zgodność z dyrektywami UE'
    ],
    majorCities: ['Gorzów Wielkopolski', 'Zielona Góra', 'Nowa Sól', 'Żary', 'Żagań'],
    topLoanTypes: ['Personal Loans', 'Cross-border Business', 'Home Renovation'],
    topLoanTypesPl: ['Pożyczki osobiste', 'Biznes transgraniczny', 'Remont domu']
  },
  {
    name: 'Podlaskie Voivodeship',
    slug: 'podlaskie',
    namePl: 'Województwo Podlaskie',
    population: '1.2M',
    avgLoanAmount: '16,000 PLN',
    avgRate: '10.9%',
    maxLoanAmount: '80,000 PLN',
    description: 'Northeastern region with increasing financial inclusion and loan accessibility.',
    descriptionPl: 'Region północno-wschodni z rosnącą inkluzją finansową i dostępnością pożyczek.',
    regulations: [
      'Polish Financial Authority oversight',
      'Interest rate caps applied',
      'Maximum cost limits',
      'Consumer rights protection',
      'Mandatory creditworthiness check',
      'Transparent pricing required',
      'Withdrawal period: 14 days',
      'Licensed institutions required'
    ],
    regulationsPl: [
      'Nadzór polskiego organu finansowego',
      'Stosowane limity oprocentowania',
      'Limity maksymalnych kosztów',
      'Ochrona praw konsumentów',
      'Obowiązkowe sprawdzenie zdolności kredytowej',
      'Wymagana przejrzysta wycena',
      'Okres odstąpienia: 14 dni',
      'Wymagane licencjonowane instytucje'
    ],
    majorCities: ['Białystok', 'Suwałki', 'Łomża', 'Augustów', 'Zambrów'],
    topLoanTypes: ['Personal Loans', 'Small Business', 'Emergency Loans'],
    topLoanTypesPl: ['Pożyczki osobiste', 'Małe firmy', 'Pożyczki awaryjne']
  },
  {
    name: 'Świętokrzyskie Voivodeship',
    slug: 'swietokrzyskie',
    namePl: 'Województwo Świętokrzyskie',
    population: '1.2M',
    avgLoanAmount: '15,500 PLN',
    avgRate: '11.0%',
    maxLoanAmount: '75,000 PLN',
    description: 'Central region with growing access to personal loans and microfinance services.',
    descriptionPl: 'Region centralny z rosnącym dostępem do pożyczek osobistych i usług mikrofinansowych.',
    regulations: [
      'KNF regulated institutions',
      'Cost caps: 25% initial + 30% annual',
      'Total cost cannot exceed 100%',
      'Consumer Credit Law protection',
      'BIK verification required',
      'Clear terms and conditions',
      '14-day right to withdraw',
      'Anti-usury enforcement'
    ],
    regulationsPl: [
      'Instytucje regulowane przez KNF',
      'Limity kosztów: 25% początkowy + 30% roczny',
      'Całkowity koszt nie może przekroczyć 100%',
      'Ochrona Prawa Kredytu Konsumenckiego',
      'Wymagana weryfikacja BIK',
      'Jasne warunki umowy',
      '14-dniowe prawo odstąpienia',
      'Egzekwowanie przepisów antylichwiarskich'
    ],
    majorCities: ['Kielce', 'Ostrowiec Świętokrzyski', 'Starachowice', 'Skarżysko-Kamienna'],
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Small Business'],
    topLoanTypesPl: ['Pożyczki osobiste', 'Rolnicze', 'Małe firmy']
  },
  {
    name: 'Opole Voivodeship',
    slug: 'opolskie',
    namePl: 'Województwo Opolskie',
    population: '0.97M',
    avgLoanAmount: '18,000 PLN',
    avgRate: '10.2%',
    maxLoanAmount: '100,000 PLN',
    description: 'Southern region with competitive loan products and growing financial services sector.',
    descriptionPl: 'Region południowy z konkurencyjnymi produktami pożyczkowymi i rozwijającym się sektorem usług finansowych.',
    regulations: [
      'Licensed by KNF',
      'Maximum costs: 25% + 30% per annum',
      'Total cost cap enforced',
      'Consumer protection laws apply',
      'Credit assessment mandatory',
      'Transparent fee disclosure',
      'Early repayment rights',
      'Written agreement required'
    ],
    regulationsPl: [
      'Licencjonowane przez KNF',
      'Maksymalne koszty: 25% + 30% rocznie',
      'Egzekwowany limit całkowitych kosztów',
      'Obowiązują przepisy ochrony konsumentów',
      'Obowiązkowa ocena kredytowa',
      'Przejrzyste ujawnienie opłat',
      'Prawa do wcześniejszej spłaty',
      'Wymagana umowa pisemna'
    ],
    majorCities: ['Opole', 'Kędzierzyn-Koźle', 'Nysa', 'Brzeg', 'Kluczbork'],
    topLoanTypes: ['Personal Loans', 'Home Improvement', 'Business Loans'],
    topLoanTypesPl: ['Pożyczki osobiste', 'Remont domu', 'Pożyczki biznesowe']
  }
]

// Helper function to get region by slug
export function getPolandRegionBySlug(slug: string): PolandRegionInfo | undefined {
  return polandRegions.find((region) => region.slug === slug)
}

// Get all region slugs for sitemap generation
export function getAllPolandRegionSlugs(): string[] {
  return polandRegions.map((region) => region.slug)
}
