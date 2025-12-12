# System Requirements

## User Requirements

### Supported Web Browsers
- **Google Chrome** 90 or later (Recommended)
- **Mozilla Firefox** 88 or later
- **Safari** 14 or later
- **Microsoft Edge** 90 or later

### Display Requirements
- **Minimum Resolution:** 1280x720
- **Recommended Resolution:** 1920x1080 or higher
- **Color Depth:** 24-bit or higher

### Internet Connection
- Stable broadband connection
- Minimum speed: 10 Mbps
- Recommended: 50 Mbps or higher for optimal performance

---

## Administrator Requirements

### Cloud Provider Credentials

#### AWS
- IAM Role with read-only permissions
- Cost and Usage Report (CUR) access
- Billing account access
- S3 bucket for billing exports

#### Azure
- Service Principal with:
  - Reader role at Management Group/Subscription level
  - Cost Management Reader role
  - Storage Blob Data Reader role
- Storage Account for billing exports
- Azure AD tenant (for SSO)

#### GCP
- Service Account with:
  - Cloud Asset Viewer role
  - BigQuery User role
  - Storage Object Viewer role
- BigQuery dataset for billing export

### Integration Requirements

#### For SSO Setup
- Azure AD tenant
- Application registration permissions
- Client ID and Secret

#### For Ticket Management
- Jira Cloud instance and API token
- ServiceNow instance and credentials
- Azure DevOps Personal Access Token

#### For Notifications
- SMTP server details
- Email account for sending notifications

---

## Network Requirements

### Firewall/Proxy Configuration
CloudPi needs access to:
- AWS APIs (*.amazonaws.com)
- Azure APIs (*.azure.com)
- GCP APIs (*.googleapis.com)
- CloudPi platform endpoints

### Ports
- HTTPS (443) - Required for all cloud provider APIs
- SMTP (587/465) - For email notifications

---

## Data Requirements

### Billing Data
- Historical billing data: Up to 13 months (Azure)
- Daily billing exports enabled
- Appropriate storage permissions

### Resource Metadata
- Read access to resource tags
- Access to resource inventory APIs
- Performance metrics access (for recommendations)

---

[← Back to Key Features](key-features.md) | [Next: First Login →](first-login.md)
