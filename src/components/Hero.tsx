import { ChevronLeft, ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image - Red Circuit Board (full screen, no container) */}
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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content - Full screen layout like reference */}
      <div className="relative z-10 w-full h-screen flex flex-col justify-between p-8 lg:p-12 pt-32">
        
        {/* Main Content Area */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Column */}
              <div className="flex flex-col justify-center space-y-8">
                {/* Label like "AMAZING TRIPS" */}
                <p className="text-white/90 text-sm font-medium uppercase tracking-widest italic">
                  Cybersecurity Solutions
                </p>
                
                {/* Large Typography - Matching "AFRI CAN FOREST" style */}
                <div className="space-y-2">
                  <div className="flex items-baseline gap-4">
                    <h1 
                      className="font-black leading-none"
                      style={{ 
                        fontSize: 'clamp(70px, 15vw, 180px)',
                        backgroundImage: 'url(https://images.unsplash.com/photo-1657622185369-a5a0190f151e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjaXJjdWl0JTIwYm9hcmQlMjByZWQlMjBwYXRod2F5cyUyMHRlY2hub2xvZ3klMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfDF8fHJlZHwxNzYzNTQ2MjAwfDA&ixlib=rb-4.1.0&q=85)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'brightness(1.5) contrast(1.2)'
                      }}
                    >
                      CYBER
                    </h1>
                    <h1 
                      className="text-white font-black leading-none"
                      style={{ fontSize: 'clamp(70px, 15vw, 180px)' }}
                    >
                      SECURITY
                    </h1>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-white/80 text-sm italic max-w-lg leading-relaxed">
                  There is a moment in the life of any aspiring organization that it is time 
                  to secure their digital future.
                </p>

                <a href="#services" className="text-white text-sm font-medium uppercase tracking-wider hover:text-cyber-red transition-colors inline-flex items-center gap-2 w-fit">
                  Learn More
                </a>
              </div>

              {/* Right Column - Empty for balance like reference */}
              <div></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between">
            
            {/* Bottom Left - Info Card like tour card */}
            <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyber-red rounded-full"></div>
                  <span className="text-cyber-red text-xs font-bold uppercase tracking-wider">
                    Premium Protection
                  </span>
                </div>
                
                <h3 className="text-white font-bold text-xl">
                  Advanced Cybersecurity Solutions
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed">
                  Bridging communities and technology across Africa. We deliver world-class 
                  cybersecurity, governance, and digital transformation services tailored to 
                  the African business environment.
                </p>

                <button className="mt-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-full border border-white/20 transition-all">
                  View Details
                </button>
              </div>
            </div>

            {/* Bottom Right - Navigation Controls */}
            <div className="flex items-center gap-4">
              {/* Vertical dots */}
              <div className="flex flex-col gap-3">
                <button className="w-3 h-3 rounded-full bg-white"></button>
                <button className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 transition-all"></button>
                <button className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 transition-all"></button>
                <button className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 transition-all"></button>
              </div>

              {/* Arrow buttons */}
              <div className="flex gap-2">
                <button className="w-14 h-14 rounded-sm bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                  <ChevronLeft className="text-white" size={24} />
                </button>
                <button className="w-14 h-14 rounded-sm bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                  <ChevronRight className="text-white" size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero