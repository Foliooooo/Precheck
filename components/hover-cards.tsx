"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export type HoverCardItem = { title: string; body: string; icon: string };

/**
 * Card grid with one shared highlight that glides to whichever card is under the pointer
 * (after Aceternity's Card Hover Effect). Flat: no shadows, only a soft fill and a ring.
 */
export function HoverCards({ items }: { items: HoverCardItem[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="hover-grid" onMouseLeave={() => setHovered(null)}>
      {items.map((item, i) => (
        <div key={item.title} className="hover-cell" onMouseEnter={() => setHovered(i)} onFocus={() => setHovered(i)}>
          <AnimatePresence>
            {hovered === i && (
              <motion.span
                className="hover-bg"
                layoutId="hover-bg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <div className={`hover-card ${hovered === i ? "on" : ""}`} tabIndex={0}>
            <span className="icon-pill">
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path d={item.icon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
