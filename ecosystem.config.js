module.exports = {
  apps: [
    {
      // 进程名称（自定义）
      name: "next-ssr-app",
      // 构建后启动 Next.js SSR 服务的核心命令
      script: "./node_modules/next/dist/bin/next",
      // 启动参数：指定 start（构建后启动）
      args: "start",
      // 项目根目录（若配置文件不在根目录，需指定绝对路径）
      cwd: __dirname,
      // 环境变量（根据你的需求调整）
      env: {
        NODE_ENV: "production",
        // Next.js 服务端口（自定义）
        PORT: 3000,
        // 其他自定义环境变量（如接口相关）
        // API_BASE_URL: "https://api.example.com"
      },
      // 进程数（根据服务器核数调整，SSR 建议单实例，避免状态不一致）
      instances: 1,
      // 自动重启（进程崩溃时）
      autorestart: true,
      // 日志配置（方便排查问题）
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      out_file: "./logs/pm2-out.log", // 标准输出日志
      error_file: "./logs/pm2-error.log", // 错误日志
    },
  ],
};