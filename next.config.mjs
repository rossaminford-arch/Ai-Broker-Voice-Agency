/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: { allowedOrigins: ["*"] }
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }]
  }
};
export default nextConfig;
