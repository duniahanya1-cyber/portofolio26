import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Wajib untuk ekspor static HTML di GitHub Pages
  basePath: "/portofolio26", // Menyesuaikan sub-folder repository GitHub
  assetPrefix: "/portofolio26/",
  images: {
    unoptimized: true, // Wajib agar gambar di folder public tetap bisa dimuat
  },
  devIndicators: false,
};

export default nextConfig;