# User Management

The User Management page allows administrators to add, edit, and remove users within CloudPi. Users are assigned roles that determine their access level, and can be scoped to either the entire workspace or specific projects and project groups.

## Accessing User Management

1. Navigate to **Admin Settings > User Management**
2. The User Management page displays a list of all users with their:
   - Name
   - Email
   - Role Name

## User Management Features

### Search and Filter
- Use the **Search Users** field to find specific users by name or email
- Use the **All Roles** dropdown to filter users by their assigned role
- View user details in the table including role assignments and status

### User Actions
For each user in the list, you can:

- **View** - Click the eye icon to view user details (read-only)
- **Delete** - Click the trash icon to remove a user from the system
- **Edit Permissions** - Click the pencil icon or "Edit Permissions" button to modify user access

## Inviting New Users

To add a new user to CloudPi:

1. Click the **+ Invite User** button in the top right
2. The Invite User dialog appears with two options:
    - **Workspace** - Grant access at the workspace level
    - **Project** - Grant access to specific projects

### Inviting Workspace Users

When inviting a user at the workspace level:

1. Select the **Workspace** radio button
2. Enter the user's **Email** address
3. Select the **User type**:
    - Local Auth User
    - SSO
4. Select the **Role**:
    - Workspace Admin
    - Workspace User
5. Click **Submit** to send the invitation

**Note:** Workspace-level users have access across the entire workspace or to assigned project groups, depending on their role.

### Inviting Project Users

When inviting a user at the project level:

1. Select the **Project** radio button
2. Enter the user's **Email** address
3. Select the **User type**:
    - Local Auth User
    - SSO
4. Select the **Project group** from the dropdown (example options might include):
    - CoreInfrastructure
    - DataScience
    - ProductAndEngineering
    - MarketingAndSales
    - (Additional project groups based on your configuration)
5. Select the **Projects** to assign (can select multiple)
6. Select the **Role**:
    - Project Admin
    - Project User
7. Click **Submit** to send the invitation

**Note:** Project-level users only have access to the specific projects assigned to them.

## Editing User Permissions

To modify an existing user's access:

1. Locate the user in the User Management list
2. Click the **Edit Permissions** button or pencil icon in the Actions column
3. The Edit User Permissions panel appears showing:
    - Email (read-only)
    - Role (read-only - shows current role)
    - Projects (editable)
4. Modify the **Projects** field to add or remove project assignments
5. Click **Update** to save changes, or **Cancel** to discard

**Important:** User roles cannot be changed through the Edit Permissions dialog. To change a user's role, you must remove the user and re-invite them with the new role.

## User Types

CloudPi supports two authentication methods:

- **Local Auth User** - Users authenticate with a username and password managed within CloudPi
- **Single Sign-On** - Users authenticate through Single Sign-On

The user type is selected during the invitation process and determines how users will log in to CloudPi.

## User Status

Users can have the following statuses:

- **Active** - User has accepted the invitation and can access CloudPi
- **Pending** (if applicable) - User has been invited but has not yet accepted

## Removing Users

To remove a user from CloudPi:

1. Locate the user in the User Management list
2. Click the trash/delete icon in the Actions column
3. Confirm the deletion when prompted

**Warning:** Removing a user will revoke all their access to CloudPi immediately. This action is not reversible - the only way to restore access is to re-invite the user with the same role or a different role.

## Best Practices

- **Use project-level invitations** when users only need access to specific projects, following the principle of least privilege
- **Use workspace-level invitations** for users who need broader access across multiple project groups
- **Regularly audit user access** by reviewing the User Management list and removing users who no longer need access
- **Choose appropriate roles** based on whether users need read-only access (Project User, Workspace User) or administrative capabilities (Project Admin, Workspace Admin)
- **Leverage project groups** to organize access by department, team, or business unit
- **Document role assignments** to maintain clear accountability for who has access to what resources