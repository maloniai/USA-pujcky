import { usStates, StateInfo } from '@/data/states'
import { cities, CityData } from '@/data/cities'
import { blogPostsEN } from '@/data/blog-posts'

export interface RegulationUpdate {
  title: string
  summary: string
  effectiveDate: string
  source: string
}

export interface CreditGuidance {
  audience: string
  tips: string[]
}

export interface EducationModule {
  id: string
  title: string
  description: string
  href: string
  tag?: string
}

export interface QuickLink {
  label: string
  href: string
}

export interface FAQEntry {
  question: string
  answer: string
}

export interface EducationContent {
  lastReviewed: string
  aiSummary: string[]
  quickLinks: QuickLink[]
  modules: EducationModule[]
  regulationUpdates: RegulationUpdate[]
  creditGuidance: CreditGuidance[]
  faqs: FAQEntry[]
  relatedArticles: QuickLink[]
}

interface EducationPathOptions {
  statesBase: string
  citiesBase: string
  apply: string
  blog: string
}

const DEFAULT_EDUCATION_PATHS: EducationPathOptions = {
  statesBase: '/states',
  citiesBase: '/cities',
  apply: '/apply',
  blog: '/blog',
}

function resolveEducationPaths(overrides?: Partial<EducationPathOptions>): EducationPathOptions {
  return {
    ...DEFAULT_EDUCATION_PATHS,
    ...overrides,
  }
}

const DEFAULT_REVIEW_DATE = '2025-10-01'

const articleLookup = blogPostsEN.reduce<Record<string, QuickLink>>((accumulator, post) => {
  accumulator[post.slug] = {
    label: post.title,
    href: `/blog/${post.slug}`,
  }
  return accumulator
}, {})

const DEFAULT_ARTICLES: QuickLink[] = [
  articleLookup['improve-credit-score-fast-proven-strategies'],
  articleLookup['how-to-get-approved-personal-loan-2025'],
  articleLookup['debt-consolidation-complete-guide'],
].filter(Boolean)

const STATE_OVERRIDES: Record<string, Partial<EducationContent>> = {
  california: {
    regulationUpdates: [
      {
        title: 'California Financing Law (2025 Re-certification)',
        summary: 'Verify annual licensing renewal with the DFPI and ensure APR disclosures align with the July 2025 digital lending bulletin.',
        effectiveDate: '2025-07-15',
        source: 'https://dfpi.ca.gov/california-financing-law/'
      },
      {
        title: 'Consumer Privacy Updates (SB-362 Delete Act)',
        summary: 'Audit marketing partners serving California borrowers and document opt-out workflows for sensitive personal data.',
        effectiveDate: '2025-01-01',
        source: 'https://oag.ca.gov/privacy/ccpa'
      }
    ],
    creditGuidance: [
      {
        audience: 'Borrowers with 720+ FICO',
        tips: [
          'Credit unions across Los Angeles and the Bay Area are quoting sub-8% personal loan rates for prime borrowers with steady income.',
          'Upload proof of high-earner W-2 income to unlock loan amounts closer to $100,000 in costlier metros.',
          'Consider rate-shopping with at least three DFPI-approved fintech lenders to capture competitive closing bonuses.'
        ]
      },
      {
        audience: 'Self-employed gig professionals',
        tips: [
          'Provide year-to-date profit and loss statements plus 1099s for the last two years to stabilize underwriting.',
          'Maintain a business bank account with 90 days of deposits above $5,000 to demonstrate cash flow.',
          'Use AI cash-flow forecasting tools to project income when applying with marketplace lenders.'
        ]
      }
    ]
  },
  texas: {
    regulationUpdates: [
      {
        title: 'Texas Finance Code Chapter 342 Annual Update',
        summary: 'Reconfirm Chapter 342 licensing thresholds and maintain records for 2025 supervisory exams focused on AI underwriting transparency.',
        effectiveDate: '2025-06-30',
        source: 'https://occc.texas.gov/industry/regulated-lenders'
      },
      {
        title: 'Military Lending Act Compliance Check',
        summary: 'Houston and San Antonio lenders must refresh MLA safe-harbor checks for borrowers stationed at local bases.',
        effectiveDate: '2025-04-01',
        source: 'https://www.consumerfinance.gov/compliance/'
      }
    ],
    creditGuidance: [
      {
        audience: 'Borrowers rebuilding credit (580-660)',
        tips: [
          'Keep total revolving balances under 30% before applying—Texas lenders reward lower utilization with 2-3% APR savings.',
          'Leverage credit-builder loans from local credit unions in Dallas and Austin to add positive trade lines.',
          'Opt into Experian Boost or similar utilities reporting to add 10-20 points ahead of the application.'
        ]
      },
      {
        audience: 'Oil & gas contractors',
        tips: [
          'Document project assignments and contract renewals to demonstrate consistent income despite cyclical work.',
          'Submit employment verification letters from the prime contractor to reduce manual underwriting delays.',
          'Consider co-signers with W-2 income for loans above $50,000 to widen lender options.'
        ]
      }
    ]
  }
}

