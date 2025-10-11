import HreflangTags from '@/components/seo/hreflang-tags'

interface StateHeadProps {
  params: {
    state: string
  }
}

export default function Head({ params }: StateHeadProps) {
  return (
    <HreflangTags
      locale="en"
      path={`/states/${params.state}`}
    />
  )
}
