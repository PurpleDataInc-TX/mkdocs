# Views and Invoices

## Overview

The **Views and Invoices** page in CloudPi centralizes and streamlines the invoicing process, making it easier for users to generate, manage, and review invoices based on comprehensive and customizable billing views. This feature ensures precise financial management across various customers and cost centers, tailored to the unique demands of multi-cloud environments.

## Key Features

### Invoicing Based on Billing Views

**Customization:**
Create invoices that reflect the specific cost structures and categories defined in your billing views, such as services, service groups, or user-defined cost tags.

**Accuracy:**
Ensure that each invoice accurately represents the consumption and costs as per the configurations set in the billing views, enhancing transparency and accountability.

### Invoicing History

**Comprehensive List:**
Access a detailed list of all past invoices, which includes vital information such as invoice dates, amounts, and associated customer or cost center details.

**Ease of Management:**
Track and manage invoicing records effortlessly, with options to search, filter, and retrieve past invoices based on various criteria, facilitating better financial oversight.

### Invoicing Automation

**Scheduled Billing:**
Automate the invoicing process based on selected billing views with customizable schedules (e.g., weekly, monthly). This automation helps maintain consistency in billing cycles and reduces manual workload.

**Reliability:**
Automate recurring invoices, ensuring they are generated and dispatched at regular intervals without fail, thus improving efficiency and reducing the chances of human error.

### Invoice Customer/Cost Center Details

**Detailed Record-Keeping:**
Maintain and manage detailed records for each customer or cost center, including specific billing information and contact details. This information is critical for ensuring invoices are accurate and sent to the correct recipients.

**Customization and Control:**
Customize the level of detail shown on invoices for each customer or cost center, allowing for flexibility and specificity in billing practices to meet diverse needs.

## Navigating the Invoicing Page

### Access and Setup

1. Navigate to **Billing Hub** from the left navigation menu
2. Select **Views & Invoices**
3. Here you can configure or modify billing views and set up automation for recurring billing cycles

### Invoice Summary and Billing View List

The main page displays all created billing views in a table format.

**Table Columns:**
- **Billing View Name** - Name of the saved view configuration
- **Description** - Purpose of the billing view
- **Projects** - Associated projects
- **Created Date** - When the view was created
- **Actions** - View invoices, Add customer, Edit, Delete

### Viewing Invoices

To see invoices generated under each billing view:

1. Locate the billing view in the table
2. Click the **View** icon under Actions
3. A list of invoices for that view appears showing:
   - Invoice number
   - Customer name
   - Invoice date
   - Amount
   - Status
   - Actions (Resend, Edit, Download)

**Available Actions:**
- **Resend** - Email the invoice to the customer again
- **Edit** - Modify invoice details
- **Download** - Get PDF copy of the invoice

## Creating Customer Details

### Add New Customer

Before generating invoices, you must create customer records:

1. Click the **Add** icon under Actions for a billing view
2. A dialog appears with two options:
   - Select existing customer from dropdown
   - Create new customer details

### Creating New Customer Details

If the customer doesn't exist:

1. Click **"Create customer details"**
2. You're navigated to the customer details form
3. Enter required information:

**Personal Information:**
- First Name
- Last Name
- Email
- Phone Number

**Company Information:**
- Company Name
- Address
- City
- State/Province
- Postal Code
- Country

**Billing Details:**
- Cost Center
- Project Name
- Department Name

4. Click **"Save"** to create the customer record

## Generating Invoices

### Step-by-Step Invoice Creation

1. **Select Customer:**
   - From the billing view's Actions menu, click **Add customer** icon
   - Choose an existing customer from the dropdown, or create a new one
   - Select the invoice period (month/year)

2. **Review Invoice Preview:**
   - After selecting customer and period, you're redirected to **Create Invoice** page
   - The page shows:
     - Customer address and details at the top
     - Billing data table in the middle
     - Line items with services, quantities, rates, amounts
     - Subtotal, taxes, discounts, total

3. **Verify Details:**
   - Check all line items are correct
   - Verify amounts match billing view data
   - Confirm customer information is accurate

4. **Create and Send:**
   - Click **"Create and Send"** button
   - Invoice is generated
   - Email automatically sent to customer
   - Invoice appears in the invoices list for this billing view

### Invoice Status

Invoices can have different statuses:
- **Draft** - Created but not sent
- **Sent** - Emailed to customer
- **Paid** - Payment received
- **Overdue** - Past payment due date
- **Cancelled** - Invoice voided

## Managing Existing Invoices

### Viewing Invoice Details

1. Navigate to the billing view
2. Click **View** icon to see invoices list
3. Click on any invoice number to see full details

**Invoice Detail Page Shows:**
- Invoice header (number, date, due date)
- Customer information
- Bill-to and ship-to addresses
- Line items with descriptions
- Subtotal, taxes, discounts
- Total amount due
- Payment terms
- Notes/special instructions

### Editing Invoices

