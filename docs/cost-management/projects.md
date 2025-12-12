# Projects in Cost Assignment

After creating rules, organize them into Projects for tracking and budget allocation.

## What is a Project?

A Project in CloudPi is a logical grouping of:
- Cloud resources (based on rules)
- Budget allocations
- Cost tracking
- Team access
- Financial reporting

## Purpose of Projects

Projects enable:
- **Cost Tracking** - Monitor spending by business unit/application
- **Budget Management** - Allocate and track budgets
- **Chargeback/Showback** - Generate invoices per project
- **Team Collaboration** - Assign ownership and access
- **Reporting** - Generate project-specific reports

## Accessing Projects

1. Navigate to **Cost Management** → **Cost Assignment**
2. Click **Projects** tab
3. View all existing projects organized by project groups

## Projects Page Overview

### Project Groups Display

Projects are organized within **Project Groups** (departments/business units).

**Each Project Group Card Shows:**
- Project group name
- Number of projects within group
- Total cost for current month
- Click to expand and view projects

### Projects Table

When you expand a project group, you see:

| Column | Description |
|--------|-------------|
| **Project ID** | Unique identifier |
| **Project Name** | Descriptive name |
| **Description** | Purpose/scope |
| **Project Owner** | Responsible person/team |
| **Cost** | Current month spending |
| **Status** | Active/Inactive |
| **Actions** | View, Edit, Delete |

## Creating a New Project

### Step 1: Click Create Project

1. Click **Create Project** button (top right)
2. Project creation form opens

### Step 2: Enter Project Details

| Field | Description | Required | Example |
|-------|-------------|----------|---------|
| **Project Name** | Unique identifier | Yes | "Mobile App Production" |
| **Project Group** | Organizational grouping | Yes | "Engineering" |
| **Description** | Purpose and scope | Yes | "Production workloads for mobile application" |
| **Cloud Service Provider** | AWS, Azure, or GCP | Yes | AWS |
| **Organization Name** | Cloud organization | Yes | "Production-AWS" |
| **Rules** | Cost assignment rules | Yes | Select 1+ rules |
| **Project Icon** | Visual identifier | No | Choose from library |
| **Enable Self Tag** | Auto-assignment by tag | No | ☑ Enabled |

### Step 3: Select Rules

**Rules Selection:**
1. Dropdown shows available rules for selected organization
2. Select one or more rules
3. Selected rules determine which costs flow to project

**Rule Assignment Options:**

**Single Rule:**
- Project gets all costs from that rule
- Simple, clean attribution

**Multiple Rules:**
- Project aggregates costs from multiple rules
- Useful for complex projects spanning multiple accounts/tags

**Example:**
```
Project: "Mobile App"
Rules Selected:
  - AT_AWS-Prod_App=Mobile (production costs)
  - AT_AWS-Dev_App=Mobile (development costs)
Result: Project shows combined prod + dev costs
```

### Step 4: Enable Self Tag (Optional)

**Self Tag Feature:**

When enabled, any resource tagged with a tag matching the **Project ID** is automatically assigned to this project.

**How It Works:**
```
Project ID: "proj-12345"
Project Name: "Mobile App"

If Self Tag Enabled:
  - Any resource with tag "ProjectID=proj-12345"
  - Automatically attributed to "Mobile App" project
  - No additional rules needed
```

**Benefits:**
- Simplifies tagging strategy
- Automatic cost attribution
- Works across accounts
- Easy for teams to implement

**Best Practice:**
- Include ProjectID in mandatory tags policy
- Document project IDs for teams
- Automate tag application in IaC

### Step 5: Choose Project Icon

**Icon Selection:**
- Visual identifier for dashboards
- Makes project easy to recognize
- Choose from icon library or upload custom

**Icon Library Includes:**
- Cloud provider logos
- Service type icons
- Custom uploaded images

### Step 6: Create Project

1. Review all entered information
2. Click **Create Project** button
3. Project created and appears in project list
4. Costs begin flowing based on selected rules

