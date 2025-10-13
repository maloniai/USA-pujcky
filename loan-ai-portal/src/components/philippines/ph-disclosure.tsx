export default function PhilippinesDisclosure() {
  return (
    <section className="container mx-auto px-4 py-12 bg-yellow-50 border-t-4 border-yellow-400">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span>⚠️</span>
            <span>Important Disclosure & Representative Example</span>
          </h3>
          
          <div className="space-y-6 text-gray-700">
            {/* Affiliate Disclosure */}
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900">Affiliate Disclosure</h4>
              <p className="text-sm leading-relaxed">
                LoansAI Philippines is an independent comparison platform. We may receive commissions from 
                lending institutions when you complete a loan through our platform. These partnerships do 
                not affect the objectivity of our comparisons and help us provide free services to users. 
                We are not a lender and do not make credit decisions.
              </p>
            </div>

            {/* Representative Example */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-lg mb-3 text-gray-900">Representative Example</h4>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Loan Amount:</strong> ₱100,000
                </p>
                <p>
                  <strong>Term:</strong> 12 months (1 year)
                </p>
                <p>
                  <strong>Interest Rate:</strong> 15% per annum
                </p>
                <p>
                  <strong>Monthly Payment:</strong> Approximately ₱9,025
                </p>
                <p>
                  <strong>Total Repayment:</strong> Approximately ₱108,300
                </p>
                <p>
                  <strong>Total Cost of Credit:</strong> Approximately ₱8,300
                </p>
              </div>
              <p className="text-xs text-gray-600 mt-4">
                This is an illustrative example only. Actual interest rates, fees, and terms may vary 
                depending on the lender, your credit profile, loan amount, and term. Interest rates range 
                from 8-35% per annum. Some institutions may charge additional processing fees, documentary 
                stamp tax, or insurance premiums.
              </p>
            </div>

            {/* Important Notes */}
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900">Important Notes</h4>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  All loans must comply with regulations of the Bangko Sentral ng Pilipinas (BSP).
                </li>
                <li>
                  Only borrow what you can afford to repay. Over-borrowing can lead to bad debt and 
                  negatively affect your credit score.
                </li>
                <li>
                  Read all terms and conditions carefully before signing any loan agreement. Ask the 
                  lender about anything you don't understand.
                </li>
                <li>
                  Verify that the lender is licensed by the BSP or SEC. Avoid unlicensed lenders or 
                  "loan sharks."
                </li>
                <li>
                  You have the right to prepay your loan. Check if there are prepayment penalties 
                  (typically 1-5% of outstanding balance).
                </li>
                <li>
                  Your personal information is protected under the Data Privacy Act of 2012 (Republic Act 10173).
                </li>
                <li>
                  If you face difficulty in repaying, contact the lender immediately to discuss options. 
                  Don't avoid or hide from the situation.
                </li>
              </ul>
            </div>

            {/* Credit Check Info */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-lg mb-2 text-gray-900">Credit Check</h4>
              <p className="text-sm leading-relaxed">
                When you apply for a loan, lenders will check your credit history through the Credit 
                Information Corporation (CIC). This helps them assess your ability to repay. A good 
                credit history can help you receive lower interest rates and higher credit limits. Bad 
                debt or late payments will negatively impact your borrowing ability and loan conditions.
              </p>
            </div>

            {/* Responsible Borrowing */}
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900">Responsible Borrowing</h4>
              <p className="text-sm leading-relaxed mb-3">
                Before borrowing, ask yourself:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Do I really need this loan?</li>
                <li>Can I afford the monthly payments?</li>
                <li>Have I compared other options?</li>
                <li>Do I understand all the costs and terms?</li>
                <li>Do I have a clear repayment plan?</li>
              </ul>
              <p className="text-sm mt-3 text-gray-600">
                Responsible borrowing helps you build a good credit history and avoid falling into a debt trap.
              </p>
            </div>

            {/* Contact for Help */}
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-lg mb-2 text-gray-900">Need Help?</h4>
              <p className="text-sm leading-relaxed">
                If you have questions about loan products, the process, or your rights, please contact:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                <li>Your lender directly</li>
                <li>Bangko Sentral ng Pilipinas (BSP): <a href="https://www.bsp.gov.ph" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.bsp.gov.ph</a></li>
                <li>Credit Information Corporation (CIC): <a href="https://www.cic.gov.ph" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.cic.gov.ph</a></li>
                <li>LoansAI Support Team: <a href="/contact" className="text-blue-600 hover:underline">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
