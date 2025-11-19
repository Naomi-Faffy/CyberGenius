import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center p-6 sm:p-8 lg:p-12">
      {/* Background Image - Red Circuit Board */}
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
        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Main Container - Following the reference design exactly */}
      <div className="relative z-10 w-full max-w-[1400px] h-[85vh] min-h-[700px]">
        {/* White bordered container like reference */}
        <div className="relative w-full h-full rounded-[40px] border-[3px] border-white/40 overflow-hidden bg-black/20 backdrop-blur-sm">
          
          {/* Content Grid */}
          <div className="relative h-full grid grid-cols-1 lg:grid-cols-2 p-8 lg:p-12">
            
            {/* Left Column - Like "AFRICAN FOREST" */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <p className="text-white/90 text-sm font-medium uppercase tracking-widest mb-6">
                  Cybersecurity Excellence
                </p>
                
                {/* Large Typography - Split like "AFRI CAN FOREST" */}
                <h1 
                  className="font-black leading-[0.9] mb-2"
                  style={{ 
                    fontSize: 'clamp(60px, 12vw, 140px)',
                    color: 'rgba(255, 255, 255, 0.15)',
                    WebkitTextStroke: '2px rgba(255, 255, 255, 0.8)'
                  }}
                >
                  CYBER
                </h1>
                <h1 
                  className="text-white font-black leading-[0.9]"
                  style={{ fontSize: 'clamp(60px, 12vw, 140px)' }}
                >
                  SECURITY
                </h1>
              </div>

              {/* Quote text like reference */}
              <p className="text-white/80 text-sm italic max-w-md leading-relaxed">
                There is a moment in the life of any aspiring organization that it is time 
                to secure their digital future.
              </p>

              <button className="inline-flex items-center text-white text-sm font-medium uppercase tracking-wider hover:text-cyber-red transition-colors w-fit">
                Learn More
                <ArrowRight className="ml-2" size={16} />
              </button>
            </div>

            {/* Right Column - Info Card like reference tour card */}
            <div className="flex flex-col justify-end lg:justify-center lg:items-end">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md">
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
            </div>
          </div>

          {/* Navigation Controls - Right side like reference */}
          <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 flex items-center gap-4">
            {/* Vertical dots */}
            <div className="flex flex-col gap-3">
              <button className="w-3 h-3 rounded-full bg-white"></button>
              <button className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 transition-all"></button>
              <button className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 transition-all"></button>
              <button className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 transition-all"></button>
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-sm bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                <ChevronLeft className="text-white" size={20} />
              </button>
              <button className="w-12 h-12 rounded-sm bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                <ChevronRight className="text-white" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero