# Projects

## What is a Project?

A **project** in CloudPi is a logical grouping of cloud resources based on the cloud provider account and/or tags. Projects are designed for teams to focus on analyzing various cloud resources data such as:

- Billing data
- Inventory data
- Usage and utilization data
- Savings plans data
- Optimization recommendations

## When to Use Projects

Create a project when you need to:

### Focus on One Cloud Provider
Manage costs and optimizations for a single cloud service provider (AWS, Azure, or GCP) with one or more accounts.

### Environment-Based Management
Track costs per environment:
- **Development** project
- **Staging** project  
- **Production** project

### Product-Based Tracking
One project per product or application:
- **Mobile App** project
- **Web Platform** project
- **API Services** project

### Customer-Based Allocation
For MSPs or multi-tenant environments:
- One project per customer
- Isolated billing and reporting

### Team-Based Organization
Align projects with team structure:
- **Engineering** project
- **Data Analytics** project
- **Marketing** project

## Project Components

### 1. Cloud Service Provider
Each project is tied to one CSP:
- AWS
- Azure
- GCP

### 2. Cost Assignment Rules
Projects use rules to attribute costs:
- Account-based rules (A-type)
- Tag-based rules (T-type)
- Region-based rules (AR-type)
- Combined rules (ART-type)

### 3. Resource Metadata
Projects track:
- Resource inventory
- Tags and labels
- Usage metrics
- Performance data

## Creating a Project

### Step 1: Navigate to Cost Assignment
1. Go to **Admin Settings** → **Cost Management**
2. Click on **Projects** tab
3. Click **Create Project** button

### Step 2: Fill Project Details

| Field | Description | Required |
|-------|-------------|----------|
| **Project Name** | Unique identifier | Yes |
| **Project Group** | Parent group for organization | Yes |
| **Description** | Purpose and scope | No |
| **Cloud Service Provider** | AWS, Azure, or GCP | Yes |
| **Organization Name** | Cloud organization/tenant | Yes |
| **Rules** | Cost assignment rules | Yes |
| **Project Icon** | Visual identifier | No |
| **Enable Self Tag** | Auto-associate tagged resources | No |

### Step 3: Configure Self Tag (Optional)
When enabled:
- Resources with tag matching project ID are automatically associated
- Simplifies cost attribution for well-tagged resources
- Tag key: `cloudpi:project`
- Tag value: Project ID

## Project Structure Example

```
Project: AWS Production Environment
├── Organization: MainOrg-AWS
├── Rules:
│   ├── Account Rule: 123456789012
│   ├── Tag Rule: Environment=Production
│   └── Region Rule: us-east-1, us-west-2
├── Resources: 847 EC2, 23 RDS, 156 S3 buckets
├── Monthly Cost: $45,320
└── Team Members:
    ├── Project Admin: John Doe
    └── Project Users: 8 engineers
```

## Project Permissions

### Project Admin
Can perform:
- ✅ View all project data and reports
- ✅ Edit project details
- ✅ Manage project users
- ✅ Create and modify budgets
- ✅ Configure tag policies
- ✅ Set up automation rules
- ✅ Create and assign tasks
- ✅ Raise tickets

### Project User
Can perform:
- ✅ View project dashboards
- ✅ Access billing data
- ✅ View recommendations
- ✅ Create tasks (assigned to self)
- ✅ Comment on tickets
- ❌ Cannot modify project settings
- ❌ Cannot add/remove users
- ❌ Cannot delete project

## Managing Projects

### Viewing Projects
1. Navigate to **Cost Assignment** → **Projects**
2. Select a project group to see its projects
3. Click **View** icon to see details:
   - Project configuration
   - Associated rules
   - Current month's cost
   - Resource count
   - Team members

### Editing Projects
1. Click **Edit** icon on project row
2. Modify allowed fields:
   - Project name
   - Description  
   - Associated rules
   - Project icon
   - Self-tag setting
3. Click **Update** to save changes

### Deleting Projects
⚠️ **Warning:** Deleting a project is permanent!

To delete:
1. Click **Delete** icon on project row
2. Confirm deletion in popup
3. Historical data is retained but project is deactivated

## Best Practices

### 1. Project Naming
- Use clear, descriptive names
- Include environment if applicable
- Example: `AWS-Production-WebApp`

### 2. Rule Configuration
- Start with broad rules, refine over time
- Avoid overlapping rules between projects
- Document rule logic for team reference

### 3. Team Assignment
- Assign project admins for each project
- Limit admin access to necessary personnel
- Regular review of project membership

### 4. Self-Tagging
- Use self-tag for well-tagged environments
- Establish tagging standards before enabling
- Tag key should be: `cloudpi:project`

### 5. Documentation
- Maintain project descriptions
- Document ownership and purpose
- Keep team contact information current

---

[← Back: Workspaces](workspaces.md) | [Next: Project Groups →](project-groups.md)

