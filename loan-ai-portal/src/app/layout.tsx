import './globals.css'

export const metadata = {
  title: 'Loan AI Portal - Fast & Secure Loan Services',
  description: 'Get instant loan approvals with our AI-powered platform. Multi-language support, state-specific information, and secure processing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}