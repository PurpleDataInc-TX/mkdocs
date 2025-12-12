# Shared Costs Management

## Overview

The **Shared Costs** page allows you to **view and manage shared cost allocations between projects**. This ensures that expenses related to shared services (e.g., infrastructure, networking, security services) are fairly distributed across relevant projects.

## What are Shared Costs?

Shared costs are cloud expenses that benefit multiple projects but are billed to a single account or resource. Examples include:

- **Shared Infrastructure:** VPNs, load balancers, NAT gateways
- **Central Services:** Monitoring tools, logging platforms, security scanning
- **Network Costs:** Data transfer, VPC endpoints, Direct Connect
- **Platform Services:** Container registries, artifact repositories
- **Management Tools:** Cost management platforms, CMDB systems

Without shared cost allocation, one project bears the full burden of costs that actually benefit many projects.

## Why Allocate Shared Costs?

### Fair Cost Attribution

- Projects pay proportionally for what they use
- Prevents one team from subsidizing others
- Accurate chargeback and showback reporting

### Better Decision Making

- True cost of running each project
- Informed decisions about resource usage
- Identifies opportunities to consolidate or optimize

### Budget Accuracy

- Budgets reflect actual consumption
- More accurate forecasting
- Prevents budget surprises

## Creating a Shared Cost

### Step 1: Navigate to Shared Costs

1. Go to **Billing Hub** from the main navigation
2. Select **Shared Costs**
3. Click **"+ Create Shared Cost"** button

### Step 2: Select Billing View

1. A form dialog opens
2. **Select Billing View** from the dropdown
   - This defines which costs will be shared
   - Example: "VPN_Gateway_Costs", "Monitoring_Infrastructure"
3. The billing view should filter to the specific shared service

### Step 3: Select Time Period

Choose the duration for cost sharing:
- **Yearly** - Allocate for entire year
- **Quarterly** - Q1, Q2, Q3, Q4
- **Monthly** - Specific month
- **Custom Range** - Define start and end dates

### Step 4: Add Target Projects

This is where you define how costs are split:

1. Click **"+ Add Project"** or the plus icon
2. **Select Project** from dropdown
   - Choose the project that will receive a portion of the shared cost
3. **Specify Percentage (%)** 
   - Enter the allocation percentage (must total 100% across all projects)
   - Example: Project A gets 40%, Project B gets 60%
4. Click **"+ Add"** icon to add additional projects
5. Repeat until you've added all projects that share this cost

**Example Allocation:**
- VPN Gateway Cost: $10,000/month
- Engineering Project: 50% = $5,000
- Data Science Project: 30% = $3,000
- QA Project: 20% = $2,000
- **Total: 100%**

### Step 5: Enter Note (Optional but Recommended)

Provide context for the shared cost:
- Why is this cost being shared?
- What service does it represent?
- How were percentages determined?

**Example Note:**
> "This resource is part of a shared infrastructure and is utilized by multiple teams. Allocation based on estimated usage from network traffic analysis."

### Step 6: Save the Shared Cost

1. Review all settings
2. Verify percentages add to 100%
3. Click **"Save"**
4. The shared cost entry is created with status **"Pending"**

## Understanding Shared Cost Status

### Pending Status

**What it means:**
- Shared cost allocation has been proposed
- Waiting for acceptance from receiving projects
- Not yet reflected in project costs

**Who can see it:**
- Creator
- Project admins of receiving projects
- Workspace admins

**Actions available:**
- Accept
- Reject
- Edit
- Delete

### Accepted Status

**What it means:**
- All receiving projects have accepted the allocation
- Costs are now reflected in each project's billing
- Permanent record of the allocation

**Who can see it:**
- All users with access to involved projects
- Workspace admins

**Actions available:**
- View details
- Edit (creates new pending allocation)
- End allocation (set end date)

## Viewing Shared Costs

### Shared Costs List

The main page shows a table of all shared cost entries:

**Columns:**
- **Billing Name:** Service or resource category being shared
  - Examples: "Servicename", "Regions", "VPN_Gateway"
- **Shared Projects:** Allocation direction
  - Format: "Source Project → Target Projects"
  - Example: "NPDDev → CPDev, Engineering"
- **Note:** Additional context information
- **Status:** Pending (yellow) or Accepted (green)
- **Time Period:** Duration the allocation is active
  - Start date
  - End date (if set)
- **Actions:** View, Edit, Delete options

### Filtering Shared Costs

Use the **"Select Project"** dropdown to:
- Filter shared costs related to a specific project
- View only allocations where project is source or target
- Quickly find relevant allocations

## Viewing Shared Cost Details

### Detailed Information View

1. In the Shared Costs list, locate the entry
2. Click the **Actions menu** (three dots)
3. Select **"View"**
4. A detail panel opens showing:

**Allocation Details:**
- Billing view used
- Service name or category
- Total cost being allocated
- Time period (start and end dates)

**Project Allocations:**
- List of all receiving projects
- Percentage allocated to each
- Calculated cost for each project (total cost × percentage)

**Notes and Context:**
- Purpose of the sharing
- How percentages were determined
- Any special considerations

**Status Information:**
- Current status (Pending/Accepted)
- Who created the allocation
- When it was created
- Accept/reject history (if applicable)

### Accepting or Rejecting (Pending Status Only)

If you're a project admin for a receiving project and the status is **Pending**:

1. View the shared cost details
2. Review the allocation carefully:
   - Is the percentage fair?
   - Does your project actually use this resource?
   - Is the total cost reasonable?
3. Choose action:
   - **Accept:** Cost will be added to your project
   - **Reject:** Cost will not be allocated to your project

