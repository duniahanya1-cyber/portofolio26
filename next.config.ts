import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portofolio26",
  assetPrefix: "/portofolio26", // Pastikan tanpa garis miring penutup (/) agar path absolut CSS/JS-nya valid
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;