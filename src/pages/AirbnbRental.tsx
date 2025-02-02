import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const AirbnbRental = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Airbnb & Vacation Rental
            <span className="block text-primary">Professional Cleaning Service</span>
          </h1>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-600 leading-relaxed">
              Keep your rental property spotless and maintain those 5-star reviews with our professional cleaning services. We understand the unique demands of Airbnb and vacation rental properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Our Services Include:</h2>
              <ul className="space-y-4">
                {[
                  "Deep cleaning between guests",
                  "Linen change and bed making",
                  "Kitchen and bathroom sanitization",
                  "Restocking amenities",
                  "Interior window cleaning",
                  "Dust and vacuum all surfaces",
                  "High-touch point disinfection",
                  "Outdoor area maintenance",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">Benefits</h3>
                <ul className="space-y-4">
                  <li className="text-gray-700">✓ Maintain Superhost status</li>
                  <li className="text-gray-700">✓ Quick turnaround times</li>
                  <li className="text-gray-700">✓ Professional and reliable service</li>
                  <li className="text-gray-700">✓ Competitive pricing</li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Booking Options</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">• One-time deep clean</p>
                  <p className="text-gray-700">• Regular turnover service</p>
                  <p className="text-gray-700">• Custom cleaning packages</p>
                  <Button className="w-full mt-6">Schedule Cleaning</Button>
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

export default AirbnbRental;
