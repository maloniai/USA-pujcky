import StatesPageContent from '@/components/states/states-page-content'
import { CollectionPageSchema } from '@/components/seo/collection-page-schema'

export const metadata = {
  title: 'State Personal Loan Regulations | United States Hub',
  description:
    'Browse personal loan regulations, APR ranges, and lender summaries for all 50 U.S. states. Filter by region or search for your state to review 2025 borrower protections.',
}

export default function USStatesIndexPage() {
  return (
    <>
      <CollectionPageSchema
        name="Personal Loans by State - All 50 U.S. States"
        description="Compare personal loan regulations, rates, and lenders across all 50 U.S. states. Comprehensive state-by-state loan information."
        url="https://loansai.com/us/states"
        breadcrumbs={[
          { name: 'Home', url: 'https://loansai.com' },
          { name: 'United States', url: 'https://loansai.com/us' },
          { name: 'States', url: 'https://loansai.com/us/states' },
        ]}
      />
      <StatesPageContent locale="en" basePath="/us/states" />
    </>
  )
}
