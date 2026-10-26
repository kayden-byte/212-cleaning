import type { Metadata } from "next";
import { requireSignIn } from "../auth-access";
import { services } from "../services";
import { Breadcrumbs, ServiceCard, QuoteCTA } from "../design-components";
export const metadata:Metadata={title:"Floor & Carpet Cleaning Services | NYC & Long Island",description:"Explore carpet, carpet tile, VCT, LVT, tile and grout, stone, concrete, and post-construction cleaning for homes and businesses.",alternates:{canonical:"/services"}};
export default async function Services(){await requireSignIn();return <><section className="wrap section"><Breadcrumbs items={[{label:"Services"}]}/><div className="page-intro"><p className="eyebrow">SURFACE BY SURFACE</p><h1>The right care.<br/><span>For every floor.</span></h1><p className="intro">Residential and commercial floor cleaning in NYC and Long Island. Start with your flooring and explore the care it needs.</p></div><div className="service-grid">{services.map((s,i)=><ServiceCard key={s.slug} service={s} index={i}/>)}</div></section><QuoteCTA/></>;}
