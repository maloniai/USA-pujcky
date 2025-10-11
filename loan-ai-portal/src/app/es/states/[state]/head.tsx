import HreflangTags from '@/components/seo/hreflang-tags'

interface StateHeadProps {
  params: {
    state: string
  }
}

export default function Head({ params }: StateHeadProps) {
  return (
    <HreflangTags
      locale="es"
      path={`/states/${params.state}`}
    />
  )
}
