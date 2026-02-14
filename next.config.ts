/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用独立构建模式，适配容器化部署
  output: "standalone",
  // 开启SSR（Next.js默认启用）
  reactStrictMode: true,
  // 配置静态资源前缀 (CDN/GCS)
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_HOST || undefined,
  async headers() {
    return [
      // 静态资源
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // SSR 页面
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=60, stale-while-revalidate=300",
          },
        ],
      },
    ];
  },
  // 配置 next/image 允许的域名
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
         {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.hairey.net',
        pathname: '/**',
      },
    ],
  },
  // 允许跨域开发访问
  experimental: {
    allowedDevOrigins: ['localhost:3000', '192.168.3.16:3000'],
  },
  // 配置环境变量（可选）
  env: {
    NEXT_PUBLIC_GOOGLE_PROJECT_ID: process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID,
    NEXT_PUBLIC_ASSET_HOST: process.env.NEXT_PUBLIC_ASSET_HOST,
  },
};

module.exports = nextConfig;
