import type { Metadata } from "next";
import Link from "next/link";
import { requireSignIn } from "../auth-access";
import { regions } from "../area-data";
import { Breadcrumbs, QuoteCTA, Arrow } from "../design-components";
export const metadata:Metadata={title:"Cleaning Service Areas | NYC & Long Island",description:"Find residential and commercial cleaning in Manhattan, Brooklyn, Queens, the Bronx, and Long Island. Explore local areas and request a quote.",alternates:{canonical:"/service-areas"}};
export default async function Areas(){await requireSignIn();return <><section className="section wrap"><Breadcrumbs items={[{label:"Service areas"}]}/><div className="page-intro"><p className="eyebrow">FIND YOUR NEIGHBORHOOD</p><h1>City to island.<br/><span>Care for your space.</span></h1><p className="intro">Choose your location to explore neighborhoods, towns, and cleaning services. We confirm availability for your address when you get in touch.</p></div><div className="region-grid region-grid-large">{regions.map((r,i)=><Link key={r.slug} href={"/service-areas/"+r.slug}><span className="number">0{i+1}</span><h2>{r.name}</h2><p>{r.slug==="long-island"?"Explore towns and communities across Nassau and Suffolk.":"Explore neighborhoods and floor cleaning services."}</p><span className="card-link">Find your area <Arrow/></span></Link>)}</div></section><QuoteCTA/></>;}
