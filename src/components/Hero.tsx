import { ChevronRight, Shield, Lock, Server } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1610208206904-155f1086a604?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc3BoZXJlJTIwY2lyY3VpdCUyMGJvYXJkJTIwdGVjaG5vbG9neSUyMGN5YmVyc2VjdXJpdHklMjByZWQlMjBnbG93fGVufDB8MHx8cmVkfDE3NjM1NDQ3OTZ8MA&ixlib=rb-4.1.0&q=85"
          alt="Red glowing digital sphere with circuit board patterns radiating outward, cybersecurity technology theme, dark background with bright red illumination by Michael Dziedzic on Unsplash"
          className="w-full h-full object-cover"
          style={{ 
            backgroundColor: '#f30c40',
            width: '100%',
            height: '100%'
          }}
        />
        {/* Dark overlay for better glass contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Red glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-red/20 via-transparent to-cyber-red-dark/30"></div>
      </div>

      {/* Main Glass Container */}
      <div className="relative z-10 w-full max-w-[1400px] h-[90vh] min-h-[700px]">
        {/* Outer Glass Frame with impressive border */}
        <div className="relative w-full h-full rounded-[40px] glass-panel-strong p-1">
          {/* Inner Content Area */}
          <div className="relative w-full h-full rounded-[36px] overflow-hidden">
            {/* Top Navigation Bar */}
            <div className="absolute top-0 left-0 right-0 p-6 sm:p-8 z-20">
              <div className="flex items-center justify-between">
                {/* Left: Brand */}
                <div className="flex items-center gap-3">
                  <div className="text-white font-bold text-xl tracking-tight">
                    CYBER<span className="text-cyber-red">GENIUS</span>
                  </div>
                </div>

                {/* Right: Nav Links */}
                <div className="hidden sm:flex items-center gap-1">
                  <a href="#home" className="px-4 py-2 text-white text-sm font-medium hover:text-cyber-red transition-colors">
                    HOME
                  </a>
                  <a href="#about" className="px-4 py-2 text-white/80 text-sm font-medium hover:text-white transition-colors">
                    ABOUT US
                  </a>
                  <a href="#contact" className="px-4 py-2 text-white/80 text-sm font-medium hover:text-white transition-colors">
                    CONTACTS
                  </a>
                  <a href="#faq" className="px-4 py-2 text-white/80 text-sm font-medium hover:text-white transition-colors">
                    FAQ
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="relative h-full grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 sm:p-8 pt-24 sm:pt-28">
              {/* Left Side: Info Card */}
              <div className="flex flex-col justify-center">
                <div className="glass-card rounded-[32px] p-8 sm:p-10 space-y-6">
                  <div className="space-y-2">
                    <div className="inline-block px-4 py-1.5 rounded-full glass-panel text-cyber-red text-xs font-semibold tracking-wider">
                      CYBERSECURITY SOLUTIONS
                    </div>
                    <h2 className="text-white font-bold text-2xl sm:text-3xl leading-tight">
                      Advanced Protection for Your Digital Assets
                    </h2>
                  </div>

                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    Comprehensive cybersecurity services designed to protect your business from evolving threats. 
                    Our cutting-edge solutions ensure your data remains secure in an increasingly connected world.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center flex-shrink-0">
                        <Shield className="text-cyber-red" size={20} />
                      </div>
                      <span className="text-white/80 text-sm">24/7 Threat Monitoring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center flex-shrink-0">
                        <Lock className="text-cyber-red" size={20} />
                      </div>
                      <span className="text-white/80 text-sm">End-to-End Encryption</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center flex-shrink-0">
                        <Server className="text-cyber-red" size={20} />
                      </div>
                      <span className="text-white/80 text-sm">Cloud Security Infrastructure</span>
                    </div>
                  </div>

                  <button className="w-full sm:w-auto px-8 py-3.5 bg-cyber-red hover:bg-cyber-red-bright text-white rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyber-red/50">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Right Side: Large Typography */}
              <div className="flex flex-col justify-center items-start lg:items-end">
                <div className="space-y-4">
                  <h1 
                    className="text-white font-black leading-[0.85] text-glow-white"
                    style={{ fontSize: 'clamp(80px, 12vw, 180px)' }}
                  >
                    cyber
                  </h1>
                  <h1 
                    className="text-white font-black leading-[0.85] text-glow-white lg:text-right"
                    style={{ fontSize: 'clamp(80px, 12vw, 180px)' }}
                  >
                    security
                  </h1>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
                {/* Stats Cards */}
                <div className="flex flex-wrap gap-4">
                  <div className="glass-card rounded-2xl px-6 py-4 min-w-[140px]">
                    <div className="text-cyber-red font-bold text-3xl mb-1">99.9%</div>
                    <div className="text-white/60 text-xs">Uptime Guarantee</div>
                  </div>
                  <div className="glass-card rounded-2xl px-6 py-4 min-w-[140px]">
                    <div className="text-cyber-red font-bold text-3xl mb-1">500+</div>
                    <div className="text-white/60 text-xs">Protected Clients</div>
                  </div>
                  <div className="glass-card rounded-2xl px-6 py-4 min-w-[140px]">
                    <div className="text-cyber-red font-bold text-3xl mb-1">24/7</div>
                    <div className="text-white/60 text-xs">Support Available</div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-2">
                    <button className="w-2 h-2 rounded-full bg-white"></button>
                    <button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"></button>
                    <button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"></button>
                    <button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"></button>
                  </div>
                  
                  {/* Arrow Buttons */}
                  <div className="flex gap-2">
                    <button className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-all">
                      <ChevronRight className="text-white rotate-180" size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-all">
                      <ChevronRight className="text-white" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero