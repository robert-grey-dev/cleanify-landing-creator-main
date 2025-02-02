import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Simple & Transparent Pricing</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the perfect cleaning package for your home. All prices include professional cleaning supplies and equipment.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Basic Package */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-transparent hover:border-primary transition-all">
          <h3 className="text-2xl font-bold mb-4">Basic Clean</h3>
          <p className="text-gray-600 mb-6">Perfect for regular maintenance</p>
          <div className="text-3xl font-bold text-primary mb-6">
            From $129
            <span className="text-base font-normal text-gray-600">/visit</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span>All living areas and bedrooms</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span>Kitchen and bathrooms</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span>Dusting and vacuuming</span>
            </li>
          </ul>
          <Button className="w-full" asChild>
            <Link to="/booking">Book Basic Clean</Link>
          </Button>
        </div>

        {/* Deep Clean Package */}
        <div className="bg-primary text-white rounded-xl shadow-lg p-8 transform scale-105">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-dark text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </div>
          <h3 className="text-2xl font-bold mb-4">Deep Clean</h3>
          <p className="text-gray-100 mb-6">Thorough cleaning for every corner</p>
          <div className="text-3xl font-bold mb-6">
            From $199
            <span className="text-base font-normal text-gray-100">/visit</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <Check className="h-5 w-5 text-white mr-2" />
              <span>Everything in Basic Clean</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-white mr-2" />
              <span>Deep cleaning of bathrooms</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-white mr-2" />
              <span>Inside cabinets and drawers</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-white mr-2" />
              <span>Window sills and tracks</span>
            </li>
          </ul>
          <Button className="w-full bg-white text-primary hover:bg-gray-100" asChild>
            <Link to="/booking">Book Deep Clean</Link>
          </Button>
        </div>

        {/* Move In/Out Package */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-transparent hover:border-primary transition-all">
          <h3 className="text-2xl font-bold mb-4">Move In/Out</h3>
          <p className="text-gray-600 mb-6">Complete property preparation</p>
          <div className="text-3xl font-bold text-primary mb-6">
            From $299
            <span className="text-base font-normal text-gray-600">/visit</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span>Everything in Deep Clean</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span>Wall cleaning</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span>Garage cleaning</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span>Post-construction cleanup</span>
            </li>
          </ul>
          <Button className="w-full" asChild>
            <Link to="/booking">Book Move Clean</Link>
          </Button>
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-secondary rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Additional Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="font-semibold">Kitchen Extras</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>Inside of refrigerator</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>Inside of oven</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Living Areas</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>Balcony cleaning</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>Interior windows</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Special Services</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>Laundry service</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>Organization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Common Questions About Pricing</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">How are your prices calculated?</h3>
            <p className="text-gray-600">Our prices are based on the size of your home, number of rooms, and type of service requested. We provide transparent pricing with no hidden fees.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Do I need to provide cleaning supplies?</h3>
            <p className="text-gray-600">No, our professional cleaners bring all necessary cleaning supplies and equipment. We use eco-friendly products that are safe for your home and family.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Are there any additional fees?</h3>
            <p className="text-gray-600">The price you see is the price you pay. Any additional services will be clearly communicated and agreed upon before the service begins.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;