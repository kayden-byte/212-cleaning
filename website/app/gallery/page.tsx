import type { Metadata } from "next";
import Link from "next/link";
import { requireSignIn } from "../auth-access";
import { Breadcrumbs, QuoteCTA } from "../design-components";
export const metadata:Metadata={title:"Gallery",description:"212 Maintenance cleaning project gallery.",alternates:{canonical:"/gallery"}};
export default async function Gallery(){await requireSignIn();return <><div className="wrap section"><Breadcrumbs items={[{label:"Gallery"}]}/><div className="page-intro"><p className="eyebrow">OUR WORK</p><h1>A fresh look.<br/><span>From the floor up.</span></h1><p className="intro">Carpet, tile, stone, vinyl, and concrete care for homes and businesses.</p></div><section className="gallery-empty"><svg width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="2"/><path d="m3 17 5-5 4 4 4-6 5 7"/></svg><h2>Project photos coming soon.</h2><p>We’re preparing our gallery. Have a floor cleaning project in mind? Tell us about your space.</p><Link className="button" href="/contact">Discuss your project</Link></section></div><QuoteCTA/></>;}