const CITY_OVERRIDES: Record<string, Partial<EducationContent>> = {
  'los-angeles': {
    regulationUpdates: [
      {
        title: 'LA County Consumer Financial Protection Initiative',
        summary: 'Borrowers should confirm lenders disclose total loan costs in plain language as required by the 2025 county transparency ordinance.',
        effectiveDate: '2025-05-01',
        source: 'https://dcba.lacounty.gov/portfolio/consumer-financial-protection/'
      }
    ],
    creditGuidance: [
      {
        audience: 'Creative professionals & freelancers',
        tips: [
          'Aggregate invoices from the last six months and bank statements to evidence fluctuating income.',
          'Maintain a savings buffer equal to two months of loan payments to signal repayment capacity.',
          'Consider platform lenders specializing in entertainment cash-flow underwriting for faster approvals.'
        ]
      }
    ]
  },
  houston: {
    regulationUpdates: [
      {
        title: 'Houston Fair Lending Initiative 2025',
        summary: 'City-backed lenders must display blended APR comparisons; double-check disclosures when comparing offers.',
        effectiveDate: '2025-03-01',
        source: 'https://www.houstontx.gov/mayor/financialliteracy/'
      }
    ],
    creditGuidance: [
      {
        audience: 'Energy sector employees',
        tips: [
          'Provide copies of long-term employment contracts or recent promotion letters to stabilize income reviews.',
          'Expect better terms by showing retirement contributions of 5%+; some lenders use this as a compensating factor.',
          'If relocating for projects, note per diem allowances—they can be included as eligible income with documentation.'
        ]
      }
    ]
  }
}

function buildDefaultRegulationUpdates(sourceItems: string[], context: { name: string }): RegulationUpdate[] {
  return sourceItems.slice(0, 3).map((item, index) => ({
    title: item,
    summary: `${context.name} lenders should document procedures that reflect this requirement and capture borrower acknowledgements during 2025 audits.`,
    effectiveDate: `2025-0${index + 1}-01`,
    source: 'https://www.consumerfinance.gov/compliance/'
  }))
}

function buildDefaultCreditGuidance(rate: string, maxLoanAmount: string): CreditGuidance[] {
  return [
    {
      audience: 'Prime borrowers (680+ FICO)',
      tips: [
        `Maintain debt-to-income ratios under 36% to unlock rates close to ${rate}.`,
        `Set up autopay to secure rate discounts and document steady income for loan amounts approaching ${maxLoanAmount}.`,
        'Compare at least three offers—AI matching can surface community banks with loyalty rebates.'
      ],
    },
    {
      audience: 'Credit builders (580-660 FICO)',
      tips: [
        'Pay down revolving balances below 30% utilization 60 days before applying.',
        'Add positive tradelines using credit-builder loans or secured cards to gain 20-40 points.',
        'Request soft-pull pre-qualifications to avoid unnecessary hard inquiries while you compare rates.'
      ],
    },
  ]
}

function getRelatedArticles(overrides?: QuickLink[]): QuickLink[] {
  if (overrides && overrides.length > 0) {
    const merged = [...overrides, ...DEFAULT_ARTICLES]
    const unique = merged.filter((article, index, self) =>
      article && index === self.findIndex((candidate) => candidate?.href === article?.href)
    )
    return unique.slice(0, 4) as QuickLink[]
  }

  return DEFAULT_ARTICLES
}

function buildStateSummary(state: StateInfo, stateCities: CityData[]): string[] {
  const leadingCities = stateCities.slice(0, 3).map((city) => city.name)
  return [
    `${state.name} personal loan rates average ${state.avgRate} with maximum amounts around ${state.maxLoanAmount}.`,
    `Consumers in ${state.name} can access ${state.regulations.length}+ key borrower protections, including ${state.regulations[0]}.`,
    `${leadingCities.length > 0 ? `Top metros like ${leadingCities.join(', ')} anchor borrower demand.` : `${state.popularCities.slice(0, 3).join(', ')} remain the state’s most active lending markets.`}`,
    `Prime borrowers can pre-qualify online in under five minutes—complete applications before ${state.name}'s peak seasonal demand in Q4.`,
  ]
}

function buildStateQuickLinks(
  state: StateInfo,
  stateCities: CityData[],
  paths: EducationPathOptions,
): QuickLink[] {
  const links: QuickLink[] = [
    { label: `State regulations`, href: '#regulation-watch' },
    { label: `Credit guidance`, href: '#credit-readiness' },
    { label: `City insights`, href: '#city-guides' },
    { label: `Apply now`, href: paths.apply },
  ]

  if (stateCities.length > 0) {
    links.unshift({
      label: `Top ${stateCities[0].state} city: ${stateCities[0].name}`,
      href: `${paths.citiesBase}/${state.slug}/${stateCities[0].slug}`,
    })
  }

  return links
}

function buildStateModules(
  state: StateInfo,
  stateCities: CityData[],
  paths: EducationPathOptions,
): EducationModule[] {
  const modules: EducationModule[] = [
    {
      id: 'regulation-watch',
      title: `${state.name} Regulation Watch`,
      description: `Track the latest ${state.name} borrower protections, APR caps, and licensing requirements with commentary for 2025 compliance.`,
      href: '#regulation-watch',
      tag: 'Compliance'
    },
    {
      id: 'credit-readiness',
      title: `Credit Readiness Playbook`,
      description: `Step-by-step credit optimization strategies tailored to ${state.name} underwriting trends.`,
      href: '#credit-readiness',
      tag: 'Credit'
    },
    {
      id: 'city-guides',
      title: `City-Level Loan Insights`,
      description: `Deep dives into ${state.name} metros covering loan purposes, lender counts, and borrower personas.`,
      href: '#city-guides',
      tag: 'Local Insights'
    },
    {
      id: 'learning-center',
      title: 'Loan Education Library',
      description: 'Explore practical explainers on debt consolidation, approval playbooks, and credit-building tactics.',
      href: paths.blog,
      tag: 'Learning'
    }
  ]

  if (stateCities.length > 0) {
    modules[2] = {
      ...modules[2],
      description: `Deep dives into ${stateCities.length} ${state.name} metros, including ${stateCities.slice(0, 2).map((city) => city.name).join(' and ')}.`,
    }
  }

  return modules
}

