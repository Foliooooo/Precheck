import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plain static files: served by Caddy, no Node process needed.
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
