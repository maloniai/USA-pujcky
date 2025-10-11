import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'USA Loan Services - Fast & Secure | Loan AI Portal',
  description: 'Get instant loan approvals across all 50 US states with our AI-powered platform. Fast, secure, and state-specific loan information.',
}

export default function USAPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/global" className="text-blue-600 hover:underline text-sm">
          ← Back to All Countries
        </Link>
      </div>
      
      <header className="text-center mb-12">
        <div className="text-6xl mb-4">🇺🇸</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to USA Loan AI Portal
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Fast, secure, and intelligent loan services powered by AI. 
          Get instant pre-approvals and find the best loan options for your needs across all 50 states.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Quick Application</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Apply for a loan in minutes with our streamlined process.
            </p>
            <Button className="w-full">Apply Now</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI-Powered Matching</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Our AI finds the best loan options tailored to your profile.
            </p>
            <Button variant="outline" className="w-full">Learn More</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>State-Specific Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Get loan information specific to your state and city.
            </p>
            <Link href="/states">
              <Button variant="outline" className="w-full">Browse States</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Available in Multiple Languages</h2>
        <div className="space-x-4">
          <Link href="/usa" className="text-blue-600 hover:underline">English</Link>
          <Link href="/es" className="text-blue-600 hover:underline">Español</Link>
        </div>
      </div>
    </div>
  )
}
