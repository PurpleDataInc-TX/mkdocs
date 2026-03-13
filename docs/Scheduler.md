# Scheduler

## Overview

CloudPi Scheduler provides comprehensive scheduling capabilities for automating resource management, cost optimization, and operational tasks across your multi-cloud environment. Schedule start/stop operations, scaling activities, backups, and custom workflows based on time, events, or conditions.

## Key Features

- **Multi-Resource Scheduling**: Schedule actions across VMs, databases, containers, and more
- **Flexible Schedules**: Time-based, event-driven, and condition-based scheduling
- **Timezone Support**: Schedule in local or resource-specific timezones
- **Cost Optimization**: Automatic shutdown of non-production resources
- **Holiday Awareness**: Skip schedules on holidays or special dates
- **Conflict Detection**: Prevent overlapping or conflicting schedules
- **Audit Trail**: Complete history of scheduled actions
- **Override Capabilities**: Manual override for urgent situations

## Accessing the Scheduler

**Navigation**: Automation > Scheduler

### Scheduler Dashboard

View and manage all schedules:

- **Active Schedules**: Currently active schedules
- **Upcoming Actions**: Next scheduled operations
- **Schedule History**: Past schedule executions
- **Success Rate**: Schedule reliability metrics
- **Cost Savings**: Estimated savings from scheduled shutdowns

## Creating a Schedule

### Basic Schedule Creation

1. Navigate to **Automation** > **Scheduler**
2. Click **Create Schedule**
3. Configure schedule settings:

#### Step 1: Select Resources

```
Resource Selection:
- By Tag (Environment:dev, Project:demo)
- By Name Pattern (dev-*, test-*)
- By Resource Type (EC2, RDS, AKS)
- By Cloud Account
- Individual Resources
```

#### Step 2: Define Actions

Available actions:

- **Start**: Power on resources
- **Stop**: Gracefully shut down resources
- **Terminate**: Delete resources (with confirmation)
- **Snapshot**: Create backup before action
- **Scale**: Adjust resource capacity
- **Custom**: Run custom scripts or workflows

#### Step 3: Set Schedule Pattern

```yaml
Schedule Types:
  - Time-based: Daily, weekly, monthly patterns
  - Cron Expression: Advanced scheduling
  - One-time: Single execution
  - Event-driven: Triggered by events
```

#### Step 4: Configure Options

- **Timezone**: Select appropriate timezone
- **Exclusions**: Holiday calendar, maintenance windows
- **Notifications**: Alert on execution, failure, or both
- **Approval**: Require approval before execution
- **Retry**: Retry policy for failures

## Schedule Patterns

### Time-Based Schedules

#### Business Hours Pattern

```yaml
name: "Dev Environment Business Hours"
resources:
  tags:
    Environment: development
schedule:
  start:
    time: "08:00"
    days: [Monday, Tuesday, Wednesday, Thursday, Friday]
    timezone: "America/New_York"
  stop:
    time: "18:00"
    days: [Monday, Tuesday, Wednesday, Thursday, Friday]
    timezone: "America/New_York"
exclusions:
  - holidays: US_Federal
  - maintenance_windows: true
```

#### Weekend Shutdown

```yaml
name: "Non-Production Weekend Shutdown"
resources:
  tags:
    Environment: [dev, staging, test]
schedule:
  stop:
    time: "20:00"
    days: [Friday]
  start:
    time: "07:00"
    days: [Monday]
notifications:
  - channel: slack
    events: [execution, failure]
```

#### Monthly Maintenance

```yaml
name: "Monthly Database Maintenance"
resources:
  type: rds
  tags:
    MaintenanceWindow: monthly
schedule:
  action: snapshot_then_restart
  pattern: "0 2 1 * *"  # 2 AM on 1st of month
  timezone: "UTC"
approval_required: true
```

### Cron-Based Schedules

Advanced scheduling with cron expressions:

```
# Every weekday at 8 AM
0 8 * * 1-5

# Every 4 hours
0 */4 * * *

# Last day of month at midnight
0 0 L * *

# First Monday of month at 9 AM
0 9 1-7 * 1
```

### Event-Driven Schedules

Trigger based on events:

```yaml
name: "Scale on High Load"
trigger:
  event_type: metric_threshold
  condition:
    metric: cpu_utilization
    threshold: 80
    duration: 5m
action:
  type: scale_up
  parameters:
    increment: 2
cooldown: 15m
```

## Advanced Scheduling Features

### Cascade Schedules

Create dependent schedules:

```yaml
name: "Application Tier Shutdown"
resources:
  - name: "Shutdown Load Balancers"
    tags: {Tier: frontend}
    order: 1
    wait: 30s

  - name: "Shutdown App Servers"
    tags: {Tier: application}
    order: 2
    wait: 60s

  - name: "Shutdown Databases"
    tags: {Tier: database}
    order: 3
```

### Conditional Scheduling

Execute based on conditions:

```yaml
name: "Conditional Dev Environment Shutdown"
resources:
  tags: {Environment: development}
schedule:
  stop:
    time: "18:00"
    condition:
      - no_active_users: true
      - cpu_utilization: <10%
      - last_modification: >2h
```

### Smart Scheduling

AI-powered schedule optimization:

```yaml
name: "Smart Cost Optimization"
resources:
  tags: {CostOptimization: enabled}
mode: smart
parameters:
  learning_period: 30d
  optimization_goal: cost
  min_savings: 15%
  preserve_sla: true
```

CloudPi learns usage patterns and creates optimal schedules.

## Schedule Management

### Schedule Templates

Pre-built templates for common scenarios:

| Template | Description | Use Case |
|----------|-------------|----------|
| Business Hours | 8 AM - 6 PM weekdays | Dev/Test environments |
| Overnight Shutdown | 7 PM - 7 AM daily | Demo environments |
| Weekend Off | Friday evening - Monday morning | Non-critical workloads |
| Monthly Reboot | First Sunday of month | Patch management |
| Seasonal Scale | Adjust for seasonal demand | E-commerce, retail |

### Bulk Schedule Operations

Manage multiple schedules:

1. Navigate to **Scheduler** > **Schedules**
2. Select multiple schedules
3. Bulk actions:
   - Enable/Disable
   - Modify timezone
   - Update exclusions
   - Change notifications
   - Delete schedules

### Schedule Versioning

Track schedule changes:

- View schedule history
- Restore previous versions
- Compare schedule changes
- Audit schedule modifications

## Monitoring and Notifications

### Schedule Execution Monitoring

Real-time monitoring:

- **Live View**: See schedules as they execute
- **Execution Status**: Success, failed, skipped
- **Duration**: Time taken for actions
- **Resource Impact**: Resources affected
- **Errors**: Detailed error messages

### Notification Configuration

Configure alerts for schedule events:

```yaml
notifications:
  - name: "Schedule Failure Alert"
    events: [failure, partial_failure]
    channels:
      - type: email
        recipients: [ops@company.com]
      - type: slack
        webhook: https://hooks.slack.com/...
        channel: "#ops-alerts"
      - type: pagerduty
        severity: high

  - name: "Weekly Schedule Summary"
    type: summary
    frequency: weekly
    day: Monday
    time: "09:00"
    channel: email
```

### Schedule Reports

Generate schedule reports:

- **Execution Summary**: Success rate, total executions
- **Cost Impact**: Savings from scheduled shutdowns
- **Compliance**: Adherence to defined schedules
- **Resource Coverage**: % of resources under schedule management
- **Trend Analysis**: Usage patterns and optimization opportunities

## Holiday and Exclusion Management

### Holiday Calendars

Configure holiday exclusions:

1. Navigate to **Scheduler** > **Settings** > **Holidays**
2. Select or create calendar:
   - US Federal Holidays
   - UK Bank Holidays
   - Custom company holidays
   - Regional holidays

3. Configure behavior:
   - Skip schedules on holidays
   - Extend to surrounding weekends
   - Custom date ranges

### Maintenance Windows

Define maintenance windows:

```yaml
maintenance_windows:
  - name: "Monthly Patching"
    schedule: "First Sunday 2-6 AM"
    pause_schedules: true
    notification: 24h_advance

  - name: "Black Friday Prep"
    dates: ["2026-11-20 to 2026-11-30"]
    action: disable_shutdowns
    affected_tags: {Application: e-commerce}
```

## Override and Emergency Actions

### Manual Override

Override scheduled actions:

1. Navigate to schedule
2. Click **Override**
3. Options:
   - **Skip Next**: Skip upcoming execution
   - **Run Now**: Execute immediately
   - **Pause**: Temporarily disable
   - **Modify**: One-time schedule change

### Emergency Actions

Execute immediate actions:

```
Emergency Actions:
- Stop All: Immediate shutdown of all scheduled resources
- Start All: Emergency start of resources
- Cancel Pending: Cancel all queued schedule actions
- Revert: Undo last scheduled action
```

