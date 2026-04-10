# ─── Stage 1: Build ─────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy all source files
COPY . .

# Build both client and server bundles
RUN npm run build
# Outputs:
#   dist/client/  ← static assets + index.html
#   dist/server/  ← entry-server.js (SSR)


# ─── Stage 2: Production ────────────────────────────────────────
FROM node:20-alpine AS production

WORKDIR /app

# Copy only production dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy built output from builder
COPY --from=builder /app/dist ./dist

# Copy the Express SSR server
COPY server.js ./

# Copy env generation script
COPY scripts/env.sh ./scripts/env.sh
RUN chmod +x ./scripts/env.sh

EXPOSE 5173

# ✅ Run env.sh first to generate env.js, then start the Node server
CMD ["sh", "-c", "sh ./scripts/env.sh && node server.js"]