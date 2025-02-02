import { memo } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = memo(() => {
  const navigate = useNavigate();

  return (
    <section 
      aria-label="Hero Section"
      className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 animate-fadeIn tracking-tight">
            Modern Cleaning
            <span className="block text-primary animate-pulse">For Modern Living</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 animate-fadeIn leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Professional cleaning services tailored to your lifestyle. Book instantly, relax completely.
          </p>
          <div className="animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-white text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full transform hover:scale-105 hover:-translate-y-1"
              onClick={() => navigate('/booking')}
              aria-label="Book Now"
            >
              Book Now
            </Button>
          </div>
        </div>
        <div className="relative hidden md:block">
          <img 
            src="/clean-uploads/a7417638-2576-4a54-8af4-bf44068f322d.png" 
            alt="Professional cleaning service illustration"
            className="w-full h-auto animate-fadeIn rounded-lg shadow-xl"
            style={{ animationDelay: "0.6s" }}
            loading="eager"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;