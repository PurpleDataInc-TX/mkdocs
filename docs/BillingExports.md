# Billing Exports and Data Ingestion

## Overview
CloudPi relies on cloud billing exports to provide detailed cost visibility, filtering, and allocation. This page outlines the export types and common requirements.

## AWS - Cost and Usage Report (CUR)

Recommended settings:

- Include resource IDs
- Hourly granularity
- Parquet format
- Refresh automatically

CUR data enables deep filtering and grouping in CloudPi.

## Azure - Cost Management Export

Recommended settings:

- Export to a dedicated storage account
- Recurring export schedule
- Read-only access for the CloudPi service principal

## GCP - BigQuery Billing Export

Recommended settings:

- Detailed billing export to BigQuery
- CloudPi service account granted BigQuery Job User and Data Viewer

## Data Ingestion Timing
- Initial data may appear quickly but full filtering requires export ingestion.
- Export latency varies by provider.

## Historical Backfill
If you need historical data with full filtering:
- Backfill prior export periods when supported.
- Confirm the backfill window in your cloud provider.

## Validation Checklist
- Export is active and delivering files.
- CloudPi has read access to the export location.
- Costs appear in **Billing Hub** with expected dimensions.
