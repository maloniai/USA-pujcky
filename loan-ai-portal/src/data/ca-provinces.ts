/**
 * Canadian Provinces and Territories Data
 * Comprehensive province/territory information for loan matching
 */

export interface ProvinceInfo {
  name: string
  nameFr: string // French name
  slug: string
  abbreviation: string
  capital: string
  capitalFr: string
  population: string
  avgRate: string
  maxLoanAmount: string
  description: string
  descriptionFr: string
  regulator: string
  regulatorFr: string
  regulatorUrl: string
  interestRateCap: string | null
  loanAmountRange: string
  keyRegulations: string[]
  keyRegulationsFr: string[]
  borrowerProtections: string[]
  borrowerProtectionsFr: string[]
  featuredCities: string[]
  cityCount: number
}

export const caProvinces: ProvinceInfo[] = [
  {
    name: 'Ontario',
    nameFr: 'Ontario',
    slug: 'ontario',
    abbreviation: 'ON',
    capital: 'Toronto',
    capitalFr: 'Toronto',
    population: '14.8M',
    avgRate: '8.99% - 19.99%',
    maxLoanAmount: '$50,000',
    description:
      'Ontario offers personal loans through banks, credit unions, and licensed lenders regulated under the Payday Loans Act and federal financial regulations.',
    descriptionFr:
      "L'Ontario offre des prêts personnels par l'intermédiaire de banques, de coopératives de crédit et de prêteurs agréés réglementés par la Loi sur les prêts sur salaire et les règlements financiers fédéraux.",
    regulator: 'Financial Services Regulatory Authority (FSRA)',
    regulatorFr: 'Autorité ontarienne de réglementation des services financiers (ARSF)',
    regulatorUrl: 'https://www.fsrao.ca/',
    interestRateCap: '60% APR (criminal rate)',
    loanAmountRange: '$1,000 - $50,000',
    keyRegulations: [
      'Payday loan fees capped at $15 per $100 borrowed',
      'Maximum cost of borrowing: 60% APR (criminal interest rate)',
      'Mandatory cooling-off period between payday loans',
      'Licensed lenders must be registered with FSRA',
      'Borrowers have right to early repayment without penalty',
    ],
    keyRegulationsFr: [
      'Frais de prêt sur salaire plafonnés à 15 $ par tranche de 100 $ empruntés',
      "Coût maximal de l'emprunt : 60 % TAEG (taux d'intérêt criminel)",
      'Période de réflexion obligatoire entre les prêts sur salaire',
      "Les prêteurs agréés doivent être enregistrés auprès de l'ARSF",
      'Les emprunteurs ont le droit de rembourser par anticipation sans pénalité',
    ],
    borrowerProtections: [
      'Provincial consumer protection act applies',
      'Debt collection rules enforced by Ministry of Government Services',
      'Right to file complaints with FSRA',
      'Access to free financial counseling services',
    ],
    borrowerProtectionsFr: [
      'La Loi sur la protection du consommateur provinciale s\'applique',
      'Règles de recouvrement des créances appliquées par le ministère des Services gouvernementaux',
      "Droit de déposer des plaintes auprès de l'ARSF",
      'Accès à des services gratuits de conseil financier',
    ],
    featuredCities: ['Toronto', 'Ottawa', 'Mississauga', 'Brampton', 'Hamilton', 'London'],
    cityCount: 50,
  },
  {
    name: 'Quebec',
    nameFr: 'Québec',
    slug: 'quebec',
    abbreviation: 'QC',
    capital: 'Quebec City',
    capitalFr: 'Ville de Québec',
    population: '8.6M',
    avgRate: '9.99% - 21.99%',
    maxLoanAmount: '$50,000',
    description:
      'Quebec has strict consumer protection laws governed by the Consumer Protection Act, with specific regulations for high-cost credit products.',
    descriptionFr:
      'Le Québec dispose de lois strictes sur la protection des consommateurs régies par la Loi sur la protection du consommateur, avec des réglementations spécifiques pour les produits de crédit à coût élevé.',
    regulator: 'Office de la protection du consommateur (OPC)',
    regulatorFr: 'Office de la protection du consommateur (OPC)',
    regulatorUrl: 'https://www.opc.gouv.qc.ca/',
    interestRateCap: '60% APR (criminal rate)',
    loanAmountRange: '$1,000 - $50,000',
    keyRegulations: [
      'High-cost credit rate cap: 35% APR + Credit Rate',
      'Mandatory disclosure of total cost of borrowing',
      'Payday loan maximum: $1,500 with 35% rate cap',
      'Lenders must be licensed by OPC',
      'French language requirements for all contracts',
    ],
    keyRegulationsFr: [
      'Plafond du taux de crédit à coût élevé : 35 % TAEG + Taux de crédit',
      "Divulgation obligatoire du coût total de l'emprunt",
      'Prêt sur salaire maximum : 1 500 $ avec un plafond de taux de 35 %',
      "Les prêteurs doivent être agréés par l'OPC",
      'Exigences linguistiques françaises pour tous les contrats',
    ],
    borrowerProtections: [
      'Right to cancel contract within 2 business days',
      'Protected against unfair collection practices',
      'Access to free mediation services',
      'Strong enforcement of consumer rights',
    ],
    borrowerProtectionsFr: [
      "Droit d'annuler le contrat dans les 2 jours ouvrables",
      'Protégé contre les pratiques de recouvrement déloyales',
      'Accès à des services de médiation gratuits',
      'Application rigoureuse des droits des consommateurs',
    ],
    featuredCities: ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Longueuil', 'Sherbrooke'],
    cityCount: 35,
  },
  {
    name: 'British Columbia',
    nameFr: 'Colombie-Britannique',
    slug: 'british-columbia',
    abbreviation: 'BC',
    capital: 'Victoria',
    capitalFr: 'Victoria',
    population: '5.2M',
    avgRate: '8.49% - 18.99%',
    maxLoanAmount: '$50,000',
    description:
      'BC regulates personal loans through the Business Practices and Consumer Protection Act, with specific rules for payday and high-cost lending.',
    descriptionFr:
      'La Colombie-Britannique réglemente les prêts personnels par le biais de la Loi sur les pratiques commerciales et la protection des consommateurs, avec des règles spécifiques pour les prêts sur salaire et les prêts à coût élevé.',
    regulator: 'BC Financial Services Authority (BCFSA)',
    regulatorFr: 'Autorité des services financiers de la Colombie-Britannique (BCFSA)',
    regulatorUrl: 'https://www.bcfsa.ca/',
    interestRateCap: '60% APR (criminal rate)',
    loanAmountRange: '$1,000 - $50,000',
    keyRegulations: [
      'Payday loan fees: $15 per $100 borrowed maximum',
      'High-cost credit products must be licensed',
      'Mandatory disclosure of APR and total cost',
      'Maximum loan term restrictions for payday loans',
      'Borrowers entitled to payment plan options',
    ],
    keyRegulationsFr: [
      'Frais de prêt sur salaire : maximum de 15 $ par tranche de 100 $ empruntés',
      'Les produits de crédit à coût élevé doivent être autorisés',
      'Divulgation obligatoire du TAEG et du coût total',
      'Restrictions de durée de prêt maximale pour les prêts sur salaire',
      'Les emprunteurs ont droit à des options de plan de paiement',
    ],
    borrowerProtections: [
      'Consumer Protection BC handles complaints',
      'Cooling-off period for high-cost loans',
      'Right to early repayment without penalty',
      'Protection against aggressive collection',
    ],
    borrowerProtectionsFr: [
      'Consumer Protection BC traite les plaintes',
      'Période de réflexion pour les prêts à coût élevé',
      'Droit de remboursement anticipé sans pénalité',
      'Protection contre le recouvrement agressif',
    ],
    featuredCities: ['Vancouver', 'Surrey', 'Burnaby', 'Richmond', 'Kelowna', 'Victoria'],
    cityCount: 25,
  },
  {
    name: 'Alberta',
    nameFr: 'Alberta',
    slug: 'alberta',
    abbreviation: 'AB',
    capital: 'Edmonton',
    capitalFr: 'Edmonton',
    population: '4.5M',
    avgRate: '7.99% - 17.99%',
    maxLoanAmount: '$50,000',
    description:
      'Alberta regulates consumer lending through the Fair Trading Act and Cost of Credit Disclosure Regulation, with specific payday loan rules.',
    descriptionFr:
      "L'Alberta réglemente les prêts à la consommation par le biais de la Fair Trading Act et du règlement sur la divulgation du coût du crédit, avec des règles spécifiques sur les prêts sur salaire.",
    regulator: 'Service Alberta - Consumer Protection',
    regulatorFr: 'Service Alberta - Protection des consommateurs',
    regulatorUrl: 'https://www.alberta.ca/consumer-protection',
    interestRateCap: '60% APR (criminal rate)',
    loanAmountRange: '$1,000 - $50,000',
    keyRegulations: [
      'Payday loan fees capped at $15 per $100',
      'Two-day cooling-off period for payday loans',
      'Lenders must be licensed with Service Alberta',
      'Maximum loan amount: $1,500 for payday loans',
      'Mandatory disclosure of all fees and charges',
    ],
    keyRegulationsFr: [
      'Frais de prêt sur salaire plafonnés à 15 $ par tranche de 100 $',
      'Période de réflexion de deux jours pour les prêts sur salaire',
      'Les prêteurs doivent être agréés auprès de Service Alberta',
      'Montant de prêt maximum : 1 500 $ pour les prêts sur salaire',
      'Divulgation obligatoire de tous les frais et charges',
    ],
    borrowerProtections: [
      'Fair Trading Act consumer rights',
      'Complaint resolution through Service Alberta',
      'Protection against unfair business practices',
      'Access to financial literacy resources',
    ],
    borrowerProtectionsFr: [
      'Droits des consommateurs de la Fair Trading Act',
      'Résolution des plaintes par Service Alberta',
      'Protection contre les pratiques commerciales déloyales',
      "Accès aux ressources en matière de littératie financière",
    ],
    featuredCities: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'Fort McMurray', 'Grande Prairie'],
    cityCount: 20,
  },
  {
    name: 'Manitoba',
    nameFr: 'Manitoba',
    slug: 'manitoba',
    abbreviation: 'MB',
    capital: 'Winnipeg',
    capitalFr: 'Winnipeg',
    population: '1.4M',
    avgRate: '9.49% - 19.99%',
    maxLoanAmount: '$35,000',
    description:
      'Manitoba regulates consumer credit through the Consumer Protection Act with specific provisions for payday loans and high-cost lending.',
    descriptionFr:
      'Le Manitoba réglemente le crédit à la consommation par le biais de la Loi sur la protection du consommateur avec des dispositions spécifiques pour les prêts sur salaire et les prêts à coût élevé.',
    regulator: 'Consumer Protection Office Manitoba',
    regulatorFr: 'Bureau de la protection des consommateurs du Manitoba',
    regulatorUrl: 'https://www.gov.mb.ca/justice/cp/',
    interestRateCap: '60% APR (criminal rate)',
    loanAmountRange: '$1,000 - $35,000',
    keyRegulations: [
      'Payday loan fees: $17 per $100 borrowed maximum',
      'Maximum payday loan amount: $1,500',
      'Mandatory disclosure of annual interest rate',
      'Lenders must provide payment plans',
      'Restrictions on rollover loans',
    ],
    keyRegulationsFr: [
      'Frais de prêt sur salaire : maximum de 17 $ par tranche de 100 $ empruntés',
      'Montant maximum du prêt sur salaire : 1 500 $',
      "Divulgation obligatoire du taux d'intérêt annuel",
      'Les prêteurs doivent fournir des plans de paiement',
      'Restrictions sur les prêts renouvelables',
    ],
    borrowerProtections: [
      'Consumer Protection Act applies',
      'Free complaint resolution services',
      'Protection against harassment',
      'Right to receive information in clear language',
    ],
    borrowerProtectionsFr: [
      "La Loi sur la protection du consommateur s'applique",
      'Services gratuits de résolution des plaintes',
      'Protection contre le harcèlement',
      "Droit de recevoir des informations dans un langage clair",
    ],
    featuredCities: ['Winnipeg', 'Brandon', 'Steinbach', 'Thompson', 'Portage la Prairie'],
    cityCount: 12,
  },
  {
    name: 'Saskatchewan',
    nameFr: 'Saskatchewan',
    slug: 'saskatchewan',
    abbreviation: 'SK',
    capital: 'Regina',
    capitalFr: 'Regina',
    population: '1.2M',
    avgRate: '9.99% - 20.99%',
    maxLoanAmount: '$35,000',
    description:
      'Saskatchewan regulates payday lending through the Payday Loans Act and consumer credit through provincial consumer protection legislation.',
    descriptionFr:
      'La Saskatchewan réglemente les prêts sur salaire par le biais de la Payday Loans Act et le crédit à la consommation par le biais de la législation provinciale sur la protection des consommateurs.',
    regulator: 'Financial and Consumer Affairs Authority (FCAA)',
    regulatorFr: 'Autorité des affaires financières et de la consommation (FCAA)',
    regulatorUrl: 'https://fcaa.gov.sk.ca/',
    interestRateCap: '60% APR (criminal rate)',
    loanAmountRange: '$1,000 - $35,000',
    keyRegulations: [
      'Payday loan fees capped at $23 per $100',
      'Maximum loan term: 62 days for payday loans',
      'Licensed lenders required',
      'Mandatory cost disclosure',
      'No rollovers or extensions permitted',
    ],
    keyRegulationsFr: [
      'Frais de prêt sur salaire plafonnés à 23 $ par tranche de 100 $',
      'Durée maximale du prêt : 62 jours pour les prêts sur salaire',
      'Prêteurs agréés requis',
      'Divulgation obligatoire des coûts',
      'Aucun renouvellement ou prolongation permis',
    ],
    borrowerProtections: [
      'FCAA oversight and complaint handling',
      'Consumer protection legislation',
      'Right to payment plan after default',
      'Protection against unfair practices',
    ],
    borrowerProtectionsFr: [
      'Surveillance et traitement des plaintes par la FCAA',
      'Législation sur la protection des consommateurs',
      'Droit à un plan de paiement après défaut',
      'Protection contre les pratiques déloyales',
    ],
    featuredCities: ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw', 'Swift Current'],
    cityCount: 10,
  },
  {
    name: 'Nova Scotia',
    nameFr: 'Nouvelle-Écosse',
    slug: 'nova-scotia',
    abbreviation: 'NS',
    capital: 'Halifax',
    capitalFr: 'Halifax',
    population: '1.0M',
    avgRate: '10.49% - 21.99%',
    maxLoanAmount: '$30,000',
    description:
      'Nova Scotia regulates consumer lending through the Consumer Protection Act with specific provisions for payday loans and high-interest credit.',
    descriptionFr:
      'La Nouvelle-Écosse réglemente les prêts à la consommation par le biais de la Loi sur la protection du consommateur avec des dispositions spécifiques pour les prêts sur salaire et le crédit à intérêt élevé.',
    regulator: 'Service Nova Scotia - Consumer Affairs',
    regulatorFr: 'Service Nouvelle-Écosse - Affaires des consommateurs',
    regulatorUrl: 'https://beta.novascotia.ca/programs-and-services/consumer-protection',
    interestRateCap: '60% APR (criminal rate)',
    loanAmountRange: '$1,000 - $30,000',
    keyRegulations: [
      'Payday loan fees: $19 per $100 borrowed',
      'Mandatory disclosure of APR',
      'Licensed lenders only',
      'Consumer credit reporting requirements',
      'Restrictions on debt collection practices',
    ],
    keyRegulationsFr: [
      'Frais de prêt sur salaire : 19 $ par tranche de 100 $ empruntés',
      'Divulgation obligatoire du TAEG',
      'Prêteurs agréés seulement',
      'Exigences en matière de rapport de crédit à la consommation',
      'Restrictions sur les pratiques de recouvrement de créances',
    ],
    borrowerProtections: [
      'Consumer Protection Act rights',
      'Access to free debt counseling',
      'Complaint resolution through Service NS',
      'Protection against predatory lending',
    ],
    borrowerProtectionsFr: [
      'Droits de la Loi sur la protection du consommateur',
      "Accès à des conseils gratuits en matière d'endettement",
      'Résolution des plaintes par Service NS',
      'Protection contre les prêts prédateurs',
    ],
    featuredCities: ['Halifax', 'Dartmouth', 'Sydney', 'Truro', 'New Glasgow'],
    cityCount: 8,
  },
  {
    name: 'New Brunswick',
    nameFr: 'Nouveau-Brunswick',
    slug: 'new-brunswick',
    abbreviation: 'NB',
    capital: 'Fredericton',
    capitalFr: 'Fredericton',
    population: '0.8M',
    avgRate: '10.99% - 22.99%',
    maxLoanAmount: '$30,000',
    description:
      'New Brunswick regulates consumer lending through the Cost of Credit Disclosure Act and Payday Loans Act with bilingual service requirements.',
    descriptionFr:
      "Le Nouveau-Brunswick réglemente les prêts à la consommation par le biais de la Loi sur la communication du coût du crédit et de la Loi sur les prêts sur salaire avec des exigences de service bilingue.",
    regulator: 'Financial and Consumer Services Commission (FCNB)',
    regulatorFr: 'Commission des services financiers et des services aux consommateurs (FCNB)',
    regulatorUrl: 'https://fcnb.ca/',
    interestRateCap: '60% APR (criminal rate)',
    loanAmountRange: '$1,000 - $30,000',
    keyRegulations: [
      'Payday loan fees capped at $15 per $100',
      'Maximum payday loan amount: $1,500',
      'Bilingual disclosure requirements',
      'Mandatory licensing for lenders',
      'Cooling-off period enforced',
    ],
    keyRegulationsFr: [
      'Frais de prêt sur salaire plafonnés à 15 $ par tranche de 100 $',
      'Montant maximum du prêt sur salaire : 1 500 $',
      'Exigences de divulgation bilingue',
      'Licence obligatoire pour les prêteurs',
      'Période de réflexion appliquée',
    ],
    borrowerProtections: [
      'FCNB consumer protection oversight',
      'Bilingual services available',
      'Right to complaint resolution',
      'Access to financial education resources',
    ],
    borrowerProtectionsFr: [
      'Surveillance de la protection des consommateurs par la FCNB',
      'Services bilingues disponibles',
      'Droit à la résolution des plaintes',
      "Accès aux ressources d'éducation financière",
    ],
    featuredCities: ['Moncton', 'Saint John', 'Fredericton', 'Dieppe', 'Miramichi'],
    cityCount: 8,
  },
  {
    name: 'Newfoundland and Labrador',
    nameFr: 'Terre-Neuve-et-Labrador',
    slug: 'newfoundland-and-labrador',
    abbreviation: 'NL',
    capital: 'St. John\'s',
    capitalFr: 'St. John\'s',
    population: '0.5M',
    avgRate: '11.49% - 23.99%',
    maxLoanAmount: '$25,000',
    description:
      'Newfoundland and Labrador regulates consumer lending through the Consumer Protection and Business Practices Act with specific payday loan regulations.',
    descriptionFr:
      'Terre-Neuve-et-Labrador réglemente les prêts à la consommation par le biais de la Loi sur la protection des consommateurs et les pratiques commerciales avec des règlements spécifiques sur les prêts sur salaire.',
    regulator: 'Service NL - Consumer Affairs',
    regulatorFr: 'Service NL - Affaires des consommateurs',
    regulatorUrl: 'https://www.gov.nl.ca/dgsnl/consumers/',
    interestRateCap: '60% APR (criminal rate)',
    loanAmountRange: '$1,000 - $25,000',
    keyRegulations: [
      'Payday loan fees: $21 per $100 borrowed',
      'Maximum loan term restrictions',
      'Licensed lenders required',
      'Full disclosure of costs mandatory',
      'Restrictions on loan rollovers',
    ],
    keyRegulationsFr: [
      'Frais de prêt sur salaire : 21 $ par tranche de 100 $ empruntés',
      'Restrictions de durée de prêt maximale',
      'Prêteurs agréés requis',
      'Divulgation complète des coûts obligatoire',
      'Restrictions sur les renouvellements de prêts',
    ],
    borrowerProtections: [
      'Consumer Protection Act enforcement',
      'Complaint handling through Service NL',
      'Protection against harassment',
      'Right to clear contract terms',
    ],
    borrowerProtectionsFr: [
      'Application de la Loi sur la protection du consommateur',
      'Traitement des plaintes par Service NL',
      'Protection contre le harcèlement',
      'Droit à des conditions contractuelles claires',
    ],
    featuredCities: ['St. John\'s', 'Mount Pearl', 'Corner Brook', 'Conception Bay South', 'Paradise'],
    cityCount: 6,
  },
  {
    name: 'Prince Edward Island',
    nameFr: 'Île-du-Prince-Édouard',
    slug: 'prince-edward-island',
    abbreviation: 'PE',
    capital: 'Charlottetown',
    capitalFr: 'Charlottetown',
    population: '0.17M',
    avgRate: '11.99% - 24.99%',
    maxLoanAmount: '$25,000',
    description:
      'PEI regulates consumer lending through consumer protection legislation with oversight by the Office of the Attorney General.',
    descriptionFr:
      "L'Î.-P.-É. réglemente les prêts à la consommation par le biais de la législation sur la protection des consommateurs sous la surveillance du Bureau du procureur général.",
    regulator: 'Office of the Attorney General - Consumer Services',
    regulatorFr: 'Bureau du procureur général - Services aux consommateurs',
    regulatorUrl: 'https://www.princeedwardisland.ca/en/topic/consumer-services',
    interestRateCap: '60% APR (criminal rate)',
    loanAmountRange: '$1,000 - $25,000',
    keyRegulations: [
      'Payday loan fees capped at $25 per $100',
      'Consumer protection laws apply',
      'Disclosure requirements enforced',
      'Licensed lenders only',
      'Debt collection regulations',
    ],
    keyRegulationsFr: [
      'Frais de prêt sur salaire plafonnés à 25 $ par tranche de 100 $',
      'Les lois sur la protection des consommateurs s\'appliquent',
      'Exigences de divulgation appliquées',
      'Prêteurs agréés seulement',
      'Réglementation du recouvrement des créances',
    ],
    borrowerProtections: [
      'Consumer Services protection',
      'Complaint resolution available',
      'Protection against unfair practices',
      'Access to consumer education',
    ],
    borrowerProtectionsFr: [
      'Protection des services aux consommateurs',
      'Résolution des plaintes disponible',
      'Protection contre les pratiques déloyales',
      'Accès à l\'éducation des consommateurs',
    ],
    featuredCities: ['Charlottetown', 'Summerside', 'Stratford', 'Cornwall'],
    cityCount: 4,
  },
  {
    name: 'Northwest Territories',
    nameFr: 'Territoires du Nord-Ouest',
    slug: 'northwest-territories',
    abbreviation: 'NT',
    capital: 'Yellowknife',
    capitalFr: 'Yellowknife',
    population: '0.045M',
    avgRate: '12.49% - 25.99%',
    maxLoanAmount: '$25,000',
    description:
      'Northwest Territories regulates consumer lending through territorial legislation with consideration for remote and Indigenous communities.',
    descriptionFr:
      'Les Territoires du Nord-Ouest réglementent les prêts à la consommation par le biais de la législation territoriale en tenant compte des communautés éloignées et autochtones.',
    regulator: 'Department of Justice - Consumer Affairs',
    regulatorFr: 'Ministère de la Justice - Affaires des consommateurs',
    regulatorUrl: 'https://www.justice.gov.nt.ca/',
    interestRateCap: '60% APR (criminal rate)',
    loanAmountRange: '$1,000 - $25,000',
    keyRegulations: [
      'Consumer protection laws apply',
      'Special considerations for remote areas',
      'Licensed lender requirements',
      'Cost disclosure mandatory',
      'Protection for Indigenous borrowers',
    ],
    keyRegulationsFr: [
      'Les lois sur la protection des consommateurs s\'appliquent',
      'Considérations spéciales pour les régions éloignées',
      'Exigences de prêteur agréé',
      'Divulgation des coûts obligatoire',
      'Protection pour les emprunteurs autochtones',
    ],
    borrowerProtections: [
      'Territorial consumer protection',
      'Access to legal aid',
      'Protection against exploitation',
      'Community support services',
    ],
    borrowerProtectionsFr: [
      'Protection territoriale des consommateurs',
      "Accès à l'aide juridique",
      'Protection contre l\'exploitation',
      'Services de soutien communautaire',
    ],
    featuredCities: ['Yellowknife', 'Hay River', 'Inuvik', 'Fort Smith'],
    cityCount: 4,
  },
  {
    name: 'Yukon',
    nameFr: 'Yukon',
    slug: 'yukon',
    abbreviation: 'YT',
    capital: 'Whitehorse',
    capitalFr: 'Whitehorse',
    population: '0.043M',
    avgRate: '12.99% - 26.99%',
    maxLoanAmount: '$20,000',
    description:
      'Yukon regulates consumer lending through territorial consumer protection legislation with focus on small community needs.',
    descriptionFr:
      'Le Yukon réglemente les prêts à la consommation par le biais de la législation territoriale sur la protection des consommateurs en mettant l\'accent sur les besoins des petites communautés.',
    regulator: 'Consumer Services - Community Services',
    regulatorFr: 'Services aux consommateurs - Services communautaires',
    regulatorUrl: 'https://yukon.ca/en/consumer-services',
    interestRateCap: '60% APR (criminal rate)',
    loanAmountRange: '$1,000 - $20,000',
    keyRegulations: [
      'Consumer protection regulations',
      'Licensed lender requirements',
      'Full cost disclosure required',
      'Community-focused protections',
      'Fair debt collection practices',
    ],
    keyRegulationsFr: [
      'Règlements sur la protection des consommateurs',
      'Exigences de prêteur agréé',
      'Divulgation complète des coûts requise',
      'Protections axées sur la communauté',
      'Pratiques équitables de recouvrement de créances',
    ],
    borrowerProtections: [
      'Consumer Services oversight',
      'Complaint resolution services',
      'Protection for vulnerable populations',
      'Access to financial counseling',
    ],
    borrowerProtectionsFr: [
      'Surveillance des services aux consommateurs',
      'Services de résolution des plaintes',
      'Protection des populations vulnérables',
      'Accès au conseil financier',
    ],
    featuredCities: ['Whitehorse', 'Dawson City', 'Watson Lake'],
    cityCount: 3,
  },
  {
    name: 'Nunavut',
    nameFr: 'Nunavut',
    slug: 'nunavut',
    abbreviation: 'NU',
    capital: 'Iqaluit',
    capitalFr: 'Iqaluit',
    population: '0.04M',
    avgRate: '13.99% - 28.99%',
    maxLoanAmount: '$20,000',
    description:
      'Nunavut regulates consumer lending with special consideration for Inuit communities and remote accessibility challenges.',
    descriptionFr:
      'Le Nunavut réglemente les prêts à la consommation en tenant compte des communautés inuites et des défis d\'accessibilité à distance.',
    regulator: 'Department of Justice - Consumer Affairs',
    regulatorFr: 'Ministère de la Justice - Affaires des consommateurs',
    regulatorUrl: 'https://www.gov.nu.ca/justice',
    interestRateCap: '60% APR (criminal rate)',
    loanAmountRange: '$1,000 - $20,000',
    keyRegulations: [
      'Consumer protection laws',
      'Cultural and linguistic protections',
      'Licensed lender requirements',
      'Remote community considerations',
      'Protection for Inuit borrowers',
    ],
    keyRegulationsFr: [
      'Lois sur la protection des consommateurs',
      'Protections culturelles et linguistiques',
      'Exigences de prêteur agréé',
      'Considérations pour les communautés éloignées',
      'Protection pour les emprunteurs inuits',
    ],
    borrowerProtections: [
      'Territorial consumer protection',
      'Multilingual support available',
      'Community advocacy services',
      'Protection against predatory practices',
    ],
    borrowerProtectionsFr: [
      'Protection territoriale des consommateurs',
      'Soutien multilingue disponible',
      'Services de défense communautaire',
      'Protection contre les pratiques prédatrices',
    ],
    featuredCities: ['Iqaluit', 'Rankin Inlet', 'Arviat', 'Baker Lake'],
    cityCount: 4,
  },
]

// Helper function to get province by slug
export function getProvinceBySlug(slug: string): ProvinceInfo | undefined {
  return caProvinces.find((p) => p.slug === slug)
}

// Helper function to get province by abbreviation
export function getProvinceByAbbr(abbr: string): ProvinceInfo | undefined {
  return caProvinces.find((p) => p.abbreviation === abbr.toUpperCase())
}

// Calculate total cities across all provinces
export const totalCanadianCities = caProvinces.reduce((sum, province) => sum + province.cityCount, 0)

// Get provinces sorted by population
export function getProvincesByPopulation(): ProvinceInfo[] {
  return [...caProvinces].sort((a, b) => {
    const popA = parseFloat(a.population.replace(/[^\d.]/g, ''))
    const popB = parseFloat(b.population.replace(/[^\d.]/g, ''))
    return popB - popA
  })
}
