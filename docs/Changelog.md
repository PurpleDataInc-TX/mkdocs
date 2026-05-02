# Changelog

All notable changes to CloudPi are documented here. Releases follow [semantic versioning](https://semver.org/).

---

## v1.1.026 — May 2 2026

### New Features
- **Cost Summary and Commitments reports** — Two new reports in the Reports library show your overall cost roll-up and how well you are using purchased commitments, all on one screen.
- **Page totals on billing reports** — Billing reports now show subtotals on each page and a grand total at the bottom, making reconciliation faster.

### Improvements
- **Cleaner dashboard** — Billing reports moved off the main dashboard into a dedicated section in the Reports library.

### Fixes
- The schedule picker on the schedule action is back; some workspaces previously saw an empty list.
- The organization structure view now opens reliably for accounts with multiple subsidiaries.
- Quick filter bars apply selections as expected.
- Savings and budget totals on the dashboard reconcile to the underlying reports, and chart labels show correctly across all date ranges.

---

## v1.1.025 — April 29 2026

### New Features
- **Verified Schedule Savings** — The Scheduler dashboard now reports the actual hours and dollars saved by each scheduled shutdown, validated against your cloud bill rather than estimated. Includes a 90-day history so schedules created before this release are credited too.

---

## v1.1.024 — April 28 2026

### New Features
- **Potential vs Realized Optimization Savings** — The Optimization Savings dashboard now separates opportunity (Potential) from capture (Realized) across the headline tile, the Top Services chart, and the trend view, so you can see what's been acted on and what's still on the table.
- **More controllable Cost Anomaly detection** — You can now tune how sensitive each anomaly policy is and choose whether it flags cost spikes, cost drops, or both. Recommendations also clear themselves automatically once a flagged spike returns to normal.

### Improvements
- The Savings card on the home page is now labelled "Optimization Savings" to match what it actually shows (both Potential and Realized).

### Fixes
- A duplicate cost-anomaly recommendation is no longer created for the same resource while a spike is still active.
- The project detail breakdown now shows the same April totals regardless of the date range filter.
- Reports and dashboards now show consistent monthly totals regardless of your browser's local time zone.
- Long descriptions inside summary tiles now wrap onto multiple lines instead of being cut off.

---

## v1.1.023 — April 27 2026

### Improvements
- **Tagged Cost by Project tooltip** — Hovering a chart segment now shows the tag value as well as the amount (for example `Development: $44.22`), instead of just the dollar figure.

### Fixes
- The loading indicator on dashboard charts now displays correctly while data is being fetched.
- Removed a backlog of duplicate notification alerts and prevented future duplicates so you only see each issue once.

---

## v1.1.022 — April 27 2026

### New Features
- **Queue Dashboard** — A new dashboard shows scheduled jobs and automation runs in real time, so you can see what's running and what's queued without refreshing.
- **Smoother large reports** — Long reports now load page by page in the background instead of freezing the browser, and moving between pages keeps the previous page visible until the next one is ready.
- **Filter by tag presence** — Billing analysis filters now let you select resources that have a given tag at all (or that are missing it), in addition to matching specific tag values.
- **Purchases report** — A new report summarizes purchase activity (commitments, reservations) across providers in one view.
- **Azure SQL Database optimization** — New automated actions to right-size Azure SQL Databases or downgrade Premium tiers to Standard for better cost efficiency.

### Improvements
- The home page now defaults to the current month instead of the previous date range.
- Budget, forecast, savings, and variance calculations now compare equivalent periods (for example month-to-date against month-to-date), and budget and forecast charts use a dotted line to show the current-month progress.
- Workflows that reference a billing view keep displaying the saved view name even after the underlying view is deactivated.

### Fixes
- The billing PDF export now uses whichever cost metric is selected on the view (for example effective cost or list cost), instead of always exporting the default amount.
- Billing analysis no longer errors out when a large number of filter values are selected at once.
- The notification bell's clear-all action works reliably.
- The custom multi-selector no longer shows two ticks on the same option.

---
