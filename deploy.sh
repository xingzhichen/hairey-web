#!/bin/bash
pm2 stop all

pnpm install

pnpm run build

pm2 start ecosystem.config.js
