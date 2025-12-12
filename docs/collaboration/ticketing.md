# Ticketing System

CloudPi's ticketing system integrates with external workflow tools to manage support requests and track issue resolution.

## Overview

The ticketing feature allows you to:
- Create and manage tickets from within CloudPi
- Integrate with external systems (Jira, ServiceNow, Azure DevOps)
- Track ticket status automatically
- Link tickets to cost optimization activities

## Supported Ticketing Systems

CloudPi integrates with:
- **Jira** - Atlassian's issue tracking platform
- **ServiceNow** - IT service management platform
- **Azure DevOps** - Microsoft's DevOps platform

**Note:** Only one ticketing provider can be active per workspace at a time.

## Prerequisites

Before using the ticketing system:
1. Ticketing integration must be configured by Workspace Admin
2. User must have appropriate permissions
3. External ticketing system must be accessible

For configuration instructions, see: [Ticket Provider Integration](../security-integrations/ticket-providers.md)

## Accessing the Ticketing Page

1. Navigate to **Ticketing** from the main navigation menu
2. View all tickets with filtering and search options

## Ticket Information Display

Each ticket shows:
- **Title** - Brief issue description
- **Description** - Detailed problem statement
- **Priority** - Low, Medium, High
- **Status** - Current state (New, In Progress, Resolved, Closed)
- **Ticketing Tool** - System where ticket exists (Jira, ServiceNow, ADO)
- **Project** - Associated CloudPi project
- **Created Date** - When ticket was raised
- **External Link** - Direct link to ticket in external system

## Creating a Ticket

### From the Ticketing Page

#### Step 1: Open Create Ticket Form

Click the **"+ Create Ticket"** button on the Ticketing page

#### Step 2: Enter Ticket Details

| Field | Description | Required |
|-------|-------------|----------|
| **Title** | Short, clear issue summary | Yes |
| **Description** | Detailed problem description (16-2048 characters) | Yes |
| **Priority** | Severity level: Low, Medium, High | Yes |
| **Project** | Select related CloudPi project | Yes |
| **Submit To** | Choose: Jira, ServiceNow, or Azure DevOps | Auto-filled |

#### Step 3: Submit Ticket

1. Review all information
2. Click **"Raise Ticket"** button
3. Ticket is created in external system
4. Confirmation message displays with ticket link

### From Recommendations

Create tickets directly from optimization recommendations:

1. Navigate to **Recommendations** page
2. Select one or more recommendations
3. Click **"Raise a Request"** button
4. Form is pre-filled with:
   - Title from recommendation
   - Description with technical details
   - Priority based on potential savings
   - Associated project
5. Review and adjust if needed
6. Click **"Raise Ticket"**

### From the Header

Quick ticket creation from anywhere:
1. Click **"Create Ticket"** in the top header
2. Fill in ticket details
3. Submit

## Managing Tickets

### Viewing Ticket Details

Click on any ticket row to view:
- Complete description
- All comments/updates
- Status history
- Linked recommendations
- Associated project details

### Filtering Tickets

**Filter By:**
- **Status** - New, In Progress, Resolved, Closed
- **Priority** - Low, Medium, High
- **Project Group** - Filter by business unit or cloud provider
- **Date Range** - Created within specific timeframe

**Search By:**
- Ticket title keywords
- Description text
- Project name
- Ticket ID

### Ticket Status Synchronization

CloudPi automatically syncs ticket status from external systems:

**Sync Frequency:** Every 15 minutes

**Status Mapping:**

| CloudPi Status | Jira Status | ServiceNow Status | ADO Status |
|----------------|-------------|-------------------|------------|
| New | Open, To Do | New | New, To Do |
| In Progress | In Progress | In Progress, Work in Progress | Active, In Progress |
| Resolved | Done, Resolved | Resolved | Resolved |
| Closed | Closed | Closed | Closed, Done |

**Additional Information Synced:**
- Assignee name
- Last update timestamp
- Comments (if applicable)
- Resolution notes

### Opening External Tickets

To view ticket in the external system:
1. Click the **external link icon** next to the ticket
2. Opens ticket in Jira/ServiceNow/ADO in new tab
3. Requires authentication to external system

