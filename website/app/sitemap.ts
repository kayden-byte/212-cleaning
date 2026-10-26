import type { MetadataRoute } from "next";
import { siteUrl, indexingEnabled } from "./seo";
import { services } from "./services";
import { regions } from "./area-data";
export default function sitemap():MetadataRoute.Sitemap {
 if(!indexingEnabled)return [];
 // Neighborhood drafts remain noindex and are deliberately excluded.
 return ["","/services","/service-areas","/contact",...services.map(s=>"/services/"+s.slug),...regions.map(r=>"/service-areas/"+r.slug)].map(path=>({url:siteUrl+path}));
}
