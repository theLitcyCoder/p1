import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-name">DJENIC</span>
            <span className="brand-subtitle">PHOTOGRAPHY</span>
          </Link>
          <p>Honest moments. Thoughtfully captured.</p>
        </div>
        <div className="footer-links">
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About Djenic</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <span className="eyebrow">HAVE SOMETHING IN MIND?</span>
          <Link href="/contact" className="footer-email">Let&apos;s create something meaningful ↗</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Djenic Photography</span>
        <span>Made with care, for moments that matter.</span>
      </div>
    </footer>
  );
}
