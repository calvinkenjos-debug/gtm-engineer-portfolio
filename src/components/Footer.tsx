import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-border bg-ink py-10 text-dark-text">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm font-medium">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-dark-text-secondary">{siteConfig.role}, {siteConfig.location}</p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-dark-text-secondary">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-dark-text">
            {siteConfig.email}
          </a>
          <a href={siteConfig.linkedinUrl} className="hover:text-dark-text">
            LinkedIn
          </a>
          <span>© {year} {siteConfig.name}</span>
        </div>
      </div>
    </footer>
  );
}