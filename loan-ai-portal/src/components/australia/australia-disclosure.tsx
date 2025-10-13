export default function AustraliaDisclosure() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
      <h3 className="text-lg font-bold text-blue-900 mb-3">
        🔒 Important Disclosure - Australian Consumer Protection
      </h3>
      <div className="space-y-3 text-sm text-gray-700">
        <p>
          <strong>Affiliate Advertising Disclosure:</strong> LoansAI is a loan comparison service 
          that is compensated by lenders when you complete an application through our platform. This 
          compensation may influence which lenders are featured and their placement on our site, but 
          does not affect the rates or terms offered by lenders.
        </p>
        <p>
          <strong>Credit Licensing:</strong> All lenders featured on our platform hold valid 
          Australian Credit Licences (ACL) issued by ASIC and comply with the National Consumer 
          Credit Protection Act 2009. You can verify any lender's licence status on the 
          <a 
            href="https://asic.gov.au" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-semibold ml-1"
          >
            ASIC website ↗
          </a>.
        </p>
        <p>
          <strong>Responsible Lending:</strong> All lenders must conduct responsible lending 
          assessments under Australian law. This includes verifying your ability to repay the loan 
          without substantial hardship. You have the right to seek financial counseling before 
          accepting any loan offer.
        </p>
        <p>
          <strong>Your Rights:</strong> You have a cooling-off period and the right to early 
          repayment. Fees and charges are capped under Australian consumer credit regulations. 
          If you experience financial hardship, contact your lender immediately to discuss 
          hardship provisions.
        </p>
        <p>
          <strong>Privacy:</strong> We comply with the Privacy Act 1988 (including Australian 
          Privacy Principles). Your personal information is protected and will only be shared 
          with lenders you choose to apply with. Read our full 
          <a href="/au/privacy" className="text-blue-600 hover:text-blue-700 font-semibold mx-1">
            Privacy Policy
          </a>
          for details.
        </p>
        <p className="text-xs text-gray-600 mt-4 pt-3 border-t border-blue-200">
          This service is provided for comparison purposes only. We do not provide financial advice. 
          You should consider your own circumstances and, if necessary, seek independent financial 
          advice before making any borrowing decision.
        </p>
      </div>
    </div>
  )
}
