# AWS Cloud Onboarding

## Description

Streamline your AWS cloud setup by onboarding your cloud account into the system. This process enables centralized management, monitoring, and cost allocation.

---

## Navigating to AWS Onboarding

1. **Go to Workspace Settings**:
   - Access the workspace settings from your CloudPi dashboard.
2. **Select Integrations Tab**:
   - Navigate to the Integrations tab in the workspace settings.
3. **Locate AWS Onboarding Card**:
   - Find the AWS Onboarding card and select it.

---

### Onboarding for the First Time

- If you are configuring for the first time:
  - You will see a page with the AWS logo and the **Onboard Your AWS Account** button.
  - Click the button to start the onboarding process, which will guide you through step-by-step configuration of your AWS accounts.

---

### If Organizations Already Exist

- You will see a table listing all the AWS organizations configured:
  - **Add Organization**:
    - Click the button to start the onboarding process, which will guide you through step-by-step configuration of your AWS accounts.
  - **Actions**:
    - **View details**: Click the **View** button on any row to see detailed information about the organization, including:
      - Organization Name
      - Account Type (e.g., Organization)
      - Access Type (e.g., Cross-Account)
      - Bucket Name, Location, Folder Path, and CUR Version
      - Features Enabled and Status

---

## Steps to Create an Organization

### Step 1: Setup Organization

#### Description

Onboarding your AWS account enables centralized management of multiple accounts or a single account, depending on your configuration. Choose the appropriate account type and access type to proceed.

#### Steps

1. **Open AWS Onboarding**:
   - Navigate to the AWS Organizations section.
   - View the list of organizations or add a new one by clicking **Add Organization**.
2. **Provide Required Details**:
   - **Organization Name**: Enter the name of the organization you are onboarding.
   - **Account Type**:
     - **Organization Account**: Manage multiple AWS accounts centrally under a single organization.
     - **Management Account**: Manage AWS services independently within a standalone account.
   - **Access Type**:
     - **Cross Account**: Enable access across multiple AWS accounts via a central account.
     - **Standard Account**: Manage resources within a single AWS account.
3. **Save Details**:
   - Click **Next** to proceed after providing the required details.
4. **Status Tracking**:
   - The onboarding progress is displayed on the left panel for Account Type and Access Type.