**For Draft Invoices:**
1. Locate the invoice in the list
2. Click the **Edit** icon
3. Modify any field as needed:
   - Line items
   - Quantities
   - Rates
   - Taxes
   - Discounts
   - Customer information
4. Click **"Update Invoice"**

**For Sent Invoices:**
- Cannot edit sent invoices directly
- Must create a credit memo or new invoice
- Contact support if correction needed

### Resending Invoices

If a customer didn't receive the invoice:

1. Find the invoice in the list
2. Click the **Resend** icon
3. Confirm the recipient email
4. Click **"Resend"**
5. Invoice is emailed again

### Downloading Invoices

Get a PDF copy:

1. Locate the invoice
2. Click the **Download** icon
3. PDF is generated and downloaded
4. Can be saved, printed, or attached to emails

## Editing Billing Views

You can modify the billing view that generates invoices:

1. Find the billing view in the table
2. Click the **Edit** icon under Actions
3. You're navigated to **Billing Analysis**
4. Modify billing details:
   - Billing view name
   - Account ID
   - Granularity
   - Projects
   - Group By dimension
   - Date range
5. Apply changes to preview
6. Click **"Save Billing View"**
7. Enter a new name or overwrite existing
8. View is updated

**Important:** Changes to billing views affect future invoices, not past ones.

## Invoice Automation

### Setting Up Recurring Invoices

CloudPi can automatically generate invoices on a schedule:

1. Navigate to billing view settings
2. Enable **"Automated Invoicing"**
3. Configure schedule:
   - **Frequency:** Weekly, Monthly, Quarterly, Yearly
   - **Day of Period:** Which day to generate (e.g., 1st of month)
   - **Time:** What time to process
4. Select customer(s) for automatic invoicing
5. Set email preferences:
   - Subject line template
   - Email body template
   - Reply-to address
6. Click **"Save Automation"**

### Managing Automated Invoices

**View Schedule:**
- See upcoming automated invoice dates
- Review automation history
- Check for any failures

**Pause Automation:**
- Temporarily stop automatic invoice generation
- Resume when needed
- No data loss

**Edit Automation:**
- Change frequency
- Update customer list
- Modify email templates

## Best Practices

### Invoice Creation

1. **Verify Data Accuracy:**
   - Review billing view data before creating invoice
   - Spot-check a few line items
   - Ensure date ranges are correct

2. **Use Clear Descriptions:**
   - Make line item descriptions customer-friendly
   - Avoid technical jargon
   - Include service names as they appear in cloud provider bills

3. **Consistent Timing:**
   - Send invoices on the same day each month
   - Allow sufficient time for customers to process
   - Consider customer payment cycles

4. **Professional Presentation:**
   - Use company branding
   - Include payment instructions
   - Add contact information for questions

### Customer Management

1. **Maintain Accurate Records:**
   - Keep customer information up to date
   - Verify email addresses regularly
   - Update addresses when customers notify you

2. **Communication:**
   - Send invoices promptly
   - Follow up on overdue payments
   - Provide clear billing support contact

3. **Documentation:**
   - Keep copies of all invoices
   - Maintain payment history
   - Document any disputes or adjustments

### Compliance

1. **Tax Compliance:**
   - Ensure correct tax rates applied
   - Include tax identification numbers
   - Follow local invoicing regulations

2. **Record Keeping:**
   - Retain invoices per legal requirements
   - Back up invoice data regularly
   - Maintain audit trail

3. **Security:**
   - Protect customer financial data
   - Use secure email for invoice delivery
   - Encrypt sensitive information

## Troubleshooting

### Invoice Not Creating

**Possible Causes:**
- Billing view has no data for selected period
- Customer information incomplete
- Network connectivity issue

**Solutions:**
- Verify billing view shows data
- Complete all required customer fields
- Check internet connection
- Try again or contact support

### Customer Not Receiving Invoice Email

**Possible Causes:**
- Incorrect email address
- Email caught in spam filter
- Email server issue

**Solutions:**
- Verify email address is correct
- Ask customer to check spam folder
- Resend invoice
- Provide download link as backup
- Contact support if persistent

### Invoice Amounts Don't Match Billing View

**Possible Causes:**
- Date range mismatch
- Filters applied differently
- Data updated since view creation

**Solutions:**
- Verify date ranges match exactly
- Check filter configurations
- Refresh billing view data
- Regenerate invoice if needed

### Cannot Edit Billing View

**Possible Causes:**
- Insufficient permissions
- View is locked
- Billing view deleted

**Solutions:**
- Check user role (need Workspace Admin or User)
- Verify view exists
- Contact workspace administrator
- Create new view if necessary

---

## Related Documentation

- [Billing Views](billing-views.md) - Creating and managing billing views
- [Multi-Cloud Billing](multi-cloud-billing.md) - Analyzing billing data
- [Shared Costs](shared-costs.md) - Allocating shared infrastructure costs

---

*For invoicing support, contact your finance team or CloudPi administrator.*
