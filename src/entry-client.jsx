// ── Runtime env patch ─────────────────────────────────────────
// Merges Docker-injected window._env_ into import.meta.env
// All existing import.meta.env.VITE_* calls work with zero changes
if (typeof window !== "undefined" && window._env_) {
  Object.assign(import.meta.env, window._env_);
}
// ─────────────────────────────────────────────────────────────

import "./index.css";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // ✅ Import HelmetProvider
import { ThemeProvider } from "./components/ui/theme-provider";
import App from "./App";

hydrateRoot(
  document.getElementById("root"),
  <HelmetProvider>
    {" "}
    {/* ✅ Wrap with HelmetProvider */}
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="securemdm-ui-theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </HelmetProvider>,
);
