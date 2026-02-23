#!/bin/bash
set -e

PROJECT_ID="xingzhichen"
POOL_NAME="github-actions-pool"
PROVIDER_NAME="github-provider"
REPO="xingzhichen/hairey-web"  # 你的 GitHub 仓库
SA_EMAIL="github-actions-deployer@${PROJECT_ID}.iam.gserviceaccount.com"

echo "开始配置 Workload Identity Federation..."

# 1. 创建 Workload Identity Pool
if ! gcloud iam workload-identity-pools describe $POOL_NAME --project=$PROJECT_ID --location="global" > /dev/null 2>&1; then
    echo "创建 Identity Pool: $POOL_NAME..."
    gcloud iam workload-identity-pools create $POOL_NAME \
        --project=$PROJECT_ID \
        --location="global" \
        --display-name="GitHub Actions Pool"
else
    echo "Identity Pool $POOL_NAME 已存在。"
fi

# 获取 Pool ID
POOL_ID=$(gcloud iam workload-identity-pools describe $POOL_NAME --project=$PROJECT_ID --location="global" --format="value(name)")
echo "Pool ID: $POOL_ID"

# 2. 创建 Workload Identity Provider
if ! gcloud iam workload-identity-pools providers describe $PROVIDER_NAME --project=$PROJECT_ID --location="global" --workload-identity-pool=$POOL_NAME > /dev/null 2>&1; then
    echo "创建 Identity Provider: $PROVIDER_NAME..."
    gcloud iam workload-identity-pools providers create-oidc $PROVIDER_NAME \
        --project=$PROJECT_ID \
        --location="global" \
        --workload-identity-pool=$POOL_NAME \
        --display-name="GitHub Actions Provider" \
        --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository" \
        --issuer-uri="https://token.actions.githubusercontent.com" \
        --attribute-condition="attribute.repository == '$REPO'"
else
    echo "Identity Provider $PROVIDER_NAME 已存在。"
fi

# 获取 Provider 完整资源名称
PROVIDER_RESOURCE_NAME=$(gcloud iam workload-identity-pools providers describe $PROVIDER_NAME --project=$PROJECT_ID --location="global" --workload-identity-pool=$POOL_NAME --format="value(name)")

echo "Provider Resource Name: $PROVIDER_RESOURCE_NAME"

# 3. 允许 GitHub 仓库使用该 Service Account
echo "绑定 Service Account 权限..."
gcloud iam service-accounts add-iam-policy-binding "$SA_EMAIL" \
  --project="$PROJECT_ID" \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/${POOL_ID}/attribute.repository/${REPO}"

echo ""
echo "========================================================"
echo "配置完成！"
echo "Workload Identity Provider: $PROVIDER_RESOURCE_NAME"
echo "Service Account: $SA_EMAIL"
echo "========================================================"
