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

const faqCategories = [
  { name: "General", icon: "🔍", id: "general" },
  { name: "Features", icon: "⚙️", id: "features" },
  { name: "Security", icon: "🔒", id: "security" },
  { name: "Pricing", icon: "💰", id: "pricing" },
  { name: "Implementation", icon: "🚀", id: "implementation" },
  { name: "Support", icon: "🛟", id: "support" }
];

const FAQ = () => {
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
  <link rel="canonical" href="https://www.mobiheal.in/faq" />

  {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.mobiheal.in/faq" />
  <meta property="og:title" content="MobiHeal MDM FAQs | Deployment, Security, ROI Answers" />
  <meta
    property="og:description"
    content="Find answers on platform support, Android Enterprise validation, data privacy, pricing, support SLAs and migration from legacy MDMs."
  />
  <meta
    property="og:image"
    content="https://mobiheal-mdm-seo-mgqj.vercel.app/assets/mobiheal_logo.webp"
  />
  <meta property="og:image:alt" content="MobiHeal MDM FAQs illustration" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://mobiheal-mdm-seo-mgqj.vercel.app/faq" />
  <meta name="twitter:title" content="MobiHeal MDM FAQs | Deployment, Security, ROI Answers" />
  <meta
    name="twitter:description"
    content="Find answers on platform support, Android Enterprise validation, data privacy, pricing, support SLAs and migration from legacy MDMs."
  />
  <meta
    name="twitter:image"
    content="https://mobiheal-mdm-seo-mgqj.vercel.app/assets/mobiheal_logo.webp"
  />
  <meta name="twitter:image:alt" content="MobiHeal MDM FAQs illustration" />
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
                <h2 className="text-xl font-bold mb-4 text-neutral-800">Categories</h2>
                <div className="space-y-2">
                  {faqCategories.map((category) => (
                    <a
                      key={category.id}
                      href={`#${category.id}`}
                      className="flex items-center p-3 rounded-lg hover:bg-neutral-50 text-neutral-700 hover:text-primary"
                    >
                      <span className="mr-2 text-xl">{category.icon}</span>
                      <span>{category.name}</span>
                    </a>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-800 mb-3">Can't find what you're looking for?</h3>
                  <p className="text-neutral-600 text-sm mb-4">Our support team is here to help with any questions you may have.</p>
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
                    <span className="mr-2 text-2xl">{category.icon}</span>
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
                                  <Link to={faq.link.url} className="text-primary hover:underline">
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
            Our team is ready to answer any questions you may have about our MDM solution.
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
