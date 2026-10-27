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
 const [areaQuery,setAreaQuery]=useState("");
 const areaId=useId();
 const townSearch=useRef<HTMLInputElement>(null);
 useEffect(()=>{if(activeRegion)townSearch.current?.focus();},[activeRegion]);
 const closeMenus=()=>navigation.current?.querySelectorAll<HTMLDetailsElement>("details[open]").forEach(menu=>{menu.open=false;});
 useEffect(()=>{
  const close=(event:PointerEvent)=>{if(navigation.current&&!navigation.current.contains(event.target as Node))closeMenus();};
  const escape=(event:KeyboardEvent)=>{if(event.key==="Escape"){const open=navigation.current?.querySelector<HTMLDetailsElement>("details[open]");closeMenus();open?.querySelector("summary")?.focus();}};
  document.addEventListener("pointerdown",close);document.addEventListener("keydown",escape);
  return()=>{document.removeEventListener("pointerdown",close);document.removeEventListener("keydown",escape);};
 },[]);
 useEffect(()=>{closeMenus();},[pathname]);
 const menu=(label:string,items:{href:string;name:string}[])=><details className="area-dropdown" onToggle={event=>{const current=event.currentTarget;if(current.open)navigation.current?.querySelectorAll<HTMLDetailsElement>("details").forEach(other=>{if(other!==current)other.open=false;});}}><summary>{label}</summary><div className="area-dropdown-menu" onClick={closeMenus}>{items.map(item=><Link key={item.href} href={item.href} aria-current={pathname===item.href?"page":undefined}>{item.name}</Link>)}</div></details>;
 return <nav ref={navigation} className="links" aria-label="Main navigation">{menu("Services",services.map(s=>({href:"/services/"+s.slug,name:s.title})))}<details className="area-dropdown town-dropdown" onToggle={event=>{const current=event.currentTarget;if(current.open)navigation.current?.querySelectorAll<HTMLDetailsElement>("details").forEach(other=>{if(other!==current)other.open=false;});else{setActiveRegion(null);setAreaQuery("");}}}><summary>Service areas</summary><div className="area-dropdown-menu town-dropdown-menu">{regions.map(region=>{const expanded=activeRegion===region.slug;const areas=neighborhoodsByRegion[region.slug]||[];const shown=areas.filter(area=>area.name.toLowerCase().includes(areaQuery.trim().toLowerCase()));return <div className="town-region" key={region.slug}><button type="button" className="town-region-button" aria-expanded={expanded} aria-controls={areaId+"-"+region.slug} onClick={()=>{setActiveRegion(expanded?null:region.slug);setAreaQuery("");}}>{region.name}<span aria-hidden="true">{expanded?"−":"+"}</span></button>{expanded&&<div className="town-region-panel" id={areaId+"-"+region.slug}><label className="town-search">Find an area in {region.name}<input ref={townSearch} type="search" value={areaQuery} onChange={event=>setAreaQuery(event.target.value)} placeholder="Search towns or neighborhoods…"/></label><p className="town-count" role="status">{shown.length} {shown.length===1?"area":"areas"}</p><div className="town-menu-links">{shown.map(area=><Link key={area.slug} href={"/service-areas/"+region.slug+"/"+area.slug} onClick={closeMenus} aria-current={pathname==="/service-areas/"+region.slug+"/"+area.slug?"page":undefined}>{area.name}</Link>)}</div>{shown.length===0&&<p className="town-empty">No matches. Try another name or <a href="tel:+12125379219">call us</a>.</p>}</div>}</div>;})}</div></details><Link href="/about" onClick={closeMenus} aria-current={pathname==="/about"?"page":undefined}>About us</Link><Link href="/gallery" onClick={closeMenus} aria-current={pathname==="/gallery"?"page":undefined}>Gallery</Link><Link href="/contact" onClick={closeMenus} aria-current={pathname==="/contact"?"page":undefined}>Contact us</Link><Link className="nav-quote" href="/contact#contact-form" onClick={closeMenus}>Request a quote</Link>{account}</nav>;
}
