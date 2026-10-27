"use client";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
type Turnstile={render:(node:HTMLElement,options:Record<string,unknown>)=>string;remove:(id:string)=>void};
export default function QuoteVerification({siteKey,resetKey}:{siteKey:string;resetKey:number}){
 const container=useRef<HTMLDivElement>(null);const [ready,setReady]=useState(false);const [error,setError]=useState(false);
 useEffect(()=>{const api=(window as Window & {turnstile?:Turnstile}).turnstile;if(!ready||!api||!container.current)return;setError(false);let id:string|undefined;try{id=api.render(container.current,{sitekey:siteKey,action:"quote",theme:"dark",size:"flexible","error-callback":()=>setError(true)});}catch{setError(true);}return()=>{if(id){try{api.remove(id);}catch{/* A failed widget must not break the page. */}}};},[ready,siteKey,resetKey]);
 return <div style={{marginTop:18}}><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" onReady={()=>setReady(true)} onError={()=>setError(true)}/><div ref={container}/>{error&&<p role="alert" className="form-note">Verification could not load. Refresh or call (212) 537-9219.</p>}</div>;
}
