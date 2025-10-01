// import ClientsBanner from "../components/home/ClientsBanner";
import { Helmet } from "react-helmet-async";
import CTASection from "../components/home/CTASection";
import FeaturesSection from "../components/home/FeaturesSection";
import Hero from "../components/home/Hero";
import PartnersSection from "../components/home/PartnersSection";
import PricingSection from "../components/home/PricingSection";
import ResourcesSection from "../components/home/ResourcesSection";
import UseCasesSection from "../components/home/UsesCasesSection";
import FAQSection from "../components/home/FAQSection";
import ContactSection from "../components/home/ContactSection";
import ClientsBanner from "../components/home/ClientsBanner";


const Home = () => {

  const siteUrl = import.meta.env.VITE_SITE_URL;
  
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "MobiHeal Mobile Device Management",
        alternateName: "MobiHeal MDM",
        legalName: "Mobisec Technologies Private Limited",
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        sameAs: [
          "https://www.linkedin.com/company/mobisecin",
          "https://www.twitter.com/mobisec_/",
          "https://www.facebook.com/mobisec.in",
          "https://www.youtube.com/@mobisec4594",
          "https://www.instagram.com/mobisec_"
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: "is-contact@mobiheal.in",
            telephone: "+91-11-6926-8029",
            areaServed: "IN",
            availableLanguage: ["en"]
          }
        ],
        parentOrganization: {
          "@type": "Organization",
          name: "Mobisec Technologies Private Limited",
          url: "https://www.mobisec.in/"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "MobiHeal",
        publisher: { "@id": `${siteUrl}/#organization` }
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#softwareapp`,
        name: "MobiHeal Mobile Device Management",
        alternateName: "MobiHeal MDM",
        url: siteUrl,
        applicationCategory: "SecurityApplication",
        operatingSystem: "Android",
        installUrl: "https://play.google.com/store/apps/details?id=com.mobiheal.buddy",
        publisher: { "@id": `${siteUrl}/#organization` },
        offers: [
          {
            "@type": "Offer",
            name: "Essential plan",
            price: 99,
            priceCurrency: "INR",
            url: `${siteUrl}/pricing/`,
            availability: "https://schema.org/InStock",
            description: "Per device per month. Billed annually. +18% GST."
          },
          {
            "@type": "Offer",
            name: "Professional plan",
            price: 149,
            priceCurrency: "INR",
            url: `${siteUrl}/pricing/`,
            availability: "https://schema.org/InStock",
            description: "Per device per month. Billed annually. +18% GST."
          },
          

        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntityOfPage: siteUrl,
        mainEntity: [
          {
            "@type": "Question",
            name: "Is MobiHeal MDM compliant with industry regulations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, MobiHeal MDM is designed to help organizations maintain compliance with major regulations including DPDP 2023. We provide compliance reports, and security controls that align with industry standards."
            }
          },
          {
            "@type": "Question",
            name: "How does MobiHeal MDM prevent data leakage?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "MobiHeal MDM implements comprehensive data loss prevention (DLP) measures including app blacklisting/whitelisting, clipboard controls, file sharing restrictions, screenshot prevention and containerization of corporate data."
            }
          },
           {
"@type": "Question",
"name": "How is MobiHeal MDM priced?",
"acceptedAnswer": { 
  "@type": "Answer", 
  "text": "MobiHeal MDM is priced per device per month, with different tiers based on the features you need. Our Essential Plan is priced at ₹99/device/month, and Professional at ₹149/device/month. We offer discounts for volume licensing. " }
},
{
"@type": "Question",
"name": "Is there a free trial available?",
"acceptedAnswer": {
  "@type": "Answer",
  "text": "Yes, we offer a 14-day free trial that includes full access to all features. You can manage up to 2 devices during the trial period with no credit card required. Our team provides support throughout the trial to help you evaluate the solution properly."
}
},
{
"@type": "Question",
"name": "Can MobiHeal MDM integrate with our existing systems?",
"acceptedAnswer": {
  "@type": "Answer",
  "text": "Yes, MobiHeal supports certificate-based conditional email access for all major email service providers."
}
},
{
"@type": "Question",
"name": "What support options are available?",
"acceptedAnswer": { 
  "@type": "Answer",
   "text": "Support options vary by plan. Essential plans include email and phone support during business hours. Professional plans include extended priority support with dedicated account management. All customers have access to our knowledge base and regular webinars."
}
},
{
"@type": "Question",
"name": "What is your uptime guarantee?",
"acceptedAnswer": { 
  "@type": "Answer",
  "text": "MobiHeal MDM guarantees 99.9% uptime for our cloud services. For organizations with stringent uptime requirements, our Professional plan includes enhanced SLAs with up to 99.99% guaranteed uptime."
}
}


        ]
      }
    ]
  };

  return (
    <>
     <Helmet>
  <title>MobiHeal MDM | Unified Mobile Device Management & Security</title>
  <meta
    name="description"
    content="Secure, monitor & control Android & iOS fleets with MobiHeal—Android Enterprise-validated UEM delivering zero-touch deployment, compliance and threat defence."
  />
  <meta
    name="keywords"
    content="Mobile Device Management, MobiHeal MDM, Android Enterprise, UEM, device security, remote management, zero-touch, endpoint compliance"
  />
    {/* Canonical */}
  <link rel="canonical" href={siteUrl} />

  {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content={siteUrl} />
  <meta property="og:title" content="MobiHeal MDM | Unified Mobile Device Management & Security" />
  <meta
    property="og:description"
    content="Secure, monitor & control Android & iOS fleets with MobiHeal—Android Enterprise-validated UEM delivering zero-touch deployment, compliance and threat defence."
  />
  <meta
    property="og:image"
    content={`${siteUrl}/assets/mobiheal_logo.webp`}
    />
  <meta property="og:image:alt" content="MobiHeal MDM dashboard preview" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={siteUrl} />
  <meta name="twitter:title" content="MobiHeal MDM | Unified Mobile Device Management & Security" />
  <meta
    name="twitter:description"
    content="Secure, monitor & control Android & iOS fleets with MobiHeal—Android Enterprise-validated UEM delivering zero-touch deployment, compliance and threat defence."
  />
  <meta
    name="twitter:image"
     content={`${siteUrl}/assets/mobiheal_logo.webp`}
  />
  <meta name="twitter:image:alt" content="MobiHeal MDM dashboard preview" />
    {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
</Helmet>
      <Hero className="my-8 py-12  bg-white shadow-sm rounded-2xl border border-gray-100" />
      <ClientsBanner/>
      <FeaturesSection />
      <UseCasesSection />
     <PricingSection />
   <ResourcesSection/>
    <FAQSection />
         <PartnersSection />
<CTASection />
  <ContactSection />
      {/* 
      
      

       
        partners section
        cta section
       */}
    
    </>
  );
};

export default Home;
