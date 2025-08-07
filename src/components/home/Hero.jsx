import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.webp";
import { Suspense } from "react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden text-white py-20  bg-gradient">
      {/* Optional dark overlay for contrast */}
      {/* <div className="absolute inset-0 bg-black/30 z-0" /> */}

      <div className="relative z-10 container mx-auto px-14 sm:px-18 lg:px-22">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Enterprise Mobile Device Management for Modern Businesses
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Secure, manage, and monitor your corporate and BYO devices to protect enterprise data while enhancing productivity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-neutral-100"
                onClick={() => navigate("/contact")}
              >
                Get Started
              </Button>
              <a
                href="https://calendly.com/mobiheal-demo/booking"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  Book Demo
                </Button>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center items-center ml-10">
            <Suspense>
            <img
              src={hero}
              alt="Hero"
              className="w-full max-w-md md:max-w-lg"
            />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
