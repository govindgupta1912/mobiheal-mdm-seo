import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.webp";
import { Suspense } from "react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden text-white py-12 sm:py-16 lg:py-10 bg-gradient">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold mb-6 leading-tight max-w-2xl">
              Enterprise Mobile Device Management for Modern Businesses
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-blue-100 max-w-xl mx-auto md:mx-0">
              Secure, manage, and monitor your corporate and BYO devices to protect enterprise data while enhancing productivity.
            </p>

            <div className="flex flex-wrap sm:flex-nowrap justify-center md:justify-start gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-neutral-100 w-full sm:w-auto"
                onClick={() => navigate("/contact")}
              >
                Get Started
              </Button>
              <a
                href="https://calendly.com/mobiheal-demo/booking"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  Book Demo
                </Button>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-6 lg:pr-10">
            <Suspense>
              <img
                src={hero}
                alt="Mobile Device Management Dashboard"
                className="
                  w-full
                  md:w-[95%] lg:w-[90%]
                  min-h-[250px] sm:min-h-[300px] md:min-h-[380px] lg:min-h-[420px]
                  object-contain
                "
              />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
