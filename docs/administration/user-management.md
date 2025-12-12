# Users Management

CloudPi provides a structured role-based access control system ensuring users have appropriate permissions for their responsibilities.

## Overview

User Management in CloudPi allows administrators to:
- Invite new users to workspace or projects
- Assign roles and permissions
- Manage user access levels
- Monitor user activity
- Control user status (Active/Inactive)

## User Roles in CloudPi

### Workspace Admin

**Responsibilities:**
- Comprehensive management of all workspace aspects
- Integration of workflows and third-party tools
- Management of user roles and permissions
- Configuration of alert subscriptions
- Overall application settings management

**Capabilities:**
- ✅ Full administrative access to all settings and features
- ✅ Integrate CloudPi with other IT management tools
- ✅ Oversee entire CloudPi environment for compliance
- ✅ Add/remove users and assign roles
- ✅ Configure workspace-level settings

**Typical Users:**
- IT administrators managing CloudPi applications
- Cloud environment management leaders

---

### Workspace User

**Responsibilities:**
- Executive oversight with comprehensive reports access
- View reports across all project groups and projects
- Create projects and project groups
- Delegate access to Project Admins and users
- Monitor performance and resource utilization

**Capabilities:**
- ✅ Access high-level dashboards and reports
- ✅ Create projects and project groups
- ✅ Delegate project roles and responsibilities
- ✅ View all workspace data
- ❌ Cannot modify workspace settings

**Typical Users:**
- Cloud operations managers
- Executives overseeing cloud strategy

---

### Project Admin

**Responsibilities:**
- Project setup and management within CloudPi
- Define project scope and objectives
- Add users to projects
- Invite new project users
- Manage roles within project context
- Assign Project User or Viewer roles

**Capabilities:**
- ✅ Manage all aspects of assigned projects
- ✅ Control project-specific settings
- ✅ Manage user permissions within project
- ✅ Add/remove project users
- ❌ Cannot access other projects without permission

**Typical Users:**
- Engineering leads managing specific cloud projects
- Project managers responsible for cloud initiatives

---

### Project User

**Responsibilities:**
- Execute operational tasks within assigned projects
- Add or update project components
- Handle operational tickets
- View project-related reports
- Perform day-to-day activities

**Capabilities:**
- ✅ Execute tasks in assigned projects
- ✅ Access project-specific data
- ✅ Create and update tickets
- ✅ View project reports
- ❌ Cannot modify project settings
- ❌ Cannot add other users

**Typical Users:**
- Engineers and technical staff
- Team members executing specific tasks

## Accessing User Management

1. Log in to CloudPi as an administrator
2. Navigate to **Admin Settings** from the header
3. Select **User Management**
4. Direct URL: `/workspace/adminsettings/user-management`

## User List Overview

The User List displays all registered users with the following details:

| Column | Description |
|--------|-------------|
| **Name** | Full name of the user |
| **Role** | Assigned role (Workspace Admin, Workspace User, Project Admin, Project User) |
| **Email** | User's email address |
| **Project Group** | Associated project groups (for project-specific users) |
| **Status** | Active or Inactive |
| **Actions** | View details, Edit, Delete |

### User List Actions

**View User Details:**
1. Click the **eye icon** next to any user
2. Expands to show:
   - Complete user information
   - Assigned projects
   - Role details
   - Project associations
   - Access permissions

**Delete User:**
1. Click the **delete icon** next to the user
2. Confirmation prompt appears
3. Confirm to remove user permanently
4. User loses all access immediately

## Filtering Users

### Available Filters

**Filter by Role:**
- Workspace User
- Workspace Admin  
- Project User
- Project Admin

**Filter by Status:**
- Active users (can log in)
- Inactive users (access suspended)

**Filter by Project Group:**
- View users assigned to specific project groups
- Filter across multiple groups

### Using Filters

1. Locate filter dropdowns at top of User List
2. Select desired filter criteria
3. List updates automatically
4. Clear filters to view all users

## Inviting New Users

CloudPi supports two types of user invitations:
1. **Workspace Invitation** - For organization-wide access
2. **Project Invitation** - For project-specific access

### Inviting User to Workspace

Use this when the user needs organization-wide access or admin privileges.

**Step 1: Open Invite Dialog**
1. Click **Invite User** button (top right)
2. Select **Workspace** as invitation type

