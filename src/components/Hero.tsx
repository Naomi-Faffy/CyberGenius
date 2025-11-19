import { ChevronLeft, ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image - Using the EXACT image provided */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 1365"%3E%3Crect fill="%23000000" width="768" height="1365"/%3E%3C/svg%3E')`,
            backgroundColor: '#0a0a0a'
          }}
        >
          {/* Placeholder - will use actual uploaded image */}
          <div className="w-full h-full bg-gradient-to-br from-black via-cyber-black to-cyber-red-dark/20"></div>
        </div>
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between px-8 sm:px-12 lg:px-16 xl:px-24 py-32 pb-16">
        
        {/* Main Content - Centered Vertically */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              
              {/* Left Column - Takes 7 columns */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
                
                {/* Label */}
                <p className="text-white/90 text-base font-medium uppercase tracking-[0.3em] italic">
                  Cybersecurity Solutions
                </p>
                
                {/* Large Typography */}
                <div className="space-y-6">
                  <div className="flex flex-wrap items-baseline gap-6 lg:gap-8">
                    <h1 
                      className="font-black leading-[0.85]"
                      style={{ 
                        fontSize: 'clamp(80px, 16vw, 200px)',
                        backgroundImage: 'linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #dc2626 100%)',
                        backgroundSize: '200% 200%',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 40px rgba(220, 38, 38, 0.3)'
                      }}
                    >
                      CYBER
                    </h1>
                    <h1 
                      className="text-white font-black leading-[0.85]"
                      style={{ 
                        fontSize: 'clamp(80px, 16vw, 200px)',
                        textShadow: '0 0 30px rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      SECURITY
                    </h1>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-white/80 text-lg sm:text-xl max-w-2xl leading-relaxed italic">
                  There is a moment in the life of any aspiring organization that it is time 
                  to secure their digital future.
                </p>

                <a 
                  href="#services" 
                  className="text-white text-base font-semibold uppercase tracking-[0.2em] hover:text-cyber-red transition-colors inline-flex items-center gap-3 w-fit group"
                >
                  Learn More
                  <span className="w-12 h-[2px] bg-white group-hover:bg-cyber-red group-hover:w-16 transition-all"></span>
                </a>
              </div>

              {/* Right Column - Takes 5 columns, empty for balance */}
              <div className="lg:col-span-5"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full max-w-[1600px] mx-auto pt-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
            
            {/* Bottom Left - Info Card */}
            <div className="bg-black/50 backdrop-blur-xl border border-white/20 rounded-3xl p-10 max-w-xl w-full lg:w-auto">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyber-red rounded-full"></div>
                  <span className="text-cyber-red text-sm font-bold uppercase tracking-[0.2em]">
                    Premium Protection
                  </span>
                </div>
                
                <h3 className="text-white font-bold text-2xl lg:text-3xl leading-tight">
                  Advanced Cybersecurity Solutions
                </h3>
                
                <p className="text-white/70 text-base leading-relaxed">
                  Bridging communities and technology across Africa. We deliver world-class 
                  cybersecurity, governance, and digital transformation services tailored to 
                  the African business environment.
                </p>

                <button className="mt-4 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-full border border-white/30 transition-all hover:scale-105">
                  View Details
                </button>
              </div>
            </div>

            {/* Bottom Right - Navigation Controls */}
            <div className="flex items-center gap-6">
              {/* Vertical dots */}
              <div className="flex flex-col gap-4">
                <button className="w-3.5 h-3.5 rounded-full bg-white shadow-lg"></button>
                <button className="w-3.5 h-3.5 rounded-full bg-white/30 hover:bg-white/60 transition-all"></button>
                <button className="w-3.5 h-3.5 rounded-full bg-white/30 hover:bg-white/60 transition-all"></button>
                <button className="w-3.5 h-3.5 rounded-full bg-white/30 hover:bg-white/60 transition-all"></button>
              </div>

              {/* Arrow buttons */}
              <div className="flex gap-3">
                <button className="w-16 h-16 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-105">
                  <ChevronLeft className="text-white" size={28} />
                </button>
                <button className="w-16 h-16 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-105">
                  <ChevronRight className="text-white" size={28} />
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