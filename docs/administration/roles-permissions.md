# Roles and Permissions

## Overview

The **Roles and Permissions** module in CloudPi provides visibility into the various roles defined within the workspace and their corresponding access levels. This page serves as a centralized view for understanding what permissions are granted to each role, ensuring transparency and compliance in access management.

While role creation or modification is managed at the administrative level, this interface enables users to review the permissions matrix for different roles to maintain operational clarity and accountability.

## Key Highlights

**Role Visibility:**  
Gain a consolidated view of all predefined roles within the workspace, such as *Workspace User*, *Project Admin*, and *Project User*.

**Permission Transparency:**  
Understand the specific actions and access privileges associated with each role, including which areas of CloudPi they can view or manage.

**Security Awareness:**  
Enhance governance by allowing team members and auditors to verify permission structures without exposing modification controls.

## Navigating to Roles and Access

To view existing roles and their access scopes:

1. Navigate to the **Settings** menu
2. Select **Roles and Permissions**
3. Review the list of available roles and the detailed permissions associated with each

## Available Roles in CloudPi

### Workspace Admin

**Full CRUD Access:**
- Workspace Admin has full CRUD access across all projects within the workspace
- Can manage project groups, integrations, budgeting, workflows, and more
- Complete administrative control over all workspace functions

**Key Responsibilities:**
- User management and access control
- Integration configuration
- Workspace-level settings
- Alert and subscription management
- Workflow tools integration

### Workspace User

**Project-Specific Management:**
- Permissions to manage project-specific settings within assigned workspace
- Can integrate with third-party tools
- Manage optimization and alert settings
- Create projects and project groups
- View cross-project reports

**Access Level:**
- Access to executive level reports
- Customized reports across projects
- Can delegate access to project admins

### Project Admin

**Project-Level Control:**
- Responsible for managing project-level settings
- Directly affects resources and cost management of specific projects
- Can add/remove project users
- Configure project-specific budgets and alerts

**Management Capabilities:**
- Full project configuration
- User assignment within projects
- Budget and forecast management
- Project-specific reporting

### Project User

**Focused Permissions:**
- More focused set of permissions for managing specific aspects of a project
- Typically without full administrative rights
- Operational access to assigned projects
- Can create tasks and tickets
- View project reports

**Limitations:**
- Cannot modify project settings
- Cannot add other users
- Limited to assigned project scope

## Permission Matrix

The following table shows key permissions across different roles:

| Permission | Workspace Admin | Workspace User | Project Admin | Project User |
|------------|----------------|----------------|---------------|--------------|
| **User Management** |
| Create workspace users | ✅ | ❌ | ❌ | ❌ |
| Create project users | ✅ | ✅ | ✅ | ❌ |
| Edit users | ✅ | Limited | Limited | ❌ |
| Delete users | ✅ | ❌ | ❌ | ❌ |
| **Project Management** |
| Create projects | ✅ | ✅ | ❌ | ❌ |
| Edit any project | ✅ | ❌ | ❌ | ❌ |
| Edit own projects | ✅ | ✅ | ✅ | ❌ |
| Delete projects | ✅ | ❌ | ❌ | ❌ |
| **Cost Management** |
| Create cost rules | ✅ | ✅ | ❌ | ❌ |
| Assign costs | ✅ | ✅ | ❌ | ❌ |
| View all costs | ✅ | ✅ | Project only | Project only |
| **Budget & Forecasting** |
| Create budgets | ✅ | ✅ | ❌ | ❌ |
| Lock/unlock budgets | ✅ | ✅ | ❌ | ❌ |
| Edit forecasts | ✅ | ✅ | Project only | ❌ |
| Approve forecasts | ✅ | ✅ | ❌ | ❌ |
| **Integrations** |
| Configure SSO | ✅ | ❌ | ❌ | ❌ |
| Configure SMTP | ✅ | ❌ | ❌ | ❌ |
| Configure ticketing | ✅ | ❌ | ❌ | ❌ |
| **Policies & Workflows** |
| Create global policies | ✅ | ❌ | ❌ | ❌ |
| Create workflows | ✅ | ✅ | ✅ | ❌ |
| Manage workflows | ✅ | ✅ | Project only | ❌ |
| **Dashboards & Reports** |
| View all reports | ✅ | ✅ | Project only | Project only |
| Create custom dashboards | ✅ | ✅ | ✅ | ✅ |
| Share reports | ✅ | ✅ | ✅ | Limited |
| **Tasks & Tickets** |
| Create tasks | ✅ | ✅ | ✅ | ✅ |
| Assign tasks | ✅ | ✅ | ✅ | Self only |
| Create tickets | ✅ | ✅ | ✅ | ✅ |
| **Recommendations** |
| View recommendations | ✅ | ✅ | ✅ | ✅ |
| Act on recommendations | ✅ | ✅ | ✅ | Limited |
| Approve actions | ✅ | ✅ | Project only | ❌ |

## Understanding Access Levels

### Full Access (✅)
User can perform the action without restrictions across all relevant entities.

### Limited Access (Limited)
User can perform the action with restrictions:
- Scope limited to assigned projects
- Certain fields may be read-only
- Requires approval for some actions

### No Access (❌)
User cannot perform this action. Feature is not visible or is disabled.

### Project Only
User can perform action only within projects they are assigned to.

### Self Only
User can only perform action on items assigned to themselves.

## Security Best Practices

### Principle of Least Privilege
- Assign users the minimum permissions necessary for their role
- Regular review of user permissions
- Remove access promptly when roles change

### Role Assignment Strategy
- Start with Project User role for new team members
- Promote to Project Admin after demonstrating competency
- Workspace roles only for those needing organization-wide access

### Audit and Compliance
- Regular review of role assignments
- Document permission changes
- Monitor for permission escalation
- Periodic access certification

## Frequently Asked Questions

**Q: Can a user have multiple roles?**  
A: Yes, users can have different roles in different projects. For example, a user can be Project Admin in one project and Project User in another.

**Q: How do I request additional permissions?**  
A: Contact your Workspace Admin to request role changes. Provide business justification for the access needed.

**Q: What happens when a user leaves the organization?**  
A: Workspace Admin should immediately deactivate the user account, revoking all access.

**Q: Can roles be customized?**  
A: Currently, roles are predefined. Custom role creation may be available in future releases.

**Q: How often should we review permissions?**  
A: Quarterly access reviews are recommended, with immediate reviews when organizational changes occur.

---

## Related Documentation

- [User Management](user-management.md) - Managing users and assignments
- [Workspace Settings](workspace-settings.md) - Configuring workspace preferences
- [RBAC Overview](../core-concepts/rbac.md) - Role-based access control concepts

---

*For questions about roles and permissions, contact your Workspace Administrator or CloudPi support.*
