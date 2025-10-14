/**
 * Canadian Provincial and Territorial Lending Regulations
 * 
 * This file documents lending regulations, interest rate caps, payday loan rules,
 * and borrower protections for all 13 provinces and territories in Canada.
 * 
 * Federal Framework:
 * - Criminal Code Section 347: 60% annual interest rate (APR) cap for all of Canada
 * - Financial Consumer Agency of Canada (FCAC): Federal oversight
 * - Bank Act: Governs federally regulated financial institutions
 * 
 * Provincial regulations vary significantly, especially for payday loans.
 * Each province sets its own payday loan cost caps, term limits, and consumer protections.
 * 
 * Last Updated: October 2025
 */

export interface CanadianProvincialRegulation {
  province: string
  provinceAbbr: string
  nameFr: string
  
  // Regulatory bodies
  regulator: string
  regulatorFr: string
  regulatorUrl: string
  
  // Federal framework
  federalInterestCap: string
  federalInterestCapFr: string
  
  // Payday loan regulations
  paydayLoanRegulated: boolean
  paydayMaxCostPer100: string | null
  paydayMaxCostPer100Fr: string | null
  paydayMaxTerm: string | null
  paydayMaxTermFr: string | null
  paydayLicensingRequired: boolean
  
  // Consumer protections
  coolingOffPeriod: string | null
  coolingOffPeriodFr: string | null
  maxRollovers: string
  maxRolloversFr: string
  requiredDisclosures: string[]
  requiredDisclosuresFr: string[]
  
  // Borrower rights
  borrowerRights: string[]
  borrowerRightsFr: string[]
  
  // Complaint process
  complaintAuthority: string
  complaintAuthorityFr: string
  complaintUrl: string
  
  // Key legislation
  keyLegislation: string[]
  keyLegislationFr: string[]
  
  // Important notes
  notes: string[]
  notesFr: string[]
}

