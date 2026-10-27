import { publicSiteEnabled } from "./launch-config";
import QuoteForm from "./quote-form-client";
export default function ContactForm({services,initialService="",initialLocation=""}:{services:string[];initialService?:string;initialLocation?:string}){
 const siteKey=process.env.TURNSTILE_SITE_KEY?.trim();
 const secretKey=process.env.TURNSTILE_SECRET_KEY?.trim();
 const keyFormat=/^[A-Za-z0-9_-]{20,100}$/;
 const turnstileReady=Boolean(siteKey && secretKey && keyFormat.test(siteKey) && keyFormat.test(secretKey));
 const deliveryReady=Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL && process.env.CONTACT_TO_EMAIL && (!publicSiteEnabled || turnstileReady));
 return <QuoteForm services={services} initialService={initialService} initialLocation={initialLocation} deliveryReady={deliveryReady} captchaSiteKey={publicSiteEnabled && deliveryReady ? siteKey : undefined}/>;
}
