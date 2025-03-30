// components/about/Testimonials.tsx
import Card from '@/components/ui/Card';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The flavors transported me straight to the Mediterranean. Easily the best Greek-inspired cuisine in San Francisco.",
      author: "Maria K.",
      source: "Yelp",
    },
    {
      quote: "Chef Sely's attention to detail and innovative approach to traditional dishes creates an unforgettable dining experience.",
      author: "James T.",
      source: "Google Reviews",
    },
    {
      quote: "The ambiance, service, and food quality make Odyssey By Sely our go-to spot for special occasions.",
      author: "Sarah and David",
      source: "OpenTable",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="flex flex-col">
          <div className="text-greek-gold text-4xl mb-4">"</div>
          <p className="text-greek-white/90 italic mb-4">{testimonial.quote}</p>
          <div className="mt-auto">
            <p className="text-greek-white font-medium">{testimonial.author}</p>
            <p className="text-greek-white/70 text-sm">{testimonial.source}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}