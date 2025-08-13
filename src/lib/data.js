import partner1 from "../assets/partnerImages/partner1.webp";
import partner2 from "../assets/partnerImages/partner2.webp";
import partner3 from "../assets/partnerImages/partner3.webp";
import partner4 from "../assets/partnerImages/partner4.webp";
import partner5 from "../assets/partnerImages/partner5.webp";
import partner6 from "../assets/partnerImages/partner6.webp";
import partner7 from "../assets/partnerImages/partner7.webp";
import partner8 from "../assets/partnerImages/partner8.webp";

import client1 from "../assets/ClinetImages/clients.webp";
import client2 from "../assets/ClinetImages/clients-1.webp";
import client3 from "../assets/ClinetImages/clients-2.webp";
import client4 from "../assets/ClinetImages/clients-3.webp";
import client5 from "../assets/ClinetImages/clients-4.webp";
import client6 from "../assets/ClinetImages/clients-5.webp";
import client7 from "../assets/ClinetImages/clients-6.webp";
import client8 from "../assets/ClinetImages/clients-7.webp";
import client9 from "../assets/ClinetImages/clients-8.webp";
import client10 from "../assets/ClinetImages/clients-9.webp";
import client11 from "../assets/ClinetImages/clients-10.webp";
import client12 from "../assets/ClinetImages/clients-11.webp";

import cs1 from "../assets/caseStudies/Preventing Mobile Fraud in Banking.webp";
import cs2 from "../assets/caseStudies/cs2.webp";
import cs3 from "../assets/caseStudies/cs3.webp";
import cs4 from "../assets/caseStudies/cs4.webp";
import cs5 from "../assets/caseStudies/cs5.webp";

import cs7 from "../assets/caseStudies/cs7.webp";
import cs8 from "../assets/caseStudies/cs8.webp";
import cs9 from "../assets/caseStudies/cs9.webp";
import cs10 from "../assets/caseStudies/cs10.webp";
import cs11 from "../assets/caseStudies/cs11.webp";
import cs12 from "../assets/caseStudies/cs12.webp";

import blog1 from "../assets/BlogImages/blog1.webp"
import blog2 from "../assets/BlogImages/blog2.webp";
import blog3 from "../assets/BlogImages/blog3.webp";    

export const blogPosts = [
  {
    title: "5 Essential Benefits of Mobile Device Management for Enterprises",
    excerpt:
      "Discover the essential benefits of Mobile Device Management (MDM) for enterprises, including enhanced security, improved productivity, and simplified compliance with MobiHeal MDM.",
    date: "June 10, 2025",
    imageSrc: blog1,
    imageAlt: "Mobile Device Management Benefits",
    href: "/blog/mdm-benefits",
    category: "byod",
  },
  {
    title: "How Geo-Fencing Enhances Security and Productivity in BFSI Sector",
    excerpt:
      "Explore how Geo-Fencing technology strengthens security and boosts productivity in the BFSI sector. Learn its key benefits and implementation strategies with MobiHeal MDM.",
    date: "June 11, 2025",
    imageSrc: blog2,
    imageAlt: "Geo-Fencing in BFSI",
    href: "/blog/geo-fencing-bfsi",
    category: "mdm-best-practices",
  },
  {
    title: "How QR Code Enrollment Simplifies Device Setup",
    excerpt:
      "Learn how QR Code Enrollment streamlines mobile device setup for enterprises. Discover key benefits, best practices, and implementation tips with MobiHeal MDM.",
    date: "June 11, 2025",
    imageSrc: blog3,
    imageAlt: "QR Code Enrollment",
    href: "/blog/qr-code-enrollment",
    category: "mdm-best-practices",
  },
  {
    title:
      "AI-Driven Threat Detection: The Future of Mobile Security in Enterprises",
    excerpt:
      "Discover how AI-driven threat detection is revolutionizing mobile security for enterprises. Learn about benefits, real-world applications, and best practices for future-ready protection.",
    date: "June 11, 2025",
    imageSrc: "Blog 4.docx",
    imageAlt: "AI-Driven Threat Detection",
    href: "/blog/ai-driven-threat-detection",
    category: "mobile-security",
  },
  {
    title: "Securing IoT Devices in Healthcare: Challenges and MDM Solutions",
    excerpt:
      "Discover how MDM solutions address IoT security challenges in healthcare. Learn strategies to protect patient data, ensure HIPAA compliance, and secure connected medical devices.",
    date: "June 11, 2025",
    imageSrc: "Blog 5.docx",
    imageAlt: "Securing IoT Devices in Healthcare",
    href: "/blog/securing-iot-devices-healthcare",
    category: "compliance",
  },
  {
    title: "Enhancing Retail Customer Experience with Secure Mobile Kiosks",
    excerpt:
      "Discover how secure mobile kiosks elevate retail customer experience. Learn strategies to safeguard POS systems, streamline engagement, and prevent cyber threats.",
    date: "June 11, 2025",
    imageSrc: "Blog 6.docx",
    imageAlt: "Secure Mobile Kiosks in Retail",
    href: "/blog/enhancing-retail-customer-experience-secure-mobile-kiosks",
    category: "industry-trends",
  },
  {
    title:
      "Endpoint Security for Distributed Workforces: Best Practices for Remote Device Management",
    excerpt:
      "Discover how MobiHeal MDM secures distributed workforces with zero-touch enrollment, BYOD policies, and AI-driven threat detection. Ensure compliance and prevent breaches.",
    date: "June 11, 2025",
    imageSrc: "Blog 7.docx",
    imageAlt: "Endpoint Security for Remote Workforces",
    href: "/blog/endpoint-security-distributed-workforces",
    category: "mobile-security",
  },
  {
    title:
      "Zero-Touch Enrollment for Android Enterprise: Streamline Device Setup at Scale",
    excerpt:
      "Discover how Zero-Touch Enrollment simplifies Android Enterprise device setup. Learn best practices for bulk provisioning, security, and compliance with MobiHeal MDM.",
    date: "June 11, 2025",
    imageSrc: "Blog 8.docx",
    imageAlt: "Zero-Touch Enrollment Android Enterprise",
    href: "/blog/zero-touch-enrollment-android",
    category: "mdm-best-practices",
  },
  {
    title:
      "GDPR Compliance Made Simple: How MDM Solutions Protect Our Customer Data",
    excerpt:
      "Learn how MobiHeal MDM simplifies GDPR compliance with secure data management, automated audit trails, and encrypted data erasure. Avoid fines and build trust.",
    date: "June 11, 2025",
    imageSrc: "Blog 9.docx",
    imageAlt: "GDPR Compliance MDM Solutions",
    href: "/blog/gdpr-compliance-mdm-solutions-data-protection",
    category: "compliance",
  },
];