export const canadianProvincialRegulations: CanadianProvincialRegulation[] = [
  // ===== ONTARIO =====
  {
    province: 'Ontario',
    provinceAbbr: 'ON',
    nameFr: 'Ontario',
    regulator: 'Financial Services Regulatory Authority of Ontario (FSRA)',
    regulatorFr: 'Autorité ontarienne de réglementation des services financiers (ARSF)',
    regulatorUrl: 'https://www.fsrao.ca/',
    
    federalInterestCap: '60% annual interest rate (Criminal Code Section 347)',
    federalInterestCapFr: 'Taux d\'intérêt annuel de 60 % (article 347 du Code criminel)',
    
    paydayLoanRegulated: true,
    paydayMaxCostPer100: '$15 per $100 borrowed',
    paydayMaxCostPer100Fr: '15 $ par tranche de 100 $ empruntés',
    paydayMaxTerm: 'Maximum 62 days',
    paydayMaxTermFr: 'Maximum 62 jours',
    paydayLicensingRequired: true,
    
    coolingOffPeriod: '2 business days cooling-off period after paying off a payday loan',
    coolingOffPeriodFr: 'Période de réflexion de 2 jours ouvrables après le remboursement d\'un prêt de dépannage',
    maxRollovers: 'No rollovers or renewals allowed',
    maxRolloversFr: 'Aucun renouvellement ou prolongation autorisé',
    
    requiredDisclosures: [
      'Total cost of borrowing in dollars',
      'Annual percentage rate (APR)',
      'Payment schedule and due dates',
      'Penalties for late or missed payments',
      'Borrower\'s cancellation rights',
    ],
    requiredDisclosuresFr: [
      'Coût total de l\'emprunt en dollars',
      'Taux annuel en pourcentage (TAP)',
      'Calendrier de paiement et dates d\'échéance',
      'Pénalités pour paiements en retard ou manqués',
      'Droits d\'annulation de l\'emprunteur',
    ],
    
    borrowerRights: [
      'Right to cancel within 2 business days without penalty',
      'Right to prepay without penalty',
      'Right to receive clear cost disclosure before signing',
      'Right to file complaints with FSRA',
      'Protection from harassment and aggressive collection practices',
    ],
    borrowerRightsFr: [
      'Droit d\'annuler dans les 2 jours ouvrables sans pénalité',
      'Droit de rembourser par anticipation sans pénalité',
      'Droit de recevoir une divulgation claire des coûts avant de signer',
      'Droit de déposer des plaintes auprès de l\'ARSF',
      'Protection contre le harcèlement et les pratiques de recouvrement agressives',
    ],
    
    complaintAuthority: 'Financial Services Regulatory Authority of Ontario (FSRA)',
    complaintAuthorityFr: 'Autorité ontarienne de réglementation des services financiers (ARSF)',
    complaintUrl: 'https://www.fsrao.ca/consumers/filing-complaint',
    
    keyLegislation: [
      'Payday Loans Act, 2008',
      'Consumer Protection Act, 2002',
      'Criminal Code of Canada, Section 347',
    ],
    keyLegislationFr: [
      'Loi de 2008 sur les prêts sur salaire',
      'Loi de 2002 sur la protection du consommateur',
      'Code criminel du Canada, article 347',
    ],
    
    notes: [
      'Ontario has the second-lowest payday loan cost cap in Canada',
      'FSRA maintains public registry of licensed payday lenders',
      'Lenders must display license prominently',
      'Interest rate cap of 60% APR applies to all loans under Criminal Code',
    ],
    notesFr: [
      'L\'Ontario a le deuxième plafond de coût de prêt de dépannage le plus bas au Canada',
      'L\'ARSF maintient un registre public des prêteurs de dépannage autorisés',
      'Les prêteurs doivent afficher leur licence de manière visible',
      'Le plafond de taux d\'intérêt de 60 % TAP s\'applique à tous les prêts en vertu du Code criminel',
    ],
  },

  // ===== QUEBEC =====
  {
    province: 'Quebec',
    provinceAbbr: 'QC',
    nameFr: 'Québec',
    regulator: 'Autorité des marchés financiers (AMF)',
    regulatorFr: 'Autorité des marchés financiers (AMF)',
    regulatorUrl: 'https://lautorite.qc.ca/',
    
    federalInterestCap: '60% annual interest rate (Criminal Code Section 347)',
    federalInterestCapFr: 'Taux d\'intérêt annuel de 60 % (article 347 du Code criminel)',
    
    paydayLoanRegulated: true,
    paydayMaxCostPer100: '$15 per $100 borrowed',
    paydayMaxCostPer100Fr: '15 $ par tranche de 100 $ empruntés',
    paydayMaxTerm: 'Maximum 62 days',
    paydayMaxTermFr: 'Maximum 62 jours',
    paydayLicensingRequired: true,
    
    coolingOffPeriod: '2 business days cooling-off period after repayment',
    coolingOffPeriodFr: 'Période de réflexion de 2 jours ouvrables après le remboursement',
    maxRollovers: 'No rollovers allowed',
    maxRolloversFr: 'Aucun renouvellement autorisé',
    
    requiredDisclosures: [
      'Total cost of credit in dollars',
      'Annual credit rate (APR)',
      'Payment terms and schedule',
      'Late payment fees',
      'Borrower\'s right to cancel',
    ],
    requiredDisclosuresFr: [
      'Coût total du crédit en dollars',
      'Taux de crédit annuel (TCA)',
      'Modalités et calendrier de paiement',
      'Frais de retard de paiement',
      'Droit d\'annulation de l\'emprunteur',
    ],
    
    borrowerRights: [
      'Right to cancel within 2 business days',
      'Right to clear disclosure in French',
      'Right to prepay without penalty',
      'Right to file complaints with AMF',
      'Protection under Quebec Consumer Protection Act',
    ],
    borrowerRightsFr: [
      'Droit d\'annuler dans les 2 jours ouvrables',
      'Droit à une divulgation claire en français',
      'Droit de rembourser par anticipation sans pénalité',
      'Droit de déposer des plaintes auprès de l\'AMF',
      'Protection en vertu de la Loi sur la protection du consommateur du Québec',
    ],
    
    complaintAuthority: 'Autorité des marchés financiers (AMF)',
    complaintAuthorityFr: 'Autorité des marchés financiers (AMF)',
    complaintUrl: 'https://lautorite.qc.ca/grand-public/nous-joindre/porter-plainte',
    
    keyLegislation: [
      'Consumer Protection Act (Quebec)',
      'Act respecting the distribution of financial products and services',
      'Criminal Code of Canada, Section 347',
    ],
    keyLegislationFr: [
      'Loi sur la protection du consommateur (Québec)',
      'Loi sur la distribution de produits et services financiers',
      'Code criminel du Canada, article 347',
    ],
    
    notes: [
      'All contracts and disclosures must be in French (or bilingual if requested)',
      'Quebec has strong consumer protection laws',
      'AMF maintains registry of licensed money lenders',
      'Same $15 per $100 cap as Ontario',
    ],
    notesFr: [
      'Tous les contrats et divulgations doivent être en français (ou bilingues si demandé)',
      'Le Québec a des lois strictes de protection du consommateur',
      'L\'AMF maintient un registre des prêteurs d\'argent autorisés',
      'Même plafond de 15 $ par 100 $ que l\'Ontario',
    ],
  },

  // ===== BRITISH COLUMBIA =====
  {
    province: 'British Columbia',
    provinceAbbr: 'BC',
    nameFr: 'Colombie-Britannique',
    regulator: 'Consumer Protection BC',
    regulatorFr: 'Protection du consommateur C.-B.',
    regulatorUrl: 'https://www.consumerprotectionbc.ca/',
    
    federalInterestCap: '60% annual interest rate (Criminal Code Section 347)',
    federalInterestCapFr: 'Taux d\'intérêt annuel de 60 % (article 347 du Code criminel)',
    
    paydayLoanRegulated: true,
    paydayMaxCostPer100: '$15 per $100 borrowed',
    paydayMaxCostPer100Fr: '15 $ par tranche de 100 $ empruntés',
    paydayMaxTerm: 'Maximum 62 days',
    paydayMaxTermFr: 'Maximum 62 jours',
    paydayLicensingRequired: true,
    
    coolingOffPeriod: '2 business days cooling-off period',
    coolingOffPeriodFr: 'Période de réflexion de 2 jours ouvrables',
    maxRollovers: 'No rollovers permitted',
    maxRolloversFr: 'Aucun renouvellement permis',
    
    requiredDisclosures: [
      'Total cost of borrowing',
      'Annual percentage rate (APR)',
      'All fees and charges',
      'Payment schedule',
      'Cancellation rights',
    ],
    requiredDisclosuresFr: [
      'Coût total de l\'emprunt',
      'Taux annuel en pourcentage (TAP)',
      'Tous les frais et charges',
      'Calendrier de paiement',
      'Droits d\'annulation',
    ],
    
    borrowerRights: [
      'Right to cancel within 2 business days',
      'Right to prepay without penalty',
      'Right to clear cost disclosure',
      'Right to file complaints with Consumer Protection BC',
      'Protection from unfair collection practices',
    ],
    borrowerRightsFr: [
      'Droit d\'annuler dans les 2 jours ouvrables',
      'Droit de rembourser par anticipation sans pénalité',
      'Droit à une divulgation claire des coûts',
      'Droit de déposer des plaintes auprès de Protection du consommateur C.-B.',
      'Protection contre les pratiques de recouvrement injustes',
    ],
    
    complaintAuthority: 'Consumer Protection BC',
    complaintAuthorityFr: 'Protection du consommateur C.-B.',
    complaintUrl: 'https://www.consumerprotectionbc.ca/consumer-help/file-a-complaint/',
    
    keyLegislation: [
      'Business Practices and Consumer Protection Act',
      'Payday Loans Regulation',
      'Criminal Code of Canada, Section 347',
    ],
    keyLegislationFr: [
      'Loi sur les pratiques commerciales et la protection des consommateurs',
      'Règlement sur les prêts sur salaire',
      'Code criminel du Canada, article 347',
    ],
    
    notes: [
      'BC matches Ontario and Quebec with $15 per $100 cap',
      'Consumer Protection BC licenses and regulates payday lenders',
      'Online payday lenders must be licensed in BC to serve BC residents',
      'Strong enforcement of licensing requirements',
    ],
    notesFr: [
      'La C.-B. égale l\'Ontario et le Québec avec un plafond de 15 $ par 100 $',
      'Protection du consommateur C.-B. délivre les licences et réglemente les prêteurs de dépannage',
      'Les prêteurs de dépannage en ligne doivent être autorisés en C.-B. pour servir les résidents de la C.-B.',
      'Application stricte des exigences de licence',
    ],
  },

  // ===== ALBERTA =====
  {
    province: 'Alberta',
    provinceAbbr: 'AB',
    nameFr: 'Alberta',
    regulator: 'Service Alberta - Consumer Services',
    regulatorFr: 'Service Alberta - Services aux consommateurs',
    regulatorUrl: 'https://www.alberta.ca/consumer-services.aspx',
    
    federalInterestCap: '60% annual interest rate (Criminal Code Section 347)',
    federalInterestCapFr: 'Taux d\'intérêt annuel de 60 % (article 347 du Code criminel)',
    
    paydayLoanRegulated: true,
    paydayMaxCostPer100: '$15 per $100 borrowed',
    paydayMaxCostPer100Fr: '15 $ par tranche de 100 $ empruntés',
    paydayMaxTerm: 'Maximum 62 days',
    paydayMaxTermFr: 'Maximum 62 jours',
    paydayLicensingRequired: true,
    
    coolingOffPeriod: '2 business days cooling-off period',
    coolingOffPeriodFr: 'Période de réflexion de 2 jours ouvrables',
    maxRollovers: 'Maximum 2 consecutive rollovers',
    maxRolloversFr: 'Maximum 2 renouvellements consécutifs',
    
    requiredDisclosures: [
      'Total cost of credit in dollars',
      'Annual percentage rate (APR)',
      'Payment dates and amounts',
      'Default and late fees',
      'Borrower cancellation rights',
    ],
    requiredDisclosuresFr: [
      'Coût total du crédit en dollars',
      'Taux annuel en pourcentage (TAP)',
      'Dates et montants de paiement',
      'Frais de défaut et de retard',
      'Droits d\'annulation de l\'emprunteur',
    ],
    
    borrowerRights: [
      'Right to cancel within 2 business days',
      'Right to prepay without penalty',
      'Right to clear disclosure before signing',
      'Right to file complaints with Service Alberta',
      'Protection under Fair Trading Act',
    ],
    borrowerRightsFr: [
      'Droit d\'annuler dans les 2 jours ouvrables',
      'Droit de rembourser par anticipation sans pénalité',
      'Droit à une divulgation claire avant de signer',
      'Droit de déposer des plaintes auprès de Service Alberta',
      'Protection en vertu de la Loi sur les pratiques commerciales équitables',
    ],
    
    complaintAuthority: 'Service Alberta - Consumer Services',
    complaintAuthorityFr: 'Service Alberta - Services aux consommateurs',
    complaintUrl: 'https://www.alberta.ca/consumer-services-complaints.aspx',
    
    keyLegislation: [
      'Fair Trading Act',
      'Payday Loans Regulation',
      'Criminal Code of Canada, Section 347',
    ],
    keyLegislationFr: [
      'Loi sur les pratiques commerciales équitables',
      'Règlement sur les prêts sur salaire',
      'Code criminel du Canada, article 347',
    ],
    
    notes: [
      'Alberta allows up to 2 consecutive rollovers (unlike ON/QC/BC)',
      'Same $15 per $100 cost cap as other major provinces',
      'Service Alberta maintains public registry of licensed lenders',
      'Online lenders must be licensed to serve Alberta residents',
    ],
    notesFr: [
      'L\'Alberta autorise jusqu\'à 2 renouvellements consécutifs (contrairement à ON/QC/BC)',
      'Même plafond de coût de 15 $ par 100 $ que les autres grandes provinces',
      'Service Alberta maintient un registre public des prêteurs autorisés',
      'Les prêteurs en ligne doivent être autorisés pour servir les résidents de l\'Alberta',
    ],
  },

  // ===== MANITOBA =====
  {
    province: 'Manitoba',
    provinceAbbr: 'MB',
    nameFr: 'Manitoba',
    regulator: 'Consumers Protection Office Manitoba',
    regulatorFr: 'Bureau de la protection des consommateurs du Manitoba',
    regulatorUrl: 'https://www.gov.mb.ca/cca/cpo/',
    
    federalInterestCap: '60% annual interest rate (Criminal Code Section 347)',
    federalInterestCapFr: 'Taux d\'intérêt annuel de 60 % (article 347 du Code criminel)',
    
    paydayLoanRegulated: true,
    paydayMaxCostPer100: '$17 per $100 borrowed',
    paydayMaxCostPer100Fr: '17 $ par tranche de 100 $ empruntés',
    paydayMaxTerm: 'Between 10 and 62 days',
    paydayMaxTermFr: 'Entre 10 et 62 jours',
    paydayLicensingRequired: true,
    
    coolingOffPeriod: '2 business days cooling-off period',
    coolingOffPeriodFr: 'Période de réflexion de 2 jours ouvrables',
    maxRollovers: 'No rollovers allowed',
    maxRolloversFr: 'Aucun renouvellement autorisé',
    
    requiredDisclosures: [
      'Total cost of loan in dollars',
      'Annual interest rate (APR)',
      'Payment schedule',
      'Default penalties',
      'Right to cancel',
    ],
    requiredDisclosuresFr: [
      'Coût total du prêt en dollars',
      'Taux d\'intérêt annuel (TAP)',
      'Calendrier de paiement',
      'Pénalités de défaut',
      'Droit d\'annulation',
    ],
    
    borrowerRights: [
      'Right to cancel within 2 business days',
      'Right to prepay without penalty',
      'Right to receive written agreement',
      'Right to file complaints with Consumer Protection Office',
      'Protection from harassment',
    ],
    borrowerRightsFr: [
      'Droit d\'annuler dans les 2 jours ouvrables',
      'Droit de rembourser par anticipation sans pénalité',
      'Droit de recevoir un accord écrit',
      'Droit de déposer des plaintes auprès du Bureau de la protection des consommateurs',
      'Protection contre le harcèlement',
    ],
    
    complaintAuthority: 'Consumers Protection Office Manitoba',
    complaintAuthorityFr: 'Bureau de la protection des consommateurs du Manitoba',
    complaintUrl: 'https://www.gov.mb.ca/cca/cpo/contact.html',
    
    keyLegislation: [
      'The Consumer Protection Act (Manitoba)',
      'Payday Loans Regulation',
      'Criminal Code of Canada, Section 347',
    ],
    keyLegislationFr: [
      'Loi sur la protection du consommateur (Manitoba)',
      'Règlement sur les prêts sur salaire',
      'Code criminel du Canada, article 347',
    ],
    
    notes: [
      'Manitoba cap of $17 per $100 is slightly higher than ON/QC/BC/AB',
      'Minimum loan term of 10 days required',
      'No rollovers or renewals permitted',
      'Lenders must be licensed by Consumer Protection Office',
    ],
    notesFr: [
      'Le plafond du Manitoba de 17 $ par 100 $ est légèrement plus élevé que ON/QC/BC/AB',
      'Durée minimale de prêt de 10 jours requise',
      'Aucun renouvellement ou prolongation permis',
      'Les prêteurs doivent être autorisés par le Bureau de la protection des consommateurs',
    ],
  },

  // ===== SASKATCHEWAN =====
  {
    province: 'Saskatchewan',
    provinceAbbr: 'SK',
    nameFr: 'Saskatchewan',
    regulator: 'Financial and Consumer Affairs Authority (FCAA)',
    regulatorFr: 'Autorité des affaires financières et de la consommation (FCAA)',
    regulatorUrl: 'https://fcaa.gov.sk.ca/',
    
    federalInterestCap: '60% annual interest rate (Criminal Code Section 347)',
    federalInterestCapFr: 'Taux d\'intérêt annuel de 60 % (article 347 du Code criminel)',
    
    paydayLoanRegulated: true,
    paydayMaxCostPer100: '$17 per $100 borrowed',
    paydayMaxCostPer100Fr: '17 $ par tranche de 100 $ empruntés',
    paydayMaxTerm: 'Maximum 62 days',
    paydayMaxTermFr: 'Maximum 62 jours',
    paydayLicensingRequired: true,
    
    coolingOffPeriod: '2 business days after repayment',
    coolingOffPeriodFr: 'Période de 2 jours ouvrables après le remboursement',
    maxRollovers: 'No rollovers allowed',
    maxRolloversFr: 'Aucun renouvellement autorisé',
    
    requiredDisclosures: [
      'Total cost of borrowing',
      'Annual percentage rate (APR)',
      'Payment terms',
      'Late payment charges',
      'Cancellation rights',
    ],
    requiredDisclosuresFr: [
      'Coût total de l\'emprunt',
      'Taux annuel en pourcentage (TAP)',
      'Conditions de paiement',
      'Frais de retard de paiement',
      'Droits d\'annulation',
    ],
    
    borrowerRights: [
      'Right to cancel within 2 business days',
      'Right to prepay without penalty',
      'Right to clear written agreement',
      'Right to file complaints with FCAA',
      'Protection under Payday Loans Act',
    ],
    borrowerRightsFr: [
      'Droit d\'annuler dans les 2 jours ouvrables',
      'Droit de rembourser par anticipation sans pénalité',
      'Droit à un accord écrit clair',
      'Droit de déposer des plaintes auprès de la FCAA',
      'Protection en vertu de la Loi sur les prêts sur salaire',
    ],
    
    complaintAuthority: 'Financial and Consumer Affairs Authority (FCAA)',
    complaintAuthorityFr: 'Autorité des affaires financières et de la consommation (FCAA)',
    complaintUrl: 'https://fcaa.gov.sk.ca/complaints',
    
    keyLegislation: [
      'The Payday Loans Act (Saskatchewan)',
      'The Consumer Protection and Business Practices Act',
      'Criminal Code of Canada, Section 347',
    ],
    keyLegislationFr: [
      'Loi sur les prêts sur salaire (Saskatchewan)',
      'Loi sur la protection du consommateur et les pratiques commerciales',
      'Code criminel du Canada, article 347',
    ],
    
    notes: [
      'Saskatchewan cap of $17 per $100 matches Manitoba',
      'FCAA licenses and regulates all payday lenders',
      'No rollovers permitted',
      '2-day cooling-off period after repayment before new loan',
    ],
    notesFr: [
      'Le plafond de 17 $ par 100 $ de la Saskatchewan correspond au Manitoba',
      'La FCAA autorise et réglemente tous les prêteurs de dépannage',
      'Aucun renouvellement permis',
      'Période de réflexion de 2 jours après le remboursement avant un nouveau prêt',
    ],
  },

  // ===== NOVA SCOTIA =====
  {
    province: 'Nova Scotia',
    provinceAbbr: 'NS',
    nameFr: 'Nouvelle-Écosse',
    regulator: 'Service Nova Scotia - Consumer Protection',
    regulatorFr: 'Service Nouvelle-Écosse - Protection du consommateur',
    regulatorUrl: 'https://novascotia.ca/sns/access/consumer.asp',
    
    federalInterestCap: '60% annual interest rate (Criminal Code Section 347)',
    federalInterestCapFr: 'Taux d\'intérêt annuel de 60 % (article 347 du Code criminel)',
    
    paydayLoanRegulated: true,
    paydayMaxCostPer100: '$19 per $100 borrowed',
    paydayMaxCostPer100Fr: '19 $ par tranche de 100 $ empruntés',
    paydayMaxTerm: 'Maximum 62 days',
    paydayMaxTermFr: 'Maximum 62 jours',
    paydayLicensingRequired: true,
    
    coolingOffPeriod: '2 business days cooling-off period',
    coolingOffPeriodFr: 'Période de réflexion de 2 jours ouvrables',
    maxRollovers: 'No rollovers permitted',
    maxRolloversFr: 'Aucun renouvellement permis',
    
    requiredDisclosures: [
      'Total cost in dollars',
      'Annual percentage rate (APR)',
      'Payment schedule',
      'Default fees',
      'Right to cancel',
    ],
    requiredDisclosuresFr: [
      'Coût total en dollars',
      'Taux annuel en pourcentage (TAP)',
      'Calendrier de paiement',
      'Frais de défaut',
      'Droit d\'annulation',
    ],
    
    borrowerRights: [
      'Right to cancel within 2 business days',
      'Right to prepay without penalty',
      'Right to clear disclosure',
      'Right to file complaints with Service Nova Scotia',
      'Protection under Consumer Protection Act',
    ],
    borrowerRightsFr: [
      'Droit d\'annuler dans les 2 jours ouvrables',
      'Droit de rembourser par anticipation sans pénalité',
      'Droit à une divulgation claire',
      'Droit de déposer des plaintes auprès de Service Nouvelle-Écosse',
      'Protection en vertu de la Loi sur la protection du consommateur',
    ],
    
    complaintAuthority: 'Service Nova Scotia - Consumer Protection',
    complaintAuthorityFr: 'Service Nouvelle-Écosse - Protection du consommateur',
    complaintUrl: 'https://novascotia.ca/sns/access/consumer/contact-us.asp',
    
    keyLegislation: [
      'Consumer Protection Act (Nova Scotia)',
      'Payday Lenders Regulations',
      'Criminal Code of Canada, Section 347',
    ],
    keyLegislationFr: [
      'Loi sur la protection du consommateur (Nouvelle-Écosse)',
      'Règlement sur les prêteurs de dépannage',
      'Code criminel du Canada, article 347',
    ],
    
    notes: [
      'Nova Scotia cap of $19 per $100 is higher than most provinces',
      'All payday lenders must be licensed by Service Nova Scotia',
      'No rollovers or renewals allowed',
      'Atlantic region generally has higher payday loan costs',
    ],
    notesFr: [
      'Le plafond de 19 $ par 100 $ de la Nouvelle-Écosse est plus élevé que la plupart des provinces',
      'Tous les prêteurs de dépannage doivent être autorisés par Service Nouvelle-Écosse',
      'Aucun renouvellement ou prolongation autorisé',
      'La région de l\'Atlantique a généralement des coûts de prêt de dépannage plus élevés',
    ],
  },

  // ===== NEW BRUNSWICK =====
  {
    province: 'New Brunswick',
    provinceAbbr: 'NB',
    nameFr: 'Nouveau-Brunswick',
    regulator: 'Financial and Consumer Services Commission (FCNB)',
    regulatorFr: 'Commission des services financiers et des services aux consommateurs (FCNB)',
    regulatorUrl: 'https://fcnb.ca/',
    
    federalInterestCap: '60% annual interest rate (Criminal Code Section 347)',
    federalInterestCapFr: 'Taux d\'intérêt annuel de 60 % (article 347 du Code criminel)',
    
    paydayLoanRegulated: true,
    paydayMaxCostPer100: '$15 per $100 borrowed',
    paydayMaxCostPer100Fr: '15 $ par tranche de 100 $ empruntés',
    paydayMaxTerm: 'Maximum 62 days',
    paydayMaxTermFr: 'Maximum 62 jours',
    paydayLicensingRequired: true,
    
    coolingOffPeriod: '2 business days after full repayment',
    coolingOffPeriodFr: '2 jours ouvrables après le remboursement complet',
    maxRollovers: 'No rollovers allowed',
    maxRolloversFr: 'Aucun renouvellement autorisé',
    
    requiredDisclosures: [
      'Total cost of borrowing',
      'Annual percentage rate (APR)',
      'Payment dates and amounts',
      'Penalties and fees',
      'Cancellation rights',
    ],
    requiredDisclosuresFr: [
      'Coût total de l\'emprunt',
      'Taux annuel en pourcentage (TAP)',
      'Dates et montants de paiement',
      'Pénalités et frais',
      'Droits d\'annulation',
    ],
    
    borrowerRights: [
      'Right to cancel within 2 business days',
      'Right to prepay without penalty',
      'Right to bilingual services',
      'Right to file complaints with FCNB',
      'Protection under Cost of Credit Disclosure Act',
    ],
    borrowerRightsFr: [
      'Droit d\'annuler dans les 2 jours ouvrables',
      'Droit de rembourser par anticipation sans pénalité',
      'Droit à des services bilingues',
      'Droit de déposer des plaintes auprès de la FCNB',
      'Protection en vertu de la Loi sur la communication du coût du crédit',
    ],
    
    complaintAuthority: 'Financial and Consumer Services Commission (FCNB)',
    complaintAuthorityFr: 'Commission des services financiers et des services aux consommateurs (FCNB)',
    complaintUrl: 'https://fcnb.ca/en/complaints',
    
    keyLegislation: [
      'Cost of Credit Disclosure Act',
      'Payday Lenders Regulations',
      'Criminal Code of Canada, Section 347',
    ],
    keyLegislationFr: [
      'Loi sur la communication du coût du crédit',
      'Règlement sur les prêteurs sur salaire',
      'Code criminel du Canada, article 347',
    ],
    
    notes: [
      'New Brunswick has lowest Atlantic payday loan cap at $15 per $100',
      'Only officially bilingual province (EN/FR)',
      'FCNB licenses and regulates all payday lenders',
      'Strong consumer protection framework',
    ],
    notesFr: [
      'Le Nouveau-Brunswick a le plafond de prêt de dépannage le plus bas de l\'Atlantique à 15 $ par 100 $',
      'Seule province officiellement bilingue (EN/FR)',
      'La FCNB autorise et réglemente tous les prêteurs de dépannage',
      'Cadre solide de protection du consommateur',
    ],
  },

  // ===== PRINCE EDWARD ISLAND =====
  {
    province: 'Prince Edward Island',
    provinceAbbr: 'PE',
    nameFr: 'Île-du-Prince-Édouard',
    regulator: 'Office of the Attorney General - Consumer Services',
    regulatorFr: 'Bureau du procureur général - Services aux consommateurs',
    regulatorUrl: 'https://www.princeedwardisland.ca/en/topic/consumer-services',
    
    federalInterestCap: '60% annual interest rate (Criminal Code Section 347)',
    federalInterestCapFr: 'Taux d\'intérêt annuel de 60 % (article 347 du Code criminel)',
    
    paydayLoanRegulated: true,
    paydayMaxCostPer100: '$25 per $100 borrowed',
    paydayMaxCostPer100Fr: '25 $ par tranche de 100 $ empruntés',
    paydayMaxTerm: 'Maximum 62 days',
    paydayMaxTermFr: 'Maximum 62 jours',
    paydayLicensingRequired: true,
    
    coolingOffPeriod: 'No specific cooling-off period mandated',
    coolingOffPeriodFr: 'Aucune période de réflexion spécifique imposée',
    maxRollovers: 'Rollovers not specifically prohibited',
    maxRolloversFr: 'Renouvellements non spécifiquement interdits',
    
    requiredDisclosures: [
      'Total cost of loan',
      'Annual percentage rate (APR)',
      'Payment terms',
      'Default charges',
      'Borrower rights',
    ],
    requiredDisclosuresFr: [
      'Coût total du prêt',
      'Taux annuel en pourcentage (TAP)',
      'Conditions de paiement',
      'Frais de défaut',
      'Droits de l\'emprunteur',
    ],
    
    borrowerRights: [
      'Right to clear disclosure before signing',
      'Right to prepay without penalty',
      'Right to file complaints with Consumer Services',
      'Protection under Consumer Protection Act',
      'Right to fair collection practices',
    ],
    borrowerRightsFr: [
      'Droit à une divulgation claire avant de signer',
      'Droit de rembourser par anticipation sans pénalité',
      'Droit de déposer des plaintes auprès de Services aux consommateurs',
      'Protection en vertu de la Loi sur la protection du consommateur',
      'Droit à des pratiques de recouvrement équitables',
    ],
    
    complaintAuthority: 'Office of the Attorney General - Consumer Services',
    complaintAuthorityFr: 'Bureau du procureur général - Services aux consommateurs',
    complaintUrl: 'https://www.princeedwardisland.ca/en/information/justice-and-public-safety/consumer-complaint',
    
    keyLegislation: [
      'Consumer Protection Act (PEI)',
      'Payday Loans Act',
      'Criminal Code of Canada, Section 347',
    ],
    keyLegislationFr: [
      'Loi sur la protection du consommateur (Î.-P.-É.)',
      'Loi sur les prêts sur salaire',
      'Code criminel du Canada, article 347',
    ],
    
    notes: [
      'PEI has highest payday loan cap in Canada at $25 per $100',
      'Smallest provincial market with fewer lenders',
      'Less restrictive cooling-off and rollover rules',
      'Consumer Services office handles complaints',
    ],
    notesFr: [
      'L\'Î.-P.-É. a le plafond de prêt de dépannage le plus élevé au Canada à 25 $ par 100 $',
      'Marché provincial le plus petit avec moins de prêteurs',
      'Règles de réflexion et de renouvellement moins restrictives',
      'Le bureau des Services aux consommateurs traite les plaintes',
    ],
  },

  // ===== NEWFOUNDLAND AND LABRADOR =====
  {
    province: 'Newfoundland and Labrador',
    provinceAbbr: 'NL',
    nameFr: 'Terre-Neuve-et-Labrador',
    regulator: 'Service NL - Consumer Affairs',
    regulatorFr: 'Service NL - Affaires des consommateurs',
    regulatorUrl: 'https://www.gov.nl.ca/servicenl/consumer/',
    
    federalInterestCap: '60% annual interest rate (Criminal Code Section 347)',
    federalInterestCapFr: 'Taux d\'intérêt annuel de 60 % (article 347 du Code criminel)',
    
    paydayLoanRegulated: true,
    paydayMaxCostPer100: '$21 per $100 borrowed',
    paydayMaxCostPer100Fr: '21 $ par tranche de 100 $ empruntés',
    paydayMaxTerm: 'Maximum 62 days',
    paydayMaxTermFr: 'Maximum 62 jours',
    paydayLicensingRequired: true,
    
    coolingOffPeriod: '2 business days after repayment',
    coolingOffPeriodFr: '2 jours ouvrables après le remboursement',
    maxRollovers: 'No rollovers allowed',
    maxRolloversFr: 'Aucun renouvellement autorisé',
    
    requiredDisclosures: [
      'Total cost of borrowing',
      'Annual percentage rate (APR)',
      'Payment schedule',
      'Late fees and penalties',
      'Right to cancel',
    ],
    requiredDisclosuresFr: [
      'Coût total de l\'emprunt',
      'Taux annuel en pourcentage (TAP)',
      'Calendrier de paiement',
      'Frais de retard et pénalités',
      'Droit d\'annulation',
    ],
    
    borrowerRights: [
      'Right to cancel within 2 business days',
      'Right to prepay without penalty',
      'Right to clear written agreement',
      'Right to file complaints with Service NL',
      'Protection under Consumer Protection and Business Practices Act',
    ],
    borrowerRightsFr: [
      'Droit d\'annuler dans les 2 jours ouvrables',
      'Droit de rembourser par anticipation sans pénalité',
      'Droit à un accord écrit clair',
      'Droit de déposer des plaintes auprès de Service NL',
      'Protection en vertu de la Loi sur la protection du consommateur et les pratiques commerciales',
    ],
    
    complaintAuthority: 'Service NL - Consumer Affairs',
    complaintAuthorityFr: 'Service NL - Affaires des consommateurs',
    complaintUrl: 'https://www.gov.nl.ca/servicenl/consumer/contact-us/',
    
    keyLegislation: [
      'Consumer Protection and Business Practices Act',
      'Payday Lenders Regulations',
      'Criminal Code of Canada, Section 347',
    ],
    keyLegislationFr: [
      'Loi sur la protection du consommateur et les pratiques commerciales',
      'Règlement sur les prêteurs sur salaire',
      'Code criminel du Canada, article 347',
    ],
    
    notes: [
      'Newfoundland cap of $21 per $100 is mid-range for Atlantic Canada',
      'Service NL licenses all payday lenders',
      '2-day cooling-off period after repayment required',
      'No rollovers permitted',
    ],
    notesFr: [
      'Le plafond de 21 $ par 100 $ de Terre-Neuve est moyen pour le Canada atlantique',
      'Service NL autorise tous les prêteurs de dépannage',
      'Période de réflexion de 2 jours après le remboursement requise',
      'Aucun renouvellement permis',
    ],
  },

  // ===== NORTHWEST TERRITORIES =====
  {
    province: 'Northwest Territories',
    provinceAbbr: 'NT',
    nameFr: 'Territoires du Nord-Ouest',
    regulator: 'Office of the Superintendent of Securities (NWT)',
    regulatorFr: 'Bureau du surintendant des valeurs mobilières (TNO)',
    regulatorUrl: 'https://www.justice.gov.nt.ca/en/securities/',
    
    federalInterestCap: '60% annual interest rate (Criminal Code Section 347)',
    federalInterestCapFr: 'Taux d\'intérêt annuel de 60 % (article 347 du Code criminel)',
    
    paydayLoanRegulated: false,
    paydayMaxCostPer100: null,
    paydayMaxCostPer100Fr: null,
    paydayMaxTerm: null,
    paydayMaxTermFr: null,
    paydayLicensingRequired: false,
    
    coolingOffPeriod: null,
    coolingOffPeriodFr: null,
    maxRollovers: 'No specific restrictions',
    maxRolloversFr: 'Aucune restriction spécifique',
    
    requiredDisclosures: [
      'Criminal Code 60% APR cap applies',
      'Federal consumer protection standards',
      'General disclosure requirements',
    ],
    requiredDisclosuresFr: [
      'Plafond de 60 % TAP du Code criminel s\'applique',
      'Normes fédérales de protection du consommateur',
      'Exigences générales de divulgation',
    ],
    
    borrowerRights: [
      'Protection under Criminal Code Section 347',
      'Right to fair collection practices',
      'Right to clear disclosure',
      'General consumer protection rights',
    ],
    borrowerRightsFr: [
      'Protection en vertu de l\'article 347 du Code criminel',
      'Droit à des pratiques de recouvrement équitables',
      'Droit à une divulgation claire',
      'Droits généraux de protection du consommateur',
    ],
    
    complaintAuthority: 'Office of the Superintendent of Securities (NWT)',
    complaintAuthorityFr: 'Bureau du surintendant des valeurs mobilières (TNO)',
    complaintUrl: 'https://www.justice.gov.nt.ca/en/contact-us/',
    
    keyLegislation: [
      'Criminal Code of Canada, Section 347',
      'Consumer Protection Act (NWT)',
    ],
    keyLegislationFr: [
      'Code criminel du Canada, article 347',
      'Loi sur la protection du consommateur (TNO)',
    ],
    
    notes: [
      'No specific payday loan regulations in place',
      'Criminal Code 60% APR cap applies',
      'Small market with limited lender presence',
      'Federal regulations and protections apply',
    ],
    notesFr: [
      'Aucune réglementation spécifique sur les prêts sur salaire en place',
      'Le plafond de 60 % TAP du Code criminel s\'applique',
      'Petit marché avec présence limitée de prêteurs',
      'Les réglementations et protections fédérales s\'appliquent',
    ],
  },

  // ===== NUNAVUT =====
  {
    province: 'Nunavut',
    provinceAbbr: 'NU',
    nameFr: 'Nunavut',
    regulator: 'Department of Justice - Legal Registries',
    regulatorFr: 'Ministère de la Justice - Registres juridiques',
    regulatorUrl: 'https://www.gov.nu.ca/justice',
    
    federalInterestCap: '60% annual interest rate (Criminal Code Section 347)',
    federalInterestCapFr: 'Taux d\'intérêt annuel de 60 % (article 347 du Code criminel)',
    
    paydayLoanRegulated: false,
    paydayMaxCostPer100: null,
    paydayMaxCostPer100Fr: null,
    paydayMaxTerm: null,
    paydayMaxTermFr: null,
    paydayLicensingRequired: false,
    
    coolingOffPeriod: null,
    coolingOffPeriodFr: null,
    maxRollovers: 'No specific restrictions',
    maxRolloversFr: 'Aucune restriction spécifique',
    
    requiredDisclosures: [
      'Criminal Code 60% APR cap applies',
      'Federal consumer protection standards',
      'Basic disclosure requirements',
    ],
    requiredDisclosuresFr: [
      'Plafond de 60 % TAP du Code criminel s\'applique',
      'Normes fédérales de protection du consommateur',
      'Exigences de base en matière de divulgation',
    ],
    
    borrowerRights: [
      'Protection under Criminal Code Section 347',
      'Right to fair treatment',
      'Right to clear disclosure',
      'General consumer protection rights',
    ],
    borrowerRightsFr: [
      'Protection en vertu de l\'article 347 du Code criminel',
      'Droit à un traitement équitable',
      'Droit à une divulgation claire',
      'Droits généraux de protection du consommateur',
    ],
    
    complaintAuthority: 'Department of Justice - Nunavut',
    complaintAuthorityFr: 'Ministère de la Justice - Nunavut',
    complaintUrl: 'https://www.gov.nu.ca/justice/information/contact-us',
    
    keyLegislation: [
      'Criminal Code of Canada, Section 347',
      'Consumer Protection Act (Nunavut)',
    ],
    keyLegislationFr: [
      'Code criminel du Canada, article 347',
      'Loi sur la protection du consommateur (Nunavut)',
    ],
    
    notes: [
      'No specific payday loan regulations',
      'Criminal Code 60% APR cap applies',
      'Canada\'s newest territory (1999)',
      'Very limited lender market presence',
    ],
    notesFr: [
      'Aucune réglementation spécifique sur les prêts sur salaire',
      'Le plafond de 60 % TAP du Code criminel s\'applique',
      'Territoire le plus récent du Canada (1999)',
      'Présence très limitée de prêteurs sur le marché',
    ],
  },

  // ===== YUKON =====
  {
    province: 'Yukon',
    provinceAbbr: 'YT',
    nameFr: 'Yukon',
    regulator: 'Consumer Services - Community Services',
    regulatorFr: 'Services aux consommateurs - Services communautaires',
    regulatorUrl: 'https://yukon.ca/en/consumer-services',
    
    federalInterestCap: '60% annual interest rate (Criminal Code Section 347)',
    federalInterestCapFr: 'Taux d\'intérêt annuel de 60 % (article 347 du Code criminel)',
    
    paydayLoanRegulated: true,
    paydayMaxCostPer100: '$23 per $100 borrowed',
    paydayMaxCostPer100Fr: '23 $ par tranche de 100 $ empruntés',
    paydayMaxTerm: 'Maximum 62 days',
    paydayMaxTermFr: 'Maximum 62 jours',
    paydayLicensingRequired: true,
    
    coolingOffPeriod: '2 business days after repayment',
    coolingOffPeriodFr: '2 jours ouvrables après le remboursement',
    maxRollovers: 'No rollovers allowed',
    maxRolloversFr: 'Aucun renouvellement autorisé',
    
    requiredDisclosures: [
      'Total cost of borrowing',
      'Annual percentage rate (APR)',
      'Payment terms',
      'Default charges',
      'Cancellation rights',
    ],
    requiredDisclosuresFr: [
      'Coût total de l\'emprunt',
      'Taux annuel en pourcentage (TAP)',
      'Conditions de paiement',
      'Frais de défaut',
      'Droits d\'annulation',
    ],
    
    borrowerRights: [
      'Right to cancel within 2 business days',
      'Right to prepay without penalty',
      'Right to clear written agreement',
      'Right to file complaints with Consumer Services',
      'Protection under Consumer Protection Act',
    ],
    borrowerRightsFr: [
      'Droit d\'annuler dans les 2 jours ouvrables',
      'Droit de rembourser par anticipation sans pénalité',
      'Droit à un accord écrit clair',
      'Droit de déposer des plaintes auprès de Services aux consommateurs',
      'Protection en vertu de la Loi sur la protection du consommateur',
    ],
    
    complaintAuthority: 'Consumer Services - Yukon',
    complaintAuthorityFr: 'Services aux consommateurs - Yukon',
    complaintUrl: 'https://yukon.ca/en/consumer-services/file-consumer-complaint',
    
    keyLegislation: [
      'Consumer Protection Act (Yukon)',
      'Payday Loans Regulation',
      'Criminal Code of Canada, Section 347',
    ],
    keyLegislationFr: [
      'Loi sur la protection du consommateur (Yukon)',
      'Règlement sur les prêts sur salaire',
      'Code criminel du Canada, article 347',
    ],
    
    notes: [
      'Yukon cap of $23 per $100 is relatively high',
      'All payday lenders must be licensed',
      '2-day cooling-off period after repayment',
      'Small territorial market with limited lenders',
    ],
    notesFr: [
      'Le plafond de 23 $ par 100 $ du Yukon est relativement élevé',
      'Tous les prêteurs de dépannage doivent être autorisés',
      'Période de réflexion de 2 jours après le remboursement',
      'Petit marché territorial avec des prêteurs limités',
    ],
  },
]

