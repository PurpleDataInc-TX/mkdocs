# Dashboard Customization

## Overview

CloudPi dashboards are highly customizable, allowing you to create views tailored to your specific analysis needs. This guide covers all customization options available.

## Customization Capabilities

### Filter Configuration

**Date Range Customization:**
- Predefined ranges (Last 7/30/90 days, MTD, QTD, YTD)
- Custom date picker
- Fiscal year alignment
- Relative date ranges (e.g., "Last 3 months rolling")

**Granularity Options:**
- Daily (best for short periods)
- Weekly (good for monthly views)
- Monthly (standard for year-long analysis)
- Quarterly (executive summaries)
- Yearly (multi-year trends)

**Cloud Provider Filters:**
- All Providers (combined view)
- AWS only
- Azure only
- GCP only
- Multi-select combinations

**Project Filters:**
- All Projects
- Project Groups
- Individual Projects
- Multi-select projects
- Saved project sets

### Metric Selection

Choose which Key Performance Indicators (KPIs) to display:

**Cost Metrics:**
- Total Cost
- Month-over-Month Change
- Year-over-Year Change
- Average Daily Cost
- Cost per Project
- Cost per Service
- Cost per Region

**Budget Metrics:**
- Budget Allocated
- Budget Consumed
- Budget Remaining
- Budget Burn Rate
- Forecast vs Budget
- Variance Analysis

**Resource Metrics:**
- Resource Count
- Utilization Percentage
- Idle Resources
- Underutilized Resources
- Compliance Score

**Optimization Metrics:**
- Savings Identified
- Savings Realized
- Recommendation Count
- Implementation Rate

### Visualization Configuration

**Chart Types:**
- Line charts (trends over time)
- Bar charts (comparisons)
- Pie charts (distribution)
- Stacked area charts (composition)
- Heat maps (patterns)
- Scatter plots (correlations)

**Chart Customization:**
- Color schemes
- Axis labels
- Legend position
- Data point markers
- Tooltips
- Grid lines

**Table Customization:**
- Column selection
- Sort order
- Column width
- Row grouping
- Conditional formatting
- Export format

### Layout Management

**Component Arrangement:**
- Drag-and-drop reordering
- Resize panels
- Add/remove components
- Create tabs for multi-page dashboards
- Set component visibility by role

**Layout Templates:**
- Single column (mobile-friendly)
- Two column (balanced)
- Three column (detailed)
- Grid layout (many components)
- Custom layouts (save your own)

## Creating Custom Dashboards

### Step-by-Step Process

#### Step 1: Access Dashboard Creator

1. Navigate to **Dashboards** from main menu
2. Click **Create Dashboard** button
3. Choose starting template or blank canvas

#### Step 2: Add Components

1. Click **Add Component** button
2. Select component type:
   - Summary Card
   - Chart
   - Table
   - Filter Panel
   - Text Widget
3. Configure component settings
4. Position in layout

#### Step 3: Configure Filters

1. Open **Filter Configuration** panel
2. Select default filters:
   - Date range
   - Granularity
   - Projects
   - Cloud providers
3. Set filter dependencies
4. Configure filter behavior (always visible, collapsible, hidden)

#### Step 4: Customize Visualizations

For each chart component:
1. Select data source
2. Choose visualization type
3. Configure:
   - Metrics to display
   - Grouping dimensions
   - Color scheme
   - Labels and titles
4. Set refresh rate
5. Enable/disable export

#### Step 5: Set Permissions

1. Choose visibility:
   - Private (only you)
   - Team (project members)
   - Workspace (all users)
2. Set edit permissions:
   - Owner only
   - Shared editors
   - View only for others
3. Configure data filtering by role

#### Step 6: Save and Test

1. Name your dashboard
2. Add description (optional)
3. Set as default (optional)
4. Click **Save**
5. Test with different user roles
6. Verify all components load correctly

## Saving Custom Views

### Quick Save

For temporary or personal views:
1. Configure dashboard with desired settings
2. Click **Save View** icon
3. Enter name
4. View saved in "My Views" section

### Permanent Dashboard

For shared or permanent dashboards:
1. Complete full customization
2. Click **Save as Dashboard**
3. Fill in metadata:
   - Name
   - Description
   - Category
   - Tags
