export default function SADisclosure() {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-sm">
      <h3 className="font-semibold text-gray-900 mb-4">Important Disclosure</h3>
      
      <div className="space-y-4 text-gray-700">
        <p>
          <strong>Affiliate Disclosure:</strong> LoansAI is a loan comparison service. We may receive 
          compensation from lenders when you complete an application or accept a loan offer. This compensation 
          helps us maintain our free service and does not affect the rates or terms offered by lenders.
        </p>

        <p>
          <strong>Representative Example:</strong> If you borrow R 50,000 over 36 months at an interest rate 
          of 20% per annum, your monthly repayment would be approximately R 1,852. Total amount repayable: 
          R 66,672. Total cost of credit: R 16,672. APR: 20%.
        </p>

        <p>
          <strong>Important Information:</strong> All loan applications are subject to credit and affordability 
          assessments by the lender. Rates, terms, and loan amounts are determined by individual lenders based 
          on your credit profile. The actual rate you receive may differ from advertised rates.
        </p>

        <p>
          <strong>Responsible Lending:</strong> We only work with lenders registered with the National Credit 
          Regulator (NCR). All lending activities comply with the National Credit Act (NCA) of 2005. 
          Borrowing more than you can afford can seriously harm your financial health.
        </p>

        <p>
          <strong>Credit Bureau Checks:</strong> Submitting an application may result in credit checks 
          that could affect your credit score. Ensure you understand all terms and conditions before 
          accepting any loan offer.
        </p>

        <p>
          <strong>Consumer Protection:</strong> You have rights under the National Credit Act, including 
          the right to transparent cost disclosure, debt review, and protection from reckless lending. 
          Visit{' '}
          <a 
            href="https://www.ncr.org.za" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.ncr.org.za
          </a>
          {' '}for more information.
        </p>

        <p className="text-xs text-gray-600 mt-4">
          Last updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long' })}
        </p>
      </div>
    </div>
  )
}
