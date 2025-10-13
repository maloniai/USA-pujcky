export default function CanadaDisclosure() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
      <h3 className="text-lg font-bold text-blue-900 mb-3">Important Disclosure</h3>
      <div className="text-sm text-gray-700 space-y-2">
        <p>
          <strong>LoansAI Canada</strong> is a loan comparison and referral service. We are not a lender and do not make credit decisions.
        </p>
        <p>
          <strong>Affiliate Disclosure:</strong> We may earn compensation when you click on or apply through links on this website. This compensation may influence which lenders we feature and their placement, but it does not affect our editorial integrity or our comparisons.
        </p>
        <p>
          <strong>Regulatory Compliance:</strong> All featured lenders must be licensed in their respective provinces/territories and comply with federal regulations including the Criminal Code interest rate limits (60% APR) and provincial consumer protection laws. Loan terms, rates, and availability vary by province and lender.
        </p>
        <p>
          <strong>APR Range:</strong> Annual Percentage Rates (APR) typically range from 5.99% to 46.96% depending on creditworthiness, loan amount, term, and province. The actual rate you receive may differ.
        </p>
        <p>
          <strong>Provincial Regulations:</strong> Each province and territory has specific lending regulations. Please review your local laws and the lender's terms before accepting any loan offer.
        </p>
        <p>
          <strong>Responsible Borrowing:</strong> Consider your ability to repay before borrowing. Late payments or defaults may negatively impact your credit score and incur additional fees.
        </p>
        <p className="font-semibold text-blue-900 mt-4">
          For complaints or concerns about licensed lenders, contact:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><strong>Federal:</strong> Financial Consumer Agency of Canada (FCAC) - <a href="https://www.canada.ca/fcac" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.canada.ca/fcac</a></li>
          <li><strong>Provincial regulators:</strong> Contact your province's financial services authority</li>
        </ul>
      </div>
    </div>
  )
}
