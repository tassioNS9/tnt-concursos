import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {},
  serverExternalPackages: ["@prisma/client", "prisma"],
  outputFileTracingIncludes: {
    "/api/**/*": ["../src/app/generated/prisma/**/*"],
  },
};

export default nextConfig;
