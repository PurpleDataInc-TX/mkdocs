# Provider Connections

Before onboarding your cloud accounts to CloudPi, you must complete the provider-specific connection setup. This ensures the necessary permissions, billing exports, and credentials are properly configured in your cloud environment.

---

## Overview

Each cloud provider requires specific configurations to enable CloudPi to access billing data, metrics, and resources. Complete the relevant provider connection setup before proceeding with cloud onboarding.

| Provider | Key Requirements | Setup Guide |
|----------|-----------------|-------------|
| AWS | IAM Role, CUR Export, Cost Allocation Tags | [Connect AWS](#connect-aws) |
| Azure | App Registration, Cost Export, Storage Access | [Connect Azure](#connect-azure) |
| GCP | Service Account, BigQuery Export, IAM Roles | [Connect GCP](#connect-gcp) |

---

## Connect AWS

Connect AWS to CloudPi to ingest Cost and Usage Report (CUR) data and enable detailed cost reporting, allocation, and optimization.

### Prerequisites

Before starting AWS onboarding, ensure you have the following:

- **AWS Billing Access** - Permission to create IAM roles and manage CUR exports
- **CUR Configuration** - Cost and Usage Report enabled with resource IDs and a supported format (Parquet recommended)
- **Cost Allocation Tags** - Tags activated in AWS for proper cost categorization

### Configuration Workflow

1. Configure the AWS Cost and Usage Report (CUR)
2. Activate cost allocation tags
3. Create a cross-account IAM role for CloudPi
4. Grant CloudPi access to the CUR S3 bucket
5. Add AWS details in CloudPi
6. Validate ingestion and backfill historical data if needed

### Step 1 - Configure the AWS CUR

1. Open **Billing and Cost Management** in AWS
2. Create a new **Cost and Usage Report**
3. Enable **Include resource IDs**
4. Set **Time granularity** to **Hourly**
5. Enable **Refresh automatically**
6. Choose **Parquet** format and deliver to an S3 bucket

### Step 2 - Activate Cost Allocation Tags

1. In AWS, navigate to **Cost Allocation Tags**
2. Activate the tags required for reporting and cost assignment

### Step 3 - Create a Cross-Account IAM Role

1. Use the CloudPi-provided template or IAM instructions
2. Use the **External ID** provided by CloudPi
3. Apply least-privilege permissions required for CUR access

### Step 4 - Grant CloudPi Access to the CUR Bucket

1. Update the S3 bucket policy to allow the CloudPi role to read CUR files
2. Ensure the role has permission to list and read report objects

### Step 5 - Connect in CloudPi

1. Go to **Integrations** or **Cloud Onboarding**
2. Select **AWS** and enter:
   - Account ID
   - Role ARN
   - External ID
   - CUR bucket name and report prefix

### Step 6 - Validate and Backfill

- Confirm the integration status is **Connected**
- Validate data in **Billing Hub** and **Cost Assignment**
- If historical filtering is required, backfill prior CUR data

For detailed instructions, see [Connect AWS](ConnectAWS.md).

---

## Connect Azure

Connect Azure to CloudPi to ingest cost exports and enable detailed billing analysis and reporting.

### Prerequisites

Before starting Azure onboarding, ensure you have the following:

- **Azure Billing Access** - Permission to create app registrations and service principals
- **Cost Management Exports** - Ability to create or manage Cost Management exports and storage access
- **Billing Account Type** - Identify your billing account type (CSP, EA, MCA, or standard)

### Configuration Workflow

1. Create a service principal (app registration)
2. Grant reader permissions at the appropriate scope
3. Create a Cost Management export
4. Grant CloudPi read-only access to the export storage
5. Add Azure credentials and export details in CloudPi
6. Validate ingestion and backfill if needed

### Step 1 - Create a Service Principal

1. Create an **App Registration** in Microsoft Entra ID
2. Generate a **Client Secret**
3. Record **Tenant ID** and **Client ID**

### Step 2 - Grant Reader Permissions

Assign the **Reader** role to the service principal at the billing scope or subscription scope required for the export.

### Step 3 - Create the Billing Export

1. Open **Cost Management > Exports**
2. Create a new export to a storage account
3. Confirm export frequency and format meet CloudPi requirements

### Step 4 - Grant Storage Access

Grant the service principal **read-only** access to the storage container holding the export data.

### Step 5 - Connect in CloudPi

1. Go to **Integrations** or **Cloud Onboarding**
2. Select **Azure** and enter:
   - Tenant ID
   - Client ID
   - Client Secret
   - Billing account and export storage details

### Step 6 - Validate and Backfill

- Confirm the integration status is **Connected**
- Validate data in **Billing Hub**
- If historical data is required, enable export backfill if available

For detailed instructions, see [Connect Azure](ConnectAzure.md).

---

## Connect GCP

Connect Google Cloud to CloudPi to ingest BigQuery billing exports and enable cost analysis and reporting.

### Prerequisites

Before starting GCP onboarding, ensure you have the following:

**BigQuery Billing Export Enabled**

GCP billing export must be enabled to a BigQuery dataset containing detailed billing data.

**IAM Permissions to Configure Access**

Permissions to:

- Create a service account
- Assign IAM roles on the billing project
- Grant access to the BigQuery billing dataset

**GCP Service Account with Credentials**

- A customer-created GCP service account with the required IAM roles assigned
- A service account key file (credentials.json) generated from this account, which will be provided to CloudPi for authentication

### Configuration Workflow

1. Enable BigQuery billing export
2. Grant CloudPi access to the billing project
3. Grant CloudPi access to the BigQuery dataset
4. (Optional) Grant viewer access for active resources
5. Add GCP details in CloudPi
6. Validate ingestion and backfill if needed

### Step 1 - Enable BigQuery Billing Export

1. Open **Billing** in GCP
2. Enable detailed billing export to a BigQuery dataset
3. Confirm dataset and project IDs

### Step 2 - Grant Project-Level Access

Grant the CloudPi service account **BigQuery Job User** on the billing project.

### Step 3 - Grant Dataset Access

Grant the CloudPi service account **BigQuery Data Viewer** on the billing dataset.

### Step 4 - Optional: Active Resource Access

If you want active resource visibility, grant the **Viewer** role on the relevant projects.

### Step 5 - Connect in CloudPi

1. Go to **Integrations** or **Cloud Onboarding**
2. Select **GCP** and enter:
   - Billing project ID
   - Dataset name
   - Service account details (if required)

### Step 6 - Validate and Backfill

- Confirm the integration status is **Connected**
- Validate data in **Billing Hub** and **Dashboards**
- If historical filtering is required, backfill older exports when available

For detailed instructions, see [Connect GCP](ConnectGCP.md).

---

## Troubleshooting

If data does not appear after completing the connection setup:

**AWS:**
- Verify CUR delivery to S3
- Confirm tag activation
- Recheck IAM role trust and bucket policies

**Azure:**
- Verify the export is running and storage access is correct
- Confirm the reader role is applied at the correct scope

**GCP:**
- Verify billing export is active
- Confirm dataset permissions for the CloudPi service account

For assistance, contact **support@cloudpi.ai**.

---
