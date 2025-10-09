import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { usStates } from '@/data/states'

interface PageProps {
  params: {
    state: string
  }
}

export async function generateStaticParams() {
  return usStates.map((state) => ({ state: state.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    alternates: {
      canonical: `https://loan-platform.com/us/states/${params.state}`,
    },
  }
}

export default function StatePage({ params }: PageProps) {
  if (!usStates.some((state) => state.slug === params.state)) {
    redirect('/us/states')
  }

  redirect(`/us/states/${params.state}`)
}
