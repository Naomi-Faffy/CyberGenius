import { ChevronLeft, ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        {/* Left Half - Darker with blur */}
        <div className="w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1657622185369-a5a0190f151e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjaXJjdWl0JTIwYm9hcmQlMjByZWQlMjBwYXRod2F5cyUyMHRlY2hub2xvZ3klMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfDF8fHJlZHwxNzYzNTQ2MjAwfDA&ixlib=rb-4.1.0&q=85"
            alt="Dark circuit board with glowing red pathways by Eugene Golovesov on Unsplash"
            className="w-full h-full object-cover"
            style={{
              backgroundColor: '#f30c0c',
              filter: 'blur(4px) brightness(0.35) saturate(0.7)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Right Half - Bright and crisp */}
        <div className="w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1657622185369-a5a0190f151e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjaXJjdWl0JTIwYm9hcmQlMjByZWQlMjBwYXRod2F5cyUyMHRlY2hub2xvZ3klMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfDF8fHJlZHwxNzYzNTQ2MjAwfDA&ixlib=rb-4.1.0&q=85"
            alt="Dark circuit board with glowing red pathways by Eugene Golovesov on Unsplash"
            className="w-full h-full object-cover"
            style={{
              backgroundColor: '#f30c0c',
              filter: 'brightness(1.3) saturate(1.6) contrast(1.15)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/10"></div>
        </div>
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
            
            {/* Info Card - Bottom Left */}
            <div className="bg-black/65 backdrop-blur-xl border border-white/20 rounded-3xl p-10 max-w-lg w-full lg:w-auto">
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
              {/* Vertical Slider Indicator */}
              <div className="flex flex-col items-center gap-4 relative">
                <div className="w-[1px] h-28 bg-white/20 absolute top-0"></div>
                <button className="w-4 h-4 rotate-45 border-2 border-white/40 hover:border-white transition-all relative z-10 bg-transparent"></button>
                <button className="w-4 h-4 rotate-45 bg-white border-2 border-white relative z-10"></button>
                <button className="w-4 h-4 rotate-45 border-2 border-white/40 hover:border-white transition-all relative z-10 bg-transparent"></button>
              </div>

              {/* Arrow Buttons - Different backgrounds like reference */}
              <div className="flex gap-3">
                <button className="w-16 h-16 rounded-lg bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/25 transition-all shadow-lg">
                  <ChevronLeft className="text-white" size={28} strokeWidth={1.5} />
                </button>
                <button className="w-16 h-16 rounded-lg bg-black/50 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-black/70 transition-all shadow-lg">
                  <ChevronRight className="text-white" size={28} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Page Indicator - Right Center */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
        <div className="flex flex-col items-center gap-5">
          <div className="w-[1px] h-20 bg-white/20"></div>
          <button className="w-4 h-4 rotate-45 border-2 border-white/40 hover:border-white transition-all bg-transparent"></button>
          <button className="w-4 h-4 rotate-45 bg-white border-2 border-white"></button>
          <button className="w-4 h-4 rotate-45 border-2 border-white/40 hover:border-white transition-all bg-transparent"></button>
          <div className="w-[1px] h-20 bg-white/20"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero