import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Residential",
    subtitle: "Cleaning",
    description: "You can relax knowing that your home will shine when you choose Los Angeles House Cleaners.",
    frequency: "One Time / Recurring",
    features: [
      "Kitchen",
      "Bathrooms",
      "Bedrooms & Living Rooms",
      "Windows",
      "Same Day Service",
      "Walls",
      "Appliances (Oven & Fridge)",
      "Hardwood & Carpet Floors",
      "Move in / Move out",
      "Post construction",
      "Laundry"
    ],
    image: "/clean-uploads/ff835e31-cc54-4936-9215-dfddf4c9bd14.png"
  },
  {
    title: "Airbnb",
    subtitle: "Cleaning",
    description: "The cleaners we refer specialize in professional Airbnb and short-term rental cleaning, utilizing diverse techniques, high-quality products, and advanced equipment to ensure efficient and thorough service.",
    frequency: "One Time / Recurring",
    features: [
      "You Can Give a Checklist",
      "They typically can make the unit look great",
      "Before or After Each Guest",
      "Laundry",
      "Changing Beds",
      "Dishes",
      "Etc."
    ],
    image: "/clean-uploads/9eb92f3c-c593-4b98-9383-f54b2d6d9c6f.png"
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleBooking = (serviceType: string) => {
    navigate('/booking', { state: { serviceType } });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 animate-fadeIn hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-[400px] h-auto rounded-lg shadow-md"
                />
              </div>
              
              <h2 className="text-primary text-3xl font-bold mb-1">
                {service.title}
              </h2>
              <h3 className="text-primary text-3xl mb-6">
                {service.subtitle}
              </h3>
              
              <p className="text-gray-600 mb-4 max-w-md leading-relaxed">
                {service.description}
              </p>
              
              <p className="text-gray-500 mb-6 font-medium">
                {service.frequency}
              </p>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-left mb-8 w-full max-w-xl">
                {service.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="text-gray-600 flex items-center space-x-2 pl-4 hover:text-primary transition-colors duration-200"
                  >
                    <span className="text-primary font-bold">•</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="bg-primary hover:bg-primary-light text-white font-semibold px-8 py-6 h-auto rounded-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                onClick={() => handleBooking(service.title)}
              >
                BOOK ONLINE NOW
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;