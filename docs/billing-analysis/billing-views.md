# Billing Views

## Overview

**Billing Views** allow you to save your filter configurations for reuse and sharing. This ensures consistent analysis across your team and saves time by eliminating repetitive filter setup.

## What is a Billing View?

A Billing View is a saved configuration of:
- Cloud Service Provider selection
- Selected projects
- Date range and granularity
- Primary and secondary grouping dimensions
- Cost type filters
- Specific dimension filters (services, regions, accounts, etc.)
- Tag filters

Think of it as a "bookmark" for a specific billing analysis configuration.

## Creating a Billing View

### Step 1: Configure Your Filters

1. Navigate to **Billing Hub → Billing Analysis**
2. Set up Quick Filters as desired:
   - Select CSP
   - Choose projects
   - Set date range
   - Configure granularity
   - Set Top N limit
   - Choose Primary Group By

3. Configure Advanced Filters (if needed):
   - Secondary dimension
   - Cost types
   - Specific filters
   - Tag filters

### Step 2: Apply and Verify

1. Click **Apply Filters**
2. Review the results to ensure they match your intent
3. Make any necessary adjustments

### Step 3: Save the View

1. Click **"Save View"** button (located near the top)
2. A dialog will appear
3. Enter view details:
   - **View Name:** Descriptive name (e.g., "EC2 Monthly Costs by Region")
   - **Description:** Optional context about the view's purpose
   - **Share:** Check box to share with team members

4. Click **"Save"**
5. Success message confirms the view is created

### Naming Best Practices

Good view names are:
- **Descriptive:** Clearly indicate what the view shows
- **Consistent:** Follow team naming conventions
- **Specific:** Include key dimensions or use case

**Examples:**
- "AWS_EC2_by_Region_Monthly"
- "Azure_AllServices_Production_Daily"
- "GCP_BigQuery_by_Project_Quarterly"
- "MultiCloud_Compute_Costs_MTD"
- "Engineering_Dept_Showback_Monthly"

## Using Saved Views

### Loading a View

1. Navigate to **Billing Analysis** page
2. Look for the **View Selector** dropdown at the top
3. Click the dropdown
4. You'll see two sections:
   - **Preset Views:** System-provided templates
   - **User Views:** Your custom saved views

5. Select a view from either section
6. The view name appears in the selector (format: "BV-[View Name]")
7. Filters populate with the saved configuration
8. Click **"Apply Filters"** to load the data

### View Selector Location

The view selector is prominently placed:
- **Location:** Top of Billing Analysis page
- **Always visible:** Even when scrolling
- **Quick access:** Single click to switch views

## Editing a Billing View

### Method 1: Modify and Update

1. Load the view you want to edit
2. Make desired changes to any filters
3. The view shows as **"Modified"** in the UI
4. Click **"Update View"** (or **"Save View"**)
5. Choose action:
   - **Update existing view:** Overwrites saved settings
   - **Save as new view:** Creates a copy with a new name

6. Confirm the update

### Method 2: Edit from Views Management

1. Navigate to **Billing Hub → Views & Invoices**
2. Find the view in the table
3. Click the **Edit** icon
4. Modify view properties:
   - Name
   - Description
   - Sharing settings
5. Click **"Save Changes"**

**Note:** This method only edits metadata, not filter configurations. To edit filters, use Method 1.

## Sharing Billing Views

### Share with Team

When creating or editing a view:
1. Check the **"Share"** checkbox
2. The view becomes visible to all workspace/project members
3. Other users can load and use the view
4. Permissions determine who can edit shared views

### Share Permissions

| User Role | Can View | Can Create | Can Edit Own | Can Edit Others' |
|-----------|----------|-----------|--------------|------------------|
| Workspace Admin | All | ✅ | ✅ | ✅ |
| Workspace User | Shared + Own | ✅ | ✅ | ❌ |
| Project Admin | Project scope | ✅ | ✅ | ❌ |
| Project User | Shared + Own | ✅ | ✅ | ❌ |

### Unsharing a View

1. Edit the view
2. Uncheck the **"Share"** checkbox
3. Save changes
4. View becomes private (visible only to you)

## Deleting a Billing View

**Warning:** Deletion is permanent and cannot be undone.

### Steps to Delete

1. Navigate to **Billing Hub → Views & Invoices**
2. You'll see a table listing all your billing views
3. Find the view you want to delete
4. Hover over the view row
5. Click the **trash/delete icon**
6. A confirmation dialog appears
7. Read the message carefully
8. Click **"Delete"** to confirm, or **"Cancel"** to abort
9. Success message appears
10. View is removed from the list
11. Dialog closes automatically

### What Happens After Deletion

- View is permanently removed
- No longer appears in View Selector
- Shared users lose access immediately
- Invoices created from this view are NOT affected (they remain)
- If the view was open in Billing Analysis, the page clears the selection and shows a warning

### Deletion Permissions

Only these roles can delete views:
- **Workspace Admin:** Can delete any view
- **View Owner:** Can delete their own views
- **Other Users:** Cannot delete views they didn't create (even if shared)

## Where to See Created Billing Views

Your billing views are accessible in **two locations**:

### 1. Billing Analysis Page

- **Location:** View Selector dropdown at the top
- **Shows:** Your saved views in the **"User Views"** section
- **Purpose:** Quick access to load and analyze saved configurations
- **Features:**
  - Fast switching between views
  - See view name while analyzing
  - Immediate filter application

### 2. Views & Invoices Page

- **Location:** Billing Hub → Views & Invoices
- **Shows:** Complete list of all billing views with details
- **Features:**
  - View name, description, created date
  - Project associations
  - Edit and delete actions
  - Create invoices from views
