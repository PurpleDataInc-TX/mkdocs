# Audit Logging

## Overview

CloudPi Audit Logging provides comprehensive tracking of all activities and changes within your CloudPi environment. Maintain security, compliance, and accountability with detailed audit trails across all user actions, system events, and resource modifications.

## Key Features

- **Complete Activity Tracking**: Log all user actions and system events
- **Immutable Audit Trail**: Tamper-proof logging with cryptographic verification
- **Advanced Filtering**: Search and filter logs by multiple criteria
- **Real-Time Monitoring**: Live audit log streaming
- **Compliance Reports**: Pre-built reports for SOC 2, ISO 27001, HIPAA, etc.
- **Export & Integration**: Export logs to SIEM, logging platforms, or file storage
- **Retention Policies**: Configure log retention to meet compliance requirements

## Accessing Audit Logs

**Navigation**: Access & Security > Audit Logging

### Audit Log Dashboard

The dashboard provides:

- **Recent Activity**: Latest audit events
- **Activity Summary**: Events by type, user, and resource
- **Security Events**: Failed logins, permission changes, policy violations
- **Compliance Metrics**: Audit log completeness and retention status
- **Search Interface**: Advanced query capabilities

## Logged Events

### User Activities

CloudPi logs all user actions:

- **Authentication Events**
  - Login attempts (successful and failed)
  - Logout events
  - MFA verification
  - Session expiration
  - Password changes

- **Resource Actions**
  - Resource creation
  - Resource modification
  - Resource deletion
  - Tag changes
  - State changes

- **Configuration Changes**
  - Workspace settings
  - User management
  - RBAC modifications
  - Policy updates
  - Integration configurations

- **Cost Management**
  - Budget creation/modification
  - Alert configuration
  - Report generation
  - Export activities

### System Events

Automated system activities:

- **Automation Execution**
  - Policy runs
  - Workflow executions
  - Scheduled tasks
  - Remediation actions

- **Integration Events**
  - API calls
  - Webhook triggers
  - Cloud provider sync
  - SSO authentication

- **System Operations**
  - Data ingestion
  - Backup operations
  - Maintenance activities
  - Error conditions

## Audit Log Entry Structure

Each audit log entry contains:

```json
{
  "event_id": "evt_2026031012345678",
  "timestamp": "2026-03-10T14:30:45.123Z",
  "event_type": "resource.modify",
  "severity": "info",
  "actor": {
    "type": "user",
    "id": "user_12345",
    "email": "admin@company.com",
    "ip_address": "203.0.113.45",
    "user_agent": "Mozilla/5.0...",
    "session_id": "sess_abcdef123456"
  },
  "resource": {
    "type": "ec2_instance",
    "id": "i-0123456789abcdef",
    "cloud_provider": "aws",
    "account_id": "123456789012",
    "region": "us-east-1"
  },
  "action": {
    "operation": "stop_instance",
    "status": "success",
    "method": "api"
  },
  "changes": {
    "before": {"state": "running"},
    "after": {"state": "stopped"}
  },
  "metadata": {
    "request_id": "req_xyz789",
    "api_version": "v2",
    "tags": ["automation", "cost-optimization"]
  }
}
```

## Searching and Filtering

### Basic Search

Search audit logs using the search bar:

- **Keyword Search**: Free-text search across all fields
- **User Search**: Find activities by specific user
- **Resource Search**: Filter by resource ID or name
- **Event Type**: Filter by activity type

### Advanced Filters

Apply multiple filters:

```
Time Range: Last 7 days
Event Type: Authentication, Resource Modification
User: admin@company.com, user@company.com
Resource Type: EC2 Instance, S3 Bucket
Status: Failed
IP Address: 203.0.113.*
```

### Query Language

Use advanced query syntax:

