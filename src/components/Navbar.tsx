import { Button } from "@/components/ui/button";
import { Home, Info, Menu, X, ArrowRight, ChevronDown, Settings, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-md"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home Link */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Home className="h-5 w-5" />
            <span className="font-semibold">HOME</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger 
                className="flex items-center space-x-1 font-medium text-gray-600 hover:text-primary transition-colors"
              >
                <Settings className="h-5 w-5 text-primary" />
                <span>SERVICES</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Link to="/apartment-condo" className="w-full">
                    Apartment & Condo
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/airbnb-rental" className="w-full">
                    Airbnb & Vacation Rental
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/move-in-out" className="w-full">
                    Move In & Move Out
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/same-day-cleaning" className="w-full">
                    Same Day Cleaning
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/deep-cleaning" className="w-full">
                    Deep Cleaning
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/post-construction" className="w-full">
                    Post Construction
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              to="/faq" 
              className="flex items-center space-x-2 font-medium text-gray-600 hover:text-primary transition-colors"
            >
              <Info className="h-4 w-4" />
              <span>FAQ</span>
            </Link>
            
            <Link 
              to="/pricing" 
              className="flex items-center space-x-2 font-medium text-gray-600 hover:text-primary transition-colors"
            >
              <DollarSign className="h-5 w-5 text-primary" />
              <span>PRICING</span>
            </Link>

            <Link to="/booking">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-full"
              >
                <span>BOOK ONLINE NOW</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={cn(
            "fixed inset-x-0 bottom-0 top-16 bg-white md:hidden transition-transform duration-300 ease-in-out shadow-lg",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col p-4 bg-white min-h-full">
            {/* Services Section */}
            <div className="flex flex-col">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-primary/10 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-primary" />
                  <span className="font-medium">SERVICES</span>
                </div>
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  servicesOpen && "rotate-180"
                )} />
              </button>
              
              <div className={cn(
                "mt-2 flex flex-col space-y-1 overflow-hidden transition-all duration-200 bg-gray-50 rounded-lg",
                servicesOpen ? "max-h-96 p-2" : "max-h-0"
              )}>
                <Link 
                  to="/apartment-condo"
                  className="px-6 py-3 text-gray-600 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                >
                  Apartment & Condo
                </Link>
                <Link 
                  to="/airbnb-rental"
                  className="px-6 py-3 text-gray-600 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                >
                  Airbnb & Vacation Rental
                </Link>
                <Link 
                  to="/move-in-out"
                  className="px-6 py-3 text-gray-600 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                >
                  Move In & Move Out
                </Link>
                <Link 
                  to="/same-day-cleaning"
                  className="px-6 py-3 text-gray-600 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                >
                  Same Day Cleaning
                </Link>
                <Link 
                  to="/deep-cleaning"
                  className="px-6 py-3 text-gray-600 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                >
                  Deep Cleaning
                </Link>
                <Link 
                  to="/post-construction"
                  className="px-6 py-3 text-gray-600 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                >
                  Post Construction
                </Link>
              </div>
            </div>

            <Link 
              to="/faq"
              className="mt-4 px-4 py-3 text-gray-700 hover:bg-primary/10 rounded-lg transition-colors flex items-center space-x-2"
            >
              <Info className="h-4 w-4" />
              <span className="font-medium">FAQ</span>
            </Link>
            
            <Link 
              to="/pricing"
              className="px-4 py-3 text-gray-700 hover:bg-primary/10 rounded-lg transition-colors flex items-center space-x-2"
            >
              <DollarSign className="h-5 w-5 text-primary" />
              <span className="font-medium">PRICING</span>
            </Link>

            <div className="mt-4 px-4">
              <Link 
                to="/booking"
                className="w-full"
              >
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-full flex items-center justify-center space-x-2"
                >
                  <span>BOOK ONLINE NOW</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
