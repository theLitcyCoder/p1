import type { Metadata, Viewport } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.djenicphotography.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Djenic Photography | Stories Worth Remembering",
    template: "%s | Djenic Photography",
  },
  description: "Thoughtful, people-focused photography that captures the moments, connections and stories worth remembering. Explore Djenic Photography's portfolio and enquire about a session.",
  applicationName: "Djenic Photography",
  openGraph: {
    type: "website",
    siteName: "Djenic Photography",
    title: "Djenic Photography | Stories Worth Remembering",
    description: "Thoughtful photography for the people, emotions and moments that matter.",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Djenic Photography | Stories Worth Remembering",
    description: "Thoughtful photography for the people, emotions and moments that matter.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f2ed",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
