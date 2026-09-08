import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Muhammad-Haider", // Do NOT include assetPrefix
  images: {
    unoptimized: true,
  },
};

export default nextConfig;