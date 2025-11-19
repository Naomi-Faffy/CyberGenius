import { ChevronLeft, ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        {/* Left Half - Darker with blur (GLASS BASE) */}
        <div className="w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1657622185369-a5a0190f151e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjaXJjdWl0JTIwYm9hcmQlMjByZWQlMjBwYXRod2F5cyUyMHRlY2hub2xvZ3klMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfDF8fHJlZHwxNzYzNTQ2MjAwfDA&ixlib=rb-4.1.0&q=85"
            alt="Dark circuit board with glowing red pathways by Eugene Golovesov on Unsplash"
            className="w-full h-full object-cover"
            style={{
              backgroundColor: '#f30c0c',
              filter: 'blur(8px) brightness(0.3) saturate(0.6)'
            }}
          />
          {/* Glassmorphism overlay - translucent dark with gradient */}
          <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.2) 100%)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)'
            }}
          ></div>
        </div>

        {/* Right Half - Bright and crisp (NO BLUR) */}
        <div className="w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1657622185369-a5a0190f151e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjaXJjdWl0JTIwYm9hcmQlMjByZWQlMjBwYXRod2F5cyUyMHRlY2hub2xvZ3klMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfDF8fHJlZHwxNzYzNTQ2MjAwfDA&ixlib=rb-4.1.0&q=85"
            alt="Dark circuit board with glowing red pathways by Eugene Golovesov on Unsplash"
            className="w-full h-full object-cover"
            style={{
              backgroundColor: '#f30c0c',
              filter: 'brightness(1.4) saturate(1.7) contrast(1.2)'
            }}
          />
        </div>

        {/* Glass edge highlight - center vertical glow */}
        <div 
          className="absolute top-0 bottom-0 left-1/2 w-1 -translate-x-1/2"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.15) 20%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.15) 80%, transparent 100%)',
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
            filter: 'blur(2px)'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-12 lg:px-16 py-36 pb-16">
        
        {/* Main Content Area - Centered */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-[1800px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              
              {/* Left Column - Typography */}
              <div className="flex flex-col justify-center space-y-12 pr-0 lg:pr-24">
                
                {/* Section Label */}
                <p 
                  className="text-white/80 text-sm uppercase tracking-wider"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, letterSpacing: '0.2em' }}
                >
                  AMAZING SOLUTIONS
                </p>
                
                {/* Main Headline - Split Design */}
                <div className="space-y-2">
                  {/* CYBER (textured) + SECURITY (white) */}
                  <div className="flex items-baseline flex-wrap gap-8">
                    <h1 
                      className="leading-none"
                      style={{ 
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: 'clamp(100px, 20vw, 280px)',
                        fontWeight: 700,
                        letterSpacing: '0.02em',
                        backgroundImage: 'url(https://images.unsplash.com/photo-1657622185369-a5a0190f151e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjaXJjdWl0JTIwYm9hcmQlMjByZWQlMjBwYXRod2F5cyUyMHRlY2hub2xvZ3klMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfDF8fHJlZHwxNzYzNTQ2MjAwfDA&ixlib=rb-4.1.0&q=85)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'brightness(2.2) contrast(1.6) saturate(2)'
                      }}
                    >
                      CYBER
                    </h1>
                    <h1 
                      className="text-white leading-none"
                      style={{ 
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: 'clamp(100px, 20vw, 280px)',
                        fontWeight: 700,
                        letterSpacing: '0.02em'
                      }}
                    >
                      SECURITY
                    </h1>
                  </div>
                  
                  {/* SOLUTIONS (textured, larger) */}
                  <h1 
                    className="leading-none"
                    style={{ 
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: 'clamp(110px, 22vw, 300px)',
                      fontWeight: 700,
                      letterSpacing: '0.02em',
                      backgroundImage: 'url(https://images.unsplash.com/photo-1657622185369-a5a0190f151e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjaXJjdWl0JTIwYm9hcmQlMjByZWQlMjBwYXRod2F5cyUyMHRlY2hub2xvZ3klMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfDF8fHJlZHwxNzYzNTQ2MjAwfDA&ixlib=rb-4.1.0&q=85)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'brightness(2.2) contrast(1.6) saturate(2)'
                    }}
                  >
                    SOLUTIONS
                  </h1>
                </div>

                {/* Subtext - Elegant Serif */}
                <p 
                  className="text-white/75 text-lg max-w-xl leading-relaxed italic"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 300, lineHeight: '1.8' }}
                >
                  There is a moment in the life of any aspiring organization that it is time to secure their digital future.
                </p>

                {/* CTA */}
                <a 
                  href="#services" 
                  className="text-white text-sm uppercase tracking-wider hover:text-cyber-red-neon transition-colors inline-block underline underline-offset-8 decoration-1 w-fit"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, letterSpacing: '0.15em' }}
                >
                  LEARN MORE
                </a>
              </div>

              {/* Right Column - Empty for balance */}
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full max-w-[1800px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
            
            {/* Info Card - Bottom Left (STRONG GLASSMORPHISM) */}
            <div className="glass-panel-strong rounded-3xl p-10 max-w-lg w-full lg:w-auto shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyber-red-neon rounded-full"></div>
                  <span 
                    className="text-cyber-red-neon text-xs uppercase tracking-wider"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, letterSpacing: '0.25em' }}
                  >
                    PREMIUM PROTECTION
                  </span>
                </div>
                
                <h3 
                  className="text-white font-bold text-2xl leading-tight"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  Advanced Cybersecurity Solutions
                </h3>
                
                <p 
                  className="text-white/70 text-base leading-relaxed"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Bridging communities and technology across Africa. We deliver world-class cybersecurity, governance, and digital transformation services tailored to the African business environment.
                </p>

                <button 
                  className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full border border-white/30 transition-all"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                >
                  View Details
                </button>
              </div>
            </div>

            {/* Navigation Controls - Bottom Right */}
            <div className="flex items-center gap-6">
              {/* Vertical Slider Indicator (LIGHT GLASS) */}
              <div className="flex flex-col items-center gap-4 relative">
                <div className="w-[1px] h-28 bg-gradient-to-b from-transparent via-white/30 to-transparent absolute top-0"></div>
                <button 
                  className="w-4 h-4 rotate-45 border-2 border-white/50 hover:border-white transition-all relative z-10 bg-transparent backdrop-blur-sm"
                  style={{ boxShadow: '0 0 8px rgba(255, 255, 255, 0.1)' }}
                ></button>
                <button 
                  className="w-4 h-4 rotate-45 bg-white/90 border-2 border-white relative z-10 backdrop-blur-sm"
                  style={{ boxShadow: '0 0 12px rgba(255, 255, 255, 0.3)' }}
                ></button>
                <button 
                  className="w-4 h-4 rotate-45 border-2 border-white/50 hover:border-white transition-all relative z-10 bg-transparent backdrop-blur-sm"
                  style={{ boxShadow: '0 0 8px rgba(255, 255, 255, 0.1)' }}
                ></button>
              </div>

              {/* Arrow Buttons - GLASSMORPHISM BUTTONS */}
              <div className="flex gap-3">
                <button className="w-16 h-16 rounded-lg glass-button flex items-center justify-center hover:bg-white/20 transition-all">
                  <ChevronLeft className="text-white" size={28} strokeWidth={1.5} />
                </button>
                <button className="w-16 h-16 rounded-lg glass-button-dark flex items-center justify-center hover:bg-black/60 transition-all">
                  <ChevronRight className="text-white" size={28} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Page Indicator - Right Center (LIGHT GLASS EFFECT) */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
        <div className="flex flex-col items-center gap-5">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
          <button 
            className="w-4 h-4 rotate-45 border-2 border-white/50 hover:border-white transition-all bg-transparent backdrop-blur-sm"
            style={{ boxShadow: '0 0 8px rgba(255, 255, 255, 0.1)' }}
          ></button>
          <button 
            className="w-4 h-4 rotate-45 bg-white/90 border-2 border-white backdrop-blur-sm"
            style={{ boxShadow: '0 0 12px rgba(255, 255, 255, 0.3)' }}
          ></button>
          <button 
            className="w-4 h-4 rotate-45 border-2 border-white/50 hover:border-white transition-all bg-transparent backdrop-blur-sm"
            style={{ boxShadow: '0 0 8px rgba(255, 255, 255, 0.1)' }}
          ></button>
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero