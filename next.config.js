// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // تنظیمات تصاویر
  images: {
    unoptimized: true,
    domains: [
      "raw.githubusercontent.com",
      "fusion.naxel.ir",
      "api-ehsan-gpt4.vercel.app",
      "insta-ehsan.vercel.app",
      "ehsanjs.ir",
      "naxel.ir",
      "nexzo.ir",
    ],
    formats: ["image/webp", "image/avif"],
  },

  // تنظیمات هدرها برای سئو
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