## Managing Existing Projects

### Viewing Project Details

**To View:**
1. Click **View** icon in Actions column
2. See complete project information:
   - All project settings
   - Associated rules
   - Current month costs
   - Historical cost trends
   - Assigned users
   - Budget information (if configured)

### Editing Projects

**To Edit:**
1. Click **Edit** icon in Actions column
2. Modify project details:
   - ✅ Project name
   - ✅ Description
   - ✅ Rules (add/remove)
   - ✅ Project icon
   - ✅ Self tag setting
   - ❌ Cannot change: Project ID, CSP, Organization

3. Click **Update** to save changes

**Common Edit Scenarios:**

**Adding Rules:**
- Project scope expanding
- New subaccounts added
- Additional services included

**Removing Rules:**
- Service decommissioned
- Cost attribution changed
- Consolidating projects

**Changing Description:**
- Scope evolved
- Ownership changed
- Clarification needed

### Deleting Projects

⚠️ **Warning:** Project deletion is permanent

**To Delete:**
1. Click **Delete** icon in Actions column
2. Confirmation dialog appears:
   ```
   Delete project "Mobile App"?
   This will:
   - Remove project from system
   - Unassign all users
   - Delete budget allocations
   - Mark associated costs as unassigned
   
   Historical data retained for reporting.
   This action cannot be undone.
   ```
3. Type project name to confirm
4. Click **Delete Permanently**

**What Happens:**
- ✅ Project removed from active list
- ✅ Rules remain (can be used in other projects)
- ✅ Historical data retained in reports
- ✅ Users retain access to other projects
- ❌ Cannot be recovered
- ❌ Budget allocations deleted

**When to Delete:**
- Project permanently ended
- Services fully decommissioned
- Duplicate project created by mistake

**Alternative to Deletion:**
- **Make Inactive** - Preserves project but stops new costs
- **Archive** - Move to archived project group

## Project Cost Flow

### How Costs are Attributed

```
1. Cloud Provider Bill Generated
   ↓
2. CloudPi Ingests Billing Data
   ↓
3. Rules Applied to Determine Attribution
   ↓
4. Costs Assigned to Projects (based on rules)
   ↓
5. Project Cost Totals Updated
   ↓
6. Available in Reports & Dashboards
```

### Cost Attribution Logic

**Single Rule Projects:**
```
Project A has Rule 1
All costs matching Rule 1 → Project A
```

**Multiple Rule Projects:**
```
Project A has Rule 1, Rule 2, Rule 3
Costs matching Rule 1 → Project A
Costs matching Rule 2 → Project A  
Costs matching Rule 3 → Project A
Total Project A Cost = Sum of all three rules
```

**Overlapping Rules (Different Projects):**
```
Rule 1: Account=123, Tag=Env=Prod
Rule 2: Account=123, Tag=App=WebApp

If properly designed (mutually exclusive):
  Resources with Env=Prod → Project A
  Resources with App=WebApp → Project B
  
If overlap exists:
  Resources with BOTH tags → Conflict (CloudPi prevents)
```

## Project Grouping

### Project Groups

Projects are organized into **Project Groups** representing:
- Departments (Engineering, Marketing, Sales)
- Business Units (North America, Europe, APAC)
- Product Lines (Product A, Product B)
- Environments (Production, Development, Staging)

### Benefits of Project Groups

1. **Organizational Alignment** - Mirror company structure
2. **Aggregated Reporting** - Roll-up costs by group
3. **Access Control** - Grant group-level access
4. **Budget Allocation** - Allocate budgets to groups
5. **Executive Visibility** - High-level group summaries

### Creating Project Groups

1. Navigate to **Cost Management** → **Project Groups**
2. Click **Create Project Group**
3. Enter:
   - Group name
   - Description
   - Owner/department
4. Click **Create**

### Moving Projects Between Groups

1. Edit project
2. Change **Project Group** dropdown
3. Save
4. Project moves to new group

