import { useLocation } from "react-router-dom";
import ContactForm from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const siteUrl = import.meta.env.VITE_SITE_URL;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const inquiryType = searchParams.get("type") || "";

  return (
    <>
    <Helmet>
  {/* Basic SEO */}
  <title>Contact MobiHeal | Book a Demo or Speak with MDM Experts</title>
  <meta
    name="description"
    content="Need answers fast? Reach our India-based experts for demos, pricing, POCs or technical queries."
  />
  <meta
    name="keywords"
    content="contact MobiHeal, book demo, MDM experts, pricing enquiry, technical support, POC request, India cybersecurity startup"
  />

  {/* Canonical */}
  <link rel="canonical" href={`${siteUrl}/contact`} />

  {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${siteUrl}/contact`} />
  <meta property="og:title" content="Contact MobiHeal | Book a Demo or Speak with MDM Experts" />
  <meta
    property="og:description"
    content="Need answers fast? Reach our India-based experts for demos, pricing, POCs or technical queries."
  />
  <meta
    property="og:image"
    content={`${siteUrl}/assets/mobiheal_logo.webp`}
  />
  <meta property="og:image:alt" content="MobiHeal contact support team illustration" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={`${siteUrl}/contact`} />
  <meta name="twitter:title" content="Contact MobiHeal | Book a Demo or Speak with MDM Experts" />
  <meta
    name="twitter:description"
    content="Need answers fast? Reach our India-based experts for demos, pricing, POCs or technical queries."
  />
  <meta
    name="twitter:image"
    content={`${siteUrl}/assets/mobiheal_logo.webp`}
  />
  <meta name="twitter:image:alt" content="MobiHeal contact support team illustration" />
</Helmet>

      <section className="bg-gradient text-white py-16 md:py-20">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Have questions about our MDM solution? Our team is here to help.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-neutral-800">Get in Touch</h2>
            <p className="text-neutral-600">
              Questions about features, pricing, or a demo? We're happy to help.
            </p>

            <div className="flex items-start">
              <MapPin className="h-5 w-5 mt-1 mr-4 text-primary" />
              <div>
                <h3 className="font-medium text-neutral-800">Office Location</h3>
                <p className="text-neutral-600">
                  2B-5D, R&I Park, IIT Delhi, New Delhi – 110016
                  <br /><br />
                  F-200, FF, Phase-I, New Palam Vihar, Sector 110, Gurugram – 122017
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-5 w-5 mt-1 mr-4 text-primary" />
              <div>
                <h3 className="font-medium text-neutral-800">Phone</h3>
                <p className="text-neutral-600"> +91 11 6926 8029</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-5 w-5 mt-1 mr-4 text-primary" />
              <div>
                <h3 className="font-medium text-neutral-800">Email</h3>
                <p className="text-neutral-600"> support@mobiheal.in</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="h-5 w-5 mt-1 mr-4 text-primary" />
              <div>
                <h3 className="font-medium text-neutral-800">Business Hours</h3>
                <p className="text-neutral-600">
                  Mon - Fri: 9:00 AM - 6:00 PM IST
                  <br />
                  24/7 Support for Professional Plan customers
                </p>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              {[
                ["https://www.linkedin.com/company/mobisecin", "linkedin"],
                ["https://www.twitter.com/mobisec_/", "twitter"],
                ["https://www.facebook.com/mobisec.in", "facebook"],
                ["https://www.youtube.com/@mobisec4594", "youtube"],
                ["https://www.instagram.com/mobisec_", "instagram"],
              ].map(([url, icon], idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-primary"
                >
                  <i className={`ri-${icon}-fill text-xl`} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <ContactForm initialSubject={inquiryType} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-neutral-800 text-center mb-8">
            What Happens Next?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              ["We'll Get in Touch", "Our team will contact you within 1 business day."],
              ["Discovery Call", "We'll understand your needs in a quick call."],
              ["Tailored Solution", "You’ll get a custom demo and proposal."],
            ].map(([title, desc], i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-primary text-white text-xl font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">{title}</h3>
                <p className="text-neutral-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
