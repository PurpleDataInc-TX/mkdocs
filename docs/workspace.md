## Workspace Users Management
CloudPi provides a structured role-based access control system that ensures users have 
appropriate permissions for their responsibilities within the workspace and projects. Here’s
a detailed guide on the various roles within CloudPi and their specific functions:
## Workspace Admin
#### Responsibilities
- **Comprehensive Management:** Workspace Admins manage all aspects of the 
workspace, including the integration of workflows, management of user roles and 
permissions, and overall application settings.
- **User and Access Control:** They add users, assign roles, and set permissions tailored 
to the needs and structure of the organization.
- **Alert and Subscription Management:** Admins configure and manage alert 
subscriptions to ensure that users are notified about critical events and updates.
- **Workflow Tools Integration:** Admins can setup different workflow tools to connect 
with CloudPi.


#### Capabilities


- Full administrative access to all settings and features within the workspace. 

- Ability to integrate CloudPi with other IT management tools and applications to streamline operations. 

- Oversee the entire CloudPi environment to ensure compliance and efficient operation. 
#### Typical Users
- IT administrators tasked with the administration of CloudPi applications and overall 
cloud environment management.
## Workspace User
#### Responsibilities
- **Executive Oversight:** Workspace Users have access to comprehensive reports across 
all project groups and projects within the workspace. They can create projects and 
groups.
- **Delegation of Project Access:** They can delegate access to Project Admins and users, 
ensuring that project management and operations are smoothly executed.
- **Group Reports Viewing:** View and analyze reports generated from different project 
groups to monitor performance and resource utilization.
#### Capabilities
- Access to high-level dashboards and reports that provide insights into the overall 
cloud operations.
- Ability to delegate project roles and responsibilities to ensure efficient project 
execution.
#### Typical Users
- Cloud operations managers or executives who oversee cloud strategy and 
operations.
## Project Admin
#### Responsibilities
- **Project Setup and Management:** Responsible for setting up projects within CloudPi, 
defining project scope, and assigning appropriate roles to team members.
- **User Management:** Can add users to the project, invite new project users, and 
manage their roles and permissions within the project context.
- **Role Assignment:** Assign roles such as Project User or Viewer based on the 
operational needs and security policies of the project.
### Capabilities
- Manage all aspects of a project from inception to completion, including resource 
allocation and task management.
- Control over project-specific settings and user permissions to ensure project security 
and efficiency.
#### Typical Users
- Engineering leads managing specific cloud projects, responsible for leading project 
teams and ensuring project objectives are met.
## Project User
#### Responsibilities
- **Operational Tasks:** Execute tasks such as adding or updating project components, 
based on the permissions granted by Project Admins.
- **Ticket Management:** Handle operational tickets, ensuring issues are resolved in a 
timely and effective manner.
- **Report Access:** View reports related to their project assignments to track progress 
and performance.
#### Capabilities

- Engage in day-to-day operational activities within their assigned projects.
- Access to project-specific data and reports as permitted by their role.
### Typical Users
- Engineers and technical staff involved in the execution and management of specific 
tasks within a project.

By defining these roles clearly, CloudPi ensures that each member of the organization has 
the necessary tools and access to perform their duties effectively while maintaining a secure 
and organized cloud management environment.


## Navigating to User Management
Select the "User Management" from workspace settings in the header. 

### Viewing and Managing Users
"User List" displays all registered users along with details such as their name, project association, role, email ID, and status.

![Viewing and Managing Users](images/s1.png)

### Inviting New Users
 Click on "Invite User" to open a dialog where you can enter the new user’s name, email address, role, and associated project. Fill out the necessary details and click “Save” to send an invitation to the user to join the platform.

![Inviting New User](images/s2.png){: width="500"}

<!-- <img src="images/invite_user_in_UM.png" alt="Inviting New User" width="100"> -->

### Editing Existing Users
Find the user you wish to edit in the "User List". Click the edit icon next to the user's entry to open the "Edit User" dialog. Modify details such as the username, User ID, Project, Role and Status (Enable/Disable). Click “Save” to apply the changes.
![Edit user in UM](images/edituser.png){: width="500"}



