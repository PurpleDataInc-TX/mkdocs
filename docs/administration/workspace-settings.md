# Workspace Settings

## Overview

**Workspace Settings** allow administrators to configure organization-wide preferences, integrations, and default behaviors for CloudPi. This centralized configuration ensures consistent operations across all projects and users within the workspace.

## Accessing Workspace Settings

1. Log in as **Workspace Admin**
2. Navigate to **Admin Settings** from the header
3. Select **Workspace Settings**
4. Configure desired options

## Configuration Sections

### General Settings

**Workspace Information:**
- **Workspace Name** - Display name for your organization
- **Description** - Purpose and scope of the workspace
- **Timezone** - Default timezone for all users
- **Currency** - Default currency for cost reporting
- **Fiscal Year Start** - When your fiscal year begins

**Branding:**
- **Logo Upload** - Organization logo (appears in header)
- **Color Scheme** - Primary and secondary colors
- **Email Footer** - Custom footer for notification emails

### Default Preferences

**Date & Time Defaults:**
- Default date range for reports (7 days, 30 days, 90 days)
- Default granularity (Daily, Weekly, Monthly)
- First day of week (Sunday/Monday)

**Display Preferences:**
- Number format (1,000.00 vs 1.000,00)
- Large number abbreviation (K, M, B)
- Decimal places for currency (0, 2, 4)

**Report Defaults:**
- Default cloud providers to show
- Default project grouping
- Default cost allocation view

### Integration Settings

**Third-Party Tool Connections:**
- **Jira Integration** - Configure Jira workspace connection
- **ServiceNow Integration** - Set up ServiceNow instance
- **Azure DevOps** - Connect ADO organization
- **Slack** - Enable Slack notifications
- **Microsoft Teams** - Configure Teams webhooks

**API Configuration:**
- API rate limits
- Webhook endpoints
- API key management
- External system authentication

**SMTP Configuration:**
- Email server settings
- Port and encryption
- Authentication credentials
- Test email functionality

### Alert Configuration

**Organization-Wide Alert Rules:**
- Default budget thresholds (50%, 75%, 90%, 100%)
- Cost anomaly detection sensitivity
- Alert frequency limits (to prevent spam)
- Default alert recipients by role

**Escalation Policies:**
- Level 1: Project team (immediate)
- Level 2: Project admin (after 2 hours)
- Level 3: Workspace admin (after 4 hours)
- Level 4: Executives (after 8 hours)

**Notification Preferences:**
- Enable/disable notification types
- Digest schedule (daily, weekly)
- Quiet hours configuration
- Emergency override settings

### Security Settings

**Authentication:**
- Password requirements (complexity, expiration)
- Multi-factor authentication (MFA) enforcement
- Session timeout duration
- Concurrent session limits

**Single Sign-On (SSO):**
- SSO provider configuration
- Auto-provisioning settings
- Group mapping rules
- Fallback authentication

**Access Control:**
- IP whitelist/blacklist
- Geo-restrictions
- API access controls
- Service account management

### Data Retention

**Historical Data:**
- Billing data retention (default: 13 months)
- Recommendation history (default: 6 months)
- Audit log retention (default: 12 months)
- Report cache duration

**Data Export:**
- Automatic export schedule
- Export format preferences (CSV, JSON, Parquet)
- Storage location for exports
- Retention of exported files

### Compliance & Audit

**Audit Logging:**
- Enable comprehensive audit trail
- Log all user actions
- Track configuration changes
- Monitor API usage

**Compliance Reports:**
- Automated compliance reporting
- Regulatory framework selection (SOC2, ISO27001, GDPR)
- Scheduled compliance checks
- Violation notifications

### Workspace Limits

**Resource Limits:**
- Maximum projects per workspace
- Maximum users per workspace
- Data processing limits
- API call limits

**Storage Quotas:**
- Total storage allocation
- Per-project storage limits
- Retention period limits

## Configuring Settings

### Step-by-Step Configuration

#### 1. Access Settings Page
Navigate to Admin Settings → Workspace Settings

#### 2. Select Section
Click on the section you want to configure from the left sidebar

