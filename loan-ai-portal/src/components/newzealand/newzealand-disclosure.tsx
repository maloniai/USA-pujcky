export default function NewZealandDisclosure() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
      <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
        <span>ℹ️</span>
        Important Disclosure
      </h3>
      <div className="text-sm text-gray-700 space-y-2">
        <p>
          <strong>Comparison Platform:</strong> LoansAI is an independent loan comparison 
          platform. We are not a lender and do not make lending decisions. We receive compensation 
          from some lenders in our network.
        </p>
        <p>
          <strong>Representative Example:</strong> For a loan of NZ$10,000 over 12 months at an 
          interest rate of 10% per annum, the monthly payment is approximately NZ$879, with a total 
          repayment amount of approximately NZ$10,550. Interest rates vary between 5% and 50% 
          depending on the lender, amount, and loan term.
        </p>
        <p>
          <strong>Regulation:</strong> All lenders in our network are registered with the Financial 
          Service Providers Register and comply with the Credit Contracts and Consumer Finance Act 
          2003 (CCCFA) and Financial Markets Authority (FMA) regulations.
        </p>
        <p className="text-xs text-gray-600 mt-3">
          Always read the terms and conditions before signing any loan contract. Under the CCCFA, 
          you may have rights to cancel within a certain period. Contact your lender for specific 
          cancellation terms.
        </p>
      </div>
    </div>
  )
}
