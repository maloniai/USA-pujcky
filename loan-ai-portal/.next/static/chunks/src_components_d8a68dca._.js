(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/round-sky-widget.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoundSkyWidget",
    ()=>RoundSkyWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function RoundSkyWidget(param) {
    let { intent, pageId, formId = "INSTALLMENT_STEP", className } = param;
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoundSkyWidget.useEffect": ()=>{
            const srcURL = "https://www.rndframe.com/server";
            const jsonScriptId = "round-sky-json";
            const initScriptId = "round-sky-init-".concat(pageId);
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
                Domain: ("TURBOPACK compile-time truthy", 1) ? window.location.hostname : "TURBOPACK unreachable",
                Height: "AUTO",
                StepAmountSelect: "buttons",
                TargetDivID: "rsForm-".concat(pageId)
            };
            const initScript = document.createElement("script");
            initScript.id = initScriptId;
            initScript.type = "text/javascript";
            initScript.src = "".concat(srcURL, "/init.php?vn=").concat(encodeURIComponent(JSON.stringify(inputOptions)));
            initScript.async = true;
            document.body.appendChild(initScript);
            return ({
                "RoundSkyWidget.useEffect": ()=>{
                    initScript.remove();
                }
            })["RoundSkyWidget.useEffect"];
        }
    }["RoundSkyWidget.useEffect"], [
        formId,
        intent,
        pageId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "rsForm-".concat(pageId),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full", className)
    }, void 0, false, {
        fileName: "[project]/src/components/round-sky-widget.tsx",
        lineNumber: 63,
        columnNumber: 10
    }, this);
}
_s(RoundSkyWidget, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = RoundSkyWidget;
var _c;
__turbopack_context__.k.register(_c, "RoundSkyWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/compliance/tcpa-consent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TcpaConsent",
    ()=>TcpaConsent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function TcpaConsent(param) {
    let { privacyHref, termsHref, onChange, locale = "en" } = param;
    _s();
    const checkboxId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const [accepted, setAccepted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const copy = locale === "es" ? {
        consentPrefix: "Al enviar, aceptas que nosotros y nuestros socios de préstamos te contactemos al teléfono y correo proporcionados, incluso mediante marcadores automáticos y mensajes pregrabados.",
        consentSuffix: "El consentimiento no es condición de compra. Responde STOP para darte de baja.",
        privacy: "Política de Privacidad",
        terms: "Términos",
        compliance: "El sello de tiempo, dirección IP, agente de usuario y hash del texto de consentimiento se almacenan para cumplimiento. Puedes revocar el consentimiento en cualquier momento contactando soporte o respondiendo STOP."
    } : {
        consentPrefix: "By submitting, you agree to be contacted by us and our lending partners at the phone and email you provided, including by autodialer and pre-recorded messages.",
        consentSuffix: "Consent is not a condition of purchase. Reply STOP to opt out.",
        privacy: "Privacy Policy",
        terms: "Terms",
        compliance: "The timestamp, IP address, user agent, and consent text hash are stored for compliance. You can revoke consent at any time by contacting support or replying STOP."
    };
    const handleChange = (event)=>{
        const value = event.target.checked;
        setAccepted(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3 rounded-2xl border border-slate-200 bg-white/80 p-4 text-xs text-slate-500 shadow-inner",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: checkboxId,
                        type: "checkbox",
                        checked: accepted,
                        onChange: handleChange,
                        className: "mt-1 size-4 rounded border-slate-300 text-blue-500 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/compliance/tcpa-consent.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            copy.consentPrefix,
                            " ",
                            copy.consentSuffix,
                            " ",
                            locale === "es" ? "Consulta" : "See our",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "text-blue-600 underline",
                                href: privacyHref,
                                children: copy.privacy
                            }, void 0, false, {
                                fileName: "[project]/src/components/compliance/tcpa-consent.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            " ",
                            locale === "es" ? "y" : "and",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "text-blue-600 underline",
                                href: termsHref,
                                children: copy.terms
                            }, void 0, false, {
                                fileName: "[project]/src/components/compliance/tcpa-consent.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/compliance/tcpa-consent.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/compliance/tcpa-consent.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] text-slate-400",
                children: copy.compliance
            }, void 0, false, {
                fileName: "[project]/src/components/compliance/tcpa-consent.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/compliance/tcpa-consent.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(TcpaConsent, "Bo0aadYtMbiczsEE2z3+8g5HfaE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = TcpaConsent;
var _c;
__turbopack_context__.k.register(_c, "TcpaConsent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_d8a68dca._.js.map