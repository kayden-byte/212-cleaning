export const siteUrl = (process.env.SITE_URL || "https://212-cleaning-production.up.railway.app").replace(/\/$/, "");
// Leave disabled until the public domain, access, content, and lead delivery are verified.
export const indexingEnabled = process.env.SEO_INDEXING_ENABLED === "true";
export const business = { name: "212 Maintenance", phone: "(212) 537-9219", telephone: "+12125379219" };
