# Ticket Provider Configuration Guide

This guide explains how CloudPi administrators can configure external ticket management systems (Azure DevOps, Jira, or ServiceNow) to create and track tickets from cost optimization recommendations.

---

## Table of Contents

1. [Overview](#overview)
2. [Supported Providers](#supported-providers)
3. [Prerequisites](#prerequisites)
4. [Accessing Ticket Provider Settings](#accessing-ticket-provider-settings)
5. [Configuring Azure DevOps (ADO)](#configuring-azure-devops-ado)
6. [Configuring Jira](#configuring-jira)
7. [Configuring ServiceNow](#configuring-servicenow)
8. [Testing Your Connection](#testing-your-connection)
9. [Project Routing Configuration](#project-routing-configuration)
10. [Creating Tickets](#creating-tickets)
11. [Ticket Status Synchronization](#ticket-status-synchronization)
12. [Disconnecting a Provider](#disconnecting-a-provider)
13. [Troubleshooting](#troubleshooting)
14. [FAQ](#faq)

---

## Overview

CloudPi's Ticket Provider Integration allows you to:

- **Create tickets** directly from cost optimization recommendations
- **Route tickets** to specific projects/areas based on your CloudPi project structure
- **Track ticket status** with automatic synchronization from your external tool
- **View ticket links** to quickly navigate to the external ticket

**Important**: Only one ticket provider can be active per workspace at a time.

---

## Supported Providers

| Provider | Ticket Type | Authentication |
|----------|-------------|----------------|
| **Azure DevOps** | Work Items (Task, Bug, User Story, etc.) | Personal Access Token (PAT) |
| **Jira** | Issues | API Token + Email |
| **ServiceNow** | Incidents | Username + Password |

---

## Prerequisites

Before configuring a ticket provider, ensure you have the required credentials:

### Azure DevOps (ADO)

1. **Organization URL**: Your Azure DevOps organization URL
   - Format: `https://dev.azure.com/your-organization`
   - Or legacy: `https://your-organization.visualstudio.com`

2. **Personal Access Token (PAT)**:
   - Go to Azure DevOps > User Settings (top right) > Personal Access Tokens
   - Click **+ New Token**
   - Set the following:
     - **Name**: CloudPi Integration
     - **Organization**: Select your organization
     - **Expiration**: Set as needed (recommend 1 year)
     - **Scopes**: Select **Custom defined**, then enable:
       - **Work Items**: Read & Write
       - **Project and Team**: Read
   - Click **Create** and **copy the token immediately** (it won't be shown again)

### Jira

1. **Jira URL**: Your Atlassian Jira Cloud URL
   - Format: `https://your-domain.atlassian.net`

2. **Email**: The email address associated with your Atlassian account

3. **API Token**:
   - Go to [Atlassian API Tokens](https://id.atlassian.com/manage-profile/security/api-tokens)
   - Click **Create API token**
   - Enter a label: "CloudPi Integration"
   - Click **Create** and **copy the token**

### ServiceNow

1. **Instance URL**: Your ServiceNow instance URL
   - Format: `https://your-instance.service-now.com`

2. **Username**: ServiceNow integration user account

3. **Password**: Password for the integration user

4. **Required Roles**: The integration user needs:
   - `itil` role (for incident creation)
   - `rest_api_explorer` role (recommended)

---

## Accessing Ticket Provider Settings

1. Log in to CloudPi as an administrator
2. Navigate to **Admin Settings** from the sidebar
3. Click on **Ticket Providers**
   - Direct URL: `/workspace/adminsettings/ticket-providers`

You will see three provider cards: Azure DevOps, Jira, and ServiceNow.

---

## Configuring Azure DevOps (ADO)

### Step 1: Select Azure DevOps

Click on the **Azure DevOps** card to open the configuration dialog.

### Step 2: Enter Credentials

| Field | Description | Example |
|-------|-------------|---------|
| **Organization URL** | Your ADO organization URL | `https://dev.azure.com/mycompany` |
| **Personal Access Token** | The PAT you created | `xxxxxxxxxxxxxxxxxxxxxxxxxxxxx` |

Click **Next** to proceed.

### Step 3: Test Connection

Click **Test Connection**. If successful, you will see:
- A green success message
- A dropdown list of available projects in your ADO organization

### Step 4: Select Default Project

From the **Default Project** dropdown, select the project where tickets should be created by default.

### Step 5: Save & Activate

Click **Save & Activate**. The Azure DevOps card will now show "Active" status.

---

## Configuring Jira

### Step 1: Select Jira

Click on the **Jira** card to open the configuration dialog.

### Step 2: Enter Credentials

| Field | Description | Example |
|-------|-------------|---------|
| **Jira URL** | Your Atlassian Cloud URL | `https://mycompany.atlassian.net` |
| **Email** | Your Atlassian account email | `admin@mycompany.com` |
| **API Token** | The API token you created | `xxxxxxxxxxxxxxxxxxxxxxxxxxxxx` |
| **Default Project Key** | Jira project key | `INFRA` |

Click **Next** to proceed.

### Step 3: Test Connection

Click **Test Connection**. If successful, you will see:
- A green success message
- Confirmation of available projects

### Step 4: Save & Activate

Click **Save & Activate**. The Jira card will now show "Active" status.

---

## Configuring ServiceNow

### Step 1: Select ServiceNow

Click on the **ServiceNow** card to open the configuration dialog.

### Step 2: Enter Credentials

| Field | Description | Example |
|-------|-------------|---------|
| **Instance URL** | Your ServiceNow instance URL | `https://mycompany.service-now.com` |
| **Username** | Integration user account | `cloudpi_integration` |
| **Password** | Integration user password | `â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢` |
| **Default Assignment Group** | Default group for incidents | `Cloud Infrastructure` |

Click **Next** to proceed.

### Step 3: Test Connection

Click **Test Connection**. If successful, you will see a green success message.

### Step 4: Save & Activate

Click **Save & Activate**. The ServiceNow card will now show "Active" status.

---

## Testing Your Connection

After configuring a provider, it's important to verify the integration works:

### Quick Connection Test

1. Go to **Admin Settings > Ticket Providers**
2. Click on your active provider card
3. Click **Test Connection** in the dialog
4. Verify you see a success message

### Full Integration Test

1. Navigate to any cost recommendation in CloudPi
2. Click **Create Ticket**
3. Fill in the ticket details:
   - Title
   - Description
   - Priority
   - Project (if routing is configured)
4. Click **Create Ticket**
5. Verify:
   - Success message appears
   - A link to the external ticket is displayed
   - Click the link to confirm the ticket was created in your external system

---

## Project Routing Configuration

Project routing allows you to map CloudPi projects to specific destinations in your external tool.

### Why Use Project Routing?

- Route tickets from different CloudPi projects to different teams
- Automatically set area paths (ADO), components (Jira), or assignment groups (ServiceNow)
- Ensure tickets reach the right team without manual selection

### Configuring Routes

1. Go to **Admin Settings > Ticket Providers**
2. Scroll down to the **Project Routing** section (visible only when a provider is active)
3. You'll see a table of your CloudPi projects

### For Azure DevOps

| CloudPi Project | ADO Project | Area Path | Work Item Type |
|-----------------|-------------|-----------|----------------|
| AWS Infrastructure | CloudOps | CloudOps\AWS | Task |
| Azure VMs | CloudOps | CloudOps\Azure | Task |

Click the **Edit** icon to configure:
- **External Project**: Select from available ADO projects
- **Area Path**: Select from project area paths
- **Work Item Type**: Task, Bug, User Story, etc.

### For Jira

| CloudPi Project | Jira Project | Component |
|-----------------|--------------|-----------|
| AWS Infrastructure | INFRA | AWS |
| Azure VMs | INFRA | Azure |

### For ServiceNow

| CloudPi Project | Assignment Group | Category |
|-----------------|------------------|----------|
| AWS Infrastructure | Cloud Team | Cloud Compute |
| Azure VMs | Cloud Team | Virtual Machines |

### Default Routing

If a CloudPi project doesn't have a specific routing configured, tickets will be created in the **default project** you specified during provider setup.

---

## Creating Tickets

### From the Header Menu

1. Click the **Create Ticket** button in the top header
2. Fill in the form:
   - **Title**: Brief summary of the issue
   - **Description**: Detailed description (16-255 characters)
   - **Priority**: Low, Medium, or High
   - **Project**: Select a CloudPi project
3. Click **Create Ticket**

### From Recommendations

1. Navigate to a cost optimization recommendation
2. Click **Create Ticket** on the recommendation card
3. The form will be pre-filled with recommendation details
4. Review and click **Create Ticket**

### After Creation

Once a ticket is created:
- A success notification appears
- The ticket is linked to the recommendation
- You can click the external link to view the ticket in ADO/Jira/ServiceNow

---

## Ticket Status Synchronization

CloudPi automatically synchronizes ticket status from your external provider.

### How Sync Works

- **Polling Interval**: Every 15 minutes, CloudPi checks for status updates
- **Webhook Support**: For real-time updates, configure webhooks (optional)

### Status Mapping

CloudPi normalizes external statuses to a standard set:

| CloudPi Status | ADO Status | Jira Status | ServiceNow Status |
|----------------|------------|-------------|-------------------|
| **New** | New, To Do | Open, To Do | New |
| **Active** | Active, In Progress | In Progress | In Progress, Work in Progress |
| **Resolved** | Resolved | Done, Resolved | Resolved |
| **Closed** | Closed, Done | Closed | Closed |

### Viewing Sync Status

For each ticket linked to a recommendation, you can see:
- **External Status**: Current status in the external system
- **Assignee**: Who the ticket is assigned to (if available)
- **Last Synced**: When CloudPi last checked the status
- **External Link**: Click to open the ticket in the external system

### Webhook Configuration (Optional)

For real-time status updates, configure webhooks in your external system:

**Azure DevOps**:
1. Go to Project Settings > Service Hooks
2. Add a new webhook for Work Item events
3. Set URL: `https://your-cloudpi-instance/v1/ticket/update/adoStatus`

**Jira**:
1. Go to Settings > System > WebHooks
2. Add a webhook for Issue Updated events
3. Set URL: `https://your-cloudpi-instance/v1/ticket/update/jiraStatus`

**ServiceNow**:
1. Create a Business Rule on the Incident table
2. Set conditions for state changes
3. Call REST endpoint: `https://your-cloudpi-instance/v1/ticket/update/snowStatus`

---

## Disconnecting a Provider

To disconnect the current ticket provider:

1. Go to **Admin Settings > Ticket Providers**
2. Click the **Disconnect Provider** button (top right)
3. Confirm the disconnection

**Important Notes**:
- Existing tickets remain linked for historical reference
- Ticket status sync will stop for disconnected providers
- You can configure a different provider after disconnecting

---

## Troubleshooting

### Connection Test Fails

| Error | Cause | Solution |
|-------|-------|----------|
| **401 Unauthorized** | Invalid credentials | Verify PAT/API token is correct and not expired |
| **403 Forbidden** | Insufficient permissions | Check PAT scopes (ADO) or user roles (ServiceNow) |
| **404 Not Found** | Invalid URL | Verify organization/instance URL is correct |
| **Connection Timeout** | Network issue | Check firewall rules, ensure CloudPi can reach the provider |

### Tickets Not Creating

1. **Check Provider Status**: Ensure the provider shows "Active"
2. **Verify Credentials**: Test connection to confirm credentials work
3. **Check Project Access**: Ensure the integration user has access to the target project
4. **Review Logs**: Check CloudPi logs for detailed error messages

### Status Not Syncing

1. **Wait 15 Minutes**: Sync runs on a polling interval
2. **Check Ticket Link**: Verify the ticket exists in the external system
3. **Verify Permissions**: Ensure the integration user can read ticket status
4. **Force Refresh**: Hard refresh the CloudPi page to fetch latest data

### Routing Not Working

1. **Check Routing Table**: Verify the CloudPi project has a route configured
2. **Verify External Project Exists**: Ensure the target project/area still exists
3. **Default Fallback**: If no route exists, tickets go to the default project

---

## FAQ

### Can I use multiple providers at once?

No, only one ticket provider can be active per workspace. To switch providers, disconnect the current one first.

### What happens to existing tickets when I switch providers?

Existing tickets remain linked to their original provider for historical reference. Status sync will continue for those tickets if the original provider credentials are still valid.

### How do I update my credentials?

Click on the active provider card and go through the configuration steps again. Your existing configuration will be pre-filled.

### Can different users use different providers?

No, the ticket provider is configured at the workspace level and applies to all users in that workspace.

### What permissions does the integration user need?

| Provider | Required Permissions |
|----------|---------------------|
| **ADO** | Work Items: Read & Write; Project: Read |
| **Jira** | Project access, Create Issues permission |
| **ServiceNow** | itil role, ability to create incidents |

### How do I rotate credentials?

1. Generate a new PAT/API token in your external system
2. Go to CloudPi > Admin Settings > Ticket Providers
3. Click on your active provider
4. Update the credential field with the new token
5. Test connection to verify
6. Save & Activate

### Is there an API limit?

CloudPi respects provider rate limits. If you encounter rate limiting:
- ADO: 30 requests/second per user
- Jira: Varies by plan (typically 100-500/minute)
- ServiceNow: Varies by instance configuration

---

## Support

If you encounter issues not covered in this guide:

1. Check the CloudPi logs for detailed error messages
2. Contact your CloudPi administrator
3. Submit a support ticket at support@cloudpi.com

---

*Last Updated: December 2025*
