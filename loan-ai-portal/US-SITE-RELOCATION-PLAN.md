# U.S. Site Relocation Plan (\`/us\` Hub)

## 1. Objectives & Constraints
- Create a dedicated `/us` hub so U.S. content lives under a consistent country-prefixed hierarchy that can scale to additional countries.
- Preserve SEO equity and user bookmarks by issuing 301 redirects from legacy `/states`, `/cities`, and related paths to their new `/us/...` equivalents.
- Maintain Spanish (`/es`) parity, i.e. English `/us/...` should have `/es/us/...` alternates wherever translations exist today.
- Avoid breaking the static export build (`next export`) and keep Azure Static Web Apps deployment compatible.

## 2. Current Surface Area (Audit)
The following routes, components, and data bindings are tied directly to the legacy U.S. paths:

### 2.1 Route directories (English)
- `src/app/states` (index + `[state]` dynamic pages)
- `src/app/cities` (index + `[state]/[city]` dynamic pages)
- `src/app/ai-loan-matching`, `apply`, `contact`, `disclaimer`, `disclosures`, `faq`, `licenses`, `privacy`, `terms`, `about`, `blog` → all contain U.S.-specific copy and CTAs.
- SEO helpers such as `src/app/sitemap.ts`, `src/app/robots.ts`, dynamic `head.tsx` files, and structured data components reference `/states` and `/cities`.

### 2.2 Spanish locale
- `src/app/es/states` and associated `[state]` pages mirror the English structure.
- `src/app/es/apply` and `src/app/es/page.tsx` link to `/es/states`.

### 2.3 Shared dependencies
- Navigation + footer: `src/components/navigation.tsx`, `src/components/footer.tsx`, and `src/data/translations.ts` hardcode `/states`, `/cities`, and related anchors.
- Breadcrumbs & schema: `src/components/breadcrumb-schema.tsx`, `src/lib/seo-helpers.ts`, `src/lib/breadcrumb-examples.tsx`, `src/app/cities/[state]/[city]/page.tsx` all emit legacy URLs.
- Data modules: `src/data/states.ts`, `src/data/cities.ts`, `src/data/education.ts` expose helper links pointing to `/states/...` and `/cities/...`.
- API surface: `src/app/api/services.json/route.ts` documents `/states/{state}` and `/cities/{state}/{city}` endpoints.

## 3. Proposed Information Architecture
```
/us
  ├─ page.tsx               (U.S. country hub landing)
  ├─ layout.tsx             (shared navigation/footer with country context)
  ├─ states/
  │    ├─ page.tsx          (replaces former `/states`)
  │    └─ [state]/page.tsx  (replaces `/states/[state]`)
  ├─ cities/
  │    ├─ page.tsx          (replaces `/cities`)
  │    └─ [state]/[city]/page.tsx  (replaces `/cities/[state]/[city]`)
  ├─ lenders/… (future U.S.-only resources)
  ├─ disclosures/, privacy/, faq/, terms/, etc. (move U.S.-centric static pages here)
  └─ ai-loan-matching/, apply/, contact/, licenses/, disclaimer/
```

- Spanish equivalents live under `src/app/es/us/...` (Next.js locale prefix followed by country segment).
- Czech (and future countries) remain top-level (e.g., `/cz`) until their localized IA is defined.

## 4. Implementation Steps
1. **Create `/us` scaffolding**
   - Introduce `src/app/us/layout.tsx` consuming existing global `Navigation`/`Footer` but passing a `country="us"` prop once we add support (see Step 3).
   - Add `src/app/us/page.tsx` as the country hub, combining current U.S.-specific content (e.g., hero, compliance, quick links).

2. **Move state & city routes**
   - Relocate `src/app/states` → `src/app/us/states`, updating relative imports.
   - Relocate `src/app/cities` → `src/app/us/cities`.
   - Update metadata canonical URLs to `https://loan-platform.com/us/states/...` etc.
   - Ensure `generateStaticParams` continues to work after moving files.

3. **Generalize navigation/footer**
   - Extend `Navigation` and `Footer` to accept an optional `country` context.
   - Country selector & CTA links for “United States” should point to `/us` (or `/us/states` for deep links).
   - Update `src/data/translations.ts` to produce `/us/...` for English and `/es/us/...` for Spanish when the link references a U.S. resource.

4. **Adjust internal linking + SEO**
   - Update breadcrumbs (`breadcrumb-schema`), `seo-helpers`, structured data, and CTA links across pages to reference `/us/...`.
   - Revise `sitemap.ts` to output new URLs and include `<loc>` entries for legacy paths pointing to `<xhtml:link rel="alternate">` if required.
   - Update `robots.ts` if it references legacy paths.

5. **Introduce redirects**
   - Add rewrite map in `next.config.js` (or `middleware.ts`) to 301 from `/states*` → `/us/states*` and `/cities*` → `/us/cities*`.
   - Extend to `/es/states*` → `/es/us/states*`, etc.
   - Document changes in `infra/app-service-settings.md` if Azure-specific rewrite rules are needed.

6. **Spanish locale migration**
   - Mirror directory moves under `src/app/es/us/...`.
   - Confirm locale helpers (`applyLocaleToPath`) correctly prefix `/es/us/...`.
   - Update translated nav/footer links & breadcrumbs.

7. **API & JSON references**
   - Update `services.json` schema documentation and any API responses that embed URLs.
   - Scan standalone docs (e.g., `README.md`, reports) for hardcoded `/states` links and adjust where relevant.

8. **Testing & validation**
   - Run `npm run lint` + `npm run build` to ensure static export passes.
   - Spot-check critical pages (`/us/states/california`, `/es/us/states/california`, `/us/cities/florida/miami`).
   - Validate that redirects serve a 301 locally via `next dev` (middleware) and in Azure (Static Web Apps rewrites).
   - Regenerate sitemap export if part of deployment workflow.

## 5. Rollout Considerations
- **Phased deploy**: Optionally ship navigation changes + redirects first, then move directories to limit downtime.
- **Content updates**: When introducing `/us/page.tsx`, ensure copy differentiates between global homepage and U.S.-specific experiences.
- **Analytics**: Update any analytics events or GTM tags expecting legacy paths.
- **Performance**: Moving directories should not affect tree-shaking; verify import paths remain relative to `@/` alias.

## 6. Risks & Mitigations
| Risk | Impact | Mitigation |
| --- | --- | --- |
| Missed hardcoded `/states` link | Broken navigation or SEO regression | Grep repo (`/states`, `/cities`) & update all matches during implementation; add unit tests where practical. |
| Locale helper regression | Spanish routes render incorrectly | Add integration test for `applyLocaleToPath('/us/states', 'es') → '/es/us/states'`. |
| Redirect loops | Users stuck between locale prefixes | Write explicit rewrite rules that check for existing `/us` prefix before redirecting. |
| Azure Static Web Apps rewrite mismatch | Legacy URLs not redirected in production | Update `staticwebapp.config.json` (if used) or document rewrites for Azure team. |

## 7. Next Actions
1. Align with stakeholders on whether every U.S.-centric page moves under `/us` in this phase or only geography pages.
2. Begin implementation following the step sequence above.
3. After migration, update documentation (deployment checklists, SEO reports) to reference the new structure.
