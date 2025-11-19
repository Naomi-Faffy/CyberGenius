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
              filter: 'blur(3px) brightness(0.4) saturate(0.8)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>

        {/* Right Half - Bright and crisp */}
        <div className="w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1657622185369-a5a0190f151e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjaXJjdWl0JTIwYm9hcmQlMjByZWQlMjBwYXRod2F5cyUyMHRlY2hub2xvZ3klMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfDF8fHJlZHwxNzYzNTQ2MjAwfDA&ixlib=rb-4.1.0&q=85"
            alt="Dark circuit board with glowing red pathways by Eugene Golovesov on Unsplash"
            className="w-full h-full object-cover"
            style={{
              backgroundColor: '#f30c0c',
              filter: 'brightness(1.2) saturate(1.5) contrast(1.1)'
            }}
          />
        </div>

        {/* Soft blend overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-12 py-32 pb-12">
        
        {/* Main Content Area - Centered */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-[1800px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Left Column - Typography */}
              <div className="flex flex-col justify-center space-y-10 pr-0 lg:pr-20">
                
                {/* Upper Label */}
                <p className="text-white text-sm font-light uppercase tracking-[0.3em]">
                  AMAZING SOLUTIONS
                </p>
                
                {/* Main Headline - Split Design */}
                <div className="space-y-4">
                  {/* First Line: CYBER (textured) + SECURITY (white) */}
                  <div className="flex items-baseline flex-wrap gap-6">
                    <h1 
                      className="font-black leading-none relative"
                      style={{ 
                        fontSize: 'clamp(90px, 18vw, 240px)',
                        backgroundImage: 'url(https://images.unsplash.com/photo-1657622185369-a5a0190f151e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjaXJjdWl0JTIwYm9hcmQlMjByZWQlMjBwYXRod2F5cyUyMHRlY2hub2xvZ3klMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfDF8fHJlZHwxNzYzNTQ2MjAwfDA&ixlib=rb-4.1.0&q=85)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'brightness(2) contrast(1.5) saturate(1.8)'
                      }}
                    >
                      CYBER
                    </h1>
                  </div>
                  
                  {/* Second Line: SECURITY (textured, larger) */}
                  <h1 
                    className="font-black leading-none"
                    style={{ 
                      fontSize: 'clamp(100px, 20vw, 260px)',
                      backgroundImage: 'url(https://images.unsplash.com/photo-1657622185369-a5a0190f151e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjaXJjdWl0JTIwYm9hcmQlMjByZWQlMjBwYXRod2F5cyUyMHRlY2hub2xvZ3klMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfDF8fHJlZHwxNzYzNTQ2MjAwfDA&ixlib=rb-4.1.0&q=85)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'brightness(2) contrast(1.5) saturate(1.8)'
                    }}
                  >
                    SOLUTIONS
                  </h1>
                </div>

                {/* Subtext */}
                <p className="text-white/70 text-lg max-w-xl leading-relaxed italic font-serif">
                  There is a moment in the life of any aspiring organization that it is time to secure their digital future.
                </p>

                {/* CTA */}
                <a 
                  href="#services" 
                  className="text-white text-sm font-medium uppercase tracking-[0.25em] hover:text-cyber-red transition-colors inline-block underline underline-offset-4 w-fit"
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
          <div className="flex items-end justify-between gap-8">
            
            {/* Info Card - Bottom Left */}
            <div className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-3xl p-10 max-w-lg">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyber-red rounded-full"></div>
                  <span className="text-cyber-red text-xs font-bold uppercase tracking-[0.25em]">
                    PREMIUM PROTECTION
                  </span>
                </div>
                
                <h3 className="text-white font-bold text-2xl leading-tight">
                  Advanced Cybersecurity Solutions
                </h3>
                
                <p className="text-white/70 text-base leading-relaxed">
                  Bridging communities and technology across Africa. We deliver world-class cybersecurity, governance, and digital transformation services tailored to the African business environment.
                </p>

                <button className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-full border border-white/30 transition-all">
                  View Details
                </button>
              </div>
            </div>

            {/* Navigation Controls - Bottom Right */}
            <div className="flex items-center gap-6">
              {/* Vertical Slider Indicator */}
              <div className="flex flex-col items-center gap-3 relative">
                <div className="w-[1px] h-24 bg-white/20 absolute top-0"></div>
                <button className="w-4 h-4 rotate-45 border-2 border-white/40 hover:border-white transition-all relative z-10"></button>
                <button className="w-4 h-4 rotate-45 bg-white border-2 border-white relative z-10"></button>
                <button className="w-4 h-4 rotate-45 border-2 border-white/40 hover:border-white transition-all relative z-10"></button>
              </div>

              {/* Arrow Buttons */}
              <div className="flex gap-3">
                <button className="w-16 h-16 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all">
                  <ChevronLeft className="text-white" size={28} />
                </button>
                <button className="w-16 h-16 rounded-lg bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-black/60 transition-all">
                  <ChevronRight className="text-white" size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Page Indicator - Right Center */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
        <div className="flex flex-col items-center gap-4">
          <div className="w-[2px] h-16 bg-white/20"></div>
          <button className="w-4 h-4 rotate-45 border-2 border-white/40 hover:border-white transition-all"></button>
          <button className="w-4 h-4 rotate-45 bg-white border-2 border-white"></button>
          <button className="w-4 h-4 rotate-45 border-2 border-white/40 hover:border-white transition-all"></button>
          <div className="w-[2px] h-16 bg-white/20"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero