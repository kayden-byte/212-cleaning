import type { Metadata } from "next";
import Link from "next/link";
import { requireSignIn } from "../auth-access";
import { services } from "../services";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore 212 Maintenance commercial cleaning, carpet cleaning, floor care, post-construction cleaning, and stone polishing services.",
};

export default async function ServicesPage() {
  await requireSignIn();
  return <main className="wrap section">
    <Link className="back" href="/">← Home</Link>
    <div className="section-heading" style={{ marginTop: 40 }}>
      <div><p className="eyebrow">OUR SERVICES</p><h1>Care for every<br /><em>commercial space.</em></h1></div>
      <p>Explore cleaning and maintenance for your property. Choose a service to see what’s included and discuss a plan for your space.</p>
    </div>
    <div className="service-grid">
      {services.map((service, index) => <Link className="service-card" key={service.slug} href={`/services/${service.slug}`}>
        <span className="number">0{index + 1}</span>
        <h2 style={{ fontSize: 26, letterSpacing: "-.5px", marginTop: 20 }}>{service.title}</h2>
        <p>{service.description}</p>
        {service.floorTypes && <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8, listStyle: "disc" }}>{service.floorTypes.map(type => <li key={type}>{type}</li>)}</ul>}
        <span className="card-link">View service details ↗</span>
      </Link>)}
    </div>
    <div className="notice" style={{ marginTop: 40 }}>
      Need help choosing? Call <a className="quiet" href="tel:+16315327534">(631) 532-7534</a> or <Link className="quiet" href="/contact">contact us</Link> to discuss your property.
    </div>
  </main>;
}
