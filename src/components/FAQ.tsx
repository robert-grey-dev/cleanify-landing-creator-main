import { memo } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
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

const FAQItem = memo(({ faq, index }: { faq: FAQItem; index: number }) => (
  <AccordionItem
    value={`item-${index}`}
    className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 animate-fadeIn"
    style={{ animationDelay: `${0.2 * (index + 1)}s` }}
  >
    <AccordionTrigger className="px-6 hover:text-primary hover:no-underline">
      {faq.question}
    </AccordionTrigger>
    <AccordionContent className="px-6 text-gray-600">
      {faq.answer}
    </AccordionContent>
  </AccordionItem>
));

FAQItem.displayName = 'FAQItem';

const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-primary/5 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6 animate-fadeIn">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Find answers to common questions about our cleaning services
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default memo(FAQ);