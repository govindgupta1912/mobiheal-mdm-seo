import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { whitepaperData } from "@/lib/data";
import { useLocation } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify"; // ✅ import from react-toastify
import "react-toastify/dist/ReactToastify.css";

const formSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  company: z.string().min(1, "Required"),
  users: z.string().optional(),
});

const WhitepaperDetails = ({
  id,
  title,
  seoTitle,
  seoDescription,
  heroSubtitle,
  heroImage,
  highlights,
  downloadForm,
  pdfUrl,
}) => {
  const content = whitepaperData.find((w) => w.id === id);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      users: "",
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("scrollToForm") === "true") {
      const scroll = () => {
        const el = document.getElementById("download-form");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      };
      const raf = requestAnimationFrame(() => {
        setTimeout(scroll, 300);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [location]);

  const handleDownload = async (formData) => {
    try {
      setIsSubmitting(true);

      const response = await fetch("https://your-api.com/submit-whitepaper", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast.success("Form submitted successfully. Download will start shortly.");

      setTimeout(() => {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.setAttribute("download", title);
        link.setAttribute("target", "_blank");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 1000);
    } catch (error) {
      console.error(error);
      toast.error("Form submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient text-white py-18 px-4 sm:py-24 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" className="opacity-20">
            <defs>
              <radialGradient id="bg-grad" cx="50%" cy="50%" r="80%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#bg-grad)" />
          </svg>
        </div>
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16 relative z-10">
          <div className="text-center md:text-left max-w-xl w-full">
            <h1 className="text-4xl font-extrabold leading-tight mb-4">{title}</h1>
            <p className="text-blue-100 mb-6">{heroSubtitle}</p>
            <Button
              onClick={() =>
                document.getElementById("download-form")?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-4 px-6 py-3 text-lg font-semibold bg-white text-primary hover:bg-blue-100"
            >
              Download Whitepaper
            </Button>
          </div>
          <div className="w-full max-w-md flex justify-center">
            <Suspense>
              <img
                src={heroImage}
                alt="Whitepaper Hero"
                className="rounded-2xl shadow-xl object-cover aspect-[4/3] w-full border-4 border-white/20 max-h-[420px]"
              />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-3">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border hover:scale-105 transition-transform"
              >
                <CheckCircle2 className="text-primary w-8 h-8 mb-2" />
                <p className="text-neutral-800 text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Form */}
      {downloadForm?.enabled && pdfUrl && (
        <section id="download-form" className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="container max-w-3xl mx-auto px-4">
            <aside className="relative bg-white/60 backdrop-blur-lg border border-blue-200 shadow-2xl rounded-3xl p-10">
              <h4 className="text-3xl font-bold mb-4 text-center">Get the Full Whitepaper</h4>
              <p className="text-neutral-700 mb-8 text-center">
                Fill out this form to instantly download the whitepaper.
              </p>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleDownload)}
                  className="space-y-5 w-full"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      name="firstName"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name*</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="First Name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="lastName"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name*</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Last Name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email*</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Email Address" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="phone"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Phone Number" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="company"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name*</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Company Name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="users"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>No. of Users</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Number of Users" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md rounded-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Download Now"
                    )}
                  </Button>
                </form>
              </Form>
            </aside>
          </div>
        </section>
      )}
    </>
  );
};

export default WhitepaperDetails;
