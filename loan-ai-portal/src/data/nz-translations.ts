/**
 * New Zealand Content & Translations
 * Regulations, FAQs, and localized content for NZ market
 */

export const nzRegulations = {
  title: 'New Zealand Lending Regulations',
  mainAct: 'Credit Contracts and Consumer Finance Act 2003 (CCCFA)',
  regulator: 'Commerce Commission',
  regulatorUrl: 'https://www.comcom.govt.nz/',
  keyPoints: [
    'Maximum interest rate: No cap, but lenders must comply with responsible lending requirements',
    'Lenders must be registered with the Financial Service Providers Register (FSPR)',
    'Mandatory affordability assessments under CCCFA responsible lending code',
    'Borrowers have 5 working days cooling-off period for most consumer credit contracts',
    'Full disclosure of all fees, interest rates, and total cost of credit required',
    'Hardship provisions allow borrowers to apply for payment relief',
    'Credit reports managed by Centrix, Equifax, and illion',
    'Financial Markets Authority (FMA) oversees financial services conduct'
  ],
  responsibleLending: [
    'Lenders must make reasonable inquiries about income, expenses, and existing debts',
    'Must verify information where it appears unusual or inconsistent',
    'Cannot lend if loan likely to cause substantial hardship to borrower',
    'Must provide clear disclosure before contract signing',
    'Borrowers protected against unfair or deceptive practices'
  ]
}

export const nzFAQs = {
  general: [
    {
      question: 'What credit score do I need for a personal loan in New Zealand?',
      answer: 'Most NZ lenders prefer a credit score of 500+ (Centrix/Equifax scale). Scores above 700 typically qualify for better rates. However, some lenders specialize in bad credit loans. Your score is based on credit history with NZ credit bureaus: Centrix, Equifax NZ, and illion.'
    },
    {
      question: 'How quickly can I get a loan in New Zealand?',
      answer: 'Online lenders like Harmoney, Lending Crowd, and Latitude Financial can approve loans within hours and fund within 1-2 business days. Traditional banks (ANZ, BNZ, Westpac, ASB) typically take 3-7 days. Same-day funding is possible with some non-bank lenders if approved early in the day.'
    },
    {
      question: 'What documents do I need for a loan application?',
      answer: 'You\'ll typically need: NZ driver license or passport, proof of income (payslips, bank statements, or tax returns for self-employed), recent bank statements (3 months), proof of address, and details of existing debts. RealMe verification can speed up the process with some lenders.'
    },
    {
      question: 'Can I get a loan if I\'m on a work visa in New Zealand?',
      answer: 'Yes, many lenders accept applications from temporary residents on work visas. You\'ll need valid visa documentation, proof of NZ employment, and typically at least 6 months remaining on your visa. Some lenders may have additional requirements or higher interest rates for non-permanent residents.'
    },
    {
      question: 'What happens if I can\'t make my loan payments?',
      answer: 'Contact your lender immediately to discuss hardship provisions under the CCCFA. Options include payment holidays, reduced payments, extending the loan term, or consolidation. Defaulting can damage your credit score and result in additional fees, debt collection, or legal action. The Commerce Commission protects against unfair practices.'
    }
  ],
  regional: {
    auckland: [
      {
        question: 'Are loan requirements different in Auckland compared to other NZ regions?',
        answer: 'Lending criteria are the same nationwide under CCCFA, but Auckland\'s higher cost of living means lenders conduct stricter affordability assessments. You\'ll need to demonstrate ability to service debt while covering Auckland\'s expensive rent/mortgage and living costs.'
      },
      {
        question: 'Which lenders have branches in Auckland?',
        answer: 'Major banks (ANZ, ASB, BNZ, Westpac) have multiple Auckland branches. Non-bank lenders like Harmoney, Lending Crowd, and Finance Direct operate online but have Auckland-based customer service. Credit unions like NZCU Baywide also serve the Auckland region.'
      }
    ],
    wellington: [
      {
        question: 'Can government employees in Wellington get special loan rates?',
        answer: 'While there are no official "government employee" rates, stable public sector employment is viewed favorably by lenders. Some banks offer special packages for public servants. Your employment stability can qualify you for better rates regardless of who your employer is.'
      },
      {
        question: 'What\'s the average personal loan size in Wellington?',
        answer: 'Wellington borrowers typically apply for NZD 15,000-30,000 for debt consolidation or home improvements. Larger loans (NZD 30,000-50,000) are common for renovations given Wellington\'s older housing stock. Loan sizes depend on your income and existing commitments.'
      }
    ],
    christchurch: [
      {
        question: 'Are there special loans for earthquake-related repairs in Christchurch?',
        answer: 'While the main EQC/insurance processes are complete, some homeowners still need personal loans for uninsured repairs or upgrades. Several lenders offer home improvement loans with competitive rates. Check with your bank about secured personal loans if you have home equity.'
      },
      {
        question: 'How does living in Christchurch affect my loan application?',
        answer: 'Christchurch\'s lower cost of living compared to Auckland/Wellington can actually help your affordability assessment. Lenders calculate your disposable income after expenses, so lower living costs may allow larger loans. All major NZ lenders serve Canterbury with online applications.'
      }
    ]
  }
}

