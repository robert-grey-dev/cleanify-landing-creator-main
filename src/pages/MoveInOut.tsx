import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const MoveInOut = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Move In & Move Out
            <span className="block text-primary">Cleaning Service</span>
          </h1>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-600 leading-relaxed">
              Start fresh in your new home or leave your old one spotless. Our comprehensive move in/out cleaning service ensures a pristine living space for the next chapter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Move-Out Cleaning</h2>
              <ul className="space-y-4">
                {[
                  "Deep clean all rooms and surfaces",
                  "Remove all dust and cobwebs",
                  "Clean inside all cabinets and drawers",
                  "Scrub bathroom tiles and fixtures",
                  "Clean appliances inside and out",
                  "Window cleaning and track scrubbing",
                  "Baseboard and trim detailed cleaning",
                  "Carpet deep cleaning available",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Move-In Cleaning</h2>
              <ul className="space-y-4">
                {[
                  "Sanitize all surfaces",
                  "Disinfect bathrooms and kitchen",
                  "Clean light fixtures and fans",
                  "Wipe down all woodwork",
                  "Clean windows and sills",
                  "Vacuum and mop all floors",
                  "Deodorize all rooms",
                  "Prepare space for immediate move-in",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-primary/5 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Book Your Move In/Out Cleaning</h3>
              <p className="text-gray-600 mb-6">
                Flexible scheduling available to accommodate your moving timeline. Contact us for a custom quote based on your property size and specific needs.
              </p>
              <Button size="lg" className="px-8">Get Quote</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MoveInOut;
