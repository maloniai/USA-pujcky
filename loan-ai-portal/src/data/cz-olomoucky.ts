import { slugify } from '@/lib/slugify'

export interface OlomouckyRegionContent {
  name: string
  slug: string
  heroTitle: string
  heroSubtitle: string
  overview: string
  topCities: { name: string; slug: string; focus: string }[]
}

export interface OlomouckyCityContent {
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

const baseRegulations: string[] = [
  'Poskytovatelé musí mít platnou licenci ČNB a uvádějí reprezentativní příklad úvěru v Kč.',
  'Olomoucký kraj vyžaduje transparentní RPSN u nabídek.',
  'Limity DTI 8,5 a DSTI 45 % platí pro většinu žadatelů.',
  'Smlouvy musí být dostupné online minimálně 48 hodin před podpisem.',
]

const disclosureText = {
  affiliate:
    'Stránka obsahuje sponzorované nabídky licencovaných poskytovatelů. Provize neovlivňuje AI skóre.',
  example:
    'Reprezentativní příklad: Půjčka 200 000 Kč na 60 měsíců, pevná sazba 11,5 % p.a., RPSN 12,8 %, měsíční splátka 4 450 Kč, celkem zaplatíte 267 000 Kč.',
}

const citySeeds = [
  {
    name: 'Olomouc',
    focus: 'zpracovatelský průmysl',
  },
  {
    name: 'Přerov',
    focus: 'logistika',
  },
  {
    name: 'Šumperk',
    focus: 'strojírenství',
  },
]

const buildTitle = (name: string) => {
  return `Půjčky v ${name}, Olomoucký kraj – Srovnání {{year}}`
}

const buildMetaDescription = (name: string) => {
  return `Srovnejte licencované půjčky v ${name} pro {{year}}. AI průvodce hlídá RPSN a registry. Online žádost do pár minut.`
}

const buildIntro = (name: string, focus: string) => {
  return `${name} v Olomouckém kraji se specializuje na ${focus}. Poskytovatelé ověřují registry a sledují cash flow. Loan AI Portál nabídne licencované poskytovatele s transparentním RPSN.`
}

const buildFaq = (name: string): { question: string; answer: string }[] => [
  {
    question: `Jaké doklady potřebuji k žádosti v ${name}?`,
    answer: `Standardem je občanský průkaz, potvrzení o příjmu a výpis z účtu. Podnikatelé dokládají účetní závěrky nebo daňové přiznání.`,
  },
  {
    question: `Je možné kombinovat půjčku s dotacemi v ${name}?`,
    answer: `Ano, kraj podporuje energetické úspory i rozvoj podnikání. Potřebujete rozhodnutí o dotaci a harmonogram čerpání.`,
  },
  {
    question: `Jak rychle získám schválení úvěru?`,
    answer: `Banky rozhodují do dvou pracovních dnů. Nebankovní partneři reagují rychleji.`,
  },
]

const buildRegulations = (name: string) => {
  const regs = [...baseRegulations]
  regs.push(`Poskytovatelé v ${name} zohledňují specifika regionu.`)
  return regs
}

const olomouckyCityContentBase = citySeeds.map((seed, index) => {
  const slug = slugify(seed.name)
  const metaTitleTemplate = buildTitle(seed.name)
  const metaDescriptionTemplate = buildMetaDescription(seed.name)
  const nearby = citySeeds
    .filter((_, i) => i !== index)
    .map(s => slugify(s.name))
    .slice(0, 3)

  return {
    slug,
    name: seed.name,
    regionName: 'Olomoucký kraj',
    countryName: 'Česká republika',
    metaTitleTemplate,
    metaDescriptionTemplate,
    intro: buildIntro(seed.name, seed.focus),
    offer: {
      affiliate: 10200,
      campaign: slug,
      partnerName: 'Volsor Olomoucký kraj',
      product: 'personal',
      theme: 'old_styled',
    },
    regulations: buildRegulations(seed.name),
    faq: buildFaq(seed.name),
    nearby,
    disclosure: disclosureText,
  } satisfies OlomouckyCityContent
})

export const olomouckyCityContent: OlomouckyCityContent[] = olomouckyCityContentBase

export const olomouckyCityMap: Record<string, OlomouckyCityContent> = olomouckyCityContent.reduce(
  (acc, city) => {
    acc[city.slug] = city
    return acc
  },
  {} as Record<string, OlomouckyCityContent>,
)

export const olomouckyCitySlugs = olomouckyCityContent.map((city) => city.slug)

export const getOlomouckyCity = (slug: string) => olomouckyCityMap[slug]

export const resolveOlomouckyMetadata = (slug: string, year: number = CURRENT_YEAR) => {
  const city = getOlomouckyCity(slug)
  if (!city) return null

  const title = city.metaTitleTemplate.replace('{{year}}', String(year))
  const description = city.metaDescriptionTemplate.replace('{{year}}', String(year))

  return {
    title,
    description,
    alternates: {
      canonical: `/cz/regions/olomoucky/${slug}`,
    },
  }
}

export const olomouckyRegionContent: OlomouckyRegionContent = {
  name: 'Olomoucký kraj',
  slug: 'olomoucky',
  heroTitle: 'Půjčky v Olomouckém kraji – licencované srovnání',
  heroSubtitle:
    'AI model sleduje sazby, dotace i dostupnost poboček.',
  overview:
    'Olomoucký kraj kombinuje různé ekonomické sektory. Poskytovatelé vyžadují detailní rozpočty.',
  topCities: citySeeds.map(seed => ({
    name: seed.name,
    slug: slugify(seed.name),
    focus: seed.focus,
  })),
}
