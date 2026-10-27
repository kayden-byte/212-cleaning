"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { regions } from "./area-data";
import { services } from "./services";
export default function SiteNavigation({account}:{account:React.ReactNode}){
 const navigation=useRef<HTMLElement>(null);
 const pathname=usePathname();
 const closeMenus=()=>navigation.current?.querySelectorAll<HTMLDetailsElement>("details[open]").forEach(menu=>{menu.open=false;});
 useEffect(()=>{
  const close=(event:PointerEvent)=>{if(navigation.current&&!navigation.current.contains(event.target as Node))closeMenus();};
  const escape=(event:KeyboardEvent)=>{if(event.key==="Escape"){const open=navigation.current?.querySelector<HTMLDetailsElement>("details[open]");closeMenus();open?.querySelector("summary")?.focus();}};
  document.addEventListener("pointerdown",close);document.addEventListener("keydown",escape);
  return()=>{document.removeEventListener("pointerdown",close);document.removeEventListener("keydown",escape);};
 },[]);
 useEffect(()=>{closeMenus();},[pathname]);
 const menu=(label:string,items:{href:string;name:string}[])=><details className="area-dropdown" onToggle={event=>{const current=event.currentTarget;if(current.open)navigation.current?.querySelectorAll<HTMLDetailsElement>("details").forEach(other=>{if(other!==current)other.open=false;});}}><summary>{label}</summary><div className="area-dropdown-menu" onClick={closeMenus}>{items.map(item=><Link key={item.href} href={item.href} aria-current={pathname===item.href?"page":undefined}>{item.name}</Link>)}</div></details>;
 return <nav ref={navigation} className="links" aria-label="Main navigation">{menu("Services",services.map(s=>({href:"/services/"+s.slug,name:s.title})))}{menu("Service areas",[{href:"/service-areas",name:"All service areas"},...regions.map(r=>({href:"/service-areas/"+r.slug,name:r.name}))])}<Link href="/#approach" onClick={closeMenus}>Our approach</Link><Link className="nav-quote" href="/contact" onClick={closeMenus} aria-current={pathname==="/contact"?"page":undefined}>Request a quote</Link>{account}</nav>;
}
