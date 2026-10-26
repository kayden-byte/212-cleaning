"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { regions } from "./area-data";
export default function SiteNavigation({account}:{account:React.ReactNode}){
 const dropdown=useRef<HTMLDetailsElement>(null);
 const pathname=usePathname();
 useEffect(()=>{
  const close=(event:PointerEvent)=>{if(dropdown.current&&!dropdown.current.contains(event.target as Node))dropdown.current.open=false;};
  const escape=(event:KeyboardEvent)=>{if(event.key==="Escape"&&dropdown.current?.open){dropdown.current.open=false;dropdown.current.querySelector("summary")?.focus();}};
  document.addEventListener("pointerdown",close);document.addEventListener("keydown",escape);
  return()=>{document.removeEventListener("pointerdown",close);document.removeEventListener("keydown",escape);};
 },[]);
 return <nav className="links" aria-label="Main navigation"><Link href="/services" aria-current={pathname.startsWith("/services")?"page":undefined}>Services</Link><details ref={dropdown} className="area-dropdown"><summary>Service areas</summary><div className="area-dropdown-menu" onClick={()=>{if(dropdown.current)dropdown.current.open=false;}}><Link href="/service-areas">All service areas</Link>{regions.map(r=><Link key={r.slug} href={"/service-areas/"+r.slug}>{r.name}</Link>)}</div></details><Link href="/#approach">Our approach</Link><Link className="nav-quote" href="/contact" aria-current={pathname==="/contact"?"page":undefined}>Request a quote</Link>{account}</nav>;
}
