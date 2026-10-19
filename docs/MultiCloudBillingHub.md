# Multi Cloud Billing Hub

Welcome to your central billing command center! The CloudPi Multi-Cloud Billing Hub offers a comprehensive solution for managing and analyzing billing data across various Cloud Service Providers (CSPs). This hub allows you to create tailored billing views to monitor expenditures based on different dimensions like services, service groups, and user-defined cost tags.

---

## Key Features

**Billing Analysis** - Delivers insights to optimize your cloud spending with multiple analysis types

**Customizable Billing Views** - Easily configure views based on specific dimensions to better understand your cloud expenses

**Invoice Customization and Delivery** - Customize and automatically generate invoices tailored to your organizational needs

**Managed Cloud Services Provider Support** - Receive specialized billing services designed for Managed Cloud Service Providers

---

## Billing Analysis

Billing Analysis delivers insights to optimize your cloud spending. It provides powerful visualization and tabular views to help teams understand cost patterns, detect anomalies, and identify optimization opportunities.

### Accessing Billing Analysis

1. From the left navigation menu, click on **Billing Hub**
2. Select **Billing Analysis**
3. The Billing Analysis page opens with Quick Filters and visualization options

### Quick Filters

The Quick Filters bar at the top of the page covers the most-used controls. You set them once, click **Apply**, and the chart and table refresh.

