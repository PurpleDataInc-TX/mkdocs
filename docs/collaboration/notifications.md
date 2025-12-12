# Notifications & Alerts

Stay informed with real-time updates about your cloud environment through CloudPi's comprehensive notification system.

## Overview

CloudPi's notification system provides:
- **Real-time alerts** for critical events
- **Email notifications** for important updates
- **In-app notifications** for immediate visibility
- **Customizable alert thresholds** per project
- **Alert routing** based on user roles

## Types of Notifications

### 1. Budget Alerts

Receive notifications when:
- **Budget threshold reached** (e.g., 80% of budget consumed)
- **Budget exceeded** - Spending surpasses allocated amount
- **Forecast exceeding budget** - Projected costs will exceed budget

**Configuration:**
- Set threshold percentages (50%, 75%, 90%, 100%)
- Choose notification recipients
- Select notification channels (email, in-app)

### 2. Cost Anomaly Alerts

Get notified about:
- **Unexpected cost spikes** - Unusual increase in spending
- **Service cost anomalies** - Specific service showing irregular costs
- **Resource provisioning alerts** - New expensive resources detected

**Detection:**
- Machine learning analyzes historical patterns
- Flags deviations from normal spending
- Customizable sensitivity settings

### 3. Optimization Alerts

Stay informed about:
- **New recommendations available** - Cost-saving opportunities identified
- **High-impact recommendations** - Significant savings potential
- **Recommendation expiry** - Time-sensitive optimization actions

### 4. Resource Alerts

Monitor resource issues:
- **Underutilized resources** - Resources not being fully used
- **Orphaned resources** - Unattached volumes, unused IPs
- **Resource health issues** - Performance or availability problems

### 5. Compliance & Policy Alerts

Track compliance status:
- **Policy violations** - Resources not meeting defined policies
- **Tag compliance** - Missing or incorrect resource tags
- **Security findings** - Unencrypted data, public access issues

### 6. Workflow Alerts

Workflow execution updates:
- **Workflow executed** - Automation completed
- **Workflow failed** - Automation encountered errors
- **Approval required** - Manual approval needed

### 7. Task & Ticket Alerts

Collaboration notifications:
- **Task assigned** - New task assigned to you
- **Task due soon** - Deadline approaching
- **Ticket updated** - Status change or comment added
- **Ticket resolved** - Issue closed

## Notification Channels

### In-App Notifications

**Location:** Bell icon in top-right header

**Features:**
- Real-time updates without page refresh
- Notification badge with unread count
- Notification history for last 30 days
- Click to navigate to relevant page

**Managing In-App Notifications:**
1. Click bell icon to view notifications
2. Click notification to view details
3. Mark as read or dismiss
4. Clear all notifications

### Email Notifications

**Delivery:**
- Sent to user's registered email address
- Configurable frequency (immediate, daily digest, weekly summary)
- HTML formatted with direct links to CloudPi

**Email Preferences:**
Users can control:
- Which alert types trigger emails
- Email frequency
- Time of day for digest emails

## Configuring Notifications

### User-Level Notification Preferences

**Access:**
1. Click user profile icon (top-right)
2. Select **Notification Preferences**

**Configuration Options:**

| Alert Type | In-App | Email | Digest |
|------------|--------|-------|--------|
| Budget Alerts | ✅ | ✅ | ✅ |
| Cost Anomalies | ✅ | ✅ | ❌ |
| Optimizations | ✅ | ✅ | ✅ |
| Resource Alerts | ✅ | ❌ | ✅ |
| Compliance | ✅ | ✅ | ❌ |
| Workflows | ✅ | ✅ | ❌ |
| Tasks | ✅ | ✅ | ❌ |
| Tickets | ✅ | ✅ | ❌ |

**Digest Options:**
- **Daily Digest** - Receive summary email once per day
- **Weekly Summary** - Get weekly rollup of activity
- **Immediate** - Instant email for each alert

### Project-Level Alert Configuration

**Access:**
1. Navigate to **Project Settings**
2. Click **Alerts** tab

**Configuration:**

**Budget Threshold Alerts:**
- Enable/disable budget alerts
- Set threshold percentages
- Add notification recipients (email addresses)

