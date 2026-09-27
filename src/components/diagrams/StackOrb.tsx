"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ToolLogo } from "@/components/ToolLogo";

interface OrbitTool {
  name: string;
  slug: string;
  angle: number;
}

// Two tools per stack layer (see src/content/stack.ts): the primary tool
// sits on the inner ring, its secondary/backup on the outer ring, both at
// the same angle so the pairing reads visually, not just by proximity.
const INNER_RING: OrbitTool[] = [
  { name: "HubSpot", slug: "hubspot", angle: 0 },
  { name: "Clay", slug: "clay", angle: 51.4 },
  { name: "Smartlead", slug: "smartlead", angle: 102.8 },
  { name: "n8n", slug: "n8n", angle: 154.3 },
  { name: "RB2B", slug: "rb2b", angle: 205.7 },
  { name: "Claude", slug: "claude", angle: 257.1 },
  { name: "BigQuery", slug: "bigquery", angle: 308.6 },
];

const OUTER_RING: OrbitTool[] = [
  { name: "Salesforce", slug: "salesforce", angle: 0 },
  { name: "Apollo", slug: "apollo", angle: 51.4 },
  { name: "Instantly", slug: "instantly", angle: 102.8 },
  { name: "Zapier", slug: "zapier", angle: 154.3 },
  { name: "LinkedIn", slug: "linkedin", angle: 205.7 },
  { name: "OpenAI", slug: "openai", angle: 257.1 },
  { name: "Snowflake", slug: "snowflake", angle: 308.6 },
];

const CENTER = 50;
const INNER_RADIUS = 24;
const OUTER_RADIUS = 42;

function pointFor(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

// Radial counterpart to WaterfallDiagram: instead of one specific pipeline,
// this shows the general claim from the section heading — every layer of the
// stack wired into a single hub, anchored on the person doing the wiring —
// using the same real tool logos as the list on the left, not placeholders.
export function StackOrb() {
  const containerId = useId();
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[400px]">
      <svg viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
        <circle cx={CENTER} cy={CENTER} r={INNER_RADIUS} fill="none" stroke="var(--color-border)" strokeWidth="0.3" strokeDasharray="1 2" />
        <circle cx={CENTER} cy={CENTER} r={OUTER_RADIUS} fill="none" stroke="var(--color-border)" strokeWidth="0.3" strokeDasharray="1 2" />

        {INNER_RING.map((tool, i) => {
          const inner = pointFor(tool.angle, INNER_RADIUS);
          const outer = pointFor(OUTER_RING[i].angle, OUTER_RADIUS);
          const hubGradientId = `${containerId}-hub-${tool.slug}`;
          const ringGradientId = `${containerId}-ring-${tool.slug}`;

          return (
            <g key={tool.slug}>
              <line x1={CENTER} y1={CENTER} x2={inner.x} y2={inner.y} stroke="var(--color-border)" strokeWidth="0.4" />
              <line x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y} stroke="var(--color-border)" strokeWidth="0.35" />

              {!reduce && (
                <>
                  <motion.line
                    x1={CENTER}
                    y1={CENTER}
                    x2={inner.x}
                    y2={inner.y}
                    stroke={`url(#${hubGradientId})`}
                    strokeWidth="0.8"
                    strokeDasharray="5 26"
                    initial={{ strokeDashoffset: 31 }}
                    animate={{ strokeDashoffset: -31 }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: "linear", delay: tool.angle / 120 }}
                  />
                  <motion.line
                    x1={inner.x}
                    y1={inner.y}
                    x2={outer.x}
                    y2={outer.y}
                    stroke={`url(#${ringGradientId})`}
                    strokeWidth="0.7"
                    strokeDasharray="4 20"
                    initial={{ strokeDashoffset: 24 }}
                    animate={{ strokeDashoffset: -24 }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.4 + tool.angle / 120 }}
                  />
                </>
              )}

              <defs>
                <linearGradient id={hubGradientId} gradientUnits="userSpaceOnUse" x1={CENTER} y1={CENTER} x2={inner.x} y2={inner.y}>
                  <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0" />
                  <stop offset="55%" stopColor="var(--color-accent)" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id={ringGradientId} gradientUnits="userSpaceOnUse" x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y}>
                  <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0" />
                  <stop offset="55%" stopColor="var(--color-accent)" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                </linearGradient>
              </defs>
            </g>
          );
        })}
      </svg>

      {/* Center hub: the person wiring it all together, not a generic icon. */}
      <div className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-surface bg-surface shadow-[0_2px_10px_rgba(20,21,26,0.15)]">
        {!reduce && (
          <motion.span
            className="absolute inset-0 -z-10 rounded-full border-2 border-accent/40"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.6, repeat: Infinity }}
            aria-hidden
          />
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/portrait.webp"
          alt="Joseph Kenston Calvin"
          className="h-full w-full rounded-full object-cover object-[50%_20%]"
        />
      </div>

      {INNER_RING.map((tool, i) => {
        const { x, y } = pointFor(tool.angle, INNER_RADIUS);
        return (
          <motion.div
            key={tool.slug}
            initial={reduce ? false : { opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ left: `${x}%`, top: `${y}%` }}
            className="absolute z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-tag border border-border bg-surface shadow-[0_1px_2px_rgba(20,21,26,0.06)]"
          >
            <ToolLogo name={tool.name} slug={tool.slug} size={22} />
          </motion.div>
        );
      })}

      {OUTER_RING.map((tool, i) => {
        const { x, y } = pointFor(tool.angle, OUTER_RADIUS);
        return (
          <motion.div
            key={tool.slug}
            initial={reduce ? false : { opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ left: `${x}%`, top: `${y}%` }}
            className="absolute z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-tag border border-border bg-surface/90 shadow-[0_1px_2px_rgba(20,21,26,0.06)]"
          >
            <ToolLogo name={tool.name} slug={tool.slug} size={17} />
          </motion.div>
        );
      })}
    </div>
  );
}
