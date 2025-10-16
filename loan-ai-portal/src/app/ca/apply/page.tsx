import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CANavigation from '@/components/canada/ca-navigation'
import CAFooter from '@/components/canada/ca-footer'

export const metadata: Metadata = {
  title: 'Apply for Personal Loans in Canada – FCAC-Licensed Lenders',
  description: 'Apply for personal loans from FCAC-licensed lenders across Canada.',
  alternates: {
    canonical: 'https://loan-platform.com/ca/apply',
  },
}

export default function CAApplyPage() {
  return (
    <>
      <CANavigation />
      
      <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Apply for a Personal Loan in Canada</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">Get Started</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              To compare loan offers from FCAC-licensed lenders, please provide some basic information.
              All lenders must comply with federal regulations and provincial consumer protection laws.
            </p>
            <p className="text-gray-700">
              Application form coming soon. In the meantime, <Link href="/ca/cities" className="text-blue-600 hover:underline">browse lenders by city</Link> or <Link href="/ca/regions" className="text-blue-600 hover:underline">by province</Link>.
            </p>
          </CardContent>
        </Card>

        <div className="mt-8">
          <Link href="/ca" className="text-blue-600 hover:underline">
            ← Back to Canada Hub
          </Link>
        </div>
      </div>
    </main>
    
    <CAFooter />
    </>
  )
}