| Filter | Options | Notes |
|--------|---------|-------|
| **Analysis Type** | Cost / Anomaly / Trend / Comparative / Budget / Optimization / Preset / Savings | Selected from the breadcrumb at the top of the page rather than the filter bar. See [Analysis Types](#analysis-types) |
| **Projects** | Multi-select from your assigned projects | Several analysis types need at least one project — see [Which analysis types are available](#which-analysis-types-are-available) |
| **Granularity** | Daily / Weekly / Monthly | How time-series data is bucketed |
| **Date Range** | 7d / 30d / 60d / 90d / Custom | Maximum range is 120 days. Not shown for Budget or Comparative — those set their own periods |
| **Group By** | Service Name, Region, Sub Account and more — plus your tags and your Cost Assignment Dimensions | The primary grouping. It drives the chart and is the first level you drill from. Not shown for Budget or Preset, whose grouping is fixed |
| **Tag Key** / **Tag Values** | Your tag keys and their values | Appear only when **Group By** is set to a tag. The key is required; leaving values empty shows every value for that key |
| **Grouping Hierarchy** | A pre-set drill path | Anomaly, Trend and Comparative only. Older control — drill levels are now normally chosen as you go |
| **Preset Report** | Your available preset reports | Preset analysis only |

**Auto-hide on Apply** — A toggle on the right of the Quick Filters bar. When on, the filter panel collapses after you click Apply, freeing up screen space for the chart and table.

Filter selections persist as you move between pages within the same session, so you do not lose your setup if you navigate away and come back.

#### Controls that are not in the filter bar

Three controls people commonly look for in Quick Filters live elsewhere:

- **Top N (Limit)** — at the top-right of the chart itself. It caps how many items the chart draws, rolling the remainder into *Others*.
- **Cost Type** — in the [Advanced Filters](#advanced-filters) sidebar, and only for the analysis types that let you choose one. Cost, Anomaly, Savings and Preset always total on your workspace's configured cost type, so they show no control.
- **Cloud Service Provider** — no longer offered as a filter. The provider is readable from the data itself: **Host Provider** and **Service Provider** are billing dimensions you can group by or filter on.

#### Default filter state

Opening Billing Analysis without changing anything gives you:

| Control | Default |
|---------|---------|
| Analysis Type | **Cost Analysis** |
| Group By | **Service Name** |
| Granularity | **Monthly** |
| Date Range | The last **60 days** |
| Top N | **10** |
| Cost Type | Your workspace's configured cost type |
| Specific filters, tag filters, Dimension scope | None applied |

Click **Advanced Filters** in the sidebar (left) to access additional dimension-specific filters — see [Advanced Filters](#advanced-filters).

### Analysis Types

The Analysis Type selector provides eight different ways to look at your billing data. Each type drives a different chart, a different default set of dimensions, and (for some types) a different summary panel.

#### Which analysis types are available

You may not see all eight. The list is filtered two ways:

- **By what your workspace has configured.** The available types are served from the backend catalogue, so a type with nothing configured behind it does not appear. Anomaly and Preset always show.
- **By whether you have projects.** With no projects assigned, only **Cost**, **Anomaly**, **Trend** and **Comparative** appear — those can report organisation-wide. Budget, Optimization, Savings and Preset all need a project scope.

![Analysis Type dropdown](images/billing-analysis-dropdown.png)

#### 1. Cost Analysis

Resource-level cost detail with time-series visualization. This is the everyday workhorse view: pick a primary dimension (Service Name, Account, Region, etc.) and you get a chart of costs over the date range, plus a detailed table grouped by that dimension.

**What's on the page:**

- **Chart** — Bar / Stacked / Area / Line. Click the chart-type buttons in the top-right corner of the chart to switch between them. Each series corresponds to one value of the Primary Group By (e.g., one bar per service).
- **Detailed Data** table — one row per dimension value, plus a Grand Total row. The columns visible are configurable via the **Columns** dropdown above the table; you can add Region, Account, or any other dimension as additional columns.
- **Search this page** — quick filter inside the table.
- **Pagination** — Rows per page (default 10) and standard page navigation.

**Use Cost Analysis when** you want to break down spend by an arbitrary dimension over a time window — what services cost most this month, which accounts grew the most, where is regional cost concentrated, and so on.

![Cost Analysis view](images/billing-analysis-cost-analysis.png)

#### 2. Anomaly Analysis

Detect unusual spending patterns and cost spikes across your cloud environment.

**Features:**

**Cost Trend: Service** - Area chart showing monthly cost breakdown by service (Top 10) 

- Displays Billed Cost over time with color-coded services
- Interactive legend - click on service names to show/hide specific services
- Services include: Virtual Machines, Virtual Network, Load Balancer, Azure SQL Database, Azure Private Link, Storage Accounts, etc.

**Detailed Data Table:**

Below the chart, a detailed table shows:

**Service** - Name of the cloud service

**Billed Cost (by month)** - Cost for each month

**Spike** - Indicates if there was a cost spike

**Total** - Total billed cost for the service

![Anomaly Analysis](images/billing1.png)

![Anomaly Analysis - Detailed Data](images/billing2.png)

#### 3. Trend Analysis

Monthly cost trends with moving average and cumulative totals to understand spending patterns over time.

**Features:**

**Cost Trend Chart** - Line chart showing monthly trend analysis

**Actual Cost** - Real spending for each period

**Cumulative** - Running total of costs over time

**Moving Average** - Smoothed trend line to identify patterns

**Detailed Data Table:**

**Service** - Name of the cloud service

**Actual** - Actual cost for the period

**Mov Avg** - Moving average cost

**Cumulative** - Cumulative total cost

![Trend Analysis](images/billing3.png)

![Trend Analysis - Detailed Data](images/billing4.png)

#### 4. Comparative Analysis

Compare costs across multiple time periods to identify changes and growth patterns.

**Features:**

**3-Month Comparison** - Compare costs across three consecutive months (e.g., Nov 2025 → Dec 2025 → Jan 2026)

**Comparative Analysis Chart** - Grouped bar chart showing period comparison for top dimensions

**Interactive legend** - Show/hide specific months

**Detailed Data Table:**

**Service** - Name of the cloud service

**Month 1 Cost** - Cost for first comparison month

**Month 2 Cost** - Cost for second comparison month

**Difference ($)** - Dollar difference between periods

**Change (%)** - Percentage change (highlighted in red for increases, green for decreases)

**Month 3 Cost** - Cost for third comparison month

The table highlights significant changes:
- **Red badges** indicate cost increases (e.g., +411.62%)
- **Green badges** indicate cost decreases (e.g., -85.04%)

**Use Comparative Analysis when** the question is *"what changed?"* rather than *"what are we spending?"* — month-end reviews, explaining a bill that jumped, or checking whether an optimisation actually took effect. It answers with a period-over-period difference and a percentage per service.

Use [Cost Analysis](#1-cost-analysis) instead when you want the current picture at resource level: what is running, what it costs, and where the money sits right now. A rough rule — Cost Analysis for *how much*, Comparative for *how much more (or less) than before*. Comparative sets its own three-month periods, which is why the Date Range control is hidden while you are in it.

![Comparative Analysis](images/billing5.png)

![Comparative Analysis - Detailed Data](images/billing6.png)

#### 5. Budget Analysis

Track budget consumption and compare actual spending against allocated budgets. Use this view to see at a glance whether projects are on track, where forecasted spend will land, and which periods are over or under budget.

!!! note "Requires configured budgets"
    Budget Analysis only works if budgets have been set up for your projects. If no budgets are configured, the page shows a message prompting you to configure them first. See your administrator if you have permission to create budgets.

**What's on the page:**

A fiscal-year selector (e.g., **FY 2026 (Jan–Dec)**) in the top-right scopes everything below to that fiscal period.

**Budget Performance Overview** — four KPI cards:

| Card | Shows |
|------|-------|
| **Total Budget** | Total allocated budget for the period |
| **Total Cost** | Current actual spend, with an **On Track** / **Off Track** badge based on pace vs. budget |
| **Total Forecast** | Forecasted spend for the remainder of the period |
| **Projected Cost** | Total expected spend for the full period (current + forecast). A warning icon appears if the projection exceeds the budget |

**Budget Utilization** — progress bar showing spend as a percentage of budget (e.g., *$336.8 / $500.0 (67%)* with *$163.28 remaining*).

**Budget vs Spend chart** — a multi-series line chart spanning the fiscal year. Four series:

- **Budget** — the allocated monthly budget line
- **Spend** — actual spend per month (already incurred)
- **Forecast** — predicted spend for upcoming months
- **Projected** — total trajectory line combining actual and forecast

Click any series in the legend to show or hide it.

**Budget Variance Details** — table at the bottom showing one row per budget period (or per project, depending on the budget definition):

| Column | Description |
|--------|-------------|
| **Period** | Project or period name |
| **Budget Allocated** | Budget assigned to this period |
| **Spend** | Actual spend so far |
| **Forecast** | Predicted remaining spend |
| **Projected Cost** | Total projected spend |
| **Variance Amount ($)** | Dollar difference between budget and projected cost |
| **Variance Percentage (%)** | Percentage difference |
| **Remaining Budget** | Budget left if projection holds |
| **Status** | **Under Budget** / **On Track** / **Over Budget** badge |

The **All Statuses** filter above the table lets you narrow to only Over Budget rows when reviewing problem areas.

**Use Budget Analysis when** you want to monitor financial performance against allocated budgets, identify projects trending over budget before they breach, and review month-by-month variance for FinOps reporting.

![Budget Analysis view](images/billing-analysis-budget-analysis.png)

#### 6. Optimization Analysis

Identify cost optimization opportunities and track realized savings.

**Features:**

**Optimization Savings Summary Cards:**

**Potential Savings** - Total opportunity identified for cost reduction

**Realized Savings** - Amount captured through automation (with "Achieved" badge)

**Remaining Opportunity** - Available savings still to capture

**Realization Rate** - Percentage of potential savings achieved (with Fair/Good/Excellent rating)

**Alert Banner:**
When significant optimization opportunities are available, an alert displays: "You have $X in remaining optimization opportunities. Your current realization rate is X%. Implementing these recommendations could significantly reduce your cloud costs."

**Top Savings Opportunities:**
- Horizontal bar chart showing top 9 dimensions with highest potential savings
- Services ranked by potential savings amount

**Optimization Savings Breakdown Table:**

**Service** - Name of the cloud service

**Potential Savings** - Identified savings opportunity

**Achieved Savings** - Savings already realized

**Remaining Opportunity** - Savings still available to capture

![Optimization Analysis](images/billing7.png)

![Optimization Analysis - Breakdown](images/billing8.png)

#### 7. Preset Analysis

Preset Analysis lets you open a pre-configured report dashboard rather than starting from scratch. CloudPi ships with several built-in system preset views for common use cases (e.g., "Monthly cost by service", "Top spending accounts last 30 days"), and any custom views you save also appear here.

**What's on the page:**

- A list of available presets — system presets first, then your custom saved views
- Each preset shows the analysis type, primary grouping, and date range it was saved with
- Selecting a preset loads its full configuration (filters, chart, dimensions) instantly

**Notes:**

- System presets are read-only. To customise one, open it and use **Save as New** to create your own copy.
- Custom views you own can be edited or deleted from this list — see [Managing Billing Views](#managing-billing-views) below.

**Use Preset Analysis when** you want to start from a known good configuration without setting filters by hand, or when your team has a standard set of reports you want everyone to use.

#### 8. Savings Analysis

Savings Analysis reports **TRUE Savings** — money not spent because a schedule or a workflow actually stopped, resized or removed something. Each figure is verified against the resource's baseline rate rather than estimated, so this is a record of realised savings, not an opportunity list.

For potential savings you have not acted on yet, use [Optimization Analysis](#6-optimization-analysis) instead.

**Summary cards** across the top:

| Card | Shows |
|------|-------|
| **TRUE Savings** | Total verified savings across all sources |
| **Scheduler TRUE Savings** | The portion produced by schedule actions |
| **Workflow TRUE Savings** | The portion produced by workflow automations |

**Trend chart** — savings accrued over the selected date range, so you can see when automation started paying off.

**Detail table** — resource-level records behind the totals. The table is sortable (newest savings date first by default) and paged. Which columns appear follows your **Group By** selection; change Group By and the column set resets to the default for that grouping.

**Savings filters.** The Advanced Filters sidebar swaps its usual contents for eight savings-specific filters:

| Filter | Filters by |
|--------|-----------|
| **Saving Scope** | Scheduler or Workflow |
| **Saving Source** | The specific schedule or workflow that produced the saving |
| **Status** | State of the savings record |
| **Service Name** | Cloud service the saved resource belongs to |
| **Region** | Cloud region |
| **Account ID** | Billing account |
| **Savings Mode** | Auto Workflow, Gated Workflow, Manual, Scheduler or Workflow — plus **Not Set** for records with no mode recorded |
| **Resource Name** | A specific resource |

**Notes:**

- Savings Analysis needs a project scope — it does not appear at organisation level.
- If you select more than one project, the page reports on the first one and shows a banner saying so.
- There is no Cost Type control here; savings always total on your workspace's configured cost type.

**Use Savings Analysis when** you need to show what automation has actually saved — a monthly savings report, or evidence that a scheduling policy is worth keeping.

### Advanced Filters

Quick Filters cover the most common controls. The **Advanced Filters** sidebar (left side of the page) lets you narrow the analysis further by specific dimension values.

![Advanced Filters sidebar](images/billing-analysis-advanced-filters.png)

The sidebar header shows the count of available filters (for example, *Specific Filters (11 Available)*). Each filter is a multi-select dropdown — pick one or more values to include only data matching those values.

**The sidebar is not the same for every analysis type.** It is available on Cost, Anomaly, Trend, Comparative and Savings. Budget, Optimization and Preset use their own filter controls, so neither the sidebar nor the **All Filters** toggle appears for them. Savings replaces the whole set with its own eight filters — see [Savings Analysis](#8-savings-analysis).

#### Scoping to a Cost Assignment Dimension

**Cost Analysis only.** A **Dimension** picker at the top of the sidebar scopes the entire cost view to one of your Cost Assignment dimensions. Selecting a dimension shows only the costs its element rules match — the union of every element in that dimension — so you can answer "what does this team / product / cost centre actually spend?" without rebuilding the same filter set by hand.

Only **approved, top-level** dimensions are listed. Draft dimensions are excluded, because an element still in draft contributes no rules and the filter would silently do nothing. Sub-dimensions are excluded too — you reach those by drilling down from the root dimension.

If the dropdown says *No dimensions exist*, create one in Cost Assignment first.

There are two ways in, and they do different things:

- **Group By → Dimensions** (Quick Filters) — groups the chart *by* the dimension's elements. Picking a dimension here sets the grouping and the scope together, and the sidebar picker hides because the choice is already made.
- **The sidebar Dimension picker** — keeps your existing Group By (Service, Region, and so on) and simply *narrows* the data to that dimension's scope.

Changing the dimension resets any drill path you had open.

#### Specific filters

| Filter | Filters by |
|--------|-----------|
| **Service name** | Cloud service (e.g., Virtual Machines, Storage Accounts) |
| **Region** | Cloud region (e.g., westus, us-east-1) |
| **Availability zone** | Specific AZ within a region |
| **Billing account id** | Top-level billing account |
| **Service category** | Logical service grouping (Compute, Storage, Networking, etc.) |
| **Sub account id** | Subaccount, subscription, or GCP project ID |
| **Sub account name** | Friendly name of the subaccount |
| **Resource id** | Specific cloud resource identifier |
| **Resource name** | Friendly name of the resource |
| **SKU id** | Cloud provider SKU |
| **Publisher** | Service publisher (relevant on Azure for marketplace items) |

The available filters and their values depend on the **Projects** you selected in Quick Filters — values load dynamically based on what's in scope.

Two things worth knowing:

- **Labels follow the provider.** When the data in scope belongs to one provider, the filters use that provider's own vocabulary — *Sub Account Name* reads as *Subscription* on Azure, *Region* as *Location*, and so on.
- **Select All is safe on large dimensions.** Resource ID, Resource Name, SKU ID, Sub Account ID and Sub Account Name can hold hundreds of thousands of values. Choosing *Select All* on these sends a "select everything" instruction rather than the full list, so the request does not fail.

#### Tag filters

Below the specific filters is a **Tag Filters** section. Unlike the dimension filters above, tag filters are **independent of how the data is grouped** — selecting tag-based filters narrows the data to resources that match the tag values regardless of the grouping on the chart.

1. Pick a **Tag key** from the dropdown (e.g., `Environment`, `Owner`).
2. Select one or more **values** for that tag.
3. Repeat for additional tag keys if needed.

Tag filters are hidden when your Group By is already a tag — in that case use the **Tag Key** and **Tag Values** controls in Quick Filters instead.

#### Databricks query filters

**Cost Analysis only, and only when Databricks data is in scope.** Eight additional filters appear under a **Databricks Query Filters** heading:

| Filter | Filters by |
|--------|-----------|
| **Statement Type** | The kind of statement run (SELECT, INSERT, and so on) |
| **Compute Type** | The compute that ran it (warehouse, cluster, and so on) |
| **Query Source** | Where the query came from |
| **Execution Status** | How it finished — for example finished or failed |
| **Client Application** | The application that submitted it |
| **Client Driver** | The driver used to connect |
| **User** | The principal that ran the query |
| **Role** | That principal's role |

These describe individual queries, and query detail only exists below the cost level. **They do not change the top-level cost chart** — they take effect once you drill down to query level (for example SQL → Resource Name → Query). Setting them and seeing no change at the top of the page is expected.

#### Cost type

For the analysis types that let you choose — Trend, Comparative, Budget and Optimization — a **Cost Type** control sits below the filters. Leave it untouched and the analysis totals on your workspace's configured cost type, which keeps Billing Analysis consistent with Home, Report Engine and Dimensions. Cost, Anomaly, Savings and Preset always use the workspace setting and show no control.

#### Trend controls

On Trend analysis the sidebar adds two extra controls: the **moving average window** (7, 14 or 30 days; 7 by default) and the **projection period** (7, 30, 60 or 90 days; 30 by default).

#### Applying and resetting filters

- **Apply Filters** at the bottom of the sidebar commits all your selections — chart and table refresh.
- **Reset All** at the top or bottom clears every filter back to its default empty state.
- All filter conditions combine with **AND** logic — a resource must match every filter to appear in results.
- Selected filters persist in session storage as you navigate between pages.

### Drilling into the Data

Filters narrow what you are looking at. **Drill-down** lets you move through it — start from a high-level total and step inward until you reach the specific resource, account, or tag behind a cost.

Drill-down is available on **Cost**, **Anomaly**, **Trend**, and **Comparative** analysis, and behaves the same way in each.

#### Starting a Drill

Click a row in the results table to drill into it. A hint beside the table title — **↳ Click a row to drill down** — marks the table as interactive.

Each drill narrows the chart and the table together, so both always describe the same slice of spend. Your Quick and Advanced filters stay applied throughout.

#### Following Your Path

Once you drill in, a breadcrumb strip appears above the chart showing the path you have taken. It is hidden at the top level, so its presence tells you at a glance that you are viewing a subset rather than the full total.

Use the breadcrumbs to move back:

- Click any earlier step to return to that level, discarding the steps after it.
- Click the **home** icon at the start of the trail to return to the top level.
- Use the **undo** control to step back one level at a time.

#### When a Level Has No Data

If you drill into something with no matching spend, CloudPi shows a short message in place of the chart explaining that the level is empty, rather than an empty chart. Step back and choose a different path.

#### Sharing and the Browser Back Button

On **Cost Analysis**, your drill path is reflected in the page address. This means the browser **Back** button retraces your drill steps, and copying the address shares the exact view you are looking at, drill path included.

Other analysis types keep your drill position for the session but do not put it in the address, so **Back** leaves the page instead of stepping back a level. Use the breadcrumbs to navigate in those views.

### Managing Billing Views

A **billing view** is a saved configuration — analysis type, all Quick and Advanced filters, projects, and grouping — that you can reload in one click. Use views to standardise reporting and avoid reconfiguring the same setup every session.

#### Save As View

1. Configure your desired filters (analysis type, projects, date range, group by, advanced filters).
2. Click **Save As View** in the top right.
3. Enter a name for the view.
4. Click **Save**.

The view is persisted and immediately appears in the **Select a billing view** dropdown. The full filter set is captured: workspace context, projects, analysis type, granularity, group by, and every advanced filter value.

!!! note "Validation"
    A view name is required and must not be empty. At least one project must be selected before saving.

#### Select a Billing View

1. Click the **Select a billing view** dropdown in the top right.
2. Choose a view from the list. System presets appear first, then your custom views.
3. The page reloads with all of the saved filters applied exactly as they were when you saved the view.

#### Update an Existing View

1. Load the view you want to change from **Select a billing view**.
2. Modify any filter — the UI shows an **unsaved changes** indicator next to the view name.
3. Click **Update** to overwrite the view with the new configuration.

The same view is updated in place — no duplicate is created.

#### Save as New (from a System Preset)

System preset views are read-only. If you load a preset and then change anything:

1. The Save button changes to **Save as New** instead of **Update**.
2. Enter a new name for your custom copy.
3. Click **Save**.

This keeps the original system preset intact and creates your own copy that you can update freely.

#### Delete a Custom View

1. Open the view menu next to the view's name in the dropdown.
2. Click **Delete**.
3. Confirm in the dialog.

You can only delete views you own (custom views you created). System presets cannot be deleted.

!!! note "Views with inaccessible projects"
    If a saved view references a project you no longer have access to (e.g., your role was changed), the view loads with only the projects you can still see, and a warning notes which projects were excluded.

### Understanding the Interface

**Chart Interactions:**

**Legend Toggle** - Click on items in the legend to show/hide specific data series

**Hover** - Hover over chart elements to see detailed values

**Pagination** - Use pagination controls in tables (Rows per page, Page navigation)

**Data Export:**

- Click the download icon in the Detailed Data section to export table data

---

## Shared Costs Management

The Shared Costs page allows you to view and manage shared cost allocations between projects. This ensures that expenses related to shared services (e.g., infrastructure, regions) are fairly distributed across relevant projects.

### Create a Shared Cost

Use this flow to create a new shared cost allocation between projects.

**Steps:**

1. Click on **+ Create Shared Cost** - Opens the Add Shared Cost form

2. **Select Billing View** - Choose the billing view you want to apply the shared cost to

3. **Select Time Period** - Choose from available options such as Yearly, Monthly, etc.

4. **Add Target Projects:**
   - Select the Project that will share the cost
   - Specify the Percentage (%) of cost to allocate
   - Click the **+** icon to add multiple projects if needed

5. **Enter Note** - Provide context or reasons for the shared cost (e.g., shared infrastructure, cross-team usage)

6. Click **Save** - Finalize the shared cost entry. The status will be set to **Pending** until accepted

### Key Actions

**Project Filter:**
- Use the **Select Project** dropdown to filter shared costs related to a specific project

**Shared Cost List:**

View the list of shared cost entries with details such as:

**Billing Name** - The service or resource category being shared (e.g., Service name, Regions)

**Shared Projects** - Shows the allocation direction (e.g., NPDDDev → CPDev)

**Note** - Additional information (e.g., "This resource is part of a shared infrastructure and is utilized by multiple teams")

**Status** - Indicates if the shared cost is **Accepted** (green) or **Pending** (yellow)

**Time Period** - The duration the shared cost is active (start and end dates)

**Actions** - Options to view more details or perform actions like edit or delete

### View Shared Cost Details

Allows users to view specific details of an existing shared cost allocation.

**Steps:**

1. In the Shared Costs Page, locate the shared cost entry
2. Click on the **Actions menu** (three dots) next to the entry
3. Select **View** to see detailed information like:
   - Billing View and Service Name
   - Allocated Projects and their share percentages
   - Notes explaining the purpose of sharing
   - Time Period and Status (Accepted / Pending)

**Additional Action for Pending Status:**

If the status is **Pending**, the user will have the option to:
- **Accept** the shared cost
- **Reject** the shared cost

---

## Views and Reports

The Views and Reports page allows you to create and manage billing view reports based on your configured billing views. Generate reports for specific time periods to analyze costs across projects and services.

**Key Features:**

**Report Generation** - Create reports for specific billing views and time periods

**Report Management** - View, edit, download, and share billing view reports

**Project Filtering** - Filter billing views by project for easier navigation

---

### Navigating the Views and Reports Page

The Views and Reports page displays all your billing views and provides tools to create and manage reports.

**Page Components:**

**Page Header** - "Views and Billing View Reports" with description "Create and manage billing view reports for billing views."

**Project Filter** - Dropdown in the top right to filter billing views by project (e.g., HRApplication)

**Billing View Table** - Main table displaying:

- **Billing View name** - Name of the billing view
- **Project Name** - Associated project(s), with badge showing multiple projects (e.g., "3 projects")
- **Status** - Current status (Active shown in green badge)
- **Actions** - Icons for viewing reports, creating reports, and deleting billing views

---

### Billing View Reports

View all reports that have been generated for a specific billing view.

**Steps to View Reports:**

1. Locate the billing view in the table
2. Click the **Eye icon** in the Actions column
3. The **Billing View Reports** panel opens showing all reports for that billing view
4. Click the **View Report icon** (eye icon) next to the report you want to view
5. The report details page opens with full billing information

**Billing View Reports Panel:**

The panel displays a table with the following information for each report:

- **Report Number** (e.g., BR-00008)
- **Reporting Period** (date range, e.g., 2025-11-30 - 2025-12-30)
- **Created By** (username, e.g., CloudPi Admin)
- **Date Created** (timestamp)
- **Status** (Active in green badge)
- **Actions** (View Report, Edit Notes icons)

**Panel Actions:**

- **Download** - Download icon in top right to export reports
- **Share** - Share icon in top right to share reports with others
- **Plus (+)** - Create a new report from within the panel
- **Close** - Close the Billing View Reports panel

---

### Create Billing View Report

Generate a new report for a billing view by specifying the reporting period.

**Steps to Create Report:**

1. Locate the billing view in the table
2. Click the **Plus (+) icon** in the Actions column
3. The **Create Billing View Report** dialog opens showing:
   - **Billing View** - Name and associated projects
   - **Reporting Period** - Date range selector with Start date and End date fields
4. Select the start date and end date for your report
5. Click **Continue** to generate the report, or **Cancel** to abort

The system generates a report containing all billing data for the selected billing view within the specified time period.

---

### View Report Details

Access the full details of a generated report including costs, notes, and export options.

**Steps to View Report:**

1. Open the Billing View Reports panel (Eye icon)
2. Click the **Eye icon** next to the report you want to view
3. The report details page opens with:

**Report Header:**

- Report number (e.g., BR-00008)
- Status badge (Active in green)
- Billing View name and associated projects

**Reporting Period Card:**

- Start Date
- End Date

**Report Details Card:**

- Created At (timestamp)
- Created By (username)

**Billing View Summary Table:**

- **Project Name** - Project associated with the costs
- **Service Name** - Cloud services used (e.g., Virtual Machines, Storage Accounts)
- **Billed Cost** - Cost for each service
- **Sub Total** - Sum of all line items
- **Grand Total** - Final total cost

**Additional Options:**

- **Notes** - Text field to add context or comments (max 500 characters)
- **Set Currency** - Dropdown to select currency (e.g., United States Dollar)
- **Preview & Download** - Blue button to preview and download the report
- **Cancel** - Return to previous view

**Report Actions (Top Right):**

- **Download** - Export the report
- **Share** - Share the report with others
- **Plus (+)** - Create a new report

---

### Edit Report Notes

Add or modify notes on a report to provide additional context or documentation.

**Steps to Edit Notes:**

1. Open the Billing View Reports panel
2. Click the **Pencil (Edit) icon** next to the report
3. The report details page opens with the Notes field active
4. Enter or update notes (up to 500 characters)
5. Select currency if needed
6. Click **Preview & Download** to save changes

Notes are useful for documenting:

- Reason for the report
- Special circumstances during the reporting period
- Budget allocations or approvals
- Internal tracking information

---

### Delete Billing View

Remove a billing view when it's no longer needed. This action affects the billing view itself, not individual reports.

**Steps to Delete:**

1. Locate the billing view in the table
2. Click the **Trash icon** in the Actions column
3. A confirmation dialog appears
4. Confirm deletion to remove the billing view

**Note:** Deleting a billing view may affect associated reports. Ensure you've downloaded any needed reports before deletion.

---
