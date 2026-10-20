import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const featured = [
  { title: "The quiet in-between", category: "Portraits", image: "photo-1534528741775-53994a69daeb", alt: "Editorial portrait of a woman in soft natural light" },
  { title: "A day to remember", category: "Celebrations", image: "photo-1519741497674-611481863552", alt: "An intimate wedding celebration outdoors" },
  { title: "Just the two of us", category: "Couples", image: "photo-1511285560929-80b456fea0bc", alt: "A couple sharing a joyful moment together" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Image className="hero-image" src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=2200&q=85" alt="Couple embracing in warm evening light" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">PHOTOGRAPHY WITH FEELING</p>
          <h1>Stories worth<br /><em>remembering.</em></h1>
          <p className="hero-copy">For the people, the little details, and the moments you wish you could keep forever.</p>
          <div className="hero-actions">
            <Link href="/portfolio" className="button button-light">Explore the work <span aria-hidden="true">↗</span></Link>
            <Link href="/contact" className="text-link text-link-light">Plan your session <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="hero-caption"><span>01 / 03</span><span>REAL MOMENTS, ARTFULLY TOLD</span></div>
      </section>

      <section className="intro-section section-pad">
        <Reveal className="intro-label"><span className="eyebrow">A LITTLE ABOUT THE APPROACH</span><span className="tiny-mark">✳</span></Reveal>
        <Reveal className="intro-copy">
          <h2>Not just how it looked.<br /><em>How it felt.</em></h2>
          <p>Photography is about more than a beautiful image. It&apos;s the nervous laugh, the hand you reach for, the people who make a moment yours. Djenic Photography is here to preserve the feeling, not just the frame.</p>
          <Link href="/about" className="underlined-link">Get to know Djenic <span aria-hidden="true">↗</span></Link>
        </Reveal>
      </section>

      <section className="work-section section-pad">
        <div className="section-heading">
          <div><p className="eyebrow">A FEW FAVOURITES</p><h2>Selected <em>stories.</em></h2></div>
          <Link href="/portfolio" className="underlined-link">View the portfolio <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="work-grid">
          {featured.map((item, index) => (
             <Reveal
              key={item.title}
              className={`work-card work-card-${index + 1}`}
              delay={index * 130}
              >
            <Link href="/portfolio" className="work-card-link">
              <div className="work-image-wrap">
                <Image 
                src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=1000&q=82`} 
                alt={item.alt} 
                fill 
                sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" 
              />
            </div>
              
              <div className="work-card-meta"><div><span className="work-category">{item.category}</span><h3>{item.title}</h3></div><span className="round-arrow" aria-hidden="true">↗</span></div>
            </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-mark" aria-hidden="true">“</div>
        <blockquote>The best photographs feel like being there all over again.</blockquote>
        <span className="eyebrow">THE HEART OF DJENIC PHOTOGRAPHY</span>
      </section>

      <section className="services-preview section-pad">
        <Reveal className="services-preview-copy"><p className="eyebrow">MADE AROUND YOU</p><h2>Every story deserves<br /><em>its own frame.</em></h2><p>From the milestones you plan for to the ordinary days that become extraordinary, let&apos;s make something you&apos;ll want to return to.</p><Link href="/services" className="button button-dark">Explore services <span aria-hidden="true">↗</span></Link></Reveal>
        <Reveal className="services-preview-image"><Image src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=85" alt="Photographer capturing an intimate wedding moment" fill sizes="(max-width: 800px) 100vw, 50vw" /></Reveal>
      </section>

      <section className="closing-cta"><p className="eyebrow">YOUR STORY STARTS HERE</p><h2>Have a moment<br />in mind?</h2><p>Tell me what you&apos;re dreaming up. We&apos;ll take it from there.</p><Link href="/contact" className="button button-light">Let&apos;s talk <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
