module.exports = [
"[project]/src/components/round-sky-widget.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoundSkyWidget",
    ()=>RoundSkyWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function RoundSkyWidget({ intent, pageId, formId = "INSTALLMENT_STEP", className }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const srcURL = "https://www.rndframe.com/server";
        const jsonScriptId = "round-sky-json";
        const initScriptId = `round-sky-init-${pageId}`;
        if (!document.getElementById(jsonScriptId)) {
            const jsonScript = document.createElement("script");
            jsonScript.id = jsonScriptId;
            jsonScript.type = "text/javascript";
            jsonScript.src = "https://www.rndframe.com/server/web/js/json.min.js";
            jsonScript.async = true;
            document.body.appendChild(jsonScript);
        }
        if (document.getElementById(initScriptId)) {
            return;
        }
        const inputOptions = {
            UserID: "fO2GyTVOix5nom4ZiFxCKOsJQt19rIJKGPfVW9CJwxk.",
            Style: "STYLE1",
            FormID: formId,
            SubID: intent,
            SubID2: pageId,
            SubID3: "",
            Domain: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "",
            Height: "AUTO",
            StepAmountSelect: "buttons",
            TargetDivID: `rsForm-${pageId}`
        };
        const initScript = document.createElement("script");
        initScript.id = initScriptId;
        initScript.type = "text/javascript";
        initScript.src = `${srcURL}/init.php?vn=${encodeURIComponent(JSON.stringify(inputOptions))}`;
        initScript.async = true;
        document.body.appendChild(initScript);
        return ()=>{
            initScript.remove();
        };
    }, [
        formId,
        intent,
        pageId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: `rsForm-${pageId}`,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full", className)
    }, void 0, false, {
        fileName: "[project]/src/components/round-sky-widget.tsx",
        lineNumber: 63,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/data/states.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STATE_CODES",
    ()=>STATE_CODES,
    "STATE_REGULATIONS",
    ()=>STATE_REGULATIONS,
    "getStateByAbbr",
    ()=>getStateByAbbr
]);
const BASE_DEFAULT = {
    paydayAllowed: true,
    paydayMaxAmount: 600,
    installmentMaxAmount: 5000,
    typicalAprRange: [
        36,
        180
    ],
    minTermDays: 61,
    maxTermDays: 730,
    coolingPeriodDays: null,
    creditCheck: "soft",
    licensingNote: "Licensed lenders must provide clear fee disclosures and offer extended payment plans when required by statute.",
    complianceSummary: "State law limits payday advances and requires lenders to present fee comparisons. Installment lenders must register and follow federal Truth in Lending disclosures.",
    complianceSummaryEs: "La ley estatal limita los adelantos de nómina y exige que los prestamistas presenten comparaciones de tarifas. Los prestamistas a plazos deben registrarse y cumplir con las divulgaciones federales de la Ley de Veracidad en los Préstamos.",
    dataUpdated: "2024-12-01",
    sources: [
        {
            title: "CFPB State-by-State Payday Lending Rules",
            url: "https://www.consumerfinance.gov/data-research/state-payday-regulations/"
        }
    ]
};
const STATE_OVERRIDES = {
    AL: {
        paydayMaxAmount: 500,
        coolingPeriodDays: 0,
        typicalAprRange: [
            36,
            456
        ]
    },
    AK: {
        installmentMaxAmount: 10000,
        typicalAprRange: [
            24,
            160
        ]
    },
    AZ: {
        paydayAllowed: false,
        paydayMaxAmount: 0,
        complianceSummary: "Arizona prohibits traditional payday lending. Licensed installment lenders may offer unsecured loans with caps on fees and late charges.",
        complianceSummaryEs: "Arizona prohíbe los préstamos de día de pago tradicionales. Los prestamistas a plazos con licencia pueden ofrecer préstamos sin garantía con límites en las tarifas y cargos por mora."
    },
    AR: {
        paydayAllowed: false,
        paydayMaxAmount: 0,
        typicalAprRange: [
            17,
            36
        ],
        complianceSummary: "Arkansas enforces a strict 17% constitutional usury cap. Payday-style loans are considered predatory and are prohibited.",
        complianceSummaryEs: "Arkansas aplica un estricto tope de usura constitucional del 17 %. Los préstamos tipo payday se consideran depredadores y están prohibidos."
    },
    CA: {
        installmentMaxAmount: 10000,
        typicalAprRange: [
            20,
            200
        ],
        coolingPeriodDays: 24,
        licensingNote: "California Department of Financial Protection and Innovation requires DFPI license and compliance with the California Financing Law."
    },
    CO: {
        paydayMaxAmount: 500,
        typicalAprRange: [
            36,
            120
        ],
        coolingPeriodDays: 30
    },
    CT: {
        paydayAllowed: false,
        paydayMaxAmount: 0,
        complianceSummary: "Connecticut bans payday loans. Small personal lenders must operate under the Small Loan Lending License with APR <= 36% on loans under $15,000.",
        complianceSummaryEs: "Connecticut prohíbe los préstamos payday. Los prestamistas personales deben operar bajo la licencia de préstamos pequeños con una APR ≤ 36 % en préstamos menores a 15,000 USD."
    },
    DC: {
        paydayAllowed: false,
        paydayMaxAmount: 0,
        complianceSummary: "District of Columbia Payday Loan Consumer Protection Amendment limits APR to 24% which effectively bans payday products.",
        complianceSummaryEs: "El Distrito de Columbia limita la APR al 24 %, lo que en la práctica prohíbe los productos payday."
    },
    FL: {
        paydayMaxAmount: 500,
        coolingPeriodDays: 24,
        licensingNote: "Florida requires deferred presentment providers to use the statewide database and offer a 60-day grace plan once per 12 months."
    },
    GA: {
        paydayAllowed: false,
        paydayMaxAmount: 0,
        complianceSummary: "Georgia outlaws payday lending. Installment lenders must comply with the Industrial Loan Act with fees capped around 60% APR equivalent.",
        complianceSummaryEs: "Georgia prohíbe los préstamos payday. Los prestamistas a plazos deben cumplir con la Industrial Loan Act con tarifas limitadas aproximadamente al 60 % de APR equivalente."
    },
    IL: {
        paydayMaxAmount: 1000,
        typicalAprRange: [
            36,
            99
        ],
        complianceSummary: "Illinois capped small-dollar consumer loans at 36% APR through the Predatory Loan Prevention Act.",
        complianceSummaryEs: "Illinois fijó un tope de 36 % de APR para los préstamos pequeños al consumidor mediante la Predatory Loan Prevention Act."
    },
    MD: {
        paydayAllowed: false,
        paydayMaxAmount: 0,
        complianceSummary: "Maryland prohibits payday loans; small consumer loans fall under the Credit Services Businesses Act with APR restrictions.",
        complianceSummaryEs: "Maryland prohíbe los préstamos payday; los préstamos pequeños al consumidor se rigen por la Credit Services Businesses Act con restricciones de APR."
    },
    MA: {
        paydayAllowed: false,
        paydayMaxAmount: 0,
        complianceSummary: "Massachusetts caps APR at 23% plus official fees making payday lending impractical.",
        complianceSummaryEs: "Massachusetts limita la APR al 23 % más tarifas oficiales, lo que hace impracticables los préstamos payday."
    },
    MT: {
        paydayMaxAmount: 300,
        typicalAprRange: [
            36,
            400
        ]
    },
    NE: {
        typicalAprRange: [
            36,
            36
        ],
        complianceSummary: "Nebraska voters approved a 36% rate cap on payday loans in 2020. Installment lenders may operate above that threshold as separate products.",
        complianceSummaryEs: "Nebraska aprobó en 2020 un límite de tasa del 36 % para los préstamos payday. Los prestamistas a plazos pueden operar por encima de ese umbral como productos separados."
    },
    NV: {
        paydayMaxAmount: 5000,
        typicalAprRange: [
            36,
            650
        ]
    },
    NH: {
        paydayMaxAmount: 500,
        typicalAprRange: [
            36,
            199
        ]
    },
    NJ: {
        paydayAllowed: false,
        paydayMaxAmount: 0
    },
    NM: {
        paydayMaxAmount: 500,
        typicalAprRange: [
            36,
            99
        ]
    },
    NY: {
        paydayAllowed: false,
        paydayMaxAmount: 0,
        complianceSummary: "New York considers payday rates usurious; small personal loans must follow the Licensed Lender Law with 25% civil usury limit.",
        complianceSummaryEs: "Nueva York considera usurarios los tipos payday; los préstamos personales pequeños deben cumplir con la Licensed Lender Law con un límite civil de usura del 25 %."
    },
    NC: {
        paydayAllowed: false,
        paydayMaxAmount: 0
    },
    ND: {
        paydayMaxAmount: 600,
        typicalAprRange: [
            36,
            486
        ]
    },
    OH: {
        paydayMaxAmount: 1000,
        typicalAprRange: [
            28,
            60
        ],
        coolingPeriodDays: 7
    },
    OK: {
        paydayMaxAmount: 500,
        typicalAprRange: [
            36,
            207
        ]
    },
    OR: {
        paydayMaxAmount: 300,
        typicalAprRange: [
            36,
            154
        ]
    },
    PA: {
        paydayAllowed: false,
        paydayMaxAmount: 0
    },
    RI: {
        paydayMaxAmount: 500,
        typicalAprRange: [
            36,
            260
        ]
    },
    SD: {
        typicalAprRange: [
            36,
            36
        ],
        complianceSummary: "South Dakota enforces a 36% rate cap on all consumer loans following Initiated Measure 21.",
        complianceSummaryEs: "South Dakota aplica un tope del 36 % a todos los préstamos al consumidor tras la Iniciativa 21."
    },
    TN: {
        paydayMaxAmount: 500,
        typicalAprRange: [
            36,
            459
        ]
    },
    TX: {
        paydayMaxAmount: 1800,
        installmentMaxAmount: 10000,
        typicalAprRange: [
            36,
            610
        ],
        complianceSummary: "Texas credit access businesses arrange loans with third-party lenders. Fee disclosures must include effective APR and repayment comparisons.",
        complianceSummaryEs: "En Texas, las credit access businesses intermedian préstamos con prestamistas externos. Las divulgaciones de tarifas deben incluir la APR efectiva y comparaciones de pagos."
    },
    UT: {
        paydayMaxAmount: 2500,
        typicalAprRange: [
            36,
            700
        ],
        coolingPeriodDays: 30
    },
    VA: {
        paydayMaxAmount: 500,
        typicalAprRange: [
            36,
            48
        ],
        coolingPeriodDays: 45
    },
    VT: {
        paydayAllowed: false,
        paydayMaxAmount: 0
    },
    WA: {
        paydayMaxAmount: 700,
        typicalAprRange: [
            36,
            391
        ],
        coolingPeriodDays: 30
    },
    WV: {
        paydayAllowed: false,
        paydayMaxAmount: 0
    },
    WI: {
        paydayMaxAmount: 1500,
        typicalAprRange: [
            36,
            490
        ],
        coolingPeriodDays: 0
    }
};
const STATE_LIST = [
    {
        abbr: "AL",
        name: "Alabama"
    },
    {
        abbr: "AK",
        name: "Alaska"
    },
    {
        abbr: "AZ",
        name: "Arizona"
    },
    {
        abbr: "AR",
        name: "Arkansas"
    },
    {
        abbr: "CA",
        name: "California"
    },
    {
        abbr: "CO",
        name: "Colorado"
    },
    {
        abbr: "CT",
        name: "Connecticut"
    },
    {
        abbr: "DE",
        name: "Delaware"
    },
    {
        abbr: "FL",
        name: "Florida"
    },
    {
        abbr: "GA",
        name: "Georgia"
    },
    {
        abbr: "HI",
        name: "Hawaii"
    },
    {
        abbr: "ID",
        name: "Idaho"
    },
    {
        abbr: "IL",
        name: "Illinois"
    },
    {
        abbr: "IN",
        name: "Indiana"
    },
    {
        abbr: "IA",
        name: "Iowa"
    },
    {
        abbr: "KS",
        name: "Kansas"
    },
    {
        abbr: "KY",
        name: "Kentucky"
    },
    {
        abbr: "LA",
        name: "Louisiana"
    },
    {
        abbr: "ME",
        name: "Maine"
    },
    {
        abbr: "MD",
        name: "Maryland"
    },
    {
        abbr: "MA",
        name: "Massachusetts"
    },
    {
        abbr: "MI",
        name: "Michigan"
    },
    {
        abbr: "MN",
        name: "Minnesota"
    },
    {
        abbr: "MS",
        name: "Mississippi"
    },
    {
        abbr: "MO",
        name: "Missouri"
    },
    {
        abbr: "MT",
        name: "Montana"
    },
    {
        abbr: "NE",
        name: "Nebraska"
    },
    {
        abbr: "NV",
        name: "Nevada"
    },
    {
        abbr: "NH",
        name: "New Hampshire"
    },
    {
        abbr: "NJ",
        name: "New Jersey"
    },
    {
        abbr: "NM",
        name: "New Mexico"
    },
    {
        abbr: "NY",
        name: "New York"
    },
    {
        abbr: "NC",
        name: "North Carolina"
    },
    {
        abbr: "ND",
        name: "North Dakota"
    },
    {
        abbr: "OH",
        name: "Ohio"
    },
    {
        abbr: "OK",
        name: "Oklahoma"
    },
    {
        abbr: "OR",
        name: "Oregon"
    },
    {
        abbr: "PA",
        name: "Pennsylvania"
    },
    {
        abbr: "RI",
        name: "Rhode Island"
    },
    {
        abbr: "SC",
        name: "South Carolina"
    },
    {
        abbr: "SD",
        name: "South Dakota"
    },
    {
        abbr: "TN",
        name: "Tennessee"
    },
    {
        abbr: "TX",
        name: "Texas"
    },
    {
        abbr: "UT",
        name: "Utah"
    },
    {
        abbr: "VT",
        name: "Vermont"
    },
    {
        abbr: "VA",
        name: "Virginia"
    },
    {
        abbr: "WA",
        name: "Washington"
    },
    {
        abbr: "WV",
        name: "West Virginia"
    },
    {
        abbr: "WI",
        name: "Wisconsin"
    },
    {
        abbr: "WY",
        name: "Wyoming"
    },
    {
        abbr: "DC",
        name: "District of Columbia"
    }
];
const STATE_REGULATIONS = STATE_LIST.map(({ abbr, name })=>({
        abbr,
        name,
        ...BASE_DEFAULT,
        ...STATE_OVERRIDES[abbr]
    }));
