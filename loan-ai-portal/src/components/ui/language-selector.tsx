'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LanguageOption {
  code: string;
  label: string;
  flag: string;
  href: string;
}

const languages: LanguageOption[] = [
  { code: 'en', label: 'English (Global)', flag: '🌐', href: '/' },
  { code: 'en-US', label: 'English (United States)', flag: '🇺🇸', href: '/us' },
  { code: 'es-US', label: 'Español (Estados Unidos)', flag: '🇺🇸', href: '/es' },
  { code: 'cs-CZ', label: 'Čeština (Česko)', flag: '🇨🇿', href: '/cz' },
  { code: 'en-CA', label: 'English (Canada)', flag: '🇨🇦', href: '/ca' },
  { code: 'fr-CA', label: 'Français (Canada)', flag: '🇨🇦', href: '/ca/fr' },
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Determine current language based on pathname
  const getCurrentLanguage = (): LanguageOption => {
    if (pathname.startsWith('/us')) return languages[1];
    if (pathname.startsWith('/es')) return languages[2];
    if (pathname.startsWith('/cz')) return languages[3];
    if (pathname.startsWith('/ca/fr')) return languages[5];
    if (pathname.startsWith('/ca')) return languages[4];
    return languages[0];
  };

  const currentLanguage = getCurrentLanguage();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors rounded-md hover:bg-gray-50"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-lg" aria-hidden="true">
          {currentLanguage.flag}
        </span>
        <span className="hidden sm:inline">{currentLanguage.label.split(' ')[0]}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide border-b border-gray-100">
            Select Language / Region
          </div>
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={lang.href}
              className={`flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-blue-50 transition-colors ${
                currentLanguage.code === lang.code ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xl" aria-hidden="true">
                {lang.flag}
              </span>
              <span>{lang.label}</span>
              {currentLanguage.code === lang.code && (
                <svg className="w-4 h-4 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
