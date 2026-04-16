import { Suspense, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// ✅ Use different images for each use case
import kiosk from "@/assets/useCases/kiosk_mode_720.webp";
import corporate from "@/assets/useCases/corporate_owned_720.webp";
import byod from "@/assets/useCases/byod_720.webp";

import {
  VITE_SITE_URL as siteUrl,
  VITE_API_BASE_URL as API_URL,
} from "@/config/env";

const UseCases = () => {
  // const siteUrl = import.meta.env.VITE_SITE_URL;

  const [activeTab, setActiveTab] = useState("kiosk");

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (["kiosk", "corporate", "byod"].includes(hash)) {
        setActiveTab(hash);
      }
    };

    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const useCases = {
    kiosk: {
      id: "kiosk",
      title: "Kiosk Mode Management",
      description:
        "Transform standard devices into dedicated-purpose terminals with our advanced kiosk mode. Perfect for customer-facing applications in retail, hospitality, healthcare, and financial services.",
      features: [
        "Single or multi-app configurations for different use cases",
        "Custom branding and UI restriction options",
        "Remote troubleshooting and device maintenance",
        "Scheduled content updates and device reboots",
        "Touchscreen and hardware button restrictions",
        "Automatic updates during off-hours",
        "Screen timeout and power management controls",
        "Custom splash screens and branding options",
      ],
      image: kiosk,
      industries: [
        {
          name: "Banking & Financial Services",
          description: "Secure customer-facing terminals and ATM interfaces",
        },
        {
          name: "Healthcare",
          description:
            "Patient check-in kiosks and medical information displays",
        },
        {
          name: "Retail",
          description: "Point-of-sale systems and product browsing stations",
        },
        {
          name: "Restaurants",
          description: "Self-ordering kiosks and menu displays",
        },
      ],
    },
    corporate: {
      id: "corporate",
      title: "Corporate-Owned Device Management",
      description:
        "Take complete control of company-owned devices with full management capabilities for maximum security and productivity.",
      features: [
        "Zero-touch enrollment for faster deployment",
        "Comprehensive policy enforcement and compliance",
        "Advanced security controls and monitoring",
        "Complete device lifecycle management",
        "Detailed inventory and asset tracking",
        "Remote support and diagnostics",
        "Software license management",
        "Location-tracking and app usage monitoring",
      ],
      image: corporate,
      industries: [
        {
          name: "Enterprise Corporations",
          description: "Complete fleet management for all company devices",
        },
        {
          name: "Field Services",
          description: "Specialized tools for mobile workforce devices",
        },
        {
          name: "Government & Public Sector",
          description: "High-security configurations for sensitive data",
        },
        {
          name: "Logistics & Transportation",
          description: "Tracking and management for delivery devices",
        },
        {
          name: "Pharma",
          description:
            "Ensure complete data security of enterprise proprietary product data",
        },
      ],
    },
    byod: {
      id: "byod",
      title: "Bring Your Own Device (BYOD)",
      description:
        "Enable secure use of personal devices in the workplace with our privacy-focused work profile solution.",
      features: [
        "Separate work and personal data with containerization",
        "Protect employee privacy while securing corporate data",
        "Selective remote wipe options for work data only",
        "Simple enrollment process via QR code or email",
        "User privacy controls and transparency",
        "Seamless access to corporate resources",
        "Work/personal app separation",
        "Compliance without compromising user experience",
      ],
      image: byod,
      industries: [
        { name: "BFSI", description: "Secure client data on personal devices" },
        {
          name: "Education",
          description: "Faculty and staff accessing school resources remotely",
        },
        {
          name: "Technology",
          description: "Developer-friendly policies with security controls",
        },
        {
          name: "Healthcare",
          description: "On-the-go access to company resources",
        },
      ],
    },
  };

  return (
    <>
      <Helmet>
        {/* Title & Description */}
        <title>
          MDM Use Cases | BFSI, Defence, Healthcare & Rugged Mobility
        </title>
        <meta
          name="description"
          content="See how MobiHeal secures BFSI data, defends air-gapped fleets, enables healthcare mobility and hardens rugged Android devices across logistics and retail."
        />
        <meta
          name="keywords"
          content="MDM use cases, BFSI security, defence mobility, healthcare MDM, rugged device management, logistics, retail kiosk, education tablets"
        />

        {/* Canonical */}
        <link rel="canonical" href={`${siteUrl}/use-cases`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/use-cases`} />
        <meta
          property="og:title"
          content="MDM Use Cases | BFSI, Defence, Healthcare & Rugged Mobility"
        />
        <meta
          property="og:description"
          content="See how MobiHeal secures BFSI data, defends air-gapped fleets, enables healthcare mobility and hardens rugged Android devices across logistics and retail."
        />
        <meta property="og:image" content={`${siteUrl}/assets/use-cases.png`} />
        <meta
          property="og:image:alt"
          content="MobiHeal MDM use case dashboard preview"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${siteUrl}/use-cases`} />
        <meta
          name="twitter:title"
          content="MDM Use Cases | BFSI, Defence, Healthcare & Rugged Mobility"
        />
        <meta
          name="twitter:description"
          content="See how MobiHeal secures BFSI data, defends air-gapped fleets, enables healthcare mobility and hardens rugged Android devices across logistics and retail."
        />
        <meta
          name="twitter:image"
          content={`${siteUrl}/assets/use-cases.png`}
        />
        <meta
          name="twitter:image:alt"
          content="MobiHeal MDM use case dashboard preview"
        />
      </Helmet>

      <section className="bg-gradient text-white py-16 md:py-20">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            MDM Use Cases
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Our mobile device management solution adapts to multiple deployment
            scenarios across various industries.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            value={activeTab}
            onValueChange={(val) => {
              setActiveTab(val);
              window.location.hash = val;
            }}
          >
            <div className="mb-12 flex justify-center">
              <TabsList className="bg-neutral-100">
                <TabsTrigger value="kiosk">Kiosk Mode</TabsTrigger>
                <TabsTrigger value="corporate">Corporate-Owned</TabsTrigger>
                <TabsTrigger value="byod">BYOD</TabsTrigger>
              </TabsList>
            </div>

            {["kiosk", "corporate", "byod"].map((tab) => {
              const useCase = useCases[tab];
              return (
                <TabsContent
                  key={tab}
                  value={tab}
                  className="mt-0 animate-fade-in"
                >
                  <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/2">
                      <h2 className="text-3xl font-bold text-neutral-800 mb-6">
                        {useCase.title}
                      </h2>
                      <p className="text-lg text-neutral-600 mb-8">
                        {useCase.description}
                      </p>

                      <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                        {useCase.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <CheckIcon className="text-green-500 mt-1 mr-2 h-4 w-4" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                        Target Industries
                      </h3>
                      <div className="space-y-4 mb-8">
                        {useCase.industries.map((industry, index) => (
                          <div
                            key={index}
                            className="bg-white p-2 border border-neutral-100 rounded-lg"
                          >
                            <h4 className="font-medium text-neutral-800">
                              {industry.name}
                            </h4>
                            <p className="text-sm text-neutral-600">
                              {industry.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      <Button
                        className="mt-4 hover:scale-95 transition-transform"
                        asChild
                      >
                        <Link to="/contact">
                          Get Started with {useCase.title}
                        </Link>
                      </Button>
                    </div>

                    <div className="md:w-1/2 mt-8 md:mt-0">
                      <Suspense>
                        <div
                          className="rounded-lg shadow-lg w-full overflow-hidden min-h-[250px] sm:min-h-[350px] md:min-h-[450px]"
                          style={{
                            backgroundImage: `url(${useCase.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        ></div>
                      </Suspense>
                      <div className="bg-white p-6 mt-6 rounded-lg border border-neutral-200">
                        <h3 className="text-xl font-semibold mb-4 text-neutral-800">
                          Success Story
                        </h3>
                        <blockquote className="italic border-l-4 border-primary pl-4 text-neutral-600 mb-4">
                          {tab === "kiosk" &&
                            "Distributing large educational packages..."}
                          {tab === "corporate" &&
                            "Controlling leakage of our sensitive design..."}
                          {tab === "byod" &&
                            "Our medical reps carry highly sensitive drug..."}
                        </blockquote>
                        <div className="text-right text-sm text-neutral-500">
                          {tab === "kiosk" && "— Ekal Sansthan"}
                          {tab === "corporate" && "— ADI Insulations"}
                          {tab === "byod" && "— Bioleen Pharma IT Director"}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
            Ready to implement these solutions in your organization?
          </h2>
          <p className="text-neutral-600 mb-8">
            Our team of MDM experts can help you determine the right approach
            for your specific business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a
                href="https://calendly.com/mobiheal-demo/booking"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Request Demo"
              >
                Schedule a Consultation
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 hover:scale-95 transition-transform"
              asChild
            >
              <Link to="/pricing">View Pricing Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseCases;