Requires appropriate permissions and provides audit trail.

## Integration with Other Features

### Cost Optimization

Schedules integrate with cost features:

- **Savings Tracking**: Calculate cost reduction
- **Recommendations**: Suggest schedule improvements
- **Budget Alignment**: Ensure schedules support budget goals

### Automation Policies

Combine with policies:

```yaml
policy:
  name: "Enforce Dev Environment Schedules"
  condition:
    tags: {Environment: development}
  action:
    create_schedule:
      template: business_hours
    enforce: true
  exceptions:
    tags: {ScheduleExempt: true}
```

### VM Scheduler

Enhanced VM scheduling:

- Detailed VM lifecycle management
- Application-aware shutdowns
- Graceful service termination
- Health checks before shutdown

## API Access

Manage schedules programmatically:

```bash
# List all schedules
GET /api/v1/scheduler/schedules

# Create schedule
POST /api/v1/scheduler/schedules
{
  "name": "Dev Environment Schedule",
  "resources": {
    "tags": {"Environment": "development"}
  },
  "schedule": {
    "start": "08:00",
    "stop": "18:00",
    "days": ["Mon", "Tue", "Wed", "Thu", "Fri"],
    "timezone": "America/New_York"
  }
}

# Execute schedule immediately
POST /api/v1/scheduler/schedules/{id}/execute

# Get schedule history
GET /api/v1/scheduler/schedules/{id}/history
```

## Best Practices

1. **Start Small**: Begin with non-production environments
2. **Test First**: Use one-time schedules to test before recurring
3. **Tag Strategy**: Use consistent tags for easy schedule targeting
4. **Timezone Awareness**: Always specify timezone explicitly
5. **Notification Setup**: Configure alerts before production deployment
6. **Override Process**: Document override procedures
7. **Regular Reviews**: Audit schedules quarterly
8. **Cost Tracking**: Monitor savings to justify scheduling efforts
9. **Stakeholder Buy-in**: Communicate schedule impacts
10. **Emergency Contacts**: Maintain list of schedule administrators

## Common Use Cases

### Development Environment Cost Optimization

```yaml
name: "Dev Cost Optimization"
resources:
  tags: {Environment: [dev, test]}
schedule:
  stop: {time: "19:00", days: "Mon-Fri"}
  start: {time: "07:00", days: "Mon-Fri"}
  shutdown: {days: [Saturday, Sunday]}
exclusions:
  - holidays: true
  - deployment_windows: true
estimated_savings: 65%
```

### Demo Environment Management

```yaml
name: "Demo Environment Lifecycle"
resources:
  tags: {Type: demo}
schedule:
  - action: start
    time: "08:00"
    before_event: demo_presentation
  - action: snapshot
    time: "20:00"
  - action: terminate
    time: "20:30"
    condition: demo_completed
notification:
  alert: 1h_before_termination
```

### Database Maintenance

```yaml
name: "Database Backup and Maintenance"
resources:
  type: [rds, postgresql, mysql]
  tags: {Backup: enabled}
schedule:
  - action: snapshot
    time: "01:00"
    daily: true
  - action: optimize_tables
    cron: "0 2 * * 0"  # Sunday 2 AM
  - action: cleanup_old_logs
    cron: "0 3 1 * *"  # Monthly
retention:
  daily_snapshots: 7
  weekly_snapshots: 4
  monthly_snapshots: 12
```

## Troubleshooting

### Schedule Not Executing

**Issue**: Schedule didn't run at expected time

**Solutions**:
- Verify schedule is enabled
- Check timezone configuration
- Review exclusions (holidays, maintenance)
- Verify resource tags/filters
- Check CloudPi has permissions to execute action
- Review audit logs for errors

### Resources Not Responding

**Issue**: Schedule executes but resources don't change state

**Solutions**:
- Verify cloud provider permissions
- Check resource state (already stopped/started)
- Review resource dependencies
- Ensure resources aren't locked by other operations
- Check for conflicting schedules

### Unexpected Cost

**Issue**: Resources running when they should be stopped

**Solutions**:
- Review schedule execution history
- Check for schedule overrides
- Verify no conflicting schedules
- Review manual actions in audit logs
- Ensure schedule hasn't been disabled

## Related Documentation

- [VM Scheduler](AutomationVMScheduler.md)
- [Automation Overview](AutomationOverview.md)
- [Policies & Workflows](AutomationPolicies.md)
- [CloudPi Optimizations](CloudPiOptimisations.md)
- [Intelligence Automation](IntelligenceAutomation.md)
