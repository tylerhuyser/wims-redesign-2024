import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["react-pannellum-next"],
  images: {
    loader: 'custom',
    loaderFile: './netlifyImageLoader.js',
  },
};

export default nextConfig;
