export default function PHDisclosure() {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
      <h3 className="font-semibold text-lg text-blue-900 mb-3">
        📋 Important Disclosure & Representative Example
      </h3>
      
      <div className="space-y-4 text-sm text-gray-700">
        <div>
          <p className="font-semibold text-gray-900 mb-2">Affiliate Disclosure:</p>
          <p>
            LoansAI is a free comparison service. We may receive compensation from lenders when you click 
            on links or complete applications through our platform. This compensation helps us maintain our 
            service at no cost to you. Our editorial content and loan comparisons remain independent and 
            unbiased. We are committed to providing accurate information to help you make informed financial decisions.
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-900 mb-2">Representative Example:</p>
          <p>
            If you borrow <strong>₱100,000</strong> over <strong>2 years</strong> at an annual interest 
            rate of <strong>18%</strong>, your monthly repayment would be approximately <strong>₱4,992</strong>. 
            The total amount repayable would be <strong>₱119,808</strong>, which includes <strong>₱19,808</strong> in 
            interest charges.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            This is a representative example only. Your actual interest rate and monthly repayment will depend on 
            your personal circumstances, credit history, loan amount, and loan term. Rates typically range from 
            12% to 30% per annum for personal loans in the Philippines.
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-900 mb-2">Important Information:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>All lenders must be supervised by BSP (Bangko Sentral ng Pilipinas)</li>
            <li>Loan terms typically range from 6 months to 5 years</li>
            <li>Loan amounts from ₱10,000 to ₱2,000,000 depending on your affordability</li>
            <li>Credit checks will be conducted as part of the application process</li>
            <li>Late payments may incur penalties and damage your credit score</li>
            <li>Borrowing more than you can afford can lead to financial difficulties</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mt-4">
          <p className="font-semibold text-yellow-900 mb-2">⚠️ Responsible Lending Warning:</p>
          <p className="text-yellow-800 text-xs">
            Before applying for any loan, carefully consider whether you can afford the monthly repayments. 
            Lenders are required to assess your financial situation under responsible lending obligations. 
            Failure to make repayments on time will negatively impact your credit file and may result in 
            default listings, legal action, and additional costs. Only borrow what you can comfortably afford to repay.
          </p>
        </div>

        <div className="text-xs text-gray-500 mt-4">
          <p>
            This service complies with the Lending Company Regulation Act and the Data Privacy Act of 2012. 
            Your personal information is protected and will only be shared with BSP-supervised financial institutions 
            with your consent. For financial advice, please contact a licensed financial adviser.
          </p>
        </div>
      </div>
    </div>
  )
}
