#!/bin/bash

# Script to remove searchParams from all Canada pages and default to English
# This allows static export to work properly

echo "Fixing Canada pages to remove searchParams..."

# Find all TypeScript files in src/app/ca
find src/app/ca -name "*.tsx" -type f | while read file; do
  echo "Processing: $file"
  
  # Create a backup
  cp "$file" "$file.bak"
  
  # Remove searchParams from function parameters in generateMetadata
  # Pattern 1: Remove searchParams parameter and its type
  sed -i 's/,\s*searchParams,/,/g' "$file"
  sed -i 's/{\s*params,\s*searchParams\s*}/{ params }/g' "$file"
  sed -i '/searchParams?: { lang?: string }/d' "$file"
  
  # Pattern 2: Replace lang detection with hardcoded 'en'
  sed -i "s/const lang = (searchParams?.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'/const lang: 'en' | 'fr' = 'en'/g" "$file"
  
  echo "  ✓ Fixed $file"
done

echo ""
echo "✅ All Canada pages fixed!"
echo "Note: /ca/ routes will now default to English only"
echo "French content should be served from /fr/canada/ routes"
