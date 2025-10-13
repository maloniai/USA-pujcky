import Script from 'next/script';

interface HomepageSchemaProps {
  countryCount: number;
  populationCovered: string;
}

export function HomepageSchema({ countryCount, populationCovered }: HomepageSchemaProps) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI',
    alternateName: 'LoansAI Global',
    description: 'AI-powered personal loan matching platform serving 40+ countries worldwide',
    url: 'https://loansai.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://loansai.com/logo.png',
      width: 250,
      height: 60,
    },
    image: 'https://loansai.com/og-global-directory.jpg',
    email: 'compliance@loan-platform.com',
    telephone: '+1-800-562-6264',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Revoluční 1403/28',
      addressLocality: 'Prague 1',
      postalCode: '110 00',
      addressCountry: 'CZ',
    },
    sameAs: [
      'https://facebook.com/loansai',
      'https://twitter.com/loansai',
      'https://linkedin.com/company/loansai',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '2847',
    },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Czech Republic' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'Poland' },
      { '@type': 'Country', name: 'Spain' },
      { '@type': 'Country', name: 'Romania' },
      { '@type': 'Country', name: 'Vietnam' },
      { '@type': 'Country', name: 'Mexico' },
      { '@type': 'Country', name: 'Colombia' },
      { '@type': 'Country', name: 'Kazakhstan' },
      { '@type': 'Country', name: 'South Africa' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Country', name: 'New Zealand' },
      { '@type': 'Country', name: 'Philippines' },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LoansAI',
    alternateName: 'LoansAI Global Loan Directory',
    url: 'https://loansai.com',
    description: `Compare personal loans across ${countryCount}+ countries with AI-powered matching`,
    publisher: {
      '@type': 'Organization',
      name: 'LoansAI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://loansai.com/logo.png',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://loansai.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does LoansAI work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LoansAI uses artificial intelligence to analyze your financial profile and match you with licensed lenders in your country. Simply select your country, answer a few questions, and get personalized loan offers in 60 seconds. Our AI considers your credit profile, income, and local regulations to find the best rates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is LoansAI available in my country?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `LoansAI currently operates in ${countryCount}+ countries including the United States, Czech Republic, Canada, and more. We're rapidly expanding to Poland, Spain, Romania, Vietnam, Mexico, Colombia, Kazakhstan, South Africa, Australia, New Zealand, and the Philippines. Check our homepage to see if your country is live or coming soon.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Is LoansAI free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, LoansAI is 100% free for borrowers. We never charge fees for comparing loan offers or matching you with lenders. We earn commissions from lender partners only when you successfully complete a loan, but this never affects the rates or terms you receive.',
        },
      },
      {
        '@type': 'Question',
        name: 'What credit score do I need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Credit requirements vary by country and lender. In the United States, we work with lenders who accept scores as low as 580, though better scores (700+) qualify for lower rates. In Czech Republic, we check registry databases (SOLUS, CBCB). Each country has different credit assessment methods, and our AI considers local standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly can I get funded?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Funding speed varies by country and lender. In the US, some lenders offer same-day or next-day funding for approved applicants. In Czech Republic, typical funding is 1-3 business days. Canada averages 2-5 business days. After approval, funds are typically deposited directly to your bank account.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are all lenders licensed and regulated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. LoansAI only partners with licensed, regulated lenders in each market. US lenders comply with CFPB regulations and state banking laws. Czech lenders are regulated by ČNB (Czech National Bank). Canadian lenders follow FCAC guidelines and provincial regulations. We verify all licenses before adding lenders to our network.',
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://loansai.com',
      },
    ],
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
