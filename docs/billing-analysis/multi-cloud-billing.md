# Multi-Cloud Billing Analysis

## Overview

The **Billing Analysis** page is a powerful tool for analyzing cloud costs across multiple projects, services, and time periods. It provides flexible filtering, multi-level grouping, and comprehensive visualizations to help you understand your cloud spending patterns.

## Key Features

- **Multi-Cloud Support:** Analyze costs across AWS, Azure, GCP, and other cloud providers
- **Flexible Filtering:** Quick and advanced filters for precise data analysis
- **Multi-Level Grouping:** Primary and secondary dimensions for detailed drill-down
- **Custom Views:** Save, edit, and share your analysis configurations
- **Rich Visualization:** Interactive charts and detailed data tables
- **Tag-Based Analysis:** Group and filter by custom cloud resource tags
- **Export Capabilities:** Download data for offline analysis

## Accessing Billing Analysis

1. Navigate to **Billing Hub** in the main menu
2. Click on **Billing Analysis** (or Billing Analysis V2)
3. The page will load with default filters applied

## Understanding the Interface

The Billing Analysis page consists of several key sections:

### 1. Billing View Selector

- **Location:** Top of the page
- **Purpose:** Load saved views or select preset views
- **Options:**
  - **Preset Views:** Pre-configured analysis templates
  - **User Views:** Your custom saved views

### 2. Quick Filters Bar

- **Location:** Below the view selector
- **Purpose:** Essential filters for quick data analysis
- **Collapsible:** Click the title or expand/collapse icon to show/hide

### 3. Advanced Filters (Optional)

- **Location:** Below Quick Filters
- **Purpose:** Additional filtering and multi-level grouping options
- **Collapsible:** Click the settings icon in Quick Filters to expand

### 4. Visualization Area

- **Charts:** Visual representation of your cost data
- **Tables:** Detailed tabular data with sorting and pagination

### 5. Action Buttons

- **Apply Filters:** Execute your filter selections
- **Save View:** Save current configuration as a named view
- **Clear Filters:** Reset all filters to defaults

## Quick Filters

Fast access to key options—all required for analysis:

1. **Cloud Service Provider (CSP):** Filter by provider
2. **Project:** Select projects for analysis
3. **Date Range:** Define analysis period (max 90 days)
4. **Granularity:** Set time interval (Daily, Weekly, Monthly, Quarterly)
5. **Top N Limit:** Limit chart/table rows to top N results
6. **Primary Group By (Required):** Main grouping dimension

### Available Grouping Dimensions

- Service Name
- Service Category
- Region
- Availability Zone
- Sub Account / Subscription
- Resource ID
- Billing Account
- Charge Category
- Usage Type
- Tags (custom cloud resource tags)

## Advanced Filters

Extra controls for deeper analysis (accessible via Settings):

### 1. Secondary Dimension (Optional)

Adds a second grouping level (must differ from Primary).

**Example:**
- Primary: Service Name
- Secondary: Region
- Result: Cost by service, broken down by region

### 2. Cost Types

Filter by specific cost categories:
- Usage
- Taxes
- Credits
- Support
- Refunds
- **Default:** All cost types

### 3. Specific Dimension Filters

Filter by specific values within dimensions:
- **Service Names:** Select specific services
- **Regions:** Filter to specific geographic regions
- **Availability Zones:** Narrow to specific AZs
- **Billing Accounts:** Filter by billing account
- **Charge Categories:** On-demand, Reserved, Spot, etc.
- **Service Categories:** Compute, Storage, Database, etc.
- **Sub Accounts:** Filter by sub-account/subscription
- **Resource IDs:** Analyze specific resources
- **Usage Types:** Specific usage patterns

### 4. Tag Filters

Filter resources by cloud resource tags:
- **Tag Key:** Choose key (e.g., Environment, Owner, Project, CostCenter)
- **Tag Values:** Multi-select values (e.g., Production, Staging, Development)

**Use Cases:**
- Cost allocation by department
- Environment-based analysis (prod vs non-prod)
- Project-based cost tracking
- Owner-based showback

## Step-by-Step Analysis Process

### 1. Define Your Analysis Goal

Decide what you want to understand:
- Which services cost the most?
- How do costs vary by region?
- What are the costs per project?
- How do costs trend over time?
- Which teams are spending the most?

### 2. Configure Quick Filters

Based on your goal, set up the required filters.

**Example: Service Cost Analysis**
- **CSP:** All
- **Projects:** Select all relevant projects
- **Date Range:** Last 30 Days
- **Granularity:** Monthly
- **Top N:** 20
- **Primary Group By:** Service Name

**Result:** Top 20 services by cost over the last month

### 3. Add Advanced Filters (Optional)

For deeper insights, use advanced filters.

**Example: Regional Service Analysis**
- Keep Quick Filters as above
- **Secondary Dimension:** Region
- **Regions:** (leave empty to include all)

**Result:** Service costs broken down by region

### 4. Apply Filters

Click the **Apply Filters** button to execute your analysis.

### 5. Review Results

Examine the charts and tables:
- **Charts:** Identify top cost drivers visually
- **Tables:** See exact numbers and drill down into details

### 6. Refine and Iterate

Adjust filters based on what you discover:
- Add more specific filters
- Change grouping dimensions
- Modify date ranges
- Change granularity for different perspectives

## Use Case Examples

### Use Case 1: Finding Top Cost Services

**Goal:** Identify the highest-cost services across all projects

**Configuration:**
- CSP: All
- Projects: All
- Date Range: Last 30 Days
- Granularity: Monthly
- Primary Group By: Service Name
- Top N: 10

**Analysis:** Review the top 10 services and investigate whether spending is expected or needs optimization.

### Use Case 2: Regional Cost Comparison

**Goal:** Compare costs across different AWS regions

**Configuration:**
- CSP: AWS
- Projects: All
- Date Range: Last 90 Days
- Granularity: Monthly
- Primary Group By: Region
- Secondary Dimension: Service Name

**Analysis:** Identify if certain regions have unexpectedly high costs and whether workloads can be migrated to cheaper regions.

### Use Case 3: Tag-Based Department Chargeback

**Goal:** Allocate costs to departments based on "Department" tag

**Configuration:**
- CSP: All
- Projects: All
- Date Range: Month to Date
- Granularity: Monthly
- Primary Group By: Tags
- Tag Key: Department
- Tag Values: (Select all departments)

**Analysis:** Generate chargeback report showing each department's cloud spending.

### Use Case 4: Environment Cost Analysis

**Goal:** Compare production vs non-production costs

**Configuration:**
- CSP: All
- Projects: All
- Date Range: Last 30 Days
- Granularity: Daily
- Primary Group By: Tags
- Tag Key: Environment
- Tag Values: Production, Staging, Development

**Analysis:** Understand cost distribution across environments and identify optimization opportunities in non-production environments.

## Interpreting Results

### Chart Analysis

**Line Charts:**
- Shows trends over time
- Identify spending patterns
- Spot anomalies or spikes

**Bar Charts:**
- Compare spending across dimensions
- Identify highest-cost items
- Benchmark against peers

**Pie Charts:**
- Visualize cost distribution
- Understand proportional spending
- Identify dominant cost drivers

### Table Analysis

Tables provide detailed breakdowns with:
- Exact cost values
- Multiple dimensions simultaneously
- Drill-down capabilities
- Export options

**Key Columns:**
- Dimension Name (service, region, project, etc.)
- Total Cost
- Percentage of Total
- Trend indicators (up/down arrows)
- Month-over-month change

### Identifying Anomalies

Look for:
- **Unexpected Spikes:** Sudden increase in costs
- **New Services:** Previously unseen services appearing
- **Regional Outliers:** One region significantly more expensive
- **Untagged Resources:** High costs from untagged resources

## Data Export

Export your analysis for offline work or reporting:

1. **CSV Export:** Raw data for spreadsheet analysis
2. **Excel Export:** Formatted workbook with multiple sheets
3. **PDF Export:** Formatted report with charts
4. **API Export:** Programmatic access to data

**Export Steps:**
1. Configure filters as desired
2. Click **Export** button
3. Select format (CSV, Excel, PDF)
4. Choose what to include:
   - Charts
   - Tables
   - Both
5. Download file

## Best Practices

### Effective Analysis

1. **Start Broad, Then Narrow:**
   - Begin with all projects and services
   - Identify areas of concern
   - Drill down with specific filters

2. **Use Consistent Time Periods:**
   - Compare same periods (e.g., this month vs last month)
   - Account for seasonal variations
   - Use full months for monthly granularity

3. **Leverage Tags:**
   - Implement consistent tagging strategy
   - Use tags for cost attribution
   - Regularly audit tag coverage

4. **Save Common Views:**
   - Create views for regular reports
   - Share views with team members
   - Standardize on team analysis approaches

5. **Combine with Other Tools:**
   - Use Billing Analysis for discovery
   - Use Budget Management for planning
   - Use Recommendations for optimization

### Performance Tips

- **Limit Date Ranges:** Shorter periods load faster
- **Use Appropriate Granularity:** Daily for short periods, monthly for long periods
- **Filter Projects:** Select only relevant projects
- **Top N Limits:** Start with small Top N, increase if needed

## Troubleshooting

### No Data Showing

**Possible Causes:**
- Date range has no billing data
- Projects selected have no costs
- Filters too restrictive

**Solutions:**
- Expand date range
- Select different projects
- Remove some filters
- Check data collection status

### Performance Issues

**Symptoms:**
- Slow page load
- Timeout errors
- Browser hanging

**Solutions:**
- Reduce date range (try 30 days max)
- Use monthly granularity instead of daily
- Filter to fewer projects
- Lower Top N limit
- Clear browser cache

### Incorrect Totals

**Possible Causes:**
- Cost type filters applied
- Partial month data
- Data lag from cloud provider

**Solutions:**
- Check cost type filters (ensure "All" selected)
- Wait 24-48 hours for complete data
- Verify with cloud provider's billing console

---

## Related Documentation

- [Billing Views](billing-views.md) - Save and manage analysis configurations
- [Shared Costs](shared-costs.md) - Allocate shared infrastructure costs
- [Invoicing](invoicing.md) - Generate customer invoices

---

*For billing analysis assistance, contact your FinOps team or CloudPi support.*
