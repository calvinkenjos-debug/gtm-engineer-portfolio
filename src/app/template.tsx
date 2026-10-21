"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

// Re-mounts on every navigation (unlike layout.tsx), so each page fades in.
// Opacity only: a transform here would break position: fixed/sticky descendants (Nav).
export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
