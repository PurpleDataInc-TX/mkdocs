# AWS Permissions

CloudPi connects to AWS through an **IAM role** (assumed with an External ID) or,
optionally, an IAM user with access keys. This page lists the permissions CloudPi
needs, grouped by the onboarding feature they power.

Grant only the permissions for the features you enable during onboarding:

| Feature | Permissions | Access type |
|---------|-------------|-------------|
| **Billing-only** | Billing / Cost | Read-only |
| **Recommendations** | Inventory + Metrics | Read-only |
| **Automation** | Remediation groups | Write |

- **Read-Only role** = Billing-only + Recommendations (collection only).
- **Write / Remediation role** = the read-only permissions plus **Automation**, the
  exact actions CloudPi performs when it runs an approved optimization workflow.

!!! note "Prerequisites"
    - Run in the target account (the organization **management account** if you want org-wide discovery).
    - Terraform >= 1.0 and an identity allowed to create IAM roles, users, and policies.

!!! tip "Setup"
    ```bash
    cp terraform.tfvars.example terraform.tfvars
    # set trusted_account_id (CloudPi account), external_id (recommended),
    # and cur_bucket_arns (restrict CUR access to your export bucket)
    terraform init
    terraform apply
    terraform output -raw role_arn        # give this + external_id to CloudPi
    ```

---

## Read-Only role (Billing-only + Recommendations)

Everything below is **read-only**. Grant the groups for the features you enable.

### Billing / Cost — *Billing-only feature*

Required for cost data and forecast.

| Permission | Used for |
|------------|----------|
| `s3:ListBucket`, `s3:GetObject` (on the CUR/FOCUS bucket) | Reading your **actual cost/usage** — CUR 2.0 / FOCUS 1.0 Parquet ingestion |
| `ce:GetCostForecast` | Monthly cost **forecast** (falls back to a built-in calculator if denied) |
| `pricing:GetProducts` | Rate cards for savings estimates |

### Inventory — *Recommendations feature*

Required to list resources for rightsizing.

| Permission | Covers these services |
|------------|-----------------------|
| `ec2:Describe*` | EC2, AMI, EBS, Snapshot, ENI, Elastic IP, VPC, VPC Endpoint, NAT Gateway, Transit Gateway (+attachment), VPN |
| `rds:Describe*` | RDS, Aurora |
| `lambda:List*` | Lambda functions and their tags |
| `tag:GetResources`, `resourcegroupstaggingapi:GetResources` | Tags for every resource above |

### Metrics — *Recommendations feature*

Required for utilization-based recommendations.

| Permission | Used for |
|------------|----------|
| `cloudwatch:ListMetrics`, `cloudwatch:GetMetricData`, `cloudwatch:GetMetricStatistics` | CPU / network / disk utilization from CloudWatch |
| `logs:Describe*` | Log-group metadata |

Namespaces collected: `AWS/EC2`, `EBS`, `RDS`, `Lambda`, `NATGateway`, `TransitGateway`, `VPN`.

### Org / Account discovery *(optional)*

`organizations:List*` lets CloudPi auto-discover the member accounts in your
organization. Needed **only in the management account** — skip this block for a
single account.

---

## Write / Remediation role (Automation)

The Write role is the Read-Only role above **plus** the remediation actions below,
which power the **Automation** feature. CloudPi calls these **only after a
recommendation is approved** through your workflow rules. Grant only the groups
whose remediations you intend to enable.

### Remediation groups

=== "Compute (EC2 / EBS / AMI / EIP)"

    Start, stop, and terminate instances; resize and right-size; capture snapshots
    and AMIs; delete idle volumes and snapshots; release unused Elastic IPs; maintain tags.

    `ec2:StartInstances`, `ec2:StopInstances`, `ec2:TerminateInstances`,
    `ec2:ModifyInstanceAttribute`, `ec2:CreateImage`, `ec2:DeregisterImage`,
    `ec2:CreateSnapshot`, `ec2:DeleteSnapshot`, `ec2:ModifyVolume`,
    `ec2:DeleteVolume`, `ec2:AssociateAddress`, `ec2:ReleaseAddress`,
    `ec2:CreateTags`, `ec2:DeleteTags`

=== "Network cleanup (VPC family)"

    Tear down idle or orphaned ENIs, NAT gateways, endpoints, flow logs, subnets,
    route tables, NACLs, security groups, VPCs, Transit Gateway attachments, and VPN connections.

    `ec2:DeleteNetworkInterface`, `ec2:DeleteNatGateway`, `ec2:DeleteVpcEndpoints`,
    `ec2:DeleteFlowLogs`, `ec2:DetachInternetGateway`, `ec2:DeleteInternetGateway`,
    `ec2:DeleteSubnet`, `ec2:DeleteRouteTable`, `ec2:DeleteNetworkAcl`,
    `ec2:DeleteSecurityGroup`, `ec2:DeleteVpc`, `ec2:DeleteTransitGatewayVpcAttachment`,
    `ec2:DeleteTransitGatewayPeeringAttachment`, `ec2:DeleteTransitGatewayConnect`,
    `ec2:DeleteVpnConnection`, `ec2:DeleteClientVpnEndpoint`

