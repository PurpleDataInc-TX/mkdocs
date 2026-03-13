# Budgeting

## Overview

CloudPi Budgeting enables you to set, track, and manage cloud spending budgets across your multi-cloud environment. Stay on top of your cloud costs with proactive budget alerts and comprehensive budget tracking.

## Key Features

- **Multi-Cloud Budget Management**: Set budgets across AWS, Azure, and GCP
- **Budget Types**: Create fixed, flexible, or rolling budgets
- **Alert Thresholds**: Configure alerts at various threshold levels (50%, 75%, 90%, 100%)
- **Budget Forecasting**: View projected spending vs. budget
- **Historical Tracking**: Analyze budget performance over time
- **Scope Configuration**: Set budgets by account, project, service, or tag

## Creating a Budget

### Prerequisites

- Access to Cost Management section
- Appropriate permissions (Budget Administrator or higher)

### Steps to Create a Budget

1. Navigate to **Cost Management** > **Budgeting**
2. Click **Create Budget**
3. Configure budget settings:
   - **Budget Name**: Provide a descriptive name
   - **Budget Scope**: Select accounts, projects, or tags
   - **Budget Amount**: Set the budget amount
   - **Budget Period**: Choose monthly, quarterly, or annual
   - **Start Date**: Define when the budget begins

4. Set alert thresholds:
   - Configure notification recipients
   - Define threshold percentages
   - Choose notification channels (email, Slack, etc.)

5. Click **Save Budget**

## Budget Types

### Fixed Budgets
Fixed amount for a specific period that doesn't change.

**Use Case**: Annual IT budget allocation

### Flexible Budgets
Budget adjusts based on usage patterns or business metrics.

**Use Case**: Development environments that scale with team size

### Rolling Budgets
Continuously updating budget window (e.g., last 12 months).

**Use Case**: Long-term cost control with dynamic planning

## Budget Alerts

Configure alerts to notify stakeholders when spending approaches or exceeds budget thresholds:

- **Forecast Alerts**: Triggered when projected spending will exceed budget
- **Actual Alerts**: Triggered when actual spending crosses thresholds
- **Custom Alerts**: Create custom conditions and notification rules

## Budget Reports

Access comprehensive budget reports:

- **Budget Performance**: Actual vs. budgeted spending
- **Variance Analysis**: Identify areas over/under budget
- **Trend Analysis**: Historical budget utilization
- **Forecast Accuracy**: Compare forecasts to actual spending

## Best Practices

1. **Start with Broad Budgets**: Begin with account-level budgets, then drill down
2. **Set Realistic Thresholds**: Use historical data to inform budget amounts
3. **Regular Reviews**: Review and adjust budgets monthly or quarterly
4. **Stakeholder Alignment**: Ensure budget owners receive appropriate alerts
5. **Document Assumptions**: Keep track of budget calculation methodology

## API Integration

Budget data can be accessed via CloudPi API:

```bash
# Get all budgets
GET /api/v1/budgets

# Get specific budget
GET /api/v1/budgets/{budget_id}

# Create budget
POST /api/v1/budgets

# Update budget
PUT /api/v1/budgets/{budget_id}
```

## Troubleshooting

### Budget Alerts Not Triggering

**Issue**: Not receiving budget alerts despite exceeding thresholds

**Solutions**:
- Verify notification settings in budget configuration
- Check email/notification channel settings
- Ensure budget is active and not expired
- Verify user permissions for alert recipients

### Budget Data Not Updating

**Issue**: Budget shows outdated spending data

**Solutions**:
- Check cloud provider connection status
- Verify billing data sync is running
- Allow 24-48 hours for billing data to propagate
- Contact support if issue persists

## Related Documentation

- [Financials](Financials.md)
- [Forecast](Forecast.md)
- [Multi-Cloud Billing Hub](MultiCloudBillingHub.md)
- [Cost Types](CostTypes.md)
