# Workspaces

## What is a Workspace?

A **workspace** in CloudPi represents the highest level of organizational structure. It's designed to help you structure your teams and entities, encourage team collaboration, and provide organization-wide views.

## When to Use Workspaces

Use workspaces when you want to:

- Structure your teams and departments
- Separate different business units or divisions
- Manage multiple clients (for MSPs)
- Enforce data separation and security boundaries
- Provide executive-level reporting across projects

## Workspace Structure

```
Organization
└── Workspace (Cloud Operations)
    ├── Project Group (Production)
    │   ├── Project (AWS Production)
    │   └── Project (Azure Production)
    ├── Project Group (Development)
    │   ├── Project (AWS Dev)
    │   └── Project (Azure Dev)
    └── Project Group (Testing)
        └── Project (GCP Test)
```

## Workspace Capabilities

### Data Isolation
Each workspace ensures that data is kept separate and secure. Users in one workspace cannot access data from another workspace unless explicitly granted cross-workspace permissions.

### Organization-Wide Reporting
Workspace users and admins can access:
- Executive-level dashboards
- Consolidated cost reports across all projects
- Organization-wide budget tracking
- Cross-project resource utilization

### Team Collaboration
Workspaces facilitate:
- Shared project groups
- Centralized user management
- Unified notification policies
- Common tagging standards

## Workspace Settings

### Integration Configuration
From workspace settings, admins can configure:
- **Jira Integration** - For ticketing and task management
- **ServiceNow Integration** - For incident management
- **Azure AD SSO** - For single sign-on
- **SMTP Settings** - For email notifications

### User Management
Workspace admins can:
- Invite new users to the workspace
- Assign workspace-level roles
- Manage project access
- Configure role-based permissions

### Alert Configuration
Set up workspace-wide alerts for:
- Budget overruns
- Cost anomalies
- Optimization opportunities
- Underutilized resources
- Approaching budget limits
- Health and compliance issues

## Workspace Roles

| Role | Permissions |
|------|-------------|
| **Workspace Admin** | Full administrative access, user management, integration setup |
| **Workspace User** | Access to all projects, can create projects and groups, executive reporting |
| **Project Admin** | Project-level management within workspace |
| **Project User** | Project-level access with limited permissions |

## Best Practices

### 1. Workspace Design
- One workspace per organization or major business unit
- Use clear, descriptive workspace names
- Document workspace purpose and ownership

### 2. Access Control
- Follow principle of least privilege
- Regularly review user access
- Use workspace roles appropriately

### 3. Integration Setup
- Configure integrations at workspace level for consistency
- Test integrations thoroughly before production use
- Document integration configurations

### 4. Naming Conventions
- Establish naming standards for projects and groups
- Use consistent terminology across the workspace
- Document naming conventions for team reference

---

[Next: Projects →](projects.md)

