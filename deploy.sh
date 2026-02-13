#!/bin/bash
set -e

# 配置参数（替换为你的信息）
PROJECT_ID="xingzhichen"
REGION="us-central1"  # 常用美国区域：us-central1(爱荷华)、us-east1(南卡罗来纳)、us-west1(俄勒冈)
SERVICE_NAME="hairey-web"

# 登录Google Cloud（如果未登录）
gcloud auth login

# 设置项目
gcloud config set project $PROJECT_ID

# 构建并部署到Cloud Run
gcloud run deploy $SERVICE_NAME \
  --source . \
  --region $REGION \
  --platform managed \
  --allow-unauthenticated \
  --memory 512Mi \
  --timeout 300s

# 输出部署后的访问地址
echo "部署完成！访问地址："
gcloud run services describe $SERVICE_NAME --region $REGION --format "value(status.url)"