![Alt Text](https://github.com/PurpleDataInc-TX/mkdocs/blob/d7359e00822c53b2dc5a8b904e936053a60ca2d1/docs/images/status%20tracking.png)

---

### Step 2: Features Configuration

#### Description

Configure specific AWS features, including billing, automation, and recommendations, by providing necessary credentials and settings.

#### Steps

1. **Enable Features**:
   - Select the features to enable:
     - **Billing**: Enable billing-related features and integrations.
     - **Recommendations**: Get AI-driven optimization recommendations.
     - **Automation**: Automate cloud resource management workflows.
2. **Billing Configuration**:
   - **S3 Bucket Name**: Enter the name of your billing bucket.
   - **Folder Path**: Provide the folder path for storing CUR files.
   - **S3 Bucket Location**: Specify the region where the bucket is located.
   - **CUR Version**: Select the version of the Cost and Usage Report (e.g., CUR 3.0).
3. **Provide AWS Credentials**:
   - **Role ARN**: Enter the Role ARN for secure communication with the AWS account.
   - **Access Key**: Enter the access key associated with the AWS account.
   - **Secret Key**: Provide the secret key.
4. **Test Configuration (Optional)**:
   - Validate the credentials and settings to ensure a successful setup.
5. **Save and Proceed**:
   - Once the configuration is complete, click **Next**.
6. **Status Tracking**:
   - The progress for features configuration is displayed on the left panel.

![Alt Text](https://github.com/PurpleDataInc-TX/mkdocs/blob/dc97b9821fc95b451588fc229db99be05c86aeb6/docs/images/6.status%20racking.png)

---

### Step 3: Data Collection

#### Description

Once features are configured, the system begins collecting billing and resource data from your AWS account.

#### Steps

1. **Monitor Progress**:
   - The system displays real-time progress of the data collection process.
   - A progress bar and status messages provide updates.
2. **Error Handling**:
   - In case of errors (e.g., file processing failures), an error message will be displayed.
   - The system highlights the failed files and allows you to review logs for further details.
3. **Completion**:
   - Once data collection is complete, a success message confirms the process.
   - The list of synced files is displayed with details such as file size and location.
4. **Redirect to Cost Assignment**:
   - Click **Go to Cost Assignment** to proceed to the cost assignment page.
   - Create projects and configure settings for centralized cost management.
![Alt Text](https://github.com/PurpleDataInc-TX/mkdocs/blob/3da773964aed9abc80768ecd6a0dfa9353a80409/docs/images/redirect%20to.png)
---

# Azure Cloud Onboarding

## Description

Streamline your Azure cloud setup by onboarding your Azure account into the system. This process enables centralized management, monitoring, and cost allocation.

---

## Navigating to Azure Onboarding

1. **Go to Workspace Settings**:
   - Access the workspace settings from your CloudPi dashboard.
2. **Select Integrations Tab**:
   - Navigate to the Integrations tab in the workspace settings.
3. **Locate Azure Onboarding Card**:
   - Find the Azure Onboarding card and select it.

---

### Onboarding for the First Time

- If you are configuring for the first time:
  - You will see a page with the Azure logo and the **Onboard Your Azure Account** button.
  - Click the button to start the onboarding process, which will guide you through the step-by-step configuration of your Azure subscriptions.
![Alt Text](https://github.com/PurpleDataInc-TX/mkdocs/blob/d35d5de28dba28535128dd19fac88b1aaddf5927/docs/images/onboarding.png)
---

### If Subscriptions Already Exist

- If organizations are already configured, you will see a table listing all onboarded Azure subscriptions.
  - **Add Subscription**:
    - Click **Add Subscription** to start the onboarding process, which will guide you through step-by-step configuration of your Azure accounts.
  - **Actions**:
    - **View details**: Click the **View** button on any row to see detailed information about the subscription, including:
      - Subscription Name
      - Account Type (e.g., Management Group, Individual Subscription)
      - Access Type (e.g., Service Principal)
      - Storage Account Name, Location, Container Name, and Usage Report Version
      - Features Enabled and Status
![Alt Text](https://github.com/PurpleDataInc-TX/mkdocs/blob/dab21441ee4f424d5a38b9305ea8cbc722230eea/docs/images/add%20subscription.png)
---

## Steps to Create a Subscription

### Step 1: Setup Subscription

#### Description

Onboarding your Azure account enables centralized management of multiple subscriptions or a single subscription, depending on your configuration. Choose the appropriate subscription type and access type to proceed.

#### Steps

1. **Open Azure Onboarding**:
   - Navigate to the Azure Subscriptions section.
   - View the list of subscriptions or add a new one by clicking **Add Subscription**.
2. **Provide Required Details**:
   - **Subscription Name**: Enter the name of the Azure subscription you are onboarding.
   - **Account Type**:
     - **Management Group**: Manage multiple Azure subscriptions centrally under a single organization.
     - **Standalone Subscription**: Manage Azure services independently within a single subscription.
   - **Access Type**:
     - **Service Principal**: Enable secure access to your Azure account using Service Principal authentication.
3. **Save Details**:
   - Click **Next** to proceed after providing the required details.
4. **Status Tracking**:
   - The onboarding progress is displayed on the left panel for Subscription Type and Access Type.
![Alt Text](https://github.com/PurpleDataInc-TX/mkdocs/blob/dad8b1378686e5abdf1a855b253a484567c9a6ef/docs/images/stepsstatustracking.png)

---

### Step 2: Features Configuration

#### Description

Configure specific Azure features, including billing, automation, and recommendations, by providing necessary credentials and settings.

#### Steps

1. **Enable Features**:
   - Select the features to enable:
     - **Billing**: Enable billing-related features and integrations.
     - **Recommendations**: Get AI-driven optimization recommendations.
     - **Automation**: Automate cloud resource management workflows.
2. **Billing Configuration**:
   - **Storage Account Name**: Enter the name of your billing storage account.
   - **Container Name**: Provide the container name for storing Azure usage reports.
   - **Storage Account Location**: Specify the Azure region where the storage account is located.
   - **Usage Report Version**: Select the version of the Cost and Usage Report (e.g., UsageDetails API).
3. **Provide Azure Credentials**:
   - **Tenant ID**: Enter the Tenant ID of your Azure Active Directory.
   - **Client ID**: Enter the Client ID of the registered Azure Service Principal.
   - **Client Secret**: Provide the Client Secret for authentication.
   - **File Upload**: Upload a JSON file containing your Azure credentials with fields: Client ID, Client Secret, Tenant ID. You can also download the JSON template.
4. **Test Configuration (Optional)**:
   - Validate the credentials and settings to ensure a successful setup.
5. **Save and Proceed**:
   - Once the configuration is complete, click **Next**.
6. **Status Tracking**:
   - The progress for features configuration is displayed on the left panel.
![Alt Text](https://github.com/PurpleDataInc-TX/mkdocs/blob/33d375ed1e626246609c530b8b5cbf8cf2a564d5/docs/images/provide%20azure%20credentials.png)

---

### Step 3: Data Collection

#### Description

Once features are configured, the system begins collecting billing and resource data from your Azure account.

#### Steps

1. **Monitor Progress**:
   - The system displays real-time progress of the data collection process.
   - A progress bar and status messages provide updates.
2. **Error Handling**:
   - In case of errors (e.g., API failures, permission issues), an error message will be displayed.
   - The system highlights the failed tasks and allows you to review logs for further details.
3. **Completion**:
   - Once data collection is complete, a success message confirms the process.
   - The list of synced usage reports is displayed with details such as file size and location.
4. **Redirect to Cost Assignment**:
   - Click **Go to Cost Assignment** to proceed to the cost assignment page.
   - Create projects and configure cost management settings for centralized billing.
![Alt Text](https://github.com/PurpleDataInc-TX/mkdocs/blob/30f80d23b6c67aa39ae3a8dc7e760b9108d6d56b/docs/images/step3.png)
---

# Integration in CloudPi

## Integration Capabilities

- **ServiceNow**
- **Jira**
- **SSO (Single Sign-On)**
- **SMTP (Simple Mail Transfer Protocol)**

---

## ServiceNow Integration

### Description

Enable seamless IT service management and workflow automation by integrating your ServiceNow instance. This integration facilitates handling incidents, change requests, and IT operations efficiently.

### Steps to Configure

1. **Open ServiceNow Integration Dialog**:
   - Navigate to the integration section in the settings menu.
   - Select **ServiceNow** from the list of integrations.
2. **Provide Required Details**:
   - **Service URL**: Enter the URL of your ServiceNow instance (e.g., `https://yourcompany.service-now.com`).
   - **API Client ID**: Provide the client ID for authentication.
   - **API Client Secret**: Provide the secret key associated with the client ID.
   - **Username**: Enter the username of your ServiceNow account.
   - **Password**: Enter the password for the account.
3. **Save or Update**:
   - If ServiceNow is not configured, click **Save** to set up the integration.
   - If ServiceNow is already configured, click **Edit**, update the fields, and click **Update** to apply changes.
4. **Confirmation**:
   - Upon successful configuration, you will receive a confirmation message.
5. **Error Handling**:
   - If any errors occur during configuration, they will be displayed as alerts with appropriate messages (e.g., "Invalid credentials" or "Service URL not reachable").

---

## Jira Integration

### Description

Integrate Jira to streamline project workflows, issue tracking, and task automation. This integration supports seamless management of project activities within your environment.

### Steps to Configure

1. **Open Jira Integration Dialog**:
   - Navigate to the integration section in the settings menu.
   - Select **Jira** from the list of integrations.
2. **Provide Required Details**:
   - **Description**: Enter a brief description of the integration.
   - **Service URL**: Provide the URL of your Jira instance (e.g., `https://yourcompany.atlassian.net`).
   - **API Token**: Enter the API token generated in your Jira account settings.
   - **User Email**: Enter the email address associated with your Jira account.
3. **Save or Update**:
   - If Jira is not configured, click **Save** to set up the integration.
   - If Jira is already configured, click **Edit**, update the fields, and click **Update** to apply changes.
4. **Confirmation**:
   - A success message will confirm that the integration is configured correctly.
5. **Error Handling**:
   - Any errors (e.g., "Invalid API Token" or "Unable to connect to the Jira instance") will be displayed in a user-friendly alert.

---

## SSO (Single Sign-On) Integration

### Description

Enable Single Sign-On to allow users to log in to your system using their organization’s identity provider. This supports PKCE (Proof Key for Code Exchange) for enhanced security.

### Steps to Configure

1. **Open SSO Configuration**:
   - Navigate to the integration section in the settings menu.
   - Select **SSO** from the options.
2. **Provide Required Details**:
   - **Client ID**: Enter the client ID provided by the identity provider.
   - **Client Secret**: Enter the secret associated with the client ID.
   - **SSO Enabled**: Toggle this option to enable SSO.
   - **PKCE Configuration (if enabled)**:
     - **Endpoint Issuer**: Enter the issuer of the endpoint.
     - **Authorization Endpoint**: Provide the URL for the authorization endpoint.
     - **JWK Set Endpoint**: Provide the JSON Web Key Set endpoint.
     - **Token Endpoint**: Enter the token endpoint URL.
     - **Logout URL (Optional)**: Provide the logout URL.
3. **Save or Update**:
   - If SSO is not configured, click **Save** to set up the integration.
   - If SSO is already configured, click **Edit**, update the fields, and click **Update** to apply changes.
4. **Confirmation**:
   - A success message confirms the successful setup of the SSO integration.
5. **Error Handling**:
   - Alerts will display error messages if the configuration is invalid (e.g., "Invalid Client ID" or "Authorization endpoint unreachable").

---

## SMTP Integration

### Description

Set up SMTP to enable email notifications from your environment. Configure the required settings to send alerts and notifications to users.

### Steps to Configure

1. **Open SMTP Integration Dialog**:
   - Navigate to the integration section in the settings menu.
   - Select **SMTP** from the integration options.
2. **Provide Required Details**:
   - **SMTP Host**: Enter the hostname of your SMTP server (e.g., `smtp.gmail.com`).
   - **SMTP Port**: Specify the port number (e.g., 587 for secure connections).
   - **Email Address**: Provide the sender’s email address.
   - **Password**: Enter the password for the email account.
3. **Save or Update**:
   - If SMTP is not configured, click **Save** to set up the integration.
   - If SMTP is already configured, click **Edit**, update the fields, and click **Update** to apply changes.
4. **Confirmation**:
   - A success message confirms the SMTP integration is configured successfully.
# Error Handling

Error messages will indicate issues such as:
- **"Unable to connect to SMTP server"**
- **"Invalid email credentials"**

# Workspace Alerts in CloudPi

## Alert Configuration

- **Email Alerts**:
  - **Event-Based Notifications**: Set up email alerts for critical events such as budget overruns, cost optimizations, or resource utilization issues.
- **Ticketing Alerts**:
  - **Automated Ticket Generation**: Integrate with your ticketing system to automatically create tickets for actionable issues identified within CloudPi.
- **Custom Notifications**:
  - **In-App and Frequency Customization**: Customize the type and frequency of in-app notifications to ensure stakeholders are timely informed about significant changes or updates.

---
