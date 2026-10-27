import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
const headingFont=Manrope({subsets:["latin"],variable:"--font-heading",display:"swap"});
const bodyFont=DM_Sans({subsets:["latin"],variable:"--font-body",display:"swap"});
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { authConfigured } from "./auth-config";
import { regions } from "./area-data";
import { Phone } from "./design-components";
import SiteNavigation from "./site-navigation";
import { siteUrl, indexingEnabled } from "./seo";
export const metadata: Metadata = {
 metadataBase:new URL(siteUrl),title:{default:"212 Maintenance | NYC, Long Island & New Jersey Floor Cleaning",template:"%s | 212 Maintenance"},
 description:"Residential and commercial carpet cleaning, tile and grout cleaning, stone polishing, vinyl floor care, and concrete cleaning in NYC, Long Island, and New Jersey.",
 robots:{index:indexingEnabled,follow:true},
 openGraph:{type:"website",siteName:"212 Maintenance",locale:"en_US",title:"212 Maintenance | NYC, Long Island & New Jersey Floor Cleaning",description:"Floor care for homes and businesses. Explore our services and request a cleaning quote."},
 twitter:{card:"summary",title:"212 Maintenance",description:"Residential and commercial cleaning across NYC, Long Island, and New Jersey."},
};
export default function Layout({children}:{children:React.ReactNode}){
return <html lang="en"><body className={`${headingFont.variable} ${bodyFont.variable}`}><AuthProvider>
<a className="skip-link" href="#main-content">Skip to content</a>
<div className="topbar"><div className="wrap topbar-inner"><span>RESIDENTIAL & COMMERCIAL</span><span>NEW YORK CITY + LONG ISLAND + NEW JERSEY</span></div></div>
<header className="site-header"><div className="wrap"><div className="brand-row"><Link className="brand" href="/" aria-label="212 Maintenance home"><Image src="/212-maintenance.webp" alt="" width={1427} height={1102} unoptimized priority/><span className="brand-name">212 <span>Maintenance</span></span></Link><a className="header-phone" href="tel:+12125379219"><span className="header-call-label">LET’S TALK ABOUT YOUR SPACE</span><span><Phone/> (212) 537-9219</span></a></div>
<SiteNavigation account={null}/></div></header>
<main id="main-content">{children}</main>
<footer><div className="wrap footer-grid"><div><Link className="footer-brand" href="/">212 <span>Maintenance</span></Link><p>Clean floors. Better first impressions.<br/>Floor care for homes and businesses.</p><a className="footer-phone" href="tel:+12125379219">(212) 537-9219</a><address style={{fontStyle:"normal",fontSize:14,lineHeight:1.8,marginTop:22}}><span style={{display:"block",fontSize:10,fontWeight:700,letterSpacing:1.2,color:"var(--muted)",marginBottom:7}}>COMPANY ADDRESS</span><a href="https://www.google.com/maps/search/?api=1&amp;query=2200%20Marcus%20Ave%2C%20New%20Hyde%20Park%2C%20NY%2011042">2200 Marcus Ave<br/>New Hyde Park, NY 11042</a></address></div><div><h2>Explore</h2><Link href="/services">Cleaning services</Link><Link href="/service-areas">Service areas</Link><Link href="/about">About us</Link><Link href="/gallery">Gallery</Link><Link href="/contact">Contact us</Link><Link href="/contact#contact-form">Request a quote</Link></div><div><h2>Where we work</h2>{regions.map(r=><Link key={r.slug} href={"/service-areas/"+r.slug}>{r.name}</Link>)}</div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} 212 Maintenance</span><Link href="/terms" style={{textDecoration:"underline",textUnderlineOffset:4}}>Company Terms</Link><span>Residential & commercial · NYC, Long Island & New Jersey</span></div></footer>
<div className="mobile-actions"><a href="tel:+12125379219"><Phone/> Call now</a><Link href="/contact">Request a quote</Link></div>
</AuthProvider></body></html>;
}
function AuthProvider({children}:{children:React.ReactNode}){return authConfigured()?<ClerkProvider signInUrl="/sign-in" signUpUrl="/sign-up" signInFallbackRedirectUrl="/" signUpFallbackRedirectUrl="/">{children}</ClerkProvider>:<>{children}</>;}
