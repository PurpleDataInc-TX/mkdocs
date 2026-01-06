# Security

Security is a paramount concern when it comes to managing and optimizing your cloud environments. CloudPi is designed with stringent security measures to ensure that your data remains safe and your operations stay secure.

---

## Access Requirements

CloudPi requires read-only access to your cloud service accounts. This minimal access level ensures that CloudPi can gather necessary billing and service data without the ability to modify any aspect of your environment. Here's what you need to know about our access requirements:

**Read-Only Access** - By limiting access to read-only, CloudPi ensures that it can perform necessary analytics and monitoring without the risk of altering your cloud setup. This access allows CloudPi to retrieve data related to usage, costs, inventory, and configurations

**Billing and Service Account Roles** - Specific roles need to be configured within your cloud provider to grant CloudPi the necessary permissions. These roles should only encompass capabilities that allow data viewing and not data modification

---

## Addressing Security Concerns

We understand the importance of security for our customers. Here are the steps we take to safeguard your information:

**Data Encryption** - All data, both in transit and at rest, is encrypted using industry-standard encryption protocols. This ensures that your data is protected from unauthorized access

**Compliance and Certifications** - CloudPi complies with major industry standards and regulations to ensure that we meet the highest security benchmarks

**Regular Security Audits** - Our systems undergo regular security audits to identify and rectify any vulnerabilities, ensuring that our defenses remain robust against emerging threats

**Transparent Privacy Policies** - We are committed to transparency regarding how we handle your data. Our privacy policies clearly outline how data is collected, used, and protected

---

## How to Grant Access

To set up CloudPi, follow these steps to grant read-only access securely:

1. Navigate to the IAM (Identity and Access Management) section of your cloud provider
2. Create a new role specifically for CloudPi with predefined policies that restrict permissions to read-only access
3. Assign this role to CloudPi during the setup process by providing the necessary credentials through a secure, encrypted session

---

## Seeking Further Clarifications

If you have any questions or need further clarification regarding CloudPi's security measures, please do not hesitate to contact our support team. We are here to address your concerns and ensure that you feel confident in how we manage and protect your cloud data.
