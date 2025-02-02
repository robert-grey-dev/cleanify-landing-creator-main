import { memo } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from '@/types/home';

const testimonials: Testimonial[] = [
  {
    name: "Emily Thompson",
    role: "Homeowner",
    content: "The attention to detail is remarkable. They've transformed how I maintain my home.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
  {
    name: "Michael Chen",
    role: "Office Manager",
    content: "Professional, reliable, and thorough. The best cleaning service we've worked with.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    name: "Sarah Williams",
    role: "Property Manager",
    content: "Consistently excellent results across all our properties. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80"
  }
];

const TestimonialCard = memo(({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group border-0">
    <CardContent className="p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
            loading="lazy"
            width={64}
            height={64}
          />
        </div>
        <div>
          <p className="font-semibold text-lg text-primary group-hover:text-primary-dark transition-colors">
            {testimonial.name}
          </p>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      <Quote className="w-10 h-10 text-primary/20 mb-4" />
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed italic">{testimonial.content}</p>
    </CardContent>
  </Card>
));

TestimonialCard.displayName = 'TestimonialCard';

const Testimonials = memo(() => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6 animate-fadeIn">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Real experiences from satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';

export default Testimonials;