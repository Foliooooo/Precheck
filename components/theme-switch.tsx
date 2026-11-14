"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useId, useRef, useSyncExternalStore, type KeyboardEvent } from "react";

type Theme = "system" | "light" | "dark";
const KEY = "precheck-theme";
const EVENT = "precheck-theme";
const OPTIONS: { value: Theme; label: string; Icon: typeof Sun }[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "Match system", Icon: Monitor },
];

function read(): Theme {
  try {
    const t = localStorage.getItem(KEY);
    return t === "light" || t === "dark" ? t : "system";
  } catch {
    return "system";
  }
}

function apply(t: Theme) {
  const root = document.documentElement;
  if (t === "system") delete root.dataset.theme;
  else root.dataset.theme = t;
  try {
    if (t === "system") localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, t);
  } catch {
    /* storage unavailable: the choice lasts for this visit */
  }
}

function subscribe(onChange: () => void) {
  // A change in another tab: follow it here too.
  const fromOtherTab = (e: StorageEvent) => {
    if (e.key !== KEY) return;
    const t = read();
    if (t === "system") delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = t;
    onChange();
  };
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", fromOtherTab);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", fromOtherTab);
  };
}

/** Light / Dark / Match system. Remembered in this browser; every switcher on the page stays in sync. */
export function ThemeSwitch({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, read, () => "system" as Theme);
  const id = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const choose = (t: Theme) => {
    apply(t);
    window.dispatchEvent(new Event(EVENT));
  };

  const onKey = (e: KeyboardEvent, i: number) => {
    const n = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    const to = e.key === "Home" ? 0 : e.key === "End" ? OPTIONS.length - 1 : n ? (i + n + OPTIONS.length) % OPTIONS.length : -1;
    if (to < 0) return;
    e.preventDefault();
    choose(OPTIONS[to].value);
    refs.current[to]?.focus();
  };

  return (
    <div className={`theme ${className}`} role="radiogroup" aria-label="Theme">
      {OPTIONS.map(({ value, label, Icon }, i) => {
        const on = theme === value;
        return (
          <button
            key={value}
            ref={(el) => { refs.current[i] = el; }}
            type="button"
            role="radio"
            aria-checked={on}
            aria-label={label}
            title={label}
            tabIndex={on ? 0 : -1}
            onClick={() => choose(value)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {on && (
              <motion.span
                className="knob"
                layoutId={`theme-knob-${id}`}
                transition={{ duration: 0.3, ease: [0.075, 0.82, 0.165, 1] }}
              />
            )}
            <Icon size={16} strokeWidth={1.9} aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
