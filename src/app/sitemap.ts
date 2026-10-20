import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.djenicphotography.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/portfolio", "/services", "/contact"];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/portfolio" || route === "/services" ? 0.8 : 0.6,
  }));
}
