'use client';

import Link from 'next/link';

export default function ApplyButton({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/kz/apply"
      className={`inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-blue-700 transition-colors ${className}`}
    >
      Өтінім беру (Apply Now)
    </Link>
  );
}
