
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link
          href="/"
          className="brand"
          aria-label="Djenic Photography home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-name">DJENIC</span>
          <span className="brand-subtitle">PHOTOGRAPHY</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}

          <Link href="/contact" className="nav-cta">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>

        <div className="mobile-nav">
          <button
            type="button"
            className={`mobile-menu-toggle ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          {menuOpen && (
            <>
              <button
                type="button"
                className="mobile-menu-backdrop"
                aria-label="Close navigation menu"
                onClick={() => setMenuOpen(false)}
              />

              <nav
                id="mobile-navigation"
                className="mobile-menu-panel"
                aria-label="Mobile navigation"
              >
                <p className="eyebrow">EXPLORE DJENIC</p>

                {links.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="mobile-menu-link"
                    aria-current={pathname === link.href ? "page" : undefined}
                    style={{ animationDelay: `${index * 55}ms` }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                    <span className="mobile-menu-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                ))}

                <Link
                  href="/contact"
                  className="button button-dark mobile-menu-cta"
                  onClick={() => setMenuOpen(false)}
                >
                  Enquire about a shoot <span aria-hidden="true">↗</span>
                </Link>

                <p className="mobile-menu-caption">
                  REAL MOMENTS, ARTFULLY TOLD
                </p>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