=== "Database (RDS / Aurora)"

    Modify DB instance and cluster settings, right-size, manage RDS Proxy (with its
    credentials secret), and maintain tags.

    `rds:ModifyDBInstance`, `rds:ModifyDBCluster`, `rds:AddTagsToResource`,
    `rds:RemoveTagsFromResource`, `rds:CreateDBProxy`, `rds:RegisterDBProxyTargets`,
    `secretsmanager:CreateSecret`, `secretsmanager:ListSecrets`

=== "Serverless / CDN / data stores"

    Reconfigure and right-size Lambda, DynamoDB, and DAX; front content with
    CloudFront; manage auto-scaling and tags.

    `lambda:UpdateFunctionConfiguration`, `lambda:DeleteFunction`, `lambda:TagResource`,
    `cloudfront:CreateDistribution`, `redshift:CreateTags`, `redshift:DeleteTags`,
    `dynamodb:TagResource`, `dynamodb:UntagResource`, `dynamodb:UpdateTimeToLive`,
    `dynamodb:UpdateContinuousBackups`, `dynamodb:CreateBackup`, `dynamodb:DeleteTable`,
    `dax:CreateCluster`, `application-autoscaling:RegisterScalableTarget`,
    `application-autoscaling:PutScalingPolicy`, `athena:UntagResource`

=== "Storage (S3 / EFS / ECR / Backup)"

    Apply lifecycle policies; clean up idle buckets, objects, file systems, and
    repositories; back up before deletion; maintain tags.

    `s3:PutBucketTagging`, `s3:PutLifecycleConfiguration`, `s3:DeleteObject`,
    `s3:DeleteBucket`, `elasticfilesystem:PutLifecycleConfiguration`,
    `elasticfilesystem:DeleteMountTarget`, `elasticfilesystem:DeleteFileSystem`,
    `elasticfilesystem:TagResource`, `elasticfilesystem:UntagResource`,
    `ecr:PutLifecyclePolicy`, `ecr:DeleteRepository`, `ecr:TagResource`,
    `ecr:UntagResource`, `backup:StartBackupJob`

=== "Load balancing / observability / SSM"

    Remove idle load balancers and alarms; export and trim log data; set log
    retention; run SSM automation runbooks.

    `elasticloadbalancing:DeleteLoadBalancer`, `elasticloadbalancing:AddTags`,
    `elasticloadbalancing:RemoveTags`, `cloudwatch:DeleteAlarms`,
    `logs:CreateExportTask`, `logs:DeleteLogStream`, `logs:PutRetentionPolicy`,
    `ssm:StartAutomationExecution`, `ssm:GetAutomationExecution`

=== "Cross-service tagging"

    Apply or remove tags on any supported resource in a single call.

    `tag:TagResources`, `tag:UntagResources`

---

## Tiers by feature

Grant grows with the features you enable. Each tier includes the ones above it.

| Features enabled | Grant | Access |
|------------------|-------|--------|
| **Billing-only** | Billing / Cost | Read-only |
| **Billing-only + Recommendations** | + Inventory + Metrics | Read-only |
| **Billing-only + Recommendations + Automation** | + the remediation groups you enable | Write |

**Org / Account discovery** (`organizations:List*`) is separate — add it in the
management account for whole-org, multi-account onboarding.

---

## Grant permission for only one service

Keep the read blocks you want, then keep only the remediation groups whose actions
you enable. For example, **EC2 rightsizing / idle cleanup only**: keep the
inventory read (`ec2:Describe*`), the metric reads, and the **Compute** remediation
group; delete the Network, Database, Serverless, Storage, and Ops remediation
statements in `main.tf`. If you never run destructive actions, drop the whole
remediation section and use the read-only role.

Example — EC2 only, read side:

```hcl
# InventoryRead statement, EC2 only:
Action = [
  "ec2:Describe*",
  "cloudwatch:ListMetrics",
  "cloudwatch:GetMetricData",     # namespace AWS/EC2
  "tag:GetResources"
]
```

For **RDS only**, swap `ec2:Describe*` for `rds:Describe*` (metrics namespace
`AWS/RDS`), and so on.

---

## Services CloudPi acts on

**Compute:** EC2, AMI, Lambda
**Storage:** EBS, Snapshot, S3, EFS, ECR
**Database:** RDS, Aurora, DynamoDB, DAX, Redshift
**Network:** VPC, VPC Endpoint, ENI, Elastic IP, NAT Gateway, Transit Gateway (+attachment), VPN, Load Balancer
**Other:** CloudFront, CloudWatch, CloudWatch Logs, Athena, AWS Backup, SSM Automation

---

## Output & notes

`role_arn` (+ `external_id`) is the preferred credential. `access_key_id` and
`secret_access_key` are also created for direct-key access — ignore them if you use
the role.

- Prefer `role_arn` + `external_id`. The IAM user and keys are long-lived — remove
  that block in `main.tf` if you don't need them.
- Narrow the policy freely. CloudPi degrades gracefully and reports the specific
  missing permission for each collection type or action.

Next: [Connect AWS](ConnectAWS.md) · [Cloud Onboarding](CloudOnboarding.md)