```
# Find failed login attempts in last 24 hours
event_type:authentication.login AND status:failed AND timestamp:>now-24h

# Find resource deletions by specific user
event_type:resource.delete AND actor.email:user@company.com

# Find all cost-related activities
category:cost OR tags:budget OR tags:cost-optimization

# Find policy changes in production accounts
event_type:policy.* AND resource.tags.Environment:production
```

## Monitoring and Alerts

### Real-Time Monitoring

Monitor audit logs in real-time:

1. Navigate to **Audit Logging** > **Live View**
2. Select event types to monitor
3. Apply filters
4. View streaming events

### Security Alerts

Configure alerts for security events:

- **Failed Authentication**: Multiple failed login attempts
- **Privilege Escalation**: Permission changes
- **Suspicious Activity**: Unusual access patterns
- **Policy Violations**: Actions against defined policies
- **Resource Tampering**: Unauthorized modifications

### Alert Configuration

1. Go to **Audit Logging** > **Alerts**
2. Click **Create Alert**
3. Configure:
   - **Alert Name**: Descriptive name
   - **Condition**: Query that triggers alert
   - **Threshold**: Frequency or count threshold
   - **Recipients**: Who receives the alert
   - **Channels**: Email, Slack, PagerDuty, etc.

Example alert:

```yaml
name: "Multiple Failed Login Attempts"
condition: "event_type:authentication.login AND status:failed"
threshold:
  count: 5
  window: 5m
  group_by: actor.email
notification:
  channels: [email, slack]
  recipients: [security@company.com]
  severity: high
```

## Compliance and Reporting

### Compliance Templates

Pre-built compliance reports:

- **SOC 2 Type II**: User access and change management
- **ISO 27001**: Information security controls
- **HIPAA**: PHI access and modifications
- **PCI DSS**: Cardholder data access
- **GDPR**: Personal data processing activities
- **FedRAMP**: Federal security requirements

### Generating Compliance Reports

1. Navigate to **Audit Logging** > **Compliance Reports**
2. Select compliance framework
3. Choose report period
4. Apply filters (accounts, users, resources)
5. Generate report
6. Review or export (PDF, CSV, JSON)

### Custom Reports

Create custom audit reports:

1. Go to **Audit Logging** > **Reports**
2. Click **Create Report**
3. Configure:
   - **Report Name**
   - **Time Period**
   - **Event Filters**
   - **Grouping**: By user, resource, event type
   - **Metrics**: Event counts, unique users, resources affected
   - **Schedule**: One-time or recurring

## Log Export and Integration

### Export Options

Export audit logs for external analysis:

- **Manual Export**: Download logs for specific period
- **Scheduled Export**: Automated exports to cloud storage
- **Streaming Export**: Real-time log streaming

### Supported Formats

- **JSON**: Structured data export
- **CSV**: Spreadsheet analysis
- **Syslog**: Standard log format
- **CEF**: Common Event Format

### Integration with SIEM

Integrate with security platforms:

#### Splunk Integration

```bash
# Configure Splunk HEC endpoint
Settings > Integrations > Splunk
  - HEC URL: https://splunk.company.com:8088
  - HEC Token: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  - Source Type: cloudpi:audit
```

#### Azure Sentinel

```bash
# Stream logs to Azure Event Hub
Settings > Integrations > Azure Sentinel
  - Event Hub Namespace: cloudpi-logs
  - Event Hub Name: audit-logs
  - Shared Access Key: <key>
```

#### AWS Security Lake

```bash
# Configure Security Lake integration
Settings > Integrations > AWS Security Lake
  - Account ID: 123456789012
  - Region: us-east-1
  - S3 Bucket: aws-security-lake-logs
```

### API Access

Retrieve audit logs programmatically:

```bash
# Get recent audit logs
GET /api/v1/audit-logs?limit=100&offset=0

# Search audit logs
POST /api/v1/audit-logs/search
{
  "query": "event_type:resource.delete",
  "start_time": "2026-03-01T00:00:00Z",
  "end_time": "2026-03-10T23:59:59Z",
  "filters": {
    "user": "admin@company.com",
    "resource_type": "ec2_instance"
  }
}

# Export audit logs
POST /api/v1/audit-logs/export
{
  "format": "json",
  "start_time": "2026-03-01T00:00:00Z",
  "end_time": "2026-03-10T23:59:59Z"
}
```

## Retention Policies

### Configuring Retention

1. Navigate to **Audit Logging** > **Settings** > **Retention**
2. Configure retention periods:
   - **Hot Storage**: Immediate access (default: 90 days)
   - **Warm Storage**: Searchable archive (default: 1 year)
   - **Cold Storage**: Long-term archive (default: 7 years)

### Retention by Event Type

Set different retention for event types:

```yaml
retention_policies:
  - event_types: [authentication.*]
    hot_days: 90
    warm_days: 365
    cold_years: 7

  - event_types: [resource.delete, policy.modify]
    hot_days: 180
    warm_days: 730
    cold_years: 10

  - event_types: [resource.view]
    hot_days: 30
    warm_days: 90
    cold_years: 0
```

## Security and Integrity

### Log Immutability

CloudPi ensures audit log integrity:

- **Write-Once**: Logs cannot be modified after creation
- **Cryptographic Hashing**: Each log entry is hashed
- **Chain of Custody**: Logs linked with previous entries
- **Digital Signatures**: Logs signed for verification

### Access Controls

Control who can view audit logs:

| Role | Permissions |
|------|-------------|
| Audit Administrator | Full access, export, configure alerts |
| Security Analyst | View, search, export |
| Compliance Officer | View, generate reports |
| Manager | View team activities |
| Regular User | View own activities only |

### Audit Log of Audit Logs

CloudPi logs all access to audit logs:

- Who viewed logs
- What queries were run
- Exports performed
- Report generation
- Alert modifications

## Best Practices

1. **Regular Review**: Examine audit logs weekly for anomalies
2. **Alert Tuning**: Refine alerts to reduce false positives
3. **Retention Compliance**: Ensure retention meets regulatory requirements
4. **Access Control**: Limit audit log access to authorized personnel
5. **Integration**: Send logs to SIEM for correlation with other data
6. **Documentation**: Maintain procedures for log review and response
7. **Automated Analysis**: Use ML-based anomaly detection
8. **Incident Response**: Define procedures for security events

## Common Use Cases

### Security Investigations

Investigate security incidents:

1. Identify anomalous activity
2. Query audit logs for related events
3. Trace user actions timeline
4. Identify affected resources
5. Generate incident report

### Compliance Audits

Prepare for compliance audits:

1. Generate compliance report for audit period
2. Review access logs for PHI/PII resources
3. Document change management processes
4. Verify segregation of duties
5. Provide audit trail to auditors

### Change Management

Track infrastructure changes:

1. Filter for resource modification events
2. Review who made changes
3. Verify approval workflow
4. Document change timeline
5. Assess impact of changes

## Troubleshooting

### Logs Not Appearing

**Issue**: Recent activities not showing in audit logs

**Solutions**:
- Refresh the page (logs updated every 30 seconds)
- Check time range filter
- Verify event type filters
- Ensure you have permission to view logs
- Contact support if persistent

### Export Failing

**Issue**: Unable to export audit logs

**Solutions**:
- Check export size limit (max 10GB per export)
- Reduce time range or apply filters
- Verify export destination is accessible
- Ensure sufficient permissions
- Try alternative export format

### Alert Not Triggering

**Issue**: Security alert not firing

**Solutions**:
- Verify alert is enabled
- Check alert condition syntax
- Review threshold configuration
- Verify notification channels
- Test alert with known matching events

## Related Documentation

- [Security](security.md)
- [RBAC](rbac.md)
- [User Management](UserManagement.md)
- [Service Accounts](ServiceAccounts.md)
- [Integrations](Integrations.md)
