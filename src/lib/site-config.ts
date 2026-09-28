// Single source of truth for identity, contact links, and site metadata.
// Replace every PLACEHOLDER value before launch.

export const siteConfig = {
  name: "Joseph Kenston Calvin",
  role: "Fractional GTM Engineer",
  shortBio:
    "I build the GTM systems early-stage teams need before they can justify hiring a full RevOps function.",
  siteUrl: "https://gtm-engineer-portfolio-jade.vercel.app",
  email: "calvinkenjos@gmail.com",
  bookCallUrl: "https://cal.com/joseph-calvin-pzdzk2", // main profile; per-service links live in services.ts
  linkedinUrl: "https://www.linkedin.com/in/kenstoncalvin",
  location: "India",
  ctaLabel: "Book an audit",
} as const;

export type SiteConfig = typeof siteConfig;