/** @type {CaseStudy} */
const exampleCaseStudy = {
  title: "Enterprise MDM Implementation",
  summary: "How we helped XYZ Corp deploy MDM for 10,000 devices.",
  imageSrc: "/images/case-study.jpg",
  tags: ["MDM", "Security", "Deployment"],
  results: [
    { stat: "95%", label: "Device Compliance" },
    { stat: "30%", label: "Cost Reduction" },
  ],
  slug: "enterprise-mdm-xyz",
  category: "Mobile Security"
};


export const caseStudies = [
  {
    title:
      "Preventing Mobile Fraud in Banking: How MDM Reduced Unauthorized Transactions by 60%",
    summary:
      "A multinational bank faced escalating mobile fraud incidents, including phishing scams, account takeovers, and unauthorized transactions. After deploying MobiHeal MDM, the bank reduced fraudulent activities by 60%, achieved 100% PCI-DSS compliance, and enhanced customer trust.",
    imageSrc: cs1,
    tags: ["Banking & Financial Services", "Security", "Fraud Prevention"],
    results: [
      { stat: "60%", label: "Reduction in fraudulent activities" },
      { stat: "100%", label: "PCI-DSS compliance achieved" },
      { stat: "Enhanced", label: "Customer trust" },
    ],
    slug: "preventing-mobile-fraud-banking",
    category: "Finance",
  },
  {
    title:
      "Securing Customer Data in Digital Wallets: MDM Implementation for a Leading Fintech Firm",
    summary:
      "A leading fintech firm specializing in digital wallet solutions faced escalating security risks, including phishing attacks and unauthorized transactions. By deploying MobiHeal MDM, the company achieved 100% PCI-DSS compliance, zero data breaches over 18 months, and a 40% increase in customer trust scores.",
    imageSrc: cs2,
    tags: [
      "Fintech",
      "Data Encryption",
      "PCI-DSS Compliance",
      "Mobile Payments",
      "MDM",
    ],
    results: [
      { stat: "100%", label: "PCI-DSS compliance" },
      { stat: "Zero", label: "Data breaches over 18 months" },
      { stat: "40%", label: "Increase in customer trust scores" },
    ],
    slug: "securing-customer-data-digital-wallets",
    category: "Enterprise",
  },
  {
    title:
      "HIPAA Compliance Achieved: Protecting Patient Data on Tablets in a Multi-Hospital Network",
    summary:
      "A multi-hospital network with 15,000+ tablets across 50+ facilities faced recurring HIPAA violations due to unsecured devices. After deploying MobiHeal MDM, the organization achieved 100% HIPAA compliance, reduced data breach risks by 90%, and improved patient trust.",
    imageSrc: cs3,
    tags: ["Healthcare", "Patient Data Security", "HIPAA Compliance", "MDM"],
    results: [
      { stat: "100%", label: "HIPAA compliance achieved" },
      { stat: "90%", label: "Reduced data breach risks" },
      { stat: "Improved", label: "Patient trust" },
    ],
    slug: "hipaa-compliance-healthcare-tablets",
    category: "healthcare",
  },
  {
    title:
      "Securing Telemedicine Devices: How MDM Enabled Remote Consultations Without Compromising Privacy",
    summary:
      "A regional healthcare provider offering telemedicine services faced risks of data breaches and HIPAA violations due to unsecured tablets used by remote clinicians. By deploying MobiHeal MDM, the organization eliminated breaches, achieved 100% HIPAA compliance, and improved patient satisfaction scores by 30%.",
    imageSrc: cs4,
    tags: [
      "Healthcare",
      "Telemedicine Security",
      "HIPAA Compliance",
      "Privacy",
    ],
    results: [
      { stat: "Zero", label: "Data breaches" },
      { stat: "100%", label: "HIPAA compliance" },
      { stat: "30%", label: "Improved patient satisfaction scores" },
    ],
    slug: "telemedicine-device-security",
    category: "healthcare",
  },
  {
    title:
      "Securing IoT-Powered Stores: MDM for Smart Shelves and Mobile POS Systems",
    summary:
      "A leading retail chain with 200+ IoT-powered stores faced escalating cyber threats targeting smart shelves and mobile POS systems. By deploying MobiHeal MDM, the retailer eliminated data breaches, achieved 100% PCI-DSS compliance, and reduced operational downtime by 70%.",
    imageSrc: cs5,
    tags: ["Retail", "IoT Security", "POS Systems", "Compliance"],
    results: [
      { stat: "Eliminated", label: "Data breaches" },
      { stat: "100%", label: "PCI-DSS compliance achieved" },
      { stat: "70%", label: "Reduced operational downtime" },
    ],
    slug: "iot-retail-security",
    category: "retail",
  },
  {
    title:
      "Boosting Customer Engagement: Secure Tablet Deployment for In-Store Product Demos",
    summary:
      "A global electronics retailer deployed 1,000+ tablets for in-store product demonstrations but faced security risks and inconsistent customer experiences. By implementing MobiHeal MDM, the brand achieved a 25% increase in sales conversions, 90% customer satisfaction, and zero data breaches over 12 months.",
    imageSrc: "/images/case-studies/retail-engagement.jpg",
    tags: ["Retail", "Customer Engagement", "Tablet Deployment", "Security"],
    results: [
      { stat: "25%", label: "Increase in sales conversions" },
      { stat: "90%", label: "Customer satisfaction" },
      { stat: "Zero", label: "Data breaches over 12 months" },
    ],
    slug: "retail-tablet-demos",
    category: "retail",
  },
  {
    title:
      "Securing Student Data in Hybrid Classrooms: How MDM Enabled Safe BYOD for 10,000+ Learners",
    summary:
      "A large school district with 50+ schools transitioned to hybrid learning, allowing students to use personal devices (BYOD) for remote classes. However, unmanaged devices led to data leaks and FERPA violations. By deploying MobiHeal MDM, the district secured 10,000+ BYOD devices, achieved 100% FERPA compliance, and reduced IT management costs by 40%.",
    imageSrc: cs7,
    tags: [
      "Education",
      "Student Data Privacy",
      "BYOD Security",
      "FERPA Compliance",
    ],
    results: [
      { stat: "10,000+", label: "BYOD devices secured" },
      { stat: "100%", label: "FERPA compliance achieved" },
      { stat: "40%", label: "Reduced IT management costs" },
    ],
    slug: "education-byod-security",
    category: "education",
  },
  {
    title:
      "Streamlining Tablet Deployment Across 50 Schools: A Case Study in Kiosk Mode for Digital Learning",
    summary:
      "A regional education authority managing 50 schools struggled with inconsistent tablet deployments, unauthorized app usage, and frequent device malfunctions. By implementing MobiHeal MDM’s Kiosk Mode, the district achieved 90% faster deployment, 80% fewer IT tickets, and 100% compliance with student data privacy laws.",
    imageSrc: cs8,
    tags: ["Education", "Tablet Deployment", "Kiosk Mode", "Digital Learning"],
    results: [
      { stat: "90%", label: "Faster deployment" },
      { stat: "80%", label: "Fewer IT tickets" },
      { stat: "100%", label: "Compliance with student data privacy laws" },
    ],
    slug: "education-kiosk-mode",
    category: "education",
  },
  {
    title:
      "Protecting Clinical Trial Data: MDM Implementation for a Global Pharma Research Team",
    summary:
      "A global pharmaceutical company conducting 100+ clinical trials faced recurring data breaches and HIPAA violations due to unsecured mobile devices. By deploying MobiHeal MDM, the team secured 2,000+ devices, achieved 100% HIPAA compliance, and reduced breach risks by 90%, ensuring patient privacy and regulatory adherence.",
    imageSrc: cs9,
    tags: [
      "Pharmaceuticals",
      "Clinical Research",
      "Data Security",
      "HIPAA Compliance",
    ],
    results: [
      { stat: "2,000+", label: "Devices secured" },
      { stat: "100%", label: "HIPAA compliance achieved" },
      { stat: "90%", label: "Reduced breach risks" },
    ],
    slug: "clinical-trial-mdm",
    category: "healthcare",
  },
  {
    title:
      "Securing Drug Manufacturing Facilities: Geo-Fencing and Access Control for Pharma IoT Devices",
    summary:
      "A leading pharmaceutical manufacturer faced unauthorized access and compliance risks across 20+ global drug production sites. By deploying MobiHeal MDM with geo-fencing and role-based access controls, the company achieved 100% compliance with FDA 21 CFR Part 11, reduced unauthorized entry incidents by 95%, and secured 5,000+ IoT devices.",
    imageSrc: cs10,
    tags: ["Pharmaceuticals", "IoT Security", "Manufacturing", "Compliance"],
    results: [
      { stat: "100%", label: "Compliance with FDA 21 CFR Part 11" },
      { stat: "95%", label: "Reduced unauthorized entry incidents" },
      { stat: "5,000+", label: "IoT devices secured" },
    ],
    slug: "pharma-iot-geo-fencing",
    category: "healthcare",
  },

  {
    title:
      "Preventing Cargo Theft: How MDM Secured 2,000+ Driver Tablets for a Logistics Giant",
    summary:
      "A global logistics company managing 10,000+ shipments monthly faced rampant cargo theft, losing $5M annually. By deploying MobiHeal MDM across 2,000+ driver tablets, the firm reduced theft incidents by 95%, recovered $4.2M yearly, and ensured real-time fleet visibility.",
    imageSrc: cs11,
    tags: [
      "Logistics",
      "Cargo Theft Prevention",
      "Fleet Management",
      "Security",
    ],
    results: [
      { stat: "95%", label: "Reduced theft incidents" },
      { stat: "$4.2M", label: "Recovered yearly" },
      { stat: "2,000+", label: "Driver tablets secured" },
    ],
    slug: "cargo-theft-mdm-logistics",
    category: "enterprise",
  },
  {
    title:
      "Optimizing Warehouse Operations: MDM for IoT-Powered Inventory Management",
    summary:
      "A global logistics company managing 50+ warehouses faced 15% inventory discrepancies and frequent IoT device failures. By deploying MobiHeal MDM, the firm achieved 99.9% inventory accuracy, reduced downtime by 70%, and secured 10,000+ IoT sensors, transforming warehouse operations.",
    imageSrc: cs12,
    tags: [
      "Logistics",
      "Warehouse Operations",
      "IoT Inventory Management",
      "Efficiency",
    ],
    results: [
      { stat: "99.9%", label: "Inventory accuracy" },
      { stat: "70%", label: "Reduced downtime" },
      { stat: "10,000+", label: "IoT sensors secured" },
    ],
    slug: "warehouse-iot-mdm-logistics",
    category: "healthcare",
  },
];
// Whitepapers data
export const whitepapers = [
  {
    slug: "unlocking-business-potential",
    title: "Unlocking Business Potential",
    type: "Whitepaper",
    pages: 18,
    description: "How MDM transforms business operations and security.",
    tags: ["MDM", "Security", "Cost Reduction"],
    previewHref: "/whitepapers/unlocking-business-potential", // <- dynamic route
    downloadHref: "/downloads/mdm-whitepaper.pdf",
    category: "security",
  },
  {
    slug: "comprehensive-guide-mobile-device-security",
    title: "Comprehensive Guide to Mobile Device Security",
    description:
      "A complete framework for securing mobile devices in enterprise environments, including technical controls, policies, and best practices.",
    type: "Whitepaper",
    pages: 32,
    tags: ["Security", "Best Practices", "Technical Guide"],
    previewHref: "/whitepapers/preview/mobile-security-guide",
    downloadHref: "/whitepapers/download/mobile-security-guide",
    category: "security",
  },
  {
    slug: "best-practices-byod-enterprises",
    title: "Best Practices for BYOD Implementation in Enterprises",
    description:
      "Strategic considerations and step-by-step guidance for implementing a successful and secure BYOD program in your organization.",
    type: "Whitepaper",
    pages: 28,
    tags: ["BYOD", "Implementation", "Strategy"],
    previewHref: "/whitepapers/preview/byod-implementation",
    downloadHref: "/whitepapers/download/byod-implementation",
    category: "byod",
  },
  {
    slug: "mobiheal-advanced-mdm-enterprise",
    title:
      "Empowering Modern Enterprises: MobiHeal’s Advanced MDM for Security, Efficiency & Growth",
    type: "Whitepaper",
    pages: 20,
    description:
      "How MobiHeal’s next-gen MDM secures mobile endpoints, boosts productivity, and ensures compliance at scale.",
    tags: [
      "MDM",
      "Enterprise Mobility",
      "Zero Trust",
      "Compliance",
      "Productivity",
    ],
    previewHref: "/whitepapers/advanced-mdm-for-enterprise-growth",
    downloadHref: "/downloads/advanced-mdm-whitepaper.pdf",
    category: "compliance",
  },
];

