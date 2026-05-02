# Changelog

All notable changes to CloudPi are documented here. Releases follow [semantic versioning](https://semver.org/).

---

## v1.1.026 — May 2 2026

### New Features
- **Cost Summary and Commitments reports** — Two new report types in the Reports library show cost rollups and commitment utilization at a glance.
- **Billing report totals** — Billing reports show per-page totals and a grand total for easier reconciliation.

### Improvements
- **Dashboard layout** — Billing reports moved to a dedicated Reports library section.

### Fixes
- **Schedule action picker** — Restored the *Select Schedule* picker on schedule actions; it was missing for some workspaces.
- **Organization structure view** — Loads reliably on multi-tenant accounts.
- **Quick filter bars** — Apply selections as expected.
- **Savings and budget totals** — Reconcile correctly on the dashboard; chart axis labels display properly across all date ranges.

---

## v1.1.025 — April 29 2026

### New Features
- **Verified Schedule Savings** — The Scheduler dashboard now reports the actual hours and dollars saved by each scheduled snooze, validated against billing data. Includes a 90-day history so schedules created before this release are credited.

---

## v1.1.024 — April 28 2026

### New Features
- **Optimization Savings dashboard** — Potential and Realized savings are now separated across the KPI tile, Top Services chart, and trend view, so opportunity and capture appear side by side instead of merged together.
- **Cost Anomaly controls** — Anomaly detection now supports configurable sensitivity and direction (`raise`, `drop`, or `both`) per policy, and auto-resolves recommendations once a spike subsides.

### Improvements
- **Optimization Savings card** — Renamed from "Savings Realized" to "Optimization Savings" to match the content (the card now shows both Potential and Realized).

### Fixes
- **Cost anomaly duplicates** — Stops generating duplicate recommendations within the same spike window for the same resource.
- **Project Detail pivot** — Fixed a calculation that returned different April totals depending on the active range filter.
- **Timezone handling** — Month boundaries are now classified consistently for non-UTC browsers across billing, forecast, and home widgets.
- **KPI description text** — Long descriptions wrap inside KPI tiles instead of being clipped.

---

## v1.1.023 — April 27 2026

### Improvements
- **Tagged Cost by Project tooltip** — Hovered chart segments now show the tag-value name (e.g. `Development: $44.22`) instead of bare currency.

### Fixes
- **Widget chart loader** — Renders correctly during data load.
- **Duplicate collection-permission alerts** — One-time cleanup of duplicate alerts; future duplicates are now prevented.

---

## v1.1.022 — April 27 2026

### New Features
- **Queue Dashboard** — Real-time view of background processing activity.
- **Server-side pagination for large reports** — Report Engine no longer freezes on large result sets; pagination is handled by the server with smooth in-place page transitions.
- **Tag filter operators** — Billing analysis filters now support `exists` and `not exists` on tag dimensions.
- **Purchases report** — New report type summarizing purchase activity across providers.
- **Azure SQL Database lifecycle actions** — Right-size and downgrade actions for Azure SQL Databases, including Premium → Standard transitions.

### Improvements
- **Default home page date range** — Defaults to the current month.
- **Budget and forecast accuracy** — Variance, forecast, and savings calculations now use till-date formulas; budget and forecast charts mark the current-month boundary with a dotted line.
- **Workflow billing views** — Saved workflow views preserve their name even when the underlying billing view is inactive.

### Fixes
- **Billing PDF export** — Uses the view's own cost metric instead of always falling back to billed cost.
- **Billing analysis advanced filters** — Resolved an error that appeared when many filter values were selected at once.
- **Notification bell** — Clear-all action works.
- **Multi-selector tick mark** — No longer shows a double tick.

---
