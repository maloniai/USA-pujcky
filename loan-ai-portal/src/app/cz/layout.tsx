import { Metadata } from 'next'
import CZNavigation from '@/components/czech/cz-navigation'
import CZFooter from '@/components/czech/cz-footer'
import CZStickyApplyButton from '@/components/czech/cz-sticky-apply-button'

export const metadata: Metadata = {
  title: 'Půjčky v České republice | Loan-Platform.com',
  description: 'Porovnejte půjčky od licencovaných poskytovatelů v České republice. Všechny kraje, města a nebankovní společnosti s licencí ČNB.',
  keywords: ['půjčky', 'úvěry', 'Česká republika', 'nebankovní půjčky', 'rychlá půjčka', 'ČNB'],
}

export default function CZLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CZNavigation />
      <main className="min-h-screen">
        {children}
      </main>
      <CZStickyApplyButton />
      <CZFooter />
    </>
  )
}
