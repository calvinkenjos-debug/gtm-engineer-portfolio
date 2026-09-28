import type { Metadata } from "next";
import { grids } from "@/content/grids";
import { Reveal } from "@/components/Reveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LazyVideo } from "@/components/LazyVideo";

export const metadata: Metadata = {
  title: "The Grid Room",
  description:
    "Six Bitscale grids — real GTM engineering systems, from account foundation to enterprise governance — built in the open and walked through on video.",
};

export default function GridRoomPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="border-b border-border py-20 md:py-28">
          <div className="mx-auto max-w-[1200px] px-6">
            <Reveal>
              <span className="mono-tag text-accent">The Grid Room</span>
              <h1 className="mt-3 max-w-[32ch] text-3xl font-medium tracking-tight text-ink md:text-4xl">
                Six systems, one architecture, built to hold up under a prospect&apos;s scrutiny.
              </h1>
              <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-ink-secondary">
                These are built in <span className="text-ink">Bitscale</span> — not Clay. Each
                grid below is a real GTM workflow: a shared data foundation feeding five
                segment-specific systems, from early-stage outbound up through enterprise
                governance. Video walkthroughs of each build are in progress; this page tracks
                the actual logic — columns, prompts, routing rules — behind every one.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="space-y-6">
              {grids.map((grid, i) => (
                <Reveal key={grid.id} delay={i * 0.05}>
                  <div className="glass-panel rounded-card p-6 md:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="mono-tag text-ink-faint">{grid.gridNumber}</span>
                        <span className="text-[11px] font-medium uppercase tracking-wide text-ink-faint">
                          {grid.stageLabel}
                        </span>
                      </div>
                    </div>

                    <h2 className="mt-3 text-xl font-medium tracking-tight text-ink md:text-2xl">
                      {grid.name}
                    </h2>
                    <p className="mt-2 text-base font-medium leading-snug text-ink">
                      {grid.mainPurpose}
                    </p>
                    <p className="mt-4 max-w-[80ch] text-sm leading-relaxed text-ink-secondary">
                      {grid.description}
                    </p>

                    {grid.videoSlug && (
                      <LazyVideo
                        className="mt-5 aspect-video w-full max-w-[720px] overflow-hidden rounded-tag border border-border"
                        src={`/videos/${grid.videoSlug}.mp4`}
                        poster={`/videos/${grid.videoSlug}.jpg`}
                      />
                    )}

                    <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
                      {grid.columns.map((col) => (
                        <span
                          key={col}
                          className="mono-tag rounded-tag border border-border bg-canvas px-2 py-1 text-ink-secondary"
                        >
                          {col}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
