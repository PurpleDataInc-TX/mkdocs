# Security Overview

## CloudPi Security Model

Security is paramount when managing cloud environments. CloudPi is designed with stringent security measures to ensure your data remains safe and operations stay secure.

## Access Requirements

### Read-Only Access
CloudPi requires **read-only access** to your cloud service accounts:
- ✅ Can retrieve billing and service data
- ✅ Can read resource metadata
- ✅ Can analyze usage patterns
- ❌ Cannot modify cloud resources
- ❌ Cannot create/delete resources
- ❌ Cannot change configurations

### Required Permissions

#### AWS
- **Billing Account Roles:** Read-only billing data access
- **Cost and Usage Reports:** S3 bucket read access
- **Resource Inventory:** Read-only access to describe APIs

#### Azure
- **Service Principal** with roles:
  - Reader (for resource metadata)
  - Cost Management Reader (for billing)
  - Storage Blob Data Reader (for billing exports)

#### GCP
- **Service Account** with roles:
  - Cloud Asset Viewer
  - BigQuery User (read-only)
  - Storage Object Viewer

## Data Security

### Encryption

#### At Rest
- All data encrypted using AES-256
- Database encryption enabled
- Secure key management
- Regular key rotation

#### In Transit
- TLS 1.2+ for all connections
- Certificate pinning
- Secure API endpoints
- Encrypted data transfers

### Data Privacy

**What CloudPi Stores:**
- Billing and cost data
- Resource metadata (IDs, tags, regions)
- User account information
- Audit logs

**What CloudPi Does NOT Store:**
- Application data
- Workload contents
- Customer PII (unless in resource tags)
- Encryption keys

## Authentication & Authorization

### Single Sign-On (SSO)
- Azure AD / Microsoft Entra ID integration
- OIDC with PKCE security
- SAML 2.0 support
- Multi-factor authentication (MFA) via IdP

### Session Management
- Secure session tokens
- Automatic timeout after inactivity
- Session invalidation on logout
- Concurrent session limits

### API Security
- API key authentication
- Rate limiting
- IP whitelisting (optional)
- Request signing

## Compliance & Certifications

CloudPi complies with major industry standards:

- **SOC 2 Type II** - Security, availability, confidentiality
- **ISO 27001** - Information security management
- **GDPR** - Data protection and privacy
- **CCPA** - California consumer privacy
- **HIPAA** - Healthcare data security (for applicable customers)

## Network Security

### Infrastructure
- AWS infrastructure hosting
- Multi-region redundancy
- DDoS protection
- Web application firewall (WAF)

### Access Control
- VPC isolation
- Security groups
- Network ACLs
- Private subnets for sensitive data

## Audit & Monitoring

### Audit Logs
CloudPi maintains comprehensive audit logs:
- User authentication events
- Data access and modifications
- Configuration changes
- Permission changes
- API calls
- Integration activities

**Log Retention:** 1 year minimum

### Security Monitoring
- Real-time threat detection
- Anomaly detection
- Failed login tracking
- Suspicious activity alerts
- Security incident response

## Data Backup & Recovery

### Backups
- Daily automated backups
- Point-in-time recovery
- Geo-redundant storage
- Encrypted backup storage

### Disaster Recovery
- Multi-region deployment
- Recovery Time Objective (RTO): 4 hours
- Recovery Point Objective (RPO): 24 hours
- Regular DR testing

## Security Best Practices for Users

### 1. Access Management
- Use SSO when available
- Enable MFA on accounts
- Regular password rotation
- Review user permissions quarterly

### 2. Data Handling
- Don't share credentials
- Use workspace/project isolation
- Apply principle of least privilege
- Remove access when not needed

### 3. Integration Security
- Rotate service principal secrets annually
- Monitor integration logs
- Use dedicated service accounts
- Document integration configurations

### 4. Incident Response
- Report security concerns immediately
- Don't attempt to verify suspected breaches
- Follow organization's security policies
- Contact support for guidance

## Granting CloudPi Access

### AWS Setup
```bash
# Create IAM role with read-only billing access
# Attach policies:
# - ViewOnlyAccess
# - Billing (read-only)
# Provide role ARN to CloudPi
```

### Azure Setup
```bash
# Create Service Principal
az ad sp create-for-rbac --name "CloudPi-Integration"

# Assign roles:
# - Reader (subscription/management group)
# - Cost Management Reader
# - Storage Blob Data Reader (billing storage)
```

### GCP Setup
```bash
# Create service account
gcloud iam service-accounts create cloudpi-integration

# Grant roles:
# - roles/cloudasset.viewer
# - roles/bigquery.user
# - roles/storage.objectViewer
```

## Security Certifications & Attestations

For detailed security documentation:
- **Security White Paper:** Available upon request
- **SOC 2 Report:** Available under NDA
- **Penetration Test Results:** Annual tests available

## Contact Security Team

For security-related questions:
- **Email:** security@purpledata.com
- **Vulnerability Reports:** security-reports@purpledata.com
- **Response Time:** 24 hours for critical issues

---

[Next: SSO Setup →](sso-setup.md)