**Cost Anomaly Detection:**
- Enable anomaly detection
- Set sensitivity (Low, Medium, High)
- Define minimum threshold for alerts

**Recommendation Alerts:**
- Enable new recommendation notifications
- Set minimum savings threshold (e.g., only alert if savings > $1000)

**Resource Alerts:**
- Configure underutilization thresholds
- Enable orphaned resource detection
- Set health check frequency

### Workspace-Level Alert Configuration

**Access:** Admin Settings → Workspace Settings → Alerts

**Workspace admins can:**
- Set default alert configurations for new projects
- Configure organization-wide notification rules
- Manage alert escalation policies
- Set up alert webhooks for external systems

## Alert Escalation

### Escalation Rules

Define escalation for critical alerts:

**Level 1:** Immediate notification to project team  
**Level 2:** After 2 hours, notify project admin  
**Level 3:** After 4 hours, notify workspace admin  
**Level 4:** After 8 hours, notify executives

**Escalation Triggers:**
- Budget exceeded by >20%
- Critical policy violations
- High-cost anomalies (>$10,000)
- Failed cost-critical workflows

## Alert Acknowledgment

### Acknowledging Alerts

1. Open notification details
2. Click **Acknowledge** button
3. Optionally add comment explaining action taken
4. Alert marked as acknowledged

**Benefits:**
- Tracks who is handling the alert
- Prevents duplicate work
- Provides audit trail

### Auto-Acknowledgment

Alerts are automatically acknowledged when:
- Budget is adjusted to accommodate spending
- Recommendation is accepted or dismissed
- Policy violation is remediated
- Resource issue is resolved

## Notification API

### Webhook Integration

Send CloudPi alerts to external systems:

**Configuration:**
1. Admin Settings → Integrations → Webhooks
2. Add webhook URL
3. Select alert types to forward
4. Configure authentication (optional)

**Payload Example:**
```json
{
  "alert_type": "budget_threshold",
  "project": "AWS Production",
  "severity": "high",
  "message": "Budget threshold 90% reached",
  "current_spend": 45000,
  "budget": 50000,
  "timestamp": "2025-12-12T10:30:00Z"
}
```

**Use Cases:**
- Forward to Slack, Teams, or PagerDuty
- Trigger custom automation
- Integrate with ticketing systems
- Feed SIEM or monitoring tools

## Notification History

### Viewing Notification History

**Access:** User Profile → Notification History

**Filter By:**
- Date range
- Alert type
- Project
- Severity
- Read/Unread status

**Export:**
- Download notification history as CSV
- Include alert details and actions taken

## Best Practices

### Alert Configuration

1. **Start Conservative** - Enable critical alerts only initially
2. **Tune Over Time** - Adjust thresholds based on experience
3. **Avoid Alert Fatigue** - Don't over-notify
4. **Use Digests** - For non-urgent alerts
5. **Test Notifications** - Verify delivery works

### Alert Management

1. **Acknowledge Promptly** - Show alerts are being handled
2. **Take Action** - Don't just dismiss alerts
3. **Document Resolution** - Add comments explaining fixes
4. **Review Patterns** - Look for recurring alerts
5. **Adjust Thresholds** - Fine-tune to reduce noise

### Team Collaboration

1. **Define Ownership** - Clear alert ownership by project
2. **Escalation Paths** - Document who to escalate to
3. **On-Call Rotations** - For critical alerts
4. **Alert Runbooks** - Document response procedures

## Troubleshooting

### Not Receiving Email Notifications

**Check:**
1. Email address correct in user profile
2. Email preferences enabled for alert type
3. Emails not in spam/junk folder
4. SMTP integration configured (Admin)

### Missing In-App Notifications

**Check:**
1. Browser refresh needed
2. Notification preferences enabled
3. User has access to relevant project

### Too Many Notifications

**Solutions:**
1. Increase alert thresholds
2. Switch to digest mode for less critical alerts
3. Disable alerts for non-essential events
4. Use filters to reduce scope

---

## Summary

CloudPi's notification system ensures you're always informed about:
- Budget status and cost trends
- Optimization opportunities
- Resource issues and compliance
- Task and workflow updates

Configure notifications to match your organization's needs and avoid alert fatigue while staying on top of critical cloud management activities.

---

*Stay informed, act quickly, optimize continuously.*
