import { memo } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/booking');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/90 to-primary animate-fadeIn">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
            Ready for Perfect Cleanliness?
          </h2>
          <p className="text-xl mb-8 text-white/90 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Book your cleaning now and get 10% off your first service
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white hover:bg-white/90 text-primary text-lg px-8 rounded-full transform hover:scale-105 transition-all duration-300 animate-fadeIn"
            onClick={handleBooking}
            style={{ animationDelay: "0.4s" }}
          >
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default memo(CallToAction);