import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Photography Services",
  description: "Explore photography services from Djenic Photography, with sessions designed around your people, milestones and meaningful moments.",
  alternates: { canonical: "/services" },
};

const services = [
  { no: "01", title: "Portraits", text: "A little space to show up as yourself. Personal portraits, milestones, creative concepts and the chapters you want to remember.", image: "photo-1534528741775-53994a69daeb", alt: "Portrait photography in soft natural light" },
  { no: "02", title: "Couples & love stories", text: "For anniversaries, engagements, date-day adventures or simply celebrating the two of you as you are right now.", image: "photo-1511285560929-80b456fea0bc", alt: "Couple sharing a moment during a photoshoot" },
  { no: "03", title: "Celebrations & events", text: "The details, the happy tears, the people gathered close. Coverage for meaningful occasions and celebrations.", image: "photo-1519741497674-611481863552", alt: "Wedding celebration with guests outdoors" },
  { no: "04", title: "Family & milestones", text: "Photographs of your people, your seasons and the small things that will mean even more with time.", image: "photo-1511895426328-dc8714191300", alt: "Family spending time together outdoors" },
];

export default function ServicesPage() {
  return <>
    <section className="page-hero"><p className="eyebrow">WAYS WE CAN WORK TOGETHER</p><h1>Your people.<br /><em>Your story.</em></h1><p>Sessions shaped around the moments you want to keep.</p></section>
    <section className="services-list section-pad">{services.map((service, index) => <article className={`service-row ${index % 2 ? "service-row-reverse" : ""}`} key={service.no}><div className="service-photo"><Image src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=1200&q=85`} alt={service.alt} fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="service-copy"><span className="eyebrow">{service.no} / SERVICE</span><h2>{service.title}</h2><p>{service.text}</p><p className="service-note">Session details, packages and pricing will be added once confirmed.</p><Link href="/contact" className="underlined-link">Ask about this session ↗</Link></div></article>)}</section>
    <section className="simple-cta"><h2>Not sure what you need?</h2><p>Tell me a little about the moment you have in mind.</p><Link href="/contact" className="button button-dark">Let&apos;s talk ↗</Link></section>
  </>;
}
