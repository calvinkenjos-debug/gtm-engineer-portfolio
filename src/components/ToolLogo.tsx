"use client";

import { useState } from "react";
import logoManifest from "@/content/logo-manifest.json";

type Manifest = Record<string, { mark?: string; wordmark?: string }>;
const manifest = logoManifest as Manifest;

interface ToolLogoProps {
  name: string;
  slug: string;
  size?: number;
  className?: string;
}

// Renders a real fetched brand mark when one exists (see
// scripts/fetch-logos.mjs), falling back to a monogram chip for tools with
// no cached asset (e.g. Claygent) or if the image fails to load at runtime.
export function ToolLogo({ name, slug, size = 24, className }: ToolLogoProps) {
  const [failed, setFailed] = useState(false);
  const src = manifest[slug]?.mark;

  if (!src || failed) {
    return (
      <span
        className={`flex items-center justify-center rounded-tag bg-canvas font-mono text-[10px] font-medium text-ink-faint ${className ?? ""}`}
        style={{ width: size, height: size }}
        aria-hidden
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${name} logo`}
      width={size}
      height={size}
      className={`object-contain ${className ?? ""}`}
      style={{ width: size, height: size }}
      onError={() => setFailed(true)}
    />
  );
}