function buildStateFaqs(state: StateInfo, stateCities: CityData[]): FAQEntry[] {
  const primaryCity = stateCities[0]
  return [
    {
      question: `How competitive are personal loan rates in ${state.name} for 2025?`,
      answer: `${state.name} lenders average ${state.avgRate} with caps near ${state.maxLoanAmount}. Prime borrowers often see offers 1-2% below that average when they provide autopay and income documentation.`
    },
    {
      question: `Which ${state.name} metros see the most loan approvals?`,
      answer: primaryCity
        ? `${primaryCity.name}, ${state.name} leads approvals thanks to ${primaryCity.keyIndustries.slice(0, 2).join(' and ')} employment and ${primaryCity.nearbyLenders}+ lenders. Explore the city section below for localized stats.`
        : `${state.popularCities.slice(0, 3).join(', ')} drive the highest application volume, with lender counts strongest in the first two metros.`
    },
    {
      question: `What documents do ${state.name} borrowers need to stay compliant?`,
  answer: `Expect lenders to request proof of residency, recent paystubs or 1099s, and signatures acknowledging ${state.regulations[0]}. Keep digital copies ready for same-day approvals with participating lenders.`
    },
    {
      question: `How fast can ${state.name} borrowers receive funds after approval?`,
      answer: `${state.name} online lenders typically disburse funds within one to two business days once signatures post. Upload bank statements and authorize ACH connections during the application to keep timelines on track.`
    },
    {
      question: `Can ${state.name} residents compare offers without hurting their credit?`,
      answer: `Most marketplace lenders serving ${state.name} provide soft credit pre-qualifications so you can review rates without a hard inquiry. A hard pull happens only after you choose an offer and consent to final underwriting.`
    },
  ]
}

export function buildStateEducationContent(
  state: StateInfo,
  stateCities: CityData[],
  options?: { paths?: Partial<EducationPathOptions> },
): EducationContent {
  const overrides = STATE_OVERRIDES[state.slug]
  const paths = resolveEducationPaths(options?.paths)

  return {
    lastReviewed: overrides?.lastReviewed ?? DEFAULT_REVIEW_DATE,
    aiSummary: overrides?.aiSummary ?? buildStateSummary(state, stateCities),
    quickLinks: overrides?.quickLinks ?? buildStateQuickLinks(state, stateCities, paths),
    modules: overrides?.modules ?? buildStateModules(state, stateCities, paths),
    regulationUpdates: overrides?.regulationUpdates ?? buildDefaultRegulationUpdates(state.regulations, { name: state.name }),
    creditGuidance: overrides?.creditGuidance ?? buildDefaultCreditGuidance(state.avgRate, state.maxLoanAmount),
    faqs: overrides?.faqs ?? buildStateFaqs(state, stateCities),
    relatedArticles: getRelatedArticles(overrides?.relatedArticles),
  }
}

function buildCitySummary(city: CityData): string[] {
  return [
    `${city.name} borrowers work with ${city.nearbyLenders}+ lenders, with average loan amounts near ${city.averageLoanAmount}.`,
    `Local credit profiles average ${city.avgCreditScore}, so aim to exceed that benchmark for the best offers.`,
    `${city.keyIndustries.slice(0, 2).join(' and ')} employers are driving demand for ${city.popularLoanTypes[0].toLowerCase()} financing.`,
    'Upload income documentation and authorize bank connection for the fastest AI underwriting approvals.',
  ]
}

function buildCityQuickLinks(
  city: CityData,
  parentState: StateInfo,
  paths: EducationPathOptions,
): QuickLink[] {
  return [
    { label: `Back to ${parentState.name} hub`, href: `${paths.statesBase}/${parentState.slug}` },
    { label: 'City regulations', href: '#regulation-watch' },
    { label: 'Credit tips', href: '#credit-readiness' },
    { label: 'Compare lenders', href: paths.apply },
  ]
}

function buildCityModules(
  city: CityData,
  parentState: StateInfo,
  paths: EducationPathOptions,
): EducationModule[] {
  return [
    {
      id: 'city-overview',
      title: `${city.name} Loan Snapshot`,
      description: `Understand loan demand, lender density, and average approvals in ${city.name}.`,
      href: '#city-overview',
      tag: 'Snapshot'
    },
    {
      id: 'regulation-watch',
      title: `${parentState.name} Compliance Checklist`,
      description: `Confirm ${city.stateAbbr} licensing rules and federal protections that apply to ${city.name} borrowers.`,
      href: '#regulation-watch',
      tag: 'Compliance'
    },
    {
      id: 'credit-readiness',
      title: `${city.name} Credit Readiness`,
      description: `Actionable steps to stay above the ${city.avgCreditScore} average and secure better terms.`,
      href: '#credit-readiness',
      tag: 'Credit'
    },
    {
      id: 'learning-center',
      title: 'Featured Guides',
      description: 'Read expert explainers on loan approval and credit optimization before you apply.',
      href: paths.blog,
      tag: 'Learning'
    }
  ]
}

