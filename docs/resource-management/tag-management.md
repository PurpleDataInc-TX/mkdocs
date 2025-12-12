# Tag Management

## Overview

**Tag Management** allows you to add labels to your cloud resources/services data, making it easier to organize and manage them effectively.

## Why Tagging is Important

Tagging brings integrity and dimension to your cloud resources:

- **Organize:** Group similar resources together
- **Track Costs:** Monitor expenses by project/department
- **Control Access:** Set permissions based on resource tags
- **Optimize Usage:** Identify underutilized or unused resources

## Tag Management Key Features

- Create and manage tag rules
- Enforce mandatory tags
- Define conditional tags
- Set optional tags
- Automate tagging
- Track tag violations
- Raise tickets for non-compliance

## Steps to Use Tag Management

### 1. Select Projects

At top-right, choose one or more projects from dropdown. This determines resources for tag rules.

### 2. Add Tag Rules

Create different types of tags:

**Mandatory Tags:** Must be applied to every resource

**Conditional Tags:** Applied only when certain conditions met

**Optional Tags:** Not required but helpful for categorization

**Automation Tags:** Used for automating workflows

### 3. Apply Tag Rules

After adding desired tag rules, click **Apply** to view resources not complying with tagging policy.

### 4. View Tag Violations

**Tag Violations** panel displays all resources missing required tags across selected projects.

### 5. Take Action on Violations

Choose to **Raise a Ticket** or **Create a Task** to resolve missing/incorrect tags.

## Tag Types

### 1. Auto Tag

System suggests tags based on predefined rules or patterns. Project Name automatically displayed.

### 2. Conditional Tags

Applied based on specific conditions. Maintains logical relationships between tag values.

**Example:** If Environment=Production, then CostCenter must be present.

### 3. Optional Tags

Recommended but not enforced. Useful for resource traceability, cost management, and reporting accuracy.

### 4. Automation Tags

Identify resources controlled by automation tools for tracking, scheduling, and managing automated workflows.

## Best Practices

1. **Establish Tagging Strategy:**
   - Define required tags
   - Document tag purposes
   - Train teams on importance

2. **Regular Audits:**
   - Weekly tag compliance checks
   - Monthly comprehensive reviews
   - Quarterly strategy updates

3. **Automation:**
   - Auto-tag new resources
   - Alert on untagged resources
   - Integrate with CI/CD

---

*For tag management support, contact your CloudPi administrator.*
