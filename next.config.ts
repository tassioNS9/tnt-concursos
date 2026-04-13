import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "aws-1-us-east-1.pooler.supabase.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
    ],
  },
  serverExternalPackages: ["@prisma/client", "prisma"],
  outputFileTracingIncludes: {
    "/api/**/*": ["../src/app/generated/prisma/**/*"],
  },
};

export default nextConfig;