function buildCityFaqs(city: CityData, parentState: StateInfo): FAQEntry[] {
  return [
    {
      question: `What loan amounts can ${city.name} residents expect in 2025?`,
      answer: `${city.name} personal loans average ${city.averageLoanAmount}, with top-tier borrowers seeing offers above that figure when debt-to-income stays under 35%.`
    },
    {
      question: `How does ${city.name}'s average credit score impact approvals?`,
      answer: `The typical applicant scores ${city.avgCreditScore}. Arrive 20 points above that and lenders often waive origination fees for ${city.popularLoanTypes[0].toLowerCase()} loans.`
    },
    {
      question: `Which regulations matter most for ${city.name} borrowers?`,
      answer: `Follow ${parentState.name}'s consumer finance rules and federal disclosures on APR and fees—most ${city.name} lenders mirror state-level rate caps and documentation requirements.`
    },
    {
      question: `How quickly do ${city.name} lenders release funds?`,
      answer: `${city.name} borrowers commonly receive deposits within one business day after final approval. Completing income verification and bank account linking during the application helps avoid back-and-forth delays.`
    },
    {
      question: `What paperwork speeds up ${city.name} loan approvals?`,
      answer: `Have photo ID, recent pay stubs or 1099s, proof of ${parentState.name} residency, and documentation of monthly housing costs ready. Uploading these with your application keeps ${city.name} underwriting teams on schedule.`
    }
  ]
}

function buildCityRegulationUpdates(parentState: StateInfo): RegulationUpdate[] {
  return buildDefaultRegulationUpdates(parentState.regulations, { name: parentState.name })
}

function buildCityCreditGuidance(city: CityData): CreditGuidance[] {
  return [
    {
      audience: 'Borrowers with strong credit (700+)',
      tips: [
        `Lock rates before the busy season—${city.name} lenders tighten spreads when application volume spikes.`,
        'Enable autopay at application time to qualify for 0.25% rate reductions at many regional banks.',
        'Bundle home-improvement or consolidation goals to reach lenders’ minimum loan sizes for best pricing.'
      ]
    },
    {
      audience: 'Credit rebuilders (600-660)',
      tips: [
        'Share alternative data—rent, utilities, and streaming payments—to offset thin credit files.',
        'Pay down revolving balances and avoid new credit pulls for 60 days pre-application.',
        `Target community development financial institutions (CDFIs) serving ${city.name} neighborhoods for flexible underwriting.`
      ]
    }
  ]
}

export function buildCityEducationContent(
  city: CityData,
  parentState: StateInfo,
  options?: { paths?: Partial<EducationPathOptions> },
): EducationContent {
  const overrides = CITY_OVERRIDES[city.slug]
  const paths = resolveEducationPaths(options?.paths)

  return {
    lastReviewed: overrides?.lastReviewed ?? DEFAULT_REVIEW_DATE,
    aiSummary: overrides?.aiSummary ?? buildCitySummary(city),
    quickLinks: overrides?.quickLinks ?? buildCityQuickLinks(city, parentState, paths),
    modules: overrides?.modules ?? buildCityModules(city, parentState, paths),
    regulationUpdates: overrides?.regulationUpdates ?? buildCityRegulationUpdates(parentState),
    creditGuidance: overrides?.creditGuidance ?? buildCityCreditGuidance(city),
    faqs: overrides?.faqs ?? buildCityFaqs(city, parentState),
    relatedArticles: getRelatedArticles(overrides?.relatedArticles),
  }
}

export function getStateBySlug(slug: string): StateInfo | undefined {
  return usStates.find((state) => state.slug === slug)
}

export function getCityBySlugSafe(slug: string): CityData | undefined {
  return cities.find((city) => city.slug === slug)
}
