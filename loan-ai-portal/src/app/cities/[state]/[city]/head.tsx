import HreflangTags from '@/components/seo/hreflang-tags'

interface CityHeadProps {
  params: {
    state: string
    city: string
  }
}

export default function Head({ params }: CityHeadProps) {
  return (
    <HreflangTags
      locale="en"
      path={`/cities/${params.state}/${params.city}`}
      includeSpanish={false}
    />
  )
}
