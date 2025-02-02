import { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Statistic {
  number: string;
  label: string;
  icon: LucideIcon;
  description: string;
}