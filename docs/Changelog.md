# Changelog

All notable changes to CloudPi are documented here. Releases follow [semantic versioning](https://semver.org/).

---

## v2.5.0 — April 2026

### New Features
- **Policy YAML Sync** — Define and version-control governance policies as YAML files in your repository. Changes sync automatically to CloudPi on commit.
- **VM Scheduler** — Schedule start and stop actions for virtual machines across AWS, Azure, and GCP to reduce idle compute costs.

### Improvements
- Improved billing ingestion performance for large AWS accounts with more than 10 million line items.
- Budget alerts now support Slack and Microsoft Teams webhook destinations in addition to email.
- Tag governance reports updated to include untagged resource counts per project.

### Fixes
- Fixed an issue where Azure cost data was not updating after credential rotation.
- Resolved incorrect forecast calculations for projects with seasonal spend patterns.

---

## v2.4.0 — March 2026

### New Features
- **Intelligence Automation** — AI-powered recommendations surface optimization opportunities and suggest remediation actions based on historical spend patterns.
- **Global Policy Settings** — Define tenant-wide policies that apply across all workspaces without per-workspace configuration.

### Improvements
- Cost assignment rules now support tag-based matching with wildcard patterns.
- RBAC now allows custom role definitions in addition to the built-in viewer, manager, and admin roles.
- Dashboard loading time reduced by 40% for workspaces with more than 50 projects.

### Fixes
- Fixed a display issue in the Financials view when filtering by multiple project groups simultaneously.
- Resolved an authentication error during GCP service account rotation.

---

## v2.3.0 — February 2026

### New Features
- **Audit Logging** — Full audit trail of user actions, policy changes, and admin configuration updates with export support.
- **Service Accounts** — Dedicated service account management for API integrations and automation workflows.

### Improvements
- Getting started wizard updated with guided provider onboarding steps.
- SSO configuration now supports Microsoft Entra ID (formerly Azure AD) directly from the Admin Settings page.

### Fixes
- Fixed an edge case where project group roll-up costs excluded unassigned spend.
- Resolved a timeout issue in the ServiceNow ticketing integration for large ticket payloads.

---

## v2.2.0 — January 2026

### New Features
- **Multi-Cloud Billing Hub** — Unified billing view across AWS, Azure, and GCP with normalized cost data and provider-level breakdowns.
- **Forecast** — Monthly spend forecasting using historical usage trends with variance tracking against user-defined projections.

### Improvements
- Workspace selector now remembers the last active workspace across sessions.
- Provider connection status indicators added to the Cloud Onboarding dashboard.

### Fixes
- Fixed incorrect currency conversion for Azure subscriptions billed in non-USD currencies.
- Resolved a pagination issue in the cost assignment rules list for workspaces with more than 100 rules.

---

## v2.1.0 — December 2025

### New Features
- **Jira Integration** — Create and sync Jira tickets directly from CloudPi tasks and optimization recommendations.
- **Tag Management** — Centralized tag inventory with bulk tag assignment and governance reporting.

### Improvements
- Notification emails now include direct links to the relevant CloudPi page.
- Admin Settings reorganized into logical sections for easier navigation.

### Fixes
- Fixed an issue where deleted projects were still appearing in cost assignment rule previews.
- Resolved a display bug in the budget summary widget on the workspace home page.
