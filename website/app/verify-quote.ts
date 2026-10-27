import "server-only";
import { siteUrl } from "./seo";
export async function verifyQuoteToken(token:FormDataEntryValue|null):Promise<boolean>{
 if(typeof token!=="string" || !token || token.length>2048 || !process.env.TURNSTILE_SECRET_KEY) return false;
 try {
  const response=await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({secret:process.env.TURNSTILE_SECRET_KEY,response:token}),signal:AbortSignal.timeout(10000)});
  if(!response.ok)return false;
  const result=await response.json();
  return result.success===true && result.action==="quote" && result.hostname===new URL(siteUrl).hostname;
 } catch { return false; }
}
