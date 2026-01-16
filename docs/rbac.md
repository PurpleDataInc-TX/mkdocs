# Role-Based Access Control (RBAC)

CloudPi uses role-based access control (RBAC) to manage user access to workspaces and projects. Roles determine what users can view and what actions they can perform. This page explains the available roles, their permissions, and how to manage user access.

## CloudPi Roles

CloudPi provides four predefined roles that control access at the workspace and project levels:

### Workspace Admin
Workspace Admin has full CRUD (Create, Read, Update, Delete) access across all projects within the workspace. They can manage project groups, integrations, budgeting, workflows, and more with complete administrative control.

**Key capabilities:**
- Full access to all workspace features and settings
- Manage users and assign roles
- Configure integrations, workflows, and alerts
- Create and delete projects and project groups
- Access Admin Settings

**Typical users:** Cloud platform managers, FinOps leads

### Workspace User
Workspace User has CRUD access limited to the project groups they are assigned to. They can manage resources and settings within those assigned projects, but do not have visibility or control over other project groups.

**Key capabilities:**
- View and manage assigned project groups only
- No access to workspace-level settings
- No Admin Settings access
- Cannot create or delete projects outside assigned scope

**Typical users:** Team leads, department managers with specific cost centers

### Project Admin
Project Admin has write access (create and update) for all projects assigned to them. However, they do not have delete permissions. Their responsibilities include managing optimization settings, budgeting, and tags at the project level.

**Key capabilities:**
- Create and update project settings
- Manage budgets, tags, and optimization configurations
- No delete permissions
- Limited to assigned projects only

**Typical users:** Cloud architects, project managers

### Project User
Project User has read-only access to all the projects assigned to them. They can view dashboards, recommendations, and budgeting data without making changes.

**Key capabilities:**
- View-only access to assigned projects
- Access dashboards and reports
- View recommendations and cost data
- Cannot modify any settings or resources

**Typical users:** Developers, analysts, stakeholders needing visibility

## Role Permissions

All roles have access to the following CloudPi features (with varying permission levels):

- Home
- Dashboard
- Cost Assignments
- Task Management
- Ticketing
- Financials
- Project
- Billing Hub
- Recommendations
- Tag Management
- Automations

**Note:** Only Workspace Admin has access to Admin Settings.

## Managing Roles and Permissions

To view or manage roles and permissions:

1. Navigate to **Admin Settings > Roles & Permissions**
2. The Roles & Permissions page displays a list of all user roles and their associated permissions
3. Click on any role to view the **Roles Details** panel, which shows:
   - Role Name
   - Description
   - Complete list of permissions

**Note:** Role definitions are predefined and cannot be customized. Access control is managed by assigning users to appropriate roles and scoping them to specific workspaces or projects.

## Best Practices

- Assign the minimum role necessary for users to perform their job functions
- Use Project User for stakeholders who need visibility without making changes
- Limit Workspace Admin roles to platform administrators only
- Regularly review user assignments to ensure access remains appropriate
- Use project and project group assignments to implement least-privilege access
