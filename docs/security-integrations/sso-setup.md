# SSO Setup Overview

CloudPi supports Single Sign-On (SSO) integration with enterprise identity providers, enabling users to authenticate using their corporate credentials.

## Supported Identity Providers

- **Azure AD / Microsoft Entra ID** - OpenID Connect (OIDC) with PKCE
- **Okta** - SAML 2.0 (coming soon)
- **Google Workspace** - OAuth 2.0 (coming soon)

## Benefits of SSO

1. **Enhanced Security**
   - Centralized authentication
   - Multi-factor authentication (MFA) support
   - Password policy enforcement

2. **Improved User Experience**
   - Single set of credentials
   - Faster login process
   - Seamless access across applications

3. **Simplified Administration**
   - Centralized user management
   - Automated provisioning/deprovisioning
   - Reduced password reset requests

## Configuration Requirements

### Identity Provider Side
- Admin access to configure applications
- Ability to create app registrations
- Access to generate client secrets/certificates

### CloudPi Side
- Admin access to CloudPi
- OIDC callback URL configured
- Environment variables set

## Basic Setup Steps

1. **Configure Identity Provider**
   - Register CloudPi as an application
   - Configure redirect URIs
   - Generate client credentials

2. **Configure CloudPi**
   - Navigate to Admin Settings → Integrations
   - Enter identity provider details
   - Test configuration

3. **User Management**
   - Invite users to CloudPi
   - Ensure email addresses match IdP
   - Set appropriate roles

## Detailed Guides

For specific identity provider setup:
- [Azure AD SSO Setup (Detailed)](azure-sso-detailed.md)

## Important Notes

⚠️ **User Pre-Provisioning Required**  
CloudPi does NOT automatically create users during SSO login. Users must be invited to CloudPi before they can authenticate via SSO.

⚠️ **Email Matching**  
User email addresses in CloudPi must exactly match the email in your identity provider.

⚠️ **Password Invalidation**  
Once SSO is enabled, password-based login is disabled for all users.

---

[Next: Azure SSO Detailed Guide →](azure-sso-detailed.md)
