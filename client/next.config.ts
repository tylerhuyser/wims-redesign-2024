import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    transpilePackages: ["react-pannellum-next"],
  },
};

export default nextConfig;
