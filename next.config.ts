import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Optimize for Bun runtime
  experimental: {
    // Bun works well with these settings
  },
};

export default nextConfig;
