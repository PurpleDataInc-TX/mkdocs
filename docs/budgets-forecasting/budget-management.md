# Budget Management

## Overview

The **Budget Management** module allows users to manage cloud budgets effectively, monitor spending, set forecast projections, and adjust budgets and forecasts as necessary. This module integrates multiple levels of data, such as projects, subaccounts, and tags, and provides granular control over budget thresholds, alerts, and forecast requests.

**Key Features:**
1. Create and Manage Cloud Budgets
2. Scope Budgets by Project, Subaccounts, and Tags
3. Monitor Actual vs. Budgeted Spend vs. Forecast vs. Projected
4. Forecast Support at Project Level
5. Alert and Notification System for Threshold Breaches
6. Lock and Unlock Budgets
7. Request and Approve Forecasts

## Main Menu Structure

The **Financials** section is the main menu for budget management, with two submenus: **Budgets** and **Forecasts**.

### Budgets Page Overview

The Budgets page provides an overview of all budget details across various projects.

#### Top Cards Overview

At the top of the page, four key cards provide quick insights:

- **Total Budget:** Total budget across all projects
- **Total Spend:** Total spending for the selected period
- **Total Forecast:** Total forecasted budget across all projects
- **Total Projected Cost:** Total projected cost for the budget

#### Budget Summary Line Chart

Below the cards, a line chart displays fiscal month data:

- **Spend (Green Line):** Actual spend data
- **Forecast (Yellow Line):** Forecasted spend data
- **Budget (Blue Line):** Allocated budget

This chart provides visual comparison of actual spend, forecasted spend, and total allocated budget for the entire year across all projects.

#### Filtering Options

Filter budget details by selecting:
- **Projects:** One or more projects
- **Organizations:** Different organizations
- **Project Groups:** Specific project groups

These filters enable viewing budget data at different levels, making it easier to analyze spending patterns.

#### Budget Management Table

Displays detailed budget information for each project:

**Columns:**
- Project Name
- Budget Name
- Budget Period (Annual, Quarterly)
- Allocated Budget
- Threshold (percentage for budget alerts)
- Actions (View, Lock, Unlock)

### Actions

**View:**
- Click View icon to expand row
- Shows detailed information:
  - Allocated Budget (broken down by month/period)
  - Used Budget (amount spent so far)
  - Forecast (forecasted spend with adjustments)
  - Threshold (alert percentage)
  - Alert Notifications (email addresses for alerts)

## Creating a New Budget

Click the **Create** icon to open the Create Budget form.

### Form Fields

- **Budget Name:** Unique identifier for your budget
  - Example: Budget_Beta, Project_Alpha_Budget
  
- **Project:** Select the associated project from dropdown
  - Example: TestProject_Demo, Project_Data
  
- **Period:** Choose budget cycle
  - Options: Annually or Quarterly
  - Example: Annually
  
- **Start Date:** Select month and year when budget period begins
  - Example: June 2025
  
- **Allocated Budget ($):** Total amount allocated for selected period
  - Example: $120,000
  
- **Escalation Type:** Define how forecast approvals are escalated
  - Options: Percentage or Absolute Amount
  
- **Escalation Value ($ or %):** Threshold for auto-approval
  - Example: 70% means requests within 70% of approved forecast auto-approve
  - Example: $50,000 means requests within this amount don't require manual escalation

This mechanism streamlines approvals, reduces delays, and ensures faster processing of routine forecast changes within acceptable risk limits.

Once all fields are filled, click **Create Budget**. The new budget is added to the system.

## Editing a Budget

After creating a budget, you can update it by clicking the **Edit** icon.

The form opens pre-filled with existing values. You can modify:
- Budget Name
- Period (Annual to Quarterly or vice versa)
- Escalation Type and Value

Click **Update** to save changes.

## Lock/Unlock Budgets

The lock/unlock feature ensures budget integrity:

- **Locking:** Prevents any changes to budget or forecast. Ideal for finalized budgets.
- **Unlocking:** Allows editing if required by authorized users.

### Permissions

- **Workspace Admins/Users:** Can lock/unlock budgets
- **Project Admins/Users:** Can only view budgets; cannot lock or edit them

**Note:** When a budget is locked, create/edit options are disabled until it's unlocked by an authorized user.

You can also use **Lock All** / **Unlock All** buttons at the top to apply changes across all budgets.

## User Permissions for Budgeting

| Role | Create | Edit | Lock/Unlock | View |
|------|--------|------|-------------|------|
| Workspace Admin | ✅ | ✅ | ✅ | ✅ |
| Workspace User | ✅ | ✅ | ✅ | ✅ |
| Project Admin | ❌ | ❌ | ❌ | ✅ |
| Project User | ❌ | ❌ | ❌ | ✅ |

## Budget Monitoring

### Threshold Alerts

Configure alert thresholds to receive notifications when spending approaches limits:

**Common Thresholds:**
- 50% - Early warning
- 75% - Attention needed
- 90% - Critical alert
- 100% - Budget exceeded

**Alert Recipients:**
- Project owners
- Finance team
- Department heads
- Custom email lists

### Budget Variance Analysis

Track differences between budgeted and actual spending:

**Variance Metrics:**
- Absolute variance ($ difference)
- Percentage variance (% over/under)
- Trending (improving/declining)
- Forecast accuracy

## Best Practices

### Budget Planning

1. **Historical Analysis:**
   - Review past spending patterns
   - Account for growth trends
   - Consider seasonal variations

2. **Stakeholder Input:**
   - Consult with project teams
   - Understand upcoming initiatives
   - Factor in business changes

3. **Contingency Buffer:**
   - Add 10-15% buffer for unexpected costs
   - Account for price increases
   - Plan for new services

### Budget Monitoring

1. **Regular Reviews:**
   - Weekly for high-variance projects
   - Monthly for stable projects
   - Quarterly comprehensive reviews

2. **Proactive Management:**
   - Address variances early
   - Adjust forecasts as needed
   - Communicate with stakeholders

3. **Documentation:**
   - Record all budget changes
   - Document variance causes
   - Track optimization actions

---

## Related Documentation

- [Forecasting](forecasting.md) - Forecast management
- [Cost Assignment](../cost-management/cost-assignment.md) - Cost allocation
- [Billing Analysis](../billing-analysis/multi-cloud-billing.md) - Spend analysis

---

*For budget management support, contact your finance team or CloudPi administrator.*
