import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all routes
const routes = [
  // Static routes
  '/',
  '/about-us',
  '/features',
  '/use-cases',
  '/pricing',
  '/blog',
  '/case-studies',
  '/whitepapers',
  '/resources',
  '/faq',
  '/partners',
  '/testimonials',
  '/contact',
  '/owasp-mobile',
  '/privacy-policy',
  '/cookies-policy',
  '/terms-services',
  '/acceptable-policy',
  
  // Blog routes
  '/blog/mdm-benefits',
  '/blog/geo-fencing-bfsi',
  '/blog/qr-code-enrollment',
  '/blog/ai-driven-threat-detection',
  '/blog/securing-iot-devices-healthcare',
  '/blog/enhancing-retail-customer-experience-secure-mobile-kiosks',
  '/blog/endpoint-security-distributed-workforces',
  '/blog/zero-touch-enrollment-android',
  '/blog/gdpr-compliance-mdm-solutions-data-protection',
  
  // Whitepaper routes
  '/whitepapers/unlocking-business-potential',
  '/whitepapers/comprehensive-guide-mobile-device-security',
  '/whitepapers/best-practices-byod-enterprises',
  '/whitepapers/mobiheal-advanced-mdm-enterprise',
  
  // Case study routes
  '/case-studies/preventing-mobile-fraud-banking',
  '/case-studies/securing-customer-data-digital-wallets',
  '/case-studies/hipaa-compliance-healthcare-tablets',
  '/case-studies/telemedicine-device-security',
  '/case-studies/iot-retail-security'
];

const hostname = 'https://mobiheal.in';
const currentDate = new Date().toISOString();

// Generate sitemap XML
function generateSitemapXML() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${hostname}${route}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
}

// Write sitemap to public directory
const sitemapContent = generateSitemapXML();
const publicDir = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

try {
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('✅ Sitemap generated successfully at:', sitemapPath);
  console.log(`📊 Total URLs: ${routes.length}`);
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
} 