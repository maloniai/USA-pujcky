# Copilot Instructions: Loan AI Portal

## Project Snapshot
- Next.js 14 App Router site exported statically for Azure Static Web Apps—avoid server components or runtime `fetch`.
- **Global Strategy**: Main English directory at `/global` lists all live and coming-soon country hubs; individual country hubs operate as localized sub-portals (US, CZ, CA, etc.) with geo-targeted SEO and lead capture.
- Routes live under `src/app`: Global directory at `/global`, English hub in `(site)`, Spanish in `/es`, Czech hub in `/cz`.
- Tailwind + shadcn-lite primitives (`src/components/ui`) drive styling; share utilities via `cn()` in `src/lib/utils`.

## Global Hub Architecture
- `/global` page (`src/app/global/page.tsx`) renders an English-only directory showcasing live country hubs (US, CZ), in-progress markets (Canada Q1 2025), and 11 coming-soon countries.
- **No Lead Forms**: Global page is purely informational—no lead capture, just company overview and hub links.
- Data source: `src/data/countries.ts` exports `liveCountries`, `inProgressCountries`, `comingSoonCountries` arrays with each hub's `code`, `name`, `flag`, `description`, `population`, `coverage`, `languages`, `href`, and `status`.
- Footer: `src/components/global-footer.tsx` displays company contact, legal links, and country hub navigation—no locale switcher or loan CTAs.
- **Scaling Pattern**: When launching a new country, add entry to appropriate array in `countries.ts`, create localized hub route (e.g., `/mx`), and update global page will auto-reflect the new hub.

## Czech Region Pattern
- Region datasets (`src/data/cz-{region}.ts`) export `{region}RegionContent`, `{region}CitySlugs`, `get{Region}City`, `resolve{Region}Metadata`; always run names through `slugify()` for diacritics.
- City seeds hold meta templates (`{{year}}` placeholder), intro copy, disclosures, FAQ, regulations, nearby slugs, and Volsor offer config—keep descriptions under 155 chars.
- Region pages (`src/app/cz/regions/{region}/page.tsx`) destructure dataset fields, render `<LeadGenDisclosure locale="cs" />`, and embed `<VolsorLoanForm>` with region-specific `affiliate`/`campaign` IDs.
- City pages (`src/app/cz/regions/{region}/[city]/page.tsx`) use `generateStaticParams()` with `{region}CitySlugs`, pull content via `get{Region}City`, call `resolve{Region}Metadata` for metadata, and `notFound()` when a slug is missing.

## SEO & Schema Obligations
- Inject `<BreadcrumbSchema items={...} />` and `<FAQSchema faqs={...} />` whenever FAQ content exists; helpers live in `src/components`.
- Set canonical URLs through `generateMetadata().alternates.canonical`; titles typically `${heroTitle} | ${currentYear}`.
- Include `<LeadGenDisclosure locale>` on every lead-gen surface and keep dataset disclosures aligned with compliance copy.

## Navigation & Localization
- Navigation/footer labels come from `src/data/translations.ts` helpers—no hardcoded strings.
- Locale utilities in `src/lib/i18n.ts` manage prefixing (`applyLocaleToPath`) and detection (`resolveLocaleFromPath`).

## Dev Workflow
- Common commands: `npm run dev`, `npm run lint`, `npm run build`, `npm run export`, `npm run validate:schema` (checks JSON-LD output).
- When adding a region or city, also update `src/data/cz-regions.ts` so hub cards show the new counts and CTA.
- Verify nearby city links resolve; the dataset helper augments manual `nearby` arrays but still needs review of generated slugs.

## Canada Lead Forms
- English Canada pages embed Loans Canada iframe (affiliate `1143`) and keep the surrounding disclosure copy aligned:

