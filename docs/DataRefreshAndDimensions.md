# Data Refresh and Reporting Dimensions

## Overview
CloudPi refresh cadence depends on cloud provider exports and integration type. This page explains expected refresh behavior and common reporting dimensions.

## Refresh Cadence
- Export-based data updates when new files are delivered by the provider.
- First ingestion can take hours after initial setup.
- Some metrics (recommendations, active resources) may refresh on separate schedules.

## Common Reporting Dimensions
Depending on the provider, CloudPi can report by:
- Account or subscription
- Project or resource group
- Region or zone
- Service name or resource type
- Tags and cost allocation labels

## Validation
After setup:
- Confirm new data appears in **Billing Hub**.
- Validate key filters (account, project, region, tags).

## Troubleshooting
If dimensions are missing:
- Confirm tags or labels are activated in the cloud provider.
- Verify export content includes resource IDs.
