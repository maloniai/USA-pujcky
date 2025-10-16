import { AlertCircle } from 'lucide-react'

interface AUDisclosureProps {
  className?: string
}

export default function AUDisclosure({ className = '' }: AUDisclosureProps) {
  return (
    <div className={`bg-blue-50 border border-blue-200 rounded-lg p-6 ${className}`}>
      <div className="flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-2">Important Disclosure</h3>
          <div className="text-sm text-gray-700 space-y-2">
            <p>
              <strong>Not a Lender:</strong> LoansAI.com.au is a comparison service that connects borrowers with ASIC-licensed credit providers. We do not provide credit or make lending decisions.
            </p>
            <p>
              <strong>Affiliate Compensation:</strong> We may receive fees from lenders when you apply through our platform. This does not affect the interest rate or terms you receive. Lenders are ranked based on approval likelihood, rates, fees, and customer reviews.
            </p>
            <p>
              <strong>Representative Example:</strong> A $10,000 personal loan repaid over 3 years at 12.00% p.a. has 36 monthly repayments of $332.14, total repayment of $11,957.04, total interest of $1,957.04, and a comparison rate of 12.00% p.a. The comparison rate is based on a secured loan of $30,000 over 5 years. WARNING: This comparison rate applies only to the example given. Different amounts and terms will result in different comparison rates. Costs such as redraw fees or early repayment fees, and cost savings such as fee waivers, are not included in the comparison rate but may influence the cost of the loan.
            </p>
            <p>
              <strong>NCCP Act Protection:</strong> All lenders are regulated under the National Consumer Credit Protection Act 2009. You have rights and protections under Australian Consumer Law. If you have a dispute, you can contact the Australian Financial Complaints Authority (AFCA) at{' '}
              <a 
                href="https://www.afca.org.au/" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                www.afca.org.au
              </a>
              .
            </p>
            <p>
              <strong>Responsible Lending:</strong> Borrow responsibly. Consider whether you can afford repayments before applying. Missed payments can affect your credit score and result in additional fees. Visit{' '}
              <a 
                href="https://moneysmart.gov.au/" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                MoneySmart.gov.au
              </a>
              {' '}for free financial counselling.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
