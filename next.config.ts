/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用独立构建模式，适配容器化部署
  output: 'standalone',
  // 开启SSR（Next.js默认启用）
  reactStrictMode: true,
  // 配置环境变量（可选）
  env: {
    NEXT_PUBLIC_GOOGLE_PROJECT_ID: process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID,
  },
}

module.exports = nextConfig