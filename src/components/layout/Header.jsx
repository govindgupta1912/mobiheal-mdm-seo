import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";

const Header = () => {
  const location = useLocation().pathname;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {/* Add your logo or text here */}
              <span className="font-bold text-lg">MobiHeal</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <DesktopNavigation currentPath={location} />
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="font-medium">
              Sign In
            </Button>
            <a
              href="https://calendly.com/mobiheal-demo/booking"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="font-medium">Request Demo</Button>
            </a>
          </div>

          {/* Mobile Menu */}
          <MobileNavigation currentPath={location} />
        </div>
      </div>
    </header>
  );
};

const DesktopNavigation = ({ currentPath }) => {
  const navigate = useNavigate();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer">
          <span>Features</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => navigate("/features#data-encryption")}>
            Data Encryption
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/features#work-profile")}>
            Work Profile Container
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/features#remote-lock")}>
            Remote Lock & Wipe
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/features#app-management")}>
            App Management
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/features")}>
            View All Features
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer">
          <span>Use Cases</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => navigate("/use-cases#kiosk")}>
            Kiosk Mode Management
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/use-cases#corporate")}>
            Corporate-Owned Devices
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/use-cases#byod")}>
            BYOD Management
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link to="/pricing" className={`text-neutral-700 hover:text-primary ${currentPath === "/pricing" ? "text-primary" : ""}`}>
        Pricing
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer">
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

      <Link to="/faq" className={`text-neutral-700 hover:text-primary ${currentPath === "/faq" ? "text-primary" : ""}`}>
        FAQs
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer">
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

      <Link to="/contact" className={`text-neutral-700 hover:text-primary ${currentPath === "/contact" ? "text-primary" : ""}`}>
        Contact
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
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4 mt-6">
            {[
              { name: "Home", path: "/" },
              { name: "Features", path: "/features" },
              { name: "Use Cases", path: "/use-cases" },
              { name: "Pricing", path: "/pricing" },
              { name: "Blog", path: "/blog" },
              { name: "Case Studies", path: "/case-studies" },
              { name: "Whitepapers", path: "/whitepapers" },
              { name: "OWASP Mobile Top 10", path: "/owasp-mobile" },
              { name: "FAQs", path: "/faq" },
              { name: "Partners", path: "/partners" },
              { name: "Testimonials", path: "/testimonials" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`text-left py-2 hover:text-primary ${currentPath.includes(item.path) ? "text-primary" : ""}`}
              >
                {item.name}
              </button>
            ))}

            <div className="flex flex-col gap-3 mt-4">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <a href="https://calendly.com/mobiheal-demo/booking" target="_blank" rel="noopener noreferrer">
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
