# 212 Maintenance: launch readiness

The redesign keeps required sign-in. SEO_INDEXING_ENABLED defaults to false. Do not enable it until the steps below are complete.

## Lead delivery
- Configure RESEND_API_KEY and CONTACT_FROM_EMAIL on the 212-cleaning service. Confirm the sender domain is verified with the email provider.
- Confirm the private inquiry destination with the business owner. The existing server-side destination is preserved; no business email is shown on the pages.
- Send a real test inquiry and verify receipt. Test phone, optional email, service/location prefilling, failure feedback, and mobile call links.
- Until delivery is configured the quote form clearly shows a phone fallback and cannot claim success.

## Public release
- Connect the final business domain and set SITE_URL to its HTTPS origin; verify redirects from Railway and any www/non-www alternative.
- Remove requireSignIn calls from marketing pages and make those routes public in proxy.ts when the owner approves public access.
- Adapt the contact action for anonymous submissions before removing its sign-in requirement; add durable rate limiting/spam controls for public traffic.
- Set SEO_INDEXING_ENABLED=true only after marketing routes return HTTP 200 without authentication. Check robots.txt, sitemap.xml, canonical and Open Graph URLs on the final domain.
- Keep authentication pages excluded from indexing. Keep neighborhood drafts noindex and out of the sitemap until they have useful location-specific content and coverage is confirmed.

## Content and search
- Add authentic project photos, owner-approved project descriptions and customer reviews with permission. Do not invent reviews, credentials, years of experience or response times.
- Organization and Service structured data are provided. Add LocalBusiness markup only after the required verified business details are available. No address or ratings are fabricated.
- Verify the domain in Google Search Console, submit /sitemap.xml, and inspect representative homepage, service and region URLs.
- Confirm Google Business Profile details with the owner and keep business name/phone/coverage consistent.
- Check mobile readability, keyboard operation, contrast, Core Web Vitals, redirects and 404 pages on the live domain.
- Choose and approve analytics/call tracking and any necessary privacy/consent handling before enabling marketing tags. No tracking scripts or fabricated conversion data are included.

## Validation in this change
Record build, route, form-validation and browser checks in the delivery notes. A successful build does not establish inbox delivery, Google indexing, or higher rankings.
