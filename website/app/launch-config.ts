export const publicSiteEnabled = process.env.PUBLIC_SITE_ENABLED === "true";
export function isMarketingPath(path:string) {
 return ["/","/contact","/about","/gallery","/terms"].includes(path.replace(/\/$/,"") || "/") || /^\/services(?:\/[^/]+)?\/?$/.test(path) || /^\/service-areas(?:\/[^/]+){0,2}\/?$/.test(path);
}
