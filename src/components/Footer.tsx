import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Navigation Links */}
          <div className="space-y-6">
            <Link to="/" className="text-xl font-bold text-primary hover:text-primary-dark transition-colors">
              HOME
            </Link>
            <nav className="flex flex-col space-y-4">
              <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
                SERVICES
              </Link>
              <Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link to="/pricing" className="text-gray-600 hover:text-primary transition-colors">
                PRICING
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contacts</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-600">T: +1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-600">E: contact@cleaningservice.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-600">123 Street, City, State</span>
              </div>
              <div className="pt-2">
                <p className="text-gray-600">Monday - Sunday: 8am - 7pm</p>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Get Free Estimate</h3>
            <div className="space-y-3">
              <p className="text-primary text-xl font-semibold">+1 (555) 123-4567</p>
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-8 text-center text-sm text-gray-500 space-y-4">
          <p>
            We serve all major areas: Agoura Hills, Alhambra, Arcadia, Artesia, Avalon, Azusa, Baldwin Park, Bell, Bell Gardens, Bellflower, Beverly Hills, Bradbury, 
            Burbank, Calabasas, Carson, Cerritos, Claremont, Commerce, Compton, Covina, Cudahy, Culver City, Diamond Bar, Duarte, El Monte, EIGardena, 
            Glendale, Hawaiian Gardens, Hawthorne, Hermosa Beach, Hidden Hills, Huntington Park, Industry, Inglewood, La Cañada Flintridge, La Mirada, La La 
            Verne, Lakewood, Lancaster, Lawndale, Lomita, Los Angeles, Lynwood, Malibu, Manhattan Beach, Maywood, Monrovia, Montebello, Monterey Park, 
            Norwalk, Palmdale, Palos Verdes Estates, Paramount, Pasadena, Pico Rivera, Pomona, Rancho Palos Verdes, Redondo
          </p>
          <p>
            Redondo Beach, Rolling Hills Estates, Rosemead, San Fernando, San Gabriel, San Marino, Santa Fe Springs, Santa Monica, Sierra Madre, 
            Signal Hill, South El Monte, South Gate, South Pasadena, Temple City, Torrance, Vernon, Walnut, West Covina, West Hollywood, Westlake Village, Whittier, 
            Orange County, Anaheim, Laguna Beach, Ontario, And more
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} LA House Cleaning Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;