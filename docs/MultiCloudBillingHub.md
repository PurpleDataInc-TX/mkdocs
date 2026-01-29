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

Use these key filters to quickly narrow down your billing data view:

**Analysis Type** - Select the type of analysis (Anomaly Analysis, Trend Analysis, Comparative Analysis, Budget Analysis, Optimization Analysis)

**Cloud Service Provider** - Filter by AWS, Azure, GCP, or All Providers

**Projects** - Select specific projects to analyze

**Cost Type** - Choose Billed Cost or other cost types

**Granularity** - Switch between Daily, Weekly, or Monthly views

**Date Range** - Select time period (60D, 90D, or Custom) with max 120 days

**Limit** - Choose Top 10 or other limits for data display

**PRIMARY Group By** - Select the main analysis dimension (e.g., Service Name)

Click **+ Advanced Filters** to access additional filtering options for more granular analysis.

### Analysis Types

The Analysis Type dropdown provides five different views for analyzing your billing data:

#### 1. Anomaly Analysis

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

#### 2. Trend Analysis

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

#### 3. Comparative Analysis

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

![Comparative Analysis](images/billing5.png)

![Comparative Analysis - Detailed Data](images/billing6.png)

#### 4. Budget Analysis

Track budget consumption and compare actual spending against allocated budgets.

**Features:**

- Budget vs. actual cost comparison
- Budget utilization percentage
- Forecast vs. actual spending trends

#### 5. Optimization Analysis

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

### Managing Billing Views

#### Save As View

To save your current filter configuration:

1. Configure your desired filters (Analysis Type, Projects, Date Range, etc.)
2. Click the **+ Save As View** button in the top right
3. Enter a name for your billing view
4. Click **Save**

#### Select a Billing View

To load a previously saved view:

1. Click the **Select a billing view...** dropdown in the top right
2. Choose from your saved billing views
3. The page updates with the saved filter configuration

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
