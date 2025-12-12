# Task Management

CloudPi's task management system streamlines the organization, tracking, and execution of cloud-related activities.

## Overview

Task Management enables teams to:
- Create and assign tasks for cloud optimization activities
- Track progress through defined stages
- Collaborate on cost-saving initiatives
- Maintain accountability for cloud management actions

## Accessing Task Management

1. Navigate to **Tasks** from the main navigation menu
2. The task dashboard displays all tasks with filters and organization options

## Task Information Display

Each task entry shows:
- **Task Title** - Brief description of the work
- **Description** - Detailed information or context
- **Priority** - Low, Medium, or High
- **Status** - Current phase:
  - **Initiated** - Newly created
  - **Doing** - Work in progress
  - **Done** - Completed
  - **Review** - Under review
- **Assigned To** - Team member responsible
- **Project** - Associated CloudPi project
- **Due Date** - Completion deadline

## Filtering and Organization

### Filter Options

**By Status:**
- View tasks in specific stages (Initiated, Doing, Done, Review)
- Track workflow progression

**By Priority:**
- Focus on high-priority items
- Manage workload effectively

**By Project Group:**
- View tasks for specific environments (AWS, Azure, GCP)
- Filter by business unit or department

### Search Functionality

Search tasks by:
- Task title
- Description keywords
- Assigned team member
- Project name

## Creating a New Task

### Step 1: Open Create Task Form

1. Click the **"+ Create Task"** button (top right)
2. The task creation form opens

### Step 2: Enter Task Details

| Field | Description | Required |
|-------|-------------|----------|
| **Title** | Clear, concise task summary | Yes |
| **Description** | Detailed context and requirements (16-255 characters) | Yes |
| **Project** | Select associated CloudPi project | Yes |
| **Assign to** | Select responsible team member | Yes |
| **Priority** | Low, Medium, or High | Yes |
| **Due Date** | Target completion date | Yes |

### Step 3: Save the Task

1. Review all entered information
2. Click **"Save"** button
3. Task appears in the task list with "Initiated" status

## Managing Tasks

### Updating Task Status

Project Admins and assigned users can update status:
1. Open the task
2. Change status dropdown
3. Add comments if needed
4. Save changes

### Editing Tasks

To modify a task:
1. Click on the task to open details
2. Click **Edit** button
3. Update fields as needed
4. Click **Update** to save changes

### Adding Comments

Collaborate through task comments:
1. Open task details
2. Scroll to comments section
3. Type your comment
4. Click **Add Comment**

### Task Notifications

Team members receive notifications for:
- Task assignment
- Status changes
- Comments added
- Due date approaching
- Task completion

## Best Practices

### Task Creation

1. **Be Specific** - Use clear, actionable titles
2. **Provide Context** - Include relevant details in description
3. **Set Realistic Deadlines** - Consider team capacity
4. **Assign Appropriately** - Match skills to requirements

### Task Management

1. **Regular Updates** - Keep status current
2. **Use Comments** - Communicate progress and blockers
3. **Track Time** - Note actual effort for future planning
4. **Close Promptly** - Move completed tasks to "Done"

### Priority Guidelines

**High Priority:**
- Production issues affecting costs
- Urgent optimization opportunities
- Compliance-related tasks
- Budget overrun mitigation

**Medium Priority:**
- Scheduled optimizations
- Regular reviews
- Non-urgent improvements

**Low Priority:**
- Research tasks
- Future enhancements
- Documentation updates

## Integration with Other Features

### From Recommendations

Create tasks directly from cost optimization recommendations:
1. Navigate to Recommendations page
2. Select recommendation
3. Click **Create Task**
4. Task is pre-filled with recommendation details

### With Ticketing System

Tasks can be linked to tickets in:
- Jira
- ServiceNow
- Azure DevOps

This creates a complete workflow from identification to resolution.

## Task Dashboard View

The main task dashboard provides:

**Summary Metrics:**
- Total tasks
- Tasks by status
- Overdue tasks
- Tasks completed this week/month

**Visual Organization:**
- Color-coded priority tags
- Status-based grouping
- Project cluster organization

**Quick Actions:**
- Bulk status updates
- Mass assignment
- Export to CSV

## User Permissions

### Workspace Admin / Workspace User
- ✅ Create tasks for any project
- ✅ Assign to any user
- ✅ View all tasks
- ✅ Edit any task
- ✅ Delete tasks

### Project Admin
- ✅ Create tasks for their projects
- ✅ Assign to project users
- ✅ View project tasks
- ✅ Edit project tasks
- ✅ Change task status

### Project User
- ✅ Create tasks (assigned to self)
- ✅ View assigned tasks
- ✅ Update status on assigned tasks
- ✅ Add comments
- ❌ Cannot delete tasks
- ❌ Cannot reassign tasks

## Reporting

### Task Reports

Generate reports on:
- Tasks by assignee
- Tasks by project
- Completion rates
- Time to resolution
- Overdue task trends

### Export Options

Export task data as:
- CSV for Excel analysis
- PDF for documentation
- JSON for API integration

---

## Tips for Effective Task Management

1. **Create Tasks for All Optimization Work** - Don't rely on memory
2. **Link to Recommendations** - Provide context and justification
3. **Update Regularly** - Keep team informed of progress
4. **Review Weekly** - Team sync on open tasks
5. **Archive Completed** - Keep active list manageable
6. **Use Templates** - For recurring task types
7. **Track Savings** - Note cost reduction in task comments

---

*Task management is essential for maintaining accountability and ensuring cloud optimization initiatives are completed successfully.*
