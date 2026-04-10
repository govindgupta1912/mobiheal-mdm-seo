// src/config/env.js
// This is the ONLY place to read env vars — works on both SSR and client

const getEnv = (key) => {
  // Server side — Node.js (SSR)
  if (typeof window === "undefined") {
    return process.env[key] ?? "";
  }

  // Client side — Browser
  if (window._env_ && window._env_[key] !== undefined) {
    return window._env_[key];
  }

  // Local dev fallback
  return import.meta.env[key] ?? "";
};

export const VITE_SITE_URL = getEnv("VITE_SITE_URL");
export const VITE_API_BASE_URL = getEnv("VITE_API_BASE_URL");
export const VITE_HELP_URL = getEnv("VITE_HELP_URL");
export const VITE_SITE_NAME = getEnv("VITE_SITE_NAME");

// Add all your env vars here
