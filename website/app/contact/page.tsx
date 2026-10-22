import { requireSignIn } from "../auth-access";
import Link from "next/link";
import ContactForm from "../contact-form";
import { services } from "../services";

export const metadata = { title: "Request a quote" };

export default async function Contact() {
  await requireSignIn();
  return (
    <main className="wrap section detail">
      <Link className="back" href="/">← Home</Link>
      <p className="eyebrow" style={{ marginTop: 45 }}>LET’S PLAN YOUR CLEAN</p>
      <h1>A fresh start<br />starts here.</h1>
      <p className="intro">
        Tell us what your commercial space needs. Call or email to discuss
        your property and request a cleaning quote.
      </p>
      <div className="actions" style={{ marginTop: 30 }}>
        <a className="button" href="tel:+16315327534">
          Call (631) 532-7534 ↗
        </a>
        <a className="quiet" style={{ overflowWrap: "anywhere" }}
          href="mailto:kayden@212carpet.com?subject=Commercial%20cleaning%20quote">
          Email kayden@212carpet.com ↗
        </a>
      </div>
      <section style={{ marginTop: 45 }} aria-labelledby="contact-form-heading">
        <h2 id="contact-form-heading" style={{ marginBottom: 25 }}>Contact us</h2>
        <ContactForm services={services.map(s => s.title)} />
      </section>
    </main>
  );
}
