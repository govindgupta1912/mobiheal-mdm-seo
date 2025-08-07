import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import tailwindcss from '@tailwindcss/vite'
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
// import sitemap from 'vite-plugin-sitemap';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
 plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    themePlugin(),
    // sitemap({
    //   hostname: 'https://mobiheal.in',
    //   dynamicRoutes: [
    //     '/',
    //     '/about-us',
    //     '/features',
    //     '/use-cases',
    //     '/pricing',
    //     '/blog',
    //     '/case-studies',
    //     '/whitepapers',
    //     '/resources',
    //     '/faq',
    //     '/partners',
    //     '/testimonials',
    //     '/contact',
    //     '/owasp-mobile',
    //     '/privacy-policy',
    //     '/cookies-policy',
    //     '/terms-services',
    //     '/acceptable-policy',
    //     '/blog/mdm-benefits',
    //     '/blog/geo-fencing-bfsi',
    //     '/blog/qr-code-enrollment',
    //     '/blog/ai-driven-threat-detection',
    //     '/blog/securing-iot-devices-healthcare',
    //     '/blog/enhancing-retail-customer-experience-secure-mobile-kiosks',
    //     '/blog/endpoint-security-distributed-workforces',
    //     '/blog/zero-touch-enrollment-android',
    //     '/blog/gdpr-compliance-mdm-solutions-data-protection',
    //     '/whitepapers/unlocking-business-potential',
    //     '/whitepapers/comprehensive-guide-mobile-device-security',
    //     '/whitepapers/best-practices-byod-enterprises',
    //     '/whitepapers/mobiheal-advanced-mdm-enterprise',
    //     '/case-studies/preventing-mobile-fraud-banking',
    //     '/case-studies/securing-customer-data-digital-wallets',
    //     '/case-studies/hipaa-compliance-healthcare-tablets',
    //     '/case-studies/telemedicine-device-security',
    //     '/case-studies/iot-retail-security'
    //   ],
    //   readable: true,
    //   allowRobots: true
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
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