// Helper functions
export function getRegulationByProvince(provinceAbbr: string): CanadianProvincialRegulation | undefined {
  return canadianProvincialRegulations.find(reg => reg.provinceAbbr === provinceAbbr)
}

export function getRegulationByProvinceName(provinceName: string): CanadianProvincialRegulation | undefined {
  return canadianProvincialRegulations.find(
    reg => reg.province.toLowerCase() === provinceName.toLowerCase()
  )
}

export function getAllRegulatedProvinces(): CanadianProvincialRegulation[] {
  return canadianProvincialRegulations.filter(reg => reg.paydayLoanRegulated)
}

export function getAllUnregulatedTerritories(): CanadianProvincialRegulation[] {
  return canadianProvincialRegulations.filter(reg => !reg.paydayLoanRegulated)
}

export function getPaydayLoanCostComparison(): { province: string; cost: string; costNumber: number }[] {
  return canadianProvincialRegulations
    .filter(reg => reg.paydayMaxCostPer100 !== null)
    .map(reg => ({
      province: reg.province,
      cost: reg.paydayMaxCostPer100!,
      costNumber: parseFloat(reg.paydayMaxCostPer100!.replace(/[^0-9.]/g, '')),
    }))
    .sort((a, b) => a.costNumber - b.costNumber)
}

// Summary statistics
export const regulationsSummary = {
  totalProvinces: 13,
  regulatedProvinces: canadianProvincialRegulations.filter(r => r.paydayLoanRegulated).length,
  unregulatedTerritories: canadianProvincialRegulations.filter(r => !r.paydayLoanRegulated).length,
  lowestPaydayCost: '$15 per $100 (ON, QC, BC, AB, NB)',
  highestPaydayCost: '$25 per $100 (PE)',
  federalInterestCap: '60% APR (Criminal Code Section 347)',
}

// Export verification
console.log(`Loaded ${canadianProvincialRegulations.length} provincial/territorial regulations`)
console.log(`Regulated: ${regulationsSummary.regulatedProvinces}, Unregulated: ${regulationsSummary.unregulatedTerritories}`)
