/**
 * FAQPage Structured Data Schema
 * Implements schema.org/FAQPage for rich snippet eligibility in search results
 * Expected impact: +15-20% CTR increase through enhanced SERP display
 */

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  pageUrl?: string;
}

export function FAQSchema({ faqs, pageUrl = 'https://loansai.com' }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })),
    "url": pageUrl,
    "datePublished": "2025-01-15T00:00:00+00:00",
    "dateModified": new Date().toISOString(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
