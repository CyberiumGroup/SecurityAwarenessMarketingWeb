export interface ValueProp {
  icon: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "pricing" | "security" | "technical";
}

export interface Feature {
  title: string;
  description: string;
  items: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
