import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { CheckCircle2, Clock, Shield, Star } from "lucide-react";

const ApartmentCondo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Apartment & Condo
            <span className="block text-primary">Professional Cleaning Service</span>
          </h1>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-600 leading-relaxed">
              Professional cleaning services tailored specifically for apartments and condos. We understand the unique cleaning needs of modern urban living spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Book cleaning services at your convenience</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Insured & Bonded</h3>
              <p className="text-gray-600">Your property is protected and in safe hands</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">5-Star Service</h3>
              <p className="text-gray-600">Consistently rated excellent by our clients</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Our Cleaning Process</h2>
              <ul className="space-y-4">
                {[
                  "Initial assessment of your space",
                  "Customized cleaning plan",
                  "Professional grade equipment",
                  "Eco-friendly cleaning products",
                  "Detailed cleaning of all areas",
                  "Final inspection and touch-ups",
                  "Quality assurance check",
                  "Client satisfaction confirmation"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">Areas We Clean</h3>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Kitchen & Dining
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Living Areas
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Bedrooms
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Bathrooms
                    </li>
                  </ul>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Balconies
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Windows
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Hallways
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Storage Areas
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Service Options</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    One-time deep cleaning
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Bi-weekly maintenance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Monthly service plans
                  </li>
                </ul>
                <Link to="/booking">
                  <Button className="w-full bg-primary hover:bg-primary-light text-white">
                    Schedule Cleaning
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-center mb-8">Why Choose Our Apartment & Condo Cleaning?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2">Experienced Staff</h4>
                <p className="text-gray-600">Professional cleaners with extensive training and experience</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2">Satisfaction Guaranteed</h4>
                <p className="text-gray-600">We're not happy until you're completely satisfied</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2">Competitive Pricing</h4>
                <p className="text-gray-600">Transparent pricing with no hidden fees</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/booking">
              <Button size="lg" className="bg-primary hover:bg-primary-light text-white px-8 py-6 text-lg rounded-full">
                Book Your Cleaning Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCondo;