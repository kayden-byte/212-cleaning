import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { requireSignIn } from "../../auth-access";
import { regions, neighborhoodsByRegion } from "../../area-data";
import { services } from "../../services";
type Props={params:Promise<{location:string[]}>};
function resolve(parts:string[]){
const region=regions.find(r=>r.slug===parts[0]);
if(!region || parts.length>2)notFound();
const neighborhood=parts.length===2 ? neighborhoodsByRegion[region.slug]?.find(n=>n.slug===parts[1]) : undefined;
if(parts.length===2 && !neighborhood)notFound();
return {region,neighborhood,label:neighborhood ? neighborhood.name+", "+region.name : region.name};
}
export async function generateMetadata({params}:Props):Promise<Metadata>{
const {location}=await params;const {label,neighborhood}=resolve(location);
return {title:`Floor & Carpet Cleaning in ${label}`,description:`Residential and commercial carpet, tile and grout, VCT, LVT, stone, and concrete cleaning in ${label}. Call 212 Maintenance for a quote.`,alternates:{canonical:"/service-areas/"+location.join("/")},...(neighborhood ? {robots:{index:false,follow:true}} : {})};
}
export default async function LocationPage({params}:Props){
await requireSignIn();const {location}=await params;const {region,neighborhood,label}=resolve(location);
return <main className="wrap section">
<Link className="back" href={neighborhood ? `/service-areas/${region.slug}` : "/service-areas"}>← {neighborhood ? region.name+" areas" : "All service areas"}</Link>
<p className="eyebrow" style={{marginTop:35}}>RESIDENTIAL & COMMERCIAL / 212 MAINTENANCE</p>
<h1>{neighborhood ? "Floor & carpet cleaning in "+label : region.name+" cleaning services"}</h1>
<p className="intro">Discuss cleaning and floor care for your home, business, or managed property in {label}. Call (631) 532-7534 to confirm availability for your address and plan the right care for your flooring.</p>
{!neighborhood && <section><h2>Choose your {region.name} {region.slug==="long-island" ? "town or community" : "neighborhood"}</h2><p>Open an area’s page to explore cleaning services and request a quote. Don’t see your area? Call us about your address.</p><div className="areas" style={{marginTop:25}}>{(neighborhoodsByRegion[region.slug] || []).map(n=><Link key={n.slug} href={`/service-areas/${region.slug}/${n.slug}`}>{n.name}</Link>)}</div></section>}
<section style={{marginTop:45}}><h2>Floor cleaning services in {label}</h2><div className="service-grid" style={{marginTop:25}}>{services.map(s=><Link className="service-card" key={s.slug} href={`/services/${s.slug}`}><h3>{s.title}</h3><p>{s.description}</p><span className="card-link">Explore {s.title.toLowerCase()}</span></Link>)}</div></section>
<section style={{marginTop:45}}><h2>Plan cleaning for your property</h2><ul className="task-list"><li>Share your address in {label}, approximate floor area, and preferred schedule.</li><li>Identify carpet, carpet tile, VCT, luxury vinyl, tile and grout, stone, and concrete surfaces.</li><li>Tell us about stains, heavy traffic, existing finishes, and any need for marble polishing, stripping, sealing, waxing, or buffing.</li><li>Discuss elevator access, furniture, building requirements, and drying time before confirming your cleaning plan.</li></ul></section>
<section><h2>Questions about cleaning in {label}</h2><h3>Can you clean more than one flooring type?</h3><p style={{lineHeight:1.8}}>Yes. Tell us which surfaces need attention. Carpet extraction, tile and grout cleaning, vinyl care, stone polishing, and concrete cleaning require different methods. We confirm the treatment after reviewing your property.</p><h3>How do I get a quote?</h3><p style={{lineHeight:1.8}}>Call (631) 532-7534 or send your property details through the contact form. Final scope, availability, and pricing are confirmed for each request.</p></section>
<div className="actions" style={{marginTop:30}}><a className="button" href="tel:+16315327534">Call (631) 532-7534</a><Link className="quiet" href={`/contact?area=${encodeURIComponent(label)}`}>Request a quote</Link></div>
</main>;
}
