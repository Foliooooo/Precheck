"use client";

import { useEffect, useState } from "react";

type Latest = { versionName: string; sizeBytes?: number };

/** "Version 1.0.0 · 5 MB · Android 8 or newer", read from the published build so it never goes stale. */
export function ApkInfo() {
  const [latest, setLatest] = useState<Latest | null>(null);
  useEffect(() => {
    let live = true;
    fetch("/download/latest.json", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((j: Latest | null) => { if (live && j?.versionName) setLatest(j); })
      .catch(() => {});
    return () => { live = false; };
  }, []);
  const size = latest?.sizeBytes ? ` · ${Math.max(1, Math.round(latest.sizeBytes / 1_048_576))} MB` : "";
  return (
    <p className="apk-info" aria-live="polite">
      {latest ? `Version ${latest.versionName}${size} · Android 8 or newer` : "Android 8 or newer"}
    </p>
  );
}