4. Set sharing options
5. Publish dashboard

## Managing Custom Dashboards

### Editing Dashboards

1. Open dashboard
2. Click **Edit** button (if you have permissions)
3. Make desired changes
4. Click **Save** or **Save As New** (to create copy)

### Sharing Dashboards

**Share with Users:**
1. Open dashboard
2. Click **Share** button
3. Select users or groups
4. Set permission level:
   - View only
   - Can edit
   - Can share
5. Send invitation

**Public Link:**
1. Enable public sharing
2. Generate shareable link
3. Set expiration (optional)
4. Configure data filters for link

### Cloning Dashboards

To create a copy:
1. Open source dashboard
2. Click **More Options** (three dots)
3. Select **Clone Dashboard**
4. New copy created with "(Copy)" suffix
5. Edit and save with new name

### Deleting Dashboards

1. Navigate to dashboard list
2. Find dashboard to delete
3. Click **Delete** icon
4. Confirm deletion (permanent!)

## Advanced Customization

### Dynamic Filters

**Cascading Filters:**
- Set filter dependencies (e.g., Project → Environment → Service)
- Second filter options change based on first filter selection
- Creates logical filtering hierarchy

**Context-Aware Filters:**
- Filters remember last selection
- Different defaults by user role
- Project-based filter presets

### Calculated Metrics

Create custom metrics using formulas:
```
Examples:
- Cost per Unit = Total Cost / Resource Count
- Efficiency Ratio = (Budget - Actual) / Budget
- Growth Rate = ((Current - Previous) / Previous) * 100
```

### Conditional Formatting

**Color Coding:**
- Green: Under budget, good performance
- Yellow: Warning thresholds
- Red: Over budget, issues

**Rules:**
- Greater than/less than
- Between ranges
- Percentage thresholds
- Trend directions

**Applications:**
- Table cells
- Summary cards
- Chart data points
- Text labels

### Scheduled Reports

**Automated Delivery:**
1. Open dashboard
2. Click **Schedule Report**
3. Configure:
   - Frequency (daily, weekly, monthly)
   - Recipients
   - Format (PDF, Excel, HTML)
   - Delivery method (email, Slack, webhook)
4. Set schedule parameters:
   - Day of week
   - Time of day
   - Timezone
5. Enable schedule

**Report History:**
- View past reports
- Re-send reports
- Pause/resume schedule
- Modify recipients

## Best Practices

### Design Principles

1. **Keep It Simple**
   - Don't overcrowd with too many components
   - Focus on key metrics
   - Use whitespace effectively

2. **Logical Organization**
   - Most important metrics at top
   - Related charts grouped together
   - Consistent visual hierarchy

3. **Performance Optimization**
   - Limit concurrent components
   - Use appropriate granularity
   - Cache frequently accessed data
   - Optimize query filters

4. **Accessibility**
   - Use colorblind-friendly palettes
   - Provide alternative text
   - Ensure sufficient contrast
   - Support keyboard navigation

### Maintenance

**Regular Review:**
- Quarterly review of dashboard relevance
- Remove unused dashboards
- Update metric definitions
- Refresh color schemes

**Version Control:**
- Clone before major changes
- Document changes in description
- Keep backup of critical dashboards
- Test before deploying to users

**Performance Monitoring:**
- Track dashboard load times
- Identify slow components
- Optimize complex queries
- Reduce data volume if needed

## Troubleshooting

### Dashboard Not Saving
- Check permissions
- Verify unique name
- Clear browser cache
- Try different browser

### Components Not Loading
- Check data source connectivity
- Verify filter compatibility
- Reduce complexity
- Contact support

### Slow Performance
- Reduce date range
- Limit concurrent charts
- Use higher granularity
- Optimize filters

### Sharing Issues
- Verify user exists in workspace
- Check recipient permissions
- Confirm email addresses
- Verify network connectivity

---

## Related Documentation

- [Dashboard Overview](overview.md) - General dashboard information  
- [Dashboard Types](dashboard-types.md) - Pre-built dashboard templates
- [Billing Analysis](../billing-analysis/multi-cloud-billing.md) - Cost analysis tools

---

*For advanced customization needs, contact CloudPi support.*
