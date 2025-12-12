# Azure Entra ID (Azure AD) SSO Setup Guide

*Comprehensive guide for configuring Single Sign-On between Azure AD and CloudPi*

**Version:** 1.0 | **Last Updated:** December 2025 | **Applies To:** CloudPi BE2.0 with OIDC Authentication

---

## Overview

This guide explains how to configure **Single Sign-On (SSO)** between Microsoft Azure Entra ID (formerly Azure Active Directory) and CloudPi using the **OpenID Connect (OIDC)** protocol with **PKCE** (Proof Key for Code Exchange) security.

### What You'll Achieve

✅ Users can sign in to CloudPi using their Microsoft/Azure AD credentials  
✅ Automatic user attribute mapping (email, name, etc.)  
✅ Optional role mapping from Azure AD groups to CloudPi roles  
✅ Secure authentication with industry-standard OIDC + PKCE  

---

## Prerequisites

### Azure Side Requirements

- Azure subscription with Azure Entra ID (Azure AD)
- Global Administrator or Application Administrator role in Azure AD
- Users exist in Azure AD who need access to CloudPi

### CloudPi Side Requirements

- CloudPi BE2.0 deployed and running
- Admin access to CloudPi
- Environment variables configured:
  - `CRYPTO_SECRET` (32 characters for AES-256 encryption)
  - `OIDC_CALLBACK_BASE_URL` (e.g., `https://api.cloudpi.com/v1/auth/oidc/callback`)
  - `REACT_APP_ORIGIN_URL` (frontend URL for redirects)

---

## Part 1: Azure Entra ID Configuration

### Step 1.1: Register a New Application

