"use client";

import { useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { CopySimple, Shuffle, ClipboardText, LinkBreak, HandTap, Plugs } from "@phosphor-icons/react/dist/ssr";
import { problems, type ProblemIcon } from "@/content/problems";
import { Reveal } from "@/components/Reveal";

const PROBLEM_ICONS: Record<ProblemIcon, typeof CopySimple> = {
  CopySimple,
  Shuffle,
  ClipboardText,
  LinkBreak,
  HandTap,
  Plugs,
};

export function Problems() {
  const [active, setActive] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const y = useSpring(mouseY, { stiffness: 300, damping: 30 });

  function handleMove(e: ReactMouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const activeProblem = active !== null ? problems[active] : null;
  const ActiveIcon = activeProblem ? PROBLEM_ICONS[activeProblem.icon] : null;

  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-[24ch] balance text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
              None of this is a tooling problem. It&apos;s a systems problem.
            </h2>
            <span className="inline-flex items-center gap-2 rounded-pill border border-border bg-surface px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="mono-tag text-ink-secondary">{problems.length} breakdowns, all mapped below</span>
            </span>
          </div>
        </Reveal>

        <div
          className="relative mt-10"
          onMouseMove={handleMove}
          onMouseLeave={() => setActive(null)}
        >
          <ul className="overflow-hidden rounded-card border border-border bg-surface">
            {problems.map((problem, i) => {
              const Icon = PROBLEM_ICONS[problem.icon];
              const isActive = active === i;
              return (
                <li
                  key={problem.code}
                  onMouseEnter={() => setActive(i)}
                  className={`flex items-center gap-4 border-b border-border px-5 py-4 transition-colors last:border-b-0 ${
                    isActive ? "bg-accent-soft" : ""
                  }`}
                >
                  <span className="mono-tag w-16 shrink-0 text-ink-faint">{problem.code}</span>
                  <Icon size={18} weight="bold" className={isActive ? "text-accent" : "text-ink-faint"} />
                  <span className={`text-sm font-medium ${isActive ? "text-ink" : "text-ink-secondary"}`}>
                    {problem.title}
                  </span>
                </li>
              );
            })}
          </ul>

          <AnimatePresence>
            {activeProblem && ActiveIcon && (
              <motion.div
                className="pointer-events-none absolute z-10 hidden w-64 -translate-x-1/2 -translate-y-[calc(100%+16px)] overflow-hidden rounded-card border border-border-strong bg-canvas shadow-lg md:block"
                style={{ left: x, top: y }}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.15 }}
              >
                {activeProblem.image ? (
                  <Image src={activeProblem.image} alt="" width={256} height={144} className="h-36 w-full object-cover" />
                ) : (
                  <div className="flex h-36 w-full items-center justify-center bg-accent-soft">
                    <ActiveIcon size={32} weight="bold" className="text-accent" />
                  </div>
                )}
                <p className="p-4 text-xs leading-relaxed text-ink-secondary">{activeProblem.body}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
