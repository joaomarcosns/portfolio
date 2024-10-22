/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sa-east-1.graphassets.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
