import Script from 'next/script'

interface ArticleStructuredDataProps {
  title: string
  description: string
  author: string
  date: string
  url: string
  keywords: string[]
  category: string
}

export default function ArticleStructuredData({
  title,
  description,
  author,
  date,
  url,
  keywords,
  category,
}: ArticleStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished: date,
    dateModified: date,
    publisher: {
      '@type': 'Organization',
      name: 'Loan AI Portal',
      logo: {
        '@type': 'ImageObject',
        url: 'https://loan-platform.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: category,
    keywords: keywords.join(', '),
  }

  return (
    <Script
      id="article-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
