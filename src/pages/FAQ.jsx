import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";
import { Helmet } from "react-helmet-async";
import {
  Search,
  Settings2,
  ShieldCheck,
  CreditCard,
  Rocket,
  LifeBuoy,
} from "lucide-react";

import {
  VITE_SITE_URL as siteUrl,
  VITE_API_BASE_URL as API_URL,
} from "@/config/env";

const faqCategories = [
  { name: "General", icon: Search, id: "general" },
  { name: "Features", icon: Settings2, id: "features" },
  { name: "Security", icon: ShieldCheck, id: "security" },
  { name: "Pricing", icon: CreditCard, id: "pricing" },
  { name: "Implementation", icon: Rocket, id: "implementation" },
  { name: "Support", icon: LifeBuoy, id: "support" },
];

const FAQ = () => {
  //const siteUrl = import.meta.env.VITE_SITE_URL;

  const faqSchema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${siteUrl}/#organization` },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/faq#faqpage`,
        mainEntityOfPage: `${siteUrl}/faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What is MobiHeal MDM?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "MobiHeal MDM is our enterprise-grade Mobile Device Management solution that enables IT teams to centrally enroll, configure, monitor and secure corporate and BYOD Android and iOS devices.",
            },
          },
          {
            "@type": "Question",
            name: "Which platforms and device types are supported?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "MobiHeal MDM supports Android 9.0 and above (Android Enterprise-compliant devices) and iOS 12.0 and above.",
            },
          },
          {
            "@type": "Question",
            name: "How do I enroll devices?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "MobiHeal MDM supports multiple enrollment options including Zero-touch enrollment, QR-code provisioning, BYOD/profile owner mode, and manual token-based enrollment. Admins can generate enrollment profiles in the console and distribute them via email or QR code.",
            },
          },
          {
            "@type": "Question",
            name: "What enrollment modes are available?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "MobiHeal supports Corporate-Owned Single-Use (Kiosk), Fully Managed, COPE (Corporate-Owned, Personally Enabled), and Work-Profile (BYOD) modes.",
            },
          },
          {
            "@type": "Question",
            name: "How are applications managed and distributed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Apps can be deployed via public stores or a private enterprise store. MobiHeal supports silent push, app blacklisting/whitelisting, runtime permission configuration, and managed app configurations.",
            },
          },
          {
            "@type": "Question",
            name: "Can users still install personal apps?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, in BYOD mode, users can install personal apps freely. Corporate data and apps remain encrypted and containerized under IT control.",
            },
          },
          {
            "@type": "Question",
            name: "What reporting and analytics are available?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Real-time device health dashboard (compliance, connectivity, OS version), Usage reports (app usage durations), Security audit logs (policy violations, remote actions), Custom alerts: Email/SMS triggers on critical events",
            },
          },
          {
            "@type": "Question",
            name: "How does MobiHeal MDM ensure data security?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "MobiHeal enforces AES-256 encryption, compliance policies, and DLP features like blocking copy-paste, screenshots, and USB transfers.",
            },
          },
          {
            "@type": "Question",
            name: "What happens if a device is lost or stolen?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "MobiHeal allows remote lock, selective wipe of corporate data, or full factory reset depending on ownership and severity.",
            },
          },
          {
            "@type": "Question",
            name: "How do I configure network settings (Wi-Fi, VPN, etc.)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Network settings like Wi-Fi SSIDs and VPNs can be pushed via Policy Templates, scoped by groups, departments, or tags.",
            },
          },
          {
            "@type": "Question",
            name: "How is MobiHeal MDM priced?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "MobiHeal is priced per device per month. Volume and long-term contract discounts apply. Add-ons like advanced analytics and SOC integration are available separately.",
            },
          },
          {
            "@type": "Question",
            name: "How is licensing and pricing structured?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Per-device, per-month subscription (billed annually), Volume discounts starting at 101 devices onwards, Enterprise term discounts for 24- and 36-month commitment, Add-on modules (Managed SOC integration, advanced analytics) available as separate SKUs",
            },
          },
          {
            "@type": "Question",
            name: "Is there a free trial available?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, a 14-day free trial is available with full access for up to 25 devices and no credit card required.",
            },
          },
          {
            "@type": "Question",
            name: "Can I change plans as my needs evolve?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Plans can be upgraded or downgraded at any time. Pricing changes are prorated or applied at the next cycle as appropriate.",
            },
          },
          {
            "@type": "Question",
            name: "How do I deploy MobiHeal MDM to my organization?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Deployment involves creating an enrollment profile and using methods like QR codes or email links. Our team offers onboarding assistance.",
            },
          },
          {
            "@type": "Question",
            name: "How do I troubleshoot common enrollment issues?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Check connectivity, date/time sync, and profile validity. Ensure the MobiHeal Buddy App is installed and configured properly.",
            },
          },
          {
            "@type": "Question",
            name: "Can MobiHeal integrate with our existing systems?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, MobiHeal supports certificate-based conditional email access for all major email service providers.",
            },
          },
          {
            "@type": "Question",
            name: "What support channels and escalation process do you offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Support includes email and call options with a 4-hour initial response. Enterprise users get a dedicated account manager and priority SLAs.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer training for administrators?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we provide on-demand videos, documentation, live sessions for advanced users, and onboarding training.",
            },
          },
          {
            "@type": "Question",
            name: "How do I request new features or submit feedback?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Contact support or your account manager. Feature requests are reviewed quarterly and prioritized based on demand and impact.",
            },
          },
        ],
      },
    ],
  };
  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>MobiHeal MDM FAQs | Deployment, Security, ROI Answers</title>
        <meta
          name="description"
          content="Find answers on platform support, Android Enterprise validation, data privacy, pricing, support SLAs and migration from legacy MDMs."
        />
        <meta
          name="keywords"
          content="MDM FAQs, Android Enterprise validated, data privacy, MDM migration, support SLA, platform support, licensing"
        />

        {/* Canonical */}
        <link rel="canonical" href={`${siteUrl}/faq`} />

        {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/faq`} />
        <meta
          property="og:title"
          content="MobiHeal MDM FAQs | Deployment, Security, ROI Answers"
        />
        <meta
          property="og:description"
          content="Find answers on platform support, Android Enterprise validation, data privacy, pricing, support SLAs and migration from legacy MDMs."
        />
        <meta
          property="og:image"
          content={`${siteUrl}/assets/mobiheal_logo.webp`}
        />
        <meta
          property="og:image:alt"
          content="MobiHeal MDM FAQs illustration"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${siteUrl}/faq`} />
        <meta
          name="twitter:title"
          content="MobiHeal MDM FAQs | Deployment, Security, ROI Answers"
        />
        <meta
          name="twitter:description"
          content="Find answers on platform support, Android Enterprise validation, data privacy, pricing, support SLAs and migration from legacy MDMs."
        />
        <meta
          name="twitter:image"
          content={`${siteUrl}/assets/mobiheal_logo.webp`}
        />
        <meta
          name="twitter:image:alt"
          content="MobiHeal MDM FAQs illustration"
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="bg-gradient text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Find answers to common questions about our MDM solution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-xl font-bold mb-4 text-neutral-800">
                  Categories
                </h2>
                <div className="space-y-2">
                  {faqCategories.map((category) => (
                    <a
                      key={category.id}
                      href={`#${category.id}`}
                      className="flex items-center p-3 rounded-lg hover:bg-neutral-50 text-neutral-700 hover:text-primary"
                    >
                      <category.icon size={18} className="mr-2 text-primary" />
                      {/* <span className="mr-2 text-xl">{category.icon}</span> */}
                      <span>{category.name}</span>
                    </a>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-800 mb-3">
                    Can't find what you're looking for?
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    Our support team is here to help with any questions you may
                    have.
                  </p>
                  <Link to="/contact" className="block">
                    <Button className="w-full">Contact Support</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {faqCategories.map((category) => (
                <div key={category.id} id={category.id} className="mb-16">
                  <h2 className="text-2xl font-bold mb-6 text-neutral-800 flex items-center">
                    {/* <span className="mr-2 text-2xl">{category.icon}</span> */}
                    <category.icon size={24} className="mr-2 text-primary" />
                    {category.name} Questions
                  </h2>

                  <Accordion type="single" collapsible className="space-y-4">
                    {faqs
                      .filter((faq) => faq.category === category.id)
                      .map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`${category.id}-item-${index}`}
                          className="border border-neutral-200 rounded-lg"
                          itemScope
                          itemProp="mainEntity"
                          itemType="https://schema.org/Question"
                        >
                          <AccordionTrigger
                            className="px-5 py-4 text-left font-medium text-neutral-800 hover:no-underline hover:text-primary"
                            itemProp="name"
                          >
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent
                            className="px-5 pb-4 pt-0 text-neutral-600"
                            itemScope
                            itemProp="acceptedAnswer"
                            itemType="https://schema.org/Answer"
                          >
                            <div itemProp="text">
                              <p>{faq.answer}</p>
                              {faq.link && (
                                <div className="mt-2">
                                  <Link
                                    to={faq.link.url}
                                    className="text-primary hover:underline"
                                  >
                                    {faq.link.text}
                                  </Link>
                                </div>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-800">
            Still have questions?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Our team is ready to answer any questions you may have about our MDM
            solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg">Contact Our Team</Button>
            </Link>
            <Link to="/resources">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Explore Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
