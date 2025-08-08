import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/common/TestimonialCard";
import { testimonials } from "@/lib/data";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/ui/tabs';
import { Helmet } from "react-helmet-async";

const Testimonials = () => {
  // Group testimonials by industry
  const industries = [
    "All",
    "Finance",
    "Healthcare",
    "Retail",
    "Manufacturing",
    "Education",
    "government",
    "hospitality"
  ];

  return (
    <>
  <Helmet>
  <title>MobiHeal Testimonials | Trusted by Security-First Brands</title>
  <meta
    name="description"
    content="Hear how CIOs and CISOs across healthcare, BFSI and defence trust MobiHeal to protect endpoints and slash operating costs."
  />
  <meta
    name="keywords"
    content="MDM testimonials, customer reviews, CIO quotes, CISO feedback, BFSI security, healthcare mobility, defence MDM"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://www.mobiheal.in/testimonials" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.mobiheal.in/testimonials" />
  <meta property="og:title" content="MobiHeal Testimonials | Trusted by Security-First Brands" />
  <meta
    property="og:description"
    content="Hear how CIOs and CISOs across healthcare, BFSI and defence trust MobiHeal to protect endpoints and slash operating costs."
  />
  <meta
    property="og:image"
    content="https://mobiheal-mdm-seo-mgqj.vercel.app/assets/hero.png"
  />
  <meta property="og:image:alt" content="Happy clients using MobiHeal MDM" />

  {/* Twitter / X */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://www.mobiheal.in/testimonials" />
  <meta name="twitter:title" content="MobiHeal Testimonials | Trusted by Security-First Brands" />
  <meta
    name="twitter:description"
    content="Hear how CIOs and CISOs across healthcare, BFSI and defence trust MobiHeal to protect endpoints and slash operating costs."
  />
  <meta
    name="twitter:image"
    content="https://mobiheal-mdm-seo-mgqj.vercel.app/assets/hero.png"
  />
  <meta name="twitter:image:alt" content="Happy clients using MobiHeal MDM" />
</Helmet>

      <section className="bg-gradient text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              See what our customers have to say about their experience with SecureMDM.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-2"> */}
              <Tabs defaultValue="all">
                <TabsList className="flex flex-wrap gap-2 mb-24 sm:mb-14 md:mb-10">
                  {industries.map((industry) => (
                    <TabsTrigger
                      key={industry} 
                      value={industry.toLowerCase()} 
                      id={industry.toLowerCase()}
                      // className={`px-4 py-2 rounded-full ${
                      //   industry === "All" 
                      //     ? "bg-primary text-white" 
                      //     : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                      // }`}
                      
                      
                      className="px-4 py-2 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200 data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      {industry}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <TabsContent value="all">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                      <TestimonialCard
                        key={index}
                        quote={testimonial.quote}
                        author={testimonial.author}
                        position={testimonial.position}
                        rating={testimonial.rating}
                      />
                    ))}
                  </div>
                </TabsContent>
                {industries.slice(1).map((industry) => (
                  <TabsContent key={industry.toLowerCase()} value={industry.toLowerCase()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {testimonials
                        .filter((testimonial) => testimonial.industry === industry.toLowerCase())
                        .map((testimonial, index) => (
                          <TestimonialCard
                            key={index}
                            quote={testimonial.quote}
                            author={testimonial.author}
                            position={testimonial.position}
                            rating={testimonial.rating}
                          />
                        ))}
                    </div>
                  </TabsContent>
                ))}

              </Tabs>
             
        </div>
      </section>
  <section className="py-16 bg-neutral-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-800">
          Explore Our Resources
        </h2>
        <p className="text-lg text-neutral-600 mb-8">
          Discover in-depth guides, whitepapers, and tools to help you make the most of SecureMDM.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/resources">Explore Resources</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5"
            asChild
          >
            <Link to="/case-studies">View Case Studies</Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-neutral-800 text-center">
            Our Success by the Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-neutral-700 font-medium">Customer Satisfaction</div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">2M+</div>
              <div className="text-neutral-700 font-medium">Devices Managed</div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-neutral-700 font-medium">Businesses Protected</div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-neutral-700 font-medium">Uptime Reliability</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to join our success stories?</h2>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Start protecting your mobile fleet today with SecureMDM.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-neutral-100" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
