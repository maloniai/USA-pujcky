'use client';

import Link from 'next/link';
import Script from 'next/script';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function NZBreadcrumbs({ items }: BreadcrumbsProps) {
  // Build structured data for BreadcrumbList schema
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://loan-platform.com${item.href}`,
    })),
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="nz-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Visual Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          <li>
            <Link 
              href="/" 
              className="hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
          </li>
          
          <li className="flex items-center gap-2">
            <span className="text-gray-400">/</span>
            <Link 
              href="/nz" 
              className="hover:text-blue-600 transition-colors"
            >
              New Zealand
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              <span className="text-gray-400">/</span>
              {index === items.length - 1 ? (
                <span className="font-medium text-gray-900" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
