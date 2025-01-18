/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, //fix dnd lib
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
