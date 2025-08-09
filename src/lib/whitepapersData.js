// lib/whitepapersData.ts
import wp1 from "@/assets/whitepaper/wp1.webp";
import wp2 from "@/assets/whitepaper/wp2.webp";
import wp3 from "@/assets/whitepaper/wp3.webp";
import wp4 from "@/assets/whitepaper/wp4.webp";
export const whitepapers = [
  {
    id: "mobile-security",
    slug: "unlocking-business-potential",
    title: "Unlocking Business Potential: How Mobile Device Management Solutions Transform Operations",
    heroSubtitle: "Discover how Mobile Device Management solutions optimize operations, enhance security, and drive cost-efficiency.",
    heroImage: wp1,
    type: "Whitepaper",
   
     // ✅ SEO Fields
  seoTitle: "Unlocking Business Potential: How MDM Solutions Transform Operations | MobiHeal MDM",
  seoDescription: "Explore how MDM solutions can transform your business operations by enhancing security, ensuring compliance, and reducing costs. Learn about the benefits of MDM in various industries.",

  // ✅ Canonical Tag
  canonicalUrl: `https://mobiheal-mdm-seo-mgqj.vercel.app/whitepapers/unlocking-business-potential`,

  // ✅ Open Graph Tags
  ogSiteName: "MobiHeal MDM",
  ogLocale: "en_US",
  ogTitle: "Unlocking Business Potential: How MDM Solutions Transform Operations | MobiHeal MDM",
  ogDescription: "Discover how MobiHeal's MDM solutions can optimize operations, enhance security, and reduce costs across industries.",
  ogType: "article",
  ogUrl: `https://mobiheal-mdm-seo-mgqj.vercel.app/whitepapers/unlocking-business-potential`,
  get ogImage() {
    return this.heroImage?.startsWith("http")
      ? this.heroImage
      : `https://mobiheal-mdm-seo-mgqj.vercel.app${this.heroImage}`;
  },

  // ✅ Article-specific OG tags
  articleAuthor: "MobiHeal Editorial Team",
  articlePublishedTime: "2025-06-18T00:00:00Z",
  articleModifiedTime: "2025-06-18T00:00:00Z",
  articleTags: [
    "Mobile Device Management",
    "MDM Solutions",
    "Enterprise Mobility",
    "BYOD Security",
    "Device Compliance"
  ],

  // ✅ Twitter Card Tags
  twitterCard: "summary_large_image",
  twitterTitle: "Unlocking Business Potential: How MDM Solutions Transform Operations | MobiHeal MDM",
  twitterDescription: "Learn how MobiHeal's MDM solutions can enhance security, improve compliance, and drive cost-efficiency.",
  get twitterImage() {
    return this.ogImage;
  },
  twitterSite: "@MobiHealMDM",
  twitterCreator: "@MobiHealMDM",

  // ✅ Meta Keywords
  metaKeywords: [
    "Mobile Device Management",
    "MDM Solutions",
    "Enterprise Mobility",
    "BYOD Security",
    "Device Compliance",
    "Business Cost Efficiency",
    "MobiHeal MDM"
  ],
    // ✅ Highlights
    highlights: [
      "Secure corporate and personal mobile devices",
      "Ensure compliance with GDPR, HIPAA, and PCI DSS",
      "Cut IT and mobility costs by up to 50%",
      "Improve employee productivity and BYOD flexibility",
      "Seamlessly integrate with IT infrastructure",
      "Future-proof your mobile security posture"
    ],
   pdfUrl: "/assets/whitepapers/pdf/Unlocking_business_potential.pdf",
    downloadForm: {
      enabled: true
    }
  },
  {
  id: "mobile-device-security-guide",
  slug: "comprehensive-guide-mobile-device-security",
  title: "Comprehensive Guide to Mobile Device Security",
  heroSubtitle: "A deep dive into securing enterprise mobility across BFSI, defence, and education through advanced MDM strategies.",
  heroImage: wp2, // Replace with the actual imported image reference
  type: "Whitepaper",
  // ✅ SEO Fields
  seoTitle: "Comprehensive Guide to Mobile Device Security | MobiHeal MDM",
  seoDescription: "Explore our Comprehensive Guide to Mobile Device Security. Learn best practices, strategies, and solutions to secure enterprise mobile devices efficiently.",

  // ✅ Canonical Tag
  canonicalUrl: `https://mobiheal-mdm-seo-mgqj.vercel.app/whitepapers/comprehensive-guide-mobile-device-security`,

  // ✅ Open Graph Tags
  ogSiteName: "MobiHeal MDM",
  ogLocale: "en_US",
  ogTitle: "Comprehensive Guide to Mobile Device Security | MobiHeal MDM",
  ogDescription: "Master mobile device security with MobiHeal's comprehensive guide, covering compliance, BYOD security, kiosk mode, and advanced MDM strategies.",
  ogType: "article",
  ogUrl: `https://mobiheal-mdm-seo-mgqj.vercel.app/whitepapers/comprehensive-guide-mobile-device-security`,
  get ogImage() {
    return this.heroImage?.startsWith("http")
      ? this.heroImage
      : `https://mobiheal-mdm-seo-mgqj.vercel.app${this.heroImage}`;
  },

  // ✅ Article-specific OG tags
  articleAuthor: "MobiHeal Editorial Team",
  articlePublishedTime: "2025-06-20T00:00:00Z",
  articleModifiedTime: "2025-06-20T00:00:00Z",
  articleTags: [
    "Mobile Device Security",
    "MDM Strategies",
    "BYOD Security",
    "Kiosk Mode",
    "Enterprise Mobility Management",
    "Compliance Monitoring"
  ],

  // ✅ Twitter Card Tags
  twitterCard: "summary_large_image",
  twitterTitle: "Comprehensive Guide to Mobile Device Security | MobiHeal MDM",
  twitterDescription: "Discover how to secure enterprise mobility with MobiHeal's in-depth mobile device security guide — from compliance to kiosk mode.",
  get twitterImage() {
    return this.ogImage;
  },
  twitterSite: "@MobiHealMDM",
  twitterCreator: "@MobiHealMDM",

  // ✅ Meta Keywords
  metaKeywords: [
    "Mobile Device Security",
    "MDM Strategies",
    "BYOD Security",
    "Kiosk Mode",
    "Enterprise Mobility Management",
    "Compliance Monitoring",
    "MobiHeal MDM"
  ],

  highlights: [
    "Combat phishing, malware, and device theft threats",
    "Ensure GDPR, HIPAA, and industry-specific compliance",
    "Deploy secure MDM with Zero-Touch and QR enrollment",
    "Implement Kiosk Mode and geo-fencing for control",
    "Secure BYOD with containerization and policy enforcement",
    "Empower IT with real-time compliance monitoring"
  ],
   pdfUrl: "/assets/whitepapers/pdf/Comprehensive Guide to Mobile Device Security.pdf",
  downloadForm: {
    enabled: true
  }
},
{
  id: "byod-best-practices",
  slug: "best-practices-byod-enterprises",
  title: "Best Practices for BYOD Implementation in Enterprises",
  heroSubtitle: "Learn how to securely manage personal devices at work while boosting employee productivity and ensuring compliance.",
  heroImage: wp3, // Replace with actual import or image reference
  type: "Whitepaper",
   // ✅ SEO Fields
  seoTitle: "Best Practices for BYOD Implementation in Enterprises | MobiHeal MDM",
  seoDescription: "Discover proven strategies for secure BYOD implementation in enterprises. Learn how MobiHeal MDM ensures compliance, enhances productivity, and mitigates risks.",

  // ✅ Canonical Tag
  canonicalUrl: `https://mobiheal-mdm-seo-mgqj.vercel.app/whitepapers/best-practices-byod-enterprises`,

  // ✅ Open Graph Tags
  ogSiteName: "MobiHeal MDM",
  ogLocale: "en_US",
  ogTitle: "Best Practices for BYOD Implementation in Enterprises | MobiHeal MDM",
  ogDescription: "Master BYOD security and compliance with MobiHeal's expert guide — covering risk mitigation, data separation, and policy enforcement.",
  ogType: "article",
  ogUrl: `https://mobiheal-mdm-seo-mgqj.vercel.app/whitepapers/best-practices-byod-enterprises`,
  get ogImage() {
    return this.heroImage?.startsWith("http")
      ? this.heroImage
      : `https://mobiheal-mdm-seo-mgqj.vercel.app${this.heroImage}`;
  },

  // ✅ Article-specific OG tags
  articleAuthor: "MobiHeal Editorial Team",
  articlePublishedTime: "2025-06-22T00:00:00Z",
  articleModifiedTime: "2025-06-22T00:00:00Z",
  articleTags: [
    "BYOD Security",
    "Enterprise Mobility",
    "Data Protection",
    "Mobile Device Management",
    "Compliance Enforcement",
    "Work Profile Containerization"
  ],

  // ✅ Twitter Card Tags
  twitterCard: "summary_large_image",
  twitterTitle: "Best Practices for BYOD Implementation in Enterprises | MobiHeal MDM",
  twitterDescription: "Learn how to securely manage personal devices at work with MobiHeal's proven BYOD strategies — compliance, productivity, and risk reduction.",
  get twitterImage() {
    return this.ogImage;
  },
  twitterSite: "@MobiHealMDM",
  twitterCreator: "@MobiHealMDM",

  // ✅ Meta Keywords
  metaKeywords: [
    "BYOD Security",
    "Enterprise Mobility",
    "Data Protection",
    "Mobile Device Management",
    "Compliance Enforcement",
    "Work Profile Containerization",
    "MobiHeal MDM"
  ],

  highlights: [
    "Mitigate BYOD security risks like data leakage and malware",
    "Achieve compliance with GDPR, HIPAA, and PCI-DSS",
    "Leverage Work Profile containerization for data separation",
    "Enforce MFA and biometric authentication for access control",
    "Educate users through phishing simulations and awareness programs",
    "Streamline audits with automated MDM reporting"
  ],
   pdfUrl: "/assets/whitepapers/pdf/byod.pdf",
  downloadForm: {
    enabled: true
  }
},
{
  id: "advanced-mdm-enterprise",
  slug: "mobiheal-advanced-mdm-enterprise",
  title: "Empowering Modern Enterprises: MobiHeal’s Advanced MDM for Security, Efficiency & Growth",
  heroSubtitle: "Discover how MobiHeal’s unified MDM solution fortifies enterprise mobility, reduces costs, and future-proofs your digital ecosystem.",
  heroImage: wp4, // Replace with the actual image reference
  type: "Whitepaper",
 // ✅ SEO Fields
  seoTitle: "Advanced Mobile Device Management with MobiHeal: Secure, Scalable & Future-Ready | MobiHeal MDM",
  seoDescription: "Discover how MobiHeal’s next-gen Mobile Device Management solution fortifies security, optimizes costs, ensures compliance, and accelerates mobile workforce productivity for SMEs and enterprises alike.",

  // ✅ Canonical Tag
  canonicalUrl: `https://mobiheal-mdm-seo-mgqj.vercel.app/whitepapers/mobiheal-advanced-mdm-enterprise`,

  // ✅ Open Graph Tags
  ogSiteName: "MobiHeal MDM",
  ogLocale: "en_US",
  ogTitle: "Advanced Mobile Device Management with MobiHeal: Secure, Scalable & Future-Ready | MobiHeal MDM",
  ogDescription: "MobiHeal’s advanced MDM secures devices, streamlines operations, and empowers enterprises to scale efficiently while meeting compliance.",
  ogType: "article",
  ogUrl: `https://mobiheal-mdm-seo-mgqj.vercel.app/whitepapers/mobiheal-advanced-mdm-enterprise`,
  get ogImage() {
    return this.heroImage?.startsWith("http")
      ? this.heroImage
      : `https://mobiheal-mdm-seo-mgqj.vercel.app${this.heroImage}`;
  },

  // ✅ Article-specific OG tags
  articleAuthor: "MobiHeal Editorial Team",
  articlePublishedTime: "2025-06-25T00:00:00Z",
  articleModifiedTime: "2025-06-25T00:00:00Z",
  articleTags: [
    "Advanced MDM",
    "Enterprise Mobility",
    "Zero Trust Security",
    "Mobile Device Management",
    "Compliance Automation",
    "Cloud-Native Infrastructure"
  ],

  // ✅ Twitter Card Tags
  twitterCard: "summary_large_image",
  twitterTitle: "Advanced Mobile Device Management with MobiHeal: Secure, Scalable & Future-Ready | MobiHeal MDM",
  twitterDescription: "Explore how MobiHeal’s advanced MDM delivers security, compliance, cost efficiency, and growth for modern enterprises.",
  get twitterImage() {
    return this.ogImage;
  },
  twitterSite: "@MobiHealMDM",
  twitterCreator: "@MobiHealMDM",

  // ✅ Meta Keywords
  metaKeywords: [
    "Advanced MDM",
    "Enterprise Mobility",
    "Zero Trust Security",
    "Mobile Device Management",
    "Compliance Automation",
    "Cloud-Native Infrastructure",
    "MobiHeal MDM"
  ],

  // ✅ Highlights
  highlights: [
    "Combat zero-day threats with Zero-Trust enforcement",
    "Automate device provisioning and reduce IT workload",
    "Achieve 200% ROI by streamlining device operations",
    "Ensure GDPR, HIPAA, and CCPA compliance with real-time auditing",
    "Boost employee productivity through self-service and insights",
    "Scale effortlessly with cloud-native, edge-ready infrastructure"
  ],
  pdfUrl: "/assets/whitepapers/pdf/Empowering_modern_enterprises.pdf",
  downloadForm: {
    enabled: true
  }
}



];
