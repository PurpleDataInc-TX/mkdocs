# SSO Setup

## Overview
CloudPi supports Single Sign-On (SSO) for centralized authentication and access control.

## Supported Providers
- Okta
- Microsoft Entra ID

## Prerequisites
- Admin access in CloudPi
- Access to create an application in your SSO provider
- SSO metadata and callback URL from CloudPi

## Configuration Steps
1. In CloudPi, navigate to **Integrations** and select **SSO**.
2. Create a new SSO configuration and copy the callback URL.
3. In your SSO provider, create a new application and paste the callback URL.
4. Provide metadata (issuer, client ID, client secret, certificate) in CloudPi.
5. Test login with a pilot user before rolling out broadly.

## Troubleshooting
- Verify metadata values and certificate validity.
- Confirm user email domain matches CloudPi user records.

For assistance, contact **support@cloudpi.ai**.
