#!/bin/sh

ENV_FILE=/app/dist/client/env.js

echo "window._env_ = {" > "$ENV_FILE"

# Pick up all VITE_ prefixed env vars passed to the container
for var in $(env | grep '^VITE_' | sort); do
  key=$(echo "$var" | cut -d'=' -f1)
  value=$(echo "$var" | cut -d'=' -f2-)
  echo "  $key: \"$value\"," >> "$ENV_FILE"
done

echo "};" >> "$ENV_FILE"

echo "✅ Runtime env.js generated:"
cat "$ENV_FILE"