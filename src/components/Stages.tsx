"use client";

import { motion, useReducedMotion } from "motion/react";
import { stages } from "@/content/stages";
import { Reveal } from "@/components/Reveal";

export function Stages() {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="max-w-[64ch]">
            <span className="mono-tag text-accent">Whoever&apos;s reading this, one of these is you</span>
            <h2 className="mt-3 max-w-[26ch] balance text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
              The work looks different at every stage.
            </h2>
            <p className="mt-4 max-w-[60ch] text-base text-ink-secondary md:text-lg">
              What actually needs building depends less on your industry than on how many people are touching the
              funnel and whether anyone agreed on what happens next.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-14 hidden md:block">
          <div className="absolute left-0 right-0 top-1.5 h-px bg-border" aria-hidden />
          <motion.div
            className="absolute left-0 right-0 top-1.5 h-px origin-left bg-accent"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden
          />
          <div className="grid grid-cols-4 gap-6">
            {stages.map((stage, i) => (
              <div key={stage.range} className="relative">
                <motion.span
                  className="absolute left-0 top-0 block h-3 w-3 -translate-y-1/2 rounded-full border-2 border-canvas bg-accent"
                  initial={reduce ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.15, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-5 md:mt-2 md:grid-cols-4 md:gap-6">
          {stages.map((stage, i) => (
            <Reveal key={stage.range} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-card border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_12px_32px_-16px_rgba(20,21,26,0.18)]">
                <span className="w-fit rounded-pill bg-accent-soft px-2.5 py-1 mono-tag text-accent">
                  {stage.range}
                </span>
                <h3 className="mt-3 text-lg font-medium leading-snug text-ink">{stage.name}</h3>

                <div className="mt-4 flex-1 space-y-4">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-ink-faint">What&apos;s true</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">{stage.reality}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-[11px] font-medium uppercase tracking-wide text-ink-faint">What gets built</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink">{stage.build}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
