'use client'

import { Card, CardContent } from '@/components/ui/card'

export default function AustraliaDisclosure() {
  return (
    <Card className="bg-gray-50 border-gray-200">
      <CardContent className="pt-6">
        <div className="prose max-w-none text-sm text-gray-600">
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            Affiliate Disclosure and Important Information
          </h3>
          
          <p className="mb-3">
            <strong>Affiliate Disclosure:</strong> LoansAI Australia may receive compensation 
            from certain lenders featured on this website. This compensation may influence the 
            order and manner in which products are presented, but does not affect our reviews 
            or recommendations. We always present accurate information and strive to provide 
            the best possible experience for our users.
          </p>

          <p className="mb-3">
            <strong>Representative Example:</strong> A loan of AU$10,000 over 24 months at 
            an interest rate of 9.5% per annum results in a monthly repayment of approximately 
            AU$458 and a total amount payable of AU$10,992. Comparison rate: 9.92%. The actual 
            rate offered depends on your creditworthiness, loan amount, and repayment term.
          </p>

          <p className="mb-3">
            <strong>We are not a lender:</strong> LoansAI is a comparison platform connecting 
            consumers with licensed lenders. We do not issue loans or make credit decisions. 
            All applications are submitted directly to selected lenders who make the final 
            credit decision.
          </p>

          <p className="mb-3">
            <strong>Credit Check:</strong> By applying for a loan, you consent to the lender 
            checking your credit history through credit bureaus. This may affect your credit score.
          </p>

          <p className="mb-3">
            <strong>Regulatory Compliance:</strong> All lenders featured on this platform are 
            licensed and regulated by the Australian Securities and Investments Commission (ASIC) 
            and comply with the National Consumer Credit Protection Act 2009. Interest rates are 
            capped at 48% per annum, and lenders must comply with responsible lending obligations.
          </p>

          <p className="mb-3">
            <strong>Responsible Borrowing:</strong> Borrow responsibly and only what you can 
            afford to repay. Before applying, ensure you understand all terms, costs, and 
            repayment schedules. If you are experiencing financial hardship, contact your 
            lender immediately or seek free financial counselling through the National Debt 
            Helpline on 1800 007 007.
          </p>

          <p className="mb-3">
            <strong>Data Security:</strong> Your personal data is protected under the Privacy 
            Act 1988 (Cth) and Australian Privacy Principles. We only share your information 
            with licensed lenders you select. We never sell your data to third parties.
          </p>

          <p className="text-xs mt-4 pt-4 border-t border-gray-300">
            <strong>Disclaimer:</strong> Information presented on this website is general in 
            nature and does not constitute financial, legal, or tax advice. Always seek 
            professional advice tailored to your specific situation before making any financial 
            decisions.
          </p>

          <p className="text-xs mt-2">
            <strong>Contact:</strong> For questions about our services, partners, or privacy 
            practices, please contact us:{' '}
            <a href="mailto:contact@loansai.com.au" className="text-blue-600 hover:underline">
              contact@loansai.com.au
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
