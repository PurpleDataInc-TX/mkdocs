# Azure Cloud Onboarding

Connect your Azure subscriptions to CloudPi for comprehensive cost management.

## Overview

Azure onboarding provides:
- Billing data from Azure exports
- Resource inventory across subscriptions
- Cost optimization recommendations
- Automated resource management

## Prerequisites

- Azure subscription(s)
- Service Principal credentials
- Storage Account for billing exports
- Required roles assigned

## Step 1: Setup Subscription

1. Go to **Admin Settings** → **Integrations** → **Azure Onboarding**
2. Click **Onboard Your Azure Account**
3. Configure:
   - **Subscription Name**
   - **Access Type** (Single Tenant or Multi-Tenant)

## Step 2: Features Configuration

Enable features:
- **Billing** (Required)
- **Recommendations**
- **Automation**

Billing configuration:
- Storage Account Name
- Container Name
- Directory path
- Export Type (Actual Cost, Amortized, FOCUS)
- File Format (CSV, Parquet)

Azure credentials:
- **Tenant ID**
- **Client ID**
- **Client Secret**
Or upload JSON credentials file

## Step 3: Data Collection

CloudPi processes:
- Billing exports (up to 13 months historical)
- Resource metadata
- Tags and labels

Initial sync: 30-60 minutes

For detailed billing setup, see: [Azure Billing Setup Guide](azure-billing-setup.md)

---

[← Back: AWS Onboarding](aws-onboarding.md)
