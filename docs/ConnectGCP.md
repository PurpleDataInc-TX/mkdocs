# Connect GCP

## Overview
Connect Google Cloud to CloudPi to ingest BigQuery billing exports and enable cost analysis and reporting.

## Prerequisites
- GCP billing export to BigQuery enabled.
- Permission to grant IAM roles on the billing project and dataset.
- Access to a CloudPi-provided service account (or your project service account).

## Configuration Workflow
1. Enable BigQuery billing export.
2. Grant CloudPi access to the billing project.
3. Grant CloudPi access to the BigQuery dataset.
4. (Optional) Grant viewer access for active resources.
5. Add GCP details in CloudPi.
6. Validate ingestion and backfill if needed.

## Step 1 - Enable BigQuery Billing Export
1. Open **Billing** in GCP.
2. Enable detailed billing export to a BigQuery dataset.
3. Confirm dataset and project IDs.

## Step 2 - Grant Project-Level Access
Grant the CloudPi service account **BigQuery Job User** on the billing project.

## Step 3 - Grant Dataset Access
Grant the CloudPi service account **BigQuery Data Viewer** on the billing dataset.

## Step 4 - Optional: Active Resource Access
If you want active resource visibility, grant the **Viewer** role on the relevant projects.

## Step 5 - Connect in CloudPi
1. Go to **Integrations** or **Cloud Onboarding**.
2. Select **GCP** and enter:
   - Billing project ID
   - Dataset name
   - Service account details (if required)

## Step 6 - Validate and Backfill
- Confirm the integration status is **Connected**.
- Validate data in **Billing Hub** and **Dashboards**.
- If historical filtering is required, backfill older exports when available.

## Troubleshooting
If data does not appear:
- Verify billing export is active.
- Confirm dataset permissions for the CloudPi service account.

For assistance, contact **support@cloudpi.ai**.
