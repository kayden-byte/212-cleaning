export const siteUrl = (process.env.SITE_URL || "https://212-cleaning-production.up.railway.app").replace(/\/$/, "");
// Leave disabled until the public domain, access, content, and lead delivery are verified.
export const indexingEnabled = process.env.SEO_INDEXING_ENABLED === "true";
export const business = { name: "212 Maintenance", phone: "(631) 532-7534", telephone: "+16315327534" };
