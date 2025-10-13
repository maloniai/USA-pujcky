'use client';

import Script from 'next/script';
import { useState } from 'react';

export default function AffiliateScript() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  return (
    <>
      <Script
        src="https://www.doaff.net/publisherScript.js?c=jjn"
        strategy="lazyOnload"
        onLoad={() => {
          setScriptLoaded(true);
          console.log('Affiliate script loaded successfully');
        }}
        onError={(e) => {
          console.error('Error loading affiliate script:', e);
        }}
      />
      {scriptLoaded && (
        <div className="text-xs text-gray-500 text-center mt-2">
          Sistem de aplicare securizat
        </div>
      )}
    </>
  );
}
