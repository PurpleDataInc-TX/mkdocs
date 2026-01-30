# Connect Azure

## Overview
Connect Azure to CloudPi to ingest cost exports and enable detailed billing analysis and reporting.

## Prerequisites
- Azure billing access and permission to create app registrations and service principals.
- Ability to create or manage Cost Management exports and storage access.
- Identify your billing account type (CSP, EA, MCA, or standard).

## Configuration Workflow
1. Create a service principal (app registration).
2. Grant reader permissions at the appropriate scope.
3. Create a Cost Management export.
4. Grant CloudPi read-only access to the export storage.
5. Add Azure credentials and export details in CloudPi.
6. Validate ingestion and backfill if needed.

## Step 1 - Create a Service Principal
1. Create an **App Registration** in Microsoft Entra ID.
2. Generate a **Client Secret**.
3. Record **Tenant ID** and **Client ID**.

## Step 2 - Grant Reader Permissions
Assign the **Reader** role to the service principal at the billing scope or subscription scope required for the export.

## Step 3 - Create the Billing Export
1. Open **Cost Management > Exports**.
2. Create a new export to a storage account.
3. Confirm export frequency and format meet CloudPi requirements.

## Step 4 - Grant Storage Access
Grant the service principal **read-only** access to the storage container holding the export data.

## Step 5 - Connect in CloudPi
1. Go to **Integrations** or **Cloud Onboarding**.
2. Select **Azure** and enter:
   - Tenant ID
   - Client ID
   - Client Secret
   - Billing account and export storage details

## Step 6 - Validate and Backfill
- Confirm the integration status is **Connected**.
- Validate data in **Billing Hub**.
- If historical data is required, enable export backfill if available.

## Azure Account Types
If you use CSP, EA, or MCA billing accounts, follow the account-type specific instructions in your Azure billing portal before completing Step 5.

## Troubleshooting
If data does not appear:
- Verify the export is running and storage access is correct.
- Confirm the reader role is applied at the correct scope.

For assistance, contact **support@cloudpi.ai**.
