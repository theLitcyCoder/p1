import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Photography Portfolio",
  description: "Explore selected portrait, couple and celebration photography from Djenic Photography. Discover a thoughtful, natural approach to telling your story.",
  alternates: { canonical: "/portfolio" },
};

const photos = [
  ["photo-1534528741775-53994a69daeb", "Portraits", "A little more you", "Editorial portrait in natural light"],
  ["photo-1519741497674-611481863552", "Celebrations", "A day to remember", "Outdoor wedding celebration"],
  ["photo-1511285560929-80b456fea0bc", "Couples", "Just the two of us", "Couple sharing a joyful moment"],
  ["photo-1523438885200-e635ba2c371e", "Celebrations", "All in the details", "Intimate wedding detail"],
  ["photo-1529636798458-92182e662485", "Couples", "Close to you", "Couple portrait outdoors"],
  ["photo-1511895426328-dc8714191300", "Family", "Our kind of forever", "Family spending time together"],
  ["photo-1508214751196-bcfd4ca60f91", "Portraits", "In your own light", "Relaxed personal portrait"],
  ["photo-1469334031218-e382a71b716b", "Portraits", "A moment of calm", "Fashion-inspired portrait"],
  ["photo-1519167758481-83f550bb49b3", "Celebrations", "Together, always", "Wedding reception atmosphere"],
];

export default function PortfolioPage() {
  return <>
    <section className="page-hero"><p className="eyebrow">A COLLECTION OF MOMENTS</p><h1>Little moments.<br /><em>Lasting stories.</em></h1><p>A selection of frames made to hold onto the feeling.</p></section>
    <section className="portfolio-section section-pad"><div className="portfolio-note"><span className="eyebrow">THE PORTFOLIO</span><p>These are sample images for layout and development. They will be replaced with Djenic&apos;s own work before launch.</p></div><div className="portfolio-grid">{photos.map(([id, category, title, alt], i) => <article className={`portfolio-card portfolio-card-${(i % 3) + 1}`} key={id}><div className="portfolio-image"><Image src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=82`} alt={alt} fill sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw" /></div><div className="portfolio-caption"><div><span className="work-category">{category}</span><h2>{title}</h2></div><span aria-hidden="true">↗</span></div></article>)}</div></section>
    <section className="simple-cta"><h2>Imagine your story here.</h2><p>Let&apos;s plan a session that feels like you.</p><Link href="/contact" className="button button-dark">Enquire about a shoot ↗</Link></section>
  </>;
}
