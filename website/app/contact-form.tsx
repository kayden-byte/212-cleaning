import QuoteForm from "./quote-form-client";
export default function ContactForm({services,initialService="",initialLocation=""}:{services:string[];initialService?:string;initialLocation?:string}){
 const deliveryReady=Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL);
 return <QuoteForm services={services} initialService={initialService} initialLocation={initialLocation} deliveryReady={deliveryReady}/>;
}
