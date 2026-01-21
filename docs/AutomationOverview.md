# Automation

CloudPi provides powerful automation capabilities to optimize cloud operations, enforce governance, and reduce manual effort. Using the automation features you will be able to define policies, schedule resource operations, and respond automatically to cloud events.

## Automation Features

CloudPi offers two primary automation capabilities:

### Policies & Workflows
Define governance rules and automated responses to cloud events. Policies monitor your environment for specific conditions (cost optimization, security compliance, resource utilization), and workflows execute automated actions when those conditions are met.

**Common use cases:**

- Detect and remediate idle or untagged resources
- Send alerts when cost thresholds are exceeded
- Automatically create backups or snapshots
- Generate tickets in external systems (Jira, ServiceNow)
- Enforce tagging standards across cloud resources

[Learn more about Policies & Workflows →](AutomationPolicies.md)

### VM Scheduler
Automate virtual machine start and stop operations based on schedules. Optimize costs by ensuring resources run only when needed, with support for custom schedules, vacation periods, and usage-based recommendations.

**Common use cases:**

- Stop development VMs during nights and weekends
- Schedule resources for business hours only
- Create vacation schedules for holiday periods
- Apply snooze schedules based on usage patterns
- Manually override schedules for specific instances

[Learn more about VM Scheduler →](AutomationVMScheduler.md)

## How Automation Works

**Policies** define the conditions and thresholds you want to monitor, such as resource usage, cost limits, security compliance, or specific service-level events.

**Workflows** are triggered automatically when a policy condition is met. A workflow is a set of automated actions configured to respond to the policy event. These actions can include sending email alerts, creating backups, generating snapshots, or executing other predefined tasks.

By combining policies and workflows with scheduling capabilities, CloudPi enables proactive monitoring and automation, helping you maintain complete control over your cloud infrastructure with minimal manual intervention.

## Getting Started

### Prerequisites
- Workspace Admin or Project Admin role (see [RBAC](rbac.md))
- Configured cloud accounts with appropriate permissions
- For external integrations: configured workflow tools (see [Integrations](Integrations.md))

### Accessing Automation Features

1. Sign in to CloudPi and select your workspace
2. Navigate to **Automation** from the main menu
3. Choose from the available automation options:
   - **Policy and Workflow** - For governance and event-driven automation
   - **Scheduler** - For time-based VM scheduling

### Next Steps

- **New to automation?** Start with [Policies & Workflows](AutomationPolicies.md) to understand policy configuration
- **Want to optimize VM costs?** Go to [VM Scheduler](AutomationVMScheduler.md) to set up resource schedules
- **Need help with permissions?** Review [RBAC](rbac.md) to understand role requirements
