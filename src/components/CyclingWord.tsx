"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

interface CyclingWordProps {
  words: string[];
  interval?: number;
  className?: string;
}

// Hero-headline word swap: crossfades through a short list of phrases and
// draws a loose, hand-inked underline beneath each one (currentColor, so it
// picks up whatever accent class is passed in) instead of switching fonts —
// the "handwriting" is in the stroke, not the typeface.
export function CyclingWord({ words, interval = 2600, className }: CyclingWordProps) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || words.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [reduce, words.length, interval]);

  const word = words[reduce ? 0 : index];

  return (
    <span className={`relative inline-grid ${className ?? ""}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={word}
          className="relative col-start-1 row-start-1 inline-block"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {word}
          <svg
            className="pointer-events-none absolute left-0 top-full -mt-1.5 h-2 w-full overflow-visible"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
            aria-hidden
          >
            <motion.path
              d="M1 6 C 20 2, 40 9, 62 4 S 86 8, 99 3"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
