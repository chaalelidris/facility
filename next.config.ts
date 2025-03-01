import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.smithstv.co.uk",
      },
      {
        protocol: "https",
        hostname: "shorturl.at",
      },
    ],
  },
};

export default nextConfig;