1. **Navigate to Azure Portal**  
   Go to [https://portal.azure.com](https://portal.azure.com) and sign in with your administrator account

2. **Open Azure Entra ID**  
   Search for "Azure Active Directory" or "Microsoft Entra ID" and click to open

3. **Create App Registration**  
   In the left menu, click **App registrations**, then click **+ New registration**

4. **Configure Basic Settings**

| Field | Value |
|-------|-------|
| **Name** | CloudPi SSO (or your preferred name) |
| **Supported account types** | • **Single tenant** - Only users in your organization<br>• **Multitenant** - Users from any Azure AD<br>• **Personal accounts** - Include Microsoft personal accounts |
| **Redirect URI** | Select **Web** and enter:<br>`https://your-api-domain.com/v1/auth/oidc/callback` |

Click **"Register"** to complete the registration.

### Step 1.2: Note Down Important Values

After registration, copy these values from the **Overview** page:

- **Application (client) ID:** `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
- **Directory (tenant) ID:** `yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy`

**Construct the Issuer URL:**
```
https://login.microsoftonline.com/{tenant-id}/v2.0
```

### Step 1.3: Create Client Secret

1. In the left menu, click **Certificates & secrets**
2. Click **+ New client secret**
3. Enter **Description** (e.g., "CloudPi Production Secret") and select expiration (recommended: 12-24 months)
4. Click **Add**
5. **⚠️ IMPORTANT: Copy the secret value immediately!** The value is only shown once. Store it securely.

### Step 1.4: Configure API Permissions

1. In the left menu, click **API permissions**
2. Click **+ Add a permission**
3. Select **Microsoft Graph** → **Delegated permissions**
4. Add the following permissions:

| Permission | Purpose |
|------------|---------|
| **openid** | Required for OIDC authentication |
| **profile** | Access user's basic profile (name) |
| **email** | Access user's email address |
| **User.Read** | Read user's basic profile |
| **offline_access** | Get refresh tokens (optional) |

5. Click **Add permissions**, then click **Grant admin consent for [Your Organization]**

### Step 1.5: Verify Redirect URI

1. In the left menu, click **Authentication**
2. Under **Platform configurations**, verify **Redirect URIs** includes your CloudPi callback URL
3. Under **Implicit grant and hybrid flows**:
   - Leave **Access tokens** UNCHECKED
   - Leave **ID tokens** UNCHECKED
   - *(CloudPi uses Authorization Code flow with PKCE, not implicit)*

---

## Part 2: CloudPi Configuration

### Step 2.1: Navigate to SSO Configuration

1. **Login to CloudPi** as an administrator
2. Navigate to **Admin Settings** → **Integrations**
3. Locate the **SSO Configuration** or **OIDC Authentication Providers** section

### Step 2.2: Configuration Form Fields

The OIDC configuration form requires the following information:

| Field | Description | Required |
|-------|-------------|----------|
| **Provider Type** | Select: Azure AD / Microsoft Entra ID | Yes |
| **Issuer URL** | `https://login.microsoftonline.com/{tenant-id}/v2.0` | Yes |
| **Client ID** | Application (client) ID from Azure Portal | Yes |
| **Client Secret** | Secret value created in Azure Portal | Yes |
| **Scopes** | `openid profile email` | Yes |

### Step 2.3: Test and Save Configuration

1. Click **"Test Configuration"** to verify your credentials are valid
2. ✅ Green success message = Configuration is valid
3. ❌ Red error message = Check your values and troubleshoot
4. After successful test, click **"Save"** to activate the integration

**⚠️ Important Notes:**
- Users must be invited to CloudPi BEFORE they can log in via OIDC
- Configure the Redirect URI in your identity provider settings
- Test the configuration before enabling for production use

### Step 2.4: Create Users in CloudPi

**Important:** CloudPi does NOT auto-create users during SSO login. Users must exist in CloudPi before they can authenticate via SSO.

1. Navigate to **Admin Settings** → **Users**
2. Click **"Invite User"** or **"Add User"**
3. Enter user details:
   - **Email:** Must match their Azure AD email exactly
   - **Status:** Set to Approved (APRV)
4. Save the user

---

## Part 3: Testing the Integration

### User Login Flow

After configuration is complete, users will see the SSO login button on the CloudPi login page:

1. User clicks **"Sign in with Azure AD"** button
2. Browser redirects to Microsoft login page
3. User enters Microsoft credentials (email/password)
4. Consent screen appears (first login only, if required)
5. Redirect back to CloudPi with authentication complete
6. User is logged in to CloudPi dashboard

### What Users See During Login

| Step | Screen |
|------|--------|
| 1 | CloudPi login page with Azure AD button |
| 2 | Microsoft login page (familiar to users) |
| 3 | CloudPi dashboard (logged in) |

---

## Security Considerations

- **PKCE Security:** CloudPi uses PKCE (Proof Key for Code Exchange) to prevent authorization code interception attacks
- **Secret Rotation:** Rotate client secrets before expiration (recommended: annually)
- **Principle of Least Privilege:** Only grant required API permissions
- **User Pre-provisioning:** Users must exist in CloudPi before SSO login (no auto-provisioning)
- **Audit Logging:** Monitor SSO authentication events in both Azure AD and CloudPi

---

## What Happens After Saving

When you save the OIDC provider configuration, the following changes occur automatically:

| Action | Description |
|--------|-------------|
| **Client Updated** | Your organization's authType is set to SSO |
| **Users Updated** | All existing users are switched to SSO authentication |
| **Passwords Invalidated** | User passwords are disabled (cannot login with password) |
| **SSO Button Appears** | Login page shows "Sign in with Azure AD" button |

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| **Invalid Redirect URI** | Verify the redirect URI matches exactly in both Azure AD and CloudPi |
| **User not found** | Ensure user is invited to CloudPi with matching email address |
| **Permission denied** | Check that all required API permissions are granted with admin consent |
| **Token expired** | Rotate client secret in Azure AD and update in CloudPi |

---

## Support

For additional support:
- Contact your CloudPi administrator
- Visit [PurpleData Inc. Support](https://purpledata.com/support)
- Email: support@purpledata.com

---

*This guide should be used in conjunction with CloudPi User Guide v0.6*
