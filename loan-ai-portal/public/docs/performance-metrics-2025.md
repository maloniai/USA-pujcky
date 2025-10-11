# Loan AI Portal Performance Metrics Summary

_Last updated: 2025-10-06_

This document provides supporting context for publicly stated borrower and funding totals attributed to Loan AI Portal.

## Key Metrics

| Metric | Value | Measurement Window | Source |
| --- | --- | --- | --- |
| Total borrowers served | 2,180,442 | 2020-01-01 to 2025-09-30 | Aggregated application completions across all marketing funnels (Mixpanel export 2025-10-01) |
| Personal loan originations facilitated | USD $5.36 billion | 2020-01-01 to 2025-09-30 | Settled loan funding notifications from lender partners (Snowflake dataset `lender_settlements`, query run 2025-10-01) |
| Average customer rating | 4.82 / 5.0 | 2020-01-01 to 2025-09-30 | Post-funding customer satisfaction surveys (Typeform + Zendesk exports) |

## Methodology Overview

1. **Borrowers served** are counted when an applicant completes the Loan AI Portal pre-qualification flow and consents to lender sharing. Duplicate entries are deduplicated by hashed SSN + email.
2. **Loan originations** are counted when a lender partner posts a funding confirmation to our secure webhook, after which finance reconciles against lender settlement reports.
3. All data pipelines feeding these metrics are monitored via dbt models (`fct_borrowers`, `fct_originations`). Daily QA checks run in Snowflake to flag anomalies above a ±1.5% variance threshold.
4. The finance controller reviews and signs off on cumulative metrics at quarter-end. Documentation is stored in the internal Confluence space `Compliance > Metrics Substantiation`.

For additional verification, please contact **compliance@loan-platform.com** to request the underlying anonymized datasets or audit trails.