**Step 2: Enter User Information**

| Field | Description | Required |
|-------|-------------|----------|
| **Name** | User's full name | Yes |
| **Email** | User's email address | Yes |
| **Role** | Workspace Admin or Workspace User | Yes |
| **Project Group** | If Workspace User role selected | Conditional |

**Step 3: Select Role**

**For Workspace Admin:**
- User gets full administrative rights
- Can manage users, project groups, settings
- No project group selection needed

**For Workspace User:**
- Additional field appears: **Project Group**
- Select project group(s) user can access
- User can only access selected project groups
- Can view reports for those groups

**Step 4: Duplicate Check**
- System checks if user already exists
- Prevents duplicate invitations
- Shows error if user already registered

**Step 5: Send Invitation**
1. Click **Save** to send invitation
2. User receives email invitation
3. Email contains:
   - Welcome message
   - Login instructions
   - Temporary access link
   - Role information

**Step 6: User Activation**
- User clicks link in email
- Sets password (if not using SSO)
- Logs in to CloudPi
- Access activated based on assigned role

---

### Inviting User to Project

Use this when user needs access to specific projects only.

**Step 1: Open Invite Dialog**
1. Click **Invite User** button
2. Select **Project** as invitation type

**Step 2: Enter Basic Information**

| Field | Description | Required |
|-------|-------------|----------|
| **Name** | User's full name | Yes |
| **Email** | User's email address | Yes |

**Step 3: Select Project Group(s)**
1. From **Project Group** dropdown, select one or more groups
2. Available projects for selected groups appear
3. Multiple groups can be selected

**Step 4: Assign Projects and Roles**

For each project:
1. Select **Project** from dropdown
2. Choose **Role**:
   - **Project Admin** - Full project management access
   - **Project User** - Limited operational access

**Multiple Projects:**
- Different roles can be assigned per project
- User can be Admin in one project, User in another

**Step 5: Add Additional Project/Role Pairs**
1. Click **Add Role** button
2. New Project and Role dropdowns appear
3. Previously selected projects removed from dropdown (prevents duplicates)
4. Assign as many project/role combinations as needed

**Example Configuration:**
```
Project Group: AWS Infrastructure
  └─ Project: AWS Production → Role: Project Admin
  └─ Project: AWS Development → Role: Project User
  
Project Group: Azure Cloud
  └─ Project: Azure VMs → Role: Project User
```

**Step 6: Save Invitation**
1. Review all project/role assignments
2. Click **Save**
3. System validates configuration
4. Invitation sent to user's email

**Step 7: Duplicate Prevention**
- System checks if user already has access to selected projects
- Prevents duplicate project assignments
- Shows warning if conflicts exist

---

## Managing Existing Users

### Editing User Information

**To Edit User:**
1. Locate user in User List
2. Click **Edit icon** (pencil)
3. Modify details:
   - Name
   - Email
   - Role assignments
   - Project associations
4. Click **Update** to save changes

**What Can Be Changed:**
- ✅ User's name
- ✅ Email address
- ✅ Role assignments
- ✅ Project access
- ✅ Status (Active/Inactive)

**What Cannot Be Changed:**
- ❌ User ID (system generated)
- ❌ Creation date
- ❌ Historical activity logs

### Changing User Status

**To Activate User:**
1. Locate inactive user
2. Click status toggle
3. Status changes to Active
4. User can now log in

**To Deactivate User:**
1. Locate active user  
2. Click status toggle
3. Confirm deactivation
4. Status changes to Inactive
5. User access immediately revoked

**Deactivation Effects:**
- User cannot log in
- Active sessions terminated
- No access to any CloudPi features
- User data retained for reactivation

### Deleting Users

**Permanent User Removal:**

⚠️ **Warning:** User deletion is permanent and cannot be undone.

**Steps:**
1. Click **Delete icon** next to user
2. Confirmation dialog appears:
   ```
   Are you sure you want to delete [User Name]?
   This action cannot be undone.
   ```
3. Click **Delete** to confirm
4. User removed from system

**What Gets Deleted:**
- User account
- Access permissions
- Role assignments

**What's Retained:**
- Historical activity logs (audit trail)
- Created content (tasks, tickets, reports)
- Comments and collaboration history

## User Invitation Workflow

### Complete Invitation Process

```
1. Admin sends invitation
   ↓
2. User receives email
   ↓
3. User clicks activation link
   ↓
4. User sets password (if not SSO)
   ↓
5. User logs in
   ↓
6. Access granted based on role
```

### Invitation Email Contents

**Subject:** Invitation to Join CloudPi

**Body Includes:**
- Welcome message
- Organization/Workspace name
- Assigned role description
- Login URL
- Activation instructions
- Expiration information (link valid for 7 days)
- Support contact information

### Resending Invitations

If user doesn't receive or loses invitation:

1. Locate user in User List (status shows "Invited")
2. Click **Resend Invitation** option
3. New email sent immediately
4. Previous invitation link invalidated

## Best Practices

### User Onboarding

1. **Send Invitations Early** - Allow time for account setup
2. **Provide Context** - Explain role and responsibilities separately
3. **Verify Email Addresses** - Ensure accuracy before sending
4. **Follow Up** - Check if users activated accounts
5. **Training** - Provide role-specific training materials

### Role Assignment

1. **Principle of Least Privilege** - Grant minimum necessary access
2. **Regular Reviews** - Audit user roles quarterly
3. **Clear Ownership** - One Project Admin per project minimum
4. **Document Decisions** - Record why specific roles assigned
5. **Team Changes** - Update roles when responsibilities change

### Security

1. **Immediate Deactivation** - Disable access for departing users
2. **Regular Audits** - Review active users monthly
3. **Strong Passwords** - Enforce if not using SSO
4. **Multi-Factor Authentication** - Enable when available
5. **Access Reviews** - Periodic verification of permissions

### User Management Hygiene

1. **Remove Inactive Users** - Delete accounts not used in 90+ days
2. **Update Contact Info** - Keep email addresses current
3. **Monitor Failed Logins** - Investigate suspicious activity
4. **Document Changes** - Maintain change log for audits
5. **Backup Admin Access** - Multiple Workspace Admins

## Troubleshooting

### User Cannot Log In

**Possible Causes:**
- Account inactive
- Invitation not accepted
- Incorrect credentials
- SSO not configured properly

**Solutions:**
1. Check user status (Active/Inactive)
2. Verify invitation was accepted
3. Reset password
4. Check SSO configuration
5. Review access logs

### User Missing Expected Access

**Possible Causes:**
- Incorrect role assigned
- Project access not granted
- Project group not associated

**Solutions:**
1. Review user's role assignments
2. Check project associations
3. Verify project group membership
4. Re-invite user with correct permissions

### Cannot Invite User

**Possible Causes:**
- Email already registered
- Invalid email format
- Insufficient permissions
- Workspace user limit reached

**Solutions:**
1. Search for existing user
2. Verify email address format
3. Confirm admin privileges
4. Check workspace license limits

### Invitation Email Not Received

**Possible Causes:**
- Email in spam folder
- Incorrect email address
- SMTP not configured
- Email server issues

**Solutions:**
1. Check spam/junk folder
2. Verify email address spelling
3. Confirm SMTP integration (Admin)
4. Resend invitation
5. Contact support if persistent

## User Permissions Matrix

| Action | Workspace Admin | Workspace User | Project Admin | Project User |
|--------|----------------|----------------|---------------|--------------|
| Invite workspace users | ✅ | ❌ | ❌ | ❌ |
| Invite project users | ✅ | ✅ | ✅ | ❌ |
| Edit any user | ✅ | ❌ | ❌ | ❌ |
| Edit project users | ✅ | ❌ | ✅ | ❌ |
| Delete users | ✅ | ❌ | ❌ | ❌ |
| View all users | ✅ | ✅ | ❌ | ❌ |
| View project users | ✅ | ✅ | ✅ | ✅ |
| Change user status | ✅ | ❌ | ❌ | ❌ |
| Assign roles | ✅ | Limited | Limited | ❌ |
| Create projects | ✅ | ✅ | ❌ | ❌ |
| Configure integrations | ✅ | ❌ | ❌ | ❌ |

## Summary

Effective user management in CloudPi ensures:
- Right people have right access
- Security through proper role assignment
- Collaboration enabled across teams
- Audit trails for compliance
- Efficient user lifecycle management

---

**Next:** Learn about [Roles and Permissions](roles-permissions.md) in detail.
