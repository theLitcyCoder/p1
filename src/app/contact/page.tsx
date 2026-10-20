import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Photography Enquiries",
  description: "Contact Djenic Photography to discuss a portrait session, couple shoot, family photos or a special event. Share your ideas and start planning your session.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <>
    <section className="page-hero"><p className="eyebrow">LET&apos;S MAKE SOMETHING MEANINGFUL</p><h1>Tell me what<br /><em>you&apos;re dreaming up.</em></h1><p>Share a little about your idea and we can take it from there.</p></section>
    <section className="contact-layout section-pad"><div className="contact-copy"><p className="eyebrow">THE FIRST HELLO</p><h2>Good things start with a <em>conversation.</em></h2><p>Whether you know exactly what you want or only have the beginning of an idea, I&apos;d love to hear about it.</p><div className="contact-detail"><span className="eyebrow">EMAIL</span><p>Replace with Djenic&apos;s business email before launch</p></div><div className="contact-detail"><span className="eyebrow">LOCATION</span><p>Service area to be confirmed</p></div><p className="form-note">This is a design-stage contact form. Connect it to a form service or backend and add the real contact details before publishing.</p></div><form className="contact-form" action="mailto:hello@djenicphotography.com" method="post" encType="text/plain"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" placeholder="What should I call you?" required /><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required /><label htmlFor="session">What are you dreaming up?</label><select id="session" name="session" defaultValue="" required><option value="" disabled>Select a session type</option><option>Portrait session</option><option>Couples / engagement</option><option>Family / milestones</option><option>Wedding / celebration</option><option>Other idea</option></select><label htmlFor="date">Ideal date or timeframe <span>(optional)</span></label><input id="date" name="date" placeholder="e.g. early December" /><label htmlFor="message">Tell me a little more</label><textarea id="message" name="message" rows={5} placeholder="The idea, the feeling, the details…" required /><button type="submit" className="button button-dark">Prepare enquiry ↗</button><p className="form-note">The button opens your email application where supported; it does not submit to a server yet.</p></form></section>
  </>;
}
