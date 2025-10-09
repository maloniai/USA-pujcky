import { Metadata } from 'next'
import { notFound, permanentRedirect } from 'next/navigation'
import { getAllCitySlugs, getCityBySlug } from '@/data/cities'

export async function generateStaticParams() {
  return getAllCitySlugs()
}

export async function generateMetadata({
  params,
}: {
  params: { state: string; city: string }
}): Promise<Metadata> {
  const city = getCityBySlug(params.city)

  if (!city) {
    return {
      title: 'City Not Found',
      description: 'The requested city page could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  return {
    alternates: {
      canonical: `https://loan-platform.com/us/cities/${params.state}/${params.city}`,
    },
  }
}

export default function CityPage({
  params,
}: {
  params: { state: string; city: string }
}) {
  const city = getCityBySlug(params.city)

  if (!city) {
    notFound()
  }

  permanentRedirect(`/us/cities/${params.state}/${params.city}`)
}
