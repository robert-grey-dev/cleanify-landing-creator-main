import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

const DeepCleaning = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Professional
            <span className="block text-primary">Deep Cleaning Service</span>
          </h1>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience the difference with our thorough deep cleaning service. We tackle those hard-to-reach areas and stubborn dirt that regular cleaning might miss.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Deep Cleaning Includes:</h2>
              <ul className="space-y-4">
                {[
                  "Detailed bathroom deep cleaning",
                  "Kitchen appliance interior cleaning",
                  "Baseboards and door frames",
                  "Window tracks and sills",
                  "Light fixtures and ceiling fans",
                  "Behind and under furniture",
                  "Cabinet interior organization",
                  "Grout and tile detailed cleaning",
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
                <h3 className="text-2xl font-semibold mb-4">Additional Services</h3>
                <ul className="space-y-4">
                  <li className="text-gray-700">✓ Carpet deep cleaning</li>
                  <li className="text-gray-700">✓ Upholstery cleaning</li>
                  <li className="text-gray-700">✓ Window washing</li>
                  <li className="text-gray-700">✓ Hardwood floor treatment</li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Pricing</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">• Small Home (up to 1,500 sq ft)</p>
                  <p className="text-gray-700">• Medium Home (1,500-2,500 sq ft)</p>
                  <p className="text-gray-700">• Large Home (2,500+ sq ft)</p>
                  <Button className="w-full mt-6">Get Quote</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeepCleaning;