- **Purpose:** Centralized view management

## Preset vs User Views

### Preset Views (System-Provided)

**Characteristics:**
- Created by CloudPi administrators
- Available to all users
- Cannot be edited or deleted by users
- Cover common analysis scenarios

**Examples:**
- "All Services by Provider"
- "Top 10 Cost Services Monthly"
- "Regional Spend Breakdown"
- "Tag Compliance Report"

### User Views (Custom)

**Characteristics:**
- Created by workspace/project users
- Can be private or shared
- Fully customizable
- Can be edited and deleted by creator

**Use Cases:**
- Team-specific analysis patterns
- Departmental showback views
- Project-specific cost tracking
- Custom compliance reports

## View Management Best Practices

### Organization

1. **Use Clear Naming:**
   - Include scope (project, department)
   - Mention timeframe (daily, monthly)
   - Reference key dimensions

2. **Create View Categories:**
   - Executive views (high-level summaries)
   - FinOps views (detailed cost analysis)
   - Department views (chargeback/showback)
   - Compliance views (tag analysis, policy checks)

3. **Regular Cleanup:**
   - Review views quarterly
   - Delete unused views
   - Update outdated configurations
   - Consolidate similar views

### Collaboration

1. **Share Common Views:**
   - Create standard views for team use
   - Document view purpose in description
   - Train team on available views

2. **Standardize Naming:**
   - Agree on naming conventions
   - Use prefixes for categories
   - Include owner/department in name

3. **Version Important Views:**
   - Clone before major changes
   - Keep "working" and "final" versions
   - Archive old versions rather than delete

### Maintenance

1. **Monitor View Usage:**
   - Track which views are actually used
   - Identify redundant views
   - Consolidate where possible

2. **Update Regularly:**
   - Adjust for new projects
   - Update for organization changes
   - Refresh timeframes in descriptions

3. **Document Complex Views:**
   - Add detailed descriptions
   - Explain filter logic
   - Note any special considerations

## Use Case Examples

### Use Case 1: Monthly Executive Summary

**View Name:** "Executive_Monthly_Spend_Summary"  
**Purpose:** High-level monthly spend across all providers  
**Configuration:**
- CSP: All
- Projects: All
- Date Range: Month to Date
- Granularity: Monthly
- Primary Group By: Cloud Provider
- Secondary: None

### Use Case 2: AWS EC2 Regional Analysis

**View Name:** "AWS_EC2_Regional_Costs_Daily"  
**Purpose:** Track EC2 costs by region for capacity planning  
**Configuration:**
- CSP: AWS
- Projects: Infrastructure
- Date Range: Last 30 Days
- Granularity: Daily
- Primary Group By: Region
- Secondary: Service Name (filter to EC2 only)

### Use Case 3: Development Environment Costs

**View Name:** "Dev_Environment_Tag_Analysis"  
**Purpose:** Monthly showback for development environments  
**Configuration:**
- CSP: All
- Projects: All
- Date Range: Last Month
- Granularity: Monthly
- Primary Group By: Tags (Key: Environment)
- Tag Values: Development, Staging, Test

### Use Case 4: Storage Cost Optimization

**View Name:** "Storage_Services_Cost_Trends"  
**Purpose:** Identify storage cost growth and optimization opportunities  
**Configuration:**
- CSP: All
- Projects: All
- Date Range: Last 90 Days
- Granularity: Weekly
- Primary Group By: Service Category
- Category Filter: Storage
- Secondary: Service Name

## Integration with Other Features

### Creating Invoices from Views

1. Load a billing view
2. Verify the data matches invoice requirements
3. Navigate to **Views & Invoices** page
4. Find the view in the table
5. Click **"Create Invoice"** button
6. Invoice is generated using the view's filter configuration

*See [Invoicing](invoicing.md) for full invoice creation process.*

### Using Views in Reports

1. Load a billing view
2. Data populates based on view configuration
3. Export report:
   - Click **Export** button
   - Choose format (PDF, Excel, CSV)
   - Download report

### Views in Budget Planning

1. Create view showing current spending patterns
2. Use data to inform budget allocations
3. Set up similar view for budget monitoring
4. Compare actuals vs budget using saved views

## Troubleshooting

### View Not Saving

**Possible Causes:**
- Network connectivity issue
- Browser cache problem
- Insufficient permissions

**Solutions:**
- Check internet connection
- Clear browser cache
- Verify you're logged in
- Try different browser
- Contact administrator

### View Not Loading

**Symptoms:**
- View name selected but filters don't populate
- Error message appears
- Page hangs

**Solutions:**
- Refresh the page
- Clear browser cache
- Re-select the view
- Check if view was deleted
- Verify project access
- Contact support if persistent

### View Shows Different Data

**Possible Causes:**
- Projects added/removed since view creation
- Date range is relative (e.g., "Last 30 Days")
- Data updated since last view

**Solutions:**
- This is expected behavior for relative dates
- Edit view to use fixed dates if needed
- Verify project selection is correct
- Check data collection status

### Cannot Delete View

**Possible Causes:**
- Insufficient permissions
- View is in use
- Network issue

**Solutions:**
- Verify you're the view owner or Workspace Admin
- Close any open instances of the view
- Try again later
- Contact administrator

---

## Related Documentation

- [Multi-Cloud Billing](multi-cloud-billing.md) - Main billing analysis
- [Shared Costs](shared-costs.md) - Allocate shared infrastructure
- [Invoicing](invoicing.md) - Generate customer invoices

---

*For billing view management questions, contact your FinOps team or CloudPi support.*
