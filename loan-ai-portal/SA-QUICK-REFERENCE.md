# South Africa Hub - Quick Reference

## URLs

- Main Hub: `/za`
- Province: `/za/{province-slug}`
- City: `/za/{province-slug}/{city-slug}`
- Apply: `/za/apply`

## Provinces (9)

1. `gauteng` - Gauteng (Johannesburg, Pretoria)
2. `western-cape` - Western Cape (Cape Town)
3. `kwazulu-natal` - KwaZulu-Natal (Durban)
4. `eastern-cape` - Eastern Cape (Gqeberha/Port Elizabeth)
5. `limpopo` - Limpopo (Polokwane)
6. `mpumalanga` - Mpumalanga (Mbombela)
7. `north-west` - North West (Rustenburg)
8. `free-state` - Free State (Bloemfontein)
9. `northern-cape` - Northern Cape (Kimberley)

## Major Cities (Examples)

- `/za/gauteng/johannesburg`
- `/za/gauteng/pretoria`
- `/za/gauteng/sandton`
- `/za/western-cape/cape-town`
- `/za/kwazulu-natal/durban`
- `/za/eastern-cape/gqeberha`

## Key Features

✅ SEO optimized pages with metadata
✅ Schema.org JSON-LD (Financial Service, FAQ, Breadcrumbs)
✅ NCR compliance (National Credit Regulator)
✅ Sticky Apply button on all pages
✅ Internal linking (hub → provinces → cities)
✅ Breadcrumb navigation
✅ Multi-language ready (English/Afrikaans)
✅ Responsive design
✅ Fast static generation

## Data Files

- `src/data/sa-regions.ts` - 9 provinces
- `src/data/sa-cities.ts` - 50+ cities

## Components

- `src/components/sa/sa-navigation.tsx`
- `src/components/sa/sa-footer.tsx`
- `src/components/sa/sa-faq.tsx`
- `src/components/sa/sa-disclosure.tsx`
- `src/components/sa/sticky-apply-button.tsx`

## Compliance

- **NCR** - National Credit Regulator registered
- **NCA** - National Credit Act compliant
- **POPIA** - Protection of Personal Information Act
- **Interest Rate Cap**: Repo rate + 21% per annum
- **Initiation Fee**: R 1,207.50 + 10% above R 1,000
- **Cooling-off Period**: 5 business days

## Page Structure

### Hub Page
- Hero with stats
- Overview
- Regulations
- Provinces grid
- Cities grid
- Loan types
- FAQ
- CTA
- Disclosure

### Province Page
- Breadcrumb
- Intro (80-120 words)
- Stats
- Regulations (5-8 bullets)
- Cities list
- FAQ (3-5 Q&A)
- Disclosure

### City Page
- Breadcrumb (SA → Province → City)
- Intro (80-120 words)
- Market snapshot (5-8 bullets)
- Nearby cities
- FAQ (3-5 Q&A)
- CTA
- Disclosure

## SEO

- Title: "Loans in {City}, {Province} – Compare {Year}"
- Meta: 120-155 chars, localized + CTA
- H1: "Loans in {City}, {Province}"
- Schema: FinancialService, FAQPage, BreadcrumbList

## Testing

Run build:
```bash
cd loan-ai-portal
npm run build
```

Check routes:
```bash
# Should generate:
# /za/index.html
# /za/gauteng/index.html
# /za/gauteng/johannesburg/index.html
# etc.
```

## Next Steps

1. Fix build timeout issues
2. Test all generated pages
3. Validate schema.org markup
4. Mobile responsiveness testing
5. Page load performance testing
6. Add Afrikaans translations
7. Integrate application form
8. Add lender directory
