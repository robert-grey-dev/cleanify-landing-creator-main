import { Button } from "@/components/ui/button";
import { Home, Info, ArrowRight, ChevronDown, Settings, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-all duration-300 transform hover:scale-105"
            >
              <Home className="h-5 w-5" />
              <span className="font-semibold">HOME</span>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger 
                className="flex items-center space-x-1 font-medium text-gray-600 hover:text-primary transition-all duration-300 transform hover:scale-105 focus:outline-none group"
              >
                <Settings className="h-5 w-5 text-primary group-hover:rotate-90 transition-transform duration-300" />
                <span>SERVICES</span>
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-56 bg-white/95 backdrop-blur-sm shadow-lg rounded-xl border border-gray-100 animate-fade-in"
              >
                <DropdownMenuItem>
                  <Link 
                    to="/apartment-condo" 
                    className="w-full flex items-center py-3 px-4 text-sm hover:bg-primary/10 rounded-lg transition-all duration-300 hover:translate-x-1"
                  >
                    Apartment & Condo
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link 
                    to="/airbnb-rental" 
                    className="w-full flex items-center py-3 px-4 text-sm hover:bg-primary/10 rounded-lg transition-all duration-300 hover:translate-x-1"
                  >
                    Airbnb & Vacation Rental
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link 
                    to="/move-in-out" 
                    className="w-full flex items-center py-3 px-4 text-sm hover:bg-primary/10 rounded-lg transition-all duration-300 hover:translate-x-1"
                  >
                    Move In & Move Out
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link 
                    to="/same-day-cleaning" 
                    className="w-full flex items-center py-3 px-4 text-sm hover:bg-primary/10 rounded-lg transition-all duration-300 hover:translate-x-1"
                  >
                    Same Day Cleaning
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link 
                    to="/deep-cleaning" 
                    className="w-full flex items-center py-3 px-4 text-sm hover:bg-primary/10 rounded-lg transition-all duration-300 hover:translate-x-1"
                  >
                    Deep Cleaning
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link 
                    to="/post-construction" 
                    className="w-full flex items-center py-3 px-4 text-sm hover:bg-primary/10 rounded-lg transition-all duration-300 hover:translate-x-1"
                  >
                    Post Construction
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              to="/faq" 
              className="flex items-center space-x-2 font-medium text-gray-600 hover:text-primary transition-all duration-300 transform hover:scale-105"
            >
              <Info className="h-4 w-4" />
              <span>FAQ</span>
            </Link>
            
            <Link 
              to="/pricing" 
              className="flex items-center space-x-2 font-medium text-gray-600 hover:text-primary transition-all duration-300 transform hover:scale-105"
            >
              <DollarSign className="h-5 w-5 text-primary" />
              <span>PRICING</span>
            </Link>
          </div>
          
          <Link to="/booking">
            <Button 
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
            >
              <span>BOOK ONLINE NOW</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;