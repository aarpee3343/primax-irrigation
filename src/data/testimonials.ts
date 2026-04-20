export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  crop: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rajesh Patel",
    location: "Nashik, Maharashtra",
    quote:
      "After installing Primax drip irrigation, my grape yield increased by 40% while using half the water. The system paid for itself in the first season.",
    crop: "Grapes",
  },
  {
    name: "Suresh Kumar",
    location: "Anantapur, Andhra Pradesh",
    quote:
      "Primax sprinklers transformed my groundnut farm. Uniform coverage, easy maintenance, and their team guided me through every step of the setup.",
    crop: "Groundnut",
  },
  {
    name: "Lakshmi Devi",
    location: "Coimbatore, Tamil Nadu",
    quote:
      "I was skeptical about micro-irrigation, but Primax made it simple. My coconut trees are healthier than ever, and I save 3 hours of labor every day.",
    crop: "Coconut",
  },
  {
    name: "Amit Singh",
    location: "Jaipur, Rajasthan",
    quote:
      "In our dry region, every drop counts. Primax HDPE pipes and drip systems have made pomegranate farming profitable even with limited water.",
    crop: "Pomegranate",
  },
];
