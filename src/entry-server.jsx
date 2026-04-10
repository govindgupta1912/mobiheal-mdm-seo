import React from "react";
import "./index.css";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

// ── Server-side runtime env patch ────────────────────────────
// On server, import.meta.env is baked at build time
// So we override it with process.env at runtimed
// const runtimeEnv = {};
// for (const [key, value] of Object.entries(process.env)) {
//   if (key.startsWith("VITE_")) {
//     runtimeEnv[key] = value;
//   }
// }
// Object.assign(import.meta.env, runtimeEnv);
// ─────────────────────────────────────────────────────────────

export function render(url) {
  const helmetContext = {};

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );

  return {
    appHtml,
    helmet: helmetContext.helmet,
  };
}
