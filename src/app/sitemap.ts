import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.siteUrl}/grid-room`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // digital-products stays out: it's noindex until it has real content.
  ];
}