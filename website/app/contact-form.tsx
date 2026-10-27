import { publicSiteEnabled } from "./launch-config";
import QuoteForm from "./quote-form-client";
export default function ContactForm({services,initialService="",initialLocation=""}:{services:string[];initialService?:string;initialLocation?:string}){
 const deliveryReady=Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL && process.env.CONTACT_TO_EMAIL && (!publicSiteEnabled || (process.env.TURNSTILE_SITE_KEY && process.env.TURNSTILE_SECRET_KEY)));
 return <QuoteForm services={services} initialService={initialService} initialLocation={initialLocation} deliveryReady={deliveryReady} captchaSiteKey={publicSiteEnabled && deliveryReady ? process.env.TURNSTILE_SITE_KEY : undefined}/>;
}