// /lib/data/whitepapers.ts
export const whitepaperData = [
  {
    id: "mobile-security",
    title: "Comprehensive Guide to Mobile Device Security",
    subtitle: "Secure, Manage & Optimize Mobility Across Industries",
    authorInfo: "MobiHeal Technologies",
    footerText:
      "© 2025 MobiHeal Technologies. All rights reserved. | www.mobiheal.com | info@mobiheal.com",
    sections: [
      {
        heading: "Executive Summary",
        paragraphs: [
          "Mobile devices have become indispensable tools for enterprises across industries. However, their widespread adoption introduces unique security challenges that require robust solutions. This whitepaper explores the importance of mobile device security, outlines key components of an effective Mobile Device Management (MDM) strategy, and provides actionable insights tailored for industries such as BFSI, defence forces, and educational institutions.",
        ],
      },
      {
        heading: "Introduction",
        paragraphs: [
          "In today's digital-first world, mobile devices are integral to enterprise operations. From enabling remote work to streamlining communication, their benefits are undeniable. However, the growing reliance on mobile technology comes with significant risks:",
        ],
        bullets: [
          "Increased vulnerability to cyber threats such as phishing attacks and malware.",
          "Challenges in maintaining regulatory compliance across industries like BFSI and healthcare.",
          "Complexities in managing diverse device fleets ranging from corporate-owned to BYOD (Bring Your Own Device).",
        ],
        // paragraphs: [
        //   "This whitepaper aims to provide a comprehensive guide to securing enterprise mobile environments using advanced MDM solutions like MobiHeal MDM."
        // ]
      },
      {
        heading: "The Importance of Mobile Device Security",
        subSections: [
          {
            subHeading: "Growing Cybersecurity Threats",
            bullets: [
              "Phishing Scams: Deceptive emails or messages tricking users into revealing sensitive information.",
              "Malware: Malicious software compromising device functionality or stealing data.",
              "Device Theft: Loss or theft of physical devices leading to unauthorized access.",
            ],
          },
          {
            subHeading: "Regulatory Compliance Requirements",
            paragraphs: [
              "Industries such as BFSI and healthcare operate under stringent regulations like GDPR and HIPAA. Non-compliance can result in hefty fines and reputational damage.",
            ],
          },
          {
            subHeading: "Remote Work Challenges",
            paragraphs: [
              "The global shift towards remote work has increased reliance on mobile devices for accessing corporate resources remotely. Without proper security measures, organizations face heightened risks of data breaches.",
            ],
          },
        ],
      },
      {
        heading: "Core Components of an Effective MDM Strategy",
        subSections: [
          {
            subHeading: "Secure Device Enrollment Methods",
            bullets: [
              "QR Code Enrollment: Simplifies setup by scanning QR codes containing predefined configurations.",
              "Zero-Touch Enrollment: Automatically configures Android Enterprise devices upon activation.",
            ],
          },
          {
            subHeading: "Robust Security Policies Enforcement",
            bullets: [
              "Password complexity requirements.",
              "Data encryption standards.",
              "Remote lock/wipe capabilities for lost or stolen devices.",
            ],
          },
          {
            subHeading: "Application Management & Control",
            bullets: [
              "Whitelisting approved business apps.",
              "Blacklisting unauthorized apps.",
              "Containerization separating personal and corporate data.",
            ],
          },
          {
            subHeading: "Continuous Compliance Monitoring & Reporting",
            bullets: [
              "Real-time alerts for non-compliant devices.",
              "Automated reporting simplifying audit preparation.",
            ],
          },
        ],
      },
      {
        heading: "Industry-Specific Use Cases",
        subSections: [
          {
            subHeading: "BFSI Sector",
            bullets: [
              "Geo-Fencing restricts device usage within branch premises only.",
              "Encryption safeguards financial transactions conducted via mobile banking apps.",
            ],
          },
          {
            subHeading: "Defence Forces",
            bullets: [
              "Remote wipe functionalities ensure immediate data erasure if a device is compromised.",
              "Geo-Fencing restricts device usage within secure military bases or operational zones.",
            ],
          },
          {
            subHeading: "Educational Institutions",
            bullets: [
              "Kiosk Mode restricts student tablets exclusively to educational apps during school hours.",
              "Centralized app deployment ensures uniformity across all student devices instantly.",
            ],
          },
        ],
      },
      {
        heading: "Best Practices for Implementing MDM Solutions",
        bullets: [
          "Define Organizational Objectives",
          "Educate Employees",
          "Regularly Review Policies",
          "Leverage Advanced Analytics",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Implementing a robust Mobile Device Management strategy is critical for enterprises aiming to secure sensitive corporate assets while addressing evolving cybersecurity challenges effectively. By leveraging advanced features offered by solutions like MobiHeal MDM, organizations can confidently achieve operational efficiency while maintaining continuous regulatory compliance.",
          "Ready to transform your organization's mobile security strategy? Request a demo today!",
        ],
      },
    ],
  },
  {
     id: "mobile-security",
    title:
      "Unlocking Business Potential: How MDM Solutions Transform Operations",
    authorInfo: "Mobisec Technologies",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Mobile Device Management (MDM) solutions represent a pivotal advancement in managing devices...",
          "They cater to Android, iOS, Windows, and IoT use cases.",
        ],
      },
      {
        heading: "Security Enhancements",
        paragraphs: [
          "MDM enforces encryption, remote lock, and geofencing.",
          "It also helps organizations comply with regulations like GDPR and HIPAA.",
        ],
      },
      // more sections...
    ],
  },
  {
    id: "digital-classrooms",
    title: "Empowering Education with Apple Devices & MDM",
    authorInfo: "Mobisec Research Lab",
    sections: [
      {
        heading: "iPads in Classrooms",
        paragraphs: [
          "iPads boost engagement, improve test scores, and support inclusive education.",
        ],
      },
      {
        heading: "Managing iOS Devices with MDM",
        paragraphs: [
          "MDM simplifies provisioning, app distribution, and lost device recovery.",
        ],
      },
    ],
  },
];


