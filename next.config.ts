import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: "/doc",
      destination: "/doc/index.html",
    },
    {
      source: "/docs/:path*",
      destination: "/docs/:path*",
    },
  ],
};

export default nextConfig;