export const nzLoanTypes = [
  {
    type: 'Personal Loans',
    description: 'Unsecured loans from NZD 2,000 to NZD 70,000 with terms of 1-7 years',
    typicalUse: 'Debt consolidation, home improvements, medical expenses, or major purchases',
    interestRange: '7.95% - 29.95% p.a.',
    providers: 'Banks (ANZ, ASB, BNZ, Westpac), non-bank lenders (Harmoney, Lending Crowd, Latitude)'
  },
  {
    type: 'Debt Consolidation Loans',
    description: 'Combine multiple debts into single loan with potentially lower rate',
    typicalUse: 'Consolidating credit cards, store cards, and other high-interest debts',
    interestRange: '8.95% - 24.95% p.a.',
    providers: 'Harmoney, Lending Crowd, major banks, Finance Direct'
  },
  {
    type: 'Car Loans',
    description: 'Secured loans for vehicle purchase, both new and used',
    typicalUse: 'Buying cars, motorcycles, boats, or caravans',
    interestRange: '6.95% - 16.95% p.a.',
    providers: 'Banks, motor vehicle dealers, Heartland Bank, MTF Finance'
  },
  {
    type: 'Bad Credit Loans',
    description: 'Loans for borrowers with poor credit history',
    typicalUse: 'Emergency expenses or debt consolidation for those with credit issues',
    interestRange: '19.95% - 49.95% p.a.',
    providers: 'Finance Direct, Ferratum, Moola, Cash Converters'
  },
  {
    type: 'Medical Loans',
    description: 'Loans for medical procedures not covered by public health system',
    typicalUse: 'Dental work, cosmetic surgery, fertility treatment, private hospital care',
    interestRange: '9.95% - 19.95% p.a.',
    providers: 'Q Card (medical providers), bank personal loans, specialist medical finance companies'
  },
  {
    type: 'Home Improvement Loans',
    description: 'Loans for renovations, repairs, or property upgrades',
    typicalUse: 'Kitchen/bathroom renovations, weathertightness repairs, heat pumps, solar panels',
    interestRange: '7.95% - 16.95% p.a.',
    providers: 'Major banks, Heartland Bank, credit unions'
  }
]

export const nzLenders = [
  {
    name: 'Harmoney',
    type: 'Peer-to-peer lender',
    loanRange: 'NZD 2,000 - NZD 70,000',
    rates: 'From 7.95% p.a.',
    features: ['100% online', 'Fast approval', 'No early repayment fees', 'Fixed rates'],
    bestFor: 'Good credit borrowers seeking competitive rates'
  },
  {
    name: 'ANZ',
    type: 'Major bank',
    loanRange: 'NZD 2,000 - NZD 80,000',
    rates: 'From 12.45% p.a.',
    features: ['Nationwide branches', 'Existing customer discounts', 'Same day approval possible', 'Mobile app'],
    bestFor: 'ANZ customers or those wanting branch support'
  },
  {
    name: 'ASB',
    type: 'Major bank',
    loanRange: 'NZD 3,000 - NZD 70,000',
    rates: 'From 12.95% p.a.',
    features: ['No application fees', 'Rate discounts for ASB customers', 'Flexible repayments', '7-year terms available'],
    bestFor: 'ASB customers seeking flexible terms'
  },
  {
    name: 'Lending Crowd',
    type: 'Online lender',
    loanRange: 'NZD 5,000 - NZD 75,000',
    rates: 'From 9.95% p.a.',
    features: ['Quick online application', 'No early repayment penalties', 'Debt consolidation specialist', 'Fixed payments'],
    bestFor: 'Debt consolidation and mid-range credit scores'
  },
  {
    name: 'Finance Direct',
    type: 'Non-bank lender',
    loanRange: 'NZD 1,000 - NZD 50,000',
    rates: 'From 15.95% p.a.',
    features: ['Bad credit accepted', 'Quick decisions', 'Flexible eligibility', 'Personal service'],
    bestFor: 'Borrowers with credit challenges'
  }
]

export const nzDisclaimer = {
  affiliate: 'We earn a commission when you successfully apply for a loan through our recommended partners. This helps keep our service free. We only recommend licensed lenders registered with the Financial Service Providers Register (FSPR) and compliant with CCCFA regulations.',
  representative: 'Representative Example: A personal loan of NZD 20,000 over 5 years at 12.95% p.a. (fixed) would have 60 monthly repayments of NZD 459.75. Total amount repayable: NZD 27,585 (includes NZD 7,585 in interest). Rates, fees, and eligibility vary by lender and your circumstances.',
  warning: 'WARNING: Borrowing costs money. Make sure you can afford repayments before applying. Missing payments can harm your credit score and result in additional fees and collection action. Consider budgeting advice from MoneyTalks (0800 345 123) or Sorted.org.nz before committing to credit.'
}

export const nzFooterLinks = {
  resources: [
    { name: 'Commerce Commission', url: 'https://www.comcom.govt.nz/' },
    { name: 'Financial Markets Authority', url: 'https://www.fma.govt.nz/' },
    { name: 'Sorted.org.nz (Money Guidance)', url: 'https://sorted.org.nz/' },
    { name: 'MoneyTalks (Free Helpline)', url: 'https://www.moneytalks.co.nz/' },
    { name: 'Centrix Credit Bureau', url: 'https://www.centrix.co.nz/' },
    { name: 'Financial Services Complaints (FSCL)', url: 'https://fscl.org.nz/' }
  ],
  legal: [
    { name: 'Privacy Policy', url: '/nz/privacy' },
    { name: 'Terms of Service', url: '/nz/terms' },
    { name: 'Cookie Policy', url: '/nz/cookies' },
    { name: 'Disclosure Statement', url: '/nz/disclosures' },
    { name: 'Responsible Lending', url: '/nz/responsible-lending' }
  ]
}
