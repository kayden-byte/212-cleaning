"use client";

import { useActionState } from "react";
import { sendContact } from "./contact-action";

export default function ContactForm({ services }: { services: string[] }) {
  const [state, action, pending] = useActionState(sendContact, { ok: false, message: "" });
  return <form action={action} className="contact-form">
    <div className="form-grid">
      <label>Your name *<input name="name" autoComplete="name" required maxLength={100} /></label>
      <label>Business name<input name="business" autoComplete="organization" maxLength={150} /></label>
      <label>Email address *<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      <label>Phone number<input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
      <label>Property location<input name="location" autoComplete="street-address" maxLength={250} /></label>
      <label>Service needed<select name="service"><option value="">Help me choose</option>{services.map(s => <option key={s}>{s}</option>)}</select></label>
    </div>
    <label>Tell us about your space *<textarea name="message" required minLength={10} maxLength={4000} rows={5} placeholder="Property size, flooring, cleaning needs, and preferred schedule…" /></label>
    <div className="form-trap" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <p className="form-note">We’ll use these details to respond to your inquiry. Please don’t include passwords, payment details, or other sensitive information.</p>
    <button className="button" type="submit" disabled={pending}>{pending ? "Sending…" : "Send inquiry ↗"}</button>
    <p role="status" aria-live="polite" className={state.ok ? "form-status success" : "form-status"}>{state.message}</p>
  </form>;
}