function getStateByAbbr(stateAbbr) {
    return STATE_REGULATIONS.find((state)=>state.abbr.toLowerCase() === stateAbbr.toLowerCase());
}
const STATE_CODES = STATE_REGULATIONS.map((state)=>state.abbr.toLowerCase());
}),
"[project]/src/data/cities.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CITY_PROFILES",
    ()=>CITY_PROFILES,
    "getCitiesByState",
    ()=>getCitiesByState,
    "getCityProfile",
    ()=>getCityProfile
]);
const CITY_PROFILES = [
    {
        stateAbbr: "AZ",
        city: "Phoenix",
        slug: "phoenix",
        populationBucket: "tier-1",
        featuredIntents: [
            "installment",
            "personal",
            "debt-consolidation"
        ],
        avgHouseholdIncome: 77491,
        unemploymentRate: 3.5,
        searchVolumeScore: 95
    },
    {
        stateAbbr: "CA",
        city: "Los Angeles",
        slug: "los-angeles",
        populationBucket: "tier-1",
        featuredIntents: [
            "personal",
            "debt-consolidation"
        ],
        avgHouseholdIncome: 76424,
        unemploymentRate: 4.3,
        searchVolumeScore: 98
    },
    {
        stateAbbr: "CA",
        city: "San Diego",
        slug: "san-diego",
        populationBucket: "tier-2",
        featuredIntents: [
            "installment",
            "personal"
        ],
        avgHouseholdIncome: 93254,
        unemploymentRate: 3.7,
        searchVolumeScore: 82
    },
    {
        stateAbbr: "FL",
        city: "Miami",
        slug: "miami",
        populationBucket: "tier-1",
        featuredIntents: [
            "payday",
            "installment"
        ],
        avgHouseholdIncome: 58286,
        unemploymentRate: 2.4,
        searchVolumeScore: 87
    },
    {
        stateAbbr: "TX",
        city: "Houston",
        slug: "houston",
        populationBucket: "tier-1",
        featuredIntents: [
            "installment",
            "payday",
            "debt-consolidation"
        ],
        avgHouseholdIncome: 71341,
        unemploymentRate: 4.0,
        searchVolumeScore: 99
    },
    {
        stateAbbr: "TX",
        city: "Austin",
        slug: "austin",
        populationBucket: "tier-2",
        featuredIntents: [
            "installment",
            "personal"
        ],
        avgHouseholdIncome: 88964,
        unemploymentRate: 3.1,
        searchVolumeScore: 74
    },
    {
        stateAbbr: "WA",
        city: "Seattle",
        slug: "seattle",
        populationBucket: "tier-1",
        featuredIntents: [
            "personal",
            "debt-consolidation"
        ],
        avgHouseholdIncome: 116068,
        unemploymentRate: 3.5,
        searchVolumeScore: 78
    },
    {
        stateAbbr: "NV",
        city: "Las Vegas",
        slug: "las-vegas",
        populationBucket: "tier-1",
        featuredIntents: [
            "payday",
            "installment"
        ],
        avgHouseholdIncome: 66174,
        unemploymentRate: 5.2,
        searchVolumeScore: 91
    }
];
function getCitiesByState(stateAbbr) {
    return CITY_PROFILES.filter((city)=>city.stateAbbr.toLowerCase() === stateAbbr.toLowerCase());
}
function getCityProfile(stateAbbr, citySlug) {
    return CITY_PROFILES.find((city)=>city.stateAbbr.toLowerCase() === stateAbbr.toLowerCase() && city.slug === citySlug);
}
}),
"[project]/src/components/state-finder.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StateFinder",
    ()=>StateFinder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/translations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$states$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/states.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cities.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function StateFinder({ locale }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTranslations"])(locale);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const suggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!query.trim()) return [];
        const normalized = query.toLowerCase();
        const stateMatches = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$states$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATE_REGULATIONS"].filter((state)=>state.name.toLowerCase().includes(normalized) || state.abbr.toLowerCase().includes(normalized)).map((state)=>({
                label: `${state.name} (${state.abbr})`,
                href: `${locale === "es" ? "/es" : ""}/states/${state.abbr.toLowerCase()}`
            }));
        const cityMatches = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CITY_PROFILES"].filter((city)=>city.city.toLowerCase().includes(normalized)).map((city)=>({
                label: `${city.city}, ${city.stateAbbr}`,
                href: `${locale === "es" ? "/es" : ""}/cities/${city.stateAbbr.toLowerCase()}/${city.slug}`
            }));
        return [
            ...stateMatches,
            ...cityMatches
        ].slice(0, 6);
    }, [
        locale,
        query
    ]);
    const handleSubmit = (event)=>{
        event.preventDefault();
        if (!suggestions[0]) return;
        router.push(suggestions[0].href);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "card-glass relative mx-auto max-w-3xl rounded-3xl p-8 shadow-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-slate-900",
                        children: t.finder.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/state-finder.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-inner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "size-5 text-slate-400",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/state-finder.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: query,
                                onChange: (event)=>setQuery(event.target.value),
                                placeholder: t.finder.placeholder,
                                className: "flex-1 border-none bg-transparent text-sm text-slate-700 focus:outline-none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/state-finder.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg",
                                children: t.finder.button
                            }, void 0, false, {
                                fileName: "[project]/src/components/state-finder.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/state-finder.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-4 space-y-2 text-sm text-slate-600",
                        children: suggestions.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>router.push(item.href),
                                    className: "w-full text-left rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 hover:border-blue-300 hover:bg-blue-50",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/state-finder.tsx",
                                    lineNumber: 67,
                                    columnNumber: 19
                                }, this)
                            }, item.href, false, {
                                fileName: "[project]/src/components/state-finder.tsx",
                                lineNumber: 66,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/state-finder.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/state-finder.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/state-finder.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/state-finder.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/faqs.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CORE_FAQS",
    ()=>CORE_FAQS
]);
const CORE_FAQS = [
    {
        question: {
            en: "Will requesting a quote hurt my credit score?",
            es: "¿Solicitar una cotización afectará mi puntaje crediticio?"
        },
        answer: {
            en: "Most partner lenders perform a soft credit inquiry during pre-qualification so your score is not impacted. If you move forward with an offer, a hard pull may occur and you will be notified before it happens.",
            es: "La mayoría de nuestros socios realizan una consulta crediticia suave durante la pre-calificación, por lo que tu puntaje no se ve afectado. Si avanzas con una oferta, podría realizarse una consulta dura y te avisaremos antes de que ocurra."
        },
        intents: [
            "payday",
            "installment",
            "personal"
        ]
    },
    {
        question: {
            en: "Can I get funds the same day?",
            es: "¿Puedo recibir los fondos el mismo día?"
        },
        answer: {
            en: "Same-day funding depends on the lender cut-off time, your bank, and state regulations. Many installment lenders can deposit within 24 hours after approval when documents are signed early in the day.",
            es: "El financiamiento en el mismo día depende del horario límite del prestamista, tu banco y las regulaciones estatales. Muchos prestamistas a plazos depositan dentro de 24 horas después de la aprobación si firmas temprano en el día."
        },
        intents: [
            "installment",
            "personal"
        ]
    },
    {
        question: {
            en: "What fees should I compare?",
            es: "¿Qué comisiones debo comparar?"
        },
        answer: {
            en: "Always compare the APR, origination fees, late payment penalties, and any prepayment charges. Our calculators convert flat fees into APR so you can compare apples-to-apples across loan types.",
            es: "Compara siempre la APR, las comisiones de originación, las penalizaciones por pago tardío y cualquier cargo por pago anticipado. Nuestras calculadoras convierten tarifas fijas en APR para comparar entre tipos de préstamos."
        },
        intents: [
            "payday",
            "installment",
            "personal",
            "debt-consolidation"
        ]
    },
    {
        question: {
            en: "Is a payday loan legal in my state?",
            es: "¿Un préstamo payday es legal en mi estado?"
        },
        answer: {
            en: "Some states ban payday loans entirely while others cap the maximum fee or require a cooling-off period between advances. Use the state hub pages to review the latest restrictions and alternatives.",
            es: "Algunos estados prohíben por completo los préstamos payday, mientras que otros limitan las comisiones máximas o exigen periodos de espera entre adelantos. Visita el hub de tu estado para ver restricciones y alternativas actuales."
        },
        intents: [
            "payday"
        ]
    },
    {
        question: {
            en: "How does debt consolidation work?",
            es: "¿Cómo funciona la consolidación de deudas?"
        },
        answer: {
            en: "Debt consolidation combines multiple balances into a single installment loan or balance transfer with a potentially lower rate. It still requires consistent on-time payments to avoid additional interest charges.",
            es: "La consolidación de deudas combina varios saldos en un solo préstamo a plazos o transferencia de saldo con una tasa potencialmente menor. Aún requiere pagos puntuales para evitar intereses adicionales."
        },
        intents: [
            "debt-consolidation",
            "personal"
        ]
    },
    {
        question: {
            en: "What documents do I need to apply?",
            es: "¿Qué documentos necesito para aplicar?"
        },
        answer: {
            en: "Expect to provide proof of income, a government-issued ID, routing and account numbers for funding, and contact information. Some lenders also request employer verification or tax statements for larger loans.",
            es: "Debes presentar comprobante de ingresos, identificación oficial, números de cuenta y ruta bancaria, además de datos de contacto. Algunos prestamistas también solicitan verificación del empleador o declaraciones de impuestos para montos mayores."
        },
        intents: [
            "installment",
            "personal",
            "debt-consolidation"
        ]
    }
];
}),
"[project]/src/components/faq/faq-list.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaqList",
    ()=>FaqList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/translations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$faqs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/faqs.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function FaqList({ locale }) {
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTranslations"])(locale);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-5xl space-y-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "text-center space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-semibold text-slate-900",
                        children: t.faq.heading
                    }, void 0, false, {
                        fileName: "[project]/src/components/faq/faq-list.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto max-w-2xl text-base text-slate-500",
                        children: t.faq.intro
                    }, void 0, false, {
                        fileName: "[project]/src/components/faq/faq-list.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/faq/faq-list.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$faqs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORE_FAQS"].map((faq, index)=>{
                    const isOpen = openIndex === index;
                    const question = faq.question[locale];
                    const answer = faq.answer[locale];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setOpenIndex(isOpen ? null : index),
                                className: "flex w-full items-center justify-between gap-4 text-left",
                                "aria-expanded": isOpen,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-slate-800",
                                        children: question
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/faq/faq-list.tsx",
                                        lineNumber: 34,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl text-blue-500",
                                        "aria-hidden": true,
                                        children: isOpen ? "−" : "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/faq/faq-list.tsx",
                                        lineNumber: 35,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/faq/faq-list.tsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, this),
                            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm text-slate-500 leading-7",
                                children: answer
                            }, void 0, false, {
                                fileName: "[project]/src/components/faq/faq-list.tsx",
                                lineNumber: 40,
                                columnNumber: 17
                            }, this)
                        ]
                    }, `${faq.question.en}-${index}`, true, {
                        fileName: "[project]/src/components/faq/faq-list.tsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/faq/faq-list.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/faq/faq-list.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_4eee76ac._.js.map