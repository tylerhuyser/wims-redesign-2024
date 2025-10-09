import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // @ts-ignore
    transpilePackages: ["react-pannellum-next"],
  } as any,
};

export default nextConfig;
