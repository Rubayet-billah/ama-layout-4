/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "multisite-public.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
  },
};

export default nextConfig;