export const owaspRisks = [
  {
    id: "M1",
    title: "Insecure Data Storage",
    description:
      "Poorly secured databases, logs, or caches expose sensitive data like passwords, financial details, or PHI. ",
    implications: [
      "Unauthorized access to sensitive business or personal data",
      "Exposure of authentication credentials",
      "Compliance violations for regulated data",
      "Identity theft and privacy breaches",
    ],
    mitigations: [
      "Enforce AES-256 encryption for all stored data. ",
      "Automatically wipe cached data after session timeouts. ",
    ],
    example:
      "A healthcare app storing unencrypted patient records in a local SQLite database. ",
  },
  {
    id: "M2",
    title: "Weak Server-Side Controls",
    description:
      "Inadequate API security allows attackers to exploit backend systems. ",
    implications: [
      "Unauthorized access to backend systems",
      "Data breaches from compromised APIs",
      "Service disruption and denial of service",
    ],
    mitigations: [
      "Implement MobiHeal's API gateway with rate limiting and OAuth 2.0. ",
    ],
    example:
      "Unauthorized access to poorly secured REST APIs retrieving user data. ",
  },
  {
    id: "M3",
    title: "Insufficient Cryptography",
    description:
      "Using outdated algorithms (e.g., MD5) or hard-coded keys compromises encryption. ",
    implications: [
      "Compromised data confidentiality and integrity",
      "Eavesdropping and data manipulation",
      "Inability to trust communication channels",
    ],
    mitigations: [
      "Automate TLS 1.3 enforcement for data in transit. ",
      "Use MobiHeal's key management system for dynamic key rotation. ",
    ],
  },
  {
    id: "M4",
    title: "Insecure Authentication",
    description:
      "Weak login mechanisms (e.g., 4-digit PINs) enable brute-force attacks. ",
    implications: [
      "Account takeover and unauthorized access",
      "Brute-force attacks and credential stuffing",
      "Bypassing security controls",
    ],
    mitigations: [
      "Enforce biometric authentication (fingerprint, facial recognition). ",
      "Integrate MobiHeal MDM with identity providers like Okta. ",
    ],
  },
  {
    id: "M5",
    title: "Poor Code Quality",
    description:
      "Code vulnerabilities like buffer overflows or SQL injection flaws. ",
    implications: [
      "Arbitrary code execution",
      "Data injection and manipulation",
      "Denial of service",
    ],
    mitigations: [
      "Conduct static/dynamic code analysis via MobiHeal's CI/CD pipelines. ",
    ],
  },
  {
    id: "M6",
    title: "Code Tampering",
    description:
      "Reverse engineering or repackaging apps to inject malicious code. ",
    implications: [
      "Malicious code injection",
      "Circumvention of security controls",
      "Intellectual property theft",
    ],
    mitigations: [
      "Use MobiHeal's app shielding to detect tampering in real time. ",
    ],
  },
  {
    id: "M7",
    title: "Unintended Data Leakage",
    description:
      "Side-channel leaks via logs, clipboards, or third-party SDKs. ",
    implications: [
      "Exposure of sensitive data through unintentional channels",
      "Privacy violations",
      "Compliance issues",
    ],
    mitigations: [
      "Disable clipboard access for corporate apps using MobiHeal's policies. ",
    ],
    example: "A banking app leaking credentials through Android's clipboard. ",
  },
  {
    id: "M8",
    title: "Improper Session Handling",
    description: "Long-lived sessions or insecure token storage. ",
    implications: [
      "Session hijacking",
      "Unauthorized access to user accounts",
      "Bypassing authentication",
    ],
    mitigations: [
      "Enforce session timeouts and token revocation via MobiHeal MDM. ",
    ],
  },
  {
    id: "M9",
    title: "Insecure Communications",
    description: "Unencrypted data transmission over public networks. ",
    implications: [
      "Eavesdropping and data interception",
      "Man-in-the-middle attacks",
      "Exposure of sensitive data in transit",
    ],
    mitigations: ["Automate VPN configurations for remote app access. "],
  },
  {
    id: "M10",
    title: "Outdated Components",
    description: "Using deprecated libraries with known vulnerabilities. ",
    implications: [
      "Exploitable vulnerabilities from unpatched libraries",
      "Increased attack surface",
      "Non-compliance with security standards",
    ],
    mitigations: [
      "MobiHeal's automated patch management updates dependencies nightly. ",
    ],
  },
];
// export const faqs = [
//   // General FAQs
//   {
//     category: "general",
//     question: " What is MobiHeal MDM?",
//     answer: "MDM is a type of security software that enables IT administrators to control, secure, and enforce policies on employee smartphones, tablets, and other devices. It allows organizations to ensure that corporate data is protected, regardless of where the device is located."
//   },
//   {
//     category: "general",
//     question: "How does SecureMDM protect corporate data?",
//     answer: "SecureMDM protects corporate data through multiple layers of security, including device encryption, application management, secure containers, data loss prevention policies, and remote wipe capabilities. These features ensure sensitive information remains protected, even if a device is lost or stolen."
//   },
//   {
//     category: "general",
//     question: "Can I manage both iOS and Android devices?",
//     answer: "Yes, SecureMDM provides comprehensive support for both iOS and Android devices, allowing you to manage your entire fleet from a single console regardless of operating system. Our platform also supports Windows and macOS devices for complete endpoint management."
//   },

