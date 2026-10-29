"use client";
import { useEffect, useRef, useState, useId } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { regions, neighborhoodsByRegion } from "./area-data";
import { services } from "./services";
export default function SiteNavigation({account}:{account:React.ReactNode}){
 const navigation=useRef<HTMLElement>(null);
 const pathname=usePathname();
 const [activeRegion,setActiveRegion]=useState<string|null>(null);
 const areaId=useId();
 const closeMenus=()=>navigation.current?.querySelectorAll<HTMLDetailsElement>("details[open]").forEach(menu=>{menu.open=false;});
 useEffect(()=>{
  const close=(event:PointerEvent)=>{if(navigation.current&&!navigation.current.contains(event.target as Node))closeMenus();};
  const escape=(event:KeyboardEvent)=>{if(event.key==="Escape"){const open=navigation.current?.querySelector<HTMLDetailsElement>("details[open]");closeMenus();open?.querySelector("summary")?.focus();}};
  document.addEventListener("pointerdown",close);document.addEventListener("keydown",escape);
  return()=>{document.removeEventListener("pointerdown",close);document.removeEventListener("keydown",escape);};
 },[]);
 useEffect(()=>{closeMenus();},[pathname]);
 const menu=(label:string,items:{href:string;name:string}[])=><details className="area-dropdown services-dropdown" onToggle={event=>{const current=event.currentTarget;if(current.open)navigation.current?.querySelectorAll<HTMLDetailsElement>("details").forEach(other=>{if(other!==current)other.open=false;});}}><summary>{label}</summary><div className="area-dropdown-menu" onClick={closeMenus}>{items.map(item=><Link key={item.href} href={item.href} aria-current={pathname===item.href?"page":undefined}>{item.name}</Link>)}</div></details>;
 return <nav ref={navigation} className="links" aria-label="Main navigation"><Link href="/about" onClick={closeMenus} aria-current={pathname==="/about"?"page":undefined}>About us</Link><details className="area-dropdown town-dropdown" onToggle={event=>{const current=event.currentTarget;if(current.open)navigation.current?.querySelectorAll<HTMLDetailsElement>("details").forEach(other=>{if(other!==current)other.open=false;});else{setActiveRegion(null);}}}><summary>Service areas</summary><div className="area-dropdown-menu town-dropdown-menu">{regions.map(region=>{const expanded=activeRegion===region.slug;const areas=neighborhoodsByRegion[region.slug]||[];return <div className="town-region" key={region.slug}><button type="button" className="town-region-button" aria-expanded={expanded} aria-controls={areaId+"-"+region.slug} onClick={()=>{setActiveRegion(expanded?null:region.slug);}}>{region.name}<span aria-hidden="true">{expanded?"−":"+"}</span></button>{expanded&&<div className="town-region-panel" id={areaId+"-"+region.slug}><p className="town-count" role="status">{areas.length} {areas.length===1?"area":"areas"}</p><div className="town-menu-links">{areas.map(area=><Link key={area.slug} href={"/service-areas/"+region.slug+"/"+area.slug} onClick={closeMenus} aria-current={pathname==="/service-areas/"+region.slug+"/"+area.slug?"page":undefined}>{area.name}</Link>)}</div></div>}</div>;})}</div></details>{menu("Services",services.map(s=>({href:"/services/"+s.slug,name:s.title})))}<Link href="/gallery" onClick={closeMenus} aria-current={pathname==="/gallery"?"page":undefined}>Gallery</Link><Link href="/contact" onClick={closeMenus} aria-current={pathname==="/contact"?"page":undefined}>Contact us</Link><Link className="nav-quote" href="/contact#contact-form" onClick={closeMenus}>Request a Free Quote</Link>{account}</nav>;
}
