# CloudPi Recommendations

The CloudPi Recommendations Page is designed to streamline the process of identifying and acting on cloud cost optimization recommendations. This comprehensive and interactive feature empowers users to optimize cloud costs through data-driven recommendations.

## Overview

Get insights and suggestions to optimize cloud resources and boost performance. The Recommendations page provides a centralized view of all optimization opportunities across your cloud environment.

![Recommendations Overview](images/recommendations1.png)

---

## Summary Metrics

At the top of the page, CloudPi Recommendations provides a high-level summary of the cost-saving potential:

**Total Recommendations** - Overall number of recommendations across all cloud providers

**Potential Savings** - Total possible cost savings if all recommendations are implemented

**Realized Savings** - Savings already achieved from completed actions (percentage completed)

**Not Remediated** - Recommendations still pending action and requiring attention

**In Progress** - Recommendations currently being addressed

---

## Data Filtering

Once the recommendations data is fetched and processed, users can apply several filters to refine and customize the view:

**Group By** - Allows grouping of recommendations (e.g., All or Policy) for better organization

**Policy Name** - Filter by specific policy name

**Category** - Filters by recommendation type such as Optimization, Governance, Performance, or Security

**Account ID** - Filter recommendations by cloud account

**Region** - View recommendations based on the region of the resource

**Service** - Filter by specific cloud service

**Status** - Filter by current status (Initiated, In Progress, Completed, etc.)

**Priority** - Filter by priority level (High, Medium, Low)

**Time Period** - Enable filtering by a defined period (e.g., Past 3 Months – Till Date)

These filters are applied in real-time, and the displayed recommendations update dynamically.

---

## List of Recommendations

### Table View

Recommendations are displayed in a clear, scrollable table format for quick review:

**Policy Name** - Name of the optimization policy (e.g., Azure Tag Compliance Checker, Azure Untagged Resources)

**Recommendation** - Specific recommendation identifier

**Category** - Type of recommendation (e.g., Governance, Optimization)

**Service** - Cloud service involved (e.g., Azure Load Balancer, Azure Storage Account, Azure SQL Database)

**Resource Name** - Name of the affected resource

**Cost Savings** - Estimated annual cost savings (or N/A if not applicable)

**Status** - Current status of the recommendation

**Actions** - Available actions for the recommendation

### Recommendation Status Types

**Initiated** - Recommendation has been identified and logged

**In Progress** - Action is currently being executed

**Completed** - Remediation has been successfully applied

**Ignored** - User has chosen to ignore this recommendation

**Snoozed** - Action has been temporarily postponed

### Expandable Grouping

When grouped by policy, recommendations can be expanded or collapsed for easier management of multiple related insights.

---

## Taking Actions on Recommendations

The page allows users to take actions based on the status of each recommendation.

### Bulk Actions

1. **Selecting Recommendations** - Use checkboxes to select one or more recommendations from the table
2. **Actions in Table Header** - Once selected, perform bulk actions:
   - **Ignore** - Marks the selected recommendations as ignored
   - **Snooze** - Temporarily postpones action on the recommendations

### Individual Actions

Click the **Actions** menu (three dots) on any recommendation row to access:

- **View Details** - Open detailed recommendation information
- **Execute Action** - Perform the recommended remediation

---

## Recommendation Details

Click on a recommendation to view detailed information in a side panel:

![Recommendation Details](images/recommendations2.png)

### Header Information

**Recommendation Name** - Policy name (e.g., azure-tag-compliance-checker)

**Resource** - Resource identifier (e.g., test-lb-idle-7e6600b4)

**Status Badge** - Current status (e.g., Not Remediated)

**Quick Actions** - Snooze and Ignore buttons

### Metrics Cards

**Savings (Annual)** - Estimated annual cost savings

**Utilization** - Resource utilization percentage

**Priority** - Priority level (High, Medium, Low)

### What is this Recommendation?

This section provides:

**Recommended Action** - Description of the action to take (e.g., "Normalized tag keys to lowercase for consistency")

**View Policy** - Link to view the full policy details

### Resource Details

**Resource Name** - Clickable link to the resource

**Status** - Current status with description (e.g., "In Progress - Action is currently being executed")

### Workflow Status

If no workflow is configured, you'll see:

- **No Workflow Configured** message
- Option to **Create Workflow For This Policy**

**Benefits of Workflow Automation:**

- Automate remediation actions based on this policy
- Schedule automated checks and approvals
- Receive notifications when actions complete
- Track execution history and audit logs
- Reduce manual intervention and save time

---

