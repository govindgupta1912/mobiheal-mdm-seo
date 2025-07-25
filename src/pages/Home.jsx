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
</Helmet>
      <Hero className="my-8 py-12 px-4 md:px-8 bg-white shadow-sm rounded-2xl border border-gray-100" />
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
