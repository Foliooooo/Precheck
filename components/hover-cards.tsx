"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";

export type HoverCardItem = { title: string; body: string; icon: ReactNode };

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
                animate={{ opacity: 1, transition: { duration: 0.3, ease: [0.075, 0.82, 0.165, 1] } }}
                exit={{ opacity: 0, transition: { duration: 0.3, ease: [0.075, 0.82, 0.165, 1] } }}
                transition={{ layout: { duration: 0.3, ease: [0.075, 0.82, 0.165, 1] } }}
              />
            )}
          </AnimatePresence>
          <div className={`hover-card ${hovered === i ? "on" : ""}`} tabIndex={0}>
            <span className="icon-pill">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
