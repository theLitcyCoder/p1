import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Get to know Djenic Photography, the approach behind the camera, and the belief that the most meaningful images feel like real life.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <>
    <section className="page-hero page-hero-small"><p className="eyebrow">THE PERSON BEHIND THE CAMERA</p><h1>More than a picture.<br /><em>A feeling.</em></h1><p>Thoughtful photography, grounded in connection.</p></section>
    <section className="about-layout section-pad"><div className="about-image"><Image src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=85" alt="Portrait in warm natural light, used as a temporary photographer profile image" fill sizes="(max-width: 800px) 100vw, 45vw" /></div><div className="about-copy"><p className="eyebrow">HELLO, I&apos;M DJENIC</p><h2>I believe the little things are often <em>the big things.</em></h2><p>Some moments arrive with a plan. Others unfold when nobody is looking. I want to make photographs that honour both — honest, considered images that bring you back to the way it all felt.</p><p>This space is where the story of Djenic Photography will grow. A little more about my journey, my favourite kinds of sessions and what it&apos;s like to work together will be added here soon.</p><Link href="/contact" className="underlined-link">Start a conversation ↗</Link></div></section>
    <section className="values-strip"><div><span className="eyebrow">01</span><h3>Be present</h3><p>Space to be yourself, without pressure to perform.</p></div><div><span className="eyebrow">02</span><h3>Find the feeling</h3><p>Images that hold onto connection, not just a pose.</p></div><div><span className="eyebrow">03</span><h3>Keep it honest</h3><p>Thoughtful photographs that still feel like you.</p></div></section>
  </>;
}
