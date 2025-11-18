import { ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbmV0d29yayUyMGRpZ2l0YWwlMjBjeWJlcnNlY3VyaXR5fGVufDB8MHx8Ymx1ZXwxNzYzNDc4MDc2fDA&ixlib=rb-4.1.0&q=85"
          alt="Abstract digital technology network by GuerrillaBuzz on Unsplash"
          className="w-full h-full object-cover"
          style={{ backgroundColor: '#73a6c0' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/80 via-cyber-black/60 to-cyber-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Glass Card Container */}
        <div className="glass-card p-8 md:p-12 lg:p-16 max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-cyber-red/20 border border-cyber-red/30 rounded-full text-cyber-red-light text-sm font-medium mb-6">
              Cybersecurity & Digital Transformation
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Securing Africa's</span>
            <br />
            <span className="text-gradient-red">Digital Future</span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
            Bridging communities and technology. We deliver world-class security, governance, 
            and transformation services tailored to the African business environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#services"
              className="bg-cyber-red hover:bg-cyber-red-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyber-red/50 hover:scale-105"
            >
              Explore Our Services
            </a>
            <a
              href="#contact"
              className="glass-card px-8 py-4 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyber-red mb-2">10+</div>
              <div className="text-text-muted text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyber-red mb-2">100+</div>
              <div className="text-text-muted text-sm">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyber-red mb-2">15+</div>
              <div className="text-text-muted text-sm">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyber-red mb-2">24/7</div>
              <div className="text-text-muted text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
      >
        <div className="glass-card p-3 rounded-full">
          <ChevronDown className="text-cyber-red" size={24} />
        </div>
      </a>
    </section>
  )
}

export default Hero