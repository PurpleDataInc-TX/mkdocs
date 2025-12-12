# Cost Assignment

The Cost Assignment module enables accurate cloud expense allocation using rules and resource grouping.

## Overview

Cost Assignment ensures every cloud cost is traceable to a specific department, team, or function by:
- Creating allocation rules using provider metadata
- Grouping resources into projects
- Monitoring costs at organization and rule levels
- Providing granular cost visibility

## Understanding Cost Assignment

### Purpose

Cost Assignment answers:
- "Where is our cloud money going?"
- "Which team is responsible for these costs?"
- "How do we allocate shared services?"
- "What's the actual cost per project/product?"

### Key Components

1. **Rules** - Define how to attribute costs based on accounts, tags, regions
2. **Projects** - Logical groupings that consume budget
3. **Organizations** - Cloud provider account structures
4. **Tags** - Resource metadata for cost attribution

## The Rules Section

Create cloud cost allocation rules using provider-specific metadata.

### Accessing Rules

1. Navigate to **Cost Management** → **Cost Assignment**
2. Select **Rules** tab

### Rule Creation Interface

**Filter Selection:**

| Filter | Description | Example |
|--------|-------------|---------|
| **Billed Month** | Billing cycle for the rule | June 2025 |
| **Cloud Provider** | AWS, Azure, or GCP | AWS |
| **Organization Name** | Which organization | Production-AWS |
| **Organizational Unit** | Sub-organization if applicable | DEV, QA, FINANCE |
| **Rule Type** | How to allocate cost | Account, Tag, Service |
| **Subaccount** | Specific cloud account | 123456789012 |
| **Region** | Geographic location | us-east-1 |
| **Tags** | Resource metadata | env=production |

### Creating a Rule

**Step 1: Select Base Filters**
1. Choose **Billed Month** (required)
2. Select **Cloud Service Provider** (required)
3. Pick **Organization Name** (required)

**Step 2: Define Rule Type**
Select how costs should be allocated:
- **Account-based** (A-type rule)
- **Tag-based** (T-type rule)
- **Region-based** (AR-type rule)
- **Combined** (ART-type rule)

**Step 3: Add Specific Criteria**

**For Account Rules:**
- Select subaccount(s)
- Optionally add region filter

**For Tag Rules:**
- Enter Tag Key (e.g., "Project", "Environment", "Owner")
- Specify Tag Values (can add multiple)
- Click **Add Tag** to include in rule

**Step 4: Apply and Review**
1. Click **Apply** to view cost distribution
2. Review:
   - Total Cost
   - Assigned Cost  
   - Unassigned Cost
   - Cost breakdown by subaccounts

**Step 5: Create Rule**
- If valid (no overlaps), click **Create Rule**
- Rule appears in rules table

### Rule Types Explained

#### A-Type Rules (Account Only)
Allocates all costs from specific AWS account(s) or Azure subscription(s).

**Example:**
```
Account: 123456789012
Result: All costs from this account assigned
```

#### AR-Type Rules (Account + Region)
Allocates costs from specific account(s) in certain region(s).

**Example:**
```
Account: 123456789012
Region: us-east-1
Result: Only us-east-1 costs from this account assigned
```

#### AT-Type Rules (Account + Tags)
Allocates costs from account(s) where resources have specific tags.

**Example:**
```
Account: 123456789012
Tag: Environment=Production
Result: Production-tagged resources in this account
```

#### ART-Type Rules (Account + Region + Tags)
Most specific - combines all three filters.

**Example:**
```
Account: 123456789012
Region: us-east-1
Tag: Project=WebApp
Result: Only WebApp resources in us-east-1 of this account
```

#### T-Type Rules (Tags Only)
Allocates costs across ALL accounts based solely on tags.

**Example:**
```
Tag: CostCenter=Marketing
Result: All Marketing-tagged resources across all accounts
```

**Use Case:** Shared services, cross-account projects

## Cost Overview Panel

Shows financial distribution:

### Metrics Displayed

**Total Cost:**
- All cloud spending for selected filters
- Includes assigned and unassigned costs

**Assigned Cost:**
- Costs already attributed by existing rules
- Prevents double-counting

**Unassigned Cost:**
- Spending not covered by any rule
- Identifies cost leakage

### Visual Representation

**Pie Chart:**
- Green: Assigned costs
- Red: Unassigned costs
- Percentage breakdown

**Unassigned Cost Breakdown:**
- Lists subaccounts with unassigned costs
- Helps identify where rules are missing

## Rules Management Table

### Table Columns

| Column | Description |
|--------|-------------|
| **Rule ID** | Unique identifier |
| **Rule Type** | A, AR, AT, ART, or T |
| **Organization** | Cloud organization name |
| **Filters** | Accounts, regions, tags used |
| **Actions** | Edit, Delete, View buttons |

### Rule Actions

**View:**
- See complete rule definition
- View affected resources
- Check cost attribution

**Edit:**
- Modify rule filters
- Adjust date ranges
- Update tags

**Delete:**
- Remove rule permanently
- Costs become unassigned
- Requires confirmation

## Rule Conflicts

### Detecting Conflicts

CloudPi prevents overlapping rules that could cause:
- Double-counting costs
- Ambiguous attribution
- Incorrect billing

### Conflict Scenarios

**Example Conflict:**
```
Rule 1: Account=123456, Tag=env=prod
Rule 2: Account=123456, Tag=app=webserver

Problem: Resources with BOTH tags would match both rules
```

### Resolving Conflicts

1. **Make rules mutually exclusive**
   - Use different accounts
   - Use non-overlapping tag combinations
   - Add region specificity

2. **Delete conflicting rule**
   - Remove less specific rule
   - Recreate with proper filters

3. **Adjust tag strategy**
   - Use hierarchical tags
   - Implement tag standards

## Best Practices

### Rule Creation

1. **Start Broad, Refine Later**
   - Begin with account-level rules
   - Add tags as tagging improves
   - Incrementally increase specificity

2. **Document Rule Logic**
   - Use clear, descriptive rule names
   - Maintain external documentation
   - Train team on rule structure

3. **Regular Reviews**
   - Monthly rule effectiveness check
   - Quarterly unassigned cost analysis
   - Annual rule optimization

### Cost Attribution

1. **Minimize Unassigned Costs**
   - Target < 5% unassigned
   - Investigate large unassigned amounts
   - Create catchall rules if needed

2. **Prevent Overlaps**
   - Test rules before creation
   - Check for conflicts
   - Use validation warnings

3. **Tag Governance**
   - Enforce mandatory tags
   - Use consistent tag keys/values
   - Automate tagging where possible

## Troubleshooting

### Rule Not Matching Expected Costs

**Check:**
- Account ID is correct
- Region specified correctly  
- Tag key/value matches exactly (case-sensitive)
- Date range includes the period

### Costs Showing as Unassigned

**Reasons:**
- No rule covers these resources
- Resources lack required tags
- Account not included in any rule
- Rule filters too specific

**Solution:**
- Create additional rules
- Improve resource tagging
- Add account-level catchall rule

### Cannot Create Rule - Conflict Error

**Cause:** New rule overlaps with existing rule

**Solution:**
- Review existing rules
- Make new rule more specific
- Or make it mutually exclusive

---

**Next:** Learn how to organize rules into [Projects](projects.md)
