// src/env.js

const getEnv = (key) => {
  // Runtime: read from window._env_ (injected by Docker at container start)
  if (window._env_ && window._env_[key] !== undefined) {
    return window._env_[key];
  }

  // Local dev fallback: read from Vite's import.meta.env
  return import.meta.env[key];
};

export default getEnv;
