# New Zealand Hub Quick Reference

## 🌐 Live URLs (after deployment)

### Main Hub
- **Hub Home**: `/nz`
- **Apply**: `/nz/apply`

### Region Pages
- List: `/nz/regions`
- Dynamic: `/nz/regions/[region-slug]`
- Examples:
  - `/nz/regions/auckland`
  - `/nz/regions/wellington`
  - `/nz/regions/canterbury`

### City Pages
- List: `/nz/cities`
- Dynamic: `/nz/cities/[region-slug]/[city-slug]`
- Examples:
  - `/nz/cities/auckland/auckland-city`
  - `/nz/cities/wellington/wellington-city`
  - `/nz/cities/canterbury/christchurch`

### Legal Pages
- Privacy: `/nz/privacy`
- Terms: `/nz/terms`
- Disclosures: `/nz/disclosures`

## 📊 Key Statistics

- **Regions**: 16
- **Cities**: 30+
- **Total Pages**: 55+
- **Population Covered**: 5 million
- **Regulator**: FMA (Financial Markets Authority)
- **Main Law**: CCCFA 2003

## 🏗️ File Structure

```
src/
├── app/nz/
│   ├── page.tsx                           # Main hub
│   ├── apply/page.tsx
│   ├── regions/
│   │   ├── page.tsx
│   │   └── [region]/page.tsx
│   ├── cities/
│   │   ├── page.tsx
│   │   └── [region]/[city]/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   └── disclosures/page.tsx
├── components/newzealand/
│   ├── newzealand-navigation.tsx
│   ├── newzealand-footer.tsx
│   ├── newzealand-faq.tsx
│   ├── newzealand-disclosure.tsx
│   └── sticky-apply-button.tsx
└── data/
    ├── newzealand-regions.ts
    └── newzealand-cities.ts
```

## ✅ Testing Checklist

### Manual Testing
- [ ] Navigate to `/nz` - hub loads correctly
- [ ] Click "Apply Now" - goes to `/nz/apply`
- [ ] Navigate to regions list - all 16 regions display
- [ ] Click on Auckland region - region page loads with cities
- [ ] Click on Auckland City - city page loads with details
- [ ] Check "Nearby cities" links work
- [ ] Verify sticky button appears on scroll
- [ ] Click sticky button - goes to apply page
- [ ] Check footer links work (privacy, terms, disclosures)
- [ ] Verify breadcrumbs work correctly
- [ ] Test mobile responsive design
- [ ] Check all FAQ accordions expand/collapse

### SEO Testing
- [ ] View page source - Schema.org JSON-LD present
- [ ] Check meta tags - title ≤60 chars, description 120-155 chars
- [ ] Verify canonical URLs
- [ ] Check OpenGraph tags
- [ ] Validate structured data with Google's tool

### Compliance Testing
- [ ] Privacy page mentions Privacy Act 2020
- [ ] Terms page mentions CCCFA
- [ ] Disclosures page has affiliate disclosure
- [ ] Representative example present
- [ ] Links to FMA website work

## 🔍 Key SEO Elements

### Title Format
- Hub: `Loans in New Zealand 2025 – Compare Licensed Lenders`
- Region: `Loans in {Region} – Compare 2025`
- City: `Loans in {City}, {Region} – Compare 2025`

### H1 Format
- Hub: `Personal Loans in New Zealand`
- Region: `Loans in {Region}`
- City: `Loans in {City}, {Region}`

### Schema Types Used
1. FinancialService
2. BreadcrumbList
3. FAQPage
4. LocalBusiness (cities only)
5. OfferCatalog (cities only)

## 🎯 Content Guidelines

### Intro Paragraph (80-120 words)
- Mention city/region description
- Include population
- List number of lenders
- Mention loan types available
- State average rate and loan amount
- Reference CCCFA/FMA compliance
- Mention average credit score (cities only)

### Regulations Section (5-8 bullets)
- CCCFA 2003 compliance
- FMA regulation
- Affordability assessment
- Transparency requirements
- Hardship assistance
- Financial Service Providers Register
- Privacy Act 2020
- Fair Trading Act

### FAQ (3-5 questions)
- Interest rates in location
- Number of lenders
- Average loan amount
- Credit score considerations
- Timeline for funds

## 🔗 Internal Linking Strategy

### Hub Level
- Links to: Regions list, Cities list, Apply

### Regions List
- Links to: All individual region pages

### Region Page
- Links to: Hub, Regions list, Cities in region

### Cities List
- Links to: All cities (grouped by region)

### City Page
- Links to: Hub, Region page, Cities list, Nearby cities (3-4)

## 📝 Important Notes

### Unique Content
- Each region has unique description and statistics
- Each city has unique description and statistics
- FAQ questions are tailored to location
- No duplicate content across pages

### Regulatory Compliance
- All lenders referenced as "FMA-licensed"
- Clear affiliate disclosure on all pages
- Representative example with NZ$ amounts
- Links to official regulators (FMA, Consumer Protection)

### User Experience
- Mobile-first responsive design
- Sticky apply button on all pages
- Clear breadcrumb navigation
- Easy-to-use FAQ accordions
- Comprehensive footer on every page

## 🚀 Deployment

### Build Command
```bash
cd loan-ai-portal
npm install
npm run build
```

### Environment
- Next.js 14 static export
- No server-side rendering required
- Deploy to Azure Static Web Apps or any static host

### Post-Deployment
1. Verify all pages load
2. Submit sitemap to Google
3. Verify Schema.org markup
4. Check page speed scores
5. Test on mobile devices

## 📞 Support Resources

### New Zealand Regulators
- **FMA**: https://www.fma.govt.nz
- **Consumer Protection**: https://www.consumerprotection.govt.nz
- **MBIE**: https://www.mbie.govt.nz
- **Banking Ombudsman**: https://www.bankomb.org.nz
- **FSP Register**: https://www.companiesoffice.govt.nz/fspr

### Key Legislation
- Credit Contracts and Consumer Finance Act 2003 (CCCFA)
- Privacy Act 2020
- Fair Trading Act 1986
- Consumer Guarantees Act 1993

## ✨ Features Implemented

✅ AI search optimized content
✅ Schema.org structured data
✅ Mobile responsive design
✅ SEO best practices
✅ Internal linking strategy
✅ Breadcrumb navigation
✅ Sticky apply button
✅ FAQ accordions
✅ Legal compliance
✅ Affiliate disclosure
✅ Unique content per page
✅ Nearby cities linking
✅ Multi-region coverage
✅ Representative examples

---

**Implementation Status**: ✅ COMPLETE
**Pages Created**: 55+
**Ready for Deployment**: YES
**Documentation**: Complete
