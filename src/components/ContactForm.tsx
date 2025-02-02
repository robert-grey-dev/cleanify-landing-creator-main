import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you within 24 hours",
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to experience the difference? Contact us for a free quote or any questions you might have.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Call Us</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email Us</p>
                    <p className="text-gray-600">contact@cleaningservice.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Visit Us</p>
                    <p className="text-gray-600">123 Street, City, State</p>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-2xl">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                <Input id="name" placeholder="Enter your full name" className="h-12" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" className="h-12" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                <Input id="email" type="email" placeholder="Enter your email address" className="h-12" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your cleaning needs" 
                  className="min-h-[120px] resize-none" 
                  required 
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-12 text-lg bg-gradient-to-r from-primary via-primary-light to-primary hover:opacity-90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Send className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;