```html
<div style="text-align:center;">
	<iframe
		id="loanscanada_iframe"
		style="width:1px;min-width:100%;min-height:300px;border-radius:10px;"
		src="https://loanscanada.ca/app/iframe?affiliate_id=1143&product_names=personal_loan,education_loan,car_loan,mortgage,mortgage_refinancing,heloc,second_mortgage,business_loan,mca,debt_consolidation,consumer_proposal,bankruptcy,powersports&bgcolor=%23ef4541&preselected_product=false"
		frameborder="0"
		scrolling="no"
	></iframe>
	<a
		href="https://loanscanada.ca?affiliate_id=1143"
		rel="nofollow"
		target="_blank"
		title="Visit LoansCanada.ca"
	>
		<small>Visit LoansCanada.ca For More Services</small>
	</a>
</div>
<script src="https://loanscanada.ca/app/assets/iframe/lc.js"></script>
```

- French Canada pages embed the PrêtsQuébec variant (note `pq`, blue theme, localized CTA):

```html
<div style="text-align:center;">
	<iframe
		id="loanscanada_iframe"
		style="width:1px;min-width:100%;min-height:300px;border-radius:10px;"
		src="https://loanscanada.ca/app/iframe?pq&affiliate_id=1143&product_names=personal_loan,car_loan,mortgage,mortgage_refinancing,heloc,second_mortgage,business_loan,mca,debt_consolidation,consumer_proposal,bankruptcy,powersports&bgcolor=%233568b5&preselected_product=false"
		frameborder="0"
		scrolling="no"
	></iframe>
	<a
		href="https://pretsquebec.ca?affiliate_id=1143"
		rel="nofollow"
		target="_blank"
		title="Visit PrêtsQuébec.ca"
	>
		<small>Visit PrêtsQuébec.ca For More Services</small>
	</a>
</div>
<script src="https://loanscanada.ca/app/assets/iframe/lc.js"></script>
```

## US State & City Pattern
- US state metadata lives in `src/data/states.ts`; routes under `src/app/us/states` use `usStates` plus helpers from `src/data/education.ts` to render regulation, education, and FAQ modules.
- City pages are generated from `src/data/cities.ts` via `getAllCitySlugs`, `getCityBySlug`, and `getNearbyCities`; each page pulls parent state with `getStateBySlug`, builds education content, and renders JSON-LD (Breadcrumb + LocalBusiness schema).
- Education sections (`src/components/education`) supply `AiSummary`, `EducationModuleGrid`, `RegulationUpdatesSection`, `CreditGuidanceSection`, `FAQList`, and `RelatedArticles`; reuse those instead of duplicating layouts.
- Lead capture on US hubs/city pages uses `<ApplicationFormScript />`, which injects the RoundSky iframe based on the script below; always pair it with `<LeadGenDisclosure locale="en" />`:

```html
<script src="https://www.rndframe.com/server/web/js/json.min.js" type="text/javascript"></script>
<script type="text/javascript">
	var srcURL = 'https://www.rndframe.com/server'
	var inputOptions = {
		UserID: 'fO2GyTVOix5nom4ZiFxCKOsJQt19rIJKGPfVW9CJwxk.',
		Style: 'STYLE1',
		FormID: 'INSTALLMENT_STEP',
		SubID: '',
		SubID2: '',
		SubID3: '',
		Domain: '',
		Height: 'AUTO',
		StepAmountSelect: 'buttons',
	}
	document.write(
		'<scr' +
			'ipt type="text/javascript" src="' +
			srcURL +
			'/init.php?vn=' +
			encodeURIComponent(JSON.stringify(inputOptions)) +
			'"></scr' +
			'ipt>'
	)
	if (!inputOptions.TargetDivID) {
		document.write('<di' + 'v id="rsForm"></di' + 'v>')
	}
</script>
```

## Guardrails
- Maintain static-export compatibility—no API routes, revalidate calls, or runtime-only code.
- Never hand-roll slugs for Czech locales; `slugify()` ensures `Železná Ruda` → `zelezna-ruda` everywhere.
- Keep Volsor `affiliate`/`campaign` identifiers unique per surface to avoid tracking collisions.

Feedback welcome—flag unclear or missing topics so we can refine these directions.