#### 3. Modify Settings
Update fields as needed:
- Text inputs: Type new values
- Dropdowns: Select from options
- Toggles: Enable/disable features
- File uploads: Browse and upload

#### 4. Test Configuration (if applicable)
For integrations:
- Click "Test Connection" button
- Verify success message
- Check external system

#### 5. Save Changes
- Click "Save" button at bottom
- Confirm changes in dialog
- Verify settings applied

#### 6. Verify Impact
- Check affected projects
- Test with sample data
- Monitor for issues

## Best Practices

### Configuration Management

1. **Document Changes**
   - Maintain change log
   - Record reasons for modifications
   - Note date and person making changes

2. **Test Before Production**
   - Use test projects if available
   - Verify integrations work
   - Check impact on existing data

3. **Gradual Rollout**
   - Don't change everything at once
   - Monitor after each change
   - Be ready to rollback if needed

4. **Regular Reviews**
   - Quarterly settings review
   - Verify configurations are still optimal
   - Remove unused integrations

5. **Backup Configuration**
   - Export current settings periodically
   - Document custom configurations
   - Save API keys securely

### Security Best Practices

1. **Strong Authentication**
   - Enforce SSO when possible
   - Require MFA for admins
   - Regular password policy review

2. **Access Restrictions**
   - Implement IP whitelisting
   - Use geo-restrictions if applicable
   - Monitor for suspicious access

3. **Regular Audits**
   - Review audit logs weekly
   - Check for unauthorized changes
   - Investigate anomalies

4. **Principle of Least Privilege**
   - Limit workspace admin count
   - Regular permission reviews
   - Remove access promptly

## Troubleshooting

### Common Issues

**Integration Not Working:**
- Verify credentials are current
- Check network connectivity
- Test with external system directly
- Review error logs

**Notifications Not Sending:**
- Confirm SMTP settings
- Check spam folders
- Verify email addresses
- Test with single recipient first

**Settings Not Saving:**
- Check for validation errors
- Verify admin permissions
- Clear browser cache
- Try different browser

**Performance Issues:**
- Review data retention settings
- Check API rate limits
- Monitor concurrent users
- Contact support if persistent

## Workspace Alerts

Configure alerts that apply across the entire workspace:

### Cost Overrun Alerts
- Trigger: Actual expenses exceed budget
- Recipients: Configured by project
- Frequency: Immediate, then hourly until resolved

### Budget Threshold Alerts
- Trigger: Spending approaches predefined limit
- Thresholds: 50%, 75%, 90%, 100%
- Recipients: Project owners + workspace admins

### Optimization Opportunities
- Trigger: New high-value recommendations
- Minimum savings: Configurable (default $1000)
- Frequency: Daily digest

### Underutilized Resources
- Trigger: Resources below utilization threshold
- Threshold: < 10% utilization for 7 days
- Recipients: Project admins

### Health Alerts
- Infrastructure health monitoring
- Security compliance violations
- Performance metric degradation
- Backup and recovery status

### Cost Anomaly Alerts
- Unexpected spending patterns
- Irregular service usage
- Potential misconfigurations
- Unauthorized resource deployment

## Managing Customer Billing Information

**Billing Management Features:**
- Update and maintain billing details
- Manage payment methods
- Track billing history
- Generate invoices

**Accessing Billing:**
Navigate to Workspace Settings → Billing Information

**Key Activities:**
- Download invoices
- Upgrade/downgrade plans
- Manage payment details
- Cancel subscription (if needed)

**Active Subscription Details:**
- Plan type and tier
- Start and end dates
- Subscription ID
- Company name and address
- Billing contact information

## Summary

Workspace Settings provide centralized control over:
- Organization-wide preferences
- Integration configurations
- Security and access policies
- Alert and notification rules
- Data retention and compliance
- Resource limits and quotas

Proper configuration ensures consistent, secure, and efficient CloudPi operations across your entire organization.

---

## Related Documentation

- [User Management](user-management.md) - Managing users
- [Roles & Permissions](roles-permissions.md) - Access control
- [Security Overview](../security-integrations/security-overview.md) - Security features
- [Integrations](../security-integrations/sso-setup.md) - Integration setup

---

*For workspace configuration assistance, contact CloudPi support.*
