import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const faqData = [
  {
    question: "What cleaning services do you offer?",
    answer: "We offer a comprehensive range of cleaning services including residential cleaning, commercial cleaning, deep cleaning, and specialized services like window cleaning and carpet cleaning."
  },
  {
    question: "Are your cleaning products eco-friendly?",
    answer: "Yes, we use environmentally friendly cleaning products that are safe for your family, pets, and the environment while maintaining the highest cleaning standards."
  },
  {
    question: "Do you provide your own cleaning supplies?",
    answer: "Yes, our professional team brings all necessary cleaning supplies and equipment. However, if you prefer specific products, we're happy to use them."
  },
  {
    question: "Are your cleaning professionals insured?",
    answer: "Yes, all our cleaning professionals are fully insured and bonded. We also conduct thorough background checks for your peace of mind."
  },
  {
    question: "How do I schedule a cleaning service?",
    answer: "You can easily schedule a cleaning service through our website by clicking the 'Book Now' button, or contact us directly by phone or email."
  }
];

const FAQ = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-6 py-24">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Frequently Asked
            <span className="block text-primary">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Find answers to common questions about our professional cleaning services
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white px-8 h-14 rounded-full animate-fadeIn shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ animationDelay: "0.4s" }}
            onClick={() => navigate('/booking')}
          >
            Book Now
          </Button>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <AccordionTrigger className="px-6 text-lg font-medium hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Section */}
        <div className="max-w-3xl mx-auto mt-16 text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-fadeIn" style={{ animationDelay: "1.2s" }}>
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-8">
            Our customer service team is here to help you with any questions you might have
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="bg-white hover:bg-gray-50 text-primary border-primary hover:text-primary-dark px-8 rounded-full"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;