# Contact form setup

The homepage and contact page share a form. Its server action requires a signed-in Clerk user, validates input, and sends plain-text inquiries to kayden@212carpet.com through Resend. No contact submissions are stored in a database.

Before enabling delivery:
1. Set up an owned Resend account and verify a sender domain you control.
2. Create a fresh sending API key. Never commit it or paste it into chat.
3. After explicit user approval, add RESEND_API_KEY and CONTACT_FROM_EMAIL to the verified 212 Maintenance Railway service only (project 1ca01b40-b647-4631-a430-bada9d306ade; service 1f99eb1d-7c76-4dc3-b555-1cb09f514cb0). CONTACT_FROM_EMAIL must be an address on the verified sender domain.
4. Confirm Clerk is configured, deploy with user confirmation, and submit one authorized test inquiry. Verify inbox receipt and Reply-To before declaring delivery working.

Without configuration, the form reports that the inquiry was not sent and gives call/email alternatives. Provider acceptance is checked before showing success. A hidden honeypot provides basic spam filtering; add durable rate limiting before broader public launch if sign-up is open. Never point this form at unrelated projects or use their secrets.

Reference: https://resend.com/docs/api-reference/emails/send-email
