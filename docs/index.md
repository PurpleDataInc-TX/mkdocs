![User Guide](images/user-guide-img2.png)

# Introduction
CloudPi Ai is a multi-cloud cost management and governance platform by PurpleData Inc DBA CloudPi. This user guide introduces the core concepts, explains how to navigate the product, and links to detailed instructions for key workflows.

## Who This Guide Is For
This guide is written for:

- **Cloud architects** designing and evolving cloud environments with cost and governance in mind
- **FinOps analysts** tracking spend, allocation, optimization opportunities, and reporting
- **Cloud and platform managers** overseeing operations, access, and organizational standards

## What You Will Learn
Use this guide to:

- Understand CloudPi's organizational model (workspaces, projects, and project groups)
- Navigate the product (landing page, dashboards, and common workflows)
- Manage access using role-based access control (RBAC)
- Configure workspace and admin settings

## Supported Cloud Providers
CloudPi currently supports AWS, Azure, and GCP.

## Supported Integrations
CloudPi integrates with:

- Azure DevOps
- Jira
- ServiceNow
- SMTP (email notifications)
- Oakta SSO
- Microsoft Entra ID (SSO)
- GitHub

## Supported Browsers
CloudPi supports the latest stable version of **Chrome**.

## Access and Licensing
To get CloudPi access:

- Contact your CloudPi administrator or CloudPi support to request access.
- Confirm your workspace and role (viewer, manager, or admin) based on your responsibilities.
- Ensure licensing is assigned to your workspace and user account before first login.

For licensing and new installations, contact **contact@cloudpi.ai**.
For customer support for existing customers, contact **support@cloudpi.ai**.

## Installation
CloudPi is provided as a hosted platform. No local installation is required for end users.

For private deployments or onboarding, follow the deployment guidance provided by your CloudPi administrator.

## Quick Start
1. Sign in to CloudPi and select the appropriate workspace (if you have access to more than one).
2. Start from the landing page to navigate Home page, Dashboard or Admin Settings.
3. Review RBAC and security guidance before onboarding cloud accounts.

Related pages:

- Landing page and Home Page: [Landing Page](homepage.md) – learn how to navigate tiles, shortcuts, and workspace dashboards.
- Access model overview: [RBAC](rbac.md) – understand roles and permissions before inviting new users.
- Security posture and access requirements: [Security](security.md) – review compliance and credential expectations.
- Workspace administration: [Workspace Settings](workspace.md) – manage alerts, integrations, and workspace-level governance.
- Admin configuration: [Admin Settings](AdminSetting.md) – configure tenant-level policies, integrations, and audit controls.
- Getting started: [Getting Started](GettingStarted.md) – first login, provider setup, and validation steps.
- Provider connections: [Connect AWS](ConnectAWS.md), [Connect Azure](ConnectAzure.md), [Connect GCP](ConnectGCP.md).
- Cost definitions: [Cost Types](CostTypes.md).
- Integrations catalog and SSO: [Integrations Catalog](IntegrationsCatalog.md), [SSO Setup](SSOSetup.md).
- Alerts and notifications: [Alerts & Notifications](AlertsNotifications.md).
- Help and terms: [Troubleshooting](Troubleshooting.md), [Glossary](Glossary.md).

## Key Concepts
### Workspaces
Workspaces separate data and access for an organization, business unit, or client. Use them to structure teams, enforce governance, and provide organization-wide views. For details (roles, user management, workflow integrations, and alerts), see [Workspace Settings](workspace.md).

### Projects
A project is a logical grouping of cloud resources based on a cloud provider account and/or tags. Projects are the primary unit for analyzing costs, usage, inventory, utilization, and optimization recommendations. 

Use projects when you want to:

- Make a team accountable for cloud spend and optimization for a specific scope
- Combine reporting across multiple subscriptions/accounts/resource groups under one initiative
- Separate reporting by environment (for example, `dev`, `test`, `prod`) or by product/customer

### Project Groups
Project groups organize multiple projects to reflect your business structure (department, line of business, or customer). Use them for roll-up reporting and governance aligned to how your organization operates.

### Policies
Policies define governance and optimization rules for your cloud resources. They describe what to check, the thresholds or conditions to evaluate, and the recommended or automated actions. Policies are used to standardize compliance, drive best practices, and surface actionable insights.

### Workflows
Workflows connect policies, alerts, tasks, and integrations into repeatable operational steps. Use workflows to route findings to the right team, automate remediation steps, or create tickets in connected tools.

### Billing Views
Billing Views provide curated, filterable cost perspectives across workspaces, projects, and accounts. Use them to build chargeback/showback reports, track trends, and compare spend across environments or teams.

### Tasks
Tasks capture actionable work items generated from policies, recommendations, or user requests. They help track ownership, status, due dates, and completion progress.

### Tickets
Tickets represent work items synced with external systems such as Jira, ServiceNow, or Azure DevOps. Use them to align CloudPi actions with existing ITSM or engineering workflows.

### Forecast and Projection Costs
Forecasting lets users provide **monthly forecasts** for upcoming workloads. **Projection costs** are calculated by CloudPi algorithms based on historical usage and spend trends.

### Cost Assignment Rules
Cost assignment rules allocate spend to projects using account, region, and tag-based criteria. They enable consistent cost attribution for chargeback and reporting.

### PSA and MSA
**PSA (Project Service Account)** provides cloud-provider access at the project scope. For example, in AWS it can be a service role with an access key and secret key tied to a specific CloudPi project.  
**MSA (Master Service Account)** is the org-level equivalent of a PSA, providing access at the organization scope across all projects.
