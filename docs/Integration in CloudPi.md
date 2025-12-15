# Integration in CloudPi 

### Integration Capabilities

• ServiceNow

• Jira

• SSO (Single Sign-On)

• SMTP (Simple Mail Transfer Protocol)

## ServiceNow Integration

 Enable seamless IT service management and workflow automation by integrating your ServiceNow instance. This integration facilitates handling incidents, change requests, and IT operations efficiently.
 
### Steps to Configure
1.	Open ServiceNow Integration Dialog

    a.	Navigate to the integration section in the settings menu.

    b.	Select ServiceNow from the list of integrations.


2.	Provide Required Details

  	a.	**Service URL**: Enter the URL of your ServiceNow instance (e.g., https://yourcompany.service-now.com).
  	
  	b.	**API Client ID**: Provide the client ID for authentication.
  	
  	c.	**API Client Secret**: Provide the secret key associated with the client ID.
  	
  	d.	**Username**: Enter the username of your ServiceNow account.
  	
  	e.	**Password**: Enter the password for the account.


3.	Save or Update

    a.	If ServiceNow is not configured, click **Save** to set up the integration.
  	
    b.	If ServiceNow is already configured, click **Edit**, update the fields, and click **Update** to apply changes.


4.	Confirmation


    a.	Upon successful configuration, you will receive a confirmation message.
  	

 
### Error Handling
If any errors occur during configuration, they will be displayed as alerts with appropriate messages (e.g., "Invalid credentials" or "Service URL not reachable").
 
## Jira Integration
Integrate Jira to streamline project workflows, issue tracking, and task automation. This integration supports seamless management of project activities within your environment. 

### Steps to Configure
1.	Open Jira Integration Dialog

  	a.	Navigate to the integration section in the settings menu.
  	
  	b.	Select Jira from the list of integrations.

2.	Provide Required Details

  	a.	**Description**: Enter a brief description of the integration.
  	
  	b.	**Service URL**: Provide the URL of your Jira instance (e.g., https://yourcompany.atlassian.net).
  	
  	c.	**API Token**: Enter the API token generated in your Jira account settings.
  	
  	d.	**User Email**: Enter the email address associated with your Jira account.


3.	Save or Update

    a.	If Jira is not configured, click Save to set up the integration.

  	b.	If Jira is already configured, click Edit, update the fields, and click Update to apply changes.


4.	Confirmation


    a.	A success message will confirm that the integration is configured correctly.
  	

 
### Error Handling
Any errors (e.g., "Invalid API Token" or "Unable to connect to the Jira instance") will be displayed in a user-friendly alert.


## SSO (Single Sign-On) Integration
Enable Single Sign-On to allow users to log in to your system using their organization’s identity provider. This supports PKCE (Proof Key for Code Exchange) for enhanced security.

### Steps to Configure
1.	Open Auth0 Configuration

  	a.	Navigate to the integration section in the settings menu.
  	
  	b.	Select SSO from the options.

    c.	Click on the Auth0 tab, you’ll see the configuration form.

2.	Provide Required Details

  	a.	**Client ID**: Enter the client ID provided by the identity provider.
  	
  	b.	**Client Secret**: Enter the secret associated with the client ID.
  	
  	c.	**SSO Enabled**: Toggle this option to enable SSO.


3.	Save or Update

    a.	If Auth0 is not configured, click Save to set up the integration.

  	b.	If Auth0 is already configured, click Edit, update the fields, and click Update to apply changes.

4.	Confirmation


    a.	A success message confirms the successful setup of the SSO integration.
  	

 
### Error Handling
Alerts will display error messages if the configuration is invalid (e.g., "Invalid Client ID" or "Authorization endpoint unreachable").

## SMTP Integration
Set up SMTP to enable email notifications from your environment. Configure the required settings to send alerts and notifications to users.

### Steps to Configure
1.	Open SMTP Integration Dialog

  	a.	Navigate to the integration section in the settings menu
  	
  	b.	Select SMTP from the integration options.

2.	Provide Required Details

  	a.	**SMTP Host**: Enter the hostname of your SMTP server (e.g., smtp.gmail.com).
  	
  	b.	**SMTP Port**: Specify the port number (e.g., 587 for secure connections).
  	
  	c.	**Email Address**: Provide the sender’s email address.

    b. **Password**: Enter the password for the email account.


4.	Save or Update

    a.	If SMTP is not configured, click Save to set up the integration.

  	 b.	b.	If SMTP is already configured, click Edit, update the fields, and click Update to apply changes

   
5.	Confirmation


    a.	A success message confirms the SMTP integration is configured successfully.
  	

 
### Error Handling
Error messages will indicate issues such as "Unable to connect to SMTP server" or "Invalid email credentials."
 

