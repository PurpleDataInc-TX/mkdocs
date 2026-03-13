# Tag Governance

## Overview

Tag Governance in CloudPi ensures consistent, compliant tagging across your multi-cloud environment. Enforce tagging policies, track compliance, and automatically remediate non-compliant resources.

## Key Features

- **Tagging Policies**: Define mandatory and optional tags
- **Compliance Monitoring**: Track tag compliance across all resources
- **Automated Remediation**: Auto-tag resources based on rules
- **Tag Validation**: Ensure tag values follow specified patterns
- **Compliance Reports**: Detailed tagging compliance analytics
- **Multi-Cloud Support**: Unified governance across AWS, Azure, and GCP

## Tag Governance Dashboard

Access the Tag Governance dashboard:

**Navigation**: Cost Management > Tag Governance

### Dashboard Components

- **Compliance Score**: Overall tag compliance percentage
- **Non-Compliant Resources**: Count and list of resources missing required tags
- **Tag Coverage**: Percentage of resources with each required tag
- **Compliance Trends**: Historical compliance tracking
- **Top Violations**: Most common tagging policy violations

## Creating Tag Policies

### Define Tagging Standards

1. Navigate to **Tag Governance** > **Policies**
2. Click **Create Policy**
3. Configure policy:
   - **Policy Name**: Descriptive policy name
   - **Scope**: Cloud providers and accounts
   - **Required Tags**: Tags that must be present
   - **Optional Tags**: Recommended but not enforced
   - **Tag Validation Rules**: Value format requirements

### Required Tag Configuration

Example required tags:

| Tag Key | Required | Validation Rule | Example Value |
|---------|----------|----------------|---------------|
| Environment | Yes | enum(dev, staging, prod) | prod |
| Owner | Yes | email format | user@company.com |
| CostCenter | Yes | numeric, 4-6 digits | 10234 |
| Project | Yes | alphanumeric | project-alpha |
| DataClassification | Yes | enum(public, internal, confidential) | confidential |

### Tag Value Patterns

Define validation rules:

```yaml
tags:
  - key: Environment
    required: true
    values:
      - dev
      - staging
      - production

  - key: Owner
    required: true
    pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'

  - key: CostCenter
    required: true
    pattern: '^\d{4,6}$'

  - key: Project
    required: true
    pattern: '^[a-z0-9-]+$'
    max_length: 32
```

## Compliance Enforcement

### Enforcement Levels

1. **Advisory**: Alert on non-compliance, no action
2. **Soft Enforcement**: Alert and create tasks for remediation
3. **Hard Enforcement**: Block resource creation without required tags
4. **Automated Remediation**: Auto-apply tags based on rules

### Setting Enforcement Rules

1. Go to **Tag Governance** > **Enforcement**
2. Select policy
3. Choose enforcement level
4. Configure actions:
   - **Alert**: Notify team of violations
   - **Task Creation**: Auto-create remediation tasks
   - **Auto-Tag**: Apply tags based on rules
   - **Block**: Prevent non-compliant resource creation

## Automated Tag Application

### Tag Inference Rules

CloudPi can automatically apply tags based on:

- **Account/Project Context**: Inherit tags from parent
- **Resource Naming**: Extract information from names
- **Network Location**: Tag based on VPC, subnet, region
- **Resource Relationships**: Propagate tags from related resources
- **User Context**: Apply tags based on creator identity

### Example Auto-Tagging Rules

```yaml
auto_tagging_rules:
  - name: "Inherit Environment from Account"
    condition: "account.tags.Environment exists"
    action:
      tag_key: Environment
      tag_value: "{{ account.tags.Environment }}"

  - name: "Extract Project from Resource Name"
    condition: "resource.name matches '^([a-z]+)-.*'"
    action:
      tag_key: Project
      tag_value: "{{ regex_match[1] }}"

  - name: "Tag by VPC"
    condition: "resource.vpc_id == 'vpc-12345'"
    action:
      tag_key: Environment
      tag_value: "production"
```

## Compliance Monitoring

### Viewing Compliance Status

1. Navigate to **Tag Governance** > **Compliance**
2. Select scope (All clouds, specific account, resource type)
3. View compliance metrics:
   - Overall compliance percentage
   - Compliance by tag
   - Non-compliant resources list
   - Compliance trends

