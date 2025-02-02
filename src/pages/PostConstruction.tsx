import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PostConstruction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Post Construction
            <span className="block text-primary">Cleaning Service</span>
          </h1>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your newly constructed or renovated space into a clean, safe, and ready-to-use environment with our specialized post-construction cleaning service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Our Cleaning Process</h2>
              <ul className="space-y-4">
                {[
                  "Remove all construction debris and dust",
                  "Clean and sanitize all surfaces",
                  "Detail cleaning of windows and frames",
                  "HVAC and duct cleaning",
                  "Floor deep cleaning and polishing",
                  "Paint overspray removal",
                  "Cabinet and fixture cleaning",
                  "Final inspection and touch-ups",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="text-gray-700">✓ Experienced in post-construction cleaning</li>
                  <li className="text-gray-700">✓ Professional grade equipment and supplies</li>
                  <li className="text-gray-700">✓ Thorough dust and debris removal</li>
                  <li className="text-gray-700">✓ Fully insured service</li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Service Options</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">• Residential Post-Construction</p>
                  <p className="text-gray-700">• Commercial Post-Construction</p>
                  <p className="text-gray-700">• Renovation Clean-up</p>
                  <Button className="w-full mt-6">Get Quote</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostConstruction;