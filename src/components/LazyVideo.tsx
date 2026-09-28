"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  poster: string;
  className?: string;
}

/**
 * Self-hosted video that never downloads a byte until the section scrolls
 * into view: the <video> only gets a `src` once IntersectionObserver fires,
 * and preload="none" keeps it from fetching before that.
 */
export function LazyVideo({ src, poster, className }: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {inView ? (
        <video
          src={src}
          poster={poster}
          controls
          preload="none"
          playsInline
          className="h-full w-full rounded-tag object-cover"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt="" className="h-full w-full rounded-tag object-cover" />
      )}
    </div>
  );
}
