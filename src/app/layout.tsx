import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} - ${siteConfig.role}`,
    template: `%s - ${siteConfig.name}`,
  },
  description:
    "Fractional GTM engineering, audits, and automation for early-stage B2B teams: cleaner CRM data, tighter lead routing, and outbound systems that don't run on manual work.",
  keywords: [
    "GTM engineer",
    "fractional GTM engineering",
    "revenue operations",
    "RevOps consultant",
    "lead routing",
    "CRM architecture",
    "data enrichment",
    "outbound automation",
    "GTM audit",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    title: `${siteConfig.name} - ${siteConfig.role}`,
    description:
      "I build the GTM systems early-stage teams need before they hire a full RevOps function.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.role}`,
    description:
      "I build the GTM systems early-stage teams need before they hire a full RevOps function.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.siteUrl}/#service`,
        name: `${siteConfig.name} GTM Engineering`,
        url: siteConfig.siteUrl,
        description:
          "Fractional GTM engineering, audits, and automation for early-stage B2B companies: lead routing, CRM architecture, data enrichment, and outbound systems.",
        areaServed: "Worldwide",
        provider: { "@id": `${siteConfig.siteUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.siteUrl}/#person`,
        name: siteConfig.name,
        jobTitle: siteConfig.role,
        url: siteConfig.siteUrl,
        email: siteConfig.email,
        sameAs: [siteConfig.linkedinUrl],
        worksFor: { "@id": `${siteConfig.siteUrl}/#service` },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.siteUrl}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-ink">{children}</body>
    </html>
  );
}