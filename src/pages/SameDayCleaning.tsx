import { Button } from "@/components/ui/button";
import { Clock, Shield, Star } from "lucide-react";

const SameDayCleaning = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Same Day
            <span className="block text-primary">Cleaning Service</span>
          </h1>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-600 leading-relaxed">
              Need your space cleaned today? Our professional same-day cleaning service is here to help with quick, efficient, and thorough cleaning solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
              <p className="text-gray-600">Available within hours of your request</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Professional Service</h3>
              <p className="text-gray-600">Experienced and vetted cleaners</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">Quality results every time</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Our Same Day Service Includes:</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span className="text-gray-700">General cleaning and dusting</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span className="text-gray-700">Bathroom sanitization</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span className="text-gray-700">Kitchen cleaning</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span className="text-gray-700">Vacuuming and mopping</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span className="text-gray-700">Surface disinfection</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span className="text-gray-700">Trash removal</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span className="text-gray-700">Quick organization</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span className="text-gray-700">Essential spot cleaning</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-primary/5 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Book Your Same Day Cleaning</h3>
              <p className="text-gray-600 mb-6">
                Contact us now to schedule your same-day cleaning service. Limited slots available each day.
              </p>
              <Button size="lg" className="px-8">Book Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SameDayCleaning;
