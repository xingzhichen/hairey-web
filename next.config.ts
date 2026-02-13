/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用独立构建模式，适配容器化部署
  output: 'standalone',
  // 开启SSR（Next.js默认启用）
  reactStrictMode: true,
  // 配置静态资源前缀 (CDN/GCS)
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_HOST || undefined,
  // 配置 next/image 允许的域名
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/hairey-web/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // 配置环境变量（可选）
  env: {
    NEXT_PUBLIC_GOOGLE_PROJECT_ID: process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID,
    NEXT_PUBLIC_ASSET_HOST: process.env.NEXT_PUBLIC_ASSET_HOST,
  },
}

module.exports = nextConfig