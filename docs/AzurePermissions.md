# Azure Permissions

CloudPi connects to Azure through a **Microsoft Entra application + service
principal** assigned roles at the tenant (or a narrower) scope. This page lists the
roles CloudPi needs, grouped by the onboarding feature they power.

Grant only the roles for the features you enable during onboarding:

| Feature | Roles | Access type |
|---------|-------|-------------|
| **Billing-only** | Billing / Cost | Read-only |
| **Recommendations** | Inventory + Metrics | Read-only |
| **Automation** | Contributor roles (remediation) | Write |

- **Read-Only role** = Billing-only + Recommendations (collection only).
- **Write / Remediation role** = the read-only roles plus **Automation**, the roles
  CloudPi uses to act on approved remediations (start/stop/resize/delete and tagging).

!!! note "Prerequisites"
    - Terraform >= 1.0.
    - An identity with **Application Administrator** (to create app registrations) and **User Access Administrator** (to assign roles at the chosen scope).
    - Access to the **Tenant Root Management Group** (for tenant-wide scope).
    - Your **Billing Account ID** (Azure Portal: **Cost Management + Billing → Properties**).

!!! tip "Setup"
    ```bash
    cp terraform.tfvars.example terraform.tfvars
    # set auth_tenant_id / auth_client_id / auth_client_secret / auth_subscription_id
    # and billing_account_id
    terraform init
    terraform apply
    terraform output -raw azure_credentials_json > cloudpi-azure.json
    ```
    Feed `cloudpi-azure.json` to CloudPi onboarding.

Roles are assigned at the **Tenant Root Management Group** by default. Change
`scope` to a single subscription (`/subscriptions/<sub-id>`) or resource group to
narrow the blast radius.

---

## Read-Only role (Billing-only + Recommendations)

All roles below are read-only. Grant the groups for the features you enable.

### Billing / Cost — *Billing-only feature*

Required for cost data and invoices.

| Role | Used for |
|------|----------|
| **Storage Blob Data Reader** (on the export container) | Reading your **actual cost/usage** — Cost Management exports (FOCUS 1.0 / Actual Cost) downloaded from Blob Storage |
| **Billing Account Reader** (Invoice API) | Invoice and monthly summary |

!!! info
    The module also assigns Storage Blob Data Reader at each subscription for
    faster propagation. Minimum for cost = **Storage Blob Data Reader on the export
    container** (plus Billing Account Reader for invoices).

### Inventory — *Recommendations feature*

Required to list resources for rightsizing.

| Role | Used for |
|------|----------|
| **Reader** | Read metadata (`*/read`) for **every** supported resource type across the scope |

Azure's built-in **Reader** is all-or-nothing across resource types — one role
covers all inventory. To limit to one service, use a custom role (see below).

### Metrics — *Recommendations feature*

Required for utilization-based recommendations.

| Role | Used for |
|------|----------|
| **Monitoring Reader** (`Microsoft.Insights/metrics/read`) | CPU / memory / network / disk and service metrics from Azure Monitor |

Metrics are collected for: VM, VMSS, Storage Account, SQL Database, Cosmos DB,
App Service Plan, Redis, Public IP, Load Balancer, NAT Gateway.

### Tenant / Org discovery *(optional)*

| Role | Used for |
|------|----------|
| **Management Group Reader** | List management groups for multi-subscription onboarding |

---

## Write / Remediation role (Automation)

The Write role is the Read-Only role above **plus** the built-in Contributor roles
below, which power the **Automation** feature. CloudPi uses these **only after a
recommendation is approved** through your workflow rules. Grant only the roles for
services whose remediations you enable.