## Project Users and Access

### Assigning Users to Projects

Users can be assigned project-specific roles:
- **Project Admin** - Full project management
- **Project User** - View and basic operations

**To Assign:**
1. Admin Settings → User Management
2. Invite user or edit existing
3. Select project(s)
4. Assign role per project
5. Save

### Project Permissions

**What Project Admins Can Do:**
- ✅ Edit project settings
- ✅ Modify rules assignment
- ✅ Add/remove project users
- ✅ Create budgets
- ✅ Generate reports

**What Project Users Can Do:**
- ✅ View project costs
- ✅ Access project reports
- ✅ Create tasks/tickets
- ✅ View recommendations
- ❌ Cannot modify project settings

## Project Lifecycle

### Typical Project Lifecycle

```
1. Planning
   - Define scope
   - Identify resources
   - Create tagging strategy
   
2. Creation
   - Create project in CloudPi
   - Assign rules
   - Configure settings
   
3. Active Management
   - Monitor costs
   - Set budgets
   - Optimize resources
   - Generate reports
   
4. Evolution
   - Add/remove services
   - Adjust rules
   - Modify budget
   
5. Completion
   - Document lessons learned
   - Archive or delete
   - Reassign resources
```

## Best Practices

### Project Creation

1. **Clear Naming** - Use descriptive, consistent names
2. **Comprehensive Description** - Document purpose and scope
3. **Start Simple** - Begin with broader rules, refine later
4. **Plan for Growth** - Consider future expansion
5. **Document Ownership** - Clear accountability

### Project Management

1. **Regular Reviews** - Monthly cost review
2. **Budget Alignment** - Set and monitor budgets
3. **Access Control** - Grant least privilege
4. **Tag Compliance** - Ensure resources properly tagged
5. **Cleanup** - Archive/delete unused projects

### Rule Assignment

1. **Avoid Overlaps** - Ensure rules are mutually exclusive
2. **Complete Coverage** - Minimize unassigned costs
3. **Logical Grouping** - Rules should make business sense
4. **Document Logic** - Explain rule selection
5. **Test First** - Verify costs before finalizing

## Reporting and Analysis

### Project-Level Reports Available

- **Cost Trends** - Historical spending patterns
- **Budget vs. Actual** - Budget performance
- **Service Breakdown** - Costs by cloud service
- **Resource Inventory** - What's in the project
- **Optimization Opportunities** - Cost-saving recommendations
- **Tag Compliance** - Tagging status

### Accessing Reports

1. Navigate to **Dashboards**
2. Select project from filter
3. Choose report type
4. View, export, or share

### Invoicing from Projects

Projects enable chargeback:
1. Navigate to **Billing Analysis** → **Invoicing**
2. Select project
3. Generate invoice
4. Send to stakeholders

## Troubleshooting

### Project Showing Zero Costs

**Possible Causes:**
- No rules assigned
- Rules not matching any resources
- Data not yet synced

**Solutions:**
1. Verify rules are assigned
2. Check rule criteria
3. Wait for billing data sync (runs hourly)
4. Review Cost Assignment page for unassigned costs

### Unexpected Costs in Project

**Possible Causes:**
- Rule too broad
- Unintended resources match rule criteria
- Rule conflict

**Solutions:**
1. Review project rules
2. Check which resources are included
3. Refine rules with more specific criteria
4. Add exclusions if needed

### Cannot Edit Project

**Possible Causes:**
- Insufficient permissions
- Project locked by admin
- Budget locked for period

**Solutions:**
1. Verify you're Project Admin or Workspace Admin
2. Check project lock status
3. Contact administrator

---

## Summary

Projects are the foundation of cost management in CloudPi, enabling:
- Clear cost attribution
- Budget management
- Team collaboration  
- Financial reporting
- Optimization focus

Proper project setup and management ensures accurate cost tracking and enables data-driven optimization decisions.

---

**Next:** Explore [Team Collaboration](../collaboration/task-management.md) features