## Ticket Workflow

### Typical Ticket Lifecycle

```
1. New → 2. In Progress → 3. Resolved → 4. Closed
```

**New:**
- Just created
- Awaiting assignment or triage

**In Progress:**
- Assigned to team member
- Work underway
- May include investigation, implementation, testing

**Resolved:**
- Solution implemented
- Awaiting verification or approval

**Closed:**
- Verified as resolved
- No further action needed

## Project Routing

If ticket routing is configured, tickets are automatically routed to appropriate:
- **Jira Project & Component**
- **ServiceNow Assignment Group**
- **Azure DevOps Area Path**

Based on the CloudPi project selected when creating the ticket.

For configuration, see: [Ticket Provider Integration - Project Routing](../security-integrations/ticket-providers.md#project-routing-configuration)

## Integration Features

### Automatic Ticket Creation

Configure workflows to automatically create tickets when:
- Budget thresholds exceeded
- Cost anomalies detected
- Critical recommendations generated
- Policy violations occur

### Bi-Directional Sync

- Changes in external system reflect in CloudPi
- Comments added externally appear in CloudPi (if supported)
- Status updates propagate automatically

### Ticket Analytics

View metrics on:
- Tickets created per month
- Average resolution time
- Tickets by priority
- Tickets by project
- Open vs. closed tickets trend

## User Permissions

### Workspace Admin / Workspace User
- ✅ Create tickets for any project
- ✅ View all tickets
- ✅ Configure ticket integrations
- ✅ Set up project routing

### Project Admin
- ✅ Create tickets for their projects
- ✅ View project tickets
- ✅ Update ticket information

### Project User
- ✅ Create tickets for assigned projects
- ✅ View tickets they created
- ✅ Comment on tickets
- ❌ Cannot configure integrations

## Best Practices

### Ticket Creation

1. **Use Descriptive Titles** - Clear problem statement
2. **Provide Full Context** - Include relevant details
3. **Set Appropriate Priority** - Match urgency and impact
4. **Link to Recommendations** - Provide supporting data
5. **Include Steps to Reproduce** - For technical issues

### Priority Guidelines

**High Priority:**
- Production cost overruns
- Security vulnerabilities
- Critical resource issues
- Compliance violations

**Medium Priority:**
- Optimization opportunities
- Performance improvements
- Feature requests
- Non-urgent bugs

**Low Priority:**
- Minor improvements
- Documentation updates
- Enhancement requests

### Ticket Management

1. **Check Status Regularly** - Monitor progress
2. **Add Updates** - Keep stakeholders informed
3. **Close When Resolved** - Don't leave tickets open
4. **Track Savings** - Note cost reductions achieved
5. **Reference in Reports** - Link to successful optimizations

## Troubleshooting

### Ticket Not Creating

**Possible Causes:**
- Integration not configured
- Network connectivity issues
- Invalid credentials
- External system unavailable

**Solution:**
- Verify integration status in Admin Settings
- Test connection
- Check external system status
- Contact administrator

### Status Not Syncing

**Possible Causes:**
- Sync interval not elapsed (15 minutes)
- External ticket doesn't exist
- API permissions insufficient

**Solution:**
- Wait for next sync cycle
- Verify ticket exists in external system
- Check integration permissions
- Force refresh the page

### Cannot Access External Link

**Possible Causes:**
- Not authenticated to external system
- Ticket moved or deleted
- Network restrictions

**Solution:**
- Log in to external system first
- Verify ticket still exists
- Check network/firewall settings

---

## Tips for Effective Ticketing

1. **Create Tickets Early** - Don't delay until issues escalate
2. **Link Cost Data** - Quantify financial impact
3. **Use Templates** - Standardize common ticket types
4. **Track Patterns** - Identify recurring issues
5. **Measure Success** - Track cost savings from tickets
6. **Close Loop** - Update CloudPi when tickets resolve
7. **Integrate Workflows** - Automate ticket creation from policies

---

*The ticketing system bridges CloudPi cost management with your organization's IT service management processes, ensuring optimization work is tracked and completed.*
