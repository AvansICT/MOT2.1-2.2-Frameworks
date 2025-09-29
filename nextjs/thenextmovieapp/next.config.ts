import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/:path*', // Koa draait op poort 4000
      },
    ];
  },

};

export default nextConfig;
