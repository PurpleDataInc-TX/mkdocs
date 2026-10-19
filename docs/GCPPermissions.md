# GCP Permissions

CloudPi connects to Google Cloud through a **service account** (JSON key) granted
org-level roles. This page lists the roles CloudPi needs, grouped by the onboarding
feature they power.

Grant only the roles for the features you enable during onboarding:

| Feature | Roles | Access type |
|---------|-------|-------------|
| **Billing-only** | Billing / Cost (BigQuery) | Read-only |
| **Recommendations** | Inventory + Metrics | Read-only |
| **Automation** | `write_roles` (remediation) | Write |

- **Read-Only role** = Billing-only + Recommendations (collection only).
- **Write / Remediation role** = the read-only roles plus **Automation**, the roles
  CloudPi uses to stop, delete, resize, and label Compute Engine, networking, and
  Cloud SQL resources.

Roles live in `variables.tf` (`read_roles`, `write_roles`).

!!! note "Prerequisites"
    - Terraform >= 1.0 and org-level IAM permission to grant roles.
    - If you are not using Cloud Shell / ADC, an admin service account JSON.

!!! tip "Setup"
    ```bash
    cp terraform.tfvars.example terraform.tfvars
    # set organization_id and service_account_project_id
    terraform init
    terraform apply
    terraform output -raw service_account_private_key > cloudpi-gcp.json
    ```
    Provide the JSON key to CloudPi onboarding.

Roles are granted at the **organization** by default. To grant at a single
**project** instead, change `google_organization_iam_member` to
`google_project_iam_member` in `main.tf`.

---

## Read-Only role (Billing-only + Recommendations)

All roles below are read-only. Grant the groups for the features you enable.

### Billing / Cost — *Billing-only feature*

Required for cost data.

| Role | Used for |
|------|----------|
| `roles/bigquery.dataViewer` | Read the billing export table data (`bigquery.tables.getData`) |
| `roles/bigquery.jobUser` | **Run** the BigQuery query (`bigquery.jobs.create`) |

!!! info "Both BigQuery roles are required"
    `dataViewer` lets CloudPi read the billing export table; `jobUser` lets it run
    the query against that table. Read access alone can't run a query.

### Inventory — *Recommendations feature*

Required to list resources for rightsizing.

| Role | Covers these services |
|------|-----------------------|
| `roles/compute.viewer` | Compute Engine, Disk, Snapshot, Image, Machine Image, External IP, VPC, Firewall, NAT Gateway, Load Balancer |

### Metrics — *Recommendations feature*

Required for utilization-based recommendations.

| Role | Used for |
|------|----------|
| `roles/monitoring.viewer` (`monitoring.timeSeries.list`) | CPU / network / disk and service metrics from Cloud Monitoring |

Metrics are collected for: Compute Engine instances.

### Org discovery *(optional)*

| Role | Used for |
|------|----------|
| `roles/resourcemanager.organizationViewer` | Org node read for onboarding |

For full org → folder → project traversal you also need folder/project list
(`roles/browser` at the org). Skip for single-project onboarding.

---

## Write / Remediation role (Automation)

The Write role is the Read-Only role above **plus** the roles below, which power the
**Automation** feature. CloudPi uses these **only after a recommendation is
approved** through your workflow rules.

| Role | CloudPi uses it to |
|------|--------------------|
| `roles/compute.instanceAdmin.v1` | Stop, delete, resize, and label Compute Engine instances; delete disks and snapshots; create disk snapshots and machine images; delete/label images; label disks and snapshots; apply quarantine network tags |
| `roles/compute.networkAdmin` | Delete firewall rules; release and label external IP addresses |
| `roles/cloudsql.admin` | Stop, delete, and label Cloud SQL instances |
| `roles/storage.admin` | Update Cloud Storage bucket lifecycle rules and labels |
| `roles/cloudfunctions.admin` | Delete and label Cloud Functions |

To run collection only, remove `write_roles` from the concatenation in `main.tf`
or set `write_roles = []` in `terraform.tfvars`.

---

## Tiers by feature

Grant grows with the features you enable. Each tier includes the ones above it.

| Features enabled | Grant | Access |
|------------------|-------|--------|
| **Billing-only** | `bigquery.dataViewer` + `bigquery.jobUser` | Read-only |
| **Billing-only + Recommendations** | + `compute.viewer` + `monitoring.viewer` | Read-only |
| **Billing-only + Recommendations + Automation** | + `write_roles` | Write |

**Org discovery** (`resourcemanager.organizationViewer`) is separate — add it for
multi-project, org-wide onboarding.

---

## Grant permission for only one service

Edit `read_roles` in `variables.tf` and keep only the role(s) for that service.

| Service | Role(s) to keep |
|---------|-----------------|
| **Compute Engine** (+ disk/snapshot/image/network) | `roles/compute.viewer` (+ `roles/monitoring.viewer` for metrics) |
| **Billing only** | `roles/bigquery.dataViewer` + `roles/bigquery.jobUser` |

Example — Compute only:

```hcl
read_roles = [
  "roles/compute.viewer",
  "roles/monitoring.viewer"
]
```

---

## Services CloudPi acts on

**Compute:** Compute Engine (start/stop/resize/label/quarantine, machine images)
**Storage (block):** Persistent Disk, Snapshot, Image (delete/snapshot/label)
**Network:** Firewall rules, External IP (delete/release/label)
**Database:** Cloud SQL (stop/delete/label)
**Storage (object):** Cloud Storage buckets (lifecycle/label)
**Serverless:** Cloud Functions (delete/label)

---

## Output & notes

`service_account_email` and `service_account_private_key` (JSON key) — feed the JSON
to CloudPi onboarding.

- Read roles are edited in `variables.tf` under `read_roles`; remediation roles
  under `write_roles`.
- The default `read_roles` grants only the roles CloudPi actually uses — one per
  capability (cost, inventory, metrics, onboarding).

Next: [Connect GCP](ConnectGCP.md) · [Cloud Onboarding](CloudOnboarding.md)
