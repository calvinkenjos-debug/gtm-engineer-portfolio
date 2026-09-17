import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site-config";
import { ToolLogo } from "@/components/ToolLogo";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mesh-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-[1200px] px-6 pt-16 pb-24 md:pt-20 md:pb-32">
        <span className="inline-flex items-center gap-2 rounded-pill border border-border bg-surface px-3 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="mono-tag text-ink-secondary">Open for Q1 engagements</span>
        </span>

        <h1 className="mt-6 max-w-[46ch] balance text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
          I build the <span className="text-accent">GTM systems</span> early-stage teams need before they hire a
          full RevOps function.
        </h1>

        <p className="mt-6 max-w-[52ch] text-base text-ink-secondary md:text-lg">
          If your CRM is lying, routing is broken, or outbound runs by hand, I fix the system, not the symptom.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={siteConfig.bookCallUrl}
            className="inline-flex items-center gap-2 rounded-button bg-ink px-5 py-3 text-sm font-medium text-canvas transition-colors hover:bg-accent"
          >
            {siteConfig.ctaLabel}
            <ArrowUpRight size={16} weight="bold" />
          </a>
          <a
            href="#proof"
            className="inline-flex items-center px-1 py-3 text-sm font-medium text-ink underline decoration-border-strong decoration-1 underline-offset-4 transition-colors hover:decoration-accent"
          >
            See the systems
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <div className="glass-panel flex w-full max-w-[220px] flex-col gap-2 rounded-card p-4">
            <span className="mono-tag text-ink-faint">Routing SLA</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-medium text-ink">5 min</span>
              <span className="text-xs text-accent">on target</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-canvas">
              <div className="h-full w-[92%] rounded-full bg-accent" />
            </div>
          </div>

          <div className="glass-panel flex w-full max-w-[240px] items-center gap-3 rounded-card p-4">
            <div className="rounded-tag bg-surface p-1.5">
              <ToolLogo name="Clay" slug="clay" size={22} />
            </div>
            <div>
              <p className="text-sm font-medium text-ink">Waterfall enrichment</p>
              <p className="mono-tag text-ink-faint">4 providers, first field wins</p>
            </div>
          </div>

          <div className="glass-panel flex w-full max-w-[200px] flex-col gap-1.5 rounded-card p-4">
            <span className="mono-tag text-ink-faint">Pipeline hygiene</span>
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium text-ink">98%</span>
              <span className="text-xs text-ink-secondary">fields complete</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}