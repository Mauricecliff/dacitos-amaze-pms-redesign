export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Client {
  name: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
  clients: number;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
