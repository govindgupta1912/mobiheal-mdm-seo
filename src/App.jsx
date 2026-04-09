import { Routes, Route } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./lib/queryClient";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import Layout from "./components/layout/Layout";
// import BlogDetailPage from "./pages/BlogDetailPage";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Whitepapers from "./pages/whitepapers/Whitepapers";
import Features from "./pages/Features";
import UseCases from "./pages/UseCases";
import Resources from "./pages/Resources";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Partners from "./pages/Partners";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import OwaspMobile from "./pages/OwaspMobile";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import TermsOfService from "./pages/TermsOfService";
import AcceptableUsePolicy from "./pages/AcceptableUsePolicy";
import NotFound from "./pages/not-found";
import BlogDetailPage from "./pages/BlogDetailPage";
import WhitepaperDetailPage from "./pages/whitepapers/[slug]";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/common/ScrollToTop";
import FloatingButtons from "./components/common/FloatingButtons";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/features" element={<Features />} />

      <Route path="/use-cases" element={<UseCases />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogs/category/:category" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetailPage />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
      <Route
        path="/case-studies/category/:category"
        element={<CaseStudies />}
      />
      <Route path="/whitepapers" element={<Whitepapers />} />
      <Route path="/whitepapers/category/:category" element={<Whitepapers />} />
      <Route path="/whitepapers/:slug" element={<WhitepaperDetailPage />} />

      <Route path="/resources" element={<Resources />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/owasp-mobile" element={<OwaspMobile />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookies-policy" element={<CookiesPolicy />} />
      <Route path="/terms-services" element={<TermsOfService />} />
      <Route path="/acceptable-policy" element={<AcceptableUsePolicy />} />
      <Route path="*" element={<NotFound />} />

      {/* 
     

     
     
      */}
    </Routes>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <Layout>
        <Router />
      </Layout>
      <FloatingButtons />

      {/* <Toaster /> */}
      <ToastContainer position="top-right" autoClose={3000} />
    </QueryClientProvider>
  );
}

export default App;