**Important:** If any project rejects, the entire allocation may need to be reconfigured.

## Editing a Shared Cost

### Editing Accepted Allocations

1. Navigate to the shared cost entry
2. Click **Actions → Edit**
3. Modify any field:
   - Billing view
   - Time period
   - Project allocations
   - Percentages
   - Notes
4. Click **"Save Changes"**

**Important:** Editing an accepted allocation creates a NEW pending allocation. The original accepted allocation remains until the new one is accepted.

### Editing Pending Allocations

1. Navigate to the shared cost entry
2. Click **Actions → Edit**
3. Make desired changes
4. Click **"Save Changes"**
5. Updated allocation remains in pending status
6. Receiving projects may need to re-accept

## Deleting a Shared Cost

### When to Delete

- Shared service is decommissioned
- Projects no longer share the resource
- Allocation was created in error
- Switching to different allocation method

### Deletion Process

1. Navigate to the shared cost entry
2. Click **Actions → Delete**
3. Confirm deletion
4. Cost allocation is removed

**Important:** 
- Deleting removes the allocation from all projects
- Historical data in billing views remains
- Cannot be undone

### Deletion Permissions

| User Role | Can Delete Own | Can Delete Others' |
|-----------|---------------|-------------------|
| Workspace Admin | ✅ | ✅ |
| Workspace User | ✅ | ❌ |
| Project Admin | ✅ | ❌ |
| Project User | ❌ | ❌ |

## Best Practices

### Determining Fair Allocations

1. **Usage-Based:**
   - Measure actual resource consumption
   - Use CloudWatch metrics, network traffic data
   - Most accurate but requires measurement

2. **Size-Based:**
   - Allocate by team size or project scale
   - Simple but may not reflect actual usage
   - Good for general overhead

3. **Equal Split:**
   - Divide evenly among all projects
   - Simplest approach
   - Suitable for broadly shared services

4. **Negotiated:**
   - Teams agree on fair percentages
   - Consider business value and budget
   - Requires governance

### Documentation

Always include detailed notes explaining:
- What service is being shared
- How percentages were calculated
- When allocation should be reviewed
- Who to contact with questions

### Review and Adjustment

- Review allocations quarterly
- Adjust percentages as usage patterns change
- End allocations when services are decommissioned
- Communicate changes to affected teams

### Governance

Establish rules for shared costs:
- Who can create allocations?
- How are disputes resolved?
- What approval process is required?
- How often are allocations reviewed?

## Common Shared Cost Scenarios

### Scenario 1: Shared VPN Gateway

**Situation:** Central VPN gateway costs $5,000/month, used by 3 projects

**Allocation:**
- Engineering (heavy users): 50% = $2,500
- Data Science (moderate): 30% = $1,500
- QA (light users): 20% = $1,000

**Billing View:** Filter to VPN gateway service
**Time Period:** Monthly recurring

### Scenario 2: Monitoring Platform

**Situation:** CloudWatch/monitoring costs $10,000/month for entire organization

**Allocation:**
- 5 equal projects: 20% each = $2,000
- Fair for shared observability
- All teams benefit equally

**Billing View:** Filter to monitoring services
**Time Period:** Yearly

### Scenario 3: Data Transfer Costs

**Situation:** Inter-region data transfer $15,000/month

**Allocation:**
- Based on measured data transfer volume:
  - Project A: 60% = $9,000 (largest data consumer)
  - Project B: 25% = $3,750
  - Project C: 15% = $2,250

**Billing View:** Filter to data transfer charges
**Time Period:** Monthly, reviewed quarterly

## Integration with Other Features

### Impact on Billing Analysis

Shared costs appear in billing analysis:
- Allocated costs show in receiving projects
- Original billing view shows source costs
- Total costs remain accurate
- Historical data preserved

### Impact on Budgets

Shared costs affect project budgets:
- Allocated amounts count toward budget
- Must account for shared costs in planning
- Budget alerts include shared costs
- Forecast should include expected allocations

### Impact on Showback/Chargeback

Shared costs enable accurate chargeback:
- True cost of running each project
- Fair attribution of infrastructure costs
- Complete cost picture for business units
- Justifiable allocation methodology

## Troubleshooting

### Percentages Don't Add to 100%

**Error:** System prevents saving if total ≠ 100%

**Solution:**
- Check all project percentages
- Adjust percentages to total exactly 100%
- Remove projects if necessary
- Add missing projects

### Project Cannot Accept Allocation

**Possible Causes:**
- Insufficient permissions
- Project budget will be exceeded
- Project admin not notified

**Solutions:**
- Verify project admin role
- Check budget constraints
- Resend notification
- Contact workspace admin

### Shared Cost Not Showing in Project

**Possible Causes:**
- Status still pending
- Not yet accepted by project
- Time period hasn't started
- Billing data not yet processed

**Solutions:**
- Check status (must be Accepted)
- Ensure all projects accepted
- Wait for billing data refresh (24-48 hours)
- Verify time period includes current date

### Cannot Edit Shared Cost

**Possible Causes:**
- Insufficient permissions
- Allocation already accepted
- Linked to generated invoices

**Solutions:**
- Check user role permissions
- Create new allocation instead of editing
- Contact workspace admin
- Coordinate with receiving projects

---

## Related Documentation

- [Multi-Cloud Billing](multi-cloud-billing.md) - Cost analysis
- [Billing Views](billing-views.md) - Filter configurations
- [Invoicing](invoicing.md) - Customer invoices
- [Cost Assignment](../cost-management/cost-assignment.md) - Project cost allocation

---

*For shared cost management assistance, contact your FinOps team or CloudPi support.*