//   // Features FAQs
//   {
//     category: "features",
//     question: "What is the difference between BYOD and corporate-owned device management?",
//     answer: "BYOD (Bring Your Own Device) management focuses on separating work and personal data on employee-owned devices through containerization, ensuring corporate security without compromising user privacy. Corporate-owned device management provides more comprehensive control over company-owned devices, with full management of device settings, applications, and security policies."
//   },
//   {
//     category: "features",
//     question: "What is Kiosk Mode and how does it work?",
//     answer: "Kiosk Mode allows you to lock down a device to run only specific applications, preventing users from accessing other features or settings. This is ideal for customer-facing deployments, such as in retail, hospitality, or healthcare settings. You can configure devices to run in single-app or multi-app mode with customized branding and settings."
//   },
//   {
//     category: "features",
//     question: "How does Remote Lock & Wipe work?",
//     answer: "Remote Lock allows administrators to instantly lock a lost or stolen device to prevent unauthorized access. Remote Wipe goes further by completely erasing all data from the device or selectively wiping only corporate data. These actions can be triggered from the admin console as soon as a device is reported lost or stolen."
//   },

//   // Security FAQs
//   {
//     category: "security",
//     question: "How does SecureMDM handle data encryption?",
//     answer: "SecureMDM enforces strong encryption policies for both data at rest and data in transit. We support industry-standard encryption protocols and can enforce device-level encryption, app-level encryption, and secure communication channels. For BYOD scenarios, we use containerization to encrypt only corporate data without affecting personal information."
//   },
//   {
//     category: "security",
//     question: "Is SecureMDM compliant with industry regulations?",
//     answer: "Yes, SecureMDM is designed to help organizations maintain compliance with major regulations including GDPR, HIPAA, PCI DSS, SOX, and CCPA. We provide detailed audit logs, compliance reports, and security controls that align with industry standards and best practices.",
//     link: {
//       text: "View our compliance certifications",
//       url: "/compliance"
//     }
//   },
//   {
//     category: "security",
//     question: "How does SecureMDM prevent data leakage?",
//     answer: "SecureMDM implements comprehensive data loss prevention (DLP) measures including app blacklisting/whitelisting, clipboard controls, file sharing restrictions, screenshot prevention, watermarking, and containerization of corporate data. These controls prevent sensitive information from being shared outside approved channels."
//   },

