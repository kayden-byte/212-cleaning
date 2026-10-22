import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { requireSignIn } from "../../auth-access";
import { services } from "../../services";
import { serviceCopy } from "../../service-copy";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return services.map(s => ({ slug: s.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) notFound();
  return { title: `${service.title} | NYC & Long Island`, description: service.description };
}
export default async function Service({ params }: Props) {
  await requireSignIn();
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) notFound();
  const copy = serviceCopy[slug];
  return <main className="wrap section detail">
    <Link className="back" href="/services">← All services</Link>
    <p className="eyebrow" style={{ marginTop: 45 }}>212 MAINTENANCE / COMMERCIAL PROPERTIES</p>
    <h1>{service.title}</h1>
    <p className="intro">{service.description}</p>
    <section style={{ marginTop: 35 }}>
      <h2 style={{ fontSize: 30 }}>{copy.heading}</h2>
      {copy.paragraphs.map(p => <p key={p} style={{ fontSize: 16, lineHeight: 1.8, marginTop: 20 }}>{p}</p>)}
    </section>
    {service.floorTypes && <section style={{ marginTop: 35 }}><h2 style={{ fontSize: 30 }}>Flooring types</h2><ul className="task-list">{service.floorTypes.map(type => <li key={type}>{type}</li>)}</ul></section>}
    <h2 style={{ fontSize: 30, marginTop: 45 }}>What to discuss for {service.title.toLowerCase()}</h2>
    <ul className="task-list">{service.tasks.map(task => <li key={task}>{task}</li>)}</ul>
    <section style={{ marginTop: 45 }}>
      <h2 style={{ fontSize: 30 }}>Common questions</h2>
      {copy.faqs.map(faq => <article key={faq.question} style={{ marginTop: 28 }}><h3>{faq.question}</h3><p style={{ lineHeight: 1.8 }}>{faq.answer}</p></article>)}
    </section>
    <div className="notice">Final scope, methods, timing, and availability are confirmed after reviewing your property. Specialty treatments and debris hauling must be discussed before scheduling.</div>
    <div className="actions"><Link className="button" href={"/contact?service=" + encodeURIComponent(service.title)}>Request a service quote ↗</Link><a className="quiet" href="tel:+16315327534">Call (631) 532-7534 ↗</a></div>
    <section style={{ marginTop: 45 }}><h2 style={{ fontSize: 30 }}>Explore related services</h2><ul className="contact-list">{services.filter(s => s.slug !== slug).map(s => <li key={s.slug}><Link className="quiet" href={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul></section>
  </main>;
}