### Compliance Reports

Generate reports:

- **Summary Report**: High-level compliance overview
- **Detailed Report**: Resource-level compliance
- **Trend Report**: Compliance changes over time
- **Violation Report**: Specific policy violations
- **Remediation Report**: Auto-tagging activity

### Export Options

- PDF report
- CSV export
- API access
- Scheduled delivery

## Remediation Workflows

### Manual Remediation

1. Navigate to **Tag Governance** > **Non-Compliant Resources**
2. Select resources to remediate
3. Choose action:
   - **Tag Now**: Manually apply tags
   - **Bulk Tag**: Apply same tags to multiple resources
   - **Create Task**: Assign remediation to team member
   - **Schedule**: Set tags to be applied at specific time

### Automated Remediation

Configure auto-remediation:

1. Go to **Tag Governance** > **Automation**
2. Enable auto-remediation
3. Configure:
   - **Trigger**: Immediate, scheduled, or on detection
   - **Rules**: Which auto-tagging rules to apply
   - **Approval**: Require approval before applying
   - **Notifications**: Alert on remediation actions

## Tag Lifecycle Management

### Tag Deprecation

Remove or replace outdated tags:

1. Mark tags as deprecated
2. Set deprecation date
3. Map to new tag keys
4. Automated migration path

### Tag Standards Evolution

Update standards without disrupting operations:

- **Versioned Policies**: Maintain policy versions
- **Grace Periods**: Allow time for adoption
- **Migration Tools**: Bulk tag updates
- **Audit Trail**: Track all tag changes

## Integration with Cost Management

Tag governance integrates with cost features:

- **Cost Allocation**: Ensure proper cost attribution
- **Budgets**: Require tags for budget tracking
- **Showback/Chargeback**: Enable accurate reporting
- **Cost Optimization**: Tag-based optimization recommendations

## Role-Based Access Control

Control who can manage tags:

| Role | Permissions |
|------|-------------|
| Tag Administrator | Full tag governance control |
| Tag Editor | Create and enforce policies |
| Tag Viewer | View compliance reports |
| Resource Owner | Tag own resources |

## API Integration

Manage tag governance programmatically:

```bash
# Get compliance status
GET /api/v1/tag-governance/compliance

# Get non-compliant resources
GET /api/v1/tag-governance/violations

# Apply tags to resources
POST /api/v1/tag-governance/remediate
{
  "resource_ids": ["i-1234", "i-5678"],
  "tags": {
    "Environment": "production",
    "Owner": "admin@company.com"
  }
}

# Get tag policies
GET /api/v1/tag-governance/policies
```

## Best Practices

1. **Start Simple**: Begin with 3-5 required tags, expand gradually
2. **Involve Stakeholders**: Get buy-in from teams before enforcing
3. **Document Standards**: Maintain clear tagging guidelines
4. **Automate When Possible**: Reduce manual tagging burden
5. **Regular Reviews**: Update policies as business needs evolve
6. **Grace Periods**: Allow time for existing resources to be tagged
7. **Education**: Train teams on tagging importance and standards

## Common Tag Schemas

### Financial Tags
- CostCenter
- Project
- Owner
- Budget

### Operational Tags
- Environment
- Application
- Tier
- ManagedBy

### Security Tags
- DataClassification
- Compliance
- Backup
- Encryption

### Technical Tags
- Version
- Patchgroup
- Maintenance Window
- Architecture

## Troubleshooting

### Tags Not Applying

**Issue**: Auto-tagging rules not working

**Solutions**:
- Verify rule conditions are being met
- Check IAM permissions for tagging
- Ensure CloudPi has write access to resources
- Review rule priority and conflicts
- Check for provider-specific tag limits

### Compliance Score Not Updating

**Issue**: Compliance dashboard shows stale data

**Solutions**:
- Trigger manual compliance scan
- Verify cloud provider connections
- Check resource discovery is running
- Allow time for propagation (up to 1 hour)
- Review filter settings

## Related Documentation

- [Tag Management](TagManagement.md)
- [Cost Assignment](CostAssignment.md)
- [Automation Policies](AutomationPolicies.md)
- [RBAC](rbac.md)
