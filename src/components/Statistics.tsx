import { memo } from 'react';
import { Users, CheckCircle, Trophy, Calendar } from "lucide-react";
import type { LucideIcon } from 'lucide-react';

interface Statistic {
  number: string;
  label: string;
  icon: LucideIcon;
  description: string;
}

const stats: Statistic[] = [
  {
    number: "2,500+",
    label: "Happy Clients",
    icon: Users,
    description: "Satisfied customers who trust our services"
  },
  {
    number: "10,000+",
    label: "Projects Completed",
    icon: CheckCircle,
    description: "Successfully completed cleaning projects"
  },
  {
    number: "15+",
    label: "Years Experience",
    icon: Calendar,
    description: "Years of professional cleaning expertise"
  },
  {
    number: "50+",
    label: "Awards Won",
    icon: Trophy,
    description: "Recognition for our quality service"
  }
];

const StatItem = memo(({ stat, index }: { stat: Statistic; index: number }) => {
  const Icon = stat.icon;
  
  return (
    <div
      className="text-center p-8 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-fadeIn"
      style={{ animationDelay: `${0.2 * (index + 1)}s` }}
    >
      <div className="flex justify-center mb-4">
        <Icon className="w-12 h-12 text-white" />
      </div>
      <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
      <h4 className="text-xl font-semibold mb-2">{stat.label}</h4>
      <p className="text-white/80 text-sm">{stat.description}</p>
    </div>
  );
});

StatItem.displayName = 'StatItem';

const Statistics = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 animate-fadeIn">
            Our Achievements
          </h2>
          <p className="text-lg text-white/90 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Numbers that speak for our commitment to excellence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Statistics);