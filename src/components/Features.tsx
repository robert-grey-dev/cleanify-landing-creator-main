import { memo } from 'react';
import { Shield, Clock, Award, Heart } from "lucide-react";
import type { Feature } from '@/types/home';

const features: Feature[] = [
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "We guarantee high-quality cleaning or your money back"
  },
  {
    icon: Clock,
    title: "Fast Service",
    description: "Quick response and flexible scheduling to fit your needs"
  },
  {
    icon: Award,
    title: "Expert Staff",
    description: "Our cleaners undergo thorough screening and training"
  },
  {
    icon: Heart,
    title: "Client Care",
    description: "Personalized approach for every customer"
  }
];

const FeatureCard = memo(({ feature }: { feature: Feature }) => {
  const Icon = feature.icon;
  
  return (
    <div 
      className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      role="article"
    >
      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-primary" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {feature.title}
      </h3>
      <p className="text-gray-600">
        {feature.description}
      </p>
    </div>
  );
});

FeatureCard.displayName = 'FeatureCard';

const Features = memo(() => {
  return (
    <section 
      className="py-24 bg-white"
      aria-label="Features Section"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600">
            Professional approach to every cleaning task
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Features.displayName = 'Features';

export default Features;