//   // Pricing FAQs
//   {
//     category: "pricing",
//     question: "How is SecureMDM priced?",
//     answer: "SecureMDM is priced per device per month, with different tiers based on the features you need. Our Basic plan starts at $4/device/month, Essential at $8/device/month, and Professional at $12/device/month. We offer discounts for annual billing and volume licensing.",
//     link: {
//       text: "View detailed pricing",
//       url: "/pricing"
//     }
//   },
//   {
//     category: "pricing",
//     question: "Is there a free trial available?",
//     answer: "Yes, we offer a 14-day free trial that includes full access to all features. You can manage up to 25 devices during the trial period with no credit card required. Our team provides support throughout the trial to help you evaluate the solution properly."
//   },
//   {
//     category: "pricing",
//     question: "Can I change plans as my needs evolve?",
//     answer: "Absolutely. You can upgrade your plan at any time, and the new pricing will be prorated for the remainder of your billing cycle. Downgrades will take effect at the start of your next billing cycle. Our flexible licensing ensures you only pay for what you need."
//   },

//   // Implementation FAQs
//   {
//     category: "implementation",
//     question: "How do I deploy SecureMDM to my organization?",
//     answer: "Deployment is simple with multiple enrollment options including QR code scanning, email invitations, or zero-touch enrollment for corporate devices. Our team provides comprehensive onboarding support to ensure a smooth implementation, including configuration assistance, policy setup, and user training."
//   },
//   {
//     category: "implementation",
//     question: "How long does implementation typically take?",
//     answer: "For most organizations, basic implementation can be completed in 1-2 days. More complex deployments with custom integrations and policies may take 1-2 weeks. Our implementation team works with you to create a realistic timeline based on your specific requirements."
//   },
//   {
//     category: "implementation",
//     question: "Can SecureMDM integrate with our existing systems?",
//     answer: "Yes, SecureMDM offers robust integration capabilities with popular identity providers (Azure AD, Okta, Google Workspace), enterprise systems (Microsoft 365, Google Workspace, Slack), and security tools (SIEM solutions, IAM systems). We also provide API access for custom integrations with your internal systems."
//   },

