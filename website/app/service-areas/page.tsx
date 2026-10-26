import type { Metadata } from "next";
import Link from "next/link";
import { requireSignIn } from "../auth-access";
import { services } from "../services";

export const metadata: Metadata = {
  title: "Cleaning Service Areas | NYC & Long Island",
  description: "212 Maintenance provides residential and commercial cleaning and floor care in Manhattan, Brooklyn, Queens, the Bronx, and Long Island. Call (631) 532-7534.",
  alternates: { canonical: "/service-areas" },
};
const areas = [
  { slug: "manhattan", name: "Manhattan", copy: "Discuss cleaning for Manhattan apartments, offices, and managed properties. Let us know about building access, elevators, and preferred service times when requesting a quote." },
  { slug: "brooklyn", name: "Brooklyn", copy: "Request cleaning and floor care for Brooklyn homes, businesses, and shared building spaces. Tell us about the flooring, property size, and cleaning priorities." },
  { slug: "queens", name: "Queens", copy: "We serve residential and commercial properties in Queens. Share your neighborhood, surface types, and whether you need a one-time clean or ongoing floor care." },
  { slug: "bronx", name: "The Bronx", copy: "Contact us about cleaning for homes, businesses, and managed properties in the Bronx. We review access, surface condition, and the scope of work before confirming a plan." },
  { slug: "long-island", name: "Long Island", copy: "Discuss residential and commercial cleaning on Long Island. Provide your town and property details so we can confirm availability and the right cleaning approach." },
];
export default async function ServiceAreas() {
  await requireSignIn();
  return <main className="wrap section detail">
    <Link className="back" href="/">← Home</Link>
    <p className="eyebrow" style={{marginTop:40}}>WHERE WE WORK</p>
    <h1>Cleaning across NYC & Long Island.</h1>
    <p className="intro">Residential and commercial cleaning and floor care in Manhattan, Brooklyn, Queens, the Bronx, and Long Island. Call to confirm availability for your address.</p>
    <div className="areas">{areas.map(area => <a key={area.slug} href={`/service-areas/${area.slug}`}>{area.name}</a>)}</div>
    {areas.map(area => <section key={area.slug} id={area.slug} style={{marginTop:48,scrollMarginTop:30}}>
      <h2>{area.name} cleaning services</h2><p style={{lineHeight:1.8}}>{area.copy}</p>
      <Link className="quiet" href={`/service-areas/${area.slug}`}>Explore {area.name} cleaning</Link>
    </section>)}
    <section style={{marginTop:48}}><h2>Find the right service</h2><ul className="contact-list">{services.map(service => <li key={service.slug}><Link href={`/services/${service.slug}`}>{service.title}</Link></li>)}</ul></section>
    <div className="notice">Service availability, scheduling, and final scope are confirmed for each property.</div>
    <a className="button" href="tel:+16315327534">Call (631) 532-7534</a>
  </main>;
}
