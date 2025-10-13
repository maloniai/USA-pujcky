import { slugify } from '@/lib/slugify'

export interface KarlovarskyRegionContent {
  name: string
  slug: string
  heroTitle: string
  heroSubtitle: string
  overview: string
  topCities: { name: string; slug: string; focus: string }[]
}

export interface KarlovarskyCityContent {
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
  'Karlovarský kraj vyžaduje transparentní RPSN u nabídek zejména pro lázeňský a turistický sektor.',
  'Limity DTI 8,5 a DSTI 45 % platí pro většinu žadatelů.',
  'Smlouvy musí být dostupné online minimálně 48 hodin před podpisem.',
]

const disclosureText = {
  affiliate:
    'Stránka obsahuje sponzorované nabídky licencovaných poskytovatelů. Provize neovlivňuje AI skóre – výsledky řadíme podle celkových nákladů, transparentnosti a lokální dostupnosti.',
  example:
    'Reprezentativní příklad: Půjčka 200 000 Kč na 60 měsíců, pevná sazba 11,5 % p.a., RPSN 12,8 %, měsíční splátka 4 450 Kč, celkem zaplatíte 267 000 Kč. Konkrétní parametry určí poskytovatel dle bonity.',
}

const citySeeds = [
  {
    name: 'Karlovy Vary',
    focus: 'Lázeňství a hotelnictví',
  },
  {
    name: 'Cheb',
    focus: 'Přeshraniční obchod s Německem',
  },
  {
    name: 'Sokolov',
    focus: 'Průmysl a energetika',
  },
]

const buildTitle = (name: string) => {
  return `Půjčky v ${name}, Karlovarský kraj – Srovnání {{year}}`
}

const buildMetaDescription = (name: string) => {
  return `Srovnejte licencované půjčky v ${name} pro {{year}}. AI průvodce hlídá RPSN, registry a podporuje lázeňský sektor. Online žádost do pár minut.`
}

const buildIntro = (name: string, focus: string) => {
  return `${name} v Karlovarském kraji se specializuje na ${focus}. Poskytovatelé ověřují registry BRKI a NRKI a sledují cash flow během sezóny. Loan AI Portál nabídne licencované poskytovatele s transparentním RPSN.`
}

const buildFaq = (name: string): { question: string; answer: string }[] => [
  {
    question: `Jaké doklady potřebuji k žádosti v ${name}?`,
    answer: `Standardem je občanský průkaz, potvrzení o příjmu a výpis z účtu. Podnikatelé v lázeňství a turismu dokládají účetní závěrky nebo daňové přiznání.`,
  },
  {
    question: `Je možné kombinovat půjčku s dotacemi v ${name}?`,
    answer: `Ano, kraj podporuje energetické úspory i rozvoj turismu. Potřebujete rozhodnutí o dotaci a harmonogram čerpání.`,
  },
  {
    question: `Jak rychle získám schválení úvěru?`,
    answer: `Banky rozhodují do dvou pracovních dnů po dodání všech podkladů. Nebankovní partneři reagují rychleji.`,
  },
]

const buildRegulations = (name: string) => {
  const regs = [...baseRegulations]
  regs.push(`Poskytovatelé v ${name} zohledňují sezónní příjmy v lázeňství a turismu.`)
  return regs
}

const karlovarskyCityContentBase = citySeeds.map((seed, index) => {
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
    regionName: 'Karlovarský kraj',
    countryName: 'Česká republika',
    metaTitleTemplate,
    metaDescriptionTemplate,
    intro: buildIntro(seed.name, seed.focus),
    offer: {
      affiliate: 9500,
      campaign: slug,
      partnerName: 'Volsor Karlovarský',
      product: 'personal',
      theme: 'old_styled',
    },
    regulations: buildRegulations(seed.name),
    faq: buildFaq(seed.name),
    nearby,
    disclosure: disclosureText,
  } satisfies KarlovarskyCityContent
})

export const karlovarskyCityContent: KarlovarskyCityContent[] = karlovarskyCityContentBase

export const karlovarskyCityMap: Record<string, KarlovarskyCityContent> = karlovarskyCityContent.reduce(
  (acc, city) => {
    acc[city.slug] = city
    return acc
  },
  {} as Record<string, KarlovarskyCityContent>,
)

export const karlovarskyCitySlugs = karlovarskyCityContent.map((city) => city.slug)

export const getKarlovarskyCity = (slug: string) => karlovarskyCityMap[slug]

export const resolveKarlovarskyMetadata = (slug: string, year: number = CURRENT_YEAR) => {
  const city = getKarlovarskyCity(slug)
  if (!city) return null

  const title = city.metaTitleTemplate.replace('{{year}}', String(year))
  const description = city.metaDescriptionTemplate.replace('{{year}}', String(year))

  return {
    title,
    description,
    alternates: {
      canonical: `/cz/regions/karlovarsky/${slug}`,
    },
  }
}

export const karlovarskyRegionContent: KarlovarskyRegionContent = {
  name: 'Karlovarský kraj',
  slug: 'karlovarsky',
  heroTitle: 'Půjčky v Karlovarském kraji – licencované srovnání',
  heroSubtitle:
    'Lázeňství, turismus a pohraničí vyžadují nabídky pro sezónní provozy. AI model sleduje sazby, dotace i dostupnost poboček.',
  overview:
    'Karlovarský kraj kombinuje lázeňství, turismus a přeshraniční obchod. Poskytovatelé zohledňují sezónní příjmy a vyžadují detailní rozpočty.',
  topCities: citySeeds.map(seed => ({
    name: seed.name,
    slug: slugify(seed.name),
    focus: seed.focus,
  })),
}
