import { Routes, Route } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";

import Blog from "./pages/Blog";
import Layout from "./components/layout/Layout";
import { queryClient } from "./lib/queryClient";


function Router() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      {/* <Route path="/features" element={<Features />} />
      <Route path="/use-cases" element={<UseCases />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogs/category/:category" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetailPage />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/case-studies/category/:category" element={<CaseStudies />} />
      <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
      <Route path="/whitepapers" element={<Whitepapers />} />
      <Route path="/whitepapers/category/:category" element={<Whitepapers />} />
      <Route path="/whitepapers/:slug" element={<WhitepaperDetailPage />} />
      <Route path="/owasp-mobile" element={<OwaspMobile />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookies-policy" element={<CookiesPolicy />} />
      <Route path="/terms-services" element={<TermsOfService />} />
      <Route path="/acceptable-policy" element={<AcceptableUsePolicy />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

function App() {
  return (

    <QueryClientProvider client={queryClient}>
      {/* <ScrollToTop /> */}
      <Layout>
        <Router />
      </Layout>
      {/* <Toaster /> */}
    </QueryClientProvider>
    
  );
}

export default App;
