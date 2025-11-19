import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1657622185369-a5a0190f151e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjaXJjdWl0JTIwYm9hcmQlMjByZWQlMjBwYXRod2F5cyUyMHRlY2hub2xvZ3klMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfDF8fHJlZHwxNzYzNTQ2MjAwfDA&ixlib=rb-4.1.0&q=85"
          alt="Dark circuit board with glowing red pathways and connection points, technology background, cybersecurity theme by Eugene Golovesov on Unsplash"
          className="w-full h-full object-cover"
          style={{
            backgroundColor: '#f30c0c',
            width: '100%',
            height: '100%'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-cyber-red text-sm font-semibold uppercase tracking-widest">
                Cybersecurity Excellence
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
                SECURE
                <br />
                YOUR
                <br />
                <span className="text-cyber-red">DIGITAL</span>
                <br />
                FUTURE
              </h1>
            </div>

            <p className="text-white/80 text-lg leading-relaxed max-w-xl">
              Bridging communities and technology across Africa. We deliver world-class 
              cybersecurity, governance, and digital transformation services tailored to 
              your business needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-cyber-red hover:bg-cyber-red-bright text-white font-semibold rounded-sm transition-all duration-300 hover:scale-105"
              >
                Explore Services
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-sm transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-8 bg-cyber-red"></div>
                    <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    To deliver world-class security, governance, and transformation services, 
                    tailored to the African business environment, while upholding integrity, 
                    excellence, teamwork, and Ubuntu.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <p className="text-3xl font-bold text-cyber-red">4</p>
                    <p className="text-white/60 text-sm">Service Pillars</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-cyber-red">24/7</p>
                    <p className="text-white/60 text-sm">Support</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-cyber-red">100%</p>
                    <p className="text-white/60 text-sm">Commitment</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-cyber-red">Africa</p>
                    <p className="text-white/60 text-sm">Wide Reach</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cyber-red/10 backdrop-blur-sm border border-cyber-red/30 rounded-sm p-6">
              <p className="text-white/90 text-sm italic">
                "Ubuntu – We serve communities, not just companies. Our currency is trust, 
                and excellence is our standard."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#services" className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero