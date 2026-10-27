import type { MetadataRoute } from "next";
import { siteUrl, indexingEnabled } from "./seo";
import { services } from "./services";
import { regions } from "./area-data";
export default function sitemap():MetadataRoute.Sitemap {
 if(!indexingEnabled)return [];
 // Neighborhood drafts and the unfinished gallery remain noindex and are excluded.
 return ["","/services","/service-areas","/contact","/about","/terms",...services.map(s=>"/services/"+s.slug),...regions.map(r=>"/service-areas/"+r.slug)].map(path=>({url:siteUrl+path}));
}