| Role | Used for |
|------|----------|
| **Virtual Machine Contributor** | Start, stop/deallocate, resize, and delete VMs; delete and snapshot disks; VM auto-shutdown (`Microsoft.Compute/virtualMachines/*`, `.../disks/*`) |
| **SQL DB Contributor** | Resize/downgrade vCore and DTU tiers, auto-pause, retention, firewall rules, delete database (`Microsoft.Sql/servers/databases/*`) |
| **Network Contributor** | Delete idle Public IPs, Load Balancers, NAT Gateways, and Private Endpoints; disable/adjust Flow Logs (`Microsoft.Network/*`) |
| **Tag Contributor** | Attach, modify, and remove resource tags for governance (`Microsoft.Resources/tags/*`) |
| **DocumentDB Account Contributor** | Adjust Cosmos DB throughput; delete accounts (`Microsoft.DocumentDB/databaseAccounts/*`) |
| **Redis Cache Contributor** | Change Redis Cache SKU / scale (`Microsoft.Cache/redis/*`) |
| **Storage Account Contributor** | Change Storage Account redundancy / SKU (`Microsoft.Storage/storageAccounts/*`) |
| **Website Contributor** | Update or delete App Service Plans (`Microsoft.Web/serverfarms/*`) |
| **Key Vault Contributor** | Configure Key Vault diagnostic settings (`Microsoft.KeyVault/vaults/*`) |
| **Automation Contributor** | Run Automation runbook remediations (`Microsoft.Automation/automationAccounts/*`) |

!!! note "Billing Account Reader"
    Billing Account Reader is assigned through the Azure Billing Role Assignments
    API (via the `azapi` provider) because billing account scope is not part of
    standard ARM RBAC.

---

## Narrow the scope

To limit remediation to part of the tenant, set `scope` on the write role
assignments in `main.tf` to a single subscription (`/subscriptions/<sub-id>`) or a
resource group ID instead of the Tenant Root Management Group. Read roles can be
narrowed the same way.

### Custom role for a single service

Because **Reader** can't be filtered by resource type, use a custom role to limit
read access to one service — for example, **VMs only**:

```hcl
resource "azurerm_role_definition" "cloudpi_vm_only" {
  name  = "CloudPi-VM-ReadOnly"
  scope = "/subscriptions/<sub-id>"
  permissions {
    actions = [
      "Microsoft.Compute/virtualMachines/read",
      "Microsoft.Compute/virtualMachines/*/read",
      "Microsoft.Insights/metrics/read"          # VM metrics
    ]
    not_actions = []
  }
  assignable_scopes = ["/subscriptions/<sub-id>"]
}
```

Assign that instead of Reader / Monitoring Reader. Swap the provider actions for
another service (for example `Microsoft.Sql/servers/databases/read` for SQL).

---

## Tiers by feature

Grant grows with the features you enable. Each tier includes the ones above it.

| Features enabled | Grant | Access |
|------------------|-------|--------|
| **Billing-only** | Storage Blob Data Reader (export container) + Billing Account Reader | Read-only |
| **Billing-only + Recommendations** | + Reader + Monitoring Reader | Read-only |
| **Billing-only + Recommendations + Automation** | + the Contributor roles you enable | Write |

**Management Group Reader** is separate — add it (at the Tenant Root MG) for
whole-tenant, multi-subscription onboarding.

---

## Services CloudPi acts on

**Compute:** VM, VMSS, Disk, Snapshot
**Storage:** Storage Account, File-Share Snapshot
**Database:** SQL Database, Cosmos DB (DB + Container), Redis
**Web:** App Service, App Service Plan
**Security:** Key Vault
**Automation:** Automation runbooks
**Network:** VNet, Public IP, Load Balancer, NAT Gateway, Private Endpoint, Flow Logs, Network Watcher
**Governance:** Resource tags (all resource types)

---

## Output & notes

`application_id` (client ID), `client_secret`, `tenant_id`, and
`azure_credentials_json` — feed the JSON to CloudPi onboarding.

- The Tenant Root management group is looked up by display name **"Tenant Root
  Group"**; if yours was renamed, update `main.tf`.
- The client secret rotates per `credential_expiry_days` (default 365).
- The built-in Contributor roles are Azure's scoped remediation roles; they are
  intentionally not narrowed further so CloudPi can perform every supported action
  on the listed services.
- If you withhold a role, CloudPi reports the exact missing permission for each
  collection type or action it can't run.

Next: [Connect Azure](ConnectAzure.md) · [Cloud Onboarding](CloudOnboarding.md)