//   // Support FAQs
//   {
//     category: "support",
//     question: "What support options are available?",
//     answer: "Support options vary by plan. Basic plans include email support during business hours. Essential plans add phone support during extended business hours. Professional plans include 24/7 priority support with dedicated account management. All customers have access to our knowledge base, community forums, and regular webinars."
//   },
//   {
//     category: "support",
//     question: "Do you offer training for administrators?",
//     answer: "Yes, we provide comprehensive admin training through multiple channels. Essential and Professional plans include live admin training sessions. All customers have access to on-demand training videos, documentation, and regular webinars covering both basic and advanced topics."
//   },
//   {
//     category: "support",
//     question: "What is your uptime guarantee?",
//     answer: "SecureMDM guarantees 99.9% uptime for our cloud services, with transparent status monitoring available at status.securemdm.com. For organizations with stringent uptime requirements, our Professional plan includes enhanced SLAs with up to 99.99% guaranteed uptime."
//   }
// ];
export const faqs = [
  // General FAQs
  {
    category: "general",
    question: "What is MobiHeal MDM?",
    answer:
      "MobiHeal MDM is our enterprise-grade Mobile Device Management solution that enables IT teams to centrally enroll, configure, monitor and secure corporate and BYOD Android and iOS devices.",
  },
  {
    category: "general",
    question: "Which platforms and device types are supported?",
    answer:
      "MobiHeal MDM supports Android 9.0 and above (Android Enterprise-compliant devices) and iOS 12.0 and above.",
  },
  {
    category: "general",
    question: "How do I enroll devices?",
    answer:
      "MobiHeal MDM supports multiple enrollment options including Zero-touch enrollment, QR-code provisioning, BYOD/profile owner mode, and manual token-based enrollment. Admins can generate enrollment profiles in the console and distribute them via email or QR code.",
  },

  // Features FAQs
  {
    category: "features",
    question: "What enrollment modes are available?",
    answer:
      "MobiHeal supports Corporate-Owned Single-Use (Kiosk), Fully Managed, COPE (Corporate-Owned, Personally Enabled), and Work-Profile (BYOD) modes.",
  },
  {
    category: "features",
    question: "How are applications managed and distributed?",
    answer:
      "Apps can be deployed via public stores or a private enterprise store. MobiHeal supports silent push, app blacklisting/whitelisting, runtime permission configuration, and managed app configurations.",
  },
  {
    category: "features",
    question: "Can users still install personal apps?",
    answer:
      "Yes, in BYOD mode, users can install personal apps freely. Corporate data and apps remain encrypted and containerized under IT control.",
  },
  {
    category: "features",
    question: "What reporting and analytics are available?",
    answer:
      "    • Real-time device health dashboard (compliance, connectivity, OS version), Usage reports (app usage durations), Security audit logs (policy violations, remote actions), Custom alerts: Email/SMS triggers on critical events",
  },

  // Security FAQs

  {
    category: "security",
    question: "How does MobiHeal MDM ensure data security?",
    answer:
      "MobiHeal enforces AES-256 encryption, compliance policies, and DLP features like blocking copy-paste, screenshots, and USB transfers.",
  },
  {
    category: "security",
    question: "What happens if a device is lost or stolen?",
    answer:
      "MobiHeal allows remote lock, selective wipe of corporate data, or full factory reset depending on ownership and severity.",
  },
  {
    category: "security",
    question: "How do I configure network settings (Wi-Fi, VPN etc.)?",
    answer:
      "Network settings like Wi-Fi SSIDs and VPNs can be pushed via Policy Templates, scoped by groups, departments, or tags.",
  },

  // Pricing FAQs
  {
    category: "pricing",
    question: "How is MobiHeal MDM priced?",
    answer:
      "MobiHeal is priced per device per month. Volume and long-term contract discounts apply. Add-ons like advanced analytics and SOC integration are available separately.",
  },
  {
    category: "pricing",
    question: "How is licensing and pricing structured?",
    answer:
      "   Per-device, per-month subscription (billed annually), Volume discounts starting at 101 devices onwards ,Enterprise term discounts for 24- and 36-month commitment, Add-on modules (Managed SOC integration, advanced analytics) available as separate SKUs",
  },
  {
    category: "pricing",
    question: "Is there a free trial available?",
    answer:
      "Yes, a 14-day free trial is available with full access for up to 25 devices and no credit card required.",
  },
  {
    category: "pricing",
    question: "Can I change plans as my needs evolve?",
    answer:
      "Plans can be upgraded or downgraded at any time. Pricing changes are prorated or applied at the next cycle as appropriate.",
  },

  // Implementation FAQs
  {
    category: "implementation",
    question: "How do I deploy MobiHeal MDM to my organization?",
    answer:
      "Deployment involves creating an enrollment profile and using methods like QR codes or email links. Our team offers onboarding assistance.",
  },
  {
    category: "implementation",
    question: "How do I troubleshoot common enrollment issues?",
    answer:
      "Check connectivity, date/time sync, and profile validity. Ensure the MobiHeal Buddy App is installed and configured properly.",
  },
  {
    category: "implementation",
    question: "Can MobiHeal integrate with our existing systems?",
    answer:
      "Yes, MobiHeal supports certificate-based conditional email access for all major email service providers.",
  },

  // Support FAQs
  {
    category: "support",
    question: "What support channels and escalation process do you offer?",
    answer:
      "Support includes email and call options with a 4-hour initial response. Enterprise users get a dedicated account manager and priority SLAs.",
  },
  {
    category: "support",
    question: "Do you offer training for administrators?",
    answer:
      "Yes, we provide on-demand videos, documentation, live sessions for advanced users, and onboarding training.",
  },
  {
    category: "support",
    question: "How do I request new features or submit feedback?",
    answer:
      "Contact support or your account manager. Feature requests are reviewed quarterly and prioritized based on demand and impact.",
  },
];


