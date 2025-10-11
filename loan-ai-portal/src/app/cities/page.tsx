import { Metadata } from 'next'
import { permanentRedirect } from 'next/navigation'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://loan-platform.com/us/cities',
  },
}

export default function CitiesPage() {
  permanentRedirect('/us/cities')
}
