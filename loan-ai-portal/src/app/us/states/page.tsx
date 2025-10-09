import StatesPageContent from '@/components/states/states-page-content'

export const metadata = {
  title: 'State Personal Loan Regulations | United States Hub',
  description:
    'Browse personal loan regulations, APR ranges, and lender summaries for all 50 U.S. states. Filter by region or search for your state to review 2025 borrower protections.',
}

export default function USStatesIndexPage() {
  return <StatesPageContent locale="en" basePath="/us/states" />
}
