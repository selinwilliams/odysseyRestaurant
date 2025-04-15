FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies using npm with legacy-peer-deps
RUN npm install --legacy-peer-deps

# Explicitly install PostCSS dependencies globally to ensure they're available
RUN npm install -g postcss postcss-import postcss-flexbugs-fixes postcss-preset-env

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Create a temporary package.json without type: module for the build
RUN cp package.json package.json.bak && \
    cat package.json | grep -v '"type": "module"' > temp.json && \
    mv temp.json package.json

# Create a postcss.config.js file in CommonJS format (since we removed type: module)
RUN echo 'module.exports = { plugins: { "postcss-import": {}, "postcss-flexbugs-fixes": {}, "postcss-preset-env": { autoprefixer: { flexbox: "no-2009" }, stage: 3, features: { "custom-properties": false } } } };' > postcss.config.js

# Explicitly install PostCSS dependencies locally in the project
RUN npm install --save-dev postcss postcss-import postcss-flexbugs-fixes postcss-preset-env

# Disable telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

# Build the application
RUN npm run build

# Restore original package.json
RUN mv package.json.bak package.json

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/dist ./dist || true
COPY --from=builder /app/build ./build || true
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Copy Next.js standalone files if they exist
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./ || true
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static || true

# Install wget for healthchecks
RUN apk add --no-cache wget

USER nextjs

EXPOSE 3001

ENV PORT=3001
ENV HOSTNAME="0.0.0.0"

# Determine the correct start command based on what's available
CMD if [ -f "server.js" ]; then \
      node server.js; \
    elif [ -f "dist/server.js" ]; then \
      node dist/server.js; \
    else \
      node dist/index.js; \
    fi