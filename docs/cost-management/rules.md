# Cost Assignment Rules

## Rule Types Deep Dive

### Understanding Rule Hierarchy

Rules in CloudPi follow a specificity hierarchy:

```
Most Specific → Least Specific
ART > AT > AR > A > T
```

**Recommendation:** Use most specific rules possible for accurate attribution.

### When to Use Each Rule Type

#### Account Rules (A-Type)

**Best For:**
- Single-tenant applications
- Dedicated accounts per team
- Simple cost allocation
- Organizations with good account separation

**Example Scenarios:**
- Marketing team has dedicated AWS account
- Each product has its own Azure subscription
- Development/Production account separation

#### Account + Region Rules (AR-Type)

**Best For:**
- Multi-region deployments
- Geographic cost allocation
- Compliance-driven separations
- DR/backup cost tracking

**Example Scenarios:**
- Production in us-east-1, DR in us-west-2
- European vs. US customer workloads
- Region-specific cost centers

#### Account + Tag Rules (AT-Type)

**Best For:**
- Multi-tenant accounts
- Project-based allocation within accounts
- Environment separation (dev/staging/prod)
- Application-level tracking

**Example Scenarios:**
- Multiple applications in same account, tagged by app name
- Cost allocation per customer (SaaS platforms)
- Department-level tracking within shared accounts

#### Account + Region + Tag Rules (ART-Type)

**Best For:**
- Maximum precision needed
- Complex organizational structures
- Chargeback to specific teams/projects
- Detailed financial reporting

**Example Scenarios:**
- Project X, in US region, production environment
- Customer Y workload in EU, for compliance tracking
- Team-specific workloads in designated regions

#### Tag-Only Rules (T-Type)

**Best For:**
- Cross-account projects
- Shared services (networking, security)
- Matrix organizations
- Enterprise-wide initiatives

**Example Scenarios:**
- Security tools deployed across all accounts
- Shared VPCs spanning multiple accounts
- Central logging infrastructure
- Cross-functional project teams

## Rule Best Practices

### 1. Tag Standards

Establish consistent tagging:

**Required Tags:**
- `CostCenter` - Financial allocation
- `Environment` - dev/staging/prod
- `Project` - Project/product name
- `Owner` - Responsible team/person

**Example:**
```
CostCenter: "CC-1234"
Environment: "production"
Project: "mobile-app"
Owner: "platform-team"
```

### 2. Account Structure

Align CloudPi rules with AWS/Azure structure:

**AWS:**
- Organization → Organizational Units → Accounts
- CloudPi: Create rules matching OU structure

**Azure:**
- Management Groups → Subscriptions → Resource Groups  
- CloudPi: Rules at subscription level

### 3. Rule Naming Conventions

Use descriptive rule identifiers:
- Include rule type in name
- Reference organization/account
- Indicate purpose

**Examples:**
- `A_AWS-Prod_Marketing`
- `AT_Azure-Dev_Project-Alpha`
- `T_SharedServices_Security`

### 4. Rule Documentation

Document each rule:
- Purpose and scope
- Affected resources  
- Owner/responsible team
- Creation/modification dates

### 5. Rule Lifecycle Management

**Creation:**
- Validate against existing rules
- Test with sample data
- Document intent

**Modification:**
- Change management process
- Impact analysis
- Stakeholder approval

**Retirement:**
- Archive for historical reporting
- Document reason for removal
- Plan replacement if needed

## Advanced Rule Scenarios

### Scenario 1: Multi-Cloud Project

**Challenge:** Project spans AWS and Azure

**Solution:**
```
Rule 1 (AWS): AT rule with Project=Alpha tag
Rule 2 (Azure): AT rule with Project=Alpha tag
Project: Combine both rules in "Project Alpha"
```

### Scenario 2: Shared Services

**Challenge:** Networking costs should be split across teams

**Solution:**
```
Rule: T-type with Service=Networking tag
Cost split: Use shared cost feature in billing
```

### Scenario 3: Customer Chargeback

**Challenge:** SaaS platform, charge each customer

**Solution:**
```
Rule per customer: AT rules with CustomerID tag
Separate projects per customer
Invoice generation per project
```

### Scenario 4: Partial Account Allocation

**Challenge:** Account has multiple teams, some untagged resources

**Solution:**
```
Specific Rules: AT rules for tagged resources
Catchall Rule: A rule for same account (lower priority)
```

## Rule Validation

### Pre-Creation Checks

Before creating a rule, verify:

1. **No Conflicts**
   - Check overlap with existing rules
   - Ensure mutual exclusivity

2. **Tag Existence**
   - Verify tags exist on resources
   - Check tag value consistency

3. **Account Access**
   - Confirm account is onboarded
   - Verify data availability

4. **Date Range**
   - Appropriate billing period
   - Historical data available if needed

### Post-Creation Verification

After rule creation:

1. **Cost Attribution Check**
   - Run cost assignment report
   - Verify expected costs are captured
   - Check for unassigned costs

2. **Overlap Detection**
   - Ensure no double-counting
   - Review cost assignment totals

3. **Rule Coverage**
   - Calculate percentage of costs assigned
   - Identify gaps in coverage

## Rule Performance Optimization

### Efficient Rule Design

1. **Minimize Rule Count**
   - Consolidate where possible
   - Use broader rules with good tagging

2. **Strategic Specificity**
   - Don't over-specify if not needed
   - Balance precision with complexity

3. **Tag Efficiency**
   - Use fewer, well-defined tags
   - Standardize tag values

### Monitoring Rule Effectiveness

Track metrics:
- **Coverage Rate:** % of costs assigned
- **Overlap Rate:** % of costs in multiple rules
- **Unassigned Rate:** % without any rule
- **Rule Utilization:** Which rules match most costs

## Troubleshooting Guide

### Issue: Rule Matches No Costs

**Possible Causes:**
- Account ID typo
- Tag key/value mismatch (case-sensitive)
- Date range doesn't include data
- Resources not yet synced

**Diagnostic Steps:**
1. Verify account in CloudPi
2. Check tag spelling exactly
3. Confirm data availability for period
4. Review resource inventory

### Issue: Costs Assigned Multiple Times

**Possible Causes:**
- Overlapping rules
- Conflicting tag combinations
- Inheritance issues

**Resolution:**
1. Identify overlapping rules
2. Make rules mutually exclusive
3. Add specificity (region, additional tags)
4. Delete less specific rule

### Issue: Unexpected Costs in Project

**Possible Causes:**
- Rule too broad
- Tag applied to wrong resources
- Shared resource costs included

**Investigation:**
1. Review rule definition
2. Check tagged resources
3. Analyze cost breakdown by service
4. Verify tag application

---

## Quick Reference

### Rule Type Selection Chart

| Scenario | Recommended Rule Type |
|----------|----------------------|
| Dedicated account per team | A |
| Multi-region deployment | AR |
| Tagged resources in account | AT |
| Very specific allocation | ART |
| Cross-account project | T |
| Shared services | T |
| Simple allocation | A |
| Complex chargeback | ART |

### Rule Conflict Matrix

| Rule 1 | Rule 2 | Conflict? |
|--------|--------|-----------|
| A: Acct1 | A: Acct2 | ❌ No |
| A: Acct1 | AT: Acct1+Tag | ✅ Yes |
| AT: Acct1+Tag1 | AT: Acct1+Tag2 | Maybe* |
| T: Tag1 | T: Tag2 | Maybe* |
| AR: Acct1+Region1 | AR: Acct1+Region2 | ❌ No |

*Depends on whether resources can have both tags

---

**Next:** Organize rules into [Projects](projects.md) for tracking and budgeting.