export const testimonials = [
  {
    quote:
      "Managing and security for our fully-managed Android fleet in an intranet-only shipyard environment was a constant challenge. MobiHeal's robust offline policy enforcement and real-time compliance monitoring ensure uninterrupted operations and airtight device security—even without internet connectivity.",
    author: "Naval Shipyard",
    position: "",
    rating: 5,
    industry: "government",
  },
  {
    quote:
      "In our Android security evaluation lab, we rely on MobiHeal's baseline analytics to measure the impact of firmware patches and surface Indicators of Compromise with precision. Its automated comparison workflows and continuous monitoring have streamlined our vulnerability assessments and accelerated lab turn-around times.",
    author: "Government Research Lab",
    position: "",
    rating: 5,
    industry: "government",
  },
  {
    quote:
      "We needed airtight control over student Android tablets for our LMS—limiting access to approved apps and monitoring usage in real time. MobiHeal's policy-driven controls and live device insights have transformed our digital classrooms, ensuring focus and security without constant manual oversight.",
    author: "CHMES",
    position: "",
    rating: 4.5,
    industry: "education",
  },
  {
    quote:
      "Distributing large educational packages to our field educators across remote locations used to be a logistical nightmare. MobiHeal's bulk file push and usage analytics let us seamlessly deliver content and track engagement patterns—empowering our Acharyas with timely resources and central admins with actionable insights.",
    author: "Ekal Sansthan",
    position: "",
    rating: 5,
    industry: "education",
  },
  {
    quote:
      "Managing our pre-loaded educational tablets to restrict them to approved LMS content was a constant administrative burden—especially after students discovered workarounds in our previous MDM. MobiHeal's strict lockdown and app whitelisting sealed up this critical gap, while its usage analytics give us real-time visibility into student engagement.",
    author: "Tabschool",
    position: "",
    rating: 5,
    industry: "education",
  },
  {
    quote:
      "Our medical reps carry highly sensitive drug formulation content on their company‐issued Android devices, so we needed rock‐solid security and oversight. MobiHeal's device security, real‐time location tracking, and remote lock/wipe capabilities give us end‐to‐end control—ensuring confidential materials never fall into the wrong hands.",
    author: "A pharma company",
    position: "",
    rating: 5,
    industry: "healthcare",
  },
  {
    quote:
      "Controlling leakage of our sensitive design and commercial data across corporate and employee devices was mission-critical. MobiHeal's USB data transfer blocking, screenshot restrictions, secure work-profile containerization, and remote lock/wipe capabilities delivered airtight data sanctity—giving us complete peace of mind over our intellectual property.",
    author: "An electrical hardware manufacturing company",
    position: "",
    rating: 5,
    industry: "manufacturing",
  },
  {
    quote:
      "Enabling BYOD for our field sales team without compromising client confidentiality was non-negotiable. MobiHeal's work-profile containerization, conditional access policies, and remote lock/wipe capabilities gave us ironclad data sanctity—allowing agents to use personal devices while fully adhering to RBI and DPDP mandates.",
    author: "NBFC",
    position: "",
    rating: 5,
    industry: "finance",
  },
  {
    quote:
      "Transitioning to employee-owned devices used to be a regulatory minefield. With MobiHeal's conditional access control, secure work profiles, and instant remote lock/wipe, we now enforce real-time policy checks and ensure end-to-end client data protection—keeping us audit-ready at all times.",
    author: "Banking Institution",
    position: "",
    rating: 4,
    industry: "finance",
  },
  {
    quote:
      "Rolling out fully-managed Android tablets for our in-store POS and self-checkout kiosks was a game-changer. MobiHeal's kiosk-mode lockdown ensures zero drift from approved workflows, while controlled updates and high-availability monitoring keep our registers live—even during peak hours. The result? Faster checkouts, fewer support tickets, and a modern retail experience that customers notice.",
    author: "Major Retail Chain",
    position: "",
    rating: 5,
    industry: "retail",
  },
  {
    quote:
      "Our hotel lobby and guest rooms now feature interactive infotainment and self-service tablets secured end-to-end by MobiHeal. Kiosk-mode enforces brand-approved apps only, scheduled OS updates eliminate downtime, and real-time health checks guarantee 24×7 availability. The outcome is elevated guest satisfaction, streamlined operations, and zero after-hours support emergencies.",
    author: "Global Hospitality Brand",
    position: "",
    rating: 5,
    industry: "hospitality",
  },
  {
  quote:
    "With stringent internal security protocols and national data sensitivity at stake, adopting MobiHeal’s MDM was a mission-critical move. Its advanced device encryption, remote control features, and zero-trust access model allowed us to securely manage field devices—even in air-gapped or restricted environments—while staying fully compliant with government cybersecurity directives.",
  author: "DRDO",
  position: "",
  rating: 5,
  industry: "defense",
},
];


export const partners = [
  {
    name: "I-KALL",
    description: "Hardware bundling and co-branding for end-user devices",
    partnerType: "OEM Partner",
    imageSrc: partner7,
  },
  {
    name: "Ira-Wishtel",
    description: "Hardware bundling and co-branding for end-user devices",
    partnerType: "OEM Partner",
    imageSrc: partner6,
  },
  {
    name: "Frux Technologies",
    description: "Pan‐India delivery through affiliated MSPs",
    partnerType: "Distributor",
    imageSrc: partner8,
  },
  {
    name: "INVIA",
    description:
      "Implementation, managed services, custom integrations, and training",
    partnerType: "Value‐Added Reseller",
    imageSrc: partner1,
  },
  {
    name: "Cybernet Security",
    description:
      "Implementation, managed services, custom integrations, and training",
    partnerType: "Value‐Added Reseller",
    imageSrc: partner3,
  },
  {
    name: "Cybermantra",
    description:
      "Implementation, managed services, custom integrations, and training",
    partnerType: "Value‐Added Reseller",
    imageSrc: partner2,
  },
  {
    name: "TCIL",
    description:
      "Govt. liaison, compliance clearances, and tender facilitation, Large‐scale enterprise rollouts",
    partnerType: "Consortium Partner",
    imageSrc: partner5,
  },
  {
    name: "ITIL",
    description:
      "Govt. liaison, compliance clearances, and tender facilitation, Large‐scale enterprise rollouts",
    partnerType: "Consortium Partner",
    imageSrc: partner4,
  },
   
];
export const clients = [
  {
    name: "Indian Air Force (IAF)",
    sector: "Defence & Aerospace",
    imageSrc: client4,
  },
  {
    name: "Indian Navy (IN)",
    sector: "Defence & Aerospace",
    imageSrc: client5,
  },
  {
    name: "DRDO",
    sector: "Defence & Aerospace",
    imageSrc: client1,
  },
  {
    name: "CHMES",
    sector: "NGOs & Social Impact",
    imageSrc: client2,
  },
  {
    name: "NCAHT-AIIMS",
    sector: "NGOs & Social Impact",
    imageSrc: client12,
  },
  {
    name: "Saksham Disability",
    sector: "NGOs & Social Impact",
    imageSrc: client8,
  },
  {
    name: "Saktek Assistive Tech",
    sector: "NGOs & Social Impact",
    imageSrc: client7,
  },
  {
    name: "Ekal Sansthan",
    sector: "NGOs & Social Impact",
    imageSrc: client3,
  },
  {
    name: "TabSchool",
    sector: "Education/ Ed Tech",
    imageSrc: client9,
  },
  {
    name: "Bioleen Pharma",
    sector: "Healthcare & Pharma",
    imageSrc: client10,
  },
  {
    name: "ADI Insulations",
    sector: "Industrial",
    imageSrc: client6,
  },
  {
    name: "Frux",
    sector: "Industrial",
    imageSrc: partner8,
  },
];