## Managing Workspace Roles and Access
## Overview
Effective management of workspace roles and access is critical in CloudPi to ensure that 
team members have the appropriate permissions for their roles, enhancing security and 
efficiency. This feature allows administrators to customize access levels for different roles 
such as project admins, cost analysts, and finance team members.
## Key Features for Managing Roles and Access
### Role Definition and Management

- **Customizable Permissions:** Define and manage the scope of permissions for each role 
within the workspace, controlling who can view, edit, or manage specific aspects of the 
cloud environment.
- **Role Assignment:** Assign roles carefully to ensure that individuals have the necessary 
permissions to perform their tasks effectively without compromising security.

***Regular Access Review:***

- **Periodic Audits:** Regularly review and adjust user roles and access permissions to ensure 
they align with current project scopes and personnel changes. This helps maintain security 
integrity and operational efficiency.

***Navigating Roles and Access***

- **Assign Roles:** Navigate to the 'Roles and Permissions' section in the settings menu, where 
you can assign or modify roles.
- **Audit and Adjust:** Use the audit log to review changes and access patterns, making 
adjustments as needed to keep the workspace secure and functional.


Roles are set to define the access level or permissions a user has within the platform. 
Common roles include "Workspace User," "Project Admin," and "Project User." 

- **Workspace User:** Generally has permissions to manage project-specific settings 
within their assigned workspace, integrate with third-party tools, and manage 
optimization and alert settings.
- **Project Admin:** Responsible for managing project-level settings that directly affect 
the resources and cost management of their specific projects.
- **Project User:** Has a more focused set of permissions suitable for managing specific 
aspects of a project, typically without having full administrative rights.


![Roles and Permissions](images/s4.png)



- **Managing Permissions:** Permissions are managed within the roles and can be adjusted to 
include or exclude access to various features such as Dashboard, Inventory, Budgeting, 
Custom Dashboard, Tag Management, Workflow, Recommendations, and Billing. 
Permissions are usually toggled on and off for each feature associated with a role. For more 
granular control, some platforms allow setting permissions for sub-features under main 
categories like Landing, Workflow, Recommendations, Billing.

![permissions](images/managing%20roles%20in%20roles%20and%20permissions.png){: width="500"}

- **Viewing a Role**: : Existing roles can be viewed.

![View Role](images/viewRole.png){: width="500"}

<!-- - **Adding a Role:** Click on "Add Role" button, where you can define the role name, select 
permissions, and provide a description. 

 ![Adding a Role](images/add%20new%20role%20in%20R&P.png){: width="500"}

- **Viewing and Editing a Role:** Existing roles can be viewed and edited to modify their 
description or adjust their permissions.

![Editing a Role](images/edit%20role%20in%20R&P.png){: width="500"} -->

## Workflow Tools Integration in CloudPi
## Integration Capabilities
### ServiceNow Integration

- **Unified IT Management:** Incorporate CloudPi with ServiceNow to streamline cloud resource management alongside other IT services.
  
- **Enhanced Service Delivery:** Improve response times and resolution rates by managing cloud resources through ServiceNow’s ITSM platform.

### Jira Integration

- **Project Tracking:** Connect CloudPi to Jira to facilitate seamless issue tracking and project management, linking cloud cost optimization directly to your operational tasks.

## Setting Up Integrations

- **ServiceNow and Jira**:Access the 'Integrations' section within CloudPi to connect and configure settings tailored to your organizational workflows.

## Navigating Workflow Tools Integration

Workflow tools integration allows you to seamlessly connect with third-party tools such as JIRA and ServiceNow. These integrations facilitate direct issue creation from the cost optimization platform, enhancing workflow efficiency and responsiveness to issues identified during cost analysis.

## Integration Status and Settings

- **Status Check:** At the top of the integration settings page, you can view the current status of the integration system (e.g., Healthy) and the last update time.
  
- **Enable Integrations:** Toggle switches are provided to enable or disable integration features for JIRA and ServiceNow. Enabling these allows for direct issue creation from the cost optimization system to these platforms.

## Managing JIRA Integration

