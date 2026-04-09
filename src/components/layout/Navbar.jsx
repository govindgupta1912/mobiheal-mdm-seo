import { Link, useLocation } from "react-router";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [location] = useLocation();

  return (
    <nav className="flex items-center space-x-8">
      {/* Features */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer">
          <span>Features</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link
              href="/features#encryption"
              className="w-full hover:text-primary"
            >
              Data Encryption
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/features#work-profile"
              className="w-full hover:text-primary"
            >
              Work Profile Container
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/features#remote-lock"
              className="w-full hover:text-primary"
            >
              Remote Lock & Wipe
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/features#app-management"
              className="w-full hover:text-primary"
            >
              App Management
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/features" className="w-full hover:text-primary">
              View All Features
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Use Cases */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer">
          <span>Use Cases</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/use-cases#kiosk" className="w-full hover:text-primary">
              Kiosk Mode Management
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/use-cases#corporate"
              className="w-full hover:text-primary"
            >
              Corporate-Owned Devices
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/use-cases#byod" className="w-full hover:text-primary">
              BYOD Management
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Pricing */}
      <Link
        href="/pricing"
        className={`text-neutral-700 hover:text-primary ${location === "/pricing" ? "text-primary" : ""}`}
      >
        Pricing
      </Link>

      {/* Resources */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer">
          <span>Resources</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/blog" className="w-full hover:text-primary">
              Blog
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/case-studies" className="w-full hover:text-primary">
              Case Studies
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/whitepapers" className="w-full hover:text-primary">
              Whitepapers
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/owasp-mobile" className="w-full hover:text-primary">
              OWASP Mobile Top 10
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* FAQs */}
      <Link
        href="/faq"
        className={`text-neutral-700 hover:text-primary ${location === "/faq" ? "text-primary" : ""}`}
      >
        FAQs
      </Link>

      {/* Partners */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer">
          <span>Partners</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/partners" className="w-full hover:text-primary">
              Partners & Clients
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/testimonials" className="w-full hover:text-primary">
              Testimonials
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Contact */}
      <Link
        href="/contact"
        className={`text-neutral-700 hover:text-primary ${location === "/contact" ? "text-primary" : ""}`}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
