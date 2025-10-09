import { redirect } from 'next/navigation'

export const metadata = {
  alternates: {
    canonical: 'https://loan-platform.com/us/states',
  },
}

export default function StatesPage() {
  redirect('/us/states')
}