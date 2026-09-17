// Single source of truth for identity, contact links, and site metadata.
// Replace every PLACEHOLDER value before launch.

export const siteConfig = {
  name: "[Your Name]",
  role: "Fractional GTM Engineer",
  shortBio:
    "I build the GTM systems early-stage teams need before they can justify hiring a full RevOps function.",
  siteUrl: "https://example.com", // PLACEHOLDER: your production domain
  email: "hello@example.com", // PLACEHOLDER
  bookCallUrl: "https://cal.com/your-handle/gtm-audit", // PLACEHOLDER: Calendly/Cal.com link
  linkedinUrl: "https://linkedin.com/in/your-handle", // PLACEHOLDER
  location: "Remote", // PLACEHOLDER: e.g. "Remote (US/EU hours)"
  ctaLabel: "Book an audit",
} as const;

export type SiteConfig = typeof siteConfig;