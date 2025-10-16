import { Card, CardContent } from '@/components/ui/card'
import { AlertCircle, Shield, FileText } from 'lucide-react'

export default function AUDisclosureBlock() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Card className="border-blue-200">
          <CardContent className="p-8 space-y-6">
            {/* ASIC Compliance */}
            <div className="flex items-start space-x-4">
              <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">ASIC-Regulated Lenders</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Loan-Platform.com is not a lender. We compare licensed credit providers regulated by the{' '}
                  <strong>Australian Securities and Investments Commission (ASIC)</strong> under the{' '}
                  <strong>National Consumer Credit Protection Act 2009 (NCCP Act)</strong>. All lenders 
                  displayed hold valid Australian Credit Licences (ACL) and comply with responsible lending 
                  obligations, including affordability assessments and suitability requirements.
                </p>
              </div>
            </div>

            {/* Representative Example */}
            <div className="flex items-start space-x-4">
              <FileText className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Representative Example</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Loan amount: <strong>$10,000</strong> | Interest rate: <strong>8.95% p.a.</strong> | 
                  Loan term: <strong>3 years (36 months)</strong> | Monthly repayment: <strong>$318.00</strong> | 
                  Total repayment: <strong>$11,448.00</strong> | Total interest: <strong>$1,448.00</strong>.
                  <br />
                  <span className="text-gray-600">
                    Rates vary based on credit profile, loan amount, term, security, and lender. 
                    Always review loan contract before signing.
                  </span>
                </p>
              </div>
            </div>

            {/* Affiliate Disclosure */}
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Affiliate Disclosure & Ranking</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We may receive commissions when you click links to lender partners and complete applications. 
                  Commission does not influence your interest rate or loan terms. Lenders are ranked based on 
                  interest rates, fees, approval speed, customer reviews, and product features. We only display 
                  ASIC-licensed lenders who meet our quality standards.
                </p>
              </div>
            </div>

            {/* Consumer Protection */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong>Consumer Protection:</strong> Under the NCCP Act, you have the right to receive clear 
                information before entering credit contracts, protection against unsuitable lending, and access 
                to external dispute resolution through the{' '}
                <a 
                  href="https://www.afca.org.au" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Australian Financial Complaints Authority (AFCA)
                </a>. 
                Always borrow responsibly and only take credit you can afford to repay. For free financial 
                counselling, visit{' '}
                <a 
                  href="https://moneysmart.gov.au" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  MoneySmart.gov.au
                </a>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
