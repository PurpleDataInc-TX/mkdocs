# Changelog

All notable changes to CloudPi are documented here. Releases follow [semantic versioning](https://semver.org/).

---

## v1.1.048 — June 30 2026

### New Features
- **OAuth2 Email Integration** — Connect your email provider with OAuth2 (Microsoft / Google) instead of storing a password, for a more secure email setup.
- **Unified Cross-Cloud Budgets** — A single project budget now tracks spend across every connected cloud (AWS, Azure, GCP, and Databricks), so you no longer need a separate budget per provider — alerts fire on the combined spend.
- **Databricks Tag Governance** — New checks flag Databricks resources that are untagged, missing required tags such as Owner or Cost Center, or carrying deprecated tags, helping keep cost allocation and ownership clean.
- **Cost by Resource Type** — Billing Analysis can now group and break down costs by resource type in the cost details view.

### Improvements
- Onboarding now discovers your accounts and projects from the connected identity when organization-level access isn't available, so AWS and GCP onboarding succeeds even without Organizations access.
- The Home dashboard now leads with your total spend alongside Projected, Budget, and month-over-month cards, with the Cost vs Budget figure linking straight to the Budget page, plus a last-synced indicator.
- The Projects list is now spend-first, showing per-project and per-rule cost with month-over-month movement, and you can open a project's cost rules inline.
- Activity logs have been redesigned with a health summary, an activity timeline, clearer status indicators, quick filters, and export.

### Fixes
- Cloud connection tests for GCP and Azure credentials now work correctly.
- The Policy & Workflow Builder now shows policy details even when a workflow hasn't been created yet.

---

## v1.1.047 — June 25 2026

### Improvements
- The Policy & Workflow Builder now supports undo and redo, automatically saves your work as you go, and asks for confirmation before you discard unsaved changes.

### Fixes
- Actions in the builder now require their mandatory fields to be filled in before saving, with inline prompts and an "Incomplete" marker on any card that's missing details.
- Picking an action, scope, or delay step from the builder palette now reliably opens or selects it.
- Rule value pickers now show only real values from the organization you select — no placeholder samples, and no values carried over from other or deleted organizations.
- The ticket-provider picker now lists only the providers you've configured, and due dates display correctly when editing a ticket.
- Newly onboarded cloud providers now appear right away, without needing a refresh.
- Removing a cloud organization no longer disturbs cost-allocation rules that apply across your whole workspace.

---

## v1.1.046 — June 24 2026

### New Features
- **Visual Policy & Workflow Builder** — Build and review optimization policies on a new drag-and-connect canvas. A three-panel layout lets you pick policies from a palette, arrange them visually, and inspect each one inline — with View and Edit modes, pan and zoom, and the ability to insert a step anywhere in the flow. Policy cards show how many resources match, per-policy outcome counts, and the run and action history right in the inspector.
- **Workspace-Wide Cost-Allocation Rules** — Cost-allocation rules are now organized at the workspace level, so all your rules are managed in one place and the project rule picker shows them regardless of which cloud they belong to. Each rule is still scoped to a specific cloud and account, and your cost overview shows the workspace total alongside an assigned-versus-unassigned breakdown by organization.
- **Connect AWS Without Access Keys** — You can now onboard AWS accounts using the IAM role attached to your CloudPi environment instead of static access keys, with optional cross-account access. Choose "Instance profile" during onboarding and CloudPi handles the rest — no secret keys to store or rotate.
- **Databricks Optimization Recommendations** — CloudPi now generates cost-savings recommendations for your Databricks clusters: it flags idle clusters, over-provisioned clusters, and clusters missing auto-termination, with estimated savings for each.

### Improvements
- Databricks spend and savings now appear throughout your reports and dashboards, including Top Services by Savings, the Optimization Savings Trend, and the Home total-cloud-spend legend.
- Cost-allocation rules can now match on individual resource IDs and names against your full workspace data.
- Weekly and monthly billing breakdowns now carry the same detailed cost dimensions as the daily view, so period rollups stay consistent with day-level analysis.
- Cloud connection tests now allow more time to complete, so onboarding no longer fails for slower environments.

### Fixes
- The project rule picker now shows all of your workspace rules regardless of cloud or account, and hides rules already assigned to a project.
- Duplicate collection-permission alerts for the same credential and service are no longer raised.
- Temporary cloud errors and input-validation issues no longer trigger false "permission" alerts; only genuine access-denied errors do.
- The Total Forecast / budget card now shows your stored annual budget instead of a sum of rounded monthly values.
- Editing a rule no longer flags it as overlapping or duplicating itself during a dry run, and deleting a rule that isn't tied to a specific organization no longer fails.

---

## v1.1.045 — June 20 2026

### New Features
- **Databricks Cost Management** — CloudPi now supports Databricks as a cloud platform. Connect your Databricks environment (running on AWS, Azure, or GCP) and see your Databricks usage and spend alongside your other clouds in billing analysis and on your dashboards.
- **Resource-Level Cost Allocation** — Cost-allocation rules can now match on individual resource IDs and names, with value pickers to choose from, so you can attribute spend down to specific resources.

### Improvements
- Comparative analysis now shows the cost difference and percentage change between periods directly, making period-over-period shifts easier to read at a glance.
- The Home spend trend now compares like-for-like across months, and Budget Health reflects your full fiscal year.
- The top filters and header in billing analysis were refreshed for a clearer, more consistent layout.

### Fixes
- Billing analysis now shows only approved project groups; unapproved groups no longer appear in your cost breakdowns.
- Budget totals now match your stored annual budget, and project groups no longer appear twice in the Budget Summary.
- Analysis tables and charts now show a clear placeholder for missing names instead of blank values.
- Comparative analysis pagination now navigates between pages, and saved billing views keep only valid projects.

---

## v1.1.044 — June 11 2026

### New Features
- **Customizable Home Dashboard** — Your Home page is now a personalized dashboard you can arrange to suit your team: move and resize the spend, budget, cost-by-project, cost-by-category, recommendation, and alert panels, and your layout is saved for next time.
- **Project Group Breakdown** — Billing analysis can now group spend by project group, so you can see costs rolled up to your larger business units instead of only individual projects.

### Improvements
- Scheduling savings estimates now use your actual billed hourly rate across AWS, Azure, and GCP, so the projected savings for start/stop schedules reflect what you were really charged.
- Saved billing views now keep their filters when you navigate away and come back, and reopen on the analysis page they were created from.
- AWS billing data is now imported more reliably and accurately, including cleaner cost and tag breakdowns.

### Fixes
- Budget alert emails now show correctly formatted amounts in your selected currency and identify each alert by its budget — no more missing or malformed values.
- The Delivery History view now lists every record reflected in its summary count.

---

## v1.1.043 — June 8 2026

### New Features
- **Advanced Cost-Allocation Rules** — Build cost-allocation categories from nested, multi-condition rules using match-all or match-any logic in a guided builder, with a live cost preview and built-in overlap detection so you can see exactly what spend each rule captures before you save it.

### Improvements
- Comparative analysis now offers a bar or stacked chart view, a compact run-rate summary, and a lineage column that traces the value you drilled in from.
- Shared cost and comparative views now resolve project and project-group names and show accurate totals across all compared periods.
- Optimization recommendations now focus on the current month and show one row per group, removing duplicate rows and outdated date-range options.

### Fixes
- Advanced filters now apply correctly in billing and comparative analysis, including the headline totals.
- Tag breakdowns no longer fail when a tag name contains special characters.
- Anomaly analysis now defaults to all of your projects.
- Cost-allocation views refresh their coverage figures immediately after you add, edit, or remove a rule, and display multi-condition rules clearly.

---

## v1.1.042 — June 5 2026

### New Features
- **Comparative Analysis** — A new comparative view shows your cost run-rate side by side across periods at month, week, or day granularity, with headline totals and highest-spending breakdowns, so you can see at a glance how spend is shifting from one time window to the next.
- **Dimension Coverage** — Each cost-allocation dimension now shows a coverage summary, so you can see how much of your spend is mapped to your business categories and where gaps remain.
- **Scale Set Optimization** — CloudPi now flags idle and over-provisioned Azure Virtual Machine Scale Sets and recommends scaling them down or enabling autoscaling to cut spend.

### Improvements
- Charts across the dashboard and billing analysis now use a single consistent color set, so the same category keeps the same color from one chart to the next.
- Cost and analysis views now show project and project-group names everywhere — including shared views — instead of internal identifiers.
- Comparative analysis now opens on first visit and defaults to all projects, and the Quick Filters were refined into a clearer labelled bar.

### Fixes
- Billing analysis now shows clear, plain-language messages instead of raw error codes, and no longer displays blank values when a total is zero.
- Shared billing and comparative views now reliably load the latest saved view, render their charts (including all-projects views), and keep your drill-down position.
- All-caps cost tags are now preserved instead of being merged with their lowercase variants, so tag breakdowns are accurate.
- Removed a duplicate report label and corrected several billing analysis display issues.

---

## v1.1.041 — June 1 2026

### New Features
- **Cost Allocation** — Define your own cost-allocation dimensions and group cloud spend by rule-based business categories, with built-in overlap detection that warns you before two rules double-count the same cost.
- **App Service Plan Optimization** — CloudPi now detects idle and over-provisioned Azure App Service Plans and recommends removing or right-sizing them, and you can schedule App Service Plans for start/stop and right-sizing the same way you schedule virtual machines, SQL databases, and Cosmos DB.
- **Azure Cache for Redis** — New recommendations flag over-provisioned Azure Cache for Redis instances so you can right-size them and cut spend.
- **Scale Set Scheduling** — Schedule Azure Virtual Machine Scale Sets to a fixed instance count on your chosen windows.
- **Drill-Down Everywhere** — Drill-down now works across Trend, Comparative, and Anomaly analysis, not just Cost Analysis, and you can drill by your custom cost dimensions with lineage columns that show the path you took.

### Improvements
- Scheduling views now show estimated monthly savings for each scheduled resource, with more accurate figures that exclude savings already realized.
- Cost Analysis charts now load independently, so the page becomes interactive faster and individual charts no longer wait on one another.
- The scheduler now explains, in plain language, why a particular resource can't be scheduled or what happens during a scheduled change, instead of leaving it unclear.
- Refreshed the Savings summary cards in Billing Analysis for a consistent look with the Budget and Optimization views.

### Fixes
- Report sharing now detects failed email deliveries and automatically archives shares whose underlying report has been deleted.
- Cost Analysis detail tables now paginate correctly and show all relevant columns, and grouped values no longer collapse into "Unknown".
- Budget charts now cover the full fiscal year, and shared Cost Analysis views no longer error when a Top N limit is applied.
- Dashboard fixes: corrected KPI card alignment, chart legend paging, tooltip accuracy, and project axis labels.

---

## v1.1.040 — May 22 2026

### Improvements
- Azure VM shutdown schedules now estimate weekend savings from the actual recommended weekend window instead of assuming a full weekend off, giving more accurate projected savings.

### Fixes
- Resolved a data formatting issue that could affect tag and category breakdowns in monthly and weekly cost views.

---

## v1.1.039 — May 21 2026

### New Features
- **Home** — A new Billing Analysis card on the Home landing page gives one-click access to billing insights.

### Improvements
- Recommendation savings estimates are now based on effective cost — the true cost after reservations and savings plans — for greater accuracy.
- Monthly cost forecasts now follow your configured cost type, keeping projected spend consistent across CloudPi.

### Fixes
- Cost Analysis drill-down tables now show project names instead of internal IDs.
- Cost Analysis drill-downs are more accurate: drilling into a single value no longer adds a stray "Others" entry, and detail tables now break down consistently with the chart.
- Tag-value breakdowns in Cost Analysis now respect the filters applied to the view.
- Editing the Cost Analysis grouping now refreshes results immediately and keeps the view in sync, instead of briefly showing stale data.
- Cost Analysis chart totals now match the totals shown in the table below them.
- Cost Analysis weekly totals now match the daily and monthly views for the same date range.
- Azure VM recommendation savings now use standard on-demand pricing instead of occasionally picking up Spot or Low-Priority rates, which understated the figures.

---

## v1.1.038 — May 20 2026

### New Features
- **Cosmos DB Scheduling** — Schedule start/stop windows and automatic right-sizing for Azure Cosmos DB databases and containers, the same way you already schedule virtual machines and SQL databases.
- **Cost Analysis drill-down** — Drill into Cost Analysis straight from the chart or table: click any segment to break it down further, retrace your path with a breadcrumb trail, customize the drill hierarchy, and drill by tag. Your drill position is saved with the view and carried through when you share or schedule it.

### Improvements
- Recommendations for Azure VM shutdown windows now judge low-usage periods by sustained utilization rather than simple averages, so brief activity spikes no longer hide a real shutdown opportunity.
- Estimated savings on the FinOps dashboard no longer count already-realized recommendations, so the figures match the Estimated Savings shown elsewhere in the product.
- The scheduler now explains why a particular database instance can't be scheduled instead of leaving it silently unavailable.
- Billing filters are easier to use: a one-click "Reset All", a searchable Tag Key selector, and tag filters grouped together at the top.
- Added a safety guardrail that stops CloudPi's automated actions from ever targeting its own hosting infrastructure.
- Logging out now asks for confirmation in an in-app dialog.

### Fixes
- Shared and scheduled billing views now keep your Cost Analysis column selection, and shared tables no longer expand to every column.
- Scheduled reports and delivery history show the correct details regardless of which report they were created from.
- Corrected Cost Analysis breadcrumb, titles, grouping, month presets, and duplicate rows in multi-metric tables.
- Budget alerts no longer send duplicate notifications.
- New workflows now default their due date to seven days out.
- Smaller fixes to Cloud Inventory, the page footer, date pickers, and rule reordering.

---

## v1.1.037 — May 15 2026

### New Features
- **Recommendation-linked savings** — Optimization Analysis, Home, Scheduler, and Recommendation pages now show savings tied to the specific recommendation that delivered them, instead of an aggregate estimate.

### Improvements
- "Potential Savings" is now consistently labeled "Estimated Savings" across the product, matching how the figures are calculated.
- Policy Management hides the Mode setting on cost-optimization policies where it wasn't applicable.

### Fixes
- Billing Analysis now refreshes the chart correctly when you switch between presets in the dropdown.

---

## v1.1.036 — May 14 2026

### New Features
- **Share billing views** — Schedule shared deliveries of billing-analysis views (Cost Analysis, Period Comparison, Anomaly, Inventory, and others) the same way you already share dashboards. Shared links open a viewer that respects the saved filters, picks the right chart per analysis type, and shows only the data the recipient is permitted to see.
- **Azure Cosmos DB optimization** — New optimization recommendations for Azure Cosmos DB at the database and container level. Identifies idle shared-throughput databases and dedicated-throughput containers, and recommends lowering provisioned RU/s when actual consumption has stayed well below provisioned capacity over the last 30 days.
- **Azure SQL DTU right-sizing** — New right-sizing recommendation for Azure SQL Databases on the DTU purchase model (Standard, Premium). Flags overprovisioned databases by analyzing DTU consumption and proposes a smaller within-tier SKU without changing the database's purchase family.
- **Savings Analysis column selector** — Pick which columns appear in Savings Analysis so the view focuses on what matters to your workflow.

### Improvements
- The Savings dashboard now uses daily actual cost for accurate day-level savings tracking, and includes baseline columns so you can compare the unmitigated cost against the realized savings.
- The Savings trend chart supports a chart-type toggle (line / bar) and a clickable legend so you can quickly isolate a series.
- Savings views now support dynamic grouping and multi-select filters for faster drill-down.
- Azure idle and right-sizing detection is now based on sustained usage rather than simple averages or totals — brief activity spikes no longer hide a long-running idle pattern, and brief idle stretches no longer mask sustained over-provisioning.
- Saved billing views now show their analysis type as a column for quicker lookup.
- Schedule History clearly labels each schedule with the report it delivers.
- Cost and Budget charts now show axis titles.

### Fixes
- Currency symbols no longer appear next to count-style KPI tiles, and currency formatting is consistent across bar, line, and pie charts on saved views.
- The Anomaly view is now correctly applied when navigating from Views & Reports.
- Several saved-view share fixes so the time range, currency, and filters are preserved correctly between save and viewer.
- Date and label corrections on the Savings dashboard, plus a copy-link reliability fix on share dialogs.

---

## v1.1.035 — May 13 2026

### Improvements
- Tag Compliance KPI labels and descriptions have been rewritten for clarity.

### Fixes
- Tag governance reports now use the correct end date for the selected range.

---

## v1.1.034 — May 12 2026

### Improvements
- Top Projects on the Executive Summary no longer includes a per-cloud-provider breakdown; the table now groups by Billing Entity → Project Group → Project.
- Tag governance summaries now aggregate by month for accurate resource counts and faster loads.
- Typography and layout polish across the app.

### Fixes
- Variance on the FinOps Scorecard now shows the actual variance value on every project row (previously some rows appeared blank while the Grand Total stayed populated).
- Resolved a login regression so signing in works reliably again.
- Fixed the billing view so its pages load under the correct workspace.
- Corrected currency labels on the billing screens.
- Resolved an error that intermittently blocked access to the report screens.

---

## v1.1.033 — May 11 2026

### New Features
- **Azure SQL Database scheduler** — Schedule pauses and resizes for Azure SQL Databases the same way you already do for VMs. Works across DTU, provisioned vCore, and serverless vCore databases, with pause / resume controls, a tier-aware resize picker, and a cutover history view so you can see when each change happened and why.
- **Azure SQL right-sizing** — Automatically identify Premium and Standard Azure SQL Databases that are over-provisioned for their actual usage, and resize them within the same tier to cut cost without changing the database's performance class.
- **Tag value breakdown** — Drill into a tag key to see how cost breaks down across each individual tag value, with cost-at-risk surfaced on the tag-conflict views so you can prioritize which conflicts to fix first.
- **More report cadences** — Schedule report deliveries on a Quarterly or Half-monthly cadence in addition to the existing Daily, Weekly, and Monthly options.

### Improvements
- Changing the workspace currency now shows an explicit warning before signing you out, so you can confirm the change instead of being signed out unexpectedly.
- Utilization metrics on resource detail views read more clearly, with labels that adapt to the underlying unit.

### Fixes
- Several dashboard polish fixes: y-axis titles now render, scorecard variance labels are accurate, scrolling on a chart no longer hijacks the page, the cloud-provider chart picks the right fallback when data is missing, and budgets cards correctly label month-to-date totals.
- Resolved a set of report-sharing issues — share links authenticate correctly, delivery history populates, and downloading a dashboard from a shared link works as expected.

---

## v1.1.027 — May 4 2026

### New Features
- **Per-project automation controls** — Each project now has its own switches to turn cost recommendations and automated remediation on or off, so you can opt in selectively instead of only at the organization level. The Workflows area honors the setting: when automation is off, new workflows can't be created and existing workflows display in view-only mode. Turning automation off at the organization level also disables it for the projects underneath.
- **Workspace currency** — Pick the currency for a workspace so cost reports and dashboards display in your preferred currency.

### Fixes
- Commitments reports now show accurate totals and breakdowns.
- Billing analysis filters for currency, cloud provider, granularity, and optimization date now apply as expected.

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
