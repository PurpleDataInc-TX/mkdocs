# Role-Based Access Control (RBAC)

## Overview

RBAC is a policy-neutral access control mechanism based on the roles that users have within CloudPi. Users are only allowed access to the information they need to perform their assigned tasks.

## How RBAC Works

### 1. Roles
Defined according to job competency, authority, and responsibility within your organization.

### 2. Permissions
Dictate what operations can or cannot be performed—whether it's viewing billing data or managing cloud resources.

### 3. Users
Assigned roles, and through those roles, users acquire permissions.

## CloudPi Roles

### Workspace Level

#### Workspace Admin
**Responsibilities:**
- Comprehensive workspace management
- User role and permission management
- Application settings configuration
- Alert and subscription management
- Workflow tools integration

**Capabilities:**
- Full administrative access to all settings
- Integration with IT management tools
- Oversee entire CloudPi environment
- Compliance and audit management

#### Workspace User
**Responsibilities:**
- Executive oversight across all projects
- Create projects and groups
- Delegate access to Project Admins
- View consolidated reports

**Capabilities:**
- Access to high-level dashboards
- Cross-project reporting
- Budget approval authority
- Forecast management

### Project Level

#### Project Admin
**Responsibilities:**
- Project setup and management
- User management within project
- Role assignment for team members
- Budget configuration

**Capabilities:**
- Manage all project aspects
- Control project-specific settings
- Assign Project User roles
- Configure automation rules

#### Project User
**Responsibilities:**
- Execute operational tasks
- Handle tickets and tasks
- View project reports
- Implement recommendations

**Capabilities:**
- Day-to-day operations
- Access to project dashboards
- Create tasks and tickets
- View optimization recommendations

## Benefits of RBAC

### 1. Improved Operational Efficiency
- Expedite decision-making
- Reduce administrative overhead
- Clear delegation of responsibilities

### 2. Enhanced Security
- Limit access to sensitive information
- Reduce risk of data misuse
- Enforce principle of least privilege

### 3. Clear Accountability
- Track who did what
- Essential for audits and compliance
- Transparent action logging

### 4. Scalability
- Easy to adjust as organization grows
- Simple user onboarding/offboarding
- Flexible permission management

## Permission Matrix

| Feature | Workspace Admin | Workspace User | Project Admin | Project User |
|---------|----------------|----------------|---------------|-------------|
| **User Management** | ✅ Full | ✅ View | ✅ Project Only | ❌ |
| **Cloud Onboarding** | ✅ | ✅ | ❌ | ❌ |
| **Cost Assignment** | ✅ | ✅ | ✅ View | ❌ |
| **Budgets** | ✅ | ✅ | ✅ Project | ✅ View |
| **Forecasts** | ✅ Approve | ✅ Approve | ✅ Request | ✅ View |
| **Dashboards** | ✅ All | ✅ All | ✅ Project | ✅ Project |
| **Recommendations** | ✅ All | ✅ All | ✅ Project | ✅ View |
| **Policies** | ✅ | ✅ | ✅ Project | ✅ View |
| **Workflows** | ✅ | ✅ | ✅ Project | ❌ |
| **Integrations** | ✅ | ❌ | ❌ | ❌ |

---

[← Back: Project Groups](project-groups.md)
