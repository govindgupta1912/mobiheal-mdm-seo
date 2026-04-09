import { Suspense, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
import logo from "../../assets/mobiheal_logo.webp"; // Adjust the path as necessary
const API_URL = import.meta.env.VITE_API_BASE_URL;
const Help_URL = import.meta.env.VITE_HELP_URL;

const Header = () => {
  const location = useLocation().pathname;

  return (
    // </header>
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto w-full  px-2 sm:px-4 md:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between gap-3 lg:gap-4 py-2 flex-nowrap">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="MobiHeal Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-2 md:gap-3 flex-wrap min-w-0 text-sm lg:text-base">
            <DesktopNavigation currentPath={location} />
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-1 md:space-x-2 flex-shrink-0">
            <Button
              variant="ghost"
              asChild
              className="font-medium whitespace-nowrap text-sm lg:text-base px-2 md:px-3"
            >
              <a
                href={`${API_URL}/login`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sign in to MobiHeal"
              >
                Sign In
              </a>
            </Button>
            <Button
              asChild
              className="font-medium whitespace-nowrap text-sm lg:text-base px-2 md:px-3"
            >
              <a
                href="https://calendly.com/mobiheal-demo/booking"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Request Demo"
              >
                Request Demo
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden ml-auto">
            <MobileNavigation currentPath={location} />
          </div>
        </div>
      </div>
    </header>
  );
};

const DesktopNavigation = ({ currentPath }) => {
  const navigate = useNavigate();

  const handleHashNavigation = (target) => {
    if (currentPath === "/use-cases") {
      window.location.hash = target;
    } else {
      navigate(`/use-cases#${target}`);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent  cursor-pointer focus:outline-none focus:ring-0">
          <span>Features</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => navigate("/features#encryption")}>
            Data Encryption
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/features#work-profile")}>
            Work Profile Container
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/features#remote-lock")}>
            Remote Lock & Wipe
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => navigate("/features#app-management")}
          >
            App Management
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/features")}>
            View All Features
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer focus:outline-none focus:ring-0">
          <span>Use Cases</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => handleHashNavigation("kiosk")}>
            Kiosk Mode Management
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleHashNavigation("corporate")}>
            Corporate-Owned Devices
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleHashNavigation("byod")}>
            BYOD Management
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link
        to="/pricing"
        className={`text-neutral-700 hover:text-primary ${
          currentPath === "/pricing" ? "text-primary" : ""
        }`}
      >
        Pricing
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer focus:outline-none focus:ring-0">
          <span>Resources</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => navigate("/blog")}>
            Blog
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/case-studies")}>
            Case Studies
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/whitepapers")}>
            Whitepapers
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/owasp-mobile")}>
            OWASP Mobile Top 10
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link
        to="/faq"
        className={`text-neutral-700 hover:text-primary ${
          currentPath === "/faq" ? "text-primary" : ""
        }`}
      >
        FAQs
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer focus:outline-none focus:ring-0">
          <span>Partners</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => navigate("/partners")}>
            Partners & Clients
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/testimonials")}>
            Testimonials
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link
        to="/contact"
        className={`text-neutral-700 hover:text-primary ${
          currentPath === "/contact" ? "text-primary" : ""
        }`}
      >
        Contact
      </Link>

      <Link
        to={Help_URL}
        className={`text-neutral-700 hover:text-primary ${
          currentPath === "/faq" ? "text-primary" : ""
        }`}
      >
        Help Center
      </Link>
    </>
  );
};

const MobileNavigation = ({ currentPath }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[300px] sm:w-[400px] flex flex-col overflow-y-auto max-h-screen"
        >
          <nav className="flex flex-col gap-4 mt-6 flex-1 overflow-y-auto">
            {[
              { name: "Home", path: "/" },
              { name: "Features", path: "/features" },
              { name: "Use Cases", path: "/use-cases" },
              { name: "Pricing", path: "/pricing" },
              // { name: "Blog", path: "/blog" },
              // { name: "Case Studies", path: "/case-studies" },
              // { name: "Whitepapers", path: "/whitepapers" },
              // { name: "OWASP Mobile Top 10", path: "/owasp-mobile" },
              { name: "Resources", path: "/resources" },
              { name: "FAQs", path: "/faq" },
              { name: "Partners", path: "/partners" },
              { name: "Testimonials", path: "/testimonials" },
              { name: "Contact", path: "/contact" },
              { name: "Help Center", path: Help_URL },
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`text-left py-2 hover:text-primary ${
                  currentPath.includes(item.path) ? "text-primary" : ""
                }`}
              >
                {item.name}
              </button>
            ))}

            <div className="flex flex-col gap-3 mt-4">
              {/* <Button variant="outline" className="w-full">
                Sign In
              </Button> */}
              <Button variant="outline" asChild className="w-full">
                <a
                  href={`${API_URL}/login`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sign in to MobiHeal"
                >
                  Sign In
                </a>
              </Button>
              <a
                href="https://calendly.com/mobiheal-demo/booking"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full">Request Demo</Button>
              </a>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
