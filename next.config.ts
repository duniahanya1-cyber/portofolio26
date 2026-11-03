import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portofolio26",
  assetPrefix: "/portofolio26/",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;