# SMTP Integration

Configure SMTP settings to enable email notifications and alerts from CloudPi.

## Overview

SMTP (Simple Mail Transfer Protocol) integration allows CloudPi to send:
- Budget threshold alerts
- Cost anomaly notifications
- Optimization recommendations
- Task and ticket updates
- User invitation emails
- Password reset emails (if applicable)

## Configuration Steps

### Step 1: Navigate to SMTP Settings

1. Log in to CloudPi as an administrator
2. Go to **Admin Settings** → **Integrations**
3. Click on **SMTP** integration card

### Step 2: Enter SMTP Configuration

| Field | Description | Example |
|-------|-------------|---------|
| **SMTP Host** | Mail server hostname | `smtp.gmail.com` |
| **SMTP Port** | Server port | `587` (TLS) or `465` (SSL) |
| **Email Address** | Sender email address | `noreply@yourcompany.com` |
| **Password** | Email account password or app password | `••••••••••••` |
| **Encryption** | TLS or SSL | `TLS` |
| **From Name** | Display name for sender | `CloudPi Notifications` |

### Step 3: Test Configuration

1. Click **Test Connection**
2. Enter a test email address
3. Click **Send Test Email**
4. Verify test email is received

### Step 4: Save Configuration

Click **Save** to activate SMTP integration.

## Common SMTP Providers

### Gmail

```
Host: smtp.gmail.com
Port: 587
Encryption: TLS
Authentication: Required
Note: Use App Password (not regular password)
```

**Enable App Password:**
1. Go to Google Account Security
2. Enable 2-Step Verification
3. Generate App Password for "Mail"

### Microsoft 365

```
Host: smtp.office365.com
Port: 587
Encryption: STARTTLS
Authentication: Required
```

### SendGrid

```
Host: smtp.sendgrid.net
Port: 587
Username: apikey
Password: Your SendGrid API Key
```

### AWS SES

```
Host: email-smtp.us-east-1.amazonaws.com
Port: 587
Username: IAM User Access Key ID
Password: SES SMTP Password
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **Connection timeout** | Check firewall rules, verify host and port |
| **Authentication failed** | Verify username/password, check if app password required |
| **SSL/TLS errors** | Try different port (587 vs 465), verify encryption type |
| **Emails not delivered** | Check spam folder, verify sender reputation |

## Best Practices

1. **Use Dedicated Email Account**
   - Create a dedicated account for CloudPi notifications
   - Don't use personal email accounts

2. **App Passwords**
   - For Gmail/O365, use app passwords instead of regular passwords
   - More secure and avoids 2FA complications

3. **SPF/DKIM/DMARC**
   - Configure proper email authentication records
   - Improves deliverability

4. **Monitor Usage**
   - Track email sending volumes
   - Watch for delivery failures

5. **Test Regularly**
   - Periodically test email functionality
   - Verify alerts are being received

---

[← Back: Security Overview](security-overview.md)