To manage JIRA integration:

- **Enabling JIRA Integration:** Toggle the switch to "Enable" to activate JIRA integration.

- **JIRA Server URL:** Input the server URL of your JIRA instance to link the cost optimization platform with your JIRA account.

- **Default Settings for Issues:** Optional fields such as 'pid' (project id) and 'issuetype' can be set, which dictate the defaults for new issues created from the platform.

## Managing ServiceNow Integration


- **Enabling ServiceNow Integration:** Toggle the switch to "Enable" to activate integration with ServiceNow.

- **Service Management:** Similar to JIRA, ensure that the correct settings are configured to allow the creation of service tickets directly linked to your cost management findings.

![Service Management](images/integ.png)

## Workspace Alerts in CloudPi

## Alert Configuration

### Email Alerts

- **Event-Based Notifications:** Set up email alerts for critical events such as budget overruns, cost optimizations, or resource utilization issues.

### Ticketing Alerts

- **Automated Ticket Generation:** Integrate with your ticketing system to automatically create tickets for actionable issues identified within CloudPi.

### Custom Notifications

- **In-App and Frequency Customization:** Customize the type and frequency of in-app notifications to ensure stakeholders are timely informed about significant changes or updates.

## Managing Alerts

**Configure Alerts**: Use the 'Alerts Management' section to set up and customize alert parameters and notification methods.

## Types of Alerts Available

- **Cost Overrun:** Receive notifications when actual cloud expenses exceed the budgeted or expected costs. This helps in taking timely corrective actions to avoid significant overages.

- **Budget Threshold:** Configure alerts to notify you when spending approaches a predefined limit, helping manage cloud expenses effectively without continuous manual monitoring.

- **Optimization:** Stay informed about opportunities to optimize cloud spending, ensuring you maximize the value of deployed resources.

- **Underutilized Resources:** Receive alerts about resources that are not being fully utilized, which can lead to cost savings by reallocating or terminating such resources.

- **Approaching Budget Limit:** Set up alerts to prevent overspending and ensure that your organization stays within allocated budgets.

- **Health:** Monitor the overall health and performance of cloud resources, with alerts that can help ensure optimal cost management and resource allocation.

- **Cost Anomaly:** Get notified about any unexpected or irregular spending patterns that may indicate issues like misconfigurations or unauthorized usage.

You can set how you wish to be notified for each type of alert by clicking on toggle button to enable among three alert configuration types such as Email alert, Ticketing alert and Notifications.

![Cost Anomaly](images/alerts.png)

## Managing Customer Billing Information in CloudPi

## Billing Management Features

- **Update and Maintain Billing Details:** Keep customer billing information up-to-date, manage payment methods, and ensure that billing records are accurate and reflective of current engagements.

- **View Billing History:** Access comprehensive billing histories to track transactions and verify charges as part of financial oversight.

## Accessing Billing Management

- **Billing Section:** Navigate to the 'Billing Information' area in CloudPi to update billing details and review historical billing data.

These refined features in CloudPi are designed to streamline workspace management, enhance security, integrate efficiently with existing workflow tools, and ensure effective communication and financial tracking within the organization.

## Navigating the Billing Information

### Key Activities in the Subscription Portal

- **Download Invoices:** Access and download your billing invoices for record-keeping or expense management.

- **Upgrade Your Plan:** Adjust your service plan based on your changing needs. This might involve upgrading to a higher tier to access additional features or increasing the capacity limits of your service.

- **Cancel Your Subscription:** If necessary, you can cancel your subscription through this portal. Note that terms regarding data retention and service cessation should be reviewed before cancellation.

- **Manage Payment Details:** Update billing information such as credit card details, billing address, or payment methods to ensure uninterrupted service.

### Active Subscription Details

- View details about your current subscription, including the plan type, start and end date, subscription ID, company name, and billing address. This section helps you keep track of your subscription status and ensure that all company and billing information is up-to-date.

By effectively utilizing the Billing Information features, you can ensure that your cloud cost optimization efforts are well supported by an appropriate and up-to-date subscription plan.

![subscription](images/global%20alert%20subscription%20(2).png)
