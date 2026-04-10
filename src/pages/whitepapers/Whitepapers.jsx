import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DownloadIcon, FileTextIcon } from "lucide-react";
import { whitepapers } from "@/lib/data";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet-async";

import {
  VITE_SITE_URL as siteUrl,
  VITE_API_BASE_URL as API_URL,
} from "@/config/env";

const categories = [
  { label: "All Topics", value: "all" },
  { label: "Security", value: "security" },
  { label: "BYOD", value: "byod" },
  { label: "Compliance", value: "compliance" },
  { label: "Implementation", value: "implementation" },
];

const Whitepapers = () => {
  // const siteUrl = import.meta.env.VITE_SITE_URL;
  const location = useLocation();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState("all");

  useEffect(() => {
    const fromURL = location.pathname.split("/")[3]?.toLowerCase() || "all";
    setTabValue(fromURL);
  }, [location]);

  const handleTabChange = (value) => {
    setTabValue(value);
    if (value === "all") {
      navigate("/whitepapers");
    } else {
      navigate(`/whitepapers/category/${value}`);
    }
  };

  const getWhitePaper = (category) => {
    return category === "all"
      ? whitepapers
      : whitepapers.filter(
          (study) => study.category.toLowerCase() === category,
        );
  };

  return (
    <>
      <Helmet>
        <title>MobiHeal Whitepapers | Security & Compliance Deep Dives</title>
        <meta
          name="description"
          content="Download authoritative whitepapers on Android Enterprise security, Zero Trust mobility and patch-management."
        />
        <meta
          name="keywords"
          content="mobile security whitepaper, CIS benchmark, zero trust mobility, Android Enterprise security, patch management, compliance"
        />

        {/* Canonical */}
        <link rel="canonical" href={`${siteUrl}/whitepapers`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/whitepapers`} />
        <meta
          property="og:title"
          content="MobiHeal Whitepapers | Security & Compliance Deep Dives"
        />
        <meta
          property="og:description"
          content="Download authoritative whitepapers on Android Enterprise security, Zero Trust mobility and patch-management."
        />
        <meta
          property="og:image"
          content={`${siteUrl}/assets/mobiheal_logo.webp`}
        />
        <meta property="og:image:alt" content="MobiHeal whitepapers preview" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.mobiheal.in/whitepapers"
        />
        <meta
          name="twitter:title"
          content="MobiHeal Whitepapers | Security & Compliance Deep Dives"
        />
        <meta
          name="twitter:description"
          content="Download authoritative whitepapers on Android Enterprise security, Zero Trust mobility and patch-management."
        />
        <meta
          name="twitter:image"
          content={`${siteUrl}/assets/mobiheal_logo.webp`}
        />
        <meta name="twitter:image:alt" content="MobiHeal whitepapers preview" />
      </Helmet>

      <section className="bg-gradient text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Whitepapers & Technical Resources
            </h1>
            <p className="text-lg md:text-xl  text-blue-100">
              In-depth technical resources and research on mobile security
              topics.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={tabValue} onValueChange={handleTabChange}>
            <TabsList className="mx-auto flex flex-wrap w-fit justify-center gap-2 mb-16 sm:mb-14 md:mb-10">
              {categories.map((cat) => (
                <TabsTrigger key={cat.value} value={cat.value}>
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map(({ value }) => (
              <TabsContent key={value} value={value}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {getWhitePaper(value).map((whitepaper, index) => (
                    <div
                      key={index}
                      className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                    >
                      <Link
                        to={`/whitepapers/${whitepaper.slug}`}
                        className="p-6 flex flex-col h-full"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-primary-dark/10 rounded-full p-3">
                            <FileTextIcon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <span className="text-sm text-neutral-500">
                              {whitepaper.type} • {whitepaper.pages} pages
                            </span>
                          </div>
                        </div>

                        <h2 className="text-xl font-bold mb-3 text-neutral-800 hover:text-primary">
                          {whitepaper.title}
                        </h2>
                        <p className="text-neutral-600 mb-6">
                          {whitepaper.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {whitepaper.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-block px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Mobile: buttons follow content, Desktop: push to bottom */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-auto">
                          <Button
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary/5 flex-1"
                            asChild
                          >
                            <Link to={`/whitepapers/${whitepaper.slug}`}>
                              Preview
                            </Link>
                          </Button>
                          <Button className="flex-1" asChild>
                            <Link
                              to={`/whitepapers/${whitepaper.slug}?scrollToForm=true`}
                            >
                              <DownloadIcon className="mr-2 h-4 w-4" />
                              Download
                            </Link>
                          </Button>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Whitepapers;
