# AWS Cloud Onboarding

Learn how to connect your AWS accounts to CloudPi for cost management and optimization.

## Overview

AWS onboarding enables:
- Billing data collection from Cost and Usage Reports (CUR)
- Resource inventory and metadata access
- Automated optimization actions (optional)
- Recommendations based on usage patterns

## Prerequisites

- AWS Organization or Management Account
- Cost and Usage Reports enabled
- S3 bucket for CUR files
- IAM role for CloudPi access

## Step 1: Setup Organization

1. Navigate to **Admin Settings** → **Integrations** → **AWS Onboarding**
2. Click **Onboard Your AWS Account**
3. Provide:
   - **Organization Name**
   - **Account Type** (Organization Account or Management Account)
   - **Access Type** (Cross Account or Standard Account)

## Step 2: Features Configuration

Select features to enable:
- **Billing** (Required)
- **Recommendations**
- **Automation**

Configure billing:
- S3 Bucket Name
- Folder Path for CUR files
- S3 Bucket Region
- CUR Version (3.0 recommended)

Provide credentials:
- **Role ARN** or
- **Access Key** + **Secret Key**

## Step 3: Data Collection

CloudPi begins collecting:
- Historical billing data
- Resource inventory
- Tags and metadata

Wait 30-60 minutes for initial sync.

## IAM Role Setup

Create CloudPi IAM role:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ce:Get*",
        "ce:Describe*",
        "ce:List*",
        "s3:GetObject",
        "s3:ListBucket",
        "organizations:List*",
        "organizations:Describe*"
      ],
      "Resource": "*"
    }
  ]
}
```

---

[Next: Azure Onboarding →](azure-onboarding.md)
