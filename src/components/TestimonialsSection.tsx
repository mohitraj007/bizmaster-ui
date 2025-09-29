import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Founder, TechStart Inc',
    content: 'The Biz Master\'s AI tool helped me create a comprehensive business model in minutes. It saved me weeks of work and thousands in consulting fees.',
    rating: 5,
    image: '👩‍💼'
  },
  {
    name: 'Michael Chen',
    role: 'CEO, GrowthLabs',
    content: 'The strategic guidance and AI-powered insights transformed how we approach business planning. Absolutely game-changing for entrepreneurs.',
    rating: 5,
    image: '👨‍💼'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Entrepreneur',
    content: 'I was skeptical at first, but the AI-generated business model canvas was incredibly detailed and relevant. Highly recommend!',
    rating: 5,
    image: '👩‍🦱'
  },
  {
    name: 'David Park',
    role: 'Product Manager, InnovateCo',
    content: 'The Biz Master helped us pivot our business model with confidence. The AI insights were spot-on and actionable.',
    rating: 5,
    image: '👨‍💻'
  },
  {
    name: 'Jessica Thompson',
    role: 'Startup Advisor',
    content: 'I recommend The Biz Master to all my clients. It\'s an essential tool for anyone serious about business development.',
    rating: 5,
    image: '👩‍🏫'
  },
  {
    name: 'Robert Lee',
    role: 'Business Consultant',
    content: 'The quality of AI-generated business models rivals what I used to create manually. This is the future of business planning.',
    rating: 5,
    image: '👨‍🔬'
  }
];

export function TestimonialsSection() {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-gradient-to-br from-[#002B49] to-[#003d5c] overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-[#F4B942] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">What Our Clients Say</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of entrepreneurs who have transformed their businesses with The Biz Master
          </p>
        </div>
      </div>

      {/* Infinite scroll container */}
      <div className="relative">
        <div className="flex animate-scroll-left gap-6">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#F4B942] text-[#F4B942]" />
                ))}
              </div>
              <p className="text-white mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E84A34] to-[#F4B942] flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="text-white">{testimonial.name}</p>
                  <p className="text-sm text-blue-200">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
