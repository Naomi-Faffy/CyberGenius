import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Moyo',
      position: 'CTO, FinTech Solutions Ltd',
      company: 'Zimbabwe',
      content: 'CyberGenius transformed our security posture. Their VCISO service provided the strategic leadership we needed without the overhead of a full-time hire. Outstanding expertise and professionalism.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=sarah-moyo',
    },
    {
      name: 'David Ndlovu',
      position: 'CEO, Healthcare Systems',
      company: 'South Africa',
      content: 'The incident response team at CyberGenius saved us during a critical breach. Their 24/7 support and forensic expertise were invaluable. We now have them on retainer for ongoing protection.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=david-ndlovu',
    },
    {
      name: 'Amara Okonkwo',
      position: 'IT Director, Retail Chain',
      company: 'Nigeria',
      content: 'Their digital transformation advisory helped us modernize our POS systems securely. The team understood our unique African market challenges and delivered practical solutions.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=amara-okonkwo',
    },
    {
      name: 'Michael Kamau',
      position: 'Compliance Officer, Bank',
      company: 'Kenya',
      content: 'CyberGenius helped us achieve ISO 27001 certification ahead of schedule. Their knowledge of local regulations combined with international standards is unmatched in the region.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=michael-kamau',
    },
  ]

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(220, 38, 38, 0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-cyber-red/20 border border-cyber-red/30 rounded-full text-cyber-red-light text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-gradient-red">Clients Say</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Trusted by leading organizations across Africa
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 transition-all duration-300 hover:scale-105 glass-card-hover"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="text-cyber-red/30" size={48} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-cyber-red fill-cyber-red" size={18} />
                ))}
              </div>

              {/* Content */}
              <p className="text-text-secondary mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                  style={{ backgroundColor: '#dc2626' }}
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-text-muted text-sm">
                    {testimonial.position}
                  </p>
                  <p className="text-cyber-red-light text-xs">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center glass-card p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help secure and transform your organization
          </p>
          <a
            href="#contact"
            className="inline-block bg-cyber-red hover:bg-cyber-red-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyber-red/50 hover:scale-105"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials