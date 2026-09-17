import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/Reveal";

export function Cta() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-ink py-20 text-dark-text md:py-28">
      <div className="mesh-glow-dark pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-[720px] px-6 text-center">
        <Reveal>
          <h2 className="balance text-3xl font-medium tracking-tight md:text-4xl">
            If you can name the symptom, I can find the system underneath it.
          </h2>
          <p className="mx-auto mt-4 max-w-[48ch] text-base text-dark-text-secondary">
            Start with an audit if you want proof first, or book a call if you already know what needs fixing.
          </p>
          <div className="mt-8">
            <a
              href={siteConfig.bookCallUrl}
              className="inline-flex items-center gap-2 rounded-button bg-accent px-6 py-3 text-sm font-medium text-accent-on transition-colors hover:bg-accent-hover"
            >
              {siteConfig.ctaLabel}
              <ArrowUpRight size={16} weight="bold" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}