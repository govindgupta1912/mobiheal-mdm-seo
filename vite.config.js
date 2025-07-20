import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import tailwindcss from '@tailwindcss/vite'
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
 plugins: [
    react(),
        tailwindcss(),

    runtimeErrorOverlay(),
    themePlugin(),
    
  ],
  // root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, 'dist/client'),
    emptyOutDir: true,
  },
  server: {
    allowedHosts: true,
    hmr: { overlay: true },
    host: '0.0.0.0',
  },
  ssr: {
    // ssr: true,
    // Mock asset types that should not be bundled on the server
    target: 'node',
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg'],
});