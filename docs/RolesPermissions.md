# Roles & Permissions

Before you onboard a cloud account, you grant CloudPi a role (AWS IAM role, Azure
service principal, or GCP service account) with a defined set of permissions. This
section documents exactly what each permission is for, so you can grant only what
you need.

---

## Permissions follow the features you enable

During [Cloud Onboarding](CloudOnboarding.md) you select one or more **features** —
**Billing-only**, **Recommendations**, and **Automation**. Each feature needs a
specific set of permissions. Grant only the permissions for the features you turn on.

| Feature | What it does | Permissions it needs | Access type |
|---------|--------------|----------------------|-------------|
| **Billing-only** | Cost dashboards, forecast, allocation | Billing / Cost read | Read-only |
| **Recommendations** | Rightsizing and idle-resource optimization | Inventory + Metrics read | Read-only |
| **Automation** | Executes approved start/stop/resize/delete/tag actions | Remediation (write) | Write |

**Billing-only** and **Recommendations** are read-only. **Automation** is the only
feature that requires write permissions.

!!! info "Read-Only vs. Write role"
    The two Terraform role tiers map directly to these features:

    - **Read-Only role** = Billing-only + Recommendations (collection only)
    - **Write / Remediation role** = the read-only permissions **plus** Automation

    You never grant both — the Write role already includes everything the
    Read-Only role has.

!!! warning "Automation runs only on approval"
    Granting Automation permissions does not trigger anything on its own. CloudPi
    calls a remediation action **only** after the matching recommendation is
    approved through your [Policies & Workflows](AutomationPolicies.md) rules.

---

## What each permission group is for

Every role is grouped by **purpose**, and each group powers a specific feature:

- **Billing / Cost** *(Billing-only feature)* — read your actual cost/usage export and forecast.
- **Inventory** *(Recommendations feature)* — list resources for rightsizing and idle detection.
- **Metrics** *(Recommendations feature)* — read CPU/network/disk utilization for usage-based recommendations.
- **Remediation** *(Automation feature — write)* — execute approved start/stop/resize/delete/tag actions.
- **Org / Account discovery** *(optional)* — auto-discover member accounts for multi-account onboarding.

---

## Provider guides

Each page lists the permissions by purpose, a minimum-vs-full tier table, and how
to narrow the grant to a single service.

| Provider | Identity CloudPi uses | Guide |
|----------|-----------------------|-------|
| **AWS** | IAM role (with External ID) or IAM user | [AWS Permissions](AWSPermissions.md) |
| **Azure** | Microsoft Entra app + service principal | [Azure Permissions](AzurePermissions.md) |
| **GCP** | Service account (JSON key) | [GCP Permissions](GCPPermissions.md) |

---

## Principle: grant only what you need

CloudPi **degrades gracefully**. If you withhold a permission, CloudPi reports the
exact missing permission for the collection type or action it can't run — nothing
else breaks. Start narrow and expand as you enable more features.

For the onboarding flow that consumes these credentials, see
[Cloud Onboarding](CloudOnboarding.md) and [Provider Connections](ProviderConnections.md).
