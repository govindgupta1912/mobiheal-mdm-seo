import { useState, Suspense } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckIcon } from "lucide-react";

// Replace these with actual paths if you have different images for each
import kiosk from "@/assets/useCases/kiosk_mode_720.webp";
import corporate from "@/assets/useCases/corporate_owned_720.webp";
import byod from "@/assets/useCases/byod_720.webp";

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState("kiosk");

  const useCases = {
    kiosk: {
      title: "Kiosk Mode Management",
      description:
        "Transform standard devices into dedicated-purpose terminals with our advanced kiosk mode. Perfect for customer-facing applications in retail, hospitality, healthcare, and financial services.",
      features: [
        "Single or multi-app configurations for different use cases",
        "Custom branding and UI restriction options",
        "Remote troubleshooting and device maintenance",
        "Scheduled content updates and device reboots",
      ],
      image: kiosk,
      link: "/use-cases#kiosk",
    },
    corporate: {
      title: "Corporate-Owned Device Management",
      description:
        "Take complete control of company-owned devices with full management capabilities for maximum security and productivity.",
      features: [
        "Zero-touch enrollment for faster deployment",
        "Comprehensive policy enforcement and compliance",
        "Advanced security controls and monitoring",
        "Complete device lifecycle management",
      ],
      image: corporate,
      link: "/use-cases#corporate",
    },
    byod: {
      title: "Bring Your Own Device (BYOD)",
      description:
        "Enable secure use of personal devices in the workplace with our privacy-focused work profile solution.",
      features: [
        "Separate work and personal data with containerization",
        "Protect employee privacy while securing corporate data",
        "Selective remote wipe options for work data only",
        "Simple enrollment process via QR code or email",
      ],
      image: byod,
      link: "/use-cases#byod",
    },
  };

  return (
    <section id="usecases" className="py-16 md:py-24 bg-neutral-50 relative z-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
            Tailored for Your Business Needs
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            MobiHeal MDM solution adapts to multiple deployment scenarios across various industries.
          </p>
        </div>

        <Tabs defaultValue="kiosk" onValueChange={setActiveTab} className="relative min-h-[500px]">
          <div className="mb-8 flex justify-center">
            <TabsList className="bg-neutral-100">
              <TabsTrigger value="kiosk">Kiosk Mode</TabsTrigger>
              <TabsTrigger value="corporate">Corporate-Owned</TabsTrigger>
              <TabsTrigger value="byod">BYOD</TabsTrigger>
            </TabsList>
          </div>

          <div className="relative">
            {Object.entries(useCases).map(([key, useCase]) => (
              <TabsContent
                key={key}
                value={key}
                className={`transition-opacity duration-500 ${
                  activeTab === key
                    ? "opacity-100 relative z-10"
                    : "opacity-0 absolute pointer-events-none"
                }`}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4 text-neutral-800">{useCase.title}</h3>
                    <p className="text-neutral-600 mb-6">{useCase.description}</p>
                    <ul className="space-y-3">
                      {useCase.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckIcon className="text-green-500 mt-1 mr-2 h-4 w-4" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link
                        to={useCase.link}
                        className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                      >
                        Learn more about {useCase.title}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-1 h-4 w-4"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <div className="md:w-1/2">
                    <Suspense>
                      <div
                        className="rounded-lg shadow-lg overflow-hidden"
                        style={{
                          height: "450px",
                          backgroundImage: `url('${useCase.image}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    </Suspense>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default UseCasesSection;
