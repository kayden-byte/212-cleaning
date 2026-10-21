import Link from "next/link";

export const metadata = { title: "Request a quote" };

export default function Contact() {
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
      <h2 style={{ fontSize: 30, marginTop: 45 }}>What to have ready</h2>
      <ul className="contact-list">
        <li>Your business and contact information</li>
        <li>Property location and approximate square footage</li>
        <li>Cleaning services and priority areas</li>
        <li>Preferred schedule and cleaning frequency</li>
      </ul>
      <div className="notice">
        Use the phone or email link above to get in touch.
        Email opens in your email app; your message is sent only when you send it.
        Service availability and the final scope are confirmed after review.
      </div>
    </main>
  );
}
