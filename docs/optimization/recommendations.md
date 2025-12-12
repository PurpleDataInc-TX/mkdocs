# CloudPi Recommendations

## Overview

The **CloudPi Recommendations Page** is designed to streamline the process of identifying and acting on cloud cost optimization recommendations. This comprehensive feature helps organizations reduce cloud spending through intelligent, data-driven insights.

[Content extracted from User Guide lines ~2850-3010 - Recommendations section]

## Key Features

### 1. Data Filtering

Once recommendations data is fetched, users can apply several filters to refine the view:

- **Group By:** Organize recommendations (e.g., All or by Policy)
- **Category:** Filter by type (Optimization, Performance, Security)
- **Time Period:** Define analysis timeframe (e.g., Past 3 Months - Till Date)
- **Region:** Filter by cloud region
- **Status:** Filter by current status (Pending, Approved, Completed, Ignored, Snoozed)
- **Search Bar:** Search by region, policy name, recommendation type, or resource ID

All filters apply in real-time with dynamic updates.

### 2. Grouping and Viewing Recommendations

**Table View:**
- Clear, scrollable table format for quick review
- Columns: Policy details, Category, Service, Impacted Resource, Estimated Cost Savings

**Expandable Grouping:**
- When grouped by policy, expand/collapse for easier management
- Related insights grouped together

**Detailed View:**
Each recommendation provides:
- Policy name and description
- Resource ID
- Cloud service involved (EC2, RDS, Lambda, DynamoDB, etc.)
- Estimated cost savings
- Status
- Tags and metadata

### 3. Take Actions on Recommendations

**Selecting Recommendations:**
- Use checkboxes to select one or more recommendations

**Bulk Actions:**
From table header after selection:
- **Ignore:** Mark recommendations as ignored
- **Snooze:** Temporarily postpone action

**Action Dialog:**
- Confirmation dialog appears
- Icon represents the action type
- Add notes/reason for action

**Ticket Raising:**
- Click **Raise a Request** button
- Opens ticket submission dialog
- Provide additional details
- Set priority (High, Medium, Low)
- Integrates with Jira/ServiceNow/ADO

### 4. Summary and Metrics

Top section displays high-level KPIs:

**Key Metrics:**
- **Total Recommendations:** Overall count across all providers
- **Potential Savings:** Total possible cost savings if all implemented
- **Realized Savings:** Savings already achieved from completed actions
- **Not Remediated:** Recommendations still pending action
- **In Progress:** Recommendations currently being remediated

**Visual Charts:**
- **Cost Savings by Cloud Provider:** Donut chart comparing AWS, Azure, GCP
- **Recommendations by Category:** Total cost savings by optimization category
- **Regional Distribution:** Spread of recommendations across regions
- **Top Policies by Impact:** Policies generating most potential savings

These visuals help users quickly identify key focus areas for optimization.

## Recommendation Categories

### Optimization
- Right-sizing recommendations
- Unused resource identification
- Reserved Instance/Savings Plan opportunities
- Storage class optimization

### Performance
- Resource configuration improvements
- Scaling recommendations
- Regional placement optimization

### Security
- Security group misconfigurations
- Public access warnings
- Encryption recommendations
- Compliance violations

## Using Recommendations Effectively

### Daily Workflow

1. **Review Dashboard:**
   - Check summary metrics
   - Identify high-value opportunities
   - Note critical issues

2. **Filter and Prioritize:**
   - Filter by category and savings potential
   - Sort by estimated savings
   - Focus on quick wins first

3. **Take Action:**
   - Select recommendations to implement
   - Create tickets for team assignment
   - Snooze low-priority items
   - Ignore false positives

4. **Track Progress:**
   - Monitor implementation status
   - Verify realized savings
   - Update recommendation status

### Best Practices

**Prioritization:**
- Focus on high-savings recommendations first
- Consider implementation effort vs. benefit
- Address security recommendations urgently
- Group similar recommendations for batch processing

**Team Collaboration:**
- Assign recommendations to appropriate teams
- Use ticketing integration for tracking
- Document decisions (accept/reject/snooze)
- Share success metrics with stakeholders

**Continuous Improvement:**
- Review ignored recommendations periodically
- Update snooze periods as priorities change
- Measure savings realization
- Refine recommendation filters based on patterns

## Integration with Other Features

### Ticketing Integration
- Create tickets directly from recommendations
- Auto-populate ticket details
- Track ticket status
- Link back to original recommendation

### Budget Impact
- Savings count toward budget variance
- Include in forecast adjustments
- Track optimization contributions

### Reporting
- Export recommendations for presentations
- Include in monthly cost reviews
- Share with executive leadership
- Track savings over time

---

## Related Documentation

- [Cost Optimization](cost-optimization.md) - Optimization strategies
- [Ticketing](../collaboration/ticketing.md) - Ticket management
- [Budget Management](../budgets-forecasting/budget-management.md) - Budget tracking

---

*For recommendations support, contact your CloudPi administrator.*
