import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://precheck.folioo.tech"),
  title: "PreCheck · Checklists that prove the work got done",
  description:
    "Say what the job is. PreCheck writes the steps, asks for a photo only where it matters, and keeps time-stamped proof you can share. Free for 7 days.",
  openGraph: {
    title: "PreCheck",
    description: "Checklists that prove the work got done. Powered by Folioo.",
    url: "https://precheck.folioo.tech",
    siteName: "PreCheck",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f11" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
