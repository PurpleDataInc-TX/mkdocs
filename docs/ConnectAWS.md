# Connect AWS

## Overview
Connect AWS to CloudPi to ingest Cost and Usage Report (CUR) data and enable detailed cost reporting, allocation, and optimization.

## Prerequisites
- AWS billing access and permission to create IAM roles and manage CUR exports.
- CUR enabled with resource IDs and a supported format (Parquet recommended).
- Cost allocation tags activated in AWS.

## Configuration Workflow
1. Configure the AWS Cost and Usage Report (CUR).
2. Activate cost allocation tags.
3. Create a cross-account IAM role for CloudPi.
4. Grant CloudPi access to the CUR S3 bucket.
5. Add AWS details in CloudPi.
6. Validate ingestion and backfill historical data if needed.

## Step 1 - Configure the AWS CUR
1. Open **Billing and Cost Management** in AWS.
2. Create a new **Cost and Usage Report**.
3. Enable **Include resource IDs**.
4. Set **Time granularity** to **Hourly**.
5. Enable **Refresh automatically**.
6. Choose **Parquet** format and deliver to an S3 bucket.

## Step 2 - Activate Cost Allocation Tags
1. In AWS, navigate to **Cost Allocation Tags**.
2. Activate the tags required for reporting and cost assignment.

## Step 3 - Create a Cross-Account IAM Role
1. Use the CloudPi-provided template or IAM instructions.
2. Use the **External ID** provided by CloudPi.
3. Apply least-privilege permissions required for CUR access.

## Step 4 - Grant CloudPi Access to the CUR Bucket
1. Update the S3 bucket policy to allow the CloudPi role to read CUR files.
2. Ensure the role has permission to list and read report objects.

## Step 5 - Connect in CloudPi
1. Go to **Integrations** or **Cloud Onboarding**.
2. Select **AWS** and enter:
   - Account ID
   - Role ARN
   - External ID
   - CUR bucket name and report prefix

## Step 6 - Validate and Backfill
- Confirm the integration status is **Connected**.
- Validate data in **Billing Hub** and **Cost Assignment**.
- If historical filtering is required, backfill prior CUR data.

## Multi-Account Guidance
Connect the AWS management account first to capture organization-wide costs. Add member accounts only if needed for specific scopes.

## Troubleshooting
If data does not appear:
- Verify CUR delivery to S3.
- Confirm tag activation.
- Recheck IAM role trust and bucket policies.

For assistance, contact **support@cloudpi.ai**.
