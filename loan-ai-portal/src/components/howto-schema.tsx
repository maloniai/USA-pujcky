export default function HowToApplySchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Apply for a Personal Loan Online',
  description: 'Step-by-step guide to applying for personal loans through an AI-powered matching platform. Get a 2-minute soft-pull pre-qualification and receive funds as soon as next day with participating lenders.',
    image: 'https://loan-platform.com/og-image.jpg',
    totalTime: 'PT2M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0'
    },
    tool: [{
      '@type': 'HowToTool',
      name: 'Valid government-issued ID (driver\'s license or passport)'
    }, {
      '@type': 'HowToTool',
      name: 'Proof of income (pay stubs, tax returns, or bank statements)'
    }, {
      '@type': 'HowToTool',
      name: 'Social Security Number'
    }, {
      '@type': 'HowToTool',
      name: 'Active checking account'
    }],
    step: [{
      '@type': 'HowToStep',
      name: 'Complete 2-Minute Application',
      text: 'Fill out our simple online application form with basic information including name, address, income, employment status, and desired loan amount. No account creation required.',
      url: 'https://loan-platform.com/apply',
      image: 'https://loan-platform.com/step1.jpg'
    }, {
      '@type': 'HowToStep',
      name: 'AI Analyzes Your Profile',
      text: 'Our artificial intelligence instantly analyzes over 200 data points from your application including credit profile, income stability, debt-to-income ratio, employment history, and loan purpose.',
      url: 'https://loan-platform.com/ai-loan-matching',
      image: 'https://loan-platform.com/step2.jpg'
    }, {
      '@type': 'HowToStep',
      name: 'Get Matched with Best Lenders',
      text: 'Receive personalized loan offers from our network of 100+ licensed lenders. Our AI matches you with lenders most likely to approve your application with competitive rates based on your unique financial profile.',
      url: 'https://loan-platform.com/apply',
      image: 'https://loan-platform.com/step3.jpg'
    }, {
      '@type': 'HowToStep',
      name: 'Review and Compare Offers',
      text: 'Compare multiple loan offers side-by-side including APR, monthly payments, loan terms, origination fees, and total loan cost. No obligation to accept any offer. Choose the best terms for your situation.',
      url: 'https://loan-platform.com/apply',
      image: 'https://loan-platform.com/step4.jpg'
    }, {
      '@type': 'HowToStep',
      name: 'Complete Lender Application',
      text: 'Once you select an offer, complete the lender\'s detailed application (10-20 minutes) with additional documentation. Lender performs final verification including employment and income confirmation.',
      url: 'https://loan-platform.com/apply',
      image: 'https://loan-platform.com/step5.jpg'
    }, {
      '@type': 'HowToStep',
      name: 'Receive Funds',
  text: 'After approval, review and sign the loan agreement electronically. Funds are typically deposited directly into your checking account within 1-2 business days. Some participating lenders offer same-day funding when final verification is completed before their cut-off times.',
      url: 'https://loan-platform.com/apply',
      image: 'https://loan-platform.com/step6.jpg'
    }]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
