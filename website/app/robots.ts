import type { MetadataRoute } from "next";
import { siteUrl, indexingEnabled } from "./seo";
export default function robots():MetadataRoute.Robots {return {rules:indexingEnabled?{userAgent:"*",allow:"/",disallow:["/sign-in","/sign-up"]}:{userAgent:"*",disallow:"/"},...(indexingEnabled?{sitemap:siteUrl+"/sitemap.xml"}:{})};}
