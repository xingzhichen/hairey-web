#!/bin/bash
pnpm install

pnpm run build

pm2 start ecosystem.config.js
